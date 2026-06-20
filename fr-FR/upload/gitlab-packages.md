# Ajouter un canal GitLab Packages

Le canal GitLab Packages utilise le Generic Package Registry de GitLab comme stockage.

## À préparer

| Élément | Utilité |
| --- | --- |
| Compte GitLab | Gérer projet et token |
| Projet GitLab | Emplacement du paquet |
| Access Token | Envoyer des fichiers au Package Registry |
| Project ID | Identifier le projet dans ImgBed |

## Créer le token

Dans GitLab, créez un Access Token avec les permissions nécessaires.

![Générer le token](../../image/upload/gitlab-packages/点击生成旧版令牌.png)

Cochez les permissions de lecture et écriture nécessaires pour les packages.

![Permissions du token](../../image/upload/gitlab-packages/勾选令牌权限.png)

Le token peut n’être affiché qu’une seule fois. Copiez-le et conservez-le.

## Renseigner dans ImgBed

Dans Paramètres d’upload, choisissez `GitLab Packages`.

| Champ | Valeur |
| --- | --- |
| Nom du canal | Par exemple `GitLab Packages` |
| GitLab Host | `https://gitlab.com` ou votre instance |
| Project ID | ID du projet |
| Token | Access Token |
| Package Name | Nom du paquet |
| Version | Version |
| Chemin | Optionnel |

![Configuration GitLab](../../image/upload/gitlab-packages/配置渠道内容.png)

## Vérification

1. Enregistrez le canal.
2. Envoyez un fichier de test.
3. Vérifiez qu’il apparaît dans le Package Registry.
4. Ouvrez le lien via ImgBed.

## Erreurs courantes

- Project ID incorrect.
- Token sans droit d’écriture sur le Package Registry.
- GitLab Host mal saisi.
- Package Registry désactivé dans le projet.
