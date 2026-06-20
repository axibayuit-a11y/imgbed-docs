# Random Image API နှင့် Public Gallery

ဒီ features နှစ်ခုလုံးကို ဒီနေရာမှာ configure လုပ်ပါတယ်:

```text
System Settings -> Other Settings
```

## Random Image API

Random Image API က selected directories ထဲမှ random file တစ်ခုကိုပြန်ပေးပါတယ်။ site backgrounds, avatar rotation, external pages မှ random image calls အတွက်အသုံးဝင်ပါတယ်။

enable လုပ်ပြီးနောက် ဒီလိုသုံးပါ:

```text
https://your-domain.com/random
```

## Random Image API Settings

| Option | Purpose |
| --- | --- |
| Enable | `/random` endpoint ကို on/off လုပ်သည်။ disabled ဖြစ်လျှင် access forbidden ဖြစ်သည်။ |
| Directories | random API သုံးနိုင်တဲ့ directories ကိုကန့်သတ်သည်။ ဒီမှာမပါသော directories ကို API မသုံးနိုင်ပါ။ |
| Call demo | copy လုပ်နိုင်တဲ့ random API links ဖန်တီးပေးသည်။ |

directories အများကြီးရွေးနိုင်ပါတယ်။ ဥပမာ `/landscape/` နဲ့ `/portrait/` ပဲ allow လုပ်ထားလျှင် random API က အဲဒီ directories နဲ့ subdirectories ထဲမှ files တွေပဲရွေးပါမယ်။

## Random Image API Parameters

| Parameter | Example | Purpose |
| --- | --- | --- |
| `dir` | `/landscape/` | random directory ကိုသတ်မှတ်သည်။ |
| `content` | `image` | media type ကိုသတ်မှတ်သည်။ `image`, `video`, `audio` သို့မဟုတ် comma-separated combinations သုံးပါ။ |
| `orientation` | `auto` | image orientation filter လုပ်သည်။ `portrait`, `landscape`, `auto` သုံးပါ။ |
| `type` | `url` | return format။ ဗလာဆို redirect, `url` ဆို plain text URL, `json` ဆို JSON။ |
| `origin` | `1` | `type=url` နဲ့အတူ full URL ပြန်ပေးရန်သုံးသည်။ |
| `age` | `all-ages,r12` | age rating အလိုက် filter လုပ်သည်။ |
| `tag` | `wallpaper,sky` | ဒီ tags ပါတဲ့ files တွေကိုပဲပြန်ပေးသည်။ |
| `ex` | `private` | ဒီ tags ပါတဲ့ files တွေကို exclude လုပ်သည်။ |

## Return Formats

`type` မပါလျှင် API က random file URL ဆီတိုက်ရိုက် redirect လုပ်ပါတယ်။

`type=url` ပါလျှင် text URL ပြန်ပေးပါတယ်။

`type=json` ပါလျှင် file URL, file ID, file name, file type, tags, rating, related metadata ပါတဲ့ file information ပြန်ပေးပါတယ်။

## Access Rules

Random Image API က public access rules ကိုလိုက်နာပါတယ်:

| Rule | Effect |
| --- | --- |
| Directory restriction | allowed directories ထဲက files တွေကိုသာရွေးနိုင်သည်။ |
| Blocklist | blocklisted files တွေကို random pool မှဖယ်သည်။ |
| Allowlist mode | enabled ဖြစ်လျှင် public access အတွက် allowed files တွေကိုသာပြန်ပေးသည်။ |
| Age rating | R12, R16, R18 နဲ့ content ဆင်တူများကို current access mode အတိုင်း filter လုပ်သည်။ |

filter လုပ်ပြီး match ဖြစ်တဲ့ file မရှိလျှင် API က no matching result ပြန်ပေးပါမယ်။

## Cache

Random Image API က speed ပိုကောင်းစေရန် directory candidate pools ကို cache လုပ်ပါတယ်။

files ပြောင်းလဲပြီးနောက် ImgBed က directory cache version update လုပ်ပြီး နောက် request များမှာ candidate pool ပြန် build လုပ်ပါတယ်။ empty directories တွေကို repeated queries မဖြစ်စေရန် ခဏ cache လုပ်ပါတယ်။

## Public Gallery

Public gallery က visitors တွေမြင်ခွင့်ပြုထားတဲ့ directories အတွက် read-only public browsing page ပေးပါတယ်။

enable လုပ်ပြီးနောက် visitors တွေဖွင့်နိုင်ပါတယ်:

```text
https://your-domain.com/browse/directory-name
```

## Public Gallery Settings

| Option | Purpose |
| --- | --- |
| Enable | public gallery ကို on/off လုပ်သည်။ disabled ဖြစ်လျှင် visitors browse မလုပ်နိုင်ပါ။ |
| Image loading mode | previews တွေက original images သုံးမလား thumbnails သုံးမလားထိန်းချုပ်သည်။ |
| Open directories | visitors access လုပ်နိုင်တဲ့ directories သတ်မှတ်သည်။ |

## Image Loading Mode

| Mode | Purpose |
| --- | --- |
| Original | visitor page က original files ကိုတိုက်ရိုက် load လုပ်သည်။ |
| Thumbnail | visitor page က faster loading အတွက် thumbnails ကိုဦးစားပေးသည်။ |

## Open Directories

Open directories က visitors တွေဘာမြင်နိုင်မလဲဆုံးဖြတ်ပါတယ်။

ဥပမာ:

```text
/1/,/2/,/landscape/,/portrait/
```

Visitors တွေက ဒီလို access လုပ်နိုင်ပါမယ်:

```text
https://your-domain.com/browse/1
https://your-domain.com/browse/2
https://your-domain.com/browse/landscape
https://your-domain.com/browse/portrait
```

Subdirectories တွေလည်း open လုပ်နိုင်ပါတယ်၊ ဥပမာ `/2026/lucky/`။ open မလုပ်ထားတဲ့ directories တွေကို visitors မဝင်နိုင်ပါ။

## Public Gallery Features

| Feature | Description |
| --- | --- |
| Browse directories | open directories ထဲက files နဲ့ subdirectories ကြည့်နိုင်သည်။ |
| Search | file name, file ID, tags နဲ့ search လုပ်နိုင်သည်။ |
| Type filter | images, videos, audio, other files filter လုပ်နိုင်သည်။ |
| Tag filter | selected tags ကို include သို့မဟုတ် exclude လုပ်နိုင်သည်။ |
| Orientation filter | landscape သို့မဟုတ် portrait images filter လုပ်နိုင်သည်။ |
| Time filter | upload time range အလိုက် filter လုပ်နိုင်သည်။ |
| Extension filter | file extension အလိုက် filter လုပ်နိုင်သည်။ |
| Copy link | file access links copy လုပ်နိုင်သည်။ |
| Media preview | visitor page မှာ images, videos, audio ကြည့်နိုင် သို့မဟုတ် play လုပ်နိုင်သည်။ |

## Public Gallery Access Rules

Public gallery လည်း public access rules ကိုလိုက်နာပါတယ်:

| Rule | Effect |
| --- | --- |
| Open directories | allowed directories ကိုသာပြသည်။ |
| Access mode | content ကို current age-rating access mode အလိုက် filter လုပ်သည်။ |
| Allowlist mode | enabled ဖြစ်လျှင် public access အတွက် allowed files တွေကိုသာပြသည်။ |
| Blocklist | blocklisted files တွေကိုဖျောက်ထားသည်။ |
