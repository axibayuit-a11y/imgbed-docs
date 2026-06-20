# افزودن Discord Channel

## پیش از شروع چه چیزهایی لازم است

| مورد | کاربرد |
| --- | --- |
| Discord account | برای ساخت server، channel و developer application. |
| Discord server | bot قبل از دسترسی به channel باید عضو server باشد. |
| Text channel | images و files به این channel ارسال می‌شوند. |
| Discord Developer Portal | برای ساخت application، ساخت bot و گرفتن `Bot Token`. |

## کجا اضافه کنیم

1. System Settings را باز کنید.
2. وارد Upload Settings شوید.
3. از گوشه بالا سمت راست Add Channel را بزنید.
4. `Discord` را انتخاب کنید.

## Field Reference

| Field | کاربرد | Required |
| --- | --- | --- |
| Channel name | نام قابل‌تشخیص برای این channel، مثل `Discord Primary`. | Required |
| Bot Token | Discord bot token. | Required |
| Channel ID | ID مربوط به target text channel. | Required |
| Proxy URL (optional) | فقط اگر Discord CDN access ناپایدار است. URL کامل را همراه `https://` وارد کنید. | Optional |

## مراحل setup

### 1. ساخت Discord Server و Text Channel

1. Discord را باز کنید.
2. server جدید بسازید، یا از server موجودی که مالک آن هستید استفاده کنید.
3. در همان server یک text channel بسازید.

![Create a server](../../image/upload/discord/创建服务器.png)

### 2. ساخت Bot در Discord Developer Portal

1. Discord Developer Portal را باز کنید: `https://discord.com/developers/applications`
2. `New Application` را بزنید.
3. application name را وارد و create کنید.
4. از left sidebar صفحه `Bot` را باز کنید.
5. در صفحه `Bot`، token را generate یا reset کنید.
6. token را ذخیره کنید.

این مقدار همان `Bot Token` است که باید در ImgBed وارد کنید.

![View the bot token](../../image/upload/discord/查看机器人令牌.png)

### 3. ساخت OAuth2 Invite Link و نصب Bot

1. از left sidebar صفحه `OAuth2` را باز کنید.
2. زیر scopes، `bot` را انتخاب کنید.
3. در permission area این permissions را enable کنید:

| Permission | Required |
| --- | --- |
| View Channels | Yes |
| Send Messages | Yes |
| Attach Files | Yes |
| Read Message History | Yes |

4. پایین صفحه confirm کنید integration type برابر `Guild Install` باشد.
5. generated URL را copy کنید.
6. آن URL را در browser باز کنید.
7. target server را انتخاب کنید.
8. authorization flow را کامل کنید.

![Select bot permissions in OAuth2](../../image/upload/discord/在oa2勾选机器人权限.png)

![Invite the bot to the channel](../../image/upload/discord/邀请机器人到频道.png)

### 4. Enable کردن Developer Mode و Copy کردن Channel ID

1. در Discord، پایین سمت چپ کنار avatar روی gear icon بزنید.
2. از left sidebar بخش Advanced را باز کنید.
3. Developer Mode را enable کنید.
4. به target text channel برگردید.
5. روی channel name راست‌کلیک کنید.
6. Copy Channel ID را بزنید.

عدد copy‌شده همان `Channel ID` موردنیاز ImgBed است.

![Enable developer mode](../../image/upload/discord/开启开发者权限.png)

![Copy the channel ID](../../image/upload/discord/复制群频道id.png)

### 5. پر کردن Discord Channel در ImgBed

به channel configuration dialog برگردید و fields را این‌گونه پر کنید:

| UI Field | Value |
| --- | --- |
| Channel name | custom channel name، مثل `DiscordPrimary`. |
| Bot Token | token ذخیره‌شده از صفحه `Bot` در Discord Developer Portal. |
| Channel ID | channel ID کپی‌شده از Discord. |
| Proxy URL (optional) | فقط در صورت نیاز، مثل `https://your-proxy.example.com`. |

در پایان Save را بزنید.

![Add the Discord channel configuration](../../image/upload/discord/添加dc新渠道配置.png)

## روش بررسی

| Check | روش بررسی |
| --- | --- |
| Channel card appears | پس از Save، صفحه Upload Settings باید Discord channel card را نشان دهد. |
| Channel can be enabled | Active switch باید روشن بماند. |
| Configuration is saved | detail view باید نشان دهد Bot Token و Channel ID ذخیره شده‌اند. |
| Upload works | یک test image upload کنید و مطمئن شوید در target Discord text channel ظاهر می‌شود. |

## Quick Checklist

```text
Discord server بسازید
-> text channel بسازید
-> در Discord Developer Portal یک bot بسازید
-> Bot Token را از صفحه Bot ذخیره کنید
-> در OAuth2 گزینه‌های bot, View Channels, Send Messages, Attach Files و Read Message History را انتخاب کنید
-> generated URL را copy کنید و bot را برای target server authorize کنید
-> مطمئن شوید target text channel همین permissions را دارد
-> Developer Mode را enable کنید
-> روی target text channel راست‌کلیک کنید و Channel ID را copy کنید
-> Bot Token و Channel ID را در ImgBed وارد کنید
-> Save کنید و test image upload کنید
```

## References

1. Discord Developers Getting Started: https://docs.discord.com/developers/quick-start/getting-started
2. Discord Help - Where can I find my User/Server/Message ID: https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID
