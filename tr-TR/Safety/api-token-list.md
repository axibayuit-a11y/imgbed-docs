# API Token ile listeleme ve filtreleme

API Token ile listeleme betiği, ImgBed verilerini okuması gereken betikler, otomasyon işleri ve üçüncü taraf programlar için uygundur. Yalnızca `list` iznini kullanır; dosya yüklemez, dosya silmez, yapılandırmayı değiştirmez ve herhangi bir IP için yüklemeyi engellemez ya da izin vermez.

Başlıca kullanım alanları:

| İşlev | Açıklama |
| --- | --- |
| Dosya yönetimi listesi | Yönetim panelindeki dosya listesini okur ve dosya yönetimindeki gelişmiş filtre parametrelerini destekler |
| Kullanıcı yönetimi listesi | Kullanıcı/IP yükleme istatistiklerini okur ve kullanıcı yönetimindeki filtre parametrelerini destekler |
| Yükleme kanalı listesi | Hassas bilgileri çıkarılmış yükleme kanallarını, alt kanalları, kapasiteyi ve yük dengeleme bilgilerini okur |
| Klasör istatistik tablosu | Klasör istatistiklerini ve klasör sayfalama bilgilerini okur |

## Hazırlık

Yönetim panelinde şurayı açın:

```text
System Settings -> Security Settings -> API Token
```

API Token oluştururken veya düzenlerken bu Token için listeleme izninin açık olduğundan emin olun. Bu betik yalnızca `list` iznine ihtiyaç duyar.

Token ortam değişkenine de konabilir:

```powershell
$env:IMGBED_API_TOKEN="your API Token"
```

## Betiği indirme

| Betik | Kullanım |
| --- | --- |
| <a href="/tools/imgbed-token-list.mjs" download>Listeleme ve filtreleme betiğini indir</a> | Dosya yönetimi listesi, kullanıcı yönetimi listesi, yükleme kanalı listesi, klasör istatistik tablosu |

Node.js 18 veya üzeri gerekir.

## Genel parametreler

| Parametre | Zorunlu | Açıklama |
| --- | --- | --- |
| `--base-url <url>` | Evet | ImgBed site adresi, örnek `https://image.ai6.me` |
| `--token <token>` | Evet | API Token; `IMGBED_API_TOKEN` da kullanılabilir |
| `--retries <n>` | Hayır | Geçici hatalarda tekrar sayısı; varsayılan `3` |
| `--timeout-ms <n>` | Hayır | Tek isteğin zaman aşımı; varsayılan `180000` |
| `--output <pretty\|json>` | Hayır | Çıktı formatı; varsayılan `pretty`. Programlı kullanım için `json` önerilir |
| `--save-response <path>` | Hayır | Nihai sonucu JSON dosyası olarak kaydeder |
| `-h` / `--help` | Hayır | Betik yardımını gösterir |

## Dosya yönetimi listesi

Dosya yönetimindeki dosyaları listeleme:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --count 10
```

JSON çıktısı verme:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --count 10 `
  --output json
```

Geçerli filtre koşullarındaki sayıyı okuma:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --file-summary `
  --dir "photos/2026" `
  --recursive
```

### Dosya yönetimi parametreleri

| Parametre | Açıklama |
| --- | --- |
| `--files` | Dosyaları listeler |
| `--file-summary` | Yalnızca sayı istatistiğini okur |
| `--start <n>` | Sayfalama başlangıç konumu |
| `--count <n>` | Döndürülecek sonuç sayısı |
| `--dir <path>` | Klasörü belirtir |
| `--recursive` | Alt klasörlerdeki dosyaları da ekler |
| `--search <text>` | Anahtar kelimeyle arar |
| `--channel <key>` | Ana yükleme kanalına göre filtreler, örnek `github`, `s3`, `yandex` |
| `--channel-scope <primary\|backup\|all>` | Kanal filtresi kapsamı: ana kanal, yedek kanal veya tümü |
| `--channel-name-groups <value>` | Alt kanal grubu filtresi; sunucu tarafındaki mevcut parametreye aynen iletilir |
| `--list-type <csv>` | Liste türü; sık kullanılan değerler `None,White,Block` |
| `--include-tags <csv>` | Bulunması gereken tag değerleri |
| `--exclude-tags <csv>` | Hariç tutulacak tag değerleri |
| `--time-start <ms>` | Yükleme zamanı başlangıcı, milisaniye zaman damgası |
| `--time-end <ms>` | Yükleme zamanı bitişi, milisaniye zaman damgası |
| `--file-exts <csv>` | Yalnızca belirtilen uzantıları ekler, örnek `jpg,png,pdf` |
| `--exclude-file-exts <csv>` | Belirtilen uzantıları hariç tutar |
| `--file-status-categories <csv>` | Dosya kategorileri: `image,audio,video,document,code,other` |
| `--upload-ip <ip>` | Yükleme IP ön ekine göre filtreler |
| `--age-ratings <csv>` | Yaş dereceleri: `none,all-ages,r12,r16,r18` |
| `--orientation <csv>` | Yön filtresi; sunucu tarafındaki mevcut değerlere aynen iletilir |
| `--read-source <csv>` | Okuma kaynağı filtresi; sunucu tarafındaki mevcut değerlere aynen iletilir |
| `--access-status <normal\|blocked>` | Genel erişim durumu |
| `--min-width <n>` | En küçük genişlik |
| `--max-width <n>` | En büyük genişlik |
| `--min-height <n>` | En küçük yükseklik |
| `--max-height <n>` | En büyük yükseklik |
| `--min-file-size <mb>` | En küçük dosya boyutu; birim sunucu tarafındaki mevcut MB parametresine göre kullanılır |
| `--max-file-size <mb>` | En büyük dosya boyutu; birim sunucu tarafındaki mevcut MB parametresine göre kullanılır |

### Dosya yönetimi örnekleri

PDF arama:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --search "pdf" `
  --file-status-categories "document" `
  --count 20
```

Yükleme IP'sine ve kanala göre filtreleme:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --upload-ip "103.62" `
  --channel yandex `
  --channel-scope primary
```

Tam sonucu kaydetme:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --count 100 `
  --output json `
  --save-response ".\files.json"
```

## Kullanıcı yönetimi listesi

Kullanıcı/IP yükleme istatistiklerini listeleme:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --count 20
```

Belirli bir IP veya konum arama:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --search "43.198.183.56"
```

Belirli bir IP tarafından yüklenen dosya ayrıntılarını görme:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --user-detail `
  --ip "43.198.183.56" `
  --count 20
```

Yüklemesi engellenen IP'leri listeleme:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --blocked-ips
```

### Kullanıcı yönetimi parametreleri

| Parametre | Açıklama |
| --- | --- |
| `--users` | Kullanıcı/IP yükleme istatistiklerini listeler |
| `--user-detail` | Belirli bir IP tarafından yüklenen dosyaların ayrıntılarını gösterir |
| `--blocked-ips` | Yüklemesi engellenen IP'leri listeler |
| `--ip <ip>` | `--user-detail` için zorunludur |
| `--start <n>` | Sayfalama başlangıç konumu |
| `--count <n>` | Döndürülecek sonuç sayısı |
| `--sort <value>` | Sıralama: `timeDesc`, `timeAsc`, `countDesc`, `countAsc`, `totalSizeDesc`, `totalSizeAsc` |
| `--search <text>` | IP veya konum arar |
| `--upload-status <allowed\|blocked>` | Yüklemenin izinli mi engelli mi olduğunu belirtir |
| `--start-time <ms>` | İstatistik dönemi başlangıcı, milisaniye zaman damgası |
| `--end-time <ms>` | İstatistik dönemi bitişi, milisaniye zaman damgası |
| `--file-status-categories <csv>` | Dosya kategorisi filtresi |
| `--age-ratings <csv>` | Yaş derecesi filtresi |
| `--min-file-size <mb>` | En küçük dosya boyutu |
| `--max-file-size <mb>` | En büyük dosya boyutu |
| `--list-type <csv>` | Liste türü; sık kullanılan değerler `None,White,Block` |
| `--access-status <normal\|blocked>` | Genel erişim durumu |

### Kullanıcı yönetimi örnekleri

Yüklemesi engellenen kullanıcıları listeleme:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --upload-status blocked
```

Konum anahtar kelimesiyle arama:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --search "Hong Kong"
```

Yükleme sayısına göre sıralama:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --sort countDesc `
  --count 50
```

## Yükleme kanalı listesi

Hassas bilgileri çıkarılmış yükleme kanalı yapılandırmasını listeleme:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --channels
```

Dönen içerik:

| Alan | Açıklama |
| --- | --- |
| `type` | Ana yükleme kanalı, örnek `github`, `s3`, `yandex` |
| `name` | Alt kanal veya hesap adı |
| `enabled` | Etkin olup olmadığı |
| `load_balance_enabled` | Bu ana kanalda yük dengelemenin açık olup olmadığı |
| `quota_enabled` | Kapasite denetiminin açık olup olmadığı |
| `quota_limit_bytes` | Kapasite sınırı |
| `quota_used_bytes` | Kullanılan kapasite |
| `quota_checked_at` | Kapasite denetim zamanı |
| `tag_json` | Genel depo veya özel depo gibi hassas olmayan tag değerleri |
| `created_at` / `updated_at` | Oluşturma ve güncelleme zamanı |

Bu API gizli anahtarları, yenileme token değerlerini, geçici token değerlerini, parolaları veya diğer hassas yapılandırmaları döndürmez.

## Klasör istatistik tablosu

Klasör istatistiklerini listeleme:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --directories `
  --limit 20
```

Tam klasör yollarını listeleme ve ön ekle arama:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --directories `
  --scope full `
  --search-prefix "test" `
  --include-parents `
  --limit 10
```

### Klasör istatistik parametreleri

| Parametre | Açıklama |
| --- | --- |
| `--directories` | Klasör istatistik tablosunu listeler |
| `--dir <path>` | Listenin başlayacağı klasör |
| `--scope <direct\|full>` | `direct` yalnızca doğrudan alt klasörleri listeler, `full` tam yolları listeler |
| `--search-prefix <path>` | Klasör ön ekine göre arar |
| `--include-parents` | `full` modunda üst klasörleri de ekler |
| `--limit <n>` | Döndürülecek sonuç sayısı; sunucu tarafı en fazla `100` döndürür |
| `--cursor <path>` | Sonraki sayfa imleci |

## Çıktı formatı

Varsayılan `pretty` çıktısı insan tarafından okumaya uygundur:

```powershell
node imgbed-token-list.mjs --base-url "https://your-domain" --token "your API Token" --users --count 5
```

Sonucu başka bir program işleyecekse `--output json` kullanın:

```powershell
node imgbed-token-list.mjs --base-url "https://your-domain" --token "your API Token" --users --count 5 --output json
```

Tam sonuç da kaydedilebilir:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --count 5 `
  --output json `
  --save-response ".\users.json"
```

## Sık sorulan sorular

### Bu betik verileri değiştirir mi?

Hayır. Bu betik yalnızca okuma API'lerini çağırır. Dosya yüklemez, silmez, taşımaz, yapılandırma düzenlemez ve herhangi bir IP için yüklemeyi engellemez ya da izin vermez.

### Neden `list` izni gerekir?

Dosya yönetimi listesi, kullanıcı yönetimi listesi, hassas bilgileri çıkarılmış kanal listesi ve klasör istatistikleri okuma yetenekleridir. Bu nedenle API Token için yalnızca `list` izni yeterlidir.

### Hangi parametrelerin olduğunu nasıl görürüm?

Şunu çalıştırın:

```powershell
node imgbed-token-list.mjs --help
```

Betik tüm işlemleri ve parametreleri gösterir.

