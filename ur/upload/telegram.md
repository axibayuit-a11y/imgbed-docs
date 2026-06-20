# Telegram Channel شامل کریں

## شروع کرنے سے پہلے کیا چاہیے

| ضرورت | مقصد |
| --- | --- |
| Telegram account | bot اور storage channel بنانے کے لیے |
| `@BotFather` | Telegram bot بنانے کے لیے |
| Telegram channel | files کا final storage destination |
| `@userinfobot` | channel کا `Chat ID` معلوم کرنے کے لیے |

## کہاں شامل کریں

1. System Settings کھولیں۔
2. Upload Settings میں جائیں۔
3. اوپر دائیں طرف Add Channel پر کلک کریں۔
4. `Telegram` منتخب کریں۔

## Field Reference

| Field | کام | Required |
| --- | --- | --- |
| Channel name | اس channel کا واضح نام، مثلاً "Telegram Primary"۔ | Required |
| Active | اس channel کو enable یا disable کرتا ہے۔ | Recommended |
| Bot Token | آپ کے Telegram bot کا token۔ | Required |
| Session ID (Chat ID) | Telegram channel کی ID۔ | Required |
| Relay Proxy URL (optional) | صرف اس وقت استعمال کریں جب Telegram access غیر مستحکم ہو۔ مکمل proxy URL لکھیں، `https://` سمیت۔ | Optional |
| Remark | آئندہ maintenance کے لیے نوٹس۔ | Optional |

## Setup Steps

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

![Create a channel](../../image/upload/telegram/新建频道.png)

### 3. Bot کو Channel میں شامل کریں

1. جو channel ابھی بنایا ہے اسے کھولیں۔
2. channel settings کھولیں۔
3. member یا administrator شامل کریں۔
4. اپنے بنائے ہوئے bot username کو تلاش کریں۔
5. bot کو channel میں شامل کریں۔

زیادہ قابل اعتماد uploads کے لیے bot کو administrator permissions دیں۔

![Invite the bot to the channel](../../image/upload/telegram/邀请机器人进频道里.png)

### 4. User Info - Get ID - IDbot سے Channel ID حاصل کریں

1. Telegram میں `@userinfobot` تلاش کریں۔ اس کا display name عموماً `User Info - Get ID - IDbot` ہوتا ہے۔
2. chat کھول کر `Start` پر کلک کریں۔
3. bot کے options میں سے `Channel` منتخب کریں۔
4. message picker میں target channel منتخب کریں اور اسے `@userinfobot` کو بھیجیں۔
5. جب `@userinfobot` نتیجہ دے، تو `Id: -100...` کے طور پر دکھایا گیا number copy کریں۔

`-100` سے شروع ہونے والا number وہی `Session ID (Chat ID)` ہے جو ImgBed کو چاہیے۔

![Get the channel ID](../../image/upload/telegram/获取频道id.png)

### 5. ImgBed میں Telegram Channel بھریں

channel configuration dialog پر واپس جائیں اور fields یوں بھریں:

| UI Field | Value |
| --- | --- |
| Channel Identifier | اپنی مرضی کا channel name، مثلاً `TelegramPrimary`۔ |
| Active | Recommended۔ |
| Bot Token | `@BotFather` سے ملا ہوا bot token۔ |
| Session ID (Chat ID) | `@userinfobot` سے ملا ہوا `-100...` number۔ |
| Relay Proxy URL (optional) | صرف ضرورت ہو تو، مثلاً `https://your-tg-proxy.example.com`۔ |
| Remark | optional notes۔ |

کام مکمل ہو جائے تو Save پر کلک کریں۔

![Edit the configuration](../../image/upload/telegram/编辑配置.png)

## Verify کیسے کریں

| Check | Verify کرنے کا طریقہ |
| --- | --- |
| Channel card appears | Save کے بعد Upload Settings میں Telegram channel card نظر آنا چاہیے۔ |
| Channel can be enabled | Active switch on رہنا چاہیے۔ |
| Configuration is saved | detail view میں Bot Token اور Chat ID محفوظ دکھنے چاہئیں۔ |
| Upload works | ایک test image upload کریں اور دیکھیں کہ وہ target Telegram channel میں آتی ہے یا نہیں۔ |

## Quick Checklist

```text
@BotFather سے bot بنائیں
-> Bot Token محفوظ کریں
-> Telegram channel بنائیں
-> bot کو channel میں شامل کریں اور administrator permissions دیں
-> @userinfobot تلاش کریں اور Channel منتخب کریں
-> channel کا کوئی message @userinfobot کو forward کریں
-> واپس آنے والا Id: -100... copy کریں
-> ImgBed میں Bot Token اور Chat ID درج کریں
-> Save کریں اور test image upload کریں
```

## References

1. Telegram bots: https://core.telegram.org/bots
2. Telegram Bot API: https://core.telegram.org/bots/api
