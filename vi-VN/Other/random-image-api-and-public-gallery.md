# API Ảnh Ngẫu Nhiên Và Thư Viện Công Khai

Cả hai tính năng đều được cấu hình tại:

```text
System Settings -> Other Settings
```

## API Ảnh Ngẫu Nhiên

API ảnh ngẫu nhiên trả về một tệp ngẫu nhiên từ các thư mục đã chọn. Tính năng này hữu ích cho ảnh nền trang web, xoay vòng ảnh đại diện hoặc gọi ảnh ngẫu nhiên từ các trang bên ngoài.

Sau khi bật, hãy dùng:

```text
https://your-domain.com/random
```

## Cài Đặt API Ảnh Ngẫu Nhiên

| Tùy chọn | Mục đích |
| --- | --- |
| Bật | Bật hoặc tắt điểm cuối `/random`. Khi tắt, truy cập sẽ bị từ chối. |
| Thư mục | Giới hạn các thư mục mà API ngẫu nhiên có thể dùng. Những thư mục không được đưa vào đây sẽ không thể được API sử dụng. |
| Demo gọi API | Tạo các liên kết API ngẫu nhiên để bạn có thể sao chép trực tiếp. |

Bạn có thể chọn nhiều thư mục. Ví dụ, nếu chỉ cho phép `/landscape/` và `/portrait/`, API ngẫu nhiên chỉ có thể chọn tệp từ các thư mục đó và thư mục con của chúng.

## Tham Số API Ảnh Ngẫu Nhiên

| Tham số | Ví dụ | Mục đích |
| --- | --- | --- |
| `dir` | `/landscape/` | Chỉ định thư mục ngẫu nhiên. |
| `content` | `image` | Chỉ định loại phương tiện. Dùng `image`, `video`, `audio` hoặc các tổ hợp phân tách bằng dấu phẩy. |
| `orientation` | `auto` | Lọc hướng ảnh. Dùng `portrait`, `landscape` hoặc `auto`. |
| `type` | `url` | Định dạng trả về. Để trống nghĩa là chuyển hướng, `url` trả về URL dạng văn bản thuần, `json` trả về JSON. |
| `origin` | `1` | Dùng cùng `type=url` để trả về URL đầy đủ. |
| `age` | `all-ages,r12` | Lọc theo phân loại độ tuổi. |
| `tag` | `wallpaper,sky` | Chỉ trả về các tệp chứa những thẻ này. |
| `ex` | `private` | Loại trừ các tệp chứa những thẻ này. |

## Định Dạng Trả Về

Khi không có `type`, API chuyển hướng trực tiếp đến URL của tệp ngẫu nhiên.

Với `type=url`, API trả về URL dạng văn bản.

Với `type=json`, API trả về thông tin tệp, bao gồm URL tệp, ID tệp, tên tệp, loại tệp, thẻ, phân loại và siêu dữ liệu liên quan.

## Quy Tắc Truy Cập

API ảnh ngẫu nhiên tuân theo các quy tắc truy cập công khai:

| Quy tắc | Tác dụng |
| --- | --- |
| Giới hạn thư mục | Chỉ các tệp trong thư mục được phép mới có thể được chọn. |
| Danh sách chặn | Các tệp trong danh sách chặn bị loại khỏi nhóm ngẫu nhiên. |
| Chế độ danh sách cho phép | Khi bật, chỉ các tệp được phép truy cập công khai mới được trả về. |
| Phân loại độ tuổi | Nội dung R12, R16, R18 và nội dung tương tự được lọc theo chế độ truy cập hiện tại. |

Nếu không có tệp nào khớp sau khi lọc, API sẽ không trả về kết quả phù hợp.

## Bộ Nhớ Đệm

API ảnh ngẫu nhiên lưu bộ nhớ đệm cho các nhóm ứng viên theo thư mục để cải thiện tốc độ.

Sau khi tệp thay đổi, ImgBed cập nhật phiên bản bộ nhớ đệm của thư mục, và các yêu cầu sau đó sẽ tạo lại nhóm ứng viên. Thư mục trống được lưu bộ nhớ đệm trong thời gian ngắn để tránh truy vấn lặp lại.

## Thư Viện Công Khai

Thư viện công khai cung cấp một trang duyệt công khai chỉ đọc cho các thư mục mà bạn cho phép khách truy cập xem.

Sau khi bật, khách truy cập có thể mở:

```text
https://your-domain.com/browse/directory-name
```

## Cài Đặt Thư Viện Công Khai

| Tùy chọn | Mục đích |
| --- | --- |
| Bật | Bật hoặc tắt thư viện công khai. Khi tắt, khách truy cập không thể duyệt thư viện. |
| Chế độ tải ảnh | Kiểm soát bản xem trước dùng ảnh gốc hay ảnh thu nhỏ. |
| Thư mục mở | Đặt các thư mục mà khách truy cập có thể truy cập. |

## Chế Độ Tải Ảnh

| Chế độ | Mục đích |
| --- | --- |
| Ảnh gốc | Trang khách truy cập tải trực tiếp tệp gốc. |
| Ảnh thu nhỏ | Trang khách truy cập ưu tiên ảnh thu nhỏ để tải nhanh hơn. |

## Thư Mục Mở

Thư mục mở quyết định khách truy cập có thể xem nội dung nào.

Ví dụ:

```text
/1/,/2/,/landscape/,/portrait/
```

Sau đó khách truy cập có thể truy cập:

```text
https://your-domain.com/browse/1
https://your-domain.com/browse/2
https://your-domain.com/browse/landscape
https://your-domain.com/browse/portrait
```

Bạn cũng có thể mở thư mục con, chẳng hạn `/2026/lucky/`. Khách truy cập sẽ bị chặn khỏi các thư mục chưa được mở.

## Tính Năng Thư Viện Công Khai

| Tính năng | Mô tả |
| --- | --- |
| Duyệt thư mục | Xem tệp và thư mục con trong các thư mục đã mở. |
| Tìm kiếm | Tìm theo tên tệp, ID tệp hoặc thẻ. |
| Lọc loại tệp | Lọc hình ảnh, video, âm thanh hoặc tệp khác. |
| Lọc thẻ | Bao gồm hoặc loại trừ các thẻ đã chọn. |
| Lọc hướng ảnh | Lọc ảnh ngang hoặc ảnh dọc. |
| Lọc thời gian | Lọc theo khoảng thời gian tải lên. |
| Lọc phần mở rộng | Lọc theo phần mở rộng tệp. |
| Sao chép liên kết | Sao chép liên kết truy cập tệp. |
| Xem trước phương tiện | Xem hoặc phát hình ảnh, video và âm thanh trên trang khách truy cập. |

## Quy Tắc Truy Cập Thư Viện Công Khai

Thư viện công khai cũng tuân theo các quy tắc truy cập công khai:

| Quy tắc | Tác dụng |
| --- | --- |
| Thư mục mở | Chỉ các thư mục được phép mới được hiển thị. |
| Chế độ truy cập | Nội dung được lọc theo chế độ truy cập phân loại độ tuổi hiện tại. |
| Chế độ danh sách cho phép | Khi bật, chỉ các tệp được phép truy cập công khai mới được hiển thị. |
| Danh sách chặn | Các tệp trong danh sách chặn bị ẩn. |
