# د GitLab Packages چینل اضافه کول

## د پیل مخکې اړتیاوې

یوازې درې شیانو ته اړتیا لرئ:

| اړتیا | موخه |
| --- | --- |
| GitLab حساب | د لاسرسی ټوکن جوړولو او پروژه مالکیت لپاره. |
| GitLab Personal لاسرسی ټوکن | د ImgBed لپاره GitLab API لاسرسی، پروژهs جوړول او Generic Packages ته فایلونه اپلوډ کول. |
| د پروژې نوم | یوازې پروژه name لیکلی شئ، لکه `imgbed`. |

## د تنظیم ګامونه

### ګام 1: GitLab ته ننوځئ او لاسرسی ټوکن جوړول

1. GitLab ته ننوځئ شئ.
2. په پورته ښي لوري کې avatar کلیک او `Preferences` پرانیزئ.
3. له کیڼ اړخ پټه څخه `Access Tokens` پرانیزئ.
4. ټوکن ته پېژندل کېدونکی نوم ورکړئ.
5. د خپل د ساتنې غوره توب له مخې د پای نېټه وټاکئ.
6. `api` سکوپ وټاکئ.
7. ټوکن چې جوړ شي، سملاسي یې کاپي او خوندي کړئ.

![Create a legacy ټوکن](../../image/upload/gitlab-packages/点击生成旧版令牌.png)

![Select ټوکن permissions](../../image/upload/gitlab-packages/勾选令牌权限.png)

## ګام 2: په ImgBed کې GitLab Packages چینل ډک کړئ

په د اپلوډ تنظیمات کې د `GitLab Packages` له ټاکلو وروسته:

| د UI فیلډ | څه داخل کړئ |
| --- | --- |
| د چینل نوم | ستاسې ټاکلی نوم، لکه `GitLabPrimary`. |
| لاسرسی ټوکن | همدا GitLab Personal لاسرسی ټوکن چې جوړ مو کړی. |
| د پروژې نوم | لنډ پروژه نوم لکه `imgbed`، یا بشپړه لاره لکه `username/imgbed`. |
| شخصي ریپازېټري | د اړتیا له مخې on یا off کړئ. |
| یادښت | اختیاري، لکه `Primary upload channel`. |

![تنظیم the چینل](../../image/upload/gitlab-packages/配置渠道内容.png)

## ګام 3: چینل خوندي کړئ

له fields ډکولو وروسته خوندي کلیک کړئ.

system دا کارونه خپله ترسره کوي:

| د سیستم چلند | توضیح |
| --- | --- |
| لنډ پروژه نوم | ImgBed اوسنی GitLab حساب پېژني او ارزښت بشپړ پروژه لارې ته غځوي. |
| Full پروژه path | ImgBed د `username/project` path هماغسې کاروي لکه داخل شوی. |
| د پروژې کتنه | که د اوسني شخصي حساب لاره وکاروئ، ImgBed پروژه اتومات جوړوي که موجوده نه وي. که بشپړه لاره په لاسي ډول ورکړئ، ImgBed هماغه لاره کاروي. |
| عام/شخصي حالت | د پروژې لید د اوسني switch له مخې همغږي کېږي. |

## چټک چک‌لېست

```text
Sign in to GitLab
-> Create an Access Token
-> Select only the api scope
-> Return to ImgBed and enter the token and project name
-> Save
-> If only a project name is entered, ImgBed adds the current username automatically
-> If username/project is entered, ImgBed uses it as-is
-> Upload a test image
```
