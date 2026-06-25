# OneDrive チャネルを追加する

## 先に必要なもの

| 必要なもの | 必要な理由 |
| --- | --- |
| Microsoft アカウント | Microsoft の管理ページにアクセスし、OneDrive を認可するために使用します。 |
| ImgBed ドメイン | OAuth callback URL に使用します。 |
| アプリ登録 | `Client ID` と `Client Secret` を生成するために使用します。 |
| OneDrive アカウント | 実際のファイル保存先として使用します。 |

## 設定手順

### 手順 1: Microsoft Entra ID を開く

1. `portal.azure.com` を開きます。
2. 上部で `Microsoft Entra ID` を検索します。
3. 対象ページがドロップダウンに表示されない場合は、次を選択します。

```text
Continue searching in Microsoft Entra ID
```

4. `Microsoft Entra ID` を開きます。
5. `App registrations` を開きます。
6. `New registration` をクリックします。

### 手順 2: アプリを登録する

`New registration` ページで、次を入力します。

| 項目 | 入力内容 |
| --- | --- |
| Name | 識別しやすい名前。例: `imgbed-onedrive` |
| Supported account types | 下の表に基づいて選択します。 |
| Redirect URI type | `Web` |
| Redirect URI | `https://your-domain.com/api/oauth/onedrive/callback` |

アカウント種別の目安:

| シナリオ | Supported Account Types |
| --- | --- |
| 個人用 OneDrive のみ | 個人用 Microsoft アカウントのオプションを選択します。 |
| 個人用と職場/学校アカウントの両方 | 個人アカウントと組織アカウントの両方をサポートするオプションを選択します。 |
| 会社または学校の OneDrive のみ | 組織アカウントのオプションを選択します。 |

フォームを入力したら登録をクリックします。

![OneDrive app を作成する](../../image/upload/onedrive/添加应用程序注册.png)

### 手順 3: アプリ情報をコピーする

アプリが作成されたら、概要ページから次の値をコピーします。

| Microsoft 項目 | ImgBed 項目 |
| --- | --- |
| `Application (client) ID` | `Client ID` |
| `Directory (tenant) ID` | 組織アカウント用の `Tenant ID` |

![Application ID と tenant ID](../../image/upload/onedrive/应用程序ID和目录租户ID位.png)

### 手順 4: Client Secret を作成する

1. `Certificates & secrets` を開きます。
2. `New client secret` をクリックします。
3. 任意の説明を入力します。
4. 有効期限を選択します。
5. 作成後すぐに `Value` をコピーします。

![client secret value を保存する](../../image/upload/onedrive/保存客户端密码值.png)

### 手順 5: API 権限を追加する

1. `API permissions` を開きます。
2. `Add a permission` をクリックします。
3. `Microsoft Graph` を選択します。
4. `Delegated permissions` を選択します。
5. 次の権限を追加します。

| 権限 | 目的 |
| --- | --- |
| `Files.ReadWrite.All` | ファイルのアップロード、フォルダーの作成、ファイルの削除 |
| `offline_access` | ImgBed が `Refresh Token` を取得できるようにします。 |
| `User.Read` | アカウントとクォータ情報を読み取ります。 |

### 手順 6: OneDrive チャネルを入力する

アップロード設定で `OneDrive` を選択し、次を入力します。

| ImgBed 項目 | 入力内容 |
| --- | --- |
| チャネル名 | 識別しやすい名前。例: `Main OneDrive` |
| Client ID | Microsoft の `Application (client) ID` |
| Client Secret | コピーした `Client Secret Value` |
| Tenant ID | 下の表を使用します。 |
| Refresh Token | 今は空のままにします。 |
| Root directory | 任意。デフォルトは `imgbed` です。 |
| Note | 任意 |

![OneDrive チャネル設定を入力する](../../image/upload/onedrive/添加新渠道配置.png)

`Tenant ID` の入力方法:

| 選択したアカウント種別 | ImgBed の `Tenant ID` |
| --- | --- |
| 個人アカウント | `consumers` |
| 個人 + 組織アカウント | `common` |
| 現在の組織のみ | `Directory (tenant) ID` |

### 手順 7: Refresh Token を取得する

1. ImgBed で `Get Token` をクリックします。
2. 接続する Microsoft アカウントでサインインします。
3. 認可プロンプトを承認します。
4. callback ページに `Refresh Token` が表示されます。
5. コピーします。
6. ImgBed に戻り、`Refresh Token` 項目に貼り付けます。

![refresh token をコピーする](../../image/upload/onedrive/复制刷新令牌.png)

### 手順 8: チャネルを保存する

すべての項目を入力したら、チャネルを保存します。

## クイックフロー

```text
Open portal.azure.com
-> Search for Microsoft Entra ID
-> Open App registrations
-> Register a new app
-> Fill Name / Supported account types / Web redirect URI
-> Register
-> Copy Application (client) ID
-> Check the callback URL in Authentication
-> Create a Client Secret in Certificates & secrets
-> Add permissions in API permissions
-> Fill Client ID / Client Secret / Tenant ID into ImgBed
-> Click Get Token
-> Copy the Refresh Token from the callback page
-> Paste it back into ImgBed and save
```

## 参考

1. Microsoft Entra app registration: https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-register-app
2. Microsoft identity platform の認可コードフロー: https://learn.microsoft.com/en-us/entra/identity-platform/v2-oauth2-auth-code-flow
3. Microsoft Graph ユーザー認証: https://learn.microsoft.com/en-us/graph/auth-v2-user
