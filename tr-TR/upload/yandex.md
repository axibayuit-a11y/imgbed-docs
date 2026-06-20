# Yandex Kanalı Ekleme

## Önce Gerekenler

| Gereken | Neden gerekir |
| --- | --- |
| Yandex hesabı | Giriş yapmak ve Yandex Disk'i yetkilendirmek için |
| Yandex OAuth app | `Client ID` ve `Client Secret` oluşturmak için |
| ImgBed alan adınız | OAuth redirect URI için |
| Kullanılabilir Yandex Disk depolama alanı | Dosyaların gerçekten saklanacağı yer |

## Kurulum Adımları

### 1. Yandex OAuth App Oluşturun

1. Yandex OAuth app oluşturma sayfasını açın:

```text
https://oauth.yandex.com/client/new
```

2. Giriş sayfasına yönlendirilirseniz önce Yandex hesabınızla giriş yapın.
3. Yeni app oluşturun.
4. App için tanınabilir bir ad verin, örneğin `imgbed-yandex`.
5. Callback veya redirect URL ayarlarını bulun.
6. Şunu girin:

```text
https://your-domain.com/api/oauth/yandex/callback
```

### 2. Permissions Değerlerini Kontrol Edin

Mevcut ImgBed Yandex entegrasyonu için `Yandex.Disk REST API` altında şu dört permission kalsın:

| Permission | Amaç |
| --- | --- |
| `cloud_api:disk.app_folder` | ImgBed'in dosyaları app folder içinde saklamasına izin verir |
| `cloud_api:disk.read` | Dosyaları ve download links değerlerini okur |
| `cloud_api:disk.write` | Dosya yükler, klasör oluşturur ve dosya siler |
| `Access to information about Yandex.Disk` | Disk kotasını ve kullanılan alanı okur |

`Yandex ID API` altında şu izinleri de görürseniz bunlar isteğe bağlıdır:

| Permission Metni | Öneri |
| --- | --- |
| `Access to username, first name and surname, gender` | İsteğe bağlı |
| `Access to email address` | İsteğe bağlı |

Temel yükleme, indirme, silme ve kota özellikleri çoğunlukla yukarıdaki dört `Yandex.Disk REST API` iznine bağlıdır.

![Yandex Disk izinlerini yapılandırma](../../image/upload/yandex/dataaccess配置软盘权限.png)

### 3. App Credentials Değerlerini Kopyalayın

App oluşturulduktan sonra şunları kopyalayın:

| Yandex Alanı | ImgBed Alanı |
| --- | --- |
| `Client ID` | `Client ID` |
| `Client Secret` | `Client Secret` |

![Client ID ve Secret kaydetme](../../image/upload/yandex/记录客户端id和secret.png)

### 4. Yandex Kanalını Doldurun

Yükleme Ayarları'nda `Yandex` seçin ve şunları doldurun:

| ImgBed Alanı | Ne girilir |
| --- | --- |
| Channel name | Tanınabilir bir ad, örneğin `Main Yandex` |
| Client ID | Yandex app `Client ID` |
| Client Secret | Yandex app `Client Secret` |
| Refresh Token | Şimdilik boş bırakın |
| Root directory | İsteğe bağlı. Varsayılan `imgbed`. |

![Kanal yapılandırmasını düzenleme](../../image/upload/yandex/编辑配置渠道.png)

### 5. Refresh Token Alın

1. ImgBed'de `Get Token` düğmesine tıklayın.
2. Bağlamak istediğiniz Yandex hesabıyla giriş yapın.
3. Yetkilendirme istemini onaylayın.
4. Callback sayfası bir `Refresh Token` gösterir.
5. Bunu kopyalayın.
6. ImgBed'e dönüp `Refresh Token` alanına yapıştırın.

![Yetkilendirme sonrası refresh token kopyalama](../../image/upload/yandex/授权后复制刷新令牌.png)

### 6. Kanalı Kaydedin

Tüm alanlar dolduktan sonra kanalı kaydedin.

## Kısa Akış

```text
Yandex OAuth Console'u aç
-> App oluştur
-> https://your-domain.com/api/oauth/yandex/callback ekle
-> Yandex Disk permissions değerlerini kontrol et
-> Client ID ve Client Secret kopyala
-> Client ID / Client Secret değerlerini ImgBed'e gir
-> Get Token tıkla
-> Callback sayfasından Refresh Token kopyala
-> ImgBed'e yapıştır ve kaydet
```

## Kaynaklar

1. Register a Yandex app: https://yandex.com/dev/id/doc/en/register-client
2. Get an authorization code through URL: https://yandex.com/dev/id/doc/en/codes/code-url
3. Yandex OAuth token endpoint: https://yandex.com/dev/id/doc/en/tokens/token
