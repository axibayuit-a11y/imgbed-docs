# Ajouter un canal Telegram

Pour utiliser Telegram comme stockage, créez un bot et ajoutez-le au canal où les fichiers seront enregistrés.

## À préparer

| Élément | Utilité |
| --- | --- |
| Compte Telegram | Créer bot et canal |
| `@BotFather` | Créer le bot |
| Canal Telegram | Destination des fichiers |
| `@userinfobot` | Obtenir le Chat ID du canal |

## Créer le bot

1. Recherchez `@BotFather` dans Telegram.
2. Ouvrez la conversation et envoyez `/newbot`.
3. Renseignez le nom affiché et le username. Le username doit généralement se terminer par `bot`.
4. Copiez le token renvoyé par BotFather.

![Bot Token](../../image/upload/telegram/保存机器人令牌.png)

## Créer le canal de stockage

Créez un nouveau canal Telegram. Il peut être public ou privé.

![Créer un canal](../../image/upload/telegram/新建频道.png)

## Ajouter le bot au canal

Dans les paramètres du canal, ajoutez le bot comme membre ou administrateur.

![Ajouter le bot au canal](../../image/upload/telegram/邀请机器人进频道里.png)

Pour des uploads plus fiables, donnez-lui des permissions d’administrateur.

## Obtenir le Chat ID

1. Recherchez `@userinfobot` dans Telegram.
2. Cliquez sur `Start`.
3. Choisissez `Channel`.
4. Envoyez au bot un message du canal cible.
5. Copiez le numéro affiché sous la forme `Id: -100...`.

![Obtenir le Chat ID](../../image/upload/telegram/获取频道id.png)

## Renseigner dans ImgBed

Dans Paramètres d’upload, choisissez `Telegram`.

| Champ | Valeur |
| --- | --- |
| Nom du canal | Par exemple `Telegram Main` |
| Bot Token | Token obtenu depuis `@BotFather` |
| Session ID / Chat ID | ID du canal commençant par `-100` |
| Relay Proxy URL | Optionnel, seulement si Telegram est instable |
| Note | Optionnel |

![Configuration Telegram](../../image/upload/telegram/编辑配置.png)

## Vérification

1. Enregistrez le canal.
2. Envoyez une image de test.
3. Vérifiez qu’elle apparaît dans le canal Telegram.
4. Ouvrez le lien ImgBed.

## Flux rapide

```text
Créer un bot avec @BotFather
-> Copier Bot Token
-> Créer un canal Telegram
-> Ajouter le bot au canal et lui donner les droits
-> Obtenir le Chat ID -100 avec @userinfobot
-> Renseigner Bot Token et Chat ID dans ImgBed
-> Enregistrer et tester l’upload
```

## Références

1. Telegram Bot: https://core.telegram.org/bots
2. Telegram Bot API: https://core.telegram.org/bots/api
