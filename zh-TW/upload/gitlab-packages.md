# 新增 GitLab Packages 渠道

## 新增前要準備什麼

| 需要準備 | 用途 |
| --- | --- |
| GitLab 帳號 | 用來建立 Token 與擁有專案 |
| GitLab Personal Access Token | 讓 ImgBed 呼叫 GitLab API、建立專案、上傳到 Generic Packages |
| Project 名稱 | 可以只填專案名，例如 `imgbed` |

## 新增步驟

### 第一步：建立 GitLab Token

1. 登入 GitLab。
2. 進入個人偏好設定。
3. 開啟 Access Tokens。
4. 建立一組 Personal Access Token。
5. 權限建議包含 `api`，確保可以建立專案與上傳套件。

![建立舊版 Token](../../image/upload/gitlab-packages/点击生成旧版令牌.png)

![勾選 Token 權限](../../image/upload/gitlab-packages/勾选令牌权限.png)

建立完成後，請立刻複製 Token。

## 第二步：回 ImgBed 填寫渠道

選擇 `GitLab Packages` 後，依照下面填：

| 頁面欄位 | 填寫內容 |
| --- | --- |
| 渠道名稱 | 自己取，例如 `GitLab主渠道` |
| Access Token | 剛才建立的 GitLab Personal Access Token |
| Project 名稱 | 可以填短名稱 `imgbed`，也可以填完整 `username/imgbed` |
| 備註 | 選填 |

![設定渠道內容](../../image/upload/gitlab-packages/配置渠道内容.png)

## Project 名稱怎麼填

| 寫法 | 說明 |
| --- | --- |
| 短專案名 | ImgBed 會識別目前 GitLab 帳號，補成完整專案路徑 |
| 完整路徑 | ImgBed 會照你填的 `username/project` 使用 |
| 專案檢查 | 如果是目前個人帳號路徑，專案不存在時會嘗試自動建立 |

## 快速流程

```text
登入 GitLab
-> 建立 Personal Access Token
-> 勾選 api 權限
-> 回 ImgBed 填 Token 和 Project 名稱
-> 儲存
-> 上傳測試圖片
```
