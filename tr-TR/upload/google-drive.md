# Google Drive Kanalı Ekleme

## Önce Gerekenler

Başlamadan önce şunları hazırlayın:

| Gereken | Neden gerekir |
| --- | --- |
| Google hesabı | Google Cloud'a erişmek ve Google Drive'ı yetkilendirmek için |
| Google Cloud projesi | Drive API'yi etkinleştirmek ve OAuth credentials oluşturmak için |
| OAuth 2.0 client | ImgBed'in `Client ID`, `Client Secret` ve `Refresh Token` alması için |
| ImgBed alan adınız | OAuth redirect URI için. Gerçekte kullandığınız alan adıyla eşleşmelidir. |

## Kurulum Adımları

### 1. Google Drive API'yi Etkinleştirin

1. Google Cloud Console'u açın.
2. Yeni proje oluşturun veya mevcut bir projeyi seçin.
3. `APIs & Services` bölümüne gidin.
4. `Enable APIs and Services` düğmesine tıklayın.
5. `Google Drive API` araması yapın.
6. Açıp enable düğmesine tıklayın.

### 2. OAuth Consent Screen'i Yapılandırın

1. Google Cloud'da `Google Auth Platform` bölümünü açın.
2. App adı, support email ve developer contact email gibi temel `Branding` bilgilerini doldurun.
3. `Audience` bölümünü açın.
4. Çoğu self-hosted kişisel kurulum için `External` seçin.
5. `External` seçtiyseniz yetkilendirmek istediğiniz Google hesabını `Test users` altına ekleyin.
6. `Data Access` bölümünü açın.
7. Gerekli Google Drive permissions değerlerini ekleyin.

### 3. OAuth 2.0 Client Oluşturun

1. `Google Auth Platform` içinde `Clients` bölümünü açın.
2. Yeni client oluşturun.
3. Application type değerini `Web application` yapın.
4. Client için tanınabilir bir ad verin.
5. Authorized JavaScript origins için ImgBed URL'nizi girin, örneğin:

```text
https://img.example.com
```

6. Authorized redirect URIs için şunu girin:

```text
https://img.example.com/api/oauth/google/callback
```

![OAuth client oluşturma](../../image/upload/google-drive/oa客户端id创建.png)

![Alan adı ve callback URL girme](../../image/upload/google-drive/填写oa客户端url信息.png)

Client oluşturulduktan sonra şu değerleri kopyalayın:

| Oluşturulan Değer | ImgBed Alanı |
| --- | --- |
| Client ID | `Client ID` |
| Client Secret | `Client Secret` |

## 4. Google Drive Kanalını Doldurun

Yükleme Ayarları'nda `Google Drive` seçin ve şunları doldurun:

| ImgBed Alanı | Ne girilir |
| --- | --- |
| Channel name | Tanınabilir bir ad, örneğin `Main Google Drive` |
| Client ID | Google Cloud'dan alınan Client ID |
| Client Secret | Google Cloud'dan alınan Client Secret |
| Refresh Token | Şimdilik boş bırakın. Sonraki adımda alınır. |
| Root directory | İsteğe bağlı. Varsayılan `imgbed`. |

![Client bilgilerini ImgBed'e yapıştırma](../../image/upload/google-drive/粘贴回添加新渠道配置.png)

## 5. Refresh Token Alın

1. `Get Token` düğmesine tıklayın.
2. Bağlamak istediğiniz Google hesabını seçin.
3. Yetkilendirme istemlerini tamamlayın.
4. Callback sayfası bir `Refresh Token` gösterir.
5. Bunu kopyalayın.
6. ImgBed'e dönüp `Refresh Token` alanına yapıştırın.

![Yetkilendirme sonrası Refresh Token kopyalama](../../image/upload/google-drive/授权完复制token.png)

Daha sonra Google hesabını, OAuth client'ı değiştirirseniz veya eski yetkilendirme süresi dolarsa kanalı silmeniz gerekmez. Düzenleme sayfasını açıp `Reauthorize` düğmesine tıklayın.

## 6. Kanalı Kaydedin

Tüm alanlar dolduktan sonra kanalı kaydedin.

## Kısa Akış

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

## Kaynaklar

1. Google OAuth Web Server Applications: https://developers.google.com/identity/protocols/oauth2/web-server
2. Google Workspace OAuth Consent Configuration: https://developers.google.com/workspace/guides/configure-oauth-consent
3. Google Drive API Auth Scopes: https://developers.google.com/workspace/drive/api/guides/api-specific-auth
