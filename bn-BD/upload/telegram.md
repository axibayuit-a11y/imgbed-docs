# Telegram Channel যোগ করা

## শুরু করার আগে যা লাগবে

| Requirement | Purpose |
| --- | --- |
| Telegram account | Bot এবং storage channel তৈরি করতে লাগে। |
| `@BotFather` | Telegram bot তৈরি করতে ব্যবহার হয়। |
| একটি Telegram channel | Files সংরক্ষণের final destination। |
| `@userinfobot` | Channel `Chat ID` বের করতে ব্যবহার হয়। |

## কোথায় যোগ করবেন

1. System Settings খুলুন।
2. Upload Settings-এ যান।
3. উপরের ডান পাশে Add Channel ক্লিক করুন।
4. `Telegram` নির্বাচন করুন।

## Field Reference

| Field | কাজ | Required |
| --- | --- | --- |
| Channel name | এই channel-এর সহজে চেনা যায় এমন নাম, যেমন "Telegram Primary"। | Required |
| Active | Channel enable বা disable করে। | Recommended |
| Bot Token | আপনার Telegram bot-এর token। | Required |
| Session ID (Chat ID) | Telegram channel-এর ID। | Required |
| Relay Proxy URL (optional) | Telegram access unstable হলে শুধু তখন ব্যবহার করুন। `https://`-সহ full proxy URL দিন। | Optional |
| Remark | ভবিষ্যৎ maintenance-এর জন্য notes। | Optional |

## Setup Steps

### 1. Telegram Bot তৈরি করুন

1. Telegram খুলে `@BotFather` search করুন।
2. Chat খুলে `Start` ক্লিক করুন।
3. `/newbot` পাঠান।
4. Prompt অনুযায়ী bot display name দিন।
5. Prompt অনুযায়ী bot username দিন। Username সাধারণত `bot` দিয়ে শেষ করতে হয়।
6. Bot তৈরি হলে `@BotFather` একটি bot token দেবে।

এই token-টাই ImgBed-এ `Bot Token` হিসেবে দিতে হবে।

![Save the bot token](../../image/upload/telegram/保存机器人令牌.png)

### 2. Channel তৈরি করুন

1. Telegram-এ New Channel ক্লিক করুন।
2. Channel name দিন।
3. Channel তৈরি শেষ করুন।

Public এবং private, দুই ধরনের channel-ই ব্যবহার করা যায়।

![Create a channel](../../image/upload/telegram/新建频道.png)

### 3. Bot-কে Channel-এ যোগ করুন

1. সদ্য তৈরি করা channel খুলুন।
2. Channel settings খুলুন।
3. Member বা administrator যোগ করুন।
4. আপনার তৈরি করা bot username search করুন।
5. Bot-কে channel-এ যোগ করুন।

Upload সবচেয়ে নির্ভরযোগ্য করতে bot-কে administrator permission দিন।

![Invite the bot to the channel](../../image/upload/telegram/邀请机器人进频道里.png)

### 4. User Info - Get ID - IDbot দিয়ে Channel ID নিন

1. Telegram-এ `@userinfobot` search করুন। Display name সাধারণত `User Info - Get ID - IDbot`।
2. Chat খুলে `Start` ক্লিক করুন।
3. Bot-এর দেওয়া options থেকে `Channel` নির্বাচন করুন।
4. Message picker-এ target channel নির্বাচন করে `@userinfobot`-এ পাঠান।
5. `@userinfobot` result দিলে `Id: -100...` হিসেবে যে number দেখায় সেটি copy করুন।

`-100` দিয়ে শুরু হওয়া number-টাই ImgBed-এর জন্য প্রয়োজনীয় `Session ID (Chat ID)`।

![Get the channel ID](../../image/upload/telegram/获取频道id.png)

### 5. ImgBed-এ Telegram Channel পূরণ করুন

Channel configuration dialog-এ ফিরে এসে fields এভাবে পূরণ করুন:

| UI Field | Value |
| --- | --- |
| Channel Identifier | Custom channel name, যেমন `TelegramPrimary`। |
| Active | Recommended। |
| Bot Token | `@BotFather` থেকে পাওয়া bot token। |
| Session ID (Chat ID) | `@userinfobot` থেকে পাওয়া `-100...` number। |
| Relay Proxy URL (optional) | দরকার হলে, যেমন `https://your-tg-proxy.example.com`। |
| Remark | Optional notes। |

শেষ হলে Save ক্লিক করুন।

![Edit the configuration](../../image/upload/telegram/编辑配置.png)

## কীভাবে যাচাই করবেন

| Check | কীভাবে যাচাই করবেন |
| --- | --- |
| Channel card দেখা যায় | Save করার পর Upload Settings পেজে Telegram channel card দেখা উচিত। |
| Channel enable থাকে | Active switch on থাকা উচিত। |
| Configuration save হয়েছে | Detail view-তে Bot Token এবং Chat ID save হয়েছে দেখা উচিত। |
| Upload কাজ করে | একটি test image upload করে target Telegram channel-এ এসেছে কি না দেখুন। |

## Quick Checklist

```text
@BotFather দিয়ে bot তৈরি করুন
-> Bot Token save করুন
-> Telegram channel তৈরি করুন
-> Bot-কে channel-এ যোগ করে administrator permission দিন
-> @userinfobot search করে Channel নির্বাচন করুন
-> Channel থেকে যেকোনো message @userinfobot-এ forward করুন
-> ফেরত পাওয়া Id: -100... copy করুন
-> ImgBed-এ Bot Token এবং Chat ID দিন
-> Save করে test image upload করুন
```

## References

1. Telegram bots: https://core.telegram.org/bots
2. Telegram Bot API: https://core.telegram.org/bots/api
