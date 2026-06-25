# Telegram Kanalı Ekleme

## Başlamadan Önce Gerekenler

| Gereken | Ne için kullanılır |
| --- | --- |
| Telegram hesabı | Botu ve dosyaların saklanacağı kanalı oluşturmak için. |
| `@BotFather` | Telegram botu oluşturmak için. |
| Telegram kanalı | Dosyaların nihai depolama hedefi. |
| `@userinfobot` | Kanalın `Chat ID` değerini bulmak için. |

## Nereden Eklenir?

1. Sistem Ayarları'nı açın.
2. Yükleme Ayarları'na gidin.
3. Sağ üst köşedeki Kanal Ekle düğmesine tıklayın.
4. `Telegram` seçeneğini seçin.

## Alan Açıklamaları

| Alan | Ne işe yarar | Zorunlu |
| --- | --- | --- |
| Kanal adı | Bu kanal için anlaşılır bir ad, örneğin "Telegram Primary". | Evet |
| Aktif | Bu kanalı etkinleştirir veya devre dışı bırakır. | Önerilir |
| Bot Token | Telegram botunuzun belirteci. | Evet |
| Session ID (Chat ID) | Telegram kanalının ID değeri. | Evet |
| Relay Proxy URL (isteğe bağlı) | Yalnızca Telegram erişimi kararsızsa kullanın. `https://` dahil tam proxy URL'sini girin. | Hayır |
| Not | Daha sonra bakım yaparken işinize yarayacak notlar. | Hayır |

## Kurulum Adımları

### 1. Telegram Botu Oluşturun

1. Telegram'ı açın ve `@BotFather` araması yapın.
2. Sohbeti açıp `Start` düğmesine tıklayın.
3. `/newbot` gönderin.
4. Yönergeleri izleyerek botun görünen adını girin.
5. Yönergeleri izleyerek bot kullanıcı adını girin. Kullanıcı adının genellikle `bot` ile bitmesi gerekir.
6. Bot oluşturulduktan sonra `@BotFather` bir bot token döndürür.

ImgBed'deki `Bot Token` alanına girmeniz gereken değer budur.

![Bot token değerini kaydedin](../../image/upload/telegram/保存机器人令牌.png)

### 2. Kanal Oluşturun

1. Telegram'da New Channel seçeneğine tıklayın.
2. Kanal adını girin.
3. Kanal oluşturma işlemini tamamlayın.

Hem herkese açık hem de özel kanallar kullanılabilir.

![Kanal oluşturma](../../image/upload/telegram/新建频道.png)

### 3. Botu Kanala Ekleyin

1. Az önce oluşturduğunuz kanalı açın.
2. Kanal ayarlarını açın.
3. Üye veya yönetici ekleyin.
4. Oluşturduğunuz bot kullanıcı adını arayın.
5. Botu kanala ekleyin.

Yüklemelerin daha sorunsuz çalışması için bota yönetici yetkisi vermeniz önerilir.

![Botu kanala davet edin](../../image/upload/telegram/邀请机器人进频道里.png)

### 4. `User Info - Get ID - IDbot` ile Kanal ID'sini Alın

1. Telegram'da `@userinfobot` araması yapın. Görünen adı genellikle `User Info - Get ID - IDbot` olur.
2. Sohbeti açıp `Start` düğmesine tıklayın.
3. Botun sunduğu seçeneklerden `Channel` seçeneğini seçin.
4. Mesaj seçicide hedef kanalı seçip `@userinfobot` hesabına gönderin.
5. `@userinfobot` sonucu döndürdüğünde `Id: -100...` olarak gösterilen sayıyı kopyalayın.

`-100` ile başlayan sayı, ImgBed'in istediği `Session ID (Chat ID)` değeridir.

![Kanal ID'sini alma](../../image/upload/telegram/获取频道id.png)

### 5. ImgBed'de Telegram Kanalını Doldurun

Kanal yapılandırma penceresine geri dönün ve alanları şöyle doldurun:

| Arayüz Alanı | Değer |
| --- | --- |
| Channel Identifier | Özel kanal adı, örneğin `TelegramPrimary`. |
| Active | Etkin bırakılması önerilir. |
| Bot Token | `@BotFather` tarafından verilen bot token. |
| Session ID (Chat ID) | `@userinfobot` tarafından döndürülen `-100...` sayısı. |
| Relay Proxy URL (isteğe bağlı) | Yalnızca gerekirse, örneğin `https://your-tg-proxy.example.com`. |
| Remark | İsteğe bağlı notlar. |

İşiniz bittiğinde Save düğmesine tıklayın.

![Yapılandırmayı düzenleme](../../image/upload/telegram/编辑配置.png)

## Nasıl Kontrol Edilir?

| Kontrol | Nasıl doğrulanır |
| --- | --- |
| Kanal kartı görünür | Kaydettikten sonra Yükleme Ayarları sayfasında Telegram kanal kartı görünmelidir. |
| Kanal etkinleştirilebilir | Active anahtarı açık kalmalıdır. |
| Yapılandırma kaydedilmiştir | Ayrıntı görünümünde Bot Token ve Chat ID değerlerinin kaydedildiği görülmelidir. |
| Yükleme çalışır | Test görseli yükleyin ve hedef Telegram kanalında göründüğünü doğrulayın. |

## Kısa Kontrol Listesi

```text
Create a bot with @BotFather
-> Save the Bot Token
-> Create a Telegram channel
-> Add the bot to the channel and grant administrator permissions
-> Search for @userinfobot and choose Channel
-> Forward any message from the channel to @userinfobot
-> Copy the returned Id: -100...
-> Enter the Bot Token and Chat ID in ImgBed
-> Save and upload a test image
```

## Kaynaklar

1. Telegram bots: https://core.telegram.org/bots
2. Telegram Bot API: https://core.telegram.org/bots/api
