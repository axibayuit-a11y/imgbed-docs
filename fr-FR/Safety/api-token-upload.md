# Téléversement de fichiers avec API Token

Le téléversement avec API Token est destiné aux scripts, tâches automatisées et programmes tiers. Vous n’avez pas besoin d’ouvrir l’interface web : indiquez l’URL du site, le token, le chemin du fichier local et un vrai canal de téléversement, puis ImgBed renverra l’URL du fichier après l’envoi.

![Modifier l’API Token](../../image/Safety/apitoken/编辑api token.png)

## Préparation

Dans le panneau d’administration, ouvrez :

```text
System Settings -> Security Settings -> API Token
```

Lors de la création ou de la modification du token, vérifiez qu’il dispose du droit de téléverser et qu’un vrai canal de téléversement par défaut est sélectionné. Les téléversements via API Token n’utilisent pas l’entrée de répartition intelligente ; les scripts doivent eux aussi transmettre un canal réel.

## Télécharger les scripts de téléversement

La documentation fournit deux scripts Node.js :

| Script | Utilisation |
| --- | --- |
| <a href="/tools/imgbed-token-single-upload.mjs" download>Télécharger le script de téléversement en une seule requête</a> | Appelle `/upload` une seule fois. Adapté aux petits fichiers et aux tests de connectivité. |
| <a href="/tools/imgbed-token-chunk-upload.mjs" download>Télécharger le script de téléversement par morceaux</a> | Utilise les flux par morceaux, directs ou avec session de plateforme via API Token. Recommandé pour les gros fichiers. |

Node.js 18 ou plus récent est nécessaire.

## Lister les canaux disponibles

Les deux scripts peuvent lister les canaux disponibles pour l’API Token courant :

```powershell
node imgbed-token-single-upload.mjs --base-url "https://your-domain" --token "your API Token" --list-channels
node imgbed-token-chunk-upload.mjs --base-url "https://your-domain" --token "your API Token" --list-channels
```

Pour lister les canaux, `--file` et `--channel` ne sont pas nécessaires. La réponse contient le canal par défaut, les clés de canaux, les noms de sous-canaux et l’état de l’équilibrage de charge. Les clés secrètes, jetons d’actualisation et autres informations sensibles ne sont pas renvoyés.

## Choisir le mode de téléversement

| Mode | Cas d’usage | Description |
| --- | --- | --- |
| Une seule requête | Petits fichiers, scripts simples, tests d’API | Envoie tout le fichier à `/upload` en une seule requête. |
| Téléversement par morceaux | Gros fichiers ou fichiers sujets aux dépassements de délai | Le script utilise le flux par morceaux, direct ou avec session selon le canal. |

Pour les gros fichiers, utilisez d’abord le script de téléversement par morceaux. Le téléversement en une seule requête dépend des limites de taille de Cloudflare, de la mémoire du Worker et des limites propres à chaque plateforme.

## Téléversement en une seule requête

Le script en une seule requête appelle `/upload` une seule fois.

```powershell
node imgbed-token-single-upload.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --file "D:\test\image.png" `
  --channel s3 `
  --folder "photos/2026"
```

Vous pouvez aussi placer le token dans une variable d’environnement :

```powershell
$env:IMGBED_API_TOKEN="your API Token"
node imgbed-token-single-upload.mjs --base-url "https://your-domain" --file "D:\test\image.png" --channel s3
```

### Paramètres du téléversement en une seule requête

| Paramètre | Obligatoire | Description |
| --- | --- | --- |
| `--base-url <url>` | Oui | URL du site ImgBed, par exemple `https://image.ai6.me`. |
| `--token <token>` | Oui | API Token. Vous pouvez aussi utiliser la variable `IMGBED_API_TOKEN`. |
| `--file <path>` | Oui | Chemin du fichier local. |
| `--channel <key>` | Oui | Canal de téléversement. |
| `--folder <path>` | Non | Dossier de destination, par exemple `photos/2026` ou `/user/`. |
| `--name-type <type>` | Non | Mode de nommage, correspondant à `uploadNameType` côté serveur. Valeur par défaut : `default`. |
| `--channel-name <name>` | Non | Sélectionne un sous-canal ou un compte précis. Si omis, le serveur suit la configuration du canal. |
| `--retries <n>` | Non | Nombre de tentatives en cas d’échec temporaire. Valeur par défaut : `3`. |
| `--timeout-ms <n>` | Non | Délai maximal de la requête. Valeur par défaut : `180000`. |
| `--output <pretty\|json>` | Non | Format de sortie. Valeur par défaut : `pretty`. |
| `--save-response <path>` | Non | Enregistre la réponse finale dans un fichier JSON. |
| `--list-channels` | Non | Liste les canaux disponibles pour ce token puis quitte sans téléverser. |

### Canaux en une seule requête

| Clé | Canal |
| --- | --- |
| `telegram` / `tg` | Telegram |
| `discord` / `dc` | Discord |
| `cfr2` / `r2` | Cloudflare R2 |
| `s3` | S3 |
| `webdav` / `wd` | Canal de stockage WebDAV |
| `github` / `gh` | GitHub Releases |
| `gitlab` / `gl` | GitLab Packages |
| `huggingface` / `hf` | Hugging Face |
| `onedrive` / `od` | OneDrive |
| `googledrive` / `google` / `gd` | Google Drive |
| `dropbox` / `db` | Dropbox |
| `yandex` / `yx` | Yandex Disk |
| `pcloud` / `pd` | pCloud |

### Limites de taille en une seule requête

Pour ce mode, gardez si possible les fichiers sous 100 MB.

Les canaux suivants ont un seuil explicite de blocage pour `/upload` en une seule requête :

| Canal | Limite |
| --- | ---: |
| Telegram | 20 MiB |
| Discord | 10 MiB |
| S3 | 64 MiB |
| WebDAV | 64 MiB |
| GitHub Releases | 64 MiB |
| GitLab Packages | 64 MiB |

Si la limite est dépassée, le script affiche l’erreur correspondante localement. Pour les autres canaux, le script ne force pas une limite locale fixe de 100 MB. Si le corps de la requête dépasse les capacités de Cloudflare ou de la plateforme distante, l’erreur viendra de Cloudflare ou du service distant.

## Téléversement par morceaux

Le script par morceaux demande d’abord au serveur de résoudre la cible du fichier, puis suit le flux gros fichier adapté au canal choisi. Vous n’avez pas à écrire vous-même les requêtes de session, fusion et finalisation.

```powershell
node imgbed-token-chunk-upload.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --file "D:\test\video.zip" `
  --channel github `
  --folder "photos/2026" `
  --concurrency 3
```

### Paramètres du téléversement par morceaux

| Paramètre | Obligatoire | Description |
| --- | --- | --- |
| `--base-url <url>` | Oui | URL du site ImgBed. |
| `--token <token>` | Oui | API Token. Vous pouvez aussi utiliser `IMGBED_API_TOKEN`. |
| `--file <path>` | Oui | Chemin du fichier local. |
| `--channel <key>` | Oui | Canal de téléversement. |
| `--folder <path>` | Non | Dossier de destination. |
| `--name-type <type>` | Non | Mode de nommage, correspondant à `uploadNameType`. Valeur par défaut : `default`. |
| `--channel-name <name>` | Non | Sélectionne un sous-canal ou un compte précis. Si omis, le serveur suit la configuration du canal. |
| `--concurrency <n>` | Non | Nombre de téléversements simultanés. Valeur par défaut : `1`, maximum `3`. |
| `--retries <n>` | Non | Nombre de tentatives en cas d’échec temporaire. Valeur par défaut : `3`. |
| `--timeout-ms <n>` | Non | Délai maximal par requête. Valeur par défaut : `180000`. |
| `--output <pretty\|json>` | Non | Format de sortie. Valeur par défaut : `pretty`. |
| `--save-response <path>` | Non | Enregistre la réponse finale dans un fichier JSON. |
| `--list-channels` | Non | Liste les canaux disponibles pour ce token puis quitte sans téléverser. |

### Canaux en téléversement par morceaux

| Clé | Flux de téléversement |
| --- | --- |
| `telegram` / `tg` | Session réelle par morceaux sur `/upload` |
| `discord` / `dc` | Session réelle par morceaux sur `/upload` |
| `cfr2` / `r2` | Session réelle par morceaux sur `/upload` |
| `github` / `gh` | Session réelle par morceaux sur `/upload` |
| `gitlab` / `gl` | Session réelle par morceaux sur `/upload` |
| `webdav` / `wd` | Session réelle par morceaux sur `/upload` |
| `s3` | Téléversement multipart S3 |
| `onedrive` / `od` | Session de téléversement OneDrive |
| `googledrive` / `google` / `gd` | Téléversement repractiver Google Drive |
| `dropbox` / `db` | Session de téléversement Dropbox |
| `yandex` / `yx` | URL de téléversement direct Yandex |
| `pcloud` / `pd` | Lien de téléversement pCloud |
| `huggingface` / `hf` | Téléversement Hugging Face LFS |

Les tests avec des archives sur Yandex se sont montrés instables. Les fichiers non compressés ont été vérifiés avec succès.

## Résultat du téléversement

Après un téléversement réussi, le script affiche :

```text
success
src: /file/photos/2026/example.png
url: https://your-domain/file/photos/2026/example.png
fileId: photos/2026/example.png
```

| Champ | Description |
| --- | --- |
| `src` | Chemin interne du fichier sur le site. |
| `url` | URL complète, prête à être enregistrée dans vos scripts ou bases de données. |
| `fileId` | ID du fichier, utile pour les recherches, la gestion ou les journaux. |
| `channelName` | Le script par morceaux peut renvoyer le sous-canal ou compte réellement utilisé. |

Avec `--output json`, le script affiche le JSON complet pour traitement automatique.

## Appeler directement l’API en une seule requête

Sans script, vous pouvez appeler directement le point d’entrée de téléversement en une seule requête :

```text
POST https://your-domain/upload?uploadChannel=s3&uploadFolder=photos/2026&uploadNameType=default
Authorization: Bearer your API Token
Content-Type: multipart/form-data
```

Champ de formulaire :

| Champ | Obligatoire | Description |
| --- | --- | --- |
| `file` | Oui | Fichier à téléverser. |

Paramètres de requête :

| Paramètre | Obligatoire | Description |
| --- | --- | --- |
| `uploadChannel` | Oui | Canal de téléversement réel. |
| `uploadFolder` | Non | Dossier de destination. |
| `uploadNameType` | Non | Mode de nommage. |
| `channelName` | Non | Sous-canal ou compte précis. |

Exemple de réponse réussie :

```json
{
  "success": true,
  "src": "/file/photos/2026/example.png",
  "url": "https://your-domain/file/photos/2026/example.png",
  "fileId": "photos/2026/example.png"
}
```

## Questions fréquentes

### Le téléversement d’un gros fichier échoue en une seule requête

`/upload` en une seule requête envoie le fichier complet d’un coup. Les gros fichiers peuvent être bloqués par Cloudflare ou par la plateforme distante. Utilisez le script par morceaux pour les gros fichiers.

### `--channel-name` est défini, mais le téléversement échoue

Vérifiez dans le panneau que ce canal contient bien un sous-canal avec ce nom et qu’il est activé. Si `--channel-name` est omis, le serveur choisit un compte disponible selon la configuration du canal.

### Je veux utiliser le résultat dans un autre programme

Utilisez `--output json` ou ajoutez `--save-response result.json`. Votre programme peut lire le champ `url` pour obtenir le lien complet.

### Yandex ne téléverse pas les archives

Yandex ne prend pas en charge les formats d’archive. Cela peut venir de sa politique de plateforme. Avec Yandex, utilisez de préférence des fichiers non compressés.


