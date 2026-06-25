# Yedekli Yedekleme ve Okuma Kaynağı Değiştirme

Yedekli yedekleme, zaten yüklenmiş bir dosyanın ek bir kopyasını saklar.

Hem birincil dosya hem de yedek dosya okuma kaynağı olarak kullanılabilir. Ziyaretçiler genellikle fark görmez. Tek fark, dosyanın hangi depolama kanalı tarafından sunulduğudur.

## Yedekli Yedekleme Neler Yapabilir?

| Özellik | Açıklama |
| --- | --- |
| Ek kopya saklama | Tek bir kanal arızası riskini azaltmak için dosyaları başka bir yükleme kanalına yedekler. |
| Okuma kaynağı değiştirme | Yedekleme başarılı olduktan sonra dosya okumalarını birincil kanal ile yedek kanal arasında değiştirir. |
| Tek dosya yedekleme | Dosya ayrıntı sayfasından bir dosyayı yedekler. |
| Toplu yedekleme | Yönetim sayfasında birden fazla dosya seçip birlikte yedekler. |
| Genel yedekli yedekleme | Dosyaları Diğer Ayarlar'dan klasör bazında yedekler. |

## Yedekli Yedekleme Girişi

Açın:

```text
System Settings -> Other Settings -> Redundant Backup
```

![Yedekli yedekleme](../../image/other/冗余备份截图.png)

Bu giriş, bir klasöre veya tüm dosyalara toplu olarak yedek eklemek için en uygundur.

Yedek kanal elle seçilebilir veya otomatik değiştirmeyi seçip ImgBed'in uygun bir yedek kanal bulmasına izin verebilirsiniz.

## Dosya Ayrıntılarından Yedekleme

Yönetim panelinde bir dosya ayrıntı sayfası açın ve yedeklemeye tıklayın.

![Dosya ayrıntılarında yedekleme](../../image/other/文件详情里文件备份.png)

Bu, önemli bir dosyayı gerektiğinde yedeklemek için en uygundur.

Yedekleme başarılı olduktan sonra dosya ayrıntı sayfası kullanılabilir okuma kaynaklarını gösterir.

## Seçime Göre Toplu Yedekleme

Yönetim panelinde birden fazla dosya seçin ve toplu yedekleme çalıştırın.

![Toplu yedekleme](../../image/other/批量备份截图.png)

Bu, bir dosya grubunu işlemek için en uygundur.

Seçilen dosyaları yedekleme, dosya ayrıntıları yedeklemesi ve Diğer Ayarlar'daki yedekli yedekleme aynı yedekleme sistemini kullanır. Yalnızca giriş noktaları farklıdır.

## Yedeklemeden Sonra Okuma Kaynağını Değiştirme

Yedekleme tamamlandıktan sonra dosya ayrıntı sayfası okuma kaynağını değiştirmenizi sağlar:

| Okuma Kaynağı | Açıklama |
| --- | --- |
| Birincil kanal | Özgün yükleme kanalından okur. |
| Yedek kanal | Yedek kanaldan okur. |

![Yedeklemeden sonra okuma kaynağını değiştirme](../../image/other/备份成功切换读取源.png)

Ziyaretçilerin dosyanın birincil kanaldan mı yoksa yedek kanaldan mı sunulduğunu bilmesine gerek yoktur.

Seçtiğiniz okuma kaynağı, sonraki dosya erişimleri için tercih edilen kaynak olur.

## Yedekleme Ne Zaman Atlanır?

Aşağıdaki durumlar yedekleme sırasında atlanır. Bunlar hata değildir.

| Durum | Neden Atlanır |
| --- | --- |
| Zaten yedeklenmiş | Zaten yedeği olan bir dosya yeniden yedeklenmez. |
| Birincil ve yedek kanallar aynı | Yedeklemenin anlamlı olması için başka bir kanalda saklanması gerekir. |
| Kullanılabilir yedek kanal yok | Uygun bir alternatif kanal yoktur. |

Kısaca: yedekler başka bir kanala gitmelidir ve zaten yedeklenmiş dosyalar tekrar ek alan tüketmez.

## Birincil Kanal ve Yedek Kanal

| Ad | Anlam |
| --- | --- |
| Birincil kanal | Dosya ilk yüklendiğinde kullanılan kanal. |
| Yedek kanal | Yedekli kopyayı saklayan kanal. |
| Birincil okuma kaynağı | Dosya şu anda birincil kanaldan okunuyor. |
| Yedek okuma kaynağı | Dosya şu anda yedek kanaldan okunuyor. |

Birincil ve yedek okuma kaynakları kullanıcıya dönük davranışta aynıdır.

Yedek dosya kullanılabilir olduğu sürece, yedek okuma kaynağına geçildikten sonra görseller, videolar ve indirme bağlantıları çalışmaya devam eder.

## Bir Dosya Silindiğinde Ne Olur?

Bir dosya silindiğinde ImgBed hem birincil dosyayı hem de yedek dosyayı siler.
