# Yedek Kopya ve Okuma Kaynağı Değiştirme

Redundant backup, zaten yüklenmiş bir dosyanın ek kopyasını saklar.

Hem birincil dosya hem yedek dosya read sources olarak kullanılabilir. Ziyaretçiler genellikle bir fark görmez. Tek fark dosyanın hangi depolama kanalından sunulduğudur.

## Redundant Backup Neler Yapabilir?

| Özellik | Açıklama |
| --- | --- |
| Ek kopya saklama | Tek bir kanal arızası riskini azaltmak için dosyaları başka bir upload channel içine yedekler. |
| Read source değiştirme | Backup başarılı olduktan sonra dosya okumayı primary channel ve backup channel arasında değiştirir. |
| Single-file backup | Dosya ayrıntı sayfasından tek dosyayı yedekler. |
| Batch backup | Yönetim sayfasında birden fazla dosya seçip birlikte yedekler. |
| Global redundant backup | Other Settings içinden klasöre göre dosya yedekler. |

## Redundant Backup Girişi

Şurayı açın:

```text
System Settings -> Other Settings -> Redundant Backup
```

![Redundant backup](../../image/other/冗余备份截图.png)

Bu giriş, bir klasöre veya tüm dosyalara toplu yedek eklemek için uygundur.

Backup channel elle seçilebilir veya automatic switching seçilip ImgBed'in uygun yedek kanalı bulması sağlanabilir.

## Dosya Ayrıntısından Backup

Yönetim panelinde dosya ayrıntı sayfasını açın ve backup düğmesine tıklayın.

![Dosya ayrıntısında backup](../../image/other/文件详情里文件备份.png)

Bu, önemli tek bir dosyayı gerektiğinde yedeklemek için uygundur.

Backup başarılı olduktan sonra dosya ayrıntı sayfası kullanılabilir read sources değerlerini gösterir.

## Seçime Göre Batch Backup

Yönetim panelinde birden fazla dosya seçin ve batch backup çalıştırın.

![Batch backup](../../image/other/批量备份截图.png)

Bu, bir dosya grubunu işlemek için uygundur.

Selection backup, file details backup ve Other Settings altındaki redundant backup aynı backup system'i kullanır. Sadece farklı giriş noktalarıdır.

## Backup Sonrası Read Source Değiştirme

Backup tamamlandıktan sonra dosya ayrıntı sayfası read source değiştirmenize izin verir:

| Read Source | Açıklama |
| --- | --- |
| Primary channel | Özgün upload channel üzerinden okur. |
| Backup channel | Backup channel üzerinden okur. |

![Backup sonrası read source değiştirme](../../image/other/备份成功切换读取源.png)

Ziyaretçilerin dosyanın primary mi backup channel üzerinden mi sunulduğunu bilmesi gerekmez.

Seçtiğiniz read source sonraki dosya erişimleri için tercih edilen kaynak olur.

## Backup Ne Zaman Atlanır?

Backup sırasında şu durumlar atlanır. Bunlar hata değildir.

| Durum | Neden Atlanır |
| --- | --- |
| Already backed up | Zaten backup bulunan dosya tekrar yedeklenmez. |
| Primary and backup channels are the same | Backup anlamlı olması için başka bir kanalda saklanmalıdır. |
| No usable backup channel | Uygun alternatif kanal yoktur. |

Kısaca: backup başka bir kanala gitmelidir ve zaten yedeklenmiş dosyalar tekrar alan tüketmez.

## Primary Channel ve Backup Channel

| Ad | Anlamı |
| --- | --- |
| Primary channel | Dosya ilk yüklendiğinde kullanılan kanal. |
| Backup channel | Redundant copy saklayan kanal. |
| Primary read source | Dosya şu anda primary channel üzerinden okunuyor. |
| Backup read source | Dosya şu anda backup channel üzerinden okunuyor. |

Primary ve backup read sources kullanıcı açısından aynı davranır.

Backup file kullanılabilir olduğu sürece görseller, videolar ve download links backup read source'a geçtikten sonra çalışmaya devam eder.

## Dosya Silindiğinde Ne Olur?

Bir dosya silindiğinde ImgBed hem primary file hem backup file değerini siler.
