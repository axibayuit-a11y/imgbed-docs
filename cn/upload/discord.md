# Discord 渠道添加说明

## 添加前要准备什么

| 需要准备 | 用途 |
| --- | --- |
| Discord 账号 | 用于创建服务器、频道和开发者应用。 |
| 一个 Discord 服务器 | 机器人需要先加入服务器，再访问指定频道。 |
| 一个文字频道 | 图片和文件最终会发送到这个频道。 |
| Discord Developer Portal | 用于创建应用、机器人并获取 `Bot Token`。 |

## 入口位置

1. 进入系统配置。
2. 打开上传设置。
3. 点击右上角“添加渠道”。
4. 选择 `Discord`。

## 字段说明

| 字段 | 作用 | 是否必填 |
| --- | --- | --- |
| 渠道名称 | 用于区分当前渠道，例如“Discord 主频道”。 | 必填 |
| Bot Token | Discord 机器人令牌。 | 必填 |
| Channel ID | 目标文字频道的 ID。 | 必填 |
| 代理地址（可选） | 仅在访问 Discord CDN 不稳定时使用，请填写完整代理地址（包含 `https://`）。 | 选填 |


## 配置步骤

### 1. 创建 Discord 服务器和文字频道

1. 打开 Discord。
2. 创建一个新的服务器，或者使用你自己的现有服务器。
3. 在服务器中创建一个频道。

![创建服务器](../../image/upload/discord/创建服务器.png)

### 2. 在 Discord Developer Portal 创建机器人

1. 打开 Discord Developer Portal：`https://discord.com/developers/applications`
2. 点击 `New Application`。
3. 输入应用名称并完成创建。
4. 在左侧进入 `Bot` 页面。
5. 在 `Bot` 页面生成或重置 Token。
6. 保存这串机器人令牌。

这串令牌就是系统配置中需要填写的 `Bot Token`。

![查看机器人令牌](../../image/upload/discord/查看机器人令牌.png)

### 3. 在 OAuth2 页面生成授权链接并安装机器人

1. 打开左侧 `OAuth2` 页面。
2. 在 `范围` 中勾选 `机器人`。
3. 在权限区域勾选下面这 4 项：

| 权限 | 是否需要 |
| --- | --- |
| 查看频道 | 需要 |
| 发送消息 | 需要 |
| 添加文件 | 需要 |
| 读取消息历史记录 | 需要 |

4. 在页面下方确认 `集成类型` 为 `服务器安装`。
5. 复制底部 `已生成的URL`。
6. 打开这个 URL。
7. 选择你要安装的目标服务器。
8. 完成授权安装。

![在oa2勾选机器人权限](../../image/upload/discord/在oa2勾选机器人权限.png)

![邀请机器人到频道](../../image/upload/discord/邀请机器人到频道.png)

### 4. 开启开发者模式并复制 Channel ID

1. 点击 Discord 左下角头像旁边的齿轮，进入“用户设置”。
2. 在左侧找到“高级”。
3. 打开“开发者模式”。
4. 回到目标文字频道。
5. 右键频道名称。
6. 点击“复制频道 ID”。

复制出来的这一串数字，就是系统配置中需要填写的 `Channel ID`。

![开启开发者权限](../../image/upload/discord/开启开发者权限.png)

![复制群频道id](../../image/upload/discord/复制群频道id.png)

### 5. 在系统中填写 Discord 渠道

回到系统配置弹窗后，按下表填写：

| 页面字段 | 填写内容 |
| --- | --- |
| 渠道名称 | 自定义渠道名称，例如 `Discord主频道` |
| Bot Token | 在 Discord Developer Portal 的 `Bot` 页面保存的令牌 |
| Channel ID | 刚才复制的频道 ID |
| 代理地址（可选） | 按需填写，格式例如 `https://your-proxy.example.com` |


填写完成后点击保存。

![添加dc新渠道配置](../../image/upload/discord/添加dc新渠道配置.png)

## 添加完成后怎么检查

| 检查项 | 检查方式 |
| --- | --- |
| 渠道卡片是否出现 | 保存后，上传设置页面应显示 Discord 渠道卡片。 |
| 渠道是否能启用 | 开关应可正常开启。 |
| 配置信息是否已保存 | 详情页应能看到 Bot Token 和 Channel ID 已写入。 |
| 上传是否正常 | 上传一张测试图片，确认图片已进入目标 Discord 文字频道。 |

## 一句话流程速查

```text
创建 Discord 服务器
-> 创建一个文字频道
-> 去 Discord Developer Portal 创建机器人
-> 在 Bot 页面保存 Bot Token
-> 在 OAuth2 页面勾选 机器人、查看频道、发送消息、添加文件、读取消息历史记录
-> 复制生成的 URL 并授权安装到目标服务器
-> 给目标文字频道放开相同权限
-> 开启开发者模式
-> 右键目标文字频道复制 Channel ID
-> 回系统配置填写 Bot Token 和 Channel ID
-> 保存后上传测试图片
```

## 参考资料

1. Discord Developers Getting Started：https://docs.discord.com/developers/quick-start/getting-started
2. Discord 官方帮助：如何查找频道 ID：https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID
