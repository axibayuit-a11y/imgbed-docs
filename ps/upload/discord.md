# د Discord Channel اضافه کول

## د پیل مخکې اړتیاوې

| اړتیا | موخه |
| --- | --- |
| Discord account | د server، channel او developer application جوړولو لپاره. |
| Discord server | bot باید مخکې له channel access څخه server ته join شي. |
| Text channel | images او files دې channel ته لېږل کېږي. |
| Discord Developer Portal | د application جوړولو، bot جوړولو او `Bot Token` اخیستلو لپاره. |

## چېرته یې اضافه کړو

1. System Settings پرانیزئ.
2. Upload Settings ته ولاړ شئ.
3. په پورته ښي لوري کې Add Channel کلیک کړئ.
4. `Discord` وټاکئ.

## Field Reference

| Field | څه کوي | Required |
| --- | --- | --- |
| Channel name | د دې channel لپاره نوم، لکه `Discord Primary`. | Required |
| Bot Token | Discord bot token. | Required |
| Channel ID | د target text channel ID. | Required |
| Proxy URL (optional) | یوازې که Discord CDN access ناثابت وي. بشپړ URL د `https://` سره ولیکئ. | Optional |

## Setup Steps

### 1. Discord Server او Text Channel جوړ کړئ

1. Discord پرانیزئ.
2. نوی server جوړ کړئ، یا هغه existing server وکاروئ چې مالک یې یاست.
3. په همدې server کې text channel جوړ کړئ.

![Create a server](../../image/upload/discord/创建服务器.png)

### 2. په Discord Developer Portal کې Bot جوړ کړئ

1. Discord Developer Portal پرانیزئ: `https://discord.com/developers/applications`
2. `New Application` کلیک کړئ.
3. application name ولیکئ او create یې کړئ.
4. له left sidebar څخه `Bot` page پرانیزئ.
5. په `Bot` page کې token generate یا reset کړئ.
6. token خوندي کړئ.

دا token هغه `Bot Token` دی چې په ImgBed کې یې لیکئ.

![View the bot token](../../image/upload/discord/查看机器人令牌.png)

### 3. OAuth2 Invite Link جوړ او Bot Install کړئ

1. له left sidebar څخه `OAuth2` page پرانیزئ.
2. د scopes لاندې `bot` وټاکئ.
3. په permission area کې دا permissions enable کړئ:

| Permission | Required |
| --- | --- |
| View Channels | Yes |
| Send Messages | Yes |
| Attach Files | Yes |
| Read Message History | Yes |

4. د page په ښکته برخه کې confirm کړئ چې integration type `Guild Install` دی.
5. generated URL copy کړئ.
6. هغه URL په browser کې پرانیزئ.
7. target server وټاکئ.
8. authorization flow بشپړ کړئ.

![Select bot permissions in OAuth2](../../image/upload/discord/在oa2勾选机器人权限.png)

![Invite the bot to the channel](../../image/upload/discord/邀请机器人到频道.png)

### 4. Developer Mode Enable او Channel ID Copy کړئ

1. په Discord کې د خپل avatar ترڅنګ gear icon کلیک کړئ.
2. له left sidebar څخه Advanced پرانیزئ.
3. Developer Mode enable کړئ.
4. target text channel ته بېرته ولاړ شئ.
5. په channel name right-click وکړئ.
6. Copy Channel ID کلیک کړئ.

copy شوی number د ImgBed لپاره اړین `Channel ID` دی.

![Enable developer mode](../../image/upload/discord/开启开发者权限.png)

![Copy the channel ID](../../image/upload/discord/复制群频道id.png)

### 5. په ImgBed کې Discord Channel ډک کړئ

channel configuration dialog ته بېرته ولاړ شئ:

| UI Field | Value |
| --- | --- |
| Channel name | custom channel name، لکه `DiscordPrimary`. |
| Bot Token | هغه token چې د Discord Developer Portal له `Bot` page څخه مو خوندي کړی. |
| Channel ID | هغه channel ID چې له Discord څخه مو copy کړی. |
| Proxy URL (optional) | یوازې که اړتیا وي، لکه `https://your-proxy.example.com`. |

په پای کې Save کلیک کړئ.

![Add the Discord channel configuration](../../image/upload/discord/添加dc新渠道配置.png)

## څنګه یې Verify کړو

| Check | د verify طریقه |
| --- | --- |
| Channel card appears | له Save وروسته Upload Settings page باید Discord channel card وښيي. |
| Channel can be enabled | Active switch باید on پاتې شي. |
| Configuration is saved | detail view باید وښيي چې Bot Token او Channel ID خوندي شوي. |
| Upload works | test image upload کړئ او confirm کړئ چې په target Discord text channel کې ښکاري. |

## Quick Checklist

```text
Discord server جوړ کړئ
-> text channel جوړ کړئ
-> په Discord Developer Portal کې bot جوړ کړئ
-> له Bot page څخه Bot Token خوندي کړئ
-> په OAuth2 کې bot, View Channels, Send Messages, Attach Files او Read Message History وټاکئ
-> generated URL copy او bot د target server لپاره authorize کړئ
-> ډاډ ترلاسه کړئ چې target text channel همدا permissions لري
-> Developer Mode enable کړئ
-> په target text channel right-click او Channel ID copy کړئ
-> Bot Token او Channel ID په ImgBed کې ولیکئ
-> Save او test image upload کړئ
```

## References

1. Discord Developers Getting Started: https://docs.discord.com/developers/quick-start/getting-started
2. Discord Help - Where can I find my User/Server/Message ID: https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID
