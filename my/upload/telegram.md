# Telegram Channel ထည့်သွင်းခြင်း

## စမလုပ်ခင် လိုအပ်တာတွေ

| လိုအပ်ချက် | အသုံးပြုရတဲ့အကြောင်း |
| --- | --- |
| Telegram account | bot နဲ့ storage channel ဖန်တီးဖို့ |
| `@BotFather` | Telegram bot ဖန်တီးဖို့ |
| Telegram channel | files တွေကို သိမ်းမယ့် နောက်ဆုံးနေရာ |
| `@userinfobot` | channel `Chat ID` ရှာဖို့ |

## ဘယ်နေရာမှာ ထည့်မလဲ

1. System Settings ကိုဖွင့်ပါ။
2. Upload Settings ကိုသွားပါ။
3. ညာဘက်အပေါ်ထောင့်က Add Channel ကိုနှိပ်ပါ။
4. `Telegram` ကိုရွေးပါ။

## Field Reference

| Field | အသုံးပြုပုံ | Required |
| --- | --- | --- |
| Channel name | ဒီ channel ကိုမှတ်မိလွယ်စေမယ့်အမည်၊ ဥပမာ `Telegram Primary`။ | Required |
| Active | ဒီ channel ကို enable/disable လုပ်ရန်။ | Recommended |
| Bot Token | Telegram bot ရဲ့ token။ | Required |
| Session ID (Chat ID) | Telegram channel ရဲ့ ID။ | Required |
| Relay Proxy URL (optional) | Telegram access မတည်ငြိမ်တဲ့အခါပဲသုံးပါ။ `https://` ပါတဲ့ full proxy URL ထည့်ပါ။ | Optional |
| Remark | နောက်ပိုင်း maintenance အတွက် မှတ်ချက်။ | Optional |

## Setup Steps

### 1. Telegram Bot ဖန်တီးပါ

1. Telegram ကိုဖွင့်ပြီး `@BotFather` ကိုရှာပါ။
2. chat ကိုဖွင့်ပြီး `Start` ကိုနှိပ်ပါ။
3. `/newbot` ပို့ပါ။
4. prompt အတိုင်း bot display name ထည့်ပါ။
5. prompt အတိုင်း bot username ထည့်ပါ။ username က များသောအားဖြင့် `bot` နဲ့ဆုံးရပါမယ်။
6. bot ဖန်တီးပြီးရင် `@BotFather` က bot token ပြန်ပေးပါမယ်။

ဒီ token ကို ImgBed ထဲက `Bot Token` မှာထည့်ရပါမယ်။

![Save the bot token](../../image/upload/telegram/保存机器人令牌.png)

### 2. Channel ဖန်တီးပါ

1. Telegram မှာ New Channel ကိုနှိပ်ပါ။
2. channel name ထည့်ပါ။
3. channel ဖန်တီးမှုကိုပြီးအောင်လုပ်ပါ။

public channel နဲ့ private channel နှစ်မျိုးလုံးသုံးနိုင်ပါတယ်။

![Create a channel](../../image/upload/telegram/新建频道.png)

### 3. Bot ကို Channel ထဲထည့်ပါ

1. ဖန်တီးထားတဲ့ channel ကိုဖွင့်ပါ။
2. channel settings ကိုဖွင့်ပါ။
3. member သို့မဟုတ် administrator ထည့်တဲ့နေရာကိုဖွင့်ပါ။
4. ဖန်တီးထားတဲ့ bot username ကိုရှာပါ။
5. bot ကို channel ထဲထည့်ပါ။

upload ပိုယုံကြည်စိတ်ချရအောင် bot ကို administrator permissions ပေးတာကောင်းပါတယ်။

![Invite the bot to the channel](../../image/upload/telegram/邀请机器人进频道里.png)

### 4. User Info - Get ID - IDbot ဖြင့် Channel ID ရယူပါ

1. Telegram မှာ `@userinfobot` ကိုရှာပါ။ display name က များသောအားဖြင့် `User Info - Get ID - IDbot` ဖြစ်ပါတယ်။
2. chat ကိုဖွင့်ပြီး `Start` နှိပ်ပါ။
3. bot ပေးတဲ့ options ထဲက `Channel` ကိုရွေးပါ။
4. message picker ထဲမှာ target channel ကိုရွေးပြီး `@userinfobot` ကိုပို့ပါ။
5. `@userinfobot` က result ပြန်ပေးရင် `Id: -100...` အနေနဲ့ပြထားတဲ့ number ကို copy လုပ်ပါ။

`-100` နဲ့စတဲ့ number က ImgBed မှာလိုအပ်တဲ့ `Session ID (Chat ID)` ဖြစ်ပါတယ်။

![Get the channel ID](../../image/upload/telegram/获取频道id.png)

### 5. ImgBed မှာ Telegram Channel ဖြည့်ပါ

channel configuration dialog ကိုပြန်သွားပြီး fields တွေကို ဒီလိုဖြည့်ပါ:

| UI Field | Value |
| --- | --- |
| Channel Identifier | custom channel name၊ ဥပမာ `TelegramPrimary`။ |
| Active | Recommended။ |
| Bot Token | `@BotFather` ကရတဲ့ bot token။ |
| Session ID (Chat ID) | `@userinfobot` ကပြန်ပေးတဲ့ `-100...` number။ |
| Relay Proxy URL (optional) | လိုအပ်မှသာ၊ ဥပမာ `https://your-tg-proxy.example.com`။ |
| Remark | optional notes။ |

ပြီးရင် Save ကိုနှိပ်ပါ။

![Edit the configuration](../../image/upload/telegram/编辑配置.png)

## စစ်ဆေးနည်း

| Check | စစ်ဆေးပုံ |
| --- | --- |
| Channel card appears | Save ပြီးနောက် Upload Settings မှာ Telegram channel card ပေါ်လာရပါမယ်။ |
| Channel can be enabled | Active switch က on အနေအထားမှာရှိရပါမယ်။ |
| Configuration is saved | detail view မှာ Bot Token နဲ့ Chat ID သိမ်းထားတာမြင်ရပါမယ်။ |
| Upload works | test image တစ်ခု upload လုပ်ပြီး target Telegram channel ထဲပေါ်လာလားစစ်ပါ။ |

## Quick Checklist

```text
@BotFather နဲ့ bot ဖန်တီးပါ
-> Bot Token သိမ်းပါ
-> Telegram channel ဖန်တီးပါ
-> bot ကို channel ထဲထည့်ပြီး administrator permissions ပေးပါ
-> @userinfobot ကိုရှာပြီး Channel ရွေးပါ
-> channel ထဲက message တစ်ခုကို @userinfobot ဆီ forward လုပ်ပါ
-> ပြန်လာတဲ့ Id: -100... ကို copy လုပ်ပါ
-> ImgBed မှာ Bot Token နဲ့ Chat ID ထည့်ပါ
-> Save လုပ်ပြီး test image upload လုပ်ပါ
```

## References

1. Telegram bots: https://core.telegram.org/bots
2. Telegram Bot API: https://core.telegram.org/bots/api
