# Google Drive チャンネルの追加

Google Drive チャンネルは、Google Drive を ImgBed の保存先として利用します。

## 事前に用意するもの

| 必要なもの | 用途 |
| --- | --- |
| Google アカウント | Drive と OAuth アプリを管理します |
| Google Cloud プロジェクト | OAuth Client を作成します |
| Client ID / Client Secret | ImgBed から Google Drive を操作するため |
| Refresh Token | 長期的なアクセスに使います |
| ImgBed ドメイン | OAuth コールバック URL に使います |

## OAuth Client を作成する

Google Cloud Console で OAuth Client を作成します。種類は Web アプリケーションを選びます。

![OAuth Client 作成](../../image/upload/google-drive/oa客户端id创建.png)

承認済みのリダイレクト URI に次を設定します。

```text
https://あなたのドメイン/api/oauth/google/callback
```

![OAuth URL 設定](../../image/upload/google-drive/填写oa客户端url信息.png)

## ImgBed へ入力する

アップロード設定で `Google Drive` を選び、まず Client ID と Client Secret を入力します。

![Google Drive 設定](../../image/upload/google-drive/粘贴回添加新渠道配置.png)

| 項目 | 入力内容 |
| --- | --- |
| チャンネル名 | 例：`Google Drive Main` |
| Client ID | Google Cloud で作成した OAuth Client ID |
| Client Secret | OAuth Client Secret |
| Refresh Token | 後で取得して貼り付けます |
| ルートディレクトリ | 任意。通常は `imgbed` |

## Refresh Token を取得する

1. ImgBed で「Token を取得」をクリックします。
2. 保存先に使う Google アカウントでログインします。
3. 権限を許可します。
4. コールバックページに表示された Refresh Token をコピーします。
5. ImgBed の `Refresh Token` 欄へ貼り付けます。

![Refresh Token コピー](../../image/upload/google-drive/授权完复制token.png)

## 保存後の確認

1. チャンネルを保存します。
2. テスト画像をアップロードします。
3. Google Drive の指定ディレクトリにファイルが作成されることを確認します。
4. 返されたリンクが開けることを確認します。

## 注意点

- Google Cloud の OAuth 同意画面設定が未完了だと認証できない場合があります。
- Refresh Token を取得した Google アカウントが、実際の保存先になります。
- Drive 容量が不足しているとアップロードに失敗します。
- OAuth Client Secret を公開しないでください。
