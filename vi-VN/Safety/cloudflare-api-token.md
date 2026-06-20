# Cloudflare API Token

Cloudflare API credentials cho phép ImgBed purge Cloudflare CDN cache sau khi files thay đổi.

![Cloudflare API Token settings](../../image/Safety/cloudflare%20api%20token截图.png)

## Cấu hình ở đâu

Mở admin panel, rồi vào:

```text
System Settings -> Security Settings -> Cloudflare API Token
```

Bạn cần điền:

- Zone ID
- Account email
- API Key

## Setting này làm gì

Cloudflare có thể cache public image URLs.

Caching giúp image tải nhanh hơn, nhưng cũng có thể khiến content cũ vẫn hiển thị một thời gian sau khi bạn delete, block, replace hoặc move file.

Sau khi Cloudflare API credentials được cấu hình, ImgBed sẽ cố purge Cloudflare cache liên quan khi các thao tác đó hoàn tất.

Hữu ích khi:

- Bạn delete image và muốn public link ngừng hoạt động càng sớm càng tốt.
- Bạn block image và không muốn visitors thấy original file.
- Bạn replace file cùng tên và muốn visitors thấy version mới nhanh hơn.
- Bạn move hoặc rename files và muốn old path cache refresh nhanh.
- Bạn đổi public access rules và muốn public gallery hoặc random image cache update nhanh hơn.

## Nếu để trống thì sao

ImgBed vẫn hoạt động bình thường nếu không cấu hình setting này.

Khác biệt duy nhất là ImgBed sẽ không actively purge Cloudflare CDN cache. Visitors có thể tiếp tục thấy content cũ cho đến khi Cloudflare cache tự expire.

## Cách tìm Zone ID

Zone ID là Cloudflare Zone ID của site đang dùng cho ImgBed domain.

1. Sign in vào Cloudflare dashboard.
2. Mở site chứa ImgBed domain.
3. Tìm `Zone ID` trên site overview page.
4. Copy vào field `Zone ID` trong ImgBed.

Đây là site Zone ID, không phải account ID.

## Account Email

Nhập email address bạn dùng để sign in vào Cloudflare.

Email này phải khớp với API Key bên dưới.

## API Key

Nhập Cloudflare Global API Key.

1. Sign in vào Cloudflare dashboard.
2. Mở profile.
3. Vào API Tokens page.
4. Tìm `Global API Key`.
5. View và copy.
6. Paste vào field `API Key` trong ImgBed.

![View global API key](../../image/Safety/查看全局令牌.png)

## Khi nào có hiệu lực

Sau khi điền fields, save settings.

Các file changes sau đó sẽ tự động cố purge Cloudflare cache. Past operations không được purge ngược lại. Nếu đã delete hoặc replace file trước khi thiết lập, hãy chờ Cloudflare cache expire hoặc purge thủ công trong Cloudflare.

## FAQ

### Có bắt buộc không?

Không.

Nếu domain không dùng Cloudflare, hoặc bạn không ngại CDN cache delay, có thể để trống.

### Credentials sai có làm hỏng Uploads không?

Thường là không.

Credentials sai chỉ khiến ImgBed không purge được Cloudflare cache. Upload và normal file access vẫn nên hoạt động.

### Vì sao Deleted Image vẫn mở được?

Nguyên nhân phổ biến nhất là Cloudflare vẫn cache file cũ.

Khi Cloudflare API credentials đúng, ImgBed sẽ purge related URL cache khi file bị delete.

### Vì sao Replace File rồi vẫn thấy Image cũ?

Điều này cũng thường do CDN cache.

Sau khi setting này được cấu hình, ImgBed sẽ cố purge old URL cache khi file cùng tên bị overwrite.
