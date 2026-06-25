# GitLab Packages ချန်နယ် ထည့်သွင်းခြင်း

## မစတင်မီ လိုအပ်သည့်အရာများ

လိုအပ်သည့်အရာ သုံးခုသာရှိသည်။

| လိုအပ်ချက် | ရည်ရွယ်ချက် |
| --- | --- |
| GitLab အကောင့် | Access token ထုတ်ရန်နှင့် project ကိုပိုင်ဆိုင်ရန် အသုံးပြုသည်။ |
| GitLab Personal Access Token | ImgBed က GitLab API ကို access လုပ်ရန်၊ project များဖန်တီးရန်နှင့် ဖိုင်များကို Generic Packages သို့ အပ်လုဒ်လုပ်ရန် အသုံးပြုသည်။ |
| Project အမည် | Project အမည် သာ ထည့်နိုင်သည်။ ဥပမာ `imgbed`။ |

## ပြင်ဆင်မှု အဆင့်များ

### အဆင့် 1: GitLab သို့ Sign in ဝင်ပြီး Access Token ဖန်တီးပါ

1. GitLab သို့ sign in ဝင်ပါ။
2. ညာဘက်အပေါ်ထောင့်ရှိ သင်၏ avatar ကိုနှိပ်ပြီး `Preferences` ကိုဖွင့်ပါ။
3. ဘယ်ဘက် sidebar မှ `Access Tokens` ကိုဖွင့်ပါ။
4. Token ကို မှတ်မိလွယ်သောအမည် ပေးပါ။
5. ကိုယ်တိုင် maintenance လုပ်မည့်စီမံချက်အပေါ်မူတည်၍ expiration date ကိုရွေးပါ။
6. `api` scope ကိုရွေးပါ။
7. Token ဖန်တီးပြီးသည်နှင့် ချက်ချင်းကူးယူပြီး သိမ်းထားပါ။

![Legacy token ဖန်တီးခြင်း](../../image/upload/gitlab-packages/点击生成旧版令牌.png)

![Token permission ရွေးချယ်ခြင်း](../../image/upload/gitlab-packages/勾选令牌权限.png)

## အဆင့် 2: ImgBed တွင် GitLab Packages Channel ကိုဖြည့်ပါ

အပ်လုဒ် ဆက်တင်များ တွင် `GitLab Packages` ကိုရွေးပြီးနောက် အကွက်များကို အောက်ပါအတိုင်း ဖြည့်ပါ။

| UI အကွက် | ထည့်ရန်အရာ |
| --- | --- |
| ချန်နယ်အမည် | သင်ရွေးချယ်သောအမည်၊ ဥပမာ `GitLabPrimary`။ |
| Access Token | သင်ယခုဖန်တီးထားသော GitLab Personal Access Token။ |
| Project အမည် | `imgbed` ကဲ့သို့ short project အမည် သို့မဟုတ် `username/imgbed` ကဲ့သို့ full path။ |
| ပုဂ္ဂလိက repository | သင်၏လိုအပ်ချက်အပေါ်မူတည်၍ ဖွင့်ပါ သို့မဟုတ် ပိတ်ပါ။ |
| မှတ်ချက် | ရွေးချယ်နိုင်သည်။ ဥပမာ `Primary upload channel`။ |

![Channel ပြင်ဆင်ခြင်း](../../image/upload/gitlab-packages/配置渠道内容.png)

## အဆင့် 3: Channel ကိုသိမ်းပါ

အကွက်များဖြည့်ပြီးနောက် `Save` ကိုနှိပ်ပါ။

စနစ်သည် အောက်ပါအသေးစိတ်များကို ဆောင်ရွက်ပေးမည်။

| စနစ်၏ လုပ်ဆောင်ပုံ | ဖော်ပြချက် |
| --- | --- |
| Short project အမည် | ImgBed သည် လက်ရှိ GitLab အကောင့်ကိုသိရှိပြီး တန်ဖိုးကို full project path အဖြစ် ချဲ့ထွင်သည်။ |
| Full project path | ImgBed သည် `username/project` path ကို ထည့်သွင်းထားသည့်အတိုင်း အတိအကျ အသုံးပြုသည်။ |
| Project check | လက်ရှိ personal account path ကိုအသုံးပြုပါက project မရှိသေးသည့်အခါ ImgBed က အလိုအလျောက်ဖန်တီးသည်။ Full path ကိုကိုယ်တိုင်ထည့်ပါက ImgBed သည် ထို path ကို တိုက်ရိုက်အသုံးပြုသည်။ |
| Public/private state | Project visibility ကို လက်ရှိ switch အတိုင်း sync လုပ်သည်။ |

## အမြန် စစ်ဆေးစာရင်း

```text
Sign in to GitLab
-> Create an Access Token
-> Select only the api scope
-> Return to ImgBed and enter the token and project name
-> Save
-> If only a project name is entered, ImgBed adds the current username automatically
-> If username/project is entered, ImgBed uses it as-is
-> Upload a test image
```
