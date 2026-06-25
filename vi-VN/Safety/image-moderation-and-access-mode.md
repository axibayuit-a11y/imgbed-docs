# Kiểm duyệt hình ảnh và chế độ truy cập

Kiểm duyệt hình ảnh gán xếp hạng độ tuổi cho hình ảnh được tải lên. Chế độ truy cập kiểm soát những xếp hạng nào được hiển thị qua truy cập công khai.

Điều này ảnh hưởng đến thư viện công khai, URL tệp công khai và API hình ảnh ngẫu nhiên. Nó không hạn chế bảng quản trị. Quản trị viên vẫn có thể xem và quản lý tất cả tệp.

## Nơi cấu hình

Mở bảng quản trị, rồi đi tới:

```text
System Settings -> Security Settings -> Upload Management -> Image Moderation
```

Các cài đặt chính:

- Chế độ truy cập
- Bật kiểm duyệt
- Nhà cung cấp kiểm duyệt

## Chế độ truy cập làm gì

Chế độ truy cập quyết định những xếp hạng độ tuổi nào có thể được hiển thị công khai.

Các chế độ hiện tại:

| Chế độ truy cập | Xếp hạng được hiển thị công khai |
| --- | --- |
| Chế độ người lớn | Chung, R12, R16, R18 |
| Chế độ thanh thiếu niên | Chung, R12, R16 |
| Chế độ thiếu niên | Chung, R12 |
| Chế độ trẻ em | Chỉ Chung |

Mặc định là Chế độ người lớn.

Với trang riêng tư hoặc trang có nội dung trưởng thành, Chế độ người lớn có thể phù hợp. Với thư viện công khai thận trọng hơn, hãy chọn chế độ Thanh thiếu niên, Thiếu niên hoặc Trẻ em.

## Tác dụng của việc bật kiểm duyệt

Khi bật kiểm duyệt, ImgBed gọi nhà cung cấp kiểm duyệt đã chọn trong quá trình tải lên và lưu xếp hạng độ tuổi phát hiện được.

Các xếp hạng chính:

| Xếp hạng | Ý nghĩa |
| --- | --- |
| Chung | Nội dung công khai an toàn |
| R12 | Nội dung hơi nhạy cảm |
| R16 | Nội dung nhạy cảm mức vừa |
| R18 | Nội dung người lớn |

Kết quả kiểm duyệt được dùng khi quyết định quyền truy cập công khai.

Nếu kiểm duyệt chưa được bật, hoặc tệp cũ không có xếp hạng, các tệp đó được xem là chưa xếp hạng. Tệp chưa xếp hạng không tự động bị xóa khỏi thư viện công khai hoặc API hình ảnh ngẫu nhiên chỉ vì chưa có xếp hạng.

## Chọn nhà cung cấp kiểm duyệt

Các nhà cung cấp có sẵn gồm:

- moderatecontent.com
- nsfwjs
- Sightengine

Mỗi nhà cung cấp có yêu cầu khác nhau:

- moderatecontent.com thường yêu cầu API Key.
- nsfwjs thường yêu cầu URL điểm cuối API.
- Sightengine yêu cầu API user và API secret.

Hãy chọn theo tài khoản, mức độ khả dụng và chất lượng phát hiện của bạn. Miễn là kiểm duyệt được bật và cấu hình đúng, ImgBed sẽ cố gắng ghi xếp hạng hình ảnh trong quá trình tải lên.

## Ảnh hưởng đến thư viện công khai

Thư viện công khai lọc tệp theo chế độ truy cập.

Ví dụ:

- Chế độ người lớn: hình ảnh R18 có thể xuất hiện.
- Chế độ thanh thiếu niên: hình ảnh R18 bị ẩn.
- Chế độ thiếu niên: hình ảnh R16 và R18 bị ẩn.
- Chế độ trẻ em: chỉ hiển thị hình ảnh Chung.

Điều này chỉ ảnh hưởng đến truy cập công khai thông thường. Bảng quản trị vẫn hiển thị tất cả tệp.

## Ảnh hưởng đến URL tệp công khai

URL tệp công khai là các liên kết hình ảnh trực tiếp do khách truy cập mở.

Nếu xếp hạng của tệp được chế độ truy cập hiện tại cho phép, ImgBed trả về hình ảnh gốc.

Nếu xếp hạng cao hơn mức cho phép, truy cập công khai thông thường sẽ không trả về hình ảnh gốc. Thay vào đó, ImgBed trả về kết quả bị chặn đã cấu hình hoặc hình ảnh thay thế.

Ví dụ:

- Chế độ hiện tại là Chế độ trẻ em.
- Một hình ảnh được xếp hạng R18.
- Một khách truy cập mở trực tiếp URL công khai.
- ImgBed không trả về hình ảnh gốc R18 cho khách truy cập đó.

![Hình ảnh tệp bị hạn chế](../../image/Safety/文件受限图.png)

Quản trị viên xem tệp trong bảng quản trị không bị ảnh hưởng bởi hạn chế này.

## Ảnh hưởng đến API hình ảnh ngẫu nhiên

API hình ảnh ngẫu nhiên cũng lọc nhóm ứng viên theo chế độ truy cập.

Trong Chế độ trẻ em, hình ảnh ngẫu nhiên chỉ được chọn từ các tệp được xếp hạng Chung.

Trong Chế độ thanh thiếu niên, hình ảnh ngẫu nhiên có thể đến từ tệp Chung, R12 và R16, nhưng không đến từ tệp R18.

Điều này ngăn API hình ảnh ngẫu nhiên vượt qua hạn chế của thư viện công khai.

## Quan hệ với quy tắc danh sách

Chế độ truy cập không phải là quy tắc truy cập công khai duy nhất. Nó hoạt động cùng với quy tắc danh sách cho phép/chặn.

Nói đơn giản:

- Nội dung trong danh sách cho phép được ưu tiên công khai.
- Nội dung trong danh sách chặn không thể được khách truy cập thông thường xem trực tiếp.
- Nội dung không nằm trong cả hai danh sách sẽ được kiểm tra tiếp theo theo chế độ truy cập.

Nếu một hình ảnh bị hạn chế bởi cả xếp hạng độ tuổi và quy tắc danh sách, khách truy cập thông thường vẫn không thể xem trực tiếp tệp gốc.

## Cài đặt đề xuất

Đối với trang công khai:

- Bật kiểm duyệt.
- Chọn chế độ truy cập phù hợp với đối tượng của trang.
- Dùng Chế độ trẻ em hoặc Chế độ thiếu niên cho khách truy cập mọi lứa tuổi.
- Tránh Chế độ người lớn nếu bạn không muốn hiển thị công khai nội dung trưởng thành.
- Xem xếp hạng tệp trong bảng quản trị và điều chỉnh thủ công khi cần.

Đối với trang riêng tư hoặc cá nhân:

- Chế độ người lớn thường phù hợp.
- Bật kiểm duyệt nếu hữu ích.
- Xem và điều chỉnh xếp hạng trong bảng quản trị khi cần.

## Câu hỏi thường gặp

### Tệp có biến mất khỏi bảng quản trị sau khi tôi đổi chế độ truy cập không?

Không.

Chế độ truy cập chỉ ảnh hưởng đến truy cập công khai thông thường. Nó không ảnh hưởng đến bảng quản trị.

### Vì sao thư viện công khai hiển thị ít hình hơn sau khi chuyển sang Chế độ trẻ em?

Chế độ trẻ em chỉ cho phép hiển thị công khai các tệp được xếp hạng Chung. Tệp R12, R16 và R18 bị lọc ra.

### URL công khai vẫn có thể mở hình ảnh người lớn không?

Nếu chế độ truy cập hiện tại không cho phép xếp hạng đó, URL công khai thông thường sẽ không trả về hình ảnh gốc.

### API hình ảnh ngẫu nhiên có thể trả về hình ảnh bị hạn chế không?

Không.

API hình ảnh ngẫu nhiên lọc ứng viên theo chế độ truy cập hiện tại.

### Hình ảnh cũ chưa xếp hạng sẽ thế nào?

Hình ảnh chưa xếp hạng không tự động bị ẩn chỉ vì chúng chưa có kết quả kiểm duyệt. Bạn có thể điều chỉnh xếp hạng của chúng sau trong bảng quản trị.
