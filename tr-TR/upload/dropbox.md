# Dropbox Kanalı Ekleme

## Önce Gerekenler

| Gereken | Neden gerekir |
| --- | --- |
| Dropbox hesabı | Giriş yapmak ve app yetkilendirmek için |
| Dropbox app | `App Key` ve `App Secret` oluşturmak için |
| ImgBed alan adınız | OAuth redirect URI için |
| Kullanılabilir Dropbox depolama alanı | Dosyaların gerçekten saklanacağı yer |

## Kurulum Adımları

### 1. Dropbox App Oluşturun

1. Dropbox App Console'u açın:

```text
https://www.dropbox.com/developers/apps
```

2. Yeni app oluşturun.
3. Access type için şunu seçin:

```text
App folder
```

4. App için tanıyabileceğiniz bir ad verin, örneğin `imgbed-app`.
5. Oluşturulduktan sonra app ayrıntı sayfasını açın.

Önerilen erişim türü:

| Access Type | Öneri |
| --- | --- |
| `App folder` | Önerilir. ImgBed'in dosya saklama biçimine uygundur. |
| `Full Dropbox` | Önerilmez. ImgBed'in tüm hesaba erişmesine gerek yoktur. |

![Dropbox app oluşturma](../../image/upload/dropbox/开发者创建应用.png)

### 2. Redirect URI Ekleyin

Dropbox app ayrıntı sayfasında OAuth veya Redirect URI ayarlarını bulun ve şunu ekleyin:

```text
https://your-domain.com/api/oauth/dropbox/callback
```

Yönetim panelini birden fazla alan adından kullanıyorsanız her eşleşen callback URL'yi ekleyin.

![Redirect URI yapılandırma](../../image/upload/dropbox/配置回调地址.png)

### 3. App Permissions Yapılandırın

`Permissions` sekmesini açın ve en az şu scopes değerlerini etkinleştirin:

| Scope | Zorunlu | Amaç |
| --- | --- | --- |
| `account_info.read` | Evet | Hesap ve kota bilgisini okur |
| `files.metadata.read` | Evet | Yol kontrolleri için dosya ve klasör metadatasını okur |
| `files.metadata.write` | Evet | Klasör oluşturur ve metadata yazar |
| `files.content.write` | Evet | Dosya yükler. Bu scope eksikse `required scope 'files.content.write'` hatası alınır. |
| `files.content.read` | Önerilir | İndirme, önizleme ve geçici dosya bağlantılarına izin verir |

Scopes seçildikten sonra sayfanın altındaki `Submit` düğmesine tıklayın.

![İzinleri ekleme](../../image/upload/dropbox/添加对应的权限.png)

Önemli:

| Durum | Ne yapılmalı |
| --- | --- |
| Scopes değiştirdiniz | Token yetkilendirme akışını yeniden çalıştırın ve yeni `Refresh Token` alın. |
| Yeniden yetkilendirme yapmadınız | Eski token yeni permissions değerlerini kazanmaz, bu yüzden yüklemeler hâlâ başarısız olabilir. |

### 4. App Credentials Değerlerini Kopyalayın

Dropbox app sayfasından şu iki değeri kaydedin:

| Dropbox Alanı | ImgBed Alanı |
| --- | --- |
| `App key` | `App Key` |
| `App secret` | `App Secret` |

### 5. Dropbox Kanalını Doldurun

Yükleme Ayarları'nda `Dropbox` seçin ve şunları doldurun:

| ImgBed Alanı | Ne girilir |
| --- | --- |
| Channel name | Tanınabilir bir ad, örneğin `Main Dropbox` |
| App Key | Dropbox `App key` |
| App Secret | Dropbox `App secret` |
| Refresh Token | Şimdilik boş bırakın |
| Root directory | İsteğe bağlı. Varsayılan `imgbed`. |
| Note | İsteğe bağlı |

![Token alma](../../image/upload/dropbox/获取令牌.png)

### 6. Refresh Token Alın

1. ImgBed'de `Get Token` düğmesine tıklayın.
2. Bağlamak istediğiniz Dropbox hesabıyla giriş yapın.
3. Yetkilendirme istemini onaylayın.
4. Callback sayfası bir `Refresh Token` gösterir.
5. Bunu kopyalayın.
6. ImgBed'e dönüp `Refresh Token` alanına yapıştırın.

![Token kopyalama](../../image/upload/dropbox/复制令牌.png)

## Nasıl Kontrol Edilir?

| Kontrol | Beklenen sonuç |
| --- | --- |
| Kanal kartı | Kaydettikten sonra Dropbox kanalı görünür. |
| Kanal anahtarı | Kanal etkinleştirilebilir. |
| Token kaydedildi | Ayrıntı sayfasında `Refresh Token` değerinin kaydedildiği görünür. |
| Test yüklemesi | Test görseli Dropbox app folder içinde görünür. |

Quota limits etkinse kota sorgusuna tıklayın. Başarılı sorgudan sonra kanal kartı kullanılan alanı, toplam alanı ve son güncelleme zamanını gösterir.

![Kota sorgusu başarılı](../../image/upload/dropbox/查询额度成功.png)

## Sorun Giderme

| Sorun | Çözüm |
| --- | --- |
| ImgBed yapılandırmanın eksik olduğunu söylüyor | `App Key`, `App Secret` ve `Refresh Token` alanlarının dolu olduğunu kontrol edin. |
| Yetkilendirme başarılı ama `Refresh Token` görünmüyor | `Get Token` düğmesine tekrar tıklayın ve offline authorization flow kullanıldığından emin olun. |
| Yükleme `required scope 'files.content.write'` hatasıyla başarısız oluyor | `files.content.write` etkinleştirin, `Submit` tıklayın ve yeni `Refresh Token` alın. |
| Callback başarısız oluyor | Redirect URI değerinin `https://your-domain.com/api/oauth/dropbox/callback` olduğunu doğrulayın. |
| Dosyalar bulunamıyor | Dropbox app'in `App folder` modunda oluşturulduğunu doğrulayın. |

## Kısa Akış

```text
Open Dropbox App Console
-> Create an app
-> Choose App folder access
-> Add https://your-domain.com/api/oauth/dropbox/callback
-> Enable account_info.read / files.metadata.read / files.metadata.write / files.content.write
-> Optionally enable files.content.read
-> Click Submit
-> Copy App Key and App Secret
-> Fill them into ImgBed
-> Click Get Token
-> Copy the Refresh Token from the callback page
-> Paste it back into ImgBed and save
```

## Kaynaklar

1. Dropbox App Console: https://www.dropbox.com/developers/apps
2. Dropbox OAuth Guide: https://developers.dropbox.com/oauth-guide
3. Dropbox Developer Guide: https://www.dropbox.com/developers/reference/developer-guide
