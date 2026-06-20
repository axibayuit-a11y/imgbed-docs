# GitLab Packages チャンネルの追加

GitLab Packages チャンネルは、GitLab の Generic Package Registry を保存先として使います。

## 事前に用意するもの

| 必要なもの | 用途 |
| --- | --- |
| GitLab アカウント | プロジェクトと Token を管理します |
| GitLab プロジェクト | Package を保存する場所 |
| Access Token | Package Registry へアップロードするため |
| Project ID | ImgBed から対象プロジェクトを指定します |

## Token を作成する

GitLab の設定から Access Token を作成します。必要な権限を選びます。

![旧版 Token 生成](../../image/upload/gitlab-packages/点击生成旧版令牌.png)

アップロードと読み取りに必要な権限を付与します。

![Token 権限](../../image/upload/gitlab-packages/勾选令牌权限.png)

Token は作成直後にしか確認できない場合があります。必ずコピーして安全に保管してください。

## ImgBed へ入力する

アップロード設定で `GitLab Packages` を選びます。

| 項目 | 入力内容 |
| --- | --- |
| チャンネル名 | 例：`GitLab Packages` |
| GitLab Host | `https://gitlab.com` または自前 GitLab の URL |
| Project ID | 対象プロジェクトの ID |
| Token | 作成した Access Token |
| Package Name | パッケージ名 |
| Version | バージョン名 |
| 保存パス | 任意 |

![GitLab 設定](../../image/upload/gitlab-packages/配置渠道内容.png)

## 確認方法

1. 保存後にチャンネルカードが表示される。
2. テストファイルをアップロードする。
3. GitLab の Package Registry にファイルが登録される。
4. ImgBed のリンクからアクセスできる。

## よくある原因

- Project ID が間違っている。
- Token に Package Registry への書き込み権限がない。
- 自前 GitLab の Host URL が正しくない。
- プロジェクト側で Package Registry が無効になっている。
