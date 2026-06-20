# Dropbox Channel ထည့်သွင်းခြင်း

## စမလုပ်ခင် လိုအပ်တာတွေ

| လိုအပ်ချက် | ဘာကြောင့်လိုလဲ |
| --- | --- |
| Dropbox account | sign in ဝင်ရန်နှင့် app authorize လုပ်ရန် |
| Dropbox app | `App Key` နဲ့ `App Secret` generate လုပ်ရန် |
| သင့် ImgBed domain | OAuth redirect URI အတွက် |
| Dropbox storage ရရှိနိုင်မှု | file storage location အဖြစ်သုံးရန် |

## Setup Steps

### Step 1: Dropbox App ဖန်တီးပါ

1. Dropbox App Console ကိုဖွင့်ပါ:

```text
https://www.dropbox.com/developers/apps
```

2. app အသစ်ဖန်တီးပါ။
3. access type အတွက်ရွေးပါ:

```text
App folder
```

4. app ကိုမှတ်မိလွယ်တဲ့အမည်ပေးပါ၊ ဥပမာ `imgbed-app`။
5. app ဖန်တီးပြီးနောက် app details page ကိုဖွင့်ပါ။

Recommended access type:

| Access Type | Recommendation |
| --- | --- |
| `App folder` | Recommended။ ImgBed ရဲ့ file storage ပုံစံနဲ့ကိုက်ညီသည်။ |
| `Full Dropbox` | မထောက်ခံပါ။ ImgBed က full-account access မလိုပါ။ |

![Create Dropbox app](../../image/upload/dropbox/开发者创建应用.png)

### Step 2: Redirect URI ထည့်ပါ

Dropbox app details page မှာ OAuth သို့မဟုတ် Redirect URI settings ကိုရှာပြီး ထည့်ပါ:

```text
https://your-domain.com/api/oauth/dropbox/callback
```

admin panel ကို domain တစ်ခုထက်ပိုပြီးသုံးလျှင် matching callback URL တစ်ခုချင်းစီထည့်ပါ။

![Configure redirect URI](../../image/upload/dropbox/配置回调地址.png)

### Step 3: App Permissions Configure လုပ်ပါ

`Permissions` tab ကိုဖွင့်ပြီး အနည်းဆုံး ဒီ scopes တွေ enable လုပ်ပါ:

| Scope | Required | Purpose |
| --- | --- | --- |
| `account_info.read` | Required | account နဲ့ quota information ဖတ်ရန် |
| `files.metadata.read` | Required | path checks အတွက် file/folder metadata ဖတ်ရန် |
| `files.metadata.write` | Required | folders ဖန်တီးရန်နှင့် metadata ရေးရန် |
| `files.content.write` | Required | files upload လုပ်ရန်။ ဒီ scope မရှိလျှင် `required scope 'files.content.write'` error ဖြစ်မည်။ |
| `files.content.read` | Recommended | download, preview, temporary file links အတွက်ခွင့်ပြုသည် |

scopes ရွေးပြီးနောက် page အောက်ခြေက `Submit` ကိုနှိပ်ပါ။

![Add permissions](../../image/upload/dropbox/添加对应的权限.png)

Important:

| Situation | What To Do |
| --- | --- |
| scopes ပြောင်းထားသည် | token authorization flow ကိုပြန် run လုပ်ပြီး `Refresh Token` အသစ်ယူပါ။ |
| reauthorize မလုပ်ထား | token ဟောင်းက permissions အသစ်မရပါ၊ upload က fail ဖြစ်နေနိုင်သည်။ |

### Step 4: App Credentials Copy လုပ်ပါ

Dropbox app page မှ ဒီ values နှစ်ခုကိုသိမ်းပါ:

| Dropbox Field | ImgBed Field |
| --- | --- |
| `App key` | `App Key` |
| `App secret` | `App Secret` |

### Step 5: ImgBed မှာ Dropbox Channel ဖြည့်ပါ

Upload Settings မှာ `Dropbox` ကိုရွေးပြီး:

| ImgBed Field | What To Enter |
| --- | --- |
| Channel name | မှတ်မိလွယ်တဲ့အမည်၊ ဥပမာ `Main Dropbox` |
| App Key | Dropbox `App key` |
| App Secret | Dropbox `App secret` |
| Refresh Token | အခုခဏဗလာထားပါ |
| Root directory | Optional။ default က `imgbed`။ |
| Note | Optional |

![Get token](../../image/upload/dropbox/获取令牌.png)

### Step 6: Refresh Token ရယူပါ

1. ImgBed မှာ `Get Token` ကိုနှိပ်ပါ။
2. connect လုပ်ချင်တဲ့ Dropbox account ထဲ sign in ဝင်ပါ။
3. authorization prompt ကို approve လုပ်ပါ။
4. callback page မှာ `Refresh Token` ပြပါမယ်။
5. အဲဒါကို copy လုပ်ပါ။
6. ImgBed ကိုပြန်သွားပြီး `Refresh Token` field ထဲ paste လုပ်ပါ။

![Copy token](../../image/upload/dropbox/复制令牌.png)

## စစ်ဆေးနည်း

| Check | Expected Result |
| --- | --- |
| Channel card | Save ပြီးနောက် Dropbox channel ပေါ်လာရပါမယ်။ |
| Channel switch | channel ကို enable လုပ်လို့ရရပါမယ်။ |
| Token saved | detail page မှာ `Refresh Token` သိမ်းထားကြောင်းပြရပါမယ်။ |
| Upload test | test image က Dropbox app folder ထဲပေါ်လာရပါမယ်။ |

quota limits enabled ဖြစ်လျှင် quota query ကိုနှိပ်ပါ။ query အောင်မြင်ပြီးနောက် channel card က used space, total space, last update time ကိုပြပါမယ်။

![Quota query success](../../image/upload/dropbox/查询额度成功.png)

## Troubleshooting

| Problem | Fix |
| --- | --- |
| ImgBed က configuration incomplete လို့ပြသည် | `App Key`, `App Secret`, `Refresh Token` အားလုံးဖြည့်ထားလားစစ်ပါ။ |
| Authorization အောင်မြင်ပေမယ့် `Refresh Token` မပေါ် | `Get Token` ကိုပြန်နှိပ်ပြီး offline authorization flow သုံးနေလားစစ်ပါ။ |
| Upload က `required scope 'files.content.write'` နဲ့ fail ဖြစ်သည် | `files.content.write` enable လုပ်ပါ၊ `Submit` နှိပ်ပါ၊ `Refresh Token` အသစ်ယူပါ။ |
| Callback fail ဖြစ်သည် | redirect URI က `https://your-domain.com/api/oauth/dropbox/callback` ဖြစ်ကြောင်း confirm လုပ်ပါ။ |
| Files မတွေ့ | Dropbox app ကို `App folder` mode နဲ့ဖန်တီးထားလား confirm လုပ်ပါ။ |

## Quick Flow

```text
Dropbox App Console ဖွင့်ပါ
-> app ဖန်တီးပါ
-> App folder access ရွေးပါ
-> https://your-domain.com/api/oauth/dropbox/callback ထည့်ပါ
-> account_info.read / files.metadata.read / files.metadata.write / files.content.write enable လုပ်ပါ
-> လိုအပ်လျှင် files.content.read enable လုပ်ပါ
-> Submit ကိုနှိပ်ပါ
-> App Key နဲ့ App Secret copy လုပ်ပါ
-> ImgBed ထဲထည့်ပါ
-> Get Token ကိုနှိပ်ပါ
-> callback page မှ Refresh Token copy လုပ်ပါ
-> ImgBed မှာ paste လုပ်ပြီး save လုပ်ပါ
```

## References

1. Dropbox App Console: https://www.dropbox.com/developers/apps
2. Dropbox OAuth Guide: https://developers.dropbox.com/oauth-guide
3. Dropbox Developer Guide: https://www.dropbox.com/developers/reference/developer-guide
