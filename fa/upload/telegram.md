# افزودن Telegram Channel

## پیش از شروع چه چیزهایی لازم است

| مورد | کاربرد |
| --- | --- |
| Telegram account | برای ساخت bot و storage channel |
| `@BotFather` | برای ساخت Telegram bot |
| Telegram channel | مقصد نهایی ذخیره files |
| `@userinfobot` | برای پیدا کردن `Chat ID` channel |

## کجا اضافه کنیم

1. System Settings را باز کنید.
2. وارد Upload Settings شوید.
3. از گوشه بالا سمت راست Add Channel را بزنید.
4. `Telegram` را انتخاب کنید.

## Field Reference

| Field | کاربرد | Required |
| --- | --- | --- |
| Channel name | نام قابل‌تشخیص برای این channel، مثل `Telegram Primary`. | Required |
| Active | این channel را enable یا disable می‌کند. | Recommended |
| Bot Token | token مربوط به Telegram bot. | Required |
| Session ID (Chat ID) | ID مربوط به Telegram channel. | Required |
| Relay Proxy URL (optional) | فقط وقتی Telegram access ناپایدار است استفاده کنید. URL کامل را همراه `https://` وارد کنید. | Optional |
| Remark | یادداشت برای نگهداری بعدی. | Optional |

## مراحل راه‌اندازی

### 1. ساخت Telegram Bot

1. Telegram را باز کنید و `@BotFather` را جست‌وجو کنید.
2. chat را باز کنید و `Start` را بزنید.
3. `/newbot` را ارسال کنید.
4. طبق پیام‌ها، bot display name را وارد کنید.
5. bot username را وارد کنید. معمولاً username باید با `bot` تمام شود.
6. پس از ساخت bot، `@BotFather` یک bot token برمی‌گرداند.

این همان مقداری است که باید در ImgBed داخل `Bot Token` وارد شود.

![Save the bot token](../../image/upload/telegram/保存机器人令牌.png)

### 2. ساخت Channel

1. در Telegram روی New Channel بزنید.
2. channel name را وارد کنید.
3. ساخت channel را کامل کنید.

هم public channel و هم private channel قابل استفاده است.

![Create a channel](../../image/upload/telegram/新建频道.png)

### 3. افزودن Bot به Channel

1. channel ساخته‌شده را باز کنید.
2. channel settings را باز کنید.
3. بخش افزودن member یا administrator را باز کنید.
4. bot username ساخته‌شده را جست‌وجو کنید.
5. bot را به channel اضافه کنید.

برای upload قابل‌اعتمادتر، بهتر است به bot دسترسی administrator بدهید.

![Invite the bot to the channel](../../image/upload/telegram/邀请机器人进频道里.png)

### 4. گرفتن Channel ID با User Info - Get ID - IDbot

1. در Telegram، `@userinfobot` را جست‌وجو کنید. نام نمایشی آن معمولاً `User Info - Get ID - IDbot` است.
2. chat را باز کنید و `Start` را بزنید.
3. از گزینه‌های bot، `Channel` را انتخاب کنید.
4. در message picker، target channel را انتخاب و برای `@userinfobot` ارسال کنید.
5. وقتی result برگشت، عددی را که به شکل `Id: -100...` نمایش داده می‌شود copy کنید.

عدد شروع‌شونده با `-100` همان `Session ID (Chat ID)` موردنیاز ImgBed است.

![Get the channel ID](../../image/upload/telegram/获取频道id.png)

### 5. پر کردن Telegram Channel در ImgBed

به channel configuration dialog برگردید و fields را این‌گونه پر کنید:

| UI Field | Value |
| --- | --- |
| Channel Identifier | نام دلخواه، مثل `TelegramPrimary`. |
| Active | Recommended. |
| Bot Token | token دریافت‌شده از `@BotFather`. |
| Session ID (Chat ID) | عدد `-100...` دریافت‌شده از `@userinfobot`. |
| Relay Proxy URL (optional) | فقط در صورت نیاز، مثل `https://your-tg-proxy.example.com`. |
| Remark | یادداشت اختیاری. |

در پایان Save را بزنید.

![Edit the configuration](../../image/upload/telegram/编辑配置.png)

## روش بررسی

| Check | روش بررسی |
| --- | --- |
| Channel card appears | پس از Save، باید card مربوط به Telegram در Upload Settings دیده شود. |
| Channel can be enabled | Active switch باید روشن بماند. |
| Configuration is saved | در detail view باید Bot Token و Chat ID ذخیره‌شده دیده شوند. |
| Upload works | یک test image upload کنید و بررسی کنید در target Telegram channel ظاهر شود. |

## Quick Checklist

```text
با @BotFather یک bot بسازید
-> Bot Token را ذخیره کنید
-> Telegram channel بسازید
-> bot را به channel اضافه کنید و administrator permissions بدهید
-> @userinfobot را پیدا کنید و Channel را انتخاب کنید
-> یک message از channel به @userinfobot بفرستید
-> Id: -100... برگشتی را copy کنید
-> Bot Token و Chat ID را در ImgBed وارد کنید
-> Save کنید و test image upload کنید
```

## References

1. Telegram bots: https://core.telegram.org/bots
2. Telegram Bot API: https://core.telegram.org/bots/api
