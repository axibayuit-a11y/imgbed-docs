# Cài đặt trang

Cài đặt trang kiểm soát cách hiển thị trang web, các giá trị mặc định của trang tải lên, ảnh nền và giao diện của bảng quản trị.

## Cài đặt chung

| Tùy chọn | Mục đích |
| --- | --- |
| Tiêu đề trang web | Tiêu đề hiển thị trên thẻ trình duyệt. |
| Biểu tượng trang web | Biểu tượng nhỏ hiển thị trên thẻ trình duyệt. |
| Tên ImgBed | Tên hiển thị trên các trang giao diện công khai. |
| Logo ImgBed | Hình logo hiển thị trên các trang giao diện công khai. |
| Liên kết logo | URL được mở khi nhấp vào logo hoặc ảnh đại diện. |
| Khoảng thời gian đổi nền | Khoảng thời gian xoay vòng nhiều ảnh nền, tính bằng mili giây. `60000` nghĩa là 60 giây. |
| Độ mờ của nền | Độ mờ của ảnh nền từ `0` đến `1`. Giá trị thấp hơn làm ảnh nhạt hơn. |
| Tiền tố URL mặc định | Tiền tố dùng khi tạo liên kết ảnh. Nếu để trống, hệ thống dùng tên miền hiện tại của trang web. |

## Cài đặt máy khách

| Tùy chọn | Mục đích |
| --- | --- |
| Thông báo | Thông báo hiển thị ở đầu trang tải lên. Hỗ trợ HTML. |
| Kênh tải lên mặc định | Kênh tải lên được chọn mặc định trên trang tải lên. Cũng có thể chọn Smart Dispatch. |
| Thư mục tải lên mặc định | Thư mục tải lên mặc định, ví dụ `/user/`. Để trống hoặc `/` nghĩa là thư mục gốc. |
| Phương thức đặt tên mặc định | Chiến lược mặc định để tạo tên tệp sau khi tải lên. Xem bên dưới. |
| Mặc định chuyển sang WebP | Chuyển ảnh sang WebP trước khi tải lên. |
| Mặc định bật nén | Nén ảnh cục bộ trong trình duyệt trước khi tải lên. |
| Ngưỡng nén mặc định | Tự động nén khi ảnh vượt quá kích thước này, tính bằng MB. |
| Kích thước mục tiêu mặc định | Kích thước tệp mục tiêu sau khi nén, tính bằng MB. |
| Nền trang đăng nhập | Ảnh nền cho trang đăng nhập của người dùng. |
| Nền trang tải lên | Ảnh nền cho trang tải lên. |
| Liên kết cổng ở chân trang | URL được mở bằng nút cổng ở chân trang. |
| Ẩn chân trang | Ẩn chân trang của giao diện công khai khi bật. |

## Cài đặt quản trị

| Tùy chọn | Mục đích |
| --- | --- |
| Nền đăng nhập quản trị | Ảnh nền cho trang đăng nhập quản trị. |
| Nền quản trị | Ảnh nền cho các trang quản trị. Có thể dùng một URL ảnh hoặc nhiều URL. |
| Chế độ tải ảnh | Chế độ tải bản xem trước trong danh sách tệp quản trị. Chế độ ảnh gốc tải ảnh gốc. Tải thông minh ưu tiên ảnh thu nhỏ cho ảnh công khai và ảnh gốc cho ảnh bị hạn chế. |
| Nguồn ảnh thu nhỏ | Dịch vụ dùng để tạo ảnh thu nhỏ: wsrv.nl, Cloudflare Image Resizing hoặc WordPress Photon. Cloudflare Image Resizing phải được bật trong Cloudflare trước khi chọn. |
| Tiện ích Live2D | Hiển thị nhân vật Live2D trong bảng quản trị. |
| Hiệu ứng pháo hoa khi nhấp | Hiển thị hiệu ứng pháo hoa khi nhấp vào trang. |
| Vệt sao của con trỏ | Hiển thị vệt sao khi di chuyển chuột. |

## Định dạng ảnh nền

Nền trang đăng nhập, nền trang tải lên và nền đăng nhập quản trị hỗ trợ các định dạng sau:

| Giá trị | Hiệu ứng |
| --- | --- |
| `bing` | Dùng chế độ xoay vòng hình nền Bing. |
| `["https://example.com/1.jpg","https://example.com/2.jpg"]` | Xoay vòng nhiều ảnh. |
| `["https://example.com/1.jpg"]` | Dùng một ảnh nền. |
| `["https://your-domain.com/random?..."]` | Dùng liên kết API ảnh ngẫu nhiên. Bạn có thể cấu hình API ảnh ngẫu nhiên của mình trong Cài đặt khác, rồi dán liên kết ảnh ngẫu nhiên đã tạo vào đây như một mục nền đơn. |

Nền quản trị hỗ trợ URL ảnh. Có thể tách nhiều URL bằng dấu phẩy tiếng Anh theo gợi ý trên trang. Nếu để trống, hệ thống dùng nền mặc định.

## Phương thức đặt tên mặc định

| Phương thức | Kết quả |
| --- | --- |
| Mặc định | Tiền tố ngẫu nhiên theo thời gian + tên tệp gốc, ví dụ `1760000000000_cat.png`. |
| Chỉ tiền tố | Chỉ dùng tiền tố ngẫu nhiên theo thời gian và phần mở rộng, ví dụ `1760000000000.png`. |
| Chỉ tên gốc | Giữ tên tệp gốc, ví dụ `cat.png`. Nếu trùng, ImgBed thêm `(1)`, `(2)` và tiếp tục như vậy. |
| Liên kết ngắn | Dùng ID ngắn 8 ký tự kèm phần mở rộng, ví dụ `a1b2c3d4.png`. |
