# Cloudflare API Token

Cloudflare API credentials ImgBed کو file changes کے بعد Cloudflare CDN cache purge کرنے دیتے ہیں۔

![Cloudflare API Token settings](../../image/Safety/cloudflare%20api%20token截图.png)

## کہاں Configure کریں

admin panel کھولیں، پھر جائیں:

```text
System Settings -> Security Settings -> Cloudflare API Token
```

آپ کو یہ fields بھرنی ہیں:

- Zone ID
- Account email
- API Key

## یہ Setting کیا کرتی ہے

Cloudflare public image URLs کو cache کر سکتا ہے۔

Caching image delivery کو تیز بناتی ہے، لیکن file delete، block، replace، یا move کرنے کے بعد پرانا content کچھ وقت تک دکھ سکتا ہے۔

Cloudflare API credentials configure ہونے کے بعد ImgBed ان operations کے مکمل ہونے پر متعلقہ Cloudflare cache purge کرنے کی کوشش کرتا ہے۔

یہ اس وقت مفید ہے جب:

- آپ image delete کریں اور چاہتے ہوں کہ public link جلد از جلد کام کرنا بند کر دے۔
- آپ image block کریں اور چاہتے ہوں کہ visitors original file نہ دیکھ سکیں۔
- آپ same name سے file replace کریں اور چاہتے ہوں کہ visitors نئی version جلد دیکھیں۔
- آپ files move یا rename کریں اور چاہتے ہوں کہ old path cache جلد refresh ہو۔
- آپ public access rules بدلیں اور چاہتے ہوں کہ public gallery یا random image cache جلد update ہو۔

## خالی چھوڑنے سے کیا ہوگا

اس setting کے بغیر بھی ImgBed normally کام کرتا ہے۔

فرق صرف یہ ہے کہ ImgBed actively Cloudflare CDN cache purge نہیں کرے گا۔ visitors پرانا content Cloudflare cache کے naturally expire ہونے تک دیکھ سکتے ہیں۔

## Zone ID کیسے تلاش کریں

Zone ID اس site کا Cloudflare Zone ID ہے جو آپ کے ImgBed domain کے لیے استعمال ہوتی ہے۔

1. Cloudflare dashboard میں sign in کریں۔
2. وہ site کھولیں جس میں آپ کا ImgBed domain شامل ہے۔
3. site overview page پر `Zone ID` تلاش کریں۔
4. اسے ImgBed کے `Zone ID` field میں copy کریں۔

یہ site Zone ID ہے، account ID نہیں۔

## Account Email

وہ email address درج کریں جس سے آپ Cloudflare میں sign in کرتے ہیں۔

یہ نیچے دی گئی API Key سے match ہونا چاہیے۔

## API Key

اپنی Cloudflare Global API Key درج کریں۔

1. Cloudflare dashboard میں sign in کریں۔
2. اپنا profile کھولیں۔
3. API Tokens page پر جائیں۔
4. `Global API Key` تلاش کریں۔
5. اسے view اور copy کریں۔
6. ImgBed کے `API Key` field میں paste کریں۔

![View global API key](../../image/Safety/查看全局令牌.png)

## کب اثر کرے گا

fields بھرنے کے بعد settings save کریں۔

آئندہ file changes خودکار طور پر Cloudflare cache purge کرنے کی کوشش کریں گی۔ پچھلے operations retroactively purge نہیں ہوتے۔ اگر آپ نے setup سے پہلے file delete یا replace کی ہے، تو Cloudflare cache expire ہونے کا انتظار کریں یا Cloudflare میں manual purge کریں۔

## FAQ

### کیا یہ Required ہے؟

نہیں۔

اگر آپ کا domain Cloudflare استعمال نہیں کرتا، یا CDN cache delay سے مسئلہ نہیں، تو اسے خالی چھوڑ سکتے ہیں۔

### غلط Credentials Uploads کو خراب کریں گے؟

عموماً نہیں۔

غلط credentials صرف ImgBed کو Cloudflare cache purge کرنے سے روکیں گے۔ upload اور normal file access جاری رہنا چاہیے۔

### Deleted Image اب بھی کیوں کھل رہی ہے؟

سب سے عام وجہ یہ ہے کہ Cloudflare کے پاس پرانی file cached ہے۔

صحیح Cloudflare API credentials کے ساتھ ImgBed file delete ہونے پر متعلقہ URL cache purge کرتا ہے۔

### File Replace کرنے کے بعد پرانی Image کیوں دکھ رہی ہے؟

یہ بھی عموماً CDN cache کی وجہ سے ہوتا ہے۔

یہ setting configured ہونے کے بعد ImgBed same name والی file overwrite ہونے پر old URL cache purge کرنے کی کوشش کرتا ہے۔
