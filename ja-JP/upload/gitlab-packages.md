# GitLab Packages チャネルを追加する

## 始める前に必要なもの

必要なものは 3 つだけです。

| 必要なもの | 目的 |
| --- | --- |
| GitLab アカウント | アクセストークンを生成し、プロジェクトを所有するために使用します。 |
| GitLab Personal Access Token | ImgBed が GitLab API にアクセスし、プロジェクトを作成し、Generic Packages にファイルをアップロードするために使用します。 |
| Project name | プロジェクト名だけを入力できます。例: `imgbed`。 |

## 設定手順

### 手順 1: GitLab にサインインして Access Token を作成する

1. GitLab にサインインします。
2. 右上のアバターをクリックし、`Preferences` を開きます。
3. 左サイドバーから `Access Tokens` を開きます。
4. token に識別しやすい名前を付けます。
5. 自分の保守方針に合わせて有効期限を選択します。
6. `api` スコープを選択します。
7. 作成後すぐに token をコピーして保存します。

![legacy token を作成する](../../image/upload/gitlab-packages/点击生成旧版令牌.png)

![token 権限を選択する](../../image/upload/gitlab-packages/勾选令牌权限.png)

## 手順 2: ImgBed に GitLab Packages チャネルを入力する

アップロード設定で `GitLab Packages` を選択したら、次のように入力します。

| UI 項目 | 入力内容 |
| --- | --- |
| チャネル名 | 任意の名前。例: `GitLabPrimary`。 |
| Access Token | 先ほど作成した GitLab Personal Access Token。 |
| Project name | `imgbed` のような短い project 名、または `username/imgbed` のような完全なパス。 |
| Private repository | 必要に応じてオンまたはオフにします。 |
| Remark | 任意。例: `メインアップロードチャネル`。 |

![チャネルを設定する](../../image/upload/gitlab-packages/配置渠道内容.png)

## 手順 3: チャネルを保存する

項目を入力したら、保存をクリックします。

システムは次の詳細を処理します。

| システム動作 | 説明 |
| --- | --- |
| 短い project name | ImgBed は現在の GitLab アカウントを識別し、値を完全なプロジェクトパスに展開します。 |
| 完全な project path | ImgBed は `username/project` path を入力どおりに使用します。 |
| project 確認 | 現在の個人アカウントパスを使用する場合、存在しなければ ImgBed がプロジェクトを自動作成します。完全なパスを手動入力した場合、ImgBed はそのパスを直接使用します。 |
| 公開/非公開状態 | プロジェクトの可視性は現在のスイッチに従って同期されます。 |

## クイックチェックリスト

```text
Sign in to GitLab
-> Create an Access Token
-> Select only the api scope
-> Return to ImgBed and enter the token and project name
-> Save
-> If only a project name is entered, ImgBed adds the current username automatically
-> If username/project is entered, ImgBed uses it as-is
-> Upload a test image
```
