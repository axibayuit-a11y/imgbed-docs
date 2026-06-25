# Telegram 渠道添加说明

## 添加前要准备什么

| 需要准备 | 用途 |
| --- | --- |
| Telegram 账号 | 用于创建机器人和频道。 |
| `@BotFather` | 用于申请 Telegram 机器人。 |
| 一个频道 | 作为 Telegram 存储渠道使用。 |
| `@userinfobot` | 用于查询频道 `Chat ID`。 |

## 入口位置

1. 进入系统配置。
2. 打开上传设置。
3. 点击右上角“添加渠道”。
4. 选择 `Telegram`。

## 字段说明

| 字段 | 作用 | 是否必填 |
| --- | --- | --- |
| 渠道名称 | 用于区分当前渠道，例如“Telegram 主频道”。 | 必填 |
| Active | 控制当前渠道是否启用。 | 建议开启 |
| Bot Token | Telegram 机器人令牌。 | 必填 |
| Session ID（Chat ID） | Telegram 频道 ID。 | 必填 |
| Relay Proxy URL（可选） | 仅在访问 Telegram 不稳定时使用，请填写完整代理地址（包含 `https://`）。 | 选填 |
| Remark | 渠道备注信息，便于后续管理。 | 选填 |

## 配置步骤

### 1. 创建 Telegram 机器人

1. 打开 Telegram，搜索 `@BotFather`。
2. 进入对话后点击 `Start`。
3. 发送 `/newbot`。
4. 按提示填写机器人名称。
5. 按提示填写机器人用户名。用户名通常需要以 `bot` 结尾。
6. 创建完成后，`@BotFather` 会返回一串机器人令牌。

这串令牌就是系统配置中需要填写的 `Bot Token`。

![保存机器人令牌](../../image/upload/telegram/保存机器人令牌.png)

### 2. 创建频道

1. 在 Telegram 中点击“新建频道”。
2. 填写频道名称。
3. 完成频道创建。

公开频道和私有频道都可以使用。

![新建频道](../../image/upload/telegram/新建频道.png)

### 3. 将机器人加入频道

1. 进入刚创建好的频道。
2. 打开频道设置。
3. 添加成员或管理员。
4. 搜索刚才创建的机器人用户名。
5. 将机器人加入频道。

建议直接授予机器人管理员权限，后续发图和发文件会更稳定。

![邀请机器人进频道里](../../image/upload/telegram/邀请机器人进频道里.png)

### 4. 通过 User Info • Get ID • IDbot 获取频道 ID

1. 在 Telegram 中搜索 `@userinfobot`，其显示名称通常为 `User Info • Get ID • IDbot`。
2. 打开对话并点击 `Start`。
3. 在 bot 提供的选项中点击 `Channel`。
4. 在消息列表里，选择对应频道发送给 `@userinfobot`。
5. `@userinfobot` 返回结果后，复制其中 `Id: -100...` 这一串数字。

这串以 `-100` 开头的数字，就是系统配置中需要填写的 `Session ID（Chat ID）`。


![获取频道id](../../image/upload/telegram/获取频道id.png)

### 5. 在系统中填写 Telegram 渠道

回到系统配置弹窗后，按下表填写：

| 页面字段 | 填写内容 |
| --- | --- |
| Channel Identifier | 自定义渠道名称，例如 `Telegram主频道` |
| Active | 建议开启 |
| Bot Token | 从 `@BotFather` 获取的机器人令牌 |
| Session ID（Chat ID） | 从 `@userinfobot` 返回结果中复制的 `-100...` 数字 |
| Relay Proxy URL（可选） | 按需填写，格式例如 `https://your-tg-proxy.example.com` |
| Remark | 按需填写 |

填写完成后点击保存。

![编辑配置](../../image/upload/telegram/编辑配置.png)

## 添加完成后怎么检查

| 检查项 | 检查方式 |
| --- | --- |
| 渠道卡片是否出现 | 保存后，上传设置页面应显示 Telegram 渠道卡片。 |
| 渠道是否能启用 | 开关应可正常开启。 |
| 配置信息是否已保存 | 详情页应能看到 Bot Token 和 Chat ID 已写入。 |
| 上传是否正常 | 上传一张测试图片，确认图片已进入目标 Telegram 频道。 |

## 一句话流程速查

```text
搜索 @BotFather 创建机器人
-> 保存 Bot Token
-> 创建频道
-> 将机器人加入频道并授予管理员权限
-> 搜索 @userinfobot 并点击 Channel
-> 将频道中的任意一条消息转发给 @userinfobot
-> 复制返回结果中的 Id: -100...
-> 将 Bot Token 和 Chat ID 填入系统配置并保存
```

## 参考资料

1. Telegram 机器人介绍：https://core.telegram.org/bots
2. Telegram Bot API：https://core.telegram.org/bots/api
