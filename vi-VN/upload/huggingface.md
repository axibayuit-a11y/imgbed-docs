# Thêm Hugging Face Channel

## Cần chuẩn bị gì trước khi bắt đầu

Bạn chỉ cần ba thứ:

| Requirement | Purpose |
| --- | --- |
| Hugging Face account | Dùng để generate access token và sở hữu repository. |
| Hugging Face User Access Token | ImgBed dùng để access Hugging Face API, tạo repositories và upload files. |
| Repository name | Có thể chỉ nhập repository name, ví dụ `image`. |

## Các bước thiết lập

### Step 1: Sign in vào Hugging Face và tạo Access Token

1. Sign in vào Hugging Face.
2. Nhấn avatar ở góc trên bên phải và mở `Settings`.
3. Mở `Access Tokens` từ left sidebar.
4. Tạo token mới.
5. Đặt tên token dễ nhận biết.
6. Chọn permission `write`.
7. Copy và lưu token ngay sau khi tạo.

![Create a token](../../image/upload/huggingface/创建令牌.png)

## Step 2: Điền Hugging Face Channel trong ImgBed

Sau khi chọn `Hugging Face` trong Upload Settings, điền các field như sau:

| UI Field | Nhập gì |
| --- | --- |
| Channel name | Tên bạn chọn, ví dụ `hf-primary`. |
| Repository name | Repo name ngắn như `image`, hoặc full path như `username/image`. |
| Access Token | Hugging Face User Access Token vừa tạo. |
| Private repository | Bật hoặc tắt theo nhu cầu. |
| Remark | Optional, ví dụ `Primary upload channel`. |

![Add the channel](../../image/upload/huggingface/添加渠道.png)

## Step 3: Save Channel

Sau khi điền fields, nhấn Save.

System sẽ xử lý các chi tiết sau:

| System Behavior | Description |
| --- | --- |
| Short repository name | ImgBed xác định current Hugging Face account và mở rộng value thành full repository path. |
| Full repository path | ImgBed dùng path `username/repository` đúng như bạn nhập. |
| Repository check | Nếu dùng current personal account path, ImgBed thử tạo repository khi chưa tồn tại. Nếu nhập full path thủ công, ImgBed dùng path đó trực tiếp. |
| Repository type | Channel này dùng `dataset` repository. |
| Public/private state | Repository visibility được sync theo switch hiện tại. |

## Quick Checklist

```text
Sign in vào Hugging Face
-> Tạo Access Token
-> Chọn write permission
-> Quay lại ImgBed và nhập token cùng repository name
-> Save
-> Nếu chỉ nhập repo name, ImgBed tự thêm current username
-> Nếu nhập username/repo, ImgBed dùng nguyên giá trị đó
-> ImgBed check hoặc tạo dataset repository
-> Upload test image
```
