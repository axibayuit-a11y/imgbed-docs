# Magnet Transfer

Magnet transfer က magnet link မှ files download လုပ်ပြီး သင်ရွေးထားတဲ့ cloud storage channel ထဲအလိုအလျောက် upload လုပ်ပါတယ်။

anime episodes, videos, archives နဲ့ အလားတူ files တွေ transfer လုပ်ဖို့အသုံးဝင်ပါတယ်။ magnet link ကို paste လုပ်ပါ၊ ImgBed က background download task ဖန်တီးပါမယ်။ download ပြီးတဲ့အခါ file ကို ImgBed ထဲ upload လုပ်ပြီး final link က upload list မှာပေါ်ပါမယ်။

![Magnet transfer](../../image/other/磁力链接/磁力链接.png)

## ဘယ်နေရာမှာ သုံးမလဲ

magnet transfer entry က homepage upload area ထဲမှာရှိပါတယ်။

magnet link ကို input box ထဲ paste လုပ်ပါ၊ `Transfer` ကိုရွေးပါ၊ ပြီးရင် upload လုပ်ပါ။

![Upload anime](../../image/other/磁力链接/上传番剧.png)

## ပထမဆုံးအသုံးမပြုခင်

admin panel မှာ magnet transfer ကိုအရင် configure လုပ်ပါ။

များသောအားဖြင့်လိုအပ်တာ:

1. download task run လုပ်ဖို့ GitHub account။
2. Google Drive သို့မဟုတ် OneDrive လို cloud upload channel။
3. target upload directory။
4. task timeout။

settings အသင့်ဖြစ်ပြီးနောက် homepage ကိုပြန်သွားပြီး magnet link paste လုပ်ကာ transfer စနိုင်ပါတယ်။

## Magnet Link Upload လုပ်ခြင်း

1. homepage upload box ထဲ magnet link paste လုပ်ပါ။
2. mode က `Transfer` ဖြစ်ကြောင်းသေချာပါစေ။
3. upload ကိုနှိပ်ပါ။
4. ImgBed က magnet task create လုပ်တာကိုစောင့်ပါ။
5. task စပြီးနောက် ညာဘက်အောက်ထောင့်က floating `Magnet Tasks` panel နဲ့ progress ကြည့်ပါ။

download နဲ့ upload ကအချိန်ယူနိုင်ပါတယ်။ speed က magnet resource, GitHub runtime environment, selected cloud storage channel တို့အပေါ်မူတည်ပါတယ်။

![Magnet downloading](../../image/other/磁力链接/磁力链接下载中.png)

## Completion ပြီးနောက်

task complete ဖြစ်ပြီးနောက် upload list မှာ file name နဲ့ link ပြပါမယ်။

videos တွေက video preview ပြပြီး images တွေက image preview ပြပါတယ်။ အခြား files တွေက regular file icon နဲ့ပြပါတယ်။

![Downloaded video](../../image/other/磁力链接/下载好后的视频.png)

copy လုပ်နိုင်တာတွေ:

| Link Type | Use Case |
| --- | --- |
| Original link | direct file access |
| Markdown | Markdown posts သို့မဟုတ် notes |
| HTML | web page code |
| BBCode | BBCode support လုပ်တဲ့ forums |

## Magnet Task Panel

ညာဘက်အောက် magnet task panel က task count, task name, progress, final status ကိုပြပါတယ်။

Common states:

| Status | Meaning |
| --- | --- |
| Waiting | task ဖန်တီးပြီး run ဖို့စောင့်နေသည်။ |
| Downloading | magnet resource download လုပ်နေသည်။ |
| Uploading | file download ပြီး cloud storage ထဲ upload လုပ်နေသည်။ |
| Completed | upload အောင်မြင်ပြီး link copy လုပ်နိုင်သည်။ |
| Failed | task မအောင်မြင်ပါ။ message စစ်ပြီးထပ်ကြိုးစားပါ။ |

## Tips

- magnet link တစ်ခုထဲ files အများကြီးပါလျှင် ImgBed က display အတွက် main completed file ကိုဦးစားပေးပါတယ်။
- large files တွေကအချိန်ပိုယူပါတယ်။ page refresh မလုပ်ခင် task ပြီးအောင်စောင့်ပါ။
- magnet resource မှာ available peers မရှိလျှင် အရမ်းနှေးနိုင် သို့မဟုတ် fail ဖြစ်နိုင်ပါတယ်။
- cloud account quota ကုန်လျှင်၊ authorization expire ဖြစ်လျှင်၊ upload directory မှားလျှင် task fail ဖြစ်နိုင်ပါတယ်။
- upload complete ပြီးနောက် video preview ပေါ်ဖို့ seconds အနည်းငယ်ယူနိုင်ပါတယ်။

## FAQ

### Magnet Link Paste လုပ်ပြီးနောက် ဘာမှမစဘူး

admin panel မှာ magnet transfer enabled ဖြစ်လား၊ usable GitHub account နဲ့ cloud channel ရွေးထားလား confirm လုပ်ပါ။

### Download အမြဲနှေးတယ်

magnet speed က resource ကိုယ်တိုင်အပေါ်မူတည်ပါတယ်။ available peers မရှိလျှင် download အရမ်းနှေး သို့မဟုတ် မဖြစ်နိုင်ပါ။

### Upload ပြီးနောက် Preview မပေါ်ဘူး

ပထမဆုံး file link ဖွင့်လို့ရလား confirm လုပ်ပါ။ video files တွေက browser ထဲ load ဖို့အချိန်နည်းနည်းလိုနိုင်ပါတယ်၊ သို့မဟုတ် link ကိုတိုက်ရိုက်ဖွင့်နိုင်ပါတယ်။

### Task Fail ဖြစ်ရင် ဘာစစ်ရမလဲ?

magnet link valid ဖြစ်လား၊ cloud channel အလုပ်လုပ်လား၊ upload directory မှန်လားစစ်ပါ။ ပြီးရင် task ကိုထပ် submit လုပ်ပါ။
