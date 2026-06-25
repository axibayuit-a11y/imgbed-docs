# Thêm Discord Channel

## Cần chuẩn bị gì trước khi bắt đầu

| Yêu cầu | Mục đích |
| --- | --- |
| Discord account | Dùng để tạo server, channel và developer application. |
| Một Discord server | Bot phải join server trước khi access channel. |
| Một text channel | Images và files sẽ được gửi vào channel này. |
| Discord Developer Portal | Dùng để tạo application, tạo bot và lấy `Bot Token`. |

## Thêm ở đâu

1. Mở Cài đặt hệ thống.
2. Vào Cài đặt tải lên.
3. Nhấn Thêm kênh ở góc trên bên phải.
4. Chọn `Discord`.

## Tham chiếu trường

| Trường | Tác dụng | Bắt buộc |
| --- | --- | --- |
| Channel name | Tên dễ nhận biết cho channel này, ví dụ "Discord Primary". | Bắt buộc |
| Bot Token | Discord bot token. | Bắt buộc |
| Channel ID | ID của target text channel. | Bắt buộc |
| Proxy URL (không bắt buộc) | Chỉ dùng nếu Discord CDN access không ổn định. Nhập full URL, bao gồm `https://`. | Không bắt buộc |

## Các bước thiết lập

### 1. Tạo Discord Server và Text Channel

1. Mở Discord.
2. Tạo server mới, hoặc dùng hiện có server bạn sở hữu.
3. Tạo một text channel trong server đó.

![Tạo server](../../image/upload/discord/创建服务器.png)

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
3. Trong permission area, bật các permissions này:

| Quyền | Bắt buộc |
| --- | --- |
| View Channels | Có |
| Send Messages | Có |
| Attach Files | Có |
| Read Message History | Có |

4. Ở cuối page, xác nhận integration type là `Guild Install`.
5. Sao chép đã tạo URL.
6. Mở URL đó trong browser.
7. Chọn target server.
8. Hoàn tất authorization flow.

![Select bot permissions in OAuth2](../../image/upload/discord/在oa2勾选机器人权限.png)

![Invite the bot to the channel](../../image/upload/discord/邀请机器人到频道.png)

### 4. Enable Developer Mode và Sao chép Channel ID

1. Nhấn biểu tượng gear cạnh avatar ở góc dưới bên trái Discord.
2. Mở Advanced từ left sidebar.
3. Enable Developer Mode.
4. Quay lại target text channel.
5. Right-click tên channel.
6. Nhấn Sao chép Channel ID.

Số được sao chép là `Channel ID` mà ImgBed cần.

![Enable developer mode](../../image/upload/discord/开启开发者权限.png)

![Sao chép channel ID](../../image/upload/discord/复制群频道id.png)

### 5. Điền Discord Channel trong ImgBed

Quay lại channel configuration dialog và điền như sau:

| Trường UI | Giá trị |
| --- | --- |
| Channel name | Tên channel tùy chọn, ví dụ `DiscordPrimary`. |
| Bot Token | Token đã lưu từ trang `Bot` trong Discord Developer Portal. |
| Channel ID | Channel ID đã sao chép từ Discord. |
| Proxy URL (không bắt buộc) | Chỉ nhập nếu cần, ví dụ `https://your-proxy.example.com`. |

Điền xong thì nhấn Save.

![Thêm cấu hình kênh Discord](../../image/upload/discord/添加dc新渠道配置.png)

## Cách kiểm tra

| Kiểm tra | Cách kiểm tra |
| --- | --- |
| Channel card xuất hiện | Sau khi save, trang Cài đặt tải lên cần hiển thị Discord channel card. |
| Channel bật được | Active switch nên giữ trạng thái on. |
| Configuration đã lưu | Detail view cần cho thấy Bot Token và Channel ID đã được lưu. |
| Upload hoạt động | Upload một test image và xác nhận nó xuất hiện trong target Discord text channel. |

## Danh sách kiểm tra nhanh

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

## Tài liệu tham khảo

1. Discord Developers Getting Started: https://docs.discord.com/developers/quick-start/getting-started
2. Discord Help - Where can I find my User/Server/Message ID: https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID
