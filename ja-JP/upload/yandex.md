# Yandex チャネルを追加する

## 先に必要なもの

| 必要なもの | 必要な理由 |
| --- | --- |
| Yandex アカウント | サインインし、Yandex Disk を認可するために使用します。 |
| Yandex OAuth アプリ | `Client ID` と `Client Secret` を生成するために使用します。 |
| ImgBed ドメイン | OAuth redirect URI に使用します。 |
| 利用可能な Yandex Disk ストレージ | 実際のファイル保存先として使用します。 |

## 設定手順

### 手順 1: Yandex OAuth アプリを作成する

1. Yandex OAuth アプリ作成ページを開きます。

```text
https://oauth.yandex.com/client/new
```

2. サインイン画面にリダイレクトされた場合は、先に Yandex アカウントでサインインします。
3. 新しいアプリを作成します。
4. アプリに識別しやすい名前を付けます。例: `imgbed-yandex`。
5. callback または redirect URL の設定を見つけます。
6. 次を入力します。

```text
https://your-domain.com/api/oauth/yandex/callback
```

### 手順 2: 権限を確認する

現在の ImgBed Yandex 連携では、`Yandex.Disk REST API` の下で次の 4 つの権限を保持します。

| 権限 | 目的 |
| --- | --- |
| `cloud_api:disk.app_folder` | ImgBed が app folder にファイルを保存できるようにします。 |
| `cloud_api:disk.read` | ファイルとダウンロードリンクを読み取ります。 |
| `cloud_api:disk.write` | ファイルのアップロード、フォルダーの作成、ファイルの削除を行います。 |
| `Access to information about Yandex.Disk` | ディスククォータと使用済み容量を読み取ります。 |

`Yandex ID API` の下に次の権限も表示される場合、それらは任意です。

| 権限テキスト | 推奨 |
| --- | --- |
| `Access to username, first name and surname, gender` | 任意 |
| `Access to email address` | 任意 |

アップロード、download、削除、quota の中核機能は、主に上記 4 つの `Yandex.Disk REST API` 権限に依存します。

![Yandex Disk 権限を設定する](../../image/upload/yandex/dataaccess配置软盘权限.png)

### 手順 3: アプリ認証情報をコピーする

アプリが作成されたら、次をコピーします。

| Yandex 項目 | ImgBed 項目 |
| --- | --- |
| `Client ID` | `Client ID` |
| `Client Secret` | `Client Secret` |

![Client ID と Secret を記録する](../../image/upload/yandex/记录客户端id和secret.png)

### 手順 4: Yandex チャネルを入力する

アップロード設定で `Yandex` を選択し、次を入力します。

| ImgBed 項目 | 入力内容 |
| --- | --- |
| チャネル名 | 識別しやすい名前。例: `Main Yandex` |
| Client ID | Yandex app の `Client ID` |
| Client Secret | Yandex app の `Client Secret` |
| Refresh Token | 今は空のままにします。 |
| Root directory | 任意。デフォルトは `imgbed` です。 |

![チャネル設定を編集する](../../image/upload/yandex/编辑配置渠道.png)

### 手順 5: Refresh Token を取得する

1. ImgBed で `Get Token` をクリックします。
2. 接続する Yandex アカウントでサインインします。
3. 認可プロンプトを承認します。
4. callback ページに `Refresh Token` が表示されます。
5. コピーします。
6. ImgBed に戻り、`Refresh Token` 項目に貼り付けます。

![認可後に refresh token をコピーする](../../image/upload/yandex/授权后复制刷新令牌.png)

### 手順 6: チャネルを保存する

すべての項目を入力したら、チャネルを保存します。

## クイックフロー

```text
Open Yandex OAuth Console
-> Create an app
-> Add https://your-domain.com/api/oauth/yandex/callback
-> Confirm Yandex Disk permissions
-> Copy Client ID and Client Secret
-> Fill Client ID / Client Secret into ImgBed
-> Click Get Token
-> Copy the Refresh Token from the callback page
-> Paste it back into ImgBed and save
```

## 参考

1. Yandex app を登録する: https://yandex.com/dev/id/doc/en/register-client
2. URL から認可コードを取得する: https://yandex.com/dev/id/doc/en/codes/code-url
3. Yandex OAuth token endpoint: https://yandex.com/dev/id/doc/en/tokens/token
