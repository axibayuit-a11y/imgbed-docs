# Dropbox チャンネルの追加

Dropbox チャンネルは、Dropbox アカウントを ImgBed の保存先として利用するための設定です。

## 事前に用意するもの

| 必要なもの | 用途 |
| --- | --- |
| Dropbox アカウント | ファイルの保存先 |
| Dropbox App | API でアクセスするために作成します |
| Access Token | ImgBed から Dropbox へアクセスするために使います |
| 保存ディレクトリ | 任意。通常は `imgbed` など |

## Dropbox App を作成する

Dropbox App Console を開き、新しいアプリを作成します。

![アプリ作成](../../image/upload/dropbox/开发者创建应用.png)

アプリのアクセス範囲は、ImgBed で使う保存先に合わせて選択します。専用フォルダだけを使う運用にすると管理しやすくなります。

## リダイレクト URL を設定する

OAuth を使う場合は、ImgBed のコールバック URL を Dropbox App に設定します。

```text
https://あなたのドメイン/api/oauth/dropbox/callback
```

![コールバック設定](../../image/upload/dropbox/配置回调地址.png)

## 権限を追加する

ファイルのアップロード、読み取り、削除に必要な権限を付与します。

![権限追加](../../image/upload/dropbox/添加对应的权限.png)

## Token を取得する

アプリ画面または ImgBed の認証フローから Token を取得します。

![Token 取得](../../image/upload/dropbox/获取令牌.png)

取得した Token をコピーして ImgBed に貼り付けます。

![Token コピー](../../image/upload/dropbox/复制令牌.png)

## ImgBed へ入力する

アップロード設定で `Dropbox` を選び、次を入力します。

| 項目 | 入力内容 |
| --- | --- |
| チャンネル名 | 自分が分かる名前 |
| Access Token | Dropbox で取得した Token |
| 保存ディレクトリ | 任意。空欄または `imgbed` |
| 備考 | 任意 |

## 確認方法

保存後、容量確認またはテストアップロードを実行します。

![容量確認](../../image/upload/dropbox/查询额度成功.png)

Dropbox 内にファイルが作成され、ImgBed のリンクが開ければ設定完了です。

## よくある確認ポイント

- Token が期限切れ、または権限不足になっていないか。
- Dropbox App の権限を変更したあと、再認証しているか。
- 保存ディレクトリ名に不要なスラッシュや空白が入っていないか。
- Dropbox 側の容量が不足していないか。
