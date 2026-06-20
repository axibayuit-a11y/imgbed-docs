# Blog

Blog feature က သင့် ImgBed site ထဲ blog page သီးခြားတစ်ခုထည့်ပေးပါတယ်။

enable လုပ်ပြီးနောက် visitors တွေဖွင့်နိုင်ပါတယ်:

```text
https://your-domain.com/blog/
```

![Blog homepage](../../image/other/博客/博客首页.png)

ဒီ blog က open-source [LyraVoid/Mizuki](https://github.com/LyraVoid/Mizuki) project ကိုအခြေခံပြီး ပြင်ဆင်ထားတာပါ။ ImgBed က Vue နဲ့ integrate လုပ်ထားလို့ image hosting site ရဲ့အစိတ်အပိုင်းအဖြစ်အလုပ်လုပ်ပါတယ်။

## ဘယ်နေရာမှာ Configure လုပ်မလဲ

Blog settings က ဒီနေရာမှာရှိပါတယ်:

```text
System Settings -> Other Settings -> Blog
```

![Blog settings](../../image/other/博客/QQ20260611-221702.png)

## First-Time Setup

1. `Enable` ကို on လုပ်ပါ။
2. blog configuration သိမ်းမယ့် GitHub account ကိုရွေးပါ။
3. `Update Blog` ကိုနှိပ်ပါ။
4. success message ကိုစောင့်ပါ။
5. blog ကြည့်ရန် `https://your-domain.com/blog/` ကိုဖွင့်ပါ။

ပထမဆုံးအသုံးပြုတဲ့အခါ ImgBed ကရွေးထားတဲ့ account အောက်မှာ private GitHub repository တစ်ခုပြင်ဆင်ပါမယ်:

```text
imgbed-blog-config
```

ဒီ repository က blog settings နဲ့ article content ကိုသိမ်းပါတယ်။

## Posts ရေးခြင်း

blog posts တွေကို သင့် private GitHub repository ထဲမှာ edit လုပ်ပါ:

```text
imgbed-blog-config
```

ပုံမှန် workflow:

1. GitHub ကိုဖွင့်ပါ။
2. private `imgbed-blog-config` repository ထဲဝင်ပါ။
3. post files edit သို့မဟုတ် add လုပ်ပါ။
4. changes commit လုပ်ပါ။
5. ImgBed admin panel ကိုပြန်သွားပြီး `Update Blog` ကိုနှိပ်ပါ၊ သို့မဟုတ် blog homepage ရဲ့ဘယ်ဘက်အပေါ် logo ကိုသုံးကြိမ်နှိပ်ပြီး blog update trigger လုပ်ပါ။

`Update Blog` က သင်ရေးထားတဲ့ content ကို overwrite မလုပ်ပါ။ လိုအပ်ရင် repository initialize လုပ်ပြီး blog cache refresh လုပ်ပါတယ်။

## Supported Features

Blog က post lists, categories, tags, archives, search, dark mode, language switching စတဲ့ blog features တွေကို support လုပ်ပါတယ်။

comments နဲ့ visit statistics လည်း support လုပ်ပါတယ်။

![Blog comments](../../image/other/博客/支持留言.png)

comments တွေက posts အောက်မှာပေါ်ပါတယ်။ visitors တွေက avatar, nickname, email, comment content ပို့နိုင်ပါတယ်။

visit statistics က post views နဲ့ site visits ကိုပြပြီး blog traffic နားလည်ဖို့ကူညီပါတယ်။

## URL

Blog က အမြဲ `/blog/` အောက်မှာ serve လုပ်ပါတယ်။

ဥပမာ သင့် ImgBed domain က:

```text
https://image.example.com
```

blog URL က:

```text
https://image.example.com/blog/
```

blog disabled ဖြစ်ပြီးနောက် visitors တွေ blog page ကို access မလုပ်နိုင်တော့ပါ။
