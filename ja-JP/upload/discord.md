# Discord チャネルを追加する

## 始める前に必要なもの

| 必要なもの | 用途 |
| --- | --- |
| Discord アカウント | サーバー、チャンネル、開発者アプリケーションの作成に使用します。 |
| Discord サーバー | bot がチャンネルにアクセスするには、先にサーバーへ参加している必要があります。 |
| テキストチャンネル | 画像とファイルはこのチャンネルへ送信されます。 |
| Discord Developer Portal | アプリケーションと bot の作成、および `Bot Token` の取得に使用します。 |

## 追加する場所

1. システム設定を開きます。
2. アップロード設定に移動します。
3. 右上のチャネル追加をクリックします。
4. `Discord` を選択します。

## 項目リファレンス

| 項目 | 役割 | 必須 |
| --- | --- | --- |
| チャネル名 | このチャネルを識別しやすい名前。例: "Discord Primary"。 | 必須 |
| Bot Token | Discord bot token。 | 必須 |
| Channel ID | 対象テキストチャンネルの ID。 | 必須 |
| Proxy URL (optional) | Discord CDN へのアクセスが不安定な場合にのみ使用します。`https://` を含む完全な URL を入力します。 | 任意 |

## 設定手順

### 1. Discord サーバーとテキストチャンネルを作成する

1. Discord を開きます。
2. 新しいサーバーを作成するか、自分が所有している既存サーバーを使用します。
3. そのサーバー内にテキストチャンネルを作成します。

![サーバーを作成する](../../image/upload/discord/创建服务器.png)

### 2. Discord Developer Portal で bot を作成する

1. Discord Developer Portal を開きます: `https://discord.com/developers/applications`
2. `New Application` をクリックします。
3. アプリケーション名を入力して作成します。
4. 左サイドバーから `Bot` ページを開きます。
5. `Bot` ページで token を生成またはリセットします。
6. token を保存します。

この token が、ImgBed に入力する `Bot Token` です。

![bot token を表示する](../../image/upload/discord/查看机器人令牌.png)

### 3. OAuth2 招待リンクを生成して bot をインストールする

1. 左サイドバーから `OAuth2` ページを開きます。
2. スコープで `bot` を選択します。
3. 権限エリアで次の権限を有効にします。

| 権限 | 必須 |
| --- | --- |
| View Channels | はい |
| Send Messages | はい |
| Attach Files | はい |
| Read Message History | はい |

4. ページ下部で integration type が `Guild Install` になっていることを確認します。
5. 生成された URL をコピーします。
6. その URL をブラウザーで開きます。
7. 対象サーバーを選択します。
8. 認可フローを完了します。

![OAuth2 で bot 権限を選択する](../../image/upload/discord/在oa2勾选机器人权限.png)

![bot をチャンネルに招待する](../../image/upload/discord/邀请机器人到频道.png)

### 4. Developer Mode を有効にして Channel ID をコピーする

1. Discord 左下の avatar の横にある歯車アイコンをクリックします。
2. 左サイドバーから Advanced を開きます。
3. Developer Mode を有効にします。
4. 対象のテキストチャンネルに戻ります。
5. チャンネル名を右クリックします。
6. Copy Channel ID をクリックします。

コピーした番号が、ImgBed で必要な `Channel ID` です。

![developer mode を有効にする](../../image/upload/discord/开启开发者权限.png)

![channel ID をコピーする](../../image/upload/discord/复制群频道id.png)

### 5. ImgBed に Discord チャネルを入力する

チャネル設定ダイアログに戻り、次のように入力します。

| UI 項目 | 値 |
| --- | --- |
| チャネル名 | カスタムチャネル名。例: `DiscordPrimary`。 |
| Bot Token | Discord Developer Portal の `Bot` ページで保存した token。 |
| Channel ID | Discord からコピーした channel ID。 |
| Proxy URL (optional) | 必要な場合のみ。例: `https://your-proxy.example.com`. |

完了したら保存をクリックします。

![Discord チャネル設定を追加する](../../image/upload/discord/添加dc新渠道配置.png)

## 確認方法

| 確認項目 | 確認方法 |
| --- | --- |
| チャネルカードが表示される | 保存後、アップロード設定ページに Discord チャネルカードが表示されます。 |
| チャネルを有効化できる | Active スイッチがオンのままになります。 |
| 設定が保存されている | 詳細ビューに Bot Token と Channel ID が保存されたことが表示されます。 |
| アップロードできる | テスト画像をアップロードし、対象の Discord テキストチャンネルに表示されることを確認します。 |

## クイックチェックリスト

```text
Create a Discord server
-> Create a text channel
-> Create a bot in the Discord Developer Portal
-> Save the Bot Token from the Bot page
-> In OAuth2, select bot, View Channels, Send Messages, Attach Files, and Read Message History
-> Copy the generated URL and authorize the bot for the target server
-> Make sure the target text channel grants the same permissions
-> Enable Developer Mode
-> Right-click the target text channel and copy the Channel ID
-> Enter the Bot Token and Channel ID in ImgBed
-> Save and upload a test image
```

## 参考

1. Discord Developers 入門: https://docs.discord.com/developers/quick-start/getting-started
2. Discord ヘルプ - User/Server/Message ID の確認場所: https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID
