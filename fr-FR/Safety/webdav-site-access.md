# Accès WebDAV au Site
Le paramètre WebDAV dans les paramètres de sécurité expose votre site ImgBed comme point de terminaison WebDAV.

Une fois activé, vous pouvez utiliser Windows, macOS, des gestionnaires de fichiers mobiles ou tout client compatible WebDAV pour parcourir, téléverser, supprimer et gérer les fichiers ImgBed comme un dossier distant.

Il s’agit de l’entrée d’accès WebDAV du site. Elle est différente du canal de stockage WebDAV dans les paramètres de téléversement. Le canal de téléversement stocke les fichiers dans un service WebDAV tiers. Ce paramètre permet à votre site ImgBed de fournir un accès WebDAV aux clients.

## Où Configurer

Ouvrez le panneau d’administration, puis allez à :

```text
System Settings -> Security Settings -> WebDAV
```

Paramètres disponibles :

- Activer
- Nom d’utilisateur
- Mot de passe
- Mode de chargement des images
- Canal par défaut

## Rôle de cette Fonction

Une fois WebDAV activé, ImgBed fournit une URL d’accès fixe :

```text
https://your-domain.com/dav
```

Utilisez cette URL pour vous connecter au répertoire de fichiers ImgBed.

Cas d’utilisation adaptés :

- Parcourir les fichiers ImgBed directement depuis le gestionnaire de fichiers de votre ordinateur.
- Glisser des images dans le dossier WebDAV pour les téléverser.
- Organiser les dossiers ImgBed depuis votre gestionnaire de fichiers local.
- Utiliser un logiciel compatible WebDAV pour synchroniser ou gérer des images.
- Accéder au contenu ImgBed sans ouvrir le panneau d’administration.

## Paramètres

### Activer

Active le point de terminaison WebDAV.

Lorsque ce paramètre est désactivé, les clients ne peuvent pas se connecter via WebDAV.

### Nom d’Utilisateur et Mot de Passe

Ces identifiants sont utilisés par les clients WebDAV lors de la connexion.

Utilisez un nom d’utilisateur et un mot de passe dédiés à WebDAV. Ne réutilisez pas le mot de passe administrateur ou le mot de passe de téléversement.

Si le nom d’utilisateur ou le mot de passe est vide, les clients WebDAV ne peuvent pas se connecter correctement.

### Mode de Chargement des Images

Le mode de chargement des images détermine quelle URL d’image les clients WebDAV préfèrent lors de la lecture d’images.

Choix courants :

| Mode | Description |
| --- | --- |
| Chargement intelligent | ImgBed choisit selon le contexte. Recommandé pour un usage normal. |
| Source | Préfère les images sources. |
| Miniature | Préfère les miniatures. Utile pour un aperçu rapide. |

Si vous hésitez, conservez « Chargement intelligent ».

### Canal par Défaut

Le canal par défaut est utilisé pour les téléversements WebDAV.

Lorsque vous copiez des fichiers dans le répertoire WebDAV depuis Windows ou un autre client, ImgBed les téléverse via le canal de téléversement par défaut sélectionné.

Si aucun canal par défaut n’est sélectionné, la navigation peut fonctionner, mais les téléversements peuvent échouer.

## Accéder à WebDAV dans Windows 11

Windows 11 peut ajouter WebDAV comme emplacement réseau.

1. Ouvrez « Ce PC ».
2. Choisissez « Ajouter un emplacement réseau ».
3. Saisissez `https://your-domain.com/dav`.
4. Saisissez votre nom d’utilisateur et votre mot de passe WebDAV lorsque demandé.
5. Terminez l’assistant. Le répertoire WebDAV peut ensuite être ouvert dans l’Explorateur de fichiers.

![Ajouter WebDAV dans Windows 11](../../image/Safety/webdav在win11配置.png)

Après l’ajout, le répertoire WebDAV apparaît dans l’Explorateur de fichiers Windows. Vous pouvez ouvrir, copier et gérer les fichiers comme dans un dossier normal.

![WebDAV dans Windows](../../image/Safety/webdav在win显示效果.png)

## Opérations Prises en Charge

Après une connexion WebDAV réussie, vous pouvez généralement :

- Voir les fichiers et dossiers.
- Téléverser des fichiers.
- Créer des dossiers.
- Renommer des fichiers ou dossiers.
- Déplacer des fichiers.
- Supprimer des fichiers.

WebDAV est mieux adapté à l’accès quotidien et à une gestion de fichiers à petite échelle. Pour de grands déplacements, des suppressions en masse ou une organisation complexe, utilisez le panneau d’administration.

## Gestion des Appareils Connectés

Les connexions WebDAV réussies apparaissent aussi dans l’onglet WebDAV de la gestion des appareils connectés.

Vous pouvez y consulter les clients WebDAV et forcer la déconnexion des anciens appareils si nécessaire.

Si vous modifiez le nom d’utilisateur ou le mot de passe WebDAV, les anciens clients doivent se reconnecter.

## FAQ

### Windows Redemande sans Cesse le Nom d’Utilisateur et le Mot de Passe

Vérifiez :

- L’URL est `https://your-domain.com/dav`.
- Le nom d’utilisateur et le mot de passe correspondent aux paramètres WebDAV.
- WebDAV est activé.
- Le site est accessible via HTTPS.

### La Navigation Fonctionne, mais le Téléversement Échoue

Vérifiez le « Canal par défaut ».

Les téléversements WebDAV nécessitent un canal de téléversement par défaut. S’il est absent, désactivé ou mal configuré, les téléversements peuvent échouer.

### La Vitesse d’Accès est Instable

Les performances WebDAV dépendent du client, du réseau, du nombre de fichiers et du canal de téléversement par défaut.

Si un répertoire contient beaucoup de fichiers, organisez-les en dossiers au lieu de conserver trop de fichiers dans un seul répertoire.

## Recommandations de Sécurité

- Utilisez HTTPS pour l’accès WebDAV.
- Définissez un mot de passe fort.
- Ne partagez pas le mot de passe WebDAV avec des personnes non fiables.
- Désactivez WebDAV lorsque vous ne l’utilisez pas.
- Nettoyez régulièrement les appareils WebDAV inutilisés dans la gestion des appareils connectés.

## Taille des Fichiers pour les Téléversements WebDAV

Les clients WebDAV n’utilisent pas le flux de découpage des gros fichiers de la page de téléversement du navigateur. Pour les fichiers au-dessus des limites recommandées ci-dessous, utilisez plutôt la page de téléversement web.

| Canal de téléversement par défaut | Limite recommandée par fichier pour WebDAV |
| --- | ---: |
| Telegram | 20 MB |
| Discord | 10 MB |
| Cloudflare R2 | 30 MB |
| S3 | 30 MB |
| GitHub Releases | 64 MB |
| GitLab Packages | 64 MB |
| Hugging Face | 20 MB |
| OneDrive | 30 MB |
| Google Drive | 30 MB |
| Dropbox | 30 MB |
| Yandex Disk | 30 MB |
| pCloud | 30 MB |
| WebDAV | 64 MB |


