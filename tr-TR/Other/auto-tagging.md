# Otomatik Etiketleme

Auto tagging şu bölümden yapılandırılır:

```text
System Settings -> Other Settings -> Auto Tagging
```

Bu özellik görsel etiketlerini otomatik üretir. Etiketler arama, random image filtreleme, public gallery filtreleme ve yaş derecelendirmesine göre erişim kontrolü için kullanışlıdır.

## Auto Tagging Neler Yapabilir?

| Özellik | Açıklama |
| --- | --- |
| Content tags üretme | Kişiler, sahneler, nesneler, sanat stili ve benzeri görsel içerik için etiket ekler. |
| Character tags üretme | Anime görselleri ve illüstrasyonlar için kullanışlıdır. |
| Orientation tags ekleme | `landscape`, `portrait` veya `square` ekler. |
| Image rating ekleme | General, sensitive, questionable veya explicit içerik için `G/S/Q/E` derecelendirme sonuçlarını kaydeder. |
| Auto-tag on upload | Yeni yüklenen görseller otomatik olarak etiketleme akışına girer. |
| Batch tagging | Tüm klasörlerdeki veya seçili klasörlerdeki eski görsellere etiket ekler. |

## Önce Gerekenler

En az bir erişilebilir Hugging Face Space URL hazırlayın.

Önerilen yöntem, SmilingWolf'un `wd-tagger` Space'ini kendi Hugging Face hesabınıza kopyalamaktır:

```text
https://huggingface.co/spaces/SmilingWolf/wd-tagger
```

Geçici test için public Space kullanabilirsiniz; ancak public Spaces birçok kullanıcı tarafından paylaşılır, kuyruğa girebilir, yavaşlayabilir veya geçici olarak kullanılamaz hale gelebilir. Kendi hesabınızdaki kopya, uzun vadeli auto tagging için daha kararlıdır.

## SmilingWolf Space'ini Kopyalama

1. Hugging Face'e giriş yapın.
2. `https://huggingface.co/spaces/SmilingWolf/wd-tagger` adresini açın.

![SmilingWolf public Space](../../image/other/微笑狼的公开仓库.png)

3. Sağ üst köşedeki üç nokta menüsüne tıklayın.
4. `Duplicate this Space` seçin.
5. Varsayılan Space adını koruyun veya `wd-tagger` gibi kendi adınızı seçin.
6. Visibility değerini `Public` yapın. Public Spaces ImgBed tarafından daha kolay çağrılır.
7. Başlangıçta varsayılan ücretsiz hardware ile devam edin. Kuyruk belirginleşirse daha sonra yükseltin.
8. Space'i oluşturun ve build tamamlanana kadar bekleyin.

Build tamamlandıktan sonra Space sayfanızı açın. URL genellikle şu şekildedir:

```text
https://huggingface.co/spaces/your-name/wd-tagger
```

Tarayıcı URL'sini kopyalayıp ImgBed'deki `Space URLs` alanına yapıştırın.

## Birden Fazla Space URL Girme

Her satıra bir Space URL girin.

| Değer | Açıklama |
| --- | --- |
| `https://huggingface.co/spaces/SmilingWolf/wd-tagger` | SmilingWolf public Space. Geçici test için iyidir. |
| `https://huggingface.co/spaces/lintonxue00/wd-tagger` | Kopyalanmış Space sayfa URL'si. |
| `https://huggingface.co/spaces/your-name/wd-tagger` | Kendi kopyaladığınız Space sayfa URL'si. |

Birden fazla URL girebilirsiniz. ImgBed birden fazla Space'i birlikte kullanır; bu da hızı artırabilir.

Bir Space geçici olarak kullanılamazsa diğerleri işlemeye devam edebilir.

## Ayarlar

| Seçenek | Öneri |
| --- | --- |
| `Space URLs` | Hazırladığınız Space URL'lerini girin. En az bir tane kullanın. |
| Target folder | Tüm klasörler için boş bırakın. Yalnızca belirli bir dizini işlemek istiyorsanız klasör seçin. |
| Recognition model | Varsayılan olarak `wd-swinv2-tagger-v3` bırakın. |
| General tag threshold | Varsayılan değer çoğu görsel için uygundur. Düşük değer daha çok etiket, yüksek değer daha az etiket üretir. |
| Character tag threshold | Varsayılan değer temkinlidir ve hatalı character tags riskini azaltır. |
| `MCut` automatic threshold | Başlangıçta kapalı bırakın. Etiket sayısına model karar versin istiyorsanız açın. |
| Auto-tag on upload | Yeni yüklenen görseller otomatik etiketlenecekse açın. |
| Start tagging | Eski görseller için elle batch tagging başlatır. |

## Önerilen Başlangıç Değerleri

| Seçenek | Önerilen Değer |
| --- | --- |
| Recognition model | `wd-swinv2-tagger-v3` |
| General tag threshold | `0.35` |
| Character tag threshold | `0.85` |
| `MCut` | Başlangıçta kapalı |
| Auto-tag on upload | Gerekirse etkin |

Etiket sayısı fazla gelirse general threshold değerini biraz yükseltin.

Etiket sayısı az gelirse general threshold değerini biraz düşürün.

## Batch Tagging

1. `Space URLs` alanını doldurun.
2. Target folder seçin.
3. Start tagging düğmesine tıklayın.
4. İlerleme tamamlanana kadar bekleyin.

Target folder boşsa ImgBed tüm klasörleri işler.

Batch tagging eski görseller için uygundur. Yeni görseller için auto-tag on upload etkinleştirin; böylece her seferinde elle çalıştırmanız gerekmez.

## Auto-Tag on Upload

Auto-tag on upload etkinleştirildikten sonra yeni yüklenen görseller yapılandırılmış `Space URLs` adreslerini otomatik çağırır.

Uzun vadeli kullanım için uygundur.

Space kuyruğa girerse yükleme işlemi önce tamamlanabilir; etiketleme daha sonra devam eder.

## Hangi Görseller İşlenir?

Auto tagging ağırlıklı olarak görsel dosyalarını işler.

Zaten tam tags, orientation, rating, width ve height bilgilerine sahip görseller gereksiz Space çağrısını önlemek için atlanır.

ImgBed mümkün olduğunda yalnızca eksik bilgiyi tamamlar. Örneğin yalnızca orientation eksikse tam content tag flow çağırmadan orientation eklemeye çalışır.

## FAQ

### Neden Kendi Space'imi Kopyalamalıyım?

Public Spaces birçok kullanıcı tarafından paylaşılır. Kendi kopyaladığınız Space çoğunlukla ImgBed siteniz tarafından kullanılır, bu yüzden genellikle daha hızlı ve güvenilirdir.

### Space Sürekli Başlıyor

İlk oluşturma sonrasında veya uzun süre boşta kaldıktan sonra Space'in başlaması zaman alabilir.

Önce Space sayfanızı açın. Bir görseli normal şekilde tanıyabildiğinde ImgBed'e dönüp etiketlemeyi başlatın.

### Space URL Nasıl Kopyalanır?

Hugging Face Space sayfanızı açın ve tarayıcı adresini kopyalayın.

```text
https://huggingface.co/spaces/lintonxue00/wd-tagger
https://huggingface.co/spaces/SmilingWolf/wd-tagger
```

### Birden Fazla Space Ekleyebilir miyim?

Evet. Her satıra bir Space URL girin.

Birden fazla Space görselleri birlikte işler ve çok sayıda görseliniz varsa kullanışlıdır.

### Etiketler Neden İngilizce?

SmilingWolf modelleri İngilizce etiket üretir. Bu beklenen davranıştır.

Etiketler ağırlıklı olarak arama, filtreleme, random image API ve public gallery filtreleri için kullanılır.

### Rating Tags Ne İçin Kullanılır?

Rating sonuçları Security Settings içindeki access mode ile birlikte çalışır.

Örneğin ziyaretçi erişimi yaş derecelendirmesiyle sınırlıysa public browsing ve random image özellikleri görselleri bu kurallara göre filtreler.

## Kısa Akış

```text
Hugging Face'e giriş yap
-> SmilingWolf/wd-tagger aç
-> Duplicate this Space
-> Space build tamamlanana kadar bekle
-> Space URL'ni kopyala
-> ImgBed'de Space URLs alanını doldur
-> Model ve thresholds seç
-> Tagging başlat veya auto-tag on upload etkinleştir
```
