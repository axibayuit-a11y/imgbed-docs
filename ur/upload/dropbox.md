# Dropbox Channel شامل کریں

## پہلے کیا چاہیے

| ضرورت | وجہ |
| --- | --- |
| Dropbox account | sign in اور app authorize کرنے کے لیے |
| Dropbox app | `App Key` اور `App Secret` generate کرنے کے لیے |
| آپ کا ImgBed domain | OAuth redirect URI کے لیے |
| دستیاب Dropbox storage | اصل file storage location کے طور پر |

## Setup Steps

### Step 1: Dropbox App بنائیں

1. Dropbox App Console کھولیں:

```text
https://www.dropbox.com/developers/apps
```

2. نیا app بنائیں۔
3. access type کے لیے منتخب کریں:

```text
App folder
```

4. app کو ایسا نام دیں جسے آپ پہچان سکیں، مثلاً `imgbed-app`۔
5. app بننے کے بعد app details page کھولیں۔

Recommended access type:

| Access Type | Recommendation |
| --- | --- |
| `App folder` | Recommended۔ یہ ImgBed کے file storage model سے match کرتا ہے۔ |
| `Full Dropbox` | Recommended نہیں۔ ImgBed کو پورے account access کی ضرورت نہیں۔ |

![Create Dropbox app](../../image/upload/dropbox/开发者创建应用.png)

### Step 2: Redirect URI شامل کریں

Dropbox app details page میں OAuth یا Redirect URI settings تلاش کریں اور یہ add کریں:

```text
https://your-domain.com/api/oauth/dropbox/callback
```

اگر آپ admin panel کو ایک سے زیادہ domains سے استعمال کرتے ہیں، تو ہر matching callback URL شامل کریں۔

![Configure redirect URI](../../image/upload/dropbox/配置回调地址.png)

### Step 3: App Permissions Configure کریں

`Permissions` tab کھولیں اور کم از کم یہ scopes enable کریں:

| Scope | Required | Purpose |
| --- | --- | --- |
| `account_info.read` | Required | account اور quota information پڑھتا ہے |
| `files.metadata.read` | Required | path checks کے لیے file اور folder metadata پڑھتا ہے |
| `files.metadata.write` | Required | folders بناتا ہے اور metadata لکھتا ہے |
| `files.content.write` | Required | files upload کرتا ہے۔ یہ scope نہ ہو تو `required scope 'files.content.write'` error آئے گا۔ |
| `files.content.read` | Recommended | download، preview، اور temporary file links کی اجازت دیتا ہے |

scopes منتخب کرنے کے بعد page کے نیچے `Submit` پر کلک کریں۔

![Add permissions](../../image/upload/dropbox/添加对应的权限.png)

Important:

| Situation | What To Do |
| --- | --- |
| آپ نے scopes بدلے | token authorization flow دوبارہ چلائیں اور نیا `Refresh Token` لیں۔ |
| دوبارہ authorize نہیں کیا | پرانے token کو نئی permissions نہیں ملیں گی، اس لیے uploads پھر بھی fail ہو سکتے ہیں۔ |

### Step 4: App Credentials Copy کریں

Dropbox app page سے یہ دو values محفوظ کریں:

| Dropbox Field | ImgBed Field |
| --- | --- |
| `App key` | `App Key` |
| `App secret` | `App Secret` |

### Step 5: ImgBed میں Dropbox Channel بھریں

Upload Settings میں `Dropbox` منتخب کریں اور یہ fields بھریں:

| ImgBed Field | What To Enter |
| --- | --- |
| Channel name | قابل شناخت نام، مثلاً `Main Dropbox` |
| App Key | Dropbox کا `App key` |
| App Secret | Dropbox کا `App secret` |
| Refresh Token | ابھی خالی چھوڑ دیں |
| Root directory | Optional۔ default `imgbed` ہے۔ |
| Note | Optional |

![Get token](../../image/upload/dropbox/获取令牌.png)

### Step 6: Refresh Token حاصل کریں

1. ImgBed میں `Get Token` پر کلک کریں۔
2. جس Dropbox account کو connect کرنا ہے اس میں sign in کریں۔
3. authorization prompt approve کریں۔
4. callback page ایک `Refresh Token` دکھائے گا۔
5. اسے copy کریں۔
6. ImgBed پر واپس آ کر `Refresh Token` field میں paste کریں۔

![Copy token](../../image/upload/dropbox/复制令牌.png)

## Verify کیسے کریں

| Check | Expected Result |
| --- | --- |
| Channel card | Save کے بعد Dropbox channel نظر آئے۔ |
| Channel switch | channel enable ہو سکے۔ |
| Token saved | detail page دکھائے کہ `Refresh Token` محفوظ ہو گیا ہے۔ |
| Upload test | test image Dropbox app folder میں نظر آئے۔ |

quota limits enabled ہوں تو quota query پر کلک کریں۔ کامیاب query کے بعد channel card used space، total space، اور last update time دکھاتا ہے۔

![Quota query success](../../image/upload/dropbox/查询额度成功.png)

## Troubleshooting

| Problem | Fix |
| --- | --- |
| ImgBed کہتا ہے configuration incomplete ہے | چیک کریں کہ `App Key`، `App Secret`، اور `Refresh Token` سب filled ہیں۔ |
| Authorization کامیاب ہے مگر `Refresh Token` نہیں دکھتا | `Get Token` دوبارہ کلک کریں اور یقینی بنائیں کہ offline authorization flow استعمال ہو رہا ہے۔ |
| Upload `required scope 'files.content.write'` کے ساتھ fail ہوتا ہے | `files.content.write` enable کریں، `Submit` پر کلک کریں، پھر نیا `Refresh Token` لیں۔ |
| Callback fail ہوتا ہے | confirm کریں کہ redirect URI `https://your-domain.com/api/oauth/dropbox/callback` ہے۔ |
| Files نہیں ملتیں | confirm کریں کہ Dropbox app `App folder` mode میں بنایا گیا تھا۔ |

## Quick Flow

```text
Dropbox App Console کھولیں
-> app بنائیں
-> App folder access منتخب کریں
-> https://your-domain.com/api/oauth/dropbox/callback add کریں
-> account_info.read / files.metadata.read / files.metadata.write / files.content.write enable کریں
-> optional طور پر files.content.read enable کریں
-> Submit پر کلک کریں
-> App Key اور App Secret copy کریں
-> ImgBed میں بھریں
-> Get Token پر کلک کریں
-> callback page سے Refresh Token copy کریں
-> ImgBed میں paste کر کے save کریں
```

## References

1. Dropbox App Console: https://www.dropbox.com/developers/apps
2. Dropbox OAuth Guide: https://developers.dropbox.com/oauth-guide
3. Dropbox Developer Guide: https://www.dropbox.com/developers/reference/developer-guide
