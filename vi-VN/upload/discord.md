# Thêm Discord Channel

## Cần chuẩn bị gì trước khi bắt đầu

| Requirement | Purpose |
| --- | --- |
| Discord account | Dùng để tạo server, channel và developer application. |
| Một Discord server | Bot phải join server trước khi access channel. |
| Một text channel | Images và files sẽ được gửi vào channel này. |
| Discord Developer Portal | Dùng để tạo application, tạo bot và lấy `Bot Token`. |

## Thêm ở đâu

1. Mở System Settings.
2. Vào Upload Settings.
3. Nhấn Add Channel ở góc trên bên phải.
4. Chọn `Discord`.

## Field Reference

| Field | Tác dụng | Required |
| --- | --- | --- |
| Channel name | Tên dễ nhận biết cho channel này, ví dụ "Discord Primary". | Required |
| Bot Token | Discord bot token. | Required |
| Channel ID | ID của target text channel. | Required |
| Proxy URL (optional) | Chỉ dùng nếu Discord CDN access không ổn định. Nhập full URL, bao gồm `https://`. | Optional |

## Các bước thiết lập

### 1. Tạo Discord Server và Text Channel

1. Mở Discord.
2. Tạo server mới, hoặc dùng existing server bạn sở hữu.
3. Tạo một text channel trong server đó.

![Create a server](../../image/upload/discord/创建服务器.png)

### 2. Tạo Bot trong Discord Developer Portal

1. Mở Discord Developer Portal: `https://discord.com/developers/applications`
2. Nhấn `New Application`.
3. Nhập application name và tạo.
4. Mở trang `Bot` từ left sidebar.
5. Generate hoặc reset token trong trang `Bot`.
6. Lưu token.

Token này chính là `Bot Token` cần nhập trong ImgBed.

![View the bot token](../../image/upload/discord/查看机器人令牌.png)

### 3. Tạo OAuth2 Invite Link và Install Bot

1. Mở trang `OAuth2` từ left sidebar.
2. Trong scopes, chọn `bot`.
3. Trong permission area, enable các permissions này:

| Permission | Required |
| --- | --- |
| View Channels | Yes |
| Send Messages | Yes |
| Attach Files | Yes |
| Read Message History | Yes |

4. Ở cuối page, xác nhận integration type là `Guild Install`.
5. Copy generated URL.
6. Mở URL đó trong browser.
7. Chọn target server.
8. Hoàn tất authorization flow.

![Select bot permissions in OAuth2](../../image/upload/discord/在oa2勾选机器人权限.png)

![Invite the bot to the channel](../../image/upload/discord/邀请机器人到频道.png)

### 4. Enable Developer Mode và Copy Channel ID

1. Nhấn biểu tượng gear cạnh avatar ở góc dưới bên trái Discord.
2. Mở Advanced từ left sidebar.
3. Enable Developer Mode.
4. Quay lại target text channel.
5. Right-click tên channel.
6. Nhấn Copy Channel ID.

Số được copy là `Channel ID` mà ImgBed cần.

![Enable developer mode](../../image/upload/discord/开启开发者权限.png)

![Copy the channel ID](../../image/upload/discord/复制群频道id.png)

### 5. Điền Discord Channel trong ImgBed

Quay lại channel configuration dialog và điền như sau:

| UI Field | Value |
| --- | --- |
| Channel name | Tên channel tùy chọn, ví dụ `DiscordPrimary`. |
| Bot Token | Token đã lưu từ trang `Bot` trong Discord Developer Portal. |
| Channel ID | Channel ID đã copy từ Discord. |
| Proxy URL (optional) | Chỉ nhập nếu cần, ví dụ `https://your-proxy.example.com`. |

Điền xong thì nhấn Save.

![Add the Discord channel configuration](../../image/upload/discord/添加dc新渠道配置.png)

## Cách kiểm tra

| Check | Cách kiểm tra |
| --- | --- |
| Channel card xuất hiện | Sau khi save, trang Upload Settings cần hiển thị Discord channel card. |
| Channel bật được | Active switch nên giữ trạng thái on. |
| Configuration đã lưu | Detail view cần cho thấy Bot Token và Channel ID đã được lưu. |
| Upload hoạt động | Upload một test image và xác nhận nó xuất hiện trong target Discord text channel. |

## Quick Checklist

```text
Tạo Discord server
-> Tạo text channel
-> Tạo bot trong Discord Developer Portal
-> Lưu Bot Token từ trang Bot
-> Trong OAuth2, chọn bot, View Channels, Send Messages, Attach Files và Read Message History
-> Copy generated URL và authorize bot cho target server
-> Đảm bảo target text channel có cùng permissions
-> Enable Developer Mode
-> Right-click target text channel và copy Channel ID
-> Nhập Bot Token và Channel ID trong ImgBed
-> Save và upload test image
```

## References

1. Discord Developers Getting Started: https://docs.discord.com/developers/quick-start/getting-started
2. Discord Help - Where can I find my User/Server/Message ID: https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID
