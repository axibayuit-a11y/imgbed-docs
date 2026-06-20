# Image Moderation மற்றும் Access Mode

Image moderation uploaded images-க்கு age ratings கொடுக்கும். Access mode public access வழியாக எந்த ratings தெரியும் என்பதை கட்டுப்படுத்தும்.

இது public gallery, public file URLs, random image API ஆகியவற்றை பாதிக்கும். admin panel-ஐ இது கட்டுப்படுத்தாது. Administrators எல்லா files-ஐயும் பார்க்கவும் manage செய்யவும் முடியும்.

## எங்கு Configure செய்வது

admin panel திறந்து செல்லவும்:

```text
System Settings -> Security Settings -> Upload Management -> Image Moderation
```

main settings:

- Access mode
- Enable moderation
- Moderation provider

## Access Mode என்ன செய்கிறது

Access mode எந்த age ratings public-ஆக காட்டலாம் என்பதை முடிவு செய்கிறது.

தற்போதைய modes:

| Access Mode | Publicly Visible Ratings |
| --- | --- |
| Adult mode | General, R12, R16, R18 |
| Youth mode | General, R12, R16 |
| Teen mode | General, R12 |
| Child mode | General மட்டும் |

default Adult mode.

private sites அல்லது mature content உள்ள sites-க்கு Adult mode பொருத்தமாக இருக்கலாம். public gallery பாதுகாப்பாக இருக்க வேண்டும் என்றால் Youth, Teen, அல்லது Child mode தேர்வு செய்யவும்.

## Moderation Enable செய்தால் என்ன ஆகும்

moderation enabled என்றால் upload நேரத்தில் ImgBed selected moderation provider-ஐ call செய்து detected age rating சேமிக்கும்.

main ratings:

| Rating | Meaning |
| --- | --- |
| General | பாதுகாப்பான public content |
| R12 | லேசான sensitive content |
| R16 | நடுத்தர sensitive content |
| R18 | adult content |

public access முடிவு செய்யும் போது moderation result பயன்படுத்தப்படும்.

moderation enabled இல்லாவிட்டால், அல்லது old files-க்கு rating இல்லாவிட்டால், அவை unrated ஆக கருதப்படும். rating இல்லாததால் மட்டும் unrated files public gallery அல்லது random image API-இல் இருந்து தானாக remove ஆகாது.

## Moderation Provider தேர்வு

available providers:

- moderatecontent.com
- nsfwjs
- Sightengine

ஒவ்வொரு provider-க்கும் requirements வேறு:

- moderatecontent.com பொதுவாக API Key தேவை.
- nsfwjs பொதுவாக API endpoint URL தேவை.
- Sightengine-க்கு API user மற்றும் API secret தேவை.

உங்கள் account, availability, detection quality அடிப்படையில் provider தேர்வு செய்யவும். moderation enabled மற்றும் சரியாக configured என்றால் ImgBed upload நேரத்தில் image rating எழுத முயலும்.

## Public Gallery மீது Effect

public gallery access mode படி files filter செய்யும்.

உதாரணங்கள்:

- Adult mode: R18 images தோன்றலாம்.
- Youth mode: R18 images மறைக்கப்படும்.
- Teen mode: R16 மற்றும் R18 images மறைக்கப்படும்.
- Child mode: General images மட்டும் காட்டப்படும்.

இது normal public access-ஐ மட்டுமே பாதிக்கும். admin panel எல்லா files-ஐயும் காட்டும்.

## Public File URLs மீது Effect

Public file URLs visitors திறக்கும் direct image links.

file rating current access mode-ல் allowed என்றால் ImgBed original image தரும்.

rating allowed level-ஐ விட மேலாக இருந்தால் normal public access original image தராது. அதற்கு பதில் configured blocked result அல்லது மாற்று blocked image தரப்படும்.

உதாரணம்:

- current mode Child mode.
- image R18 rated.
- visitor public URL directly திறக்கிறார்.
- ImgBed அந்த visitor-க்கு R18 original image தராது.

![Restricted file image](../../image/Safety/文件受限图.png)

admin panel-ல் files பார்க்கும் administrators இந்த restriction-ல் பாதிக்கப்படமாட்டார்கள்.

## Random Image API மீது Effect

random image API candidate pool-ஐ access mode அடிப்படையில் filter செய்கிறது.

Child mode-ல் random images General-rated files-ல் இருந்து மட்டுமே தேர்வு செய்யப்படும்.

Youth mode-ல் General, R12, R16 files வரலாம்; R18 வராது.

இதனால் random image API public gallery restrictions-ஐ bypass செய்ய முடியாது.

## List Rules உடன் தொடர்பு

Access mode மட்டுமே public access rule அல்ல. இது allow/block list rules உடன் சேர்ந்து இயங்கும்.

சுருக்கமாக:

- Allowlisted content முதலில் public ஆகும்.
- Blocklisted content regular visitors-க்கு directly தெரியாது.
- எந்த list-யிலும் இல்லாத content பின்னர் access mode அடிப்படையில் check செய்யப்படும்.

ஒரு image age rating மற்றும் list rules இரண்டாலும் restricted என்றால் regular visitors original file-ஐ directly பார்க்க முடியாது.

## Recommended Settings

Public sites:

- moderation enable செய்யவும்.
- site audience-க்கு பொருந்தும் access mode தேர்வு செய்யவும்.
- all-age visitors-க்கு Child mode அல்லது Teen mode பயன்படுத்தவும்.
- mature content public காட்ட வேண்டாம் என்றால் Adult mode தவிர்க்கவும்.
- admin panel-ல் file ratings review செய்து தேவைப்பட்டால் manually adjust செய்யவும்.

Private அல்லது personal sites:

- Adult mode பொதுவாக fine.
- பயனுள்ளதாக இருந்தால் moderation enable செய்யவும்.
- admin panel-ல் ratings review/adjust செய்யவும்.

## FAQ

### Access Mode மாற்றினால் Files Admin Panel-ல் மறையுமா?

இல்லை.

Access mode normal public access-ஐ மட்டும் பாதிக்கும். admin panel பாதிக்கப்படாது.

### Child Mode-க்கு மாற்றிய பிறகு Public Gallery-ல் Images குறைந்தது ஏன்?

Child mode General-rated files மட்டும் public காட்டும். R12, R16, R18 files filter ஆகும்.

### Public URLs Adult Images திறக்குமா?

current access mode அந்த rating-ஐ allow செய்யவில்லை என்றால் normal public URLs original image தராது.

### Random Image API Restricted Images தருமா?

இல்லை.

random image API candidates current access mode படி filter செய்யும்.

### பழைய Unrated Images என்ன ஆகும்?

moderation results இல்லாததால் மட்டும் unrated images தானாக hidden ஆகாது. பின்னர் admin panel-ல் ratings adjust செய்யலாம்.
