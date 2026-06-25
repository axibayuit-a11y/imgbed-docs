# API Token ile Dosya Yükleme

API Token ile yükleme; betikler, otomasyon işleri ve üçüncü taraf programlar için tasarlanmıştır. Web UI'yi açmanız gerekmez. Site URL'sini, token değerini, yerel dosya yolunu ve gerçek bir yükleme kanalını sağladığınız sürece dosya ImgBed'e yüklenebilir ve yanıt dosya URL'sini içerir.

![API Token düzenleme](../../image/Safety/apitoken/编辑上传权限api.png)

## Başlamadan Önce

Yönetim panelini açın, ardından şuraya gidin:

```text
System Settings -> Security Settings -> API Token
```

API Token oluştururken veya düzenlerken yükleme izni olduğundan ve gerçek bir varsayılan yükleme kanalı kullandığından emin olun. API Token yüklemeleri Akıllı Yönlendirme girişini kullanmaz; betikler de gerçek bir kanal göndermelidir.

## Yükleme Betiklerini İndirme

Dokümantasyon paketi iki Node.js betiği sağlar:

| Betik | Amaç |
| --- | --- |
| <a href="/tools/imgbed-token-single-upload.mjs" download>Tek istekli yükleme betiği</a> | `/upload` öğesini bir kez çağırır. Küçük dosyalar ve bağlantı testleri için kullanışlıdır. |
| <a href="/tools/imgbed-token-chunk-upload.mjs" download>Parçalı yükleme betiği</a> | API Token parçalama, doğrudan yükleme veya platform yükleme oturumlarını kullanır. Büyük dosyalar için önerilir. |

Node.js 18 veya üzeri gerekir.

## Kullanılabilir Kanalları Listeleme

Her iki betik de geçerli API Token tarafından kullanılabilen yükleme kanallarını listeleyebilir:

```powershell
node imgbed-token-single-upload.mjs --base-url "https://your-domain" --token "your API Token" --list-channels
node imgbed-token-chunk-upload.mjs --base-url "https://your-domain" --token "your API Token" --list-channels
```

Kanallar listelenirken `--file` ve `--channel` gerekli değildir. Yanıt varsayılan yükleme kanalını, yükleme kanalı key değerlerini, alt kanal adlarını ve yük dengeleme durumunu içerir. Gizli değerler, yenileme token değerleri ve diğer hassas yapılandırma değerleri döndürülmez.

## Yükleme Modu Seçimi

| Mod | En Uygun Kullanım | Açıklama |
| --- | --- | --- |
| Tek istekli yükleme | Küçük dosyalar, basit betikler, bağlantı testleri | Tüm dosyayı tek istekte `/upload` öğesine gönderir. |
| Parçalı yükleme | Büyük dosyalar veya zaman aşımına uğraması muhtemel dosyalar | Betik kanala özgü parçalı, doğrudan veya yükleme oturumu akışını seçer. |

Daha büyük dosyalar için önce parçalı yükleme betiğini kullanın. Tek istekli yüklemeler Cloudflare istek boyutu, Worker belleği ve her platformun kendi sınırlarıyla sınırlıdır.

## Tek İstekli Yükleme

Tek istekli betik `/upload` öğesine bir istek gönderir.

```powershell
node imgbed-token-single-upload.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --file "D:\test\image.png" `
  --channel s3 `
  --folder "photos/2026"
```

Token değerini bir ortam değişkenine de koyabilirsiniz:

```powershell
$env:IMGBED_API_TOKEN="your API Token"
node imgbed-token-single-upload.mjs --base-url "https://your-domain" --file "D:\test\image.png" --channel s3
```

### Tek İstekli Yükleme Parametreleri

| Parametre | Gerekli | Açıklama |
| --- | --- | --- |
| `--base-url <url>` | Evet | ImgBed site URL'si, örneğin `https://image.ai6.me`. |
| `--token <token>` | Evet | API Token. `IMGBED_API_TOKEN` ortam değişkenini de kullanabilirsiniz. |
| `--file <path>` | Evet | Yerel dosya yolu. |
| `--channel <key>` | Evet | Yükleme kanalı. |
| `--folder <path>` | Hayır | Yükleme klasörü, örneğin `photos/2026` veya `/user/`. |
| `--name-type <type>` | Hayır | Adlandırma modu; sunucu tarafındaki `uploadNameType` değerine eşlenir. Varsayılan `default`. |
| `--channel-name <name>` | Hayır | Alt kanal veya hesabı seçer. Atlanırsa sunucu tarafındaki kanal yapılandırması karar verir. |
| `--retries <n>` | Hayır | Geçici hata yeniden deneme sayısı. Varsayılan `3`. |
| `--timeout-ms <n>` | Hayır | İstek zaman aşımı. Varsayılan `180000`. |
| `--output <pretty\|json>` | Hayır | Çıktı biçimi. Varsayılan `pretty`. |
| `--save-response <path>` | Hayır | Son JSON yanıtını dosyaya kaydeder. |
| `--list-channels` | Hayır | Geçerli token için kullanılabilir kanalları listeler ve çıkar. |

### Tek İstekli Yükleme Kanalları

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

### Tek İstekli Boyut Sınırları

Mümkünse tek istekli dosyaları 100 MB altında tutun.

Bu kanallarda tek istekli `/upload` için açık engelleme eşikleri vardır:

| Kanal | Tek İstek Sınırı |
| --- | ---: |
| Telegram | 20 MiB |
| Discord | 10 MiB |
| S3 | 64 MiB |
| WebDAV | 64 MiB |
| GitHub Releases | 64 MiB |
| GitLab Packages | 64 MiB |

Bir dosya bu sınırlardan birini aşarsa betik eşleşen hatayı yerel olarak bildirir. Diğer kanallarda betikte sabit kodlanmış 100 MB yerel kontrol yoktur. İstek gövdesi Cloudflare veya platform kapasitesini aşarsa hatayı Cloudflare ya da uzak platform döndürür.

## Parçalı Yükleme

Parçalı yükleme betiği önce hedef dosyayı çözmek için sunucu tarafına sorar, ardından seçilen kanalın büyük dosya akışını izler. Parça oturumu, birleştirme veya tamamlama isteklerini kendiniz yazmanız gerekmez.

```powershell
node imgbed-token-chunk-upload.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --file "D:\test\video.zip" `
  --channel github `
  --folder "photos/2026" `
  --concurrency 3
```

### Parçalı Yükleme Parametreleri

| Parametre | Gerekli | Açıklama |
| --- | --- | --- |
| `--base-url <url>` | Evet | ImgBed site URL'si. |
| `--token <token>` | Evet | API Token. `IMGBED_API_TOKEN` ortam değişkenini de kullanabilirsiniz. |
| `--file <path>` | Evet | Yerel dosya yolu. |
| `--channel <key>` | Evet | Yükleme kanalı. |
| `--folder <path>` | Hayır | Yükleme klasörü. |
| `--name-type <type>` | Hayır | Adlandırma modu; sunucu tarafındaki `uploadNameType` değerine eşlenir. Varsayılan `default`. |
| `--channel-name <name>` | Hayır | Alt kanal veya hesabı seçer. Atlanırsa sunucu tarafındaki kanal yapılandırması karar verir. |
| `--concurrency <n>` | Hayır | Eşzamanlı yüklemeler. Varsayılan `1`, en fazla `3`. |
| `--retries <n>` | Hayır | Geçici hata yeniden deneme sayısı. Varsayılan `3`. |
| `--timeout-ms <n>` | Hayır | Her istek için zaman aşımı. Varsayılan `180000`. |
| `--output <pretty\|json>` | Hayır | Çıktı biçimi. Varsayılan `pretty`. |
| `--save-response <path>` | Hayır | Son JSON yanıtını dosyaya kaydeder. |
| `--list-channels` | Hayır | Geçerli token için kullanılabilir kanalları listeler ve çıkar. |

### Parçalı Yükleme Kanalları

| Kanal Key | Yükleme Akışı |
| --- | --- |
| `telegram` / `tg` | Gerçek parçalı `/upload` oturumu |
| `discord` / `dc` | Gerçek parçalı `/upload` oturumu |
| `cfr2` / `r2` | Gerçek parçalı `/upload` oturumu |
| `github` / `gh` | Gerçek parçalı `/upload` oturumu |
| `gitlab` / `gl` | Gerçek parçalı `/upload` oturumu |
| `webdav` / `wd` | Gerçek parçalı `/upload` oturumu |
| `s3` | S3 çok parçalı yükleme |
| `onedrive` / `od` | OneDrive yükleme oturumu |
| `googledrive` / `google` / `gd` | Google Drive sürdürülebilir yükleme |
| `dropbox` / `db` | Dropbox yükleme oturumu |
| `yandex` / `yx` | Yandex doğrudan yükleme URL'si |
| `pcloud` / `pd` | pCloud yükleme bağlantısı |
| `huggingface` / `hf` | Hugging Face LFS yükleme |

Yandex sıkıştırılmış dosya örnekleri testlerde kararsızdı. Sıkıştırılmamış dosyaların başarıyla yüklendiği doğrulandı.

## Yükleme Yanıtı

Başarılı bir yüklemeden sonra betik şunu yazdırır:

```text
success
src: /file/photos/2026/example.png
url: https://your-domain/file/photos/2026/example.png
fileId: photos/2026/example.png
```

| Alan | Açıklama |
| --- | --- |
| `src` | Sitedeki dahili dosya yolu. |
| `url` | Kendi betikleriniz veya veritabanı kayıtlarınız için uygun tam herkese açık URL. |
| `fileId` | Daha sonraki sorgular, yönetim veya günlükler için yararlı dosya ID'si. |
| `channelName` | Parçalı betik kullanılan gerçek alt kanalı veya hesabı döndürebilir. |

`--output json` ile betik programatik kullanım için tam JSON yanıtını yazdırır.

## Doğrudan Tek İstekli API Çağrısı

Betiği kullanmıyorsanız tek istekli yükleme uç noktasını doğrudan çağırabilirsiniz:

```text
POST https://your-domain/upload?uploadChannel=s3&uploadFolder=photos/2026&uploadNameType=default
Authorization: Bearer your API Token
Content-Type: multipart/form-data
```

Form alanı:

| Alan | Gerekli | Açıklama |
| --- | --- | --- |
| `file` | Evet | Yüklenecek dosya. |

Sorgu parametreleri:

| Parametre | Gerekli | Açıklama |
| --- | --- | --- |
| `uploadChannel` | Evet | Gerçek yükleme kanalı. |
| `uploadFolder` | Hayır | Yükleme klasörü. |
| `uploadNameType` | Hayır | Adlandırma modu. |
| `channelName` | Hayır | Alt kanal veya hesabı seçer. |

Başarılı yanıtlar şöyle görünür:

```json
{
  "success": true,
  "src": "/file/photos/2026/example.png",
  "url": "https://your-domain/file/photos/2026/example.png",
  "fileId": "photos/2026/example.png"
}
```

## FAQ

### Büyük Tek İstekli Yüklemeler Başarısız Oluyor

Tek istekli `/upload` tüm dosyayı tek istekte gönderir. Büyük dosyalar Cloudflare veya uzak platform tarafından engellenebilir. Büyük dosyalar için parçalı yükleme betiğini kullanın.

### `--channel-name` Ayarlı Ama Yükleme Hâlâ Başarısız

Seçilen kanalda bu ada sahip bir alt kanal gerçekten var mı ve etkin mi kontrol edin. `--channel-name` atlanırsa sunucu tarafı kanal yapılandırmasına göre kullanılabilir hesabı seçer.

### Sonucu Başka Bir Programda Kullanmak İstiyorum

`--output json` kullanın veya `--save-response result.json` ekleyin. Tam dosya URL'sini almak için `url` alanını okuyun.

### Yandex Arşivleri Yükleyemiyor

Yandex arşiv biçimlerini desteklemez. Bu, platform politikalarından kaynaklanabilir. Yandex kullanırken mümkünse arşiv olmayan dosyalar yükleyin.

