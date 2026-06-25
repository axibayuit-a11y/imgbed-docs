# Ajouter un canal Telegram

## Ce qu’il faut avant de commencer

| Élément | Rôle |
| --- | --- |
| Compte Telegram | Utilisé pour créer le bot et le canal de stockage. |
| `@BotFather` | Utilisé pour créer un bot Telegram. |
| Canal Telegram | Destination finale de stockage des fichiers. |
| `@userinfobot` | Utilisé pour consulter le `Chat ID` du canal. |

## Où l’ajouter

1. Ouvrez les paramètres système.
2. Accédez aux paramètres de téléversement.
3. Cliquez sur Ajouter un canal en haut à droite.
4. Sélectionnez `Telegram`.

## Référence des champs

| Champ | Rôle | Obligatoire |
| --- | --- | --- |
| Nom du canal | Nom facile à reconnaître pour ce canal, par exemple `Telegram Primary`. | Obligatoire |
| Actif | Active ou désactive ce canal. | Recommandé |
| Bot Token | Jeton de votre bot Telegram. | Obligatoire |
| Session ID (Chat ID) | ID du canal Telegram. | Obligatoire |
| URL de proxy relais (facultatif) | À utiliser uniquement si l’accès à Telegram est instable. Saisissez l’URL complète du proxy, avec `https://`. | Facultatif |
| Remarque | Notes pour une maintenance ultérieure. | Facultatif |

## Étapes de configuration

### 1. Créer un bot Telegram

1. Ouvrez Telegram et recherchez `@BotFather`.
2. Ouvrez la discussion et cliquez sur `Start`.
3. Envoyez `/newbot`.
4. Suivez les instructions pour saisir le nom affiché du bot.
5. Suivez les instructions pour saisir le nom d’utilisateur du bot. Il doit généralement se terminer par `bot`.
6. Une fois le bot créé, `@BotFather` renvoie un jeton de bot.

Ce jeton est le `Bot Token` à saisir dans ImgBed.

![Enregistrer le token du bot](../../image/upload/telegram/保存机器人令牌.png)

### 2. Créer un canal

1. Dans Telegram, cliquez sur Nouveau canal.
2. Saisissez un nom de canal.
3. Terminez la création du canal.

Les canaux publics et privés peuvent être utilisés.

![Créer un canal](../../image/upload/telegram/新建频道.png)

### 3. Ajouter le bot au canal

1. Ouvrez le canal que vous venez de créer.
2. Ouvrez les paramètres du canal.
3. Ajoutez un membre ou un administrateur.
4. Recherchez le nom d’utilisateur du bot que vous avez créé.
5. Ajoutez le bot au canal.

Pour des téléversements plus fiables, accordez au bot des permissions d’administrateur.

![Inviter le bot dans le canal](../../image/upload/telegram/邀请机器人进频道里.png)

### 4. Obtenir le Channel ID avec User Info - Get ID - IDbot

1. Recherchez `@userinfobot` dans Telegram. Son nom affiché est généralement `User Info - Get ID - IDbot`.
2. Ouvrez la discussion et cliquez sur `Start`.
3. Choisissez `Channel` parmi les options du bot.
4. Dans le sélecteur de messages, choisissez le canal cible et envoyez-le à `@userinfobot`.
5. Lorsque `@userinfobot` renvoie le résultat, copiez le nombre affiché sous la forme `Id: -100...`.

Le nombre qui commence par `-100` est le `Session ID (Chat ID)` dont ImgBed a besoin.

![Obtenir le Channel ID](../../image/upload/telegram/获取频道id.png)

### 5. Compléter le canal Telegram dans ImgBed

Revenez à la boîte de dialogue de configuration du canal et remplissez les champs ainsi :

| Champ d’interface | Valeur |
| --- | --- |
| Identifiant du canal | Nom personnalisé du canal, par exemple `TelegramPrimary`. |
| Actif | Recommandé. |
| Bot Token | Jeton du bot obtenu auprès de `@BotFather`. |
| Session ID (Chat ID) | Nombre `-100...` renvoyé par `@userinfobot`. |
| URL de proxy relais (facultatif) | Uniquement si nécessaire, par exemple `https://your-tg-proxy.example.com`. |
| Remarque | Notes facultatives. |

Lorsque vous avez terminé, cliquez sur Enregistrer.

![Modifier la configuration](../../image/upload/telegram/编辑配置.png)

## Vérification

| Vérification | Méthode |
| --- | --- |
| La carte du canal apparaît | Après l’enregistrement, la page des paramètres de téléversement doit afficher une carte de canal Telegram. |
| Le canal peut être activé | L’interrupteur Active doit rester activé. |
| La configuration est enregistrée | La vue détaillée doit indiquer que Bot Token et Chat ID sont enregistrés. |
| Le téléversement fonctionne | Téléversez une image de test et vérifiez qu’elle apparaît dans le canal Telegram cible. |

## Liste rapide

```text
Create a bot with @BotFather
-> Save the Bot Token
-> Create a Telegram channel
-> Add the bot to the channel and grant administrator permissions
-> Search for @userinfobot and choose Channel
-> Forward any message from the channel to @userinfobot
-> Copy the returned Id: -100...
-> Enter the Bot Token and Chat ID in ImgBed
-> Save and upload a test image
```

## Références

1. Bots Telegram : https://core.telegram.org/bots
2. API Telegram Bot : https://core.telegram.org/bots/api
