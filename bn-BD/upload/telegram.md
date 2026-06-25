# Telegram চ্যানেল যোগ করা

## শুরু করার আগে যা লাগবে

| প্রয়োজনীয় তথ্য | উদ্দেশ্য |
| --- | --- |
| Telegram অ্যাকাউন্ট | bot এবং স্টোরেজ চ্যানেল তৈরি করতে লাগে। |
| `@BotFather` | Telegram bot তৈরি করতে ব্যবহৃত হয়। |
| একটি Telegram চ্যানেল | ফাইল সংরক্ষণের চূড়ান্ত গন্তব্য। |
| `@userinfobot` | চ্যানেল-এর `Chat ID` খুঁজে পেতে ব্যবহৃত হয়। |

## কোথায় যোগ করবেন

1. সিস্টেম সেটিংস খুলুন।
2. আপলোড সেটিংসে যান।
3. উপরের ডান পাশে চ্যানেল যোগ করুন ক্লিক করুন।
4. `Telegram` নির্বাচন করুন।

## ক্ষেত্রের বিবরণ

| ক্ষেত্র | কাজ | প্রয়োজনীয় |
| --- | --- | --- |
| চ্যানেলের নাম | এই চ্যানেলের সহজে চেনা যায় এমন নাম, যেমন "Telegram Primary"। | প্রয়োজনীয় |
| Active | চ্যানেল চালু বা বন্ধ করে। | প্রস্তাবিত |
| Bot Token | আপনার Telegram bot-এর টোকেন। | প্রয়োজনীয় |
| Session ID (Chat ID) | Telegram চ্যানেল-এর ID। | প্রয়োজনীয় |
| Relay Proxy URL (ঐচ্ছিক) | Telegram access অস্থির হলে শুধু তখন ব্যবহার করুন। `https://`. পূর্ণ proxy URL দিন। | ঐচ্ছিক |
| Remark | ভবিষ্যৎ রক্ষণাবেক্ষণের নোট। | ঐচ্ছিক |

## সেটআপ ধাপ

### 1. Telegram Bot তৈরি করুন

1. Telegram খুলে `@BotFather` খুঁজুন।
2. chat খুলে `Start` ক্লিক করুন।
3. `/newbot` পাঠান।
4. নির্দেশনা অনুযায়ী bot display নাম দিন।
5. নির্দেশনা অনুযায়ী bot username দিন। username সাধারণত `bot` দিয়ে শেষ হতে হয়।
6. bot তৈরি হলে `@BotFather` একটি bot টোকেন দেবে।

এই টোকেন-ই ImgBed-এ `Bot Token` হিসেবে দিতে হবে।

![bot টোকেন সংরক্ষণ করা](../../image/upload/telegram/保存机器人令牌.png)

### 2. চ্যানেল তৈরি করুন

1. Telegram-এ New চ্যানেল ক্লিক করুন।
2. চ্যানেল নাম দিন।
3. চ্যানেল তৈরি শেষ করুন।

পাবলিক এবং প্রাইভেট, দুই ধরনের চ্যানেল-ই ব্যবহার করা যায়।

![চ্যানেল তৈরি করা](../../image/upload/telegram/新建频道.png)

### 3. Bot-কে চ্যানেল-এ যোগ করুন

1. সদ্য তৈরি করা চ্যানেল খুলুন।
2. চ্যানেল সেটিংস খুলুন।
3. member বা administrator যোগ করুন।
4. আপনার তৈরি করা bot username খুঁজুন।
5. bot-কে চ্যানেল-এ যোগ করুন।

আপলোড সবচেয়ে নির্ভরযোগ্য করতে bot-কে administrator অনুমতি দিন।

![bot-কে চ্যানেল-এ আমন্ত্রণ জানানো](../../image/upload/telegram/邀请机器人进频道里.png)

### 4. User Info - Get ID - IDbot দিয়ে Channel ID নিন

1. Telegram-এ `@userinfobot` খুঁজুন। display নাম সাধারণত `User Info - Get ID - IDbot`।
2. chat খুলে `Start` ক্লিক করুন।
3. bot-এর দেওয়া options থেকে `Channel` নির্বাচন করুন।
4. message picker-এ লক্ষ্য চ্যানেল নির্বাচন করে `@userinfobot`-এ পাঠান।
5. `@userinfobot` result দিলে `Id: -100...` হিসেবে যে number দেখায় সেটি কপি করুন।

`-100` দিয়ে শুরু হওয়া number-ই ImgBed-এর জন্য প্রয়োজনীয় `Session ID (Chat ID)`।

![Channel ID নেওয়া](../../image/upload/telegram/获取频道id.png)

### 5. ImgBed-এ Telegram চ্যানেল পূরণ করুন

চ্যানেল কনফিগারেশন ডায়ালগ-এ ফিরে ক্ষেত্রগুলো এভাবে পূরণ করুন:

| UI ক্ষেত্র | মান |
| --- | --- |
| চ্যানেল Identifier | কাস্টম চ্যানেল নাম, যেমন `TelegramPrimary`। |
| Active | প্রস্তাবিত। |
| Bot Token | `@BotFather` থেকে পাওয়া bot টোকেন। |
| Session ID (Chat ID) | `@userinfobot` থেকে পাওয়া `-100...` number। |
| Relay Proxy URL (ঐচ্ছিক) | দরকার হলে, যেমন `https://your-tg-proxy.example.com`. |
| Remark | ঐচ্ছিক নোট। |

শেষ হলে সংরক্ষণ ক্লিক করুন।

![কনফিগারেশন সম্পাদনা করা](../../image/upload/telegram/编辑配置.png)

## যাচাই করার পদ্ধতি

| পরীক্ষা | কীভাবে যাচাই করবেন |
| --- | --- |
| চ্যানেল কার্ড দেখা যায় | সংরক্ষণের পর আপলোড সেটিংস পৃষ্ঠায় Telegram চ্যানেল কার্ড দেখা উচিত। |
| চ্যানেল চালু রাখা যায় | Active সুইচ চালু থাকা উচিত। |
| কনফিগারেশন সংরক্ষিত হয়েছে | বিস্তারিত দৃশ্য-তে Bot Token এবং Chat ID সংরক্ষিত দেখা উচিত। |
| আপলোড কাজ করছে | একটি পরীক্ষামূলক ছবি আপলোড করে লক্ষ্য Telegram চ্যানেল-এ এসেছে কি না নিশ্চিত করুন। |

## দ্রুত তালিকা

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

## তথ্যসূত্র

1. Telegram bots: https://core.telegram.org/bots
2. Telegram Bot API: https://core.telegram.org/bots/api
