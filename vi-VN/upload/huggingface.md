# Thêm Hugging Face Channel

## Cần chuẩn bị gì trước khi bắt đầu

Bạn chỉ cần ba thứ:

| Yêu cầu | Mục đích |
| --- | --- |
| Hugging Face account | Dùng để generate access token và sở hữu repository. |
| Hugging Face User Access Token | ImgBed dùng để access Hugging Face API, tạo repositories và upload files. |
| Repository name | Có thể chỉ nhập repository name, ví dụ `image`. |

## Các bước thiết lập

### Bước 1: Sign in vào Hugging Face và tạo Access Token

1. Sign in vào Hugging Face.
2. Nhấn avatar ở góc trên bên phải và mở `Settings`.
3. Mở `Access Tokens` từ left sidebar.
4. Tạo token mới.
5. Đặt tên token dễ nhận biết.
6. Chọn permission `write`.
7. Sao chép và lưu token ngay sau khi tạo.

![Tạo token](../../image/upload/huggingface/创建令牌.png)

## Bước 2: Điền Hugging Face Channel trong ImgBed

Sau khi chọn `Hugging Face` trong Cài đặt tải lên, điền các trường như sau:

| Trường UI | Nhập gì |
| --- | --- |
| Channel name | Tên bạn chọn, ví dụ `hf-primary`. |
| Repository name | Repo name ngắn như `image`, hoặc đường dẫn đầy đủ như `username/image`. |
| Access Token | Hugging Face User Access Token vừa tạo. |
| Private repository | Bật hoặc tắt theo nhu cầu. |
| Remark | Không bắt buộc, ví dụ `Primary upload channel`. |

![Thêm kênh](../../image/upload/huggingface/添加渠道.png)

## Bước 3: Save Channel

Sau khi điền trường, nhấn Save.

Hệ thống sẽ xử lý các chi tiết sau:

| Hành vi hệ thống | Mô tả |
| --- | --- |
| Tên repository ngắn | ImgBed xác định Hugging Face account hiện tại và mở rộng giá trị thành đường dẫn repository đầy đủ. |
| Full repository path | ImgBed dùng path `username/repository` đúng như bạn nhập. |
| Kiểm tra repository | Nếu dùng đường dẫn personal account hiện tại, ImgBed thử tạo repository khi chưa tồn tại. Nếu nhập đường dẫn đầy đủ thủ công, ImgBed dùng path đó trực tiếp. |
| Repository type | Channel này dùng `dataset` repository. |
| Public/private state | Repository visibility được sync theo switch hiện tại. |

## Danh sách kiểm tra nhanh

```text
Sign in to Hugging Face
-> Create an Access Token
-> Select write permission
-> Return to ImgBed and enter the token and repository name
-> Save
-> If only a repo name is entered, ImgBed adds the current username automatically
-> If username/repo is entered, ImgBed uses it as-is
-> ImgBed checks or creates the dataset repository
-> Upload a test image
```
