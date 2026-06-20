# Auto Tagging

Auto tagging یہاں configure ہوتی ہے:

```text
System Settings -> Other Settings -> Auto Tagging
```

یہ feature images کے لیے tags خودکار طور پر بناتا ہے۔ یہ tags search، random image filtering، public gallery filtering، اور age-rating access control میں کام آتے ہیں۔

## Auto Tagging کیا کر سکتی ہے

| Feature | Description |
| --- | --- |
| content tags بنانا | people، scenes، objects، art style، اور ملتے جلتے visual content کے tags شامل کرتا ہے۔ |
| character tags بنانا | anime images اور illustrations کے لیے مفید۔ |
| orientation tags شامل کرنا | `landscape`، `portrait`، یا `square` شامل کرتا ہے۔ |
| image rating شامل کرنا | general، sensitive، questionable، یا explicit content کے لیے `G/S/Q/E` rating results محفوظ کرتا ہے۔ |
| upload پر auto-tag | نئی uploaded images خودکار طور پر tagging flow میں داخل ہوتی ہیں۔ |
| Batch tagging | تمام folders یا selected folders میں پرانی images پر tags لگاتا ہے۔ |

## پہلے کیا چاہیے

کم از کم ایک accessible Hugging Face Space URL تیار کریں۔

recommended طریقہ یہ ہے کہ SmilingWolf کا `wd-tagger` Space اپنے Hugging Face account میں duplicate کریں:

```text
https://huggingface.co/spaces/SmilingWolf/wd-tagger
```

public Space temporary testing کے لیے استعمال ہو سکتا ہے، مگر public Spaces بہت سے users share کرتے ہیں۔ queue لگ سکتی ہے، speed کم ہو سکتی ہے، یا Space عارضی طور پر unavailable ہو سکتا ہے۔ اپنے account میں duplicated Space long-term auto tagging کے لیے زیادہ stable رہتا ہے۔

## SmilingWolf Space Duplicate کریں

1. Hugging Face میں sign in کریں۔
2. `https://huggingface.co/spaces/SmilingWolf/wd-tagger` کھولیں۔

![SmilingWolf public Space](../../image/other/微笑狼的公开仓库.png)

3. اوپر دائیں corner میں three-dot menu پر کلک کریں۔
4. `Duplicate this Space` منتخب کریں۔
5. default Space name رکھیں یا اپنا نام دیں، مثلاً `wd-tagger`۔
6. visibility کو `Public` رکھیں۔ Public Spaces کو ImgBed سے call کرنا آسان ہوتا ہے۔
7. شروع میں default free hardware رکھیں۔ queue واضح مسئلہ بنے تو بعد میں upgrade کریں۔
8. Space create کریں اور build مکمل ہونے کا انتظار کریں۔

build مکمل ہونے کے بعد اپنی Space page کھولیں۔ URL عموماً ایسا ہوتا ہے:

```text
https://huggingface.co/spaces/your-name/wd-tagger
```

browser URL copy کریں اور ImgBed کے `Space URLs` میں paste کریں۔

## Multiple Space URLs بھرنا

ہر line میں ایک Space URL درج کریں۔

Examples:

| Value | Description |
| --- | --- |
| `https://huggingface.co/spaces/SmilingWolf/wd-tagger` | SmilingWolf public Space۔ temporary testing کے لیے مناسب۔ |
| `https://huggingface.co/spaces/lintonxue00/wd-tagger` | copied Space page URL۔ |
| `https://huggingface.co/spaces/your-name/wd-tagger` | آپ کا اپنا duplicated Space page URL۔ |

آپ multiple URLs درج کر سکتے ہیں۔ ImgBed multiple Spaces کو ساتھ استعمال کرتا ہے، جس سے speed بہتر ہو سکتی ہے۔

اگر ایک Space عارضی طور پر unavailable ہو تو باقی Spaces processing جاری رکھ سکتے ہیں۔

## Settings

| Option | Recommendation |
| --- | --- |
| `Space URLs` | تیار کیے ہوئے Space URLs درج کریں۔ کم از کم ایک استعمال کریں۔ |
| Target folder | تمام folders کے لیے خالی چھوڑیں۔ صرف specific directory process کرنی ہو تو folder منتخب کریں۔ |
| Recognition model | default طور پر `wd-swinv2-tagger-v3` رکھیں۔ |
| General tag threshold | default زیادہ تر images کے لیے ٹھیک ہے۔ کم value زیادہ tags دیتی ہے؛ زیادہ value کم tags دیتی ہے۔ |
| Character tag threshold | default conservative ہے اور غلط character tags کم کرنے میں مدد دیتا ہے۔ |
| `MCut` automatic threshold | شروع میں off رکھیں۔ جب model سے tag count خود decide کروانا ہو تو on کریں۔ |
| Auto-tag on upload | نئی uploaded images کو خودکار tag چاہیے ہوں تو on کریں۔ |
| Start tagging | پرانی images کے لیے manual batch-tagging شروع کرتا ہے۔ |

## Recommended Starting Values

| Option | Recommended Value |
| --- | --- |
| Recognition model | `wd-swinv2-tagger-v3` |
| General tag threshold | `0.35` |
| Character tag threshold | `0.85` |
| `MCut` | شروع میں Off |
| Auto-tag on upload | ضرورت ہو تو Enable |

اگر tags بہت زیادہ آ رہے ہوں تو general threshold تھوڑا بڑھائیں۔

اگر tags بہت کم ہوں تو general threshold تھوڑا کم کریں۔

## Batch Tagging

1. `Space URLs` بھریں۔
2. target folder منتخب کریں۔
3. start tagging پر کلک کریں۔
4. progress مکمل ہونے کا انتظار کریں۔

target folder empty ہو تو ImgBed تمام folders process کرے گا۔

Batch tagging پرانی images کے لیے بہتر ہے۔ نئی images کے لیے auto-tag on upload enable کریں تاکہ ہر بار manual run نہ کرنا پڑے۔

## Upload پر Auto-Tag

auto-tag on upload enabled ہونے کے بعد نئی uploaded images configured `Space URLs` کو خود call کرتی ہیں۔

یہ long-term use کے لیے مناسب ہے۔

اگر Space queue میں ہو تو upload خود پہلے finish ہو سکتا ہے، اور tagging بعد میں جاری رہتی ہے۔

## کون سی Images Process ہوتی ہیں

Auto tagging بنیادی طور پر image files process کرتی ہے۔

جن images کے tags، orientation، rating، width، اور height پہلے سے complete ہوں، انہیں skip کیا جاتا ہے تاکہ unnecessary Space calls نہ ہوں۔

ممکن ہو تو ImgBed صرف missing information بھرتا ہے۔ مثلاً اگر صرف orientation missing ہو، تو full content tag flow call کیے بغیر orientation add کرنے کی کوشش کرتا ہے۔

## FAQ

### اپنا Space کیوں Duplicate کریں؟

Public Spaces بہت سے users share کرتے ہیں۔ آپ کا duplicated Space بنیادی طور پر آپ کی ImgBed site استعمال کرتی ہے، اس لیے عموماً faster اور زیادہ reliable ہوتا ہے۔

### Space بار بار Starting Up کیوں دکھتا ہے؟

پہلی creation کے بعد، یا لمبے idle period کے بعد، Space کو start ہونے میں وقت لگ سکتا ہے۔

پہلے اپنی Space page کھولیں۔ جب وہ image normally recognize کرنے لگے، ImgBed پر واپس آ کر tagging شروع کریں۔

### Space URL کیسے Copy کروں؟

اپنی Hugging Face Space page کھولیں اور browser address copy کریں۔

Examples:

```text
https://huggingface.co/spaces/lintonxue00/wd-tagger
https://huggingface.co/spaces/SmilingWolf/wd-tagger
```

### کیا Multiple Spaces شامل کر سکتا ہوں؟

ہاں۔ ہر line میں ایک Space URL درج کریں۔

Multiple Spaces images کو ساتھ process کرتے ہیں اور بہت سی images کے لیے مفید ہیں۔

### Tags English میں کیوں ہیں؟

SmilingWolf models English tags output کرتے ہیں۔ یہ expected ہے۔

tags بنیادی طور پر search، filtering، random image API، اور public gallery filters کے لیے استعمال ہوتے ہیں۔

### Rating Tags کس لیے استعمال ہوتے ہیں؟

rating results Security Settings کے access mode کے ساتھ کام کرتے ہیں۔

مثلاً جب visitor access age rating کے ذریعے limited ہو، public browsing اور random image features images کو انہی rules کے مطابق filter کرتے ہیں۔

## Quick Flow

```text
Hugging Face میں sign in کریں
-> SmilingWolf/wd-tagger کھولیں
-> Duplicate this Space
-> Space build مکمل ہونے کا انتظار کریں
-> اپنا Space URL copy کریں
-> ImgBed میں Space URLs بھریں
-> model اور thresholds منتخب کریں
-> Start tagging یا auto-tag on upload enable کریں
```
