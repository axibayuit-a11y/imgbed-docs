# Magnet Transfer

Magnet transfer tải files từ magnet link và tự động upload chúng lên cloud storage channel bạn chọn.

Tính năng này hữu ích khi chuyển anime episodes, videos, archives và các files tương tự. Paste magnet link, ImgBed tạo background download task. Sau khi download xong, file được upload vào ImgBed và final link xuất hiện trong upload list.

![Magnet transfer](../../image/other/磁力链接/磁力链接.png)

## Dùng ở đâu

Magnet transfer entry nằm trong homepage upload area.

Paste magnet link vào input box, chọn `Transfer`, rồi upload.

![Upload anime](../../image/other/磁力链接/上传番剧.png)

## Trước lần dùng đầu tiên

Trước tiên cần cấu hình magnet transfer trong admin panel.

Thường bạn cần:

1. GitHub account để chạy download task.
2. Cloud upload channel, ví dụ Google Drive hoặc OneDrive.
3. Target upload directory.
4. Task timeout.

Khi settings đã sẵn sàng, quay lại homepage và paste magnet link để bắt đầu transfer.

## Upload Magnet Link

1. Paste magnet link vào homepage upload box.
2. Đảm bảo mode được đặt là `Transfer`.
3. Nhấn upload.
4. Chờ ImgBed tạo magnet task.
5. Sau khi task bắt đầu, dùng floating panel `Magnet Tasks` ở góc dưới bên phải để xem progress.

Download và upload có thể mất thời gian. Speed phụ thuộc vào magnet resource, GitHub runtime environment và selected cloud storage channel.

![Magnet downloading](../../image/other/磁力链接/磁力链接下载中.png)

## Sau khi hoàn tất

Khi task hoàn tất, upload list hiển thị file name và link.

Videos hiển thị video preview, images hiển thị image preview, và other files hiển thị regular file icon.

![Downloaded video](../../image/other/磁力链接/下载好后的视频.png)

Bạn có thể copy:

| Link Type | Use Case |
| --- | --- |
| Original link | Direct file access |
| Markdown | Markdown posts hoặc notes |
| HTML | Web page code |
| BBCode | Forums hỗ trợ BBCode |

## Magnet Task Panel

Magnet task panel ở góc dưới bên phải hiển thị task count, task name, progress và final status.

Common states:

| Status | Meaning |
| --- | --- |
| Waiting | Task đã được tạo và đang chờ chạy. |
| Downloading | Magnet resource đang được download. |
| Uploading | File đã download xong và đang upload lên cloud storage. |
| Completed | Upload thành công và link có thể copy. |
| Failed | Task không hoàn tất thành công. Kiểm tra message rồi thử lại. |

## Tips

- Nếu magnet link chứa nhiều files, ImgBed ưu tiên main completed file để hiển thị.
- Large files mất nhiều thời gian hơn. Hãy chờ task finish trước khi refresh page.
- Nếu magnet resource không có available peers, download có thể rất chậm hoặc fail.
- Nếu cloud account hết quota, authorization hết hạn hoặc upload directory sai, task có thể fail.
- Video preview có thể cần vài giây sau khi upload complete.

## FAQ

### Paste Magnet Link rồi nhưng không có gì bắt đầu

Xác nhận magnet transfer đã enabled trong admin panel và đã chọn GitHub account cùng cloud channel dùng được.

### Download luôn chậm

Magnet speed phụ thuộc vào chính resource. Nếu không có available peers, download có thể rất chậm hoặc không thể tải.

### Upload xong nhưng không có Preview

Trước tiên xác nhận file link mở được. Video files có thể cần một chút thời gian để load trong browser, hoặc bạn có thể mở link trực tiếp.

### Task fail thì cần kiểm tra gì?

Kiểm tra magnet link có valid không, cloud channel có hoạt động không và upload directory có đúng không. Sau đó submit task lại.
