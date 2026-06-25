# OCR

OCR; görsellerden, taramalardan ve belge ekran görüntülerinden metin çıkarır.

Tanıma sonrasında sonucu kopyalayabilir, `Markdown`, `PDF` veya `Word` olarak dışa aktarabilir ya da birden fazla biçimi birlikte paketleyip indirebilirsiniz.

## OCR Neler Yapabilir?

| Özellik | Açıklama |
| --- | --- |
| Görsel metin tanıma | Görsellerden, ekran görüntülerinden ve taramalardan metin çıkarır. |
| Belge düzeni tanıma | Tablolar, formüller, damgalar ve karışık metin-görsel düzenleri için daha uygundur. |
| Birden fazla hizmet | Baidu PaddleOCR, Microsoft Azure Vision ve Google Vision destekler. |
| Sonuçları kopyalama | İşleme sonrasında tanınan metni kopyalar. |
| Dosya dışa aktarma | `Markdown`, `PDF` ve `Word` dışa aktarır. |
| Toplu paketleme | Birden fazla dosya tanındıktan sonra sonuçları paket olarak indirir. |

## Önce OCR Hizmetlerini Yapılandırın

Açın:

```text
System Settings -> Other Settings -> OCR
```

![IP coğrafi konumu ve OCR](../../image/other/ip定位和ocr文字识别.png)

Kullanmak istediğiniz hizmetler için kimlik bilgilerini doldurun:

| Hizmet | Girilecek Bilgi | En Uygun Kullanım |
| --- | --- | --- |
| Baidu PaddleOCR | `PaddleOCR Token` | Önerilen ilk tercih. Belgeler, görseller, tablolar ve karışık düzenler için iyidir. |
| Microsoft Azure Vision | `Azure Vision Endpoint` ve `Azure Vision API Key` | Microsoft bulut hizmetlerini zaten kullanıyorsanız yararlıdır. |
| Google Vision | `Google Vision API Key`. Hizmet hesabı `JSON` yalnızca kota sorgusu için kullanılır. | Google Cloud hizmetlerini kullanıyorsanız yararlıdır. |

Kimlik bilgilerini doldurduktan sonra kaydedin.

İlk test için yalnızca bir hizmet yapılandırabilirsiniz. Üçünü de yapılandırmanız gerekmez.

## Google Vision Kurulumu

Google kurulumu iki bölümden oluşur:

| Amaç | Gereksinim |
| --- | --- |
| OCR kullanmak | `Cloud Vision API` etkinleştirin, ardından bir `API Key` oluşturun. |
| Kullanımı sorgulamak | Bir hizmet hesabı oluşturun, `Monitoring Viewer` verin, ardından hizmet hesabı `JSON` indirin. |

![Google API anahtarı ve hizmet hesabı](../../image/other/谷歌api秘钥和服务账号截图.png)

### OCR İçin Google Kullanma

1. Google Cloud Console'u açın.
2. `APIs & Services` bölümüne gidin.
3. `Library` bölümünü açın, `Cloud Vision API` arayın ve etkinleştirin.
4. `Credentials` bölümüne dönün.
5. Bir `API Key` oluşturun.
6. API Key'i açıp kopyalayın.
7. ImgBed'de `Google Vision API Key` alanına yapıştırın.
8. Kaydedin.

Ardından OCR iletişim kutusunda Google Vision'ı seçebilirsiniz.

### Google Kullanımını Sorgulama

Kota sorgusu tanıma için gerekli değildir.

Yalnızca son 30 günde yaklaşık kaç Google Vision çağrısı kullanıldığını gösterir.

1. Google Cloud Console'da `IAM & Admin` bölümünü açın.
2. `Service Accounts` bölümünü açın.
3. `vision-monitor` gibi bir hizmet hesabı oluşturun.
4. Ona `Monitoring Viewer` rolünü verin.
5. Hizmet hesabı ayrıntılarını açın ve bir anahtar oluşturun.
6. `JSON` seçin.
7. Oluşturulan JSON dosyasını indirin.
8. ImgBed'e dönüp hizmet hesabı `JSON` altında içe aktarın (isteğe bağlı).
9. İçe aktarma başarılı olduktan sonra kota sorgusuna tıklayın.

İçe aktarmadan sonra ImgBed, hizmet hesabının ait olduğu proje adını gösterir. Kullanım sorgulanırken ImgBed Google izleme verilerini okur ve bu ayın çağrı sayısını gösterir.

Kısaca:

| Öğe | Amaç |
| --- | --- |
| `Google Vision API Key` | OCR tanımasını gerçekleştirir. |
| Hizmet hesabı `JSON` | Kaç Google Vision çağrısı kullanıldığını sorgular. |
| `Monitoring Viewer` rolü | Hizmet hesabının kullanım verilerini okumasına izin verir. |

## Baidu PaddleOCR Token Alma

Baidu PaddleOCR bir erişim token'ı gerektirir.

![PaddleOCR token'ı alma](../../image/other/获取飞浆令牌.png)

Baidu PaddleOCR sayfasında `API` çağrı penceresini açın, token almak için tıklayın ve kopyalayın.

ImgBed'e dönün, `PaddleOCR Token` alanına yapıştırın ve kaydedin.

## Tanımayı Başlatma

Dosya Yönetimi'nde bir görsel veya belge ekran görüntüsü seçin ve `OCR` öğesine tıklayın.

![OCR tanıma](../../image/other/ocr识别截图.png)

İletişim kutusunda tanıma hizmetini ve modeli seçin.

Yaygın PaddleOCR model seçenekleri:

| Model | En Uygun Kullanım |
| --- | --- |
| `PP-StructureV3` | Önerilen varsayılan. Belgeler, tablolar, formüller, damgalar ve karışık düzenler için iyidir. |
| `PP-OCRv5` | Basit görseller, sıradan metin ve hafif tanıma. |
| `PaddleOCR-VL` | Çok dilli, karmaşık görseller ve grafik benzeri içerikler. |
| `PaddleOCR-VL-1.5` | Daha karmaşık belge sayfaları ve düzen kurtarma. |

Emin değilseniz `PP-StructureV3` ile başlayın.

## Gelişmiş Seçenekler

| Seçenek | Açıklama |
| --- | --- |
| Yön düzeltme | Görsel döndürülmüş veya eğriyse kullanın. |
| Belge düzleştirme | Eğrilik veya eğim içeren fotoğraflanmış belgeler için kullanın. |
| Düzen algılama | Başlıkları, paragrafları, tabloları ve görsel yapısını korumak istediğinizde kullanın. |
| Grafik tanıma | Görsel grafikler veya karmaşık yapılar içeriyorsa kullanın. |
| `Markdown` güzelleştirme | Dışa aktarılan Markdown'ın okunmasını kolaylaştırır. |

Normal ekran görüntüleri için seçenekleri az tutun. Belge taramaları için belgeyle ilgili daha fazla seçeneği etkinleştirin.

## Sonuçları Görüntüleme

Tanıma bittikten sonra iletişim kutusu sonucu gösterir.

Sonucu doğrudan kopyalayabilir veya dışa aktarma biçimlerini seçebilirsiniz.

![PDF tanıma](../../image/other/pdf识别截图.png)

Belge sayfaları için dışa aktarılan `PDF`, sayfa görünümünü korurken metni aranabilir tutabilir. Bu, taramaları arşivlemek ve içeriği daha sonra bulmak için yararlıdır.

## Dışa Aktarma Biçimi Seçme

| Biçim | En Uygun Kullanım |
| --- | --- |
| `Markdown (.md)` | Notlar, dokümantasyon sistemleri ve sonraki düzenleme. |
| `PDF (.pdf)` | Sayfa görünümünü ve taranmış belge sonuçlarını koruma. |
| `Word (.docx)` | Düzeni düzenlemeye devam etme, metin değiştirme ve başkalarına devretme. |
| Tümünü dışa aktar | Birden fazla biçimi ve özgün görseli kaydeder; önemli arşivler için uygundur. |

Yalnızca metne ihtiyacınız varsa Markdown dışa aktarın.

Sayfa görünümüne ihtiyacınız varsa PDF veya Word kullanın.

## Word Çıktısı

Dışa aktarılan Word belgeleri ofis yazılımlarında açılıp düzenlenebilir.

![Word sonucu](../../image/other/word识别结果.png)

Bazı belgeler Word çıktısında tanınan görseller, başlıklar ve paragraflar içerebilir.

Tanıma kalitesi özgün görselin netliğine, model seçimine ve belgenin karmaşıklığına bağlıdır.

## OCR İçin En İyi Dosya Türleri

| Dosya Türü | Öneri |
| --- | --- |
| Net ekran görüntüleri | Doğrudan tanıyın. |
| Taramalar | `PP-StructureV3` tercih edin. |
| Fotoğraflanmış belgeler | Yön düzeltme ve belge düzleştirmeyi etkinleştirin. |
| Tablolar, formüller, damgalar | Yapılandırılmış modelleri tercih edin. |
| Basit kısa metin görselleri | `PP-OCRv5` genellikle yeterlidir. |

Daha net görseller ve daha düz metin genellikle daha iyi sonuç verir.

## Yaygın Durumlar

| Durum | Anlam |
| --- | --- |
| Tanıma başarısız | Hizmet token'ının veya anahtar değerinin kaydedilip kaydedilmediğini kontrol edin. |
| Tanıma yavaş | Karmaşık belgeler ve büyük görseller daha uzun sürer. |
| Tablo eksik | Yapılandırılmış bir model deneyin. |
| Metinde hatalar var | Bulanıklık, parlama ve eğrilik tanıma hatalarını artırır. Daha net bir görsel deneyin. |
| Word çıktısı çok sayıda görsel içeriyor | Yapılandırılmış modeller bazı tanınan görselleri koruyabilir. Bu normaldir. |

### Google Kota Sorgusu Başarısız

Kontrol edin:

1. Hizmet hesabı `JSON` içe aktarılmış olmalı.
2. Hizmet hesabında `Monitoring Viewer` rolü olmalı.
3. Projede `Cloud Vision API` etkin olmalı.

Yalnızca OCR'ye ihtiyacınız varsa ve kullanım sorgusu gerekmiyorsa hizmet hesabı JSON'ını yok sayıp yalnızca `Google Vision API Key` doldurabilirsiniz.

## Hızlı Akış

```text
Open System Settings
-> Open Other Settings
-> Fill OCR service credentials
-> Save
-> Return to File Management
-> Select a file and click OCR
-> Choose a model
-> Wait for recognition
-> Copy results or export Markdown / PDF / Word
```
