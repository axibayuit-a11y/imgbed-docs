# Thêm pCloud Channel

## Phù hợp nhất khi

- Bạn có pCloud account và muốn ImgBed lưu images trong pCloud.
- Bạn chấp nhận dùng pCloud account email và password làm channel credentials.

## Cần chuẩn bị trước

| Yêu cầu | Vì sao cần |
| --- | --- |
| pCloud account email | Dùng để sign in vào pCloud API |
| pCloud password | Dùng để sign in vào pCloud API |
| API host | Mặc định là `api.pcloud.com`. EU accounts có thể dùng `eapi.pcloud.com`. |
| Storage directory | Nơi lưu files. Mặc định là `imgbed`. |

## Thêm ở đâu

1. Mở Cài đặt hệ thống.
2. Mở Cài đặt tải lên.
3. Nhấn `Add Channel` ở góc trên bên phải.
4. Chọn `pCloud`.

## Tham chiếu trường

| Trường | Mục đích | Bắt buộc |
| --- | --- | --- |
| Channel name | Xác định pCloud channel này, ví dụ `Personal pCloud` | Có |
| Account email | Email đăng nhập pCloud của bạn | Có |
| Password | pCloud password của bạn | Có |
| API host | pCloud API host. Mặc định `api.pcloud.com`. | Không |
| Storage directory | Directory dùng để lưu files. Mặc định `imgbed`. | Không |

Chọn API host theo account region:

| Account Region | API Host |
| --- | --- |
| Mặc định / US | `api.pcloud.com` |
| Europe | `eapi.pcloud.com` |

## Các bước thiết lập

1. Mở Cài đặt tải lên.
2. Nhấn `Add Channel`.
3. Chọn `pCloud`.
4. Nhập channel name dễ nhận biết.
5. Nhập pCloud account email.
6. Nhập pCloud password.
7. Giữ API host là `api.pcloud.com`, hoặc dùng `eapi.pcloud.com` cho EU accounts.
8. Giữ storage directory là `imgbed`, hoặc đổi sang folder bạn muốn.
9. Save channel.

![Configure channel](../../image/upload/pcloud/配置渠道.png)

## Cách kiểm tra

| Kiểm tra | Kết quả mong đợi |
| --- | --- |
| Channel card | pCloud channel card xuất hiện sau khi save. |
| Channel switch | Switch trên card vẫn bật. |
| Email display | Card hiển thị kết nốied pCloud email. |
| Quota query | Sau khi query thành công, used và total capacity được hiển thị. |
| Upload test | Test image xuất hiện trong đã cấu hình pCloud storage directory. |

![Quota query thành công](../../image/upload/pcloud/查询额度成功.png)

## Khắc phục sự cố

### Vì sao không dùng OAuth2?

pCloud OAuth2 mặc định không self-service. Bạn cần email cho pCloud để yêu cầu họ bật.

Flow pCloud OAuth2 hiện tại cũng không hỗ trợ short-lived upload link workflow mà ImgBed cần, nên channel này dùng account email và password login.

### Nên dùng API Host nào?

Mặc định:

```text
api.pcloud.com
```

Với EU accounts:

```text
eapi.pcloud.com
```

## Luồng nhanh

```text
Prepare your pCloud email and password
-> Open Upload Settings
-> Add Channel
-> Choose pCloud
-> Fill channel name / email / password
-> Keep API host as api.pcloud.com unless your account is in Europe
-> Keep storage directory as imgbed unless you need another folder
-> Save
-> Query quota
-> Upload a test image
```
