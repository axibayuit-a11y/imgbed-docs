# WebDAV Site Access (Beta)

WebDAV setting trong Security Settings đưa ImgBed site của bạn thành một WebDAV endpoint.

Sau khi bật, bạn có thể dùng Windows, macOS, mobile file managers hoặc bất kỳ WebDAV-compatible client nào để browse, upload, delete và manage ImgBed files như một remote folder.

Đây là WebDAV access entry của site. Nó khác với WebDAV storage channel trong Upload Settings. Upload channel lưu files vào third-party WebDAV service. Setting này cho phép ImgBed site cung cấp WebDAV access cho clients.

## Cấu hình ở đâu

Mở admin panel, rồi vào:

```text
System Settings -> Security Settings -> WebDAV
```

Available settings:

- Enable
- Username
- Password
- Image loading mode
- Default channel

## Feature này làm gì

Sau khi WebDAV được bật, ImgBed cung cấp fixed access URL:

```text
https://your-domain.com/dav
```

Dùng URL này để connect tới ImgBed file directory.

Các use cases phù hợp:

- Browse ImgBed files trực tiếp từ file manager trên máy tính.
- Kéo images vào WebDAV folder để upload.
- Organize ImgBed folders từ local file manager.
- Dùng WebDAV-compatible software để sync hoặc manage images.
- Access ImgBed content mà không cần mở admin panel.

## Settings

### Enable

Bật WebDAV endpoint.

Khi disabled, clients không thể connect qua WebDAV.

### Username và Password

WebDAV clients dùng credentials này khi connect.

Hãy dùng WebDAV username và password riêng. Không dùng lại admin password hoặc upload password.

Nếu username hoặc password trống, WebDAV clients sẽ không connect đúng cách.

### Image Loading Mode

Image loading mode quyết định WebDAV clients ưu tiên image URL nào khi đọc images.

Common choices:

| Mode | Description |
| --- | --- |
| Smart loading | ImgBed chọn theo context. Recommended cho normal use. |
| Original | Ưu tiên original images. |
| Thumbnail | Ưu tiên thumbnails. Hữu ích cho fast preview. |

Nếu chưa chắc, giữ `Smart loading`.

### Default Channel

Default channel được dùng cho WebDAV uploads.

Khi bạn copy files vào WebDAV directory từ Windows hoặc client khác, ImgBed upload chúng qua selected default upload channel.

Nếu không chọn default channel, browsing có thể hoạt động, nhưng uploads có thể fail.

## Access WebDAV trong Windows 11

Windows 11 có thể thêm WebDAV như một network location.

1. Mở `This PC`.
2. Chọn `Add a network location`.
3. Nhập `https://your-domain.com/dav`.
4. Khi được hỏi, nhập WebDAV username và password.
5. Hoàn tất wizard. Sau đó có thể mở WebDAV directory trong File Explorer.

![Add WebDAV in Windows 11](../../image/Safety/webdav在win11配置.png)

Sau khi thêm, WebDAV directory xuất hiện trong Windows File Explorer. Bạn có thể open, copy và manage files như folder bình thường.

![WebDAV in Windows](../../image/Safety/webdav在win显示效果.png)

## Supported Operations

Sau khi WebDAV connection thành công, thường bạn có thể:

- View files và folders.
- Upload files.
- Create folders.
- Rename files hoặc folders.
- Move files.
- Delete files.

WebDAV phù hợp cho everyday access và small-scale file management. Với large moves, bulk deletes hoặc organization phức tạp, hãy dùng admin panel.

## Login Device Management

Successful WebDAV connections cũng xuất hiện trong WebDAV tab của Login Device Management.

Bạn có thể review WebDAV clients ở đó và force old devices offline khi cần.

Nếu đổi WebDAV username hoặc password, clients cũ cần sign in lại.

## FAQ

### Windows liên tục hỏi Username và Password

Kiểm tra:

- URL là `https://your-domain.com/dav`.
- Username và password khớp với WebDAV settings.
- WebDAV đã enabled.
- Site có thể access qua HTTPS.

### Browsing hoạt động, nhưng Upload fail

Kiểm tra `Default channel`.

WebDAV uploads cần default upload channel. Nếu thiếu, disabled hoặc misconfigured, uploads có thể fail.

### Access Speed không ổn định

WebDAV performance phụ thuộc vào client, network, file count và default upload channel.

Nếu một directory có nhiều files, hãy chia vào folders thay vì giữ quá nhiều files trong một directory.

## Security Recommendations

- Dùng HTTPS cho WebDAV access.
- Đặt strong password.
- Không share WebDAV password với người không trusted.
- Tắt WebDAV khi không dùng.
- Periodically clean up unused WebDAV devices trong Login Device Management.

## WebDAV Upload File Size

WebDAV clients không dùng large-file chunking flow của browser upload page. Với files vượt suggested limits bên dưới, hãy dùng web upload page.

| Default Upload Channel | Suggested Single-File Limit for WebDAV |
| --- | ---: |
| Telegram | 20 MB |
| Discord | 10 MB |
| Cloudflare R2 | 30 MB |
| S3 | 30 MB |
| GitHub Releases | 64 MB |
| GitLab Packages | 64 MB |
| Hugging Face | 20 MB |
| OneDrive | 30 MB |
| Google Drive | 30 MB |
| Dropbox | 30 MB |
| Yandex Disk | 30 MB |
| pCloud | 30 MB |
| WebDAV | 64 MB |
