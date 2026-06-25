# pCloud チャネルを追加する

## 適している場合

- pCloud アカウントがあり、ImgBed の画像を pCloud に保存したい。
- pCloud アカウントのメールアドレスとパスワードをチャネル認証情報として使用しても問題ない。

## 始める前に必要なもの

| 必要なもの | 必要な理由 |
| --- | --- |
| pCloud アカウントのメールアドレス | pCloud API へのサインインに使用します。 |
| pCloud パスワード | pCloud API へのサインインに使用します。 |
| API host | デフォルトは `api.pcloud.com` です。EU アカウントでは `eapi.pcloud.com` を使用できます。 |
| Storage directory | ファイルの保存先です。デフォルトは `imgbed` です。 |

## 追加する場所

1. システム設定を開きます。
2. アップロード設定を開きます。
3. 右上の `Add Channel` をクリックします。
4. `pCloud` を選択します。

## 項目リファレンス

| 項目 | 目的 | 必須 |
| --- | --- | --- |
| チャネル名 | この pCloud チャネルを識別します。例: `Personal pCloud` | はい |
| Account email | pCloud のログインメールアドレス | はい |
| Password | pCloud パスワード | はい |
| API host | pCloud API host。デフォルトは `api.pcloud.com` です。 | いいえ |
| Storage directory | ファイル保存に使用する directory。デフォルトは `imgbed` です。 | いいえ |

アカウントのリージョンに応じて API host を選択します。

| アカウントリージョン | API Host |
| --- | --- |
| デフォルト / US | `api.pcloud.com` |
| ヨーロッパ | `eapi.pcloud.com` |

## 設定手順

1. アップロード設定を開きます。
2. `Add Channel` をクリックします。
3. `pCloud` を選択します。
4. 識別しやすいチャネル名を入力します。
5. pCloud アカウントのメールアドレスを入力します。
6. pCloud パスワードを入力します。
7. API host は `api.pcloud.com` のままにするか、EU アカウントの場合は `eapi.pcloud.com` を使用します。
8. storage directory は `imgbed` のままにするか、任意のフォルダーに変更します。
9. チャネルを保存します。

![チャネルを設定する](../../image/upload/pcloud/配置渠道.png)

## 確認方法

| 確認項目 | 期待される結果 |
| --- | --- |
| チャネルカード | 保存後、pCloud チャネルカードが表示されます。 |
| チャネルスイッチ | カード上のスイッチが有効のままになります。 |
| メールアドレス表示 | カードに接続済みの pCloud メールアドレスが表示されます。 |
| quota 照会 | 照会に成功すると、使用済み容量と総容量が表示されます。 |
| アップロードテスト | テスト画像が設定済みの pCloud storage directory に表示されます。 |

![quota 照会成功](../../image/upload/pcloud/查询额度成功.png)

## トラブルシューティング

### なぜ OAuth2 ではないのですか?

pCloud OAuth2 は、デフォルトではセルフサービスで有効にできません。pCloud に email を送り、有効化を依頼する必要があります。

また、現在の pCloud OAuth2 フローは、ImgBed が必要とする短時間有効なアップロードリンクのワークフローをサポートしていません。そのため、このチャネルではアカウントのメールアドレスとパスワードによるログインを使用します。

### どの API Host を使うべきですか?

デフォルト:

```text
api.pcloud.com
```

EU アカウントの場合:

```text
eapi.pcloud.com
```

## クイックフロー

```text
Prepare your pCloud email and password
-> Open Upload Settings
-> Add Channel
-> Choose pCloud
-> Fill channel name / email / password
-> Keep API host as api.pcloud.com unless your account is in Europe
-> Keep storage directory as imgbed unless you need another folder
-> Save
-> Query quota
-> Upload a test image
```
