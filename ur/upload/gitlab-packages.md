# GitLab Packages Channel شامل کریں

## شروع کرنے سے پہلے کیا چاہیے

آپ کو صرف تین چیزیں چاہیے:

| ضرورت | مقصد |
| --- | --- |
| GitLab account | access token بنانے اور project own کرنے کے لیے۔ |
| GitLab Personal Access Token | ImgBed کو GitLab API access، projects بنانے، اور files کو Generic Packages میں upload کرنے کے لیے۔ |
| Project name | صرف project name درج کر سکتے ہیں، مثلاً `imgbed`۔ |

## Setup Steps

### Step 1: GitLab میں Sign in کریں اور Access Token بنائیں

1. GitLab میں sign in کریں۔
2. اوپر دائیں corner میں avatar پر کلک کریں اور `Preferences` کھولیں۔
3. left sidebar سے `Access Tokens` کھولیں۔
4. token کو قابل شناخت نام دیں۔
5. اپنی maintenance preference کے مطابق expiration date منتخب کریں۔
6. `api` scope منتخب کریں۔
7. token بنتے ہی فوراً copy کر کے محفوظ کریں۔

![Create a legacy token](../../image/upload/gitlab-packages/点击生成旧版令牌.png)

![Select token permissions](../../image/upload/gitlab-packages/勾选令牌权限.png)

## Step 2: ImgBed میں GitLab Packages Channel بھریں

Upload Settings میں `GitLab Packages` منتخب کرنے کے بعد fields یوں بھریں:

| UI Field | What to Enter |
| --- | --- |
| Channel name | اپنی پسند کا نام، مثلاً `GitLabPrimary`۔ |
| Access Token | ابھی بنایا ہوا GitLab Personal Access Token۔ |
| Project name | short project name جیسے `imgbed`، یا full path جیسے `username/imgbed`۔ |
| Private repository | اپنی ضرورت کے مطابق on یا off کریں۔ |
| Remark | optional، مثلاً `Primary upload channel`۔ |

![Configure the channel](../../image/upload/gitlab-packages/配置渠道内容.png)

## Step 3: Channel Save کریں

fields بھرنے کے بعد Save پر کلک کریں۔

system یہ details خود handle کرے گا:

| System Behavior | Description |
| --- | --- |
| Short project name | ImgBed current GitLab account پہچان کر value کو full project path میں expand کرتا ہے۔ |
| Full project path | ImgBed `username/project` path کو بالکل اسی طرح استعمال کرتا ہے جیسے درج کیا گیا ہو۔ |
| Project check | current personal account path ہو تو ImgBed project نہ ہونے پر اسے خود create کرتا ہے۔ full path manual درج ہو تو ImgBed وہی path استعمال کرتا ہے۔ |
| Public/private state | project visibility current switch کے مطابق synchronized ہوتی ہے۔ |

## Quick Checklist

```text
GitLab میں sign in کریں
-> Access Token بنائیں
-> صرف api scope منتخب کریں
-> ImgBed پر واپس آ کر token اور project name درج کریں
-> Save کریں
-> صرف project name درج ہو تو ImgBed current username خود شامل کرے گا
-> username/project درج ہو تو ImgBed اسے as-is استعمال کرے گا
-> test image upload کریں
```
