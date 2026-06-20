# Blog

Blog feature உங்கள் ImgBed site-க்கு தனி blog page சேர்க்கும்.

enable செய்த பிறகு visitors திறக்கலாம்:

```text
https://your-domain.com/blog/
```

![Blog homepage](../../image/other/博客/博客首页.png)

இந்த blog open-source [LyraVoid/Mizuki](https://github.com/LyraVoid/Mizuki) project-இல் இருந்து adapt செய்யப்பட்டது. ImgBed அதை rewrite செய்து Vue-உடன் integrate செய்கிறது, அதனால் image hosting site-இன் பகுதியாக இயங்கும்.

## எங்கு Configure செய்வது

Blog settings:

```text
System Settings -> Other Settings -> Blog
```

![Blog settings](../../image/other/博客/QQ20260611-221702.png)

## First-Time Setup

1. `Enable` on செய்யவும்.
2. blog configuration சேமிக்க வேண்டிய GitHub account தேர்வு செய்யவும்.
3. `Update Blog` கிளிக் செய்யவும்.
4. success message வர காத்திருக்கவும்.
5. `https://your-domain.com/blog/` திறந்து blog பார்க்கவும்.

முதல் பயன்படுத்தும்போது ImgBed selected account கீழ் private GitHub repository உருவாக்கும்:

```text
imgbed-blog-config
```

இந்த repository blog settings மற்றும் article content சேமிக்கும்.

## Posts எழுதுவது

blog posts-ஐ உங்கள் private GitHub repository-ல் edit செய்யவும்:

```text
imgbed-blog-config
```

சாதாரண workflow:

1. GitHub திறக்கவும்.
2. private `imgbed-blog-config` repository-க்கு செல்லவும்.
3. post files edit அல்லது add செய்யவும்.
4. changes commit செய்யவும்.
5. ImgBed admin panel-க்கு திரும்பி `Update Blog` கிளிக் செய்யவும், அல்லது blog homepage மேல் இடது logo-ஐ மூன்று முறை click செய்து blog update trigger செய்யவும்.

`Update Blog` நீங்கள் எழுதிய content-ஐ overwrite செய்யாது. தேவைப்பட்டால் repository initialize செய்து blog cache refresh செய்யும்.

## Supported Features

Blog post lists, categories, tags, archives, search, dark mode, language switching போன்ற பொதுவான blog features support செய்கிறது.

comments மற்றும் visit statistics-யும் support செய்கிறது.

![Blog comments](../../image/other/博客/支持留言.png)

comments posts கீழே தெரியும். visitors avatar, nickname, email, comment content submit செய்யலாம்.

visit statistics post views மற்றும் site visits காட்டும்; blog traffic புரிய உதவும்.

## URL

Blog எப்போதும் `/blog/` கீழ் serve ஆகும்.

உங்கள் ImgBed domain:

```text
https://image.example.com
```

blog URL:

```text
https://image.example.com/blog/
```

blog disabled ஆன பிறகு visitors blog page access செய்ய முடியாது.
