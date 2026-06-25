# API Token ile dosya silme

API Token ile silme betiği; betikler, otomasyon işleri ve üçüncü taraf programlar için uygundur. Yönetim panelini açmanız gerekmez: site adresini, Token değerini ve açık dosya ID'lerini vererek ImgBed içindeki bir veya birden fazla dosyayı silebilirsiniz.

Silme işlemi veriyi değiştirir. Komut çalıştırıldıktan sonra dosyalar gerçekten silinir. Bu nedenle önce `imgbed-token-list.mjs` ile silinecek `fileId` değerlerini doğrulayın, ardından bu ID'leri silme betiğine verin.

![API Token düzenle](../../image/Safety/apitoken/编辑api%20token.png)

## Hazırlık

Yönetim panelinde şurayı açın:

```text
System Settings -> Security Settings -> API Token
```

API Token oluştururken veya düzenlerken bu Token için silme izninin açık olduğundan emin olun. Bu betik yalnızca `delete` iznine ihtiyaç duyar.

Token ortam değişkenine de konabilir:

```powershell
$env:IMGBED_API_TOKEN="your API Token"
```

## Betiği indirme

| Betik | Kullanım |
| --- | --- |
| <a href="/tools/imgbed-token-delete.mjs" download>Dosya silme betiğini indir</a> | Açıkça belirtilen bir veya birden fazla dosya ID'sini siler |

Node.js 18 veya üzeri gerekir.

## Silme API davranışı

Silme betiği sunucu tarafındaki silme API'sini çağırır:

```text
POST /api/manage/delete/batch
```

İstek API Token taşımalıdır:

```text
Authorization: Bearer <token>
```

İstek gövdesi örneği:

```json
{
  "fileIds": ["photos/2026/a.txt"],
  "deleteStrictness": "strict"
}
```

`fileIds` içinde tek dosya varsa işlem tek dosya silmedir. Birden fazla dosya varsa toplu silmedir. Sunucu tarafı tek istekte en fazla 15 dosya işler; betik `--batch-size` değerine göre istekleri otomatik olarak böler.

API, NDJSON biçiminde ilerleme akışı döndürür. Sık görülen olaylar `batch_start`, `file_step`, `file_done`, `batch_complete` ve `batch_error` şeklindedir. Betik bu olayları çözümler ve okunabilir sonuç ya da JSON sonucu olarak özetler.

Silme başarıyla tamamlandıktan sonra sunucu tarafı dosya dizinini, klasör istatistiklerini, depolama kullanım istatistiklerini ve önbellek temizliğini otomatik olarak işler.

## Silme betiği parametreleri

| Parametre | Zorunlu | Açıklama |
| --- | --- | --- |
| `--base-url <url>` | Evet | ImgBed site adresi, örnek `https://image.ai6.me` |
| `--token <token>` | Evet | API Token; `IMGBED_API_TOKEN` da kullanılabilir |
| `--file-id <id>` | Evet | Silinecek dosya ID'si; birden çok kez verilebilir |
| `--strictness <strict\|soft>` | Hayır | Silme katılığı; varsayılan `strict` |
| `--batch-size <n>` | Hayır | Tek istekte silinecek dosya sayısı; varsayılan `15`, en fazla `15` |
| `--retries <n>` | Hayır | Geçici hatalarda tekrar sayısı; varsayılan `3` |
| `--timeout-ms <n>` | Hayır | Tek isteğin zaman aşımı; varsayılan `180000` |
| `--output <pretty\|json>` | Hayır | Çıktı formatı; varsayılan `pretty` |
| `--save-response <path>` | Hayır | Nihai sonucu JSON dosyası olarak kaydeder |
| `-h` / `--help` | Hayır | Betik yardımını gösterir |

Bu betik yalnızca `--file-id` ile açıkça verilen dosyaları siler. Belirsiz eşleştirme yapmaz, klasörü topluca boşaltmaz, virgülle ayrılmış listeden veya yerel dosyadan silinecek ID okumaz.

## Katı silme ve yumuşak silme

| Mod | Açıklama |
| --- | --- |
| `strict` | Varsayılan moddur. Uzak depolamada silme başarısız olursa ImgBed kaydı korunur; böylece daha sonra yeniden denemek veya sorunu incelemek kolaylaşır. |
| `soft` | Uzak depolamada silme başarısız olsa bile ImgBed kaydı temizlenir ve sonuçta uyarı döndürülür. |

Uzak dosya gerçekten silinmeden işlemin başarılı sayılmasını istemiyorsanız varsayılan `strict` modunu kullanın. Uzak platform artık dosyayı silemiyor, ancak yalnızca ImgBed kaydını temizlemek istiyorsanız `soft` kullanabilirsiniz.

## Kullanım örnekleri

Tek dosya silme:

```powershell
node imgbed-token-delete.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --file-id "photos/2026/a.txt"
```

Ortam değişkenindeki Token değerini kullanma:

```powershell
$env:IMGBED_API_TOKEN="your API Token"

node imgbed-token-delete.mjs `
  --base-url "https://your-domain" `
  --file-id "photos/2026/a.txt"
```

Birden fazla dosya silme:

```powershell
node imgbed-token-delete.mjs `
  --base-url "https://your-domain" `
  --file-id "photos/2026/a.txt" `
  --file-id "photos/2026/b.txt" `
  --file-id "photos/2026/c.txt"
```

Uzak silme başarısız olsa bile ImgBed kaydını temizleme:

```powershell
node imgbed-token-delete.mjs `
  --base-url "https://your-domain" `
  --file-id "photos/2026/a.txt" `
  --strictness soft
```

JSON çıktısı verip sonucu kaydetme:

```powershell
node imgbed-token-delete.mjs `
  --base-url "https://your-domain" `
  --file-id "photos/2026/a.txt" `
  --output json `
  --save-response ".\delete-result.json"
```

Tek istekte silinecek dosya sayısını 5 ile sınırlama:

```powershell
node imgbed-token-delete.mjs `
  --base-url "https://your-domain" `
  --file-id "photos/2026/a.txt" `
  --file-id "photos/2026/b.txt" `
  --batch-size 5
```

## Silmeden önce fileId kontrolü

Silme betiği ImgBed dosya ID'sine ihtiyaç duyar. Önce listeleme betiğiyle klasördeki dosyaları görebilirsiniz:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --dir "photos/2026" `
  --count 10 `
  --output json
```

Sonuçtaki `name` değeri genellikle silme betiğine verilebilen `fileId` değeridir.

## Sık sorulan sorular

### Silme başarısız oldu ama dosya neden hala listede?

Varsayılan `strict` modunda, uzak depolamada silme başarısız olursa ImgBed kaydı korunur. Bu, yerel dizinin silinip uzak dosyanın kalmasını önlemek içindir. Yalnızca ImgBed kaydını temizleyebileceğinizden eminseniz aynı `fileId` için `soft` ile tekrar deneyin.

### Sonuçta neden uyarılar var?

Uyarılar genellikle uzak silme, önbellek temizliği veya istatistiklerin tamamlanması sırasında kritik olmayan bir sorun olduğunu gösterir. Betik uyarıları toplar; böylece yeniden denemenin gerekip gerekmediğini değerlendirebilirsiniz.

### Klasörü tek seferde silebilir miyim?

Bu betik klasör boşaltma özelliği sunmaz. Önce listeleme betiğiyle açık `fileId` değerlerini seçin, ardından silinecek dosyaları tek tek silme betiğine verin.

