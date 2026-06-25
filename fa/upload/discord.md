# افزودن کانال Discord

## پیش از شروع چه چیزهایی لازم است

| مورد | کاربرد |
| --- | --- |
| حساب Discord | برای ساخت سرور، کانال و برنامه توسعه‌دهنده استفاده می‌شود. |
| سرور Discord | پیش از دسترسی به کانال، bot باید عضو یک سرور باشد. |
| کانال متنی | تصاویر و فایل‌ها به این کانال ارسال می‌شوند. |
| Discord Developer Portal | برای ساخت برنامه، ساخت ربات و دریافت `Bot Token` استفاده می‌شود. |

## کجا اضافه کنیم

1. تنظیمات سیستم را باز کنید.
2. به تنظیمات بارگذاری بروید.
3. در گوشه بالا سمت راست روی افزودن کانال کلیک کنید.
4. `Discord` را انتخاب کنید.

## مرجع فیلدها

| فیلد | کاربرد | الزامی |
| --- | --- | --- |
| نام کانال | نامی قابل تشخیص برای این کانال، مانند `Discord Primary`. | الزامی |
| Bot Token | توکن ربات در Discord. | الزامی |
| Channel ID | شناسه کانال متنی مقصد. | الزامی |
| URL پروکسی (اختیاری) | فقط زمانی استفاده کنید که دسترسی به Discord CDN ناپایدار است. URL کامل را همراه با `https://` وارد کنید. | اختیاری |

## مراحل پیکربندی

### 1. ساخت سرور و کانال متنی در Discord

1. Discord را باز کنید.
2. یک سرور جدید بسازید یا از سروری که مالک آن هستید استفاده کنید.
3. در آن سرور یک کانال متنی بسازید.

![ساخت سرور](../../image/upload/discord/创建服务器.png)

### 2. ساخت ربات در Discord Developer Portal

1. Discord Developer Portal را باز کنید: `https://discord.com/developers/applications`
2. روی `New Application` کلیک کنید.
3. نام برنامه را وارد کنید و آن را بسازید.
4. صفحه `Bot` را از نوار کناری چپ باز کنید.
5. در صفحه `Bot` توکن را ایجاد یا بازنشانی کنید.
6. توکن را ذخیره کنید.

این توکن همان `Bot Token` است که باید در ImgBed وارد کنید.

![مشاهده توکن bot](../../image/upload/discord/查看机器人令牌.png)

### 3. ساخت لینک دعوت OAuth2 و نصب ربات

1. صفحه `OAuth2` را از نوار کناری چپ باز کنید.
2. در بخش محدوده‌های دسترسی، `bot` را انتخاب کنید.
3. در بخش مجوزها، این مجوزها را فعال کنید:

| مجوز | الزامی |
| --- | --- |
| View Channels | بله |
| Send Messages | بله |
| Attach Files | بله |
| Read Message History | بله |

4. در پایین صفحه مطمئن شوید نوع یکپارچه‌سازی `Guild Install` است.
5. URL تولیدشده را کپی کنید.
6. آن URL را در مرورگر باز کنید.
7. سرور مقصد را انتخاب کنید.
8. جریان مجوزدهی را کامل کنید.

![انتخاب مجوزهای ربات در OAuth2](../../image/upload/discord/在oa2勾选机器人权限.png)

![دعوت ربات به کانال](../../image/upload/discord/邀请机器人到频道.png)

### 4. فعال کردن Developer Mode و کپی کردن Channel ID

1. در Discord، روی آیکن چرخ‌دنده کنار آواتار خود در گوشه پایین چپ کلیک کنید.
2. بخش `Advanced` را از نوار کناری چپ باز کنید.
3. `Developer Mode` را فعال کنید.
4. به کانال متنی مقصد برگردید.
5. روی نام کانال راست‌کلیک کنید.
6. روی `Copy Channel ID` کلیک کنید.

عدد کپی‌شده همان `Channel ID` موردنیاز ImgBed است.

![فعال کردن Developer Mode](../../image/upload/discord/开启开发者权限.png)

![کپی کردن Channel ID](../../image/upload/discord/复制群频道id.png)

### 5. تکمیل کانال Discord در ImgBed

به پنجره پیکربندی کانال برگردید و فیلدها را این‌گونه تکمیل کنید:

| فیلد رابط کاربری | مقدار |
| --- | --- |
| نام کانال | نام سفارشی کانال، برای مثال `DiscordPrimary`. |
| Bot Token | توکنی که از صفحه `Bot` در Discord Developer Portal ذخیره کرده‌اید. |
| Channel ID | شناسه کانالی که از Discord کپی کرده‌اید. |
| URL پروکسی (اختیاری) | فقط در صورت نیاز، برای مثال `https://your-proxy.example.com`. |

در پایان روی ذخیره کلیک کنید.

![افزودن پیکربندی کانال Discord](../../image/upload/discord/添加dc新渠道配置.png)

## روش بررسی

| بررسی | روش بررسی |
| --- | --- |
| کارت کانال نمایش داده می‌شود | پس از ذخیره، صفحه تنظیمات بارگذاری باید کارت کانال Discord را نشان دهد. |
| کانال قابل فعال‌سازی است | کلید فعال‌سازی باید روشن بماند. |
| پیکربندی ذخیره شده است | نمای جزئیات باید نشان دهد Bot Token و Channel ID ذخیره شده‌اند. |
| بارگذاری کار می‌کند | یک تصویر آزمایشی بارگذاری کنید و مطمئن شوید در کانال متنی مقصد Discord ظاهر می‌شود. |

## فهرست سریع

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

## منابع

1. راهنمای شروع برای توسعه‌دهندگان Discord: https://docs.discord.com/developers/quick-start/getting-started
2. راهنمای Discord برای پیدا کردن شناسه کاربر، سرور یا پیام: https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID
