# Blog

Blog feature আপনার ImgBed site-এ একটি standalone blog page যোগ করে।

Enable করার পর visitors খুলতে পারবে:

```text
https://your-domain.com/blog/
```

![Blog homepage](../../image/other/博客/博客首页.png)

Blog open-source [LyraVoid/Mizuki](https://github.com/LyraVoid/Mizuki) project থেকে adapted। ImgBed এটিকে rewrite করে Vue-এর সঙ্গে integrate করে, যাতে image hosting site-এর অংশ হিসেবে চলতে পারে।

## কোথায় Configure করবেন

Blog settings এখানে:

```text
System Settings -> Other Settings -> Blog
```

![Blog settings](../../image/other/博客/QQ20260611-221702.png)

## First-Time Setup

1. `Enable` on করুন।
2. Blog configuration store করার জন্য GitHub account নির্বাচন করুন।
3. `Update Blog` ক্লিক করুন।
4. Success message আসা পর্যন্ত অপেক্ষা করুন।
5. Blog দেখতে `https://your-domain.com/blog/` খুলুন।

প্রথম ব্যবহারেই ImgBed selected account-এর নিচে একটি private GitHub repository তৈরি করে:

```text
imgbed-blog-config
```

এই repository blog settings এবং article content সংরক্ষণ করে।

## Posts লেখা

Blog posts আপনার private GitHub repository-তে edit করুন:

```text
imgbed-blog-config
```

Typical workflow:

1. GitHub খুলুন।
2. Private `imgbed-blog-config` repository-তে যান।
3. Post files edit বা add করুন।
4. Changes commit করুন।
5. ImgBed admin panel-এ ফিরে `Update Blog` ক্লিক করুন, অথবা blog homepage-এর upper-left corner-এর logo তিনবার ক্লিক করে blog update trigger করুন।

`Update Blog` আপনার লেখা content overwrite করে না। দরকার হলে repository initialize করে এবং blog cache refresh করে।

## Supported Features

Blog post lists, categories, tags, archives, search, dark mode এবং language switching-এর মতো common blog features support করে।

Comments এবং visit statistics-ও support করে।

![Blog comments](../../image/other/博客/支持留言.png)

Comments posts-এর নিচে দেখা যায়। Visitors avatar, nickname, email এবং comment content submit করতে পারে।

Visit statistics post views এবং site visits দেখায়, যা blog traffic বোঝাতে সাহায্য করে।

## URL

Blog সবসময় `/blog/`-এর নিচে serve হয়।

যেমন, আপনার ImgBed domain যদি হয়:

```text
https://image.example.com
```

তাহলে blog URL হবে:

```text
https://image.example.com/blog/
```

Blog disabled হলে visitors আর blog page access করতে পারবে না।
