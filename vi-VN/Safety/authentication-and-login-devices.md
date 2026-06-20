# Authentication và Login Device Management

`Authentication Management` và `Login Device Management` bảo vệ ImgBed admin panel, public upload entry và WebDAV access.

Dùng trang này để đặt access credentials, xem các devices đã sign in và revoke sessions cũ khi cần.

## Cấu hình ở đâu

Mở admin panel, rồi vào:

```text
System Settings -> Security Settings
```

Trang này có hai khu vực chính:

- Authentication Management
- Login Device Management

![Authentication management](../../image/Safety/认证管理界面.png)

## Authentication Management làm gì

Authentication Management lưu access credentials.

Có hai loại:

- User-side authentication
- Admin-side authentication

## User-Side Authentication

User-side authentication chính là upload password.

Sau khi đặt upload password, visitors thông thường phải nhập password trước khi dùng upload page. Tính năng này hữu ích khi bạn không muốn public upload page mở hoàn toàn cho mọi người.

![User login page](../../image/Safety/用户端登录界面.png)

### Đặt Upload Password

Khi upload password đã được cấu hình:

- Visitors phải nhập password trước khi dùng upload page.
- Chỉ upload được sau khi password được chấp nhận.
- Nếu user-side device sessions được bật, ImgBed sẽ ghi lại user-side device đó.

Đổi upload password sẽ làm các user-side sessions cũ invalid. Visitors cần nhập password mới lại.

## Admin-Side Authentication

Admin-side authentication dùng admin username và password.

Phần này bảo vệ admin panel. Với production use, bạn nên luôn cấu hình.

![Admin login page](../../image/Safety/管理端登录界面.png)

### Đặt Admin Credentials

Khi admin username và password đã được cấu hình:

- Mở admin panel sẽ yêu cầu login.
- Login thành công sẽ tạo admin device record.
- Bạn có thể review, clean up hoặc force devices offline trong Login Device Management.

Đổi admin username hoặc password sẽ làm admin sessions cũ invalid. Bạn cần sign in lại.

## Login Device Management làm gì

Login Device Management hiển thị các devices đã sign in.

Nó giúp kiểm tra:

- Devices nào đã access admin panel.
- Devices nào đã access user-side upload page.
- WebDAV clients nào đã connected.
- Device session còn valid hay không.
- Có nên force offline devices cũ hay không.

Trang có ba tabs:

- Admin
- User
- WebDAV

## Global Cookie Security

Ở đầu Login Device Management, bạn có thể cấu hình global cookie behavior.

### User Cookie Lifetime

Kiểm soát user-side login có thể active trong bao nhiêu ngày.

Ví dụ, nếu đặt 14 days, visitors thường không cần nhập lại upload password trong vòng 14 ngày.

### Admin Cookie Lifetime

Kiểm soát admin login có thể active trong bao nhiêu ngày.

Ví dụ, nếu đặt 14 days, administrators thường không cần sign in lại trong vòng 14 ngày.

### Secure Mode

Khi Secure mode được bật, browsers chỉ gửi login cookies qua HTTPS.

Hãy bật cho production HTTPS sites. Không bật khi test local HTTP, nếu không có thể gặp tình trạng "login thành công, nhưng refresh lại bị logout".

## Admin Login Devices

Admin tab hiển thị devices đã sign in vào admin panel.

Device records chỉ xuất hiện sau khi admin credentials được cấu hình và admin panel được access qua login.

Mỗi device card có thể hiển thị:

- Device và browser information
- First login IP
- Last active IP
- Login time
- Last active time
- Expiration time
- Current status

Nếu thấy device lạ, dùng `Force Offline` để invalid nó.

## Clean Up Old Devices

`Clean Up Old Devices` xóa hàng loạt login records cũ trong tab hiện tại.

Dùng khi bạn nghi ngờ sessions cũ vẫn còn active trên devices khác.

## Force Offline

`Force Offline` invalid một device session.

Sau khi device bị force offline:

- Admin devices phải sign in lại.
- User-side devices phải nhập lại upload password.
- WebDAV clients phải authenticate lại.

Expired hoặc invalid devices cũng có thể bị xóa.

## Sign Out Current Device

Current device card được đánh dấu `Current Device`.

Sau khi sign out current device:

- Current admin session bị sign out.
- Current user-side session bị sign out.

Bạn cần sign in lại trước khi tiếp tục dùng khu vực đó.
