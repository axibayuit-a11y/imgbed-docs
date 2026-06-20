# Authentication மற்றும் Login Device Management

`Authentication Management` மற்றும் `Login Device Management` உங்கள் ImgBed admin panel, public upload entry, WebDAV access ஆகியவற்றைப் பாதுகாக்கும்.

இந்த பக்கத்தில் access credentials அமைக்கலாம், signed-in devices பார்க்கலாம், தேவையானபோது பழைய sessions revoke செய்யலாம்.

## எங்கு Configure செய்வது

admin panel திறந்து செல்லவும்:

```text
System Settings -> Security Settings
```

இந்த page-ல் இரண்டு முக்கிய பகுதிகள் உள்ளன:

- Authentication Management
- Login Device Management

![Authentication management](../../image/Safety/认证管理界面.png)

## Authentication Management என்ன செய்கிறது

Authentication Management access credentials சேமிக்கும்.

இரண்டு வகைகள்:

- User-side authentication
- Admin-side authentication

## User-Side Authentication

User-side authentication என்பது upload password.

upload password அமைத்த பிறகு regular visitors upload page பயன்படுத்துவதற்கு முன் password உள்ளிட வேண்டும். public upload page எல்லோருக்கும் திறந்திருக்க வேண்டாம் என்றால் இது உதவும்.

![User login page](../../image/Safety/用户端登录界面.png)

### Upload Password அமைத்தல்

upload password configured ஆக இருந்தால்:

- visitors upload page பயன்படுத்த password உள்ளிட வேண்டும்.
- password ஏற்றுக்கொள்ளப்பட்ட பிறகே upload கிடைக்கும்.
- user-side device sessions enabled என்றால் ImgBed அந்த user-side device-ஐ record செய்யும்.

upload password மாற்றினால் பழைய user-side sessions invalid ஆகும். visitors புதிய password மீண்டும் உள்ளிட வேண்டும்.

## Admin-Side Authentication

Admin-side authentication admin username மற்றும் password பயன்படுத்தும்.

இது admin panel-ஐ பாதுகாக்கும். production use-ல் இதை எப்போதும் configure செய்ய வேண்டும்.

![Admin login page](../../image/Safety/管理端登录界面.png)

### Admin Credentials அமைத்தல்

admin username மற்றும் password configured ஆக இருந்தால்:

- admin panel திறக்க login தேவை.
- successful login ஒரு admin device record உருவாக்கும்.
- Login Device Management-ல் devices review, clean up, அல்லது force offline செய்யலாம்.

admin username அல்லது password மாற்றினால் பழைய admin sessions invalid ஆகும். மீண்டும் sign in செய்ய வேண்டும்.

## Login Device Management என்ன செய்கிறது

Login Device Management signed-in devices காட்டும்.

இதன் மூலம் பார்க்கலாம்:

- எந்த devices admin panel அணுகின.
- எந்த devices user-side upload page அணுகின.
- எந்த WebDAV clients connect ஆனது.
- device session இன்னும் valid உள்ளதா.
- பழைய devices force offline செய்ய வேண்டுமா.

page-ல் மூன்று tabs உள்ளன:

- Admin
- User
- WebDAV

## Global Cookie Security

Login Device Management மேல் பகுதியில் global cookie behavior configure செய்யலாம்.

### User Cookie Lifetime

user-side login எத்தனை நாட்கள் active ஆக இருக்கலாம் என்பதை கட்டுப்படுத்தும்.

உதாரணமாக 14 days அமைத்தால் visitors பொதுவாக 14 நாட்களுக்குள் upload password மீண்டும் உள்ளிட வேண்டியதில்லை.

### Admin Cookie Lifetime

admin login எத்தனை நாட்கள் active ஆக இருக்கலாம் என்பதை கட்டுப்படுத்தும்.

உதாரணமாக 14 days அமைத்தால் administrators பொதுவாக 14 நாட்களுக்குள் மீண்டும் sign in செய்ய வேண்டியதில்லை.

### Secure Mode

Secure mode enabled ஆக இருந்தால் browsers login cookies-ஐ HTTPS வழியாக மட்டும் அனுப்பும்.

production HTTPS sites-க்கு enable செய்யவும். local HTTP testing-க்கு enable செய்ய வேண்டாம்; இல்லையெனில் "login succeeded, but refresh logs me out" போன்ற behavior தோன்றலாம்.

## Admin Login Devices

Admin tab admin panel-ல் sign in செய்த devices காட்டும்.

admin credentials configured ஆகி admin panel login மூலம் access செய்த பிறகே device records தோன்றும்.

ஒவ்வொரு device card காட்டக்கூடியவை:

- device மற்றும் browser information
- first login IP
- last active IP
- login time
- last active time
- expiration time
- current status

அறியாத device தெரிந்தால் `Force Offline` பயன்படுத்தி invalidate செய்யவும்.

## Clean Up Old Devices

`Clean Up Old Devices` current tab-ல் உள்ள பழைய login records-ஐ bulk-ஆக remove செய்கிறது.

மற்ற devices-ல் பழைய sessions இன்னும் active இருக்கலாம் என்று சந்தேகம் இருந்தால் பயன்படுத்தவும்.

## Force Offline

`Force Offline` ஒரு device session-ஐ invalidate செய்கிறது.

device force offline ஆன பிறகு:

- Admin devices மீண்டும் sign in செய்ய வேண்டும்.
- User-side devices upload password மீண்டும் உள்ளிட வேண்டும்.
- WebDAV clients மீண்டும் authenticate செய்ய வேண்டும்.

Expired அல்லது invalid devices-ஐயும் remove செய்யலாம்.

## Sign Out Current Device

current device card `Current Device` என mark செய்யப்படும்.

current device-ல் sign out செய்த பிறகு:

- current admin session sign out ஆகும்.
- current user-side session sign out ஆகும்.

அந்த பகுதியை தொடர்ந்து பயன்படுத்த மீண்டும் sign in செய்ய வேண்டும்.
