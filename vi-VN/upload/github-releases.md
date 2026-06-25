# Thêm GitHub Releases Channel

## Cần chuẩn bị gì trước khi bắt đầu

Bạn chỉ cần ba thứ:

| Yêu cầu | Mục đích |
| --- | --- |
| GitHub account | Dùng để generate access token và sở hữu repository. |
| GitHub Access Token | ImgBed dùng để access GitHub API, tạo releases và upload files. |
| Repository name | Có thể chỉ nhập repository name, ví dụ `image`. |

## Các bước thiết lập

### Bước 1: Sign in vào GitHub và tạo Access Token

1. Sign in vào GitHub.
2. Nhấn avatar ở góc trên bên phải và mở `Settings`.
3. Mở `Developer settings` từ left sidebar.
4. Mở `Personal access tokens`.
5. Mở `Tokens (classic)`.
6. Nhấn `Generate new token (classic)`.
7. Đặt tên token dễ nhận biết.
8. Chọn expiration date theo cách bạn muốn bảo trì.
9. Chọn scopes `repo` và `workflow`.
10. Sao chép và lưu token ngay sau khi tạo.

![Thêm GitHub permissions](../../image/upload/github-releases/添加github权限.png)

## Bước 2: Điền GitHub Releases Channel trong ImgBed

Sau khi chọn `GitHub Releases` trong Cài đặt tải lên, điền các trường như sau:

| Trường UI | Nhập gì |
| --- | --- |
| Channel name | Tên bạn chọn, ví dụ `GitHubPrimary`. |
| Access Token | GitHub Personal Access Token vừa tạo. |
| Repository name | Repo name ngắn như `image`, hoặc đường dẫn đầy đủ như `username/image`. |
| Private repository | Bật hoặc tắt theo nhu cầu. |
| Remark | Không bắt buộc, ví dụ `Primary upload channel`. |

![Điền cấu hình kênh GitHub](../../image/upload/github-releases/填写github渠道配置.png)

## Bước 3: Save Channel

Sau khi điền trường, nhấn Save.

Hệ thống sẽ xử lý các chi tiết sau:

| Hành vi hệ thống | Mô tả |
| --- | --- |
| Tên repository ngắn | ImgBed xác định GitHub account hiện tại và mở rộng giá trị thành đường dẫn repository đầy đủ. |
| Full repository path | ImgBed dùng path `username/repository` đúng như bạn nhập. |
| Kiểm tra repository | Nếu dùng đường dẫn personal account hiện tại, ImgBed tự tạo repository khi chưa tồn tại. Nếu nhập đường dẫn đầy đủ thủ công, ImgBed dùng path đó trực tiếp. |
| Public/private state | Repository visibility được sync theo switch hiện tại. |

## Danh sách kiểm tra nhanh

GitHub Releases hoạt động theo flow này:

```text
Sign in to GitHub
-> Create an Access Token
-> Return to ImgBed and enter the token and repository name
-> Save
-> If only a repo name is entered, ImgBed adds the current username automatically
-> If username/repo is entered, ImgBed uses it as-is
-> Upload a test image
```
