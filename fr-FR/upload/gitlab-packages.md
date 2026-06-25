# Ajouter un canal GitLab Packages

## Ce qu’il faut avant de commencer

Vous n’avez besoin que de trois éléments :

| Élément | Rôle |
| --- | --- |
| Compte GitLab | Utilisé pour générer un jeton d’accès et posséder le projet. |
| Jeton d’accès personnel GitLab | ImgBed l’utilise pour accéder à l’API GitLab, créer des projets et téléverser des fichiers dans Generic Packages. |
| Nom du projet | Vous pouvez saisir uniquement le nom du projet, par exemple `imgbed`. |

## Étapes de configuration

### Étape 1 : se connecter à GitLab et créer un jeton d’accès

1. Connectez-vous à GitLab.
2. Cliquez sur votre avatar en haut à droite et ouvrez `Preferences`.
3. Ouvrez `Access Tokens` dans la barre latérale gauche.
4. Donnez au jeton un nom reconnaissable.
5. Choisissez une date d’expiration selon vos préférences de maintenance.
6. Sélectionnez la portée `api`.
7. Copiez et enregistrez le jeton immédiatement après sa création.

![Créer un token legacy](../../image/upload/gitlab-packages/点击生成旧版令牌.png)

![Sélectionner les permissions du token](../../image/upload/gitlab-packages/勾选令牌权限.png)

## Étape 2 : compléter le canal GitLab Packages dans ImgBed

Après avoir sélectionné `GitLab Packages` dans les paramètres de téléversement, remplissez les champs ainsi :

| Champ d’interface | Valeur à saisir |
| --- | --- |
| Nom du canal | Nom de votre choix, par exemple `GitLabPrimary`. |
| Jeton d’accès | Jeton d’accès personnel GitLab que vous venez de créer. |
| Nom du projet | Nom court de projet comme `imgbed`, ou chemin complet comme `username/imgbed`. |
| Dépôt privé | Activez ou désactivez selon vos besoins. |
| Remarque | Facultatif, par exemple `Primary upload channel`. |

![Configurer le canal](../../image/upload/gitlab-packages/配置渠道内容.png)

## Étape 3 : enregistrer le canal

Après avoir rempli les champs, cliquez sur Enregistrer.

Le système gère ces détails :

| Comportement du système | Description |
| --- | --- |
| Nom court du projet | ImgBed identifie le compte GitLab actuel et étend la valeur vers un chemin complet de projet. |
| Chemin complet du projet | ImgBed utilise le chemin `username/project` exactement tel qu’il a été saisi. |
| Vérification du projet | Si vous utilisez le chemin du compte personnel actuel, ImgBed crée automatiquement le projet lorsqu’il n’existe pas. Si vous saisissez manuellement un chemin complet, ImgBed utilise directement ce chemin. |
| État public/privé | La visibilité du projet est synchronisée selon l’interrupteur actuel. |

## Liste rapide

```text
Sign in to GitLab
-> Create an Access Token
-> Select only the api scope
-> Return to ImgBed and enter the token and project name
-> Save
-> If only a project name is entered, ImgBed adds the current username automatically
-> If username/project is entered, ImgBed uses it as-is
-> Upload a test image
```
