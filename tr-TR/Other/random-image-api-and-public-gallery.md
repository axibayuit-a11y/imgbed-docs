# Rastgele Görsel API'si ve Herkese Açık Galeri

Her iki özellik de şuradan yapılandırılır:

```text
System Settings -> Other Settings
```

## Rastgele Görsel API'si

Rastgele Görsel API'si, seçili dizinlerden rastgele bir dosya döndürür. Site arka planları, avatar döndürme veya harici sayfalardan rastgele görsel çağrıları için kullanışlıdır.

Etkinleştirildikten sonra şunu kullanın:

```text
https://your-domain.com/random
```

## Rastgele Görsel API Ayarları

| Seçenek | Amaç |
| --- | --- |
| Etkinleştir | `/random` uç noktasını açar veya kapatır. Devre dışı olduğunda erişim reddedilir. |
| Dizinler | Rastgele API'nin hangi dizinleri kullanabileceğini sınırlar. Buraya dahil edilmeyen dizinler API tarafından kullanılamaz. |
| Çağrı demosu | Doğrudan kopyalayabileceğiniz rastgele API bağlantıları üretir. |

Birden fazla dizin seçebilirsiniz. Örneğin yalnızca `/landscape/` ve `/portrait/` izinliyse rastgele API yalnızca bu dizinlerden ve alt dizinlerinden dosya seçebilir.

## Rastgele Görsel API Parametreleri

| Parametre | Örnek | Amaç |
| --- | --- | --- |
| `dir` | `/landscape/` | Rastgele dizini belirtir. |
| `content` | `image` | Medya türünü belirtir. `image`, `video`, `audio` veya virgülle ayrılmış birleşimleri kullanın. |
| `orientation` | `auto` | Görsel yönünü filtreler. `portrait`, `landscape` veya `auto` kullanın. |
| `type` | `url` | Dönüş biçimi. Boş değer yönlendirme anlamına gelir, `url` düz metin URL döndürür, `json` JSON döndürür. |
| `origin` | `1` | Tam URL döndürmek için `type=url` ile kullanılır. |
| `age` | `all-ages,r12` | Yaş derecelendirmesine göre filtreler. |
| `tag` | `wallpaper,sky` | Yalnızca bu etiketleri içeren dosyaları döndürür. |
| `ex` | `private` | Bu etiketleri içeren dosyaları hariç tutar. |

## Dönüş Biçimleri

`type` olmadan API doğrudan rastgele dosya URL'sine yönlendirir.

`type=url` ile metin URL döndürür.

`type=json` ile dosya URL'si, dosya ID'si, dosya adı, dosya türü, etiketler, derecelendirme ve ilgili üst veriler dahil dosya bilgilerini döndürür.

## Erişim Kuralları

Rastgele Görsel API'si herkese açık erişim kurallarını izler:

| Kural | Etki |
| --- | --- |
| Dizin kısıtlaması | Yalnızca izin verilen dizinlerdeki dosyalar seçilebilir. |
| Engelleme listesi | Engelleme listesindeki dosyalar rastgele havuzdan çıkarılır. |
| İzin listesi modu | Etkin olduğunda yalnızca herkese açık erişime izin verilen dosyalar döndürülür. |
| Yaş derecelendirmesi | R12, R16, R18 ve benzeri içerik geçerli erişim moduna göre filtrelenir. |

Filtrelemeden sonra eşleşen dosya yoksa API eşleşen sonuç döndürmez.

## Önbellek

Rastgele Görsel API'si hızı artırmak için dizin aday havuzlarını önbelleğe alır.

Dosyalar değiştikten sonra ImgBed dizin önbelleği sürümünü günceller ve sonraki istekler aday havuzunu yeniden oluşturur. Boş dizinler, tekrarlanan sorguları önlemek için kısa süreliğine önbelleğe alınır.

## Herkese Açık Galeri

Herkese açık galeri, ziyaretçilerin görmesine izin verdiğiniz dizinler için salt okunur bir herkese açık gezinme sayfası sağlar.

Etkinleştirildikten sonra ziyaretçiler şunu açabilir:

```text
https://your-domain.com/browse/directory-name
```

## Herkese Açık Galeri Ayarları

| Seçenek | Amaç |
| --- | --- |
| Etkinleştir | Herkese açık galeriyi açar veya kapatır. Devre dışı olduğunda ziyaretçiler galeride gezemez. |
| Görsel yükleme modu | Önizlemelerin özgün görselleri mi küçük resimleri mi kullanacağını denetler. |
| Açık dizinler | Ziyaretçilerin hangi dizinlere erişebileceğini ayarlar. |

## Görsel Yükleme Modu

| Mod | Amaç |
| --- | --- |
| Özgün | Ziyaretçi sayfası özgün dosyaları doğrudan yükler. |
| Küçük resim | Ziyaretçi sayfası daha hızlı yükleme için küçük resimleri tercih eder. |

## Açık Dizinler

Açık dizinler ziyaretçilerin ne görebileceğini belirler.

Örneğin:

```text
/1/,/2/,/landscape/,/portrait/
```

Ziyaretçiler daha sonra şunlara erişebilir:

```text
https://your-domain.com/browse/1
https://your-domain.com/browse/2
https://your-domain.com/browse/landscape
https://your-domain.com/browse/portrait
```

`/2026/lucky/` gibi alt dizinler de açılabilir. Açık olmayan dizinlere erişen ziyaretçiler engellenir.

## Herkese Açık Galeri Özellikleri

| Özellik | Açıklama |
| --- | --- |
| Dizinlerde gezinme | Açık dizinlerdeki dosyaları ve alt dizinleri görüntüler. |
| Arama | Dosya adı, dosya ID'si veya etiketlere göre arama yapar. |
| Tür filtresi | Görselleri, videoları, sesleri veya diğer dosyaları filtreler. |
| Etiket filtresi | Seçili etiketleri dahil eder veya hariç tutar. |
| Yön filtresi | Yatay veya dikey görselleri filtreler. |
| Zaman filtresi | Yükleme zamanı aralığına göre filtreler. |
| Uzantı filtresi | Dosya uzantısına göre filtreler. |
| Bağlantı kopyalama | Dosya erişim bağlantılarını kopyalar. |
| Medya önizleme | Ziyaretçi sayfasında görselleri, videoları ve sesleri görüntüler veya oynatır. |

## Herkese Açık Galeri Erişim Kuralları

Herkese açık galeri de herkese açık erişim kurallarını izler:

| Kural | Etki |
| --- | --- |
| Açık dizinler | Yalnızca izin verilen dizinler gösterilir. |
| Erişim modu | İçerik geçerli yaş derecelendirmesi erişim moduna göre filtrelenir. |
| İzin listesi modu | Etkin olduğunda yalnızca herkese açık erişime izin verilen dosyalar gösterilir. |
| Engelleme listesi | Engelleme listesindeki dosyalar gizlenir. |
