# Ajouter un canal GitHub Releases

Le canal GitHub Releases enregistre les fichiers comme Release Assets dans un dépôt GitHub.

## Quand l’utiliser

- Vous utilisez déjà GitHub régulièrement.
- Vous voulez stocker de petits fichiers ou ressources de distribution dans des Releases.
- Vous préférez une destination gérée par GitHub Token.

## À préparer

| Élément | Utilité |
| --- | --- |
| Compte GitHub | Gérer dépôt et token |
| Dépôt | Héberger les Releases |
| Personal Access Token | Envoyer des assets dans la Release |
| Release Tag | Release à laquelle rattacher les fichiers |

## Permissions du token

Le Personal Access Token doit pouvoir gérer les Releases du dépôt cible.

![Permissions GitHub](../../image/upload/github-releases/添加github权限.png)

Si le dépôt est privé, incluez l’accès aux dépôts privés.

## Renseigner dans ImgBed

Dans Paramètres d’upload, choisissez `GitHub Releases`.

| Champ | Valeur |
| --- | --- |
| Nom du canal | Par exemple `GitHub Release` |
| Owner | Propriétaire du dépôt |
| Repo | Nom du dépôt |
| Token | Personal Access Token |
| Release Tag | Tag de la Release |
| Chemin | Optionnel |

![Configuration GitHub](../../image/upload/github-releases/填写github渠道配置.png)

## Vérification

1. Enregistrez le canal.
2. Envoyez une image de test.
3. Vérifiez qu’elle apparaît dans les Release Assets du dépôt.
4. Ouvrez le lien renvoyé par ImgBed.

## Notes

- GitHub Releases n’est pas un stockage spécialisé pour de gros volumes ou un trafic élevé.
- Limitez le token au dépôt nécessaire.
- Si vous supprimez manuellement assets ou releases, les liens ImgBed peuvent cesser de fonctionner.
