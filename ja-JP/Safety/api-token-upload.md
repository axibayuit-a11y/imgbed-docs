# API Token でファイルをアップロードする

API Token アップロードは、スクリプト、自動化タスク、外部プログラムから ImgBed にファイルを送るための機能です。Web 画面を開かなくても、サイト URL、Token、ローカルファイルのパス、実際のアップロードチャンネルを指定すれば、アップロード後にファイル URL を取得できます。

![API Token の編集](../../image/Safety/apitoken/编辑api token.png)

## 事前準備

管理画面で次の場所を開きます。

```text
System Settings -> Security Settings -> API Token
```

API Token を作成または編集するときは、アップロード権限を付与し、実在する既定アップロードチャンネルを選んでください。API Token アップロードでは「スマート分配」入口を使いません。スクリプトから呼び出す場合も、実際のチャンネルを指定します。

## アップロードスクリプトをダウンロードする

ドキュメントには 2 つの Node.js スクリプトが用意されています。

| スクリプト | 用途 |
| --- | --- |
| <a href="/tools/imgbed-token-single-upload.mjs" download>単発アップロードスクリプトをダウンロード</a> | `/upload` を 1 回だけ呼びます。小さなファイルや接続確認に向いています。 |
| <a href="/tools/imgbed-token-chunk-upload.mjs" download>分割アップロードスクリプトをダウンロード</a> | API Token の分割、直アップロード、または各プラットフォームのアップロードセッションを使います。大きなファイル向けです。 |

実行には Node.js 18 以上が必要です。

## 利用できるチャンネルを確認する

どちらのスクリプトでも、現在の API Token で使えるアップロードチャンネルを先に確認できます。

```powershell
node imgbed-token-single-upload.mjs --base-url "https://your-domain" --token "your API Token" --list-channels
node imgbed-token-chunk-upload.mjs --base-url "https://your-domain" --token "your API Token" --list-channels
```

チャンネル一覧を取得するだけなら、`--file` と `--channel` は不要です。返される内容には、既定アップロードチャンネル、大チャンネルのキー、子チャンネル名、負荷分散の状態が含まれます。秘密鍵、更新トークンなどの機密設定は返されません。

## どちらのアップロード方式を使うか

| 方式 | 向いている場面 | 説明 |
| --- | --- | --- |
| 単発アップロード | 小さなファイル、簡単なスクリプト、接続テスト | ファイル全体を 1 つのリクエストで `/upload` に送ります。 |
| 分割アップロード | 大きなファイル、タイムアウトしやすいファイル | チャンネルごとの分割、直アップロード、アップロードセッションをスクリプトが処理します。 |

大きなファイルでは、まず分割アップロードスクリプトを使ってください。単発アップロードは Cloudflare のリクエストサイズ、Worker のメモリ、各チャンネル側の制限を受けます。

## 単発アップロード

単発アップロードスクリプトは `/upload` へ 1 回だけリクエストします。

```powershell
node imgbed-token-single-upload.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --file "D:\test\image.png" `
  --channel s3 `
  --folder "photos/2026"
```

Token は環境変数にも設定できます。

```powershell
$env:IMGBED_API_TOKEN="your API Token"
node imgbed-token-single-upload.mjs --base-url "https://your-domain" --file "D:\test\image.png" --channel s3
```

### 単発アップロードのパラメータ

| パラメータ | 必須 | 説明 |
| --- | --- | --- |
| `--base-url <url>` | はい | ImgBed サイトの URL。例: `https://image.ai6.me` |
| `--token <token>` | はい | API Token。`IMGBED_API_TOKEN` 環境変数も使えます。 |
| `--file <path>` | はい | ローカルファイルのパス。 |
| `--channel <key>` | はい | アップロードチャンネル。 |
| `--folder <path>` | いいえ | アップロード先フォルダ。例: `photos/2026` または `/user/` |
| `--name-type <type>` | いいえ | 命名方式。サーバー側の `uploadNameType` に対応します。既定は `default`。 |
| `--channel-name <name>` | いいえ | 子チャンネルまたはアカウントを指定します。省略時はサーバー側の設定に従います。 |
| `--retries <n>` | いいえ | 一時的な失敗時の再試行回数。既定は `3`。 |
| `--timeout-ms <n>` | いいえ | 1 回のリクエストのタイムアウト。既定は `180000`。 |
| `--output <pretty\|json>` | いいえ | 出力形式。既定は `pretty`。 |
| `--save-response <path>` | いいえ | 最終レスポンスを JSON ファイルに保存します。 |
| `--list-channels` | いいえ | 現在の Token で使えるチャンネルだけを表示し、アップロードは行いません。 |

### 単発アップロードのチャンネル

| チャンネルキー | チャンネル |
| --- | --- |
| `telegram` / `tg` | Telegram |
| `discord` / `dc` | Discord |
| `cfr2` / `r2` | Cloudflare R2 |
| `s3` | S3 |
| `webdav` / `wd` | WebDAV ストレージチャンネル |
| `github` / `gh` | GitHub Releases |
| `gitlab` / `gl` | GitLab Packages |
| `huggingface` / `hf` | Hugging Face |
| `onedrive` / `od` | OneDrive |
| `googledrive` / `google` / `gd` | Google Drive |
| `dropbox` / `db` | Dropbox |
| `yandex` / `yx` | Yandex Disk |
| `pcloud` / `pd` | pCloud |

### 単発アップロードのサイズ制限

単発アップロードでは、できるだけ 1 ファイル 100 MB 未満にしてください。

次のチャンネルには、単発 `/upload` の明示的なブロック閾値があります。

| チャンネル | 単発アップロード上限 |
| --- | ---: |
| Telegram | 20 MiB |
| Discord | 10 MiB |
| S3 | 64 MiB |
| WebDAV | 64 MiB |
| GitHub Releases | 64 MiB |
| GitLab Packages | 64 MiB |

上限を超える場合、スクリプトはローカルで対応するエラーを表示します。他のチャンネルについては、スクリプト側に 100 MB の固定ローカル制限はありません。リクエスト本体が Cloudflare やプラットフォーム側の能力を超えた場合は、Cloudflare またはリモート側からエラーが返ります。

## 分割アップロード

分割アップロードスクリプトは、まず API Token でサーバー側にアップロード先を解決させ、その後チャンネルに合った大容量アップロード手順を実行します。分割セッション、結合、完了リクエストを自分で実装する必要はありません。

```powershell
node imgbed-token-chunk-upload.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --file "D:\test\video.zip" `
  --channel github `
  --folder "photos/2026" `
  --concurrency 3
```

### 分割アップロードのパラメータ

| パラメータ | 必須 | 説明 |
| --- | --- | --- |
| `--base-url <url>` | はい | ImgBed サイトの URL。 |
| `--token <token>` | はい | API Token。`IMGBED_API_TOKEN` 環境変数も使えます。 |
| `--file <path>` | はい | ローカルファイルのパス。 |
| `--channel <key>` | はい | アップロードチャンネル。 |
| `--folder <path>` | いいえ | アップロード先フォルダ。 |
| `--name-type <type>` | いいえ | 命名方式。サーバー側の `uploadNameType` に対応します。既定は `default`。 |
| `--channel-name <name>` | いいえ | 子チャンネルまたはアカウントを指定します。省略時はサーバー側の設定に従います。 |
| `--concurrency <n>` | いいえ | 並列アップロード数。既定は `1`、最大 `3`。 |
| `--retries <n>` | いいえ | 一時的な失敗時の再試行回数。既定は `3`。 |
| `--timeout-ms <n>` | いいえ | 各リクエストのタイムアウト。既定は `180000`。 |
| `--output <pretty\|json>` | いいえ | 出力形式。既定は `pretty`。 |
| `--save-response <path>` | いいえ | 最終レスポンスを JSON ファイルに保存します。 |
| `--list-channels` | いいえ | 現在の Token で使えるチャンネルだけを表示し、アップロードは行いません。 |

### 分割アップロードのチャンネル

| チャンネルキー | アップロード経路 |
| --- | --- |
| `telegram` / `tg` | `/upload` の実分割セッション |
| `discord` / `dc` | `/upload` の実分割セッション |
| `cfr2` / `r2` | `/upload` の実分割セッション |
| `github` / `gh` | `/upload` の実分割セッション |
| `gitlab` / `gl` | `/upload` の実分割セッション |
| `webdav` / `wd` | `/upload` の実分割セッション |
| `s3` | S3 マルチパートアップロード |
| `onedrive` / `od` | OneDrive アップロードセッション |
| `googledrive` / `google` / `gd` | Google Drive の再開可能アップロード |
| `dropbox` / `db` | Dropbox アップロードセッション |
| `yandex` / `yx` | Yandex 直アップロード URL |
| `pcloud` / `pd` | pCloud アップロードリンク |
| `huggingface` / `hf` | Hugging Face LFS アップロード |

Yandex は、圧縮ファイルのサンプルで不安定な結果が出ています。非圧縮ファイルはアップロードできることを確認済みです。

## 戻り値

アップロードに成功すると、スクリプトは次のように出力します。

```text
success
src: /file/photos/2026/example.png
url: https://your-domain/file/photos/2026/example.png
fileId: photos/2026/example.png
```

| フィールド | 説明 |
| --- | --- |
| `src` | サイト内のファイルパス。 |
| `url` | 完全なアクセス URL。自分のスクリプトやデータベースにそのまま保存できます。 |
| `fileId` | ファイル ID。後から検索、管理、記録するときに使います。 |
| `channelName` | 分割スクリプトでは、実際に使われた子チャンネルまたはアカウント名が返る場合があります。 |

`--output json` を指定すると、プログラムで扱いやすい完全な JSON が出力されます。

## 単発アップロード API を直接呼び出す

スクリプトを使わず、単発アップロード API を直接呼び出すこともできます。

```text
POST https://your-domain/upload?uploadChannel=s3&uploadFolder=photos/2026&uploadNameType=default
Authorization: Bearer your API Token
Content-Type: multipart/form-data
```

フォームフィールド:

| フィールド | 必須 | 説明 |
| --- | --- | --- |
| `file` | はい | アップロードするファイル。 |

クエリパラメータ:

| パラメータ | 必須 | 説明 |
| --- | --- | --- |
| `uploadChannel` | はい | 実際のアップロードチャンネル。 |
| `uploadFolder` | いいえ | アップロード先フォルダ。 |
| `uploadNameType` | いいえ | 命名方式。 |
| `channelName` | いいえ | 子チャンネルまたはアカウントを指定します。 |

成功時のレスポンス例:

```json
{
  "success": true,
  "src": "/file/photos/2026/example.png",
  "url": "https://your-domain/file/photos/2026/example.png",
  "fileId": "photos/2026/example.png"
}
```

## よくある質問

### 大きなファイルの単発アップロードが失敗する

単発 `/upload` はファイル全体を 1 つのリクエストで送ります。大きなファイルは Cloudflare またはリモートプラットフォームにブロックされることがあります。大きなファイルでは分割アップロードスクリプトを使ってください。

### `--channel-name` を指定しても失敗する

管理画面で、そのチャンネルに同じ名前の子チャンネルが存在し、有効になっているか確認してください。`--channel-name` を省略した場合、サーバー側はそのチャンネルの設定に従って利用可能なアカウントを選びます。

### 結果を別のプログラムで使いたい

`--output json` を使うか、`--save-response result.json` を追加してください。保存された JSON の `url` フィールドから完全なファイル URL を取得できます。

### Yandex でアーカイブをアップロードできない

Yandex はアーカイブ形式に対応していません。これはプラットフォーム側のポリシーによる可能性があります。Yandex チャンネルを使う場合は、可能であれば非アーカイブファイルをアップロードしてください。

