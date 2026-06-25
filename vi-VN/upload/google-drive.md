# Thêm Google Drive Channel

## Cần chuẩn bị trước

Trước khi bắt đầu, chuẩn bị các mục sau:

| Yêu cầu | Vì sao cần |
| --- | --- |
| Google account | Dùng để access Google Cloud và authorize Google Drive |
| Google Cloud project | Dùng để bật Drive API và tạo OAuth credentials |
| OAuth 2.0 client | ImgBed dùng để lấy `Client ID`, `Client Secret` và `Refresh Token` |
| ImgBed domain của bạn | Dùng cho OAuth redirect URI. Phải khớp với domain bạn thực sự dùng. |

## Các bước thiết lập

### Bước 1: Enable Google Drive API

1. Mở Google Cloud Console.
2. Tạo project mới hoặc chọn project có sẵn.
3. Vào `APIs & Services`.
4. Nhấn `Enable APIs and Services`.
5. Tìm `Google Drive API`.
6. Mở và nhấn bật.

### Bước 2: Configure OAuth Consent Screen

1. Trong Google Cloud, mở `Google Auth Platform`.
2. Hoàn tất thông tin `Branding` cơ bản, như app name, support email và developer contact email.
3. Mở `Audience`.
4. Với hầu hết self-hosted personal deployments, chọn `External`.
5. Nếu chọn `External`, thêm Google account bạn muốn authorize vào `Test users`.
6. Mở `Data Access`.
7. Thêm Google Drive permissions cần thiết.

### Bước 3: Tạo OAuth 2.0 Client

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

![Tạo OAuth client](../../image/upload/google-drive/oa客户端id创建.png)

![Nhập domain và callback URL](../../image/upload/google-drive/填写oa客户端url信息.png)

Sau khi client được tạo, sao chép các giá trị này:

| Giá trị đã tạo | Trường ImgBed |
| --- | --- |
| Client ID | `Client ID` |
| Client Secret | `Client Secret` |

## Bước 4: Điền Google Drive Channel

Trong Cài đặt tải lên, chọn `Google Drive` và điền:

| Trường ImgBed | Nhập gì |
| --- | --- |
| Channel name | Tên dễ nhận biết, ví dụ `Main Google Drive` |
| Client ID | Client ID từ Google Cloud |
| Client Secret | Client Secret từ Google Cloud |
| Refresh Token | Tạm thời để trống. Lấy ở bước tiếp theo. |
| Root directory | Không bắt buộc. Mặc định là `imgbed`. |

![Điền chi tiết client trong ImgBed](../../image/upload/google-drive/粘贴回添加新渠道配置.png)

## Bước 5: Lấy Refresh Token

1. Nhấn `Get Token`.
2. Chọn Google account bạn muốn kết nối.
3. Hoàn tất authorization prompts.
4. Callback page sẽ hiển thị `Refresh Token`.
5. Sao chép token đó.
6. Quay lại ImgBed và dán vào trường `Refresh Token`.

![Sao chép Refresh Token sau authorization](../../image/upload/google-drive/授权完复制token.png)

Nếu sau này đổi Google account, đổi OAuth client hoặc authorization cũ hết hạn, bạn không cần xóa kênh. Mở trang chỉnh sửa và nhấn `Reauthorize`.

## Bước 6: Save Channel

Sau khi điền đủ trường, save channel.

## Luồng nhanh

```text
Open Google Cloud
-> Create or select a project
-> Enable Google Drive API
-> Configure Google Auth Platform
-> If Audience is External, add your Google account to Test users
-> Create a Web application OAuth client
-> Use https://your-domain.com/api/oauth/google/callback as the redirect URI
-> Fill Client ID and Client Secret into ImgBed
-> Click Get Token
-> Sign in with Google and authorize
-> Copy the Refresh Token from the callback page
-> Paste it back into ImgBed and save
-> Upload a test image
```

## Tài liệu tham khảo

1. Google OAuth Web Server Applications: https://developers.google.com/identity/protocols/oauth2/web-server
2. Google Workspace OAuth Consent Configuration: https://developers.google.com/workspace/guides/configure-oauth-consent
3. Google Drive API Auth Scopes: https://developers.google.com/workspace/drive/api/guides/api-specific-auth
