# Ajouter un canal Hugging Face

Le canal Hugging Face enregistre les fichiers dans un dépôt Hugging Face.

## À préparer

| Élément | Utilité |
| --- | --- |
| Compte Hugging Face | Gérer dépôt et token |
| Repository | Emplacement des fichiers |
| Access Token | Autoriser l’écriture depuis ImgBed |
| Dossier | Optionnel |

## Créer le token

Dans les paramètres Hugging Face, créez un Access Token ayant le droit d’écrire dans le dépôt.

![Créer le token](../../image/upload/huggingface/创建令牌.png)

Copiez le token et conservez-le en sécurité.

## Renseigner dans ImgBed

Dans Paramètres d’upload, choisissez `Hugging Face`.

| Champ | Valeur |
| --- | --- |
| Nom du canal | Par exemple `HF Storage` |
| Repository | `utilisateur/depot` |
| Token | Hugging Face Access Token |
| Dossier | Optionnel, souvent `imgbed` |
| Note | Optionnel |

![Ajouter le canal](../../image/upload/huggingface/添加渠道.png)

## Vérification

1. Enregistrez le canal.
2. Envoyez une image de test.
3. Vérifiez que le fichier apparaît dans le dépôt.
4. Ouvrez le lien via ImgBed.

## Précautions

- Vérifiez si le dépôt est public ou privé. Dans un dépôt public, les fichiers peuvent être visibles.
- Donnez au token uniquement les droits nécessaires.
- Pour beaucoup de fichiers ou un trafic élevé, tenez compte des limites Hugging Face.
