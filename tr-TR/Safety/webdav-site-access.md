# WebDAV Site Access (Beta)

Güvenlik Ayarları içindeki WebDAV ayarı, ImgBed sitenizi bir WebDAV uç noktası olarak sunar.

Etkinleştirildikten sonra Windows, macOS, mobil dosya yöneticileri veya WebDAV uyumlu herhangi bir istemciyle ImgBed dosyalarını uzak klasör gibi gezebilir, yükleyebilir, silebilir ve yönetebilirsiniz.

Bu, sitenin WebDAV erişim girişidir. Yükleme Ayarları içindeki WebDAV depolama kanalından farklıdır. Yükleme kanalı dosyaları üçüncü taraf bir WebDAV hizmetinde saklar. Bu ayar ise ImgBed sitenizin istemcilere WebDAV erişimi sağlamasına izin verir.

## Nereden Yapılandırılır?

Yönetim panelini açın, ardından şuraya gidin:

```text
System Settings -> Security Settings -> WebDAV
```

Kullanılabilir ayarlar:

- Etkinleştir
- Kullanıcı adı
- Parola
- Görsel yükleme modu
- Varsayılan kanal

## Bu Özellik Ne Yapar?

WebDAV etkinleştirildikten sonra ImgBed sabit bir erişim URL'si sağlar:

```text
https://your-domain.com/dav
```

ImgBed dosya dizininize bağlanmak için bu URL'yi kullanın.

İyi kullanım alanları:

- ImgBed dosyalarını doğrudan bilgisayarınızın dosya yöneticisinden gezmek.
- Görselleri yüklemek için WebDAV klasörüne sürüklemek.
- ImgBed klasörlerini yerel dosya yöneticinizden düzenlemek.
- Görselleri eşitlemek veya yönetmek için WebDAV uyumlu yazılım kullanmak.
- Yönetim panelini açmadan ImgBed içeriğine erişmek.

## Ayarlar

### Etkinleştir

WebDAV uç noktasını açar.

Devre dışı olduğunda istemciler WebDAV üzerinden bağlanamaz.

### Kullanıcı Adı ve Parola

Bu kimlik bilgileri WebDAV istemcileri bağlanırken kullanılır.

WebDAV için ayrı bir kullanıcı adı ve parola kullanın. Yönetici parolasını veya yükleme parolasını yeniden kullanmayın.

Kullanıcı adı veya parola boşsa WebDAV istemcileri düzgün bağlanamaz.

### Görsel Yükleme Modu

Görsel yükleme modu, WebDAV istemcilerinin görselleri okurken hangi görsel URL'sini tercih edeceğini belirler.

Yaygın seçenekler:

| Mod | Açıklama |
| --- | --- |
| Akıllı yükleme | ImgBed bağlama göre seçim yapar. Normal kullanım için önerilir. |
| Özgün | Özgün görselleri tercih eder. |
| Küçük görsel | Küçük görselleri tercih eder. Hızlı önizleme için kullanışlıdır. |

Emin değilseniz `Akıllı yükleme` değerini koruyun.

### Varsayılan Kanal

Varsayılan kanal WebDAV yüklemeleri için kullanılır.

Windows veya başka bir istemciden WebDAV dizinine dosya kopyaladığınızda ImgBed dosyaları seçili varsayılan yükleme kanalı üzerinden yükler.

Varsayılan kanal seçilmemişse gezinme çalışabilir, ancak yükleme başarısız olabilir.

## Windows 11'de WebDAV'a Erişme

Windows 11 WebDAV'ı ağ konumu olarak ekleyebilir.

1. `Bu Bilgisayar` öğesini açın.
2. `Ağ konumu ekle` seçeneğini seçin.
3. `https://your-domain.com/dav` girin.
4. İstendiğinde WebDAV kullanıcı adı ve parolasını girin.
5. Sihirbazı tamamlayın. Ardından WebDAV dizini Dosya Gezgini içinde açılabilir.

![Windows 11'de WebDAV ekleme](../../image/Safety/webdav在win11配置.png)

Eklendikten sonra WebDAV dizini Windows Dosya Gezgini içinde görünür. Normal klasör gibi açabilir, kopyalayabilir ve yönetebilirsiniz.

![Windows'ta WebDAV](../../image/Safety/webdav在win显示效果.png)

## Desteklenen İşlemler

Başarılı bir WebDAV bağlantısından sonra genellikle şunları yapabilirsiniz:

- Dosya ve klasörleri görüntüleme.
- Dosya yükleme.
- Klasör oluşturma.
- Dosya veya klasörleri yeniden adlandırma.
- Dosya taşıma.
- Dosya silme.

WebDAV günlük erişim ve küçük ölçekli dosya yönetimi için en uygunudur. Büyük taşıma işlemleri, toplu silmeler veya karmaşık düzenlemeler için yönetim panelini kullanın.

## Giriş Cihazı Yönetimi

Başarılı WebDAV bağlantıları, Giriş Cihazı Yönetimi içindeki WebDAV sekmesinde de görünür.

Orada WebDAV istemcilerini inceleyebilir ve gerektiğinde eski cihazları zorla çevrimdışı bırakabilirsiniz.

WebDAV kullanıcı adını veya parolasını değiştirirseniz eski istemcilerin yeniden oturum açması gerekir.

## FAQ

### Windows Sürekli Kullanıcı Adı ve Parola Soruyor

Şunları kontrol edin:

- URL `https://your-domain.com/dav` olmalıdır.
- Kullanıcı adı ve parola WebDAV ayarlarıyla eşleşmelidir.
- WebDAV etkin olmalıdır.
- Siteye HTTPS üzerinden erişilebilmelidir.

### Gezinme Çalışıyor, Ama Yükleme Başarısız

`Varsayılan kanal` ayarını kontrol edin.

WebDAV yüklemeleri için varsayılan yükleme kanalı gerekir. Eksik, devre dışı veya yanlış yapılandırılmışsa yüklemeler başarısız olabilir.

### Erişim Hızı Kararsız

WebDAV performansı istemciye, ağa, dosya sayısına ve varsayılan yükleme kanalına bağlıdır.

Bir dizinde çok sayıda dosya varsa, tek dizinde fazla dosya tutmak yerine klasörler halinde düzenleyin.

## Güvenlik Önerileri

- WebDAV erişimi için HTTPS kullanın.
- Güçlü bir parola belirleyin.
- WebDAV parolasını güvenmediğiniz kişilerle paylaşmayın.
- Kullanmadığınızda WebDAV'ı kapatın.
- Giriş Cihazı Yönetimi içinde kullanılmayan WebDAV cihazlarını düzenli olarak temizleyin.

## WebDAV Yükleme Dosya Boyutu

WebDAV istemcileri, tarayıcı yükleme sayfasının büyük dosya parçalama akışını kullanmaz. Aşağıdaki önerilen sınırları aşan dosyalar için web yükleme sayfasını kullanın.

| Varsayılan Yükleme Kanalı | WebDAV İçin Önerilen Tek Dosya Sınırı |
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
