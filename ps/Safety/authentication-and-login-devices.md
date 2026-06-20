# Authentication او Login Device Management

`Authentication Management` او `Login Device Management` ستاسو د ImgBed admin panel، public upload entry او WebDAV access ساتنه کوي.

دا پاڼه د access credentials ټاکلو، signed-in devices کتلو او د اړتیا پر وخت د زړو sessions revoke کولو لپاره وکاروئ.

## چېرته یې تنظیم کړئ

admin panel پرانیزئ، بیا دې ځای ته لاړ شئ:

```text
System Settings -> Security Settings
```

پاڼه دوه اصلي برخې لري:

- Authentication Management
- Login Device Management

![Authentication management](../../image/Safety/认证管理界面.png)

## Authentication Management څه کوي

Authentication Management د access credentials ساتي.

دوه ډولونه لري:

- User-side authentication
- Admin-side authentication

## User-Side Authentication

User-side authentication د upload password دی.

کله چې upload password وټاکل شي، عادي visitors باید د upload page له کارولو مخکې دا password ولیکي. دا هغه وخت ګټور دی چې نه غواړئ public upload page هر چا ته پرانیستی وي.

![User login page](../../image/Safety/用户端登录界面.png)

### د Upload Password ټاکل

کله چې upload password تنظیم وي:

- visitors باید د upload page له کارولو مخکې password ولیکي.
- upload یوازې هغه وخت فعالېږي چې password ومنل شي.
- که user-side device sessions فعال وي، ImgBed هغه user-side device ثبتوي.

د upload password بدلول زاړه user-side sessions باطلوي. visitors باید نوی password بیا ولیکي.

## Admin-Side Authentication

Admin-side authentication د admin username او password کاروي.

دا admin panel ساتي. د production کارونې لپاره یې تل تنظیمول پکار دي.

![Admin login page](../../image/Safety/管理端登录界面.png)

### د Admin Credentials ټاکل

کله چې admin username او password تنظیم وي:

- admin panel پرانیستل login غواړي.
- بریالی login د admin device record جوړوي.
- په Login Device Management کې devices کتل، پاکول یا force offline کولای شئ.

د admin username یا password بدلول زاړه admin sessions باطلوي. بیا sign in ته اړتیا لرئ.

## Login Device Management څه کوي

Login Device Management هغه devices ښيي چې sign in شوي وي.

دا درسره مرسته کوي وګورئ:

- کوم devices admin panel ته داخل شوي دي.
- کوم devices user-side upload page ته داخل شوي دي.
- کوم WebDAV clients نښلول شوي دي.
- device session لا valid دی که نه.
- زاړه devices باید force offline شي که نه.

پاڼه درې tabs لري:

- Admin
- User
- WebDAV

## Global Cookie Security

د Login Device Management په سر کې global cookie behavior تنظیمولای شئ.

### User Cookie Lifetime

کنټرولوي چې user-side login څو ورځې active پاتې شي.

د بېلګې په توګه، که یې 14 days ته وټاکئ، visitors عموما په 14 ورځو کې upload password بیا نه لیکي.

### Admin Cookie Lifetime

کنټرولوي چې admin login څو ورځې active پاتې شي.

د بېلګې په توګه، که یې 14 days ته وټاکئ، administrators عموما په 14 ورځو کې بیا sign in ته اړتیا نه لري.

### Secure Mode

کله چې Secure mode فعال وي، browsers login cookies یوازې د HTTPS له لارې لېږي.

د production HTTPS sites لپاره یې فعال کړئ. د local HTTP testing لپاره یې مه فعالوئ، که نه ممکن داسې حالت ووینئ چې "login بریالی شو، خو refresh وروسته مې وباسي".

## Admin Login Devices

Admin tab هغه devices ښيي چې admin panel ته sign in شوي وي.

Device records یوازې هغه وخت ښکاري چې admin credentials تنظیم وي او admin panel د login له لارې پرانیستل شوی وي.

هر device card دا معلومات ښودلای شي:

- Device او browser معلومات
- First login IP
- Last active IP
- Login time
- Last active time
- Expiration time
- Current status

که ناپېژندل شوی device ووینئ، `Force Offline` وکاروئ څو session یې invalid شي.

## زاړه Devices پاکول

`Clean Up Old Devices` په اوسني tab کې زاړه login records په bulk ډول لرې کوي.

دا هغه وخت وکاروئ چې شک لرئ زاړه sessions ښايي لا هم پر نورو devices active وي.

## Force Offline

`Force Offline` د یوه device session invalid کوي.

کله چې device force offline شي:

- Admin devices باید بیا sign in وکړي.
- User-side devices باید upload password بیا ولیکي.
- WebDAV clients باید بیا authenticate شي.

Expired یا invalid devices هم لرې کېدای شي.

## له اوسني Device څخه Sign Out

اوسنی device card د `Current Device` په نوم نښه شوی وي.

له اوسني device څخه تر sign out وروسته:

- اوسنی admin session sign out کېږي.
- اوسنی user-side session sign out کېږي.

د هغې برخې د دوامدارې کارونې لپاره باید بیا sign in وکړئ.
