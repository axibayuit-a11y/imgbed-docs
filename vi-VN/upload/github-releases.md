# Thêm GitHub Releases Channel

## Cần chuẩn bị gì trước khi bắt đầu

Bạn chỉ cần ba thứ:

| Requirement | Purpose |
| --- | --- |
| GitHub account | Dùng để generate access token và sở hữu repository. |
| GitHub Access Token | ImgBed dùng để access GitHub API, tạo releases và upload files. |
| Repository name | Có thể chỉ nhập repository name, ví dụ `image`. |

## Các bước thiết lập

### Step 1: Sign in vào GitHub và tạo Access Token

1. Sign in vào GitHub.
2. Nhấn avatar ở góc trên bên phải và mở `Settings`.
3. Mở `Developer settings` từ left sidebar.
4. Mở `Personal access tokens`.
5. Mở `Tokens (classic)`.
6. Nhấn `Generate new token (classic)`.
7. Đặt tên token dễ nhận biết.
8. Chọn expiration date theo cách bạn muốn bảo trì.
9. Chọn scopes `repo` và `workflow`.
10. Copy và lưu token ngay sau khi tạo.

![Add GitHub permissions](../../image/upload/github-releases/添加github权限.png)

## Step 2: Điền GitHub Releases Channel trong ImgBed

Sau khi chọn `GitHub Releases` trong Upload Settings, điền các field như sau:

| UI Field | Nhập gì |
| --- | --- |
| Channel name | Tên bạn chọn, ví dụ `GitHubPrimary`. |
| Access Token | GitHub Personal Access Token vừa tạo. |
| Repository name | Repo name ngắn như `image`, hoặc full path như `username/image`. |
| Private repository | Bật hoặc tắt theo nhu cầu. |
| Remark | Optional, ví dụ `Primary upload channel`. |

![Fill in the GitHub channel configuration](../../image/upload/github-releases/填写github渠道配置.png)

## Step 3: Save Channel

Sau khi điền fields, nhấn Save.

System sẽ xử lý các chi tiết sau:

| System Behavior | Description |
| --- | --- |
| Short repository name | ImgBed xác định current GitHub account và mở rộng value thành full repository path. |
| Full repository path | ImgBed dùng path `username/repository` đúng như bạn nhập. |
| Repository check | Nếu dùng current personal account path, ImgBed tự tạo repository khi chưa tồn tại. Nếu nhập full path thủ công, ImgBed dùng path đó trực tiếp. |
| Public/private state | Repository visibility được sync theo switch hiện tại. |

## Quick Checklist

GitHub Releases hoạt động theo flow này:

```text
Sign in vào GitHub
-> Tạo Access Token
-> Quay lại ImgBed và nhập token cùng repository name
-> Save
-> Nếu chỉ nhập repo name, ImgBed tự thêm current username
-> Nếu nhập username/repo, ImgBed dùng nguyên giá trị đó
-> Upload test image
```
