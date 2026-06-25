# GitHub Releases Kanalı Ekleme

## Başlamadan Önce Gerekenler

Yalnızca üç şeye ihtiyacınız var:

| Gereken | Ne için kullanılır |
| --- | --- |
| GitHub hesabı | Access token oluşturmak ve repository sahibi olmak için. |
| GitHub Access Token | ImgBed'in GitHub API'ye erişmesi, releases oluşturması ve dosya yüklemesi için. |
| Repository adı | Yalnızca repository adını girebilirsiniz, örneğin `image`. |

## Kurulum Adımları

### 1. GitHub'a Giriş Yapın ve Access Token Oluşturun

1. GitHub'a giriş yapın.
2. Sağ üst köşedeki avatarınıza tıklayıp `Settings` bölümünü açın.
3. Sol kenar çubuğundan `Developer settings` bölümünü açın.
4. `Personal access tokens` bölümünü açın.
5. `Tokens (classic)` bölümünü açın.
6. `Generate new token (classic)` düğmesine tıklayın.
7. Token için tanıyabileceğiniz bir ad verin.
8. Kendi bakım tercihinize göre son kullanma tarihi seçin.
9. `repo` ve `workflow` scopes seçeneklerini seçin.
10. Token oluşturulur oluşturulmaz kopyalayıp kaydedin.

![GitHub izinlerini ekleme](../../image/upload/github-releases/添加github权限.png)

## 2. ImgBed'de GitHub Releases Kanalını Doldurun

Yükleme Ayarları'nda `GitHub Releases` seçtikten sonra alanları şöyle doldurun:

| Arayüz Alanı | Ne girilir |
| --- | --- |
| Channel name | Sizin seçeceğiniz bir ad, örneğin `GitHubPrimary`. |
| Access Token | Az önce oluşturduğunuz GitHub Personal Access Token. |
| Repository name | `image` gibi kısa repo adı veya `username/image` gibi tam yol. |
| Private repository | İhtiyacınıza göre açın veya kapatın. |
| Remark | İsteğe bağlı, örneğin `Primary upload channel`. |

![GitHub kanal yapılandırmasını doldurma](../../image/upload/github-releases/填写github渠道配置.png)

## 3. Kanalı Kaydedin

Alanları doldurduktan sonra Save düğmesine tıklayın.

Sistem şu ayrıntıları kendisi ele alır:

| Sistem Davranışı | Açıklama |
| --- | --- |
| Kısa repository adı | ImgBed mevcut GitHub hesabını belirler ve değeri tam repository yoluna genişletir. |
| Tam repository yolu | ImgBed `username/repository` yolunu girildiği gibi kullanır. |
| Repository kontrolü | Mevcut kişisel hesap yolu kullanılıyorsa ImgBed repository yoksa otomatik oluşturur. Tam yol elle girildiyse ImgBed bu yolu doğrudan kullanır. |
| Public/private durumu | Repository görünürlüğü mevcut anahtara göre senkronize edilir. |

## Kısa Kontrol Listesi

GitHub Releases şöyle çalışır:

```text
Sign in to GitHub
-> Create an Access Token
-> Return to ImgBed and enter the token and repository name
-> Save
-> If only a repo name is entered, ImgBed adds the current username automatically
-> If username/repo is entered, ImgBed uses it as-is
-> Upload a test image
```
