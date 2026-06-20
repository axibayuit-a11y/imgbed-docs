# Yandex チャンネルの追加

Yandex チャンネルは、Yandex Disk を ImgBed の保存先として利用します。

## 事前に用意するもの

| 必要なもの | 用途 |
| --- | --- |
| Yandex アカウント | Yandex Disk の認証に使います |
| Yandex OAuth App | Client ID と Client Secret を取得します |
| ImgBed ドメイン | OAuth コールバック URL に使います |
| Yandex Disk | 実際のファイル保存先 |

## Yandex OAuth App を作成する

次の URL を開きます。

```text
https://oauth.yandex.com/client/new
```

ログインを求められたら、保存先に使う Yandex アカウントでログインします。

新しいアプリを作成し、分かりやすい名前を付けます。

```text
imgbed-yandex
```

コールバック URL には次を設定します。

```text
https://あなたのドメイン/api/oauth/yandex/callback
```

## 権限を確認する

ImgBed の Yandex 連携では、`Yandex.Disk REST API` の次の権限を使います。

| 権限 | 用途 |
| --- | --- |
| `cloud_api:disk.app_folder` | アプリフォルダへファイルを保存 |
| `cloud_api:disk.read` | ファイルとダウンロードリンクを読み取り |
| `cloud_api:disk.write` | アップロード、ディレクトリ作成、削除 |
| `Access to information about Yandex.Disk` | 容量と使用量の確認 |

`Yandex ID API` の名前やメールアドレスの権限は、必要に応じて選択します。アップロード、削除、容量確認の中心は上記 4 つです。

![Yandex Disk 権限](../../image/upload/yandex/dataaccess配置软盘权限.png)

## Client ID と Secret を控える

アプリ作成後、次の値をコピーします。

| Yandex 側 | ImgBed 側 |
| --- | --- |
| `Client ID` | `Client ID` |
| `Client Secret` | `Client Secret` |

![Client ID と Secret](../../image/upload/yandex/记录客户端id和secret.png)

## ImgBed へ入力する

アップロード設定で `Yandex` を選びます。

| 項目 | 入力内容 |
| --- | --- |
| チャンネル名 | 例：`Yandex Main` |
| Client ID | Yandex App の Client ID |
| Client Secret | Yandex App の Client Secret |
| Refresh Token | まずは空欄 |
| ルートディレクトリ | 任意。通常は `imgbed` |

![Yandex 設定](../../image/upload/yandex/编辑配置渠道.png)

## Refresh Token を取得する

1. ImgBed で「Token を取得」をクリックします。
2. 保存先に使う Yandex アカウントでログインします。
3. 権限を許可します。
4. コールバックページに表示された `Refresh Token` をコピーします。
5. ImgBed の `Refresh Token` 欄に貼り付けます。

![Refresh Token](../../image/upload/yandex/授权后复制刷新令牌.png)

## クイック手順

```text
Yandex OAuth Console を開く
-> App を作成
-> https://あなたのドメイン/api/oauth/yandex/callback を設定
-> Disk 権限を確認
-> Client ID / Client Secret をコピー
-> ImgBed に入力
-> Token を取得
-> Refresh Token を貼り付けて保存
```

## 参考

1. Yandex アプリ登録: https://yandex.com/dev/id/doc/en/register-client
2. 認可コード URL: https://yandex.com/dev/id/doc/en/codes/code-url
3. OAuth Token API: https://yandex.com/dev/id/doc/en/tokens/token
