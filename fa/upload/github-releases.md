# افزودن GitHub Releases Channel

## پیش از شروع چه چیزهایی لازم است

فقط سه مورد نیاز دارید:

| مورد | کاربرد |
| --- | --- |
| GitHub account | برای ساخت access token و مالکیت repository. |
| GitHub Access Token | برای اینکه ImgBed به GitHub API دسترسی داشته باشد، releases بسازد و files upload کند. |
| Repository name | می‌توانید فقط repository name وارد کنید، مثل `image`. |

## مراحل setup

### Step 1: ورود به GitHub و ساخت Access Token

1. وارد GitHub شوید.
2. در گوشه بالا سمت راست روی avatar بزنید و `Settings` را باز کنید.
3. از left sidebar، `Developer settings` را باز کنید.
4. `Personal access tokens` را باز کنید.
5. `Tokens (classic)` را باز کنید.
6. `Generate new token (classic)` را بزنید.
7. برای token نام قابل‌تشخیص بگذارید.
8. expiration date را بر اساس برنامه نگهداری خودتان انتخاب کنید.
9. scopes `repo` و `workflow` را انتخاب کنید.
10. token ساخته‌شده را بلافاصله copy و ذخیره کنید.

![Add GitHub permissions](../../image/upload/github-releases/添加github权限.png)

## Step 2: پر کردن GitHub Releases Channel در ImgBed

پس از انتخاب `GitHub Releases` در Upload Settings:

| UI Field | What to Enter |
| --- | --- |
| Channel name | نام دلخواه، مثل `GitHubPrimary`. |
| Access Token | GitHub Personal Access Token که تازه ساختید. |
| Repository name | short repo name مثل `image`، یا full path مثل `username/image`. |
| Private repository | بسته به نیاز on یا off کنید. |
| Remark | اختیاری، مثل `Primary upload channel`. |

![Fill in the GitHub channel configuration](../../image/upload/github-releases/填写github渠道配置.png)

## Step 3: Save کردن Channel

پس از پر کردن fields، Save را بزنید.

system این موارد را مدیریت می‌کند:

| System Behavior | Description |
| --- | --- |
| Short repository name | ImgBed current GitHub account را تشخیص می‌دهد و value را به full repository path تبدیل می‌کند. |
| Full repository path | ImgBed مسیر `username/repository` را دقیقاً همان‌طور که وارد شده استفاده می‌کند. |
| Repository check | اگر current personal account path باشد، ImgBed وقتی repository وجود ندارد آن را خودکار create می‌کند. اگر full path را manual وارد کنید، همان path استفاده می‌شود. |
| Public/private state | repository visibility بر اساس current switch synchronized می‌شود. |

## Quick Checklist

GitHub Releases این‌طور کار می‌کند:

```text
وارد GitHub شوید
-> Access Token بسازید
-> به ImgBed برگردید و token و repository name را وارد کنید
-> Save
-> اگر فقط repo name وارد شود، ImgBed current username را خودکار اضافه می‌کند
-> اگر username/repo وارد شود، همان را استفاده می‌کند
-> test image upload کنید
```
