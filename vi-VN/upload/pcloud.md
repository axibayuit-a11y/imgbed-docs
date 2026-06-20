# Thêm pCloud Channel

## Phù hợp nhất khi

- Bạn có pCloud account và muốn ImgBed lưu images trong pCloud.
- Bạn chấp nhận dùng pCloud account email và password làm channel credentials.

## Cần chuẩn bị trước

| Requirement | Vì sao cần |
| --- | --- |
| pCloud account email | Dùng để sign in vào pCloud API |
| pCloud password | Dùng để sign in vào pCloud API |
| API host | Mặc định là `api.pcloud.com`. EU accounts có thể dùng `eapi.pcloud.com`. |
| Storage directory | Nơi lưu files. Mặc định là `imgbed`. |

## Thêm ở đâu

1. Mở System Settings.
2. Mở Upload Settings.
3. Nhấn `Add Channel` ở góc trên bên phải.
4. Chọn `pCloud`.

## Field Reference

| Field | Purpose | Required |
| --- | --- | --- |
| Channel name | Xác định pCloud channel này, ví dụ `Personal pCloud` | Yes |
| Account email | Email đăng nhập pCloud của bạn | Yes |
| Password | pCloud password của bạn | Yes |
| API host | pCloud API host. Mặc định `api.pcloud.com`. | No |
| Storage directory | Directory dùng để lưu files. Mặc định `imgbed`. | No |

Chọn API host theo account region:

| Account Region | API Host |
| --- | --- |
| Default / US | `api.pcloud.com` |
| Europe | `eapi.pcloud.com` |

## Các bước thiết lập

1. Mở Upload Settings.
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

| Check | Expected Result |
| --- | --- |
| Channel card | pCloud channel card xuất hiện sau khi save. |
| Channel switch | Switch trên card vẫn enabled. |
| Email display | Card hiển thị connected pCloud email. |
| Quota query | Sau khi query thành công, used và total capacity được hiển thị. |
| Upload test | Test image xuất hiện trong configured pCloud storage directory. |

![Quota query success](../../image/upload/pcloud/查询额度成功.png)

## Troubleshooting

### Vì sao không dùng OAuth2?

pCloud OAuth2 mặc định không self-service. Bạn cần email cho pCloud để yêu cầu họ enable.

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

## Quick Flow

```text
Chuẩn bị pCloud email và password
-> Mở Upload Settings
-> Add Channel
-> Chọn pCloud
-> Điền channel name / email / password
-> Giữ API host là api.pcloud.com trừ khi account ở Europe
-> Giữ storage directory là imgbed trừ khi cần folder khác
-> Save
-> Query quota
-> Upload test image
```
