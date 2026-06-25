# Görsel Moderasyonu ve Erişim Modu

Görsel moderasyonu, yüklenen görsellere yaş derecelendirmeleri atar. Erişim modu, herkese açık erişimde hangi derecelendirmelerin görülebileceğini kontrol eder.

Bu ayar herkese açık galeri, herkese açık dosya URL'leri ve rastgele görsel API üzerinde etkilidir. Yönetim panelini kısıtlamaz. Yöneticiler tüm dosyaları görmeye ve yönetmeye devam edebilir.

## Nereden Yapılandırılır?

Yönetim panelini açın, ardından şuraya gidin:

```text
System Settings -> Security Settings -> Upload Management -> Image Moderation
```

Ana ayarlar şunlardır:

- Erişim modu
- Moderasyonu etkinleştir
- Moderasyon sağlayıcısı

## Erişim Modu Ne İşe Yarar?

Erişim modu hangi yaş derecelendirmelerinin herkese açık gösterilebileceğini belirler.

Geçerli modlar:

| Erişim Modu | Herkese Açık Görünen Derecelendirmeler |
| --- | --- |
| Yetişkin modu | General, R12, R16, R18 |
| Gençlik modu | General, R12, R16 |
| Ergen modu | General, R12 |
| Çocuk modu | Yalnızca General |

Varsayılan değer yetişkin modudur.

Özel siteler veya yetişkin içerikli siteler için yetişkin modu uygun olabilir. Daha kontrollü bir herkese açık galeri için gençlik, ergen veya çocuk modunu seçin.

## Moderasyonu Etkinleştirmek Ne Yapar?

Moderasyon etkin olduğunda ImgBed yükleme sırasında seçili moderasyon sağlayıcısını çağırır ve algılanan yaş derecelendirmesini kaydeder.

Ana derecelendirmeler:

| Derecelendirme | Anlamı |
| --- | --- |
| General | Herkese açık kullanım için güvenli içerik |
| R12 | Hafif hassas içerik |
| R16 | Daha hassas içerik |
| R18 | Yetişkin içeriği |

Moderasyon sonucu herkese açık erişime karar verirken kullanılır.

Moderasyon etkin değilse veya eski dosyaların derecelendirmesi yoksa bu dosyalar derecelendirilmemiş kabul edilir. Derecelendirilmemiş dosyalar yalnızca derecelendirme olmadığı için herkese açık galeriden veya rastgele görsel API'den otomatik olarak kaldırılmaz.

## Moderasyon Sağlayıcısı Seçimi

Kullanılabilir sağlayıcılar:

- moderatecontent.com
- nsfwjs
- Sightengine

Her sağlayıcının gereksinimleri farklıdır:

- moderatecontent.com genellikle API Key ister.
- nsfwjs genellikle API uç noktası URL'si ister.
- Sightengine API user ve API secret ister.

Hesabınıza, erişilebilirliğe ve algılama kalitesine göre seçim yapın. Moderasyon etkinleştirilmiş ve doğru yapılandırılmışsa ImgBed yükleme sırasında görsel derecelendirmesini yazmayı dener.

## Herkese Açık Galeri Üzerindeki Etkisi

Herkese açık galeri dosyaları erişim moduna göre filtreler.

Örnekler:

- Yetişkin modu: R18 görseller görünebilir.
- Gençlik modu: R18 görseller gizlenir.
- Ergen modu: R16 ve R18 gizlenir.
- Çocuk modu: yalnızca General görseller gösterilir.

Bu yalnızca normal herkese açık erişimi etkiler. Yönetim paneli tüm dosyaları göstermeye devam eder.

## Herkese Açık Dosya URL'leri Üzerindeki Etkisi

Herkese açık dosya URL'leri, ziyaretçilerin açtığı doğrudan görsel bağlantılarıdır.

Dosyanın derecelendirmesi geçerli erişim modu tarafından izin verilen düzeydeyse ImgBed özgün görseli döndürür.

Derecelendirme izin verilen düzeyin üzerindeyse normal herkese açık erişim özgün görseli döndürmez. Bunun yerine ImgBed yapılandırılmış engelleme sonucunu veya yer tutucu görseli döndürür.

Örnek:

- Geçerli mod çocuk modudur.
- Görsel R18 olarak derecelendirilmiştir.
- Bir ziyaretçi herkese açık URL'yi doğrudan açar.
- ImgBed bu ziyaretçiye özgün R18 görselini döndürmez.

![Kısıtlı dosya görseli](../../image/Safety/文件受限图.png)

Yönetim panelinde dosyaları görüntüleyen yöneticiler bu kısıtlamadan etkilenmez.

## Rastgele Görsel API Üzerindeki Etkisi

Rastgele görsel API de aday havuzunu erişim moduna göre filtreler.

Çocuk modunda rastgele görseller yalnızca General dereceli dosyalardan seçilir.

Gençlik modunda rastgele görseller General, R12 ve R16 dosyalardan gelebilir; R18 dosyalar dahil edilmez.

Bu, rastgele görsel API'nin herkese açık galeri kısıtlamalarını aşmasını engeller.

## Liste Kurallarıyla İlişkisi

Erişim modu tek herkese açık erişim kuralı değildir. İzin/engelleme listesi kurallarıyla birlikte çalışır.

Basitçe:

- İzin listesine alınmış içerik önce herkese açık kabul edilir.
- Engelleme listesine alınmış içerik normal ziyaretçiler tarafından doğrudan görüntülenemez.
- İki listede de olmayan içerik daha sonra erişim moduna göre kontrol edilir.

Bir görsel hem yaş derecelendirmesi hem de liste kurallarıyla kısıtlanmışsa normal ziyaretçiler özgün dosyayı yine doğrudan göremez.

## Önerilen Ayarlar

Herkese açık siteler için:

- Moderasyonu etkinleştirin.
- Sitenin hedef kitlesine uygun erişim modunu seçin.
- Her yaş grubuna açık ziyaretçiler için çocuk modu veya ergen modunu kullanın.
- Yetişkin içeriğin herkese açık görünmesini istemiyorsanız yetişkin modundan kaçının.
- Yönetim panelinde dosya derecelendirmelerini inceleyip gerektiğinde elle düzeltin.

Özel veya kişisel siteler için:

- Yetişkin modu genellikle uygundur.
- İşinize yarıyorsa moderasyonu etkinleştirin.
- Yönetim panelinde derecelendirmeleri gerektiğinde inceleyip düzeltin.

## FAQ

### Erişim Modunu Değiştirince Dosyalar Yönetim Panelinden Kaybolur mu?

Hayır.

Erişim modu yalnızca normal herkese açık erişimi etkiler. Yönetim panelini etkilemez.

### Çocuk Moduna Geçince Herkese Açık Galeri Neden Daha Az Görsel Gösterdi?

Çocuk modu yalnızca General dereceli dosyaların herkese açık gösterilmesine izin verir. R12, R16 ve R18 dosyalar filtrelenir.

### Herkese Açık URL'ler Yetişkin Görselleri Açabilir mi?

Geçerli erişim modu bu derecelendirmeye izin vermiyorsa normal herkese açık URL'ler özgün görseli döndürmez.

### Rastgele Görsel API Kısıtlı Görseller Döndürebilir mi?

Hayır.

Rastgele görsel API adayları geçerli erişim moduna göre filtreler.

### Eski Derecelendirilmemiş Görsellere Ne Olur?

Derecelendirilmemiş görseller yalnızca moderasyon sonucu olmadığı için otomatik olarak gizlenmez. Derecelendirmelerini daha sonra yönetim panelinde düzeltebilirsiniz.
