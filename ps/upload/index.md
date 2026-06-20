# د Upload Settings

Upload Settings د ImgBed له خپلو storage channels سره نښلوي. کله چې channel configure شي، uploaded images او files هغه service ته خوندي کېږي چې تاسې ټاکلی وي. ImgBed بیا access links، file records، previews، public gallery، random image API، WebDAV access او اړوند workflows manage کوي.

د هر user لپاره مناسب channel توپیر لري. که اسانه پیل غواړئ، Telegram، Discord یا GitHub Releases ښه انتخابونه دي. که capacity، speed او long-term stability درته مهم وي، Cloudflare R2، S3، OneDrive، Google Drive، Dropbox، Yandex، pCloud یا خپل WebDAV service وکاروئ.

## له پیل مخکې

- هغه storage account یا API credentials برابر کړئ چې کاروئ یې.
- ډاډه شئ چې ستاسو ImgBed domain پرانیستل کېږي، ځکه OAuth channels callback URL غواړي.
- د channel له اضافه کولو وروسته لومړی test image upload کړئ، څو وګورئ file سم save او open کېږي.

## د Channel فهرست

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

## په دې فصل کې څه راځي

- هر upload channel له setup مخکې کومو معلوماتو ته اړتیا لري.
- په third-party platforms کې app جوړول، keys copy کول یا Token authorize کول.
- په ImgBed کې channel configuration ډکول او د upload کار کول تاییدول.
