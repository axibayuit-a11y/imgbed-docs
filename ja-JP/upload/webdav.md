# WebDAV チャネルを追加する

## 適している場合

WebDAV チャネルは、次の場合に使用します。

- WebDAV エンドポイントを提供する NAS、クラウドドライブ、またはオブジェクトストレージサービスがある。
- アップロードした画像を自分の WebDAV ディレクトリに保存したい。
- 認証情報を frontend に長期間露出させるのではなく、D1 の `upload_channels` テーブルに保存したい。

## 始める前に必要なもの

| 必要なもの | 用途 |
| --- | --- |
| WebDAV Endpoint | サーバー側の WebDAV URL。例: `https://nas.example.com/dav`. |
| Username | WebDAV サービスへのサインインに使用します。 |
| Password | WebDAV サービスへのサインインに使用します。 |
| Authentication mode | デフォルトは `Basic` です。サーバーが要求する場合のみ `Digest` または自動ネゴシエーションを使用します。 |
| Storage directory | ファイル保存に使用するディレクトリ。デフォルトは `imgbed` です。 |

## 追加する場所

1. システム設定を開きます。
2. アップロード設定に移動します。
3. 右上のチャネル追加をクリックします。
4. `WebDAV` を選択します。

## 項目リファレンス

| 項目 | 役割 | 必須 |
| --- | --- | --- |
| チャネル名 | この WebDAV チャネルを識別しやすい名前。例: `koofr`、`nas`。 | はい |
| Endpoint | `https://` を含む完全な WebDAV エンドポイント。 | はい |
| Username | WebDAV ログインユーザー名。 | はい |
| Password | WebDAV ログインパスワード。 | はい |
| Authentication mode | 通常は `Basic` です。サーバーが digest authentication を要求する場合は `Digest` を使用します。 | はい |
| Storage directory | ファイルを保存するディレクトリ。デフォルトは `imgbed` です。 | いいえ |

## 例: fie.nl.tab.digital

### 1. App Password を作成する

アカウントのセキュリティ設定を開き、アプリケーションパスワードを見つけて、新しいアプリパスワードを作成します。

![アプリパスワードを作成する](../../image/upload/webdav/创建应用密码.png)

作成後、新しいアプリパスワードをすぐにコピーして保存します。通常、一度しか表示されません。

![新しいアプリパスワードを保存する](../../image/upload/webdav/记住新应用程序密码.png)

### 2. ImgBed に WebDAV 設定を入力する

ImgBed に戻り、WebDAV チャネルを追加します。

| UI 項目 | 値 |
| --- | --- |
| Endpoint | `https://fie.nl.tab.digital/` から提供される WebDAV URL。 |
| Username | WebDAV のユーザー名。 |
| Password | 先ほど作成したアプリパスワード。 |
| Authentication mode | 多くの場合は `Basic` から始めます。 |
| Storage directory | デフォルトは `imgbed` です。カスタムディレクトリも使用できます。 |

![設定を入力する](../../image/upload/webdav/填写配置.png)

## 大容量ファイルのアップロード動作

WebDAV チャネルでは、現在、実際のセッションベースのチャンクアップロードを使用します。

小さいファイルは 1 つの完全なファイルとしてアップロードされます。64 MiB を超えるファイルは、約 10 MiB のチャンクに自動分割され、リモートのチャンクディレクトリにアップロードされます。

WebDAV サービスは `partial update` や offset-based writes をサポートする必要はありません。ImgBed はリモートサーバー上でチャンクを 1 つの大きなファイルに結合しません。代わりにチャンクマニフェストを保存し、ファイルが要求されたときにチャンクを順番に読み取ります。

実際の動作は次のとおりです。

| ファイルサイズ | アップロード方式 | リモートストレージの配置 |
| --- | --- | --- |
| 64 MiB 以下 | 通常アップロード | 1 つの完全なファイル |
| 64 MiB 超 | 実際のセッションチャンクアップロード | 複数のチャンクファイルを含むチャンクディレクトリ |

チャンクディレクトリが影響するのはリモートストレージの配置だけです。ImgBed のファイル URL は変わりません。利用者は引き続き元の `/file/...` リンクからファイルにアクセスします。

## 設定手順

1. アップロード設定を開きます。
2. チャネル追加をクリックします。
3. `WebDAV` を選択します。
4. 識別しやすいチャネル名を入力します。例: `koofr`。
5. WebDAV エンドポイントを入力します。例: `https://app.koofr.net/dav/Koofr`.
6. ユーザー名とパスワードを入力します。
7. authentication mode はデフォルトの `Basic` のままにします。
8. storage directory は `imgbed` のままにするか、自分のディレクトリに変更します。
9. 保存をクリックします。
10. 保存後、チャネルカードを確認し、利用可能であれば容量を照会し、テストファイルをアップロードします。

## 確認方法

| 確認項目 | 確認方法 |
| --- | --- |
| チャネルカードが表示される | 保存後、アップロード設定ページに WebDAV チャネルカードが表示されます。 |
| チャネルが有効 | カード右上のスイッチがオンのままになります。 |
| 認証情報が保存されている | 詳細ビューに Endpoint、username、authentication mode、storage directory が表示されます。 |
| 小さいファイルのアップロードが機能する | テスト画像をアップロードし、WebDAV ディレクトリにファイルが表示されることを確認します。 |
| 大容量ファイルのルールが機能する | 64 MiB を超えるファイルはチャンクアップロードを使用し、リモートのチャンクディレクトリを作成します。 |
| 容量照会が機能する | サーバーが容量情報をサポートしている場合、照会により使用済み容量と総容量が表示されます。 |

![quota 照会成功](../../image/upload/webdav/查询额度成功.png)

## FAQ

### 大きな WebDAV ファイルでチャンクディレクトリが作成されるのはなぜですか?

これは現在の大容量ファイル向けストレージ方式です。

64 MiB を超えるファイルは、1 つの大きなリモートファイルには結合されません。チャンクディレクトリとして保存されます。ImgBed はチャンクマニフェストを記録し、チャンクを順番に読み取って完全な内容を返します。

### 大容量ファイルのアップロードが失敗した場合、最初に何を確認すべきですか?

まず Endpoint、username、password、storage directory を確認します。次に、WebDAV サービスがディレクトリ作成、ファイル書き込み、ファイル読み取りを許可していることを確認します。

容量照会が失敗しても小さいファイルのアップロードが機能する場合、サーバーが容量レポートをサポートしていない、または制限しているだけの可能性があります。必ずしもアップロードが利用できないという意味ではありません。

### どの authentication mode を使うべきですか?

`Basic` から始めます。

サーバーが digest authentication を明示的に要求する場合は、`Digest` を使用します。

不明な場合は、自動ネゴシエーションを使用します。

## クイックチェックリスト

```text
Prepare WebDAV endpoint, username, and password
-> Open Upload Settings
-> Add Channel
-> Select WebDAV
-> Enter Endpoint / username / password
-> Keep authentication mode as Basic by default
-> Keep storage directory as imgbed by default
-> Save
-> Query capacity
-> Upload a test file
```
