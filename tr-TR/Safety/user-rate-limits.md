# Kullanıcı Yükleme Sıklığı Sınırları

User rate limits, normal kullanıcıların veya ziyaretçilerin ana sayfadan ne kadar sık dosya yükleyebileceğini kontrol eder. Bu, herkese açık yükleme sayfalarının kötüye kullanılmasını önlemeye yardımcı olur.

Bu özellik yalnızca ana sayfa yüklemelerini etkiler. Yönetici yüklemeleri ve API Tokens ile yapılan yüklemeler user rate limits tarafından sınırlandırılmaz.

## Nereden Yapılandırılır?

Yönetim panelini açın, ardından şuraya gidin:

```text
System Settings -> Security Settings -> Upload Management -> User Rate Limits
```

![User rate limit ayarları](../../image/other/用户频控截图.png)

## Rate Limits Etkinleştirme

`Enable Rate Limits` açıldıktan sonra ImgBed son yüklemeleri yükleyenin IP adresine göre izler.

Varsayılan değerler:

| Ayar | Varsayılan | Açıklama |
| --- | --- | --- |
| Detection window | 1.5 hours | Yükleme kayıtlarının ne kadar geriye dönük sayılacağı. |
| Max file count | 20 | Detection window içindeki en fazla dosya sayısı. |
| Single file size limit | 20 MB | Tek dosyanın en fazla boyutu. |
| Total upload size limit | 200 MB | Detection window içindeki toplam yükleme boyutu sınırı. |

Örneğin 1,5 saatlik pencere, 20 dosya, dosya başına 20 MB ve toplam 200 MB ayarlandığında aynı IP'den yapılan yüklemeler herhangi bir limit aşılır aşılmaz engellenir.

## Dosya Türlerini Hariç Tutma

`Excluded upload file types`, normal kullanıcıların veya ziyaretçilerin seçili dosya kategorilerini yüklemesini engeller.

Kullanılabilir kategoriler:

| Tür | Açıklama |
| --- | --- |
| Images | jpg, png, webp, gif ve benzeri görsel dosyaları |
| Videos | mp4, webm, mov ve benzeri video dosyaları |
| Audio | mp3, flac, wav ve benzeri ses dosyaları |
| Documents | pdf, txt, md, docx ve benzeri belge dosyaları |
| Other | Yukarıdaki kategorilerin dışındaki zip, rar, exe, apk gibi dosyalar |

Varsayılan olarak bir tür seçili değildir; bu da izin verildiği anlamına gelir.

Bir türe tıklamak onu vurgular; bu, o türün engellendiği anlamına gelir.

`Other` seçilirse zip veya rar dosyası yükleyen ziyaretçiler engellenir ve bu dosya türünün desteklenmediği bildirilir.

## Engelleme Mesajları

Bir limit tetiklendiğinde kullanıcılar uygun mesajı görür:

![Çok sık yükleme mesajı](../../image/other/频繁报错提示.png)

| Senaryo | Mesajın anlamı |
| --- | --- |
| Tek dosya çok büyük | Dosya çok büyük; yüklemeden önce sıkıştırılmalıdır. |
| Dosya türü engellendi | Bu dosya türü desteklenmiyor. Kaldırıp tekrar deneyin. |
| Yüklemeler çok sık | Son yüklemeler çok sık; yeniden deneme zamanı gösterilir. |
| Toplam boyut çok yüksek | Son toplam yükleme boyutu çok yüksek; yeniden deneme zamanı gösterilir. |

## Ne Zaman Etkinleştirilmeli?

Yükleme ana sayfanız herkese açıksa user rate limits etkinleştirin.

Yaygın nedenler:

- Script ile toplu yükleme yapılmasından endişe ediyorsunuz.
- Ziyaretçilerin büyük dosya yüklemelerini sınırlamak istiyorsunuz.
- Normal kullanıcıların arşiv veya kurulum dosyası değil, yalnızca görsel yüklemesini istiyorsunuz.
- Herkese açık yüklemeyi açık tutarken kaynak kullanımını kontrol etmek istiyorsunuz.

Site yalnızca size aitse veya yalnızca yöneticiler yükleme yapabiliyorsa bu ayarı kapalı bırakabilirsiniz.
