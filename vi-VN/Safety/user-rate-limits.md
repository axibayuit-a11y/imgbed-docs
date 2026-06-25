# Giới hạn tần suất tải lên của người dùng

Giới hạn tần suất tải lên kiểm soát mức độ thường xuyên mà người dùng thông thường hoặc khách truy cập có thể tải tệp lên từ trang chủ. Tính năng này giúp tránh việc trang tải lên công khai bị lạm dụng.

Tính năng này chỉ ảnh hưởng đến lượt tải lên từ trang chủ. Lượt tải lên của quản trị viên và lượt tải lên bằng API Token không bị giới hạn bởi giới hạn tần suất của người dùng.

## Nơi cấu hình

Mở bảng quản trị, rồi đi tới:

```text
System Settings -> Security Settings -> Upload Management -> User Rate Limits
```

![Cài đặt giới hạn tần suất người dùng](../../image/other/用户频控截图.png)

## Bật giới hạn tần suất

Sau khi bật `Bật giới hạn tần suất`, ImgBed theo dõi các lượt tải lên gần đây theo địa chỉ IP của người tải lên.

Giá trị mặc định:

| Cài đặt | Mặc định | Mô tả |
| --- | --- | --- |
| Cửa sổ kiểm tra | 1.5 giờ | Khoảng thời gian lùi lại để tính các bản ghi tải lên. |
| Số tệp tối đa | 20 | Số tệp tối đa được phép trong cửa sổ kiểm tra. |
| Giới hạn dung lượng một tệp | 20 MB | Dung lượng tối đa của một tệp. |
| Giới hạn tổng dung lượng tải lên | 200 MB | Tổng dung lượng tải lên tối đa trong cửa sổ kiểm tra. |

Ví dụ: với cửa sổ 1.5 giờ, 20 tệp, 20 MB cho mỗi tệp và tổng cộng 200 MB, các lượt tải lên từ cùng một IP sẽ bị chặn khi vượt quá bất kỳ giới hạn nào đã cấu hình.

## Loại trừ loại tệp

`Loại tệp tải lên bị loại trừ` chặn người dùng thông thường hoặc khách truy cập tải lên các nhóm tệp đã chọn.

Các nhóm có sẵn:

| Loại | Mô tả |
| --- | --- |
| Hình ảnh | jpg, png, webp, gif và các tệp hình ảnh tương tự |
| Video | mp4, webm, mov và các tệp video tương tự |
| Âm thanh | mp3, flac, wav và các tệp âm thanh tương tự |
| Tài liệu | pdf, txt, md, docx và các tệp tài liệu tương tự |
| Khác | Các tệp nằm ngoài các nhóm trên, chẳng hạn như zip, rar, exe, apk |

Theo mặc định, một loại không được chọn nghĩa là loại đó được phép.

Khi bấm vào một loại, loại đó được tô sáng, nghĩa là loại đó bị chặn.

Nếu chọn `Khác`, khách truy cập tải tệp zip hoặc rar lên sẽ bị chặn và được thông báo rằng loại tệp này không được hỗ trợ.

## Thông báo chặn

Khi một giới hạn được kích hoạt, người dùng sẽ thấy thông báo tương ứng:

![Thông báo tải lên quá thường xuyên](../../image/other/频繁报错提示.png)

| Tình huống | Ý nghĩa thông báo |
| --- | --- |
| Một tệp quá lớn | Tệp quá lớn và nên được nén trước khi tải lên. |
| Loại tệp bị chặn | Loại tệp này không được hỗ trợ. Hãy xóa tệp đó và thử lại. |
| Tải lên quá thường xuyên | Các lượt tải lên gần đây quá thường xuyên, kèm thời gian thử lại. |
| Tổng dung lượng quá cao | Tổng dung lượng tải lên gần đây quá cao, kèm thời gian thử lại. |

## Khi nào nên bật

Bật giới hạn tần suất người dùng nếu trang chủ tải lên của bạn có thể truy cập công khai.

Các lý do thường gặp:

- Bạn lo ngại về các lượt tải lên hàng loạt bằng script.
- Bạn muốn giới hạn các lượt tải lên dung lượng lớn của khách truy cập.
- Bạn chỉ muốn người dùng thông thường tải hình ảnh lên, không tải tệp nén hoặc trình cài đặt.
- Bạn muốn giữ trang tải lên công khai hoạt động nhưng vẫn kiểm soát mức sử dụng tài nguyên.

Nếu trang chỉ dùng cho riêng bạn, hoặc chỉ quản trị viên mới có thể tải lên, bạn có thể để tính năng này tắt.
