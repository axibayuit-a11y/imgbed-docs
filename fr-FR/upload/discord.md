# Ajouter un canal Discord

Le canal Discord utilise un salon de serveur Discord comme destination de fichiers.

## À préparer

| Élément | Utilité |
| --- | --- |
| Compte Discord | Gérer serveur et bot |
| Serveur Discord | Héberger le salon de stockage |
| Bot Discord | Envoyer les fichiers dans le salon |
| Bot Token | Autoriser ImgBed à utiliser le bot |
| Channel ID | Identifier le salon de destination |

## Créer un serveur

Vous pouvez utiliser un serveur existant, mais un serveur dédié est plus propre pour du stockage.

![Créer un serveur](../../image/upload/discord/创建服务器.png)

## Activer le mode développeur

Pour copier le Channel ID, activez le mode développeur dans Discord.

![Mode développeur](../../image/upload/discord/开启开发者权限.png)

Faites un clic droit sur le salon de destination et copiez son ID.

![Copier le Channel ID](../../image/upload/discord/复制群频道id.png)

## Créer le bot et obtenir le token

Dans Discord Developer Portal, créez une application et ajoutez un bot. Copiez le Bot Token et conservez-le avec soin.

![Bot Token](../../image/upload/discord/查看机器人令牌.png)

## Inviter le bot sur le serveur

Dans OAuth2, sélectionnez les permissions du bot et utilisez l’URL générée pour l’inviter.

![Permissions du bot](../../image/upload/discord/在oa2勾选机器人权限.png)

![Inviter le bot](../../image/upload/discord/邀请机器人到频道.png)

Le bot doit pouvoir envoyer des messages et joindre des fichiers dans le salon.

## Renseigner dans ImgBed

Dans Paramètres d’upload, choisissez `Discord`.

| Champ | Valeur |
| --- | --- |
| Nom du canal | Par exemple `Discord Storage` |
| Bot Token | Token du Developer Portal |
| Channel ID | ID du salon cible |
| Note | Optionnel |

![Configuration Discord](../../image/upload/discord/添加dc新渠道配置.png)

## Vérification

1. Enregistrez le canal.
2. Envoyez une image de test.
3. Vérifiez qu’elle apparaît dans le salon Discord.
4. Ouvrez le lien renvoyé par ImgBed.

En cas d’échec, vérifiez Bot Token, Channel ID, permissions du bot et présence du bot sur le serveur.
