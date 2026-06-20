# Ajouter un canal Dropbox

Le canal Dropbox utilise un compte Dropbox comme destination de stockage.

## À préparer

| Élément | Utilité |
| --- | --- |
| Compte Dropbox | Enregistrer les fichiers |
| Dropbox App | Donner un accès API |
| Access Token | Autoriser ImgBed à utiliser Dropbox |
| Dossier | Optionnel, souvent `imgbed` |

## Créer l’application

Ouvrez Dropbox App Console et créez une application.

![Créer l’application](../../image/upload/dropbox/开发者创建应用.png)

Choisissez le périmètre selon votre organisation de stockage. Un dossier dédié est souvent plus facile à maintenir.

## Configurer le callback

Si vous utilisez OAuth, ajoutez l’URL de retour ImgBed :

```text
https://votre-domaine/api/oauth/dropbox/callback
```

![Configurer le callback](../../image/upload/dropbox/配置回调地址.png)

## Ajouter les permissions

Activez les permissions d’envoi, lecture et suppression nécessaires.

![Permissions Dropbox](../../image/upload/dropbox/添加对应的权限.png)

## Obtenir le token

Obtenez le token depuis l’application ou via le flux d’autorisation ImgBed.

![Obtenir le token](../../image/upload/dropbox/获取令牌.png)

Copiez le token et collez-le dans ImgBed.

![Copier le token](../../image/upload/dropbox/复制令牌.png)

## Renseigner dans ImgBed

Dans Paramètres d’upload, choisissez `Dropbox`.

| Champ | Valeur |
| --- | --- |
| Nom du canal | Nom reconnaissable |
| Access Token | Token Dropbox |
| Dossier | Optionnel ; vide ou `imgbed` |
| Note | Optionnel |

## Vérification

Après enregistrement, lancez une consultation de capacité ou envoyez une image de test.

![Consultation de capacité](../../image/upload/dropbox/查询额度成功.png)

Si le fichier apparaît dans Dropbox et que le lien ImgBed s’ouvre, le canal est prêt.

## En cas d’échec

- Token expiré ou permissions incomplètes.
- Permissions de l’application changées sans nouvelle autorisation.
- Dossier avec espaces ou barres inutiles.
- Espace Dropbox insuffisant.
