# Hugging Face Channel شامل کریں

## شروع کرنے سے پہلے کیا چاہیے

آپ کو صرف تین چیزیں درکار ہیں:

| ضرورت | مقصد |
| --- | --- |
| Hugging Face account | access token بنانے اور repository own کرنے کے لیے۔ |
| Hugging Face User Access Token | ImgBed کو Hugging Face API access، repositories بنانے، اور files upload کرنے کے لیے۔ |
| Repository name | صرف repository name درج کر سکتے ہیں، مثلاً `image`۔ |

## Setup Steps

### Step 1: Hugging Face میں Sign in کریں اور Access Token بنائیں

1. Hugging Face میں sign in کریں۔
2. اوپر دائیں corner میں avatar پر کلک کریں اور `Settings` کھولیں۔
3. left sidebar سے `Access Tokens` کھولیں۔
4. نیا token بنائیں۔
5. token کو قابل شناخت نام دیں۔
6. `write` permission منتخب کریں۔
7. token بنتے ہی فوراً copy کر کے محفوظ کریں۔

![Create a token](../../image/upload/huggingface/创建令牌.png)

## Step 2: ImgBed میں Hugging Face Channel بھریں

Upload Settings میں `Hugging Face` منتخب کرنے کے بعد fields یوں بھریں:

| UI Field | What to Enter |
| --- | --- |
| Channel name | اپنی پسند کا نام، مثلاً `hf-primary`۔ |
| Repository name | short repo name جیسے `image`، یا full path جیسے `username/image`۔ |
| Access Token | ابھی بنایا ہوا Hugging Face User Access Token۔ |
| Private repository | اپنی ضرورت کے مطابق on یا off کریں۔ |
| Remark | optional، مثلاً `Primary upload channel`۔ |

![Add the channel](../../image/upload/huggingface/添加渠道.png)

## Step 3: Channel Save کریں

fields بھرنے کے بعد Save پر کلک کریں۔

system پھر یہ details خود handle کرے گا:

| System Behavior | Description |
| --- | --- |
| Short repository name | ImgBed current Hugging Face account پہچان کر value کو full repository path میں expand کرتا ہے۔ |
| Full repository path | ImgBed `username/repository` path کو بالکل اسی طرح استعمال کرتا ہے جیسے درج کیا گیا ہو۔ |
| Repository check | current personal account path ہو تو ImgBed repository نہ ہونے پر اسے create کرنے کی کوشش کرتا ہے۔ full path manual درج ہو تو ImgBed وہی path استعمال کرتا ہے۔ |
| Repository type | یہ channel `dataset` repository استعمال کرتا ہے۔ |
| Public/private state | repository visibility current switch کے مطابق synchronized ہوتی ہے۔ |

## Quick Checklist

```text
Hugging Face میں sign in کریں
-> Access Token بنائیں
-> write permission منتخب کریں
-> ImgBed پر واپس آ کر token اور repository name درج کریں
-> Save کریں
-> صرف repo name درج ہو تو ImgBed current username خود شامل کرے گا
-> username/repo درج ہو تو ImgBed اسے as-is استعمال کرے گا
-> ImgBed dataset repository check یا create کرے گا
-> test image upload کریں
```
