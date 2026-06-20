# GitHub Releases 渠道添加说明

## 添加前要准备什么

在开始之前，你只需要准备这 3 样：

| 需要准备 | 用途 |
| --- | --- |
| GitHub 账号 | 用来生成 Access Token，并作为仓库所属账号 |
| GitHub Access Token | 系统通过它访问 GitHub API、创建 Release、上传文件 |
| 一个仓库名称 | 可以只填仓库名，例如 `image` |

## 添加步骤

### 第一步：登录 GitHub 并生成 Access Token

操作顺序如下：

1. 登录 GitHub。
2. 点击右上角头像，进入 `Settings`。
3. 在左侧找到 `Developer settings`。
4. 进入 `Personal access tokens`。
5. 打开 `Tokens (classic)`。
6. 点击 `Generate new token (classic)`。
7. 给这枚令牌起一个名字，方便你自己识别。
8. 过期时间按你的使用习惯选择。
9. 在权限里勾选 `repo` 和 `workflow`。
10. 创建后立即复制保存。

![添加github权限](../../image/upload/github-releases/添加github权限.png)


## 第二步：回到系统里填写 GitHub Releases 渠道

在上传设置里选择 `GitHub Releases` 后，按下面这套填：

| 页面字段 | 你该填什么 |
| --- | --- |
| 渠道名称 | 你自己起，比如 `GitHub主仓库` |
| Access Token | 刚才生成的 GitHub Personal Access Token |
| 仓库名称 | 可以只填仓库名，例如 `image`；也可以直接填完整路径，例如 `用户名/image` |
| 私有仓库 | 按你的需求决定开或关 |
| 备注 | 可选，例如 `主上传渠道` |


![填写github渠道配置](../../image/upload/github-releases/填写github渠道配置.png)

## 第三步：保存渠道配置

字段填好以后，直接点击保存。
这一步系统会做两件事：

| 系统动作 | 说明 |
| --- | --- |
| 只填仓库名时 | 系统会先识别当前 GitHub 账号，再自动拼成完整仓库地址 |
| 填完整路径时 | 系统直接按你填写的 `名字/仓库名` 执行，不再改写 |
| 检查仓库是否存在 | 如果你走的是当前个人账号这条主线，仓库不存在时会自动创建；如果你手动填写完整路径，则按该路径直接执行 |
| 同步公开 / 私有状态 | 会按你当前开关设置处理 |

## 渠道的操作流程总结

GitHub Releases 这条线可以直接理解成：

```text
登录 GitHub
-> 生成 Access Token
-> 回系统填 Token 和仓库名称
-> 保存
-> 只填仓库名时系统自动补当前用户名；填写 名字/仓库名 时按原样执行
-> 上传测试图
```
