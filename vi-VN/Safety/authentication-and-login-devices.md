# Quản lý xác thực và thiết bị đăng nhập

`Quản lý xác thực` và `Quản lý thiết bị đăng nhập` bảo vệ bảng quản trị ImgBed, lối vào tải lên công khai và quyền truy cập WebDAV.

Dùng trang này để đặt thông tin đăng nhập, xem các thiết bị đã đăng nhập và thu hồi các phiên cũ khi cần.

## Nơi cấu hình

Mở bảng quản trị, rồi đi tới:

```text
System Settings -> Security Settings
```

Trang này có hai khu vực chính:

- Quản lý xác thực
- Quản lý thiết bị đăng nhập

![Quản lý xác thực](../../image/Safety/认证管理界面.png)

## Quản lý xác thực làm gì

Quản lý xác thực lưu thông tin đăng nhập.

Có hai loại:

- Xác thực phía người dùng
- Xác thực phía quản trị viên

## Xác thực phía người dùng

Xác thực phía người dùng là mật khẩu tải lên.

Sau khi đặt mật khẩu tải lên, khách truy cập thông thường phải nhập mật khẩu trước khi dùng trang tải lên. Điều này hữu ích khi bạn không muốn trang tải lên công khai mở cho tất cả mọi người.

![Trang đăng nhập phía người dùng](../../image/Safety/用户端登录界面.png)

### Đặt mật khẩu tải lên

Khi mật khẩu tải lên được cấu hình:

- Khách truy cập phải nhập mật khẩu trước khi dùng trang tải lên.
- Chỉ có thể tải lên sau khi mật khẩu được chấp nhận.
- Nếu phiên thiết bị phía người dùng được bật, ImgBed ghi lại thiết bị phía người dùng đó.

Thay đổi mật khẩu tải lên sẽ làm mất hiệu lực các phiên phía người dùng cũ. Khách truy cập cần nhập lại mật khẩu mới.

## Xác thực phía quản trị viên

Xác thực phía quản trị viên dùng tên người dùng và mật khẩu quản trị viên.

Điều này bảo vệ bảng quản trị. Khi dùng trong môi trường vận hành thực tế, bạn nên luôn cấu hình mục này.

![Trang đăng nhập quản trị viên](../../image/Safety/管理端登录界面.png)

### Đặt thông tin đăng nhập quản trị viên

Khi tên người dùng và mật khẩu quản trị viên được cấu hình:

- Mở bảng quản trị sẽ yêu cầu đăng nhập.
- Đăng nhập thành công tạo một bản ghi thiết bị quản trị viên.
- Bạn có thể xem, dọn dẹp hoặc buộc thiết bị ngoại tuyến trong Quản lý thiết bị đăng nhập.

Thay đổi tên người dùng hoặc mật khẩu quản trị viên sẽ làm mất hiệu lực các phiên quản trị viên cũ. Bạn cần đăng nhập lại.

## Quản lý thiết bị đăng nhập làm gì

Quản lý thiết bị đăng nhập hiển thị các thiết bị đã đăng nhập.

Tính năng này giúp bạn kiểm tra:

- Thiết bị nào đã truy cập bảng quản trị.
- Thiết bị nào đã truy cập trang tải lên phía người dùng.
- Máy khách WebDAV nào đã kết nối.
- Phiên thiết bị còn hợp lệ hay không.
- Có nên buộc các thiết bị cũ ngoại tuyến hay không.

Trang có ba thẻ:

- Quản trị viên
- Người dùng
- WebDAV

## Bảo mật cookie toàn cục

Ở đầu phần Quản lý thiết bị đăng nhập, bạn có thể cấu hình hành vi cookie toàn cục.

### Thời hạn cookie người dùng

Kiểm soát số ngày đăng nhập phía người dùng có thể duy trì hiệu lực.

Ví dụ: nếu đặt là 14 ngày, khách truy cập thường không cần nhập lại mật khẩu tải lên trong vòng 14 ngày.

### Thời hạn cookie quản trị viên

Kiểm soát số ngày đăng nhập quản trị viên có thể duy trì hiệu lực.

Ví dụ: nếu đặt là 14 ngày, quản trị viên thường không cần đăng nhập lại trong vòng 14 ngày.

### Chế độ bảo mật

Khi bật chế độ bảo mật, trình duyệt chỉ gửi cookie đăng nhập qua HTTPS.

Hãy bật mục này cho các trang HTTPS trong môi trường vận hành thực tế. Không bật cho thử nghiệm HTTP cục bộ, nếu không bạn có thể gặp hiện tượng "đăng nhập thành công nhưng làm mới trang lại bị đăng xuất".

## Thiết bị đăng nhập quản trị viên

Thẻ Quản trị viên hiển thị các thiết bị đã đăng nhập vào bảng quản trị.

Bản ghi thiết bị chỉ xuất hiện sau khi thông tin đăng nhập quản trị viên được cấu hình và bảng quản trị được truy cập thông qua đăng nhập.

Mỗi thẻ thiết bị có thể hiển thị:

- Thông tin thiết bị và trình duyệt
- IP đăng nhập đầu tiên
- IP hoạt động gần nhất
- Thời gian đăng nhập
- Thời gian hoạt động gần nhất
- Thời gian hết hạn
- Trạng thái hiện tại

Nếu thấy thiết bị lạ, hãy dùng `Buộc ngoại tuyến` để làm mất hiệu lực thiết bị đó.

## Dọn dẹp thiết bị cũ

`Dọn dẹp thiết bị cũ` xóa hàng loạt các bản ghi đăng nhập cũ trong thẻ hiện tại.

Dùng khi bạn nghi ngờ các phiên cũ vẫn có thể đang hoạt động trên thiết bị khác.

## Buộc ngoại tuyến

`Buộc ngoại tuyến` làm mất hiệu lực một phiên thiết bị.

Sau khi một thiết bị bị buộc ngoại tuyến:

- Thiết bị quản trị viên phải đăng nhập lại.
- Thiết bị phía người dùng phải nhập lại mật khẩu tải lên.
- Máy khách WebDAV phải xác thực lại.

Thiết bị hết hạn hoặc không hợp lệ cũng có thể bị xóa.

## Đăng xuất thiết bị hiện tại

Thẻ thiết bị hiện tại được đánh dấu là `Thiết bị hiện tại`.

Sau khi đăng xuất thiết bị hiện tại:

- Phiên quản trị viên hiện tại bị đăng xuất.
- Phiên phía người dùng hiện tại bị đăng xuất.

Bạn cần đăng nhập lại trước khi tiếp tục dùng khu vực đó.
