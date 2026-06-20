# Thêm Telegram Channel

## Cần chuẩn bị gì trước khi bắt đầu

| Requirement | Purpose |
| --- | --- |
| Telegram account | Dùng để tạo bot và storage channel. |
| `@BotFather` | Dùng để tạo Telegram bot. |
| Một Telegram channel | Nơi lưu trữ file cuối cùng. |
| `@userinfobot` | Dùng để tra `Chat ID` của channel. |

## Thêm ở đâu

1. Mở System Settings.
2. Vào Upload Settings.
3. Nhấn Add Channel ở góc trên bên phải.
4. Chọn `Telegram`.

## Field Reference

| Field | Tác dụng | Required |
| --- | --- | --- |
| Channel name | Tên dễ nhận biết cho channel này, ví dụ "Telegram Primary". | Required |
| Active | Bật hoặc tắt channel này. | Recommended |
| Bot Token | Token của Telegram bot. | Required |
| Session ID (Chat ID) | ID của Telegram channel. | Required |
| Relay Proxy URL (optional) | Chỉ dùng nếu truy cập Telegram không ổn định. Nhập proxy URL đầy đủ, bao gồm `https://`. | Optional |
| Remark | Ghi chú để bảo trì sau này. | Optional |

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

![Create a channel](../../image/upload/telegram/新建频道.png)

### 3. Thêm Bot vào Channel

1. Mở channel vừa tạo.
2. Mở channel settings.
3. Thêm member hoặc administrator.
4. Tìm bot username bạn đã tạo.
5. Thêm bot vào channel.

Để upload ổn định nhất, nên cấp quyền administrator cho bot.

![Invite the bot to the channel](../../image/upload/telegram/邀请机器人进频道里.png)

### 4. Lấy Channel ID bằng User Info - Get ID - IDbot

1. Tìm `@userinfobot` trong Telegram. Tên hiển thị thường là `User Info - Get ID - IDbot`.
2. Mở chat và nhấn `Start`.
3. Chọn `Channel` trong các lựa chọn bot đưa ra.
4. Trong message picker, chọn target channel rồi gửi tới `@userinfobot`.
5. Khi `@userinfobot` trả kết quả, copy số hiển thị dạng `Id: -100...`.

Số bắt đầu bằng `-100` là `Session ID (Chat ID)` mà ImgBed cần.

![Get the channel ID](../../image/upload/telegram/获取频道id.png)

### 5. Điền Telegram Channel trong ImgBed

Quay lại channel configuration dialog và điền như sau:

| UI Field | Value |
| --- | --- |
| Channel Identifier | Tên channel tùy chọn, ví dụ `TelegramPrimary`. |
| Active | Recommended. |
| Bot Token | Bot token từ `@BotFather`. |
| Session ID (Chat ID) | Số `-100...` do `@userinfobot` trả về. |
| Relay Proxy URL (optional) | Chỉ nhập khi cần, ví dụ `https://your-tg-proxy.example.com`. |
| Remark | Ghi chú tùy chọn. |

Điền xong thì nhấn Save.

![Edit the configuration](../../image/upload/telegram/编辑配置.png)

## Cách kiểm tra

| Check | Cách kiểm tra |
| --- | --- |
| Channel card xuất hiện | Sau khi save, trang Upload Settings cần hiển thị Telegram channel card. |
| Channel bật được | Active switch nên giữ ở trạng thái on. |
| Configuration đã lưu | Detail view cần cho thấy Bot Token và Chat ID đã được lưu. |
| Upload hoạt động | Upload một test image và xác nhận file xuất hiện trong Telegram channel đích. |

## Quick Checklist

```text
Tạo bot bằng @BotFather
-> Lưu Bot Token
-> Tạo Telegram channel
-> Thêm bot vào channel và cấp quyền administrator
-> Tìm @userinfobot và chọn Channel
-> Forward bất kỳ message nào từ channel tới @userinfobot
-> Copy Id: -100... được trả về
-> Nhập Bot Token và Chat ID trong ImgBed
-> Save và upload test image
```

## References

1. Telegram bots: https://core.telegram.org/bots
2. Telegram Bot API: https://core.telegram.org/bots/api
