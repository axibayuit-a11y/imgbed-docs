# Görsel Moderasyonu ve Erişim Modu

Görsel moderasyonu, yüklenen görsellere yaş derecelendirmesi atar. Erişim modu, hangi derecelendirmelerin herkese açık erişimde görüneceğini belirler.

Bu ayar public gallery, herkese açık dosya URL'leri ve random image API üzerinde etkilidir. Yönetim panelini kısıtlamaz. Yöneticiler tüm dosyaları görmeye ve yönetmeye devam eder.

## Nereden Yapılandırılır?

Yönetim panelini açın, ardından şuraya gidin:

```text
System Settings -> Security Settings -> Upload Management -> Image Moderation
```

Ana ayarlar şunlardır:

- Access mode
- Enable moderation
- Moderation provider

## Access Mode Ne İşe Yarar?

Access mode, hangi yaş derecelendirmelerinin herkese açık gösterilebileceğini belirler.

Geçerli modlar:

| Access Mode | Herkese Açık Görünen Derecelendirmeler |
| --- | --- |
| Adult mode | General, R12, R16, R18 |
| Youth mode | General, R12, R16 |
| Teen mode | General, R12 |
| Child mode | Yalnızca General |

Varsayılan Adult mode değeridir.

Özel siteler veya yetişkin içerikli siteler için Adult mode uygun olabilir. Daha kontrollü bir public gallery için Youth, Teen veya Child mode seçin.

## Moderasyonu Etkinleştirmek Ne Sağlar?

Moderasyon etkin olduğunda ImgBed yükleme sırasında seçili moderation provider'ı çağırır ve algılanan yaş derecelendirmesini kaydeder.

Ana derecelendirmeler:

| Derecelendirme | Anlamı |
| --- | --- |
| General | Güvenli herkese açık içerik |
| R12 | Hafif hassas içerik |
| R16 | Orta düzey hassas içerik |
| R18 | Yetişkin içerik |

Moderasyon sonucu herkese açık erişime karar verirken kullanılır.

Moderasyon etkin değilse veya eski dosyaların derecelendirmesi yoksa bu dosyalar unrated kabul edilir. Unrated dosyalar yalnızca derecelendirme olmadığı için public gallery veya random image API'den otomatik kaldırılmaz.

## Moderation Provider Seçimi

Kullanılabilir sağlayıcılar:

- moderatecontent.com
- nsfwjs
- Sightengine

Her sağlayıcının gereksinimi farklıdır:

- moderatecontent.com genellikle API Key ister.
- nsfwjs genellikle API endpoint URL ister.
- Sightengine API user ve API secret ister.

Hesabınıza, erişilebilirliğe ve algılama kalitesine göre seçin. Moderasyon etkin ve doğru yapılandırılmışsa ImgBed yükleme sırasında görsel derecelendirmesi yazmaya çalışır.

## Public Gallery Üzerindeki Etkisi

Public gallery dosyaları access mode değerine göre filtreler.

Örnekler:

- Adult mode: R18 görseller görünebilir.
- Youth mode: R18 görseller gizlenir.
- Teen mode: R16 ve R18 görseller gizlenir.
- Child mode: yalnızca General görseller gösterilir.

Bu yalnızca normal herkese açık erişimi etkiler. Yönetim paneli tüm dosyaları göstermeye devam eder.

## Herkese Açık Dosya URL'leri Üzerindeki Etkisi

Herkese açık dosya URL'leri, ziyaretçilerin açtığı doğrudan görsel bağlantılarıdır.

Dosyanın derecelendirmesi geçerli access mode tarafından izin verilen düzeydeyse ImgBed özgün görseli döndürür.

Derecelendirme izin verilen seviyenin üzerindeyse normal herkese açık erişim özgün görseli döndürmez. Bunun yerine ImgBed yapılandırılmış blocked result veya yer tutucu görsel döndürür.

Örnek:

- Geçerli mod Child mode.
- Görsel R18 olarak derecelendirilmiş.
- Ziyaretçi herkese açık URL'yi doğrudan açıyor.
- ImgBed bu ziyaretçiye R18 özgün görseli döndürmez.

![Kısıtlanmış dosya görseli](../../image/Safety/文件受限图.png)

Yönetim panelinde dosyaları görüntüleyen yöneticiler bu kısıtlamadan etkilenmez.

## Random Image API Üzerindeki Etkisi

Random image API de aday havuzunu access mode değerine göre filtreler.

Child mode içinde rastgele görseller yalnızca General dereceli dosyalardan seçilir.

Youth mode içinde rastgele görseller General, R12 ve R16 dosyalardan gelebilir; R18 dosyalar dahil edilmez.

Bu, random image API'nin public gallery kısıtlamalarını aşmasını engeller.

## Liste Kurallarıyla İlişkisi

Access mode tek herkese açık erişim kuralı değildir. Allow/block list kurallarıyla birlikte çalışır.

Basitçe:

- Allowlist içeriği önce public kabul edilir.
- Blocklist içeriği normal ziyaretçiler tarafından doğrudan görüntülenemez.
- İki listede de olmayan içerik ardından access mode ile kontrol edilir.

Bir görsel hem yaş derecelendirmesi hem liste kurallarıyla kısıtlanmışsa normal ziyaretçiler özgün dosyayı yine doğrudan göremez.

## Önerilen Ayarlar

Herkese açık siteler için:

- Moderasyonu etkinleştirin.
- Sitenin hedef kitlesine uygun access mode seçin.
- Her yaş grubuna açık ziyaretçiler için Child mode veya Teen mode kullanın.
- Yetişkin içeriğin herkese açık görünmesini istemiyorsanız Adult mode kullanmaktan kaçının.
- Yönetim panelindeki dosya derecelendirmelerini inceleyip gerektiğinde elle düzeltin.

Özel veya kişisel siteler için:

- Adult mode genellikle uygundur.
- İşinize yarıyorsa moderasyonu etkinleştirin.
- Yönetim panelinde derecelendirmeleri gerektiğinde inceleyip düzeltin.

## FAQ

### Access Mode Değiştirince Dosyalar Yönetim Panelinden Kaybolur mu?

Hayır.

Access mode yalnızca normal herkese açık erişimi etkiler. Yönetim panelini etkilemez.

### Child Mode'a Geçince Public Gallery Neden Daha Az Görsel Gösterdi?

Child mode yalnızca General dereceli dosyaların herkese açık gösterilmesine izin verir. R12, R16 ve R18 dosyalar filtrelenir.

### Herkese Açık URL'ler Adult Images Açabilir mi?

Geçerli access mode bu derecelendirmeye izin vermiyorsa normal herkese açık URL'ler özgün görseli döndürmez.

### Random Image API Kısıtlı Görseller Döndürebilir mi?

Hayır.

Random image API adayları geçerli access mode değerine göre filtreler.

### Eski Unrated Images Ne Olur?

Unrated görseller yalnızca moderasyon sonucu olmadığı için otomatik gizlenmez. Derecelendirmelerini daha sonra yönetim panelinde değiştirebilirsiniz.
