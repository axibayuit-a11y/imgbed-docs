# Cloudflare R2 Channel যোগ করা

## কখন সবচেয়ে উপযোগী

Cloudflare R2 ব্যবহার করুন যখন:

- আপনার ImgBed site আগে থেকেই Cloudflare-এ deploy করা এবং একই Cloudflare account-এর R2 bucket-এ files রাখতে চান।
- আলাদা S3 endpoint, access key এবং secret key configure করতে চান না।
- Worker বা Pages R2 binding দিয়ে কম setup-এ read/write চালাতে চান।

সংক্ষেপে:

R2 channel ImgBed admin panel-এর ভেতরে manually তৈরি করা হয় না। আগে Cloudflare project-এ একটি R2 bucket bind করতে হবে, এবং binding variable name অবশ্যই `img_r2` হতে হবে।

## শুরু করার আগে যা লাগবে

- একটি Cloudflare account।
- আগে থেকে তৈরি একটি R2 bucket।
- যে Cloudflare project-এ ImgBed deploy করা আছে সেটি manage করার permission।

## Cloudflare-এ Configure করুন

### 1. R2 Bucket তৈরি করুন

1. Cloudflare Dashboard-এ log in করুন।
2. `R2 Object Storage` খুলুন।
3. Create bucket ক্লিক করুন।
4. Bucket name দিন, যেমন `imgbed`।

Uploaded files এই bucket-এ সংরক্ষিত হবে।

![Create an R2 bucket](../../image/upload/cloudflare-r2/创建一个存储桶img-r2.png)

### 2. Bucket-কে ImgBed Project-এ Bind করুন

আপনার deployment type অনুযায়ী binding location নির্বাচন করুন:

| Deployment Type | Binding Location |
| --- | --- |
| Pages | Current Pages project -> Settings -> Functions -> R2 bucket bindings |
| Worker | Current Worker -> Settings -> Bindings -> R2 bucket bindings |

Binding যোগ করার সময় গুরুত্বপূর্ণ fields:

| Field | Value |
| --- | --- |
| Variable name | `img_r2` |
| R2 bucket | আপনার তৈরি করা bucket নির্বাচন করুন। |

Variable name হুবহু `img_r2` হতে হবে। R2 files upload, read এবং delete—সবকিছু এই binding name-এর ওপর নির্ভর করে।

### 3. Project Redeploy করুন

Binding save করার পর ImgBed redeploy করুন, যাতে Worker বা Pages runtime `img_r2` access করতে পারে।

## ImgBed-এ কী দেখবেন

R2 binding available হলে খুলুন:

1. System Settings।
2. Upload Settings।
3. `Cloudflare R2` channel।

System automatically একটি fixed channel তৈরি করে:

| Field | Fixed Value |
| --- | --- |
| Channel name | `Cloudflare R2` |
| Channel type | `cfr2` |
| Storage mode | `binding` |
| Configuration source | Environment binding |

এটি fixed binding channel। এটি তৈরি করতে Add Channel ক্লিক করতে হবে না, এবং সাধারণ channel-এর মতো delete করা যায় না।

## Admin Panel-এ Editable Fields

| Field | কাজ | Required |
| --- | --- | --- |
| Enable channel | R2 upload selection-এ অংশ নেবে কি না control করে। | Yes |
| Account ID | Quota limits enabled হলে official R2 usage query করতে ব্যবহার হয়। | Quota limits enabled হলে recommended |
| Bucket name | Quota limits enabled হলে official R2 usage query করতে ব্যবহার হয়। | Quota limits enabled হলে recommended |
| Quota limit | Capacity অনুযায়ী এই R2 channel upload selection-এ অংশ নেবে কি না control করে। | No |
| Threshold | Usage নির্দিষ্ট percentage-এ পৌঁছালে এই channel-এ writing বন্ধ করে। | Quota limits enabled হলে required |

Cloudflare dashboard-এর account information panel থেকে Account ID copy করতে পারেন। শুধু তখনই দিন যখন ImgBed দিয়ে R2 quota usage query এবং enforce করতে চান।

![Get the Account ID](../../image/upload/cloudflare-r2/获取账户id.png)

## Setup Steps

1. Cloudflare-এ R2 bucket তৈরি করুন।
2. ImgBed project-এর Cloudflare settings খুলুন।
3. R2 bucket binding যোগ করুন।
4. `Variable name` হিসেবে `img_r2` দিন।
5. তৈরি করা R2 bucket নির্বাচন করুন।
6. Binding save করে ImgBed redeploy করুন।
7. ImgBed -> System Settings -> Upload Settings-এ ফিরে আসুন।
8. `Cloudflare R2` channel দেখা যাচ্ছে এবং enabled আছে কি না confirm করুন।

Capacity অনুযায়ী R2 upload selection-এ অংশ নিক চাইলে quota limit enable করুন, তারপর Account ID, bucket name, quota limit এবং threshold দিয়ে save করুন।

![Configure quota limits](../../image/upload/cloudflare-r2/配置容量限制.png)

## কীভাবে যাচাই করবেন

- Upload Settings-এ fixed `Cloudflare R2` channel দেখা যায়।
- Channel card-এ enabled দেখায়।
- ছোট test file successfully upload হয় এবং returned link normalভাবে খোলে।
- File খুললে `R2 database binding is not configured` দেখালে runtime `img_r2` binding পায়নি। Cloudflare-এ binding name check করে project redeploy করুন।
