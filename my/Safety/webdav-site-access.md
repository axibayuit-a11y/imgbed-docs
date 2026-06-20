# WebDAV Site Access (Beta)

Security Settings ထဲက WebDAV setting က သင့် ImgBed site ကို WebDAV endpoint အဖြစ်ဖော်ထုတ်ပေးပါတယ်။

enable လုပ်ပြီးနောက် Windows, macOS, mobile file managers သို့မဟုတ် WebDAV-compatible client တစ်ခုခုနဲ့ ImgBed files တွေကို remote folder လို browse, upload, delete, manage လုပ်နိုင်ပါတယ်။

ဒါက site ရဲ့ WebDAV access entry ဖြစ်ပါတယ်။ Upload Settings ထဲက WebDAV storage channel နဲ့မတူပါ။ upload channel က third-party WebDAV service ထဲ files သိမ်းပါတယ်။ ဒီ setting က သင့် ImgBed site ကို clients အတွက် WebDAV access ပေးစေပါတယ်။

## ဘယ်နေရာမှာ Configure လုပ်မလဲ

admin panel ကိုဖွင့်ပြီး သွားပါ:

```text
System Settings -> Security Settings -> WebDAV
```

Available settings:

- Enable
- Username
- Password
- Image loading mode
- Default channel

## ဒီ Feature က ဘာလုပ်လဲ

WebDAV enabled ဖြစ်ပြီးနောက် ImgBed က fixed access URL တစ်ခုပေးပါတယ်:

```text
https://your-domain.com/dav
```

ImgBed file directory ကို connect လုပ်ဖို့ ဒီ URL ကိုသုံးပါ။

သင့်တော်တဲ့ use cases:

- computer file manager မှ ImgBed files ကိုတိုက်ရိုက် browse လုပ်ရန်။
- images တွေကို WebDAV folder ထဲ drag လုပ်ပြီး upload လုပ်ရန်။
- local file manager နဲ့ ImgBed folders ကို organize လုပ်ရန်။
- WebDAV-compatible software နဲ့ images sync/manage လုပ်ရန်။
- admin panel မဖွင့်ဘဲ ImgBed content access လုပ်ရန်။

## Settings

### Enable

WebDAV endpoint ကို on လုပ်ပါတယ်။

disabled ဖြစ်လျှင် clients တွေက WebDAV မှတစ်ဆင့် connect မလုပ်နိုင်ပါ။

### Username နှင့် Password

WebDAV clients တွေ connect လုပ်တဲ့အခါ ဒီ credentials တွေကိုသုံးပါတယ်။

dedicated WebDAV username နဲ့ password သုံးပါ။ admin password သို့မဟုတ် upload password ကိုပြန်မသုံးပါနှင့်။

username သို့မဟုတ် password တစ်ခုခုဗလာဖြစ်လျှင် WebDAV clients တွေက မှန်မှန်ကန်ကန် connect မလုပ်နိုင်ပါ။

### Image Loading Mode

Image loading mode က WebDAV clients တွေ images ဖတ်တဲ့အခါ ဘယ် image URL ကိုဦးစားပေးသုံးမလဲ ဆုံးဖြတ်ပါတယ်။

Common choices:

| Mode | Description |
| --- | --- |
| Smart loading | ImgBed က context အပေါ်မူတည်ပြီးရွေးသည်။ normal use အတွက် recommended။ |
| Original | original images ကိုဦးစားပေးသည်။ |
| Thumbnail | thumbnails ကိုဦးစားပေးသည်။ fast preview အတွက်အသုံးဝင်သည်။ |

မသေချာလျှင် `Smart loading` ကိုထားပါ။

### Default Channel

default channel ကို WebDAV uploads အတွက်သုံးပါတယ်။

Windows သို့မဟုတ် အခြား client မှ WebDAV directory ထဲ files copy လုပ်တဲ့အခါ ImgBed က selected default upload channel မှတစ်ဆင့် upload လုပ်ပါတယ်။

default channel မရွေးထားလျှင် browsing ကအလုပ်လုပ်နိုင်ပေမယ့် uploads fail ဖြစ်နိုင်ပါတယ်။

## Windows 11 မှာ WebDAV Access လုပ်ခြင်း

Windows 11 မှာ WebDAV ကို network location အဖြစ် add လုပ်နိုင်ပါတယ်။

1. `This PC` ကိုဖွင့်ပါ။
2. `Add a network location` ကိုရွေးပါ။
3. `https://your-domain.com/dav` ထည့်ပါ။
4. prompt ပြလာရင် WebDAV username နဲ့ password ထည့်ပါ။
5. wizard ကိုပြီးအောင်လုပ်ပါ။ ပြီးရင် WebDAV directory ကို File Explorer မှာဖွင့်နိုင်ပါမယ်။

![Add WebDAV in Windows 11](../../image/Safety/webdav在win11配置.png)

add လုပ်ပြီးနောက် WebDAV directory က Windows File Explorer မှာပေါ်လာပါမယ်။ normal folder လို files တွေကို open, copy, manage လုပ်နိုင်ပါတယ်။

![WebDAV in Windows](../../image/Safety/webdav在win显示效果.png)

## Supported Operations

WebDAV connection အောင်မြင်ပြီးနောက် များသောအားဖြင့်:

- files နဲ့ folders တွေကြည့်နိုင်သည်။
- files upload လုပ်နိုင်သည်။
- folders ဖန်တီးနိုင်သည်။
- files သို့မဟုတ် folders rename လုပ်နိုင်သည်။
- files move လုပ်နိုင်သည်။
- files delete လုပ်နိုင်သည်။

WebDAV က everyday access နဲ့ small-scale file management အတွက်ကောင်းပါတယ်။ large moves, bulk deletes, complex organization အတွက် admin panel ကိုသုံးပါ။

## Login Device Management

အောင်မြင်တဲ့ WebDAV connections တွေက Login Device Management ထဲက WebDAV tab မှာလည်းပေါ်ပါတယ်။

အဲဒီမှာ WebDAV clients တွေကို review လုပ်ပြီးလိုအပ်လျှင် old devices တွေကို force offline လုပ်နိုင်ပါတယ်။

WebDAV username သို့မဟုတ် password ပြောင်းလဲလျှင် old clients တွေက ပြန် sign in ဝင်ရပါမယ်။

## FAQ

### Windows က Username နဲ့ Password ကိုထပ်ခါထပ်ခါတောင်းနေတယ်

စစ်ပါ:

- URL က `https://your-domain.com/dav` ဖြစ်လား။
- username နဲ့ password က WebDAV settings နဲ့ကိုက်လား။
- WebDAV enabled ဖြစ်လား။
- site ကို HTTPS မှတစ်ဆင့် access လုပ်လို့ရလား။

### Browsing အလုပ်လုပ်ပေမယ့် Uploading fail ဖြစ်တယ်

`Default channel` ကိုစစ်ပါ။

WebDAV uploads အတွက် default upload channel လိုပါတယ်။ မရှိ၊ disabled ဖြစ်၊ misconfigured ဖြစ်လျှင် uploads fail ဖြစ်နိုင်ပါတယ်။

### Access Speed မတည်ငြိမ်ဘူး

WebDAV performance က client, network, file count, default upload channel အပေါ်မူတည်ပါတယ်။

directory တစ်ခုထဲမှာ files အရမ်းများနေလျှင် folders တွေထဲ organize လုပ်ပါ။

## Security Recommendations

- WebDAV access အတွက် HTTPS သုံးပါ။
- strong password သတ်မှတ်ပါ။
- WebDAV password ကိုမယုံကြည်ရသူတွေနဲ့မမျှဝေပါနှင့်။
- မသုံးတဲ့အခါ WebDAV ကို off လုပ်ပါ။
- Login Device Management ထဲမှာ unused WebDAV devices တွေကိုအချိန်ပိုင်းလိုက် clean up လုပ်ပါ။

## WebDAV Upload File Size

WebDAV clients တွေက browser upload page ရဲ့ large-file chunking flow ကိုမသုံးပါ။ အောက်က suggested limits ထက်ကြီးတဲ့ files အတွက် web upload page ကိုသုံးပါ။

| Default Upload Channel | Suggested Single-File Limit for WebDAV |
| --- | ---: |
| Telegram | 20 MB |
| Discord | 10 MB |
| Cloudflare R2 | 30 MB |
| S3 | 30 MB |
| GitHub Releases | 64 MB |
| GitLab Packages | 64 MB |
| Hugging Face | 20 MB |
| OneDrive | 30 MB |
| Google Drive | 30 MB |
| Dropbox | 30 MB |
| Yandex Disk | 30 MB |
| pCloud | 30 MB |
| WebDAV | 64 MB |
