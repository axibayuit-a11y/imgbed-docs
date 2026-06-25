# Otomatik Etiketleme

Otomatik etiketleme şu bölümden yapılandırılır:

```text
System Settings -> Other Settings -> Auto Tagging
```

Görseller için otomatik olarak etiket üretir. Bu etiketler arama, rastgele görsel filtreleme, herkese açık galeri filtreleme ve yaş derecelendirmesine göre erişim kontrolü için kullanışlıdır.

## Otomatik Etiketleme Neler Yapabilir?

| Özellik | Açıklama |
| --- | --- |
| İçerik etiketleri üretme | Kişiler, sahneler, nesneler, sanat stili ve benzeri görsel içerikler için etiket ekler. |
| Karakter etiketleri üretme | Anime görselleri ve illüstrasyonlar için kullanışlıdır. |
| Yön etiketleri ekleme | `landscape`, `portrait` veya `square` ekler. |
| Görsel derecelendirmesi ekleme | Genel, hassas, şüpheli veya açık içerik için `G/S/Q/E` derecelendirme sonuçlarını kaydeder. |
| Yükleme sırasında otomatik etiketleme | Yeni yüklenen görseller otomatik olarak etiketleme akışına girer. |
| Toplu etiketleme | Tüm klasörlerdeki veya seçili klasörlerdeki eski görsellere etiket ekler. |

## Önce Gerekenler

En az bir erişilebilir Hugging Face Space URL'si hazırlayın.

Önerilen yöntem, SmilingWolf'un `wd-tagger` Space'ini kendi Hugging Face hesabınıza çoğaltmaktır:

```text
https://huggingface.co/spaces/SmilingWolf/wd-tagger
```

Herkese açık Space'i geçici test için kullanabilirsiniz. Ancak herkese açık Space'ler birçok kullanıcı tarafından paylaşıldığından kuyruğa girebilir, yavaşlayabilir veya kullanılamaz hale gelebilir. Kendi hesabınızda çoğaltılmış bir Space, uzun süreli otomatik etiketleme için daha kararlıdır.

## SmilingWolf Space'ini Çoğaltma

1. Hugging Face'te oturum açın.
2. `https://huggingface.co/spaces/SmilingWolf/wd-tagger` adresini açın.

![SmilingWolf herkese açık Space](../../image/other/微笑狼的公开仓库.png)

3. Sağ üst köşedeki üç nokta menüsüne tıklayın.
4. `Duplicate this Space` seçeneğini seçin.
5. Varsayılan Space adını koruyun veya `wd-tagger` gibi kendi adınızı seçin.
6. Görünürlüğü `Public` olarak ayarlayın. Herkese açık Space'ler, ImgBed tarafından daha kolay çağrılır.
7. Başta varsayılan ücretsiz donanımı kullanın. Yalnızca kuyruk belirgin hale gelirse daha sonra yükseltin.
8. Space'i oluşturun ve derlemenin bitmesini bekleyin.

Derleme bittikten sonra kendi Space sayfanızı açın. URL genellikle şöyle görünür:

```text
https://huggingface.co/spaces/your-name/wd-tagger
```

Tarayıcı URL'sini kopyalayın ve ImgBed'deki `Space URLs` alanına yapıştırın.

## Birden Fazla Space URL'si Girme

Her satıra bir Space URL'si girin.

Örnekler:

| Değer | Açıklama |
| --- | --- |
| `https://huggingface.co/spaces/SmilingWolf/wd-tagger` | SmilingWolf herkese açık Space'i. Geçici test için uygundur. |
| `https://huggingface.co/spaces/lintonxue00/wd-tagger` | Kopyalanmış Space sayfasının URL'si. |
| `https://huggingface.co/spaces/your-name/wd-tagger` | Kendi çoğaltılmış Space sayfanızın URL'si. |

Birden fazla URL girebilirsiniz. ImgBed birden fazla Space'i birlikte kullanır; bu hızın artmasına yardımcı olabilir.

Bir Space geçici olarak kullanılamıyorsa, diğerleri işlemeye devam edebilir.

## Ayarlar

| Seçenek | Öneri |
| --- | --- |
| `Space URLs` | Hazırladığınız Space URL'lerini girin. En az bir tane kullanın. |
| Hedef klasör | Tüm klasörler için boş bırakın. Yalnızca belirli bir dizini işlemek istediğinizde klasör seçin. |
| Tanıma modeli | Varsayılan olarak `wd-swinv2-tagger-v3` bırakın. |
| Genel etiket eşiği | Varsayılan değer çoğu görsel için uygundur. Daha düşük değerler daha fazla etiket, daha yüksek değerler daha az etiket üretir. |
| Karakter etiketi eşiği | Varsayılan değer temkinlidir ve yanlış karakter etiketlerini önlemeye yardımcı olur. |
| `MCut` otomatik eşiği | Başta kapalı bırakın. Modelin etiket sayısına otomatik karar vermesini istediğinizde açın. |
| Yükleme sırasında otomatik etiketleme | Yeni yüklenen görsellerin otomatik etiket alması gerekiyorsa açın. |
| Etiketlemeyi başlat | Eski görselleri elle toplu etiketler. |

## Önerilen Başlangıç Değerleri

| Seçenek | Önerilen Değer |
| --- | --- |
| Tanıma modeli | `wd-swinv2-tagger-v3` |
| Genel etiket eşiği | `0.35` |
| Karakter etiketi eşiği | `0.85` |
| `MCut` | Başta kapalı |
| Yükleme sırasında otomatik etiketleme | Gerekiyorsa etkinleştirin |

Etiketler çok fazlaysa genel etiket eşiğini biraz yükseltin.

Etiketler çok azsa genel etiket eşiğini biraz düşürün.

## Toplu Etiketleme

1. `Space URLs` alanını doldurun.
2. Bir hedef klasör seçin.
3. Etiketlemeyi başlat düğmesine tıklayın.
4. İlerlemenin bitmesini bekleyin.

Hedef klasör boşsa ImgBed tüm klasörleri işler.

Toplu etiketleme eski görseller için en uygunudur. Yeni görseller için yükleme sırasında otomatik etiketlemeyi etkinleştirin; böylece her seferinde elle çalıştırmanız gerekmez.

## Yükleme Sırasında Otomatik Etiketleme

Yükleme sırasında otomatik etiketleme etkinleştirildikten sonra yeni yüklenen görseller yapılandırılmış `Space URLs` değerlerini otomatik çağırır.

Bu, uzun süreli kullanım için uygundur.

Space'iniz kuyruktaysa yükleme işlemi yine önce tamamlanabilir; etiketleme daha sonra devam eder.

## Hangi Görseller İşlenir?

Otomatik etiketleme ağırlıklı olarak görsel dosyalarını işler.

Tam etiket, yön, derecelendirme, genişlik ve yükseklik bilgisine zaten sahip görseller, gereksiz Space çağrılarını önlemek için atlanır.

ImgBed mümkün olduğunda yalnızca eksik bilgileri doldurur. Örneğin yalnızca yön eksikse, tam içerik etiketleme akışını çağırmadan yön eklemeye çalışır.

## Sık Sorulan Sorular

### Neden Kendi Space'imi Çoğaltmalıyım?

Herkese açık Space'ler birçok kullanıcı tarafından paylaşılır. Kendi çoğaltılmış Space'iniz çoğunlukla yalnızca ImgBed siteniz tarafından kullanılır; bu nedenle genellikle daha hızlı ve daha güvenilirdir.

### Space Sürekli Başlatılıyor

İlk oluşturma sonrasında veya uzun süre boşta kaldıktan sonra Space'in başlaması zaman alabilir.

Önce Space sayfanızı açın. Bir görseli normal şekilde tanıyabildiğinde ImgBed'e dönüp etiketlemeyi başlatın.

### Space URL'sini Nasıl Kopyalarım?

Hugging Face Space sayfanızı açın ve tarayıcı adresini kopyalayın.

Örnekler:

```text
https://huggingface.co/spaces/lintonxue00/wd-tagger
https://huggingface.co/spaces/SmilingWolf/wd-tagger
```

### Birden Fazla Space Ekleyebilir Miyim?

Evet. Her satıra bir Space URL'si girin.

Birden fazla Space görselleri birlikte işler ve çok sayıda görseliniz olduğunda kullanışlıdır.

### Etiketler Neden İngilizce?

SmilingWolf modelleri İngilizce etiketler üretir. Bu beklenen bir durumdur.

Etiketler esas olarak arama, filtreleme, rastgele görsel API'si ve herkese açık galeri filtreleri için kullanılır.

### Derecelendirme Etiketleri Ne İçin Kullanılır?

Derecelendirme sonuçları, Güvenlik Ayarları'ndaki erişim modu ile birlikte çalışır.

Örneğin ziyaretçi erişimi yaş derecelendirmesiyle sınırlandığında, herkese açık gezinme ve rastgele görsel özellikleri görselleri bu kurallara göre filtreler.

## Hızlı Akış

```text
Sign in to Hugging Face
-> Open SmilingWolf/wd-tagger
-> Duplicate this Space
-> Wait for the Space to build
-> Copy your Space URL
-> Fill Space URLs in ImgBed
-> Choose model and thresholds
-> Start tagging or enable auto-tag on upload
```
