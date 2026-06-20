# Cài đặt tải lên

Cài đặt tải lên dùng để kết nối ImgBed với các kênh lưu trữ của bạn. Sau khi cấu hình, ảnh và tệp được tải lên sẽ được lưu vào dịch vụ bạn chọn. ImgBed quản lý liên kết truy cập, bản ghi tệp, bản xem trước, thư viện công khai, API ảnh ngẫu nhiên, truy cập WebDAV và các luồng liên quan.

Mỗi người có thể phù hợp với một kênh khác nhau. Nếu muốn bắt đầu đơn giản, Telegram, Discord hoặc GitHub Releases là lựa chọn dễ dùng. Nếu bạn ưu tiên dung lượng, tốc độ và độ ổn định lâu dài, hãy cân nhắc Cloudflare R2, S3, OneDrive, Google Drive, Dropbox, Yandex, pCloud hoặc dịch vụ WebDAV riêng.

## Trước khi bắt đầu

- Chuẩn bị tài khoản lưu trữ hoặc API credentials bạn muốn dùng.
- Đảm bảo domain ImgBed của bạn truy cập được, vì các kênh OAuth cần callback URL.
- Sau khi thêm kênh, hãy tải thử một ảnh để xác nhận tệp được lưu và mở đúng.

## Danh sách kênh

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

## Chương này gồm những gì

- Mỗi kênh tải lên cần chuẩn bị thông tin gì trước khi cấu hình.
- Cách tạo ứng dụng, sao chép key hoặc cấp quyền Token trên nền tảng bên thứ ba.
- Cách điền cấu hình vào ImgBed và kiểm tra việc tải lên.
