# IP Konumlandırma ve Kullanıcı Yönetimi

IP geolocation; yükleyici kayıtları, giriş cihazları ve benzeri günlüklerdeki IP adreslerini yaklaşık konumlara dönüştürür.

Yapılandırıldıktan sonra yönetim paneli yükleme ve erişim kaynaklarını daha anlaşılır şekilde gösterebilir. User Management ayrıca şüpheli IP adresleri için yükleme erişimini engellemenizi veya geri açmanızı sağlar.

## Nereden Yapılandırılır?

Şurayı açın:

```text
System Settings -> Other Settings -> IP Geolocation
```

![IP geolocation](../../image/other/ip定位/ip定位.png)

## Kullanılabilir Ayarlar

Yeni IP geolocation akışı tek bir harita servisine bağlı kalmak yerine birden fazla kaynağı destekler.

| Ayar | Amaç |
| --- | --- |
| IP geolocation language | English, Simplified Chinese, Japanese, French gibi görüntüleme dilini seçer. |
| MaxMind Account ID | MaxMind GeoLite Web Service için MaxMind account ID. |
| MaxMind License Key | MaxMind License Key. |
| Tencent Map Key | Tencent Location Service key. Çin adresleri ve ana kara Çin IP'leri için kullanışlıdır. |
| ipapi Key | APILayer ipapi key. Çok dilli IP konumlandırmayı destekler. |

Yalnızca ihtiyacınız olan servisleri doldurun. Her alanı yapılandırmanız gerekmez.

Hiç anahtar girilmezse ImgBed yerleşik ücretsiz kaynakları denemeye devam eder; ancak kararlılık, dil desteği ve hassasiyet kendi yapılandırdığınız bir servise göre daha düşük olabilir.

## Önerilen Seçimler

Ağırlıklı olarak Çin adreslerine ihtiyacınız varsa:

1. IP geolocation language değerini Simplified Chinese yapın.
2. Tencent Map Key yapılandırın.
3. İsteğe bağlı olarak MaxMind veya ipapi fallback sources ekleyin.

İngilizce veya çok dilli adreslere ihtiyacınız varsa:

1. İhtiyacınız olan dili seçin.
2. MaxMind Account ID ve License Key yapılandırın.
3. Daha iyi çok dilli sonuçlar gerekiyorsa ipapi Key ekleyin.

## MaxMind Kurulumu

MaxMind şunları ister:

```text
MaxMind Account ID
MaxMind License Key
```

Account ID değerini MaxMind dashboard içinde bulun ve License Keys sayfasından License Key oluşturun.

![MaxMind key yapılandırması](../../image/other/ip定位/maxmind的key配置.png)

Oluşturduktan sonra Account ID ve License Key değerlerini ImgBed'e yapıştırıp kaydedin.

MaxMind ücretsiz planı günlük kullanım için uygundur, ancak request limits vardır. Kota aşılırsa ImgBed diğer kullanılabilir kaynakları denemeye devam eder.

## ipapi Kurulumu

ipapi bir APILayer API Key kullanır.

ipapi konsolunu açın ve orada gösterilen API Key değerini kopyalayın.

![ipapi yapılandırması](../../image/other/ip定位/ipapi配置.png)

ImgBed'deki `ipapi Key` alanına yapıştırıp kaydedin.

ipapi çok dilli IP konumlandırmayı destekler ve adresleri seçili dilde göstermek istediğinizde kullanışlıdır. Ücretsiz planında da request limits vardır. Kota biterse ImgBed diğer kullanılabilir kaynakları denemeye devam eder.

## Tencent Map Key Kurulumu

Tencent Map Key, özellikle ana kara Çin IP'leri için Çin adreslerinde kullanışlıdır.

Tencent Location Service içinde key oluştururken şunu etkinleştirin:

```text
WebServiceAPI
```

Oluşturduktan sonra key değerini `Tencent Map Key` alanına yapıştırıp kaydedin.

Yalnızca temel Çin IP konumlandırması gerekiyorsa Tencent Map Key başlamak için yeterlidir.

## User Management İçinde Neye Bakılır?

User Management, yönetim panelinin üst kısmından açılır.

![User management](../../image/other/用户管理显示.png)

User Management yükleme etkinliğini IP'ye göre gösterir:

| Alan | Açıklama |
| --- | --- |
| IP source | Yükleyici kaynak IP adresi. |
| Address | IP'den çözümlenen yaklaşık konum. |
| Total upload size | Bu IP tarafından yüklenen toplam dosya boyutu. |
| Upload count | Bu IP'den yapılan yükleme sayısı. |
| Upload allowed | Açık ise yüklemeler serbesttir. Kapalı ise yüklemeler engellenir. |

Bu IP'nin yüklediği dosya listesini açmak için soldaki oka tıklayın.

Dosya listesi file name, preview, file size, moderation result, file status ve upload time gösterir. Yüklemeler şüpheli görünüyorsa önce IP'yi genişletin, dosyaları inceleyin, sonra sonraki yüklemeleri engelleyip engellemeyeceğinize karar verin.

Bir IP şüpheliyse `Upload allowed` kapatın. Bu IP'den gelecekteki yüklemeler engellenir.

## Arama, Sıralama ve Gelişmiş Filtreler

User Management üst kısmında IP source veya address ile arama yapabilirsiniz.

Son yükleyicileri, yüksek sıklıkta yükleyenleri veya yüksek kullanım yapan IP'leri bulmak için time, upload count veya total upload size değerlerine göre sıralayın.

Daha derin inceleme için advanced filters açın.

![Gelişmiş filtreler](../../image/other/用户管理高级筛选.png)

Advanced filters şunları destekler:

| Filtre | Kullanım |
| --- | --- |
| Time range | Seçilen dönemde dosya yükleyen IP'leri gösterir. |
| Access status | Normal, blocked ve benzeri durumlara göre filtreler. |
| Allow/block list | Allowlist, blocklist veya unset durumuna göre filtreler. |
| File type | Images, videos, audio, documents, code veya diğer dosyaları yükleyen IP'leri gösterir. |
| File size | Yüklenen dosya boyutu aralığına göre filtreler. |
| Age rating | Unset, General, R12+, R16+, R18 ve benzeri derecelere göre filtreler. |
| File status | Anormal dosyaları incelemek için geçerli dosya durumuna göre filtreler. |

Uygulamak için `Apply Filters` düğmesine tıklayın. Tüm veriye dönmek için `Reset` kullanın.

## Mobil Görünüm

Mobilde User Management kart düzenine geçer.

![Mobil user management](../../image/other/手机端显示用户管理效果.png)

Her kart IP, address, total upload size, upload count ve upload allowed anahtarını gösterir. Yatay tablo kaydırmadan kullanıcıları yönetebilirsiniz.

## Konum Yanlış Görünüyorsa

IP geolocation yaklaşık sonuç verir. Sokak düzeyinde kesin adres değildir.

Kullanıcı proxy, data center, cloud server veya cross-border network arkasındaysa gösterilen konum gerçek konumdan farklı olabilir.

Bu özelliği yaklaşık kaynağı anlamak, anormal yüklemeleri bulmak ve engelleme kararlarına yardımcı olmak için kullanın. Kesin takip yöntemi olarak değerlendirmeyin.

## Yaygın Durumlar

| Durum | Anlamı |
| --- | --- |
| Address boş | IP henüz çözümlenmemiş olabilir veya geçerli kaynak geçici olarak kullanılamıyor olabilir. |
| Address dili yanlış | IP geolocation language ve bu dili destekleyen kaynak yapılandırılıp yapılandırılmadığını kontrol edin. |
| Address data center gösteriyor | Birçok proxy, cloud server ve crawler data center veya ISP adresi gibi görünür. |
| Upload count yüksek | Bu IP'yi dikkatle inceleyin ve gerekirse yüklemeleri engelleyin. |
| Total upload size büyük | Sıralayın veya filtreleyin, IP'yi genişletip belirli dosyaları inceleyin. |
| Engelleme sonrası geri açmak gerekiyor | `Upload allowed` değerini yeniden açın. |

## Kısa Akış

```text
Other Settings içinde IP Geolocation aç
-> IP geolocation language seç
-> Gerektiği kadar MaxMind, Tencent Map veya ipapi credentials gir
-> Ayarları kaydet
-> User Management aç
-> IP source, address, total upload size ve upload count incele
-> Anormal IP'leri bulmak için search, sort veya advanced filters kullan
-> Gerektiğinde yüklemelere izin ver veya engelle
```
