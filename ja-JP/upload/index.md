# アップロード設定

アップロード設定では、ImgBed を自分の保存先チャンネルに接続します。設定が完了すると、アップロードされた画像やファイルは選択したサービスに保存され、ImgBed がアクセスリンク、ファイル記録、プレビュー、公開ギャラリー、ランダム画像 API、WebDAV アクセスなどを管理します。

使い方によって向いているチャンネルは異なります。手軽に始めたい場合は Telegram、Discord、GitHub Releases が候補になります。容量、速度、長期的な安定性を重視する場合は Cloudflare R2、S3、OneDrive、Google Drive、Dropbox、Yandex、pCloud、または自分の WebDAV サービスを検討してください。

## 始める前に

- 使用するストレージアカウント、または API 認証情報を用意します。
- ImgBed のドメインが正常にアクセスできることを確認します。OAuth 系チャンネルでは callback URL が必要です。
- チャンネル追加後は、まずテスト画像をアップロードし、保存と表示が正常に動くか確認してください。

## チャンネル一覧

- [Telegram](./telegram.md)
- [Cloudflare R2](./cloudflare-r2.md)
- [S3](./s3.md)
- [WebDAV](./webdav.md)
- [Discord](./discord.md)
- [Hugging Face](./huggingface.md)
- [GitHub Releases](./github-releases.md)
- [GitLab Packages](./gitlab-packages.md)
- [OneDrive](./onedrive.md)
- [Google Drive](./google-drive.md)
- [Dropbox](./dropbox.md)
- [Yandex](./yandex.md)
- [pCloud](./pcloud.md)

## この章で扱うこと

- 各アップロードチャンネルで事前に必要な情報。
- 外部サービスでアプリを作成し、キーや Token を取得する方法。
- ImgBed に設定を入力し、アップロードできることを確認する方法。
