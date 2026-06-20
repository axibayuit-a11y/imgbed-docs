# Cloudflare API Token

Cloudflare API credentials က files ပြောင်းလဲပြီးနောက် Cloudflare CDN cache ကို purge လုပ်နိုင်စေဖို့ ImgBed ကိုခွင့်ပြုပါတယ်။

![Cloudflare API Token settings](../../image/Safety/cloudflare%20api%20token截图.png)

## ဘယ်နေရာမှာ Configure လုပ်မလဲ

admin panel ကိုဖွင့်ပြီး သွားပါ:

```text
System Settings -> Security Settings -> Cloudflare API Token
```

ဖြည့်ရန်လိုအပ်တာတွေ:

- Zone ID
- Account email
- API Key

## ဒီ Setting က ဘာလုပ်လဲ

Cloudflare က public image URLs တွေကို cache လုပ်ထားနိုင်ပါတယ်။

Caching က image delivery ကိုပိုမြန်စေပေမယ့် file ကို delete, block, replace, move လုပ်ပြီးနောက် content အဟောင်းက အချိန်တစ်ခုကြာ ဆက်မြင်နိုင်ပါတယ်။

Cloudflare API credentials configure ပြီးနောက် ImgBed က အဲဒီ operations တွေပြီးတိုင်း သက်ဆိုင်တဲ့ Cloudflare cache ကို purge လုပ်ဖို့ကြိုးစားပါမယ်။

ဒီအခြေအနေတွေမှာအသုံးဝင်ပါတယ်:

- image delete လုပ်ပြီး public link ကိုတတ်နိုင်သမျှမြန်မြန်အလုပ်မလုပ်စေချင်လျှင်။
- image block လုပ်ပြီး visitors တွေ original file မမြင်စေချင်လျှင်။
- file ကိုနာမည်တူနဲ့ replace လုပ်ပြီး visitors တွေ version အသစ်ကိုမြန်မြန်မြင်စေချင်လျှင်။
- files ကို move သို့မဟုတ် rename လုပ်ပြီး old path cache ကိုမြန်မြန် refresh စေချင်လျှင်။
- public access rules ပြောင်းပြီး public gallery သို့မဟုတ် random image cache ကိုမြန်မြန် update စေချင်လျှင်။

## ဗလာထားရင် ဘာဖြစ်မလဲ

ဒီ setting မရှိလည်း ImgBed ကပုံမှန်အလုပ်လုပ်ပါမယ်။

ကွာခြားချက်က ImgBed က Cloudflare CDN cache ကို actively purge မလုပ်ပါ။ visitors တွေက Cloudflare cache naturally expire ဖြစ်တဲ့အထိ content အဟောင်းကိုဆက်မြင်နိုင်ပါတယ်။

## Zone ID ရှာနည်း

Zone ID ဆိုတာ သင့် ImgBed domain သုံးတဲ့ site ရဲ့ Cloudflare Zone ID ဖြစ်ပါတယ်။

1. Cloudflare dashboard ထဲ sign in ဝင်ပါ။
2. သင့် ImgBed domain ပါတဲ့ site ကိုဖွင့်ပါ။
3. site overview page မှာ `Zone ID` ကိုရှာပါ။
4. ImgBed ထဲက `Zone ID` field ထဲ copy လုပ်ပါ။

ဒါက site Zone ID ဖြစ်ပြီး account ID မဟုတ်ပါ။

## Account Email

Cloudflare ထဲ sign in ဝင်တဲ့ email address ထည့်ပါ။

အောက်မှာထည့်မယ့် API Key နဲ့ကိုက်ညီရပါမယ်။

## API Key

Cloudflare Global API Key ကိုထည့်ပါ။

1. Cloudflare dashboard ထဲ sign in ဝင်ပါ။
2. profile ကိုဖွင့်ပါ။
3. API Tokens page ကိုသွားပါ။
4. `Global API Key` ကိုရှာပါ။
5. view လုပ်ပြီး copy လုပ်ပါ။
6. ImgBed ထဲက `API Key` field ထဲ paste လုပ်ပါ။

![View global API key](../../image/Safety/查看全局令牌.png)

## ဘယ်အချိန်မှာ Effect ဖြစ်မလဲ

fields ဖြည့်ပြီးနောက် settings ကို save လုပ်ပါ။

နောက်ပိုင်း file changes တွေက Cloudflare cache purge လုပ်ဖို့အလိုအလျောက်ကြိုးစားပါမယ်။ setup မလုပ်ခင်ပြီးခဲ့တဲ့ operations တွေကို retroactively purge မလုပ်ပါ။ setup မလုပ်ခင် file delete သို့မဟုတ် replace လုပ်ထားလျှင် Cloudflare cache expire ဖြစ်အောင်စောင့်ပါ သို့မဟုတ် Cloudflare ထဲမှာ manual purge လုပ်ပါ။

## FAQ

### ဒါ Required လား?

မဟုတ်ပါ။

သင့် domain က Cloudflare မသုံးလျှင်၊ သို့မဟုတ် CDN cache delay ကိုစိတ်မပူလျှင် ဗလာထားနိုင်ပါတယ်။

### Credentials မှားရင် Uploads ပျက်မလား?

များသောအားဖြင့် မပျက်ပါ။

credentials မှားတာက ImgBed ကို Cloudflare cache purge မလုပ်နိုင်အောင်ပဲတားပါတယ်။ upload နဲ့ normal file access ကဆက်အလုပ်လုပ်သင့်ပါတယ်။

### Deleted Image က ဘာကြောင့် ဆက်ဖွင့်လို့ရနေတာလဲ?

အများဆုံးဖြစ်တဲ့အကြောင်းရင်းက Cloudflare က file အဟောင်းကို cache ထားတာပါ။

Cloudflare API credentials မှန်ကန်လျှင် ImgBed က file delete လုပ်တဲ့အခါ သက်ဆိုင်တဲ့ URL cache ကို purge လုပ်ပါမယ်။

### File Replace လုပ်ပြီးနောက် Image အဟောင်းကို ဘာကြောင့်ဆက်မြင်နေရလဲ?

ဒါလည်း များသောအားဖြင့် CDN cache ကြောင့်ဖြစ်ပါတယ်။

ဒီ setting configure လုပ်ပြီးနောက် ImgBed က နာမည်တူ file overwrite လုပ်တဲ့အခါ old URL cache ကို purge လုပ်ဖို့ကြိုးစားပါမယ်။
