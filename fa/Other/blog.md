# Blog

قابلیت blog یک blog page جداگانه به ImgBed site شما اضافه می‌کند.

پس از enable شدن، visitors می‌توانند باز کنند:

```text
https://your-domain.com/blog/
```

![Blog homepage](../../image/other/博客/博客首页.png)

این blog از پروژه open-source [LyraVoid/Mizuki](https://github.com/LyraVoid/Mizuki) اقتباس شده است. ImgBed آن را rewrite و با Vue یکپارچه می‌کند تا به‌عنوان بخشی از image hosting site اجرا شود.

## کجا Configure کنیم

Blog settings در این مسیر است:

```text
System Settings -> Other Settings -> Blog
```

![Blog settings](../../image/other/博客/QQ20260611-221702.png)

## راه‌اندازی اولیه

1. `Enable` را روشن کنید.
2. GitHub account مورد استفاده برای ذخیره blog configuration را انتخاب کنید.
3. `Update Blog` را بزنید.
4. منتظر success message بمانید.
5. برای دیدن blog، `https://your-domain.com/blog/` را باز کنید.

در اولین استفاده، ImgBed زیر account انتخاب‌شده یک private GitHub repository آماده می‌کند:

```text
imgbed-blog-config
```

این repository، blog settings و article content را ذخیره می‌کند.

## نوشتن Posts

blog posts را در private GitHub repository خودتان edit کنید:

```text
imgbed-blog-config
```

workflow معمول:

1. GitHub را باز کنید.
2. وارد private repository با نام `imgbed-blog-config` شوید.
3. post files را edit یا add کنید.
4. changes را commit کنید.
5. به ImgBed admin panel برگردید و `Update Blog` را بزنید، یا logo بالا سمت چپ blog homepage را سه بار click کنید تا blog update trigger شود.

`Update Blog` محتوایی را که نوشته‌اید overwrite نمی‌کند. این کار در صورت نیاز repository را initialize می‌کند و blog cache را refresh می‌کند.

## Features پشتیبانی‌شده

Blog قابلیت‌های رایج مثل post lists، categories، tags، archives، search، dark mode و language switching را پشتیبانی می‌کند.

همچنین comments و visit statistics را پشتیبانی می‌کند.

![Blog comments](../../image/other/博客/支持留言.png)

comments زیر posts نمایش داده می‌شود. visitors می‌توانند avatar، nickname، email و comment content ارسال کنند.

visit statistics تعداد post views و site visits را نشان می‌دهد و به فهم blog traffic کمک می‌کند.

## URL

Blog همیشه زیر `/blog/` serve می‌شود.

اگر ImgBed domain شما این باشد:

```text
https://image.example.com
```

blog URL این خواهد بود:

```text
https://image.example.com/blog/
```

پس از disable شدن blog، visitors دیگر نمی‌توانند blog page را access کنند.
