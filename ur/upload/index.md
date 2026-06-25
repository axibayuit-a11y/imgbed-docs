# اپ لوڈ سیٹنگز

اپ لوڈ سیٹنگز ImgBed کو آپ کے اپنے storage channels سے جوڑتی ہیں۔ channel configure ہونے کے بعد uploaded images اور files آپ کی منتخب service میں محفوظ ہوتی ہیں۔ ImgBed access links، file records، previews، public gallery، random image API، WebDAV access اور متعلقہ workflows کو manage کرتا ہے۔

ہر user کے لیے مناسب channel مختلف ہو سکتا ہے۔ آسان آغاز کے لیے Telegram، Discord یا GitHub Releases اچھے choices ہیں۔ اگر capacity، speed اور long-term stability زیادہ اہم ہیں تو Cloudflare R2، S3، OneDrive، Google Drive، Dropbox، Yandex، pCloud یا اپنا WebDAV service استعمال کریں۔

## شروع کرنے سے پہلے

- جس storage account یا API credentials کو استعمال کرنا ہے، انہیں تیار رکھیں۔
- یقینی بنائیں کہ آپ کا ImgBed domain کھل رہا ہے، کیونکہ OAuth channels کو callback URL چاہیے۔
- چینل شامل کرنے کے بعد پہلے ایک آزمائشی تصویر upload کریں، تاکہ file save اور open ہونے کی تصدیق ہو سکے۔

## Channel فہرست

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

## اس باب میں کیا ہے

- ہر upload channel کے لیے setup سے پہلے کون سی معلومات چاہیے۔
- third-party platforms پر app بنانا، keys کاپی کرنا یا Token authorize کرنا۔
- ImgBed میں channel configuration بھرنا اور upload کے کام کرنے کی تصدیق کرنا۔
