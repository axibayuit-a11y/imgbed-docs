# Cloudflare API Token

د Cloudflare API credentials ImgBed ته اجازه ورکوي چې د فایلونو له بدلون وروسته د Cloudflare CDN cache پاک کړي.

![Cloudflare API Token settings](../../image/Safety/cloudflare%20api%20token截图.png)

## چېرته یې تنظیم کړئ

admin panel پرانیزئ، بیا دې ځای ته لاړ شئ:

```text
System Settings -> Security Settings -> Cloudflare API Token
```

دا fields باید ډک کړئ:

- Zone ID
- Account email
- API Key

## دا setting څه کوي

Cloudflare ښايي public image URLs cache کړي.

Cache د image delivery چټکوي، خو کله چې فایل delete، block، replace یا move کړئ، زاړه content د یو څه وخت لپاره لا هم ښکاره پاتې کېدای شي.

کله چې Cloudflare API credentials تنظیم شي، ImgBed د دغو operations تر بشپړېدو وروسته د اړوند Cloudflare cache د purge هڅه کوي.

دا په دې حالتونو کې ګټور دی:

- image delete کوئ او غواړئ public link ژر تر ژره کار پرېږدي.
- image block کوئ او غواړئ visitors اصلي فایل نور ونه ویني.
- په هماغه نوم فایل replace کوئ او غواړئ visitors نوی version ژر وویني.
- فایلونه move یا rename کوئ او غواړئ د زاړه path cache ژر refresh شي.
- public access rules بدلوئ او غواړئ public gallery یا random image cache ژر update شي.

## که تش یې پرېږدئ څه کېږي

ImgBed له دې setting پرته هم عادي کار کوي.

یوازینی توپیر دا دی چې ImgBed به د Cloudflare CDN cache فعال purge نه کوي. visitors ښايي زاړه content تر هغه وویني چې Cloudflare cache په طبیعي ډول expire شي.

## Zone ID څنګه پیدا کړئ

Zone ID د هغه site Cloudflare Zone ID دی چې ستاسو ImgBed domain پکې کارېږي.

1. Cloudflare dashboard ته sign in وکړئ.
2. هغه site پرانیزئ چې ستاسو ImgBed domain پکې دی.
3. د site overview page کې `Zone ID` ومومئ.
4. هغه copy کړئ او په ImgBed کې د `Zone ID` field ته یې واچوئ.

دا د site Zone ID دی، account ID نه دی.

## Account Email

هغه email address ولیکئ چې Cloudflare ته پرې sign in کوئ.

دا باید له لاندې API Key سره برابر وي.

## API Key

خپل Cloudflare Global API Key ولیکئ.

1. Cloudflare dashboard ته sign in وکړئ.
2. خپل profile پرانیزئ.
3. API Tokens page ته لاړ شئ.
4. `Global API Key` ومومئ.
5. view یې کړئ او copy یې کړئ.
6. په ImgBed کې یې د `API Key` field ته paste کړئ.

![View global API key](../../image/Safety/查看全局令牌.png)

## کله اغېز کوي

د fields له ډکولو وروسته settings save کړئ.

راتلونکي file changes به په اتومات ډول د Cloudflare cache purge کولو هڅه وکړي. تېر operations retroactively نه purge کېږي. که له دې setting مخکې مو فایل delete یا replace کړی وي، د Cloudflare cache expire کېدو ته انتظار وکړئ یا یې په Cloudflare کې manually purge کړئ.

## FAQ

### ایا دا اړین دی؟

نه.

که ستاسو domain Cloudflare نه کاروي، یا د CDN cache delay درته ستونزه نه وي، تش یې پرېښودلای شئ.

### غلط Credentials uploads خرابوي؟

عموما نه.

غلط credentials یوازې ImgBed د Cloudflare cache له purge کولو منع کوي. upload او عادي file access باید دوام وکړي.

### ولې Deleted Image لا هم پرانیستل کېږي؟

تر ټولو عام علت دا دی چې Cloudflare لا هم زوړ فایل cache کړی وي.

د سم Cloudflare API credentials په شتون کې، ImgBed د فایل د delete کېدو پر وخت اړوند URL cache purge کوي.

### ولې د فایل له Replace وروسته لا هم زوړ Image وینم؟

دا هم عموما د CDN cache له امله وي.

کله چې دا setting تنظیم وي، ImgBed د هماغه نوم فایل overwrite کېدو پر وخت د زاړه URL cache purge کولو هڅه کوي.
