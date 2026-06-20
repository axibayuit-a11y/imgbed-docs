# আপলোড সেটিংস

আপলোড সেটিংস ImgBed-কে আপনার নিজের storage channels-এর সঙ্গে যুক্ত করে। কোনো channel কনফিগার করার পর আপলোড করা ছবি ও ফাইল আপনার বেছে নেওয়া সার্ভিসে সংরক্ষিত হয়। ImgBed access link, file record, preview, public gallery, random image API, WebDAV access এবং সম্পর্কিত workflow পরিচালনা করে।

প্রতিটি ব্যবহারকারীর জন্য উপযুক্ত channel আলাদা হতে পারে। সহজভাবে শুরু করতে চাইলে Telegram, Discord বা GitHub Releases ভালো বিকল্প। capacity, speed ও long-term stability বেশি গুরুত্বপূর্ণ হলে Cloudflare R2, S3, OneDrive, Google Drive, Dropbox, Yandex, pCloud বা নিজের WebDAV service বিবেচনা করুন।

## শুরু করার আগে

- যে storage account বা API credentials ব্যবহার করবেন, তা প্রস্তুত রাখুন।
- আপনার ImgBed domain ঠিকমতো খোলা যাচ্ছে কি না নিশ্চিত করুন, কারণ OAuth channels callback URL চায়।
- channel যোগ করার পর প্রথমে একটি test image upload করে file save ও open হচ্ছে কি না দেখুন।

## চ্যানেল তালিকা

- [Telegram](./telegram.md)
- [Cloudflare R2](./cloudflare-r2.md)
- [S3](./s3.md)
- [WebDAV](./webdav.md)
- [Discord](./discord.md)
- [Hugging Face](./huggingface.md)
- [GitHub Releases](./github-releases.md)
- [GitLab Packages](./gitlab-packages.md)
- [OneDrive](./onedrive.md)
- [Google Drive](./google-drive.md)
- [Dropbox](./dropbox.md)
- [Yandex](./yandex.md)
- [pCloud](./pcloud.md)

## এই অধ্যায়ে যা থাকবে

- প্রতিটি upload channel সেটআপের আগে কোন তথ্য দরকার।
- third-party platform-এ app তৈরি, key copy বা Token authorize করার পদ্ধতি।
- ImgBed-এ channel configuration পূরণ করে upload কাজ করছে কি না যাচাই করা।
