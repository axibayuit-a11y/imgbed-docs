# Random Image API ve Public Gallery

İki özellik de şuradan yapılandırılır:

```text
System Settings -> Other Settings
```

## Random Image API

Random Image API, seçilen dizinlerden rastgele bir dosya döndürür. Site arka planları, avatar rotasyonu veya dış sayfalardan rastgele görsel çağrıları için kullanışlıdır.

Etkinleştirildikten sonra şunu kullanın:

```text
https://your-domain.com/random
```

## Random Image API Ayarları

| Seçenek | Amaç |
| --- | --- |
| Enable | `/random` endpoint'ini açar veya kapatır. Kapalıyken erişim yasaktır. |
| Directories | Random API'nin kullanabileceği dizinleri sınırlar. Buraya dahil edilmeyen dizinler API tarafından kullanılamaz. |
| Call demo | Doğrudan kopyalayabileceğiniz random API bağlantıları oluşturur. |

Birden fazla dizin seçebilirsiniz. Örneğin yalnızca `/landscape/` ve `/portrait/` izinliyse random API yalnızca bu dizinlerden ve alt dizinlerinden dosya seçebilir.

## Random Image API Parametreleri

| Parametre | Örnek | Amaç |
| --- | --- | --- |
| `dir` | `/landscape/` | Random directory belirtir. |
| `content` | `image` | Media type belirtir. `image`, `video`, `audio` veya virgülle ayrılmış kombinasyonlar kullanın. |
| `orientation` | `auto` | Görsel yönünü filtreler. `portrait`, `landscape` veya `auto` kullanın. |
| `type` | `url` | Dönüş formatı. Boşsa redirect, `url` plain text URL, `json` JSON döndürür. |
| `origin` | `1` | `type=url` ile birlikte tam URL döndürmek için kullanılır. |
| `age` | `all-ages,r12` | Age rating değerine göre filtreler. |
| `tag` | `wallpaper,sky` | Yalnızca bu tags değerlerini içeren dosyaları döndürür. |
| `ex` | `private` | Bu tags değerlerini içeren dosyaları hariç tutar. |

## Dönüş Formatları

`type` olmadan API doğrudan rastgele dosya URL'sine yönlendirir.

`type=url` ile metin URL döndürür.

`type=json` ile file URL, file ID, file name, file type, tags, rating ve ilgili metadata dahil dosya bilgilerini döndürür.

## Erişim Kuralları

Random Image API public access rules kurallarına uyar:

| Kural | Etki |
| --- | --- |
| Directory restriction | Yalnızca izinli dizinlerdeki dosyalar seçilebilir. |
| Blocklist | Blocklisted files random pool dışında bırakılır. |
| Allowlist mode | Etkin olduğunda yalnızca public access için izinli dosyalar döner. |
| Age rating | R12, R16, R18 ve benzeri içerik geçerli access mode ile filtrelenir. |

Filtrelemeden sonra eşleşen dosya yoksa API eşleşen sonuç olmadığını döndürür.

## Cache

Random Image API hız için dizin candidate pools değerlerini önbelleğe alır.

Dosyalar değiştiğinde ImgBed dizin cache version değerini günceller ve sonraki istekler candidate pool'u yeniden oluşturur. Boş dizinler tekrar eden sorguları önlemek için kısa süre önbelleğe alınır.

## Public Gallery

Public gallery, ziyaretçilerin görmesine izin verdiğiniz dizinler için salt okunur herkese açık gezinme sayfası sağlar.

Etkinleştirildikten sonra ziyaretçiler şurayı açabilir:

```text
https://your-domain.com/browse/directory-name
```

## Public Gallery Ayarları

| Seçenek | Amaç |
| --- | --- |
| Enable | Public gallery'yi açar veya kapatır. Kapalıyken ziyaretçiler gezemez. |
| Image loading mode | Önizlemelerin özgün görselleri mi thumbnails değerlerini mi kullanacağını belirler. |
| Open directories | Ziyaretçilerin erişebileceği dizinleri belirler. |

## Image Loading Mode

| Mode | Amaç |
| --- | --- |
| Original | Ziyaretçi sayfası özgün dosyaları doğrudan yükler. |
| Thumbnail | Ziyaretçi sayfası daha hızlı yükleme için thumbnails tercih eder. |

## Open Directories

Open directories ziyaretçilerin ne görebileceğini belirler.

Örneğin:

```text
/1/,/2/,/landscape/,/portrait/
```

Ziyaretçiler şunlara erişebilir:

```text
https://your-domain.com/browse/1
https://your-domain.com/browse/2
https://your-domain.com/browse/landscape
https://your-domain.com/browse/portrait
```

`/2026/lucky/` gibi alt dizinler de açılabilir. Açık olmayan dizinlere ziyaretçiler engellenir.

## Public Gallery Özellikleri

| Özellik | Açıklama |
| --- | --- |
| Browse directories | Açık dizinlerdeki dosyaları ve alt dizinleri görüntüler. |
| Search | File name, file ID veya tags ile arama yapar. |
| Type filter | Images, videos, audio veya diğer dosyaları filtreler. |
| Tag filter | Seçili tags değerlerini dahil eder veya hariç tutar. |
| Orientation filter | Landscape veya portrait images filtreler. |
| Time filter | Upload time aralığına göre filtreler. |
| Extension filter | File extension değerine göre filtreler. |
| Copy link | File access links kopyalar. |
| Media preview | Ziyaretçi sayfasında images, videos ve audio görüntüler veya oynatır. |

## Public Gallery Erişim Kuralları

Public gallery de public access rules kurallarına uyar:

| Kural | Etki |
| --- | --- |
| Open directories | Yalnızca izin verilen dizinler gösterilir. |
| Access mode | İçerik geçerli age-rating access mode ile filtrelenir. |
| Allowlist mode | Etkin olduğunda yalnızca public access için izinli dosyalar gösterilir. |
| Blocklist | Blocklisted files gizlenir. |
