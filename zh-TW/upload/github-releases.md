# GitHub Releases 渠道新增說明

## 新增前要準備什麼

在開始之前，你只需要準備這 3 樣：

| 需要準備 | 用途 |
| --- | --- |
| GitHub 帳號 | 用來生成 Access Token，并作為倉庫所屬帳號 |
| GitHub Access Token | 系統通過它訪問 GitHub API、建立 Release、上傳檔案 |
| 一個倉庫名稱 | 可以只填倉庫名，例如 `image` |

## 新增步驟

### 第一步：登入 GitHub 并生成 Access Token

操作順序如下：

1. 登入 GitHub。
2. 點擊右上角頭像，進入 `Settings`。
3. 在左側找到 `Developer settings`。
4. 進入 `Personal access tokens`。
5. 打開 `Tokens (classic)`。
6. 點擊 `Generate new token (classic)`。
7. 給這枚令牌起一個名字，方便你自己識別。
8. 過期時間按你的使用習慣選擇。
9. 在權限里勾選 `repo` 和 `workflow`。
10. 建立後立即複製保存。

![新增github權限](../../image/upload/github-releases/添加github权限.png)


## 第二步：回到系統里填寫 GitHub Releases 渠道

在上傳設定里選擇 `GitHub Releases` 後，按下面這套填：

| 頁面欄位 | 你該填什麼 |
| --- | --- |
| 渠道名稱 | 你自己起，比如 `GitHub主仓库` |
| Access Token | 剛才生成的 GitHub Personal Access Token |
| 倉庫名稱 | 可以只填倉庫名，例如 `image`；也可以直接填完整路徑，例如 `用户名/image` |
| 私有倉庫 | 按你的需求決定開或關 |
| 備注 | 可選，例如 `主上传渠道` |


![填寫github渠道設定](../../image/upload/github-releases/填写github渠道配置.png)

## 第三步：保存渠道設定

欄位填好以後，直接點擊保存。
這一步系統會做兩件事：

| 系統動作 | 說明 |
| --- | --- |
| 只填倉庫名時 | 系統會先識別當前 GitHub 帳號，再自動拼成完整倉庫地址 |
| 填完整路徑時 | 系統直接按你填寫的 `名字/仓库名` 執行，不再改寫 |
| 檢查倉庫是否存在 | 如果你走的是當前個人帳號這條主線，倉庫不存在時會自動建立；如果你手動填寫完整路徑，則按該路徑直接執行 |
| 同步公開 / 私有狀態 | 會按你當前開關設定處理 |

## 渠道的操作流程總結

GitHub Releases 這條線可以直接理解成：

```text
Sign in to GitHub
-> Create an Access Token
-> Return to ImgBed and enter the token and repository name
-> Save
-> If only a repo name is entered, ImgBed adds the current username automatically
-> If username/repo is entered, ImgBed uses it as-is
-> Upload a test image
```