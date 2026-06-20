# Cloudflare R2 チャンネルの追加

Cloudflare R2 チャンネルは、Cloudflare の R2 バケットへファイルを保存するための設定です。

## 向いているケース

- Cloudflare Workers と同じ環境でストレージも管理したい。
- R2 バケットを ImgBed の主な保存先にしたい。
- 独自ドメインや CDN と組み合わせて画像配信したい。

## 事前に用意するもの

| 必要なもの | 用途 |
| --- | --- |
| Cloudflare アカウント | R2 と API Token を管理します |
| R2 バケット | ファイルの保存先 |
| Account ID | R2 操作に必要です |
| API Token | バケットへの読み書きに使います |
| カスタムドメイン | 任意。公開 URL を整えたい場合に使います |

## バケットを作成する

Cloudflare Dashboard で `R2 Object Storage` を開き、新しいバケットを作成します。

![R2 バケット作成](../../image/upload/cloudflare-r2/创建一个存储桶img-r2.png)

バケット名はあとで ImgBed に入力するため、正確に控えておきます。

## Account ID を確認する

Cloudflare のアカウント画面で Account ID を確認します。

![Account ID](../../image/upload/cloudflare-r2/获取账户id.png)

## ImgBed へ入力する

アップロード設定で「チャンネル追加」を開き、`Cloudflare R2` を選択します。

主な項目は次のとおりです。

| 項目 | 入力内容 |
| --- | --- |
| チャンネル名 | 自分が識別しやすい名前 |
| Account ID | Cloudflare の Account ID |
| Bucket 名 | 作成した R2 バケット名 |
| API Token | R2 へアクセスできる Token |
| カスタムドメイン | 任意。設定済みの場合のみ入力 |
| 保存ディレクトリ | 任意。通常は `imgbed` で問題ありません |

## 容量制限

必要に応じて容量制限を設定できます。

![容量制限](../../image/upload/cloudflare-r2/配置容量限制.png)

容量制限を有効にすると、設定した上限やしきい値に応じて、そのチャンネルへの書き込みを調整できます。

## 確認方法

1. 保存後に R2 チャンネルカードが表示される。
2. チャンネルが有効になっている。
3. テスト画像をアップロードする。
4. R2 バケットにオブジェクトが作成されている。
5. 返されたリンクがブラウザで開ける。

## よくある原因

- Account ID または Bucket 名が間違っている。
- API Token に対象バケットの権限がない。
- カスタムドメインが R2 バケットに正しく接続されていない。
- 容量制限により書き込み対象から外れている。
