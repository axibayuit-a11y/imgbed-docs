# Telegram Channel شامل کریں

## شروع کرنے سے پہلے کیا چاہیے

| ضرورت | مقصد |
| --- | --- |
| Telegram account | bot اور storage channel بنانے کے لیے |
| `@BotFather` | Telegram bot بنانے کے لیے |
| Telegram channel | files کا final storage destination |
| `@userinfobot` | channel کا `Chat ID` معلوم کرنے کے لیے |

## کہاں شامل کریں

1. سسٹم سیٹنگز کھولیں۔
2. اپ لوڈ سیٹنگز میں جائیں۔
3. اوپر دائیں طرف چینل شامل کریں پر کلک کریں۔
4. `Telegram` منتخب کریں۔

## فیلڈز کی تفصیل

| فیلڈ | کام | ضروری |
| --- | --- | --- |
| Channel name | اس channel کا واضح نام، مثلاً "Telegram Primary"۔ | ضروری |
| Active | اس channel کو فعال یا disable کرتا ہے۔ | تجویز کردہ |
| Bot Token | آپ کے Telegram bot کا token۔ | ضروری |
| Session ID (Chat ID) | Telegram channel کی ID۔ | ضروری |
| Relay Proxy URL (اختیاری) | صرف اس وقت استعمال کریں جب Telegram access غیر مستحکم ہو۔ مکمل proxy URL لکھیں، `https://` سمیت۔ | اختیاری |
| Remark | آئندہ maintenance کے لیے نوٹس۔ | اختیاری |

## سیٹ اپ کے مراحل

### 1. Telegram Bot بنائیں

1. Telegram کھولیں اور `@BotFather` تلاش کریں۔
2. chat کھول کر `Start` پر کلک کریں۔
3. `/newbot` بھیجیں۔
4. prompts کے مطابق bot display name درج کریں۔
5. prompts کے مطابق bot username درج کریں۔ username عموماً `bot` پر ختم ہونا چاہیے۔
6. bot بننے کے بعد `@BotFather` ایک bot token واپس دے گا۔

یہی token ImgBed میں `Bot Token` کے طور پر درج کرنا ہے۔

![Save the bot token](../../image/upload/telegram/保存机器人令牌.png)

### 2. Channel بنائیں

1. Telegram میں New Channel پر کلک کریں۔
2. channel name درج کریں۔
3. channel creation مکمل کریں۔

Public اور private دونوں channels استعمال کیے جا سکتے ہیں۔

![چینل بنائیں](../../image/upload/telegram/新建频道.png)

### 3. Bot کو Channel میں شامل کریں

1. جو channel ابھی بنایا ہے اسے کھولیں۔
2. channel settings کھولیں۔
3. member یا administrator شامل کریں۔
4. اپنے بنائے ہوئے bot username کو تلاش کریں۔
5. bot کو channel میں شامل کریں۔

زیادہ قابل اعتماد uploads کے لیے bot کو administrator permissions دیں۔

![Invite the bot to the channel](../../image/upload/telegram/邀请机器人进频道里.png)

### 4. `User Info - Get ID - IDbot` سے Channel ID حاصل کریں

1. Telegram میں `@userinfobot` تلاش کریں۔ اس کا display name عموماً `User Info - Get ID - IDbot` ہوتا ہے۔
2. chat کھول کر `Start` پر کلک کریں۔
3. bot کے options میں سے `Channel` منتخب کریں۔
4. message picker میں target channel منتخب کریں اور اسے `@userinfobot` کو بھیجیں۔
5. جب `@userinfobot` نتیجہ دے، تو `Id: -100...` کے طور پر دکھایا گیا number کاپی کریں۔

`-100` سے شروع ہونے والا number وہی `Session ID (Chat ID)` ہے جو ImgBed کو چاہیے۔

![channel ID حاصل کریں](../../image/upload/telegram/获取频道id.png)

### 5. ImgBed میں Telegram Channel بھریں

channel configuration dialog پر واپس جائیں اور فیلڈز یوں بھریں:

| UI فیلڈ | قدر |
| --- | --- |
| Channel Identifier | اپنی مرضی کا channel name، مثلاً `TelegramPrimary`۔ |
| Active | تجویز کردہ۔ |
| Bot Token | `@BotFather` سے ملا ہوا bot token۔ |
| Session ID (Chat ID) | `@userinfobot` سے ملا ہوا `-100...` number۔ |
| Relay Proxy URL (اختیاری) | صرف ضرورت ہو تو، مثلاً `https://your-tg-proxy.example.com`. |
| Remark | اختیاری نوٹس۔ |

کام مکمل ہو جائے تو Save پر کلک کریں۔

![configuration میں ترمیم کریں](../../image/upload/telegram/编辑配置.png)

## Verify کیسے کریں

| جانچ | Verify کرنے کا طریقہ |
| --- | --- |
| چینل card ظاہر ہوتا ہے | محفوظ کرنے کے بعد اپ لوڈ سیٹنگز میں Telegram چینل card نظر آنا چاہیے۔ |
| Channel can be فعال | Active switch on رہنا چاہیے۔ |
| configuration محفوظ ہے | تفصیلی منظر میں Bot Token اور Chat ID محفوظ دکھنے چاہئیں۔ |
| Upload کام کرتا ہے | ایک آزمائشی تصویر upload کریں اور دیکھیں کہ وہ target Telegram چینل میں آتی ہے یا نہیں۔ |

## فوری چیک لسٹ

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

## حوالہ جات

1. Telegram bots: https://core.telegram.org/bots
2. Telegram Bot API: https://core.telegram.org/bots/api
