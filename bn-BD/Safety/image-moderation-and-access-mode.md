# Image Moderation এবং Access Mode

Image moderation uploaded images-কে age rating দেয়। Access mode ঠিক করে public access-এ কোন ratings দেখা যাবে।

এটি public gallery, public file URLs এবং random image API-তে প্রভাব ফেলে। Admin panel restrict করে না। Administrators এখনও সব files দেখতে এবং manage করতে পারবেন।

## কোথায় Configure করবেন

Admin panel খুলে যান:

```text
System Settings -> Security Settings -> Upload Management -> Image Moderation
```

প্রধান settings:

- Access mode
- Enable moderation
- Moderation provider

## Access Mode কী করে

Access mode publicভাবে কোন age ratings দেখা যাবে তা ঠিক করে।

Current modes:

| Access Mode | Publicly Visible Ratings |
| --- | --- |
| Adult mode | General, R12, R16, R18 |
| Youth mode | General, R12, R16 |
| Teen mode | General, R12 |
| Child mode | শুধু General |

Default হলো Adult mode।

Private sites বা mature content থাকা sites-এর জন্য Adult mode ঠিক হতে পারে। Public gallery বেশি conservative রাখতে চাইলে Youth, Teen বা Child mode বেছে নিন।

## Moderation Enable করলে কী হয়

Moderation enabled থাকলে ImgBed upload-এর সময় selected moderation provider call করে এবং detected age rating save করে।

প্রধান ratings:

| Rating | Meaning |
| --- | --- |
| General | Safe public content |
| R12 | হালকা sensitive content |
| R16 | মাঝারি sensitive content |
| R18 | Adult content |

Public access সিদ্ধান্ত নিতে moderation result ব্যবহার হয়।

Moderation enabled না থাকলে, বা পুরোনো files-এর rating না থাকলে, সেগুলো unrated হিসেবে ধরা হয়। শুধু rating নেই বলে unrated files public gallery বা random image API থেকে automatically সরানো হয় না।

## Moderation Provider নির্বাচন

Available providers:

- moderatecontent.com
- nsfwjs
- Sightengine

প্রতিটি provider-এর requirements আলাদা:

- moderatecontent.com সাধারণত API Key চায়।
- nsfwjs সাধারণত API endpoint URL চায়।
- Sightengine API user এবং API secret চায়।

আপনার account, availability এবং detection quality অনুযায়ী provider বেছে নিন। Moderation enabled এবং ঠিকভাবে configured থাকলে ImgBed upload-এর সময় image rating লিখতে চেষ্টা করে।

## Public Gallery-তে প্রভাব

Public gallery access mode অনুযায়ী files filter করে।

Examples:

- Adult mode: R18 images দেখা যেতে পারে।
- Youth mode: R18 images hidden হয়।
- Teen mode: R16 এবং R18 images hidden হয়।
- Child mode: শুধু General images দেখায়।

এটি শুধু normal public access-এ প্রভাব ফেলে। Admin panel সব files দেখাবে।

## Public File URLs-এ প্রভাব

Public file URLs হলো visitors যে direct image links খোলে।

File rating current access mode-এ allowed হলে ImgBed original image return করে।

Rating allowed level-এর বেশি হলে normal public access original image return করে না। এর বদলে ImgBed configured blocked result বা blocked fallback image return করে।

Example:

- Current mode হলো Child mode।
- একটি image rating R18।
- Visitor public URL সরাসরি খুলেছে।
- ImgBed সেই visitor-কে R18 original image return করে না।

![Restricted file image](../../image/Safety/文件受限图.png)

Admin panel-এ files দেখা administrators এই restriction-এ প্রভাবিত হন না।

## Random Image API-তে প্রভাব

Random image API-ও access mode অনুযায়ী candidate pool filter করে।

Child mode-এ random images শুধু General-rated files থেকে নেওয়া হয়।

Youth mode-এ random images General, R12 এবং R16 files থেকে আসতে পারে, কিন্তু R18 files থেকে নয়।

এতে random image API public gallery restrictions bypass করতে পারে না।

## List Rules-এর সঙ্গে সম্পর্ক

Access mode একমাত্র public access rule নয়। এটি allow/block list rules-এর সঙ্গে মিলিয়ে কাজ করে।

সহজভাবে:

- Allowlisted content আগে public ধরা হয়।
- Blocklisted content regular visitors সরাসরি দেখতে পারে না।
- যে content কোনো list-এ নেই, সেটি access mode অনুযায়ী check হয়।

কোনো image age rating এবং list rules দুইভাবেই restricted হলে regular visitors original file সরাসরি দেখতে পারবে না।

## Recommended Settings

Public sites-এর জন্য:

- Moderation enable করুন।
- Site audience অনুযায়ী access mode নির্বাচন করুন।
- All-age visitors-এর জন্য Child mode বা Teen mode ব্যবহার করুন।
- Mature content publicly দেখাতে না চাইলে Adult mode এড়িয়ে চলুন।
- Admin panel-এ file ratings review করে দরকার হলে manually adjust করুন।

Private বা personal sites-এর জন্য:

- Adult mode সাধারণত ঠিক থাকে।
- দরকার হলে moderation enable করুন।
- Admin panel-এ ratings review এবং adjust করুন।

## FAQ

### Access Mode বদলালে Files কি Admin Panel থেকে হারিয়ে যাবে?

না।

Access mode শুধু normal public access-এ প্রভাব ফেলে। Admin panel-এ এর প্রভাব নেই।

### Child Mode-এ যাওয়ার পর Public Gallery কম Images দেখাচ্ছে কেন?

Child mode শুধু General-rated files publicly দেখায়। R12, R16 এবং R18 files filter হয়ে যায়।

### Public URLs কি এখনও Adult Images খুলতে পারে?

Current access mode যদি সেই rating allow না করে, normal public URLs original image return করে না।

### Random Image API কি Restricted Images return করতে পারে?

না।

Random image API current access mode অনুযায়ী candidates filter করে।

### পুরোনো Unrated Images-এর কী হবে?

Unrated images শুধু moderation result নেই বলে automatically hidden হয় না। পরে admin panel থেকে ratings adjust করতে পারেন।
