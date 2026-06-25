# API Token で一覧取得と絞り込みを行う

API Token 一覧取得スクリプトは、スクリプト、自動化タスク、外部プログラムから ImgBed のデータを読み取るためのものです。使用する権限は `list` だけです。ファイルのアップロード、削除、設定変更、特定 IP のアップロード禁止や許可は行いません。

![API Token の編集](../../image/Safety/apitoken/编辑列出权限api.png)

主な用途:

| 機能 | 説明 |
| --- | --- |
| ファイル管理の一覧取得 | 管理画面のファイル一覧を読み取り、ファイル管理で使う高度な絞り込みパラメータにも対応します |
| ユーザー管理の一覧取得 | ユーザー/IP のアップロード統計を読み取り、ユーザー管理で使う絞り込みパラメータにも対応します |
| アップロードチャンネル一覧 | 秘密情報を除いたアップロードチャンネル、子チャンネル、容量、負荷分散情報を読み取ります |
| ディレクトリ統計表 | ディレクトリ統計とディレクトリのページング情報を読み取ります |

## 事前準備

管理画面で次の場所を開きます。

```text
System Settings -> Security Settings -> API Token
```

API Token を作成または編集するときは、その Token に一覧取得権限があることを確認してください。このスクリプトに必要な権限は `list` だけです。

Token は環境変数にも設定できます。

```powershell
$env:IMGBED_API_TOKEN="your API Token"
```

## 一覧取得スクリプトをダウンロードする

| スクリプト | 用途 |
| --- | --- |
| <a href="/tools/imgbed-token-list.mjs" download>一覧取得と絞り込みスクリプトをダウンロード</a> | ファイル管理の一覧取得、ユーザー管理の一覧取得、アップロードチャンネル一覧、ディレクトリ統計表 |

実行には Node.js 18 以上が必要です。

## 共通パラメータ

| パラメータ | 必須 | 説明 |
| --- | --- | --- |
| `--base-url <url>` | はい | ImgBed サイトの URL。例: `https://image.ai6.me` |
| `--token <token>` | はい | API Token。`IMGBED_API_TOKEN` 環境変数も使えます。 |
| `--retries <n>` | いいえ | 一時的な失敗時の再試行回数。既定は `3`。 |
| `--timeout-ms <n>` | いいえ | 1 回のリクエストのタイムアウト。既定は `180000`。 |
| `--output <pretty\|json>` | いいえ | 出力形式。既定は `pretty`。プログラムから扱う場合は `json` を推奨します。 |
| `--save-response <path>` | いいえ | 最終結果を JSON ファイルに保存します。 |
| `-h` / `--help` | いいえ | スクリプトのヘルプを表示します。 |

## ファイル管理の一覧取得

ファイル管理内のファイルを一覧取得する:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --count 10
```

JSON で出力する:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --count 10 `
  --output json
```

現在の絞り込み条件に合う件数だけを読み取る:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --file-summary `
  --dir "photos/2026" `
  --recursive
```

### ファイル管理パラメータ

| パラメータ | 説明 |
| --- | --- |
| `--files` | ファイルを一覧取得します |
| `--file-summary` | 件数の統計だけを読み取ります |
| `--start <n>` | ページングの開始位置 |
| `--count <n>` | 返す件数 |
| `--dir <path>` | ディレクトリを指定します |
| `--recursive` | サブディレクトリ内のファイルも含めます |
| `--search <text>` | キーワードで検索します |
| `--channel <key>` | アップロードの大チャンネルで絞り込みます。例: `github`、`s3`、`yandex` |
| `--channel-scope <primary\|backup\|all>` | チャンネルの絞り込み範囲。主チャンネル、バックアップチャンネル、すべて |
| `--channel-name-groups <value>` | 子チャンネルのグループ絞り込み。バックエンド既存パラメータへそのまま渡します |
| `--list-type <csv>` | リスト種別。よく使う値は `None,White,Block` |
| `--include-tags <csv>` | 必ず含めるタグ |
| `--exclude-tags <csv>` | 除外するタグ |
| `--time-start <ms>` | アップロード時刻の開始。ミリ秒のタイムスタンプ |
| `--time-end <ms>` | アップロード時刻の終了。ミリ秒のタイムスタンプ |
| `--file-exts <csv>` | 指定した拡張子だけを含めます。例: `jpg,png,pdf` |
| `--exclude-file-exts <csv>` | 指定した拡張子を除外します |
| `--file-status-categories <csv>` | ファイル分類: `image,audio,video,document,code,other` |
| `--upload-ip <ip>` | アップロード元 IP の前方一致で絞り込みます |
| `--age-ratings <csv>` | 年齢区分: `none,all-ages,r12,r16,r18` |
| `--orientation <csv>` | 縦横比の絞り込み。バックエンド既存の値をそのまま渡します |
| `--read-source <csv>` | 読み取り元の絞り込み。バックエンド既存の値をそのまま渡します |
| `--access-status <normal\|blocked>` | 公開アクセス状態 |
| `--min-width <n>` | 最小幅 |
| `--max-width <n>` | 最大幅 |
| `--min-height <n>` | 最小高さ |
| `--max-height <n>` | 最大高さ |
| `--min-file-size <mb>` | 最小ファイルサイズ。単位はバックエンド既存の MB パラメータに従います |
| `--max-file-size <mb>` | 最大ファイルサイズ。単位はバックエンド既存の MB パラメータに従います |

### ファイル管理の例

PDF を検索する:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --search "pdf" `
  --file-status-categories "document" `
  --count 20
```

アップロード元 IP とチャンネルで絞り込む:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --upload-ip "103.62" `
  --channel yandex `
  --channel-scope primary
```

完全な結果を保存する:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --count 100 `
  --output json `
  --save-response ".\files.json"
```

## ユーザー管理の一覧取得

ユーザー/IP のアップロード統計を一覧取得する:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --count 20
```

特定の IP または地域を検索する:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --search "43.198.183.56"
```

特定 IP がアップロードしたファイルの明細を見る:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --user-detail `
  --ip "43.198.183.56" `
  --count 20
```

アップロード禁止 IP を一覧取得する:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --blocked-ips
```

### ユーザー管理パラメータ

| パラメータ | 説明 |
| --- | --- |
| `--users` | ユーザー/IP のアップロード統計を一覧取得します |
| `--user-detail` | 特定 IP がアップロードしたファイルの明細を表示します |
| `--blocked-ips` | アップロード禁止 IP を一覧取得します |
| `--ip <ip>` | `--user-detail` では必須です |
| `--start <n>` | ページングの開始位置 |
| `--count <n>` | 返す件数 |
| `--sort <value>` | 並び順: `timeDesc`、`timeAsc`、`countDesc`、`countAsc`、`totalSizeDesc`、`totalSizeAsc` |
| `--search <text>` | IP または地域を検索します |
| `--upload-status <allowed\|blocked>` | アップロードを許可しているかどうか |
| `--start-time <ms>` | 統計期間の開始。ミリ秒のタイムスタンプ |
| `--end-time <ms>` | 統計期間の終了。ミリ秒のタイムスタンプ |
| `--file-status-categories <csv>` | ファイル分類で絞り込みます |
| `--age-ratings <csv>` | 年齢区分で絞り込みます |
| `--min-file-size <mb>` | 最小ファイルサイズ |
| `--max-file-size <mb>` | 最大ファイルサイズ |
| `--list-type <csv>` | リスト種別。よく使う値は `None,White,Block` |
| `--access-status <normal\|blocked>` | 公開アクセス状態 |

### ユーザー管理の例

アップロード禁止のユーザーを一覧取得する:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --upload-status blocked
```

地域キーワードで検索する:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --search "Hong Kong"
```

アップロード回数で並べ替える:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --sort countDesc `
  --count 50
```

## アップロードチャンネル一覧

秘密情報を除いたアップロードチャンネル設定を一覧取得する:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --channels
```

返される内容:

| フィールド | 説明 |
| --- | --- |
| `type` | アップロードの大チャンネル。例: `github`、`s3`、`yandex` |
| `name` | 子チャンネルまたはアカウント名 |
| `enabled` | 有効かどうか |
| `load_balance_enabled` | その大チャンネルで負荷分散が有効かどうか |
| `quota_enabled` | 容量チェックが有効かどうか |
| `quota_limit_bytes` | 容量上限 |
| `quota_used_bytes` | 使用済み容量 |
| `quota_checked_at` | 容量チェック日時 |
| `tag_json` | 公開リポジトリ、非公開リポジトリなどの非機密タグ |
| `created_at` / `updated_at` | 作成日時と更新日時 |

この API は、秘密鍵、更新トークン、一時トークン、パスワードなどの機密設定を返しません。

## ディレクトリ統計表

ディレクトリ統計を一覧取得する:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --directories `
  --limit 20
```

完全なディレクトリパスを一覧取得し、接頭辞で検索する:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --directories `
  --scope full `
  --search-prefix "test" `
  --include-parents `
  --limit 10
```

### ディレクトリ統計パラメータ

| パラメータ | 説明 |
| --- | --- |
| `--directories` | ディレクトリ統計表を一覧取得します |
| `--dir <path>` | 一覧取得を開始するディレクトリ |
| `--scope <direct\|full>` | `direct` は直下のディレクトリだけ、`full` は完全なパスを一覧取得します |
| `--search-prefix <path>` | ディレクトリの接頭辞で検索します |
| `--include-parents` | `full` モードで親ディレクトリも含めます |
| `--limit <n>` | 返す件数。バックエンド側の最大値は `100` です |
| `--cursor <path>` | 次ページのカーソル |

## 出力形式

既定の `pretty` 出力は、人が確認しやすい形式です。

```powershell
node imgbed-token-list.mjs --base-url "https://your-domain" --token "your API Token" --users --count 5
```

他のプログラムで処理する場合は、`--output json` を使います。

```powershell
node imgbed-token-list.mjs --base-url "https://your-domain" --token "your API Token" --users --count 5 --output json
```

完全な結果を保存することもできます。

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --count 5 `
  --output json `
  --save-response ".\users.json"
```

## よくある質問

### このスクリプトはデータを変更しますか？

変更しません。このスクリプトは読み取り API だけを呼び出します。アップロード、削除、移動、設定編集、特定 IP のアップロード禁止や許可は行いません。

### なぜ `list` 権限が必要なのですか？

ファイル管理の一覧取得、ユーザー管理の一覧取得、秘密情報を除いたチャンネル一覧、ディレクトリ統計はいずれも読み取り機能なので、API Token の `list` 権限だけが必要です。

### どのパラメータが使えるか確認するには？

次を実行してください。

```powershell
node imgbed-token-list.mjs --help
```

スクリプトがすべての操作とパラメータを表示します。

