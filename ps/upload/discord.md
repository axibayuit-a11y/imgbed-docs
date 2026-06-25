# د Discord چینل اضافه کول

## د پیل مخکې اړتیاوې

| اړتیا | موخه |
| --- | --- |
| Discord حساب | د سرور، چینل او developer اپlication جوړولو لپاره. |
| Discord سرور | بوټ باید مخکې له چینل لاسرسی څخه سرور ته join شي. |
| Text چینل | انځورونه او فایلونه دې چینل ته لېږل کېږي. |
| Discord Developer Portal | د اپlication جوړولو، بوټ جوړولو او `Bot Token` اخیستلو لپاره. |

## چېرته یې اضافه کړو

1. د سیسټم تنظیمات پرانیزئ.
2. د اپلوډ تنظیمات ته ولاړ شئ.
3. په پورته ښي لوري کې چینل اضافه کړئ کلیک کړئ.
4. `Discord` وټاکئ.

## د فیلډونو لارښود

| فیلډ | څه کوي | اړین |
| --- | --- | --- |
| د چینل نوم | د دې چینل لپاره نوم، لکه `Discord Primary`. | اړین |
| بوټ ټوکن | Discord بوټ ټوکن. | اړین |
| چینل ID | د target text چینل ID. | اړین |
| Proxy URL (اختیاري) | یوازې که Discord CDN لاسرسی ناثابت وي. بشپړ URL د `https://` سره ولیکئ. | اختیاري |

## د تنظیم ګامونه

### 1. Discord سرور او Text چینل جوړ کړئ

1. Discord پرانیزئ.
2. نوی سرور جوړ کړئ، یا هغه existing سرور وکاروئ چې مالک یې یاست.
3. په همدې سرور کې text چینل جوړ کړئ.

![Create a سرور](../../image/upload/discord/创建服务器.png)

### 2. په Discord Developer Portal کې بوټ جوړ کړئ

1. Discord Developer Portal پرانیزئ: `https://discord.com/developers/applications`
2. `New Application` کلیک کړئ.
3. اپlication name ولیکئ او create یې کړئ.
4. له کیڼ اړخ پټه څخه `Bot` page پرانیزئ.
5. په `Bot` page کې ټوکن generate یا reset کړئ.
6. ټوکن خوندي کړئ.

دا ټوکن هغه `Bot Token` دی چې په ImgBed کې یې لیکئ.

![View the بوټ ټوکن](../../image/upload/discord/查看机器人令牌.png)

### 3. OAuth2 Invite Link جوړ او بوټ Install کړئ

1. له کیڼ اړخ پټه څخه `OAuth2` page پرانیزئ.
2. د سکوپونه لاندې `bot` وټاکئ.
3. په permission area کې دا permissions enable کړئ:

| اجازه | اړین |
| --- | --- |
| View چینلs | Yes |
| Send Messages | Yes |
| Attach فایلونه | Yes |
| Read Message History | Yes |

4. د page په ښکته برخه کې confirm کړئ چې integration type `Guild Install` دی.
5. generated URL کاپي کړئ.
6. هغه URL په browser کې پرانیزئ.
7. target سرور وټاکئ.
8. authorization flow بشپړ کړئ.

![Select بوټ permissions in OAuth2](../../image/upload/discord/在oa2勾选机器人权限.png)

![Invite the بوټ to the چینل](../../image/upload/discord/邀请机器人到频道.png)

### 4. Developer Mode Enable او چینل ID کاپي کړئ

1. په Discord کې د خپل avatar ترڅنګ gear icon کلیک کړئ.
2. له کیڼ اړخ پټه څخه Advanced پرانیزئ.
3. Developer Mode enable کړئ.
4. target text چینل ته بېرته ولاړ شئ.
5. په چینل name right-click وکړئ.
6. کاپي چینل ID کلیک کړئ.

کاپي شوی number د ImgBed لپاره اړین `Channel ID` دی.

![Enable developer mode](../../image/upload/discord/开启开发者权限.png)

![کاپي the چینل ID](../../image/upload/discord/复制群频道id.png)

### 5. په ImgBed کې Discord چینل ډک کړئ

چینل تنظیمات dialog ته بېرته ولاړ شئ:

| د UI فیلډ | ارزښت |
| --- | --- |
| د چینل نوم | custom چینل name، لکه `DiscordPrimary`. |
| بوټ ټوکن | هغه ټوکن چې د Discord Developer Portal له `Bot` page څخه مو خوندي کړی. |
| چینل ID | هغه چینل ID چې له Discord څخه مو کاپي کړی. |
| Proxy URL (اختیاري) | یوازې که اړتیا وي، لکه `https://your-proxy.example.com`. |

په پای کې خوندي کلیک کړئ.

![Add the Discord چینل تنظیمات](../../image/upload/discord/添加dc新渠道配置.png)

## څنګه یې Verify کړو

| کتنه | د verify طریقه |
| --- | --- |
| چینل card اپears | له خوندي وروسته د اپلوډ تنظیمات page باید Discord چینل card وښيي. |
| چینل can be enabled | Active switch باید on پاتې شي. |
| تنظیمات is خونديd | detail view باید وښيي چې بوټ ټوکن او چینل ID خوندي شوي. |
| اپلوډ works | test image اپلوډ کړئ او confirm کړئ چې په target Discord text چینل کې ښکاري. |

## چټک چک‌لېست

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

## سرچینې

1. Discord Developers Getting Started: https://docs.discord.com/developers/quick-start/getting-started
2. Discord Help - Where can I find my User/سرور/Message ID: https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID
