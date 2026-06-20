# Discord チャンネルの追加

Discord チャンネルを使うと、Discord サーバー内のチャンネルをファイル保存先として利用できます。

## 事前に用意するもの

| 必要なもの | 用途 |
| --- | --- |
| Discord アカウント | サーバーと Bot を管理します |
| Discord サーバー | 保存先チャンネルを置く場所 |
| Discord Bot | ファイル投稿に使います |
| Bot Token | ImgBed から Bot を呼び出すために使います |
| チャンネル ID | 投稿先チャンネルを指定します |

## サーバーを作成する

保存用の Discord サーバーを作成します。既存サーバーを使っても構いませんが、運用しやすいように専用サーバーを用意するのがおすすめです。

![サーバー作成](../../image/upload/discord/创建服务器.png)

## 開発者モードを有効にする

チャンネル ID をコピーするには、Discord の開発者モードを有効にします。

![開発者モード](../../image/upload/discord/开启开发者权限.png)

対象チャンネルを右クリックし、チャンネル ID をコピーします。

![チャンネル ID](../../image/upload/discord/复制群频道id.png)

## Bot を作成し Token を取得する

Discord Developer Portal でアプリケーションを作成し、Bot を追加します。Bot Token をコピーして安全に保管します。

![Bot Token](../../image/upload/discord/查看机器人令牌.png)

## Bot をサーバーへ招待する

OAuth2 設定で Bot 権限を選び、生成した招待 URL からサーバーへ Bot を追加します。

![Bot 権限](../../image/upload/discord/在oa2勾选机器人权限.png)

![Bot 招待](../../image/upload/discord/邀请机器人到频道.png)

Bot には投稿先チャンネルへメッセージ送信と添付ファイル送信の権限が必要です。

## ImgBed へ入力する

アップロード設定で `Discord` を選び、次を入力します。

| 項目 | 入力内容 |
| --- | --- |
| チャンネル名 | 例：`Discord Storage` |
| Bot Token | Developer Portal で取得した Token |
| Channel ID | 投稿先チャンネルの ID |
| 備考 | 任意 |

![Discord 設定](../../image/upload/discord/添加dc新渠道配置.png)

## 確認方法

1. 保存後に Discord チャンネルカードが表示される。
2. テスト画像をアップロードする。
3. Discord の対象チャンネルにファイルが投稿される。
4. ImgBed が返すリンクを開ける。

失敗する場合は、Bot Token、Channel ID、Bot の権限、サーバーへの参加状態を確認してください。
