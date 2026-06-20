# Dropbox चैनल जोड़ना

## पहले क्या चाहिए

| ज़रूरत | क्यों चाहिए |
| --- | --- |
| Dropbox account | sign in और app authorize करने के लिए |
| Dropbox app | `App Key` और `App Secret` generate करने के लिए |
| आपका ImgBed domain | OAuth redirect URI के लिए |
| उपलब्ध Dropbox storage | असली file storage location |

## Setup Steps

### Step 1: Dropbox App बनाएँ

1. Dropbox App Console खोलें:

```text
https://www.dropbox.com/developers/apps
```

2. नया app बनाएँ।
3. access type के लिए चुनें:

```text
App folder
```

4. app को पहचानने लायक नाम दें, जैसे `imgbed-app`।
5. बनने के बाद app details page खोलें।

Recommended access type:

| Access Type | Recommendation |
| --- | --- |
| `App folder` | सुझाया गया। यह ImgBed के file storage तरीके से match करता है। |
| `Full Dropbox` | सुझाया नहीं गया। ImgBed को पूरे account access की ज़रूरत नहीं। |

![Dropbox app बनाएँ](../../image/upload/dropbox/开发者创建应用.png)

### Step 2: Redirect URI जोड़ें

Dropbox app details page में OAuth या Redirect URI settings ढूँढें और जोड़ें:

```text
https://your-domain.com/api/oauth/dropbox/callback
```

अगर admin panel कई domains से use होता है, तो हर matching callback URL जोड़ें।

![Redirect URI configure करें](../../image/upload/dropbox/配置回调地址.png)

### Step 3: App Permissions configure करें

`Permissions` tab खोलें और कम से कम ये scopes enable करें:

| Scope | Required | Purpose |
| --- | --- | --- |
| `account_info.read` | हाँ | account और quota information पढ़ता है |
| `files.metadata.read` | हाँ | path checks के लिए file और folder metadata पढ़ता है |
| `files.metadata.write` | हाँ | folders create और metadata write करता है |
| `files.content.write` | हाँ | files upload करता है। यह scope न हो तो `required scope 'files.content.write'` error आता है। |
| `files.content.read` | सुझाया गया | download, preview और temporary file links allow करता है |

scopes चुनने के बाद page के नीचे `Submit` पर क्लिक करें।

![Permissions जोड़ें](../../image/upload/dropbox/添加对应的权限.png)

महत्वपूर्ण:

| Situation | क्या करें |
| --- | --- |
| आपने scopes बदले | token authorization flow फिर चलाएँ और नया `Refresh Token` लें। |
| आपने reauthorize नहीं किया | पुराना token नई permissions नहीं पाएगा, इसलिए uploads फिर भी fail हो सकते हैं। |

### Step 4: App Credentials copy करें

Dropbox app page से ये दो values save करें:

| Dropbox Field | ImgBed Field |
| --- | --- |
| `App key` | `App Key` |
| `App secret` | `App Secret` |

### Step 5: Dropbox channel भरें

Upload Settings में `Dropbox` चुनें और भरें:

| ImgBed Field | क्या डालें |
| --- | --- |
| Channel name | पहचानने लायक नाम, जैसे `Main Dropbox` |
| App Key | Dropbox `App key` |
| App Secret | Dropbox `App secret` |
| Refresh Token | अभी खाली छोड़ें |
| Root directory | optional। default `imgbed`। |
| Note | optional |

![Token लें](../../image/upload/dropbox/获取令牌.png)

### Step 6: Refresh Token लें

1. ImgBed में `Get Token` पर क्लिक करें।
2. जिस Dropbox account को connect करना है उससे sign in करें।
3. authorization prompt approve करें।
4. callback page `Refresh Token` दिखाएगा।
5. इसे copy करें।
6. ImgBed में लौटकर `Refresh Token` field में paste करें।

![Token copy करें](../../image/upload/dropbox/复制令牌.png)

## कैसे जाँचें

| जाँच | Expected Result |
| --- | --- |
| Channel card | save के बाद Dropbox channel दिखाई देता है। |
| Channel switch | channel enable किया जा सकता है। |
| Token saved | detail page दिखाता है कि `Refresh Token` save हुआ है। |
| Upload test | test image Dropbox app folder में दिखाई देती है। |

quota limits enabled हों तो quota query पर क्लिक करें। successful query के बाद channel card used space, total space और last update time दिखाता है।

![Quota query success](../../image/upload/dropbox/查询额度成功.png)

## Troubleshooting

| Problem | Fix |
| --- | --- |
| ImgBed configuration incomplete कहता है | जाँचें कि `App Key`, `App Secret` और `Refresh Token` सभी भरे हैं। |
| Authorization successful है लेकिन `Refresh Token` नहीं दिखता | `Get Token` फिर क्लिक करें और offline authorization flow use होना confirm करें। |
| Upload `required scope 'files.content.write'` से fail होता है | `files.content.write` enable करें, `Submit` क्लिक करें, फिर नया `Refresh Token` लें। |
| Callback fail होता है | confirm करें कि redirect URI `https://your-domain.com/api/oauth/dropbox/callback` है। |
| Files नहीं मिलतीं | confirm करें कि Dropbox app `App folder` mode में बना है। |

## Quick Flow

```text
Dropbox App Console खोलें
-> app बनाएँ
-> App folder access चुनें
-> https://your-domain.com/api/oauth/dropbox/callback जोड़ें
-> account_info.read / files.metadata.read / files.metadata.write / files.content.write enable करें
-> optional रूप से files.content.read enable करें
-> Submit क्लिक करें
-> App Key और App Secret copy करें
-> ImgBed में भरें
-> Get Token क्लिक करें
-> callback page से Refresh Token copy करें
-> ImgBed में paste करके save करें
```

## References

1. Dropbox App Console: https://www.dropbox.com/developers/apps
2. Dropbox OAuth Guide: https://developers.dropbox.com/oauth-guide
3. Dropbox Developer Guide: https://www.dropbox.com/developers/reference/developer-guide
