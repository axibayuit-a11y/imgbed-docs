# pCloud Channel சேர்க்கவும்

## எப்போது பொருத்தம்

- உங்களிடம் pCloud account உள்ளது; ImgBed images-ஐ pCloud-ல் சேமிக்க வேண்டும்.
- pCloud account email மற்றும் password-ஐ channel credentials ஆக பயன்படுத்துவது உங்களுக்கு ஏற்றதாக இருந்தால்.

## முதலில் தேவையானவை

| தேவை | ஏன் தேவை |
| --- | --- |
| pCloud account email | pCloud API-க்கு sign in செய்ய |
| pCloud password | pCloud API-க்கு sign in செய்ய |
| API host | default `api.pcloud.com`. EU accounts `eapi.pcloud.com` பயன்படுத்தலாம். |
| Storage directory | files சேமிக்கப்படும் இடம். default `imgbed`. |

## எங்கு சேர்ப்பது

1. System Settings திறக்கவும்.
2. Upload Settings திறக்கவும்.
3. மேல் வலது மூலையில் `Add Channel` கிளிக் செய்யவும்.
4. `pCloud` தேர்வு செய்யவும்.

## Field Reference

| Field | Purpose | Required |
| --- | --- | --- |
| Channel name | இந்த pCloud channel-ஐ அடையாளம் காண, உதா. `Personal pCloud` | Yes |
| Account email | உங்கள் pCloud login email | Yes |
| Password | உங்கள் pCloud password | Yes |
| API host | pCloud API host. default `api.pcloud.com`. | No |
| Storage directory | files சேமிக்கப்படும் directory. default `imgbed`. | No |

account region படி API host தேர்வு:

| Account Region | API Host |
| --- | --- |
| Default / US | `api.pcloud.com` |
| Europe | `eapi.pcloud.com` |

## Setup Steps

1. Upload Settings திறக்கவும்.
2. `Add Channel` கிளிக் செய்யவும்.
3. `pCloud` தேர்வு செய்யவும்.
4. அறியக்கூடிய channel name உள்ளிடவும்.
5. pCloud account email உள்ளிடவும்.
6. pCloud password உள்ளிடவும்.
7. API host-ஐ `api.pcloud.com` ஆக வைத்திருக்கவும்; EU account என்றால் `eapi.pcloud.com`.
8. storage directory-ஐ `imgbed` ஆக வைத்திருக்கவும், அல்லது உங்கள் folder-ஐ கொடுக்கவும்.
9. channel save செய்யவும்.

![Configure channel](../../image/upload/pcloud/配置渠道.png)

## Verify செய்வது

| Check | Expected Result |
| --- | --- |
| Channel card | Save செய்த பிறகு pCloud channel card தெரியும். |
| Channel switch | card switch enabled ஆக இருக்கும். |
| Email display | card connected pCloud email காட்டும். |
| Quota query | successful query பிறகு used மற்றும் total capacity தெரியும். |
| Upload test | test image configured pCloud storage directory-ல் தெரியும். |

![Quota query success](../../image/upload/pcloud/查询额度成功.png)

## Troubleshooting

### ஏன் OAuth2 இல்லை?

pCloud OAuth2 default ஆக self-service இல்லை. அதை enable செய்ய pCloud-க்கு email செய்ய வேண்டும்.

தற்போதைய pCloud OAuth2 flow ImgBed-க்கு தேவையான short-lived upload link workflow-ஐ support செய்யவில்லை. அதனால் இந்த channel account email/password login பயன்படுத்துகிறது.

### எந்த API Host பயன்படுத்த வேண்டும்?

Default:

```text
api.pcloud.com
```

EU accounts:

```text
eapi.pcloud.com
```

## Quick Flow

```text
pCloud email மற்றும் password தயார் செய்யவும்
-> Upload Settings திறக்கவும்
-> Add Channel
-> pCloud தேர்வு செய்யவும்
-> channel name / email / password நிரப்பவும்
-> account Europe அல்ல என்றால் API host api.pcloud.com வைத்திருக்கவும்
-> வேறு தேவை இல்லை என்றால் storage directory imgbed வைத்திருக்கவும்
-> Save
-> quota query
-> test image upload
```
