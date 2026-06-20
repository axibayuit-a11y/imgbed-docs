# Hugging Face चैनल जोड़ना

## शुरू करने से पहले क्या चाहिए

सिर्फ तीन चीज़ें चाहिए:

| ज़रूरत | उपयोग |
| --- | --- |
| Hugging Face account | access token generate करने और repository own करने के लिए। |
| Hugging Face User Access Token | ImgBed को Hugging Face API access, repositories create और files upload करने के लिए। |
| Repository name | केवल repository name डाल सकते हैं, जैसे `image`। |

## Setup Steps

### Step 1: Hugging Face में sign in करें और Access Token बनाएँ

1. Hugging Face में sign in करें।
2. ऊपर दाएँ avatar पर क्लिक करके `Settings` खोलें।
3. left sidebar से `Access Tokens` खोलें।
4. नया token बनाएँ।
5. token को पहचानने लायक नाम दें।
6. `write` permission चुनें।
7. token बनते ही उसे copy और save करें।

![Token बनाएँ](../../image/upload/huggingface/创建令牌.png)

## Step 2: ImgBed में Hugging Face channel भरें

Upload Settings में `Hugging Face` चुनने के बाद fields ऐसे भरें:

| UI Field | क्या डालें |
| --- | --- |
| Channel name | आपका चुना हुआ नाम, जैसे `hf-primary`। |
| Repository name | short repo name जैसे `image`, या full path जैसे `username/image`। |
| Access Token | अभी बनाया गया Hugging Face User Access Token। |
| Private repository | अपनी ज़रूरत के हिसाब से on या off करें। |
| Remark | optional, जैसे `Primary upload channel`। |

![Channel जोड़ें](../../image/upload/huggingface/添加渠道.png)

## Step 3: Channel save करें

fields भरने के बाद Save पर क्लिक करें।

system ये details अपने आप संभालेगा:

| System Behavior | Description |
| --- | --- |
| Short repository name | ImgBed current Hugging Face account पहचानता है और value को full repository path में बदलता है। |
| Full repository path | ImgBed `username/repository` path को जैसा डाला गया है वैसा ही use करता है। |
| Repository check | current personal account path use होने पर ImgBed repository न हो तो create करने की कोशिश करता है। full path manually डालने पर वही path directly use करता है। |
| Repository type | यह channel `dataset` repository use करता है। |
| Public/private state | repository visibility current switch के अनुसार sync होती है। |

## Quick Checklist

```text
Hugging Face में sign in करें
-> Access Token बनाएँ
-> write permission चुनें
-> ImgBed में लौटकर token और repository name डालें
-> Save
-> केवल repo name डालने पर ImgBed current username automatically जोड़ता है
-> username/repo डालने पर ImgBed उसे जैसा है वैसा use करता है
-> ImgBed dataset repository check या create करता है
-> test image upload करें
```
