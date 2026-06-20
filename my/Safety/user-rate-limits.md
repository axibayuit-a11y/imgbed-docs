# User Rate Limits

User rate limits က regular users သို့မဟုတ် visitors တွေ homepage မှ files upload လုပ်နိုင်တဲ့ frequency ကိုထိန်းချုပ်ပါတယ်။ public upload pages ကို abuse မဖြစ်စေဖို့ကူညီပါတယ်။

ဒီ feature က homepage uploads ကိုသာသက်ရောက်ပါတယ်။ Admin uploads နဲ့ API Tokens ဖြင့်လုပ်တဲ့ uploads တွေကို user rate limits မကန့်သတ်ပါ။

## ဘယ်နေရာမှာ Configure လုပ်မလဲ

admin panel ကိုဖွင့်ပြီး သွားပါ:

```text
System Settings -> Security Settings -> Upload Management -> User Rate Limits
```

![User rate limit settings](../../image/other/用户频控截图.png)

## Rate Limits Enable လုပ်ခြင်း

`Enable Rate Limits` ကို on လုပ်ပြီးနောက် ImgBed က uploader IP address အလိုက် recent uploads ကို track လုပ်ပါတယ်။

Default values:

| Setting | Default | Description |
| --- | --- | --- |
| Detection window | 1.5 hours | upload records ကို ဘယ်လောက်နောက်ပြန်တွက်မလဲ။ |
| Max file count | 20 | detection window ထဲမှာခွင့်ပြုတဲ့ files အများဆုံးအရေအတွက်။ |
| Single file size limit | 20 MB | file တစ်ခုရဲ့ maximum size။ |
| Total upload size limit | 200 MB | detection window ထဲက maximum total upload size။ |

ဥပမာ 1.5 hour window, 20 files, file တစ်ခု 20 MB, total 200 MB ဆိုလျှင် same IP မှ uploads တွေက configured limit တစ်ခုခုကျော်တာနဲ့ blocked ဖြစ်ပါမယ်။

## File Types Exclude လုပ်ခြင်း

`Excluded upload file types` က regular users သို့မဟုတ် visitors တွေ selected file categories upload လုပ်တာကိုတားပါတယ်။

Available categories:

| Type | Description |
| --- | --- |
| Images | jpg, png, webp, gif နဲ့ image files ဆင်တူများ |
| Videos | mp4, webm, mov နဲ့ video files ဆင်တူများ |
| Audio | mp3, flac, wav နဲ့ audio files ဆင်တူများ |
| Documents | pdf, txt, md, docx နဲ့ document files ဆင်တူများ |
| Other | အထက်ပါ categories ထဲမပါတဲ့ files၊ ဥပမာ zip, rar, exe, apk |

default အနေနဲ့ type မရွေးထားပါ၊ ဆိုလိုတာက allowed ဖြစ်ပါတယ်။

type တစ်ခုကို click လုပ်ရင် highlighted ဖြစ်ပြီး အဲဒီ type က blocked ဖြစ်ပါတယ်။

`Other` ရွေးထားလျှင် zip သို့မဟုတ် rar files upload လုပ်တဲ့ visitors တွေ blocked ဖြစ်ပြီး ဒီ file type မထောက်ပံ့ဘူးဆိုတဲ့ message မြင်ရပါမယ်။

## Block Messages

limit trigger ဖြစ်တဲ့အခါ users တွေက သက်ဆိုင်တဲ့ message မြင်ရပါမယ်:

![Too frequent upload message](../../image/other/频繁报错提示.png)

| Scenario | Message Meaning |
| --- | --- |
| Single file too large | file ကကြီးလွန်းပြီး upload မလုပ်ခင် compress လုပ်သင့်သည်။ |
| File type blocked | ဒီ file type ကို support မလုပ်ပါ။ ဖယ်ရှားပြီးထပ်ကြိုးစားပါ။ |
| Uploads too frequent | recent uploads တွေ frequency မြင့်လွန်းပြီး retry time ပြသည်။ |
| Total size too high | recent total upload size မြင့်လွန်းပြီး retry time ပြသည်။ |

## ဘယ်အချိန်မှာ Enable လုပ်သင့်လဲ

သင့် upload homepage က public accessible ဖြစ်လျှင် user rate limits enable လုပ်ပါ။

အသုံးများတဲ့အကြောင်းရင်းများ:

- scripted bulk uploads ကိုစိတ်ပူလျှင်။
- visitor uploads ကြီးကြီးမားမားတွေကို limit လုပ်ချင်လျှင်။
- regular users တွေကို images ပဲ upload လုပ်စေချင်ပြီး archives သို့မဟုတ် installers မလိုချင်လျှင်။
- public upload ကိုဖွင့်ထားချင်ပေမယ့် resource usage ကိုထိန်းချင်လျှင်။

site က သင့်တစ်ယောက်တည်းအတွက်ဖြစ်လျှင်၊ သို့မဟုတ် administrators တွေသာ upload လုပ်လျှင် ဒီ setting ကို disabled ထားနိုင်ပါတယ်။
