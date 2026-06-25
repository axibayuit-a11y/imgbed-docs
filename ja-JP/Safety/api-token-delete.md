# API Token でファイルを削除する

API Token 削除スクリプトは、スクリプト、自動化タスク、外部プログラムから ImgBed のファイルを削除するためのものです。管理画面を開かなくても、サイト URL、Token、削除対象の明確なファイル ID を指定すれば、ImgBed 内の 1 件または複数件のファイルを削除できます。

削除は書き込み操作です。コマンドを実行すると、実際に削除が行われます。先に `imgbed-token-list.mjs` で削除対象の `fileId` を確認し、その ID を削除スクリプトへ渡してください。

![API Token の編集](../../image/Safety/apitoken/编辑api%20token.png)

## 事前準備

管理画面で次の場所を開きます。

```text
System Settings -> Security Settings -> API Token
```

API Token を作成または編集するときは、その Token に削除権限があることを確認してください。このスクリプトに必要な権限は `delete` だけです。

Token は環境変数にも設定できます。

```powershell
$env:IMGBED_API_TOKEN="your API Token"
```

## 削除スクリプトをダウンロードする

| スクリプト | 用途 |
| --- | --- |
| <a href="/tools/imgbed-token-delete.mjs" download>ファイル削除スクリプトをダウンロード</a> | 明示的に指定した 1 件または複数件のファイル ID を削除します |

実行には Node.js 18 以上が必要です。

## 削除 API の動作

削除スクリプトは、バックエンドの削除 API を呼び出します。

```text
POST /api/manage/delete/batch
```

リクエストには API Token が必要です。

```text
Authorization: Bearer <token>
```

リクエスト本文の例:

```json
{
  "fileIds": ["photos/2026/a.txt"],
  "deleteStrictness": "strict"
}
```

`fileIds` に 1 件だけ入っていれば単一ファイルの削除、複数件入っていれば一括削除になります。バックエンドは 1 回のリクエストで最大 15 件まで処理します。スクリプトは `--batch-size` に従って、自動的に複数のリクエストへ分割します。

API は NDJSON の進行状況ストリームを返します。よく使われるイベントには `batch_start`、`file_step`、`file_done`、`batch_complete`、`batch_error` があります。スクリプトはこれらのイベントを解析し、読みやすい結果または JSON の結果としてまとめます。

削除が成功すると、バックエンドはファイル索引、ディレクトリ統計、容量統計、キャッシュ削除も自動で処理します。

## 削除スクリプトのパラメータ

| パラメータ | 必須 | 説明 |
| --- | --- | --- |
| `--base-url <url>` | はい | ImgBed サイトの URL。例: `https://image.ai6.me` |
| `--token <token>` | はい | API Token。`IMGBED_API_TOKEN` 環境変数も使えます。 |
| `--file-id <id>` | はい | 削除するファイル ID。複数回指定できます。 |
| `--strictness <strict\|soft>` | いいえ | 削除の厳格さ。既定は `strict`。 |
| `--batch-size <n>` | いいえ | 1 回のリクエストで削除する件数。既定は `15`、最大も `15`。 |
| `--retries <n>` | いいえ | 一時的な失敗時の再試行回数。既定は `3`。 |
| `--timeout-ms <n>` | いいえ | 1 回のリクエストのタイムアウト。既定は `180000`。 |
| `--output <pretty\|json>` | いいえ | 出力形式。既定は `pretty`。 |
| `--save-response <path>` | いいえ | 最終結果を JSON ファイルに保存します。 |
| `-h` / `--help` | いいえ | スクリプトのヘルプを表示します。 |

このスクリプトが削除するのは、`--file-id` で明示的に渡したものだけです。あいまい検索は行いません。ディレクトリ単位の一括削除、カンマ区切りリストからの読み取り、ローカルファイルからの削除 ID 読み込みにも対応していません。

## 厳格削除とソフト削除

| モード | 説明 |
| --- | --- |
| `strict` | 既定のモードです。リモートストレージ側の削除に失敗した場合、ImgBed の記録は残ります。後から再試行や調査がしやすくなります。 |
| `soft` | リモートストレージ側の削除に失敗しても、ImgBed の記録を続けて削除し、結果に警告を返します。 |

「リモート上のファイルまで削除できた場合だけ成功にしたい」ときは、既定の `strict` を使ってください。リモート側ではもう削除できないものの、ImgBed の記録だけを片付けたい場合は `soft` を使えます。

## 使用例

単一ファイルを削除する:

```powershell
node imgbed-token-delete.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --file-id "photos/2026/a.txt"
```

環境変数の Token を使う:

```powershell
$env:IMGBED_API_TOKEN="your API Token"

node imgbed-token-delete.mjs `
  --base-url "https://your-domain" `
  --file-id "photos/2026/a.txt"
```

複数ファイルを削除する:

```powershell
node imgbed-token-delete.mjs `
  --base-url "https://your-domain" `
  --file-id "photos/2026/a.txt" `
  --file-id "photos/2026/b.txt" `
  --file-id "photos/2026/c.txt"
```

リモート側の削除に失敗しても ImgBed の記録を削除する:

```powershell
node imgbed-token-delete.mjs `
  --base-url "https://your-domain" `
  --file-id "photos/2026/a.txt" `
  --strictness soft
```

JSON で出力し、結果を保存する:

```powershell
node imgbed-token-delete.mjs `
  --base-url "https://your-domain" `
  --file-id "photos/2026/a.txt" `
  --output json `
  --save-response ".\delete-result.json"
```

1 回のリクエストで削除する件数を 5 件に制限する:

```powershell
node imgbed-token-delete.mjs `
  --base-url "https://your-domain" `
  --file-id "photos/2026/a.txt" `
  --file-id "photos/2026/b.txt" `
  --batch-size 5
```

## 削除前に fileId を確認する

削除スクリプトに必要なのは ImgBed のファイル ID です。先に一覧取得スクリプトで、ディレクトリ内のファイルを確認できます。

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --dir "photos/2026" `
  --count 10 `
  --output json
```

戻り値の `name` は、通常そのまま削除スクリプトへ渡せる `fileId` です。

## よくある質問

### 削除に失敗したのに、ファイルが一覧に残っているのはなぜですか？

既定の `strict` を使っている場合、リモートストレージ側の削除に失敗すると ImgBed の記録は残ります。ローカル索引だけが消えて、リモート上のファイルが残る状態を避けるためです。ImgBed の記録だけを削除してよいと確認できたら、同じ `fileId` に対して `soft` で再試行してください。

### 結果に警告が含まれるのはなぜですか？

警告は通常、リモート削除、キャッシュ削除、統計処理の後始末で致命的ではない問題があったことを示します。スクリプトは警告をまとめて表示するので、再試行が必要かどうかを判断できます。

### ディレクトリ単位でまとめて削除できますか？

このスクリプトには、ディレクトリを空にする機能はありません。先に一覧取得スクリプトで明確な `fileId` を絞り込み、削除したいファイルを 1 件ずつ削除スクリプトへ渡してください。

