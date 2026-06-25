# API Token ile Dosya Yönetimi

API Token ile dosya yönetimi betikler, otomasyon işleri ve üçüncü taraf yönetim panelleri için tasarlanmıştır. `manage` iznini kullanarak yönetim panelini açmadan dosya bilgilerini düzenleyebilir, dosyaları taşıyabilir, dosyaları yeniden adlandırabilir, klasör yer tutucu dosyaları oluşturabilir, dosya etiketlerini ve liste durumunu ayarlayabilir, bir yükleme IP'sini engelleyebilir veya geri açabilir, kısa süreli yükleme Token'ları oluşturabilir ya da silebilir.

Bu betik yalnızca dosya yönetimi ve kullanıcı yönetimindeki hafif yönetim işlemlerini ele alır. Yükleme, listeleme, silme, yükleme ayarları, site ayarları ve federasyon ilişkileri kendi özel betiklerini kullanmaya devam eder.

![API Token düzenleme](../../image/Safety/apitoken/编辑管理权限api.png)

## Hazırlık

Yönetim panelinde şurayı açın:

System Settings -> Security Settings -> API Token

API Token oluştururken veya düzenlerken bu Token için yönetim izninin açık olduğundan emin olun. `manage` izni dosya durumunu, kullanıcı yükleme durumunu değiştirebilir ve kısa süreli yükleme Token'ları oluşturabilir; bu yüzden yalnızca güvenilir betiklere veya kullanıcılara verilmelidir.

Dosya yönetimi betiğindeki yazma işlemleri varsayılan olarak önizleme modundadır ve gerçekten kaydedilmez. Önizleme içeriği doğruysa yazmayı yürütmek için `--apply` ekleyin.

Token ortam değişkenine de konabilir:

```powershell
$env:IMGBED_API_TOKEN="your API Token"
```

## Betiği indirme

| Betik | Kullanım |
| --- | --- |
| <a href="/tools/imgbed-token-manage.mjs" download>Dosya yönetimi betiği</a> | Dosya meta verileri, denetim etiketleri, dosya etiketleri, liste durumu, taşıma, yeniden adlandırma, klasör oluşturma, IP engelleme/geri açma, kısa süreli yükleme Token oluşturma ve silme |

Betiği çalıştırmak için yerel makinede Node.js 18 veya üzeri gerekir.

## İşlev sınırları

| Yetkinlik | Betik | İzin |
| --- | --- | --- |
| Dosya yükleme | `imgbed-token-single-upload.mjs` / `imgbed-token-chunk-upload.mjs` | `upload` |
| Dosya listeleme, dosya filtreleme ve kullanıcı istatistiklerini okuma | `imgbed-token-list.mjs` | `list` |
| Açıkça belirtilen dosyaları silme | `imgbed-token-delete.mjs` | `delete` |
| Dosya bilgilerini, etiketleri ve listeleri düzenleme, taşıma, yeniden adlandırma, klasör oluşturma, IP engelleme ve kısa süreli yükleme Token oluşturma veya silme | `imgbed-token-manage.mjs` | `manage` |
| Yükleme kanallarını, güvenlik ayarlarını, sayfa ayarlarını, diğer ayarları ve federasyon ilişkilerini düzenleme | Yapılandırma yönetimi betikleri | `manage` |

`imgbed-token-manage.mjs` dosya yüklemez, dosya listelemez ve dosya silmez. Bir `fileId` bulmanız gerekiyorsa önce listeleme betiğiyle dosyaları filtreleyin. Bir dosyayı silmeniz gerekiyorsa açık `fileId` değerini silme betiğine verin.

## Genel parametreler

| Parametre | Zorunlu | Açıklama |
| --- | --- | --- |
| `--base-url <url>` | Evet | ImgBed site adresi, örnek `https://image.ai6.me` |
| `--token <token>` | Evet | API Token; `IMGBED_API_TOKEN` ortam değişkeni de kullanılabilir |
| `--retries <n>` | Hayır | Geçici hatalarda tekrar sayısı; varsayılan `3` |
| `--timeout-ms <n>` | Hayır | Tek isteğin zaman aşımı; varsayılan `180000` |
| `--output <pretty\|json>` | Hayır | Çıktı formatı; varsayılan `pretty`. Programlı kullanım için `json` önerilir |
| `--save-response <path>` | Hayır | Nihai sonucu JSON dosyası olarak kaydeder |
| `--batch-size <n>` | Hayır | Toplu işlemlerde her istekte işlenecek öğe sayısı; varsayılan `15`, en fazla `15` |
| `--apply` | Hayır | Yazmayı gerçekten yürütür; yoksa yalnızca önizleme yapar |
| `-h` / `--help` | Hayır | Betik yardımını gösterir |

## Önce fileId değerini doğrulayın

Dosya yönetimi betiğindeki çoğu işlem `fileId` gerektirir. Önce listeleme betiğiyle sorgulayabilirsiniz:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --dir "test4" `
  --count 10 `
  --output json
```

Dönen sonuçtaki `name` alanı genellikle dosya yönetimi betiğine verilebilecek `fileId` değeridir.

## Dosya meta verileri

Dosya meta verileri, yönetim panelindeki dosya yönetiminde görünen dosya adını ve okuma kaynağını değiştirmek için kullanılır.

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-metadata `
  --file-id "photos/2026/a.jpg" `
  --file-name "cover.jpg" `
  --read-source backup
```

Önizleme doğruysa kaydedin:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-metadata `
  --file-id "photos/2026/a.jpg" `
  --file-name "cover.jpg" `
  --read-source backup `
  --apply
```

### Dosya meta verisi parametreleri

| Parametre | Açıklama |
| --- | --- |
| `--set-metadata` | Tek bir dosyanın meta verilerini değiştirir |
| `--file-id <id>` | Değiştirilecek dosya ID'si |
| `--file-name <name>` | Yönetim panelinde gösterilecek yeni ad |
| `--read-source <primary\|backup>` | Okuma kaynağı. `primary` ana kaynak, `backup` yedek kaynaktır |

`--file-name` veya `--read-source` parametrelerinden en az birini verin.

## Denetim etiketleri

Denetim etiketleri dosyanın yaş sınıflandırmasına karşılık gelir. Önce mevcut etiketi okuyup sonra değiştirebilirsiniz.

Denetim etiketini okuma:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get-label `
  --file-id "photos/2026/a.jpg"
```

Denetim etiketini ayarlama:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-label `
  --file-id "photos/2026/a.jpg" `
  --label r12 `
  --apply
```

### Denetim etiketi parametreleri

| Parametre | Açıklama |
| --- | --- |
| `--get-label` | Tek bir dosyanın denetim etiketini okur |
| `--set-label` | Tek bir dosyanın denetim etiketini değiştirir |
| `--file-id <id>` | Dosya ID'si |
| `--label <value>` | Etiket değeri: `all-ages`, `r12`, `r16`, `r18`, `None` |

## Dosya etiketleri

Dosya etiketleri, dosyalara aranabilir iş etiketleri eklemek için kullanılır. Betik okuma, üzerine yazma, ekleme ve kaldırmayı destekler; birden fazla dosyayı toplu olarak da işleyebilir.

Dosya etiketlerini okuma:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get-tags `
  --file-id "photos/2026/a.jpg"
```

Etiket ekleme:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --add-tags `
  --file-id "photos/2026/a.jpg" `
  --tag "cover" `
  --tag "2026" `
  --apply
```

Etiket kaldırma:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --remove-tags `
  --file-id "photos/2026/a.jpg" `
  --tag "cover" `
  --apply
```

Etiketlerin üzerine yazma:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-tags `
  --file-id "photos/2026/a.jpg" `
  --tag "archive" `
  --tag "public" `
  --apply
```

Toplu etiket ekleme:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --batch-tags `
  --file-id "photos/2026/a.jpg" `
  --file-id "photos/2026/b.jpg" `
  --tag-action add `
  --tag "batch-test" `
  --apply
```

### Dosya etiketi parametreleri

| Parametre | Açıklama |
| --- | --- |
| `--get-tags` | Tek bir dosyanın etiketlerini okur |
| `--set-tags` | Tek bir dosyanın etiketlerinin üzerine yazar |
| `--add-tags` | Tek bir dosyaya etiket ekler |
| `--remove-tags` | Tek bir dosyadan etiket kaldırır |
| `--batch-tags` | Etiketleri toplu olarak ayarlar, ekler veya kaldırır |
| `--file-id <id>` | Dosya ID'si; toplu işlemlerde birden fazla kez verilebilir |
| `--tag <tag>` | Etiket değeri; birden fazla kez verilebilir |
| `--tags-json <path>` | Etiket dizisini bir JSON dosyasından okur |
| `--tag-action <set\|add\|remove>` | Toplu etiket işlemi |

`--tags-json` dosyası için örnek içerik:

```json
["cover", "2026", "public"]
```

## Kara liste ve beyaz liste durumu

Liste durumu, herkese açık erişim modunda dosyanın erişim kontrolü davranışını belirler. Tek bir dosya için veya toplu olarak değiştirilebilir.

Tek bir dosyayı beyaz listeye alma:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-list-type `
  --file-id "photos/2026/a.jpg" `
  --list-type White `
  --apply
```

Dosyaları toplu olarak kara listeye ekleme:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --batch-list-type `
  --file-id "photos/2026/a.jpg" `
  --file-id "photos/2026/b.jpg" `
  --list-type Block `
  --apply
```

Varsayılan liste durumunu geri yükleme:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-list-type `
  --file-id "photos/2026/a.jpg" `
  --list-type None `
  --apply
```

### Kara liste ve beyaz liste parametreleri

| Parametre | Açıklama |
| --- | --- |
| `--set-list-type` | Tek bir dosyanın liste durumunu değiştirir |
| `--batch-list-type` | Dosya liste durumunu toplu olarak değiştirir; tek istek en fazla `15` dosya işler |
| `--file-id <id>` | Dosya ID'si; toplu işlemlerde birden fazla kez verilebilir |
| `--list-type <None\|White\|Block>` | `None` varsayılan durumdur, `White` beyaz listedir, `Block` kara listedir |

## Dosya taşıma

Dosya taşıma, bir veya daha fazla dosyayı hedef klasöre taşır. Backend tek istekte en fazla `15` dosya işler. Betik işi `--batch-size` değerine göre otomatik böler ve istekleri sırayla yürütür.

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --move `
  --file-id "photos/2026/a.jpg" `
  --file-id "photos/2026/b.jpg" `
  --target-path "archive/2026" `
  --apply
```

### Taşıma parametreleri

| Parametre | Açıklama |
| --- | --- |
| `--move` | Dosyaları taşır |
| `--file-id <id>` | Taşınacak dosya ID'si; birden fazla kez verilebilir |
| `--target-path <dir>` | Hedef klasör |
| `--batch-size <n>` | Her istekte taşınacak dosya sayısı; varsayılan `15`, en fazla `15` |

## Yeniden adlandırma veya yol değiştirme

Yeniden adlandırma, açık eski dosya ID'si ve yeni dosya ID'si kullanır. Yeni dosya ID'si yalnızca dosya adını değiştirebilir veya aynı anda klasörü de değiştirebilir.

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --rename `
  --old-file-id "photos/2026/a.jpg" `
  --new-file-id "photos/2026/a-renamed.jpg" `
  --apply
```

Toplu yeniden adlandırmada `--old-file-id` ve `--new-file-id` parametrelerini tekrar tekrar verin:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --rename `
  --old-file-id "photos/2026/a.jpg" `
  --new-file-id "archive/2026/a.jpg" `
  --old-file-id "photos/2026/b.jpg" `
  --new-file-id "archive/2026/b.jpg" `
  --apply
```

Eşlemeyi bir JSON dosyasına da yazabilirsiniz:

```json
[
  {
    "oldFileId": "photos/2026/a.jpg",
    "newFileId": "archive/2026/a.jpg"
  },
  {
    "oldFileId": "photos/2026/b.jpg",
    "newFileId": "archive/2026/b.jpg"
  }
]
```

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --rename `
  --items-json ".\rename-items.json" `
  --apply
```

### Yeniden adlandırma parametreleri

| Parametre | Açıklama |
| --- | --- |
| `--rename` | Açık eşlemeye göre yeniden adlandırır veya yolu değiştirir |
| `--old-file-id <id>` | Eski dosya ID'si; birden fazla kez verilebilir |
| `--new-file-id <id>` | Yeni dosya ID'si; birden fazla kez verilebilir ve sayısı `--old-file-id` ile aynı olmalıdır |
| `--items-json <path>` | JSON dizisi. Her öğe `{ "oldFileId": "...", "newFileId": "..." }` biçimindedir |
| `--batch-size <n>` | Her istekte işlenecek yeniden adlandırma sayısı; varsayılan `15`, en fazla `15` |

## Klasör oluşturma

ImgBed klasörleri dosya yollarından türetilir; gerçek boş klasör yoktur. Betik klasör oluştururken hedef klasörde `0.md` adlı bir yer tutucu dosya oluşturur. Böylece bu klasör dosya yönetiminde ve klasör istatistiklerinde görünebilir.

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --create-folder `
  --parent-directory "photos" `
  --folder-name "2026" `
  --apply
```

### Klasör oluşturma parametreleri

| Parametre | Açıklama |
| --- | --- |
| `--create-folder` | Klasör yer tutucu dosyası oluşturur |
| `--parent-directory <dir>` | Üst klasör; kök klasör için boş dize verilebilir |
| `--folder-name <name>` | Yeni klasör adı |

## Yükleme IP'sini engelleme ve geri açma

Yönetim izniyle bir IP'yi yükleme engel listesine ekleyebilir veya bu listeden çıkarabilirsiniz. Bu işlem ilgili IP'nin sonraki yüklemelerini etkiler; bu IP'den daha önce yüklenmiş dosyaları silmez.

Bir yükleme IP'sini engelleme:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --block-ip "67.159.48.149" `
  --apply
```

Bir yükleme IP'sini geri açma:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --allow-ip "67.159.48.149" `
  --apply
```

Geçerli yükleme engel IP listesini görüntüleme:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --blocked-ips
```

### IP yönetimi parametreleri

| Parametre | Açıklama |
| --- | --- |
| `--block-ip <ip>` | IP'yi yükleme engel listesine ekler |
| `--allow-ip <ip>` | IP'yi yükleme engel listesinden çıkarır |

## Kısa süreli yükleme Token oluşturma ve silme

Yönetim izni kısa süreli, yalnızca yükleme amaçlı Token oluşturabilir. Bu Token her zaman yalnızca `upload` iznine sahiptir, `autoDelete` her zaman `true` olur ve en uzun sona erme süresi `1` gündür.

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --create-upload-token `
  --name "Temporary Upload Token" `
  --owner "upload-bot" `
  --default-upload-channel telegram `
  --expires-in-minutes 20 `
  --apply `
  --output json
```

Milisaniye zaman damgasını doğrudan da verebilirsiniz:

```powershell
$expiresAt = [DateTimeOffset]::UtcNow.AddHours(12).ToUnixTimeMilliseconds()

node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --create-upload-token `
  --name "Upload Token valid for one day" `
  --owner "upload-bot" `
  --default-upload-channel telegram `
  --expires-at $expiresAt `
  --apply
```

Kısa süreli yükleme Token'ı silerken oluşturma API'sinin döndürdüğü `id` verilmelidir. Yönetim Token'ı yalnızca aşağıdaki koşulları karşılayan Token'ları silebilir:

| Koşul | Gereksinim |
| --- | --- |
| İzin | `permissions` yalnızca `upload` içerir |
| Otomatik silme | `autoDelete=true` |
| Geçerlilik süresi | `expiresAt - createdAt <= 24` saat |

Kısa süreli yükleme Token'ı silme:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --delete-upload-token `
  --token-id "mqt4jqokc85be80d1f0f47078e848a77d6c1aa6e" `
  --apply
```

Yönetim Token'ı normal Token'ları, uzun süreli Token'ları, `list` / `delete` / `manage` izinlerini içeren Token'ları veya geçerliliği `1` günden uzun olan yükleme Token'larını silemez. Bu Token'lar yine tarayıcıdaki yönetim panelinden yönetilmelidir.

### Kısa süreli yükleme Token parametreleri

| Parametre | Açıklama |
| --- | --- |
| `--create-upload-token` | Kısa süreli, yalnızca yükleme amaçlı Token oluşturur |
| `--delete-upload-token` | Koşulları karşılayan kısa süreli, yalnızca yükleme amaçlı Token'ı siler |
| `--name <name>` | Token adı |
| `--owner <owner>` | Token sahipliği açıklaması |
| `--default-upload-channel <key>` | Varsayılan yükleme kanalı. `telegram`, `s3` veya `github` gibi gerçek bir kanal olmalıdır |
| `--expires-in-minutes <n>` | Geçerli zamana göre sona ermeye kalan dakika. En fazla `1440` |
| `--expires-at <ms>` | Mutlak sona erme zamanı, milisaniye zaman damgası. Geçerli zamandan en fazla `24` saat sonrası |
| `--token-id <id>` | Silinecek kısa süreli yükleme Token ID'si |

Kısa süreli yükleme Token'ları yalnızca yüklemeye izin verir. Testlerde `permissions=["upload"]` olan kısa süreli Token; listeleme, dosya yönetimi ve silme API'lerine erişirken reddedildi.

Süresi dolduktan sonra `autoDelete=true` olan Token, backend süresinin dolduğunu doğruladığında temizlenir. API Token listesinin okunması da süresi dolmuş ve `autoDelete` değeri `true` olan Token'ları temizler.

## API eşlemesi

| İşlem | Yöntem | API |
| --- | --- | --- |
| Dosya meta verilerini değiştirme | `PATCH` | `/api/manage/metadata/{fileId}` |
| Denetim etiketini okuma | `GET` | `/api/manage/label/{fileId}` |
| Denetim etiketini değiştirme | `POST` | `/api/manage/label/{fileId}` |
| Dosya etiketlerini okuma | `GET` | `/api/manage/tags/{fileId}` |
| Dosya etiketlerini değiştirme | `POST` | `/api/manage/tags/{fileId}` |
| Dosya etiketlerini toplu değiştirme | `POST` | `/api/manage/tags/batch` |
| Liste durumunu değiştirme | `POST` | `/api/manage/listType/{fileId}` |
| Liste durumunu toplu değiştirme | `POST` | `/api/manage/listType/batch` |
| Taşıma veya yeniden adlandırma | `POST` | `/api/manage/relocate/batch` |
| Klasör oluşturma | `POST` | `/api/manage/folder/create` |
| Yükleme IP'sini engelleme | `POST` | `/api/manage/cusConfig/blockip` |
| Yükleme IP'sini geri açma | `POST` | `/api/manage/cusConfig/whiteip` |
| Kısa süreli yükleme Token oluşturma | `POST` | `/api/manage/apiTokens` |
| Kısa süreli yükleme Token silme | `DELETE` | `/api/manage/apiTokens?id={tokenId}` |

Betik otomatik olarak şunu ekler:

```text
Authorization: Bearer your API Token
```

## Çıktı formatı

Varsayılan `pretty` çıktısı insan tarafından okumaya uygundur. Sonucu başka bir program işleyecekse `--output json` kullanın:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get-tags `
  --file-id "photos/2026/a.jpg" `
  --output json
```

Tam sonucu da kaydedebilirsiniz:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get-tags `
  --file-id "photos/2026/a.jpg" `
  --output json `
  --save-response ".\manage-result.json"
```

Toplu taşıma, toplu yeniden adlandırma ve toplu liste işlemleri backend tarafından döndürülen NDJSON ilerleme akışını ayrıştırır; olay sayısını, tamamlanma durumunu ve hata ayrıntılarını özetler.

## Sık sorulan sorular

### Komut neden hiçbir şeyi değiştirmedi

Yazma işlemleri varsayılan olarak önizleme modundadır. Önizleme doğruysa gerçekten kaydetmek için `--apply` ekleyin.

### Bu betik dosya yükleyebilir, listeleyebilir veya silebilir mi

Hayır. Yükleme için yükleme betiklerini, listeleme ve filtreleme için listeleme betiğini, açık dosyaları silmek için silme betiğini kullanın. Dosya yönetimi betiği yalnızca `manage` izni altındaki hafif yönetim işlemlerini ele alır.

### Hangi fileId değerini vereceğimi nasıl bilirim

Önce `imgbed-token-list.mjs --files` ile dosyaları sorgulayın. Dönen sonuçtaki `name` alanı genellikle dosya ID'sidir; burada `--file-id` olarak verilen değer budur.

### Toplu işlem tek seferde en fazla kaç dosya işleyebilir

Backend tek istekte en fazla `15` dosya işler. Betik varsayılan olarak `--batch-size 15` kullanır; daha küçük bir değer verirseniz işi otomatik olarak birden fazla sıralı isteğe böler.

### Gerçekten boş bir klasör oluşturulabilir mi

ImgBed klasörleri dosya yollarından türetilir, bu yüzden gerçek boş klasör yoktur. `--create-folder`, klasörün dosya yönetiminde ve klasör istatistiklerinde görünmesi için `0.md` adlı bir klasör yer tutucu dosyası oluşturur.

### Kısa süreli yükleme Token'ı en fazla ne kadar geçerli olabilir

En fazla `1` gün, yani `1440` dakika. Bu süre aşılırsa betik yerel olarak reddeder; backend de `API_TOKEN_MANAGE_CREATE_EXPIRES_AT_TOO_LONG` döndürür.

### Kısa süreli yükleme Token'ı süresi dolunca otomatik silinir mi

Otomatik olarak temizlenir, ancak anında çalışan zamanlanmış bir görevle değil. Süresi dolmuş Token yeniden doğrulandığında temizlenir. API Token listesini okumak da `autoDelete=true` olan süresi dolmuş Token'ları temizler.
