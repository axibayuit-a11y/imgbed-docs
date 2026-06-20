# د Telegram Channel اضافه کول

## د پیل مخکې اړتیاوې

| اړتیا | موخه |
| --- | --- |
| Telegram account | د bot او storage channel جوړولو لپاره |
| `@BotFather` | د Telegram bot جوړولو لپاره |
| Telegram channel | د files وروستی storage destination |
| `@userinfobot` | د channel `Chat ID` موندلو لپاره |

## چېرته یې اضافه کړو

1. System Settings پرانیزئ.
2. Upload Settings ته ولاړ شئ.
3. په پورته ښي لوري کې Add Channel کلیک کړئ.
4. `Telegram` وټاکئ.

## Field Reference

| Field | څه کوي | Required |
| --- | --- | --- |
| Channel name | د دې channel لپاره پېژندل کېدونکی نوم، لکه `Telegram Primary`. | Required |
| Active | channel enable یا disable کوي. | Recommended |
| Bot Token | د Telegram bot token. | Required |
| Session ID (Chat ID) | د Telegram channel ID. | Required |
| Relay Proxy URL (optional) | یوازې هغه وخت وکاروئ چې Telegram access ناثابت وي. بشپړ proxy URL د `https://` سره ولیکئ. | Optional |
| Remark | د راتلونکي maintenance لپاره یادښت. | Optional |

## Setup Steps

### 1. Telegram Bot جوړ کړئ

1. Telegram پرانیزئ او `@BotFather` ولټوئ.
2. chat پرانیزئ او `Start` کلیک کړئ.
3. `/newbot` ولېږئ.
4. د prompt له مخې bot display name ولیکئ.
5. د prompt له مخې bot username ولیکئ. username عموماً باید په `bot` پای ته ورسېږي.
6. کله چې bot جوړ شي، `@BotFather` به bot token درکړي.

دا token په ImgBed کې د `Bot Token` په field کې داخلېږي.

![Save the bot token](../../image/upload/telegram/保存机器人令牌.png)

### 2. Channel جوړ کړئ

1. په Telegram کې New Channel کلیک کړئ.
2. channel name ولیکئ.
3. د channel جوړول بشپړ کړئ.

public او private channels دواړه کارول کېدای شي.

![Create a channel](../../image/upload/telegram/新建频道.png)

### 3. Bot په Channel کې اضافه کړئ

1. هغه channel پرانیزئ چې جوړ مو کړی.
2. channel settings پرانیزئ.
3. member یا administrator اضافه کولو برخه پرانیزئ.
4. د خپل bot username ولټوئ.
5. bot په channel کې اضافه کړئ.

د باور وړ uploads لپاره، bot ته administrator permissions ورکول ښه دي.

![Invite the bot to the channel](../../image/upload/telegram/邀请机器人进频道里.png)

### 4. Channel ID له User Info - Get ID - IDbot څخه واخلئ

1. په Telegram کې `@userinfobot` ولټوئ. display name یې عموماً `User Info - Get ID - IDbot` وي.
2. chat پرانیزئ او `Start` کلیک کړئ.
3. د bot له options څخه `Channel` وټاکئ.
4. په message picker کې target channel وټاکئ او `@userinfobot` ته یې واستوئ.
5. کله چې result راشي، هغه number copy کړئ چې د `Id: -100...` په ډول ښکاري.

هغه number چې په `-100` پیلېږي، د ImgBed لپاره اړین `Session ID (Chat ID)` دی.

![Get the channel ID](../../image/upload/telegram/获取频道id.png)

### 5. په ImgBed کې Telegram Channel ډک کړئ

configuration dialog ته بېرته ولاړ شئ او fields داسې ډک کړئ:

| UI Field | Value |
| --- | --- |
| Channel Identifier | custom channel name، لکه `TelegramPrimary`. |
| Active | Recommended. |
| Bot Token | هغه bot token چې له `@BotFather` څخه مو اخیستی. |
| Session ID (Chat ID) | هغه `-100...` number چې `@userinfobot` درکړی. |
| Relay Proxy URL (optional) | یوازې د اړتیا پر وخت، لکه `https://your-tg-proxy.example.com`. |
| Remark | optional notes. |

کله چې بشپړ شي، Save کلیک کړئ.

![Edit the configuration](../../image/upload/telegram/编辑配置.png)

## څنګه یې Verify کړو

| Check | د verify طریقه |
| --- | --- |
| Channel card appears | له Save وروسته باید په Upload Settings کې Telegram channel card ښکاره شي. |
| Channel can be enabled | Active switch باید on پاتې شي. |
| Configuration is saved | detail view باید وښيي چې Bot Token او Chat ID خوندي شوي. |
| Upload works | test image upload کړئ او وګورئ چې په target Telegram channel کې ښکاري. |

## Quick Checklist

```text
له @BotFather سره bot جوړ کړئ
-> Bot Token خوندي کړئ
-> Telegram channel جوړ کړئ
-> bot channel ته اضافه کړئ او administrator permissions ورکړئ
-> @userinfobot ولټوئ او Channel وټاکئ
-> له channel څخه یو message @userinfobot ته forward کړئ
-> بېرته راغلی Id: -100... copy کړئ
-> په ImgBed کې Bot Token او Chat ID ولیکئ
-> Save او test image upload کړئ
```

## References

1. Telegram bots: https://core.telegram.org/bots
2. Telegram Bot API: https://core.telegram.org/bots/api
