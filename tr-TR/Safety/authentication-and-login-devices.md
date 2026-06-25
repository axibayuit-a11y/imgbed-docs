# Kimlik Doğrulama ve Giriş Cihazı Yönetimi

`Kimlik Doğrulama Yönetimi` ve `Giriş Cihazı Yönetimi`, ImgBed yönetim panelinizi, herkese açık yükleme girişini ve WebDAV erişimini korur.

Bu sayfayı erişim kimlik bilgilerini ayarlamak, oturum açmış cihazları incelemek ve gerektiğinde eski oturumları iptal etmek için kullanın.

## Nereden Yapılandırılır?

Yönetim panelini açın, ardından şuraya gidin:

```text
System Settings -> Security Settings
```

Sayfada iki ana alan bulunur:

- Kimlik Doğrulama Yönetimi
- Giriş Cihazı Yönetimi

![Kimlik doğrulama yönetimi](../../image/Safety/认证管理界面.png)

## Kimlik Doğrulama Yönetimi Ne İşe Yarar?

Kimlik Doğrulama Yönetimi erişim kimlik bilgilerini saklar.

İki tür vardır:

- Kullanıcı tarafı kimlik doğrulaması
- Yönetici tarafı kimlik doğrulaması

## Kullanıcı Tarafı Kimlik Doğrulaması

Kullanıcı tarafı kimlik doğrulaması, yükleme parolasıdır.

Yükleme parolası ayarlandıktan sonra normal ziyaretçiler yükleme sayfasını kullanmadan önce bu parolayı girmelidir. Herkese açık yükleme sayfasının herkese açık olmasını istemediğiniz durumlarda kullanışlıdır.

![Kullanıcı giriş sayfası](../../image/Safety/用户端登录界面.png)

### Yükleme Parolasını Ayarlama

Yükleme parolası yapılandırıldığında:

- Ziyaretçiler yükleme sayfasını kullanmadan önce parolayı girmelidir.
- Yükleme yalnızca parola kabul edildikten sonra kullanılabilir.
- Kullanıcı tarafı cihaz oturumları etkinse ImgBed bu kullanıcı tarafı cihazı kaydeder.

Yükleme parolasını değiştirmek eski kullanıcı tarafı oturumlarını geçersiz kılar. Ziyaretçilerin yeni parolayı tekrar girmesi gerekir.

## Yönetici Tarafı Kimlik Doğrulaması

Yönetici tarafı kimlik doğrulaması bir yönetici kullanıcı adı ve parolası kullanır.

Bu, yönetim panelini korur. Üretim kullanımı için her zaman yapılandırılmalıdır.

![Yönetici giriş sayfası](../../image/Safety/管理端登录界面.png)

### Yönetici Kimlik Bilgilerini Ayarlama

Yönetici kullanıcı adı ve parolası yapılandırıldığında:

- Yönetim panelini açmak için giriş gerekir.
- Başarılı giriş bir yönetici cihaz kaydı oluşturur.
- Giriş Cihazı Yönetimi içinde cihazları inceleyebilir, temizleyebilir veya zorla çevrimdışı bırakabilirsiniz.

Yönetici kullanıcı adını veya parolasını değiştirmek eski yönetici oturumlarını geçersiz kılar. Yeniden oturum açmanız gerekir.

## Giriş Cihazı Yönetimi Ne İşe Yarar?

Giriş Cihazı Yönetimi oturum açmış cihazları gösterir.

Şunları kontrol etmenize yardımcı olur:

- Hangi cihazların yönetim paneline eriştiği.
- Hangi cihazların kullanıcı tarafı yükleme sayfasına eriştiği.
- Hangi WebDAV istemcilerinin bağlandığı.
- Bir cihaz oturumunun hâlâ geçerli olup olmadığı.
- Eski cihazların zorla çevrimdışı bırakılıp bırakılmaması gerektiği.

Sayfada üç sekme vardır:

- Yönetici
- Kullanıcı
- WebDAV

## Genel cookie Güvenliği

Giriş Cihazı Yönetimi'nin üst kısmında genel cookie davranışını ayarlayabilirsiniz.

### Kullanıcı Cookie Süresi

Kullanıcı tarafı girişin kaç gün etkin kalabileceğini kontrol eder.

Örneğin 14 gün ayarlarsanız ziyaretçilerin genellikle 14 gün içinde yükleme parolasını tekrar girmesi gerekmez.

### Yönetici Cookie Süresi

Yönetici girişinin kaç gün etkin kalabileceğini kontrol eder.

Örneğin 14 gün ayarlarsanız yöneticilerin genellikle 14 gün içinde yeniden oturum açması gerekmez.

### Güvenli Mod

Güvenli mod etkin olduğunda tarayıcılar giriş cookie değerlerini yalnızca HTTPS üzerinden gönderir.

HTTPS kullanan üretim siteleri için etkinleştirin. Yerel HTTP testlerinde etkinleştirmeyin; aksi halde "giriş başarılı, ama sayfayı yenileyince çıkış yapıyor" gibi davranışlar görebilirsiniz.

## Yönetici Giriş Cihazları

Yönetici sekmesi, yönetim paneline giriş yapan cihazları gösterir.

Cihaz kayıtları yalnızca yönetici kimlik bilgileri yapılandırıldıktan ve yönetim paneline giriş yapıldıktan sonra görünür.

Her cihaz kartı şunları gösterebilir:

- Cihaz ve tarayıcı bilgisi
- İlk giriş IP'si
- Son etkin IP
- Giriş zamanı
- Son etkin zaman
- Son kullanma zamanı
- Geçerli durum

Tanımadığınız bir cihaz görürseniz oturumunu geçersiz kılmak için `Zorla Çevrimdışı Bırak` kullanın.

## Eski Cihazları Temizleme

`Eski Cihazları Temizle`, geçerli sekmedeki eski giriş kayıtlarını toplu olarak siler.

Diğer cihazlardaki eski oturumların hâlâ etkin olabileceğinden şüpheleniyorsanız bunu kullanın.

## Zorla Çevrimdışı Bırakma

`Zorla Çevrimdışı Bırak` tek bir cihaz oturumunu geçersiz kılar.

Bir cihaz zorla çevrimdışı bırakıldıktan sonra:

- Yönetici cihazlarının yeniden oturum açması gerekir.
- Kullanıcı tarafı cihazlarının yükleme parolasını tekrar girmesi gerekir.
- WebDAV istemcilerinin yeniden kimlik doğrulaması yapması gerekir.

Süresi dolmuş veya geçersiz cihazlar da kaldırılabilir.

## Geçerli Cihazdan Çıkış Yapma

Geçerli cihaz kartı `Geçerli Cihaz` olarak işaretlenir.

Geçerli cihazdan çıkış yaptıktan sonra:

- Geçerli yönetici oturumu kapatılır.
- Geçerli kullanıcı tarafı oturumu kapatılır.

İlgili alanı kullanmaya devam etmeden önce yeniden oturum açmanız gerekir.
