# افزودن Hugging Face Channel

## پیش از شروع چه چیزهایی لازم است

فقط سه مورد لازم دارید:

| مورد | کاربرد |
| --- | --- |
| Hugging Face account | برای ساخت access token و مالکیت repository. |
| Hugging Face User Access Token | برای اینکه ImgBed به Hugging Face API دسترسی داشته باشد، repositories بسازد و files upload کند. |
| Repository name | می‌توانید فقط repository name وارد کنید، مثل `image`. |

## مراحل setup

### Step 1: ورود به Hugging Face و ساخت Access Token

1. وارد Hugging Face شوید.
2. در گوشه بالا سمت راست روی avatar بزنید و `Settings` را باز کنید.
3. از left sidebar، `Access Tokens` را باز کنید.
4. یک token جدید بسازید.
5. برای token نام قابل‌تشخیص بگذارید.
6. permission را روی `write` بگذارید.
7. token ساخته‌شده را بلافاصله copy و ذخیره کنید.

![Create a token](../../image/upload/huggingface/创建令牌.png)

## Step 2: پر کردن Hugging Face Channel در ImgBed

پس از انتخاب `Hugging Face` در Upload Settings، fields را این‌گونه پر کنید:

| UI Field | What to Enter |
| --- | --- |
| Channel name | نام دلخواه، مثل `hf-primary`. |
| Repository name | short repo name مثل `image`، یا full path مثل `username/image`. |
| Access Token | Hugging Face User Access Token که تازه ساختید. |
| Private repository | بسته به نیاز on یا off کنید. |
| Remark | اختیاری، مثل `Primary upload channel`. |

![Add the channel](../../image/upload/huggingface/添加渠道.png)

## Step 3: Save کردن Channel

پس از پر کردن fields، Save را بزنید.

system این موارد را خودش مدیریت می‌کند:

| System Behavior | Description |
| --- | --- |
| Short repository name | ImgBed current Hugging Face account را تشخیص می‌دهد و value را به full repository path تبدیل می‌کند. |
| Full repository path | ImgBed مسیر `username/repository` را دقیقاً همان‌طور که وارد شده استفاده می‌کند. |
| Repository check | اگر current personal account path باشد، ImgBed وقتی repository وجود ندارد تلاش می‌کند آن را create کند. اگر full path را manual وارد کنید، همان path استفاده می‌شود. |
| Repository type | این channel از `dataset` repository استفاده می‌کند. |
| Public/private state | repository visibility بر اساس current switch synchronized می‌شود. |

## Quick Checklist

```text
وارد Hugging Face شوید
-> Access Token بسازید
-> write permission را انتخاب کنید
-> به ImgBed برگردید و token و repository name را وارد کنید
-> Save
-> اگر فقط repo name وارد شود، ImgBed current username را خودکار اضافه می‌کند
-> اگر username/repo وارد شود، همان را استفاده می‌کند
-> ImgBed dataset repository را check یا create می‌کند
-> test image upload کنید
```
