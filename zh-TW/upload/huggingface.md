# HuggingFace 渠道新增說明

## 新增前要準備什麼

在開始之前，你只需要準備這 3 樣：

| 需要準備 | 用途 |
| --- | --- |
| Hugging Face 帳號 | 用來生成 Access Token，并作為倉庫所屬帳號 |
| Hugging Face User Access Token | 系統通過它訪問 Hugging Face API、建立倉庫、上傳檔案 |
| 一個倉庫名稱 | 可以只填倉庫名，例如 `image` |

## 新增步驟

### 第一步：登入 Hugging Face 并生成 Access Token

操作順序如下：

1. 登入 Hugging Face。
2. 點擊右上角頭像，進入 `Settings`。
3. 在左側找到 `Access Tokens`。
4. 點擊建立新的 Token。
5. 給這枚令牌起一個名字，方便你自己識別。
6. 在權限里選擇 `write`。
7. 建立後立即複製保存。

![建立令牌](../../image/upload/huggingface/创建令牌.png)

## 第二步：回到系統里填寫 HuggingFace 渠道

在上傳設定里選擇 `HuggingFace` 後，按下面這套填：

| 頁面欄位 | 你該填什麼 |
| --- | --- |
| 渠道名稱 | 你自己起，比如 `HuggingFace主仓库` |
| 倉庫名 | 可以只填倉庫名，例如 `image`；也可以直接填完整路徑，例如 `用户名/image` |
| Access Token | 剛才生成的 Hugging Face User Access Token |
| 私有倉庫 | 按你的需求決定開或關 |
| 備注 | 可選，例如 `主上传渠道` |

![新增渠道](../../image/upload/huggingface/添加渠道.png)

## 第三步：保存渠道設定

欄位填好以後，直接點擊保存。
這一步系統會做幾件事：

| 系統動作 | 說明 |
| --- | --- |
| 只填倉庫名時 | 系統會先識別當前 Hugging Face 帳號，再自動拼成完整倉庫路徑 |
| 填完整路徑時 | 系統直接按你填寫的 `名字/仓库名` 執行，不再改寫 |
| 檢查倉庫是否存在 | 如果你走的是當前個人帳號這條主線，倉庫不存在時會嘗試自動建立；如果你手動填寫完整路徑，則按該路徑直接執行 |
| 倉庫類型 | 這條線使用的是 `dataset` 倉庫 |
| 同步公開 / 私有狀態 | 會按你當前開關設定處理 |


## 渠道的操作流程總結

```text
Sign in to Hugging Face
-> Create an Access Token
-> Select write permission
-> Return to ImgBed and enter the token and repository name
-> Save
-> If only a repo name is entered, ImgBed adds the current username automatically
-> If username/repo is entered, ImgBed uses it as-is
-> ImgBed checks or creates the dataset repository
-> Upload a test image
```