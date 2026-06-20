# Hugging Face Kanalı Ekleme

## Başlamadan Önce Gerekenler

Yalnızca üç şeye ihtiyacınız var:

| Gereken | Ne için kullanılır |
| --- | --- |
| Hugging Face hesabı | Access token oluşturmak ve repository sahibi olmak için. |
| Hugging Face User Access Token | ImgBed'in Hugging Face API'ye erişmesi, repository oluşturması ve dosya yüklemesi için. |
| Repository adı | Yalnızca repository adını girebilirsiniz, örneğin `image`. |

## Kurulum Adımları

### 1. Hugging Face'e Giriş Yapın ve Access Token Oluşturun

1. Hugging Face'e giriş yapın.
2. Sağ üst köşedeki avatarınıza tıklayıp `Settings` bölümünü açın.
3. Sol kenar çubuğundan `Access Tokens` bölümünü açın.
4. Yeni bir token oluşturun.
5. Token için tanıyabileceğiniz bir ad verin.
6. `write` iznini seçin.
7. Token oluşturulur oluşturulmaz kopyalayıp kaydedin.

![Token oluşturma](../../image/upload/huggingface/创建令牌.png)

## 2. ImgBed'de Hugging Face Kanalını Doldurun

Yükleme Ayarları'nda `Hugging Face` seçtikten sonra alanları şöyle doldurun:

| Arayüz Alanı | Ne girilir |
| --- | --- |
| Channel name | Sizin seçeceğiniz bir ad, örneğin `hf-primary`. |
| Repository name | `image` gibi kısa repo adı veya `username/image` gibi tam yol. |
| Access Token | Az önce oluşturduğunuz Hugging Face User Access Token. |
| Private repository | İhtiyacınıza göre açın veya kapatın. |
| Remark | İsteğe bağlı, örneğin `Primary upload channel`. |

![Kanal ekleme](../../image/upload/huggingface/添加渠道.png)

## 3. Kanalı Kaydedin

Alanları doldurduktan sonra Save düğmesine tıklayın.

Sistem şu ayrıntıları kendisi ele alır:

| Sistem Davranışı | Açıklama |
| --- | --- |
| Kısa repository adı | ImgBed mevcut Hugging Face hesabını belirler ve değeri tam repository yoluna genişletir. |
| Tam repository yolu | ImgBed `username/repository` yolunu girildiği gibi kullanır. |
| Repository kontrolü | Mevcut kişisel hesap yolu kullanılıyorsa ImgBed repository yoksa oluşturmaya çalışır. Tam yol elle girildiyse ImgBed bu yolu doğrudan kullanır. |
| Repository türü | Bu kanal `dataset` repository kullanır. |
| Public/private durumu | Repository görünürlüğü mevcut anahtara göre senkronize edilir. |

## Kısa Kontrol Listesi

```text
Hugging Face'e giriş yap
-> Access Token oluştur
-> write iznini seç
-> ImgBed'e dönüp token ve repository adını gir
-> Kaydet
-> Yalnızca repo adı girildiyse ImgBed mevcut username değerini otomatik ekler
-> username/repo girildiyse ImgBed olduğu gibi kullanır
-> ImgBed dataset repository'yi kontrol eder veya oluşturur
-> Test görseli yükle
```
