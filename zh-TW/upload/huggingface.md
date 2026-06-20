# 新增 Hugging Face 渠道

## 新增前要準備什麼

| 需要準備 | 用途 |
| --- | --- |
| Hugging Face 帳號 | 用來建立 Token 與擁有儲存庫 |
| Hugging Face User Access Token | 讓 ImgBed 呼叫 Hugging Face API、建立 repo、上傳檔案 |
| Repository 名稱 | 可以只填 repo 名稱，例如 `image` |

## 新增步驟

### 第一步：建立 Access Token

1. 登入 Hugging Face。
2. 點右上角頭像，進入 `Settings`。
3. 從左側開啟 `Access Tokens`。
4. 建立新的 Token。
5. 取一個好辨識的名稱。
6. 權限選 `write`。
7. 建立後立刻複製 Token。

![建立 Token](../../image/upload/huggingface/创建令牌.png)

## 第二步：回 ImgBed 填寫 Hugging Face 渠道

在上傳設定裡選擇 `Hugging Face`，依照下面填：

| 頁面欄位 | 填寫內容 |
| --- | --- |
| 渠道名稱 | 自己取，例如 `hf-main` |
| Repository 名稱 | 可以填 `image`，也可以填完整 `username/image` |
| Access Token | 剛才建立的 Hugging Face User Access Token |
| 私有倉庫 | 依照需要開啟或關閉 |
| 備註 | 選填，例如 `主要上傳渠道` |

![新增渠道](../../image/upload/huggingface/添加渠道.png)

## 第三步：儲存渠道

欄位填好後按儲存。

系統會處理這些細節：

| 項目 | 說明 |
| --- | --- |
| 短 repo 名稱 | 如果只填 `image`，系統會用目前 Token 對應的帳號補成完整路徑 |
| 完整 repo 路徑 | 如果填 `username/image`，系統會直接使用 |
| repo 不存在 | 系統會嘗試建立 |
| 私有 repo | 會依照你的開關設定建立或使用 |

## 快速流程

```text
登入 Hugging Face
-> 建立 write 權限的 User Access Token
-> 複製 Token
-> 回 ImgBed 選 Hugging Face
-> 填 Repository 名稱和 Token
-> 儲存
-> 上傳測試圖片
```
