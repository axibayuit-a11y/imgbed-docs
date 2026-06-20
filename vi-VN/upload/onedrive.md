# Thêm OneDrive Channel

## Cần chuẩn bị trước

| Requirement | Vì sao cần |
| --- | --- |
| Microsoft account | Dùng để access Microsoft admin pages và authorize OneDrive |
| ImgBed domain của bạn | Dùng cho OAuth callback URL |
| App registration | Dùng để generate `Client ID` và `Client Secret` |
| OneDrive account | Dùng làm nơi lưu file thực tế |

## Các bước thiết lập

### Step 1: Mở Microsoft Entra ID

1. Mở `portal.azure.com`.
2. Tìm `Microsoft Entra ID` ở phía trên.
3. Nếu trang cần tìm không hiện trong dropdown, chọn:

```text
Continue searching in Microsoft Entra ID
```

4. Mở `Microsoft Entra ID`.
5. Mở `App registrations`.
6. Nhấn `New registration`.

### Step 2: Register App

Trên trang `New registration`, điền:

| Field | Nhập gì |
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

![Create OneDrive app](../../image/upload/onedrive/添加应用程序注册.png)

### Step 3: Copy App Information

Sau khi app được tạo, copy các giá trị này từ overview page:

| Microsoft Field | ImgBed Field |
| --- | --- |
| `Application (client) ID` | `Client ID` |
| `Directory (tenant) ID` | `Tenant ID` cho organizational accounts |

![Application and tenant IDs](../../image/upload/onedrive/应用程序ID和目录租户ID位.png)

### Step 4: Tạo Client Secret

1. Mở `Certificates & secrets`.
2. Nhấn `New client secret`.
3. Nhập description tùy ý.
4. Chọn expiration period.
5. Copy `Value` ngay sau khi tạo.

![Save client secret value](../../image/upload/onedrive/保存客户端密码值.png)

### Step 5: Thêm API Permissions

1. Mở `API permissions`.
2. Nhấn `Add a permission`.
3. Chọn `Microsoft Graph`.
4. Chọn `Delegated permissions`.
5. Thêm các permissions này:

| Permission | Purpose |
| --- | --- |
| `Files.ReadWrite.All` | Upload files, tạo folders và xóa files |
| `offline_access` | Cho phép ImgBed lấy `Refresh Token` |
| `User.Read` | Đọc account và quota information |

### Step 6: Điền OneDrive Channel

Trong Upload Settings, chọn `OneDrive` và điền:

| ImgBed Field | Nhập gì |
| --- | --- |
| Channel name | Tên dễ nhận biết, ví dụ `Main OneDrive` |
| Client ID | Microsoft `Application (client) ID` |
| Client Secret | `Client Secret Value` đã copy |
| Tenant ID | Dùng bảng bên dưới |
| Refresh Token | Tạm thời để trống |
| Root directory | Optional. Mặc định là `imgbed`. |
| Note | Optional |

![Fill OneDrive channel config](../../image/upload/onedrive/添加新渠道配置.png)

Cách điền `Tenant ID`:

| Account Type You Chose | ImgBed `Tenant ID` |
| --- | --- |
| Personal accounts | `consumers` |
| Personal + organizational accounts | `common` |
| Current organization only | `Directory (tenant) ID` |

### Step 7: Lấy Refresh Token

1. Trong ImgBed, nhấn `Get Token`.
2. Sign in vào Microsoft account bạn muốn kết nối.
3. Approve authorization prompt.
4. Callback page sẽ hiển thị `Refresh Token`.
5. Copy token đó.
6. Quay lại ImgBed và paste vào field `Refresh Token`.

![Copy refresh token](../../image/upload/onedrive/复制刷新令牌.png)

### Step 8: Save Channel

Sau khi điền đủ fields, save channel.

## Quick Flow

```text
Mở portal.azure.com
-> Tìm Microsoft Entra ID
-> Mở App registrations
-> Register app mới
-> Điền Name / Supported account types / Web redirect URI
-> Register
-> Copy Application (client) ID
-> Kiểm tra callback URL trong Authentication
-> Tạo Client Secret trong Certificates & secrets
-> Thêm permissions trong API permissions
-> Điền Client ID / Client Secret / Tenant ID vào ImgBed
-> Nhấn Get Token
-> Copy Refresh Token từ callback page
-> Paste lại vào ImgBed và save
```

## References

1. Microsoft Entra app registration: https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-register-app
2. Microsoft identity platform authorization code flow: https://learn.microsoft.com/en-us/entra/identity-platform/v2-oauth2-auth-code-flow
3. Microsoft Graph user authentication: https://learn.microsoft.com/en-us/graph/auth-v2-user
