# Paramètres de téléversement

Les paramètres de téléversement connectent ImgBed à vos propres canaux de stockage. Après avoir configuré un canal, les images et les fichiers téléversés sont stockés dans le service que vous choisissez. ImgBed gère les enregistrements de fichiers, les liens d’accès, les aperçus, les fonctions de galerie publique, l’accès à l’API d’image aléatoire, l’accès WebDAV et les flux associés.

Chaque utilisateur peut préférer des canaux différents. Si vous souhaitez une configuration simple, Telegram, Discord ou GitHub Releases peuvent constituer de bons points de départ. Si la capacité, la vitesse et la stabilité à long terme sont plus importantes, envisagez Cloudflare R2, S3, OneDrive, Google Drive, Dropbox, Yandex, pCloud ou votre propre service WebDAV.

## Avant de commencer

> Avant d’utiliser ImgBed pour la première fois, vous devez ouvrir la page d’initialisation et cliquer sur "Reconstruire l’index" afin de compléter les tables D1 nécessaires et d’éviter les erreurs dans les fonctions suivantes.
>
> ![Cliquer sur Reconstruire l’index pendant l’initialisation](../../image/初始化点击重建索引.png)

- Préparez le compte de stockage ou les identifiants API nécessaires.
- Assurez-vous que votre domaine ImgBed est accessible, car les canaux basés sur OAuth nécessitent des URL de retour.
- Après avoir ajouté un canal, téléversez d’abord une image de test pour confirmer que les fichiers sont bien stockés et s’ouvrent correctement.

## Répertoire des canaux

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

- Les prérequis de chaque canal de téléversement avant sa configuration.
- La création d’applications, la copie de clés ou l’autorisation de tokens sur des plateformes externes.
- La saisie de la configuration du canal dans ImgBed et la vérification du bon fonctionnement des téléversements.
