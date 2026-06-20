# Magnet Transfer

Magnet transfer, magnet link üzerinden dosyaları indirir ve seçtiğiniz bulut depolama kanalına otomatik olarak yükler.

Anime bölümleri, videolar, arşivler ve benzeri dosyaları taşımak için kullanışlıdır. Magnet link yapıştırdığınızda ImgBed arka planda bir indirme görevi oluşturur. İndirme tamamlandıktan sonra dosya ImgBed'e yüklenir ve son bağlantı yükleme listesinde görünür.

![Magnet transfer](../../image/other/磁力链接/磁力链接.png)

## Nerede Kullanılır?

Magnet transfer girişi ana sayfadaki yükleme alanındadır.

Magnet link'i giriş kutusuna yapıştırın, `Transfer` seçin, ardından yükleyin.

![Anime yükleme](../../image/other/磁力链接/上传番剧.png)

## İlk Kullanımdan Önce

Önce yönetim panelinde magnet transfer yapılandırın.

Genellikle şunlar gerekir:

1. İndirme görevini çalıştırmak için GitHub hesabı.
2. Google Drive veya OneDrive gibi bir cloud upload channel.
3. Hedef yükleme dizini.
4. Görev zaman aşımı.

Ayarlar hazır olduğunda ana sayfaya dönün ve transfer başlatmak için magnet link yapıştırın.

## Magnet Link Yükleme

1. Magnet link'i ana sayfadaki yükleme kutusuna yapıştırın.
2. Modun `Transfer` olduğundan emin olun.
3. Upload düğmesine tıklayın.
4. ImgBed'in magnet task oluşturmasını bekleyin.
5. Görev başladıktan sonra ilerlemeyi kontrol etmek için sağ alt köşedeki `Magnet Tasks` yüzen panelini kullanın.

Download ve upload zaman alabilir. Hız magnet kaynağına, GitHub runtime ortamına ve seçili cloud storage channel'a bağlıdır.

![Magnet indiriliyor](../../image/other/磁力链接/磁力链接下载中.png)

## Tamamlandıktan Sonra

Görev tamamlandığında yükleme listesinde dosya adı ve bağlantı görünür.

Videolarda video preview, görsellerde image preview, diğer dosyalarda normal dosya simgesi gösterilir.

![İndirilen video](../../image/other/磁力链接/下载好后的视频.png)

Şunları kopyalayabilirsiniz:

| Bağlantı Türü | Kullanım |
| --- | --- |
| Original link | Doğrudan dosya erişimi |
| Markdown | Markdown yazıları veya notlar |
| HTML | Web sayfası kodu |
| BBCode | BBCode destekleyen forumlar |

## Magnet Task Paneli

Sağ alttaki magnet task paneli görev sayısını, görev adını, ilerlemeyi ve son durumu gösterir.

Yaygın durumlar:

| Durum | Anlamı |
| --- | --- |
| Waiting | Görev oluşturuldu ve çalışmayı bekliyor. |
| Downloading | Magnet kaynağı indiriliyor. |
| Uploading | Dosya indirildi ve bulut depolamaya yükleniyor. |
| Completed | Upload başarılı, bağlantı kopyalanabilir. |
| Failed | Görev başarıyla tamamlanmadı. Mesajı kontrol edip yeniden deneyin. |

## İpuçları

- Magnet link birden fazla dosya içeriyorsa ImgBed gösterim için ana tamamlanan dosyaya öncelik verir.
- Büyük dosyalar daha uzun sürer. Sayfayı yenilemeden önce görevin bitmesini bekleyin.
- Magnet kaynağında kullanılabilir peers yoksa indirme çok yavaş olabilir veya başarısız olabilir.
- Bulut hesabında kota kalmadıysa, yetkilendirme süresi dolduysa veya yükleme dizini yanlışsa görev başarısız olabilir.
- Video preview yükleme tamamlandıktan birkaç saniye sonra görünebilir.

## FAQ

### Magnet Link Yapıştırdıktan Sonra Hiçbir Şey Başlamıyor

Yönetim panelinde magnet transfer etkin olduğundan ve kullanılabilir bir GitHub hesabı ile bulut kanalının seçildiğinden emin olun.

### İndirme Hep Yavaş

Magnet hızı kaynağın kendisine bağlıdır. Kullanılabilir peers yoksa indirme çok yavaş veya imkansız olabilir.

### Upload Sonrası Preview Görünmüyor

Önce dosya bağlantısının açıldığını doğrulayın. Video dosyalarının tarayıcıda yüklenmesi kısa sürebilir veya bağlantıyı doğrudan açabilirsiniz.

### Görev Başarısız Olursa Neyi Kontrol Etmeliyim?

Magnet link'in geçerli olup olmadığını, bulut kanalının çalışıp çalışmadığını ve yükleme dizininin doğru olup olmadığını kontrol edin. Sonra görevi tekrar gönderin.
