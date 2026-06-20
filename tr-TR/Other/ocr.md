# OCR

OCR; görsellerden, taramalardan ve belge ekran görüntülerinden metin çıkarır.

Tanıma tamamlandıktan sonra sonucu kopyalayabilir, `Markdown`, `PDF` veya `Word` olarak dışa aktarabilir ya da birden fazla formatı birlikte paketleyip indirebilirsiniz.

## OCR Neler Yapabilir?

| Özellik | Açıklama |
| --- | --- |
| Görsel metin tanıma | Görsellerden, ekran görüntülerinden ve taramalardan metin çıkarır. |
| Belge düzeni tanıma | Tablolar, formüller, damgalar ve karma metin-görsel düzenler için daha uygundur. |
| Birden fazla servis | Baidu PaddleOCR, Microsoft Azure Vision ve Google Vision destekler. |
| Sonuçları kopyalama | İşlemden sonra tanınan metni kopyalar. |
| Dosya dışa aktarma | `Markdown`, `PDF` ve `Word` dışa aktarır. |
| Batch packaging | Birden fazla dosya tanındıktan sonra sonuçları paket halinde indirir. |

## Önce OCR Servislerini Yapılandırın

Şurayı açın:

```text
System Settings -> Other Settings -> OCR
```

![IP geolocation ve OCR](../../image/other/ip定位和ocr文字识别.png)

Kullanmak istediğiniz servisler için credentials değerlerini doldurun:

| Servis | Ne girilir | En uygun kullanım |
| --- | --- | --- |
| Baidu PaddleOCR | `PaddleOCR Token` | İlk tercih olarak önerilir. Belgeler, görseller, tablolar ve karma düzenler için iyidir. |
| Microsoft Azure Vision | `Azure Vision Endpoint` ve `Azure Vision API Key` | Microsoft bulut servislerini zaten kullanıyorsanız yararlıdır. |
| Google Vision | `Google Vision API Key`. Service account `JSON` yalnızca kota sorgusu için kullanılır. | Google Cloud servisleri kullanıyorsanız yararlıdır. |

Credentials girdikten sonra kaydedin.

İlk test için yalnızca bir servis yapılandırabilirsiniz. Üçünün de gerekli olması şart değildir.

## Google Vision Kurulumu

Google kurulumu iki parçadan oluşur:

| Amaç | Gereken |
| --- | --- |
| OCR kullanmak | `Cloud Vision API` etkinleştirip `API Key` oluşturmak. |
| Kullanımı sorgulamak | Service account oluşturmak, `Monitoring Viewer` vermek ve service account `JSON` indirmek. |

![Google API key ve service account](../../image/other/谷歌api秘钥和服务账号截图.png)

### OCR İçin Google Kullanma

1. Google Cloud Console'u açın.
2. `APIs & Services` bölümüne gidin.
3. `Library` açın, `Cloud Vision API` araması yapın ve etkinleştirin.
4. `Credentials` bölümüne dönün.
5. `API Key` oluşturun.
6. API Key'i açıp kopyalayın.
7. ImgBed'deki `Google Vision API Key` alanına yapıştırın.
8. Kaydedin.

Ardından OCR penceresinde Google Vision seçebilirsiniz.

### Google Kullanımını Sorgulama

Quota query tanıma işlemi için gerekli değildir.

Yalnızca son 30 günde yaklaşık kaç Google Vision çağrısı kullanıldığını gösterir.

1. Google Cloud Console'da `IAM & Admin` bölümünü açın.
2. `Service Accounts` bölümünü açın.
3. `vision-monitor` gibi bir service account oluşturun.
4. `Monitoring Viewer` rolünü verin.
5. Service account ayrıntılarını açın ve key oluşturun.
6. `JSON` seçin.
7. Oluşturulan JSON dosyasını indirin.
8. ImgBed'e dönün ve service account `JSON` altında içe aktarın (isteğe bağlı).
9. İçe aktarma başarılı olduktan sonra quota query tıklayın.

İçe aktardıktan sonra ImgBed service account sahibi project name değerini gösterir. Kullanım sorgulanırken ImgBed Google monitoring data okur ve bu ayın çağrı sayısını gösterir.

Kısaca:

| Öğe | Amaç |
| --- | --- |
| `Google Vision API Key` | OCR tanıma yapar. |
| Service account `JSON` | Kaç Google Vision çağrısı kullanıldığını sorgular. |
| `Monitoring Viewer` role | Service account'un usage data okumasını sağlar. |

## Baidu PaddleOCR Token Alma

Baidu PaddleOCR access token ister.

![PaddleOCR token alma](../../image/other/获取飞浆令牌.png)

Baidu PaddleOCR sayfasındaki `API` çağrı penceresini açın, token alma düğmesine tıklayın ve kopyalayın.

ImgBed'e dönün, `PaddleOCR Token` alanına yapıştırın ve kaydedin.

## Tanımayı Başlatma

File Management içinde bir görsel veya belge ekran görüntüsü seçin ve `OCR` tıklayın.

![OCR tanıma](../../image/other/ocr识别截图.png)

Pencerede tanıma servisini ve modeli seçin.

Yaygın PaddleOCR model seçenekleri:

| Model | En uygun kullanım |
| --- | --- |
| `PP-StructureV3` | Varsayılan olarak önerilir. Belgeler, tablolar, formüller, damgalar ve karma düzenler için iyidir. |
| `PP-OCRv5` | Basit görseller, sıradan metinler ve hafif tanıma. |
| `PaddleOCR-VL` | Çok dilli, karmaşık görseller ve chart-like content. |
| `PaddleOCR-VL-1.5` | Daha karmaşık belge sayfaları ve layout recovery. |

Emin değilseniz `PP-StructureV3` ile başlayın.

## Advanced Options

| Seçenek | Açıklama |
| --- | --- |
| Orientation correction | Görsel döndürülmüş veya eğikse kullanın. |
| Document flattening | Eğrilik veya açı içeren fotoğraflanmış belgeler için. |
| Layout detection | Başlık, paragraf, tablo ve görsel yapısını korumak istediğinizde. |
| Chart recognition | Görselde grafik veya karmaşık yapı varsa. |
| Beautify `Markdown` | Dışa aktarılan Markdown'u daha okunur yapar. |

Normal ekran görüntülerinde seçenekleri az tutun. Belge taramalarında daha fazla belge odaklı seçeneği etkinleştirin.

## Sonuçları Görüntüleme

Tanıma bittiğinde pencere sonucu gösterir.

Doğrudan kopyalayabilir veya dışa aktarma formatlarını seçebilirsiniz.

![PDF tanıma](../../image/other/pdf识别截图.png)

Belge sayfalarında dışa aktarılan `PDF`, sayfa görünümünü korurken metni aranabilir tutabilir. Taramaları arşivlemek ve daha sonra içerik aramak için kullanışlıdır.

## Dışa Aktarma Formatı Seçimi

| Format | En uygun kullanım |
| --- | --- |
| `Markdown (.md)` | Notlar, dokümantasyon sistemleri ve sonraki düzenleme. |
| `PDF (.pdf)` | Sayfa görünümünü ve taranmış belge sonucunu koruma. |
| `Word (.docx)` | Düzeni düzenlemeye devam etme, metin değişikliği ve başkalarına aktarma. |
| Export all | Birden fazla formatı ve özgün görseli kaydeder; önemli arşivler için uygundur. |

Yalnızca metne ihtiyacınız varsa Markdown dışa aktarın.

Sayfa görünümü önemliyse PDF veya Word kullanın.

## Word Output

Dışa aktarılan Word belgeleri office yazılımlarında açılıp düzenlenebilir.

![Word sonucu](../../image/other/word识别结果.png)

Bazı belgeler Word output içinde tanınan görseller, başlıklar ve paragraflar içerebilir.

Tanıma kalitesi özgün görsel netliğine, model seçimine ve belge karmaşıklığına bağlıdır.

## OCR İçin En Uygun Dosya Türleri

| Dosya Türü | Öneri |
| --- | --- |
| Net ekran görüntüleri | Doğrudan tanıyın. |
| Taramalar | `PP-StructureV3` tercih edin. |
| Fotoğraflanmış belgeler | Orientation correction ve document flattening etkinleştirin. |
| Tablolar, formüller, damgalar | Structured models tercih edin. |
| Basit kısa metin görselleri | `PP-OCRv5` genellikle yeterlidir. |

Daha net ve daha düz metinli görseller genellikle daha iyi sonuç verir.

## Yaygın Durumlar

| Durum | Anlamı |
| --- | --- |
| Recognition fails | Service token veya key kaydedildi mi kontrol edin. |
| Recognition is slow | Karmaşık belgeler ve büyük görseller daha uzun sürer. |
| Table is incomplete | Structured model deneyin. |
| Text has mistakes | Bulanıklık, parlama ve eğiklik hataları artırır. Daha net görsel deneyin. |
| Word output contains many images | Structured models tanınan bazı görselleri koruyabilir. Bu normaldir. |

### Google Quota Query Fails

Kontrol edin:

1. Service account `JSON` içe aktarıldı.
2. Service account `Monitoring Viewer` rolüne sahip.
3. Projede `Cloud Vision API` etkin.

Yalnızca OCR gerekiyorsa ve usage query gerekmiyorsa service account JSON kullanmayabilir, yalnızca `Google Vision API Key` doldurabilirsiniz.

## Kısa Akış

```text
System Settings aç
-> Other Settings aç
-> OCR service credentials doldur
-> Kaydet
-> File Management'a dön
-> Dosya seç ve OCR tıkla
-> Model seç
-> Tanımayı bekle
-> Sonuçları kopyala veya Markdown / PDF / Word dışa aktar
```
