# Quản lý cấu hình bằng API Token

Quản lý cấu hình bằng API Token dành cho tập lệnh tự động, công cụ vận hành hoặc bảng điều khiển của bên thứ ba. Tính năng này có thể đọc và cập nhật cấu hình kênh tải lên, cài đặt bảo mật, cài đặt trang, cài đặt khác và quan hệ liên kết nhẹ mà không cần mở trang quản trị.

Quyền quản lý chỉ cung cấp các thao tác nhẹ phù hợp cho tập lệnh. Những thao tác nặng cần xác nhận trong trình duyệt, tác vụ hàng loạt ở giao diện, hoặc dọn dẹp chỉ mục liên kết vẫn cần được xử lý trong bảng quản trị trên trình duyệt.

![Chỉnh sửa API Token](../../image/Safety/apitoken/编辑api token.png)

## Trước khi bắt đầu

Mở bảng quản trị, rồi đi tới:

```text
System Settings -> Security Settings -> API Token
```

Khi tạo hoặc chỉnh sửa API Token, hãy bảo đảm token có quyền quản lý. Quyền quản lý có thể thay đổi cấu hình trang, vì vậy chỉ cấp quyền này cho tập lệnh đáng tin cậy hoặc người dùng đáng tin cậy.

Cả ba tập lệnh quản lý đều mặc định dùng chế độ chạy thử cho thao tác ghi. Sau khi xem phần xem trước, thêm `--apply` để thật sự lưu thay đổi.

Bạn cũng có thể đặt token trong biến môi trường:

```powershell
$env:IMGBED_API_TOKEN="your API Token"
```

## Tải tập lệnh quản lý

Gói tài liệu cung cấp ba tập lệnh Node.js:

| Tập lệnh | Mục đích |
| --- | --- |
| <a href="/tools/imgbed-token-upload-settings.mjs" download>Tải tập lệnh quản lý cài đặt tải lên</a> | Quản lý kênh tải lên, kênh con và cân bằng tải. |
| <a href="/tools/imgbed-token-site-settings.mjs" download>Tải tập lệnh quản lý cài đặt trang</a> | Quản lý cài đặt bảo mật, cài đặt trang và cài đặt khác. |
| <a href="/tools/imgbed-token-federation.mjs" download>Tải tập lệnh quản lý quan hệ liên kết</a> | Quản lý các thao tác, yêu cầu và tin nhắn quan hệ liên kết nhẹ. |

Yêu cầu Node.js 18 trở lên.

### Tham số chung

| Tham số | Bắt buộc | Mô tả |
| --- | --- | --- |
| `--base-url <url>` | Có | URL trang ImgBed, ví dụ `https://image.ai6.me`. |
| `--token <token>` | Có | API Token. Bạn cũng có thể dùng biến môi trường `IMGBED_API_TOKEN`. |
| `--retries <n>` | Không | Số lần thử lại khi lỗi tạm thời. Mặc định là `3`. |
| `--timeout-ms <n>` | Không | Thời gian chờ yêu cầu. Mặc định là `180000`. |
| `--output <pretty\|json>` | Không | Định dạng đầu ra. Mặc định là `pretty`; dùng `json` cho chương trình. |
| `--save-response <path>` | Không | Lưu kết quả JSON cuối cùng vào tệp. |
| `--apply` | Không | Thực hiện thao tác ghi thật. Nếu không có, thao tác ghi chỉ xem trước. |
| `-h` / `--help` | Không | Hiển thị trợ giúp của tập lệnh. |

## Cài đặt tải lên

Tập lệnh cài đặt tải lên liệt kê, đọc, tạo, chỉnh sửa và xóa kênh con tải lên. Nó cũng có thể bật hoặc tắt cân bằng tải cho một kênh tải lên cấp cao.

```powershell
node imgbed-token-upload-settings.mjs --base-url "https://your-domain" --token "your API Token" --list
```

### Tham số cài đặt tải lên

| Tham số | Mô tả |
| --- | --- |
| `--list` | Liệt kê các nhóm cài đặt tải lên. |
| `--get` | Đọc một kênh cấp cao, hoặc một kênh con bên dưới kênh đó. |
| `--upsert` | Tạo hoặc chỉnh sửa một kênh con. Chạy thử nếu chưa đặt `--apply`. |
| `--delete` | Xóa một kênh con. Chạy thử nếu chưa đặt `--apply`. |
| `--load-balance <true\|false>` | Bật hoặc tắt cân bằng tải cho một kênh cấp cao. |
| `--channel <key>` | Kênh tải lên cấp cao, chẳng hạn `s3`, `github` hoặc `telegram`. |
| `--channel-name <name>` | Tên kênh con hoặc tài khoản. |
| `--set key=value` | Đặt một trường. Có thể lặp lại. Hỗ trợ đường dẫn dấu chấm. |
| `--patch-json <path>` | Gộp trường từ một tệp JSON. |
| `--apply` | Lưu kết quả ghi. |

### Key kênh

| Key kênh | Kênh |
| --- | --- |
| `telegram` / `tg` | Telegram |
| `discord` / `dc` | Discord |
| `cfr2` / `r2` | Cloudflare R2 |
| `s3` | S3 |
| `webdav` / `wd` | Kênh lưu trữ WebDAV |
| `github` / `gh` | GitHub Releases |
| `gitlab` / `gl` | GitLab Packages |
| `huggingface` / `hf` | Hugging Face |
| `onedrive` / `od` | OneDrive |
| `googledrive` / `google` / `gd` | Google Drive |
| `dropbox` / `db` | Dropbox |
| `yandex` / `yx` | Yandex Disk |
| `pcloud` / `pd` | pCloud |

### Ví dụ cài đặt tải lên

Liệt kê tất cả cài đặt tải lên:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --list
```

Đọc cấu hình kênh S3:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get `
  --channel s3
```

Đọc một kênh con S3:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get `
  --channel s3 `
  --channel-name "backup-s3"
```

Tạo hoặc chỉnh sửa một kênh con. Chạy lần đầu không có `--apply` để xem trước:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --upsert `
  --channel webdav `
  --channel-name "backup-webdav" `
  --set enabled=false `
  --set remark="backup test"
```

Sau khi xác nhận, lưu thay đổi:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --upsert `
  --channel webdav `
  --channel-name "backup-webdav" `
  --set enabled=false `
  --set remark="backup test" `
  --apply
```

Xóa một kênh con:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --delete `
  --channel webdav `
  --channel-name "backup-webdav" `
  --apply
```

Bật cân bằng tải S3:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --load-balance true `
  --channel s3 `
  --apply
```

Với trường phức tạp, hãy viết một tệp JSON và truyền bằng `--patch-json`:

```json
{
  "enabled": true,
  "remark": "primary account"
}
```

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --upsert `
  --channel s3 `
  --channel-name "primary-s3" `
  --patch-json ".\s3-channel.json" `
  --apply
```

## Cài đặt trang

Tập lệnh cài đặt trang quản lý ba khu vực cấu hình:

| Khu vực | Tham số | Mô tả |
| --- | --- | --- |
| Cài đặt bảo mật | `security` | Xác thực người dùng, xác thực quản trị viên, thiết bị đăng nhập, API Token, kiểm duyệt hình ảnh, giới hạn tần suất người dùng, WebDAV và các mục khác. |
| Cài đặt trang | `page` | Trang toàn cục, trang phía người dùng, trang quản trị và các cài đặt hiển thị liên quan. |
| Cài đặt khác | `others` | API hình ảnh ngẫu nhiên, duyệt công khai, nút liên kết cục bộ, tự động gắn thẻ, định vị địa lý IP, kênh dự phòng, OCR và các mục khác. |

Dùng `--list-sections` trước để xem các khu vực, phần và trường có thể chỉnh sửa:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --list-sections
```

### Tham số cài đặt trang

| Tham số | Mô tả |
| --- | --- |
| `--list-sections` | Liệt kê các khu vực, phần và trường có thể chỉnh sửa. |
| `--get` | Đọc một phần cài đặt. |
| `--area <security\|page\|others>` | Chọn khu vực cấu hình. |
| `--section <name>` | Chọn phần. Dùng tên được hiển thị bởi `--list-sections`. |
| `--set key=value` | Đặt một trường. Có thể lặp lại. |
| `--apply` | Lưu kết quả ghi. |

Với khu vực `page`, `--set` dùng ID mục cấu hình trang, ví dụ `starsEffect=true`. Với `security` và `others`, `--set` dùng tên trường trong phần đó, ví dụ `email=admin@example.com`.

### Ví dụ cài đặt trang

Đọc cài đặt thông báo cập nhật hệ thống:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get `
  --area security `
  --section systemUpdate
```

Thay đổi email thông báo cập nhật hệ thống. Chạy trước không có `--apply` để xem trước:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --area security `
  --section systemUpdate `
  --set email="admin@example.com"
```

Sau khi xác nhận, lưu thay đổi:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --area security `
  --section systemUpdate `
  --set email="admin@example.com" `
  --apply
```

Thay đổi hiệu ứng sao của trang quản trị:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --area page `
  --section adminSettings `
  --set starsEffect=true `
  --apply
```

Thay đổi ngôn ngữ định vị địa lý IP:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --area others `
  --section ipGeolocation `
  --set language="en" `
  --apply
```

Cài đặt nút liên kết cục bộ có thể đọc và cập nhật các trường thông thường như trạng thái bật, thư mục đồng bộ và mã mời. Xác nhận miền không được xử lý qua API Token. Nếu bảng quản trị báo rằng miền nút cục bộ khác với miền truy cập hiện tại, hãy hoàn tất xác nhận trong bảng quản trị trên trình duyệt.

## Quan hệ liên kết

Tập lệnh liên kết quản lý trạng thái nút cục bộ, nút đi, nút đến, tin nhắn, yêu cầu tham gia, thao tác đăng ký lại khi không có bản ghi, phê duyệt, từ chối và các thao tác quan hệ nhẹ không cần dọn dẹp chỉ mục.

Cập nhật chỉ mục, xóa chỉ mục liên kết và xác nhận thay đổi miền phụ thuộc vào quy trình đầy đủ trong trình duyệt. Tập lệnh không xử lý các thao tác nặng này.

### Thao tác liên kết nhẹ và nặng

| Thao tác | Hỗ trợ của tập lệnh | Mô tả |
| --- | --- | --- |
| Xem trạng thái nút cục bộ và liệt kê quan hệ | Được hỗ trợ | Chỉ đọc bản ghi quan hệ. |
| Đọc tin nhắn và gửi tin nhắn | Được hỗ trợ | Đọc hoặc ghi tin nhắn quan hệ. |
| Yêu cầu tham gia nút khác | Được hỗ trợ | Dùng liên kết mời để gửi yêu cầu. |
| Đăng ký lại cho quan hệ không có bản ghi | Được hỗ trợ | Chỉ dành cho thẻ nút đi có `lastResult=none`; yêu cầu mã mời 6 ký tự. |
| Hủy yêu cầu nút đi đang chờ | Được hỗ trợ | Chỉ hủy yêu cầu đang chờ. |
| Chấp nhận hoặc từ chối yêu cầu nút đến | Được hỗ trợ | Xử lý yêu cầu từ các nút tham gia vào nút của bạn. |
| Xóa quan hệ nút đến đã chấp nhận | Được hỗ trợ | Cập nhật bản ghi quan hệ nút đến và thông báo cho nút ngang hàng. |
| Xóa bản ghi kết thúc của nút đến | Được hỗ trợ | Chỉ xóa bản ghi quan hệ kết thúc của nút đến. |
| Hủy đăng ký nút đi đã chấp nhận | Chỉ trong trình duyệt | Cần xóa chỉ mục liên kết cục bộ, thao tác này được trình duyệt chạy theo lô. |
| Xóa bản ghi kết thúc của nút đi | Chỉ trong trình duyệt | Có thể cần dọn dẹp chỉ mục liên kết trước. |
| Xác nhận hoặc hủy thay đổi miền | Chỉ trong trình duyệt | Cần xác nhận miền hiện tại và xử lý chỉ mục thay đổi miền. |
| Xuất bản, kéo hoặc xóa hàng loạt chỉ mục | Chỉ trong trình duyệt | Đây là các tác vụ hàng loạt ở giao diện. |

### Tham số liên kết

| Tham số | Mô tả |
| --- | --- |
| `--status` | Xem trạng thái nút liên kết cục bộ, nút đi và nút đến. |
| `--list` | Liệt kê quan hệ liên kết. |
| `--chat` | Đọc tin nhắn đã lưu trong bộ nhớ đệm của một quan hệ. |
| `--send-message` | Gửi tin nhắn cho một quan hệ đã thiết lập. |
| `--join` | Yêu cầu tham gia nút khác thông qua liên kết mời. |
| `--reapply` | Đăng ký lại cho quan hệ không có bản ghi. Yêu cầu mã mời 6 ký tự. |
| `--accept` | Chấp nhận yêu cầu nút đến. |
| `--deny` | Từ chối yêu cầu nút đến. |
| `--cancel` | Hủy yêu cầu nút đi đang chờ, hoặc xóa quan hệ nút đến đã chấp nhận. |
| `--delete` | Xóa bản ghi quan hệ kết thúc của nút đến. |
| `--direction <outgoing\|incoming\|all>` | Hướng quan hệ. `outgoing` nghĩa là các nút bạn đã tham gia; `incoming` nghĩa là các nút tham gia vào nút của bạn. |
| `--domain <url>` | Miền của nút quan hệ. |
| `--invite-link <url>` | Liên kết mời từ nút ngang hàng. |
| `--invite-code <code>` | Mã mời 6 ký tự dùng để đăng ký lại. |
| `--text <message>` | Nội dung tin nhắn. |
| `--apply` | Lưu kết quả ghi. |

### Ví dụ liên kết

Xem trạng thái nút cục bộ và cả hai danh sách quan hệ:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --status
```

Chỉ liệt kê nút đi:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --list `
  --direction outgoing
```

Chỉ liệt kê nút đến:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --list `
  --direction incoming
```

Yêu cầu tham gia một nút khác. Chạy trước không có `--apply` để xem trước:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --join `
  --invite-link "https://peer-domain/federation/invite/abcdef"
```

Sau khi xác nhận, lưu thay đổi:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --join `
  --invite-link "https://peer-domain/federation/invite/abcdef" `
  --apply
```

Đăng ký lại cho quan hệ không có bản ghi:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --reapply `
  --domain "https://peer-domain" `
  --invite-code "abc123" `
  --apply
```

Chấp nhận yêu cầu nút đến:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --accept `
  --domain "https://peer-domain" `
  --apply
```

Từ chối yêu cầu nút đến:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --deny `
  --domain "https://peer-domain" `
  --apply
```

Gửi tin nhắn cho quan hệ đã thiết lập:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --send-message `
  --direction outgoing `
  --domain "https://peer-domain" `
  --text "Hello, this is a test message." `
  --apply
```

Hủy yêu cầu nút đi đang chờ:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --cancel `
  --direction outgoing `
  --domain "https://peer-domain" `
  --apply
```

Xóa quan hệ nút đến đã chấp nhận:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --cancel `
  --direction incoming `
  --domain "https://peer-domain" `
  --apply
```

Xóa bản ghi kết thúc của nút đến:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --delete `
  --direction incoming `
  --domain "https://peer-domain" `
  --apply
```

Việc hủy đăng ký nút đi đã chấp nhận và xóa bản ghi nút đi phải được xử lý trong bảng quản trị trên trình duyệt, vì các thao tác này có thể cần dọn dẹp chỉ mục liên kết cục bộ trước.

### Miền không khớp

Nếu miền nút cục bộ và miền đang chờ trong một quan hệ không khớp, tập lệnh báo lỗi kèm `currentDomain` và `pendingDomain`. Hãy xử lý trong bảng quản trị trên trình duyệt vì thay đổi miền cũng liên quan đến dọn dẹp chỉ mục nút đi và xác nhận.

Nếu yêu cầu tham gia trả về `FEDERATION_NODE_DOMAIN_MISMATCH`, miền dùng trong liên kết mời không khớp với miền cục bộ đã lưu của nút ngang hàng. Phản hồi bao gồm `currentOrigin` và `detectedOrigin`. Hãy dùng miền hiện đã xác nhận của nút ngang hàng, hoặc yêu cầu họ xác nhận miền trong bảng quản trị trên trình duyệt trước.

## Câu hỏi thường gặp

### Vì sao thay đổi của tôi chưa có hiệu lực?

Lệnh ghi mặc định chạy ở chế độ xem trước. Thêm `--apply` sau khi xem phần xem trước để thật sự lưu thay đổi.

### Làm sao biết trường nào có thể thay đổi?

Với cài đặt tải lên, dùng `--get` để xem cấu trúc kênh con hiện có. Với cài đặt bảo mật, cài đặt trang và cài đặt khác, dùng `--list-sections` để xem các khu vực, phần và trường mà tập lệnh có thể chỉnh sửa.

### Tôi muốn dùng kết quả trong chương trình khác

Dùng `--output json`, hoặc thêm `--save-response result.json`. Chương trình của bạn có thể đọc trực tiếp tệp JSON đã lưu.
