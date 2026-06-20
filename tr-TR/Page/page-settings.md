# Sayfa Ayarları

Page settings; site görünümünü, yükleme sayfası varsayılanlarını, arka plan görsellerini ve yönetim paneli görünümünü kontrol eder.

## Global Settings

| Seçenek | Amaç |
| --- | --- |
| Site title | Tarayıcı sekmesinde gösterilen başlık. |
| Site icon | Tarayıcı sekmesinde gösterilen küçük simge. |
| ImgBed name | Frontend pages üzerinde gösterilen ad. |
| ImgBed logo | Frontend pages üzerinde gösterilen logo görseli. |
| Logo link | Logo veya avatar tıklandığında açılan URL. |
| Background switch interval | Birden fazla arka plan için milisaniye cinsinden dönüş aralığı. `60000`, 60 saniye demektir. |
| Background opacity | Arka plan görseli opaklığı, `0` ile `1` arası. Daha düşük değerler daha açık görünür. |
| Default URL prefix | Görsel bağlantıları oluşturulurken kullanılan prefix. Boşsa geçerli site alan adı kullanılır. |

## Client Settings

| Seçenek | Amaç |
| --- | --- |
| Announcement | Yükleme sayfasının üstünde gösterilen duyuru. HTML desteklenir. |
| Default upload channel | Yükleme sayfasında varsayılan seçili upload channel. Smart Dispatch de seçilebilir. |
| Default upload directory | Varsayılan yükleme dizini, örneğin `/user/`. Boş veya `/` root anlamına gelir. |
| Default naming method | Yükleme sonrası varsayılan dosya adı üretme stratejisi. Aşağıya bakın. |
| Convert to WebP by default | Görselleri yüklemeden önce WebP'ye dönüştürür. |
| Enable compression by default | Görselleri yüklemeden önce tarayıcıda yerel olarak sıkıştırır. |
| Default compression threshold | Görsel bu boyutu MB cinsinden aşarsa otomatik sıkıştırır. |
| Default target size | Sıkıştırma sonrası hedef dosya boyutu, MB cinsinden. |
| Login page background | Kullanıcı giriş sayfası arka plan görseli. |
| Upload page background | Yükleme sayfası arka plan görseli. |
| Footer portal link | Footer portal düğmesinin açtığı URL. |
| Hide footer | Etkin olduğunda frontend footer gizlenir. |

## Admin Settings

| Seçenek | Amaç |
| --- | --- |
| Admin login background | Yönetici giriş sayfası arka plan görseli. |
| Admin background | Yönetim sayfaları arka plan görseli. Tek image URL veya birden çok URL kullanılabilir. |
| Image loading mode | Yönetim dosya listesindeki preview yükleme modu. Original özgün görselleri yükler. Smart loading public images için thumbnails, restricted images için originals tercih eder. |
| Thumbnail source | Thumbnail oluşturma servisi: wsrv.nl, Cloudflare Image Resizing veya WordPress Photon. Cloudflare Image Resizing seçmeden önce Cloudflare'da etkin olmalıdır. |
| Live2D widget | Yönetim panelinde Live2D karakter gösterir. |
| Firework click effect | Sayfaya tıklanınca havai fişek efekti gösterir. |
| Star cursor trail | Fare hareket ederken yıldız izi gösterir. |

## Arka Plan Görseli Formatları

Login page background, upload page background ve admin login background şu formatları destekler:

| Değer | Etki |
| --- | --- |
| `bing` | Bing duvar kağıdı rotasyonunu kullanır. |
| `["https://example.com/1.jpg","https://example.com/2.jpg"]` | Birden fazla görseli döndürür. |
| `["https://example.com/1.jpg"]` | Tek arka plan görseli kullanır. |
| `["https://your-domain.com/random?..."]` | Random image API link kullanır. Other Settings içinde kendi Random Image API'nizi yapılandırıp üretilen random image link değerini tek arka plan girdisi olarak buraya yapıştırabilirsiniz. |

Admin background image URLs destekler. Birden fazla URL, sayfadaki ipucunda belirtildiği gibi İngilizce virgülle ayrılabilir. Boşsa default background kullanılır.

## Default Naming Method

| Method | Result |
| --- | --- |
| Default | Time-random prefix + original filename, örneğin `1760000000000_cat.png`. |
| Prefix only | Yalnızca time-random prefix ve extension, örneğin `1760000000000.png`. |
| Original name only | Original filename korunur, örneğin `cat.png`. Aynı ad varsa ImgBed `(1)`, `(2)` ve devamını ekler. |
| Short link | 8 karakterlik short ID ve extension kullanır, örneğin `a1b2c3d4.png`. |
