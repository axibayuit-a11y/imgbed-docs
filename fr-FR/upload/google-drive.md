# Ajouter un canal Google Drive

Le canal Google Drive utilise un compte Google Drive comme destination de stockage.

## À préparer

| Élément | Utilité |
| --- | --- |
| Compte Google | Gérer Drive et OAuth |
| Projet Google Cloud | Créer l’OAuth Client |
| Client ID / Client Secret | Autoriser ImgBed |
| Refresh Token | Maintenir l’accès dans le temps |
| Domaine ImgBed | Configurer le callback OAuth |

## Créer l’OAuth Client

Dans Google Cloud Console, créez un OAuth Client de type Web application.

![Créer l’OAuth Client](../../image/upload/google-drive/oa客户端id创建.png)

Ajoutez cette URI comme redirection autorisée :

```text
https://votre-domaine/api/oauth/google/callback
```

![Configurer l’URL OAuth](../../image/upload/google-drive/填写oa客户端url信息.png)

## Renseigner dans ImgBed

Dans Paramètres d’upload, choisissez `Google Drive` et renseignez Client ID et Client Secret.

![Configuration Google Drive](../../image/upload/google-drive/粘贴回添加新渠道配置.png)

| Champ | Valeur |
| --- | --- |
| Nom du canal | Par exemple `Google Drive Main` |
| Client ID | OAuth Client ID |
| Client Secret | OAuth Client Secret |
| Refresh Token | À obtenir ensuite |
| Dossier racine | Optionnel, souvent `imgbed` |

## Obtenir le Refresh Token

1. Dans ImgBed, cliquez sur `Obtenir le token`.
2. Connectez-vous avec le compte Google qui servira de destination.
3. Acceptez les permissions.
4. Copiez le Refresh Token affiché sur la page de callback.
5. Collez-le dans le champ `Refresh Token`.

![Copier le Refresh Token](../../image/upload/google-drive/授权完复制token.png)

## Vérification

1. Enregistrez le canal.
2. Envoyez une image de test.
3. Vérifiez qu’elle apparaît dans Google Drive.
4. Ouvrez le lien renvoyé par ImgBed.

## Notes

- Si l’écran de consentement OAuth n’est pas prêt, l’autorisation peut échouer.
- Le compte qui génère le Refresh Token sera le compte de stockage.
- Si Drive n’a plus d’espace, l’upload échouera.
- Ne publiez pas le Client Secret.
