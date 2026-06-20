# User Rate Limits

User rate limits kiểm soát regular users hoặc visitors có thể upload files từ homepage thường xuyên đến mức nào. Tính năng này giúp tránh public upload pages bị lạm dụng.

Feature này chỉ ảnh hưởng homepage uploads. Admin uploads và uploads bằng API Tokens không bị user rate limits giới hạn.

## Cấu hình ở đâu

Mở admin panel, rồi vào:

```text
System Settings -> Security Settings -> Upload Management -> User Rate Limits
```

![User rate limit settings](../../image/other/用户频控截图.png)

## Enable Rate Limits

Sau khi bật `Enable Rate Limits`, ImgBed track recent uploads theo uploader IP address.

Default values:

| Setting | Default | Description |
| --- | --- | --- |
| Detection window | 1.5 hours | Khoảng thời gian upload records được tính ngược lại. |
| Max file count | 20 | Số files tối đa được phép trong detection window. |
| Single file size limit | 20 MB | Kích thước tối đa của một file. |
| Total upload size limit | 200 MB | Tổng upload size tối đa trong detection window. |

Ví dụ, với window 1.5 giờ, 20 files, 20 MB mỗi file và tổng 200 MB, uploads từ cùng IP sẽ bị block khi vượt bất kỳ configured limit nào.

## Excluding File Types

`Excluded upload file types` chặn regular users hoặc visitors upload các file categories đã chọn.

Available categories:

| Type | Description |
| --- | --- |
| Images | jpg, png, webp, gif và các image files tương tự |
| Videos | mp4, webm, mov và các video files tương tự |
| Audio | mp3, flac, wav và các audio files tương tự |
| Documents | pdf, txt, md, docx và các document files tương tự |
| Other | Files ngoài các categories trên, như zip, rar, exe, apk |

Mặc định không type nào được chọn, nghĩa là được phép.

Khi click một type, type đó được highlight, nghĩa là bị block.

Nếu chọn `Other`, visitors upload zip hoặc rar files sẽ bị block và được báo rằng file type này không được hỗ trợ.

## Block Messages

Khi một limit được trigger, users sẽ thấy message tương ứng:

![Too frequent upload message](../../image/other/频繁报错提示.png)

| Scenario | Message Meaning |
| --- | --- |
| Single file too large | File quá lớn, nên compress trước khi upload. |
| File type blocked | File type này không được hỗ trợ. Hãy bỏ file đó rồi thử lại. |
| Uploads too frequent | Recent uploads quá dày, có hiển thị retry time. |
| Total size too high | Recent total upload size quá cao, có hiển thị retry time. |

## Khi nào nên Enable

Bật user rate limits nếu upload homepage của bạn public accessible.

Các lý do thường gặp:

- Bạn lo ngại scripted bulk uploads.
- Bạn muốn giới hạn large visitor uploads.
- Bạn chỉ muốn regular users upload images, không upload archives hoặc installers.
- Bạn muốn giữ public upload khả dụng nhưng kiểm soát resource usage.

Nếu site chỉ dùng cho cá nhân, hoặc chỉ administrators upload, có thể để disabled.
