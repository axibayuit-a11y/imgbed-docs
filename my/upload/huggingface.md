# Hugging Face Channel ထည့်သွင်းခြင်း

## စမလုပ်ခင် လိုအပ်တာတွေ

အချက်သုံးခုပဲလိုပါတယ်:

| လိုအပ်ချက် | အသုံးပြုပုံ |
| --- | --- |
| Hugging Face account | access token ဖန်တီးရန်နှင့် repository ပိုင်ရန်။ |
| Hugging Face User Access Token | ImgBed က Hugging Face API ကို access လုပ်ရန်၊ repositories ဖန်တီးရန်၊ files upload လုပ်ရန်။ |
| Repository name | repository name ပဲထည့်နိုင်ပါတယ်၊ ဥပမာ `image`။ |

## Setup Steps

### Step 1: Hugging Face ထဲ Sign in ဝင်ပြီး Access Token ဖန်တီးပါ

1. Hugging Face ထဲ sign in ဝင်ပါ။
2. ညာဘက်အပေါ်ထောင့်က avatar ကိုနှိပ်ပြီး `Settings` ကိုဖွင့်ပါ။
3. left sidebar မှ `Access Tokens` ကိုဖွင့်ပါ။
4. token အသစ်ဖန်တီးပါ။
5. token ကိုမှတ်မိလွယ်တဲ့အမည်ပေးပါ။
6. `write` permission ကိုရွေးပါ။
7. token ဖန်တီးပြီးတာနဲ့ ချက်ချင်း copy လုပ်ပြီးသိမ်းပါ။

![Create a token](../../image/upload/huggingface/创建令牌.png)

## Step 2: ImgBed မှာ Hugging Face Channel ဖြည့်ပါ

Upload Settings မှာ `Hugging Face` ရွေးပြီးနောက် fields တွေကို ဒီလိုဖြည့်ပါ:

| UI Field | What to Enter |
| --- | --- |
| Channel name | ကိုယ်ရွေးတဲ့အမည်၊ ဥပမာ `hf-primary`။ |
| Repository name | short repo name `image` သို့မဟုတ် full path `username/image`။ |
| Access Token | မကြာသေးခင်ဖန်တီးထားတဲ့ Hugging Face User Access Token။ |
| Private repository | လိုအပ်ချက်အရ on/off လုပ်ပါ။ |
| Remark | optional၊ ဥပမာ `Primary upload channel`။ |

![Add the channel](../../image/upload/huggingface/添加渠道.png)

## Step 3: Channel Save လုပ်ပါ

fields ဖြည့်ပြီးနောက် Save ကိုနှိပ်ပါ။

system က ဒီအချက်တွေကို ကိုယ်တိုင် handle လုပ်ပါမယ်:

| System Behavior | Description |
| --- | --- |
| Short repository name | ImgBed က current Hugging Face account ကိုသိပြီး value ကို full repository path အဖြစ် expand လုပ်သည်။ |
| Full repository path | `username/repository` path ကို ထည့်ထားတဲ့အတိုင်းသုံးသည်။ |
| Repository check | current personal account path ဖြစ်လျှင် repository မရှိသောအခါ create လုပ်ရန်ကြိုးစားသည်။ full path ကို manual ထည့်ထားလျှင် အဲဒီ path ကိုပဲသုံးသည်။ |
| Repository type | ဒီ channel က `dataset` repository ကိုသုံးသည်။ |
| Public/private state | repository visibility ကို current switch အတိုင်း synchronized လုပ်သည်။ |

## Quick Checklist

```text
Hugging Face ထဲ sign in ဝင်ပါ
-> Access Token ဖန်တီးပါ
-> write permission ရွေးပါ
-> ImgBed ကိုပြန်သွားပြီး token နဲ့ repository name ထည့်ပါ
-> Save
-> repo name ပဲထည့်ထားရင် ImgBed က current username ကိုအလိုအလျောက်ထည့်ပါမယ်
-> username/repo ထည့်ထားရင် အဲဒီအတိုင်းသုံးပါမယ်
-> ImgBed က dataset repository ကို check သို့မဟုတ် create လုပ်ပါမယ်
-> test image upload လုပ်ပါ
```
