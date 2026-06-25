# Tải tệp lên bằng API Token

Tải lên bằng API Token dành cho tập lệnh, tác vụ tự động và chương trình của bên thứ ba. Bạn không cần mở giao diện web. Chỉ cần cung cấp URL trang, token, đường dẫn tệp cục bộ và một kênh tải lên thật, tệp có thể được tải lên ImgBed và phản hồi sẽ bao gồm URL của tệp.

![Chỉnh sửa API Token](../../image/Safety/apitoken/编辑上传权限api.png)

## Trước khi bắt đầu

Mở bảng quản trị, rồi đi tới:

```text
System Settings -> Security Settings -> API Token
```

Khi tạo hoặc chỉnh sửa API Token, hãy bảo đảm token có quyền tải lên và dùng một kênh tải lên mặc định thật. Tải lên bằng API Token không dùng lối vào Điều phối thông minh, và tập lệnh cũng nên truyền một kênh thật.

## Tải tập lệnh tải lên

Gói tài liệu cung cấp hai tập lệnh Node.js:

| Tập lệnh | Mục đích |
| --- | --- |
| <a href="/tools/imgbed-token-single-upload.mjs" download>tập lệnh tải lên một yêu cầu</a> | Gọi `/upload` một lần. Hữu ích cho tệp nhỏ và kiểm tra kết nối. |
| <a href="/tools/imgbed-token-chunk-upload.mjs" download>tập lệnh tải lên theo phần</a> | Dùng chia phần bằng API Token, tải trực tiếp hoặc phiên tải lên của nền tảng. Khuyến nghị cho tệp lớn. |

Yêu cầu Node.js 18 trở lên.

## Liệt kê kênh có sẵn

Cả hai tập lệnh đều có thể liệt kê các kênh tải lên khả dụng với API Token hiện tại:

```powershell
node imgbed-token-single-upload.mjs --base-url "https://your-domain" --token "your API Token" --list-channels
node imgbed-token-chunk-upload.mjs --base-url "https://your-domain" --token "your API Token" --list-channels
```

Khi liệt kê kênh, không cần `--file` và `--channel`. Phản hồi bao gồm kênh tải lên mặc định, key kênh tải lên, tên kênh con và trạng thái cân bằng tải. Secret, token làm mới và các giá trị cấu hình nhạy cảm khác không được trả về.

## Chọn chế độ tải lên

| Chế độ | Phù hợp nhất cho | Mô tả |
| --- | --- | --- |
| Tải lên một yêu cầu | Tệp nhỏ, tập lệnh đơn giản, kiểm tra kết nối | Gửi toàn bộ tệp tới `/upload` trong một yêu cầu. |
| Tải lên theo phần | Tệp lớn hoặc tệp dễ hết thời gian chờ | Tập lệnh chọn luồng chia phần, trực tiếp hoặc phiên tải lên theo kênh. |

Với tệp lớn hơn, hãy dùng tập lệnh tải lên theo phần trước. Tải lên một yêu cầu bị giới hạn bởi dung lượng yêu cầu Cloudflare, bộ nhớ Worker và giới hạn riêng của từng nền tảng.

## Tải lên một yêu cầu

Tập lệnh một yêu cầu gửi một yêu cầu tới `/upload`.

```powershell
node imgbed-token-single-upload.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --file "D:\test\image.png" `
  --channel s3 `
  --folder "photos/2026"
```

Bạn cũng có thể đặt token trong biến môi trường:

```powershell
$env:IMGBED_API_TOKEN="your API Token"
node imgbed-token-single-upload.mjs --base-url "https://your-domain" --file "D:\test\image.png" --channel s3
```

### Tham số tải lên một yêu cầu

| Tham số | Bắt buộc | Mô tả |
| --- | --- | --- |
| `--base-url <url>` | Có | URL trang ImgBed, ví dụ `https://image.ai6.me`. |
| `--token <token>` | Có | API Token. Bạn cũng có thể dùng biến môi trường `IMGBED_API_TOKEN`. |
| `--file <path>` | Có | Đường dẫn tệp cục bộ. |
| `--channel <key>` | Có | Kênh tải lên. |
| `--folder <path>` | Không | Thư mục tải lên, ví dụ `photos/2026` hoặc `/user/`. |
| `--name-type <type>` | Không | Chế độ đặt tên, ánh xạ tới `uploadNameType` ở phần phụ trợ. Mặc định là `default`. |
| `--channel-name <name>` | Không | Chọn kênh con/tài khoản. Nếu bỏ qua, cấu hình kênh ở phần phụ trợ sẽ quyết định. |
| `--retries <n>` | Không | Số lần thử lại khi lỗi tạm thời. Mặc định là `3`. |
| `--timeout-ms <n>` | Không | Thời gian chờ yêu cầu. Mặc định là `180000`. |
| `--output <pretty\|json>` | Không | Định dạng đầu ra. Mặc định là `pretty`. |
| `--save-response <path>` | Không | Lưu phản hồi JSON cuối cùng vào tệp. |
| `--list-channels` | Không | Liệt kê các kênh khả dụng với token hiện tại rồi thoát. |

### Kênh tải lên một yêu cầu

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

### Giới hạn dung lượng tải lên một yêu cầu

Khi có thể, hãy giữ tệp tải lên một yêu cầu dưới 100 MB.

Các kênh sau có ngưỡng chặn `/upload` một yêu cầu rõ ràng:

| Kênh | Giới hạn một yêu cầu |
| --- | ---: |
| Telegram | 20 MiB |
| Discord | 10 MiB |
| S3 | 64 MiB |
| WebDAV | 64 MiB |
| GitHub Releases | 64 MiB |
| GitLab Packages | 64 MiB |

Khi tệp vượt một trong các giới hạn này, tập lệnh báo lỗi tương ứng ngay tại máy cục bộ. Các kênh khác không có kiểm tra cục bộ cứng 100 MB trong tập lệnh. Nếu thân yêu cầu vượt khả năng của Cloudflare hoặc nền tảng, Cloudflare hoặc nền tảng từ xa sẽ trả lỗi.

## Tải lên theo phần

Tập lệnh tải lên theo phần trước tiên yêu cầu phần phụ trợ phân giải tệp đích, rồi đi theo luồng tệp lớn cho kênh đã chọn. Bạn không cần tự viết yêu cầu phiên chia phần, hợp nhất hoặc hoàn tất.

```powershell
node imgbed-token-chunk-upload.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --file "D:\test\video.zip" `
  --channel github `
  --folder "photos/2026" `
  --concurrency 3
```

### Tham số tải lên theo phần

| Tham số | Bắt buộc | Mô tả |
| --- | --- | --- |
| `--base-url <url>` | Có | URL trang ImgBed. |
| `--token <token>` | Có | API Token. Bạn cũng có thể dùng biến môi trường `IMGBED_API_TOKEN`. |
| `--file <path>` | Có | Đường dẫn tệp cục bộ. |
| `--channel <key>` | Có | Kênh tải lên. |
| `--folder <path>` | Không | Thư mục tải lên. |
| `--name-type <type>` | Không | Chế độ đặt tên, ánh xạ tới `uploadNameType` ở phần phụ trợ. Mặc định là `default`. |
| `--channel-name <name>` | Không | Chọn kênh con/tài khoản. Nếu bỏ qua, cấu hình kênh ở phần phụ trợ sẽ quyết định. |
| `--concurrency <n>` | Không | Số lượt tải lên đồng thời. Mặc định là `1`, tối đa `3`. |
| `--retries <n>` | Không | Số lần thử lại khi lỗi tạm thời. Mặc định là `3`. |
| `--timeout-ms <n>` | Không | Thời gian chờ từng yêu cầu. Mặc định là `180000`. |
| `--output <pretty\|json>` | Không | Định dạng đầu ra. Mặc định là `pretty`. |
| `--save-response <path>` | Không | Lưu phản hồi JSON cuối cùng vào tệp. |
| `--list-channels` | Không | Liệt kê các kênh khả dụng với token hiện tại rồi thoát. |

### Kênh tải lên theo phần

| Key kênh | Luồng tải lên |
| --- | --- |
| `telegram` / `tg` | Phiên `/upload` chia phần thật |
| `discord` / `dc` | Phiên `/upload` chia phần thật |
| `cfr2` / `r2` | Phiên `/upload` chia phần thật |
| `github` / `gh` | Phiên `/upload` chia phần thật |
| `gitlab` / `gl` | Phiên `/upload` chia phần thật |
| `webdav` / `wd` | Phiên `/upload` chia phần thật |
| `s3` | S3 multipart upload |
| `onedrive` / `od` | Phiên tải lên OneDrive |
| `googledrive` / `google` / `gd` | Tải lên tiếp tục được của Google Drive |
| `dropbox` / `db` | Phiên tải lên Dropbox |
| `yandex` / `yx` | URL tải lên trực tiếp của Yandex |
| `pcloud` / `pd` | Liên kết tải lên pCloud |
| `huggingface` / `hf` | Tải lên Hugging Face LFS |

Các mẫu tệp nén của Yandex không ổn định khi thử nghiệm. Tệp không nén đã được xác minh là tải lên thành công.

## Phản hồi tải lên

Sau khi tải lên thành công, tập lệnh in:

```text
success
src: /file/photos/2026/example.png
url: https://your-domain/file/photos/2026/example.png
fileId: photos/2026/example.png
```

| Trường | Mô tả |
| --- | --- |
| `src` | Đường dẫn tệp nội bộ của trang. |
| `url` | URL công khai đầy đủ, phù hợp cho tập lệnh hoặc bản ghi cơ sở dữ liệu của bạn. |
| `fileId` | File ID, hữu ích cho truy vấn, quản lý hoặc nhật ký sau này. |
| `channelName` | Tập lệnh theo phần có thể trả về kênh con/tài khoản thực tế đã dùng. |

Với `--output json`, tập lệnh in toàn bộ phản hồi JSON để chương trình sử dụng.

## Gọi API một yêu cầu trực tiếp

Nếu không dùng tập lệnh, bạn có thể gọi trực tiếp điểm cuối tải lên một yêu cầu:

```text
POST https://your-domain/upload?uploadChannel=s3&uploadFolder=photos/2026&uploadNameType=default
Authorization: Bearer your API Token
Content-Type: multipart/form-data
```

Trường biểu mẫu:

| Trường | Bắt buộc | Mô tả |
| --- | --- | --- |
| `file` | Có | Tệp cần tải lên. |

Tham số truy vấn:

| Tham số | Bắt buộc | Mô tả |
| --- | --- | --- |
| `uploadChannel` | Có | Kênh tải lên thật. |
| `uploadFolder` | Không | Thư mục tải lên. |
| `uploadNameType` | Không | Chế độ đặt tên. |
| `channelName` | Không | Chọn kênh con/tài khoản. |

Phản hồi thành công có dạng:

```json
{
  "success": true,
  "src": "/file/photos/2026/example.png",
  "url": "https://your-domain/file/photos/2026/example.png",
  "fileId": "photos/2026/example.png"
}
```

## Câu hỏi thường gặp

### Tải lên một yêu cầu dung lượng lớn bị lỗi

`/upload` một yêu cầu gửi toàn bộ tệp trong một yêu cầu. Tệp lớn có thể bị Cloudflare hoặc nền tảng từ xa chặn. Dùng tập lệnh tải lên theo phần cho tệp lớn.

### Đã đặt `--channel-name` nhưng tải lên vẫn lỗi

Kiểm tra xem kênh đã chọn có thật sự có kênh con với tên đó và kênh đó có đang bật không. Nếu bỏ qua `--channel-name`, phần phụ trợ chọn một tài khoản khả dụng theo cấu hình của kênh đó.

### Tôi muốn dùng kết quả trong chương trình khác

Dùng `--output json`, hoặc thêm `--save-response result.json`. Đọc trường `url` để lấy URL tệp đầy đủ.

### Yandex không thể tải tệp nén lên

Yandex không hỗ trợ định dạng lưu trữ nén. Điều này có thể do chính sách nền tảng của họ. Khi dùng Yandex, hãy tải tệp không phải dạng nén nếu có thể.

