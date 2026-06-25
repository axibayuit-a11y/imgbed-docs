# pCloud சேனல் சேர்க்கவும்

## எப்போது பொருத்தம்

- உங்களிடம் pCloud கணக்கு உள்ளது; ImgBed படங்கள்-ஐ pCloud-ல் சேமிக்க வேண்டும்.
- pCloud கணக்கு email மற்றும் password-ஐ சேனல் சான்றுகள் ஆக பயன்படுத்துவது உங்களுக்கு ஏற்றதாக இருந்தால்.

## முதலில் தேவையானவை

| தேவை | ஏன் தேவை |
| --- | --- |
| pCloud கணக்கு email | pCloud API-க்கு உள்நுழைய செய்ய |
| pCloud password | pCloud API-க்கு உள்நுழைய செய்ய |
| API host | இயல்புநிலை `api.pcloud.com`. EU கணக்குs `eapi.pcloud.com` பயன்படுத்தலாம். |
| சேமிப்பு அடைவு | கோப்புகள் சேமிக்கப்படும் இடம். இயல்புநிலை `imgbed`. |

## எங்கு சேர்ப்பது

1. அமைப்பு அமைப்புகள் திறக்கவும்.
2. பதிவேற்ற அமைப்புகள் திறக்கவும்.
3. மேல் வலது மூலையில் `Add Channel` கிளிக் செய்யவும்.
4. `pCloud` தேர்வு செய்யவும்.

## புல விவரம்

| புலம் | நோக்கம் | அவசியம் |
| --- | --- | --- |
| சேனல் பெயர் | இந்த pCloud சேனலை அடையாளம் காண, உதா. `Personal pCloud` | ஆம் |
| கணக்கு மின்னஞ்சல் | உங்கள் pCloud உள்நுழைவு மின்னஞ்சல் | ஆம் |
| கடவுச்சொல் | உங்கள் pCloud கடவுச்சொல் | ஆம் |
| API host | pCloud API host. இயல்புநிலை `api.pcloud.com`. | இல்லை |
| சேமிப்பு அடைவு | கோப்புகள் சேமிக்கப்படும் directory. இயல்புநிலை `imgbed`. | இல்லை |

கணக்கு region படி API host தேர்வு:

| கணக்கு Region | API Host |
| --- | --- |
| இயல்புநிலை / US | `api.pcloud.com` |
| Europe | `eapi.pcloud.com` |

## அமைப்பு படிகள்

1. பதிவேற்ற அமைப்புகள் திறக்கவும்.
2. `Add Channel` கிளிக் செய்யவும்.
3. `pCloud` தேர்வு செய்யவும்.
4. அறியக்கூடிய சேனல் name உள்ளிடவும்.
5. pCloud கணக்கு email உள்ளிடவும்.
6. pCloud password உள்ளிடவும்.
7. API host-ஐ `api.pcloud.com` ஆக வைத்திருக்கவும்; EU கணக்கு என்றால் `eapi.pcloud.com`.
8. சேமிப்பு directory-ஐ `imgbed` ஆக வைத்திருக்கவும், அல்லது உங்கள் folder-ஐ கொடுக்கவும்.
9. சேனல் சேமி செய்யவும்.

![கட்டமை சேனல்](../../image/upload/pcloud/配置渠道.png)

## Verify செய்வது

| சரிபார்ப்பு | எதிர்பார்க்கப்படும் முடிவு |
| --- | --- |
| சேனல் card | சேமித்த பிறகு pCloud சேனல் card தெரியும். |
| சேனல் switch | card switch இயக்கத்தில் இருக்கும். |
| Email காட்சி | card இணைக்கப்பட்ட pCloud email-ஐ காட்டும். |
| Quota query | வெற்றிகரமான query-க்கு பிறகு used மற்றும் total capacity தெரியும். |
| பதிவேற்றச் சோதனை | test image கட்டமைக்கப்பட்ட pCloud சேமிப்பு directory-ல் தெரியும். |

![Quota query success](../../image/upload/pcloud/查询额度成功.png)

## சிக்கல் தீர்வு

### ஏன் OAuth2 இல்லை?

pCloud OAuth2 இயல்புநிலை ஆக self-சேவை இல்லை. அதை enable செய்ய pCloud-க்கு email செய்ய வேண்டும்.

தற்போதைய pCloud OAuth2 flow ImgBed-க்கு தேவையான short-lived பதிவேற்றம் link workflow-ஐ support செய்யவில்லை. அதனால் இந்த சேனல் கணக்கு email/password login பயன்படுத்துகிறது.

### எந்த API Host பயன்படுத்த வேண்டும்?

இயல்புநிலை:

```text
api.pcloud.com
```

EU கணக்குs:

```text
eapi.pcloud.com
```

## விரைவு ஓட்டம்

```text
Prepare your pCloud email and password
-> Open Upload Settings
-> Add Channel
-> Choose pCloud
-> Fill channel name / email / password
-> Keep API host as api.pcloud.com unless your account is in Europe
-> Keep storage directory as imgbed unless you need another folder
-> Save
-> Query quota
-> Upload a test image
```
