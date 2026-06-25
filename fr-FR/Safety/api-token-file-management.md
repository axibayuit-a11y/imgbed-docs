# Gestion des fichiers avec API Token

La gestion des fichiers avec API Token est destinée aux scripts, aux tâches d’automatisation et aux panneaux de gestion tiers. Elle utilise le droit `manage` pour modifier les informations des fichiers, déplacer des fichiers, les renommer, créer des fichiers d’espace réservé pour les répertoires, ajuster les tags et l’état de liste des fichiers, désactiver ou rétablir une IP de téléversement, ainsi que créer ou supprimer des Tokens de téléversement à courte durée de vie sans ouvrir le panneau d’administration.

Ce script ne traite que les actions de gestion légères liées à la gestion des fichiers et des utilisateurs. Le téléversement, la liste, la suppression, les paramètres de téléversement, les paramètres du site et les relations fédérées continuent d’utiliser leurs scripts dédiés.

![Modifier l’API Token](../../image/Safety/apitoken/编辑管理权限api.png)

## Préparation

Après avoir ouvert le panneau d’administration, allez dans :

Paramètres système -> Paramètres de sécurité -> API Token

Lors de la création ou de la modification d’un API Token, vérifiez que ce Token autorise la gestion. Le droit `manage` peut modifier l’état des fichiers, l’état de téléversement des utilisateurs et créer des Tokens de téléversement à courte durée de vie. Il doit donc être réservé aux scripts ou aux utilisateurs de confiance.

Les opérations d’écriture du script de gestion des fichiers sont en mode aperçu par défaut et ne sont pas réellement enregistrées. Après avoir vérifié que l’aperçu est correct, ajoutez `--apply` pour exécuter l’écriture.

Vous pouvez aussi placer le Token dans une variable d’environnement :

```powershell
$env:IMGBED_API_TOKEN="your API Token"
```

## Télécharger le script

| Script | Usage |
| --- | --- |
| <a href="/tools/imgbed-token-manage.mjs" download>Télécharger le script de gestion des fichiers</a> | Métadonnées de fichier, labels de modération, tags de fichier, état de liste, déplacement, renommage, création de dossier, blocage/rétablissement d’IP, création et suppression de Tokens de téléversement à courte durée de vie |

Node.js 18 ou une version ultérieure doit être installé localement pour exécuter le script.

## Périmètre fonctionnel

| Capacité | Script | Droit |
| --- | --- | --- |
| Téléverser des fichiers | `imgbed-token-single-upload.mjs` / `imgbed-token-chunk-upload.mjs` | `upload` |
| Lister des fichiers, filtrer des fichiers, lire les statistiques utilisateur | `imgbed-token-list.mjs` | `list` |
| Supprimer des fichiers explicitement désignés | `imgbed-token-delete.mjs` | `delete` |
| Modifier les informations, tags, listes, déplacer, renommer, créer des dossiers, bloquer des IP, créer ou supprimer des Tokens de téléversement à courte durée de vie | `imgbed-token-manage.mjs` | `manage` |
| Modifier les canaux de téléversement, les paramètres de sécurité, les paramètres de page, les autres paramètres et les relations fédérées | Scripts de gestion de configuration | `manage` |

`imgbed-token-manage.mjs` ne téléverse pas, ne liste pas et ne supprime pas de fichiers. Pour trouver un `fileId`, filtrez d’abord les fichiers avec le script de liste. Pour supprimer un fichier, transmettez ensuite le `fileId` explicite au script de suppression.

## Paramètres communs

| Paramètre | Obligatoire | Description |
| --- | --- | --- |
| `--base-url <url>` | Oui | URL du site ImgBed, par exemple `https://image.ai6.me` |
| `--token <token>` | Oui | API Token. Vous pouvez aussi utiliser la variable d’environnement `IMGBED_API_TOKEN` |
| `--retries <n>` | Non | Nombre de nouvelles tentatives en cas d’échec temporaire. Valeur par défaut : `3` |
| `--timeout-ms <n>` | Non | Délai d’expiration d’une requête. Valeur par défaut : `180000` |
| `--output <pretty\|json>` | Non | Format de sortie. Valeur par défaut : `pretty`; utilisez `json` pour les appels programmatiques |
| `--save-response <path>` | Non | Enregistre le résultat final dans un fichier JSON |
| `--batch-size <n>` | Non | Nombre d’éléments traités par requête pour les actions par lots. Valeur par défaut : `15`, maximum `15` |
| `--apply` | Non | Exécute réellement les écritures. Sans cette option, les actions ne font qu’un aperçu |
| `-h` / `--help` | Non | Affiche l’aide du script |

## Confirmer d’abord fileId

La plupart des actions du script de gestion des fichiers nécessitent un `fileId`. Vous pouvez le rechercher d’abord avec le script de liste :

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --dir "test4" `
  --count 10 `
  --output json
```

Le champ `name` du résultat retourné est généralement le `fileId` à transmettre au script de gestion des fichiers.

## Métadonnées de fichier

Les métadonnées de fichier servent à modifier le nom affiché et la source de lecture dans la gestion des fichiers du panneau d’administration.

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-metadata `
  --file-id "photos/2026/a.jpg" `
  --file-name "cover.jpg" `
  --read-source backup
```

Après avoir vérifié que l’aperçu est correct, enregistrez :

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-metadata `
  --file-id "photos/2026/a.jpg" `
  --file-name "cover.jpg" `
  --read-source backup `
  --apply
```

### Paramètres des métadonnées de fichier

| Paramètre | Description |
| --- | --- |
| `--set-metadata` | Modifie les métadonnées d’un seul fichier |
| `--file-id <id>` | ID du fichier à modifier |
| `--file-name <name>` | Nouveau nom affiché dans le panneau d’administration |
| `--read-source <primary\|backup>` | Source de lecture. `primary` est la source principale, `backup` la source de secours |

Vous devez fournir au moins `--file-name` ou `--read-source`.

## Labels de modération

Les labels de modération correspondent à la classification d’âge du fichier. Vous pouvez lire le label actuel avant de le modifier.

Lire le label de modération :

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get-label `
  --file-id "photos/2026/a.jpg"
```

Définir le label de modération :

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-label `
  --file-id "photos/2026/a.jpg" `
  --label r12 `
  --apply
```

### Paramètres des labels de modération

| Paramètre | Description |
| --- | --- |
| `--get-label` | Lit le label de modération d’un seul fichier |
| `--set-label` | Modifie le label de modération d’un seul fichier |
| `--file-id <id>` | ID du fichier |
| `--label <value>` | Valeur du label : `all-ages`, `r12`, `r16`, `r18`, `None` |

## Tags de fichier

Les tags de fichier ajoutent aux fichiers des tags métier consultables. Le script permet de les lire, remplacer, ajouter et retirer, et prend aussi en charge le traitement par lots de plusieurs fichiers.

Lire les tags de fichier :

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get-tags `
  --file-id "photos/2026/a.jpg"
```

Ajouter des tags :

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --add-tags `
  --file-id "photos/2026/a.jpg" `
  --tag "cover" `
  --tag "2026" `
  --apply
```

Retirer des tags :

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --remove-tags `
  --file-id "photos/2026/a.jpg" `
  --tag "cover" `
  --apply
```

Remplacer les tags :

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-tags `
  --file-id "photos/2026/a.jpg" `
  --tag "archive" `
  --tag "public" `
  --apply
```

Ajouter des tags par lots :

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --batch-tags `
  --file-id "photos/2026/a.jpg" `
  --file-id "photos/2026/b.jpg" `
  --tag-action add `
  --tag "batch-test" `
  --apply
```

### Paramètres des tags de fichier

| Paramètre | Description |
| --- | --- |
| `--get-tags` | Lit les tags d’un seul fichier |
| `--set-tags` | Remplace les tags d’un seul fichier |
| `--add-tags` | Ajoute des tags à un seul fichier |
| `--remove-tags` | Retire des tags d’un seul fichier |
| `--batch-tags` | Définit, ajoute ou retire des tags par lots |
| `--file-id <id>` | ID du fichier. Pour une action par lots, peut être répété |
| `--tag <tag>` | Valeur du tag, peut être répétée |
| `--tags-json <path>` | Lit un tableau de tags depuis un fichier JSON |
| `--tag-action <set\|add\|remove>` | Action de tag par lots |

Exemple de contenu pour le fichier `--tags-json` :

```json
["cover", "2026", "public"]
```

## État de liste noire et de liste blanche

L’état de liste détermine le comportement de contrôle d’accès du fichier en mode d’accès public. Il peut être modifié individuellement ou par lots.

Mettre un fichier en liste blanche :

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-list-type `
  --file-id "photos/2026/a.jpg" `
  --list-type White `
  --apply
```

Ajouter plusieurs fichiers à la liste noire :

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --batch-list-type `
  --file-id "photos/2026/a.jpg" `
  --file-id "photos/2026/b.jpg" `
  --list-type Block `
  --apply
```

Rétablir l’état de liste par défaut :

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-list-type `
  --file-id "photos/2026/a.jpg" `
  --list-type None `
  --apply
```

### Paramètres de liste noire et liste blanche

| Paramètre | Description |
| --- | --- |
| `--set-list-type` | Modifie l’état de liste d’un seul fichier |
| `--batch-list-type` | Modifie l’état de liste des fichiers par lots. Une requête traite au plus `15` fichiers |
| `--file-id <id>` | ID du fichier. Pour une action par lots, peut être répété |
| `--list-type <None\|White\|Block>` | `None` est l’état par défaut, `White` la liste blanche, `Block` la liste noire |

## Déplacer des fichiers

Le déplacement transfère un ou plusieurs fichiers vers le répertoire cible. Le backend traite au plus `15` fichiers par requête. Le script découpe automatiquement le travail selon `--batch-size` et exécute les requêtes dans l’ordre.

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --move `
  --file-id "photos/2026/a.jpg" `
  --file-id "photos/2026/b.jpg" `
  --target-path "archive/2026" `
  --apply
```

### Paramètres de déplacement

| Paramètre | Description |
| --- | --- |
| `--move` | Déplace des fichiers |
| `--file-id <id>` | ID du fichier à déplacer, peut être répété |
| `--target-path <dir>` | Répertoire cible |
| `--batch-size <n>` | Nombre de fichiers déplacés par requête. Valeur par défaut `15`, maximum `15` |

## Renommer ou changer le chemin

Le renommage utilise un ancien ID de fichier et un nouvel ID de fichier explicites. Le nouvel ID peut changer uniquement le nom du fichier, ou changer aussi le répertoire.

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --rename `
  --old-file-id "photos/2026/a.jpg" `
  --new-file-id "photos/2026/a-renamed.jpg" `
  --apply
```

Pour un renommage par lots, répétez `--old-file-id` et `--new-file-id` :

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --rename `
  --old-file-id "photos/2026/a.jpg" `
  --new-file-id "archive/2026/a.jpg" `
  --old-file-id "photos/2026/b.jpg" `
  --new-file-id "archive/2026/b.jpg" `
  --apply
```

Vous pouvez aussi écrire la correspondance dans un fichier JSON :

```json
[
  {
    "oldFileId": "photos/2026/a.jpg",
    "newFileId": "archive/2026/a.jpg"
  },
  {
    "oldFileId": "photos/2026/b.jpg",
    "newFileId": "archive/2026/b.jpg"
  }
]
```

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --rename `
  --items-json ".\rename-items.json" `
  --apply
```

### Paramètres de renommage

| Paramètre | Description |
| --- | --- |
| `--rename` | Renomme ou change le chemin selon une correspondance explicite |
| `--old-file-id <id>` | ID du fichier d’origine, peut être répété |
| `--new-file-id <id>` | Nouvel ID du fichier, peut être répété ; le nombre doit correspondre à `--old-file-id` |
| `--items-json <path>` | Tableau JSON dont les éléments sont `{ "oldFileId": "...", "newFileId": "..." }` |
| `--batch-size <n>` | Nombre de renommages traités par requête. Valeur par défaut `15`, maximum `15` |

## Créer un dossier

Les répertoires d’ImgBed proviennent des chemins de fichiers ; il n’existe pas de vrai répertoire vide. Quand le script crée un dossier, il crée un fichier d’espace réservé `0.md` dans le répertoire cible, afin que ce répertoire apparaisse dans la gestion des fichiers et les statistiques de répertoire.

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --create-folder `
  --parent-directory "photos" `
  --folder-name "2026" `
  --apply
```

### Paramètres de création de dossier

| Paramètre | Description |
| --- | --- |
| `--create-folder` | Crée un fichier d’espace réservé pour le répertoire |
| `--parent-directory <dir>` | Répertoire parent ; pour la racine, vous pouvez transmettre une chaîne vide |
| `--folder-name <name>` | Nom du nouveau dossier |

## Bloquer et rétablir une IP de téléversement

Le droit de gestion permet d’ajouter une IP à la liste d’interdiction de téléversement, ou de l’en retirer. Cette action affecte les téléversements futurs depuis cette IP, mais ne supprime pas les fichiers déjà téléversés par cette IP.

Bloquer une IP de téléversement :

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --block-ip "67.159.48.149" `
  --apply
```

Rétablir une IP de téléversement :

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --allow-ip "67.159.48.149" `
  --apply
```

Voir la liste actuelle des IP interdites de téléversement :

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --blocked-ips
```

### Paramètres de gestion des IP

| Paramètre | Description |
| --- | --- |
| `--block-ip <ip>` | Ajoute l’IP à la liste d’interdiction de téléversement |
| `--allow-ip <ip>` | Retire l’IP de la liste d’interdiction de téléversement |

## Créer et supprimer des Tokens de téléversement à courte durée de vie

Le droit de gestion peut créer des Tokens dédiés au téléversement pour une courte durée. Ce Token n’a toujours que le droit `upload`, `autoDelete` vaut toujours `true`, et la durée maximale avant expiration est de `1` jour.

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --create-upload-token `
  --name "Temporary Upload Token" `
  --owner "upload-bot" `
  --default-upload-channel telegram `
  --expires-in-minutes 20 `
  --apply `
  --output json
```

Vous pouvez aussi transmettre directement un horodatage en millisecondes :

```powershell
$expiresAt = [DateTimeOffset]::UtcNow.AddHours(12).ToUnixTimeMilliseconds()

node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --create-upload-token `
  --name "Upload Token valid for one day" `
  --owner "upload-bot" `
  --default-upload-channel telegram `
  --expires-at $expiresAt `
  --apply
```

Pour supprimer un Token de téléversement à courte durée de vie, transmettez l’`id` retourné par l’API de création. Un Token de gestion ne peut supprimer que les Tokens respectant les conditions suivantes :

| Condition | Exigence |
| --- | --- |
| Droit | `permissions` contient uniquement `upload` |
| Suppression automatique | `autoDelete=true` |
| Durée de validité | `expiresAt - createdAt <= 24` heures |

Supprimer un Token de téléversement à courte durée de vie :

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --delete-upload-token `
  --token-id "mqt4jqokc85be80d1f0f47078e848a77d6c1aa6e" `
  --apply
```

Un Token de gestion ne peut pas supprimer les Tokens ordinaires, les Tokens longue durée, les Tokens contenant les droits `list` / `delete` / `manage`, ni les Tokens de téléversement valides plus de `1` jour. Ces Tokens doivent encore être gérés dans le panneau d’administration du navigateur.

### Paramètres des Tokens de téléversement à courte durée de vie

| Paramètre | Description |
| --- | --- |
| `--create-upload-token` | Crée un Token dédié au téléversement à courte durée de vie |
| `--delete-upload-token` | Supprime un Token dédié au téléversement à courte durée de vie éligible |
| `--name <name>` | Nom du Token |
| `--owner <owner>` | Description du propriétaire du Token |
| `--default-upload-channel <key>` | Canal de téléversement par défaut, qui doit être un canal réel, par exemple `telegram`, `s3`, `github` |
| `--expires-in-minutes <n>` | Nombre de minutes avant expiration à partir de l’heure actuelle, maximum `1440` |
| `--expires-at <ms>` | Heure d’expiration absolue en horodatage millisecondes, au maximum `24` heures après l’heure actuelle |
| `--token-id <id>` | ID du Token de téléversement à courte durée de vie à supprimer |

Les Tokens de téléversement à courte durée de vie autorisent uniquement le téléversement. Lors des tests, un Token court avec `permissions=["upload"]` est refusé sur les API de liste, de gestion de fichiers et de suppression.

Après expiration, les Tokens avec `autoDelete=true` sont nettoyés lorsque le backend vérifie qu’ils ont expiré. La lecture de la liste des API Token nettoie également les Tokens expirés avec suppression automatique.

## Correspondance des API

| Action | Méthode | API |
| --- | --- | --- |
| Modifier les métadonnées de fichier | `PATCH` | `/api/manage/metadata/{fileId}` |
| Lire le label de modération | `GET` | `/api/manage/label/{fileId}` |
| Modifier le label de modération | `POST` | `/api/manage/label/{fileId}` |
| Lire les tags de fichier | `GET` | `/api/manage/tags/{fileId}` |
| Modifier les tags de fichier | `POST` | `/api/manage/tags/{fileId}` |
| Modifier les tags de fichier par lots | `POST` | `/api/manage/tags/batch` |
| Modifier l’état de liste | `POST` | `/api/manage/listType/{fileId}` |
| Modifier l’état de liste par lots | `POST` | `/api/manage/listType/batch` |
| Déplacer ou renommer | `POST` | `/api/manage/relocate/batch` |
| Créer un dossier | `POST` | `/api/manage/folder/create` |
| Bloquer une IP de téléversement | `POST` | `/api/manage/cusConfig/blockip` |
| Rétablir une IP de téléversement | `POST` | `/api/manage/cusConfig/whiteip` |
| Créer un Token de téléversement à courte durée de vie | `POST` | `/api/manage/apiTokens` |
| Supprimer un Token de téléversement à courte durée de vie | `DELETE` | `/api/manage/apiTokens?id={tokenId}` |

Le script ajoute automatiquement :

```text
Authorization: Bearer your API Token
```

## Format de sortie

La sortie `pretty` par défaut convient à une lecture humaine. Si un autre programme doit traiter le résultat, utilisez `--output json` :

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get-tags `
  --file-id "photos/2026/a.jpg" `
  --output json
```

Vous pouvez aussi enregistrer le résultat complet :

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get-tags `
  --file-id "photos/2026/a.jpg" `
  --output json `
  --save-response ".\manage-result.json"
```

Les déplacements par lots, renommages par lots et actions de liste par lots analysent le flux de progression NDJSON renvoyé par le backend, puis résument le nombre d’événements, l’état d’achèvement et les détails d’échec.

## FAQ

### Pourquoi la commande n’a rien modifié

Les actions d’écriture sont en mode aperçu par défaut. Après avoir vérifié que l’aperçu est correct, ajoutez `--apply` pour enregistrer réellement.

### Ce script peut-il téléverser, lister ou supprimer des fichiers

Non. Le téléversement utilise les scripts de téléversement, la liste et le filtrage utilisent le script de liste, et la suppression de fichiers explicites utilise le script de suppression. Le script de gestion des fichiers ne traite que les actions de gestion légères sous le droit `manage`.

### Comment savoir quel fileId transmettre

Utilisez d’abord `imgbed-token-list.mjs --files` pour interroger les fichiers. Le champ `name` dans le résultat retourné est généralement l’ID du fichier, c’est-à-dire la valeur à transmettre ici à `--file-id`.

### Combien de fichiers une opération par lots peut-elle traiter en une fois

Le backend traite au plus `15` fichiers par requête. Le script utilise `--batch-size 15` par défaut ; si vous transmettez une valeur plus petite, il découpe automatiquement le travail en plusieurs requêtes exécutées dans l’ordre.

### Peut-on créer un vrai dossier vide

Les répertoires ImgBed sont déduits des chemins de fichiers, il n’existe donc pas de vrai dossier vide. `--create-folder` crée un fichier d’espace réservé `0.md` pour que ce répertoire apparaisse dans la gestion des fichiers et les statistiques de répertoire.

### Quelle est la durée maximale d’un Token de téléversement à courte durée de vie

Au maximum `1` jour, soit `1440` minutes. Au-delà, le script refuse localement ; le backend renvoie également `API_TOKEN_MANAGE_CREATE_EXPIRES_AT_TOO_LONG`.

### Un Token de téléversement à courte durée de vie est-il supprimé automatiquement après expiration

Il est nettoyé automatiquement, mais pas par une tâche planifiée immédiate. Un Token expiré est nettoyé lorsqu’il est vérifié à nouveau ; la lecture de la liste des API Token nettoie aussi les Tokens expirés avec `autoDelete=true`.
