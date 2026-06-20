# افزودن WebDAV Channel

## چه زمانی مناسب است

WebDAV channel را زمانی استفاده کنید که:

- NAS، cloud drive یا object storage service دارید که WebDAV endpoint ارائه می‌دهد.
- می‌خواهید uploaded images در WebDAV directory خودتان ذخیره شوند.
- می‌خواهید credentials در جدول D1 `upload_channels` ذخیره شوند و طولانی‌مدت در frontend exposed نباشند.

## پیش از شروع چه چیزهایی لازم است

| مورد | کاربرد |
| --- | --- |
| WebDAV Endpoint | URL سمت سرور WebDAV، مثل `https://nas.example.com/dav`. |
| Username | برای sign in به WebDAV service. |
| Password | برای sign in به WebDAV service. |
| Authentication mode | پیش‌فرض `Basic` است. فقط اگر server نیاز داشت از `Digest` یا auto negotiation استفاده کنید. |
| Storage directory | directory ذخیره files. پیش‌فرض `imgbed`. |

## کجا اضافه کنیم

1. System Settings را باز کنید.
2. وارد Upload Settings شوید.
3. از گوشه بالا سمت راست Add Channel را بزنید.
4. `WebDAV` را انتخاب کنید.

## Field Reference

| Field | کاربرد | Required |
| --- | --- | --- |
| Channel name | نام قابل‌تشخیص برای WebDAV channel، مثل `koofr` یا `nas`. | Yes |
| Endpoint | endpoint کامل WebDAV همراه `https://`. | Yes |
| Username | WebDAV login username. | Yes |
| Password | WebDAV login password. | Yes |
| Authentication mode | معمولاً `Basic`; اگر server digest authentication می‌خواهد از `Digest` استفاده کنید. | Yes |
| Storage directory | محل ذخیره files. پیش‌فرض `imgbed`. | No |

## مثال: fie.nl.tab.digital

### 1. ساخت App Password

account security settings را باز کنید، application passwords را پیدا کنید و یک app password جدید بسازید.

![Create an app password](../../image/upload/webdav/创建应用密码.png)

پس از ساخت، app password جدید را copy و ذخیره کنید. معمولاً فقط یک‌بار نمایش داده می‌شود.

![Save the new app password](../../image/upload/webdav/记住新应用程序密码.png)

### 2. پر کردن WebDAV Configuration در ImgBed

به ImgBed برگردید و WebDAV channel اضافه کنید:

| UI Field | Value |
| --- | --- |
| Endpoint | WebDAV URL ارائه‌شده توسط `https://fie.nl.tab.digital/`. |
| Username | WebDAV username شما. |
| Password | app password که تازه ساخته‌اید. |
| Authentication mode | در بیشتر موارد با `Basic` شروع کنید. |
| Storage directory | پیش‌فرض `imgbed` است؛ می‌توانید directory دلخواه هم بدهید. |

![Fill in the configuration](../../image/upload/webdav/填写配置.png)

## رفتار Upload برای فایل‌های بزرگ

WebDAV channel اکنون از real session-based chunked upload استفاده می‌کند.

files کوچک به‌صورت یک complete file upload می‌شوند. files بزرگ‌تر از 64 MiB به‌صورت خودکار به chunkهای حدود 10 MiB تقسیم می‌شوند و داخل remote chunk directory upload می‌شوند.

WebDAV service لازم نیست `partial update` یا offset-based writes را پشتیبانی کند. ImgBed chunks را روی remote server به یک file بزرگ merge نمی‌کند. به‌جای آن chunk manifest ذخیره می‌شود و هنگام request، chunks به‌ترتیب خوانده می‌شوند.

| File Size | Upload Method | Remote Storage Layout |
| --- | --- | --- |
| 64 MiB یا کمتر | Normal upload | یک complete file |
| بیشتر از 64 MiB | Real session chunked upload | یک chunk directory شامل چند chunk file |

chunk directory فقط روی remote storage layout اثر دارد. URL فایل در ImgBed تغییر نمی‌کند. کاربران همچنان از link اصلی `/file/...` به file دسترسی دارند.

## مراحل setup

1. Upload Settings را باز کنید.
2. Add Channel را بزنید.
3. `WebDAV` را انتخاب کنید.
4. channel name قابل‌تشخیص وارد کنید، مثل `koofr`.
5. WebDAV endpoint را وارد کنید، مثل `https://app.koofr.net/dav/Koofr`.
6. username و password را وارد کنید.
7. authentication mode را به‌صورت پیش‌فرض `Basic` نگه دارید.
8. storage directory را `imgbed` نگه دارید یا directory خودتان را وارد کنید.
9. Save را بزنید.
10. بعد از save، channel card را بررسی کنید، اگر capacity query در دسترس است اجرا کنید، و یک test file upload کنید.

## روش بررسی

| Check | روش بررسی |
| --- | --- |
| Channel card appears | پس از Save، WebDAV channel card باید در Upload Settings دیده شود. |
| Channel is enabled | switch بالای card باید روشن بماند. |
| Credentials are saved | detail view باید Endpoint، username، authentication mode و storage directory را نشان دهد. |
| Small file upload works | یک test image upload کنید و ببینید file در WebDAV directory ظاهر شده است. |
| Large file rule works | files بزرگ‌تر از 64 MiB از chunked upload استفاده می‌کنند و remote chunk directory می‌سازند. |
| Capacity query works | اگر server capacity information را پشتیبانی کند، query مقدار used و total capacity را نشان می‌دهد. |

![Quota query succeeded](../../image/upload/webdav/查询额度成功.png)

## FAQ

### چرا WebDAV files بزرگ chunk directory می‌سازند؟

این روش فعلی storage برای files بزرگ است.

files بزرگ‌تر از 64 MiB در remote side به یک file بزرگ merge نمی‌شوند. به‌صورت chunk directory ذخیره می‌شوند. ImgBed chunk manifest را record می‌کند و content کامل را با خواندن chunks به‌ترتیب برمی‌گرداند.

### اگر large file upload fail شد، اول چه چیزهایی را بررسی کنم؟

اول Endpoint، username، password و storage directory را بررسی کنید. سپس مطمئن شوید WebDAV service اجازه directory creation، file writing و file reading می‌دهد.

اگر capacity query fail شد اما small file upload کار کرد، ممکن است server capacity reporting را پشتیبانی نکند یا محدود کرده باشد. این لزوماً یعنی upload unavailable نیست.

### کدام authentication mode را استفاده کنم؟

با `Basic` شروع کنید.

اگر server صریحاً digest authentication می‌خواهد، `Digest` را انتخاب کنید.

اگر مطمئن نیستید، automatic negotiation را استفاده کنید.

## Quick Checklist

```text
WebDAV endpoint, username و password را آماده کنید
-> Upload Settings را باز کنید
-> Add Channel
-> WebDAV را انتخاب کنید
-> Endpoint / username / password را وارد کنید
-> authentication mode را پیش‌فرض Basic نگه دارید
-> storage directory را پیش‌فرض imgbed نگه دارید
-> Save
-> capacity query
-> test file upload
```
