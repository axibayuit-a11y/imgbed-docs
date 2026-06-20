# Yandex Channel ထည့်သွင်းခြင်း

## စမလုပ်ခင် လိုအပ်တာတွေ

| လိုအပ်ချက် | ဘာကြောင့်လိုလဲ |
| --- | --- |
| Yandex account | sign in ဝင်ရန်နှင့် Yandex Disk authorize လုပ်ရန် |
| Yandex OAuth app | `Client ID` နဲ့ `Client Secret` generate လုပ်ရန် |
| သင့် ImgBed domain | OAuth redirect URI အတွက် |
| Yandex Disk storage ရရှိနိုင်မှု | file storage location အဖြစ်သုံးရန် |

## Setup Steps

### Step 1: Yandex OAuth App ဖန်တီးပါ

1. Yandex OAuth app creation page ကိုဖွင့်ပါ:

```text
https://oauth.yandex.com/client/new
```

2. sign in page ကို redirect ဖြစ်လျှင် Yandex account နဲ့အရင် sign in ဝင်ပါ။
3. app အသစ်ဖန်တီးပါ။
4. app ကိုမှတ်မိလွယ်တဲ့အမည်ပေးပါ၊ ဥပမာ `imgbed-yandex`။
5. callback သို့မဟုတ် redirect URL settings ကိုရှာပါ။
6. ထည့်ပါ:

```text
https://your-domain.com/api/oauth/yandex/callback
```

### Step 2: Permissions Confirm လုပ်ပါ

လက်ရှိ ImgBed Yandex integration အတွက် `Yandex.Disk REST API` အောက်မှာ ဒီ permissions လေးခုထားပါ:

| Permission | Purpose |
| --- | --- |
| `cloud_api:disk.app_folder` | ImgBed ကို app folder ထဲ files သိမ်းခွင့်ပေးသည် |
| `cloud_api:disk.read` | files နဲ့ download links ဖတ်သည် |
| `cloud_api:disk.write` | files upload လုပ်သည်၊ folders ဖန်တီးသည်၊ files delete လုပ်သည် |
| `Access to information about Yandex.Disk` | disk quota နဲ့ used space ဖတ်သည် |

`Yandex ID API` အောက်မှာ ဒီ permissions တွေမြင်လျှင် optional ဖြစ်ပါတယ်:

| Permission Text | Recommendation |
| --- | --- |
| `Access to username, first name and surname, gender` | Optional |
| `Access to email address` | Optional |

core upload, download, deletion, quota features တွေက အပေါ်က `Yandex.Disk REST API` permissions လေးခုကိုအဓိကမှီခိုပါတယ်။

![Configure Yandex Disk permissions](../../image/upload/yandex/dataaccess配置软盘权限.png)

### Step 3: App Credentials Copy လုပ်ပါ

app ဖန်တီးပြီးနောက် copy လုပ်ပါ:

| Yandex Field | ImgBed Field |
| --- | --- |
| `Client ID` | `Client ID` |
| `Client Secret` | `Client Secret` |

![Record Client ID and Secret](../../image/upload/yandex/记录客户端id和secret.png)

### Step 4: ImgBed မှာ Yandex Channel ဖြည့်ပါ

Upload Settings မှာ `Yandex` ကိုရွေးပြီး:

| ImgBed Field | What To Enter |
| --- | --- |
| Channel name | မှတ်မိလွယ်တဲ့အမည်၊ ဥပမာ `Main Yandex` |
| Client ID | Yandex app `Client ID` |
| Client Secret | Yandex app `Client Secret` |
| Refresh Token | အခုခဏဗလာထားပါ |
| Root directory | Optional။ default က `imgbed`။ |

![Edit channel config](../../image/upload/yandex/编辑配置渠道.png)

### Step 5: Refresh Token ရယူပါ

1. ImgBed မှာ `Get Token` ကိုနှိပ်ပါ။
2. connect လုပ်ချင်တဲ့ Yandex account ထဲ sign in ဝင်ပါ။
3. authorization prompt ကို approve လုပ်ပါ။
4. callback page မှာ `Refresh Token` ပြပါမယ်။
5. အဲဒါကို copy လုပ်ပါ။
6. ImgBed ကိုပြန်သွားပြီး `Refresh Token` field ထဲ paste လုပ်ပါ။

![Copy refresh token after authorization](../../image/upload/yandex/授权后复制刷新令牌.png)

### Step 6: Channel Save လုပ်ပါ

fields အားလုံးဖြည့်ပြီးနောက် channel ကို save လုပ်ပါ။

## Quick Flow

```text
Yandex OAuth Console ဖွင့်ပါ
-> app ဖန်တီးပါ
-> https://your-domain.com/api/oauth/yandex/callback ထည့်ပါ
-> Yandex Disk permissions confirm လုပ်ပါ
-> Client ID နဲ့ Client Secret copy လုပ်ပါ
-> ImgBed မှာ Client ID / Client Secret ထည့်ပါ
-> Get Token ကိုနှိပ်ပါ
-> callback page မှ Refresh Token copy လုပ်ပါ
-> ImgBed မှာ paste လုပ်ပြီး save လုပ်ပါ
```

## References

1. Register a Yandex app: https://yandex.com/dev/id/doc/en/register-client
2. Get an authorization code through URL: https://yandex.com/dev/id/doc/en/codes/code-url
3. Yandex OAuth token endpoint: https://yandex.com/dev/id/doc/en/tokens/token
