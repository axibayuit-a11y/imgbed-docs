# API Token ile Yapılandırma Yönetimi

API Token yapılandırma yönetimi otomasyon betikleri, operasyon araçları veya üçüncü taraf kontrol panelleri için tasarlanmıştır. Yönetim sayfasını açmadan yükleme kanalı yapılandırmasını, güvenlik ayarlarını, sayfa ayarlarını, diğer ayarları ve hafif federasyon ilişkilerini okuyup güncelleyebilir.

Yönetim izni yalnızca betiklere uygun hafif işlemleri açar. Tarayıcı onayı, ön yüz toplu işleri veya federasyon dizini temizliği gerektiren ağır işlemler yine tarayıcıdaki yönetim panelinde yapılmalıdır.

![API Token düzenleme](../../image/Safety/apitoken/编辑管理权限api.png)

## Başlamadan Önce

Yönetim panelini açın, ardından şuraya gidin:

```text
System Settings -> Security Settings -> API Token
```

API Token oluştururken veya düzenlerken yönetim izni olduğundan emin olun. Yönetim izni site yapılandırmasını değiştirebilir; bu yüzden yalnızca güvenilir betiklere veya güvenilir kullanıcılara verin.

Üç yönetim betiği de yazma işlemleri için varsayılan olarak deneme modunu kullanır. Önizlemeyi inceledikten sonra değişiklikleri gerçekten kaydetmek için `--apply` ekleyin.

Token değerini bir ortam değişkenine de koyabilirsiniz:

```powershell
$env:IMGBED_API_TOKEN="your API Token"
```

## Yönetim Betiklerini İndirme

Dokümantasyon paketi üç Node.js betiği sağlar:

| Betik | Amaç |
| --- | --- |
| <a href="/tools/imgbed-token-upload-settings.mjs" download>Yükleme ayarları yönetim betiği</a> | Yükleme kanallarını, alt kanalları ve yük dengelemeyi yönetir. |
| <a href="/tools/imgbed-token-site-settings.mjs" download>Site ayarları yönetim betiği</a> | Güvenlik ayarlarını, sayfa ayarlarını ve diğer ayarları yönetir. |
| <a href="/tools/imgbed-token-federation.mjs" download>Federasyon ilişkisi yönetim betiği</a> | Hafif federasyon ilişkisi işlemlerini, istekleri ve mesajları yönetir. |

Node.js 18 veya üzeri gerekir.

### Ortak Parametreler

| Parametre | Gerekli | Açıklama |
| --- | --- | --- |
| `--base-url <url>` | Evet | ImgBed site URL'si, örneğin `https://image.ai6.me`. |
| `--token <token>` | Evet | API Token. `IMGBED_API_TOKEN` ortam değişkenini de kullanabilirsiniz. |
| `--retries <n>` | Hayır | Geçici hata yeniden deneme sayısı. Varsayılan `3`. |
| `--timeout-ms <n>` | Hayır | İstek zaman aşımı. Varsayılan `180000`. |
| `--output <pretty\|json>` | Hayır | Çıktı biçimi. Varsayılan `pretty`; programlar için `json` kullanın. |
| `--save-response <path>` | Hayır | Son JSON sonucunu dosyaya kaydeder. |
| `--apply` | Hayır | Yazmaları gerçekten uygular. Yoksa yazma işlemleri yalnızca önizleme yapar. |
| `-h` / `--help` | Hayır | Betik yardımını gösterir. |

## Yükleme Ayarları

Yükleme ayarları betiği yükleme alt kanallarını listeler, okur, oluşturur, düzenler ve siler. Ayrıca bir üst düzey yükleme kanalı için yük dengelemeyi açıp kapatabilir.

```powershell
node imgbed-token-upload-settings.mjs --base-url "https://your-domain" --token "your API Token" --list
```

### Yükleme Ayarları Parametreleri

| Parametre | Açıklama |
| --- | --- |
| `--list` | Yükleme ayarı gruplarını listeler. |
| `--get` | Üst düzey kanalı veya onun altındaki bir alt kanalı okur. |
| `--upsert` | Bir alt kanal oluşturur veya düzenler. `--apply` ayarlanmadıkça deneme modudur. |
| `--delete` | Bir alt kanalı siler. `--apply` ayarlanmadıkça deneme modudur. |
| `--load-balance <true\|false>` | Üst düzey kanal için yük dengelemeyi açar veya kapatır. |
| `--channel <key>` | Üst düzey yükleme kanalı, örneğin `s3`, `github` veya `telegram`. |
| `--channel-name <name>` | Alt kanal veya hesap adı. |
| `--set key=value` | Bir alanı ayarlar. Tekrarlanabilir. Noktalı yollar desteklenir. |
| `--patch-json <path>` | Bir JSON dosyasındaki alanları birleştirir. |
| `--apply` | Yazma sonucunu kaydeder. |

### Kanal Key Değerleri

| Kanal Key | Kanal |
| --- | --- |
| `telegram` / `tg` | Telegram |
| `discord` / `dc` | Discord |
| `cfr2` / `r2` | Cloudflare R2 |
| `s3` | S3 |
| `webdav` / `wd` | WebDAV depolama kanalı |
| `github` / `gh` | GitHub Releases |
| `gitlab` / `gl` | GitLab Packages |
| `huggingface` / `hf` | Hugging Face |
| `onedrive` / `od` | OneDrive |
| `googledrive` / `google` / `gd` | Google Drive |
| `dropbox` / `db` | Dropbox |
| `yandex` / `yx` | Yandex Disk |
| `pcloud` / `pd` | pCloud |

### Yükleme Ayarları Örnekleri

Tüm yükleme ayarlarını listeleme:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --list
```

S3 kanal yapılandırmasını okuma:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get `
  --channel s3
```

Bir S3 alt kanalını okuma:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get `
  --channel s3 `
  --channel-name "backup-s3"
```

Bir alt kanal oluşturma veya düzenleme. Önce `--apply` olmadan çalıştırıp önizleyin:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --upsert `
  --channel webdav `
  --channel-name "backup-webdav" `
  --set enabled=false `
  --set remark="backup test"
```

Onayladıktan sonra kaydedin:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --upsert `
  --channel webdav `
  --channel-name "backup-webdav" `
  --set enabled=false `
  --set remark="backup test" `
  --apply
```

Bir alt kanalı silme:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --delete `
  --channel webdav `
  --channel-name "backup-webdav" `
  --apply
```

S3 yük dengelemeyi etkinleştirme:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --load-balance true `
  --channel s3 `
  --apply
```

Karmaşık alanlar için bir JSON dosyası yazıp `--patch-json` ile verin:

```json
{
  "enabled": true,
  "remark": "primary account"
}
```

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --upsert `
  --channel s3 `
  --channel-name "primary-s3" `
  --patch-json ".\s3-channel.json" `
  --apply
```

## Site Ayarları

Site ayarları betiği üç yapılandırma alanını yönetir:

| Alan | Parametre | Açıklama |
| --- | --- | --- |
| Güvenlik ayarları | `security` | Kullanıcı kimlik doğrulaması, yönetici kimlik doğrulaması, giriş cihazları, API Token, görsel moderasyonu, kullanıcı sınırları, WebDAV ve daha fazlası. |
| Sayfa ayarları | `page` | Genel sayfa, kullanıcı tarafı sayfası, yönetici sayfası ve ilgili görünüm ayarları. |
| Diğer ayarlar | `others` | Rastgele görsel API, herkese açık gezinme, yerel federasyon düğümü, otomatik etiketleme, IP coğrafi konumu, yedek kanal, OCR ve daha fazlası. |

Düzenlenebilir alanları, bölümleri ve alanları görmek için önce `--list-sections` kullanın:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --list-sections
```

### Site Ayarları Parametreleri

| Parametre | Açıklama |
| --- | --- |
| `--list-sections` | Düzenlenebilir alanları, bölümleri ve alanları listeler. |
| `--get` | Bir ayar bölümünü okur. |
| `--area <security\|page\|others>` | Yapılandırma alanını seçer. |
| `--section <name>` | Bölümü seçer. `--list-sections` tarafından gösterilen adları kullanın. |
| `--set key=value` | Bir alanı ayarlar. Tekrarlanabilir. |
| `--apply` | Yazma sonucunu kaydeder. |

`page` alanında `--set`, örneğin `starsEffect=true` gibi sayfa yapılandırma öğesi ID'lerini kullanır. `security` ve `others` için `--set`, bu bölümdeki alan adını kullanır; örneğin `email=admin@example.com`.

### Site Ayarları Örnekleri

Sistem güncelleme bildirimi ayarlarını okuma:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get `
  --area security `
  --section systemUpdate
```

Sistem güncelleme bildirimi e-postasını değiştirme. Önce `--apply` olmadan çalıştırıp önizleyin:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --area security `
  --section systemUpdate `
  --set email="admin@example.com"
```

Onayladıktan sonra kaydedin:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --area security `
  --section systemUpdate `
  --set email="admin@example.com" `
  --apply
```

Yönetici sayfasındaki yıldız efektini değiştirme:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --area page `
  --section adminSettings `
  --set starsEffect=true `
  --apply
```

IP coğrafi konum dilini değiştirme:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --area others `
  --section ipGeolocation `
  --set language="en" `
  --apply
```

Yerel federasyon düğümü ayarları etkinlik durumu, eşitleme dizini ve davet kodu gibi normal alanları okuyup güncelleyebilir. Alan adı onayı API Token üzerinden yapılmaz. Yönetim paneli yerel düğüm alan adının geçerli erişim alan adından farklı olduğunu bildirirse onayı tarayıcıdaki yönetim panelinde tamamlayın.

## Federasyon İlişkileri

Federasyon betiği yerel düğüm durumunu, giden düğümleri, gelen düğümleri, mesajları, katılma isteklerini, kayıtsız ilişki için yeniden başvuruları, onayları, reddetmeleri ve dizin temizliği gerektirmeyen hafif ilişki işlemlerini yönetir.

Dizin güncelleme, federasyon dizini silme ve alan adı değişikliği onayı tam tarayıcı iş akışına bağlıdır. Betik bu ağır işlemleri yapmaz.

### Hafif ve Ağır Federasyon İşlemleri

| İşlem | Betik Desteği | Açıklama |
| --- | --- | --- |
| Yerel düğüm durumunu ve ilişki listesini görme | Desteklenir | Yalnızca ilişki kayıtlarını okur. |
| Mesajları okuma ve mesaj gönderme | Desteklenir | İlişki mesajlarını okur veya yazar. |
| Başka bir düğüme katılma isteği gönderme | Desteklenir | İstek göndermek için davet bağlantısını kullanır. |
| Kayıtsız ilişki için yeniden başvurma | Desteklenir | Yalnızca `lastResult=none` olan giden kartlar için; 6 karakterlik davet kodu gerekir. |
| Giden bekleyen isteği iptal etme | Desteklenir | Yalnızca bekleyen isteği iptal eder. |
| Gelen isteği kabul etme veya reddetme | Desteklenir | Sizin düğümünüze katılan düğümlerden gelen istekleri işler. |
| Kabul edilmiş gelen ilişkiyi kaldırma | Desteklenir | Gelen ilişki kaydını günceller ve karşı tarafa bildirir. |
| Sonlanmış gelen kaydı silme | Desteklenir | Yalnızca sonlanmış gelen ilişki kaydını siler. |
| Kabul edilmiş giden aboneliği iptal etme | Yalnızca tarayıcı | Tarayıcının toplu çalıştırdığı yerel federasyon dizini silme gerekir. |
| Sonlanmış giden kaydı silme | Yalnızca tarayıcı | Önce federasyon dizini temizliği gerektirebilir. |
| Alan adı değişikliğini onaylama veya iptal etme | Yalnızca tarayıcı | Geçerli alan adı onayı ve alan adı değişikliği dizin işlemleri gerekir. |
| Dizinleri yayımlama, çekme veya toplu silme | Yalnızca tarayıcı | Bunlar ön yüz toplu işleridir. |

### Federasyon Parametreleri

| Parametre | Açıklama |
| --- | --- |
| `--status` | Yerel federasyon düğümü durumunu, giden düğümleri ve gelen düğümleri gösterir. |
| `--list` | Federasyon ilişkilerini listeler. |
| `--chat` | Bir ilişki için önbelleğe alınmış mesajları okur. |
| `--send-message` | Kurulmuş bir ilişkiye mesaj gönderir. |
| `--join` | Davet bağlantısı üzerinden başka bir düğüme katılma isteği gönderir. |
| `--reapply` | Kayıtsız ilişki için yeniden başvurur. 6 karakterlik davet kodu gerekir. |
| `--accept` | Gelen isteği kabul eder. |
| `--deny` | Gelen isteği reddeder. |
| `--cancel` | Giden bekleyen isteği iptal eder veya kabul edilmiş gelen ilişkiyi kaldırır. |
| `--delete` | Sonlanmış gelen ilişki kaydını siler. |
| `--direction <outgoing\|incoming\|all>` | İlişki yönü. `outgoing` katıldığınız düğümleri; `incoming` sizin düğümünüze katılan düğümleri ifade eder. |
| `--domain <url>` | İlişki düğümünün alan adı. |
| `--invite-link <url>` | Karşı düğümden gelen davet bağlantısı. |
| `--invite-code <code>` | Yeniden başvuru için kullanılan 6 karakterlik davet kodu. |
| `--text <message>` | Mesaj metni. |
| `--apply` | Yazma sonucunu kaydeder. |

### Federasyon Örnekleri

Yerel düğüm durumunu ve iki ilişki listesini görme:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --status
```

Yalnızca giden düğümleri listeleme:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --list `
  --direction outgoing
```

Yalnızca gelen düğümleri listeleme:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --list `
  --direction incoming
```

Başka bir düğüme katılma isteği gönderme. Önce `--apply` olmadan çalıştırıp önizleyin:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --join `
  --invite-link "https://peer-domain/federation/invite/abcdef"
```

Onayladıktan sonra kaydedin:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --join `
  --invite-link "https://peer-domain/federation/invite/abcdef" `
  --apply
```

Kayıtsız ilişki için yeniden başvurma:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --reapply `
  --domain "https://peer-domain" `
  --invite-code "abc123" `
  --apply
```

Gelen isteği kabul etme:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --accept `
  --domain "https://peer-domain" `
  --apply
```

Gelen isteği reddetme:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --deny `
  --domain "https://peer-domain" `
  --apply
```

Kurulmuş bir ilişkiye mesaj gönderme:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --send-message `
  --direction outgoing `
  --domain "https://peer-domain" `
  --text "Hello, this is a test message." `
  --apply
```

Giden bekleyen isteği iptal etme:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --cancel `
  --direction outgoing `
  --domain "https://peer-domain" `
  --apply
```

Kabul edilmiş gelen ilişkiyi kaldırma:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --cancel `
  --direction incoming `
  --domain "https://peer-domain" `
  --apply
```

Sonlanmış gelen kaydı silme:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --delete `
  --direction incoming `
  --domain "https://peer-domain" `
  --apply
```

Kabul edilmiş giden aboneliği iptal etme ve giden kayıt silme işlemleri tarayıcıdaki yönetim panelinde yapılmalıdır; çünkü bu işlemler önce yerel federasyon dizinini temizlemeyi gerektirebilir.

### Alan Adı Uyuşmazlığı

Yerel düğüm alan adı ile ilişkideki bekleyen alan adı eşleşmezse betik `currentDomain` ve `pendingDomain` içeren bir hata bildirir. Bunu tarayıcıdaki yönetim panelinde ele alın; çünkü alan adı değişiklikleri giden dizin temizliği ve onayını da içerir.

Katılma isteği `FEDERATION_NODE_DOMAIN_MISMATCH` döndürürse davet bağlantısında kullanılan alan adı karşı düğümün kayıtlı yerel alan adıyla eşleşmiyor demektir. Yanıtta `currentOrigin` ve `detectedOrigin` bulunur. Karşı tarafın geçerli onaylanmış alan adını kullanın veya karşı taraftan önce kendi tarayıcı yönetim panelinde alan adını onaylamasını isteyin.

## FAQ

### Değişikliğim neden etkili olmadı?

Yazma komutları varsayılan olarak önizleme modunda çalışır. Önizlemeyi inceledikten sonra değişikliği gerçekten kaydetmek için `--apply` ekleyin.

### Hangi alanların değiştirilebileceğini nasıl anlarım?

Yükleme ayarları için mevcut alt kanal yapısını incelemek üzere `--get` kullanın. Güvenlik ayarları, sayfa ayarları ve diğer ayarlar için betiğin düzenleyebileceği alanları, bölümleri ve alanları görmek üzere `--list-sections` kullanın.

### Sonucu Başka Bir Programda Kullanmak İstiyorum

`--output json` kullanın veya `--save-response result.json` ekleyin. Programınız kaydedilen JSON dosyasını doğrudan okuyabilir.

