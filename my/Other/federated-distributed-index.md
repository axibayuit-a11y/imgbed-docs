# Federated Distributed Index

Federated distributed index က ImgBed sites အများအပြားကို file lists တွေ အချင်းချင်း share လုပ်ခွင့်ပေးပါတယ်။

ရိုးရိုးပြောရရင်:

- သင့် site ထဲက selected folders တွေကိုအခြားသူများနဲ့ share လုပ်နိုင်ပါတယ်။
- အခြား node တစ်ခုထဲ join လုပ်ပြီး အဲဒီ node ရဲ့ shared file list ကို သင့် admin panel ထဲ sync လုပ်နိုင်ပါတယ်။
- Federated files တွေက browsing, searching, links ဖွင့်ခြင်းအတွက်အဓိကဖြစ်ပါတယ်။ သင့် storage ထဲကိုပြန် upload မလုပ်ပါ။

## ဘယ်နေရာမှာ Configure လုပ်မလဲ

ဖွင့်ပါ:

```text
System Settings -> Other Settings -> Federated Distributed Index
```

![Local federation node](../../image/other/联盟图/联盟分布式索引本地节点.png)

page မှာ tabs သုံးခုရှိပါတယ်:

| Tab | Purpose |
| --- | --- |
| Local Node | သင့် node ကို enable လုပ်ရန်၊ public domain confirm လုပ်ရန်၊ shared folders ရွေးရန်၊ outbound index update လုပ်ရန် |
| Nodes I Joined | သင် joined ဖြစ်ထားတဲ့ အခြား ImgBed nodes တွေကို manage လုပ်ရန် |
| Nodes Joining Me | သင့် node ထဲ join ချင်တဲ့အခြားသူများရဲ့ requests တွေကို manage လုပ်ရန် |

## First-Time Setup

1. `Local Node` ကိုဖွင့်ပါ။
2. `Enable` ကို on လုပ်ပါ။
3. `Sync folders` အောက်မှာ share လုပ်မယ့် folders ရွေးပါ။
4. `Update Outbound Index` ကိုနှိပ်ပါ။
5. ImgBed က domain change detect လုပ်ရင် current domain မှန်ကန်ကြောင်း confirm လုပ်ပြီးမှဆက်ပါ။

sync folders အများကြီးရွေးနိုင်ပါတယ်။

sync folder list ဗလာဖြစ်လျှင် folders အားလုံး share ဖြစ်ပါတယ်။

## Local Node

### Public Domain

public domain ဆိုတာ အခြား nodes တွေက သင့် node ကို access လုပ်ဖို့သုံးတဲ့ site URL ဖြစ်ပါတယ်။

ImgBed ကဒါကို automatically detect လုပ်ပါတယ်။ manual type လုပ်စရာမလိုပါ။ index ကိုပထမဆုံး update လုပ်တဲ့အခါ current access URL က production domain ဟုတ်မဟုတ် ImgBed ကမေးပါမယ်။

နောက်ပိုင်း domains ပြောင်းလဲလျှင် index update က confirmation ထပ်မေးပါမယ်။

### Sync Folders

Sync folders က federation nodes ဆီ ဘယ် files တွေ share ဖြစ်မလဲဆုံးဖြတ်ပါတယ်။

ဥပမာ သင်ရွေးထားတာ:

```text
/1/
/2/
```

ဆိုရင် အခြား nodes တွေက အဲဒီ directories နှစ်ခုထဲက files တွေပဲမြင်နိုင်ပါမယ်။

### Update Outbound Index

ဒါက အခြား nodes တွေ သင့်ထံက sync လုပ်နိုင်တဲ့ file list ကို update လုပ်ပါတယ်။

ဒီအချိန်တွေမှာသုံးပါ:

- federation ကိုပထမဆုံး enable လုပ်တဲ့အခါ။
- share လုပ်ချင်တဲ့ files upload လုပ်ပြီးနောက်။
- sync folders ပြောင်းလဲတဲ့အခါ။
- public domain ပြောင်းပြီး confirm လုပ်ရန်လိုတဲ့အခါ။

## Nodes I Joined

`Nodes I Joined` က အခြား nodes တွေကို subscribe လုပ်တဲ့နေရာဖြစ်ပါတယ်။

![Nodes I joined](../../image/other/联盟图/我加入的节点.png)

### အခြား Node တစ်ခုထဲ Join Request ပို့ခြင်း

1. အခြား owner ထံ invitation link တောင်းပါ။
2. input box ထဲ paste လုပ်ပါ။
3. `Request to Join` ကိုနှိပ်ပါ။
4. အခြား owner က သူ့ admin panel မှာ approve လုပ်တာကိုစောင့်ပါ။

approval ပြီးနောက် node status က approved ဖြစ်ပါမယ်။

### Update Inbound Index

`Update Inbound Index` က သင် joined ဖြစ်ထားတဲ့ nodes တွေမှ file lists sync လုပ်ပါတယ်။

ဒီအချိန်တွေမှာသုံးပါ:

- အခြား owner က သင့် request ကိုမကြာသေးခင် approve လုပ်ထားတဲ့အခါ။
- shared content update ဖြစ်ပြီလို့ အခြား owner ကပြောတဲ့အခါ။
- joined federation file lists အားလုံး refresh လုပ်ချင်တဲ့အခါ။

node တစ်ခုတည်း update လုပ်ရန် အဲဒီ node card ပေါ်က `Update Index` ကိုနှိပ်ပါ။

![Update index](../../image/other/联盟图/更新索引.png)

### Unsubscribe

node တစ်ခုကို sync မလုပ်ချင်တော့လျှင် `Unsubscribe` ကိုနှိပ်ပါ။

unsubscribe ပြီးနောက် အဲဒီ node ရဲ့ federated index က သင့် local site ထဲကနေဖယ်ရှားပါမယ်။

## Nodes Joining Me

`Nodes Joining Me` က အခြားသူများထံက requests တွေကို handle လုပ်တဲ့နေရာဖြစ်ပါတယ်။

![Nodes joining me](../../image/other/联盟图/加入我的节点.png)

### Invitation Link ဖန်တီးခြင်း

1. local node enabled ဖြစ်ကြောင်းသေချာပါစေ။
2. ImgBed က public domain confirm လုပ်နိုင်အောင် `Update Outbound Index` ကိုအနည်းဆုံးတစ်ကြိမ်နှိပ်ပါ။
3. `Nodes Joining Me` ကိုဖွင့်ပါ။
4. `Reset Invitation Link` ကိုနှိပ်ပါ။
5. invitation link ကို copy လုပ်ပြီး အခြား owner ဆီပို့ပါ။

invitation link ဗလာဖြစ်လျှင် public domain မ confirm လုပ်ရသေးတာဖြစ်နိုင်ပါတယ်။ `Local Node` ကိုပြန်သွားပြီး `Update Outbound Index` နှိပ်ပါ။

### Join Requests Handle လုပ်ခြင်း

တစ်ယောက်ယောက် request submit လုပ်တဲ့အခါ `Nodes Joining Me` list ထဲပေါ်လာပါမယ်။

| Action | Meaning |
| --- | --- |
| Approve | အခြား node ကို သင့် shared file list sync လုပ်ခွင့်ပေးသည် |
| Reject | join request ကိုငြင်းသည် |
| Delete | ပြီးဆုံးပြီး record ကိုဖယ်ရှားသည် |
| Check Status | အခြားဘက်မှာ ဒီ relationship ကိုဆက်ထားလားစစ်သည် |

approval ပြီးနောက် အခြားဘက်မှာ သင့် shared files ပေါ်ဖို့ `Update Inbound Index` ကိုနှိပ်ဖို့လိုပါသေးတယ်။

![Approve invited node](../../image/other/联盟图/邀请节点同意.png)

## Messages

relationship approved ဖြစ်ပြီးနောက် node card ပေါ်က `Message` ကိုနှိပ်ပါ။

Messages တွေက federation relationship အကြောင်းဆက်သွယ်ရေးအတွက်ပဲဖြစ်ပါတယ်။ files, tags, directories, permissions မပြောင်းပါ။

![Messages](../../image/other/联盟图/留言功能.png)

## Federated Files ကြည့်ခြင်း

sync ပြီးနောက် admin file list ကိုပြန်သွားပါ။

page အပေါ်ပိုင်းမှာ local files နဲ့ federated files အကြား switch လုပ်ပါ။ federated files ထဲမှာ synced content ကို browse လုပ်နိုင်ပါတယ်။

Federated files တွေက viewing, searching, preview, links copy လုပ်ရန်အဓိကဖြစ်ပါတယ်။ local files မဟုတ်တဲ့အတွက် သင့် site မှ move, delete, retag, backup မလုပ်နိုင်ပါ။

![Federated files in admin](../../image/other/联盟图/联盟管理显示效果图.png)

## FAQ

### Relationship Record မရှိလို့ Reapply လုပ်ခိုင်းတာဘာကြောင့်လဲ?

များသောအားဖြင့် အခြားဘက်က သင့်ကို delete လုပ်ပြီး record ကိုဖယ်ရှားထားတာဖြစ်ပါတယ်။ relationship မတွေ့တော့တာပါ။ join request အသစ် submit လုပ်ပါ။

![Reapply when no relationship record exists](../../image/other/联盟图/无关系记录重新申请.png)

### Join ပြီးနောက် Files မမြင်ရတာဘာကြောင့်လဲ?

စစ်ပါ:

1. အခြား owner က သင့် request ကို approve လုပ်ထားလား။
2. အခြား owner က `Update Outbound Index` နှိပ်ထားလား။
3. သင် `Update Inbound Index` နှိပ်ထားလား။
4. အခြား owner ရဲ့ sync folders ထဲ share လုပ်ချင်တဲ့ directories ပါလား။

### Domain Change Detected ဖြစ်ရင် ဘာလုပ်ရမလဲ?

admin panel ကို production domain မှဖွင့်ထားလျှင် confirm လုပ်ပြီးဆက်ပါ။

temporary address သုံးနေပါက cancel လုပ်ပြီး production domain နဲ့ admin panel ကိုပြန်ဖွင့်ကာထပ်ကြိုးစားပါ။

### Empty Sync Folder List ဆိုတာဘာလဲ?

sync folder list ဗလာဆိုတာ folders အားလုံး share ဖြစ်တယ်လို့ဆိုလိုပါတယ်။

directories အချို့ပဲ share ချင်လျှင် အဲဒီ folders တွေကို manually select လုပ်ပါ။

### Outbound နှင့် Inbound Index Updates ကွာခြားချက်

| Button | Simple Meaning |
| --- | --- |
| Update Outbound Index | အခြားသူများက ကျွန်ုပ်ထံမှ sync လုပ်နိုင်တာကို update လုပ်သည် |
| Update Inbound Index | ကျွန်ုပ်က အခြားသူများထံမှ sync လုပ်ထားတာကို update လုပ်သည် |
