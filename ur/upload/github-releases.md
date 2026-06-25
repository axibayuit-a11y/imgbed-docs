# GitHub Releases Channel شامل کریں

## شروع کرنے سے پہلے کیا چاہیے

آپ کو صرف تین چیزیں چاہیے:

| ضرورت | مقصد |
| --- | --- |
| GitHub account | access token بنانے اور repository own کرنے کے لیے۔ |
| GitHub Access Token | ImgBed کو GitHub API access، releases بنانے، اور files upload کرنے کے لیے۔ |
| Repository name | صرف repository name درج کر سکتے ہیں، مثلاً `image`۔ |

## سیٹ اپ کے مراحل

### مرحلہ 1: GitHub میں sign in کریں اور Access Token بنائیں

1. GitHub میں sign in کریں۔
2. اوپر دائیں corner میں avatar پر کلک کریں اور `Settings` کھولیں۔
3. left sidebar سے `Developer settings` کھولیں۔
4. `Personal access tokens` کھولیں۔
5. `Tokens (classic)` کھولیں۔
6. `Generate new token (classic)` پر کلک کریں۔
7. token کو قابل شناخت نام دیں۔
8. اپنی maintenance preference کے مطابق expiration date منتخب کریں۔
9. `repo` اور `workflow` scopes منتخب کریں۔
10. token بنتے ہی فوراً کاپی کر کے محفوظ کریں۔

![GitHub permissions شامل کریں](../../image/upload/github-releases/添加github权限.png)

## مرحلہ 2: ImgBed میں GitHub Releases Channel بھریں

اپ لوڈ سیٹنگز میں `GitHub Releases` منتخب کرنے کے بعد فیلڈز یوں بھریں:

| UI فیلڈ | کیا درج کریں |
| --- | --- |
| Channel name | اپنی پسند کا نام، مثلاً `GitHubPrimary`۔ |
| Access Token | ابھی بنایا ہوا GitHub Personal Access Token۔ |
| Repository name | مختصر repo name جیسے `image`، یا مکمل path جیسے `username/image`۔ |
| Private repository | اپنی ضرورت کے مطابق on یا off کریں۔ |
| Remark | اختیاری، مثلاً `Primary upload channel`۔ |

![GitHub چینل کی configuration بھریں](../../image/upload/github-releases/填写github渠道配置.png)

## مرحلہ 3: چینل محفوظ کریں

فیلڈز بھرنے کے بعد Save پر کلک کریں۔

نظام یہ details خود سنبھال کرے گا:

| نظام کا رویہ | وضاحت |
| --- | --- |
| Short repository name | ImgBed موجودہ GitHub account پہچان کر قدر کو مکمل repository path میں وسیع کرتا ہے۔ |
| Full repository path | ImgBed `username/repository` path کو بالکل اسی طرح استعمال کرتا ہے جیسے درج کیا گیا ہو۔ |
| repository کی جانچ | موجودہ personal account path ہو تو ImgBed repository نہ ہونے پر اسے خود بناتا ہے۔ مکمل path دستی طور پر درج ہو تو ImgBed وہی path استعمال کرتا ہے۔ |
| Public/private state | repository visibility موجودہ switch کے مطابق sync ہوتی ہے۔ |

## فوری چیک لسٹ

GitHub Releases کا flow یوں ہے:

```text
Sign in to GitHub
-> Create an Access Token
-> Return to ImgBed and enter the token and repository name
-> Save
-> If only a repo name is entered, ImgBed adds the current username automatically
-> If username/repo is entered, ImgBed uses it as-is
-> Upload a test image
```
