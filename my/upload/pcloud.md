# pCloud Channel ထည့်သွင်းခြင်း

## ဘယ်အချိန်မှာ သင့်တော်လဲ

- pCloud account ရှိပြီး ImgBed images တွေကို pCloud ထဲသိမ်းချင်လျှင်။
- pCloud account email နဲ့ password ကို channel credentials အဖြစ်သုံးတာအဆင်ပြေလျှင်။

## စမလုပ်ခင် လိုအပ်တာတွေ

| လိုအပ်ချက် | ဘာကြောင့်လိုလဲ |
| --- | --- |
| pCloud account email | pCloud API ကို sign in ဝင်ရန် |
| pCloud password | pCloud API ကို sign in ဝင်ရန် |
| API host | default က `api.pcloud.com`။ EU accounts အတွက် `eapi.pcloud.com` သုံးနိုင်သည်။ |
| Storage directory | files သိမ်းမယ့်နေရာ။ default က `imgbed`။ |

## ဘယ်နေရာမှာ ထည့်မလဲ

1. System Settings ကိုဖွင့်ပါ။
2. Upload Settings ကိုဖွင့်ပါ။
3. ညာဘက်အပေါ်ထောင့်က `Add Channel` ကိုနှိပ်ပါ။
4. `pCloud` ကိုရွေးပါ။

## Field Reference

| Field | Purpose | Required |
| --- | --- | --- |
| Channel name | ဒီ pCloud channel ကိုသိနိုင်မယ့်အမည်၊ ဥပမာ `Personal pCloud` | Yes |
| Account email | သင့် pCloud login email | Yes |
| Password | သင့် pCloud password | Yes |
| API host | pCloud API host။ default က `api.pcloud.com`။ | No |
| Storage directory | files သိမ်းမယ့် directory။ default က `imgbed`။ | No |

account region အလိုက် API host ရွေးပါ:

| Account Region | API Host |
| --- | --- |
| Default / US | `api.pcloud.com` |
| Europe | `eapi.pcloud.com` |

## Setup Steps

1. Upload Settings ကိုဖွင့်ပါ။
2. `Add Channel` ကိုနှိပ်ပါ။
3. `pCloud` ကိုရွေးပါ။
4. မှတ်မိလွယ်တဲ့ channel name ထည့်ပါ။
5. pCloud account email ထည့်ပါ။
6. pCloud password ထည့်ပါ။
7. API host ကို `api.pcloud.com` အတိုင်းထားပါ၊ EU account ဖြစ်လျှင် `eapi.pcloud.com` သုံးပါ။
8. storage directory ကို `imgbed` အတိုင်းထားပါ၊ သို့မဟုတ် ကိုယ်နှစ်သက်တဲ့ folder ပြောင်းထည့်ပါ။
9. channel ကို save လုပ်ပါ။

![Configure channel](../../image/upload/pcloud/配置渠道.png)

## စစ်ဆေးနည်း

| Check | Expected Result |
| --- | --- |
| Channel card | Save ပြီးနောက် pCloud channel card ပေါ်လာရပါမယ်။ |
| Channel switch | card ပေါ်က switch က enabled ဖြစ်ရပါမယ်။ |
| Email display | card က connected pCloud email ကိုပြရပါမယ်။ |
| Quota query | query အောင်မြင်ပြီးနောက် used နဲ့ total capacity ပြရပါမယ်။ |
| Upload test | test image က configured pCloud storage directory ထဲပေါ်လာရပါမယ်။ |

![Quota query success](../../image/upload/pcloud/查询额度成功.png)

## Troubleshooting

### OAuth2 မသုံးတာဘာကြောင့်လဲ?

pCloud OAuth2 က default အနေနဲ့ self-service မဟုတ်ပါ။ enable လုပ်ချင်ရင် pCloud ကို email ပို့ပြီးတောင်းရပါတယ်။

လက်ရှိ pCloud OAuth2 flow က ImgBed လိုအပ်တဲ့ short-lived upload link workflow ကိုလည်းမထောက်ပံ့ပါ။ ဒါကြောင့် ဒီ channel က account email/password login ကိုသုံးပါတယ်။

### ဘယ် API Host သုံးရမလဲ?

Default:

```text
api.pcloud.com
```

EU accounts အတွက်:

```text
eapi.pcloud.com
```

## Quick Flow

```text
pCloud email နဲ့ password ပြင်ဆင်ပါ
-> Upload Settings ဖွင့်ပါ
-> Add Channel
-> pCloud ရွေးပါ
-> channel name / email / password ဖြည့်ပါ
-> account က Europe မဟုတ်လျှင် API host ကို api.pcloud.com ထားပါ
-> အခြား folder မလိုလျှင် storage directory ကို imgbed ထားပါ
-> Save
-> quota query
-> test image upload
```
