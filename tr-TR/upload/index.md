# Yükleme ayarları

Yükleme ayarları ImgBed'i kendi depolama kanallarınıza bağlar. Bir kanal yapılandırıldıktan sonra yüklenen görseller ve dosyalar seçtiğiniz hizmette saklanır. ImgBed erişim bağlantılarını, dosya kayıtlarını, önizlemeleri, herkese açık galeri özelliklerini, rastgele görsel API'sini, WebDAV erişimini ve ilgili iş akışlarını yönetir.

Her kullanıcı için uygun kanal farklı olabilir. Basit bir başlangıç için Telegram, Discord veya GitHub Releases iyi seçeneklerdir. Kapasite, hız ve uzun vadeli kararlılık daha önemliyse Cloudflare R2, S3, OneDrive, Google Drive, Dropbox, Yandex, pCloud veya kendi WebDAV hizmetinizi değerlendirin.

## Başlamadan önce

> ImgBed'i ilk kez kullanmadan önce, gerekli D1 veri tablolarını tamamlamak ve sonraki özelliklerde hata oluşmasını önlemek için başlatma sayfasına girip "Dizini yeniden oluştur" seçeneğine tıklamanız gerekir.
>
> ![Başlatma sırasında Dizini yeniden oluştur seçeneğine tıklama](../../image/初始化点击重建索引.png)

- Kullanacağınız depolama hesabını veya API bilgilerini hazırlayın.
- ImgBed alan adınızın erişilebilir olduğundan emin olun; OAuth tabanlı kanallar callback URL ister.
- Kanalı ekledikten sonra önce bir test görseli yükleyerek dosyanın kaydedilip açıldığını doğrulayın.

## Kanal listesi

- [Telegram](./telegram.md)
- [Cloudflare R2](./cloudflare-r2.md)
- [S3](./s3.md)
- [WebDAV](./webdav.md)
- [Discord](./discord.md)
- [Hugging Face](./huggingface.md)
- [GitHub Releases](./github-releases.md)
- [GitLab Packages](./gitlab-packages.md)
- [OneDrive](./onedrive.md)
- [Google Drive](./google-drive.md)
- [Dropbox](./dropbox.md)
- [Yandex](./yandex.md)
- [pCloud](./pcloud.md)

## Bu bölümde neler var

- Her yükleme kanalı için önceden gereken bilgiler.
- Harici platformlarda uygulama oluşturma, anahtar kopyalama veya token yetkilendirme adımları.
- Kanal yapılandırmasını ImgBed'e girme ve yüklemenin çalıştığını doğrulama.
