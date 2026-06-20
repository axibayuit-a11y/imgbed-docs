# افزودن GitLab Packages Channel

## پیش از شروع چه چیزهایی لازم است

فقط سه مورد نیاز دارید:

| مورد | کاربرد |
| --- | --- |
| GitLab account | برای ساخت access token و مالکیت project. |
| GitLab Personal Access Token | برای اینکه ImgBed به GitLab API دسترسی داشته باشد، projects بسازد و files را در Generic Packages upload کند. |
| Project name | می‌توانید فقط project name وارد کنید، مثل `imgbed`. |

## مراحل setup

### Step 1: ورود به GitLab و ساخت Access Token

1. وارد GitLab شوید.
2. در گوشه بالا سمت راست روی avatar بزنید و `Preferences` را باز کنید.
3. از left sidebar، `Access Tokens` را باز کنید.
4. برای token نام قابل‌تشخیص بگذارید.
5. expiration date را بر اساس برنامه نگهداری خودتان انتخاب کنید.
6. scope `api` را انتخاب کنید.
7. token ساخته‌شده را بلافاصله copy و ذخیره کنید.

![Create a legacy token](../../image/upload/gitlab-packages/点击生成旧版令牌.png)

![Select token permissions](../../image/upload/gitlab-packages/勾选令牌权限.png)

## Step 2: پر کردن GitLab Packages Channel در ImgBed

پس از انتخاب `GitLab Packages` در Upload Settings:

| UI Field | What to Enter |
| --- | --- |
| Channel name | نام دلخواه، مثل `GitLabPrimary`. |
| Access Token | GitLab Personal Access Token که تازه ساختید. |
| Project name | short project name مثل `imgbed`، یا full path مثل `username/imgbed`. |
| Private repository | بسته به نیاز on یا off کنید. |
| Remark | اختیاری، مثل `Primary upload channel`. |

![Configure the channel](../../image/upload/gitlab-packages/配置渠道内容.png)

## Step 3: Save کردن Channel

پس از پر کردن fields، Save را بزنید.

system این موارد را مدیریت می‌کند:

| System Behavior | Description |
| --- | --- |
| Short project name | ImgBed current GitLab account را تشخیص می‌دهد و value را به full project path تبدیل می‌کند. |
| Full project path | ImgBed مسیر `username/project` را دقیقاً همان‌طور که وارد شده استفاده می‌کند. |
| Project check | اگر current personal account path باشد، ImgBed وقتی project وجود ندارد آن را خودکار create می‌کند. اگر full path را manual وارد کنید، همان path استفاده می‌شود. |
| Public/private state | project visibility بر اساس current switch synchronized می‌شود. |

## Quick Checklist

```text
وارد GitLab شوید
-> Access Token بسازید
-> فقط api scope را انتخاب کنید
-> به ImgBed برگردید و token و project name را وارد کنید
-> Save
-> اگر فقط project name وارد شود، ImgBed current username را خودکار اضافه می‌کند
-> اگر username/project وارد شود، همان را استفاده می‌کند
-> test image upload کنید
```
