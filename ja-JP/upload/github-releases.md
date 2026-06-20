# GitHub Releases チャンネルの追加

GitHub Releases チャンネルは、GitHub リポジトリの Release Assets を保存先として利用します。

## 向いているケース

- 既に GitHub をよく使っている。
- 小規模な画像や配布ファイルを Release Assets に置きたい。
- GitHub Token で管理できる保存先を増やしたい。

## 事前に用意するもの

| 必要なもの | 用途 |
| --- | --- |
| GitHub アカウント | リポジトリと Token を管理します |
| リポジトリ | Release を置く場所 |
| Personal Access Token | Release Assets へアップロードする権限 |
| Release タグ | Assets を紐付ける Release |

## Token 権限

GitHub の Personal Access Token には、対象リポジトリの Release を操作できる権限が必要です。

![GitHub 権限](../../image/upload/github-releases/添加github权限.png)

プライベートリポジトリを使う場合は、プライベートリポジトリへのアクセス権も付けてください。

## ImgBed へ入力する

アップロード設定で `GitHub Releases` を選びます。

| 項目 | 入力内容 |
| --- | --- |
| チャンネル名 | 例：`GitHub Release` |
| Owner | リポジトリ所有者 |
| Repo | リポジトリ名 |
| Token | GitHub Personal Access Token |
| Release Tag | Assets を置く Release タグ |
| 保存パス | 任意 |

![GitHub 設定](../../image/upload/github-releases/填写github渠道配置.png)

## 確認方法

1. 保存後にチャンネルカードが表示される。
2. テスト画像をアップロードする。
3. 対象リポジトリの Release Assets にファイルが追加される。
4. 返されたリンクが開ける。

## 注意点

- GitHub Releases は大量ファイルや大容量配信に向いた専用ストレージではありません。
- Token の権限は対象リポジトリに絞ると安全です。
- Release や Assets を手動で削除すると、ImgBed 側のリンクが開けなくなることがあります。
