# Thêm OneDrive Channel

## Cần chuẩn bị trước

| Yêu cầu | Vì sao cần |
| --- | --- |
| Microsoft account | Dùng để access Microsoft admin pages và authorize OneDrive |
| ImgBed domain của bạn | Dùng cho OAuth callback URL |
| App registration | Dùng để generate `Client ID` và `Client Secret` |
| OneDrive account | Dùng làm nơi lưu file thực tế |

## Các bước thiết lập

### Bước 1: Mở Microsoft Entra ID

1. Mở `portal.azure.com`.
2. Tìm `Microsoft Entra ID` ở phía trên.
3. Nếu trang cần tìm không hiện trong dropdown, chọn:

```text
Continue searching in Microsoft Entra ID
```

4. Mở `Microsoft Entra ID`.
5. Mở `App registrations`.
6. Nhấn `New registration`.

### Bước 2: Register App

Trên trang `New registration`, điền:

| Trường | Nhập gì |
| --- | --- |
| Name | Tên dễ nhận biết, ví dụ `imgbed-onedrive` |
| Supported account types | Chọn theo bảng bên dưới |
| Redirect URI type | `Web` |
| Redirect URI | `https://your-domain.com/api/oauth/onedrive/callback` |

Gợi ý chọn account type:

| Tình huống của bạn | Supported Account Types |
| --- | --- |
| Chỉ dùng personal OneDrive | Chọn option cho personal Microsoft account. |
| Dùng cả personal và work/school accounts | Chọn option hỗ trợ cả personal và organizational accounts. |
| Chỉ dùng company hoặc school OneDrive | Chọn organizational account option. |

Điền xong thì nhấn register.

![Tạo OneDrive app](../../image/upload/onedrive/添加应用程序注册.png)

### Bước 3: Sao chép App Information

Sau khi app được tạo, sao chép các giá trị này từ overview page:

| Trường Microsoft | Trường ImgBed |
| --- | --- |
| `Application (client) ID` | `Client ID` |
| `Directory (tenant) ID` | `Tenant ID` cho organizational accounts |

![Application and tenant IDs](../../image/upload/onedrive/应用程序ID和目录租户ID位.png)

### Bước 4: Tạo Client Secret

1. Mở `Certificates & secrets`.
2. Nhấn `New client secret`.
3. Nhập mô tả tùy ý.
4. Chọn expiration period.
5. Sao chép `Value` ngay sau khi tạo.

![Lưu giá trị client secret](../../image/upload/onedrive/保存客户端密码值.png)

### Bước 5: Thêm API Quyềns

1. Mở `API permissions`.
2. Nhấn `Add a permission`.
3. Chọn `Microsoft Graph`.
4. Chọn `Delegated permissions`.
5. Thêm các permissions này:

| Quyền | Mục đích |
| --- | --- |
| `Files.ReadWrite.All` | Upload files, tạo folders và xóa files |
| `offline_access` | Cho phép ImgBed lấy `Refresh Token` |
| `User.Read` | Đọc account và quota information |

### Bước 6: Điền OneDrive Channel

Trong Cài đặt tải lên, chọn `OneDrive` và điền:

| Trường ImgBed | Nhập gì |
| --- | --- |
| Channel name | Tên dễ nhận biết, ví dụ `Main OneDrive` |
| Client ID | Microsoft `Application (client) ID` |
| Client Secret | `Client Secret Value` đã sao chép |
| Tenant ID | Dùng bảng bên dưới |
| Refresh Token | Tạm thời để trống |
| Root directory | Không bắt buộc. Mặc định là `imgbed`. |
| Khôngte | Không bắt buộc |

![Điền config kênh OneDrive](../../image/upload/onedrive/添加新渠道配置.png)

Cách điền `Tenant ID`:

| Account Type You Chose | ImgBed `Tenant ID` |
| --- | --- |
| Personal accounts | `consumers` |
| Personal + organizational accounts | `common` |
| Chỉ tổ chức hiện tại | `Directory (tenant) ID` |

### Bước 7: Lấy Refresh Token

1. Trong ImgBed, nhấn `Get Token`.
2. Sign in vào Microsoft account bạn muốn kết nối.
3. Phê duyệt authorization prompt.
4. Callback page sẽ hiển thị `Refresh Token`.
5. Sao chép token đó.
6. Quay lại ImgBed và dán vào trường `Refresh Token`.

![Sao chép refresh token](../../image/upload/onedrive/复制刷新令牌.png)

### Bước 8: Save Channel

Sau khi điền đủ trường, save channel.

## Luồng nhanh

```text
Open portal.azure.com
-> Search for Microsoft Entra ID
-> Open App registrations
-> Register a new app
-> Fill Name / Supported account types / Web redirect URI
-> Register
-> Copy Application (client) ID
-> Check the callback URL in Authentication
-> Create a Client Secret in Certificates & secrets
-> Add permissions in API permissions
-> Fill Client ID / Client Secret / Tenant ID into ImgBed
-> Click Get Token
-> Copy the Refresh Token from the callback page
-> Paste it back into ImgBed and save
```

## Tài liệu tham khảo

1. Microsoft Entra app registration: https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-register-app
2. Microsoft identity platform authorization code flow: https://learn.microsoft.com/en-us/entra/identity-platform/v2-oauth2-auth-code-flow
3. Microsoft Graph user authentication: https://learn.microsoft.com/en-us/graph/auth-v2-user
