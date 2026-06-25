# Kullanıcı Yükleme Sıklığı Sınırları

Kullanıcı yükleme sıklığı sınırları, normal kullanıcıların veya ziyaretçilerin ana sayfadan ne kadar sık dosya yükleyebileceğini kontrol eder. Bu, herkese açık yükleme sayfalarının kötüye kullanılmasını önlemeye yardımcı olur.

Bu özellik yalnızca ana sayfa yüklemelerini etkiler. Yönetici yüklemeleri ve API Tokens ile yapılan yüklemeler kullanıcı sıklık sınırları tarafından sınırlandırılmaz.

## Nereden Yapılandırılır?

Yönetim panelini açın, ardından şuraya gidin:

```text
System Settings -> Security Settings -> Upload Management -> User Rate Limits
```

![Kullanıcı sıklık sınırı ayarları](../../image/other/用户频控截图.png)

## Sıklık Sınırlarını Etkinleştirme

`Sıklık Sınırlarını Etkinleştir` açıldıktan sonra ImgBed son yüklemeleri yükleyenin IP adresine göre izler.

Varsayılan değerler:

| Ayar | Varsayılan | Açıklama |
| --- | --- | --- |
| Algılama penceresi | 1.5 hours | Yükleme kayıtlarının ne kadar geriye dönük sayılacağını belirler. |
| En fazla dosya sayısı | 20 | Algılama penceresinde izin verilen en fazla dosya sayısı. |
| Tek dosya boyutu sınırı | 20 MB | Bir dosyanın en fazla boyutu. |
| Toplam yükleme boyutu sınırı | 200 MB | Algılama penceresindeki toplam yükleme boyutu sınırı. |

Örneğin 1,5 saatlik pencere, 20 dosya, dosya başına 20 MB ve toplam 200 MB ayarlandığında aynı IP'den yapılan yüklemeler yapılandırılmış herhangi bir sınır aşılır aşılmaz engellenir.

## Dosya Türlerini Hariç Tutma

`Hariç tutulan yükleme dosya türleri`, normal kullanıcıların veya ziyaretçilerin seçili dosya kategorilerini yüklemesini engeller.

Kullanılabilir kategoriler:

| Tür | Açıklama |
| --- | --- |
| Görseller | jpg, png, webp, gif ve benzeri görsel dosyaları |
| Videolar | mp4, webm, mov ve benzeri video dosyaları |
| Ses | mp3, flac, wav ve benzeri ses dosyaları |
| Belgeler | pdf, txt, md, docx ve benzeri belge dosyaları |
| Diğer | Yukarıdaki kategorilerin dışındaki zip, rar, exe, apk gibi dosyalar |

Varsayılan olarak hiçbir tür seçili değildir; bu da o türün izinli olduğu anlamına gelir.

Bir türe tıklamak onu vurgular; bu, o türün engellendiği anlamına gelir.

`Diğer` seçilirse zip veya rar dosyası yükleyen ziyaretçiler engellenir ve bu dosya türünün desteklenmediği bildirilir.

## Engelleme Mesajları

Bir sınır tetiklendiğinde kullanıcılar uygun mesajı görür:

![Çok sık yükleme mesajı](../../image/other/频繁报错提示.png)

| Senaryo | Mesajın anlamı |
| --- | --- |
| Tek dosya çok büyük | Dosya çok büyük; yüklemeden önce sıkıştırılmalıdır. |
| Dosya türü engellendi | Bu dosya türü desteklenmiyor. Kaldırıp tekrar deneyin. |
| Yüklemeler çok sık | Son yüklemeler çok sık; yeniden deneme zamanı gösterilir. |
| Toplam boyut çok yüksek | Son toplam yükleme boyutu çok yüksek; yeniden deneme zamanı gösterilir. |

## Ne Zaman Etkinleştirilmeli?

Yükleme ana sayfanız herkese açıksa kullanıcı yükleme sıklığı sınırlarını etkinleştirin.

Yaygın nedenler:

- Betikli toplu yüklemelerden endişe ediyorsunuz.
- Ziyaretçilerin büyük dosya yüklemelerini sınırlamak istiyorsunuz.
- Normal kullanıcıların arşiv veya kurulum dosyası değil, yalnızca görsel yüklemesini istiyorsunuz.
- Herkese açık yüklemeyi açık tutarken kaynak kullanımını kontrol etmek istiyorsunuz.

Site yalnızca size aitse veya yalnızca yöneticiler yükleme yapabiliyorsa bu ayarı kapalı bırakabilirsiniz.
