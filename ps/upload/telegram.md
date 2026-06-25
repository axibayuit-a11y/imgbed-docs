# د Telegram چینل اضافه کول

## د پیل مخکې اړتیاوې

| اړتیا | موخه |
| --- | --- |
| Telegram حساب | د بوټ او زېرمه چینل جوړولو لپاره |
| `@BotFather` | د Telegram بوټ جوړولو لپاره |
| Telegram چینل | د فایلونه وروستی زېرمه destination |
| `@userinfobot` | د چینل `Chat ID` موندلو لپاره |

## چېرته یې اضافه کړو

1. د سیسټم تنظیمات پرانیزئ.
2. د اپلوډ تنظیمات ته ولاړ شئ.
3. په پورته ښي لوري کې چینل اضافه کړئ کلیک کړئ.
4. `Telegram` وټاکئ.

## د فیلډونو لارښود

| فیلډ | څه کوي | اړین |
| --- | --- | --- |
| د چینل نوم | د دې چینل لپاره پېژندل کېدونکی نوم، لکه `Telegram Primary`. | اړین |
| Active | چینل enable یا disable کوي. | سپارښتنه کېږي |
| بوټ ټوکن | د Telegram بوټ ټوکن. | اړین |
| Session ID (Chat ID) | د Telegram چینل ID. | اړین |
| Relay Proxy URL (اختیاري) | یوازې هغه وخت وکاروئ چې Telegram لاسرسی ناثابت وي. بشپړ proxy URL د `https://` سره ولیکئ. | اختیاري |
| یادښت | د راتلونکي maintenance لپاره یادښت. | اختیاري |

## د تنظیم ګامونه

### 1. Telegram بوټ جوړ کړئ

1. Telegram پرانیزئ او `@BotFather` ولټوئ.
2. chat پرانیزئ او `Start` کلیک کړئ.
3. `/newbot` ولېږئ.
4. د prompt له مخې بوټ display name ولیکئ.
5. د prompt له مخې بوټ username ولیکئ. username عموماً باید په `bot` پای ته ورسېږي.
6. کله چې بوټ جوړ شي، `@BotFather` به بوټ ټوکن درکړي.

دا ټوکن په ImgBed کې د `Bot Token` په فیلډ کې داخلېږي.

![خوندي the بوټ ټوکن](../../image/upload/telegram/保存机器人令牌.png)

### 2. چینل جوړ کړئ

1. په Telegram کې New چینل کلیک کړئ.
2. چینل name ولیکئ.
3. د چینل جوړول بشپړ کړئ.

public او private چینلs دواړه کارول کېدای شي.

![Create a چینل](../../image/upload/telegram/新建频道.png)

### 3. بوټ په چینل کې اضافه کړئ

1. هغه چینل پرانیزئ چې جوړ مو کړی.
2. چینل settings پرانیزئ.
3. member یا administrator اضافه کولو برخه پرانیزئ.
4. د خپل بوټ username ولټوئ.
5. بوټ په چینل کې اضافه کړئ.

د باور وړ اپلوډs لپاره، بوټ ته administrator permissions ورکول ښه دي.

![Invite the بوټ to the چینل](../../image/upload/telegram/邀请机器人进频道里.png)

### 4. چینل ID له User Info - Get ID - IDبوټ څخه واخلئ

1. په Telegram کې `@userinfobot` ولټوئ. display name یې عموماً `User Info - Get ID - IDbot` وي.
2. chat پرانیزئ او `Start` کلیک کړئ.
3. د بوټ له options څخه `Channel` وټاکئ.
4. په message picker کې target چینل وټاکئ او `@userinfobot` ته یې واستوئ.
5. کله چې result راشي، هغه number کاپي کړئ چې د `Id: -100...` په ډول ښکاري.

هغه number چې په `-100` پیلېږي، د ImgBed لپاره اړین `Session ID (Chat ID)` دی.

![Get the چینل ID](../../image/upload/telegram/获取频道id.png)

### 5. په ImgBed کې Telegram چینل ډک کړئ

تنظیمات dialog ته بېرته ولاړ شئ او fields داسې ډک کړئ:

| د UI فیلډ | ارزښت |
| --- | --- |
| چینل Identifier | custom چینل name، لکه `TelegramPrimary`. |
| Active | سپارښتنه کېږي. |
| بوټ ټوکن | هغه بوټ ټوکن چې له `@BotFather` څخه مو اخیستی. |
| Session ID (Chat ID) | هغه `-100...` number چې `@userinfobot` درکړی. |
| Relay Proxy URL (اختیاري) | یوازې د اړتیا پر وخت، لکه `https://your-tg-proxy.example.com`. |
| یادښت | اختیاري notes. |

کله چې بشپړ شي، خوندي کلیک کړئ.

![Edit the تنظیمات](../../image/upload/telegram/编辑配置.png)

## څنګه یې Verify کړو

| کتنه | د verify طریقه |
| --- | --- |
| چینل card اپears | له خوندي وروسته باید په د اپلوډ تنظیمات کې Telegram چینل card ښکاره شي. |
| چینل can be enabled | Active switch باید on پاتې شي. |
| تنظیمات is خونديd | detail view باید وښيي چې بوټ ټوکن او Chat ID خوندي شوي. |
| اپلوډ works | test image اپلوډ کړئ او وګورئ چې په target Telegram چینل کې ښکاري. |

## چټک چک‌لېست

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

## سرچینې

1. Telegram بوټs: https://core.telegram.org/bots
2. Telegram بوټ API: https://core.telegram.org/bots/api
