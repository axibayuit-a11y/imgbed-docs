# Authentication اور Login Device Management

`Authentication Management` اور `Login Device Management` آپ کے ImgBed admin panel، public upload entry، اور WebDAV access کی حفاظت کرتے ہیں۔

اس صفحے سے access credentials set کریں، signed-in devices دیکھیں، اور ضرورت پڑنے پر پرانے sessions revoke کریں۔

## کہاں Configure کریں

admin panel کھولیں، پھر جائیں:

```text
System Settings -> Security Settings
```

اس page میں دو main areas ہیں:

- Authentication Management
- Login Device Management

![Authentication management](../../image/Safety/认证管理界面.png)

## Authentication Management کیا کرتا ہے

Authentication Management access credentials محفوظ کرتا ہے۔

اس کی دو types ہیں:

- User-side authentication
- Admin-side authentication

## User-Side Authentication

User-side authentication upload password ہے۔

upload password set ہونے کے بعد عام visitors کو upload page استعمال کرنے سے پہلے password درج کرنا ہوگا۔ یہ اس وقت مفید ہے جب آپ public upload page ہر کسی کے لیے کھلا نہیں رکھنا چاہتے۔

![User login page](../../image/Safety/用户端登录界面.png)

### Upload Password Set کرنا

جب upload password configured ہو:

- visitors کو upload page استعمال کرنے سے پہلے password درج کرنا ہوگا۔
- upload صرف password قبول ہونے کے بعد دستیاب ہوگا۔
- اگر user-side device sessions enabled ہوں تو ImgBed اس user-side device کو record کرے گا۔

upload password تبدیل کرنے سے پرانے user-side sessions invalid ہو جاتے ہیں۔ visitors کو نیا password دوبارہ درج کرنا ہوگا۔

## Admin-Side Authentication

Admin-side authentication admin username اور password استعمال کرتا ہے۔

یہ admin panel کی حفاظت کرتا ہے۔ production use کے لیے اسے ہمیشہ configure کرنا چاہیے۔

![Admin login page](../../image/Safety/管理端登录界面.png)

### Admin Credentials Set کرنا

جب admin username اور password configured ہوں:

- admin panel کھولنے کے لیے login ضروری ہوگا۔
- successful login ایک admin device record بناتا ہے۔
- Login Device Management میں آپ devices review، clean up، یا force offline کر سکتے ہیں۔

admin username یا password تبدیل کرنے سے پرانے admin sessions invalid ہو جاتے ہیں۔ آپ کو دوبارہ sign in کرنا ہوگا۔

## Login Device Management کیا کرتا ہے

Login Device Management signed-in devices دکھاتا ہے۔

یہ چیک کرنے میں مدد دیتا ہے:

- کن devices نے admin panel access کیا۔
- کن devices نے user-side upload page access کیا۔
- کون سے WebDAV clients connect ہوئے۔
- device session ابھی valid ہے یا نہیں۔
- پرانے devices کو force offline کرنا چاہیے یا نہیں۔

page میں تین tabs ہیں:

- Admin
- User
- WebDAV

## Global Cookie Security

Login Device Management کے اوپر آپ global cookie behavior configure کر سکتے ہیں۔

### User Cookie Lifetime

یہ کنٹرول کرتا ہے کہ user-side login کتنے دن active رہ سکتا ہے۔

مثلاً اگر آپ اسے 14 days set کریں، تو visitors کو عموماً 14 دن کے اندر upload password دوبارہ درج نہیں کرنا پڑے گا۔

### Admin Cookie Lifetime

یہ کنٹرول کرتا ہے کہ admin login کتنے دن active رہ سکتا ہے۔

مثلاً اگر 14 days set کریں، تو administrators کو عموماً 14 دن کے اندر دوبارہ sign in نہیں کرنا پڑے گا۔

### Secure Mode

Secure mode enabled ہو تو browsers login cookies صرف HTTPS پر send کرتے ہیں۔

production HTTPS sites کے لیے اسے enable کریں۔ local HTTP testing کے لیے enable نہ کریں، ورنہ "login succeeded, but refresh logs me out" جیسا behavior آ سکتا ہے۔

## Admin Login Devices

Admin tab وہ devices دکھاتا ہے جنہوں نے admin panel میں sign in کیا۔

device records صرف اس وقت ظاہر ہوتے ہیں جب admin credentials configured ہوں اور admin panel login کے ذریعے access کیا جائے۔

ہر device card یہ دکھا سکتا ہے:

- device اور browser information
- first login IP
- last active IP
- login time
- last active time
- expiration time
- current status

اگر کوئی device unfamiliar لگے تو `Force Offline` سے اسے invalidate کریں۔

## Clean Up Old Devices

`Clean Up Old Devices` current tab میں پرانے login records کو bulk میں remove کرتا ہے۔

اسے اس وقت استعمال کریں جب آپ کو شک ہو کہ پرانے sessions دوسرے devices پر ابھی active ہو سکتے ہیں۔

## Force Offline

`Force Offline` ایک device session کو invalidate کرتا ہے۔

device force offline ہونے کے بعد:

- Admin devices کو دوبارہ sign in کرنا ہوگا۔
- User-side devices کو upload password دوبارہ درج کرنا ہوگا۔
- WebDAV clients کو دوبارہ authenticate کرنا ہوگا۔

Expired یا invalid devices بھی remove کیے جا سکتے ہیں۔

## Sign Out Current Device

current device card پر `Current Device` mark ہوتا ہے۔

current device سے sign out کرنے کے بعد:

- current admin session sign out ہو جاتا ہے۔
- current user-side session sign out ہو جاتا ہے۔

اس area کا استعمال جاری رکھنے سے پہلے آپ کو دوبارہ sign in کرنا ہوگا۔
