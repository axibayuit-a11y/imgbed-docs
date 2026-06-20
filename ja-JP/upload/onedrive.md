# OneDrive チャンネルの追加

OneDrive チャンネルは、Microsoft OneDrive を ImgBed の保存先として利用します。

## 事前に用意するもの

| 必要なもの | 用途 |
| --- | --- |
| Microsoft アカウント | OneDrive とアプリ登録に使います |
| ImgBed ドメイン | OAuth コールバック URL に使います |
| App registration | Client ID と Client Secret を取得します |
| Refresh Token | 長期アクセスに使います |

## Microsoft Entra ID を開く

1. `portal.azure.com` を開きます。
2. 上部検索で `Microsoft Entra ID` を探します。
3. `App registrations` を開きます。
4. `New registration` をクリックします。

## アプリを登録する

| 項目 | 入力内容 |
| --- | --- |
| Name | 例：`imgbed-onedrive` |
| Supported account types | 利用する OneDrive の種類に合わせて選択 |
| Redirect URI type | `Web` |
| Redirect URI | `https://あなたのドメイン/api/oauth/onedrive/callback` |

個人 OneDrive だけなら個人 Microsoft アカウント向けを選びます。個人と組織の両方に対応したい場合は、両方を許可する種類を選びます。

![OneDrive アプリ登録](../../image/upload/onedrive/添加应用程序注册.png)

登録後、`Application (client) ID` を控えます。組織アカウントで使う場合は `Directory (tenant) ID` も控えます。

![Application ID と Tenant ID](../../image/upload/onedrive/应用程序ID和目录租户ID位.png)

## Client Secret を作成する

1. `Certificates & secrets` を開きます。
2. `New client secret` をクリックします。
3. 名前と有効期限を設定します。
4. 作成後すぐに `Value` をコピーします。

![Client Secret](../../image/upload/onedrive/保存客户端密码值.png)

この値はあとから再表示できないため、必ず保存してください。

## Microsoft Graph 権限

`API permissions` で Microsoft Graph の delegated permissions を追加します。

| 権限 | 用途 |
| --- | --- |
| `Files.ReadWrite.All` | ファイルのアップロード、ディレクトリ作成、削除 |
| `offline_access` | Refresh Token の取得 |
| `User.Read` | アカウント情報と容量確認 |

## ImgBed へ入力する

アップロード設定で `OneDrive` を選びます。

| 項目 | 入力内容 |
| --- | --- |
| チャンネル名 | 例：`OneDrive Main` |
| Client ID | `Application (client) ID` |
| Client Secret | 作成した Secret の Value |
| Tenant ID | 下表を参照 |
| Refresh Token | まずは空欄 |
| ルートディレクトリ | 任意。通常は `imgbed` |

![OneDrive 設定](../../image/upload/onedrive/添加新渠道配置.png)

| 利用アカウント | Tenant ID |
| --- | --- |
| 個人アカウント | `consumers` |
| 個人 + 組織 | `common` |
| 特定組織のみ | `Directory (tenant) ID` |

## Refresh Token を取得する

1. ImgBed で「Token を取得」をクリックします。
2. 保存先に使う Microsoft アカウントでログインします。
3. 権限を許可します。
4. コールバックページに表示された `Refresh Token` をコピーします。
5. ImgBed へ戻り、`Refresh Token` 欄に貼り付けます。

![Refresh Token](../../image/upload/onedrive/复制刷新令牌.png)

## クイック手順

```text
portal.azure.com を開く
-> Microsoft Entra ID
-> App registrations
-> New registration
-> Web コールバック URL を設定
-> Application ID をコピー
-> Client Secret を作成
-> Microsoft Graph 権限を追加
-> ImgBed に Client ID / Secret / Tenant ID を入力
-> Token を取得
-> Refresh Token を貼り付けて保存
```
