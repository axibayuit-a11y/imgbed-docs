# Telegram チャンネルの追加

Telegram チャンネルを保存先として使うには、Bot を作成し、その Bot を保存用チャンネルへ追加します。

## 事前に用意するもの

| 必要なもの | 用途 |
| --- | --- |
| Telegram アカウント | Bot とチャンネルを作成します |
| `@BotFather` | Telegram Bot を作成します |
| Telegram チャンネル | ファイルの保存先 |
| `@userinfobot` | チャンネルの Chat ID を確認します |

## Bot を作成する

1. Telegram で `@BotFather` を検索します。
2. チャットを開き、`/newbot` を送信します。
3. 表示名と username を入力します。username は通常 `bot` で終わる必要があります。
4. 作成後に返される Token をコピーします。

![Bot Token](../../image/upload/telegram/保存机器人令牌.png)

## 保存用チャンネルを作成する

Telegram で新しいチャンネルを作成します。公開チャンネルでも非公開チャンネルでも利用できます。

![チャンネル作成](../../image/upload/telegram/新建频道.png)

## Bot をチャンネルへ追加する

作成したチャンネルの設定から、先ほどの Bot をメンバーまたは管理者として追加します。

![Bot 追加](../../image/upload/telegram/邀请机器人进频道里.png)

安定してアップロードするため、Bot には管理者権限を付けるのがおすすめです。

## Chat ID を取得する

1. Telegram で `@userinfobot` を検索します。
2. `Start` を押します。
3. Bot の選択肢から `Channel` を選びます。
4. 対象チャンネルのメッセージを `@userinfobot` へ送ります。
5. `Id: -100...` で始まる数字をコピーします。

![Chat ID](../../image/upload/telegram/获取频道id.png)

## ImgBed へ入力する

アップロード設定で `Telegram` を選びます。

| 項目 | 入力内容 |
| --- | --- |
| チャンネル名 | 例：`Telegram Main` |
| Bot Token | `@BotFather` で取得した Token |
| Session ID / Chat ID | `-100` で始まるチャンネル ID |
| Relay Proxy URL | 任意。Telegram への接続が不安定な場合だけ入力 |
| 備考 | 任意 |

![Telegram 設定](../../image/upload/telegram/编辑配置.png)

## 確認方法

1. 保存後に Telegram チャンネルカードが表示される。
2. テスト画像をアップロードする。
3. 対象 Telegram チャンネルにファイルが投稿される。
4. ImgBed のリンクが開ける。

## クイック手順

```text
@BotFather で Bot を作成
-> Bot Token をコピー
-> Telegram チャンネルを作成
-> Bot をチャンネルに追加し管理者権限を付与
-> @userinfobot で -100 から始まる Chat ID を取得
-> ImgBed に Bot Token と Chat ID を入力
-> 保存してテストアップロード
```

## 参考

1. Telegram Bot: https://core.telegram.org/bots
2. Telegram Bot API: https://core.telegram.org/bots/api
