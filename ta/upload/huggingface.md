# Hugging Face Channel சேர்க்கவும்

## தொடங்குவதற்கு முன் தேவையானவை

மூன்று விஷயங்கள் போதும்:

| தேவை | பயன்பாடு |
| --- | --- |
| Hugging Face account | access token உருவாக்கவும் repository own செய்யவும் |
| Hugging Face User Access Token | ImgBed Hugging Face API அணுக, repositories உருவாக்க, files upload செய்ய |
| Repository name | repository name மட்டும் கொடுக்கலாம், உதா. `image` |

## Setup Steps

### Step 1: Hugging Face-ல் Sign in செய்து Access Token உருவாக்கவும்

1. Hugging Face-ல் sign in செய்யவும்.
2. மேல் வலது மூலையில் avatar கிளிக் செய்து `Settings` திறக்கவும்.
3. left sidebar-ல் `Access Tokens` திறக்கவும்.
4. புதிய token உருவாக்கவும்.
5. அடையாளம் காண எளிதான பெயர் கொடுக்கவும்.
6. `write` permission தேர்வு செய்யவும்.
7. token உருவானதும் உடனே copy செய்து சேமிக்கவும்.

![Create a token](../../image/upload/huggingface/创建令牌.png)

## Step 2: ImgBed-ல் Hugging Face Channel நிரப்பவும்

Upload Settings-ல் `Hugging Face` தேர்வு செய்த பிறகு:

| UI Field | What to Enter |
| --- | --- |
| Channel name | உங்கள் பெயர், உதா. `hf-primary`. |
| Repository name | short repo name `image`, அல்லது full path `username/image`. |
| Access Token | இப்போது உருவாக்கிய Hugging Face User Access Token. |
| Private repository | தேவைக்கேற்ப on/off. |
| Remark | optional, உதா. `Primary upload channel`. |

![Add the channel](../../image/upload/huggingface/添加渠道.png)

## Step 3: Channel Save செய்யவும்

fields நிரப்பிய பிறகு Save கிளிக் செய்யவும்.

system இதை தானாக கையாளும்:

| System Behavior | Description |
| --- | --- |
| Short repository name | ImgBed current Hugging Face account கண்டறிந்து full repository path ஆக expand செய்கிறது. |
| Full repository path | `username/repository` path-ஐ நீங்கள் உள்ளிட்டபடியே பயன்படுத்தும். |
| Repository check | current personal account path என்றால் repository இல்லாதபோது create செய்ய முயலும். full path manual என்றால் அதையே பயன்படுத்தும். |
| Repository type | இந்த channel `dataset` repository பயன்படுத்தும். |
| Public/private state | repository visibility current switch படி synchronized ஆகும். |

## Quick Checklist

```text
Hugging Face-ல் sign in செய்யவும்
-> Access Token உருவாக்கவும்
-> write permission தேர்வு செய்யவும்
-> ImgBed-க்கு திரும்பி token மற்றும் repository name நிரப்பவும்
-> Save
-> repo name மட்டும் இருந்தால் ImgBed current username சேர்க்கும்
-> username/repo இருந்தால் அதையே பயன்படுத்தும்
-> ImgBed dataset repository check அல்லது create செய்யும்
-> test image upload செய்யவும்
```
