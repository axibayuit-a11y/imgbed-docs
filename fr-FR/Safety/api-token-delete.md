# Suppression de fichiers avec API Token

La suppression de fichiers avec API Token est destinée aux scripts, tâches automatisées et programmes tiers. Vous n’avez pas besoin d’ouvrir le panneau d’administration : l’URL du site, l’API Token et les identifiants de fichiers précis suffisent pour supprimer un ou plusieurs fichiers dans ImgBed.

La suppression est une opération d’écriture. Une fois la commande exécutée, les données sont réellement supprimées. Il est recommandé d’utiliser d’abord `imgbed-token-list.mjs` pour vérifier les valeurs `fileId` à supprimer, puis de transmettre ces identifiants au script de suppression.

![Modifier l’API Token](../../image/Safety/apitoken/编辑api%20token.png)

## Préparation

Dans le panneau d’administration, ouvrez :

```text
System Settings -> Security Settings -> API Token
```

Lors de la création ou de la modification de l’API Token, vérifiez qu’il dispose du droit de suppression. Ce script n’a besoin que du droit `delete`.

Vous pouvez aussi placer le token dans une variable d’environnement :

```powershell
$env:IMGBED_API_TOKEN="your API Token"
```

## Télécharger le script

| Script | Utilisation |
| --- | --- |
| <a href="/tools/imgbed-token-delete.mjs" download>Télécharger le script de suppression de fichiers</a> | Supprime un ou plusieurs identifiants de fichiers indiqués explicitement |

Node.js 18 ou plus récent est nécessaire.

## Comportement de l’API de suppression

Le script de suppression appelle l’interface de suppression du serveur :

```text
POST /api/manage/delete/batch
```

La requête doit contenir l’API Token :

```text
Authorization: Bearer <token>
```

Exemple de corps de requête :

```json
{
  "fileIds": ["photos/2026/a.txt"],
  "deleteStrictness": "strict"
}
```

Si `fileIds` contient un seul fichier, il s’agit d’une suppression de fichier unique. S’il contient plusieurs fichiers, il s’agit d’une suppression par lot. Le serveur traite au maximum 15 fichiers par requête, et le script découpe automatiquement le travail en plusieurs requêtes selon `--batch-size`.

L’interface renvoie un flux de progression NDJSON. Les événements courants incluent `batch_start`, `file_step`, `file_done`, `batch_complete` et `batch_error`. Le script lit ces événements et les résume sous forme lisible ou en JSON.

Après une suppression réussie, le serveur met automatiquement à jour les index de fichiers, les statistiques de dossiers, les statistiques de capacité et le nettoyage de la mémoire intermédiaire.

## Paramètres du script de suppression

| Paramètre | Obligatoire | Description |
| --- | --- | --- |
| `--base-url <url>` | Oui | URL du site ImgBed, par exemple `https://image.ai6.me` |
| `--token <token>` | Oui | API Token. Vous pouvez aussi utiliser la variable d’environnement `IMGBED_API_TOKEN` |
| `--file-id <id>` | Oui | Identifiant du fichier à supprimer. Peut être indiqué plusieurs fois |
| `--strictness <strict\|soft>` | Non | Niveau d’exigence de la suppression. Valeur par défaut : `strict` |
| `--batch-size <n>` | Non | Nombre de fichiers supprimés par requête. Valeur par défaut : `15`, maximum `15` |
| `--retries <n>` | Non | Nombre de tentatives en cas d’échec temporaire. Valeur par défaut : `3` |
| `--timeout-ms <n>` | Non | Délai maximal d’une requête. Valeur par défaut : `180000` |
| `--output <pretty\|json>` | Non | Format de sortie. Valeur par défaut : `pretty` |
| `--save-response <path>` | Non | Enregistre le résultat final dans un fichier JSON |
| `-h` / `--help` | Non | Affiche l’aide du script |

Ce script supprime uniquement les valeurs `--file-id` transmises explicitement. Il ne fait pas de correspondance approximative, ne vide pas un dossier en bloc et ne lit pas les identifiants à supprimer depuis une liste séparée par des virgules ou depuis un fichier local.

## Suppression stricte et suppression souple

| Mode | Description |
| --- | --- |
| `strict` | Mode par défaut. Si la suppression échoue sur le stockage distant, l’enregistrement ImgBed est conservé pour permettre une nouvelle tentative ou une vérification |
| `soft` | Si la suppression échoue sur le stockage distant, l’enregistrement ImgBed est tout de même nettoyé et le résultat contient un avertissement |

Si le fichier distant doit absolument être supprimé pour que l’opération soit considérée comme réussie, utilisez le mode par défaut `strict`. Si une plateforme distante ne permet plus la suppression et que vous voulez seulement nettoyer l’enregistrement ImgBed, utilisez `soft`.

## Exemples d’utilisation

Supprimer un fichier :

```powershell
node imgbed-token-delete.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --file-id "photos/2026/a.txt"
```

Utiliser le token depuis la variable d’environnement :

```powershell
$env:IMGBED_API_TOKEN="your API Token"

node imgbed-token-delete.mjs `
  --base-url "https://your-domain" `
  --file-id "photos/2026/a.txt"
```

Supprimer plusieurs fichiers :

```powershell
node imgbed-token-delete.mjs `
  --base-url "https://your-domain" `
  --file-id "photos/2026/a.txt" `
  --file-id "photos/2026/b.txt" `
  --file-id "photos/2026/c.txt"
```

Nettoyer l’enregistrement ImgBed même si la suppression échoue sur le stockage distant :

```powershell
node imgbed-token-delete.mjs `
  --base-url "https://your-domain" `
  --file-id "photos/2026/a.txt" `
  --strictness soft
```

Produire du JSON et enregistrer le résultat :

```powershell
node imgbed-token-delete.mjs `
  --base-url "https://your-domain" `
  --file-id "photos/2026/a.txt" `
  --output json `
  --save-response ".\delete-result.json"
```

Limiter chaque requête à 5 fichiers :

```powershell
node imgbed-token-delete.mjs `
  --base-url "https://your-domain" `
  --file-id "photos/2026/a.txt" `
  --file-id "photos/2026/b.txt" `
  --batch-size 5
```

## Vérifier `fileId` avant la suppression

Le script de suppression a besoin de l’identifiant de fichier ImgBed. Vous pouvez d’abord utiliser le script de liste pour afficher les fichiers d’un dossier :

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --dir "photos/2026" `
  --count 10 `
  --output json
```

Le champ `name` du résultat est généralement le `fileId` que vous pouvez transmettre au script de suppression.

## Questions fréquentes

### Pourquoi la suppression a-t-elle échoué alors que le fichier est encore dans la liste ?

Avec le mode par défaut `strict`, l’enregistrement ImgBed est conservé si la suppression échoue sur le stockage distant. Cela évite de supprimer uniquement l’index local alors que le fichier distant existe toujours. Après avoir confirmé que vous voulez seulement nettoyer l’enregistrement ImgBed, réessayez le même `fileId` avec `soft`.

### Pourquoi le résultat contient-il des avertissements ?

Les avertissements indiquent généralement un problème non bloquant pendant la suppression sur le stockage distant, le nettoyage de la mémoire intermédiaire ou la finalisation des statistiques. Le script les regroupe pour vous aider à décider si une nouvelle tentative est nécessaire.

### Peut-on supprimer tout un dossier en une seule fois ?

Ce script ne propose pas d’opération pour vider un dossier entier. Utilisez d’abord le script de liste pour filtrer des valeurs `fileId` précises, puis transmettez les fichiers à supprimer un par un au script de suppression.


