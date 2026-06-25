# Xóa tệp bằng API Token

Xóa tệp bằng API Token dành cho tập lệnh, tác vụ tự động và chương trình của bên thứ ba. Bạn không cần mở trang quản trị. Chỉ cần cung cấp URL trang, token và các file ID rõ ràng, bạn có thể xóa một hoặc nhiều tệp khỏi ImgBed.

Xóa là thao tác ghi và sẽ thực sự xóa dữ liệu sau khi lệnh chạy. Trước tiên hãy dùng `imgbed-token-list.mjs` để xác nhận các giá trị `fileId` bạn muốn xóa, rồi truyền các ID đó cho tập lệnh xóa.

![Chỉnh sửa API Token](../../image/Safety/apitoken/编辑api%20token.png)

## Trước khi bắt đầu

Mở bảng quản trị, rồi đi tới:

```text
System Settings -> Security Settings -> API Token
```

Khi tạo hoặc chỉnh sửa API Token, hãy bảo đảm token cho phép xóa. Tập lệnh này chỉ cần quyền `delete`.

Bạn cũng có thể đặt token trong biến môi trường:

```powershell
$env:IMGBED_API_TOKEN="your API Token"
```

## Tải tập lệnh

| Tập lệnh | Mục đích |
| --- | --- |
| <a href="/tools/imgbed-token-delete.mjs" download>Tải tập lệnh xóa tệp</a> | Xóa một hoặc nhiều file ID được chỉ định rõ ràng. |

Yêu cầu Node.js 18 trở lên.

## Hành vi của Delete API

Tập lệnh xóa gọi API xóa ở phần phụ trợ:

```text
POST /api/manage/delete/batch
```

Yêu cầu phải bao gồm API Token:

```text
Authorization: Bearer <token>
```

Ví dụ thân yêu cầu:

```json
{
  "fileIds": ["photos/2026/a.txt"],
  "deleteStrictness": "strict"
}
```

Nếu `fileIds` chứa một tệp, đó là xóa một tệp. Nếu chứa nhiều tệp, đó là xóa theo lô. Phần phụ trợ xử lý tối đa 15 tệp trong một yêu cầu, và tập lệnh tự động chia công việc thành nhiều yêu cầu theo `--batch-size`.

API trả về luồng tiến trình NDJSON. Các sự kiện thường gặp gồm `batch_start`, `file_step`, `file_done`, `batch_complete` và `batch_error`. Tập lệnh phân tích các sự kiện này và tóm tắt thành đầu ra dễ đọc hoặc đầu ra JSON.

Sau khi xóa thành công, phần phụ trợ tự động xử lý chỉ mục tệp, thống kê thư mục, thống kê dung lượng và dọn dẹp bộ nhớ đệm.

## Tham số của tập lệnh xóa

| Tham số | Bắt buộc | Mô tả |
| --- | --- | --- |
| `--base-url <url>` | Có | URL trang ImgBed, ví dụ `https://image.ai6.me`. |
| `--token <token>` | Có | API Token. Bạn cũng có thể dùng biến môi trường `IMGBED_API_TOKEN`. |
| `--file-id <id>` | Có | File ID cần xóa. Bạn có thể truyền nhiều lần. |
| `--strictness <strict\|soft>` | Không | Mức nghiêm ngặt khi xóa. Mặc định là `strict`. |
| `--batch-size <n>` | Không | Số tệp mỗi yêu cầu. Mặc định là `15`, tối đa `15`. |
| `--retries <n>` | Không | Số lần thử lại khi lỗi tạm thời. Mặc định là `3`. |
| `--timeout-ms <n>` | Không | Thời gian chờ cho mỗi yêu cầu. Mặc định là `180000`. |
| `--output <pretty\|json>` | Không | Định dạng đầu ra. Mặc định là `pretty`. |
| `--save-response <path>` | Không | Lưu kết quả cuối cùng thành tệp JSON. |
| `-h` / `--help` | Không | Hiển thị trợ giúp của tập lệnh. |

Tập lệnh này chỉ xóa các giá trị `--file-id` rõ ràng mà bạn truyền vào. Nó không khớp mờ, không xóa sạch hàng loạt một thư mục và không đọc ID cần xóa từ danh sách phân tách bằng dấu phẩy hoặc tệp cục bộ.

## Xóa nghiêm ngặt và xóa mềm

| Chế độ | Mô tả |
| --- | --- |
| `strict` | Chế độ mặc định. Nếu xóa trên bộ lưu trữ từ xa thất bại, bản ghi ImgBed được giữ lại để bạn có thể thử lại hoặc điều tra. |
| `soft` | Nếu xóa trên bộ lưu trữ từ xa thất bại, bản ghi ImgBed vẫn được dọn dẹp và kết quả trả về cảnh báo. |

Nếu tệp từ xa phải được xóa thì lệnh mới được xem là thành công, hãy dùng chế độ `strict` mặc định. Nếu nền tảng từ xa không còn xóa được object và bạn chỉ muốn dọn dẹp bản ghi ImgBed, hãy dùng `soft`.

## Ví dụ

Xóa một tệp:

```powershell
node imgbed-token-delete.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --file-id "photos/2026/a.txt"
```

Dùng token từ biến môi trường:

```powershell
$env:IMGBED_API_TOKEN="your API Token"

node imgbed-token-delete.mjs `
  --base-url "https://your-domain" `
  --file-id "photos/2026/a.txt"
```

Xóa nhiều tệp:

```powershell
node imgbed-token-delete.mjs `
  --base-url "https://your-domain" `
  --file-id "photos/2026/a.txt" `
  --file-id "photos/2026/b.txt" `
  --file-id "photos/2026/c.txt"
```

Dọn dẹp bản ghi ImgBed ngay cả khi xóa từ xa thất bại:

```powershell
node imgbed-token-delete.mjs `
  --base-url "https://your-domain" `
  --file-id "photos/2026/a.txt" `
  --strictness soft
```

Xuất JSON và lưu kết quả:

```powershell
node imgbed-token-delete.mjs `
  --base-url "https://your-domain" `
  --file-id "photos/2026/a.txt" `
  --output json `
  --save-response ".\delete-result.json"
```

Giới hạn mỗi yêu cầu ở 5 tệp:

```powershell
node imgbed-token-delete.mjs `
  --base-url "https://your-domain" `
  --file-id "photos/2026/a.txt" `
  --file-id "photos/2026/b.txt" `
  --batch-size 5
```

## Kiểm tra `fileId` trước khi xóa

Tập lệnh xóa cần file ID của ImgBed. Trước tiên bạn có thể dùng tập lệnh liệt kê để xem tệp trong một thư mục:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --dir "photos/2026" `
  --count 10 `
  --output json
```

Trường `name` trong kết quả trả về thường là `fileId` mà bạn có thể truyền cho tập lệnh xóa.

## Câu hỏi thường gặp

### Vì sao xóa thất bại nhưng tệp vẫn nằm trong danh sách?

Khi dùng chế độ `strict` mặc định, bản ghi ImgBed được giữ lại nếu xóa trên bộ lưu trữ từ xa thất bại. Điều này tránh việc chỉ xóa chỉ mục cục bộ trong khi tệp từ xa vẫn tồn tại. Sau khi xác nhận rằng bạn chỉ muốn dọn dẹp bản ghi ImgBed, hãy thử lại cùng `fileId` với `soft`.

### Vì sao có cảnh báo trong kết quả?

Cảnh báo thường nghĩa là có vấn đề không nghiêm trọng trong quá trình xóa từ xa, dọn dẹp bộ nhớ đệm hoặc hoàn tất thống kê. Tập lệnh tóm tắt cảnh báo để bạn quyết định có cần thử lại hay không.

### Tôi có thể xóa cả thư mục cùng lúc không?

Tập lệnh này không cung cấp thao tác xóa sạch thư mục. Trước tiên hãy dùng tập lệnh liệt kê để lọc các giá trị `fileId` rõ ràng, rồi truyền từng tệp bạn muốn xóa.
