# Thêm WebDAV Channel

## Phù hợp nhất khi nào

Dùng WebDAV channel khi:

- Bạn có NAS, cloud drive hoặc object storage service cung cấp WebDAV endpoint.
- Bạn muốn uploaded images được lưu trong WebDAV directory của riêng mình.
- Bạn muốn credentials được lưu trong D1 `upload_channels` table thay vì expose lâu dài ở frontend.

## Cần chuẩn bị gì trước khi bắt đầu

| Yêu cầu | Mục đích |
| --- | --- |
| WebDAV Endpoint | Server-side WebDAV URL, ví dụ `https://nas.example.com/dav`. |
| Username | Dùng để sign in vào WebDAV service. |
| Password | Dùng để sign in vào WebDAV service. |
| Authentication mode | Mặc định là `Basic`. Chỉ dùng `Digest` hoặc auto negotiation nếu server yêu cầu. |
| Storage directory | Directory dùng để lưu files. Mặc định là `imgbed`. |

## Thêm ở đâu

1. Mở Cài đặt hệ thống.
2. Vào Cài đặt tải lên.
3. Nhấn Thêm kênh ở góc trên bên phải.
4. Chọn `WebDAV`.

## Tham chiếu trường

| Trường | Tác dụng | Bắt buộc |
| --- | --- | --- |
| Channel name | Tên dễ nhận biết cho WebDAV channel, ví dụ `koofr` hoặc `nas`. | Có |
| Endpoint | Full WebDAV endpoint, bao gồm `https://`. | Có |
| Username | WebDAV login username. | Có |
| Password | WebDAV login password. | Có |
| Authentication mode | Thường dùng `Basic`; dùng `Digest` nếu server yêu cầu digest authentication. | Có |
| Storage directory | Directory nơi files được lưu. Mặc định là `imgbed`. | Không |

## Ví dụ: fie.nl.tab.digital

### 1. Tạo App Password

Mở account security settings, tìm application passwords và tạo app password mới.

![Tạo app password](../../image/upload/webdav/创建应用密码.png)

Sau khi tạo, sao chép và lưu app password mới. Thường password này chỉ hiện một lần.

![Save the new app password](../../image/upload/webdav/记住新应用程序密码.png)

### 2. Điền WebDAV Configuration trong ImgBed

Quay lại ImgBed và thêm WebDAV channel:

| Trường UI | Giá trị |
| --- | --- |
| Endpoint | WebDAV URL do `https://fie.nl.tab.digital/` cung cấp. |
| Username | WebDAV username của bạn. |
| Password | App password vừa tạo. |
| Authentication mode | Hầu hết trường hợp bắt đầu với `Basic`. |
| Storage directory | Mặc định là `imgbed`; cũng có thể dùng custom directory. |

![Điền cấu hình](../../image/upload/webdav/填写配置.png)

## Hành vi upload file lớn

WebDAV channel hiện dùng real session-based chunked upload.

Files nhỏ được upload dưới dạng một complete file. Files lớn hơn 64 MiB sẽ tự động được chia thành chunks khoảng 10 MiB và upload vào remote chunk directory.

WebDAV service không cần hỗ trợ `partial update` hoặc offset-based writes. ImgBed không hợp nhất chunks thành một file lớn trên remote server. Thay vào đó, ImgBed lưu chunk manifest và đọc chunks theo thứ tự khi file được request.

Thực tế:

| File Size | Upload Method | Remote Storage Layout |
| --- | --- | --- |
| 64 MiB hoặc nhỏ hơn | Khôngrmal upload | Một complete file |
| Lớn hơn 64 MiB | Real session chunked upload | Một chunk directory chứa nhiều chunk files |

Chunk directory chỉ ảnh hưởng đến remote storage layout. File URL trong ImgBed không đổi. Users vẫn access file bằng link `/file/...` ban đầu.

## Các bước thiết lập

1. Mở Cài đặt tải lên.
2. Nhấn Thêm kênh.
3. Chọn `WebDAV`.
4. Nhập channel name dễ nhận biết, ví dụ `koofr`.
5. Nhập WebDAV endpoint, ví dụ `https://app.koofr.net/dav/Koofr`.
6. Nhập username và password.
7. Giữ authentication mode là `Basic` theo mặc định.
8. Giữ storage directory là `imgbed`, hoặc đổi sang directory của bạn.
9. Nhấn Save.
10. Sau khi save, kiểm tra channel card, query capacity nếu có, và upload test file.

## Cách kiểm tra

| Kiểm tra | Cách kiểm tra |
| --- | --- |
| Channel card xuất hiện | Sau khi save, trang Cài đặt tải lên cần hiển thị WebDAV channel card. |
| Channel bật | Switch ở góc trên bên phải card nên ở trạng thái on. |
| Credentials đã lưu | Detail view cần hiển thị Endpoint, username, authentication mode và storage directory. |
| Small file upload hoạt động | Upload test image và xác nhận file xuất hiện trong WebDAV directory. |
| Quy tắc file lớn hoạt động | Files lớn hơn 64 MiB dùng chunked upload và tạo remote chunk directory. |
| Capacity query hoạt động | Nếu server hỗ trợ capacity information, query sẽ hiển thị used và total capacity. |

![Quota query thành công](../../image/upload/webdav/查询额度成功.png)

## FAQ

### Vì sao file WebDAV lớn tạo chunk directory?

Đây là storage method hiện tại cho file lớn.

Files lớn hơn 64 MiB không được hợp nhất thành một remote file lớn. Chúng được lưu dưới dạng chunk directory. ImgBed ghi chunk manifest và trả về nội dung hoàn chỉnh bằng cách đọc chunks theo thứ tự.

### File lớn upload lỗi thì nên kiểm tra gì trước?

Trước hết kiểm tra Endpoint, username, password và storage directory. Sau đó xác nhận WebDAV service cho phép tạo directory, ghi file và đọc file.

Nếu capacity query lỗi nhưng small file upload vẫn hoạt động, server có thể đơn giản là không hỗ trợ hoặc giới hạn capacity reporting. Điều đó không nhất thiết có nghĩa upload không dùng được.

### Nên dùng authentication mode nào?

Bắt đầu với `Basic`.

Nếu server yêu cầu digest authentication rõ ràng, dùng `Digest`.

Nếu không chắc, dùng automatic negotiation.

## Danh sách kiểm tra nhanh

```text
Prepare WebDAV endpoint, username, and password
-> Open Upload Settings
-> Add Channel
-> Select WebDAV
-> Enter Endpoint / username / password
-> Keep authentication mode as Basic by default
-> Keep storage directory as imgbed by default
-> Save
-> Query capacity
-> Upload a test file
```
