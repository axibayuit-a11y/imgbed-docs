# Sayfa Ayarları

Sayfa ayarları; site görünümünü, yükleme sayfası varsayılanlarını, arka plan görsellerini ve yönetim panelinin görünümünü kontrol eder.

## Genel Ayarlar

| Seçenek | Amaç |
| --- | --- |
| Site başlığı | Tarayıcı sekmesinde gösterilen başlık. |
| Site simgesi | Tarayıcı sekmesinde gösterilen küçük simge. |
| ImgBed adı | Genel arayüz sayfalarında gösterilen ad. |
| ImgBed logosu | Genel arayüz sayfalarında gösterilen logo görseli. |
| Logo bağlantısı | Logo veya avatar tıklandığında açılan URL. |
| Arka plan değiştirme aralığı | Birden fazla arka planın dönüş aralığı, milisaniye cinsinden. `60000`, 60 saniye demektir. |
| Arka plan opaklığı | Arka plan görselinin `0` ile `1` arasındaki opaklığı. Daha düşük değerler görseli daha açık gösterir. |
| Varsayılan URL öneki | Görsel bağlantıları oluşturulurken kullanılan önek. Boşsa geçerli site alan adı kullanılır. |

## İstemci Ayarları

| Seçenek | Amaç |
| --- | --- |
| Duyuru | Yükleme sayfasının üstünde gösterilen duyuru. HTML desteklenir. |
| Varsayılan yükleme kanalı | Yükleme sayfasında varsayılan olarak seçilen yükleme kanalı. Smart Dispatch de seçilebilir. |
| Varsayılan yükleme dizini | Varsayılan yükleme dizini, örneğin `/user/`. Boş değer veya `/` kök dizin anlamına gelir. |
| Varsayılan adlandırma yöntemi | Yüklemeden sonra dosya adını üretmek için kullanılan varsayılan strateji. Aşağıya bakın. |
| Varsayılan olarak WebP'ye dönüştür | Görselleri yüklemeden önce WebP'ye dönüştürür. |
| Varsayılan olarak sıkıştırmayı etkinleştir | Görselleri yüklemeden önce tarayıcıda yerel olarak sıkıştırır. |
| Varsayılan sıkıştırma eşiği | Görsel bu boyutu aştığında otomatik olarak sıkıştırır, MB cinsinden. |
| Varsayılan hedef boyut | Sıkıştırmadan sonra hedef dosya boyutu, MB cinsinden. |
| Giriş sayfası arka planı | Kullanıcı giriş sayfası için arka plan görseli. |
| Yükleme sayfası arka planı | Yükleme sayfası için arka plan görseli. |
| Altbilgi portal bağlantısı | Altbilgi portal düğmesinin açtığı URL. |
| Altbilgiyi gizle | Etkin olduğunda genel arayüz altbilgisini gizler. |

## Yönetim Ayarları

| Seçenek | Amaç |
| --- | --- |
| Yönetici girişi arka planı | Yönetici giriş sayfası için arka plan görseli. |
| Yönetim arka planı | Yönetim sayfaları için arka plan görseli. Tek bir görsel URL'si veya birden fazla URL kullanılabilir. |
| Görsel yükleme modu | Yönetim dosya listesindeki önizleme yükleme modu. Özgün görsel modu özgün görselleri yükler. Akıllı yükleme, herkese açık görseller için küçük resimleri ve kısıtlı görseller için özgün görselleri tercih eder. |
| Küçük resim kaynağı | Küçük resim oluşturmak için kullanılan servis: wsrv.nl, Cloudflare Image Resizing veya WordPress Photon. Cloudflare Image Resizing seçilmeden önce Cloudflare'da etkinleştirilmiş olmalıdır. |
| Live2D widget'ı | Yönetim panelinde Live2D karakteri gösterir. |
| Tıklamada havai fişek efekti | Sayfaya tıklanınca havai fişek efekti gösterir. |
| İmleç yıldız izi | Fare hareket ederken yıldız izi gösterir. |

## Arka Plan Görseli Formatları

Giriş sayfası arka planı, yükleme sayfası arka planı ve yönetici girişi arka planı şu formatları destekler:

| Değer | Etki |
| --- | --- |
| `bing` | Bing duvar kağıdı döngüsünü kullanır. |
| `["https://example.com/1.jpg","https://example.com/2.jpg"]` | Birden fazla görseli döngüye alır. |
| `["https://example.com/1.jpg"]` | Tek bir arka plan görseli kullanır. |
| `["https://your-domain.com/random?..."]` | Rastgele görsel API bağlantısı kullanır. Kendi rastgele görsel API'nizi Diğer Ayarlar içinde yapılandırabilir, oluşturulan rastgele görsel bağlantısını buraya tek arka plan girdisi olarak yapıştırabilirsiniz. |

Yönetim arka planı görsel URL'lerini destekler. Birden fazla URL, sayfadaki ipucunda belirtildiği gibi İngilizce virgüllerle ayrılabilir. Boşsa varsayılan arka plan kullanılır.

## Varsayılan Adlandırma Yöntemi

| Yöntem | Sonuç |
| --- | --- |
| Varsayılan | Zamana dayalı rastgele önek + özgün dosya adı, örneğin `1760000000000_cat.png`. |
| Yalnızca önek | Yalnızca zamana dayalı rastgele önek ve uzantı, örneğin `1760000000000.png`. |
| Yalnızca özgün ad | Özgün dosya adını korur, örneğin `cat.png`. Aynı ad varsa ImgBed `(1)`, `(2)` ve devamını ekler. |
| Kısa bağlantı | Uzantıyla birlikte 8 karakterlik kısa ID kullanır, örneğin `a1b2c3d4.png`. |
