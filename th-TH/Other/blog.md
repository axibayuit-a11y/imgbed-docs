# Blog

Blog feature เพิ่ม blog page แบบ standalone ให้ ImgBed site ของคุณ

หลัง enable แล้ว visitors เปิดได้ที่:

```text
https://your-domain.com/blog/
```

![Blog homepage](../../image/other/博客/博客首页.png)

Blog ดัดแปลงมาจาก open-source project [LyraVoid/Mizuki](https://github.com/LyraVoid/Mizuki) โดย ImgBed rewrite และ integrate กับ Vue เพื่อให้ทำงานเป็นส่วนหนึ่งของ image hosting site

## ตั้งค่าที่ไหน

Blog settings อยู่ที่:

```text
System Settings -> Other Settings -> Blog
```

![Blog settings](../../image/other/博客/QQ20260611-221702.png)

## First-Time Setup

1. เปิด `Enable`
2. เลือก GitHub account ที่ใช้เก็บ blog configuration
3. คลิก `Update Blog`
4. รอ success message
5. เปิด `https://your-domain.com/blog/` เพื่อดู blog

ครั้งแรกที่ใช้ ImgBed จะเตรียม private GitHub repository ภายใต้ account ที่เลือก:

```text
imgbed-blog-config
```

Repository นี้เก็บ blog settings และ article content

## เขียน Posts

Edit blog posts ใน private GitHub repository:

```text
imgbed-blog-config
```

Typical workflow:

1. เปิด GitHub
2. เข้า private repository `imgbed-blog-config`
3. Edit หรือ add post files
4. Commit changes
5. กลับไปที่ ImgBed admin panel แล้วคลิก `Update Blog` หรือคลิก logo มุมซ้ายบนของ blog homepage สามครั้งเพื่อ trigger blog update

`Update Blog` จะไม่ overwrite content ที่คุณเขียนไว้ แต่ใช้ initialize repository เมื่อจำเป็นและ refresh blog cache

## Supported Features

Blog รองรับ features ทั่วไป เช่น post lists, categories, tags, archives, search, dark mode และ language switching

รองรับ comments และ visit statistics ด้วย

![Blog comments](../../image/other/博客/支持留言.png)

Comments จะแสดงใต้ posts Visitors สามารถ submit avatar, nickname, email และ comment content ได้

Visit statistics แสดง post views และ site visits ช่วยให้เข้าใจ blog traffic

## URL

Blog จะ serve ใต้ `/blog/` เสมอ

เช่น ถ้า ImgBed domain คือ:

```text
https://image.example.com
```

Blog URL คือ:

```text
https://image.example.com/blog/
```

หลัง disable blog แล้ว visitors จะเข้าถึง blog page ไม่ได้
