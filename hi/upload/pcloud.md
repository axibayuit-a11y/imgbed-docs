# pCloud चैनल जोड़ना

## कब उपयोग करें

- आपके पास pCloud account है और आप चाहते हैं कि ImgBed images को pCloud में store करे।
- आप pCloud account email और password को channel credentials के रूप में इस्तेमाल करने में सहज हैं।

## पहले क्या चाहिए

| ज़रूरत | क्यों चाहिए |
| --- | --- |
| pCloud account email | pCloud API में sign in करने के लिए |
| pCloud password | pCloud API में sign in करने के लिए |
| API host | default `api.pcloud.com`। EU accounts `eapi.pcloud.com` use कर सकते हैं। |
| Storage directory | जहाँ files रखी जाती हैं। default `imgbed`। |

## कहाँ जोड़ें

1. System Settings खोलें।
2. Upload Settings खोलें।
3. ऊपर दाएँ कोने में `Add Channel` क्लिक करें।
4. `pCloud` चुनें।

## फ़ील्ड संदर्भ

| Field | Purpose | Required |
| --- | --- | --- |
| Channel name | इस pCloud channel की पहचान, जैसे `Personal pCloud` | हाँ |
| Account email | आपका pCloud login email | हाँ |
| Password | आपका pCloud password | हाँ |
| API host | pCloud API host। default `api.pcloud.com`। | नहीं |
| Storage directory | files store करने की directory। default `imgbed`। | नहीं |

account region के आधार पर API host चुनें:

| Account Region | API Host |
| --- | --- |
| Default / US | `api.pcloud.com` |
| Europe | `eapi.pcloud.com` |

## Setup Steps

1. Upload Settings खोलें।
2. `Add Channel` पर क्लिक करें।
3. `pCloud` चुनें।
4. पहचानने लायक channel name डालें।
5. pCloud account email डालें।
6. pCloud password डालें।
7. API host को `api.pcloud.com` रखें, या EU account के लिए `eapi.pcloud.com` use करें।
8. storage directory को `imgbed` रखें, या अपनी पसंद का folder डालें।
9. channel save करें।

![Channel configure करें](../../image/upload/pcloud/配置渠道.png)

## कैसे जाँचें

| जाँच | Expected Result |
| --- | --- |
| Channel card | save के बाद pCloud channel card दिखाई देता है। |
| Channel switch | card का switch enabled रहता है। |
| Email display | card connected pCloud email दिखाता है। |
| Quota query | successful query के बाद used और total capacity दिखती है। |
| Upload test | test image configured pCloud storage directory में दिखाई देती है। |

![Quota query success](../../image/upload/pcloud/查询额度成功.png)

## Troubleshooting

### OAuth2 क्यों नहीं?

pCloud OAuth2 default रूप से self-service नहीं है। इसे enable कराने के लिए pCloud को email करना पड़ता है।

मौजूदा pCloud OAuth2 flow ImgBed के short-lived upload link workflow को भी support नहीं करता, इसलिए यह channel account email और password login use करता है।

### कौन सा API Host use करें?

Default:

```text
api.pcloud.com
```

EU accounts के लिए:

```text
eapi.pcloud.com
```

## Quick Flow

```text
pCloud email और password तैयार करें
-> Upload Settings खोलें
-> Add Channel
-> pCloud चुनें
-> channel name / email / password भरें
-> account Europe में न हो तो API host api.pcloud.com रखें
-> दूसरा folder न चाहिए तो storage directory imgbed रखें
-> Save
-> quota query करें
-> test image upload करें
```
