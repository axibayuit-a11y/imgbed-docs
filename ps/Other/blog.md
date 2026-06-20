# Blog

Blog feature ستاسو ImgBed site ته جلا blog page اضافه کوي.

له فعالېدو وروسته visitors دا پرانیستلای شي:

```text
https://your-domain.com/blog/
```

![Blog homepage](../../image/other/博客/博客首页.png)

blog د open-source [LyraVoid/Mizuki](https://github.com/LyraVoid/Mizuki) project څخه adapted شوی دی. ImgBed دا rewrite او له Vue سره integrate کوي، څو د image hosting site د یوې برخې په توګه وچلېږي.

## چېرته یې تنظیم کړئ

Blog settings دلته دي:

```text
System Settings -> Other Settings -> Blog
```

![Blog settings](../../image/other/博客/QQ20260611-221702.png)

## لومړی Setup

1. `Enable` فعال کړئ.
2. هغه GitHub account وټاکئ چې د blog configuration ساتلو لپاره کارېږي.
3. `Update Blog` کلیک کړئ.
4. د success message تر راتلو انتظار وکړئ.
5. د blog کتلو لپاره `https://your-domain.com/blog/` پرانیزئ.

په لومړي استعمال کې، ImgBed د ټاکل شوي account لاندې private GitHub repository برابروي:

```text
imgbed-blog-config
```

دا repository د blog settings او article content ساتي.

## Posts لیکل

blog posts په خپل private GitHub repository کې edit کړئ:

```text
imgbed-blog-config
```

عادي workflow:

1. GitHub پرانیزئ.
2. private `imgbed-blog-config` repository ته لاړ شئ.
3. post files edit یا add کړئ.
4. changes commit کړئ.
5. بېرته ImgBed admin panel ته راشئ او `Update Blog` کلیک کړئ، یا د blog homepage په چپ پورتني کونج کې logo درې ځله کلیک کړئ څو blog update trigger شي.

`Update Blog` هغه content نه overwrite کوي چې تاسې لیکلی وي. دا د اړتیا پر وخت repository initialize کوي او blog cache refresh کوي.

## Supported Features

blog عادي blog features ملاتړ کوي، لکه post lists، categories، tags، archives، search، dark mode او language switching.

comments او visit statistics هم ملاتړ کوي.

![Blog comments](../../image/other/博客/支持留言.png)

Comments د posts لاندې ښکاري. visitors کولای شي avatar، nickname، email او comment content submit کړي.

Visit statistics د post views او site visits ښيي، څو د blog traffic ښه درک ولرئ.

## URL

blog تل د `/blog/` لاندې serve کېږي.

د بېلګې په توګه، که ستاسو ImgBed domain دا وي:

```text
https://image.example.com
```

blog URL دا دی:

```text
https://image.example.com/blog/
```

کله چې blog disabled شي، visitors نور blog page ته access نه شي کولای.
