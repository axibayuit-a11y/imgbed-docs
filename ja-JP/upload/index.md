# アップロードチャンネル設定

ImgBed では、複数の保存先を「チャンネル」として追加できます。画像、動画、音声、その他ファイルをどこへ保存するかは、アップロードチャンネルで管理します。

## 設定場所

```text
システム設定 -> アップロード設定
```

ここから新しいチャンネルを追加し、有効化、容量制限、備考、接続確認などを行います。

## このセクションで扱うチャンネル

| チャンネル | 主な用途 |
| --- | --- |
| Cloudflare R2 | Cloudflare 上のオブジェクトストレージ |
| S3 | AWS S3、Backblaze B2、MinIO などの S3 互換ストレージ |
| Google Drive | Google アカウントの Drive に保存 |
| OneDrive | Microsoft アカウントの OneDrive に保存 |
| Dropbox | Dropbox アカウントに保存 |
| pCloud | pCloud アカウントに保存 |
| WebDAV | NAS、クラウドドライブ、対応ストレージに保存 |
| Telegram | Telegram チャンネルを保存先として利用 |
| Discord | Discord チャンネルを保存先として利用 |
| GitHub Releases | GitHub Release Assets に保存 |
| GitLab Packages | GitLab Generic Packages に保存 |
| Hugging Face | Hugging Face Repository に保存 |
| Yandex | Yandex Disk に保存 |

## 追加前に確認すること

| 確認項目 | 内容 |
| --- | --- |
| 保存先アカウント | 実際にファイルを保存するアカウントを用意します |
| API キー / Token | チャンネルごとに必要な認証情報を準備します |
| 保存ディレクトリ | 初期値は `imgbed` が多いですが、必要に応じて変更できます |
| 容量制限 | 容量上限やしきい値を設定するか決めます |
| 公開 URL | CDN や独自ドメインを使う場合は事前に確認します |

## 追加後の確認

1. チャンネルカードが表示される。
2. チャンネルが有効になっている。
3. 保存したキーやディレクトリが正しく表示される。
4. 容量確認が必要な場合は実行する。
5. テスト画像をアップロードし、リンクが開けることを確認する。

エラーが出る場合は、まず認証情報、保存先ディレクトリ、権限、API の利用制限を確認してください。
