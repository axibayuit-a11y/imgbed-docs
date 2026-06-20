# Utiliser le blog

La fonction Blog ajoute une page de blog indépendante à votre site ImgBed.

Une fois activée, les visiteurs peuvent y accéder depuis :

```text
https://votre-domaine/blog/
```

![Page d’accueil du blog](../../image/other/博客/博客首页.png)

Le blog est adapté du projet open source [LyraVoid/Mizuki](https://github.com/LyraVoid/Mizuki). ImgBed le réintègre en Vue afin qu’il fonctionne directement dans le site d’hébergement.

## Où configurer

```text
Paramètres système -> Autres paramètres -> Blog
```

![Paramètres du blog](../../image/other/博客/QQ20260611-221702.png)

## Première utilisation

1. Activez l’option `Activer`.
2. Sélectionnez le compte GitHub qui stockera la configuration du blog.
3. Cliquez sur `Mettre à jour le blog`.
4. Attendez le message de réussite.
5. Ouvrez `https://votre-domaine/blog/` pour vérifier le résultat.

Lors de la première utilisation, ImgBed prépare un dépôt privé dans le compte GitHub sélectionné :

```text
imgbed-blog-config
```

Ce dépôt contient la configuration du blog et le contenu des articles.

## Rédiger des articles

Les articles se modifient dans votre dépôt privé GitHub :

```text
imgbed-blog-config
```

Flux habituel :

1. Ouvrez GitHub.
2. Entrez dans le dépôt `imgbed-blog-config`.
3. Créez ou modifiez les fichiers d’articles.
4. Enregistrez les changements avec un commit.
5. Revenez dans l’administration ImgBed et cliquez sur `Mettre à jour le blog`. Vous pouvez aussi cliquer trois fois sur le logo en haut à gauche de la page du blog pour déclencher une mise à jour.

`Mettre à jour le blog` n’écrase pas les articles existants. Cette action sert surtout à initialiser le dépôt ou à rafraîchir le cache.

## Fonctions disponibles

Le blog prend en charge la liste des articles, les catégories, les tags, les archives, la recherche, le mode sombre et le changement de langue.

Les commentaires et les statistiques de visites sont également disponibles.

![Commentaires du blog](../../image/other/博客/支持留言.png)

Les commentaires s’affichent sous les articles. Les visiteurs peuvent renseigner un avatar, un pseudo, une adresse e-mail et le contenu du commentaire.

Les statistiques indiquent les vues des articles et les visites du site, ce qui aide à suivre l’activité du blog.

## Adresse d’accès

Le blog est toujours publié sous `/blog/`.

Si votre domaine ImgBed est :

```text
https://image.example.com
```

l’adresse du blog sera :

```text
https://image.example.com/blog/
```

Si vous désactivez le blog, les visiteurs ne pourront plus accéder à cette page.
