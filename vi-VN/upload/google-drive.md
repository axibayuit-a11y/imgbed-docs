# Thêm Google Drive Channel

## Cần chuẩn bị trước

Trước khi bắt đầu, chuẩn bị các mục sau:

| Requirement | Vì sao cần |
| --- | --- |
| Google account | Dùng để access Google Cloud và authorize Google Drive |
| Google Cloud project | Dùng để enable Drive API và tạo OAuth credentials |
| OAuth 2.0 client | ImgBed dùng để lấy `Client ID`, `Client Secret` và `Refresh Token` |
| ImgBed domain của bạn | Dùng cho OAuth redirect URI. Phải khớp với domain bạn thực sự dùng. |

## Các bước thiết lập

### Step 1: Enable Google Drive API

1. Mở Google Cloud Console.
2. Tạo project mới hoặc chọn project có sẵn.
3. Vào `APIs & Services`.
4. Nhấn `Enable APIs and Services`.
5. Tìm `Google Drive API`.
6. Mở và nhấn enable.

### Step 2: Configure OAuth Consent Screen

1. Trong Google Cloud, mở `Google Auth Platform`.
2. Hoàn tất thông tin `Branding` cơ bản, như app name, support email và developer contact email.
3. Mở `Audience`.
4. Với hầu hết self-hosted personal deployments, chọn `External`.
5. Nếu chọn `External`, thêm Google account bạn muốn authorize vào `Test users`.
6. Mở `Data Access`.
7. Thêm Google Drive permissions cần thiết.

### Step 3: Tạo OAuth 2.0 Client

1. Trong `Google Auth Platform`, mở `Clients`.
2. Tạo client mới.
3. Đặt application type là `Web application`.
4. Đặt tên client dễ nhận biết.
5. Với authorized JavaScript origins, nhập ImgBed URL, ví dụ:

```text
https://img.example.com
```

6. Với authorized redirect URIs, nhập:

```text
https://img.example.com/api/oauth/google/callback
```

![Create OAuth client](../../image/upload/google-drive/oa客户端id创建.png)

![Enter domain and callback URL](../../image/upload/google-drive/填写oa客户端url信息.png)

Sau khi client được tạo, copy các giá trị này:

| Generated Value | ImgBed Field |
| --- | --- |
| Client ID | `Client ID` |
| Client Secret | `Client Secret` |

## Step 4: Điền Google Drive Channel

Trong Upload Settings, chọn `Google Drive` và điền:

| ImgBed Field | Nhập gì |
| --- | --- |
| Channel name | Tên dễ nhận biết, ví dụ `Main Google Drive` |
| Client ID | Client ID từ Google Cloud |
| Client Secret | Client Secret từ Google Cloud |
| Refresh Token | Tạm thời để trống. Lấy ở bước tiếp theo. |
| Root directory | Optional. Mặc định là `imgbed`. |

![Fill client details in ImgBed](../../image/upload/google-drive/粘贴回添加新渠道配置.png)

## Step 5: Lấy Refresh Token

1. Nhấn `Get Token`.
2. Chọn Google account bạn muốn kết nối.
3. Hoàn tất authorization prompts.
4. Callback page sẽ hiển thị `Refresh Token`.
5. Copy token đó.
6. Quay lại ImgBed và paste vào field `Refresh Token`.

![Copy Refresh Token after authorization](../../image/upload/google-drive/授权完复制token.png)

Nếu sau này đổi Google account, đổi OAuth client hoặc authorization cũ hết hạn, bạn không cần xóa channel. Mở edit page và nhấn `Reauthorize`.

## Step 6: Save Channel

Sau khi điền đủ fields, save channel.

## Quick Flow

```text
Mở Google Cloud
-> Tạo hoặc chọn project
-> Enable Google Drive API
-> Configure Google Auth Platform
-> Nếu Audience là External, thêm Google account của bạn vào Test users
-> Tạo Web application OAuth client
-> Dùng https://your-domain.com/api/oauth/google/callback làm redirect URI
-> Điền Client ID và Client Secret vào ImgBed
-> Nhấn Get Token
-> Sign in bằng Google và authorize
-> Copy Refresh Token từ callback page
-> Paste lại vào ImgBed và save
-> Upload test image
```

## References

1. Google OAuth Web Server Applications: https://developers.google.com/identity/protocols/oauth2/web-server
2. Google Workspace OAuth Consent Configuration: https://developers.google.com/workspace/guides/configure-oauth-consent
3. Google Drive API Auth Scopes: https://developers.google.com/workspace/drive/api/guides/api-specific-auth
