# 新增 GitHub Releases 渠道

## 新增前要準備什麼

| 需要準備 | 用途 |
| --- | --- |
| GitHub 帳號 | 用來建立 Token 與儲存檔案 |
| GitHub Access Token | 讓 ImgBed 呼叫 GitHub API、建立 Release、上傳檔案 |
| Repository 名稱 | 可以只填 repo 名稱，例如 `image` |

## 新增步驟

### 第一步：建立 GitHub Token

1. 登入 GitHub。
2. 進入個人設定。
3. 開啟 Developer settings。
4. 建立一組 Token。
5. 權限至少需要可以建立 repo、讀寫 repo 內容與管理 Release。

![新增 GitHub 權限](../../image/upload/github-releases/添加github权限.png)

建立完成後，請立刻複製 Token。GitHub 通常只會顯示一次。

### 第二步：回 ImgBed 填寫渠道

在上傳設定裡選擇 `GitHub Releases`，依照下面填：

| 頁面欄位 | 填寫內容 |
| --- | --- |
| 渠道名稱 | 自己看得懂的名字，例如 `GitHub主渠道` |
| Access Token | 剛才建立的 GitHub Token |
| Repository 名稱 | 可以填 `image`，也可以填完整 `username/image` |
| 私有倉庫 | 依照需要開啟或關閉 |
| 備註 | 選填 |

![填寫 GitHub 渠道設定](../../image/upload/github-releases/填写github渠道配置.png)

## Repository 名稱怎麼填

| 寫法 | 說明 |
| --- | --- |
| `image` | 系統會用目前 Token 對應的 GitHub 帳號補成完整 repo 路徑 |
| `username/image` | 系統會直接使用你填的完整路徑 |

如果 repo 不存在，系統會嘗試建立。建議一開始先用新的 repo 名稱，避免和既有專案混在一起。

## 快速流程

```text
登入 GitHub
-> 建立 Access Token
-> 勾選 repo / release 相關權限
-> 複製 Token
-> 回 ImgBed 新增 GitHub Releases 渠道
-> 填 Token 和 Repository 名稱
-> 儲存
-> 上傳測試圖片
```
