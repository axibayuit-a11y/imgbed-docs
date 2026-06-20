# Discord Channel যোগ করা

## শুরু করার আগে যা লাগবে

| Requirement | Purpose |
| --- | --- |
| Discord account | Server, channel এবং developer application তৈরি করতে লাগে। |
| একটি Discord server | Bot কোনো channel access করার আগে server-এ join করতে হবে। |
| একটি text channel | Images এবং files এই channel-এ পাঠানো হবে। |
| Discord Developer Portal | Application তৈরি, bot তৈরি এবং `Bot Token` নেওয়ার জন্য লাগে। |

## কোথায় যোগ করবেন

1. System Settings খুলুন।
2. Upload Settings-এ যান।
3. উপরের ডান পাশে Add Channel ক্লিক করুন।
4. `Discord` নির্বাচন করুন।

## Field Reference

| Field | কাজ | Required |
| --- | --- | --- |
| Channel name | এই channel-এর সহজে চেনা যায় এমন নাম, যেমন "Discord Primary"। | Required |
| Bot Token | Discord bot token। | Required |
| Channel ID | Target text channel-এর ID। | Required |
| Proxy URL (optional) | Discord CDN access unstable হলে শুধু তখন ব্যবহার করুন। `https://`-সহ full URL দিন। | Optional |

## Setup Steps

### 1. Discord Server এবং Text Channel তৈরি করুন

1. Discord খুলুন।
2. নতুন server তৈরি করুন, বা আপনার own existing server ব্যবহার করুন।
3. সেই server-এ একটি text channel তৈরি করুন।

![Create a server](../../image/upload/discord/创建服务器.png)

### 2. Discord Developer Portal-এ Bot তৈরি করুন

1. Discord Developer Portal খুলুন: `https://discord.com/developers/applications`
2. `New Application` ক্লিক করুন।
3. Application name দিয়ে create করুন।
4. Left sidebar থেকে `Bot` page খুলুন।
5. `Bot` page-এ token generate বা reset করুন।
6. Token save করুন।

এই token-টাই ImgBed-এ `Bot Token` হিসেবে দিতে হবে।

![View the bot token](../../image/upload/discord/查看机器人令牌.png)

### 3. OAuth2 Invite Link তৈরি করে Bot Install করুন

1. Left sidebar থেকে `OAuth2` page খুলুন।
2. Scopes-এর নিচে `bot` নির্বাচন করুন।
3. Permission area-তে এগুলো enable করুন:

| Permission | Required |
| --- | --- |
| View Channels | Yes |
| Send Messages | Yes |
| Attach Files | Yes |
| Read Message History | Yes |

4. Page-এর নিচে integration type `Guild Install` আছে কি না confirm করুন।
5. Generated URL copy করুন।
6. Browser-এ URL খুলুন।
7. Target server নির্বাচন করুন।
8. Authorization flow complete করুন।

![Select bot permissions in OAuth2](../../image/upload/discord/在oa2勾选机器人权限.png)

![Invite the bot to the channel](../../image/upload/discord/邀请机器人到频道.png)

### 4. Developer Mode Enable করে Channel ID Copy করুন

1. Discord-এর lower-left corner-এ avatar-এর পাশের gear icon ক্লিক করুন।
2. Left sidebar থেকে Advanced খুলুন।
3. Developer Mode enable করুন।
4. Target text channel-এ ফিরে যান।
5. Channel name-এ right-click করুন।
6. Copy Channel ID ক্লিক করুন।

Copied number-টাই ImgBed-এর জন্য প্রয়োজনীয় `Channel ID`।

![Enable developer mode](../../image/upload/discord/开启开发者权限.png)

![Copy the channel ID](../../image/upload/discord/复制群频道id.png)

### 5. ImgBed-এ Discord Channel পূরণ করুন

Channel configuration dialog-এ ফিরে fields এভাবে পূরণ করুন:

| UI Field | Value |
| --- | --- |
| Channel name | Custom channel name, যেমন `DiscordPrimary`। |
| Bot Token | Discord Developer Portal-এর `Bot` page থেকে save করা token। |
| Channel ID | Discord থেকে copy করা channel ID। |
| Proxy URL (optional) | দরকার হলে, যেমন `https://your-proxy.example.com`। |

শেষ হলে Save ক্লিক করুন।

![Add the Discord channel configuration](../../image/upload/discord/添加dc新渠道配置.png)

## কীভাবে যাচাই করবেন

| Check | কীভাবে যাচাই করবেন |
| --- | --- |
| Channel card দেখা যায় | Save করার পর Upload Settings পেজে Discord channel card দেখা উচিত। |
| Channel enable থাকে | Active switch on থাকা উচিত। |
| Configuration save হয়েছে | Detail view-তে Bot Token এবং Channel ID save হয়েছে দেখা উচিত। |
| Upload কাজ করে | Test image upload করে target Discord text channel-এ এসেছে কি না দেখুন। |

## Quick Checklist

```text
Discord server তৈরি করুন
-> Text channel তৈরি করুন
-> Discord Developer Portal-এ bot তৈরি করুন
-> Bot page থেকে Bot Token save করুন
-> OAuth2-তে bot, View Channels, Send Messages, Attach Files এবং Read Message History নির্বাচন করুন
-> Generated URL copy করে target server-এর জন্য bot authorize করুন
-> Target text channel-এ একই permissions আছে কি না নিশ্চিত করুন
-> Developer Mode enable করুন
-> Target text channel-এ right-click করে Channel ID copy করুন
-> ImgBed-এ Bot Token এবং Channel ID দিন
-> Save করে test image upload করুন
```

## References

1. Discord Developers Getting Started: https://docs.discord.com/developers/quick-start/getting-started
2. Discord Help - Where can I find my User/Server/Message ID: https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID
