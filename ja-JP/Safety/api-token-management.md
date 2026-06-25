# API Token で設定を管理する

API Token の設定管理は、自動化スクリプト、運用ツール、外部の管理パネルから使うための機能です。管理画面を開かなくても、アップロードチャンネル設定、セキュリティ設定、ページ設定、その他設定、軽量なフェデレーション関係を読み取り・更新できます。

管理権限で公開されるのは、スクリプトから実行しやすい軽量操作だけです。ブラウザでの確認、Web インターフェースの分割処理、フェデレーションインデックスの削除が必要な重い操作は、引き続きブラウザの管理画面で処理します。

![API Token の編集](../../image/Safety/apitoken/编辑管理权限api.png)

## 事前準備

管理画面で次の場所を開きます。

```text
System Settings -> Security Settings -> API Token
```

API Token を作成または編集するときは、管理権限を付与してください。管理権限はサイト設定を変更できるため、信頼できるスクリプトまたはユーザーにだけ渡してください。

3 つの管理スクリプトは、書き込み操作では既定でドライランになります。プレビュー内容を確認してから `--apply` を付けると、実際に保存されます。

Token は環境変数にも設定できます。

```powershell
$env:IMGBED_API_TOKEN="your API Token"
```

## 管理スクリプトをダウンロードする

ドキュメントには 3 つの Node.js スクリプトが用意されています。

| スクリプト | 用途 |
| --- | --- |
| <a href="/tools/imgbed-token-upload-settings.mjs" download>アップロード設定管理スクリプト</a> | アップロードチャンネル、子チャンネル、負荷分散を管理します。 |
| <a href="/tools/imgbed-token-site-settings.mjs" download>サイト設定管理スクリプト</a> | セキュリティ設定、ページ設定、その他設定を管理します。 |
| <a href="/tools/imgbed-token-federation.mjs" download>フェデレーション関係管理スクリプト</a> | 軽量なフェデレーション関係操作、申請、メッセージを管理します。 |

実行には Node.js 18 以上が必要です。

### 共通パラメータ

| パラメータ | 必須 | 説明 |
| --- | --- | --- |
| `--base-url <url>` | はい | ImgBed サイトの URL。例: `https://image.ai6.me` |
| `--token <token>` | はい | API Token。`IMGBED_API_TOKEN` 環境変数も使えます。 |
| `--retries <n>` | いいえ | 一時的な失敗時の再試行回数。既定は `3`。 |
| `--timeout-ms <n>` | いいえ | 1 回のリクエストのタイムアウト。既定は `180000`。 |
| `--output <pretty\|json>` | いいえ | 出力形式。既定は `pretty`。プログラムから使う場合は `json` が便利です。 |
| `--save-response <path>` | いいえ | 最終結果を JSON ファイルに保存します。 |
| `--apply` | いいえ | 実際に書き込みます。付けない場合はプレビューだけです。 |
| `-h` / `--help` | いいえ | スクリプトのヘルプを表示します。 |

## アップロード設定

アップロード設定スクリプトでは、アップロード子チャンネルの一覧表示、読み取り、作成、編集、削除ができます。大チャンネル単位の負荷分散も切り替えられます。

```powershell
node imgbed-token-upload-settings.mjs --base-url "https://your-domain" --token "your API Token" --list
```

### アップロード設定のパラメータ

| パラメータ | 説明 |
| --- | --- |
| `--list` | アップロード設定グループを一覧表示します。 |
| `--get` | 大チャンネル、またはその下の指定子チャンネルを読み取ります。 |
| `--upsert` | 子チャンネルを作成または編集します。`--apply` がない場合はプレビューだけです。 |
| `--delete` | 子チャンネルを削除します。`--apply` がない場合はプレビューだけです。 |
| `--load-balance <true\|false>` | 大チャンネルの負荷分散をオンまたはオフにします。 |
| `--channel <key>` | 大チャンネル。例: `s3`、`github`、`telegram` |
| `--channel-name <name>` | 子チャンネルまたはアカウント名。 |
| `--set key=value` | フィールドを 1 つ設定します。複数指定できます。ドットパスも使えます。 |
| `--patch-json <path>` | JSON ファイルからフィールドをまとめてマージします。 |
| `--apply` | 書き込み結果を保存します。 |

### チャンネルキー

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

### アップロード設定の例

すべてのアップロード設定を表示します。

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --list
```

S3 チャンネル設定を読み取ります。

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get `
  --channel s3
```

S3 の子チャンネルを 1 つ読み取ります。

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get `
  --channel s3 `
  --channel-name "backup-s3"
```

子チャンネルを作成または編集します。最初は `--apply` を付けずにプレビューしてください。

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --upsert `
  --channel webdav `
  --channel-name "backup-webdav" `
  --set enabled=false `
  --set remark="backup test"
```

確認後に保存します。

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --upsert `
  --channel webdav `
  --channel-name "backup-webdav" `
  --set enabled=false `
  --set remark="backup test" `
  --apply
```

子チャンネルを削除します。

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --delete `
  --channel webdav `
  --channel-name "backup-webdav" `
  --apply
```

S3 の負荷分散を有効にします。

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --load-balance true `
  --channel s3 `
  --apply
```

複雑なフィールドは JSON ファイルに書いて `--patch-json` で渡せます。

```json
{
  "enabled": true,
  "remark": "primary account"
}
```

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --upsert `
  --channel s3 `
  --channel-name "primary-s3" `
  --patch-json ".\s3-channel.json" `
  --apply
```

## サイト設定

サイト設定スクリプトでは、次の 3 種類の設定を管理できます。

| 領域 | パラメータ | 説明 |
| --- | --- | --- |
| セキュリティ設定 | `security` | ユーザー認証、管理者認証、ログイン端末、API Token、画像審査、ユーザー頻度制限、WebDAV など。 |
| ページ設定 | `page` | 全体ページ、ユーザー側ページ、管理画面ページなど。 |
| その他設定 | `others` | ランダム画像 API、公開ギャラリー、ローカルフェデレーションノード、自動タグ、IP 位置情報、バックアップチャンネル、OCR など。 |

まず `--list-sections` で、編集できる領域、セクション、フィールドを確認してください。

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --list-sections
```

### サイト設定のパラメータ

| パラメータ | 説明 |
| --- | --- |
| `--list-sections` | 編集可能な領域、セクション、フィールドを一覧表示します。 |
| `--get` | 1 つの設定セクションを読み取ります。 |
| `--area <security\|page\|others>` | 設定領域を指定します。 |
| `--section <name>` | 設定セクションを指定します。名前は `--list-sections` の出力に従います。 |
| `--set key=value` | フィールドを 1 つ設定します。複数指定できます。 |
| `--apply` | 書き込み結果を保存します。 |

`page` 領域の `--set` では、`starsEffect=true` のようにページ設定項目の ID を使います。`security` と `others` では、`email=admin@example.com` のように対象セクションのフィールド名を使います。

### サイト設定の例

システム更新通知設定を読み取ります。

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get `
  --area security `
  --section systemUpdate
```

システム更新通知メールを変更します。最初は `--apply` を付けずにプレビューしてください。

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --area security `
  --section systemUpdate `
  --set email="admin@example.com"
```

確認後に保存します。

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --area security `
  --section systemUpdate `
  --set email="admin@example.com" `
  --apply
```

管理画面の星空エフェクトを変更します。

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --area page `
  --section adminSettings `
  --set starsEffect=true `
  --apply
```

IP 位置情報の言語を変更します。

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --area others `
  --section ipGeolocation `
  --set language="en" `
  --apply
```

ローカルフェデレーションノード設定では、有効化状態、同期ディレクトリ、招待コードなどの通常フィールドを読み取り・更新できます。ドメイン確認は API Token では処理しません。管理画面でローカルノードのドメインと現在のアクセスドメインが異なると表示された場合は、ブラウザの管理画面で確認を完了してください。

## フェデレーション関係

フェデレーションスクリプトでは、ローカルノード状態、参加中のノード、参加してきたノード、メッセージ、参加申請、記録なし関係の再申請、承認、拒否、インデックス削除を伴わない軽量な関係操作を管理できます。

インデックス更新、フェデレーションインデックス削除、ドメイン変更確認はブラウザの完全な処理フローに依存します。スクリプトではこれらの重い操作を扱いません。

### 軽量操作と重い操作の境界

| 操作 | スクリプト対応 | 説明 |
| --- | --- | --- |
| ローカルノード状態の確認、関係一覧 | 対応 | 関係レコードを読むだけです。 |
| メッセージの確認、送信 | 対応 | 関係メッセージを読み書きします。 |
| 他ノードへの参加申請 | 対応 | 招待リンクを使って申請します。 |
| 記録なし関係の再申請 | 対応 | `lastResult=none` の outgoing カードのみ。6 文字の招待コードが必要です。 |
| outgoing の承認待ち申請を取り消す | 対応 | pending 申請だけを取り消します。 |
| incoming 申請の承認または拒否 | 対応 | 自分のノードに参加してきた申請を処理します。 |
| 承認済み incoming 関係の削除 | 対応 | incoming 関係レコードを更新し、相手に通知します。 |
| incoming の終端レコード削除 | 対応 | incoming の終端関係レコードだけを削除します。 |
| 承認済み outgoing 購読の取り消し | ブラウザのみ | ローカルフェデレーションインデックス削除が必要で、ブラウザが分割実行します。 |
| outgoing 終端レコードの削除 | ブラウザのみ | 先にフェデレーションインデックスのクリーンアップが必要な場合があります。 |
| ドメイン変更の確認または取り消し | ブラウザのみ | 現在ドメインの確認と、ドメイン変更後のインデックス処理が必要です。 |
| インデックスの公開、取得、分割削除 | ブラウザのみ | Web インターフェースの分割タスクです。 |

### フェデレーションのパラメータ

| パラメータ | 説明 |
| --- | --- |
| `--status` | ローカルフェデレーションノード状態、outgoing、incoming を表示します。 |
| `--list` | フェデレーション関係一覧を表示します。 |
| `--chat` | 1 つの関係のキャッシュ済みメッセージを読み取ります。 |
| `--send-message` | 確立済み関係にメッセージを送ります。 |
| `--join` | 招待リンクから他ノードへの参加を申請します。 |
| `--reapply` | 記録なし関係を再申請します。6 文字の招待コードが必要です。 |
| `--accept` | incoming 申請を承認します。 |
| `--deny` | incoming 申請を拒否します。 |
| `--cancel` | outgoing の承認待ち申請を取り消す、または承認済み incoming 関係を削除します。 |
| `--delete` | incoming の終端関係レコードを削除します。 |
| `--direction <outgoing\|incoming\|all>` | 関係方向。`outgoing` は自分が参加したノード、`incoming` は自分のノードに参加してきたノードです。 |
| `--domain <url>` | 関係ノードのドメイン。 |
| `--invite-link <url>` | 相手ノードの招待リンク。 |
| `--invite-code <code>` | 再申請に使う 6 文字の招待コード。 |
| `--text <message>` | メッセージ本文。 |
| `--apply` | 書き込み結果を保存します。 |

### フェデレーションの例

ローカルノード状態と双方の関係一覧を表示します。

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --status
```

outgoing ノードだけを表示します。

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --list `
  --direction outgoing
```

incoming ノードだけを表示します。

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --list `
  --direction incoming
```

招待リンクから他ノードへの参加を申請します。最初は `--apply` を付けずにプレビューしてください。

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --join `
  --invite-link "https://peer-domain/federation/invite/abcdef"
```

確認後に保存します。

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --join `
  --invite-link "https://peer-domain/federation/invite/abcdef" `
  --apply
```

記録なし関係を再申請します。

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --reapply `
  --domain "https://peer-domain" `
  --invite-code "abc123" `
  --apply
```

incoming 申請を承認します。

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --accept `
  --domain "https://peer-domain" `
  --apply
```

incoming 申請を拒否します。

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --deny `
  --domain "https://peer-domain" `
  --apply
```

確立済み関係にメッセージを送ります。

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --send-message `
  --direction outgoing `
  --domain "https://peer-domain" `
  --text "Hello, this is a test message." `
  --apply
```

outgoing の承認待ち申請を取り消します。

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --cancel `
  --direction outgoing `
  --domain "https://peer-domain" `
  --apply
```

承認済み incoming 関係を削除します。

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --cancel `
  --direction incoming `
  --domain "https://peer-domain" `
  --apply
```

incoming の終端レコードを削除します。

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --delete `
  --direction incoming `
  --domain "https://peer-domain" `
  --apply
```

承認済み outgoing 購読の取り消しと outgoing レコードの削除は、ブラウザの管理画面で処理してください。これらの操作では、先にローカルフェデレーションインデックスのクリーンアップが必要になる場合があります。

### ドメイン不一致

ローカルノードに保存されているドメインと、関係内の保留中ドメインが一致しない場合、スクリプトは `currentDomain` と `pendingDomain` を含むエラーを返します。この場合はブラウザの管理画面で処理してください。ドメイン変更には outgoing インデックスのクリーンアップと確認手順が関係します。

参加申請時に相手側から `FEDERATION_NODE_DOMAIN_MISMATCH` が返る場合、招待リンクでアクセスしたドメインと相手ノードに保存されているローカルドメインが一致していません。レスポンスには `currentOrigin` と `detectedOrigin` が含まれます。相手が現在確認済みのドメインを使うか、相手にブラウザ管理画面で先にドメイン確認を完了してもらってください。

## よくある質問

### 変更コマンドを実行しても反映されない

書き込みコマンドは既定でプレビューモードです。内容を確認した後、`--apply` を追加すると実際に保存されます。

### 変更できるフィールドを知りたい

アップロード設定では、まず `--get` で既存の子チャンネル構造を確認してください。セキュリティ設定、ページ設定、その他設定では、`--list-sections` でスクリプトが編集できる領域、セクション、フィールドを確認してください。

### 結果を別のプログラムで使いたい

`--output json` を使うか、`--save-response result.json` を追加してください。保存された JSON ファイルをプログラムからそのまま読み取れます。


