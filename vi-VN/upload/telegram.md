# Thêm Telegram Channel

## Cần chuẩn bị gì trước khi bắt đầu

| Yêu cầu | Mục đích |
| --- | --- |
| Telegram account | Dùng để tạo bot và storage channel. |
| `@BotFather` | Dùng để tạo Telegram bot. |
| Một Telegram channel | Nơi lưu trữ file cuối cùng. |
| `@userinfobot` | Dùng để tra `Chat ID` của channel. |

## Thêm ở đâu

1. Mở Cài đặt hệ thống.
2. Vào Cài đặt tải lên.
3. Nhấn Thêm kênh ở góc trên bên phải.
4. Chọn `Telegram`.

## Tham chiếu trường

| Trường | Tác dụng | Bắt buộc |
| --- | --- | --- |
| Channel name | Tên dễ nhận biết cho channel này, ví dụ "Telegram Primary". | Bắt buộc |
| Active | Bật hoặc tắt channel này. | Khuyến nghị |
| Bot Token | Token của Telegram bot. | Bắt buộc |
| Session ID (Chat ID) | ID của Telegram channel. | Bắt buộc |
| Relay Proxy URL (không bắt buộc) | Chỉ dùng nếu truy cập Telegram không ổn định. Nhập proxy URL đầy đủ, bao gồm `https://`. | Không bắt buộc |
| Remark | Ghi chú để bảo trì sau này. | Không bắt buộc |

## Các bước thiết lập

### 1. Tạo Telegram Bot

1. Mở Telegram và tìm `@BotFather`.
2. Mở chat rồi nhấn `Start`.
3. Gửi `/newbot`.
4. Làm theo prompt để nhập tên hiển thị của bot.
5. Làm theo prompt để nhập bot username. Username thường cần kết thúc bằng `bot`.
6. Sau khi bot được tạo, `@BotFather` sẽ trả về bot token.

Token này chính là `Bot Token` cần nhập trong ImgBed.

![Save the bot token](../../image/upload/telegram/保存机器人令牌.png)

### 2. Tạo Channel

1. Trong Telegram, nhấn New Channel.
2. Nhập channel name.
3. Hoàn tất tạo channel.

Có thể dùng cả public channel và private channel.

![Tạo kênh](../../image/upload/telegram/新建频道.png)

### 3. Thêm Bot vào Channel

1. Mở channel vừa tạo.
2. Mở channel settings.
3. Thêm member hoặc administrator.
4. Tìm bot username bạn đã tạo.
5. Thêm bot vào channel.

Để upload ổn định nhất, nên cấp quyền administrator cho bot.

![Invite the bot to the channel](../../image/upload/telegram/邀请机器人进频道里.png)

### 4. Lấy Channel ID bằng `User Info - Get ID - IDbot`

1. Tìm `@userinfobot` trong Telegram. Tên hiển thị thường là `User Info - Get ID - IDbot`.
2. Mở chat và nhấn `Start`.
3. Chọn `Channel` trong các lựa chọn bot đưa ra.
4. Trong message picker, chọn target channel rồi gửi tới `@userinfobot`.
5. Khi `@userinfobot` trả kết quả, sao chép số hiển thị dạng `Id: -100...`.

Số bắt đầu bằng `-100` là `Session ID (Chat ID)` mà ImgBed cần.

![Lấy channel ID](../../image/upload/telegram/获取频道id.png)

### 5. Điền Telegram Channel trong ImgBed

Quay lại channel configuration dialog và điền như sau:

| Trường UI | Giá trị |
| --- | --- |
| Channel Identifier | Tên channel tùy chọn, ví dụ `TelegramPrimary`. |
| Active | Khuyến nghị. |
| Bot Token | Bot token từ `@BotFather`. |
| Session ID (Chat ID) | Số `-100...` do `@userinfobot` trả về. |
| Relay Proxy URL (không bắt buộc) | Chỉ nhập khi cần, ví dụ `https://your-tg-proxy.example.com`. |
| Remark | Ghi chú tùy chọn. |

Điền xong thì nhấn Save.

![Sửa cấu hình](../../image/upload/telegram/编辑配置.png)

## Cách kiểm tra

| Kiểm tra | Cách kiểm tra |
| --- | --- |
| Channel card xuất hiện | Sau khi save, trang Cài đặt tải lên cần hiển thị Telegram channel card. |
| Channel bật được | Active switch nên giữ ở trạng thái on. |
| Configuration đã lưu | Detail view cần cho thấy Bot Token và Chat ID đã được lưu. |
| Upload hoạt động | Upload một test image và xác nhận file xuất hiện trong Telegram channel đích. |

## Danh sách kiểm tra nhanh

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

## Tài liệu tham khảo

1. Telegram bots: https://core.telegram.org/bots
2. Telegram Bot API: https://core.telegram.org/bots/api
