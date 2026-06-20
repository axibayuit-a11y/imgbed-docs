# Cloudflare R2 渠道添加说明

## 适合什么场景

- 你已经把图床部署在 Cloudflare 上，希望直接使用同一个 Cloudflare 账号里的 R2 桶保存文件。
- 你不想再填写一套 S3 Endpoint、Access Key、Secret Key。
- 你希望文件读写都走 Worker / Pages 的 R2 绑定，配置尽量简单。

一句话：

R2 这条渠道不是在图床后台手动创建账号，而是在 Cloudflare 后台先把 R2 桶绑定到项目，绑定变量名必须是 `img_r2`。

## 添加前要准备什么

- 一个 Cloudflare 账号。
- 一个已经创建好的 R2 Bucket。
- 当前图床项目的 Cloudflare 后台管理权限。

## Cloudflare 后台配置

### 1. 创建 R2 Bucket

1. 登录 Cloudflare Dashboard。
2. 进入 `R2 Object Storage`。
3. 点击创建 Bucket。
4. Bucket 名称自己决定，例如 `imgbed`。

这个 Bucket 就是后面实际保存文件的地方。

![创建一个存储桶 img-r2](../../image/upload/cloudflare-r2/创建一个存储桶img-r2.png)

### 2. 绑定到图床项目

根据你的部署类型选择位置：

| 部署类型 | 绑定位置 |
| --- | --- |
| Pages | 当前 Pages 项目 -> Settings -> Functions -> R2 bucket bindings |
| Worker | 当前 Worker -> Settings -> Bindings -> R2 bucket bindings |

新增绑定时重点只看这一项：

| 字段 | 填写 |
| --- | --- |
| Variable name | `img_r2` |
| R2 bucket | 选择刚创建的 Bucket |

变量名必须写成 `img_r2`，代码里上传、读取、删除 R2 文件都只认这个绑定名。

### 3. 重新部署

绑定保存后，需要重新部署一次图床项目，让 Worker / Pages 运行时真正拿到 `img_r2`。

## 图床后台会看到什么

R2 绑定成功后，进入：

1. 系统配置。
2. 上传设置。
3. 查看 `Cloudflare R2` 渠道。

系统会自动生成一条固定渠道：

| 字段 | 固定值 |
| --- | --- |
| 渠道名称 | `Cloudflare R2` |
| 渠道类型 | `cfr2` |
| 保存方式 | `binding` |
| 配置来源 | 环境绑定 |

这条渠道是固定绑定渠道，不需要点击“添加渠道”手动创建，也不能像普通渠道一样删除。

## 后台可编辑字段

| 字段 | 作用 | 是否必填 |
| --- | --- | --- |
| 启用渠道 | 控制 R2 是否参与上传选择 | 是 |
| Account ID | 只在开启容量限制并查询官方 R2 用量时使用 | 开启容量限制时建议填写 |
| Bucket 名称 | 只在开启容量限制并查询官方 R2 用量时使用 | 开启容量限制时建议填写 |
| 容量限制 | 控制这个 R2 渠道是否按容量阈值参与上传选择 | 否 |
| 阈值 | 容量达到多少比例后不再继续写入 | 开启容量限制时填写 |

Account ID 可以在 Cloudflare 控制台右侧账号信息里复制，开启容量限制时填到后台即可。

![获取账户 ID](../../image/upload/cloudflare-r2/获取账户id.png)

## 添加步骤

1. 在 Cloudflare 创建 R2 Bucket。
2. 打开图床项目的 Cloudflare 设置。
3. 新增 R2 bucket binding。
4. `Variable name` 填 `img_r2`。
5. `R2 bucket` 选择刚创建的 Bucket。
6. 保存绑定并重新部署图床。
7. 回到图床后台 -> 系统配置 -> 上传设置。
8. 确认 `Cloudflare R2` 渠道已经出现，并保持启用。

如果要让 R2 按容量阈值参与上传选择，就打开容量限制，填写 Account ID、Bucket 名称、容量上限和阈值后保存。

![配置容量限制](../../image/upload/cloudflare-r2/配置容量限制.png)

## 添加完成后怎么检查

- 上传设置里是否出现 `Cloudflare R2` 固定渠道。
- 渠道卡片是否显示为启用。
- 上传一个小文件，返回链接能否正常打开。
- 如果打开文件时报 `R2 database binding is not configured`，说明项目运行时没有拿到 `img_r2` 绑定，需要回 Cloudflare 检查变量名和重新部署。


