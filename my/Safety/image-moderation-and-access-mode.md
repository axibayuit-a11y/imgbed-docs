# Image Moderation နှင့် Access Mode

Image moderation က uploaded images တွေကို age ratings သတ်မှတ်ပေးပါတယ်။ Access mode က public access မှတစ်ဆင့် ဘယ် ratings တွေမြင်နိုင်မလဲထိန်းချုပ်ပါတယ်။

ဒါက public gallery, public file URLs, random image API တို့ကိုသက်ရောက်ပါတယ်။ admin panel ကိုတော့ကန့်သတ်မထားပါ။ Administrators တွေက files အားလုံးကို ဆက်မြင်ပြီး manage လုပ်နိုင်ပါတယ်။

## ဘယ်နေရာမှာ Configure လုပ်မလဲ

admin panel ကိုဖွင့်ပြီး သွားပါ:

```text
System Settings -> Security Settings -> Upload Management -> Image Moderation
```

main settings တွေ:

- Access mode
- Enable moderation
- Moderation provider

## Access Mode က ဘာလုပ်လဲ

Access mode က public မှာပြလို့ရတဲ့ age ratings ကိုဆုံးဖြတ်ပါတယ်။

လက်ရှိ modes:

| Access Mode | Publicly Visible Ratings |
| --- | --- |
| Adult mode | General, R12, R16, R18 |
| Youth mode | General, R12, R16 |
| Teen mode | General, R12 |
| Child mode | General only |

default က Adult mode ဖြစ်ပါတယ်။

private sites သို့မဟုတ် mature content ပါတဲ့ sites တွေအတွက် Adult mode သင့်တော်နိုင်ပါတယ်။ public gallery ကိုပိုထိန်းချင်လျှင် Youth, Teen, Child mode တို့ကိုရွေးပါ။

## Moderation Enable လုပ်ရင် ဘာဖြစ်မလဲ

moderation enabled ဖြစ်လျှင် ImgBed က upload အချိန်မှာ selected moderation provider ကို call လုပ်ပြီး detected age rating ကိုသိမ်းပါမယ်။

main ratings:

| Rating | Meaning |
| --- | --- |
| General | public အတွက် safe ဖြစ်တဲ့ content |
| R12 | အနည်းငယ် sensitive ဖြစ်တဲ့ content |
| R16 | အလယ်အလတ် sensitive ဖြစ်တဲ့ content |
| R18 | adult content |

public access ဆုံးဖြတ်တဲ့အခါ moderation result ကိုသုံးပါတယ်။

moderation enabled မဟုတ်လျှင်၊ သို့မဟုတ် old files တွေမှာ rating မရှိလျှင် အဲဒီ files တွေကို unrated အဖြစ်သတ်မှတ်ပါတယ်။ rating မရှိရုံနဲ့ unrated files တွေကို public gallery သို့မဟုတ် random image API မှအလိုအလျောက်မဖယ်ရှားပါ။

## Moderation Provider ရွေးချယ်ခြင်း

available providers:

- moderatecontent.com
- nsfwjs
- Sightengine

provider တစ်ခုချင်းစီရဲ့ requirements မတူပါ:

- moderatecontent.com က များသောအားဖြင့် API Key လိုပါတယ်။
- nsfwjs က များသောအားဖြင့် API endpoint URL လိုပါတယ်။
- Sightengine က API user နဲ့ API secret လိုပါတယ်။

သင့် account, availability, detection quality အပေါ်မူတည်ပြီးရွေးပါ။ moderation enabled ဖြစ်ပြီးမှန်ကန်စွာ configured ဖြစ်လျှင် ImgBed က upload အချိန်မှာ image rating ရေးဖို့ကြိုးစားပါမယ်။

## Public Gallery အပေါ် သက်ရောက်မှု

public gallery က access mode အတိုင်း files တွေကို filter လုပ်ပါတယ်။

ဥပမာ:

- Adult mode: R18 images ပေါ်နိုင်သည်။
- Youth mode: R18 images ဖျောက်ထားသည်။
- Teen mode: R16 နဲ့ R18 images ဖျောက်ထားသည်။
- Child mode: General images ပဲပြသည်။

ဒါက normal public access ကိုသာသက်ရောက်ပါတယ်။ admin panel က files အားလုံးကိုဆက်ပြပါတယ်။

## Public File URLs အပေါ် သက်ရောက်မှု

Public file URLs ဆိုတာ visitors တွေဖွင့်တဲ့ direct image links ဖြစ်ပါတယ်။

file rating က current access mode မှာ allowed ဖြစ်လျှင် ImgBed က original image ကိုပြန်ပေးပါမယ်။

rating က allowed level ထက်မြင့်လျှင် normal public access က original image ကိုမပြန်ပေးပါ။ အစား configured blocked result သို့မဟုတ် blocked image အစားထိုးကိုပြန်ပေးပါမယ်။

ဥပမာ:

- current mode က Child mode ဖြစ်သည်။
- image တစ်ခုက R18 rated ဖြစ်သည်။
- visitor က public URL ကိုတိုက်ရိုက်ဖွင့်သည်။
- ImgBed က အဲဒီ visitor ကို R18 original image မပြန်ပေးပါ။

![Restricted file image](../../image/Safety/文件受限图.png)

admin panel ထဲက files ကြည့်နေတဲ့ administrators တွေက ဒီ restriction နဲ့မသက်ရောက်ပါ။

## Random Image API အပေါ် သက်ရောက်မှု

random image API လည်း candidate pool ကို access mode အတိုင်း filter လုပ်ပါတယ်။

Child mode မှာ random images တွေကို General-rated files ထဲကပဲရွေးပါမယ်။

Youth mode မှာ random images တွေက General, R12, R16 files ထဲကဖြစ်နိုင်ပြီး R18 files မပါပါ။

ဒါက random image API က public gallery restrictions ကို bypass မလုပ်နိုင်အောင်ကာကွယ်ပေးပါတယ်။

## List Rules နဲ့ဆက်စပ်မှု

Access mode တစ်ခုတည်းက public access rule မဟုတ်ပါ။ allow/block list rules နဲ့အတူအလုပ်လုပ်ပါတယ်။

ရိုးရိုးပြောရရင်:

- Allowlisted content က အရင် public ဖြစ်ပါတယ်။
- Blocklisted content ကို regular visitors တွေတိုက်ရိုက်မမြင်နိုင်ပါ။
- list နှစ်ခုထဲမပါတဲ့ content ကို access mode နဲ့ထပ်စစ်ပါတယ်။

image တစ်ခုက age rating နဲ့ list rules နှစ်မျိုးလုံးကြောင့် restricted ဖြစ်လျှင် regular visitors တွေက original file ကိုတိုက်ရိုက်မမြင်နိုင်ပါ။

## Recommended Settings

Public sites အတွက်:

- moderation enable လုပ်ပါ။
- site audience နဲ့ကိုက်တဲ့ access mode ရွေးပါ။
- all-age visitors အတွက် Child mode သို့မဟုတ် Teen mode သုံးပါ။
- mature content ကို public မပြချင်လျှင် Adult mode ကိုရှောင်ပါ။
- admin panel မှာ file ratings တွေကို review လုပ်ပြီးလိုအပ်လျှင် manually adjust လုပ်ပါ။

Private သို့မဟုတ် personal sites အတွက်:

- Adult mode က များသောအားဖြင့် fine ဖြစ်ပါတယ်။
- အသုံးဝင်လျှင် moderation enable လုပ်ပါ။
- လိုအပ်သလို admin panel မှာ ratings review/adjust လုပ်ပါ။

## FAQ

### Access Mode ပြောင်းပြီးနောက် Files တွေ Admin Panel ကနေပျောက်မလား?

မပျောက်ပါ။

Access mode က normal public access ကိုသာသက်ရောက်ပါတယ်။ admin panel ကိုမသက်ရောက်ပါ။

### Child Mode ပြောင်းပြီးနောက် Public Gallery မှာ Images နည်းသွားတာဘာကြောင့်လဲ?

Child mode က General-rated files တွေကိုသာ public ပြပါတယ်။ R12, R16, R18 files တွေကို filter လုပ်ပါတယ်။

### Public URLs က Adult Images ကိုဖွင့်နိုင်လား?

current access mode က အဲဒီ rating ကို allow မလုပ်လျှင် normal public URLs က original image ကိုမပြန်ပေးပါ။

### Random Image API က Restricted Images ပြန်ပေးနိုင်လား?

မပေးနိုင်ပါ။

random image API က candidates တွေကို current access mode အတိုင်း filter လုပ်ပါတယ်။

### Old Unrated Images တွေဘာဖြစ်မလဲ?

unrated images တွေက moderation results မရှိတာကြောင့်ပဲ အလိုအလျောက် hidden မဖြစ်ပါ။ နောက်ပိုင်း admin panel ထဲမှာ သူတို့ရဲ့ ratings ကို adjust လုပ်နိုင်ပါတယ်။
