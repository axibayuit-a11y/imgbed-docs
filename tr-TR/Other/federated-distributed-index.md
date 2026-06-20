# Federated Distributed Index

Federated distributed index, birden fazla ImgBed sitesinin dosya listelerini birbirleriyle paylaşmasını sağlar.

Basitçe:

- Sitenizdeki seçili klasörleri başkalarıyla paylaşabilirsiniz.
- Başka bir node'a katılıp o node'un paylaşılan dosya listesini yönetim panelinize senkronize edebilirsiniz.
- Federated files ağırlıklı olarak gezinme, arama ve bağlantı açma içindir. Kendi depolamanıza yeniden yüklenmezler.

## Nereden Yapılandırılır?

Şurayı açın:

```text
System Settings -> Other Settings -> Federated Distributed Index
```

![Yerel federation node](../../image/other/联盟图/联盟分布式索引本地节点.png)

Sayfada üç sekme vardır:

| Sekme | Amaç |
| --- | --- |
| Local Node | Kendi node'unuzu etkinleştirme, public domain doğrulama, paylaşılan klasörleri seçme ve outbound index güncelleme |
| Nodes I Joined | Katıldığınız diğer ImgBed node'larını yönetme |
| Nodes Joining Me | Sizin node'unuza katılmak isteyenlerin isteklerini yönetme |

## İlk Kurulum

1. `Local Node` sekmesini açın.
2. `Enable` değerini açın.
3. `Sync folders` altında paylaşılacak klasörleri seçin.
4. `Update Outbound Index` düğmesine tıklayın.
5. ImgBed domain değişikliği algılarsa devam etmeden önce geçerli domain'in doğru olduğunu onaylayın.

Birden fazla sync folder seçebilirsiniz.

Sync folder listesi boşsa tüm klasörler paylaşılır.

## Local Node

### Public Domain

Public domain, diğer node'ların sizin node'unuza erişmek için kullandığı site URL'sidir.

ImgBed bunu otomatik algılar. Elle yazmanıza gerek yoktur. Index'i ilk kez güncellediğinizde ImgBed geçerli erişim URL'sinin production domain olup olmadığını onaylamanızı ister.

Domain'i daha sonra değiştirirseniz index güncellemesi tekrar onay ister.

### Sync Folders

Sync folders, federation node'larıyla hangi dosyaların paylaşılacağını belirler.

Örneğin yalnızca şunları seçerseniz:

```text
/1/
/2/
```

diğer node'lar yalnızca bu iki dizindeki dosyaları görür.

### Update Outbound Index

Diğer node'ların sizden senkronize edebileceği dosya listesini günceller.

Şu durumlarda kullanın:

- Federation'ı ilk kez etkinleştirirken.
- Paylaşmak istediğiniz dosyalar yüklediğinizde.
- Sync folders değiştiğinde.
- Public domain değiştiğinde ve onay gerektiğinde.

## Nodes I Joined

`Nodes I Joined`, diğer node'lara abone olduğunuz yerdir.

![Nodes I joined](../../image/other/联盟图/我加入的节点.png)

### Başka Bir Node'a Katılma İsteği Gönderme

1. Diğer sahibinden invitation link isteyin.
2. Giriş kutusuna yapıştırın.
3. `Request to Join` düğmesine tıklayın.
4. Diğer sahibin kendi yönetim panelinde isteği onaylamasını bekleyin.

Onaydan sonra node durumu approved olur.

### Update Inbound Index

`Update Inbound Index`, katıldığınız node'lardan dosya listelerini senkronize eder.

Şu durumlarda kullanın:

- Diğer sahip isteğinizi yeni onayladıysa.
- Diğer sahip paylaşılan içeriğin güncellendiğini söylediyse.
- Katıldığınız tüm federation dosya listelerini yenilemek istiyorsanız.

Yalnızca tek bir node'u güncellemek için o node kartında `Update Index` düğmesine tıklayın.

![Index güncelleme](../../image/other/联盟图/更新索引.png)

### Unsubscribe

Bir node'u artık senkronize etmek istemiyorsanız `Unsubscribe` düğmesine tıklayın.

Abonelikten çıktıktan sonra o node'un federated index'i yerel sitenizden kaldırılır.

## Nodes Joining Me

`Nodes Joining Me`, başkalarından gelen istekleri yönettiğiniz yerdir.

![Nodes joining me](../../image/other/联盟图/加入我的节点.png)

### Invitation Link Oluşturma

1. Local node'un etkin olduğundan emin olun.
2. ImgBed'in public domain'i doğrulaması için en az bir kez `Update Outbound Index` tıklayın.
3. `Nodes Joining Me` sekmesini açın.
4. `Reset Invitation Link` düğmesine tıklayın.
5. Invitation link'i kopyalayıp diğer sahibine gönderin.

Invitation link boşsa public domain genellikle henüz doğrulanmamıştır. `Local Node` sekmesine dönüp `Update Outbound Index` tıklayın.

### Katılma İsteklerini Yönetme

Birisi istek gönderdiğinde `Nodes Joining Me` listesinde görünür.

| Eylem | Anlamı |
| --- | --- |
| Approve | Diğer node'un paylaşılan dosya listenizi senkronize etmesine izin verir |
| Reject | Katılma isteğini reddeder |
| Delete | Tamamlanmış kaydı siler |
| Check Status | Diğer tarafın bu ilişkiyi hâlâ koruyup korumadığını kontrol eder |

Onaydan sonra diğer tarafın, paylaşılan dosyalarınız orada görünmeden önce yine `Update Inbound Index` tıklaması gerekir.

![Davet edilen node'u onaylama](../../image/other/联盟图/邀请节点同意.png)

## Mesajlar

İlişki onaylandıktan sonra node kartındaki `Message` düğmesine tıklayın.

Mesajlar yalnızca federation ilişkisi hakkında iletişim içindir. Dosyaları, etiketleri, dizinleri veya permissions değerlerini değiştirmez.

![Mesajlar](../../image/other/联盟图/留言功能.png)

## Federated Files Görüntüleme

Senkronizasyon tamamlandıktan sonra yönetim dosya listesine dönün.

Sayfanın üst kısmında yerel dosyalar ve federated files arasında geçiş yapabilirsiniz. Federated files içinde senkronize içeriği gezebilirsiniz.

Federated files ağırlıklı olarak görüntüleme, arama, preview ve bağlantı kopyalama içindir. Yerel dosya olmadıkları için kendi sitenizden taşıyamaz, silemez, yeniden etiketleyemez veya yedekleyemezsiniz.

![Yönetimde federated files](../../image/other/联盟图/联盟管理显示效果图.png)

## FAQ

### Neden İlişki Kaydı Yok Diye Yeniden Başvurmam İsteniyor?

Bu genellikle diğer tarafın sizi silip kaydı kaldırdığı anlamına gelir; ilişki artık bulunamaz. Yeni join request gönderin.

![İlişki kaydı yoksa yeniden başvurma](../../image/other/联盟图/无关系记录重新申请.png)

### Katıldıktan Sonra Neden Dosya Göremiyorum?

Kontrol edin:

1. Diğer sahip isteğinizi onayladı.
2. Diğer sahip `Update Outbound Index` tıkladı.
3. Siz `Update Inbound Index` tıkladınız.
4. Diğer sahibin sync folders listesi paylaşmak istediği dizinleri içeriyor.

### Domain Değişikliği Algılanırsa Ne Yapmalıyım?

Yönetim panelini şu anda production domain üzerinden açıyorsanız onaylayıp devam edin.

Geçici adres kullanıyorsanız iptal edin, yönetim panelini production domain ile yeniden açın ve tekrar deneyin.

### Boş Sync Folder Listesi Ne Anlama Gelir?

Boş sync folder listesi tüm klasörlerin paylaşıldığı anlamına gelir.

Yalnızca bazı dizinleri paylaşmak için bu klasörleri elle seçin.

### Outbound ve Inbound Index Güncellemeleri Arasındaki Fark

| Düğme | Basit Anlamı |
| --- | --- |
| Update Outbound Index | Başkalarının benden senkronize edebileceği şeyi günceller |
| Update Inbound Index | Başkalarından senkronize ettiğim şeyi günceller |
