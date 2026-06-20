# Kimlik Doğrulama ve Giriş Cihazı Yönetimi

`Authentication Management` ve `Login Device Management`, ImgBed yönetim panelini, herkese açık yükleme girişini ve WebDAV erişimini korur.

Bu sayfada erişim bilgilerini ayarlayabilir, oturum açmış cihazları inceleyebilir ve gerektiğinde eski oturumları iptal edebilirsiniz.

## Nereden Yapılandırılır?

Yönetim panelini açın, ardından şuraya gidin:

```text
System Settings -> Security Settings
```

Sayfada iki ana alan bulunur:

- Authentication Management
- Login Device Management

![Kimlik doğrulama yönetimi](../../image/Safety/认证管理界面.png)

## Authentication Management Ne İşe Yarar?

Authentication Management erişim kimlik bilgilerini saklar.

İki tür vardır:

- Kullanıcı tarafı kimlik doğrulama
- Yönetici tarafı kimlik doğrulama

## Kullanıcı Tarafı Kimlik Doğrulama

Kullanıcı tarafı kimlik doğrulama, yükleme parolasıdır.

Yükleme parolası ayarlandıktan sonra normal ziyaretçilerin yükleme sayfasını kullanmadan önce bu parolayı girmesi gerekir. Herkese açık yükleme sayfasının herkese açık kalmasını istemediğiniz durumlarda kullanışlıdır.

![Kullanıcı giriş sayfası](../../image/Safety/用户端登录界面.png)

### Yükleme Parolasını Ayarlama

Yükleme parolası yapılandırıldığında:

- Ziyaretçiler yükleme sayfasını kullanmadan önce parolayı girmelidir.
- Yükleme yalnızca parola kabul edildikten sonra kullanılabilir.
- Kullanıcı tarafı cihaz oturumları etkinse ImgBed bu kullanıcı cihazını kaydeder.

Yükleme parolasını değiştirmek eski kullanıcı tarafı oturumlarını geçersiz kılar. Ziyaretçilerin yeni parolayı tekrar girmesi gerekir.

## Yönetici Tarafı Kimlik Doğrulama

Yönetici tarafı kimlik doğrulama, yönetici kullanıcı adı ve parolası kullanır.

Bu, yönetim panelini korur. Production kullanımında her zaman yapılandırılması önerilir.

![Yönetici giriş sayfası](../../image/Safety/管理端登录界面.png)

### Yönetici Bilgilerini Ayarlama

Yönetici kullanıcı adı ve parolası yapılandırıldığında:

- Yönetim panelini açmak için giriş gerekir.
- Başarılı giriş bir yönetici cihaz kaydı oluşturur.
- Login Device Management içinde cihazları inceleyebilir, temizleyebilir veya zorla çevrimdışı bırakabilirsiniz.

Yönetici kullanıcı adını veya parolasını değiştirmek eski yönetici oturumlarını geçersiz kılar. Yeniden giriş yapmanız gerekir.

## Login Device Management Ne İşe Yarar?

Login Device Management oturum açmış cihazları gösterir.

Şunları kontrol etmenize yardımcı olur:

- Hangi cihazların yönetim paneline eriştiği.
- Hangi cihazların kullanıcı tarafı yükleme sayfasına eriştiği.
- Hangi WebDAV istemcilerinin bağlandığı.
- Cihaz oturumunun hâlâ geçerli olup olmadığı.
- Eski cihazların zorla çevrimdışı bırakılıp bırakılmaması gerektiği.

Sayfada üç sekme bulunur:

- Admin
- User
- WebDAV

## Genel Cookie Güvenliği

Login Device Management üst kısmında genel cookie davranışını ayarlayabilirsiniz.

### User Cookie Lifetime

Kullanıcı tarafı girişin kaç gün aktif kalabileceğini belirler.

Örneğin 14 gün olarak ayarlarsanız ziyaretçilerin genellikle 14 gün boyunca yükleme parolasını yeniden girmesi gerekmez.

### Admin Cookie Lifetime

Yönetici girişinin kaç gün aktif kalabileceğini belirler.

Örneğin 14 gün olarak ayarlarsanız yöneticilerin genellikle 14 gün boyunca yeniden giriş yapması gerekmez.

### Secure Mode

Secure mode etkin olduğunda tarayıcılar giriş cookie değerlerini yalnızca HTTPS üzerinden gönderir.

Production HTTPS sitelerinde etkinleştirin. Yerel HTTP testlerinde etkinleştirmeyin; aksi halde "giriş başarılı ama sayfayı yenileyince çıkış yapıyor" gibi bir davranış görebilirsiniz.

## Yönetici Giriş Cihazları

Admin sekmesi, yönetim paneline giriş yapan cihazları gösterir.

Cihaz kayıtları yalnızca yönetici bilgileri yapılandırıldıktan ve yönetim paneline giriş formu üzerinden erişildikten sonra görünür.

Her cihaz kartı şunları gösterebilir:

- Cihaz ve tarayıcı bilgisi
- İlk giriş IP adresi
- Son aktif IP adresi
- Giriş zamanı
- Son aktif zaman
- Sona erme zamanı
- Geçerli durum

Tanımadığınız bir cihaz görürseniz `Force Offline` ile oturumu geçersiz kılın.

## Eski Cihazları Temizleme

`Clean Up Old Devices`, geçerli sekmedeki eski giriş kayıtlarını toplu olarak siler.

Başka cihazlarda eski oturumların hâlâ aktif olabileceğinden şüpheleniyorsanız kullanın.

## Force Offline

`Force Offline` tek bir cihaz oturumunu geçersiz kılar.

Bir cihaz zorla çevrimdışı bırakıldıktan sonra:

- Yönetici cihazlarının yeniden giriş yapması gerekir.
- Kullanıcı tarafı cihazlarının yükleme parolasını yeniden girmesi gerekir.
- WebDAV istemcilerinin yeniden kimlik doğrulaması yapması gerekir.

Süresi dolmuş veya geçersiz cihazlar da kaldırılabilir.

## Geçerli Cihazdan Çıkış

Geçerli cihaz kartı `Current Device` olarak işaretlenir.

Geçerli cihazdan çıkış yaptıktan sonra:

- Geçerli yönetici oturumu kapatılır.
- Geçerli kullanıcı tarafı oturumu kapatılır.

Bu alanı kullanmaya devam etmek için yeniden giriş yapmanız gerekir.
