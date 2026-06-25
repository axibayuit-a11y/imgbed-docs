# Blog

La fonction de blog ajoute une page de blog indépendante à votre site ImgBed.

Une fois activée, les visiteurs peuvent ouvrir :

```text
https://your-domain.com/blog/
```

![Page d’accueil du blog](../../image/other/博客/博客首页.png)

Le blog est adapté du projet open source [LyraVoid/Mizuki](https://github.com/LyraVoid/Mizuki). ImgBed le réécrit et l’intègre avec Vue afin qu’il puisse fonctionner en tant que partie du site d’hébergement d’images.

## Où le configurer

Les paramètres du blog se trouvent dans :

```text
System Settings -> Other Settings -> Blog
```

![Paramètres du blog](../../image/other/博客/QQ20260611-221702.png)

## Configuration initiale

1. Activez `Enable`.
2. Sélectionnez le compte GitHub utilisé pour stocker la configuration du blog.
3. Cliquez sur `Update Blog`.
4. Attendez le message de réussite.
5. Ouvrez `https://your-domain.com/blog/` pour afficher le blog.

Lors de la première utilisation, ImgBed prépare un dépôt GitHub privé dans le compte sélectionné :

```text
imgbed-blog-config
```

Ce dépôt stocke les paramètres du blog et le contenu des articles.

## Rédiger des articles

Modifiez les articles du blog dans votre dépôt GitHub privé :

```text
imgbed-blog-config
```

Flux habituel :

1. Ouvrez GitHub.
2. Accédez au dépôt privé `imgbed-blog-config`.
3. Modifiez des fichiers d’articles ou ajoutez-en de nouveaux.
4. Validez les changements.
5. Revenez au panneau d’administration ImgBed et cliquez sur `Update Blog`, ou cliquez trois fois sur le logo en haut à gauche de la page d’accueil du blog pour déclencher une mise à jour du blog.

`Update Blog` n’écrase pas le contenu que vous avez rédigé. Cette action initialise le dépôt si nécessaire et actualise le cache du blog.

## Fonctionnalités prises en charge

Le blog prend en charge les fonctionnalités courantes d’un blog, comme les listes d’articles, les catégories, les étiquettes, les archives, la recherche, le mode sombre et le changement de langue.

Il prend également en charge les commentaires et les statistiques de visites.

![Commentaires du blog](../../image/other/博客/支持留言.png)

Les commentaires s’affichent sous les articles. Les visiteurs peuvent envoyer un avatar, un pseudonyme, une adresse e-mail et le contenu du commentaire.

Les statistiques de visites affichent les vues des articles et les visites du site, ce qui vous aide à comprendre le trafic du blog.

## URL

Le blog est toujours disponible sous `/blog/`.

Par exemple, si votre domaine ImgBed est :

```text
https://image.example.com
```

l’URL du blog sera :

```text
https://image.example.com/blog/
```

Après la désactivation du blog, les visiteurs ne peuvent plus accéder à la page du blog.
