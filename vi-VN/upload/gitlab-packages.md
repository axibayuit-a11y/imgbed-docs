# Thêm GitLab Packages Channel

## Cần chuẩn bị gì trước khi bắt đầu

Bạn chỉ cần ba thứ:

| Requirement | Purpose |
| --- | --- |
| GitLab account | Dùng để generate access token và sở hữu project. |
| GitLab Personal Access Token | ImgBed dùng để access GitLab API, tạo projects và upload files vào Generic Packages. |
| Project name | Có thể chỉ nhập project name, ví dụ `imgbed`. |

## Các bước thiết lập

### Step 1: Sign in vào GitLab và tạo Access Token

1. Sign in vào GitLab.
2. Nhấn avatar ở góc trên bên phải và mở `Preferences`.
3. Mở `Access Tokens` từ left sidebar.
4. Đặt tên token dễ nhận biết.
5. Chọn expiration date theo cách bạn muốn bảo trì.
6. Chọn scope `api`.
7. Copy và lưu token ngay sau khi tạo.

![Create a legacy token](../../image/upload/gitlab-packages/点击生成旧版令牌.png)

![Select token permissions](../../image/upload/gitlab-packages/勾选令牌权限.png)

## Step 2: Điền GitLab Packages Channel trong ImgBed

Sau khi chọn `GitLab Packages` trong Upload Settings, điền các field như sau:

| UI Field | Nhập gì |
| --- | --- |
| Channel name | Tên bạn chọn, ví dụ `GitLabPrimary`. |
| Access Token | GitLab Personal Access Token vừa tạo. |
| Project name | Project name ngắn như `imgbed`, hoặc full path như `username/imgbed`. |
| Private repository | Bật hoặc tắt theo nhu cầu. |
| Remark | Optional, ví dụ `Primary upload channel`. |

![Configure the channel](../../image/upload/gitlab-packages/配置渠道内容.png)

## Step 3: Save Channel

Sau khi điền fields, nhấn Save.

System sẽ xử lý các chi tiết sau:

| System Behavior | Description |
| --- | --- |
| Short project name | ImgBed xác định current GitLab account và mở rộng value thành full project path. |
| Full project path | ImgBed dùng path `username/project` đúng như bạn nhập. |
| Project check | Nếu dùng current personal account path, ImgBed tự tạo project khi chưa tồn tại. Nếu nhập full path thủ công, ImgBed dùng path đó trực tiếp. |
| Public/private state | Project visibility được sync theo switch hiện tại. |

## Quick Checklist

```text
Sign in vào GitLab
-> Tạo Access Token
-> Chỉ chọn api scope
-> Quay lại ImgBed và nhập token cùng project name
-> Save
-> Nếu chỉ nhập project name, ImgBed tự thêm current username
-> Nếu nhập username/project, ImgBed dùng nguyên giá trị đó
-> Upload test image
```
