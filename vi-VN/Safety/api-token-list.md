# Liệt kê và lọc bằng API Token

Các tập lệnh liệt kê bằng API Token hữu ích khi tập lệnh, tác vụ tự động hoặc chương trình của bên thứ ba cần đọc dữ liệu ImgBed. Chúng chỉ dùng quyền `list`. Chúng không tải tệp lên, không xóa tệp, không thay đổi cấu hình và không chặn hoặc cho phép bất kỳ địa chỉ IP nào.

Các mục đích chính:

| Chức năng | Mô tả |
| --- | --- |
| Liệt kê trong trình quản lý tệp | Đọc danh sách tệp của quản trị viên và dùng cùng các bộ lọc nâng cao có trong quản lý tệp. |
| Liệt kê trong quản lý người dùng | Đọc thống kê tải lên của người dùng/IP và dùng các bộ lọc có trong quản lý người dùng. |
| Danh sách kênh tải lên | Đọc kênh tải lên đã loại bỏ dữ liệu nhạy cảm, kênh con, dữ liệu dung lượng và trạng thái cân bằng tải. |
| Thống kê thư mục | Đọc thống kê thư mục và thông tin thư mục có phân trang. |

## Trước khi bắt đầu

Mở bảng quản trị, rồi đi tới:

```text
System Settings -> Security Settings -> API Token
```

Khi tạo hoặc chỉnh sửa API Token, hãy bảo đảm token cho phép liệt kê. Tập lệnh này chỉ cần quyền `list`.

Bạn cũng có thể đặt token trong biến môi trường:

```powershell
$env:IMGBED_API_TOKEN="your API Token"
```

## Tải tập lệnh

| Tập lệnh | Mục đích |
| --- | --- |
| <a href="/tools/imgbed-token-list.mjs" download>Tải tập lệnh liệt kê và lọc</a> | Liệt kê trong trình quản lý tệp, liệt kê trong quản lý người dùng, danh sách kênh tải lên và thống kê thư mục. |

Yêu cầu Node.js 18 trở lên.

## Tham số chung

| Tham số | Bắt buộc | Mô tả |
| --- | --- | --- |
| `--base-url <url>` | Có | URL trang ImgBed, ví dụ `https://image.ai6.me`. |
| `--token <token>` | Có | API Token. Bạn cũng có thể dùng biến môi trường `IMGBED_API_TOKEN`. |
| `--retries <n>` | Không | Số lần thử lại khi lỗi tạm thời. Mặc định là `3`. |
| `--timeout-ms <n>` | Không | Thời gian chờ cho mỗi yêu cầu. Mặc định là `180000`. |
| `--output <pretty\|json>` | Không | Định dạng đầu ra. Mặc định là `pretty`; dùng `json` cho chương trình. |
| `--save-response <path>` | Không | Lưu kết quả cuối cùng thành tệp JSON. |
| `-h` / `--help` | Không | Hiển thị trợ giúp của tập lệnh. |

## Liệt kê trong trình quản lý tệp

Liệt kê tệp trong quản lý tệp:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --count 10
```

Xuất JSON:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --count 10 `
  --output json
```

Chỉ đọc số lượng theo các bộ lọc hiện tại:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --file-summary `
  --dir "photos/2026" `
  --recursive
```

### Tham số trình quản lý tệp

| Tham số | Mô tả |
| --- | --- |
| `--files` | Liệt kê tệp. |
| `--file-summary` | Chỉ đọc thống kê số lượng. |
| `--start <n>` | Vị trí bắt đầu phân trang. |
| `--count <n>` | Số bản ghi cần trả về. |
| `--dir <path>` | Thư mục đích. |
| `--recursive` | Bao gồm tệp trong thư mục con. |
| `--search <text>` | Từ khóa tìm kiếm. |
| `--channel <key>` | Lọc theo kênh tải lên, ví dụ `github`, `s3` hoặc `yandex`. |
| `--channel-scope <primary\|backup\|all>` | Phạm vi lọc kênh: kênh chính, kênh dự phòng hoặc tất cả. |
| `--channel-name-groups <value>` | Bộ lọc nhóm kênh con, được chuyển tiếp tới phần phụ trợ. |
| `--list-type <csv>` | Loại danh sách, thường là `None,White,Block`. |
| `--include-tags <csv>` | Yêu cầu các thẻ này. |
| `--exclude-tags <csv>` | Loại trừ các thẻ này. |
| `--time-start <ms>` | Thời điểm bắt đầu tải lên, tính bằng dấu thời gian mili giây. |
| `--time-end <ms>` | Thời điểm kết thúc tải lên, tính bằng dấu thời gian mili giây. |
| `--file-exts <csv>` | Chỉ bao gồm phần mở rộng cụ thể, ví dụ `jpg,png,pdf`. |
| `--exclude-file-exts <csv>` | Loại trừ phần mở rộng cụ thể. |
| `--file-status-categories <csv>` | Nhóm tệp: `image,audio,video,document,code,other`. |
| `--upload-ip <ip>` | Lọc theo tiền tố IP tải lên. |
| `--age-ratings <csv>` | Xếp hạng độ tuổi: `none,all-ages,r12,r16,r18`. |
| `--orientation <csv>` | Bộ lọc hướng, được chuyển tiếp tới phần phụ trợ. |
| `--read-source <csv>` | Bộ lọc nguồn đọc, được chuyển tiếp tới phần phụ trợ. |
| `--access-status <normal\|blocked>` | Trạng thái truy cập công khai. |
| `--min-width <n>` | Chiều rộng tối thiểu. |
| `--max-width <n>` | Chiều rộng tối đa. |
| `--min-height <n>` | Chiều cao tối thiểu. |
| `--max-height <n>` | Chiều cao tối đa. |
| `--min-file-size <mb>` | Dung lượng tệp tối thiểu, dùng tham số MB hiện có của phần phụ trợ. |
| `--max-file-size <mb>` | Dung lượng tệp tối đa, dùng tham số MB hiện có của phần phụ trợ. |

### Ví dụ trình quản lý tệp

Tìm PDF:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --search "pdf" `
  --file-status-categories "document" `
  --count 20
```

Lọc theo IP tải lên và kênh:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --upload-ip "103.62" `
  --channel yandex `
  --channel-scope primary
```

Lưu toàn bộ kết quả:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --count 100 `
  --output json `
  --save-response ".\files.json"
```

## Liệt kê trong quản lý người dùng

Liệt kê thống kê tải lên của người dùng/IP:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --count 20
```

Tìm một IP hoặc địa chỉ:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --search "43.198.183.56"
```

Xem tệp do một IP tải lên:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --user-detail `
  --ip "43.198.183.56" `
  --count 20
```

Liệt kê IP bị chặn tải lên:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --blocked-ips
```

### Tham số quản lý người dùng

| Tham số | Mô tả |
| --- | --- |
| `--users` | Liệt kê thống kê tải lên của người dùng/IP. |
| `--user-detail` | Xem tệp do một IP cụ thể tải lên. |
| `--blocked-ips` | Liệt kê IP bị chặn tải lên. |
| `--ip <ip>` | Bắt buộc khi dùng với `--user-detail`. |
| `--start <n>` | Vị trí bắt đầu phân trang. |
| `--count <n>` | Số bản ghi cần trả về. |
| `--sort <value>` | Thứ tự sắp xếp: `timeDesc`, `timeAsc`, `countDesc`, `countAsc`, `totalSizeDesc`, `totalSizeAsc`. |
| `--search <text>` | Tìm IP hoặc địa chỉ. |
| `--upload-status <allowed\|blocked>` | Tải lên được cho phép hay bị chặn. |
| `--start-time <ms>` | Thời điểm bắt đầu thống kê, tính bằng dấu thời gian mili giây. |
| `--end-time <ms>` | Thời điểm kết thúc thống kê, tính bằng dấu thời gian mili giây. |
| `--file-status-categories <csv>` | Bộ lọc nhóm tệp. |
| `--age-ratings <csv>` | Bộ lọc xếp hạng độ tuổi. |
| `--min-file-size <mb>` | Dung lượng tệp tối thiểu. |
| `--max-file-size <mb>` | Dung lượng tệp tối đa. |
| `--list-type <csv>` | Loại danh sách, thường là `None,White,Block`. |
| `--access-status <normal\|blocked>` | Trạng thái truy cập công khai. |

### Ví dụ quản lý người dùng

Liệt kê người dùng bị chặn tải lên:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --upload-status blocked
```

Tìm theo từ khóa địa chỉ:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --search "Hong Kong"
```

Sắp xếp theo số lượt tải lên:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --sort countDesc `
  --count 50
```

## Danh sách kênh tải lên

Liệt kê cấu hình kênh tải lên đã loại bỏ dữ liệu nhạy cảm:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --channels
```

Dữ liệu trả về gồm:

| Trường | Mô tả |
| --- | --- |
| `type` | Loại kênh tải lên, ví dụ `github`, `s3` hoặc `yandex`. |
| `name` | Tên kênh con hoặc tài khoản. |
| `enabled` | Có đang bật hay không. |
| `load_balance_enabled` | Cân bằng tải có được bật cho loại kênh này hay không. |
| `quota_enabled` | Kiểm tra dung lượng có được bật hay không. |
| `quota_limit_bytes` | Giới hạn dung lượng. |
| `quota_used_bytes` | Dung lượng đã dùng. |
| `quota_checked_at` | Thời điểm kiểm tra dung lượng. |
| `tag_json` | Thẻ không nhạy cảm, chẳng hạn kho công khai hoặc kho riêng tư. |
| `created_at` / `updated_at` | Thời điểm tạo và cập nhật. |

API này không trả về secret, token làm mới, access token, mật khẩu hoặc cấu hình nhạy cảm khác.

## Thống kê thư mục

Liệt kê thống kê thư mục:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --directories `
  --limit 20
```

Liệt kê đường dẫn thư mục đầy đủ và tìm theo tiền tố:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --directories `
  --scope full `
  --search-prefix "test" `
  --include-parents `
  --limit 10
```

### Tham số thống kê thư mục

| Tham số | Mô tả |
| --- | --- |
| `--directories` | Liệt kê thống kê thư mục. |
| `--dir <path>` | Thư mục bắt đầu. |
| `--scope <direct\|full>` | `direct` chỉ liệt kê thư mục con trực tiếp; `full` liệt kê đường dẫn đầy đủ. |
| `--search-prefix <path>` | Tìm theo tiền tố thư mục. |
| `--include-parents` | Trong chế độ `full`, bao gồm cả thư mục cha. |
| `--limit <n>` | Số bản ghi cần trả về. Mức tối đa ở phần phụ trợ là `100`. |
| `--cursor <path>` | Con trỏ trang tiếp theo. |

## Định dạng đầu ra

Đầu ra `pretty` mặc định phù hợp để người đọc:

```powershell
node imgbed-token-list.mjs --base-url "https://your-domain" --token "your API Token" --users --count 5
```

Với chương trình khác, dùng `--output json`:

```powershell
node imgbed-token-list.mjs --base-url "https://your-domain" --token "your API Token" --users --count 5 --output json
```

Bạn cũng có thể lưu toàn bộ kết quả:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --count 5 `
  --output json `
  --save-response ".\users.json"
```

## Câu hỏi thường gặp

### Tập lệnh này có sửa đổi dữ liệu không?

Không. Tập lệnh này chỉ gọi API đọc. Nó không tải lên, xóa, di chuyển, chỉnh sửa cấu hình, hoặc chặn hay cho phép bất kỳ địa chỉ IP nào.

### Vì sao cần quyền `list`?

Liệt kê trong trình quản lý tệp, liệt kê trong quản lý người dùng, danh sách kênh đã loại bỏ dữ liệu nhạy cảm và thống kê thư mục đều là khả năng đọc, nên chúng chỉ cần quyền `list` của API Token.

### Làm sao kiểm tra tất cả tham số có sẵn?

Chạy:

```powershell
node imgbed-token-list.mjs --help
```

Tập lệnh sẽ liệt kê tất cả thao tác và tham số.
