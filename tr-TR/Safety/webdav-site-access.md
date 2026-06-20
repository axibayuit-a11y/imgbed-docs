# WebDAV Site Erişimi (Beta)

Security Settings içindeki WebDAV ayarı, ImgBed sitenizi WebDAV endpoint olarak sunar.

Etkinleştirildikten sonra Windows, macOS, mobil dosya yöneticileri veya WebDAV uyumlu herhangi bir istemciyle ImgBed dosyalarını uzak klasör gibi gezebilir, yükleyebilir, silebilir ve yönetebilirsiniz.

Bu, sitenin WebDAV erişim girişidir. Yükleme Ayarları'ndaki WebDAV depolama kanalından farklıdır. Yükleme kanalı dosyaları üçüncü taraf WebDAV hizmetinde saklar. Bu ayar ise ImgBed sitenizin istemcilere WebDAV erişimi sağlamasını sağlar.

## Nereden Yapılandırılır?

Yönetim panelini açın, ardından şuraya gidin:

```text
System Settings -> Security Settings -> WebDAV
```

Kullanılabilir ayarlar:

- Enable
- Username
- Password
- Image loading mode
- Default channel

## Bu Özellik Ne İşe Yarar?

WebDAV etkinleştirildikten sonra ImgBed sabit bir erişim URL'si sağlar:

```text
https://your-domain.com/dav
```

ImgBed dosya dizininize bağlanmak için bu URL'yi kullanın.

İyi kullanım örnekleri:

- ImgBed dosyalarını bilgisayar dosya yöneticinizden doğrudan gezmek.
- Görselleri WebDAV klasörüne sürükleyerek yüklemek.
- ImgBed klasörlerini yerel dosya yöneticisinden düzenlemek.
- WebDAV uyumlu yazılımlarla görselleri senkronize etmek veya yönetmek.
- Yönetim panelini açmadan ImgBed içeriğine erişmek.

## Ayarlar

### Enable

WebDAV endpoint'i açar.

Kapalıyken istemciler WebDAV üzerinden bağlanamaz.

### Username ve Password

Bu kimlik bilgileri WebDAV istemcileri bağlanırken kullanılır.

Ayrı bir WebDAV kullanıcı adı ve parolası kullanın. Yönetici parolasını veya yükleme parolasını yeniden kullanmayın.

Username veya password boşsa WebDAV istemcileri düzgün bağlanamaz.

### Image Loading Mode

Image loading mode, WebDAV istemcilerinin görsel okurken hangi görsel URL'sini tercih edeceğini belirler.

Yaygın seçenekler:

| Mode | Açıklama |
| --- | --- |
| Smart loading | ImgBed bağlama göre seçim yapar. Normal kullanım için önerilir. |
| Original | Özgün görselleri tercih eder. |
| Thumbnail | Küçük görselleri tercih eder. Hızlı önizleme için kullanışlıdır. |

Emin değilseniz `Smart loading` bırakın.

### Default Channel

Default channel WebDAV yüklemeleri için kullanılır.

Windows veya başka bir istemciden WebDAV dizinine dosya kopyaladığınızda ImgBed bunları seçili default upload channel üzerinden yükler.

Default channel seçilmemişse gezinme çalışabilir, ancak yükleme başarısız olabilir.

## Windows 11'de WebDAV'a Erişim

Windows 11 WebDAV'ı network location olarak ekleyebilir.

1. `This PC` açın.
2. `Add a network location` seçin.
3. `https://your-domain.com/dav` girin.
4. İstendiğinde WebDAV username ve password girin.
5. Sihirbazı tamamlayın. Ardından WebDAV dizini File Explorer içinde açılabilir.

![Windows 11'de WebDAV ekleme](../../image/Safety/webdav在win11配置.png)

Eklendikten sonra WebDAV dizini Windows File Explorer içinde görünür. Normal klasör gibi açabilir, kopyalayabilir ve yönetebilirsiniz.

![Windows'ta WebDAV](../../image/Safety/webdav在win显示效果.png)

## Desteklenen İşlemler

Başarılı WebDAV bağlantısından sonra genellikle şunları yapabilirsiniz:

- Dosya ve klasörleri görüntüleme.
- Dosya yükleme.
- Klasör oluşturma.
- Dosya veya klasör yeniden adlandırma.
- Dosya taşıma.
- Dosya silme.

WebDAV günlük erişim ve küçük ölçekli dosya yönetimi için daha uygundur. Büyük taşıma işlemleri, toplu silme veya karmaşık düzenlemeler için yönetim panelini kullanın.

## Login Device Management

Başarılı WebDAV bağlantıları Login Device Management içindeki WebDAV sekmesinde de görünür.

WebDAV istemcilerini buradan inceleyebilir ve gerektiğinde eski cihazları zorla çevrimdışı bırakabilirsiniz.

WebDAV username veya password değiştirirseniz eski istemcilerin yeniden giriş yapması gerekir.

## FAQ

### Windows Sürekli Username ve Password Soruyor

Şunları kontrol edin:

- URL `https://your-domain.com/dav` olmalıdır.
- Username ve password WebDAV ayarlarıyla eşleşmelidir.
- WebDAV etkin olmalıdır.
- Site HTTPS üzerinden erişilebilir olmalıdır.

### Gezme Çalışıyor ama Yükleme Başarısız

`Default channel` ayarını kontrol edin.

WebDAV yüklemeleri için default upload channel gerekir. Eksik, devre dışı veya hatalı yapılandırılmışsa yüklemeler başarısız olabilir.

### Erişim Hızı Kararsız

WebDAV performansı istemciye, ağa, dosya sayısına ve default upload channel'a bağlıdır.

Bir dizinde çok sayıda dosya varsa hepsini tek dizinde tutmak yerine klasörlere ayırın.

## Güvenlik Önerileri

- WebDAV erişimi için HTTPS kullanın.
- Güçlü parola belirleyin.
- WebDAV parolasını güvenmediğiniz kişilerle paylaşmayın.
- Kullanmadığınızda WebDAV'ı kapatın.
- Login Device Management içinde kullanılmayan WebDAV cihazlarını düzenli olarak temizleyin.

## WebDAV Yükleme Dosya Boyutu

WebDAV istemcileri tarayıcı yükleme sayfasındaki büyük dosya parçalama akışını kullanmaz. Aşağıdaki önerilen limitlerin üzerindeki dosyalar için web yükleme sayfasını kullanın.

| Default Upload Channel | WebDAV için Önerilen Tek Dosya Limiti |
| --- | ---: |
| Telegram | 20 MB |
| Discord | 10 MB |
| Cloudflare R2 | 30 MB |
| S3 | 30 MB |
| GitHub Releases | 64 MB |
| GitLab Packages | 64 MB |
| Hugging Face | 20 MB |
| OneDrive | 30 MB |
| Google Drive | 30 MB |
| Dropbox | 30 MB |
| Yandex Disk | 30 MB |
| pCloud | 30 MB |
| WebDAV | 64 MB |
