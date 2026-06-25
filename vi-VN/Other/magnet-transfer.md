# Chuyển Bằng Liên Kết Magnet

Chuyển bằng liên kết magnet tải tệp từ một liên kết magnet và tự động tải tệp đó lên kênh lưu trữ đám mây bạn chọn.

Tính năng này hữu ích để chuyển tập phim anime, video, tệp nén và các tệp tương tự. Dán một liên kết magnet, ImgBed sẽ tạo tác vụ tải xuống chạy nền. Sau khi tải xuống xong, tệp được tải lên ImgBed và liên kết cuối cùng xuất hiện trong danh sách tải lên.

![Chuyển bằng liên kết magnet](../../image/other/磁力链接/磁力链接.png)

## Dùng Ở Đâu

Lối vào chuyển bằng liên kết magnet nằm trong khu vực tải lên của trang chủ.

Dán liên kết magnet vào ô nhập, chọn `Transfer`, rồi tải lên.

![Tải anime lên](../../image/other/磁力链接/上传番剧.png)

## Trước Lần Dùng Đầu Tiên

Trước tiên hãy cấu hình chuyển bằng liên kết magnet trong bảng quản trị.

Thông thường bạn cần:

1. Một tài khoản GitHub để chạy tác vụ tải xuống.
2. Một kênh tải lên đám mây, như Google Drive hoặc OneDrive.
3. Thư mục tải lên đích.
4. Thời gian chờ của tác vụ.

Sau khi cài đặt sẵn sàng, quay lại trang chủ và dán liên kết magnet để bắt đầu chuyển.

## Tải Lên Liên Kết Magnet

1. Dán liên kết magnet vào ô tải lên trên trang chủ.
2. Đảm bảo chế độ được đặt là `Transfer`.
3. Nhấp tải lên.
4. Chờ ImgBed tạo tác vụ magnet.
5. Sau khi tác vụ bắt đầu, dùng bảng nổi `Magnet Tasks` ở góc dưới bên phải để xem tiến trình.

Tải xuống và tải lên có thể mất thời gian. Tốc độ phụ thuộc vào tài nguyên magnet, môi trường chạy GitHub và kênh lưu trữ đám mây đã chọn.

![Magnet đang tải xuống](../../image/other/磁力链接/磁力链接下载中.png)

## Sau Khi Hoàn Tất

Sau khi tác vụ hoàn tất, danh sách tải lên hiển thị tên tệp và liên kết.

Video hiển thị bản xem trước video, hình ảnh hiển thị bản xem trước ảnh, còn các tệp khác hiển thị biểu tượng tệp thông thường.

![Video đã tải xuống](../../image/other/磁力链接/下载好后的视频.png)

Bạn có thể sao chép:

| Loại liên kết | Trường hợp dùng |
| --- | --- |
| Liên kết gốc | Truy cập tệp trực tiếp |
| Markdown | Bài viết hoặc ghi chú Markdown |
| HTML | Mã trang web |
| BBCode | Diễn đàn hỗ trợ BBCode |

## Bảng Tác Vụ Magnet

Bảng tác vụ magnet ở góc dưới bên phải hiển thị số tác vụ, tên tác vụ, tiến trình và trạng thái cuối.

Trạng thái thường gặp:

| Trạng thái | Ý nghĩa |
| --- | --- |
| Đang chờ | Tác vụ đã được tạo và đang chờ chạy. |
| Đang tải xuống | Tài nguyên magnet đang được tải xuống. |
| Đang tải lên | Tệp đã tải xuống và đang được tải lên bộ lưu trữ đám mây. |
| Hoàn tất | Tải lên thành công và có thể sao chép liên kết. |
| Thất bại | Tác vụ không hoàn tất thành công. Kiểm tra thông báo và thử lại. |

## Mẹo

- Nếu một liên kết magnet chứa nhiều tệp, ImgBed ưu tiên hiển thị tệp chính đã hoàn tất.
- Tệp lớn mất nhiều thời gian hơn. Chờ tác vụ hoàn tất trước khi làm mới trang.
- Nếu tài nguyên magnet không có máy ngang hàng khả dụng, tác vụ có thể rất chậm hoặc thất bại.
- Nếu tài khoản đám mây hết hạn mức, ủy quyền hết hạn hoặc thư mục tải lên sai, tác vụ có thể thất bại.
- Bản xem trước video có thể mất vài giây sau khi tải lên hoàn tất.

## Câu Hỏi Thường Gặp

### Không Có Gì Bắt Đầu Sau Khi Dán Liên Kết Magnet

Xác nhận rằng chuyển bằng liên kết magnet đã được bật trong bảng quản trị và đã chọn tài khoản GitHub cùng kênh đám mây có thể dùng.

### Tải Xuống Luôn Chậm

Tốc độ magnet phụ thuộc vào chính tài nguyên đó. Nếu không có máy ngang hàng khả dụng, tải xuống có thể rất chậm hoặc không thể hoàn tất.

### Không Có Xem Trước Sau Khi Tải Lên

Trước tiên hãy xác nhận liên kết tệp mở được. Tệp video có thể cần một thời gian ngắn để tải trong trình duyệt, hoặc bạn có thể mở liên kết trực tiếp.

### Nên Kiểm Tra Gì Nếu Tác Vụ Thất Bại?

Kiểm tra liên kết magnet có hợp lệ không, kênh đám mây có hoạt động không và thư mục tải lên có đúng không. Sau đó gửi lại tác vụ.
