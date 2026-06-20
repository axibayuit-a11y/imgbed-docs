# Upload settings

Upload settings သည် ImgBed ကို သင့်ကိုယ်ပိုင် storage channels များနှင့် ချိတ်ဆက်ပေးပါသည်။ Channel တစ်ခု configure ပြီးပါက uploaded images နှင့် files များကို သင်ရွေးထားသော service ထဲတွင် သိမ်းဆည်းမည်ဖြစ်ပြီး ImgBed က access links, file records, previews, public gallery, random image API, WebDAV access နှင့် related workflows များကို စီမံပေးပါသည်။

အသုံးပြုပုံအလိုက် သင့်တော်သော channel ကွဲပြားနိုင်ပါသည်။ လွယ်ကူစွာ စတင်ချင်လျှင် Telegram, Discord သို့မဟုတ် GitHub Releases ကို စဉ်းစားနိုင်ပါသည်။ Capacity, speed နှင့် long-term stability ကို ပိုအရေးကြီးထားလျှင် Cloudflare R2, S3, OneDrive, Google Drive, Dropbox, Yandex, pCloud သို့မဟုတ် သင့် WebDAV service ကို အသုံးပြုနိုင်ပါသည်။

## မစတင်မီ

- အသုံးပြုမည့် storage account သို့မဟုတ် API credentials ကို ပြင်ဆင်ထားပါ။
- ImgBed domain ကို ဝင်ရောက်နိုင်ကြောင်း စစ်ဆေးပါ။ OAuth channels များအတွက် callback URL လိုအပ်ပါသည်။
- Channel ထည့်ပြီးနောက် test image တစ်ခု upload လုပ်ပြီး file သိမ်းဆည်းခြင်းနှင့် ဖွင့်ကြည့်ခြင်း အလုပ်လုပ်ကြောင်း စစ်ဆေးပါ။

## Channel list

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

## ဤအခန်းတွင် ပါဝင်သောအရာများ

- Upload channel တစ်ခုချင်းစီအတွက် setup မတိုင်မီလိုအပ်သောအချက်အလက်များ။
- Third-party platforms တွင် app ဖန်တီးခြင်း၊ key copy လုပ်ခြင်း သို့မဟုတ် Token authorize လုပ်ခြင်း။
- ImgBed တွင် channel configuration ဖြည့်ပြီး upload အလုပ်လုပ်ကြောင်း စစ်ဆေးခြင်း။
