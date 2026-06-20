# Discord Channel ထည့်သွင်းခြင်း

## စမလုပ်ခင် လိုအပ်တာတွေ

| လိုအပ်ချက် | အသုံးပြုပုံ |
| --- | --- |
| Discord account | server, channel, developer application ဖန်တီးရန်။ |
| Discord server | bot က channel ကို access မလုပ်ခင် server ထဲဝင်ထားရမည်။ |
| Text channel | images နဲ့ files တွေကို ဒီ channel ဆီပို့ပါမယ်။ |
| Discord Developer Portal | application ဖန်တီးရန်၊ bot ဖန်တီးရန်၊ `Bot Token` ရယူရန်။ |

## ဘယ်နေရာမှာ ထည့်မလဲ

1. System Settings ကိုဖွင့်ပါ။
2. Upload Settings ကိုသွားပါ။
3. ညာဘက်အပေါ်ထောင့်က Add Channel ကိုနှိပ်ပါ။
4. `Discord` ကိုရွေးပါ။

## Field Reference

| Field | အသုံးပြုပုံ | Required |
| --- | --- | --- |
| Channel name | ဒီ channel အတွက် မှတ်မိလွယ်တဲ့အမည်၊ ဥပမာ `Discord Primary`။ | Required |
| Bot Token | Discord bot token။ | Required |
| Channel ID | target text channel ရဲ့ ID။ | Required |
| Proxy URL (optional) | Discord CDN access မတည်ငြိမ်လျှင်သာသုံးပါ။ `https://` ပါတဲ့ full URL ထည့်ပါ။ | Optional |

## Setup Steps

### 1. Discord Server နဲ့ Text Channel ဖန်တီးပါ

1. Discord ကိုဖွင့်ပါ။
2. server အသစ်ဖန်တီးပါ၊ သို့မဟုတ် သင်ပိုင်တဲ့ existing server ကိုသုံးပါ။
3. အဲဒီ server ထဲမှာ text channel တစ်ခုဖန်တီးပါ။

![Create a server](../../image/upload/discord/创建服务器.png)

### 2. Discord Developer Portal မှာ Bot ဖန်တီးပါ

1. Discord Developer Portal ကိုဖွင့်ပါ: `https://discord.com/developers/applications`
2. `New Application` ကိုနှိပ်ပါ။
3. application name ထည့်ပြီး create လုပ်ပါ။
4. left sidebar မှ `Bot` page ကိုဖွင့်ပါ။
5. `Bot` page မှာ token ကို generate သို့မဟုတ် reset လုပ်ပါ။
6. token ကိုသိမ်းပါ။

ဒီ token က ImgBed မှာထည့်ရမယ့် `Bot Token` ဖြစ်ပါတယ်။

![View the bot token](../../image/upload/discord/查看机器人令牌.png)

### 3. OAuth2 Invite Link ဖန်တီးပြီး Bot Install လုပ်ပါ

1. left sidebar မှ `OAuth2` page ကိုဖွင့်ပါ။
2. scopes အောက်မှာ `bot` ကိုရွေးပါ။
3. permission area မှာ ဒီ permissions တွေကို enable လုပ်ပါ:

| Permission | Required |
| --- | --- |
| View Channels | Yes |
| Send Messages | Yes |
| Attach Files | Yes |
| Read Message History | Yes |

4. page အောက်မှာ integration type က `Guild Install` ဖြစ်ကြောင်း confirm လုပ်ပါ။
5. generated URL ကို copy လုပ်ပါ။
6. အဲဒီ URL ကို browser မှာဖွင့်ပါ။
7. target server ကိုရွေးပါ။
8. authorization flow ကိုပြီးအောင်လုပ်ပါ။

![Select bot permissions in OAuth2](../../image/upload/discord/在oa2勾选机器人权限.png)

![Invite the bot to the channel](../../image/upload/discord/邀请机器人到频道.png)

### 4. Developer Mode Enable လုပ်ပြီး Channel ID Copy လုပ်ပါ

1. Discord ရဲ့ ဘယ်ဘက်အောက်ထောင့် avatar အနားက gear icon ကိုနှိပ်ပါ။
2. left sidebar မှ Advanced ကိုဖွင့်ပါ။
3. Developer Mode ကို enable လုပ်ပါ။
4. target text channel ကိုပြန်သွားပါ။
5. channel name ပေါ် right-click လုပ်ပါ။
6. Copy Channel ID ကိုနှိပ်ပါ။

copy လုပ်ထားတဲ့ number က ImgBed မှာလိုအပ်တဲ့ `Channel ID` ဖြစ်ပါတယ်။

![Enable developer mode](../../image/upload/discord/开启开发者权限.png)

![Copy the channel ID](../../image/upload/discord/复制群频道id.png)

### 5. ImgBed မှာ Discord Channel ဖြည့်ပါ

channel configuration dialog ကိုပြန်သွားပြီး:

| UI Field | Value |
| --- | --- |
| Channel name | custom channel name၊ ဥပမာ `DiscordPrimary`။ |
| Bot Token | Discord Developer Portal ရဲ့ `Bot` page မှသိမ်းထားတဲ့ token။ |
| Channel ID | Discord မှ copy လုပ်ထားတဲ့ channel ID။ |
| Proxy URL (optional) | လိုအပ်မှသာ၊ ဥပမာ `https://your-proxy.example.com`။ |

ပြီးရင် Save ကိုနှိပ်ပါ။

![Add the Discord channel configuration](../../image/upload/discord/添加dc新渠道配置.png)

## စစ်ဆေးနည်း

| Check | စစ်ဆေးပုံ |
| --- | --- |
| Channel card appears | Save ပြီးနောက် Upload Settings page မှာ Discord channel card ပေါ်လာရပါမယ်။ |
| Channel can be enabled | Active switch က on ဖြစ်ရပါမယ်။ |
| Configuration is saved | detail view မှာ Bot Token နဲ့ Channel ID သိမ်းထားတာမြင်ရပါမယ်။ |
| Upload works | test image upload လုပ်ပြီး target Discord text channel ထဲပေါ်လာလားစစ်ပါ။ |

## Quick Checklist

```text
Discord server ဖန်တီးပါ
-> text channel ဖန်တီးပါ
-> Discord Developer Portal မှာ bot ဖန်တီးပါ
-> Bot page မှ Bot Token သိမ်းပါ
-> OAuth2 မှာ bot, View Channels, Send Messages, Attach Files, Read Message History ရွေးပါ
-> generated URL ကို copy လုပ်ပြီး target server အတွက် bot ကို authorize လုပ်ပါ
-> target text channel မှာ permissions တူညီလားစစ်ပါ
-> Developer Mode enable လုပ်ပါ
-> target text channel ပေါ် right-click လုပ်ပြီး Channel ID copy လုပ်ပါ
-> ImgBed မှာ Bot Token နဲ့ Channel ID ထည့်ပါ
-> Save လုပ်ပြီး test image upload လုပ်ပါ
```

## References

1. Discord Developers Getting Started: https://docs.discord.com/developers/quick-start/getting-started
2. Discord Help - Where can I find my User/Server/Message ID: https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID
