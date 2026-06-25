# Gestion de la configuration avec API Token

La gestion avec API Token est destinée aux scripts d’automatisation, outils d’exploitation ou panneaux de contrôle tiers. Elle permet de lire et modifier les canaux de téléversement, les paramètres de sécurité, les paramètres de page, les autres paramètres et les relations fédérées légères sans ouvrir le panneau d’administration.

Le droit de gestion n’expose que les opérations légères adaptées aux scripts. Les opérations lourdes qui exigent une confirmation dans le navigateur, des tâches par lots côté interface web ou un nettoyage d’index fédéré doivent rester traitées dans le panneau d’administration du navigateur.

![Modifier l’API Token](../../image/Safety/apitoken/编辑管理权限api.png)

## Préparation

Dans le panneau d’administration, ouvrez :

```text
System Settings -> Security Settings -> API Token
```

Lors de la création ou de la modification du token, vérifiez qu’il dispose du droit de gestion. Ce droit peut modifier la configuration du site ; attribuez-le uniquement à des scripts ou utilisateurs de confiance.

Les trois scripts de gestion utilisent le mode aperçu par défaut pour les écritures. Vérifiez l’aperçu, puis ajoutez `--apply` pour enregistrer réellement.

Vous pouvez aussi placer le token dans une variable d’environnement :

```powershell
$env:IMGBED_API_TOKEN="your API Token"
```

## Télécharger les scripts de gestion

La documentation fournit trois scripts Node.js :

| Script | Utilisation |
| --- | --- |
| <a href="/tools/imgbed-token-upload-settings.mjs" download>Télécharger le script de gestion des téléversements</a> | Gère les canaux de téléversement, sous-canaux et l’équilibrage de charge. |
| <a href="/tools/imgbed-token-site-settings.mjs" download>Télécharger le script de paramètres du site</a> | Gère les paramètres de sécurité, de page et autres. |
| <a href="/tools/imgbed-token-federation.mjs" download>Télécharger le script de relations fédérées</a> | Gère les actions fédérées légères, les demandes et les messages. |

Node.js 18 ou plus récent est nécessaire.

### Paramètres communs

| Paramètre | Obligatoire | Description |
| --- | --- | --- |
| `--base-url <url>` | Oui | URL du site ImgBed, par exemple `https://image.ai6.me`. |
| `--token <token>` | Oui | API Token. Vous pouvez aussi utiliser `IMGBED_API_TOKEN`. |
| `--retries <n>` | Non | Nombre de tentatives en cas d’échec temporaire. Valeur par défaut : `3`. |
| `--timeout-ms <n>` | Non | Timeout par requête. Valeur par défaut : `180000`. |
| `--output <pretty\|json>` | Non | Format de sortie. Valeur par défaut : `pretty`; utilisez `json` pour les intégrations. |
| `--save-response <path>` | Non | Enregistre le résultat final en JSON. |
| `--apply` | Non | Exécute réellement l’écriture. Sans ce paramètre, seule une prévisualisation est affichée. |
| `-h` / `--help` | Non | Affiche l’aide du script. |

## Paramètres de téléversement

Le script de paramètres de téléversement permet de lister, lire, créer, modifier et supprimer des sous-canaux de téléversement. Il peut aussi activer ou désactiver l’équilibrage de charge d’un canal principal.

```powershell
node imgbed-token-upload-settings.mjs --base-url "https://your-domain" --token "your API Token" --list
```

### Paramètres du script de téléversement

| Paramètre | Description |
| --- | --- |
| `--list` | Liste les groupes de configuration de téléversement. |
| `--get` | Lit un canal principal ou un sous-canal précis. |
| `--upsert` | Crée ou modifie un sous-canal. Sans `--apply`, affiche seulement un aperçu. |
| `--delete` | Supprime un sous-canal. Sans `--apply`, affiche seulement un aperçu. |
| `--load-balance <true\|false>` | Active ou désactive l’équilibrage de charge d’un canal principal. |
| `--channel <key>` | Canal principal, par exemple `s3`, `github` ou `telegram`. |
| `--channel-name <name>` | Nom du sous-canal ou du compte. |
| `--set key=value` | Définit un champ. Répétable, avec prise en charge des chemins à points. |
| `--patch-json <path>` | Fusionne des champs depuis un fichier JSON. |
| `--apply` | Enregistre réellement le résultat. |

### Clés de canaux

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

### Exemples de paramètres de téléversement

Lister tous les paramètres de téléversement :

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --list
```

Lire la configuration S3 :

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get `
  --channel s3
```

Lire un sous-canal S3 :

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get `
  --channel s3 `
  --channel-name "backup-s3"
```

Créer ou modifier un sous-canal. Lancez d’abord sans `--apply` pour vérifier l’aperçu :

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --upsert `
  --channel webdav `
  --channel-name "backup-webdav" `
  --set enabled=false `
  --set remark="backup test"
```

Puis enregistrez :

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --upsert `
  --channel webdav `
  --channel-name "backup-webdav" `
  --set enabled=false `
  --set remark="backup test" `
  --apply
```

Supprimer un sous-canal :

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --delete `
  --channel webdav `
  --channel-name "backup-webdav" `
  --apply
```

Activer l’équilibrage de charge S3 :

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --load-balance true `
  --channel s3 `
  --apply
```

Pour les champs complexes, écrivez un fichier JSON puis utilisez `--patch-json` :

```json
{
  "enabled": true,
  "remark": "primary account"
}
```

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --upsert `
  --channel s3 `
  --channel-name "primary-s3" `
  --patch-json ".\s3-channel.json" `
  --apply
```

## Paramètres du site

Le script de paramètres du site gère trois zones :

| Zone | Paramètre | Description |
| --- | --- | --- |
| Sécurité | `security` | Authentification utilisateur, authentification administrateur, appareils connectés, API Token, modération d’image, limites utilisateur, WebDAV, etc. |
| Page | `page` | Paramètres globaux, page utilisateur, page d’administration et autres options d’affichage. |
| Autres | `others` | API d’image aléatoire, galerie publique, nœud fédéré local, auto-étiquetage, géolocalisation IP, canal de sauvegarde, OCR, etc. |

Utilisez d’abord `--list-sections` pour voir les zones, sections et champs modifiables :

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --list-sections
```

### Paramètres du site

| Paramètre | Description |
| --- | --- |
| `--list-sections` | Liste les zones, sections et champs modifiables. |
| `--get` | Lit une section de configuration. |
| `--area <security\|page\|others>` | Sélectionne la zone de configuration. |
| `--section <name>` | Sélectionne la section. Utilisez les noms affichés par `--list-sections`. |
| `--set key=value` | Définit un champ. Peut être répété. |
| `--apply` | Enregistre réellement le résultat. |

Dans la zone `page`, `--set` utilise l’identifiant de l’élément de page, par exemple `starsEffect=true`. Dans `security` et `others`, utilisez le nom du champ de la section, par exemple `email=admin@example.com`.

### Exemples de paramètres du site

Lire les paramètres de notification de mise à jour :

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get `
  --area security `
  --section systemUpdate
```

Changer l’adresse de notification de mise à jour. Lancez d’abord sans `--apply` :

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --area security `
  --section systemUpdate `
  --set email="admin@example.com"
```

Puis enregistrez :

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --area security `
  --section systemUpdate `
  --set email="admin@example.com" `
  --apply
```

Changer l’effet étoilé du panneau d’administration :

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --area page `
  --section adminSettings `
  --set starsEffect=true `
  --apply
```

Changer la langue de géolocalisation IP :

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --area others `
  --section ipGeolocation `
  --set language="en" `
  --apply
```

Les paramètres du nœud fédéré local permettent de lire et modifier les champs ordinaires, comme l’état d’activation, le dossier de synchronisation ou le code d’invitation. La confirmation de domaine ne passe pas par API Token. Si le panneau indique que le domaine du nœud local diffère du domaine d’accès actuel, terminez la confirmation dans le navigateur.

## Relations fédérées

Le script de fédération gère l’état du nœud local, les nœuds rejoints, les nœuds qui ont rejoint le vôtre, les messages, les demandes de jonction, les nouvelles demandes sans enregistrement, les approbations, les refus et les actions légères qui ne nécessitent pas de nettoyage d’index.

La mise à jour d’index, la suppression d’index fédéré et la confirmation de changement de domaine dépendent du flux complet dans le navigateur. Le script ne traite pas ces opérations lourdes.

### Limite entre opérations légères et lourdes

| Action | Support par le script | Description |
| --- | --- | --- |
| Voir l’état du nœud local et lister les relations | Pris en charge | Lit seulement les enregistrements de relation. |
| Lire et envoyer des messages | Pris en charge | Lit ou écrit les messages de relation. |
| Demander à rejoindre un autre nœud | Pris en charge | Utilise un lien d’invitation. |
| Redemander une relation sans enregistrement | Pris en charge | Seulement pour les cartes outgoing avec `lastResult=none` ; nécessite un code d’invitation de 6 caractères. |
| Annuler une demande outgoing en attente | Pris en charge | Annule uniquement une demande pending. |
| Accepter ou refuser une demande incoming | Pris en charge | Traite les demandes de nœuds qui veulent rejoindre le vôtre. |
| Retirer une relation incoming acceptée | Pris en charge | Met à jour l’enregistrement incoming et notifie l’autre nœud. |
| Supprimer un enregistrement incoming terminal | Pris en charge | Supprime seulement les enregistrements incoming terminaux. |
| Annuler un abonnement outgoing accepté | Navigateur uniquement | Nécessite une suppression d’index fédéré local en lots. |
| Supprimer un enregistrement outgoing terminal | Navigateur uniquement | Peut nécessiter un nettoyage préalable de l’index fédéré. |
| Confirmer ou annuler un changement de domaine | Navigateur uniquement | Nécessite la confirmation du domaine actuel et le traitement d’index après changement. |
| Publier, récupérer ou supprimer les index par lots | Navigateur uniquement | Ce sont des tâches par lots de l’interface web. |

### Paramètres de fédération

| Paramètre | Description |
| --- | --- |
| `--status` | Affiche l’état du nœud local, les relations outgoing et incoming. |
| `--list` | Liste les relations fédérées. |
| `--chat` | Lit les messages mémorisés d’une relation. |
| `--send-message` | Envoie un message à une relation établie. |
| `--join` | Demande à rejoindre un autre nœud via un lien d’invitation. |
| `--reapply` | Redemande une relation sans enregistrement. Nécessite un code de 6 caractères. |
| `--accept` | Accepte une demande incoming. |
| `--deny` | Refuse une demande incoming. |
| `--cancel` | Annule une demande outgoing en attente ou retire une relation incoming acceptée. |
| `--delete` | Supprime un enregistrement incoming terminal. |
| `--direction <outgoing\|incoming\|all>` | Direction de relation. `outgoing` désigne les nœuds que vous avez rejoints ; `incoming` désigne les nœuds qui ont rejoint le vôtre. |
| `--domain <url>` | Domaine du nœud lié. |
| `--invite-link <url>` | Lien d’invitation de l’autre nœud. |
| `--invite-code <code>` | Code de 6 caractères utilisé pour la redemande. |
| `--text <message>` | Texte du message. |
| `--apply` | Enregistre réellement le résultat. |

### Exemples de fédération

Afficher l’état du nœud local et les deux listes de relations :

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --status
```

Lister seulement les nœuds que vous avez rejoints :

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --list `
  --direction outgoing
```

Lister seulement les nœuds qui ont rejoint le vôtre :

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --list `
  --direction incoming
```

Demander à rejoindre un autre nœud avec un lien d’invitation. Lancez d’abord sans `--apply` :

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --join `
  --invite-link "https://peer-domain/federation/invite/abcdef"
```

Puis enregistrez :

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --join `
  --invite-link "https://peer-domain/federation/invite/abcdef" `
  --apply
```

Redemander une relation sans enregistrement :

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --reapply `
  --domain "https://peer-domain" `
  --invite-code "abc123" `
  --apply
```

Accepter une demande incoming :

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --accept `
  --domain "https://peer-domain" `
  --apply
```

Refuser une demande incoming :

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --deny `
  --domain "https://peer-domain" `
  --apply
```

Envoyer un message à une relation établie :

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --send-message `
  --direction outgoing `
  --domain "https://peer-domain" `
  --text "Hello, this is a test message." `
  --apply
```

Annuler une demande outgoing en attente :

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --cancel `
  --direction outgoing `
  --domain "https://peer-domain" `
  --apply
```

Retirer une relation incoming acceptée :

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --cancel `
  --direction incoming `
  --domain "https://peer-domain" `
  --apply
```

Supprimer un enregistrement incoming terminal :

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --delete `
  --direction incoming `
  --domain "https://peer-domain" `
  --apply
```

L’annulation d’un abonnement outgoing accepté et la suppression d’un enregistrement outgoing doivent être effectuées dans le panneau du navigateur, car ces actions peuvent devoir nettoyer l’index fédéré local au préalable.

### Domaine incohérent

Si le domaine enregistré du nœud local et le domaine en attente dans la relation ne correspondent pas, le script renvoie une erreur avec `currentDomain` et `pendingDomain`. Traitez ce cas dans le panneau du navigateur, car un changement de domaine implique aussi confirmation et nettoyage de l’index outgoing.

Si une demande de jonction renvoie `FEDERATION_NODE_DOMAIN_MISMATCH`, le domaine utilisé par le lien d’invitation ne correspond pas au domaine local enregistré par le nœud distant. La réponse inclut `currentOrigin` et `detectedOrigin`. Utilisez le domaine actuellement confirmé par l’autre nœud, ou demandez-lui de confirmer d’abord son domaine dans le panneau du navigateur.

## Questions fréquentes

### Le changement n’a pas été appliqué

Les commandes d’écriture sont en mode aperçu par défaut. Ajoutez `--apply` après avoir vérifié l’aperçu pour enregistrer réellement.

### Comment savoir quels champs peuvent être modifiés ?

Pour les paramètres de téléversement, utilisez `--get` pour inspecter la structure du sous-canal existant. Pour la sécurité, les pages et les autres paramètres, utilisez `--list-sections` pour voir les zones, sections et champs modifiables.

### Je veux utiliser le résultat dans un autre programme

Utilisez `--output json` ou ajoutez `--save-response result.json`. Votre programme peut lire directement le fichier JSON enregistré.



