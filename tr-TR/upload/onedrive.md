# OneDrive Kanalı Ekleme

## Önce Gerekenler

| Gereken | Neden gerekir |
| --- | --- |
| Microsoft hesabı | Microsoft yönetim sayfalarına erişmek ve OneDrive'ı yetkilendirmek için |
| ImgBed alan adınız | OAuth callback URL için |
| App registration | `Client ID` ve `Client Secret` oluşturmak için |
| OneDrive hesabı | Dosyaların gerçekten saklanacağı yer |

## Kurulum Adımları

### 1. Microsoft Entra ID'yi Açın

1. `portal.azure.com` adresini açın.
2. Üst kısımda `Microsoft Entra ID` araması yapın.
3. Hedef sayfa açılır listede görünmüyorsa şunu seçin:

```text
Continue searching in Microsoft Entra ID
```

4. `Microsoft Entra ID` sayfasını açın.
5. `App registrations` bölümünü açın.
6. `New registration` düğmesine tıklayın.

### 2. Uygulamayı Kaydedin

`New registration` sayfasında şunları doldurun:

| Alan | Ne girilir |
| --- | --- |
| Name | Tanınabilir bir ad, örneğin `imgbed-onedrive` |
| Supported account types | Aşağıdaki tabloya göre seçin |
| Redirect URI type | `Web` |
| Redirect URI | `https://your-domain.com/api/oauth/onedrive/callback` |

Hesap türü için öneri:

| Senaryonuz | Supported Account Types |
| --- | --- |
| Yalnızca kişisel OneDrive | Personal Microsoft account seçeneğini seçin. |
| Hem kişisel hem iş/okul hesapları | Hem personal hem organizational accounts destekleyen seçeneği seçin. |
| Yalnızca şirket veya okul OneDrive | Organizational account seçeneğini seçin. |

Formu doldurduktan sonra register düğmesine tıklayın.

![OneDrive app oluşturma](../../image/upload/onedrive/添加应用程序注册.png)

### 3. Uygulama Bilgilerini Kopyalayın

Uygulama oluşturulduktan sonra overview sayfasından şu değerleri kopyalayın:

| Microsoft Alanı | ImgBed Alanı |
| --- | --- |
| `Application (client) ID` | `Client ID` |
| `Directory (tenant) ID` | Organizational accounts için `Tenant ID` |

![Application ve tenant ID değerleri](../../image/upload/onedrive/应用程序ID和目录租户ID位.png)

### 4. Client Secret Oluşturun

1. `Certificates & secrets` bölümünü açın.
2. `New client secret` düğmesine tıklayın.
3. İstediğiniz bir açıklama girin.
4. Son kullanma süresi seçin.
5. Oluşturulur oluşturulmaz `Value` değerini kopyalayın.

![Client secret değerini kaydetme](../../image/upload/onedrive/保存客户端密码值.png)

### 5. API Permissions Ekleyin

1. `API permissions` bölümünü açın.
2. `Add a permission` düğmesine tıklayın.
3. `Microsoft Graph` seçin.
4. `Delegated permissions` seçin.
5. Şu permissions değerlerini ekleyin:

| Permission | Amaç |
| --- | --- |
| `Files.ReadWrite.All` | Dosya yükleme, klasör oluşturma ve dosya silme |
| `offline_access` | ImgBed'in `Refresh Token` almasını sağlar |
| `User.Read` | Hesap ve kota bilgisini okur |

### 6. OneDrive Kanalını Doldurun

Yükleme Ayarları'nda `OneDrive` seçin ve şunları doldurun:

| ImgBed Alanı | Ne girilir |
| --- | --- |
| Channel name | Tanınabilir bir ad, örneğin `Main OneDrive` |
| Client ID | Microsoft `Application (client) ID` |
| Client Secret | Kopyaladığınız `Client Secret Value` |
| Tenant ID | Aşağıdaki tabloya göre |
| Refresh Token | Şimdilik boş bırakın |
| Root directory | İsteğe bağlı. Varsayılan `imgbed`. |
| Note | İsteğe bağlı |

![OneDrive kanal yapılandırmasını doldurma](../../image/upload/onedrive/添加新渠道配置.png)

`Tenant ID` nasıl doldurulur:

| Seçtiğiniz hesap türü | ImgBed `Tenant ID` |
| --- | --- |
| Personal accounts | `consumers` |
| Personal + organizational accounts | `common` |
| Yalnızca mevcut organization | `Directory (tenant) ID` |

### 7. Refresh Token Alın

1. ImgBed'de `Get Token` düğmesine tıklayın.
2. Bağlamak istediğiniz Microsoft hesabıyla giriş yapın.
3. Yetkilendirme istemini onaylayın.
4. Callback sayfası bir `Refresh Token` gösterir.
5. Bunu kopyalayın.
6. ImgBed'e dönüp `Refresh Token` alanına yapıştırın.

![Refresh token kopyalama](../../image/upload/onedrive/复制刷新令牌.png)

### 8. Kanalı Kaydedin

Tüm alanlar dolduktan sonra kanalı kaydedin.

## Kısa Akış

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

## Kaynaklar

1. Microsoft Entra app registration: https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-register-app
2. Microsoft identity platform authorization code flow: https://learn.microsoft.com/en-us/entra/identity-platform/v2-oauth2-auth-code-flow
3. Microsoft Graph user authentication: https://learn.microsoft.com/en-us/graph/auth-v2-user
