# Thêm Cloudflare R2 Channel

## Phù hợp nhất khi nào

Dùng Cloudflare R2 khi:

- ImgBed site của bạn đã deploy trên Cloudflare và bạn muốn lưu files trong một R2 bucket thuộc cùng Cloudflare account.
- Bạn không muốn cấu hình riêng S3 endpoint, access key và secret key.
- Bạn muốn đọc và ghi qua Worker hoặc Pages R2 binding với ít bước thiết lập nhất.

Tóm lại:

R2 channel không được tạo thủ công trong ImgBed admin panel. Trước tiên bạn cần bind một R2 bucket vào Cloudflare project, và binding variable name phải là `img_r2`.

## Cần chuẩn bị gì trước khi bắt đầu

- Một Cloudflare account.
- Một R2 bucket đã có sẵn.
- Quyền quản lý Cloudflare project nơi ImgBed được deploy.

## Cấu hình trong Cloudflare

### 1. Tạo R2 Bucket

1. Đăng nhập Cloudflare Dashboard.
2. Mở `R2 Object Storage`.
3. Nhấn Create bucket.
4. Chọn bucket name, ví dụ `imgbed`.

Bucket này là nơi lưu uploaded files.

![Create an R2 bucket](../../image/upload/cloudflare-r2/创建一个存储桶img-r2.png)

### 2. Bind Bucket vào ImgBed Project

Chọn vị trí binding theo deployment type:

| Deployment Type | Binding Location |
| --- | --- |
| Pages | Current Pages project -> Settings -> Functions -> R2 bucket bindings |
| Worker | Current Worker -> Settings -> Bindings -> R2 bucket bindings |

Khi thêm binding, các field quan trọng là:

| Field | Value |
| --- | --- |
| Variable name | `img_r2` |
| R2 bucket | Chọn bucket bạn đã tạo. |

Variable name phải chính xác là `img_r2`. Việc upload, đọc và xóa R2 files đều phụ thuộc vào binding name này.

### 3. Redeploy Project

Sau khi save binding, redeploy ImgBed để Worker hoặc Pages runtime truy cập được `img_r2`.

## Bạn sẽ thấy gì trong ImgBed

Khi R2 binding đã sẵn sàng, mở:

1. System Settings.
2. Upload Settings.
3. `Cloudflare R2` channel.

System tự động tạo một fixed channel:

| Field | Fixed Value |
| --- | --- |
| Channel name | `Cloudflare R2` |
| Channel type | `cfr2` |
| Storage mode | `binding` |
| Configuration source | Environment binding |

Đây là fixed binding channel. Bạn không cần nhấn Add Channel để tạo, và cũng không thể xóa như regular channel.

## Các field có thể sửa trong Admin Panel

| Field | Tác dụng | Required |
| --- | --- | --- |
| Enable channel | Kiểm soát R2 có tham gia upload selection hay không. | Yes |
| Account ID | Chỉ dùng khi quota limits được bật và cần query official R2 usage. | Recommended khi bật quota limits |
| Bucket name | Chỉ dùng khi quota limits được bật và cần query official R2 usage. | Recommended khi bật quota limits |
| Quota limit | Kiểm soát R2 channel này có tham gia upload selection dựa trên capacity hay không. | No |
| Threshold | Dừng ghi vào channel này khi usage đạt percentage đã đặt. | Required khi bật quota limits |

Bạn có thể copy Account ID từ account information panel trong Cloudflare dashboard. Chỉ điền nếu muốn ImgBed query và enforce R2 quota usage.

![Get the Account ID](../../image/upload/cloudflare-r2/获取账户id.png)

## Các bước thiết lập

1. Tạo R2 bucket trong Cloudflare.
2. Mở Cloudflare settings của ImgBed project.
3. Thêm R2 bucket binding.
4. Đặt `Variable name` là `img_r2`.
5. Chọn R2 bucket đã tạo.
6. Save binding và redeploy ImgBed.
7. Quay lại ImgBed -> System Settings -> Upload Settings.
8. Xác nhận `Cloudflare R2` channel xuất hiện và đang enabled.

Nếu muốn R2 tham gia upload selection dựa trên capacity, bật quota limit rồi nhập Account ID, bucket name, quota limit và threshold trước khi save.

![Configure quota limits](../../image/upload/cloudflare-r2/配置容量限制.png)

## Cách kiểm tra

- Fixed `Cloudflare R2` channel xuất hiện trong Upload Settings.
- Channel card hiển thị trạng thái enabled.
- Upload thử một file nhỏ thành công và link trả về mở bình thường.
- Nếu mở file thấy `R2 database binding is not configured`, runtime chưa nhận được `img_r2` binding. Hãy kiểm tra binding name trong Cloudflare và redeploy project.
