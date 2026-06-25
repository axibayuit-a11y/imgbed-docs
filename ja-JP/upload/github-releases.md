# GitHub Releases チャネルを追加する

## 始める前に必要なもの

必要なものは 3 つだけです。

| 必要なもの | 目的 |
| --- | --- |
| GitHub アカウント | アクセストークンを生成し、リポジトリを所有するために使用します。 |
| GitHub Access Token | ImgBed が GitHub API にアクセスし、release を作成し、ファイルをアップロードするために使用します。 |
| Repository name | リポジトリ名だけを入力できます。例: `image`。 |

## 設定手順

### 手順 1: GitHub にサインインして Access Token を作成する

1. GitHub にサインインします。
2. 右上のアバターをクリックし、`Settings` を開きます。
3. 左サイドバーから `Developer settings` を開きます。
4. `Personal access tokens` を開きます。
5. `Tokens (classic)` を開きます。
6. `Generate new token (classic)` をクリックします。
7. token に識別しやすい名前を付けます。
8. 自分の保守方針に合わせて有効期限を選択します。
9. `repo` と `workflow` スコープを選択します。
10. 作成後すぐに token をコピーして保存します。

![GitHub 権限を追加する](../../image/upload/github-releases/添加github权限.png)

## 手順 2: ImgBed に GitHub Releases チャネルを入力する

アップロード設定で `GitHub Releases` を選択したら、次のように入力します。

| UI 項目 | 入力内容 |
| --- | --- |
| チャネル名 | 任意の名前。例: `GitHubPrimary`。 |
| Access Token | 先ほど作成した GitHub Personal Access Token。 |
| Repository name | `image` のような短い repo 名、または `username/image` のような完全なパス。 |
| Private repository | 必要に応じてオンまたはオフにします。 |
| Remark | 任意。例: `メインアップロードチャネル`。 |

![GitHub チャネル設定を入力する](../../image/upload/github-releases/填写github渠道配置.png)

## 手順 3: チャネルを保存する

項目を入力したら、保存をクリックします。

システムは次の詳細を処理します。

| システム動作 | 説明 |
| --- | --- |
| 短い repository name | ImgBed は現在の GitHub アカウントを識別し、値を完全なリポジトリパスに展開します。 |
| 完全な repository path | ImgBed は `username/repository` path を入力どおりに使用します。 |
| repository 確認 | 現在の個人アカウントパスを使用する場合、存在しなければ ImgBed がリポジトリを自動作成します。完全なパスを手動入力した場合、ImgBed はそのパスを直接使用します。 |
| 公開/非公開状態 | リポジトリの可視性は現在のスイッチに従って同期されます。 |

## クイックチェックリスト

GitHub Releases は次のように動作します。

```text
Sign in to GitHub
-> Create an Access Token
-> Return to ImgBed and enter the token and repository name
-> Save
-> If only a repo name is entered, ImgBed adds the current username automatically
-> If username/repo is entered, ImgBed uses it as-is
-> Upload a test image
```
