# pCloud 渠道新增說明

## 適合什麼場景

- 你有一個 pCloud 帳號，想把圖片保存到 pCloud 空間里。
- 你可以接受用帳號郵箱和密碼作為渠道憑據。


## 新增前要準備什麼

| 需要準備 | 用途 |
| --- | --- |
| pCloud 帳號郵箱 | 登入 pCloud API |
| pCloud 密碼 | 登入 pCloud API |
| 主機域名 | 預設 `api.pcloud.com`，歐洲區可用 `eapi.pcloud.com` |
| 存儲目錄 | 檔案保存目錄，預設 `imgbed` |

## 入口位置

1. 進入系統設定。
2. 打開上傳設定。
3. 點擊右上角“新增渠道”。
4. 選擇 `pCloud`。

## 欄位說明

| 欄位 | 作用 | 是否必填 |
| --- | --- | --- |
| 渠道名稱 | 用來區分當前 pCloud 渠道，例如 `axibayuit` | 是 |
| 賬戶郵箱 | pCloud 登入郵箱 | 是 |
| 密碼 | pCloud 登入密碼 | 是 |
| 主機域名 | pCloud API 域名，預設 `api.pcloud.com` | 否 |
| 存儲目錄 | 檔案保存目錄，預設 `imgbed` | 否 |

主機域名一般這樣選：

| 帳號區域 | 主機域名 |
| --- | --- |
| 預設 / 美國區 | `api.pcloud.com` |
| 歐洲區 | `eapi.pcloud.com` |

## 新增步驟

1. 打開上傳設定頁面。
2. 點擊“新增渠道”。
3. 選擇 `pCloud`。
4. 渠道名稱填一個自己能看懂的名字。
5. 賬戶郵箱填 pCloud 登入郵箱。
6. 密碼填 pCloud 登入密碼。
7. 主機域名預設 `api.pcloud.com`；歐洲區帳號可改成 `eapi.pcloud.com`。
8. 存儲目錄預設 `imgbed`，也可以改成自己的目錄。
9. 點擊保存。

![設定渠道](../../image/upload/pcloud/配置渠道.png)

## 新增完成後怎么檢查

| 檢查項 | 檢查方式 |
| --- | --- |
| 渠道卡片是否出現 | 保存後，上傳設定頁面應顯示 pCloud 渠道卡片 |
| 渠道是否啟用 | 卡片右上角開關應保持開啟 |
| 郵箱是否顯示 | 卡片里應能看到當前 pCloud 郵箱 |
| 容量查詢是否正常 | 點擊查詢，成功後會顯示已用容量和總容量 |
| 上傳是否正常 | 上傳一張測試圖片，確認 pCloud 的存儲目錄里出現檔案 |

![查詢額度成功](../../image/upload/pcloud/查询额度成功.png)

## 常見問題

### 為什麼不用 OAuth2？

pCloud 的 OAuth2 不是預設自助可用，需要發郵件讓官方開啟。

而且當前 OAuth2 授權方式還不支援我們需要的短期上傳連結流程，所以這里直接使用帳號郵箱和密碼登入。

### 主機域名填什麼？

預設填：

```text
api.pcloud.com
```

如果你的帳號是歐洲區，可以填：

```text
eapi.pcloud.com
```

## 一句話流程速查

```text
Prepare your pCloud email and password
-> Open Upload Settings
-> Add Channel
-> Choose pCloud
-> Fill channel name / email / password
-> Keep API host as api.pcloud.com unless your account is in Europe
-> Keep storage directory as imgbed unless you need another folder
-> Save
-> Query quota
-> Upload a test image
```
