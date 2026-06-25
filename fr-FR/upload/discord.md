# Ajouter un canal Discord

## Ce qu’il faut avant de commencer

| Élément | Rôle |
| --- | --- |
| Compte Discord | Utilisé pour créer un serveur, un canal et une application développeur. |
| Serveur Discord | Le bot doit rejoindre un serveur avant de pouvoir accéder à un canal. |
| Canal texte | Les images et les fichiers seront envoyés dans ce canal. |
| Discord Developer Portal | Utilisé pour créer une application, créer un bot et obtenir le `Bot Token`. |

## Où l’ajouter

1. Ouvrez les paramètres système.
2. Accédez aux paramètres de téléversement.
3. Cliquez sur Ajouter un canal en haut à droite.
4. Sélectionnez `Discord`.

## Référence des champs

| Champ | Rôle | Obligatoire |
| --- | --- | --- |
| Nom du canal | Nom facile à reconnaître pour ce canal, par exemple `Discord Primary`. | Obligatoire |
| Bot Token | Jeton du bot Discord. | Obligatoire |
| Channel ID | ID du canal texte cible. | Obligatoire |
| URL de proxy (facultatif) | À utiliser uniquement si l’accès au CDN Discord est instable. Saisissez l’URL complète, avec `https://`. | Facultatif |

## Étapes de configuration

### 1. Créer un serveur Discord et un canal texte

1. Ouvrez Discord.
2. Créez un nouveau serveur ou utilisez un serveur existant dont vous êtes propriétaire.
3. Créez un canal texte sur ce serveur.

![Créer un serveur](../../image/upload/discord/创建服务器.png)

### 2. Créer un bot dans Discord Developer Portal

1. Ouvrez Discord Developer Portal : `https://discord.com/developers/applications`
2. Cliquez sur `New Application`.
3. Saisissez un nom d’application et créez-la.
4. Ouvrez la page `Bot` dans la barre latérale gauche.
5. Générez ou réinitialisez le jeton sur la page `Bot`.
6. Enregistrez le jeton.

Ce jeton est le `Bot Token` à saisir dans ImgBed.

![Voir le token du bot](../../image/upload/discord/查看机器人令牌.png)

### 3. Générer un lien d’invitation OAuth2 et installer le bot

1. Ouvrez la page `OAuth2` dans la barre latérale gauche.
2. Dans les portées, sélectionnez `bot`.
3. Dans la zone des autorisations, activez ces permissions :

| Permission | Obligatoire |
| --- | --- |
| View Channels | Oui |
| Send Messages | Oui |
| Attach Files | Oui |
| Read Message History | Oui |

4. En bas de la page, confirmez que le type d’intégration est `Guild Install`.
5. Copiez l’URL générée.
6. Ouvrez cette URL dans le navigateur.
7. Sélectionnez le serveur cible.
8. Terminez le flux d’autorisation.

![Sélectionner les permissions du bot dans OAuth2](../../image/upload/discord/在oa2勾选机器人权限.png)

![Inviter le bot dans le canal](../../image/upload/discord/邀请机器人到频道.png)

### 4. Activer Developer Mode et copier le Channel ID

1. Dans Discord, cliquez sur l’icône d’engrenage à côté de votre avatar en bas à gauche.
2. Ouvrez `Advanced` dans la barre latérale gauche.
3. Activez `Developer Mode`.
4. Revenez au canal texte cible.
5. Faites un clic droit sur le nom du canal.
6. Cliquez sur `Copy Channel ID`.

Le nombre copié est le `Channel ID` requis par ImgBed.

![Activer Developer Mode](../../image/upload/discord/开启开发者权限.png)

![Copier le Channel ID](../../image/upload/discord/复制群频道id.png)

### 5. Compléter le canal Discord dans ImgBed

Revenez à la boîte de dialogue de configuration du canal et remplissez les champs ainsi :

| Champ d’interface | Valeur |
| --- | --- |
| Nom du canal | Nom personnalisé du canal, par exemple `DiscordPrimary`. |
| Bot Token | Jeton enregistré depuis la page `Bot` dans Discord Developer Portal. |
| Channel ID | ID du canal copié depuis Discord. |
| URL de proxy (facultatif) | Uniquement si nécessaire, par exemple `https://your-proxy.example.com`. |

Lorsque vous avez terminé, cliquez sur Enregistrer.

![Ajouter la configuration du canal Discord](../../image/upload/discord/添加dc新渠道配置.png)

## Vérification

| Vérification | Méthode |
| --- | --- |
| La carte du canal apparaît | Après l’enregistrement, la page des paramètres de téléversement doit afficher une carte de canal Discord. |
| Le canal peut être activé | L’interrupteur Active doit rester activé. |
| La configuration est enregistrée | La vue détaillée doit indiquer que Bot Token et Channel ID sont enregistrés. |
| Le téléversement fonctionne | Téléversez une image de test et vérifiez qu’elle apparaît dans le canal texte Discord cible. |

## Liste rapide

```text
Create a Discord server
-> Create a text channel
-> Create a bot in the Discord Developer Portal
-> Save the Bot Token from the Bot page
-> In OAuth2, select bot, View Channels, Send Messages, Attach Files, and Read Message History
-> Copy the generated URL and authorize the bot for the target server
-> Make sure the target text channel grants the same permissions
-> Enable Developer Mode
-> Right-click the target text channel and copy the Channel ID
-> Enter the Bot Token and Channel ID in ImgBed
-> Save and upload a test image
```

## Références

1. Guide de démarrage pour les développeurs Discord : https://docs.discord.com/developers/quick-start/getting-started
2. Aide Discord : où trouver l’ID d’utilisateur, de serveur ou de message : https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID
