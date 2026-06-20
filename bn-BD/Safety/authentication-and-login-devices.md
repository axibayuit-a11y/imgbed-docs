# Authentication এবং Login Device Management

`Authentication Management` এবং `Login Device Management` আপনার ImgBed admin panel, public upload entry এবং WebDAV access সুরক্ষিত রাখে।

এই পেজ থেকে access credentials সেট করা, signed-in devices দেখা এবং দরকার হলে পুরোনো sessions revoke করা যায়।

## কোথায় Configure করবেন

Admin panel খুলে যান:

```text
System Settings -> Security Settings
```

এই page-এ দুটি প্রধান area আছে:

- Authentication Management
- Login Device Management

![Authentication management](../../image/Safety/认证管理界面.png)

## Authentication Management কী করে

Authentication Management access credentials সংরক্ষণ করে।

এর দুই ধরনের authentication আছে:

- User-side authentication
- Admin-side authentication

## User-Side Authentication

User-side authentication হলো upload password।

Upload password সেট করলে সাধারণ visitors-কে upload page ব্যবহার করার আগে password দিতে হবে। Public upload page সবার জন্য খোলা রাখতে না চাইলে এটি কাজে লাগে।

![User login page](../../image/Safety/用户端登录界面.png)

### Upload Password সেট করা

Upload password configured থাকলে:

- Visitors-কে upload page ব্যবহারের আগে password দিতে হবে।
- Password accepted হওয়ার পরই upload করা যাবে।
- User-side device sessions enabled থাকলে ImgBed সেই user-side device record করে।

Upload password বদলালে পুরোনো user-side sessions invalid হয়ে যায়। Visitors-কে নতুন password আবার দিতে হবে।

## Admin-Side Authentication

Admin-side authentication admin username এবং password ব্যবহার করে।

এটি admin panel সুরক্ষিত রাখে। Production use-এর জন্য এটি সবসময় configure করা উচিত।

![Admin login page](../../image/Safety/管理端登录界面.png)

### Admin Credentials সেট করা

Admin username এবং password configured থাকলে:

- Admin panel খুলতে login করতে হবে।
- Successful login একটি admin device record তৈরি করে।
- Login Device Management-এ devices review, clean up বা force offline করা যায়।

Admin username বা password বদলালে পুরোনো admin sessions invalid হয়ে যায়। আপনাকে আবার sign in করতে হবে।

## Login Device Management কী করে

Login Device Management signed-in devices দেখায়।

এটি দিয়ে দেখা যায়:

- কোন devices admin panel access করেছে।
- কোন devices user-side upload page access করেছে।
- কোন WebDAV clients connected হয়েছে।
- কোনো device session এখনও valid আছে কি না।
- পুরোনো devices force offline করা উচিত কি না।

Page-এ তিনটি tabs আছে:

- Admin
- User
- WebDAV

## Global Cookie Security

Login Device Management-এর উপরে global cookie behavior configure করা যায়।

### User Cookie Lifetime

User-side login কত দিন active থাকবে তা control করে।

যেমন, 14 days সেট করলে visitors সাধারণত 14 দিনের মধ্যে upload password আবার দিতে হবে না।

### Admin Cookie Lifetime

Admin login কত দিন active থাকবে তা control করে।

যেমন, 14 days সেট করলে administrators সাধারণত 14 দিনের মধ্যে আবার sign in করতে হবে না।

### Secure Mode

Secure mode enabled থাকলে browsers login cookies শুধু HTTPS দিয়ে পাঠায়।

Production HTTPS sites-এর জন্য এটি enable করুন। Local HTTP testing-এ enable করবেন না, না হলে "login successful, কিন্তু refresh করলে logout" ধরনের আচরণ দেখা যেতে পারে।

## Admin Login Devices

Admin tab admin panel-এ sign in করা devices দেখায়।

Device records তখনই দেখা যায় যখন admin credentials configured থাকে এবং admin panel login-এর মাধ্যমে access করা হয়।

প্রতিটি device card-এ দেখা যেতে পারে:

- Device এবং browser information
- First login IP
- Last active IP
- Login time
- Last active time
- Expiration time
- Current status

অচেনা device দেখলে সেটি invalid করতে `Force Offline` ব্যবহার করুন।

## পুরোনো Devices Clean Up করা

`Clean Up Old Devices` current tab-এর পুরোনো login records bulk-এ সরায়।

যখন মনে হয় পুরোনো sessions অন্য devices-এ এখনও active থাকতে পারে, তখন এটি ব্যবহার করুন।

## Force Offline

`Force Offline` একটি device session invalid করে।

Device force offline করার পর:

- Admin devices-কে আবার sign in করতে হবে।
- User-side devices-কে upload password আবার দিতে হবে।
- WebDAV clients-কে আবার authenticate করতে হবে।

Expired বা invalid devices সরিয়েও দেওয়া যায়।

## Current Device থেকে Sign Out

Current device card-এ `Current Device` mark থাকে।

Current device sign out করলে:

- Current admin session sign out হয়।
- Current user-side session sign out হয়।

ওই area ব্যবহার চালিয়ে যেতে আবার sign in করতে হবে।
