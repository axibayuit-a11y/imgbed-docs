# Blog

Blog feature آپ کی ImgBed site میں ایک الگ blog page شامل کرتا ہے۔

enable ہونے کے بعد visitors کھول سکتے ہیں:

```text
https://your-domain.com/blog/
```

![Blog homepage](../../image/other/博客/博客首页.png)

یہ blog open-source [LyraVoid/Mizuki](https://github.com/LyraVoid/Mizuki) project سے adapt کیا گیا ہے۔ ImgBed اسے rewrite کر کے Vue کے ساتھ integrate کرتا ہے تاکہ یہ image hosting site کے حصے کے طور پر چل سکے۔

## کہاں Configure کریں

Blog settings یہاں ہیں:

```text
System Settings -> Other Settings -> Blog
```

![Blog settings](../../image/other/博客/QQ20260611-221702.png)

## First-Time Setup

1. `Enable` on کریں۔
2. وہ GitHub account منتخب کریں جو blog configuration store کرے گا۔
3. `Update Blog` پر کلک کریں۔
4. success message کا انتظار کریں۔
5. blog دیکھنے کے لیے `https://your-domain.com/blog/` کھولیں۔

پہلی بار استعمال پر ImgBed selected account کے تحت ایک private GitHub repository تیار کرتا ہے:

```text
imgbed-blog-config
```

یہ repository blog settings اور article content محفوظ کرتی ہے۔

## Posts لکھنا

blog posts اپنی private GitHub repository میں edit کریں:

```text
imgbed-blog-config
```

عام workflow:

1. GitHub کھولیں۔
2. private `imgbed-blog-config` repository میں جائیں۔
3. post files edit یا add کریں۔
4. changes commit کریں۔
5. ImgBed admin panel پر واپس آ کر `Update Blog` پر کلک کریں، یا blog homepage کے اوپر بائیں logo کو تین بار click کر کے blog update trigger کریں۔

`Update Blog` آپ کا لکھا ہوا content overwrite نہیں کرتا۔ یہ ضرورت پڑنے پر repository initialize کرتا ہے اور blog cache refresh کرتا ہے۔

## Supported Features

Blog عام blog features support کرتا ہے، جیسے post lists، categories، tags، archives، search، dark mode، اور language switching۔

یہ comments اور visit statistics بھی support کرتا ہے۔

![Blog comments](../../image/other/博客/支持留言.png)

comments posts کے نیچے دکھتے ہیں۔ visitors avatar، nickname، email، اور comment content submit کر سکتے ہیں۔

visit statistics post views اور site visits دکھاتے ہیں، جس سے آپ blog traffic سمجھ سکتے ہیں۔

## URL

Blog ہمیشہ `/blog/` کے تحت serve ہوتا ہے۔

مثلاً اگر آپ کا ImgBed domain ہے:

```text
https://image.example.com
```

تو blog URL ہوگا:

```text
https://image.example.com/blog/
```

blog disable ہونے کے بعد visitors blog page access نہیں کر پائیں گے۔
