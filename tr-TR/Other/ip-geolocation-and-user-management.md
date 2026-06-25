# IP Coğrafi Konumu ve Kullanıcı Yönetimi

IP coğrafi konumu, yükleyici kayıtlarındaki, oturum açma cihazlarındaki ve benzer günlüklerdeki IP adreslerini yaklaşık konumlara dönüştürür.

Yapılandırıldıktan sonra yönetim paneli yükleme ve erişim kaynaklarını daha net gösterebilir. Kullanıcı Yönetimi ayrıca şüpheli IP adresleri için yükleme erişimini engellemenizi veya geri yüklemenizi sağlar.

## Nereden Yapılandırılır?

Açın:

```text
System Settings -> Other Settings -> IP Geolocation
```

![IP coğrafi konumu](../../image/other/ip定位/ip定位.png)

## Kullanılabilir Ayarlar

Yeni IP coğrafi konumu akışı, tek bir harita hizmetine dayanmak yerine birden fazla kaynağı destekler.

| Ayar | Amaç |
| --- | --- |
| IP coğrafi konum dili | İngilizce, Basitleştirilmiş Çince, Japonca, Fransızca ve benzeri görüntüleme dilini seçer. |
| MaxMind Account ID | MaxMind GeoLite Web Service için MaxMind hesap ID'si. |
| MaxMind License Key | MaxMind License Key. |
| Tencent Map Key | Tencent Location Service anahtarı. Çince adresler ve Çin ana karası IP'leri için kullanışlıdır. |
| ipapi Key | APILayer ipapi anahtarı. Çok dilli IP coğrafi konumunu destekler. |

Yalnızca ihtiyacınız olan hizmetleri doldurun. Her alanı yapılandırmanız gerekmez.

Hiçbir anahtar sağlanmazsa ImgBed yine yerleşik ücretsiz kaynakları denemeye devam eder; ancak kararlılık, dil desteği ve doğruluk kendi yapılandırdığınız bir hizmetten daha düşük olabilir.

## Önerilen Seçimler

Esas olarak Çince adreslere ihtiyacınız varsa:

1. IP coğrafi konum dilini Basitleştirilmiş Çince olarak ayarlayın.
2. Tencent Map Key yapılandırın.
3. İsteğe bağlı olarak MaxMind veya ipapi'yi yedek kaynak olarak ekleyin.

Esas olarak İngilizce veya çok dilli adreslere ihtiyacınız varsa:

1. İhtiyacınız olan dili seçin.
2. MaxMind Account ID ve License Key yapılandırın.
3. Daha iyi çok dilli sonuçlar gerekiyorsa ipapi Key ekleyin.

## MaxMind Kurulumu

MaxMind şunları gerektirir:

```text
MaxMind Account ID
MaxMind License Key
```

Hesap ID'sini MaxMind panosunda bulun ve License Keys sayfasından bir License Key oluşturun.

![MaxMind anahtar yapılandırması](../../image/other/ip定位/maxmind的key配置.png)

Oluşturduktan sonra Account ID ve License Key değerlerini ImgBed'e yapıştırıp kaydedin.

MaxMind'in ücretsiz planı günlük kullanım için uygundur, ancak istek sınırları vardır. Kota aşılırsa ImgBed diğer kullanılabilir kaynakları denemeye devam eder.

## ipapi Kurulumu

ipapi bir APILayer API Key kullanır.

ipapi konsolunu açın ve orada gösterilen API Key değerini kopyalayın.

![ipapi yapılandırması](../../image/other/ip定位/ipapi配置.png)

ImgBed'deki `ipapi Key` alanına yapıştırın ve kaydedin.

ipapi çok dilli IP coğrafi konumunu destekler ve adreslerin seçilen dilde gösterilmesini istediğinizde kullanışlıdır. Ücretsiz planında da istek sınırları vardır. Kota biterse ImgBed diğer kullanılabilir kaynakları denemeye devam eder.

## Tencent Map Key Kurulumu

Tencent Map Key, özellikle Çin ana karası IP'leri olmak üzere Çince adresler için kullanışlıdır.

Tencent Location Service içinde anahtar oluştururken şunu etkinleştirin:

```text
WebServiceAPI
```

Oluşturduktan sonra anahtar değerini `Tencent Map Key` alanına yapıştırın ve kaydedin.

Yalnızca temel Çince IP coğrafi konumu gerekiyorsa Tencent Map Key başlangıç için yeterlidir.

## Kullanıcı Yönetiminde Neye Bakılmalı?

Kullanıcı Yönetimi, yönetim panelinin üst kısmından kullanılabilir.

![Kullanıcı yönetimi](../../image/other/用户管理显示.png)

Kullanıcı Yönetimi IP'ye göre yükleme etkinliğini gösterir:

| Alan | Açıklama |
| --- | --- |
| IP kaynağı | Yükleyenin kaynak IP'si. |
| Adres | IP'den çözümlenen yaklaşık konum. |
| Toplam yükleme boyutu | Bu IP tarafından yüklenen dosyaların toplam boyutu. |
| Yükleme sayısı | Bu IP'den yapılan yükleme sayısı. |
| Yüklemeye izin verildi | Açık ise yüklemelere izin verilir. Kapalı ise yüklemeler engellenir. |

Bu IP tarafından yüklenen dosya listesini genişletmek için soldaki oka tıklayın.

Dosya listesi dosya adını, önizlemeyi, dosya boyutunu, denetim sonucunu, dosya durumunu ve yükleme zamanını gösterir. Yüklemeler şüpheli görünüyorsa önce IP'yi genişletin, dosyaları inceleyin, ardından sonraki yüklemeleri engelleyip engellemeyeceğinize karar verin.

Bir IP şüpheliyse `Upload allowed` seçeneğini kapatın. Bu IP'den gelecekte yapılacak yüklemeler engellenir.

## Arama, Sıralama ve Gelişmiş Filtreler

Kullanıcı Yönetimi'nin üst kısmında IP kaynağına veya adrese göre arama yapabilirsiniz.

Son yükleyicileri, yüksek frekanslı yükleyicileri veya yüksek kullanımlı IP'leri bulmak için zamana, yükleme sayısına veya toplam yükleme boyutuna göre sıralayın.

Daha derin inceleme için gelişmiş filtreleri açın.

![Gelişmiş filtreler](../../image/other/用户管理高级筛选.png)

Gelişmiş filtreler şunları destekler:

| Filtre | Kullanım |
| --- | --- |
| Zaman aralığı | Seçilen dönemde dosya yüklemiş IP'leri gösterir. |
| Erişim durumu | Normal, engellenmiş ve benzeri durumlara göre filtreler. |
| İzin/engelleme listesi | İzin listesi, engelleme listesi veya ayarlanmamış duruma göre filtreler. |
| Dosya türü | Görsel, video, ses, belge, kod veya diğer dosyaları yüklemiş IP'leri gösterir. |
| Dosya boyutu | Yüklenen dosya boyutu aralığına göre filtreler. |
| Yaş derecelendirmesi | Ayarlanmamış, General, R12+, R16+, R18 ve benzeri derecelendirmelere göre filtreler. |
| Dosya durumu | Anormal dosyaları incelemek için geçerli dosya durumuna göre filtreler. |

Uygulamak için `Apply Filters` öğesine tıklayın. Tüm verilere dönmek için `Reset` kullanın.

## Mobil Görünüm

Mobilde Kullanıcı Yönetimi kart düzenine geçer.

![Mobil kullanıcı yönetimi](../../image/other/手机端显示用户管理效果.png)

Her kart IP, adres, toplam yükleme boyutu, yükleme sayısı ve yüklemeye izin verme anahtarını gösterir. Kullanıcıları yatay tablo kaydırması olmadan yönetebilirsiniz.

## Konum Yanlış Görünüyorsa

IP coğrafi konumu yaklaşık değerdir. Kesin bir sokak adresi değildir.

Kullanıcı proxy, veri merkezi, bulut sunucusu veya sınır ötesi ağ arkasındaysa gösterilen konum gerçek konumdan farklı olabilir.

Bu özelliği yaklaşık kaynağı anlamak, anormal yüklemeleri bulmak ve engelleme kararlarını desteklemek için kullanın. Kesin izleme olarak değerlendirmeyin.

## Yaygın Durumlar

| Durum | Anlam |
| --- | --- |
| Adres boş | IP henüz çözümlenmemiş olabilir veya geçerli kaynak geçici olarak kullanılamıyor olabilir. |
| Adres dili yanlış | IP coğrafi konum dilini ve o dili destekleyen bir kaynağın yapılandırılıp yapılandırılmadığını kontrol edin. |
| Adres veri merkezi gösteriyor | Birçok proxy, bulut sunucusu ve tarayıcı botu veri merkezi veya ISP adresi olarak görünür. |
| Yükleme sayısı yüksek | Bu IP'yi dikkatle inceleyin ve gerekirse yüklemeleri engelleyin. |
| Toplam yükleme boyutu büyük | Sıralayın veya filtreleyin, IP'yi genişletin ve belirli dosyaları inceleyin. |
| Engellemeden sonra geri yükleme gerekiyor | `Upload allowed` seçeneğini yeniden açın. |

## Hızlı Akış

```text
Open IP Geolocation in Other Settings
-> Choose IP geolocation language
-> Fill MaxMind, Tencent Map, or ipapi credentials as needed
-> Save settings
-> Open User Management
-> Review IP source, address, total upload size, and upload count
-> Use search, sort, or advanced filters to find abnormal IPs
-> Allow or block uploads as needed
```
