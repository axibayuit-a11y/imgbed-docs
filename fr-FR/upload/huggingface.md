# Ajouter un canal Hugging Face

## Ce qu’il faut avant de commencer

Vous n’avez besoin que de trois éléments :

| Élément | Rôle |
| --- | --- |
| Compte Hugging Face | Utilisé pour générer un jeton d’accès et posséder le dépôt. |
| Jeton d’accès utilisateur Hugging Face | ImgBed l’utilise pour accéder à l’API Hugging Face, créer des dépôts et téléverser des fichiers. |
| Nom du dépôt | Vous pouvez saisir uniquement le nom du dépôt, par exemple `image`. |

## Étapes de configuration

### Étape 1 : se connecter à Hugging Face et créer un jeton d’accès

1. Connectez-vous à Hugging Face.
2. Cliquez sur votre avatar en haut à droite et ouvrez `Settings`.
3. Ouvrez `Access Tokens` dans la barre latérale gauche.
4. Créez un nouveau jeton.
5. Donnez au jeton un nom reconnaissable.
6. Sélectionnez la permission `write`.
7. Copiez et enregistrez le jeton immédiatement après sa création.

![Créer un token](../../image/upload/huggingface/创建令牌.png)

## Étape 2 : compléter le canal Hugging Face dans ImgBed

Après avoir sélectionné `Hugging Face` dans les paramètres de téléversement, remplissez les champs ainsi :

| Champ d’interface | Valeur à saisir |
| --- | --- |
| Nom du canal | Nom de votre choix, par exemple `hf-primary`. |
| Nom du dépôt | Nom court de dépôt comme `image`, ou chemin complet comme `username/image`. |
| Jeton d’accès | Jeton d’accès utilisateur Hugging Face que vous venez de créer. |
| Dépôt privé | Activez ou désactivez selon vos besoins. |
| Remarque | Facultatif, par exemple `Primary upload channel`. |

![Ajouter le canal](../../image/upload/huggingface/添加渠道.png)

## Étape 3 : enregistrer le canal

Après avoir rempli les champs, cliquez sur Enregistrer.

Le système gère ces détails :

| Comportement du système | Description |
| --- | --- |
| Nom court du dépôt | ImgBed identifie le compte Hugging Face actuel et étend la valeur vers un chemin complet de dépôt. |
| Chemin complet du dépôt | ImgBed utilise le chemin `username/repository` exactement tel qu’il a été saisi. |
| Vérification du dépôt | Si vous utilisez le chemin du compte personnel actuel, ImgBed tente de créer le dépôt lorsqu’il n’existe pas. Si vous saisissez manuellement un chemin complet, ImgBed utilise directement ce chemin. |
| Type de dépôt | Ce canal utilise un dépôt `dataset`. |
| État public/privé | La visibilité du dépôt est synchronisée selon l’interrupteur actuel. |

## Liste rapide

```text
Sign in to Hugging Face
-> Create an Access Token
-> Select write permission
-> Return to ImgBed and enter the token and repository name
-> Save
-> If only a repo name is entered, ImgBed adds the current username automatically
-> If username/repo is entered, ImgBed uses it as-is
-> ImgBed checks or creates the dataset repository
-> Upload a test image
```
