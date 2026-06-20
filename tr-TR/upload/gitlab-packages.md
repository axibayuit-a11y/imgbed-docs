# GitLab Packages Kanalı Ekleme

## Başlamadan Önce Gerekenler

Yalnızca üç şeye ihtiyacınız var:

| Gereken | Ne için kullanılır |
| --- | --- |
| GitLab hesabı | Access token oluşturmak ve project sahibi olmak için. |
| GitLab Personal Access Token | ImgBed'in GitLab API'ye erişmesi, project oluşturması ve dosyaları Generic Packages içine yüklemesi için. |
| Project adı | Yalnızca project adını girebilirsiniz, örneğin `imgbed`. |

## Kurulum Adımları

### 1. GitLab'a Giriş Yapın ve Access Token Oluşturun

1. GitLab'a giriş yapın.
2. Sağ üst köşedeki avatarınıza tıklayıp `Preferences` bölümünü açın.
3. Sol kenar çubuğundan `Access Tokens` bölümünü açın.
4. Token için tanıyabileceğiniz bir ad verin.
5. Kendi bakım tercihinize göre son kullanma tarihi seçin.
6. `api` scope seçeneğini seçin.
7. Token oluşturulur oluşturulmaz kopyalayıp kaydedin.

![Legacy token oluşturma](../../image/upload/gitlab-packages/点击生成旧版令牌.png)

![Token izinlerini seçme](../../image/upload/gitlab-packages/勾选令牌权限.png)

## 2. ImgBed'de GitLab Packages Kanalını Doldurun

Yükleme Ayarları'nda `GitLab Packages` seçtikten sonra alanları şöyle doldurun:

| Arayüz Alanı | Ne girilir |
| --- | --- |
| Channel name | Sizin seçeceğiniz bir ad, örneğin `GitLabPrimary`. |
| Access Token | Az önce oluşturduğunuz GitLab Personal Access Token. |
| Project name | `imgbed` gibi kısa project adı veya `username/imgbed` gibi tam yol. |
| Private repository | İhtiyacınıza göre açın veya kapatın. |
| Remark | İsteğe bağlı, örneğin `Primary upload channel`. |

![Kanalı yapılandırma](../../image/upload/gitlab-packages/配置渠道内容.png)

## 3. Kanalı Kaydedin

Alanları doldurduktan sonra Save düğmesine tıklayın.

Sistem şu ayrıntıları kendisi ele alır:

| Sistem Davranışı | Açıklama |
| --- | --- |
| Kısa project adı | ImgBed mevcut GitLab hesabını belirler ve değeri tam project yoluna genişletir. |
| Tam project yolu | ImgBed `username/project` yolunu girildiği gibi kullanır. |
| Project kontrolü | Mevcut kişisel hesap yolu kullanılıyorsa ImgBed project yoksa otomatik oluşturur. Tam yol elle girildiyse ImgBed bu yolu doğrudan kullanır. |
| Public/private durumu | Project görünürlüğü mevcut anahtara göre senkronize edilir. |

## Kısa Kontrol Listesi

```text
GitLab'a giriş yap
-> Access Token oluştur
-> Yalnızca api scope seç
-> ImgBed'e dönüp token ve project adını gir
-> Kaydet
-> Yalnızca project adı girildiyse ImgBed mevcut username değerini otomatik ekler
-> username/project girildiyse ImgBed olduğu gibi kullanır
-> Test görseli yükle
```
