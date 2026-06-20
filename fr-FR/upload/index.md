# Paramètres d'envoi

Les paramètres d'envoi connectent ImgBed à vos propres canaux de stockage. Une fois un canal configuré, les images et fichiers envoyés sont enregistrés dans le service choisi. ImgBed gère ensuite les liens d'accès, les enregistrements de fichiers, les aperçus, la galerie publique, l'API d'image aléatoire, l'accès WebDAV et les fonctions associées.

Le bon canal dépend de votre usage. Pour démarrer simplement, Telegram, Discord ou GitHub Releases peuvent convenir. Si vous privilégiez la capacité, la vitesse et la stabilité à long terme, vous pouvez choisir Cloudflare R2, S3, OneDrive, Google Drive, Dropbox, Yandex, pCloud ou votre propre service WebDAV.

## Avant de commencer

- Préparez le compte de stockage ou les identifiants API à utiliser.
- Vérifiez que votre domaine ImgBed est accessible, car les canaux OAuth ont besoin d'URL de callback.
- Après avoir ajouté un canal, envoyez d'abord une image de test pour confirmer que le fichier est bien enregistré et accessible.

## Liste des canaux

- [Telegram](./telegram.md)
- [Cloudflare R2](./cloudflare-r2.md)
- [S3](./s3.md)
- [WebDAV](./webdav.md)
- [Discord](./discord.md)
- [Hugging Face](./huggingface.md)
- [GitHub Releases](./github-releases.md)
- [GitLab Packages](./gitlab-packages.md)
- [OneDrive](./onedrive.md)
- [Google Drive](./google-drive.md)
- [Dropbox](./dropbox.md)
- [Yandex](./yandex.md)
- [pCloud](./pcloud.md)

## Ce que couvre ce chapitre

- Les informations à préparer pour chaque canal d'envoi.
- La création d'applications, la copie de clés ou l'autorisation de tokens sur les plateformes externes.
- La saisie de la configuration dans ImgBed et la vérification des envois.
