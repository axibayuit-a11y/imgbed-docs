# Liste et filtrage avec API Token

Le script de liste avec API Token est destiné aux scripts, tâches automatisées et programmes tiers qui doivent lire les données d’ImgBed. Il utilise uniquement le droit `list`. Il ne téléverse pas de fichiers, ne supprime pas de fichiers, ne modifie pas la configuration et ne bloque ni n’autorise aucun IP à téléverser.

![Modifier l’API Token](../../image/Safety/apitoken/编辑列出权限api.png)

Usages principaux :

| Fonction | Description |
| --- | --- |
| Liste de la gestion des fichiers | Lit la liste des fichiers du panneau d’administration et prend en charge les paramètres de filtrage avancé de la gestion des fichiers |
| Liste de la gestion des utilisateurs | Lit les statistiques de téléversement par utilisateur ou IP et prend en charge les paramètres de filtrage de la gestion des utilisateurs |
| Liste des canaux de téléversement | Lit les canaux de téléversement, sous-canaux, capacités et informations d’équilibrage de charge après masquage des données sensibles |
| Tableau des statistiques de dossiers | Lit les statistiques de dossiers et les informations paginées des dossiers |

## Préparation

Dans le panneau d’administration, ouvrez :

```text
System Settings -> Security Settings -> API Token
```

Lors de la création ou de la modification de l’API Token, vérifiez qu’il dispose du droit de liste. Ce script n’a besoin que du droit `list`.

Vous pouvez aussi placer le token dans une variable d’environnement :

```powershell
$env:IMGBED_API_TOKEN="your API Token"
```

## Télécharger le script

| Script | Utilisation |
| --- | --- |
| <a href="/tools/imgbed-token-list.mjs" download>Télécharger le script de liste et de filtrage</a> | Liste de la gestion des fichiers, liste de la gestion des utilisateurs, liste des canaux de téléversement et statistiques de dossiers |

Node.js 18 ou plus récent est nécessaire.

## Paramètres généraux

| Paramètre | Obligatoire | Description |
| --- | --- | --- |
| `--base-url <url>` | Oui | URL du site ImgBed, par exemple `https://image.ai6.me` |
| `--token <token>` | Oui | API Token. Vous pouvez aussi utiliser la variable d’environnement `IMGBED_API_TOKEN` |
| `--retries <n>` | Non | Nombre de tentatives en cas d’échec temporaire. Valeur par défaut : `3` |
| `--timeout-ms <n>` | Non | Délai maximal d’une requête. Valeur par défaut : `180000` |
| `--output <pretty\|json>` | Non | Format de sortie. Valeur par défaut : `pretty` ; pour un traitement par programme, utilisez `json` |
| `--save-response <path>` | Non | Enregistre le résultat final dans un fichier JSON |
| `-h` / `--help` | Non | Affiche l’aide du script |

## Liste de la gestion des fichiers

Lister les fichiers de la gestion des fichiers :

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --count 10
```

Sortie JSON :

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --count 10 `
  --output json
```

Lire uniquement le nombre selon les filtres actuels :

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --file-summary `
  --dir "photos/2026" `
  --recursive
```

### Paramètres de gestion des fichiers

| Paramètre | Description |
| --- | --- |
| `--files` | Liste les fichiers |
| `--file-summary` | Lit uniquement le total |
| `--start <n>` | Décalage de pagination |
| `--count <n>` | Nombre d’éléments renvoyés |
| `--dir <path>` | Dossier ciblé |
| `--recursive` | Inclut les fichiers des sous-dossiers |
| `--search <text>` | Mot-clé de recherche |
| `--channel <key>` | Filtre par canal principal de téléversement, par exemple `github`, `s3` ou `yandex` |
| `--channel-scope <primary\|backup\|all>` | Portée du filtre de canal : canal principal, canal de sauvegarde ou tous |
| `--channel-name-groups <value>` | Filtre des groupes de sous-canaux, transmis au serveur dans son format existant |
| `--list-type <csv>` | Type de liste, souvent `None,White,Block` |
| `--include-tags <csv>` | Exige ces étiquettes |
| `--exclude-tags <csv>` | Exclut ces étiquettes |
| `--time-start <ms>` | Début de la période de téléversement, en horodatage milliseconde |
| `--time-end <ms>` | Fin de la période de téléversement, en horodatage milliseconde |
| `--file-exts <csv>` | Inclut seulement certaines extensions, par exemple `jpg,png,pdf` |
| `--exclude-file-exts <csv>` | Exclut certaines extensions |
| `--file-status-categories <csv>` | Catégories de fichiers : `image,audio,video,document,code,other` |
| `--upload-ip <ip>` | Filtre par préfixe de l’IP de téléversement |
| `--age-ratings <csv>` | Classements d’âge : `none,all-ages,r12,r16,r18` |
| `--orientation <csv>` | Filtre d’orientation, transmis avec les valeurs existantes du serveur |
| `--read-source <csv>` | Filtre de source de lecture, transmis avec les valeurs existantes du serveur |
| `--access-status <normal\|blocked>` | État de l’accès public |
| `--min-width <n>` | Largeur minimale |
| `--max-width <n>` | Largeur maximale |
| `--min-height <n>` | Hauteur minimale |
| `--max-height <n>` | Hauteur maximale |
| `--min-file-size <mb>` | Taille minimale du fichier, avec le paramètre MB existant côté serveur |
| `--max-file-size <mb>` | Taille maximale du fichier, avec le paramètre MB existant côté serveur |

### Exemples de gestion des fichiers

Rechercher des PDF :

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --search "pdf" `
  --file-status-categories "document" `
  --count 20
```

Filtrer par IP de téléversement et par canal :

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --upload-ip "103.62" `
  --channel yandex `
  --channel-scope primary
```

Enregistrer le résultat complet :

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --count 100 `
  --output json `
  --save-response ".\files.json"
```

## Liste de la gestion des utilisateurs

Lister les statistiques de téléversement par utilisateur ou IP :

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --count 20
```

Rechercher une IP ou une adresse :

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --search "43.198.183.56"
```

Voir les fichiers téléversés depuis une IP :

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --user-detail `
  --ip "43.198.183.56" `
  --count 20
```

Lister les IP interdites de téléversement :

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --blocked-ips
```

### Paramètres de gestion des utilisateurs

| Paramètre | Description |
| --- | --- |
| `--users` | Liste les statistiques de téléversement par utilisateur ou IP |
| `--user-detail` | Affiche les fichiers téléversés depuis une IP précise |
| `--blocked-ips` | Liste les IP interdites de téléversement |
| `--ip <ip>` | Obligatoire avec `--user-detail` |
| `--start <n>` | Décalage de pagination |
| `--count <n>` | Nombre d’éléments renvoyés |
| `--sort <value>` | Tri : `timeDesc`, `timeAsc`, `countDesc`, `countAsc`, `totalSizeDesc`, `totalSizeAsc` |
| `--search <text>` | Recherche une IP ou une adresse |
| `--upload-status <allowed\|blocked>` | Indique si le téléversement est autorisé |
| `--start-time <ms>` | Début de la période statistique, en horodatage milliseconde |
| `--end-time <ms>` | Fin de la période statistique, en horodatage milliseconde |
| `--file-status-categories <csv>` | Filtre de catégorie de fichiers |
| `--age-ratings <csv>` | Filtre de classement d’âge |
| `--min-file-size <mb>` | Taille minimale du fichier |
| `--max-file-size <mb>` | Taille maximale du fichier |
| `--list-type <csv>` | Type de liste, souvent `None,White,Block` |
| `--access-status <normal\|blocked>` | État de l’accès public |

### Exemples de gestion des utilisateurs

Lister les utilisateurs interdits de téléversement :

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --upload-status blocked
```

Rechercher par mot-clé d’adresse :

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --search "Hong Kong"
```

Trier par nombre de téléversements :

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --sort countDesc `
  --count 50
```

## Liste des canaux de téléversement

Lister la configuration des canaux de téléversement après masquage des données sensibles :

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --channels
```

Les données renvoyées contiennent :

| Champ | Description |
| --- | --- |
| `type` | Type de canal principal de téléversement, par exemple `github`, `s3` ou `yandex` |
| `name` | Nom du sous-canal ou du compte |
| `enabled` | Indique s’il est activé |
| `load_balance_enabled` | Indique si l’équilibrage de charge est activé pour ce type de canal |
| `quota_enabled` | Indique si la vérification de capacité est activée |
| `quota_limit_bytes` | Limite de capacité |
| `quota_used_bytes` | Capacité utilisée |
| `quota_checked_at` | Heure de vérification de la capacité |
| `tag_json` | Étiquettes non sensibles, par exemple dépôt public ou dépôt privé |
| `created_at` / `updated_at` | Date de création et date de mise à jour |

Cette interface ne renvoie pas les clés secrètes, jetons d’actualisation, jetons temporaires, mots de passe ni aucune autre configuration sensible.

## Tableau des statistiques de dossiers

Lister les statistiques de dossiers :

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --directories `
  --limit 20
```

Lister les chemins complets des dossiers et rechercher par préfixe :

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --directories `
  --scope full `
  --search-prefix "test" `
  --include-parents `
  --limit 10
```

### Paramètres des statistiques de dossiers

| Paramètre | Description |
| --- | --- |
| `--directories` | Liste le tableau des statistiques de dossiers |
| `--dir <path>` | Dossier à partir duquel commencer la liste |
| `--scope <direct\|full>` | `direct` liste seulement les dossiers directs, `full` liste les chemins complets |
| `--search-prefix <path>` | Recherche par préfixe de dossier |
| `--include-parents` | En mode `full`, inclut aussi les dossiers parents |
| `--limit <n>` | Nombre d’éléments renvoyés, maximum serveur `100` |
| `--cursor <path>` | Curseur de la page suivante |

## Format de sortie

La sortie par défaut `pretty` convient à la lecture humaine :

```powershell
node imgbed-token-list.mjs --base-url "https://your-domain" --token "your API Token" --users --count 5
```

Pour un traitement par un autre programme, utilisez `--output json` :

```powershell
node imgbed-token-list.mjs --base-url "https://your-domain" --token "your API Token" --users --count 5 --output json
```

Vous pouvez aussi enregistrer le résultat complet :

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --count 5 `
  --output json `
  --save-response ".\users.json"
```

## Questions fréquentes

### Ce script modifie-t-il les données ?

Non. Ce script appelle uniquement des interfaces de lecture. Il ne téléverse pas, ne supprime pas, ne déplace pas, ne modifie pas la configuration et ne bloque ni n’autorise aucun IP à téléverser.

### Pourquoi le droit `list` est-il nécessaire ?

La liste de la gestion des fichiers, la liste de la gestion des utilisateurs, les listes de canaux sans données sensibles et les statistiques de dossiers sont des fonctions de lecture. Elles n’ont donc besoin que du droit `list` dans l’API Token.

### Comment vérifier tous les paramètres disponibles ?

Exécutez :

```powershell
node imgbed-token-list.mjs --help
```

Le script affiche toutes les actions et tous les paramètres.

