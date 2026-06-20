# CloudFlare API Token 配置

CloudFlare API Token 用于让系统在文件发生变化时，主动清理 Cloudflare CDN 缓存。

![CloudFlare API Token 配置](../../image/Safety/cloudflare%20api%20token截图.png)

## 功能入口

进入后台后，打开：

系统配置 → 安全设置 → CloudFlare API Token

页面里需要填写三项：

- 区域 ID
- 账户邮箱
- API Key

## 这个配置有什么用

Cloudflare 会缓存公开图片。

缓存可以让图片访问更快，但也会带来一个问题：当你删除、屏蔽、替换或移动图片后，外部访问可能还会短时间看到旧缓存。

配置 CloudFlare API Token 后，系统在相关操作完成时，会请求 Cloudflare 清理对应缓存。

适合这些场景：

- 删除图片后，希望公开链接尽快失效。
- 屏蔽图片后，希望外部访问尽快不再看到原图。
- 覆盖同名图片后，希望用户尽快看到新图。
- 移动或重命名文件后，希望旧路径缓存尽快更新。
- 调整公开访问规则后，希望公开图床和随机图相关缓存尽快刷新。

## 不配置会怎样

不配置也可以正常使用图床。

只是 Cloudflare CDN 缓存不会被系统主动清理，外部用户可能会在缓存过期前继续看到旧内容。

这种情况通常会随着 Cloudflare 缓存自然过期而恢复，但不会立刻生效。

## 区域 ID 怎么填写

区域 ID 是 Cloudflare 里当前站点的 Zone ID。

获取方式：

1. 登录 Cloudflare 控制台。
2. 进入你的图床域名所在站点。
3. 在站点概览页面找到 Zone ID。
4. 复制后填入“区域 ID”。

注意：这里填的是当前域名所在站点的 Zone ID，不是账号 ID。

## 账户邮箱怎么填写

账户邮箱填写你的 Cloudflare 登录邮箱。

这个邮箱需要和下面的 API Key 配套使用。

## API Key 怎么填写

这里填写 Cloudflare 的 Global API Key。

获取方式：

1. 登录 Cloudflare 控制台。
2. 进入个人资料。
3. 打开 API Tokens 页面。
4. 找到 Global API Key。
5. 查看并复制。
6. 粘贴到后台的 API Key 输入框。

![查看全局令牌](../../image/Safety/查看全局令牌.png)


## 保存后什么时候生效

填写完成后，点击页面右下角保存。

保存成功后，后续文件变更会自动尝试清理 Cloudflare 缓存。

已经发生过的旧操作不会自动补清。如果你之前删除或替换过文件，但当时没有配置这个信息，可能需要等 Cloudflare 缓存自然过期，或者到 Cloudflare 控制台手动清理缓存。

## 常见问题

### 一定要配置吗？

不是必须。

如果你的域名没有接入 Cloudflare，或者你不在意 CDN 缓存延迟，可以不填。

### 填错会影响上传吗？

一般不会影响正常上传和访问。

填错后，系统只是无法成功请求 Cloudflare 清理缓存，旧缓存可能继续存在一段时间。

### 为什么删除图片后外面还能打开？

最常见原因是 Cloudflare CDN 还缓存着旧文件。

配置正确的 CloudFlare API Token 后，系统会在删除时主动清理对应 URL 缓存。

### 为什么替换同名图片后还是旧图？

这也是 CDN 缓存导致的常见现象。

配置后，系统会在覆盖同名文件时尝试清理旧 URL 缓存，让新图更快生效。
