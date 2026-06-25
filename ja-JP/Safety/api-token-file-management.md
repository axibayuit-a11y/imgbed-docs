# API Token でファイルを管理する

API Token のファイル管理は、スクリプト、自動化タスク、外部の管理パネルから使うための機能です。`manage` 権限を使うと、管理画面を開かなくても、ファイル情報の編集、ファイルの移動、ファイル名の変更、ディレクトリ用プレースホルダファイルの作成、ファイルタグとリスト状態の調整、アップロード元 IP の停止または復元、短期アップロード Token の作成と削除ができます。

このスクリプトが扱うのは、ファイル管理とユーザー管理に含まれる軽量な管理操作だけです。アップロード、一覧表示、削除、アップロード設定、サイト設定、フェデレーション関係は、それぞれ専用のスクリプトを使います。

![API Token の編集](../../image/Safety/apitoken/编辑管理权限api.png)

## 事前準備

管理画面に入り、次を開きます。

システム設定 -> セキュリティ設定 -> API Token

API Token を作成または編集するときは、その Token に管理を許可してください。`manage` 権限ではファイル状態、ユーザーのアップロード状態、短期アップロード Token を変更または作成できます。信頼できるスクリプトまたはユーザーにだけ付与してください。

ファイル管理スクリプトの書き込み操作は、既定ではすべてプレビューモードです。実際には保存されません。プレビュー内容に問題がないことを確認してから、`--apply` を追加して書き込みを実行します。

Token は環境変数にも設定できます。

```powershell
$env:IMGBED_API_TOKEN="your API Token"
```

## スクリプトをダウンロードする

| スクリプト | 用途 |
| --- | --- |
| <a href="/tools/imgbed-token-manage.mjs" download>ファイル管理スクリプト</a> | ファイルメタデータ、審査ラベル、ファイルタグ、リスト状態、移動、名前変更、フォルダ作成、IP の停止/復元、短期アップロード Token の作成と削除 |

実行には Node.js 18 以上が必要です。

## 機能の範囲

| 機能 | スクリプト | 権限 |
| --- | --- | --- |
| ファイルをアップロードする | `imgbed-token-single-upload.mjs` / `imgbed-token-chunk-upload.mjs` | `upload` |
| ファイルを一覧表示・絞り込み、ユーザー統計を読む | `imgbed-token-list.mjs` | `list` |
| 明示したファイルを削除する | `imgbed-token-delete.mjs` | `delete` |
| ファイル情報、タグ、リスト、移動、名前変更、フォルダ作成、IP 停止、短期アップロード Token の作成または削除 | `imgbed-token-manage.mjs` | `manage` |
| アップロードチャンネル、セキュリティ設定、ページ設定、その他設定、フェデレーション関係を編集する | 設定管理用スクリプト | `manage` |

`imgbed-token-manage.mjs` は、ファイルのアップロード、一覧表示、削除は行いません。`fileId` を探す必要がある場合は、先に一覧表示スクリプトでファイルを絞り込みます。ファイルを削除する場合は、明示した `fileId` を削除スクリプトに渡します。

## 共通パラメータ

| パラメータ | 必須 | 説明 |
| --- | --- | --- |
| `--base-url <url>` | はい | ImgBed サイトの URL。例: `https://image.ai6.me` |
| `--token <token>` | はい | API Token。`IMGBED_API_TOKEN` 環境変数も使えます |
| `--retries <n>` | いいえ | 一時的な失敗時の再試行回数。既定は `3` |
| `--timeout-ms <n>` | いいえ | 1 回のリクエストのタイムアウト。既定は `180000` |
| `--output <pretty\|json>` | いいえ | 出力形式。既定は `pretty`。プログラムから使う場合は `json` を推奨します |
| `--save-response <path>` | いいえ | 最終結果を JSON ファイルとして保存します |
| `--batch-size <n>` | いいえ | バッチ操作で 1 リクエストあたりに処理する件数。既定は `15`、最大 `15` |
| `--apply` | いいえ | 実際に書き込みます。付けない場合はプレビューだけです |
| `-h` / `--help` | いいえ | スクリプトのヘルプを表示します |

## 先に fileId を確認する

ファイル管理スクリプトの多くの操作では `fileId` が必要です。先に一覧表示スクリプトで確認できます。

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --dir "test4" `
  --count 10 `
  --output json
```

返される結果の `name` が、多くの場合そのままファイル管理スクリプトに渡せる `fileId` です。

## ファイルメタデータ

ファイルメタデータは、管理画面のファイル管理に表示されるファイル名と読み取り元を変更するために使います。

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-metadata `
  --file-id "photos/2026/a.jpg" `
  --file-name "cover.jpg" `
  --read-source backup
```

プレビュー結果に問題がなければ保存します。

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-metadata `
  --file-id "photos/2026/a.jpg" `
  --file-name "cover.jpg" `
  --read-source backup `
  --apply
```

### ファイルメタデータのパラメータ

| パラメータ | 説明 |
| --- | --- |
| `--set-metadata` | 単一ファイルのメタデータを変更します |
| `--file-id <id>` | 変更するファイル ID |
| `--file-name <name>` | 管理画面に表示する新しい名前 |
| `--read-source <primary\|backup>` | 読み取り元。`primary` は主系、`backup` はバックアップ系です |

`--file-name` と `--read-source` の少なくとも一方を指定してください。

## 審査ラベル

審査ラベルはファイルの年齢区分に対応します。現在のラベルを読み取ってから変更できます。

審査ラベルを読み取ります。

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get-label `
  --file-id "photos/2026/a.jpg"
```

審査ラベルを設定します。

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-label `
  --file-id "photos/2026/a.jpg" `
  --label r12 `
  --apply
```

### 審査ラベルのパラメータ

| パラメータ | 説明 |
| --- | --- |
| `--get-label` | 単一ファイルの審査ラベルを読み取ります |
| `--set-label` | 単一ファイルの審査ラベルを変更します |
| `--file-id <id>` | ファイル ID |
| `--label <value>` | ラベル値: `all-ages`、`r12`、`r16`、`r18`、`None` |

## ファイルタグ

ファイルタグは、検索可能な業務用タグをファイルに付けるためのものです。スクリプトは読み取り、上書き、追加、削除に対応し、複数ファイルのバッチ処理もできます。

ファイルタグを読み取ります。

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get-tags `
  --file-id "photos/2026/a.jpg"
```

タグを追加します。

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --add-tags `
  --file-id "photos/2026/a.jpg" `
  --tag "cover" `
  --tag "2026" `
  --apply
```

タグを削除します。

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --remove-tags `
  --file-id "photos/2026/a.jpg" `
  --tag "cover" `
  --apply
```

タグを上書きします。

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-tags `
  --file-id "photos/2026/a.jpg" `
  --tag "archive" `
  --tag "public" `
  --apply
```

タグをまとめて追加します。

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --batch-tags `
  --file-id "photos/2026/a.jpg" `
  --file-id "photos/2026/b.jpg" `
  --tag-action add `
  --tag "batch-test" `
  --apply
```

### ファイルタグのパラメータ

| パラメータ | 説明 |
| --- | --- |
| `--get-tags` | 単一ファイルのタグを読み取ります |
| `--set-tags` | 単一ファイルのタグを上書きします |
| `--add-tags` | 単一ファイルにタグを追加します |
| `--remove-tags` | 単一ファイルからタグを削除します |
| `--batch-tags` | タグの設定、追加、削除をバッチで実行します |
| `--file-id <id>` | ファイル ID。バッチ操作では複数回指定できます |
| `--tag <tag>` | タグ値。複数回指定できます |
| `--tags-json <path>` | JSON ファイルからタグ配列を読み取ります |
| `--tag-action <set\|add\|remove>` | バッチタグ操作 |

`--tags-json` ファイルの内容例:

```json
["cover", "2026", "public"]
```

## ブラックリスト/ホワイトリスト状態

リスト状態は、公開アクセスモードでのファイルのアクセス制御動作を決めます。単一ファイルでもバッチでも変更できます。

単一ファイルをホワイトリストに設定します。

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-list-type `
  --file-id "photos/2026/a.jpg" `
  --list-type White `
  --apply
```

複数ファイルをまとめてブラックリストに追加します。

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --batch-list-type `
  --file-id "photos/2026/a.jpg" `
  --file-id "photos/2026/b.jpg" `
  --list-type Block `
  --apply
```

既定のリスト状態に戻します。

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-list-type `
  --file-id "photos/2026/a.jpg" `
  --list-type None `
  --apply
```

### ブラックリスト/ホワイトリストのパラメータ

| パラメータ | 説明 |
| --- | --- |
| `--set-list-type` | 単一ファイルのリスト状態を変更します |
| `--batch-list-type` | ファイルのリスト状態をバッチで変更します。1 回のリクエストで最大 `15` ファイルまで処理できます |
| `--file-id <id>` | ファイル ID。バッチ操作では複数回指定できます |
| `--list-type <None\|White\|Block>` | `None` は既定状態、`White` はホワイトリスト、`Block` はブラックリストです |

## ファイルを移動する

ファイル移動では、1 つ以上のファイルを対象ディレクトリへ移動します。バックエンドは 1 回のリクエストで最大 `15` ファイルまで処理します。スクリプトは `--batch-size` に従って自動的に複数のリクエストへ分割し、順番に実行します。

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --move `
  --file-id "photos/2026/a.jpg" `
  --file-id "photos/2026/b.jpg" `
  --target-path "archive/2026" `
  --apply
```

### 移動パラメータ

| パラメータ | 説明 |
| --- | --- |
| `--move` | ファイルを移動します |
| `--file-id <id>` | 移動するファイル ID。複数回指定できます |
| `--target-path <dir>` | 移動先ディレクトリ |
| `--batch-size <n>` | 1 リクエストで移動するファイル数。既定は `15`、最大 `15` |

## 名前変更またはパス変更

名前変更では、古いファイル ID と新しいファイル ID を明示します。新しいファイル ID では、ファイル名だけを変更することも、同時にディレクトリを変更することもできます。

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --rename `
  --old-file-id "photos/2026/a.jpg" `
  --new-file-id "photos/2026/a-renamed.jpg" `
  --apply
```

バッチで名前変更する場合は、`--old-file-id` と `--new-file-id` を繰り返し指定します。

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --rename `
  --old-file-id "photos/2026/a.jpg" `
  --new-file-id "archive/2026/a.jpg" `
  --old-file-id "photos/2026/b.jpg" `
  --new-file-id "archive/2026/b.jpg" `
  --apply
```

対応関係を JSON ファイルに書くこともできます。

```json
[
  {
    "oldFileId": "photos/2026/a.jpg",
    "newFileId": "archive/2026/a.jpg"
  },
  {
    "oldFileId": "photos/2026/b.jpg",
    "newFileId": "archive/2026/b.jpg"
  }
]
```

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --rename `
  --items-json ".\rename-items.json" `
  --apply
```

### 名前変更パラメータ

| パラメータ | 説明 |
| --- | --- |
| `--rename` | 明示した対応関係で名前またはパスを変更します |
| `--old-file-id <id>` | 元のファイル ID。複数回指定できます |
| `--new-file-id <id>` | 新しいファイル ID。複数回指定できます。数は `--old-file-id` と一致している必要があります |
| `--items-json <path>` | JSON 配列。要素は `{ "oldFileId": "...", "newFileId": "..." }` です |
| `--batch-size <n>` | 1 リクエストで処理する名前変更件数。既定は `15`、最大 `15` |

## フォルダを作成する

ImgBed のディレクトリはファイルパスから作られるため、本当の空ディレクトリはありません。スクリプトでフォルダを作成すると、対象ディレクトリの下にプレースホルダファイル `0.md` が作成されます。これにより、管理画面のファイル管理とディレクトリ統計にそのディレクトリが表示されます。

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --create-folder `
  --parent-directory "photos" `
  --folder-name "2026" `
  --apply
```

### フォルダ作成パラメータ

| パラメータ | 説明 |
| --- | --- |
| `--create-folder` | ディレクトリ用プレースホルダファイルを作成します |
| `--parent-directory <dir>` | 親ディレクトリ。ルートディレクトリの場合は空文字列を渡せます |
| `--folder-name <name>` | 新しいフォルダ名 |

## アップロード IP の停止と復元

管理権限では、特定の IP をアップロード禁止リストに追加できます。また、その IP をアップロード禁止リストから削除することもできます。この操作は、その IP からの以後のアップロードに影響します。その IP がすでにアップロードしたファイルは削除しません。

アップロード IP を停止します。

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --block-ip "67.159.48.149" `
  --apply
```

アップロード IP を復元します。

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --allow-ip "67.159.48.149" `
  --apply
```

現在のアップロード禁止 IP リストを確認します。

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --blocked-ips
```

### IP 管理パラメータ

| パラメータ | 説明 |
| --- | --- |
| `--block-ip <ip>` | アップロード禁止リストに追加します |
| `--allow-ip <ip>` | アップロード禁止リストから削除します |

## 短期アップロード Token を作成・削除する

管理権限では、短期のアップロード専用 Token を作成できます。この Token は常に `upload` 権限だけを持ち、`autoDelete` は常に `true` で、有効期限は最長 `1` 日です。

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --create-upload-token `
  --name "Temporary Upload Token" `
  --owner "upload-bot" `
  --default-upload-channel telegram `
  --expires-in-minutes 20 `
  --apply `
  --output json
```

ミリ秒のタイムスタンプを直接渡すこともできます。

```powershell
$expiresAt = [DateTimeOffset]::UtcNow.AddHours(12).ToUnixTimeMilliseconds()

node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --create-upload-token `
  --name "Upload Token valid for one day" `
  --owner "upload-bot" `
  --default-upload-channel telegram `
  --expires-at $expiresAt `
  --apply
```

短期アップロード Token を削除するときは、作成 API が返した `id` を渡します。管理 Token で削除できるのは、次の条件を満たす Token だけです。

| 条件 | 要件 |
| --- | --- |
| 権限 | `permissions` が `upload` だけである |
| 自動削除 | `autoDelete=true` |
| 有効期間 | `expiresAt - createdAt <= 24` 時間 |

短期アップロード Token を削除します。

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --delete-upload-token `
  --token-id "mqt4jqokc85be80d1f0f47078e848a77d6c1aa6e" `
  --apply
```

管理 Token は、通常の Token、長期 Token、`list` / `delete` / `manage` 権限を含む Token、有効期限が `1` 日を超えるアップロード Token を削除できません。これらの Token は、引き続きブラウザの管理画面で処理します。

### 短期アップロード Token のパラメータ

| パラメータ | 説明 |
| --- | --- |
| `--create-upload-token` | 短期アップロード専用 Token を作成します |
| `--delete-upload-token` | 条件を満たす短期アップロード専用 Token を削除します |
| `--name <name>` | Token 名 |
| `--owner <owner>` | Token の所有者メモ |
| `--default-upload-channel <key>` | 既定のアップロードチャンネル。`telegram`、`s3`、`github` など実在するチャンネルである必要があります |
| `--expires-in-minutes <n>` | 現在時刻からの有効期限を分単位で指定します。最大 `1440` |
| `--expires-at <ms>` | 絶対有効期限。ミリ秒タイムスタンプで指定します。現在時刻から最大 `24` 時間後まで |
| `--token-id <id>` | 削除する短期アップロード Token ID |

短期アップロード Token はアップロードだけを許可します。テストでは、`permissions=["upload"]` の短期 Token で一覧表示、ファイル管理、削除 API にアクセスすると拒否されます。

有効期限切れ後、`autoDelete=true` の Token は、バックエンドが期限切れを検出したタイミングで削除されます。API Token 一覧を読み取るときにも、期限切れで `autoDelete=true` の Token が削除されます。

## API 対応表

| 操作 | メソッド | API |
| --- | --- | --- |
| ファイルメタデータを変更する | `PATCH` | `/api/manage/metadata/{fileId}` |
| 審査ラベルを読み取る | `GET` | `/api/manage/label/{fileId}` |
| 審査ラベルを変更する | `POST` | `/api/manage/label/{fileId}` |
| ファイルタグを読み取る | `GET` | `/api/manage/tags/{fileId}` |
| ファイルタグを変更する | `POST` | `/api/manage/tags/{fileId}` |
| ファイルタグをバッチ変更する | `POST` | `/api/manage/tags/batch` |
| リスト状態を変更する | `POST` | `/api/manage/listType/{fileId}` |
| リスト状態をバッチ変更する | `POST` | `/api/manage/listType/batch` |
| 移動または名前変更 | `POST` | `/api/manage/relocate/batch` |
| フォルダを作成する | `POST` | `/api/manage/folder/create` |
| アップロード IP を停止する | `POST` | `/api/manage/cusConfig/blockip` |
| アップロード IP を復元する | `POST` | `/api/manage/cusConfig/whiteip` |
| 短期アップロード Token を作成する | `POST` | `/api/manage/apiTokens` |
| 短期アップロード Token を削除する | `DELETE` | `/api/manage/apiTokens?id={tokenId}` |

スクリプトは自動的に次を付与します。

```text
Authorization: Bearer your API Token
```

## 出力形式

既定の `pretty` 出力は、人が確認する用途に適しています。他のプログラムで処理する場合は `--output json` を使います。

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get-tags `
  --file-id "photos/2026/a.jpg" `
  --output json
```

完全な結果を保存することもできます。

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get-tags `
  --file-id "photos/2026/a.jpg" `
  --output json `
  --save-response ".\manage-result.json"
```

バッチ移動、バッチ名前変更、バッチリスト操作では、バックエンドが返す NDJSON の進行状況ストリームを解析し、イベント数、完了状態、失敗の詳細を集計します。

## FAQ

### コマンド実行後に変更されない理由

書き込み操作は既定でプレビューモードです。プレビュー結果に問題がないことを確認してから、`--apply` を追加すると実際に保存されます。

### このスクリプトでアップロード、一覧表示、削除はできますか

できません。アップロードにはアップロード用スクリプト、一覧表示と絞り込みには一覧表示スクリプト、明示したファイルの削除には削除スクリプトを使います。ファイル管理スクリプトは、`manage` 権限下の軽量な管理操作だけを扱います。

### どの fileId を渡せばよいですか

先に `imgbed-token-list.mjs --files` でファイルを照会します。返される結果の `name` が、多くの場合ファイル ID であり、ここで `--file-id` に渡す値です。

### バッチ操作では一度に何ファイルまで処理できますか

バックエンドは 1 回のリクエストで最大 `15` ファイルまで処理します。スクリプトの既定値は `--batch-size 15` です。より小さい値を渡すと、その件数で複数のリクエストに自動分割して順番に実行します。

### 本当の空フォルダを作成できますか

ImgBed のディレクトリはファイルパスから推定されるため、本当の空ディレクトリはありません。`--create-folder` はディレクトリ用プレースホルダファイル `0.md` を作成し、そのディレクトリをファイル管理とディレクトリ統計に表示できるようにします。

### 短期アップロード Token の最長期間はどれくらいですか

最長 `1` 日、つまり `1440` 分です。この時間を超える場合、スクリプトはローカルで拒否します。バックエンドも `API_TOKEN_MANAGE_CREATE_EXPIRES_AT_TOO_LONG` を返します。

### 短期アップロード Token は期限切れ後に自動削除されますか

自動的に削除されますが、即時の定期タスクではありません。期限切れ Token が再度検証されたときに削除されます。API Token 一覧を読み取るときにも、期限切れで `autoDelete=true` の Token が削除されます。
