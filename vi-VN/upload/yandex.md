# Thêm Yandex Channel

## Cần chuẩn bị trước

| Yêu cầu | Vì sao cần |
| --- | --- |
| Yandex account | Dùng để sign in và authorize Yandex Disk |
| Yandex OAuth app | Dùng để generate `Client ID` và `Client Secret` |
| ImgBed domain của bạn | Dùng cho OAuth redirect URI |
| Available Yandex Disk storage | Dùng làm nơi lưu file thực tế |

## Các bước thiết lập

### Bước 1: Tạo Yandex OAuth App

1. Mở trang tạo Yandex OAuth app:

```text
https://oauth.yandex.com/client/new
```

2. Nếu bị redirect sang sign in, hãy sign in bằng Yandex account trước.
3. Tạo app mới.
4. Đặt tên app dễ nhận biết, ví dụ `imgbed-yandex`.
5. Tìm phần callback hoặc redirect URL settings.
6. Nhập:

```text
https://your-domain.com/api/oauth/yandex/callback
```

### Bước 2: Xác nhận Quyềns

Với ImgBed Yandex integration hiện tại, giữ bốn permissions này trong `Yandex.Disk REST API`:

| Quyền | Mục đích |
| --- | --- |
| `cloud_api:disk.app_folder` | Cho phép ImgBed lưu files trong app folder |
| `cloud_api:disk.read` | Đọc files và download links |
| `cloud_api:disk.write` | Upload files, tạo folders và xóa files |
| `Access to information about Yandex.Disk` | Đọc disk quota và used space |

Nếu cũng thấy các permissions này trong `Yandex ID API`, chúng là không bắt buộc:

| Văn bản quyền | Khuyến nghị |
| --- | --- |
| `Access to username, first name and surname, gender` | Không bắt buộc |
| `Access to email address` | Không bắt buộc |

Các tính năng upload, download, deletion và quota chủ yếu phụ thuộc vào bốn permissions `Yandex.Disk REST API` ở trên.

![Configure Yandex Disk permissions](../../image/upload/yandex/dataaccess配置软盘权限.png)

### Bước 3: Sao chép App Credentials

Sau khi app được tạo, sao chép:

| Trường Yandex | Trường ImgBed |
| --- | --- |
| `Client ID` | `Client ID` |
| `Client Secret` | `Client Secret` |

![Ghi lại Client ID và Secret](../../image/upload/yandex/记录客户端id和secret.png)

### Bước 4: Điền Yandex Channel

Trong Cài đặt tải lên, chọn `Yandex` và điền:

| Trường ImgBed | Nhập gì |
| --- | --- |
| Channel name | Tên dễ nhận biết, ví dụ `Main Yandex` |
| Client ID | Yandex app `Client ID` |
| Client Secret | Yandex app `Client Secret` |
| Refresh Token | Tạm thời để trống |
| Root directory | Không bắt buộc. Mặc định là `imgbed`. |

![Sửa config kênh](../../image/upload/yandex/编辑配置渠道.png)

### Bước 5: Lấy Refresh Token

1. Trong ImgBed, nhấn `Get Token`.
2. Sign in vào Yandex account bạn muốn kết nối.
3. Phê duyệt authorization prompt.
4. Callback page sẽ hiển thị `Refresh Token`.
5. Sao chép token đó.
6. Quay lại ImgBed và dán vào trường `Refresh Token`.

![Sao chép refresh token sau authorization](../../image/upload/yandex/授权后复制刷新令牌.png)

### Bước 6: Save Channel

Sau khi điền đủ trường, save channel.

## Luồng nhanh

```text
Open Yandex OAuth Console
-> Create an app
-> Add https://your-domain.com/api/oauth/yandex/callback
-> Confirm Yandex Disk permissions
-> Copy Client ID and Client Secret
-> Fill Client ID / Client Secret into ImgBed
-> Click Get Token
-> Copy the Refresh Token from the callback page
-> Paste it back into ImgBed and save
```

## Tài liệu tham khảo

1. Register a Yandex app: https://yandex.com/dev/id/doc/en/register-client
2. Lấy authorization code qua URL: https://yandex.com/dev/id/doc/en/codes/code-url
3. Yandex OAuth token endpoint: https://yandex.com/dev/id/doc/en/tokens/token
