# WebDAV Kanalı Ekleme

## Ne Zaman Uygun?

WebDAV kanalını şu durumlarda kullanın:

- WebDAV endpoint sunan bir NAS, bulut disk veya nesne depolama hizmetiniz varsa.
- Yüklenen görsellerin kendi WebDAV dizininizde saklanmasını istiyorsanız.
- Kimlik bilgilerinin uzun süre frontend'de açık kalması yerine D1 `upload_channels` tablosunda saklanmasını istiyorsanız.

## Başlamadan Önce Gerekenler

| Gereken | Ne için kullanılır |
| --- | --- |
| WebDAV Endpoint | Sunucu tarafı WebDAV URL'si, örneğin `https://nas.example.com/dav`. |
| Username | WebDAV hizmetine giriş için kullanıcı adı. |
| Password | WebDAV hizmetine giriş için parola. |
| Authentication mode | Varsayılan `Basic`. `Digest` veya otomatik anlaşmayı yalnızca sunucu gerektiriyorsa kullanın. |
| Storage directory | Dosyaların saklanacağı dizin. Varsayılan `imgbed`. |

## Nereden Eklenir?

1. Sistem Ayarları'nı açın.
2. Yükleme Ayarları'na gidin.
3. Sağ üst köşedeki Kanal Ekle düğmesine tıklayın.
4. `WebDAV` seçeneğini seçin.

## Alan Açıklamaları

| Alan | Ne işe yarar | Zorunlu |
| --- | --- | --- |
| Kanal adı | Bu WebDAV kanalı için anlaşılır bir ad, örneğin `koofr` veya `nas`. | Evet |
| Endpoint | `https://` dahil tam WebDAV endpoint adresi. | Evet |
| Username | WebDAV giriş kullanıcı adı. | Evet |
| Password | WebDAV giriş parolası. | Evet |
| Authentication mode | Genellikle `Basic`; sunucu digest authentication istiyorsa `Digest` kullanın. | Evet |
| Storage directory | Dosyaların saklandığı dizin. Varsayılan `imgbed`. | Hayır |

## Örnek: fie.nl.tab.digital

### 1. App Password Oluşturun

Hesap güvenliği ayarlarınızı açın, application passwords bölümünü bulun ve yeni bir app password oluşturun.

![App password oluşturma](../../image/upload/webdav/创建应用密码.png)

Oluşturulduktan sonra yeni app password değerini kopyalayıp kaydedin. Genellikle yalnızca bir kez gösterilir.

![Yeni app password değerini kaydetme](../../image/upload/webdav/记住新应用程序密码.png)

### 2. ImgBed'de WebDAV Yapılandırmasını Doldurun

ImgBed'e dönün ve bir WebDAV kanalı ekleyin:

| Arayüz Alanı | Değer |
| --- | --- |
| Endpoint | `https://fie.nl.tab.digital/` tarafından verilen WebDAV URL'si. |
| Username | WebDAV kullanıcı adınız. |
| Password | Az önce oluşturduğunuz app password. |
| Authentication mode | Çoğu durumda `Basic` ile başlayın. |
| Storage directory | Varsayılan `imgbed`; isterseniz özel bir dizin kullanabilirsiniz. |

![Yapılandırmayı doldurma](../../image/upload/webdav/填写配置.png)

## Büyük Dosya Yükleme Davranışı

WebDAV kanalı gerçek, oturum tabanlı parçalı yükleme kullanır.

Küçük dosyalar tek parça dosya olarak yüklenir. 64 MiB'den büyük dosyalar otomatik olarak yaklaşık 10 MiB'lik parçalara bölünür ve uzaktaki parça dizinine yüklenir.

WebDAV hizmetinin `partial update` veya offset tabanlı yazmayı desteklemesi gerekmez. ImgBed parçaları uzak sunucuda tek büyük dosyada birleştirmez. Bunun yerine parça manifest'ini saklar ve dosya istendiğinde parçaları sırayla okur.

Pratikte:

| Dosya Boyutu | Yükleme Yöntemi | Uzak Depolama Yapısı |
| --- | --- | --- |
| 64 MiB veya daha küçük | Normal yükleme | Tek tam dosya |
| 64 MiB'den büyük | Gerçek session chunked upload | Birden çok parça dosyası içeren parça dizini |

Parça dizini yalnızca uzak depolama düzenini etkiler. ImgBed'deki dosya URL'sini değiştirmez. Kullanıcılar dosyaya yine özgün `/file/...` bağlantısı üzerinden erişir.

## Kurulum Adımları

1. Yükleme Ayarları'nı açın.
2. Kanal Ekle düğmesine tıklayın.
3. `WebDAV` seçeneğini seçin.
4. Tanıyabileceğiniz bir kanal adı girin, örneğin `koofr`.
5. WebDAV endpoint adresini girin, örneğin `https://app.koofr.net/dav/Koofr`.
6. Username ve password değerlerini girin.
7. Varsayılan olarak authentication mode değerini `Basic` bırakın.
8. Storage directory değerini `imgbed` bırakın veya kendi dizininizle değiştirin.
9. Save düğmesine tıklayın.
10. Kaydettikten sonra kanal kartını kontrol edin, mümkünse kapasite sorgulayın ve test dosyası yükleyin.

## Nasıl Kontrol Edilir?

| Kontrol | Nasıl doğrulanır |
| --- | --- |
| Kanal kartı görünür | Kaydettikten sonra Yükleme Ayarları sayfasında WebDAV kanal kartı görünmelidir. |
| Kanal etkindir | Kartın sağ üst köşesindeki anahtar açık kalmalıdır. |
| Kimlik bilgileri kaydedilmiştir | Ayrıntı görünümünde Endpoint, username, authentication mode ve storage directory görünmelidir. |
| Küçük dosya yüklenir | Test görseli yükleyin ve dosyanın WebDAV dizininde göründüğünü doğrulayın. |
| Büyük dosya kuralı çalışır | 64 MiB'den büyük dosyalar chunked upload kullanır ve uzakta parça dizini oluşturur. |
| Kapasite sorgusu çalışır | Sunucu kapasite bilgisini destekliyorsa sorgu kullanılan ve toplam kapasiteyi gösterir. |

![Kota sorgusu başarılı](../../image/upload/webdav/查询额度成功.png)

## FAQ

### Büyük WebDAV dosyaları neden parça dizini oluşturuyor?

Büyük dosyalar için geçerli depolama yöntemi budur.

64 MiB'den büyük dosyalar tek büyük uzak dosyada birleştirilmez. Parça dizini olarak saklanır. ImgBed parça manifest'ini kaydeder ve tam içeriği parçaları sırayla okuyarak döndürür.

### Büyük dosya yüklemesi başarısız olursa önce neyi kontrol etmeliyim?

Önce Endpoint, username, password ve storage directory değerlerini kontrol edin. Sonra WebDAV hizmetinin dizin oluşturma, dosya yazma ve dosya okuma işlemlerine izin verdiğini doğrulayın.

Kapasite sorgusu başarısız olsa ama küçük dosya yükleme çalışsa, sunucu kapasite raporlamasını desteklemiyor veya kısıtlıyor olabilir. Bu durum yüklemenin kullanılamaz olduğu anlamına gelmez.

### Hangi authentication mode kullanılmalı?

`Basic` ile başlayın.

Sunucu açıkça digest authentication istiyorsa `Digest` kullanın.

Emin değilseniz otomatik anlaşmayı kullanın.

## Kısa Kontrol Listesi

```text
Prepare WebDAV endpoint, username, and password
-> Open Upload Settings
-> Add Channel
-> Select WebDAV
-> Enter Endpoint / username / password
-> Keep authentication mode as Basic by default
-> Keep storage directory as imgbed by default
-> Save
-> Query capacity
-> Upload a test file
```
