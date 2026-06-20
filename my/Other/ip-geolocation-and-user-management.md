# IP Geolocation နှင့် User Management

IP geolocation က uploader records, login devices နဲ့ logs ဆင်တူတွေထဲက IP addresses တွေကို approximate locations အဖြစ်ပြောင်းပေးပါတယ်။

configure ပြီးနောက် admin panel က upload နဲ့ access origins တွေကိုပိုရှင်းရှင်းပြနိုင်ပါတယ်။ User Management ကလည်း suspicious IP addresses အတွက် upload access ကို block သို့မဟုတ် restore လုပ်နိုင်စေပါတယ်။

## ဘယ်နေရာမှာ Configure လုပ်မလဲ

ဖွင့်ပါ:

```text
System Settings -> Other Settings -> IP Geolocation
```

![IP geolocation](../../image/other/ip定位/ip定位.png)

## Available Settings

IP geolocation flow အသစ်က map service တစ်ခုတည်းပေါ်မမှီခိုဘဲ sources အများကြီး support လုပ်ပါတယ်။

| Setting | Purpose |
| --- | --- |
| IP geolocation language | display language ရွေးရန်၊ ဥပမာ English, Simplified Chinese, Japanese, French စသည်။ |
| MaxMind Account ID | MaxMind GeoLite Web Service အတွက် MaxMind account ID။ |
| MaxMind License Key | MaxMind License Key။ |
| Tencent Map Key | Tencent Location Service key။ Chinese addresses နဲ့ mainland China IPs အတွက်အသုံးဝင်သည်။ |
| ipapi Key | APILayer ipapi key။ multilingual IP geolocation support လုပ်သည်။ |

လိုအပ်တဲ့ services တွေကိုသာဖြည့်ပါ။ field အားလုံး configure လုပ်ဖို့မလိုပါ။

key မထည့်လည်း ImgBed က built-in free sources တွေကိုကြိုးစားသုံးပါမယ်။ ဒါပေမယ့် stability, language support, precision က သင်ကိုယ်တိုင် configure လုပ်ထားတဲ့ service ထက်နည်းနိုင်ပါတယ်။

## Recommended Choices

Chinese addresses အဓိကလိုလျှင်:

1. IP geolocation language ကို Simplified Chinese ထားပါ။
2. Tencent Map Key configure လုပ်ပါ။
3. optional အနေနဲ့ MaxMind သို့မဟုတ် ipapi ကို fallback source အဖြစ်ထည့်ပါ။

English သို့မဟုတ် multilingual addresses အဓိကလိုလျှင်:

1. လိုအပ်တဲ့ language ရွေးပါ။
2. MaxMind Account ID နဲ့ License Key configure လုပ်ပါ။
3. multilingual results ပိုကောင်းချင်လျှင် ipapi Key ထည့်ပါ။

## MaxMind Setup

MaxMind အတွက်လိုအပ်တာ:

```text
MaxMind Account ID
MaxMind License Key
```

MaxMind dashboard မှာ account ID ရှာပြီး License Keys page မှ License Key generate လုပ်ပါ။

![MaxMind key config](../../image/other/ip定位/maxmind的key配置.png)

generation ပြီးနောက် Account ID နဲ့ License Key ကို ImgBed ထဲ paste လုပ်ပြီး save လုပ်ပါ။

MaxMind free plan ကနေ့စဉ်အသုံးအတွက်သင့်တော်ပေမယ့် request limits ရှိပါတယ်။ quota ကျော်လျှင် ImgBed က အခြား available sources တွေကိုဆက်ကြိုးစားပါမယ်။

## ipapi Setup

ipapi က APILayer API Key ကိုသုံးပါတယ်။

ipapi console ကိုဖွင့်ပြီး ပြထားတဲ့ API Key ကို copy လုပ်ပါ။

![ipapi config](../../image/other/ip定位/ipapi配置.png)

ImgBed ထဲက `ipapi Key` field မှာ paste လုပ်ပြီး save လုပ်ပါ။

ipapi က multilingual IP geolocation ကို support လုပ်ပြီး selected language နဲ့ addresses ပြချင်တဲ့အခါအသုံးဝင်ပါတယ်။ free plan မှာလည်း request limits ရှိပါတယ်။ quota ကုန်လျှင် ImgBed က အခြား available sources တွေကိုဆက်ကြိုးစားပါမယ်။

## Tencent Map Key Setup

Tencent Map Key က Chinese addresses၊ အထူးသဖြင့် mainland China IPs အတွက်အသုံးဝင်ပါတယ်။

Tencent Location Service မှာ key ဖန်တီးတဲ့အခါ enable လုပ်ပါ:

```text
WebServiceAPI
```

ဖန်တီးပြီးနောက် key ကို `Tencent Map Key` ထဲ paste လုပ်ပြီး save လုပ်ပါ။

basic Chinese IP geolocation ပဲလိုလျှင် Tencent Map Key ကစဖို့လုံလောက်ပါတယ်။

## User Management မှာ ဘာတွေစစ်မလဲ

User Management ကို admin panel အပေါ်ပိုင်းကနေဖွင့်နိုင်ပါတယ်။

![User management](../../image/other/用户管理显示.png)

User Management က IP အလိုက် upload activity ကိုပြပါတယ်:

| Field | Description |
| --- | --- |
| IP source | uploader source IP။ |
| Address | IP မှ resolve လုပ်ထားတဲ့ approximate location။ |
| Total upload size | ဒီ IP မှ upload လုပ်ထားတဲ့ total file size။ |
| Upload count | ဒီ IP မှ upload အရေအတွက်။ |
| Upload allowed | On ဆို uploads allowed ဖြစ်သည်။ Off ဆို uploads blocked ဖြစ်သည်။ |

ဘယ်ဘက် arrow ကိုနှိပ်ပြီး အဲဒီ IP မှ uploaded files list ကို expand လုပ်ပါ။

file list မှာ file name, preview, file size, moderation result, file status, upload time တို့ကိုပြပါတယ်။ uploads တွေ suspicious ဖြစ်လျှင် IP ကိုအရင် expand လုပ်ပြီး files တွေ review လုပ်ကာ နောက်ထပ် uploads block လုပ်မလားဆုံးဖြတ်ပါ။

IP တစ်ခု suspicious ဖြစ်လျှင် `Upload allowed` ကို off လုပ်ပါ။ အဲဒီ IP မှ future uploads တွေ blocked ဖြစ်ပါမယ်။

## Search, Sort, Advanced Filters

User Management အပေါ်ပိုင်းမှာ IP source သို့မဟုတ် address နဲ့ search လုပ်နိုင်ပါတယ်။

recent uploaders, high-frequency uploaders, high-usage IPs ကိုရှာဖို့ time, upload count, total upload size နဲ့ sort လုပ်ပါ။

ပိုပြီးအသေးစိတ်စစ်ဖို့ advanced filters ကိုဖွင့်ပါ။

![Advanced filters](../../image/other/用户管理高级筛选.png)

Advanced filters က support လုပ်တာတွေ:

| Filter | Usage |
| --- | --- |
| Time range | selected period အတွင်း files upload လုပ်ခဲ့တဲ့ IPs ပြသည်။ |
| Access status | normal, blocked နဲ့ states ဆင်တူများအလိုက် filter လုပ်သည်။ |
| Allow/block list | allowlist, blocklist, unset အလိုက် filter လုပ်သည်။ |
| File type | images, videos, audio, documents, code, other files upload လုပ်ခဲ့တဲ့ IPs ပြသည်။ |
| File size | uploaded file size range အလိုက် filter လုပ်သည်။ |
| Age rating | unset, General, R12+, R16+, R18 စတဲ့ ratings အလိုက် filter လုပ်သည်။ |
| File status | abnormal files စစ်ရန် current file status အလိုက် filter လုပ်သည်။ |

filter apply လုပ်ရန် `Apply Filters` ကိုနှိပ်ပါ။ data အားလုံးကိုပြန်ကြည့်ရန် `Reset` ကိုသုံးပါ။

## Mobile View

mobile မှာ User Management က card layout အဖြစ်ပြောင်းပါတယ်။

![Mobile user management](../../image/other/手机端显示用户管理效果.png)

card တစ်ခုစီမှာ IP, address, total upload size, upload count, upload allowed switch တို့ကိုပြပါတယ်။ horizontal table scrolling မလိုဘဲ users manage လုပ်နိုင်ပါတယ်။

## Location မှားနေသလိုမြင်ရင်

IP geolocation က approximate ဖြစ်ပါတယ်။ precise street address မဟုတ်ပါ။

user က proxy, data center, cloud server, cross-border network အနောက်မှာရှိလျှင် ပြထားတဲ့ location က real location နဲ့ကွာနိုင်ပါတယ်။

ဒီ feature ကို rough origin နားလည်ဖို့၊ abnormal uploads ရှာဖို့၊ blocking decisions အတွက်ကူညီဖို့သုံးပါ။ precise tracking အဖြစ်မယူဆပါနှင့်။

## Common Cases

| Case | Meaning |
| --- | --- |
| Address ဗလာ | IP မ resolve လုပ်ရသေးတာ သို့မဟုတ် current source unavailable ဖြစ်နိုင်သည်။ |
| Address language မှား | IP geolocation language နဲ့ အဲဒီ language support လုပ်တဲ့ source configured ဖြစ်လားစစ်ပါ။ |
| Address က data center ပြသည် | proxies, cloud servers, crawlers အများအပြားက data center သို့မဟုတ် ISP addresses အနေနဲ့ပေါ်နိုင်သည်။ |
| Upload count မြင့် | ဒီ IP ကိုဂရုတစိုက် review လုပ်ပြီးလိုအပ်လျှင် uploads block လုပ်ပါ။ |
| Total upload size ကြီး | sort/filter လုပ်ပါ၊ IP expand လုပ်ပါ၊ specific files စစ်ပါ။ |
| blocking ပြီးနောက် restore လို | `Upload allowed` ကိုပြန် on လုပ်ပါ။ |

## Quick Flow

```text
Other Settings ထဲက IP Geolocation ဖွင့်ပါ
-> IP geolocation language ရွေးပါ
-> လိုအပ်သလို MaxMind, Tencent Map, ipapi credentials ဖြည့်ပါ
-> settings save လုပ်ပါ
-> User Management ဖွင့်ပါ
-> IP source, address, total upload size, upload count review လုပ်ပါ
-> abnormal IPs ရှာဖို့ search, sort, advanced filters သုံးပါ
-> လိုအပ်သလို uploads allow/block လုပ်ပါ
```
