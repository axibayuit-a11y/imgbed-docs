# Telegram チャネルを追加する

## 始める前に必要なもの

| 必要なもの | 用途 |
| --- | --- |
| Telegram アカウント | bot と保存先チャンネルの作成に使用します。 |
| `@BotFather` | Telegram bot の作成に使用します。 |
| Telegram チャンネル | ファイルの最終的な保存先です。 |
| `@userinfobot` | チャンネルの `Chat ID` を確認するために使用します。 |

## 追加する場所

1. システム設定を開きます。
2. アップロード設定に移動します。
3. 右上のチャネル追加をクリックします。
4. `Telegram` を選択します。

## 項目リファレンス

| 項目 | 役割 | 必須 |
| --- | --- | --- |
| チャネル名 | このチャネルを識別しやすい名前。例: "Telegram Primary"。 | 必須 |
| Active | このチャネルを有効化または無効化します。 | 推奨 |
| Bot Token | Telegram bot の token。 | 必須 |
| Session ID (Chat ID) | Telegram チャンネルの ID。 | 必須 |
| Relay Proxy URL (optional) | Telegram へのアクセスが不安定な場合にのみ使用します。`https://` を含む完全な proxy URL を入力します。 | 任意 |
| Remark | 今後の保守用メモ。 | 任意 |

## 設定手順

### 1. Telegram bot を作成する

1. Telegram を開き、`@BotFather` を検索します。
2. チャットを開き、`Start` をクリックします。
3. `/newbot` を送信します。
4. 指示に従って bot の表示名を入力します。
5. 続いて bot のユーザー名を入力します。ユーザー名は通常 `bot` で終わる必要があります。
6. bot が作成されると、`@BotFather` が bot token を返します。

この token が、ImgBed に入力する `Bot Token` です。

![bot token を保存する](../../image/upload/telegram/保存机器人令牌.png)

### 2. チャンネルを作成する

1. Telegram で新規チャンネルをクリックします。
2. チャンネル名を入力します。
3. チャンネルの作成を完了します。

公開チャンネルと非公開チャンネルのどちらも使用できます。

![チャンネルを作成する](../../image/upload/telegram/新建频道.png)

### 3. bot をチャンネルに追加する

1. 先ほど作成したチャンネルを開きます。
2. チャンネル設定を開きます。
3. メンバーまたは管理者を追加します。
4. 作成した bot ユーザー名を検索します。
5. bot をチャンネルに追加します。

アップロードの信頼性を高めるには、bot に管理者権限を付与してください。

![bot をチャンネルに招待する](../../image/upload/telegram/邀请机器人进频道里.png)

### 4. User Info - Get ID - IDbot で Channel ID を取得する

1. Telegram で `@userinfobot` を検索します。表示名は通常 `User Info - Get ID - IDbot` です。
2. チャットを開き、`Start` をクリックします。
3. bot が提示する選択肢から `Channel` を選びます。
4. メッセージピッカーで対象チャンネルを選択し、`@userinfobot` に送信します。
5. `@userinfobot` が結果を返したら、`Id: -100...` と表示されている番号をコピーします。

`-100` で始まる番号が、ImgBed で必要な `Session ID (Chat ID)` です。

![channel ID を取得する](../../image/upload/telegram/获取频道id.png)

### 5. ImgBed に Telegram チャネルを入力する

チャネル設定ダイアログに戻り、次のように入力します。

| UI 項目 | 値 |
| --- | --- |
| Channel Identifier | カスタムチャネル名。例: `TelegramPrimary`。 |
| Active | 推奨。 |
| Bot Token | `@BotFather` から取得した bot token。 |
| Session ID (Chat ID) | `@userinfobot` が返した `-100...` 番号。 |
| Relay Proxy URL (optional) | 必要な場合のみ。例: `https://your-tg-proxy.example.com`. |
| Remark | 任意のメモ。 |

完了したら保存をクリックします。

![設定を編集する](../../image/upload/telegram/编辑配置.png)

## 確認方法

| 確認項目 | 確認方法 |
| --- | --- |
| チャネルカードが表示される | 保存後、アップロード設定ページに Telegram チャネルカードが表示されます。 |
| チャネルを有効化できる | Active スイッチがオンのままになります。 |
| 設定が保存されている | 詳細ビューに Bot Token と Chat ID が保存されたことが表示されます。 |
| アップロードできる | テスト画像をアップロードし、対象の Telegram チャンネルに表示されることを確認します。 |

## クイックチェックリスト

```text
Create a bot with @BotFather
-> Save the Bot Token
-> Create a Telegram channel
-> Add the bot to the channel and grant administrator permissions
-> Search for @userinfobot and choose Channel
-> Forward any message from the channel to @userinfobot
-> Copy the returned Id: -100...
-> Enter the Bot Token and Chat ID in ImgBed
-> Save and upload a test image
```

## 参考

1. Telegram bots: https://core.telegram.org/bots
2. Telegram Bot API: https://core.telegram.org/bots/api
