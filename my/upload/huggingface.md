# Hugging Face ချန်နယ် ထည့်သွင်းခြင်း

## မစတင်မီ လိုအပ်သည့်အရာများ

လိုအပ်သည့်အရာ သုံးခုသာရှိသည်။

| လိုအပ်ချက် | ရည်ရွယ်ချက် |
| --- | --- |
| Hugging Face အကောင့် | Access token ထုတ်ရန်နှင့် repository ကိုပိုင်ဆိုင်ရန် အသုံးပြုသည်။ |
| Hugging Face User Access Token | ImgBed က Hugging Face API ကို access လုပ်ရန်၊ repository များဖန်တီးရန်နှင့် ဖိုင်များအပ်လုဒ်လုပ်ရန် အသုံးပြုသည်။ |
| Repository အမည် | Repository အမည် သာ ထည့်နိုင်သည်။ ဥပမာ `image`။ |

## ပြင်ဆင်မှု အဆင့်များ

### အဆင့် 1: Hugging Face သို့ Sign in ဝင်ပြီး Access Token ဖန်တီးပါ

1. Hugging Face သို့ sign in ဝင်ပါ။
2. ညာဘက်အပေါ်ထောင့်ရှိ သင်၏ avatar ကိုနှိပ်ပြီး `Settings` ကိုဖွင့်ပါ။
3. ဘယ်ဘက် sidebar မှ `Access Tokens` ကိုဖွင့်ပါ။
4. Token အသစ်တစ်ခု ဖန်တီးပါ။
5. Token ကို မှတ်မိလွယ်သောအမည် ပေးပါ။
6. `write` permission ကိုရွေးပါ။
7. Token ဖန်တီးပြီးသည်နှင့် ချက်ချင်းကူးယူပြီး သိမ်းထားပါ။

![Token ဖန်တီးခြင်း](../../image/upload/huggingface/创建令牌.png)

## အဆင့် 2: ImgBed တွင် Hugging Face Channel ကိုဖြည့်ပါ

အပ်လုဒ် ဆက်တင်များ တွင် `Hugging Face` ကိုရွေးပြီးနောက် အကွက်များကို အောက်ပါအတိုင်း ဖြည့်ပါ။

| UI အကွက် | ထည့်ရန်အရာ |
| --- | --- |
| ချန်နယ်အမည် | သင်ရွေးချယ်သောအမည်၊ ဥပမာ `hf-primary`။ |
| Repository အမည် | `image` ကဲ့သို့ short repo name သို့မဟုတ် `username/image` ကဲ့သို့ full path။ |
| Access Token | သင်ယခုဖန်တီးထားသော Hugging Face User Access Token။ |
| ပုဂ္ဂလိက repository | သင်၏လိုအပ်ချက်အပေါ်မူတည်၍ ဖွင့်ပါ သို့မဟုတ် ပိတ်ပါ။ |
| မှတ်ချက် | ရွေးချယ်နိုင်သည်။ ဥပမာ `Primary upload channel`။ |

![Channel ထည့်ခြင်း](../../image/upload/huggingface/添加渠道.png)

## အဆင့် 3: Channel ကိုသိမ်းပါ

အကွက်များဖြည့်ပြီးနောက် `Save` ကိုနှိပ်ပါ။

ထို့နောက် စနစ်သည် အောက်ပါအသေးစိတ်များကို ဆောင်ရွက်ပေးမည်။

| စနစ်၏ လုပ်ဆောင်ပုံ | ဖော်ပြချက် |
| --- | --- |
| Short repository အမည် | ImgBed သည် လက်ရှိ Hugging Face အကောင့်ကိုသိရှိပြီး တန်ဖိုးကို full repository path အဖြစ် ချဲ့ထွင်သည်။ |
| Full repository path | ImgBed သည် `username/repository` path ကို ထည့်သွင်းထားသည့်အတိုင်း အတိအကျ အသုံးပြုသည်။ |
| Repository check | လက်ရှိ personal account path ကိုအသုံးပြုပါက repository မရှိသေးသည့်အခါ ImgBed က repository ဖန်တီးရန် ကြိုးစားသည်။ Full path ကိုကိုယ်တိုင်ထည့်ပါက ImgBed သည် ထို path ကို တိုက်ရိုက်အသုံးပြုသည်။ |
| Repository type | ဤချန်နယ်သည် `dataset` repository ကိုအသုံးပြုသည်။ |
| Public/private state | Repository visibility ကို လက်ရှိ switch အတိုင်း sync လုပ်သည်။ |

## အမြန် စစ်ဆေးစာရင်း

```text
Sign in to Hugging Face
-> Create an Access Token
-> Select write permission
-> Return to ImgBed and enter the token and repository name
-> Save
-> If only a repo name is entered, ImgBed adds the current username automatically
-> If username/repo is entered, ImgBed uses it as-is
-> ImgBed checks or creates the dataset repository
-> Upload a test image
```
