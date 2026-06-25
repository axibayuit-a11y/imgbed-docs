# Dropbox ချန်နယ် ထည့်သွင်းခြင်း

## ဦးစွာ လိုအပ်သည့်အရာများ

| လိုအပ်ချက် | လိုအပ်ရသည့်အကြောင်းရင်း |
| --- | --- |
| Dropbox အကောင့်တစ်ခု | Sign in ဝင်ရန်နှင့် app ကို authorize လုပ်ရန် အသုံးပြုသည် |
| Dropbox app တစ်ခု | `App Key` နှင့် `App Secret` ထုတ်လုပ်ရန် အသုံးပြုသည် |
| သင်၏ ImgBed ဒိုမိန်း | OAuth redirect URI အတွက် အသုံးပြုသည် |
| အသုံးပြုနိုင်သော Dropbox storage | လက်တွေ့ဖိုင်သိုလှောင်ရာနေရာအဖြစ် အသုံးပြုသည် |

## ပြင်ဆင်မှု အဆင့်များ

### အဆင့် 1: Dropbox App ဖန်တီးပါ

1. Dropbox App Console ကိုဖွင့်ပါ။

```text
https://www.dropbox.com/developers/apps
```

2. App အသစ်တစ်ခု ဖန်တီးပါ။
3. Access type အတွက် အောက်ပါကို ရွေးပါ။

```text
App folder
```

4. App ကို မှတ်မိလွယ်သောအမည် ပေးပါ။ ဥပမာ `imgbed-app`။
5. App ဖန်တီးပြီးပါက app details စာမျက်နှာကိုဖွင့်ပါ။

အကြံပြုထားသော access type-

| Access Type | အကြံပြုချက် |
| --- | --- |
| `App folder` | အကြံပြုသည်။ ၎င်းသည် ImgBed ၏ ဖိုင်သိမ်းဆည်းပုံနှင့် ကိုက်ညီသည်။ |
| `Full Dropbox` | မအကြံပြုပါ။ ImgBed သည် အကောင့်တစ်ခုလုံးသို့ access မလိုအပ်ပါ။ |

![Dropbox app ဖန်တီးခြင်း](../../image/upload/dropbox/开发者创建应用.png)

### အဆင့် 2: Redirect URI ထည့်ပါ

Dropbox app details စာမျက်နှာတွင် OAuth သို့မဟုတ် Redirect URI settings ကိုရှာပြီး အောက်ပါကို ထည့်ပါ။

```text
https://your-domain.com/api/oauth/dropbox/callback
```

Admin panel ကို ဒိုမိန်းတစ်ခုထက်ပို၍ အသုံးပြုပါက သက်ဆိုင်သည့် callback URL တစ်ခုစီကို ထည့်ပါ။

![Redirect URI ပြင်ဆင်ခြင်း](../../image/upload/dropbox/配置回调地址.png)

### အဆင့် 3: App Permission များ ပြင်ဆင်ပါ

`Permissions` tab ကိုဖွင့်ပြီး အောက်ပါ scope များကို အနည်းဆုံး enable လုပ်ပါ။

| Scope | လိုအပ်မှု | ရည်ရွယ်ချက် |
| --- | --- | --- |
| `account_info.read` | လိုအပ်သည် | Account နှင့် quota information ကို ဖတ်သည် |
| `files.metadata.read` | လိုအပ်သည် | Path check များအတွက် file နှင့် folder metadata ကိုဖတ်သည် |
| `files.metadata.write` | လိုအပ်သည် | Folder များဖန်တီးပြီး metadata ရေးသည် |
| `files.content.write` | လိုအပ်သည် | ဖိုင်များကို အပ်လုဒ်လုပ်သည်။ ဤ scope မရှိပါက `required scope 'files.content.write'` ဖြစ်ပေါ်မည်။ |
| `files.content.read` | အကြံပြုသည် | Download၊ preview နှင့် temporary file link များကို ခွင့်ပြုသည် |

Scope များရွေးပြီးပါက စာမျက်နှာအောက်ခြေရှိ `Submit` ကိုနှိပ်ပါ။

![Permission များ ထည့်ခြင်း](../../image/upload/dropbox/添加对应的权限.png)

အရေးကြီးသည်-

| အခြေအနေ | လုပ်ဆောင်ရန် |
| --- | --- |
| Scope များကို ပြောင်းထားသည် | Token authorization flow ကို ထပ်မံလုပ်ဆောင်ပြီး `Refresh Token` အသစ် ရယူပါ။ |
| Reauthorize မလုပ်ထားပါ | Token အဟောင်းသည် permission အသစ်များကို မရရှိသဖြင့် upload မအောင်မြင်နိုင်သေးသည်။ |

### အဆင့် 4: App Credential များကို ကူးယူပါ

Dropbox app စာမျက်နှာမှ အောက်ပါတန်ဖိုးနှစ်ခုကို သိမ်းထားပါ။

| Dropbox အကွက် | ImgBed အကွက် |
| --- | --- |
| `App key` | `App Key` |
| `App secret` | `App Secret` |

### အဆင့် 5: Dropbox Channel ကိုဖြည့်ပါ

အပ်လုဒ် ဆက်တင်များ တွင် `Dropbox` ကိုရွေးပြီး အောက်ပါအတိုင်း ဖြည့်ပါ။

| ImgBed အကွက် | ထည့်ရန်အရာ |
| --- | --- |
| ချန်နယ်အမည် | သင်မှတ်မိနိုင်သောအမည်၊ ဥပမာ `Main Dropbox` |
| App Key | Dropbox `App key` |
| App Secret | Dropbox `App secret` |
| Refresh Token | ယခုအချိန်တွင် အလွတ်ထားပါ |
| အမြစ် ဖိုင်တွဲ | ရွေးချယ်နိုင်သည်။ မူရင်း သည် `imgbed` ဖြစ်သည်။ |
| Note | ရွေးချယ်နိုင်သည် |

![Token ရယူခြင်း](../../image/upload/dropbox/获取令牌.png)

### အဆင့် 6: Refresh Token ရယူပါ

1. ImgBed တွင် `Get Token` ကိုနှိပ်ပါ။
2. ချိတ်ဆက်လိုသော Dropbox အကောင့်သို့ sign in ဝင်ပါ။
3. Authorization prompt ကို approve လုပ်ပါ။
4. Callback စာမျက်နှာတွင် `Refresh Token` ကိုပြမည်။
5. ၎င်းကိုကူးယူပါ။
6. ImgBed သို့ ပြန်သွားပြီး `Refresh Token` အကွက်ထဲသို့ paste လုပ်ပါ။

![Token ကူးယူခြင်း](../../image/upload/dropbox/复制令牌.png)

## အတည်ပြုနည်း

| စစ်ဆေးချက် | မျှော်မှန်းရလဒ် |
| --- | --- |
| ချန်နယ်ကတ် | သိမ်းပြီးနောက် Dropbox channel ပေါ်လာသည်။ |
| ချန်နယ် switch | Channel ကို enable လုပ်နိုင်သည်။ |
| Token သိမ်းထားသည် | Detail page တွင် `Refresh Token` သိမ်းထားကြောင်း ပြသည်။ |
| အပ်လုဒ် စမ်းသပ်မှု | စမ်းသပ်ပုံသည် Dropbox app folder ထဲတွင် ပေါ်လာသည်။ |

Quota limit ဖွင့်ထားပါက quota query ကိုနှိပ်ပါ။ Query အောင်မြင်ပြီးနောက် ချန်နယ်ကတ် တွင် used space၊ total space နှင့် last update time ကိုပြမည်။

![Quota query အောင်မြင်ခြင်း](../../image/upload/dropbox/查询额度成功.png)

## ပြဿနာဖြေရှင်းခြင်း

| ပြဿနာ | ဖြေရှင်းနည်း |
| --- | --- |
| ImgBed က configuration မပြည့်စုံဟု ပြသည် | `App Key`၊ `App Secret` နှင့် `Refresh Token` အားလုံး ဖြည့်ထားကြောင်း စစ်ဆေးပါ။ |
| Authorization အောင်မြင်သော်လည်း `Refresh Token` မပေါ်ပါ | `Get Token` ကို ထပ်နှိပ်ပြီး offline authorization flow ကို အသုံးပြုထားကြောင်း သေချာပါစေ။ |
| Upload သည် `required scope 'files.content.write'` ဖြင့် မအောင်မြင်သည် | `files.content.write` ကို enable လုပ်ပါ၊ `Submit` ကိုနှိပ်ပါ၊ ထို့နောက် `Refresh Token` အသစ် ရယူပါ။ |
| Callback မအောင်မြင်ပါ | Redirect URI သည် `https://your-domain.com/api/oauth/dropbox/callback` ဖြစ်ကြောင်း အတည်ပြုပါ။ |
| ဖိုင်များကို ရှာမတွေ့ပါ | Dropbox app ကို `App folder` mode ဖြင့် ဖန်တီးထားကြောင်း အတည်ပြုပါ။ |

## အမြန် Flow

```text
Open Dropbox App Console
-> Create an app
-> Choose App folder access
-> Add https://your-domain.com/api/oauth/dropbox/callback
-> Enable account_info.read / files.metadata.read / files.metadata.write / files.content.write
-> Optionally enable files.content.read
-> Click Submit
-> Copy App Key and App Secret
-> Fill them into ImgBed
-> Click Get Token
-> Copy the Refresh Token from the callback page
-> Paste it back into ImgBed and save
```

## ကိုးကားချက်များ

1. Dropbox App Console: https://www.dropbox.com/developers/apps
2. Dropbox OAuth Guide: https://developers.dropbox.com/oauth-guide
3. Dropbox Developer Guide: https://www.dropbox.com/developers/reference/developer-guide
