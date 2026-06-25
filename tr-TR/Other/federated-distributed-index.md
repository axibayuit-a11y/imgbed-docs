# Federasyon Dağıtık Dizini

Federasyon dağıtık dizini, birden fazla ImgBed sitesinin dosya listelerini birbirleriyle paylaşmasını sağlar.

Basitçe:

- Sitenizdeki seçili klasörleri başkalarıyla paylaşabilirsiniz.
- Başka bir düğüme katılıp o düğümün paylaşılan dosya listesini yönetim panelinize eşitleyebilirsiniz.
- Federasyon dosyaları ağırlıklı olarak gezinme, arama ve bağlantı açma içindir. Kendi depolamanıza yeniden yüklenmezler.

## Nereden Yapılandırılır?

Açın:

```text
System Settings -> Other Settings -> Federated Distributed Index
```

![Yerel federasyon düğümü](../../image/other/联盟图/联盟分布式索引本地节点.png)

Sayfada üç sekme bulunur:

| Sekme | Amaç |
| --- | --- |
| Yerel düğüm | Düğümünüzü etkinleştirme, genel alan adını doğrulama, paylaşılan klasörleri seçme ve giden dizini güncelleme |
| Katıldığım düğümler | Katıldığınız diğer ImgBed düğümlerini yönetme |
| Bana katılmak isteyen düğümler | Düğümünüze katılmak isteyenlerin isteklerini yönetme |

## İlk Kurulum

1. `Local Node` öğesini açın.
2. `Enable` seçeneğini açın.
3. `Sync folders` altında paylaşılacak klasörleri seçin.
4. `Update Outbound Index` öğesine tıklayın.
5. ImgBed alan adı değişikliği algılarsa, devam etmeden önce geçerli alan adının doğru olduğunu onaylayın.

Birden fazla eşitleme klasörü seçebilirsiniz.

Eşitleme klasörü listesi boşsa tüm klasörler paylaşılır.

## Yerel Düğüm

### Genel Alan Adı

Genel alan adı, diğer düğümlerin düğümünüze erişmek için kullandığı site URL'sidir.

ImgBed bunu otomatik olarak algılar. Elle yazmanız gerekmez. Dizini ilk kez güncellediğinizde ImgBed, geçerli erişim URL'sinin üretim alan adı olup olmadığını onaylamanızı ister.

Alan adını daha sonra değiştirirseniz dizin güncellemesi tekrar onay ister.

### Eşitleme Klasörleri

Eşitleme klasörleri, federasyon düğümleriyle hangi dosyaların paylaşılacağını belirler.

Örneğin yalnızca şunları seçerseniz:

```text
/1/
/2/
```

diğer düğümler yalnızca bu iki dizindeki dosyaları görebilir.

### Giden Dizini Güncelleme

Bu işlem, diğer düğümlerin sizden eşitleyebileceği dosya listesini günceller.

Şu durumlarda kullanın:

- Federasyonu ilk kez etkinleştirdiğinizde.
- Paylaşmak istediğiniz dosyaları yüklediğinizde.
- Eşitleme klasörlerini değiştirdiğinizde.
- Genel alan adını değiştirdiğinizde ve onaylamanız gerektiğinde.

## Katıldığım Düğümler

`Nodes I Joined`, katıldığınız diğer düğümleri yönettiğiniz bölümdür.

![Katıldığım düğümler](../../image/other/联盟图/我加入的节点.png)

### Başka Bir Düğüme Katılma İsteği

1. Diğer sahibinden davet bağlantısı isteyin.
2. Bağlantıyı giriş kutusuna yapıştırın.
3. `Request to Join` öğesine tıklayın.
4. Diğer sahibin kendi yönetim panelinde onaylamasını bekleyin.

Onaydan sonra düğüm durumu onaylanmış olur.

### Gelen Dizini Güncelleme

`Update Inbound Index`, katıldığınız düğümlerden dosya listelerini eşitler.

Şu durumlarda kullanın:

- Diğer sahip isteğinizi yeni onayladıysa.
- Diğer sahip paylaşılan içeriğin güncellendiğini söylediyse.
- Katıldığınız tüm federasyon dosya listelerini yenilemek istiyorsanız.

Yalnızca bir düğümü güncellemek için o düğüm kartındaki `Update Index` öğesine tıklayın.

![Dizini güncelle](../../image/other/联盟图/更新索引.png)

### Katılımı İptal Etme

Bir düğümü artık eşitlemek istemiyorsanız `Unsubscribe` öğesine tıklayın.

Katılım iptal edildikten sonra o düğümün federasyon dizini yerel sitenizden kaldırılır.

## Bana Katılmak İsteyen Düğümler

`Nodes Joining Me`, başkalarından gelen istekleri ele aldığınız yerdir.

![Bana katılmak isteyen düğümler](../../image/other/联盟图/加入我的节点.png)

### Davet Bağlantısı Oluşturma

1. Yerel düğümün etkin olduğundan emin olun.
2. ImgBed'in genel alan adını onaylaması için `Update Outbound Index` öğesine en az bir kez tıklayın.
3. `Nodes Joining Me` öğesini açın.
4. `Reset Invitation Link` öğesine tıklayın.
5. Davet bağlantısını kopyalayıp diğer sahibe gönderin.

Davet bağlantısı boşsa genellikle genel alan adı henüz onaylanmamıştır. `Local Node` bölümüne geri dönüp `Update Outbound Index` öğesine tıklayın.

### Katılma İsteklerini Ele Alma

Birisi istek gönderdiğinde bu istek `Nodes Joining Me` listesinde görünür.

| Eylem | Anlam |
| --- | --- |
| Onayla | Diğer düğümün paylaşılan dosya listenizi eşitlemesine izin verir |
| Reddet | Katılma isteğini reddeder |
| Sil | Tamamlanmış kaydı kaldırır |
| Durumu kontrol et | Diğer tarafın bu ilişkiyi hâlâ koruyup korumadığını kontrol eder |

Onaydan sonra, paylaşılan dosyalarınızın orada görünmesi için diğer tarafın yine `Update Inbound Index` öğesine tıklaması gerekir.

![Davet edilen düğümü onaylama](../../image/other/联盟图/邀请节点同意.png)

## Mesajlar

Bir ilişki onaylandıktan sonra düğüm kartında `Message` öğesine tıklayın.

Mesajlar yalnızca federasyon ilişkisi hakkında iletişim içindir. Dosyaları, etiketleri, dizinleri veya izinleri değiştirmez.

![Mesajlar](../../image/other/联盟图/留言功能.png)

## Federasyon Dosyalarını Görüntüleme

Eşitleme tamamlandıktan sonra yönetim dosya listesine dönün.

Sayfanın üst kısmında yerel dosyalar ile federasyon dosyaları arasında geçiş yapın. Federasyon dosyalarında eşitlenen içeriğe göz atabilirsiniz.

Federasyon dosyaları ağırlıklı olarak görüntüleme, arama, önizleme ve bağlantı kopyalama içindir. Bunlar yerel dosya olmadığı için kendi sitenizden taşıyamaz, silemez, yeniden etiketleyemez veya yedekleyemezsiniz.

![Yönetimde federasyon dosyaları](../../image/other/联盟图/联盟管理显示效果图.png)

## Sık Sorulan Sorular

### İlişki Kaydı Olmadığı İçin Neden Yeniden Başvurmam İsteniyor?

Bu genellikle diğer tarafın sizi silip kaydı kaldırdığı, bu nedenle ilişkinizin artık bulunamadığı anlamına gelir. Yeni bir katılma isteği gönderin.

![İlişki kaydı yokken yeniden başvurma](../../image/other/联盟图/无关系记录重新申请.png)

### Katıldıktan Sonra Dosyaları Neden Göremiyorum?

Kontrol edin:

1. Diğer sahip isteğinizi onaylamış olmalı.
2. Diğer sahip `Update Outbound Index` öğesine tıklamış olmalı.
3. Siz `Update Inbound Index` öğesine tıklamış olmalısınız.
4. Diğer sahibin eşitleme klasörleri, paylaşmak istediği dizinleri içermeli.

### Alan Adı Değişikliği Algılanırsa Ne Yapmalıyım?

Yönetim panelini şu anda üretim alan adı üzerinden açıyorsanız onaylayıp devam edin.

Geçici bir adres kullanıyorsanız iptal edin, yönetim panelini üretim alan adıyla yeniden açın ve tekrar deneyin.

### Boş Eşitleme Klasörü Listesi Ne Anlama Gelir?

Boş eşitleme klasörü listesi tüm klasörlerin paylaşıldığı anlamına gelir.

Yalnızca bazı dizinleri paylaşmak için bu klasörleri elle seçin.

### Giden ve Gelen Dizin Güncellemeleri Arasındaki Fark

| Düğme | Basit Anlam |
| --- | --- |
| Giden dizini güncelle | Başkalarının benden eşitleyebileceği içeriği günceller |
| Gelen dizini güncelle | Başkalarından eşitlediğim içeriği günceller |
