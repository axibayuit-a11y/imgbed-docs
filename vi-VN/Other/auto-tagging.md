# Gắn Thẻ Tự Động

Gắn thẻ tự động được cấu hình tại:

```text
System Settings -> Other Settings -> Auto Tagging
```

Tính năng này tự động tạo thẻ cho hình ảnh. Các thẻ này hữu ích cho tìm kiếm, lọc ảnh ngẫu nhiên, lọc thư viện công khai và kiểm soát truy cập theo phân loại độ tuổi.

## Gắn Thẻ Tự Động Có Thể Làm Gì

| Tính năng | Mô tả |
| --- | --- |
| Tạo thẻ nội dung | Thêm thẻ cho con người, cảnh, vật thể, phong cách nghệ thuật và các nội dung hình ảnh tương tự. |
| Tạo thẻ nhân vật | Hữu ích cho ảnh anime và minh họa. |
| Thêm thẻ hướng ảnh | Thêm `landscape`, `portrait` hoặc `square`. |
| Thêm phân loại ảnh | Lưu kết quả phân loại `G/S/Q/E` cho nội dung phổ thông, nhạy cảm, đáng ngờ hoặc lộ liễu. |
| Tự gắn thẻ khi tải lên | Ảnh mới tải lên sẽ tự động đi vào luồng gắn thẻ. |
| Gắn thẻ hàng loạt | Thêm thẻ cho ảnh cũ trong tất cả thư mục hoặc các thư mục đã chọn. |

## Cần Chuẩn Bị Trước

Chuẩn bị ít nhất một URL Hugging Face Space có thể truy cập.

Cách được khuyến nghị là nhân bản Space `wd-tagger` của SmilingWolf vào tài khoản Hugging Face của bạn:

```text
https://huggingface.co/spaces/SmilingWolf/wd-tagger
```

Bạn có thể tạm dùng Space công khai để kiểm thử, nhưng các Space công khai được nhiều người dùng chung nên có thể phải xếp hàng, chậm hoặc tạm thời không khả dụng. Space được nhân bản trong tài khoản của bạn ổn định hơn cho gắn thẻ tự động lâu dài.

## Nhân Bản Space Của SmilingWolf

1. Đăng nhập vào Hugging Face.
2. Mở `https://huggingface.co/spaces/SmilingWolf/wd-tagger`.

![Space công khai của SmilingWolf](../../image/other/微笑狼的公开仓库.png)

3. Nhấp vào menu ba chấm ở góc trên bên phải.
4. Chọn `Duplicate this Space`.
5. Giữ tên Space mặc định hoặc chọn tên riêng, chẳng hạn `wd-tagger`.
6. Đặt quyền hiển thị là `Public`. Các Space công khai dễ được ImgBed gọi hơn.
7. Ban đầu giữ phần cứng miễn phí mặc định. Chỉ nâng cấp sau nếu tình trạng xếp hàng trở nên rõ ràng.
8. Tạo Space và chờ quá trình xây dựng hoàn tất.

Sau khi quá trình xây dựng hoàn tất, mở trang Space của bạn. URL thường có dạng:

```text
https://huggingface.co/spaces/your-name/wd-tagger
```

Sao chép URL trên trình duyệt và dán vào `Space URLs` trong ImgBed.

## Điền Nhiều Space URLs

Nhập mỗi Space URL trên một dòng.

Ví dụ:

| Giá trị | Mô tả |
| --- | --- |
| `https://huggingface.co/spaces/SmilingWolf/wd-tagger` | Space công khai của SmilingWolf. Phù hợp để kiểm thử tạm thời. |
| `https://huggingface.co/spaces/lintonxue00/wd-tagger` | URL trang Space đã sao chép. |
| `https://huggingface.co/spaces/your-name/wd-tagger` | Trang Space do bạn tự nhân bản. |

Bạn có thể nhập nhiều URL. ImgBed sử dụng nhiều Space cùng lúc, nhờ đó có thể cải thiện tốc độ.

Nếu một Space tạm thời không khả dụng, các Space khác vẫn có thể tiếp tục xử lý.

## Cài Đặt

| Tùy chọn | Khuyến nghị |
| --- | --- |
| `Space URLs` | Nhập các Space URL bạn đã chuẩn bị. Dùng ít nhất một URL. |
| Thư mục đích | Để trống cho tất cả thư mục. Chỉ chọn thư mục khi bạn muốn xử lý một thư mục cụ thể. |
| Mô hình nhận diện | Giữ mặc định `wd-swinv2-tagger-v3`. |
| Ngưỡng thẻ chung | Giá trị mặc định phù hợp với hầu hết ảnh. Giá trị thấp tạo nhiều thẻ hơn; giá trị cao tạo ít thẻ hơn. |
| Ngưỡng thẻ nhân vật | Giá trị mặc định thận trọng và giúp tránh thẻ nhân vật sai. |
| Ngưỡng tự động `MCut` | Ban đầu để tắt. Bật khi bạn muốn mô hình tự quyết định số lượng thẻ. |
| Tự gắn thẻ khi tải lên | Bật nếu ảnh mới tải lên cần tự động có thẻ. |
| Bắt đầu gắn thẻ | Gắn thẻ hàng loạt thủ công cho ảnh cũ. |

## Giá Trị Bắt Đầu Khuyến Nghị

| Tùy chọn | Giá trị khuyến nghị |
| --- | --- |
| Mô hình nhận diện | `wd-swinv2-tagger-v3` |
| Ngưỡng thẻ chung | `0.35` |
| Ngưỡng thẻ nhân vật | `0.85` |
| `MCut` | Ban đầu tắt |
| Tự gắn thẻ khi tải lên | Bật nếu cần |

Nếu có quá nhiều thẻ, hãy tăng nhẹ ngưỡng thẻ chung.

Nếu có quá ít thẻ, hãy giảm nhẹ ngưỡng thẻ chung.

## Gắn Thẻ Hàng Loạt

1. Điền `Space URLs`.
2. Chọn thư mục đích.
3. Nhấp bắt đầu gắn thẻ.
4. Chờ tiến trình hoàn tất.

Nếu thư mục đích trống, ImgBed xử lý tất cả thư mục.

Gắn thẻ hàng loạt phù hợp nhất cho ảnh cũ. Với ảnh mới, hãy bật tự gắn thẻ khi tải lên để không cần chạy thủ công mỗi lần.

## Tự Gắn Thẻ Khi Tải Lên

Sau khi bật tự gắn thẻ khi tải lên, ảnh mới tải lên sẽ tự động gọi các `Space URLs` đã cấu hình.

Tùy chọn này phù hợp cho sử dụng lâu dài.

Nếu Space của bạn đang xếp hàng, quá trình tải lên vẫn có thể hoàn tất trước, còn gắn thẻ sẽ tiếp tục sau.

## Ảnh Nào Được Xử Lý

Gắn thẻ tự động chủ yếu xử lý tệp hình ảnh.

Ảnh đã có đủ thẻ, hướng, phân loại, chiều rộng và chiều cao sẽ bị bỏ qua để tránh gọi Space không cần thiết.

ImgBed chỉ điền thông tin còn thiếu khi có thể. Ví dụ, nếu chỉ thiếu hướng ảnh, hệ thống cố gắng thêm hướng mà không gọi toàn bộ luồng gắn thẻ nội dung.

## Câu Hỏi Thường Gặp

### Vì Sao Nên Nhân Bản Space Riêng?

Các Space công khai được nhiều người dùng chung. Space do bạn tự nhân bản chủ yếu được trang ImgBed của bạn dùng, nên thường nhanh hơn và đáng tin cậy hơn.

### Space Liên Tục Khởi Động

Sau lần tạo đầu tiên hoặc sau thời gian dài không hoạt động, Space có thể cần thời gian để khởi động.

Trước tiên hãy mở trang Space của bạn. Khi nó có thể nhận diện ảnh bình thường, hãy quay lại ImgBed và bắt đầu gắn thẻ.

### Sao Chép Space URL Như Thế Nào?

Mở trang Hugging Face Space của bạn và sao chép địa chỉ trên trình duyệt.

Ví dụ:

```text
https://huggingface.co/spaces/lintonxue00/wd-tagger
https://huggingface.co/spaces/SmilingWolf/wd-tagger
```

### Có Thể Thêm Nhiều Space Không?

Có. Nhập mỗi Space URL trên một dòng.

Nhiều Space sẽ cùng xử lý ảnh và hữu ích khi bạn có nhiều ảnh.

### Vì Sao Thẻ Bằng Tiếng Anh?

Các mô hình SmilingWolf xuất thẻ bằng tiếng Anh. Đây là hành vi dự kiến.

Thẻ chủ yếu dùng cho tìm kiếm, lọc, API ảnh ngẫu nhiên và bộ lọc thư viện công khai.

### Thẻ Phân Loại Dùng Để Làm Gì?

Kết quả phân loại hoạt động cùng chế độ truy cập trong Cài đặt bảo mật.

Ví dụ, khi quyền truy cập của khách bị giới hạn theo phân loại độ tuổi, duyệt công khai và tính năng ảnh ngẫu nhiên sẽ lọc ảnh theo các quy tắc đó.

## Luồng Nhanh

```text
Sign in to Hugging Face
-> Open SmilingWolf/wd-tagger
-> Duplicate this Space
-> Wait for the Space to build
-> Copy your Space URL
-> Fill Space URLs in ImgBed
-> Choose model and thresholds
-> Start tagging or enable auto-tag on upload
```
