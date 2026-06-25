# Discord চ্যানেল যোগ করা

## শুরু করার আগে যা লাগবে

| প্রয়োজনীয় তথ্য | উদ্দেশ্য |
| --- | --- |
| Discord অ্যাকাউন্ট | সার্ভার, চ্যানেল এবং ডেভেলপার অ্যাপ্লিকেশন তৈরি করতে লাগে। |
| একটি Discord সার্ভার | bot কোনো চ্যানেল-এ প্রবেশ করার আগে সার্ভার-এ যোগ দিতে হবে। |
| একটি text চ্যানেল | ছবি এবং ফাইল এই চ্যানেলে পাঠানো হবে। |
| Discord Developer Portal | অ্যাপ্লিকেশন তৈরি, bot তৈরি এবং `Bot Token` নেওয়ার জন্য লাগে। |

## কোথায় যোগ করবেন

1. সিস্টেম সেটিংস খুলুন।
2. আপলোড সেটিংসে যান।
3. উপরের ডান পাশে চ্যানেল যোগ করুন ক্লিক করুন।
4. `Discord` নির্বাচন করুন।

## ক্ষেত্রের বিবরণ

| ক্ষেত্র | কাজ | প্রয়োজনীয় |
| --- | --- | --- |
| চ্যানেলের নাম | এই চ্যানেলের সহজে চেনা যায় এমন নাম, যেমন "Discord Primary"। | প্রয়োজনীয় |
| Bot Token | Discord bot টোকেন। | প্রয়োজনীয় |
| Channel ID | লক্ষ্য text চ্যানেল-এর ID। | প্রয়োজনীয় |
| Proxy URL (ঐচ্ছিক) | Discord CDN access অস্থির হলে শুধু তখন ব্যবহার করুন। `https://`. পূর্ণ URL দিন। | ঐচ্ছিক |

## সেটআপ ধাপ

### 1. Discord সার্ভার এবং Text চ্যানেল তৈরি করুন

1. Discord খুলুন।
2. নতুন সার্ভার তৈরি করুন, অথবা আপনার মালিকানাধীন কোনো বিদ্যমান সার্ভার ব্যবহার করুন।
3. সেই সার্ভার-এ একটি text চ্যানেল তৈরি করুন।

![সার্ভার তৈরি করা](../../image/upload/discord/创建服务器.png)

### 2. Discord Developer Portal-এ Bot তৈরি করুন

1. Discord Developer Portal খুলুন: `https://discord.com/developers/applications`
2. `New Application` ক্লিক করুন।
3. অ্যাপ্লিকেশন নাম লিখে তৈরি করুন।
4. বাম পাশের সাইডবার থেকে `Bot` পৃষ্ঠা খুলুন।
5. `Bot` পৃষ্ঠায় টোকেন generate বা reset করুন।
6. টোকেন সংরক্ষণ করুন।

এই টোকেন-ই ImgBed-এ `Bot Token` হিসেবে দিতে হবে।

![Bot টোকেন দেখা](../../image/upload/discord/查看机器人令牌.png)

### 3. OAuth2 Invite লিংক তৈরি করে Bot ইনস্টল করুন

1. বাম পাশের সাইডবার থেকে `OAuth2` পৃষ্ঠা খুলুন।
2. scopes অংশে `bot` নির্বাচন করুন।
3. অনুমতি অংশে নিচের অনুমতিগুলো চালু করুন:

| অনুমতি | প্রয়োজনীয় |
| --- | --- |
| View Channels | হ্যাঁ |
| Send Messages | হ্যাঁ |
| Attach Files | হ্যাঁ |
| Read Message History | হ্যাঁ |

4. পৃষ্ঠার নিচে integration ধরন `Guild Install` আছে কি না নিশ্চিত করুন।
5. তৈরি হওয়া URL কপি করুন।
6. ব্রাউজার-এ সেই URL খুলুন।
7. লক্ষ্য সার্ভার নির্বাচন করুন।
8. অনুমোদন প্রবাহ শেষ করুন।

![OAuth2-তে bot অনুমতি নির্বাচন করা](../../image/upload/discord/在oa2勾选机器人权限.png)

![Bot-কে চ্যানেলে আমন্ত্রণ জানানো](../../image/upload/discord/邀请机器人到频道.png)

### 4. Developer মোড চালু করে Channel ID কপি করুন

1. Discord-এর নিচের বাঁ কোণে অ্যাভাটারের পাশের gear icon ক্লিক করুন।
2. বাম পাশের সাইডবার থেকে Advanced খুলুন।
3. Developer মোড চালু করুন।
4. লক্ষ্য text চ্যানেল-এ ফিরে যান।
5. চ্যানেল নামে right-click করুন।
6. Copy Channel ID ক্লিক করুন।

কপি করা সংখ্যাটিই ImgBed-এর জন্য প্রয়োজনীয় `Channel ID`।

![Developer মোড চালু করা](../../image/upload/discord/开启开发者权限.png)

![Channel ID কপি করা](../../image/upload/discord/复制群频道id.png)

### 5. ImgBed-এ Discord চ্যানেল পূরণ করুন

চ্যানেল কনফিগারেশন ডায়ালগ-এ ফিরে ক্ষেত্রগুলো এভাবে পূরণ করুন:

| UI ক্ষেত্র | মান |
| --- | --- |
| চ্যানেল নাম | কাস্টম চ্যানেল নাম, যেমন `DiscordPrimary`। |
| Bot Token | Discord Developer Portal-এর `Bot` পৃষ্ঠা থেকে সংরক্ষিত টোকেন। |
| Channel ID | Discord থেকে কপি করা চ্যানেল ID। |
| Proxy URL (ঐচ্ছিক) | দরকার হলে, যেমন `https://your-proxy.example.com`. |

শেষ হলে সংরক্ষণ ক্লিক করুন।

![Discord চ্যানেলের কনফিগারেশন যোগ করা](../../image/upload/discord/添加dc新渠道配置.png)

## যাচাই করার পদ্ধতি

| পরীক্ষা | কীভাবে যাচাই করবেন |
| --- | --- |
| চ্যানেল কার্ড দেখা যায় | সংরক্ষণের পর আপলোড সেটিংস পৃষ্ঠায় Discord চ্যানেল কার্ড দেখা উচিত। |
| চ্যানেল চালু রাখা যায় | Active সুইচ চালু থাকা উচিত। |
| কনফিগারেশন সংরক্ষিত হয়েছে | বিস্তারিত দৃশ্য-তে Bot Token এবং Channel ID সংরক্ষিত দেখা উচিত। |
| আপলোড কাজ করছে | একটি পরীক্ষামূলক ছবি আপলোড করে লক্ষ্য Discord text চ্যানেল-এ এসেছে কি না নিশ্চিত করুন। |

## দ্রুত তালিকা

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

## তথ্যসূত্র

1. Discord Developers Getting Started: https://docs.discord.com/developers/quick-start/getting-started
2. Discord Help - Where can I find my User/Server/Message ID: https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID
