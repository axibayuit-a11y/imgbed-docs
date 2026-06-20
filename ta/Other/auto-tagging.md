# Auto Tagging

Auto tagging இங்கு configure செய்யப்படுகிறது:

```text
System Settings -> Other Settings -> Auto Tagging
```

இது image tags-ஐ தானாக உருவாக்கும். search, random image filtering, public gallery filtering, age-rating access control ஆகியவற்றுக்கு tags உதவும்.

## Auto Tagging என்ன செய்ய முடியும்

| Feature | Description |
| --- | --- |
| content tags உருவாக்குதல் | people, scenes, objects, art style போன்ற visual content tags சேர்க்கும். |
| character tags உருவாக்குதல் | anime images மற்றும் illustrations-க்கு useful. |
| orientation tags சேர்த்தல் | `landscape`, `portrait`, அல்லது `square` சேர்க்கும். |
| image rating சேர்த்தல் | general, sensitive, questionable, explicit content-க்கு `G/S/Q/E` rating results சேமிக்கும். |
| upload-ல் auto-tag | புதிய images upload ஆனவுடன் tagging flow-க்கு தானாக செல்லும். |
| Batch tagging | அனைத்து folders அல்லது selected folders-ல் உள்ள பழைய images-க்கு tags சேர்க்கும். |

## முதலில் தேவையானது

குறைந்தது ஒரு accessible Hugging Face Space URL தயார் செய்யவும்.

recommended முறையாக SmilingWolf-ன் `wd-tagger` Space-ஐ உங்கள் Hugging Face account-க்கு duplicate செய்யலாம்:

```text
https://huggingface.co/spaces/SmilingWolf/wd-tagger
```

public Space temporary testing-க்கு பயன்படுத்தலாம். ஆனால் public Spaces பல users share செய்வதால் queue, slow response, அல்லது temporary unavailable நிலை வரலாம். உங்கள் account-ல் duplicated Space long-term auto tagging-க்கு நிலையாக இருக்கும்.

## SmilingWolf Space Duplicate செய்யவும்

1. Hugging Face-ல் sign in செய்யவும்.
2. `https://huggingface.co/spaces/SmilingWolf/wd-tagger` திறக்கவும்.

![SmilingWolf public Space](../../image/other/微笑狼的公开仓库.png)

3. மேல் வலது three-dot menu கிளிக் செய்யவும்.
4. `Duplicate this Space` தேர்வு செய்யவும்.
5. default Space name வைத்திருக்கலாம் அல்லது `wd-tagger` போன்ற பெயர் தரலாம்.
6. visibility-ஐ `Public` ஆக அமைக்கவும். Public Spaces-ஐ ImgBed call செய்வது எளிது.
7. ஆரம்பத்தில் default free hardware வைத்திருக்கவும். queue பிரச்சினை தெளிவாக இருந்தால் பின்னர் upgrade செய்யவும்.
8. Space create செய்து build முடியும் வரை காத்திருக்கவும்.

build முடிந்த பிறகு உங்கள் Space page திறக்கவும். URL பொதுவாக:

```text
https://huggingface.co/spaces/your-name/wd-tagger
```

browser URL copy செய்து ImgBed `Space URLs`-ல் paste செய்யவும்.

## Multiple Space URLs நிரப்புதல்

ஒரு line-க்கு ஒரு Space URL.

| Value | Description |
| --- | --- |
| `https://huggingface.co/spaces/SmilingWolf/wd-tagger` | SmilingWolf public Space. temporary testing-க்கு. |
| `https://huggingface.co/spaces/lintonxue00/wd-tagger` | copied Space page URL. |
| `https://huggingface.co/spaces/your-name/wd-tagger` | உங்கள் duplicated Space page URL. |

பல URLs தரலாம். ImgBed பல Spaces-ஐ சேர்த்து பயன்படுத்தும்; speed மேம்படலாம்.

ஒரு Space unavailable என்றாலும் மற்றவை processing தொடரலாம்.

## Settings

| Option | Recommendation |
| --- | --- |
| `Space URLs` | தயார் செய்த Space URLs நிரப்பவும். குறைந்தது ஒன்று. |
| Target folder | அனைத்து folders-க்கு காலியாக விடவும். specific directory என்றால் மட்டும் folder தேர்வு செய்யவும். |
| Recognition model | default `wd-swinv2-tagger-v3` வைத்திருக்கவும். |
| General tag threshold | default பெரும்பாலான images-க்கு பொருந்தும். குறைந்த value அதிக tags; அதிக value குறைந்த tags. |
| Character tag threshold | default conservative; தவறான character tags குறைக்க உதவும். |
| `MCut` automatic threshold | ஆரம்பத்தில் off. model தானாக tag count தீர்மானிக்க வேண்டும் என்றால் on. |
| Auto-tag on upload | புதிய uploaded images தானாக tag பெற வேண்டும் என்றால் on. |
| Start tagging | பழைய images-க்கு manual batch-tagging. |

## Recommended Starting Values

| Option | Recommended Value |
| --- | --- |
| Recognition model | `wd-swinv2-tagger-v3` |
| General tag threshold | `0.35` |
| Character tag threshold | `0.85` |
| `MCut` | ஆரம்பத்தில் Off |
| Auto-tag on upload | தேவைப்பட்டால் Enable |

tags அதிகமாக இருந்தால் general threshold சிறிது உயர்த்தவும்.

tags குறைவாக இருந்தால் general threshold சிறிது குறைக்கவும்.

## Batch Tagging

1. `Space URLs` நிரப்பவும்.
2. target folder தேர்வு செய்யவும்.
3. start tagging கிளிக் செய்யவும்.
4. progress முடியும் வரை காத்திருக்கவும்.

target folder empty என்றால் ImgBed அனைத்து folders process செய்யும்.

Batch tagging பழைய images-க்கு சிறந்தது. புதிய images-க்கு auto-tag on upload enable செய்தால் ஒவ்வொரு முறையும் manual run தேவையில்லை.

## Auto-Tag on Upload

auto-tag on upload enabled ஆன பிறகு புதிய uploaded images configured `Space URLs`-ஐ தானாக call செய்யும்.

long-term use-க்கு இது பொருத்தம்.

Space queue-ல் இருந்தாலும் upload முதலில் finish ஆகலாம்; tagging பின்னர் தொடரும்.

## எந்த Images Process ஆகும்

Auto tagging முதன்மையாக image files process செய்கிறது.

tags, orientation, rating, width, height ஏற்கனவே complete உள்ள images skip செய்யப்படும். unnecessary Space calls தவிர்க்கப்படும்.

சாத்தியமானபோது ImgBed missing information மட்டும் நிரப்பும். உதாரணமாக orientation மட்டும் missing என்றால் full content tag flow call செய்யாமல் orientation சேர்க்க முயலும்.

## FAQ

### என் Space-ஐ ஏன் Duplicate செய்ய வேண்டும்?

Public Spaces பல users-ஆல் share செய்யப்படும். உங்கள் duplicated Space பெரும்பாலும் உங்கள் ImgBed site மட்டும் பயன்படுத்தும்; எனவே வேகமாகவும் நம்பகமாகவும் இருக்கும்.

### Space தொடர்ந்து Starting Up ஆகிறது

முதல் creation பிறகு அல்லது நீண்ட idle period பிறகு Space start ஆக நேரம் எடுக்கலாம்.

முதலில் உங்கள் Space page திறக்கவும். image recognize செய்ய ஆரம்பித்த பிறகு ImgBed-க்கு திரும்பி tagging தொடங்கவும்.

### Space URL எப்படி Copy செய்வது?

Hugging Face Space page திறந்து browser address copy செய்யவும்.

```text
https://huggingface.co/spaces/lintonxue00/wd-tagger
https://huggingface.co/spaces/SmilingWolf/wd-tagger
```

### Multiple Spaces சேர்க்கலாமா?

ஆம். ஒரு line-க்கு ஒரு Space URL.

பல Spaces images-ஐ சேர்ந்து process செய்யும்; images அதிகமானபோது பயனுள்ளது.

### Tags ஏன் English-ல்?

SmilingWolf models English tags output செய்கின்றன. இது expected.

tags search, filtering, random image API, public gallery filters ஆகியவற்றுக்கு பயன்படுத்தப்படும்.

### Rating Tags எதற்கு?

rating results Security Settings-ல் உள்ள access mode உடன் இயங்கும்.

visitor access age rating மூலம் limited என்றால் public browsing மற்றும் random image features அந்த rules படி images filter செய்யும்.

## Quick Flow

```text
Hugging Face-ல் sign in
-> SmilingWolf/wd-tagger திறக்கவும்
-> Duplicate this Space
-> Space build முடியும் வரை காத்திருக்கவும்
-> உங்கள் Space URL copy செய்யவும்
-> ImgBed-ல் Space URLs நிரப்பவும்
-> model மற்றும் thresholds தேர்வு செய்யவும்
-> Start tagging அல்லது auto-tag on upload enable செய்யவும்
```
