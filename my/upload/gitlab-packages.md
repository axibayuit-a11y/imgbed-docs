# GitLab Packages Channel ထည့်သွင်းခြင်း

## စမလုပ်ခင် လိုအပ်တာတွေ

အချက်သုံးခုပဲလိုပါတယ်:

| လိုအပ်ချက် | အသုံးပြုပုံ |
| --- | --- |
| GitLab account | access token ဖန်တီးရန်နှင့် project ပိုင်ရန်။ |
| GitLab Personal Access Token | ImgBed က GitLab API ကို access လုပ်ရန်၊ projects ဖန်တီးရန်၊ files ကို Generic Packages ထဲ upload လုပ်ရန်။ |
| Project name | project name ပဲထည့်နိုင်ပါတယ်၊ ဥပမာ `imgbed`။ |

## Setup Steps

### Step 1: GitLab ထဲ Sign in ဝင်ပြီး Access Token ဖန်တီးပါ

1. GitLab ထဲ sign in ဝင်ပါ။
2. ညာဘက်အပေါ်ထောင့်က avatar ကိုနှိပ်ပြီး `Preferences` ကိုဖွင့်ပါ။
3. left sidebar မှ `Access Tokens` ကိုဖွင့်ပါ။
4. token ကိုမှတ်မိလွယ်တဲ့အမည်ပေးပါ။
5. ကိုယ်တိုင် maintenance လုပ်မယ့်အစီအစဉ်အလိုက် expiration date ရွေးပါ။
6. `api` scope ကိုရွေးပါ။
7. token ဖန်တီးပြီးတာနဲ့ ချက်ချင်း copy လုပ်ပြီးသိမ်းပါ။

![Create a legacy token](../../image/upload/gitlab-packages/点击生成旧版令牌.png)

![Select token permissions](../../image/upload/gitlab-packages/勾选令牌权限.png)

## Step 2: ImgBed မှာ GitLab Packages Channel ဖြည့်ပါ

Upload Settings မှာ `GitLab Packages` ရွေးပြီးနောက်:

| UI Field | What to Enter |
| --- | --- |
| Channel name | ကိုယ်ရွေးတဲ့အမည်၊ ဥပမာ `GitLabPrimary`။ |
| Access Token | မကြာသေးခင်ဖန်တီးထားတဲ့ GitLab Personal Access Token။ |
| Project name | short project name `imgbed` သို့မဟုတ် full path `username/imgbed`။ |
| Private repository | လိုအပ်ချက်အရ on/off လုပ်ပါ။ |
| Remark | optional၊ ဥပမာ `Primary upload channel`။ |

![Configure the channel](../../image/upload/gitlab-packages/配置渠道内容.png)

## Step 3: Channel Save လုပ်ပါ

fields ဖြည့်ပြီးနောက် Save ကိုနှိပ်ပါ။

system က ဒီအချက်တွေကို handle လုပ်ပါမယ်:

| System Behavior | Description |
| --- | --- |
| Short project name | ImgBed က current GitLab account ကိုသိပြီး value ကို full project path အဖြစ် expand လုပ်သည်။ |
| Full project path | `username/project` path ကို ထည့်ထားတဲ့အတိုင်းသုံးသည်။ |
| Project check | current personal account path ဖြစ်လျှင် project မရှိသောအခါ ImgBed ကအလိုအလျောက် create လုပ်သည်။ full path ကို manual ထည့်ထားလျှင် အဲဒီ path ကိုပဲသုံးသည်။ |
| Public/private state | project visibility ကို current switch အတိုင်း synchronized လုပ်သည်။ |

## Quick Checklist

```text
GitLab ထဲ sign in ဝင်ပါ
-> Access Token ဖန်တီးပါ
-> api scope ပဲရွေးပါ
-> ImgBed ကိုပြန်သွားပြီး token နဲ့ project name ထည့်ပါ
-> Save
-> project name ပဲထည့်ထားရင် ImgBed က current username ကိုအလိုအလျောက်ထည့်ပါမယ်
-> username/project ထည့်ထားရင် အဲဒီအတိုင်းသုံးပါမယ်
-> test image upload လုပ်ပါ
```
