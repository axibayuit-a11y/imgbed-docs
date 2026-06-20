# Redundant Backup နှင့် Read Source Switching

Redundant backup က uploaded file တစ်ခုရဲ့ extra copy ကိုသိမ်းပေးပါတယ်။

primary file နဲ့ backup file နှစ်ခုလုံးကို read sources အဖြစ်သုံးနိုင်ပါတယ်။ visitors တွေအနေနဲ့ များသောအားဖြင့်ကွာခြားမှုမမြင်ရပါ။ ကွာခြားတာက file ကို ဘယ် storage channel က serve လုပ်နေလဲဆိုတာပဲဖြစ်ပါတယ်။

## Redundant Backup က ဘာလုပ်နိုင်လဲ

| Feature | Description |
| --- | --- |
| extra copy သိမ်းခြင်း | single channel failure risk လျှော့ရန် files ကိုအခြား upload channel ထဲ backup လုပ်သည်။ |
| read source switch | backup အောင်မြင်ပြီးနောက် file reads ကို primary channel နဲ့ backup channel ကြား switch လုပ်သည်။ |
| single-file backup | file details page မှ file တစ်ခု backup လုပ်သည်။ |
| batch backup | admin page မှ files အများအပြား select လုပ်ပြီးအတူ backup လုပ်သည်။ |
| global redundant backup | Other Settings မှ folder အလိုက် files backup လုပ်သည်။ |

## Redundant Backup Entry

ဖွင့်ပါ:

```text
System Settings -> Other Settings -> Redundant Backup
```

![Redundant backup](../../image/other/冗余备份截图.png)

ဒီ entry က folder တစ်ခုသို့မဟုတ် files အားလုံးအတွက် bulk backups ထည့်ရန်သင့်တော်ပါတယ်။

backup channel ကို manually ရွေးနိုင်သလို automatic switching ကိုရွေးပြီး ImgBed ကို suitable backup channel ရှာခိုင်းနိုင်ပါတယ်။

## File Details မှ Backup

admin panel ထဲက file details page ကိုဖွင့်ပြီး backup ကိုနှိပ်ပါ။

![Backup in file details](../../image/other/文件详情里文件备份.png)

အရေးကြီး file တစ်ခုကိုလိုအပ်တဲ့အခါ backup လုပ်ရန်ဒီနည်းကသင့်တော်ပါတယ်။

backup အောင်မြင်ပြီးနောက် file details page မှာ available read sources တွေပြပါမယ်။

## Selection ဖြင့် Batch Backup

admin panel မှာ files အများအပြား select လုပ်ပြီး batch backup run လုပ်ပါ။

![Batch backup](../../image/other/批量备份截图.png)

files အုပ်စုတစ်ခု process လုပ်ရန်သင့်တော်ပါတယ်။

Selection backup, file details backup, Other Settings အောက်က redundant backup အားလုံးက backup system တစ်ခုတည်းကိုသုံးပါတယ်။ entry points ပဲကွာပါတယ်။

## Backup ပြီးနောက် Read Source Switch လုပ်ခြင်း

backup complete ဖြစ်ပြီးနောက် file details page က read source switch လုပ်ခွင့်ပေးပါတယ်:

| Read Source | Description |
| --- | --- |
| Primary channel | original upload channel မှ read လုပ်သည်။ |
| Backup channel | backup channel မှ read လုပ်သည်။ |

![Switch read source after backup](../../image/other/备份成功切换读取源.png)

file က primary channel မှ serve ဖြစ်နေလား backup channel မှ serve ဖြစ်နေလား visitors တွေသိဖို့မလိုပါ။

သင်ရွေးထားတဲ့ read source က နောက်ပိုင်း file access အတွက် preferred source ဖြစ်ပါမယ်။

## Backup Skip ဖြစ်တဲ့အချိန်

backup အချိန်မှာ အောက်ပါ cases တွေ skip ဖြစ်ပါမယ်။ ဒါတွေက errors မဟုတ်ပါ။

| Case | Why It Is Skipped |
| --- | --- |
| Already backed up | backup ရှိပြီးသား file ကိုပြန် backup မလုပ်ပါ။ |
| Primary and backup channels are the same | backup အဓိပ္ပါယ်ရှိဖို့ copy ကိုအခြား channel ထဲသိမ်းရပါမယ်။ |
| No usable backup channel | သင့်တော်တဲ့ alternative channel မရှိပါ။ |

အတိုချုပ်: backups တွေက အခြား channel ထဲသွားရပြီး already backed-up files တွေက extra space ထပ်မသုံးပါ။

## Primary Channel vs Backup Channel

| Name | Meaning |
| --- | --- |
| Primary channel | file ကိုပထမဆုံး upload လုပ်ရာ channel။ |
| Backup channel | redundant copy သိမ်းထားတဲ့ channel။ |
| Primary read source | file ကို လက်ရှိ primary channel မှ read လုပ်နေသည်။ |
| Backup read source | file ကို လက်ရှိ backup channel မှ read လုပ်နေသည်။ |

Primary နဲ့ backup read sources တွေက user-facing behavior တူညီပါတယ်။

backup file available ဖြစ်နေသရွေ့ backup read source ကို switch လုပ်ပြီးနောက် images, videos, download links တွေ ဆက်အလုပ်လုပ်ပါမယ်။

## File Delete လုပ်တဲ့အခါ ဘာဖြစ်မလဲ

file delete လုပ်တဲ့အခါ ImgBed က primary file နဲ့ backup file နှစ်ခုလုံးကို delete လုပ်ပါမယ်။
