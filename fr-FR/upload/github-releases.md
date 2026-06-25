# Ajouter un canal GitHub Releases

## Ce qu’il faut avant de commencer

Vous n’avez besoin que de trois éléments :

| Élément | Rôle |
| --- | --- |
| Compte GitHub | Utilisé pour générer un jeton d’accès et posséder le dépôt. |
| Jeton d’accès GitHub | ImgBed l’utilise pour accéder à l’API GitHub, créer des versions et téléverser des fichiers. |
| Nom du dépôt | Vous pouvez saisir uniquement le nom du dépôt, par exemple `image`. |

## Étapes de configuration

### Étape 1 : se connecter à GitHub et créer un jeton d’accès

1. Connectez-vous à GitHub.
2. Cliquez sur votre avatar en haut à droite et ouvrez `Settings`.
3. Ouvrez `Developer settings` dans la barre latérale gauche.
4. Ouvrez `Personal access tokens`.
5. Ouvrez `Tokens (classic)`.
6. Cliquez sur `Generate new token (classic)`.
7. Donnez au jeton un nom reconnaissable.
8. Choisissez une date d’expiration selon vos préférences de maintenance.
9. Sélectionnez les portées `repo` et `workflow`.
10. Copiez et enregistrez le jeton immédiatement après sa création.

![Ajouter les permissions GitHub](../../image/upload/github-releases/添加github权限.png)

## Étape 2 : compléter le canal GitHub Releases dans ImgBed

Après avoir sélectionné `GitHub Releases` dans les paramètres de téléversement, remplissez les champs ainsi :

| Champ d’interface | Valeur à saisir |
| --- | --- |
| Nom du canal | Nom de votre choix, par exemple `GitHubPrimary`. |
| Jeton d’accès | Jeton d’accès personnel GitHub que vous venez de créer. |
| Nom du dépôt | Nom court de dépôt comme `image`, ou chemin complet comme `username/image`. |
| Dépôt privé | Activez ou désactivez selon vos besoins. |
| Remarque | Facultatif, par exemple `Primary upload channel`. |

![Remplir la configuration du canal GitHub](../../image/upload/github-releases/填写github渠道配置.png)

## Étape 3 : enregistrer le canal

Après avoir rempli les champs, cliquez sur Enregistrer.

Le système gère ces détails :

| Comportement du système | Description |
| --- | --- |
| Nom court du dépôt | ImgBed identifie le compte GitHub actuel et étend la valeur vers un chemin complet de dépôt. |
| Chemin complet du dépôt | ImgBed utilise le chemin `username/repository` exactement tel qu’il a été saisi. |
| Vérification du dépôt | Si vous utilisez le chemin du compte personnel actuel, ImgBed crée automatiquement le dépôt lorsqu’il n’existe pas. Si vous saisissez manuellement un chemin complet, ImgBed utilise directement ce chemin. |
| État public/privé | La visibilité du dépôt est synchronisée selon l’interrupteur actuel. |

## Liste rapide

GitHub Releases fonctionne ainsi :

```text
Sign in to GitHub
-> Create an Access Token
-> Return to ImgBed and enter the token and repository name
-> Save
-> If only a repo name is entered, ImgBed adds the current username automatically
-> If username/repo is entered, ImgBed uses it as-is
-> Upload a test image
```
