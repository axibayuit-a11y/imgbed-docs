# Cloudflare API Token

Cloudflare API credentials, files மாறிய பிறகு Cloudflare CDN cache purge செய்ய ImgBed-க்கு உதவும்.

![Cloudflare API Token settings](../../image/Safety/cloudflare%20api%20token截图.png)

## எங்கு Configure செய்வது

admin panel திறந்து செல்லவும்:

```text
System Settings -> Security Settings -> Cloudflare API Token
```

நிரப்ப வேண்டியது:

- Zone ID
- Account email
- API Key

## இந்த Setting என்ன செய்கிறது

Cloudflare public image URLs-ஐ cache செய்யலாம்.

Caching image delivery வேகமாக்கும். ஆனால் file delete, block, replace, அல்லது move செய்த பிறகும் பழைய content சில நேரம் தெரிந்துகொள்ளலாம்.

Cloudflare API credentials configure செய்த பிறகு, அந்த operations முடிந்ததும் ImgBed தொடர்புடைய Cloudflare cache-ஐ purge செய்ய முயலும்.

இது பயன்படும் சூழல்கள்:

- image delete செய்த பிறகு public link விரைவில் வேலை செய்யாமல் போக வேண்டும்.
- image block செய்த பிறகு visitors original file பார்க்கக் கூடாது.
- அதே பெயரில் file replace செய்தால் புதிய version விரைவில் தெரியும்.
- files move/rename செய்தால் old path cache விரைவில் refresh ஆகும்.
- public access rules மாற்றிய பிறகு public gallery அல்லது random image cache விரைவில் update ஆகும்.

## காலியாக விட்டால் என்ன ஆகும்

இந்த setting இல்லாமலும் ImgBed சாதாரணமாக இயங்கும்.

வித்தியாசம்: ImgBed actively Cloudflare CDN cache purge செய்யாது. visitors Cloudflare cache naturally expire ஆகும் வரை பழைய content பார்க்கலாம்.

## Zone ID எங்கு கிடைக்கும்

Zone ID என்பது உங்கள் ImgBed domain பயன்படுத்தும் site-இன் Cloudflare Zone ID.

1. Cloudflare dashboard-ல் sign in செய்யவும்.
2. உங்கள் ImgBed domain உள்ள site திறக்கவும்.
3. site overview page-ல் `Zone ID` கண்டறியவும்.
4. ImgBed `Zone ID` field-ல் copy செய்யவும்.

இது site Zone ID; account ID அல்ல.

## Account Email

Cloudflare sign in செய்யும் email address உள்ளிடவும்.

கீழே கொடுக்கும் API Key-க்கு இது பொருந்த வேண்டும்.

## API Key

Cloudflare Global API Key உள்ளிடவும்.

1. Cloudflare dashboard-ல் sign in செய்யவும்.
2. profile திறக்கவும்.
3. API Tokens page-க்கு செல்லவும்.
4. `Global API Key` கண்டறியவும்.
5. view செய்து copy செய்யவும்.
6. ImgBed `API Key` field-ல் paste செய்யவும்.

![View global API key](../../image/Safety/查看全局令牌.png)

## எப்போது Effect ஆகும்

fields நிரப்பிய பிறகு settings save செய்யவும்.

இனிமேல் வரும் file changes Cloudflare cache purge செய்ய முயலும். பழைய operations retroactively purge ஆகாது. இதற்கு முன் file delete/replace செய்திருந்தால் Cloudflare cache expire ஆக காத்திருக்கவும் அல்லது Cloudflare-ல் manual purge செய்யவும்.

## FAQ

### இது Required ஆ?

இல்லை.

உங்கள் domain Cloudflare பயன்படுத்தவில்லை என்றால், அல்லது CDN cache delay பிரச்சினை இல்லை என்றால் காலியாக விடலாம்.

### Wrong Credentials Uploads-ஐ பாதிக்குமா?

பொதுவாக இல்லை.

wrong credentials ImgBed Cloudflare cache purge செய்யாமல் தடுக்கும். upload மற்றும் normal file access வேலை செய்ய வேண்டும்.

### Deleted Image இன்னும் ஏன் திறக்கிறது?

அதிகமான காரணம் Cloudflare பழைய file-ஐ cache செய்திருப்பது.

சரியான Cloudflare API credentials இருந்தால் file delete செய்யும்போது ImgBed தொடர்புடைய URL cache purge செய்யும்.

### File Replace செய்த பிறகும் பழைய Image ஏன் தெரிகிறது?

இதுவும் பொதுவாக CDN cache காரணமாகும்.

இந்த setting configured ஆன பிறகு same name file overwrite செய்யும்போது ImgBed old URL cache purge செய்ய முயலும்.
