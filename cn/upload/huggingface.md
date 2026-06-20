# HuggingFace 渠道添加说明

## 添加前要准备什么

在开始之前，你只需要准备这 3 样：

| 需要准备 | 用途 |
| --- | --- |
| Hugging Face 账号 | 用来生成 Access Token，并作为仓库所属账号 |
| Hugging Face User Access Token | 系统通过它访问 Hugging Face API、创建仓库、上传文件 |
| 一个仓库名称 | 可以只填仓库名，例如 `image` |

## 添加步骤

### 第一步：登录 Hugging Face 并生成 Access Token

操作顺序如下：

1. 登录 Hugging Face。
2. 点击右上角头像，进入 `Settings`。
3. 在左侧找到 `Access Tokens`。
4. 点击创建新的 Token。
5. 给这枚令牌起一个名字，方便你自己识别。
6. 在权限里选择 `write`。
7. 创建后立即复制保存。

![创建令牌](../../image/upload/huggingface/创建令牌.png)

## 第二步：回到系统里填写 HuggingFace 渠道

在上传设置里选择 `HuggingFace` 后，按下面这套填：

| 页面字段 | 你该填什么 |
| --- | --- |
| 渠道名称 | 你自己起，比如 `HuggingFace主仓库` |
| 仓库名 | 可以只填仓库名，例如 `image`；也可以直接填完整路径，例如 `用户名/image` |
| Access Token | 刚才生成的 Hugging Face User Access Token |
| 私有仓库 | 按你的需求决定开或关 |
| 备注 | 可选，例如 `主上传渠道` |

![添加渠道](../../image/upload/huggingface/添加渠道.png)

## 第三步：保存渠道配置

字段填好以后，直接点击保存。
这一步系统会做几件事：

| 系统动作 | 说明 |
| --- | --- |
| 只填仓库名时 | 系统会先识别当前 Hugging Face 账号，再自动拼成完整仓库路径 |
| 填完整路径时 | 系统直接按你填写的 `名字/仓库名` 执行，不再改写 |
| 检查仓库是否存在 | 如果你走的是当前个人账号这条主线，仓库不存在时会尝试自动创建；如果你手动填写完整路径，则按该路径直接执行 |
| 仓库类型 | 这条线使用的是 `dataset` 仓库 |
| 同步公开 / 私有状态 | 会按你当前开关设置处理 |


## 渠道的操作流程总结

```text
登录 Hugging Face
-> 生成 Access Token
-> 权限选 write
-> 回系统填 Token 和仓库名
-> 保存
-> 只填仓库名时系统自动补当前用户名；填写 名字/仓库名 时按原样执行
-> 系统自动检查或创建 dataset 仓库
-> 上传测试图
```
