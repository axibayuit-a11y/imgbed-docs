# Dropbox チャネルを追加する

## 先に必要なもの

| 必要なもの | 必要な理由 |
| --- | --- |
| Dropbox アカウント | サインインし、アプリを認可するために使用します。 |
| Dropbox アプリ | `App Key` と `App Secret` を生成するために使用します。 |
| ImgBed ドメイン | OAuth redirect URI に使用します。 |
| 利用可能な Dropbox ストレージ | 実際のファイル保存先として使用します。 |

## 設定手順

### 手順 1: Dropbox アプリを作成する

1. Dropbox App Console を開きます。

```text
https://www.dropbox.com/developers/apps
```

2. 新しいアプリを作成します。
3. アクセス種別では、次を選択します。

```text
App folder
```

4. `imgbed-app` など、識別しやすいアプリ名を付けます。
5. 作成後、アプリ詳細ページを開きます。

推奨アクセス種別:

| Access Type | 推奨 |
| --- | --- |
| `App folder` | 推奨。ImgBed のファイル保存方式と一致します。 |
| `Full Dropbox` | 非推奨。ImgBed にはアカウント全体へのアクセスは不要です。 |

![Dropbox アプリを作成する](../../image/upload/dropbox/开发者创建应用.png)

### 手順 2: Redirect URI を追加する

Dropbox アプリ詳細ページで OAuth または Redirect URI 設定を見つけ、次を追加します。

```text
https://your-domain.com/api/oauth/dropbox/callback
```

複数のドメインから管理パネルを使用する場合は、一致する callback URL をそれぞれ追加します。

![redirect URI を設定する](../../image/upload/dropbox/配置回调地址.png)

### 手順 3: アプリの権限を設定する

`Permissions` タブを開き、少なくとも次のスコープを有効にします。

| Scope | 必須 | 用途 |
| --- | --- | --- |
| `account_info.read` | 必須 | account と quota 情報を読み取ります。 |
| `files.metadata.read` | 必須 | パス確認のためにファイルとフォルダーのメタデータを読み取ります。 |
| `files.metadata.write` | 必須 | フォルダーを作成し、メタデータを書き込みます。 |
| `files.content.write` | 必須 | ファイルをアップロードします。このスコープがない場合、`required scope 'files.content.write'` が発生します。 |
| `files.content.read` | 推奨 | ダウンロード、プレビュー、一時ファイルリンクを許可します。 |

スコープを選択したら、ページ下部の `Submit` をクリックします。

![権限を追加する](../../image/upload/dropbox/添加对应的权限.png)

重要:

| 状況 | 対応 |
| --- | --- |
| スコープを変更した | トークン認可フローを再実行し、新しい `Refresh Token` を取得します。 |
| 再認可していない | 古い token には新しい権限が付与されないため、アップロードが引き続き失敗する可能性があります。 |

### 手順 4: アプリの認証情報をコピーする

Dropbox アプリページから次の 2 つの値を保存します。

| Dropbox 項目 | ImgBed 項目 |
| --- | --- |
| `App key` | `App Key` |
| `App secret` | `App Secret` |

### 手順 5: Dropbox チャネルを入力する

アップロード設定で `Dropbox` を選択し、次を入力します。

| ImgBed 項目 | 入力内容 |
| --- | --- |
| チャネル名 | 識別しやすい名前。例: `Main Dropbox` |
| App Key | Dropbox の `App key` |
| App Secret | Dropbox の `App secret` |
| Refresh Token | 今は空のままにします。 |
| Root directory | 任意。デフォルトは `imgbed` です。 |
| Note | 任意 |

![token を取得する](../../image/upload/dropbox/获取令牌.png)

### 手順 6: Refresh Token を取得する

1. ImgBed で `Get Token` をクリックします。
2. 接続する Dropbox アカウントでサインインします。
3. 認可プロンプトを承認します。
4. callback ページに `Refresh Token` が表示されます。
5. コピーします。
6. ImgBed に戻り、`Refresh Token` 項目に貼り付けます。

![token をコピーする](../../image/upload/dropbox/复制令牌.png)

## 確認方法

| 確認項目 | 期待される結果 |
| --- | --- |
| チャネルカード | 保存後、Dropbox チャネルが表示されます。 |
| チャネルスイッチ | チャネルを有効化できます。 |
| token 保存済み | 詳細ページに `Refresh Token` が保存済みであることが表示されます。 |
| アップロードテスト | テスト画像が Dropbox app folder に表示されます。 |

クォータ制限が有効な場合は、クォータ照会をクリックします。照会に成功すると、チャネルカードに使用済み容量、総容量、最終更新時刻が表示されます。

![quota 照会成功](../../image/upload/dropbox/查询额度成功.png)

## トラブルシューティング

| 問題 | 修正方法 |
| --- | --- |
| ImgBed が設定未完了と表示する | `App Key`、`App Secret`、`Refresh Token` がすべて入力されていることを確認します。 |
| 認可は成功するが `Refresh Token` が表示されない | もう一度 `Get Token` をクリックし、オフライン認可フローが使用されていることを確認します。 |
| `required scope 'files.content.write'` でアップロードが失敗する | `files.content.write` を有効にし、`Submit` をクリックしてから、新しい `Refresh Token` を取得します。 |
| Callback が失敗する | redirect URI が `https://your-domain.com/api/oauth/dropbox/callback` であることを確認します。 |
| ファイルが見つからない | Dropbox アプリが `App folder` mode で作成されていることを確認します。 |

## クイックフロー

```text
Open Dropbox App Console
-> Create an app
-> Choose App folder access
-> Add https://your-domain.com/api/oauth/dropbox/callback
-> Enable account_info.read / files.metadata.read / files.metadata.write / files.content.write
-> Optionally enable files.content.read
-> Click Submit
-> Copy App Key and App Secret
-> Fill them into ImgBed
-> Click Get Token
-> Copy the Refresh Token from the callback page
-> Paste it back into ImgBed and save
```

## 参考

1. Dropbox App Console: https://www.dropbox.com/developers/apps
2. Dropbox OAuth ガイド: https://developers.dropbox.com/oauth-guide
3. Dropbox 開発者ガイド: https://www.dropbox.com/developers/reference/developer-guide
