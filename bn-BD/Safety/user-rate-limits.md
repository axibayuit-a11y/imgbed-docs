# User Rate Limits

User rate limits control করে regular users বা visitors homepage থেকে কত ঘন ঘন files upload করতে পারবে। Public upload pages abuse হওয়া ঠেকাতে এটি সাহায্য করে।

এই feature শুধু homepage uploads-এ প্রভাব ফেলে। Admin uploads এবং API Tokens দিয়ে করা uploads user rate limits দ্বারা সীমাবদ্ধ নয়।

## কোথায় Configure করবেন

Admin panel খুলে যান:

```text
System Settings -> Security Settings -> Upload Management -> User Rate Limits
```

![User rate limit settings](../../image/other/用户频控截图.png)

## Rate Limits Enable করা

`Enable Rate Limits` চালু করলে ImgBed uploader IP address অনুযায়ী recent uploads track করে।

Default values:

| Setting | Default | Description |
| --- | --- | --- |
| Detection window | 1.5 hours | কত সময় পেছনের upload records count হবে। |
| Max file count | 20 | Detection window-এ allowed maximum file count। |
| Single file size limit | 20 MB | একটি file-এর maximum size। |
| Total upload size limit | 200 MB | Detection window-এ maximum total upload size। |

যেমন, 1.5 hour window, 20 files, প্রতি file 20 MB এবং মোট 200 MB থাকলে same IP থেকে uploads কোনো configured limit ছাড়ালেই block হবে।

## File Types Exclude করা

`Excluded upload file types` regular users বা visitors-কে selected file categories upload করা থেকে আটকায়।

Available categories:

| Type | Description |
| --- | --- |
| Images | jpg, png, webp, gif এবং similar image files |
| Videos | mp4, webm, mov এবং similar video files |
| Audio | mp3, flac, wav এবং similar audio files |
| Documents | pdf, txt, md, docx এবং similar document files |
| Other | ওপরের categories-এর বাইরে files, যেমন zip, rar, exe, apk |

Default-এ কোনো type selected থাকে না, অর্থাৎ সেটি allowed।

কোনো type-এ click করলে সেটি highlight হয়, যার মানে সেই type blocked।

`Other` selected থাকলে zip বা rar upload করা visitors block হবে এবং জানানো হবে যে এই file type supported নয়।

## Block Messages

Limit trigger হলে users matching message দেখে:

![Too frequent upload message](../../image/other/频繁报错提示.png)

| Scenario | Message Meaning |
| --- | --- |
| Single file too large | File খুব বড়; upload-এর আগে compress করা উচিত। |
| File type blocked | এই file type supported নয়। সরিয়ে আবার চেষ্টা করুন। |
| Uploads too frequent | Recent uploads খুব frequent; retry time দেখানো হবে। |
| Total size too high | Recent total upload size খুব বেশি; retry time দেখানো হবে। |

## কখন Enable করবেন

আপনার upload homepage publicly accessible হলে user rate limits enable করুন।

Common reasons:

- Scripted bulk uploads নিয়ে চিন্তা আছে।
- Visitor uploads-এর large files limit করতে চান।
- Regular users যেন শুধু images upload করে, archives বা installers নয়।
- Public upload available রাখতে চান, কিন্তু resource usage control করতে চান।

Site শুধু নিজের জন্য হলে, বা শুধু administrators upload করলে এটি disabled রাখতে পারেন।
