# Telegram ချန်နယ် ထည့်သွင်းခြင်း

## မစတင်မီ လိုအပ်သည့်အရာများ

| လိုအပ်ချက် | ရည်ရွယ်ချက် |
| --- | --- |
| Telegram အကောင့် | Bot နှင့် storage channel ဖန်တီးရန် အသုံးပြုသည်။ |
| `@BotFather` | Telegram bot ဖန်တီးရန် အသုံးပြုသည်။ |
| Telegram channel တစ်ခု | ဖိုင်များအတွက် နောက်ဆုံး storage destination။ |
| `@userinfobot` | Channel `Chat ID` ကိုရှာရန် အသုံးပြုသည်။ |

## ထည့်သွင်းမည့်နေရာ

1. စနစ် ဆက်တင်များ ကိုဖွင့်ပါ။
2. အပ်လုဒ် ဆက်တင်များ သို့သွားပါ။
3. ညာဘက်အပေါ်ထောင့်ရှိ ချန်နယ် ထည့်ရန် ကိုနှိပ်ပါ။
4. `Telegram` ကိုရွေးပါ။

## အကွက် ရည်ညွှန်းချက်

| အကွက် | လုပ်ဆောင်ချက် | လိုအပ်မှု |
| --- | --- | --- |
| ချန်နယ်အမည် | ဤ channel အတွက် မှတ်မိလွယ်သောအမည်၊ ဥပမာ "Telegram Primary"။ | လိုအပ်သည် |
| Active | ဤ channel ကို enable သို့မဟုတ် disable လုပ်သည်။ | အကြံပြုသည် |
| Bot Token | သင်၏ Telegram bot token။ | လိုအပ်သည် |
| Session ID (Chat ID) | Telegram channel ၏ ID။ | လိုအပ်သည် |
| Relay Proxy URL (ရွေးချယ်နိုင်သည်) | Telegram access မတည်ငြိမ်သည့်အခါမှသာ အသုံးပြုပါ။ `https://` ပါဝင်သော proxy URL အပြည့်အစုံကို ထည့်ပါ။ | ရွေးချယ်နိုင်သည် |
| မှတ်ချက် | နောင် maintenance အတွက် မှတ်ချက်များ။ | ရွေးချယ်နိုင်သည် |

## ပြင်ဆင်မှု အဆင့်များ

### 1. Telegram Bot ဖန်တီးပါ

1. Telegram ကိုဖွင့်ပြီး `@BotFather` ကိုရှာပါ။
2. Chat ကိုဖွင့်ပြီး `Start` ကိုနှိပ်ပါ။
3. `/newbot` ကိုပို့ပါ။
4. Bot display name ထည့်ရန် prompt များကိုလိုက်နာပါ။
5. Bot အသုံးပြုသူအမည် ထည့်ရန် prompt များကိုလိုက်နာပါ။ အသုံးပြုသူအမည် သည် ပုံမှန်အားဖြင့် `bot` ဖြင့်ဆုံးရမည်။
6. Bot ဖန်တီးပြီးနောက် `@BotFather` သည် bot token ကိုပြန်ပေးမည်။

ဤ token သည် ImgBed ထဲတွင် ထည့်ရမည့် `Bot Token` ဖြစ်သည်။

![Bot token သိမ်းခြင်း](../../image/upload/telegram/保存机器人令牌.png)

### 2. Channel ဖန်တီးပါ

1. Telegram တွင် `New Channel` ကိုနှိပ်ပါ။
2. ချန်နယ်အမည် ကိုထည့်ပါ။
3. Channel ဖန်တီးခြင်းကို ပြီးဆုံးအောင် ဆောင်ရွက်ပါ။

Public channel နှင့် private channel နှစ်မျိုးလုံးကို အသုံးပြုနိုင်သည်။

![Channel ဖန်တီးခြင်း](../../image/upload/telegram/新建频道.png)

### 3. Bot ကို Channel ထဲသို့ ထည့်ပါ

1. မကြာသေးမီက ဖန်တီးထားသော channel ကိုဖွင့်ပါ။
2. Channel settings ကိုဖွင့်ပါ။
3. Member သို့မဟုတ် administrator ထည့်ပါ။
4. သင်ဖန်တီးထားသော bot အသုံးပြုသူအမည် ကိုရှာပါ။
5. Bot ကို channel ထဲသို့ ထည့်ပါ။

အပ်လုဒ်များကို အယုံကြည်ရဆုံးဖြစ်စေရန် bot ကို administrator permission ပေးပါ။

![Bot ကို channel သို့ ဖိတ်ခေါ်ခြင်း](../../image/upload/telegram/邀请机器人进频道里.png)

### 4. User Info - Get ID - IDbot ဖြင့် Channel ID ရယူပါ

1. Telegram တွင် `@userinfobot` ကိုရှာပါ။ ၎င်း၏ display name သည် ပုံမှန်အားဖြင့် `User Info - Get ID - IDbot` ဖြစ်သည်။
2. Chat ကိုဖွင့်ပြီး `Start` ကိုနှိပ်ပါ။
3. Bot ပေးထားသော option များထဲမှ `Channel` ကိုရွေးပါ။
4. Message picker တွင် ပစ်မှတ် channel ကိုရွေးပြီး `@userinfobot` သို့ ပို့ပါ။
5. `@userinfobot` က result ပြန်ပေးသည့်အခါ `Id: -100...` အဖြစ်ပြထားသော နံပါတ်ကိုကူးယူပါ။

`-100` ဖြင့်စတင်သော နံပါတ်သည် ImgBed လိုအပ်သည့် `Session ID (Chat ID)` ဖြစ်သည်။

![Channel ID ရယူခြင်း](../../image/upload/telegram/获取频道id.png)

### 5. ImgBed တွင် Telegram Channel ကိုဖြည့်ပါ

Channel configuration dialog သို့ ပြန်သွားပြီး အကွက်များကို အောက်ပါအတိုင်း ဖြည့်ပါ။

| UI အကွက် | တန်ဖိုး |
| --- | --- |
| Channel Identifier | စိတ်ကြိုက် ချန်နယ်အမည်၊ ဥပမာ `TelegramPrimary`။ |
| Active | အကြံပြုသည်။ |
| Bot Token | `@BotFather` မှရသော bot token။ |
| Session ID (Chat ID) | `@userinfobot` ပြန်ပေးသော `-100...` နံပါတ်။ |
| Relay Proxy URL (ရွေးချယ်နိုင်သည်) | လိုအပ်မှသာ ထည့်ပါ။ ဥပမာ `https://your-tg-proxy.example.com`. |
| မှတ်ချက် | ရွေးချယ်နိုင်သည် notes။ |

ပြီးပါက `Save` ကိုနှိပ်ပါ။

![Configuration ပြင်ဆင်ခြင်း](../../image/upload/telegram/编辑配置.png)

## အတည်ပြုနည်း

| စစ်ဆေးချက် | အတည်ပြုနည်း |
| --- | --- |
| ချန်နယ်ကတ် ပေါ်လာသည် | သိမ်းပြီးနောက် အပ်လုဒ် ဆက်တင်များ စာမျက်နှာတွင် Telegram ချန်နယ်ကတ် ပေါ်လာသင့်သည်။ |
| Channel ကို enable လုပ်နိုင်သည် | Active switch သည် ဖွင့်ထားသည့်အခြေအနေတွင် ရှိသင့်သည်။ |
| Configuration သိမ်းထားသည် | Detail view တွင် Bot Token နှင့် Chat ID သိမ်းထားကြောင်း ပြသသင့်သည်။ |
| Upload အလုပ်လုပ်သည် | စမ်းသပ်ပုံတစ်ပုံကို အပ်လုဒ်လုပ်ပြီး ၎င်းသည် ပစ်မှတ် Telegram channel တွင် ပေါ်လာကြောင်း အတည်ပြုပါ။ |

## အမြန် စစ်ဆေးစာရင်း

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

## ကိုးကားချက်များ

1. Telegram bots: https://core.telegram.org/bots
2. Telegram Bot API: https://core.telegram.org/bots/api
