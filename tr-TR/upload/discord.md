# Discord Kanalı Ekleme

## Başlamadan Önce Gerekenler

| Gereken | Ne için kullanılır |
| --- | --- |
| Discord hesabı | Sunucu, kanal ve developer application oluşturmak için. |
| Discord sunucusu | Botun bir kanala erişebilmesi için önce bir sunucuya katılması gerekir. |
| Metin kanalı | Görseller ve dosyalar bu kanala gönderilir. |
| Discord Developer Portal | Application oluşturmak, bot oluşturmak ve `Bot Token` almak için. |

## Nereden Eklenir?

1. Sistem Ayarları'nı açın.
2. Yükleme Ayarları'na gidin.
3. Sağ üst köşedeki Kanal Ekle düğmesine tıklayın.
4. `Discord` seçeneğini seçin.

## Alan Açıklamaları

| Alan | Ne işe yarar | Zorunlu |
| --- | --- | --- |
| Kanal adı | Bu kanal için anlaşılır bir ad, örneğin "Discord Primary". | Evet |
| Bot Token | Discord bot token değeri. | Evet |
| Channel ID | Hedef metin kanalının ID değeri. | Evet |
| Proxy URL (isteğe bağlı) | Yalnızca Discord CDN erişimi kararsızsa kullanın. `https://` dahil tam URL girin. | Hayır |

## Kurulum Adımları

### 1. Discord Sunucusu ve Metin Kanalı Oluşturun

1. Discord'u açın.
2. Yeni bir sunucu oluşturun veya sahibi olduğunuz mevcut bir sunucuyu kullanın.
3. Bu sunucuda bir metin kanalı oluşturun.

![Sunucu oluşturma](../../image/upload/discord/创建服务器.png)

### 2. Discord Developer Portal'da Bot Oluşturun

1. Discord Developer Portal'ı açın: `https://discord.com/developers/applications`
2. `New Application` düğmesine tıklayın.
3. Application adını girin ve oluşturun.
4. Sol kenar çubuğundan `Bot` sayfasını açın.
5. `Bot` sayfasında token oluşturun veya sıfırlayın.
6. Token değerini kaydedin.

ImgBed'deki `Bot Token` alanına girmeniz gereken değer budur.

![Bot token görüntüleme](../../image/upload/discord/查看机器人令牌.png)

### 3. OAuth2 Davet Bağlantısı Oluşturun ve Botu Kurun

1. Sol kenar çubuğundan `OAuth2` sayfasını açın.
2. Scopes altında `bot` seçin.
3. Permission alanında şu izinleri etkinleştirin:

| İzin | Gerekli |
| --- | --- |
| View Channels | Evet |
| Send Messages | Evet |
| Attach Files | Evet |
| Read Message History | Evet |

4. Sayfanın alt kısmında integration type değerinin `Guild Install` olduğunu doğrulayın.
5. Oluşturulan URL'yi kopyalayın.
6. Bu URL'yi tarayıcıda açın.
7. Hedef sunucuyu seçin.
8. Yetkilendirme akışını tamamlayın.

![OAuth2 içinde bot izinlerini seçme](../../image/upload/discord/在oa2勾选机器人权限.png)

![Botu kanala davet etme](../../image/upload/discord/邀请机器人到频道.png)

### 4. Developer Mode'u Etkinleştirip Channel ID'yi Kopyalayın

1. Discord'un sol alt köşesinde avatarınızın yanındaki dişli simgesine tıklayın.
2. Sol kenar çubuğundan Advanced bölümünü açın.
3. Developer Mode'u etkinleştirin.
4. Hedef metin kanalına dönün.
5. Kanal adına sağ tıklayın.
6. Kanal ID'sini Kopyala seçeneğine tıklayın.

Kopyalanan sayı, ImgBed'in istediği `Channel ID` değeridir.

![Developer mode etkinleştirme](../../image/upload/discord/开启开发者权限.png)

![Channel ID kopyalama](../../image/upload/discord/复制群频道id.png)

### 5. ImgBed'de Discord Kanalını Doldurun

Kanal yapılandırma penceresine geri dönün ve alanları şöyle doldurun:

| Arayüz Alanı | Değer |
| --- | --- |
| Channel name | Özel kanal adı, örneğin `DiscordPrimary`. |
| Bot Token | Discord Developer Portal'daki `Bot` sayfasından kaydettiğiniz token. |
| Channel ID | Discord'dan kopyaladığınız channel ID. |
| Proxy URL (isteğe bağlı) | Yalnızca gerekirse, örneğin `https://your-proxy.example.com`. |

İşiniz bittiğinde Save düğmesine tıklayın.

![Discord kanal yapılandırması ekleme](../../image/upload/discord/添加dc新渠道配置.png)

## Nasıl Kontrol Edilir?

| Kontrol | Nasıl doğrulanır |
| --- | --- |
| Kanal kartı görünür | Kaydettikten sonra Yükleme Ayarları sayfasında Discord kanal kartı görünmelidir. |
| Kanal etkinleştirilebilir | Active anahtarı açık kalmalıdır. |
| Yapılandırma kaydedilmiştir | Ayrıntı görünümünde Bot Token ve Channel ID değerlerinin kaydedildiği görülmelidir. |
| Yükleme çalışır | Test görseli yükleyin ve hedef Discord metin kanalında göründüğünü doğrulayın. |

## Kısa Kontrol Listesi

```text
Create a Discord server
-> Create a text channel
-> Create a bot in the Discord Developer Portal
-> Save the Bot Token from the Bot page
-> In OAuth2, select bot, View Channels, Send Messages, Attach Files, and Read Message History
-> Copy the generated URL and authorize the bot for the target server
-> Make sure the target text channel grants the same permissions
-> Enable Developer Mode
-> Right-click the target text channel and copy the Channel ID
-> Enter the Bot Token and Channel ID in ImgBed
-> Save and upload a test image
```

## Kaynaklar

1. Discord Developers Getting Started: https://docs.discord.com/developers/quick-start/getting-started
2. Discord Help - Where can I find my User/Server/Message ID: https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID
