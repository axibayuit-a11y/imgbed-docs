# د GitHub Releases چینل اضافه کول

## د پیل مخکې اړتیاوې

یوازې درې شیانو ته اړتیا لرئ:

| اړتیا | موخه |
| --- | --- |
| GitHub حساب | د لاسرسی ټوکن جوړولو او ریپازېټري مالکیت لپاره. |
| GitHub لاسرسی ټوکن | د ImgBed لپاره GitHub API لاسرسی، releases جوړول او فایلونه اپلوډ کول. |
| د ریپازېټري نوم | یوازې ریپازېټري name لیکلی شئ، لکه `image`. |

## د تنظیم ګامونه

### ګام 1: GitHub ته ننوځئ او لاسرسی ټوکن جوړول

1. GitHub ته ننوځئ شئ.
2. په پورته ښي لوري کې avatar کلیک او `Settings` پرانیزئ.
3. له کیڼ اړخ پټه څخه `Developer settings` پرانیزئ.
4. `Personal access tokens` پرانیزئ.
5. `Tokens (classic)` پرانیزئ.
6. `Generate new token (classic)` کلیک کړئ.
7. ټوکن ته پېژندل کېدونکی نوم ورکړئ.
8. د خپل د ساتنې غوره توب له مخې د پای نېټه وټاکئ.
9. `repo` او `workflow` سکوپونه وټاکئ.
10. ټوکن چې جوړ شي، سملاسي یې کاپي او خوندي کړئ.

![Add GitHub permissions](../../image/upload/github-releases/添加github权限.png)

## ګام 2: په ImgBed کې GitHub Releases چینل ډک کړئ

په د اپلوډ تنظیمات کې د `GitHub Releases` له ټاکلو وروسته:

| د UI فیلډ | څه داخل کړئ |
| --- | --- |
| د چینل نوم | ستاسې ټاکلی نوم، لکه `GitHubPrimary`. |
| لاسرسی ټوکن | همدا GitHub Personal لاسرسی ټوکن چې جوړ مو کړی. |
| د ریپازېټري نوم | لنډ repo نوم لکه `image`، یا بشپړه لاره لکه `username/image`. |
| شخصي ریپازېټري | د اړتیا له مخې on یا off کړئ. |
| یادښت | اختیاري، لکه `Primary upload channel`. |

![Fill in the GitHub چینل تنظیمات](../../image/upload/github-releases/填写github渠道配置.png)

## ګام 3: چینل خوندي کړئ

له fields ډکولو وروسته خوندي کلیک کړئ.

system دا کارونه خپله ترسره کوي:

| د سیستم چلند | توضیح |
| --- | --- |
| لنډ ریپازېټري نوم | ImgBed اوسنی GitHub حساب پېژني او ارزښت بشپړ ریپازېټري لارې ته غځوي. |
| Full ریپازېټري path | ImgBed د `username/repository` path هماغسې کاروي لکه داخل شوی. |
| د ریپازېټري کتنه | که د اوسني شخصي حساب لاره وکاروئ، ImgBed ریپازېټري اتومات جوړوي که موجوده نه وي. که بشپړه لاره په لاسي ډول ورکړئ، ImgBed هماغه لاره کاروي. |
| عام/شخصي حالت | د ریپازېټري لید د اوسني switch له مخې همغږي کېږي. |

## چټک چک‌لېست

GitHub Releases داسې کار کوي:

```text
Sign in to GitHub
-> Create an Access Token
-> Return to ImgBed and enter the token and repository name
-> Save
-> If only a repo name is entered, ImgBed adds the current username automatically
-> If username/repo is entered, ImgBed uses it as-is
-> Upload a test image
```
