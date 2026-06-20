# Magnet Transfer

Magnet transfer magnet link থেকে files download করে এবং আপনার নির্বাচিত cloud storage channel-এ automatically upload করে।

Anime episodes, videos, archives এবং similar files transfer করতে এটি useful। Magnet link paste করলে ImgBed background download task তৈরি করে। Download শেষ হলে file ImgBed-এ upload হয় এবং final link upload list-এ দেখা যায়।

![Magnet transfer](../../image/other/磁力链接/磁力链接.png)

## কোথায় ব্যবহার করবেন

Magnet transfer entry homepage upload area-তে আছে।

Input box-এ magnet link paste করুন, `Transfer` নির্বাচন করুন, তারপর upload করুন।

![Upload anime](../../image/other/磁力链接/上传番剧.png)

## প্রথমবার ব্যবহারের আগে

আগে admin panel-এ magnet transfer configure করুন।

সাধারণত দরকার:

1. Download task চালানোর জন্য GitHub account।
2. Google Drive বা OneDrive-এর মতো cloud upload channel।
3. Target upload directory।
4. Task timeout।

Settings ready হলে homepage-এ ফিরে magnet link paste করে transfer start করুন।

## Magnet Link Upload করা

1. Homepage upload box-এ magnet link paste করুন।
2. Mode `Transfer` সেট আছে কি না নিশ্চিত করুন।
3. Upload ক্লিক করুন।
4. ImgBed magnet task create করা পর্যন্ত অপেক্ষা করুন।
5. Task start হলে progress দেখতে bottom-right corner-এর `Magnet Tasks` floating panel ব্যবহার করুন।

Download এবং upload সময় নিতে পারে। Speed magnet resource, GitHub runtime environment এবং selected cloud storage channel-এর ওপর depend করে।

![Magnet downloading](../../image/other/磁力链接/磁力链接下载中.png)

## Completion-এর পর

Task complete হলে upload list file name এবং link দেখায়।

Videos video preview দেখায়, images image preview দেখায়, আর other files regular file icon দেখায়।

![Downloaded video](../../image/other/磁力链接/下载好后的视频.png)

আপনি copy করতে পারেন:

| Link Type | Use Case |
| --- | --- |
| Original link | Direct file access |
| Markdown | Markdown posts বা notes |
| HTML | Web page code |
| BBCode | BBCode support করা forums |

## Magnet Task Panel

Bottom-right magnet task panel task count, task name, progress এবং final status দেখায়।

Common states:

| Status | Meaning |
| --- | --- |
| Waiting | Task তৈরি হয়েছে এবং run হওয়ার অপেক্ষায়। |
| Downloading | Magnet resource download হচ্ছে। |
| Uploading | File download হয়েছে এবং cloud storage-এ upload হচ্ছে। |
| Completed | Upload successful এবং link copy করা যাবে। |
| Failed | Task successfully finish হয়নি। Message check করে আবার চেষ্টা করুন। |

## Tips

- Magnet link-এ multiple files থাকলে ImgBed display-এর জন্য main completed file prioritise করে।
- Large files বেশি সময় নেয়। Task finish হওয়ার আগে page refresh না করাই ভালো।
- Magnet resource-এ available peers না থাকলে download খুব slow বা fail হতে পারে।
- Cloud account quota শেষ, authorization expired, বা upload directory ভুল হলে task fail করতে পারে।
- Upload complete হওয়ার পর video preview আসতে কয়েক seconds লাগতে পারে।

## FAQ

### Magnet Link paste করার পর কিছু start হচ্ছে না

Admin panel-এ magnet transfer enabled আছে কি না এবং usable GitHub account ও cloud channel selected আছে কি না confirm করুন।

### Download সবসময় slow

Magnet speed resource-এর ওপর depend করে। Available peers না থাকলে download খুব slow বা impossible হতে পারে।

### Upload-এর পর Preview নেই

আগে file link খোলে কি না confirm করুন। Video files browser-এ load হতে সামান্য সময় নিতে পারে, অথবা link direct খুলুন।

### Task fail হলে কী check করব?

Magnet link valid কি না, cloud channel কাজ করছে কি না, এবং upload directory সঠিক কি না check করুন। তারপর task আবার submit করুন।
