# Sao Lưu Dự Phòng Và Chuyển Nguồn Đọc

Sao lưu dự phòng lưu thêm một bản sao của tệp đã được tải lên.

Cả tệp chính và tệp sao lưu đều có thể dùng làm nguồn đọc. Với khách truy cập, thường không có khác biệt. Điểm khác duy nhất là kênh lưu trữ nào phục vụ tệp.

## Sao Lưu Dự Phòng Có Thể Làm Gì

| Tính năng | Mô tả |
| --- | --- |
| Lưu thêm một bản sao | Sao lưu tệp sang kênh tải lên khác để giảm rủi ro khi một kênh bị lỗi. |
| Chuyển nguồn đọc | Sau khi sao lưu thành công, chuyển việc đọc tệp giữa kênh chính và kênh sao lưu. |
| Sao lưu một tệp | Sao lưu một tệp từ trang chi tiết tệp. |
| Sao lưu hàng loạt | Chọn nhiều tệp trong trang quản trị và sao lưu cùng lúc. |
| Sao lưu dự phòng toàn cục | Sao lưu tệp theo thư mục trong Cài đặt khác. |

## Lối Vào Sao Lưu Dự Phòng

Mở:

```text
System Settings -> Other Settings -> Redundant Backup
```

![Sao lưu dự phòng](../../image/other/冗余备份截图.png)

Lối vào này phù hợp nhất để thêm bản sao lưu cho một thư mục hoặc cho tất cả tệp theo lô.

Kênh sao lưu có thể được chọn thủ công, hoặc bạn có thể chọn chuyển tự động và để ImgBed tìm kênh sao lưu phù hợp.

## Sao Lưu Từ Chi Tiết Tệp

Mở trang chi tiết tệp trong bảng quản trị và nhấp sao lưu.

![Sao lưu trong chi tiết tệp](../../image/other/文件详情里文件备份.png)

Cách này phù hợp nhất để sao lưu một tệp quan trọng theo nhu cầu.

Sau khi sao lưu thành công, trang chi tiết tệp hiển thị các nguồn đọc khả dụng.

## Sao Lưu Hàng Loạt Theo Lựa Chọn

Trong bảng quản trị, chọn nhiều tệp và chạy sao lưu hàng loạt.

![Sao lưu hàng loạt](../../image/other/批量备份截图.png)

Cách này phù hợp nhất để xử lý một nhóm tệp.

Sao lưu theo lựa chọn, sao lưu từ chi tiết tệp và sao lưu dự phòng trong Cài đặt khác đều dùng cùng một hệ thống sao lưu. Chúng chỉ là các điểm vào khác nhau.

## Chuyển Nguồn Đọc Sau Khi Sao Lưu

Sau khi sao lưu hoàn tất, trang chi tiết tệp cho phép bạn chuyển nguồn đọc:

| Nguồn đọc | Mô tả |
| --- | --- |
| Kênh chính | Đọc từ kênh tải lên ban đầu. |
| Kênh sao lưu | Đọc từ kênh sao lưu. |

![Chuyển nguồn đọc sau khi sao lưu](../../image/other/备份成功切换读取源.png)

Khách truy cập không cần biết tệp được phục vụ từ kênh chính hay kênh sao lưu.

Nguồn đọc bạn chọn sẽ trở thành nguồn ưu tiên cho các lần truy cập tệp sau.

## Khi Nào Sao Lưu Bị Bỏ Qua

Các trường hợp sau sẽ bị bỏ qua khi sao lưu. Đây không phải lỗi.

| Trường hợp | Vì sao bị bỏ qua |
| --- | --- |
| Đã có sao lưu | Tệp đã có bản sao lưu sẽ không được sao lưu lại. |
| Kênh chính và kênh sao lưu giống nhau | Bản sao lưu phải được lưu ở kênh khác thì mới có ý nghĩa. |
| Không có kênh sao lưu dùng được | Không có kênh thay thế phù hợp. |

Tóm lại: bản sao lưu phải đi sang kênh khác, và tệp đã được sao lưu sẽ không tiêu tốn thêm dung lượng lần nữa.

## Kênh Chính Và Kênh Sao Lưu

| Tên | Ý nghĩa |
| --- | --- |
| Kênh chính | Kênh được dùng khi tệp được tải lên lần đầu. |
| Kênh sao lưu | Kênh lưu bản sao dự phòng. |
| Nguồn đọc chính | Tệp hiện được đọc từ kênh chính. |
| Nguồn đọc sao lưu | Tệp hiện được đọc từ kênh sao lưu. |

Nguồn đọc chính và nguồn đọc sao lưu có hành vi giống nhau đối với người dùng.

Miễn là tệp sao lưu khả dụng, hình ảnh, video và liên kết tải xuống vẫn hoạt động sau khi chuyển sang nguồn đọc sao lưu.

## Điều Gì Xảy Ra Khi Xóa Tệp

Khi một tệp bị xóa, ImgBed xóa cả tệp chính và tệp sao lưu.
