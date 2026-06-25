# GitLab Packages Channel شامل کریں

## شروع کرنے سے پہلے کیا چاہیے

آپ کو صرف تین چیزیں چاہیے:

| ضرورت | مقصد |
| --- | --- |
| GitLab account | access token بنانے اور project own کرنے کے لیے۔ |
| GitLab Personal Access Token | ImgBed کو GitLab API access، projects بنانے، اور files کو Generic Packages میں upload کرنے کے لیے۔ |
| Project name | صرف project name درج کر سکتے ہیں، مثلاً `imgbed`۔ |

## سیٹ اپ کے مراحل

### مرحلہ 1: GitLab میں sign in کریں اور Access Token بنائیں

1. GitLab میں sign in کریں۔
2. اوپر دائیں corner میں avatar پر کلک کریں اور `Preferences` کھولیں۔
3. left sidebar سے `Access Tokens` کھولیں۔
4. token کو قابل شناخت نام دیں۔
5. اپنی maintenance preference کے مطابق expiration date منتخب کریں۔
6. `api` scope منتخب کریں۔
7. token بنتے ہی فوراً کاپی کر کے محفوظ کریں۔

![legacy token بنائیں](../../image/upload/gitlab-packages/点击生成旧版令牌.png)

![Select token permissions](../../image/upload/gitlab-packages/勾选令牌权限.png)

## مرحلہ 2: ImgBed میں GitLab Packages Channel بھریں

اپ لوڈ سیٹنگز میں `GitLab Packages` منتخب کرنے کے بعد فیلڈز یوں بھریں:

| UI فیلڈ | کیا درج کریں |
| --- | --- |
| Channel name | اپنی پسند کا نام، مثلاً `GitLabPrimary`۔ |
| Access Token | ابھی بنایا ہوا GitLab Personal Access Token۔ |
| Project name | مختصر project name جیسے `imgbed`، یا مکمل path جیسے `username/imgbed`۔ |
| Private repository | اپنی ضرورت کے مطابق on یا off کریں۔ |
| Remark | اختیاری، مثلاً `Primary upload channel`۔ |

![Configure the channel](../../image/upload/gitlab-packages/配置渠道内容.png)

## مرحلہ 3: چینل محفوظ کریں

فیلڈز بھرنے کے بعد Save پر کلک کریں۔

نظام یہ details خود سنبھال کرے گا:

| نظام کا رویہ | وضاحت |
| --- | --- |
| Short project name | ImgBed موجودہ GitLab account پہچان کر قدر کو مکمل project path میں وسیع کرتا ہے۔ |
| Full project path | ImgBed `username/project` path کو بالکل اسی طرح استعمال کرتا ہے جیسے درج کیا گیا ہو۔ |
| project کی جانچ | موجودہ personal account path ہو تو ImgBed project نہ ہونے پر اسے خود بناتا ہے۔ مکمل path دستی طور پر درج ہو تو ImgBed وہی path استعمال کرتا ہے۔ |
| Public/private state | project visibility موجودہ switch کے مطابق sync ہوتی ہے۔ |

## فوری چیک لسٹ

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
