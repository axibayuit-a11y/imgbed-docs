# Authentication و Login Device Management

`Authentication Management` و `Login Device Management` از ImgBed admin panel، public upload entry و WebDAV access محافظت می‌کنند.

از این صفحه برای تنظیم access credentials، بررسی signed-in devices و revoke کردن sessions قدیمی در صورت نیاز استفاده کنید.

## کجا Configure کنیم

admin panel را باز کنید و بروید به:

```text
System Settings -> Security Settings
```

این page دو بخش اصلی دارد:

- Authentication Management
- Login Device Management

![Authentication management](../../image/Safety/认证管理界面.png)

## Authentication Management چه می‌کند

Authentication Management، access credentials را ذخیره می‌کند.

دو نوع دارد:

- User-side authentication
- Admin-side authentication

## User-Side Authentication

User-side authentication همان upload password است.

بعد از تنظیم upload password، visitors عادی باید پیش از استفاده از upload page آن را وارد کنند. اگر نمی‌خواهید public upload page برای همه باز باشد، این گزینه مناسب است.

![User login page](../../image/Safety/用户端登录界面.png)

### تنظیم Upload Password

وقتی upload password configured باشد:

- visitors پیش از استفاده از upload page باید password وارد کنند.
- upload فقط پس از پذیرفته شدن password در دسترس است.
- اگر user-side device sessions enabled باشد، ImgBed آن user-side device را record می‌کند.

تغییر upload password باعث invalid شدن user-side sessions قدیمی می‌شود. visitors باید password جدید را دوباره وارد کنند.

## Admin-Side Authentication

Admin-side authentication از admin username و password استفاده می‌کند.

این مورد admin panel را محافظت می‌کند. برای production use، همیشه باید آن را configure کنید.

![Admin login page](../../image/Safety/管理端登录界面.png)

### تنظیم Admin Credentials

وقتی admin username و password configured باشند:

- باز کردن admin panel نیاز به login دارد.
- login موفق یک admin device record ایجاد می‌کند.
- در Login Device Management می‌توانید devices را review، clean up یا force offline کنید.

تغییر admin username یا password باعث invalid شدن admin sessions قدیمی می‌شود. باید دوباره sign in کنید.

## Login Device Management چه می‌کند

Login Device Management دستگاه‌هایی را نشان می‌دهد که sign in کرده‌اند.

به شما کمک می‌کند بررسی کنید:

- کدام devices به admin panel دسترسی داشته‌اند.
- کدام devices به user-side upload page دسترسی داشته‌اند.
- کدام WebDAV clients متصل شده‌اند.
- device session هنوز valid است یا نه.
- آیا devices قدیمی باید force offline شوند یا نه.

این page سه tab دارد:

- Admin
- User
- WebDAV

## Global Cookie Security

بالای Login Device Management می‌توانید global cookie behavior را configure کنید.

### User Cookie Lifetime

کنترل می‌کند user-side login چند روز active بماند.

مثلاً اگر آن را 14 days بگذارید، visitors معمولاً تا 14 روز لازم نیست upload password را دوباره وارد کنند.

### Admin Cookie Lifetime

کنترل می‌کند admin login چند روز active بماند.

مثلاً اگر 14 days تنظیم شود، administrators معمولاً تا 14 روز لازم نیست دوباره sign in کنند.

### Secure Mode

وقتی Secure mode enabled باشد، browsers login cookies را فقط از طریق HTTPS ارسال می‌کنند.

برای production HTTPS sites آن را enable کنید. برای local HTTP testing آن را enable نکنید؛ وگرنه ممکن است رفتار «login succeeded, but refresh logs me out» ببینید.

## Admin Login Devices

Admin tab دستگاه‌هایی را نشان می‌دهد که وارد admin panel شده‌اند.

device records فقط بعد از configure شدن admin credentials و دسترسی به admin panel از طریق login ظاهر می‌شوند.

هر device card می‌تواند نشان دهد:

- device و browser information
- first login IP
- last active IP
- login time
- last active time
- expiration time
- current status

اگر device ناآشنا دیدید، از `Force Offline` برای invalidate کردن آن استفاده کنید.

## Clean Up Old Devices

`Clean Up Old Devices`، login records قدیمی را در tab فعلی به‌صورت bulk حذف می‌کند.

وقتی شک دارید sessions قدیمی هنوز روی دستگاه‌های دیگر active هستند، از آن استفاده کنید.

## Force Offline

`Force Offline` یک device session را invalidate می‌کند.

پس از force offline شدن device:

- Admin devices باید دوباره sign in کنند.
- User-side devices باید upload password را دوباره وارد کنند.
- WebDAV clients باید دوباره authenticate کنند.

Expired یا invalid devices را هم می‌توان remove کرد.

## Sign Out Current Device

current device card با `Current Device` مشخص می‌شود.

پس از sign out کردن current device:

- current admin session خارج می‌شود.
- current user-side session خارج می‌شود.

برای ادامه استفاده از آن بخش باید دوباره sign in کنید.
