# Cloudflare R2 Kanalı Ekleme

## Ne Zaman Uygun?

Cloudflare R2'yi şu durumlarda kullanın:

- ImgBed siteniz zaten Cloudflare üzerinde çalışıyorsa ve dosyaları aynı Cloudflare hesabındaki bir R2 bucket içinde saklamak istiyorsanız.
- Ayrı bir S3 endpoint, access key ve secret key yapılandırmak istemiyorsanız.
- Okuma ve yazma işlemlerinin Worker veya Pages R2 binding üzerinden en az kurulumla çalışmasını istiyorsanız.

Kısaca:

R2 kanalı ImgBed yönetim panelinde elle oluşturulmaz. Önce Cloudflare projesine bir R2 bucket bağlamanız gerekir ve binding değişken adı tam olarak `img_r2` olmalıdır.

## Başlamadan Önce Gerekenler

- Cloudflare hesabı.
- Önceden oluşturulmuş bir R2 bucket.
- ImgBed'in dağıtıldığı Cloudflare projesini yönetme yetkisi.

## Cloudflare'da Yapılandırma

### 1. R2 Bucket Oluşturun

1. Cloudflare Dashboard'a giriş yapın.
2. `R2 Object Storage` bölümünü açın.
3. Bucket oluştur düğmesine tıklayın.
4. Bucket adı seçin, örneğin `imgbed`.

Yüklenen dosyalar bu bucket içinde saklanır.

![R2 bucket oluşturma](../../image/upload/cloudflare-r2/创建一个存储桶img-r2.png)

### 2. Bucket'ı ImgBed Projesine Bağlayın

Binding konumu dağıtım türüne göre değişir:

| Dağıtım Türü | Binding Konumu |
| --- | --- |
| Pages | `Current Pages project -> Settings -> Functions -> R2 bucket bindings` |
| Worker | `Current Worker -> Settings -> Bindings -> R2 bucket bindings` |

Binding eklerken önemli alanlar şunlardır:

| Alan | Değer |
| --- | --- |
| Variable name | `img_r2` |
| R2 bucket | Oluşturduğunuz bucket'ı seçin. |

Değişken adı tam olarak `img_r2` olmalıdır. R2 dosyalarını yükleme, okuma ve silme işlemlerinin tamamı bu binding adına bağlıdır.

### 3. Projeyi Yeniden Dağıtın

Binding'i kaydettikten sonra ImgBed'i yeniden dağıtın. Böylece Worker veya Pages runtime `img_r2` değerine erişebilir.

## ImgBed'de Ne Göreceksiniz?

R2 binding kullanılabilir hale geldikten sonra şurayı açın:

1. Sistem Ayarları.
2. Yükleme Ayarları.
3. `Cloudflare R2` kanalı.

Sistem otomatik olarak tek bir sabit kanal oluşturur:

| Alan | Sabit Değer |
| --- | --- |
| Kanal adı | `Cloudflare R2` |
| Kanal türü | `cfr2` |
| Depolama modu | `binding` |
| Yapılandırma kaynağı | Environment binding |

Bu sabit bir binding kanalıdır. Oluşturmak için Kanal Ekle düğmesine basmanız gerekmez ve normal kanallar gibi silinemez.

## Yönetim Panelinde Düzenlenebilen Alanlar

| Alan | Ne işe yarar | Zorunlu |
| --- | --- | --- |
| Enable channel | R2'nin yükleme seçiminde kullanılıp kullanılmayacağını belirler. | Evet |
| Account ID | Yalnızca kota limitleri açıksa ve resmi R2 kullanımını sorgulamak istiyorsanız gerekir. | Kota limitleri açıksa önerilir |
| Bucket name | Yalnızca kota limitleri açıksa ve resmi R2 kullanımını sorgulamak istiyorsanız gerekir. | Kota limitleri açıksa önerilir |
| Quota limit | Bu R2 kanalının kapasiteye göre yükleme seçiminde dikkate alınıp alınmayacağını belirler. | Hayır |
| Threshold | Kullanım belirtilen yüzdeye ulaşınca bu kanala yazmayı durdurur. | Kota limitleri açıksa evet |

Account ID değerini Cloudflare dashboard'daki hesap bilgisi panelinden kopyalayabilirsiniz. ImgBed'in R2 kota kullanımını sorgulamasını ve uygulamasını istiyorsanız doldurun.

![Account ID alma](../../image/upload/cloudflare-r2/获取账户id.png)

## Kurulum Adımları

1. Cloudflare'da bir R2 bucket oluşturun.
2. ImgBed projesinin Cloudflare ayarlarını açın.
3. R2 bucket binding ekleyin.
4. `Variable name` alanını `img_r2` olarak ayarlayın.
5. Oluşturduğunuz R2 bucket'ı seçin.
6. Binding'i kaydedin ve ImgBed'i yeniden dağıtın.
7. `ImgBed -> System Settings -> Upload Settings` bölümüne dönün.
8. `Cloudflare R2` kanalının göründüğünü ve etkin olduğunu doğrulayın.

R2'nin kapasiteye göre yükleme seçiminde yer almasını istiyorsanız quota limit'i etkinleştirin, ardından kaydetmeden önce Account ID, bucket name, quota limit ve threshold değerlerini girin.

![Kota limitlerini yapılandırma](../../image/upload/cloudflare-r2/配置容量限制.png)

## Nasıl Kontrol Edilir?

- Sabit `Cloudflare R2` kanalı Yükleme Ayarları'nda görünür.
- Kanal kartında etkin olduğu görülür.
- Küçük bir test dosyası başarıyla yüklenir ve dönen bağlantı normal şekilde açılır.
- Dosya açılırken `R2 database binding is not configured` hatası dönüyorsa runtime `img_r2` binding değerini almamıştır. Cloudflare'daki binding adını kontrol edin ve projeyi yeniden dağıtın.
