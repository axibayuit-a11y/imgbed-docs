# Configuration des canaux d’upload

Dans ImgBed, chaque destination de stockage est configurée comme un canal. Vous choisissez où enregistrer les images, vidéos, audios et autres fichiers dans les paramètres d’upload.

## Où configurer

```text
Paramètres système -> Paramètres d’upload
```

Vous pouvez y ajouter des canaux, les activer ou désactiver, définir des limites de capacité, ajouter des notes et tester les connexions.

## Canaux disponibles

| Canal | Usage principal |
| --- | --- |
| Cloudflare R2 | Stockage objet chez Cloudflare |
| S3 | AWS S3, Backblaze B2, MinIO et services compatibles |
| Google Drive | Enregistrer dans Google Drive |
| OneDrive | Enregistrer dans Microsoft OneDrive |
| Dropbox | Enregistrer dans Dropbox |
| pCloud | Enregistrer dans pCloud |
| WebDAV | NAS, disques cloud ou services compatibles WebDAV |
| Telegram | Utiliser un canal Telegram comme destination |
| Discord | Utiliser un canal Discord comme destination |
| GitHub Releases | Enregistrer dans les Release Assets de GitHub |
| GitLab Packages | Enregistrer dans le Generic Package Registry de GitLab |
| Hugging Face | Enregistrer dans un dépôt Hugging Face |
| Yandex | Enregistrer dans Yandex Disk |

## Avant d’ajouter un canal

| Point | À vérifier |
| --- | --- |
| Compte de stockage | Le compte où les fichiers seront réellement enregistrés |
| API Key / Token | Les identifiants requis par le canal |
| Dossier de stockage | Souvent `imgbed`, sauf si vous voulez une autre organisation |
| Limite de capacité | Si le canal doit cesser de recevoir des fichiers à partir d’un seuil |
| Domaine public | Si vous utilisez un CDN ou un domaine personnalisé |

## Après enregistrement

1. Vérifiez que la carte du canal apparaît.
2. Vérifiez que le canal est activé.
3. Contrôlez que les identifiants et le dossier sont bien enregistrés.
4. Lancez une consultation de capacité si le canal le permet.
5. Envoyez une image de test et ouvrez le lien renvoyé.

En cas d’échec, vérifiez d’abord les identifiants, permissions, dossier de destination et limites de l’API du fournisseur.
