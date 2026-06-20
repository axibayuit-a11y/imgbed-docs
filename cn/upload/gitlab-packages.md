# GitLab Packages 渠道添加说明

## 添加前要准备什么

在开始之前，你只需要准备这 3 样：

| 需要准备 | 用途 |
| --- | --- |
| GitLab 账号 | 用来生成 Access Token，并作为项目所属账号 |
| GitLab Personal Access Token | 系统通过它访问 GitLab API、创建项目、上传 Generic Packages 文件 |
| 一个项目名称 | 可以只填项目名，例如 `imgbed` |

## 添加步骤

### 第一步：登录 GitLab 并生成 Access Token

操作顺序如下：

1. 登录 GitLab。
2. 点击右上角头像，进入 `Preferences`。
3. 在左侧找到 `Access Tokens`。
4. 给这枚令牌起一个名字，方便你自己识别。
5. 过期时间按你的使用习惯选择。
6. 在权限里勾选 `api`。
7. 创建后立即复制保存。

![点击生成旧版令牌](../../image/upload/gitlab-packages/点击生成旧版令牌.png)

![勾选令牌权限](../../image/upload/gitlab-packages/勾选令牌权限.png)


## 第二步：回到系统里填写 GitLab Packages 渠道

在上传设置里选择 `GitLab Packages` 后，按下面这套填：

| 页面字段 | 你该填什么 |
| --- | --- |
| 渠道名称 | 你自己起，比如 `GitLab主仓库` |
| Access Token | 刚才生成的 GitLab Personal Access Token |
| 项目名称 | 可以只填项目名，例如 `imgbed`；也可以直接填完整路径，例如 `用户名/imgbed` |
| 私有仓库 | 按你的需求决定开或关 |
| 备注 | 可选，例如 `主上传渠道` |

![配置渠道内容](../../image/upload/gitlab-packages/配置渠道内容.png)


## 第三步：保存渠道配置

字段填好以后，直接点击保存。
这一步系统会做几件事：

| 系统动作 | 说明 |
| --- | --- |
| 只填项目名时 | 系统会先识别当前 GitLab 账号，再自动拼成完整项目路径 |
| 填完整路径时 | 系统直接按你填写的 `名字/项目名` 执行，不再改写 |
| 检查项目是否存在 | 如果你走的是当前个人账号这条主线，项目不存在时会自动创建；如果你手动填写完整路径，则按该路径直接执行 |
| 同步项目公开 / 私有状态 | 会按你当前开关设置处理 |

## 渠道的操作流程总结

```text
登录 GitLab
-> 生成 Access Token
-> 权限只勾 api
-> 回系统填 Token 和项目名称
-> 保存
-> 只填项目名时系统自动补当前用户名；填写 名字/项目名 时按原样执行
-> 上传测试图
```
