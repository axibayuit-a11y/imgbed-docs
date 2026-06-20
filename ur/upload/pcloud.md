# pCloud Channel شامل کریں

## کب مناسب ہے

- آپ کے پاس pCloud account ہے اور آپ چاہتے ہیں کہ ImgBed images کو pCloud میں store کرے۔
- آپ pCloud account email اور password کو channel credentials کے طور پر استعمال کرنے میں comfortable ہیں۔

## پہلے کیا چاہیے

| ضرورت | وجہ |
| --- | --- |
| pCloud account email | pCloud API میں sign in کرنے کے لیے |
| pCloud password | pCloud API میں sign in کرنے کے لیے |
| API host | default `api.pcloud.com` ہے۔ EU accounts `eapi.pcloud.com` استعمال کر سکتے ہیں۔ |
| Storage directory | files جہاں محفوظ ہوں گی۔ default `imgbed` ہے۔ |

## کہاں شامل کریں

1. System Settings کھولیں۔
2. Upload Settings کھولیں۔
3. اوپر دائیں طرف `Add Channel` پر کلک کریں۔
4. `pCloud` منتخب کریں۔

## Field Reference

| Field | Purpose | Required |
| --- | --- | --- |
| Channel name | اس pCloud channel کی شناخت، مثلاً `Personal pCloud` | Yes |
| Account email | آپ کا pCloud login email | Yes |
| Password | آپ کا pCloud password | Yes |
| API host | pCloud API host۔ default `api.pcloud.com` ہے۔ | No |
| Storage directory | files محفوظ کرنے والی directory۔ default `imgbed` ہے۔ | No |

account region کے مطابق API host منتخب کریں:

| Account Region | API Host |
| --- | --- |
| Default / US | `api.pcloud.com` |
| Europe | `eapi.pcloud.com` |

## Setup Steps

1. Upload Settings کھولیں۔
2. `Add Channel` پر کلک کریں۔
3. `pCloud` منتخب کریں۔
4. ایسا channel name درج کریں جسے آپ پہچان سکیں۔
5. اپنا pCloud account email درج کریں۔
6. اپنا pCloud password درج کریں۔
7. API host کو `api.pcloud.com` رہنے دیں، یا EU account کے لیے `eapi.pcloud.com` استعمال کریں۔
8. storage directory کو `imgbed` رہنے دیں، یا اپنی پسند کا folder درج کریں۔
9. channel save کریں۔

![Configure channel](../../image/upload/pcloud/配置渠道.png)

## Verify کیسے کریں

| Check | Expected Result |
| --- | --- |
| Channel card | Save کے بعد pCloud channel card نظر آئے۔ |
| Channel switch | card کا switch enabled رہے۔ |
| Email display | card connected pCloud email دکھائے۔ |
| Quota query | کامیاب query کے بعد used اور total capacity دکھے۔ |
| Upload test | test image configured pCloud storage directory میں نظر آئے۔ |

![Quota query success](../../image/upload/pcloud/查询额度成功.png)

## Troubleshooting

### OAuth2 کیوں نہیں؟

pCloud OAuth2 default طور پر self-service نہیں ہے۔ اسے enable کروانے کے لیے pCloud کو email کرنا پڑتا ہے۔

موجودہ pCloud OAuth2 flow ImgBed کو درکار short-lived upload link workflow بھی support نہیں کرتا، اس لیے یہ channel account email اور password login استعمال کرتا ہے۔

### کون سا API Host استعمال کروں؟

Default:

```text
api.pcloud.com
```

EU accounts کے لیے:

```text
eapi.pcloud.com
```

## Quick Flow

```text
اپنا pCloud email اور password تیار کریں
-> Upload Settings کھولیں
-> Add Channel
-> pCloud منتخب کریں
-> channel name / email / password بھریں
-> account Europe میں نہ ہو تو API host api.pcloud.com رہنے دیں
-> ضرورت نہ ہو تو storage directory imgbed رہنے دیں
-> Save کریں
-> quota query کریں
-> test image upload کریں
```
