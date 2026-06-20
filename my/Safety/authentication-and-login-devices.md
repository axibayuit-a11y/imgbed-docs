# Authentication နှင့် Login Device Management

`Authentication Management` နှင့် `Login Device Management` က ImgBed admin panel, public upload entry, WebDAV access တို့ကိုကာကွယ်ပေးပါတယ်။

ဒီစာမျက်နှာမှာ access credentials သတ်မှတ်နိုင်ပြီး signed-in devices စစ်နိုင်သလို လိုအပ်သည့်အခါ sessions အဟောင်းတွေကို revoke လုပ်နိုင်ပါတယ်။

## ဘယ်နေရာမှာ Configure လုပ်မလဲ

admin panel ကိုဖွင့်ပြီး သွားပါ:

```text
System Settings -> Security Settings
```

page ထဲမှာ main areas နှစ်ခုရှိပါတယ်:

- Authentication Management
- Login Device Management

![Authentication management](../../image/Safety/认证管理界面.png)

## Authentication Management က ဘာလုပ်လဲ

Authentication Management က access credentials တွေကိုသိမ်းပါတယ်။

အမျိုးအစားနှစ်မျိုးရှိပါတယ်:

- User-side authentication
- Admin-side authentication

## User-Side Authentication

User-side authentication ဆိုတာ upload password ဖြစ်ပါတယ်။

upload password သတ်မှတ်ပြီးရင် regular visitors တွေက upload page မသုံးခင် password ထည့်ရပါမယ်။ public upload page ကိုလူတိုင်းအတွက်မဖွင့်ချင်တဲ့အခါအသုံးဝင်ပါတယ်။

![User login page](../../image/Safety/用户端登录界面.png)

### Upload Password သတ်မှတ်ခြင်း

upload password configured ဖြစ်နေတဲ့အခါ:

- visitors တွေက upload page မသုံးခင် password ထည့်ရပါမယ်။
- password ကိုလက်ခံပြီးမှ upload လုပ်နိုင်ပါမယ်။
- user-side device sessions enabled ဖြစ်လျှင် ImgBed က user-side device ကို record လုပ်ပါမယ်။

upload password ပြောင်းလဲခြင်းက user-side sessions အဟောင်းတွေကို invalid ဖြစ်စေပါတယ်။ visitors တွေက password အသစ်ကိုပြန်ထည့်ရပါမယ်။

## Admin-Side Authentication

Admin-side authentication က admin username နဲ့ password ကိုသုံးပါတယ်။

ဒါက admin panel ကိုကာကွယ်ပေးပါတယ်။ production use အတွက် အမြဲ configure လုပ်ထားသင့်ပါတယ်။

![Admin login page](../../image/Safety/管理端登录界面.png)

### Admin Credentials သတ်မှတ်ခြင်း

admin username နဲ့ password configured ဖြစ်နေတဲ့အခါ:

- admin panel ဖွင့်ဖို့ login လုပ်ရပါမယ်။
- login အောင်မြင်ရင် admin device record တစ်ခုဖန်တီးပါမယ်။
- Login Device Management မှာ devices တွေကို review, clean up, force offline လုပ်နိုင်ပါတယ်။

admin username သို့မဟုတ် password ပြောင်းလဲခြင်းက admin sessions အဟောင်းတွေကို invalid ဖြစ်စေပါတယ်။ ပြန် sign in ဝင်ရပါမယ်။

## Login Device Management က ဘာလုပ်လဲ

Login Device Management က sign in ဝင်ထားတဲ့ devices တွေကိုပြပါတယ်။

ဒီအချက်တွေစစ်ရာမှာကူညီပါတယ်:

- ဘယ် devices တွေက admin panel ကို access လုပ်ခဲ့လဲ။
- ဘယ် devices တွေက user-side upload page ကို access လုပ်ခဲ့လဲ။
- ဘယ် WebDAV clients တွေ connect လုပ်ခဲ့လဲ။
- device session က valid ဖြစ်နေသေးလား။
- devices အဟောင်းတွေကို force offline လုပ်သင့်လား။

page မှာ tabs သုံးခုရှိပါတယ်:

- Admin
- User
- WebDAV

## Global Cookie Security

Login Device Management အပေါ်ပိုင်းမှာ global cookie behavior ကို configure လုပ်နိုင်ပါတယ်။

### User Cookie Lifetime

user-side login က ဘယ်နှစ်ရက် active ဖြစ်နိုင်လဲ ထိန်းချုပ်ပါတယ်။

ဥပမာ 14 days ထားလျှင် visitors တွေက များသောအားဖြင့် 14 ရက်အတွင်း upload password ပြန်ထည့်စရာမလိုပါ။

### Admin Cookie Lifetime

admin login က ဘယ်နှစ်ရက် active ဖြစ်နိုင်လဲ ထိန်းချုပ်ပါတယ်။

ဥပမာ 14 days ထားလျှင် administrators တွေက များသောအားဖြင့် 14 ရက်အတွင်း ပြန် sign in ဝင်စရာမလိုပါ။

### Secure Mode

Secure mode enabled ဖြစ်လျှင် browsers တွေက login cookies ကို HTTPS ပေါ်မှသာပို့ပါမယ်။

production HTTPS sites တွေအတွက် enable လုပ်ပါ။ local HTTP testing အတွက် enable မလုပ်ပါနှင့်၊ မဟုတ်ရင် "login succeeded, but refresh logs me out" လို behavior မြင်နိုင်ပါတယ်။

## Admin Login Devices

Admin tab က admin panel ထဲ sign in ဝင်ခဲ့တဲ့ devices တွေကိုပြပါတယ်။

device records တွေက admin credentials configured ဖြစ်ပြီး admin panel ကို login မှတစ်ဆင့် access လုပ်ပြီးမှပေါ်လာပါမယ်။

device card တစ်ခုစီမှာ ပြနိုင်တာတွေ:

- device နဲ့ browser information
- first login IP
- last active IP
- login time
- last active time
- expiration time
- current status

မသိတဲ့ device တွေ့ရင် `Force Offline` နဲ့ invalidate လုပ်ပါ။

## Clean Up Old Devices

`Clean Up Old Devices` က current tab ထဲက login records အဟောင်းတွေကို bulk remove လုပ်ပါတယ်။

အခြား devices တွေမှာ sessions အဟောင်းတွေ active ဖြစ်နေနိုင်တယ်လို့ သံသယရှိလျှင်သုံးပါ။

## Force Offline

`Force Offline` က device session တစ်ခုကို invalidate လုပ်ပါတယ်။

device တစ်ခု force offline ဖြစ်ပြီးနောက်:

- Admin devices တွေက ပြန် sign in ဝင်ရပါမယ်။
- User-side devices တွေက upload password ပြန်ထည့်ရပါမယ်။
- WebDAV clients တွေက ပြန် authenticate လုပ်ရပါမယ်။

Expired သို့မဟုတ် invalid devices တွေကိုလည်း remove လုပ်နိုင်ပါတယ်။

## Sign Out Current Device

current device card ကို `Current Device` လို့ mark လုပ်ထားပါတယ်။

current device မှ sign out လုပ်ပြီးနောက်:

- current admin session sign out ဖြစ်ပါမယ်။
- current user-side session sign out ဖြစ်ပါမယ်။

အဲဒီ area ကိုဆက်သုံးမယ်ဆိုရင် ပြန် sign in ဝင်ရပါမယ်။
