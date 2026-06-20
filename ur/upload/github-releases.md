# GitHub Releases Channel شامل کریں

## شروع کرنے سے پہلے کیا چاہیے

آپ کو صرف تین چیزیں چاہیے:

| ضرورت | مقصد |
| --- | --- |
| GitHub account | access token بنانے اور repository own کرنے کے لیے۔ |
| GitHub Access Token | ImgBed کو GitHub API access، releases بنانے، اور files upload کرنے کے لیے۔ |
| Repository name | صرف repository name درج کر سکتے ہیں، مثلاً `image`۔ |

## Setup Steps

### Step 1: GitHub میں Sign in کریں اور Access Token بنائیں

1. GitHub میں sign in کریں۔
2. اوپر دائیں corner میں avatar پر کلک کریں اور `Settings` کھولیں۔
3. left sidebar سے `Developer settings` کھولیں۔
4. `Personal access tokens` کھولیں۔
5. `Tokens (classic)` کھولیں۔
6. `Generate new token (classic)` پر کلک کریں۔
7. token کو قابل شناخت نام دیں۔
8. اپنی maintenance preference کے مطابق expiration date منتخب کریں۔
9. `repo` اور `workflow` scopes منتخب کریں۔
10. token بنتے ہی فوراً copy کر کے محفوظ کریں۔

![Add GitHub permissions](../../image/upload/github-releases/添加github权限.png)

## Step 2: ImgBed میں GitHub Releases Channel بھریں

Upload Settings میں `GitHub Releases` منتخب کرنے کے بعد fields یوں بھریں:

| UI Field | What to Enter |
| --- | --- |
| Channel name | اپنی پسند کا نام، مثلاً `GitHubPrimary`۔ |
| Access Token | ابھی بنایا ہوا GitHub Personal Access Token۔ |
| Repository name | short repo name جیسے `image`، یا full path جیسے `username/image`۔ |
| Private repository | اپنی ضرورت کے مطابق on یا off کریں۔ |
| Remark | optional، مثلاً `Primary upload channel`۔ |

![Fill in the GitHub channel configuration](../../image/upload/github-releases/填写github渠道配置.png)

## Step 3: Channel Save کریں

fields بھرنے کے بعد Save پر کلک کریں۔

system یہ details خود handle کرے گا:

| System Behavior | Description |
| --- | --- |
| Short repository name | ImgBed current GitHub account پہچان کر value کو full repository path میں expand کرتا ہے۔ |
| Full repository path | ImgBed `username/repository` path کو بالکل اسی طرح استعمال کرتا ہے جیسے درج کیا گیا ہو۔ |
| Repository check | current personal account path ہو تو ImgBed repository نہ ہونے پر اسے خود create کرتا ہے۔ full path manual درج ہو تو ImgBed وہی path استعمال کرتا ہے۔ |
| Public/private state | repository visibility current switch کے مطابق synchronized ہوتی ہے۔ |

## Quick Checklist

GitHub Releases کا flow یوں ہے:

```text
GitHub میں sign in کریں
-> Access Token بنائیں
-> ImgBed پر واپس آ کر token اور repository name درج کریں
-> Save کریں
-> صرف repo name درج ہو تو ImgBed current username خود شامل کرے گا
-> username/repo درج ہو تو ImgBed اسے as-is استعمال کرے گا
-> test image upload کریں
```
