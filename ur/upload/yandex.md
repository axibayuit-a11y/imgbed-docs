# Yandex Channel شامل کریں

## پہلے کیا چاہیے

| ضرورت | وجہ |
| --- | --- |
| Yandex account | sign in اور Yandex Disk authorize کرنے کے لیے |
| Yandex OAuth app | `Client ID` اور `Client Secret` generate کرنے کے لیے |
| آپ کا ImgBed domain | OAuth redirect URI کے لیے |
| دستیاب Yandex Disk storage | اصل file storage location کے طور پر |

## Setup Steps

### Step 1: Yandex OAuth App بنائیں

1. Yandex OAuth app creation page کھولیں:

```text
https://oauth.yandex.com/client/new
```

2. اگر sign in page پر redirect ہو جائیں، پہلے اپنے Yandex account سے sign in کریں۔
3. نیا app بنائیں۔
4. app کو قابل شناخت نام دیں، مثلاً `imgbed-yandex`۔
5. callback یا redirect URL settings تلاش کریں۔
6. درج کریں:

```text
https://your-domain.com/api/oauth/yandex/callback
```

### Step 2: Permissions Confirm کریں

موجودہ ImgBed Yandex integration کے لیے `Yandex.Disk REST API` کے تحت یہ چار permissions رکھیں:

| Permission | Purpose |
| --- | --- |
| `cloud_api:disk.app_folder` | ImgBed کو app folder میں files store کرنے دیتا ہے |
| `cloud_api:disk.read` | files اور download links پڑھتا ہے |
| `cloud_api:disk.write` | files upload کرتا ہے، folders بناتا ہے، اور files delete کرتا ہے |
| `Access to information about Yandex.Disk` | disk quota اور used space پڑھتا ہے |

اگر `Yandex ID API` کے تحت یہ permissions بھی نظر آئیں تو optional ہیں:

| Permission Text | Recommendation |
| --- | --- |
| `Access to username, first name and surname, gender` | Optional |
| `Access to email address` | Optional |

Core upload، download، deletion، اور quota features کا انحصار اوپر والی چار `Yandex.Disk REST API` permissions پر ہے۔

![Configure Yandex Disk permissions](../../image/upload/yandex/dataaccess配置软盘权限.png)

### Step 3: App Credentials Copy کریں

app بننے کے بعد copy کریں:

| Yandex Field | ImgBed Field |
| --- | --- |
| `Client ID` | `Client ID` |
| `Client Secret` | `Client Secret` |

![Record Client ID and Secret](../../image/upload/yandex/记录客户端id和secret.png)

### Step 4: ImgBed میں Yandex Channel بھریں

Upload Settings میں `Yandex` منتخب کریں اور یہ fields بھریں:

| ImgBed Field | What To Enter |
| --- | --- |
| Channel name | قابل شناخت نام، مثلاً `Main Yandex` |
| Client ID | Yandex app کا `Client ID` |
| Client Secret | Yandex app کا `Client Secret` |
| Refresh Token | ابھی خالی چھوڑ دیں |
| Root directory | Optional۔ default `imgbed` ہے۔ |

![Edit channel config](../../image/upload/yandex/编辑配置渠道.png)

### Step 5: Refresh Token حاصل کریں

1. ImgBed میں `Get Token` پر کلک کریں۔
2. جس Yandex account کو connect کرنا ہے اس میں sign in کریں۔
3. authorization prompt approve کریں۔
4. callback page ایک `Refresh Token` دکھائے گا۔
5. اسے copy کریں۔
6. ImgBed پر واپس آ کر `Refresh Token` field میں paste کریں۔

![Copy refresh token after authorization](../../image/upload/yandex/授权后复制刷新令牌.png)

### Step 6: Channel Save کریں

تمام fields بھرنے کے بعد channel save کریں۔

## Quick Flow

```text
Yandex OAuth Console کھولیں
-> app بنائیں
-> https://your-domain.com/api/oauth/yandex/callback add کریں
-> Yandex Disk permissions confirm کریں
-> Client ID اور Client Secret copy کریں
-> ImgBed میں Client ID / Client Secret بھریں
-> Get Token پر کلک کریں
-> callback page سے Refresh Token copy کریں
-> ImgBed میں paste کر کے save کریں
```

## References

1. Register a Yandex app: https://yandex.com/dev/id/doc/en/register-client
2. Get an authorization code through URL: https://yandex.com/dev/id/doc/en/codes/code-url
3. Yandex OAuth token endpoint: https://yandex.com/dev/id/doc/en/tokens/token
