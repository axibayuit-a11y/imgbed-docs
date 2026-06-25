# GitLab Packages 渠道新增說明

## 新增前要準備什麼

在開始之前，你只需要準備這 3 樣：

| 需要準備 | 用途 |
| --- | --- |
| GitLab 帳號 | 用來生成 Access Token，并作為專案所屬帳號 |
| GitLab Personal Access Token | 系統通過它訪問 GitLab API、建立專案、上傳 Generic Packages 檔案 |
| 一個專案名稱 | 可以只填專案名，例如 `imgbed` |

## 新增步驟

### 第一步：登入 GitLab 并生成 Access Token

操作順序如下：

1. 登入 GitLab。
2. 點擊右上角頭像，進入 `Preferences`。
3. 在左側找到 `Access Tokens`。
4. 給這枚令牌起一個名字，方便你自己識別。
5. 過期時間按你的使用習慣選擇。
6. 在權限里勾選 `api`。
7. 建立後立即複製保存。

![點擊生成舊版令牌](../../image/upload/gitlab-packages/点击生成旧版令牌.png)

![勾選令牌權限](../../image/upload/gitlab-packages/勾选令牌权限.png)


## 第二步：回到系統里填寫 GitLab Packages 渠道

在上傳設定里選擇 `GitLab Packages` 後，按下面這套填：

| 頁面欄位 | 你該填什麼 |
| --- | --- |
| 渠道名稱 | 你自己起，比如 `GitLab主仓库` |
| Access Token | 剛才生成的 GitLab Personal Access Token |
| 專案名稱 | 可以只填專案名，例如 `imgbed`；也可以直接填完整路徑，例如 `用户名/imgbed` |
| 私有倉庫 | 按你的需求決定開或關 |
| 備注 | 可選，例如 `主上传渠道` |

![設定渠道內容](../../image/upload/gitlab-packages/配置渠道内容.png)


## 第三步：保存渠道設定

欄位填好以後，直接點擊保存。
這一步系統會做幾件事：

| 系統動作 | 說明 |
| --- | --- |
| 只填專案名時 | 系統會先識別當前 GitLab 帳號，再自動拼成完整專案路徑 |
| 填完整路徑時 | 系統直接按你填寫的 `名字/项目名` 執行，不再改寫 |
| 檢查專案是否存在 | 如果你走的是當前個人帳號這條主線，專案不存在時會自動建立；如果你手動填寫完整路徑，則按該路徑直接執行 |
| 同步專案公開 / 私有狀態 | 會按你當前開關設定處理 |

## 渠道的操作流程總結

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