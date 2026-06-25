# Quản lý tệp bằng API Token

Quản lý tệp bằng API Token dành cho tập lệnh, tác vụ tự động và bảng quản lý của bên thứ ba. Tính năng này dùng quyền `manage` để chỉnh sửa thông tin tệp, di chuyển tệp, đổi tên tệp, tạo tệp giữ chỗ cho thư mục, điều chỉnh thẻ tệp và trạng thái danh sách, vô hiệu hóa hoặc khôi phục một IP tải lên, cũng như tạo hoặc xóa Token tải lên ngắn hạn mà không cần mở trang quản trị.

Tập lệnh này chỉ xử lý các thao tác quản lý nhẹ trong phần quản lý tệp và quản lý người dùng. Tải lên, liệt kê, xóa, cài đặt tải lên, cài đặt trang và quan hệ liên kết vẫn dùng các tập lệnh chuyên dụng tương ứng.

![Chỉnh sửa API Token](../../image/Safety/apitoken/编辑管理权限api.png)

## Chuẩn bị

Sau khi vào trang quản trị, mở:

Cài đặt hệ thống -> Cài đặt bảo mật -> API Token

Khi tạo hoặc chỉnh sửa API Token, hãy xác nhận Token này được phép quản lý. Quyền `manage` có thể sửa trạng thái tệp, trạng thái tải lên của người dùng và tạo Token tải lên ngắn hạn, vì vậy chỉ nên cấp cho tập lệnh hoặc người dùng đáng tin cậy.

Các thao tác ghi trong tập lệnh quản lý tệp mặc định đều ở chế độ xem trước và sẽ không thật sự lưu. Sau khi xác nhận nội dung xem trước là đúng, thêm `--apply` để thực hiện ghi.

Bạn cũng có thể đặt Token vào biến môi trường:

```powershell
$env:IMGBED_API_TOKEN="your API Token"
```

## Tải tập lệnh

| Tập lệnh | Mục đích |
| --- | --- |
| <a href="/tools/imgbed-token-manage.mjs" download>tập lệnh quản lý tệp</a> | Siêu dữ liệu tệp, nhãn kiểm duyệt, thẻ tệp, trạng thái danh sách, di chuyển, đổi tên, tạo thư mục, chặn/khôi phục IP, tạo và xóa Token tải lên ngắn hạn |

Máy cục bộ cần cài Node.js 18 trở lên để chạy tập lệnh.

## Phạm vi chức năng

| Khả năng | Tập lệnh | Quyền |
| --- | --- | --- |
| Tải tệp lên | `imgbed-token-single-upload.mjs` / `imgbed-token-chunk-upload.mjs` | `upload` |
| Liệt kê tệp, lọc tệp, đọc thống kê người dùng | `imgbed-token-list.mjs` | `list` |
| Xóa tệp được chỉ định rõ ràng | `imgbed-token-delete.mjs` | `delete` |
| Chỉnh sửa thông tin tệp, thẻ, danh sách, di chuyển, đổi tên, tạo thư mục, chặn IP, tạo hoặc xóa Token tải lên ngắn hạn | `imgbed-token-manage.mjs` | `manage` |
| Chỉnh sửa kênh tải lên, cài đặt bảo mật, cài đặt trang, cài đặt khác, quan hệ liên kết | Các tập lệnh quản lý cấu hình | `manage` |

`imgbed-token-manage.mjs` không tải tệp lên, không liệt kê tệp và không xóa tệp. Khi cần tìm `fileId`, hãy dùng tập lệnh liệt kê để lọc tệp trước. Khi cần xóa tệp, hãy chuyển `fileId` rõ ràng cho tập lệnh xóa.

## Tham số chung

| Tham số | Bắt buộc | Mô tả |
| --- | --- | --- |
| `--base-url <url>` | Có | URL trang ImgBed, ví dụ `https://image.ai6.me` |
| `--token <token>` | Có | API Token. Bạn cũng có thể dùng biến môi trường `IMGBED_API_TOKEN` |
| `--retries <n>` | Không | Số lần thử lại khi gặp lỗi tạm thời. Mặc định là `3` |
| `--timeout-ms <n>` | Không | Thời gian chờ cho một yêu cầu. Mặc định là `180000` |
| `--output <pretty\|json>` | Không | Định dạng đầu ra. Mặc định là `pretty`; nên dùng `json` khi gọi từ chương trình |
| `--save-response <path>` | Không | Lưu kết quả cuối cùng thành tệp JSON |
| `--batch-size <n>` | Không | Số lượng mục xử lý trong mỗi yêu cầu của thao tác hàng loạt. Mặc định là `15`, tối đa `15` |
| `--apply` | Không | Thực sự thực hiện ghi. Nếu không thêm, chỉ xem trước |
| `-h` / `--help` | Không | Xem trợ giúp của tập lệnh |

## Xác nhận fileId trước

Phần lớn thao tác của tập lệnh quản lý tệp cần `fileId`. Bạn có thể tra cứu trước bằng tập lệnh liệt kê:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --dir "test4" `
  --count 10 `
  --output json
```

Trường `name` trong kết quả trả về thường chính là `fileId` có thể truyền cho tập lệnh quản lý tệp.

## Siêu dữ liệu tệp

Siêu dữ liệu tệp dùng để sửa tên hiển thị và nguồn đọc trong phần quản lý tệp của trang quản trị.

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-metadata `
  --file-id "photos/2026/a.jpg" `
  --file-name "cover.jpg" `
  --read-source backup
```

Sau khi xác nhận kết quả xem trước là đúng, lưu thay đổi:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-metadata `
  --file-id "photos/2026/a.jpg" `
  --file-name "cover.jpg" `
  --read-source backup `
  --apply
```

### Tham số siêu dữ liệu tệp

| Tham số | Mô tả |
| --- | --- |
| `--set-metadata` | Sửa siêu dữ liệu của một tệp |
| `--file-id <id>` | ID tệp cần sửa |
| `--file-name <name>` | Tên hiển thị mới trong trang quản trị |
| `--read-source <primary\|backup>` | Nguồn đọc. `primary` là nguồn chính, `backup` là nguồn dự phòng |

Cần truyền ít nhất một trong hai tham số `--file-name` hoặc `--read-source`.

## Nhãn kiểm duyệt

Nhãn kiểm duyệt tương ứng với phân loại độ tuổi của tệp. Bạn có thể đọc nhãn hiện tại trước khi sửa.

Đọc nhãn kiểm duyệt:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get-label `
  --file-id "photos/2026/a.jpg"
```

Đặt nhãn kiểm duyệt:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-label `
  --file-id "photos/2026/a.jpg" `
  --label r12 `
  --apply
```

### Tham số nhãn kiểm duyệt

| Tham số | Mô tả |
| --- | --- |
| `--get-label` | Đọc nhãn kiểm duyệt của một tệp |
| `--set-label` | Sửa nhãn kiểm duyệt của một tệp |
| `--file-id <id>` | ID tệp |
| `--label <value>` | Giá trị nhãn: `all-ages`, `r12`, `r16`, `r18`, `None` |

## Thẻ tệp

Thẻ tệp dùng để gắn các thẻ nghiệp vụ có thể tìm kiếm cho tệp. Tập lệnh hỗ trợ đọc, ghi đè, thêm, xóa và cũng hỗ trợ xử lý hàng loạt nhiều tệp.

Đọc thẻ tệp:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get-tags `
  --file-id "photos/2026/a.jpg"
```

Thêm thẻ:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --add-tags `
  --file-id "photos/2026/a.jpg" `
  --tag "cover" `
  --tag "2026" `
  --apply
```

Xóa thẻ:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --remove-tags `
  --file-id "photos/2026/a.jpg" `
  --tag "cover" `
  --apply
```

Ghi đè thẻ:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-tags `
  --file-id "photos/2026/a.jpg" `
  --tag "archive" `
  --tag "public" `
  --apply
```

Thêm thẻ hàng loạt:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --batch-tags `
  --file-id "photos/2026/a.jpg" `
  --file-id "photos/2026/b.jpg" `
  --tag-action add `
  --tag "batch-test" `
  --apply
```

### Tham số thẻ tệp

| Tham số | Mô tả |
| --- | --- |
| `--get-tags` | Đọc thẻ của một tệp |
| `--set-tags` | Ghi đè thẻ của một tệp |
| `--add-tags` | Thêm thẻ cho một tệp |
| `--remove-tags` | Xóa thẻ khỏi một tệp |
| `--batch-tags` | Đặt, thêm hoặc xóa thẻ hàng loạt |
| `--file-id <id>` | ID tệp. Với thao tác hàng loạt, có thể truyền nhiều lần |
| `--tag <tag>` | Giá trị thẻ, có thể truyền nhiều lần |
| `--tags-json <path>` | Đọc mảng thẻ từ tệp JSON |
| `--tag-action <set\|add\|remove>` | Hành động thẻ hàng loạt |

Ví dụ nội dung tệp `--tags-json`:

```json
["cover", "2026", "public"]
```

## Trạng thái danh sách đen và danh sách trắng

Trạng thái danh sách quyết định cách kiểm soát truy cập của tệp trong chế độ truy cập công khai. Có thể sửa từng tệp hoặc sửa hàng loạt.

Đặt một tệp vào danh sách trắng:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-list-type `
  --file-id "photos/2026/a.jpg" `
  --list-type White `
  --apply
```

Thêm hàng loạt vào danh sách đen:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --batch-list-type `
  --file-id "photos/2026/a.jpg" `
  --file-id "photos/2026/b.jpg" `
  --list-type Block `
  --apply
```

Khôi phục trạng thái danh sách mặc định:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-list-type `
  --file-id "photos/2026/a.jpg" `
  --list-type None `
  --apply
```

### Tham số danh sách đen và danh sách trắng

| Tham số | Mô tả |
| --- | --- |
| `--set-list-type` | Sửa trạng thái danh sách của một tệp |
| `--batch-list-type` | Sửa trạng thái danh sách tệp hàng loạt. Mỗi yêu cầu xử lý tối đa `15` tệp |
| `--file-id <id>` | ID tệp. Với thao tác hàng loạt, có thể truyền nhiều lần |
| `--list-type <None\|White\|Block>` | `None` là trạng thái mặc định, `White` là danh sách trắng, `Block` là danh sách đen |

## Di chuyển tệp

Di chuyển tệp sẽ chuyển một hoặc nhiều tệp vào thư mục đích. Backend xử lý tối đa `15` tệp trong một yêu cầu. Tập lệnh sẽ tự động chia theo `--batch-size` thành nhiều yêu cầu và thực hiện tuần tự.

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --move `
  --file-id "photos/2026/a.jpg" `
  --file-id "photos/2026/b.jpg" `
  --target-path "archive/2026" `
  --apply
```

### Tham số di chuyển

| Tham số | Mô tả |
| --- | --- |
| `--move` | Di chuyển tệp |
| `--file-id <id>` | ID tệp cần di chuyển, có thể truyền nhiều lần |
| `--target-path <dir>` | Thư mục đích |
| `--batch-size <n>` | Số tệp di chuyển trong mỗi yêu cầu. Mặc định là `15`, tối đa `15` |

## Đổi tên hoặc đổi đường dẫn

Đổi tên dùng ID tệp cũ và ID tệp mới được chỉ định rõ ràng. ID tệp mới có thể chỉ đổi tên tệp, hoặc đồng thời đổi cả thư mục.

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --rename `
  --old-file-id "photos/2026/a.jpg" `
  --new-file-id "photos/2026/a-renamed.jpg" `
  --apply
```

Khi đổi tên hàng loạt, có thể truyền lặp lại `--old-file-id` và `--new-file-id`:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --rename `
  --old-file-id "photos/2026/a.jpg" `
  --new-file-id "archive/2026/a.jpg" `
  --old-file-id "photos/2026/b.jpg" `
  --new-file-id "archive/2026/b.jpg" `
  --apply
```

Bạn cũng có thể ghi ánh xạ vào tệp JSON:

```json
[
  {
    "oldFileId": "photos/2026/a.jpg",
    "newFileId": "archive/2026/a.jpg"
  },
  {
    "oldFileId": "photos/2026/b.jpg",
    "newFileId": "archive/2026/b.jpg"
  }
]
```

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --rename `
  --items-json ".\rename-items.json" `
  --apply
```

### Tham số đổi tên

| Tham số | Mô tả |
| --- | --- |
| `--rename` | Đổi tên hoặc đổi đường dẫn theo ánh xạ rõ ràng |
| `--old-file-id <id>` | ID tệp cũ, có thể truyền nhiều lần |
| `--new-file-id <id>` | ID tệp mới, có thể truyền nhiều lần; số lượng phải khớp với `--old-file-id` |
| `--items-json <path>` | Mảng JSON, mỗi phần tử là `{ "oldFileId": "...", "newFileId": "..." }` |
| `--batch-size <n>` | Số mục đổi tên xử lý trong mỗi yêu cầu. Mặc định là `15`, tối đa `15` |

## Tạo thư mục

Thư mục của ImgBed được suy ra từ đường dẫn tệp, bản thân không có thư mục rỗng thật sự. Khi tập lệnh tạo thư mục, nó sẽ tạo tệp giữ chỗ `0.md` trong thư mục đích để phần quản lý tệp và thống kê thư mục có thể hiển thị thư mục đó.

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --create-folder `
  --parent-directory "photos" `
  --folder-name "2026" `
  --apply
```

### Tham số tạo thư mục

| Tham số | Mô tả |
| --- | --- |
| `--create-folder` | Tạo tệp giữ chỗ cho thư mục |
| `--parent-directory <dir>` | Thư mục cha; có thể truyền chuỗi rỗng cho thư mục gốc |
| `--folder-name <name>` | Tên thư mục mới |

## Chặn và khôi phục IP tải lên

Quyền quản lý có thể thêm một IP vào danh sách cấm tải lên, hoặc đưa IP đó ra khỏi danh sách cấm tải lên. Thao tác này ảnh hưởng đến các lần tải lên sau đó từ IP này, nhưng không xóa các tệp IP đó đã tải lên.

Chặn một IP tải lên:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --block-ip "67.159.48.149" `
  --apply
```

Khôi phục một IP tải lên:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --allow-ip "67.159.48.149" `
  --apply
```

Xem danh sách IP đang bị cấm tải lên:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --blocked-ips
```

### Tham số quản lý IP

| Tham số | Mô tả |
| --- | --- |
| `--block-ip <ip>` | Thêm vào danh sách cấm tải lên |
| `--allow-ip <ip>` | Xóa khỏi danh sách cấm tải lên |

## Tạo và xóa Token tải lên ngắn hạn

Quyền quản lý có thể tạo Token chuyên dùng để tải lên trong thời gian ngắn. Token này cố định chỉ có quyền `upload`, `autoDelete` cố định là `true`, và thời gian hết hạn dài nhất là `1` ngày.

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --create-upload-token `
  --name "Temporary Upload Token" `
  --owner "upload-bot" `
  --default-upload-channel telegram `
  --expires-in-minutes 20 `
  --apply `
  --output json
```

Bạn cũng có thể truyền trực tiếp dấu thời gian mili giây:

```powershell
$expiresAt = [DateTimeOffset]::UtcNow.AddHours(12).ToUnixTimeMilliseconds()

node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --create-upload-token `
  --name "Upload Token valid for one day" `
  --owner "upload-bot" `
  --default-upload-channel telegram `
  --expires-at $expiresAt `
  --apply
```

Khi xóa Token tải lên ngắn hạn, cần truyền `id` do API tạo trả về. Token quản lý chỉ có thể xóa Token thỏa các điều kiện sau:

| Điều kiện | Yêu cầu |
| --- | --- |
| Quyền | `permissions` chỉ có `upload` |
| Tự động xóa | `autoDelete=true` |
| Thời hạn hiệu lực | `expiresAt - createdAt <= 24` giờ |

Xóa Token tải lên ngắn hạn:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --delete-upload-token `
  --token-id "mqt4jqokc85be80d1f0f47078e848a77d6c1aa6e" `
  --apply
```

Token quản lý không thể xóa Token thông thường, Token dài hạn, Token chứa quyền `list` / `delete` / `manage`, cũng không thể xóa Token tải lên có thời hạn hiệu lực vượt quá `1` ngày. Các Token này vẫn cần xử lý trong trang quản trị trên trình duyệt.

### Tham số Token tải lên ngắn hạn

| Tham số | Mô tả |
| --- | --- |
| `--create-upload-token` | Tạo Token chuyên dùng cho tải lên ngắn hạn |
| `--delete-upload-token` | Xóa Token chuyên dùng cho tải lên ngắn hạn đủ điều kiện |
| `--name <name>` | Tên Token |
| `--owner <owner>` | Mô tả chủ sở hữu Token |
| `--default-upload-channel <key>` | Kênh tải lên mặc định, phải là kênh thật, ví dụ `telegram`, `s3`, `github` |
| `--expires-in-minutes <n>` | Số phút hết hạn tính từ thời điểm hiện tại, tối đa `1440` |
| `--expires-at <ms>` | Thời điểm hết hạn tuyệt đối, dạng dấu thời gian mili giây, tối đa `24` giờ kể từ hiện tại |
| `--token-id <id>` | ID Token tải lên ngắn hạn cần xóa |

Token tải lên ngắn hạn chỉ cho phép tải lên. Trong thử nghiệm, Token ngắn hạn có `permissions=["upload"]` đều bị từ chối khi truy cập API liệt kê, quản lý tệp và xóa.

Sau khi hết hạn, Token có `autoDelete=true` sẽ được dọn khi backend kiểm tra và phát hiện nó đã hết hạn. Khi đọc danh sách API Token, các Token tự động xóa đã hết hạn cũng sẽ được dọn.

## Đối chiếu API

| Thao tác | Phương thức | API |
| --- | --- | --- |
| Sửa siêu dữ liệu tệp | `PATCH` | `/api/manage/metadata/{fileId}` |
| Đọc nhãn kiểm duyệt | `GET` | `/api/manage/label/{fileId}` |
| Sửa nhãn kiểm duyệt | `POST` | `/api/manage/label/{fileId}` |
| Đọc thẻ tệp | `GET` | `/api/manage/tags/{fileId}` |
| Sửa thẻ tệp | `POST` | `/api/manage/tags/{fileId}` |
| Sửa thẻ tệp hàng loạt | `POST` | `/api/manage/tags/batch` |
| Sửa trạng thái danh sách | `POST` | `/api/manage/listType/{fileId}` |
| Sửa trạng thái danh sách hàng loạt | `POST` | `/api/manage/listType/batch` |
| Di chuyển hoặc đổi tên | `POST` | `/api/manage/relocate/batch` |
| Tạo thư mục | `POST` | `/api/manage/folder/create` |
| Chặn IP tải lên | `POST` | `/api/manage/cusConfig/blockip` |
| Khôi phục IP tải lên | `POST` | `/api/manage/cusConfig/whiteip` |
| Tạo Token tải lên ngắn hạn | `POST` | `/api/manage/apiTokens` |
| Xóa Token tải lên ngắn hạn | `DELETE` | `/api/manage/apiTokens?id={tokenId}` |

Tập lệnh sẽ tự động kèm theo:

```text
Authorization: Bearer your API Token
```

## Định dạng đầu ra

Đầu ra mặc định `pretty` phù hợp để người vận hành đọc. Nếu muốn chương trình khác xử lý tiếp, dùng `--output json`:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get-tags `
  --file-id "photos/2026/a.jpg" `
  --output json
```

Bạn cũng có thể lưu kết quả đầy đủ:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get-tags `
  --file-id "photos/2026/a.jpg" `
  --output json `
  --save-response ".\manage-result.json"
```

Di chuyển hàng loạt, đổi tên hàng loạt và thao tác danh sách hàng loạt sẽ phân tích luồng tiến độ NDJSON do backend trả về, rồi tổng hợp số lượng sự kiện, trạng thái hoàn tất và chi tiết lỗi.

## Câu hỏi thường gặp

### Vì sao chạy lệnh xong nhưng không có thay đổi

Các thao tác ghi mặc định ở chế độ xem trước. Cần xác nhận kết quả xem trước là đúng, rồi thêm `--apply` để thật sự lưu.

### Tập lệnh này có thể tải lên, liệt kê hoặc xóa tệp không

Không. Tải lên dùng tập lệnh tải lên, liệt kê và lọc dùng tập lệnh liệt kê, xóa tệp rõ ràng dùng tập lệnh xóa. Tập lệnh quản lý tệp chỉ xử lý các thao tác quản lý nhẹ trong phạm vi quyền `manage`.

### Làm sao biết nên truyền fileId nào

Trước tiên dùng `imgbed-token-list.mjs --files` để tra cứu tệp. Trường `name` trong kết quả trả về thường là ID tệp, cũng chính là giá trị truyền cho `--file-id` ở đây.

### Một thao tác hàng loạt xử lý tối đa bao nhiêu tệp

Backend xử lý tối đa `15` tệp trong một yêu cầu. Tập lệnh mặc định `--batch-size 15`; nếu truyền giá trị nhỏ hơn, tập lệnh sẽ tự động chia thành nhiều yêu cầu tuần tự theo số lượng đó.

### Có thể tạo thư mục rỗng thật sự không

Thư mục ImgBed được suy ra từ đường dẫn tệp, nên không có thư mục rỗng thật sự. `--create-folder` sẽ tạo tệp giữ chỗ `0.md` để thư mục đó hiển thị trong phần quản lý tệp và thống kê thư mục.

### Token tải lên ngắn hạn dài nhất bao lâu

Tối đa `1` ngày, tức `1440` phút. Nếu vượt quá thời gian này, tập lệnh sẽ từ chối tại máy cục bộ; backend cũng sẽ trả về `API_TOKEN_MANAGE_CREATE_EXPIRES_AT_TOO_LONG`.

### Token tải lên ngắn hạn hết hạn rồi có tự động xóa không

Có tự động dọn, nhưng không phải tác vụ định kỳ xóa ngay lập tức. Token hết hạn sẽ được dọn khi được kiểm tra lại; khi đọc danh sách API Token, các Token đã hết hạn và có `autoDelete=true` cũng sẽ được dọn.
