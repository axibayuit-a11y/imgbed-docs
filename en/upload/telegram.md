# Add a Telegram Channel

## What You Need Before You Start

| Requirement | Purpose |
| --- | --- |
| Telegram account | Used to create the bot and the storage channel. |
| `@BotFather` | Used to create a Telegram bot. |
| A Telegram channel | The final storage destination for files. |
| `@userinfobot` | Used to look up the channel `Chat ID`. |

## Where to Add It

1. Open System Settings.
2. Go to Upload Settings.
3. Click Add Channel in the upper-right corner.
4. Select `Telegram`.

## Field Reference

| Field | What It Does | Required |
| --- | --- | --- |
| Channel name | A friendly name for this channel, such as "Telegram Primary". | Required |
| Active | Enables or disables this channel. | Recommended |
| Bot Token | The token of your Telegram bot. | Required |
| Session ID (Chat ID) | The ID of the Telegram channel. | Required |
| Relay Proxy URL (optional) | Use this only if Telegram access is unstable. Enter the full proxy URL, including `https://`. | Optional |
| Remark | Notes for future maintenance. | Optional |

## Setup Steps

### 1. Create a Telegram Bot

1. Open Telegram and search for `@BotFather`.
2. Open the chat and click `Start`.
3. Send `/newbot`.
4. Follow the prompts to enter a bot display name.
5. Follow the prompts to enter a bot username. The username usually needs to end with `bot`.
6. After the bot is created, `@BotFather` will return a bot token.

This token is the `Bot Token` you need to enter in ImgBed.

![Save the bot token](../../image/upload/telegram/保存机器人令牌.png)

### 2. Create a Channel

1. In Telegram, click New Channel.
2. Enter a channel name.
3. Finish creating the channel.

Both public and private channels can be used.

![Create a channel](../../image/upload/telegram/新建频道.png)

### 3. Add the Bot to the Channel

1. Open the channel you just created.
2. Open the channel settings.
3. Add a member or administrator.
4. Search for the bot username you created.
5. Add the bot to the channel.

For the most reliable uploads, grant the bot administrator permissions.

![Invite the bot to the channel](../../image/upload/telegram/邀请机器人进频道里.png)

### 4. Get the Channel ID with User Info - Get ID - IDbot

1. Search for `@userinfobot` in Telegram. Its display name is usually `User Info - Get ID - IDbot`.
2. Open the chat and click `Start`.
3. Choose `Channel` from the options provided by the bot.
4. In the message picker, select the target channel and send it to `@userinfobot`.
5. When `@userinfobot` returns the result, copy the number shown as `Id: -100...`.

The number starting with `-100` is the `Session ID (Chat ID)` required by ImgBed.

![Get the channel ID](../../image/upload/telegram/获取频道id.png)

### 5. Fill in the Telegram Channel in ImgBed

Return to the channel configuration dialog and fill in the fields as follows:

| UI Field | Value |
| --- | --- |
| Channel Identifier | A custom channel name, for example `TelegramPrimary`. |
| Active | Recommended. |
| Bot Token | The bot token from `@BotFather`. |
| Session ID (Chat ID) | The `-100...` number returned by `@userinfobot`. |
| Relay Proxy URL (optional) | Only if needed, for example `https://your-tg-proxy.example.com`. |
| Remark | Optional notes. |

Click Save when you are done.

![Edit the configuration](../../image/upload/telegram/编辑配置.png)

## How to Verify It

| Check | How to Verify |
| --- | --- |
| Channel card appears | After saving, the Upload Settings page should show a Telegram channel card. |
| Channel can be enabled | The Active switch should stay on. |
| Configuration is saved | The detail view should show that the Bot Token and Chat ID were saved. |
| Upload works | Upload a test image and confirm that it appears in the target Telegram channel. |

## Quick Checklist

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

## References

1. Telegram bots: https://core.telegram.org/bots
2. Telegram Bot API: https://core.telegram.org/bots/api
