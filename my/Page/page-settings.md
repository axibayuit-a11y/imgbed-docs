# Page Settings

Page settings က site display, upload page defaults, background images, admin panel appearance တို့ကိုထိန်းချုပ်ပါတယ်။

## Global Settings

| Option | Purpose |
| --- | --- |
| Site title | browser tab မှာပြတဲ့ title။ |
| Site icon | browser tab မှာပြတဲ့ icon သေး။ |
| ImgBed name | frontend pages မှာပြတဲ့အမည်။ |
| ImgBed logo | frontend pages မှာပြတဲ့ logo image။ |
| Logo link | logo သို့မဟုတ် avatar နှိပ်တဲ့အခါဖွင့်မယ့် URL။ |
| Background switch interval | backgrounds အများအပြားအတွက် rotation interval, milliseconds ဖြင့်။ `60000` ဆို 60 seconds။ |
| Background opacity | background image opacity ကို `0` မှ `1` အထိသတ်မှတ်သည်။ တန်ဖိုးနည်းလျှင်ပိုဖျော့သည်။ |
| Default URL prefix | image links generate လုပ်တဲ့အခါသုံးတဲ့ prefix။ ဗလာဆို current site domain ကိုသုံးသည်။ |

## Client Settings

| Option | Purpose |
| --- | --- |
| Announcement | upload page အပေါ်ပိုင်းမှာပြတဲ့ announcement။ HTML support လုပ်သည်။ |
| Default upload channel | upload page မှာ default selected ဖြစ်တဲ့ upload channel။ Smart Dispatch ကိုလည်းရွေးနိုင်သည်။ |
| Default upload directory | default upload directory၊ ဥပမာ `/user/`။ ဗလာ သို့မဟုတ် `/` ဆို root။ |
| Default naming method | upload ပြီးနောက် default filename generation strategy။ အောက်မှာကြည့်ပါ။ |
| Convert to WebP by default | upload မလုပ်ခင် images ကို WebP ပြောင်းသည်။ |
| Enable compression by default | upload မလုပ်ခင် browser ထဲ locally images compress လုပ်သည်။ |
| Default compression threshold | image က ဒီ size ကျော်လျှင် automatically compress လုပ်သည်၊ MB ဖြင့်။ |
| Default target size | compression ပြီးနောက် target file size, MB ဖြင့်။ |
| Login page background | user login page အတွက် background image။ |
| Upload page background | upload page အတွက် background image။ |
| Footer portal link | footer portal button နှိပ်လျှင်ဖွင့်မယ့် URL။ |
| Hide footer | enabled ဖြစ်လျှင် frontend footer ကိုဖျောက်သည်။ |

## Admin Settings

| Option | Purpose |
| --- | --- |
| Admin login background | admin login page အတွက် background image။ |
| Admin background | admin pages အတွက် background image။ image URL တစ်ခု သို့မဟုတ် multiple URLs သုံးနိုင်သည်။ |
| Image loading mode | admin file list အတွက် preview loading mode။ Original က original images load လုပ်သည်။ Smart loading က public images အတွက် thumbnails ကိုဦးစားပေးပြီး restricted images အတွက် originals ကိုဦးစားပေးသည်။ |
| Thumbnail source | thumbnails ဖန်တီးသည့် service: wsrv.nl, Cloudflare Image Resizing, WordPress Photon။ Cloudflare Image Resizing ကိုရွေးမယ်ဆိုရင် Cloudflare ထဲမှာအရင် enable လုပ်ထားရမယ်။ |
| Live2D widget | admin panel မှာ Live2D character ပြသည်။ |
| Firework click effect | page နှိပ်တဲ့အခါ firework effect ပြသည်။ |
| Star cursor trail | mouse ရွှေ့တဲ့အခါ star trail ပြသည်။ |

## Background Image Formats

Login page background, upload page background, admin login background တို့က ဒီ formats ကို support လုပ်ပါတယ်:

| Value | Effect |
| --- | --- |
| `bing` | Bing wallpaper rotation သုံးသည်။ |
| `["https://example.com/1.jpg","https://example.com/2.jpg"]` | images အများအပြား rotate လုပ်သည်။ |
| `["https://example.com/1.jpg"]` | single background image သုံးသည်။ |
| `["https://your-domain.com/random?..."]` | random image API link သုံးသည်။ Other Settings မှာ ကိုယ်ပိုင် Random Image API configure လုပ်ပြီး generated random image link ကို single-background entry အဖြစ် paste လုပ်နိုင်သည်။ |

admin background က image URLs support လုပ်ပါတယ်။ page prompt အတိုင်း URLs အများအပြားကို English commas နဲ့ခွဲနိုင်ပါတယ်။ ဗလာဆို default background သုံးပါမယ်။

## Default Naming Method

| Method | Result |
| --- | --- |
| Default | time-random prefix + original filename၊ ဥပမာ `1760000000000_cat.png`။ |
| Prefix only | time-random prefix နဲ့ extension ပဲ၊ ဥပမာ `1760000000000.png`။ |
| Original name only | original filename ကိုထားသည်၊ ဥပမာ `cat.png`။ duplicate ဖြစ်လျှင် ImgBed က `(1)`, `(2)` စသဖြင့်ထည့်သည်။ |
| Short link | 8-character short ID နဲ့ extension သုံးသည်၊ ဥပမာ `a1b2c3d4.png`။ |
