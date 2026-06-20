# Hugging Face チャンネルの追加

Hugging Face チャンネルは、Hugging Face の Repository をファイル保存先として利用します。

## 事前に用意するもの

| 必要なもの | 用途 |
| --- | --- |
| Hugging Face アカウント | Repository と Token を管理します |
| Repository | ファイルの保存先 |
| Access Token | ImgBed から Repository へ書き込むため |
| 保存ディレクトリ | 任意。ファイルを置くパス |

## Token を作成する

Hugging Face の設定画面で Access Token を作成します。Repository へ書き込める権限を付与してください。

![Token 作成](../../image/upload/huggingface/创建令牌.png)

Token は作成後にコピーし、安全に保存します。

## ImgBed へ入力する

アップロード設定で `Hugging Face` を選びます。

| 項目 | 入力内容 |
| --- | --- |
| チャンネル名 | 例：`HF Storage` |
| Repository | `ユーザー名/リポジトリ名` |
| Token | Hugging Face Access Token |
| 保存ディレクトリ | 任意。通常は `imgbed` |
| 備考 | 任意 |

![チャンネル追加](../../image/upload/huggingface/添加渠道.png)

## 確認方法

1. 保存後にチャンネルカードが表示される。
2. テスト画像をアップロードする。
3. Hugging Face Repository にファイルが追加される。
4. ImgBed のリンクからアクセスできる。

## 運用の注意

- Repository の公開範囲に注意してください。公開 Repository に置いたファイルは外部から見える可能性があります。
- Token には必要な権限だけを付けます。
- 大量ファイルの保存や高頻度配信では、Hugging Face 側の制限に注意してください。
