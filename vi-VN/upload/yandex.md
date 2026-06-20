# Thêm Yandex Channel

## Cần chuẩn bị trước

| Requirement | Vì sao cần |
| --- | --- |
| Yandex account | Dùng để sign in và authorize Yandex Disk |
| Yandex OAuth app | Dùng để generate `Client ID` và `Client Secret` |
| ImgBed domain của bạn | Dùng cho OAuth redirect URI |
| Available Yandex Disk storage | Dùng làm nơi lưu file thực tế |

## Các bước thiết lập

### Step 1: Tạo Yandex OAuth App

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

### Step 2: Xác nhận Permissions

Với ImgBed Yandex integration hiện tại, giữ bốn permissions này trong `Yandex.Disk REST API`:

| Permission | Purpose |
| --- | --- |
| `cloud_api:disk.app_folder` | Cho phép ImgBed lưu files trong app folder |
| `cloud_api:disk.read` | Đọc files và download links |
| `cloud_api:disk.write` | Upload files, tạo folders và xóa files |
| `Access to information about Yandex.Disk` | Đọc disk quota và used space |

Nếu cũng thấy các permissions này trong `Yandex ID API`, chúng là optional:

| Permission Text | Recommendation |
| --- | --- |
| `Access to username, first name and surname, gender` | Optional |
| `Access to email address` | Optional |

Các tính năng upload, download, deletion và quota chủ yếu phụ thuộc vào bốn permissions `Yandex.Disk REST API` ở trên.

![Configure Yandex Disk permissions](../../image/upload/yandex/dataaccess配置软盘权限.png)

### Step 3: Copy App Credentials

Sau khi app được tạo, copy:

| Yandex Field | ImgBed Field |
| --- | --- |
| `Client ID` | `Client ID` |
| `Client Secret` | `Client Secret` |

![Record Client ID and Secret](../../image/upload/yandex/记录客户端id和secret.png)

### Step 4: Điền Yandex Channel

Trong Upload Settings, chọn `Yandex` và điền:

| ImgBed Field | Nhập gì |
| --- | --- |
| Channel name | Tên dễ nhận biết, ví dụ `Main Yandex` |
| Client ID | Yandex app `Client ID` |
| Client Secret | Yandex app `Client Secret` |
| Refresh Token | Tạm thời để trống |
| Root directory | Optional. Mặc định là `imgbed`. |

![Edit channel config](../../image/upload/yandex/编辑配置渠道.png)

### Step 5: Lấy Refresh Token

1. Trong ImgBed, nhấn `Get Token`.
2. Sign in vào Yandex account bạn muốn kết nối.
3. Approve authorization prompt.
4. Callback page sẽ hiển thị `Refresh Token`.
5. Copy token đó.
6. Quay lại ImgBed và paste vào field `Refresh Token`.

![Copy refresh token after authorization](../../image/upload/yandex/授权后复制刷新令牌.png)

### Step 6: Save Channel

Sau khi điền đủ fields, save channel.

## Quick Flow

```text
Mở Yandex OAuth Console
-> Tạo app
-> Thêm https://your-domain.com/api/oauth/yandex/callback
-> Xác nhận Yandex Disk permissions
-> Copy Client ID và Client Secret
-> Điền Client ID / Client Secret vào ImgBed
-> Nhấn Get Token
-> Copy Refresh Token từ callback page
-> Paste lại vào ImgBed và save
```

## References

1. Register a Yandex app: https://yandex.com/dev/id/doc/en/register-client
2. Get an authorization code through URL: https://yandex.com/dev/id/doc/en/codes/code-url
3. Yandex OAuth token endpoint: https://yandex.com/dev/id/doc/en/tokens/token
