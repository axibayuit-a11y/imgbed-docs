# Yandex चैनल जोड़ना

## पहले क्या चाहिए

| ज़रूरत | क्यों चाहिए |
| --- | --- |
| Yandex account | sign in और Yandex Disk authorize करने के लिए |
| Yandex OAuth app | `Client ID` और `Client Secret` generate करने के लिए |
| आपका ImgBed domain | OAuth redirect URI के लिए |
| उपलब्ध Yandex Disk storage | असली file storage location |

## Setup Steps

### Step 1: Yandex OAuth App बनाएँ

1. Yandex OAuth app creation page खोलें:

```text
https://oauth.yandex.com/client/new
```

2. अगर sign in पर redirect हो, तो पहले Yandex account से sign in करें।
3. नया app बनाएँ।
4. app को पहचानने लायक नाम दें, जैसे `imgbed-yandex`।
5. callback या redirect URL settings खोजें।
6. डालें:

```text
https://your-domain.com/api/oauth/yandex/callback
```

### Step 2: Permissions confirm करें

मौजूदा ImgBed Yandex integration के लिए `Yandex.Disk REST API` के तहत ये चार permissions रखें:

| Permission | Purpose |
| --- | --- |
| `cloud_api:disk.app_folder` | ImgBed को app folder में files store करने देता है |
| `cloud_api:disk.read` | files और download links पढ़ता है |
| `cloud_api:disk.write` | files upload, folders create और files delete करता है |
| `Access to information about Yandex.Disk` | disk quota और used space पढ़ता है |

अगर `Yandex ID API` में ये permissions दिखें, तो वे optional हैं:

| Permission Text | Recommendation |
| --- | --- |
| `Access to username, first name and surname, gender` | optional |
| `Access to email address` | optional |

core upload, download, deletion और quota features मुख्य रूप से ऊपर की चार `Yandex.Disk REST API` permissions पर निर्भर हैं।

![Yandex Disk permissions configure करें](../../image/upload/yandex/dataaccess配置软盘权限.png)

### Step 3: App Credentials copy करें

app बनने के बाद copy करें:

| Yandex Field | ImgBed Field |
| --- | --- |
| `Client ID` | `Client ID` |
| `Client Secret` | `Client Secret` |

![Client ID और Secret record करें](../../image/upload/yandex/记录客户端id和secret.png)

### Step 4: Yandex channel भरें

Upload Settings में `Yandex` चुनें और भरें:

| ImgBed Field | क्या डालें |
| --- | --- |
| Channel name | पहचानने लायक नाम, जैसे `Main Yandex` |
| Client ID | Yandex app `Client ID` |
| Client Secret | Yandex app `Client Secret` |
| Refresh Token | अभी खाली छोड़ें |
| Root directory | optional। default `imgbed`। |

![Channel config edit करें](../../image/upload/yandex/编辑配置渠道.png)

### Step 5: Refresh Token लें

1. ImgBed में `Get Token` पर क्लिक करें।
2. जिस Yandex account को connect करना है उससे sign in करें।
3. authorization prompt approve करें।
4. callback page `Refresh Token` दिखाएगा।
5. इसे copy करें।
6. ImgBed में लौटकर `Refresh Token` field में paste करें।

![Authorization के बाद refresh token copy करें](../../image/upload/yandex/授权后复制刷新令牌.png)

### Step 6: Channel save करें

सभी fields भरने के बाद channel save करें।

## Quick Flow

```text
Yandex OAuth Console खोलें
-> app बनाएँ
-> https://your-domain.com/api/oauth/yandex/callback जोड़ें
-> Yandex Disk permissions confirm करें
-> Client ID और Client Secret copy करें
-> ImgBed में Client ID / Client Secret भरें
-> Get Token क्लिक करें
-> callback page से Refresh Token copy करें
-> ImgBed में paste करके save करें
```

## References

1. Register a Yandex app: https://yandex.com/dev/id/doc/en/register-client
2. Get an authorization code through URL: https://yandex.com/dev/id/doc/en/codes/code-url
3. Yandex OAuth token endpoint: https://yandex.com/dev/id/doc/en/tokens/token
