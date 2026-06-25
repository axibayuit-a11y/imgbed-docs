# Chỉ Mục Phân Tán Liên Minh

Chỉ mục phân tán liên minh cho phép nhiều trang ImgBed chia sẻ danh sách tệp với nhau.

Hiểu đơn giản:

- Bạn có thể chia sẻ các thư mục đã chọn từ trang của mình với người khác.
- Bạn có thể tham gia một nút khác và đồng bộ danh sách tệp được chia sẻ của nút đó vào bảng quản trị của mình.
- Tệp liên minh chủ yếu dùng để duyệt, tìm kiếm và mở liên kết. Chúng không được tải lại vào kho lưu trữ của bạn.

## Cấu Hình Ở Đâu

Mở:

```text
System Settings -> Other Settings -> Federated Distributed Index
```

![Nút liên minh cục bộ](../../image/other/联盟图/联盟分布式索引本地节点.png)

Trang có ba thẻ:

| Thẻ | Mục đích |
| --- | --- |
| Nút cục bộ | Bật nút của bạn, xác nhận tên miền công khai, chọn thư mục chia sẻ và cập nhật chỉ mục ra |
| Nút tôi đã tham gia | Quản lý các nút ImgBed khác mà bạn đã tham gia |
| Nút tham gia tôi | Quản lý yêu cầu từ những người muốn tham gia nút của bạn |

## Thiết Lập Lần Đầu

1. Mở `Local Node`.
2. Bật `Enable`.
3. Chọn thư mục cần chia sẻ trong `Sync folders`.
4. Nhấp `Update Outbound Index`.
5. Nếu ImgBed phát hiện thay đổi tên miền, hãy xác nhận tên miền hiện tại là đúng trước khi tiếp tục.

Bạn có thể chọn nhiều thư mục đồng bộ.

Nếu danh sách thư mục đồng bộ trống, tất cả thư mục sẽ được chia sẻ.

## Nút Cục Bộ

### Tên Miền Công Khai

Tên miền công khai là URL trang mà các nút khác dùng để truy cập nút của bạn.

ImgBed tự động phát hiện giá trị này. Bạn không cần nhập thủ công. Lần đầu cập nhật chỉ mục, ImgBed sẽ yêu cầu xác nhận URL truy cập hiện tại có phải tên miền chính thức hay không.

Nếu sau này bạn đổi tên miền, thao tác cập nhật chỉ mục sẽ yêu cầu xác nhận lại.

### Thư Mục Đồng Bộ

Thư mục đồng bộ quyết định tệp nào được chia sẻ với các nút liên minh.

Ví dụ, nếu bạn chỉ chọn:

```text
/1/
/2/
```

các nút khác chỉ có thể thấy tệp trong hai thư mục đó.

### Cập Nhật Chỉ Mục Ra

Thao tác này cập nhật danh sách tệp mà các nút khác có thể đồng bộ từ bạn.

Hãy dùng khi:

- Bạn bật liên minh lần đầu.
- Bạn tải lên các tệp muốn chia sẻ.
- Bạn thay đổi thư mục đồng bộ.
- Bạn thay đổi tên miền công khai và cần xác nhận.

## Nút Tôi Đã Tham Gia

`Nodes I Joined` là nơi bạn quản lý các nút khác mà mình đã tham gia.

![Nút tôi đã tham gia](../../image/other/联盟图/我加入的节点.png)

### Gửi Yêu Cầu Tham Gia Nút Khác

1. Hỏi chủ sở hữu bên kia để lấy liên kết mời.
2. Dán liên kết vào ô nhập.
3. Nhấp `Request to Join`.
4. Chờ chủ sở hữu bên kia phê duyệt trong bảng quản trị của họ.

Sau khi được phê duyệt, trạng thái nút sẽ chuyển thành đã phê duyệt.

### Cập Nhật Chỉ Mục Vào

`Update Inbound Index` đồng bộ danh sách tệp từ các nút bạn đã tham gia.

Hãy dùng khi:

- Chủ sở hữu bên kia vừa phê duyệt yêu cầu của bạn.
- Chủ sở hữu bên kia báo rằng nội dung chia sẻ đã được cập nhật.
- Bạn muốn làm mới toàn bộ danh sách tệp liên minh từ các nút đã tham gia.

Để chỉ cập nhật một nút, nhấp `Update Index` trên thẻ của nút đó.

![Cập nhật chỉ mục](../../image/other/联盟图/更新索引.png)

### Hủy Tham Gia

Nếu không muốn tiếp tục đồng bộ một nút, hãy nhấp `Unsubscribe`.

Sau khi hủy tham gia, chỉ mục liên minh của nút đó sẽ bị xóa khỏi trang cục bộ của bạn.

## Nút Tham Gia Tôi

`Nodes Joining Me` là nơi bạn xử lý yêu cầu từ người khác.

![Nút tham gia tôi](../../image/other/联盟图/加入我的节点.png)

### Tạo Liên Kết Mời

1. Đảm bảo nút cục bộ đã bật.
2. Nhấp `Update Outbound Index` ít nhất một lần để ImgBed xác nhận tên miền công khai.
3. Mở `Nodes Joining Me`.
4. Nhấp `Reset Invitation Link`.
5. Sao chép liên kết mời và gửi cho chủ sở hữu bên kia.

Nếu liên kết mời trống, thường là tên miền công khai chưa được xác nhận. Quay lại `Local Node` và nhấp `Update Outbound Index`.

### Xử Lý Yêu Cầu Tham Gia

Khi ai đó gửi yêu cầu, yêu cầu đó sẽ xuất hiện trong danh sách `Nodes Joining Me`.

| Hành động | Ý nghĩa |
| --- | --- |
| Phê duyệt | Cho phép nút khác đồng bộ danh sách tệp bạn chia sẻ |
| Từ chối | Từ chối yêu cầu tham gia |
| Xóa | Xóa bản ghi đã hoàn tất |
| Kiểm tra trạng thái | Kiểm tra xem bên kia còn giữ quan hệ này hay không |

Sau khi phê duyệt, bên kia vẫn cần nhấp `Update Inbound Index` trước khi các tệp bạn chia sẻ xuất hiện ở đó.

![Phê duyệt nút được mời](../../image/other/联盟图/邀请节点同意.png)

## Tin Nhắn

Sau khi một quan hệ được phê duyệt, hãy nhấp `Message` trên thẻ nút.

Tin nhắn chỉ dùng để trao đổi về quan hệ liên minh. Chúng không thay đổi tệp, thẻ, thư mục hoặc quyền.

![Tin nhắn](../../image/other/联盟图/留言功能.png)

## Xem Tệp Liên Minh

Sau khi đồng bộ hoàn tất, quay lại danh sách tệp trong bảng quản trị.

Ở đầu trang, chuyển giữa tệp cục bộ và tệp liên minh. Trong tệp liên minh, bạn có thể duyệt nội dung đã đồng bộ.

Tệp liên minh chủ yếu dùng để xem, tìm kiếm, xem trước và sao chép liên kết. Chúng không phải tệp cục bộ, nên bạn không thể di chuyển, xóa, đổi thẻ hoặc sao lưu chúng từ trang của mình.

![Tệp liên minh trong bảng quản trị](../../image/other/联盟图/联盟管理显示效果图.png)

## Câu Hỏi Thường Gặp

### Vì Sao Hệ Thống Yêu Cầu Gửi Lại Vì Không Có Bản Ghi Quan Hệ?

Điều này thường có nghĩa là bên kia đã xóa bạn và xóa bản ghi, nên quan hệ không còn được tìm thấy. Hãy gửi yêu cầu tham gia mới.

![Gửi lại khi không có bản ghi quan hệ](../../image/other/联盟图/无关系记录重新申请.png)

### Vì Sao Sau Khi Tham Gia Tôi Không Thấy Tệp?

Hãy kiểm tra:

1. Chủ sở hữu bên kia đã phê duyệt yêu cầu của bạn.
2. Chủ sở hữu bên kia đã nhấp `Update Outbound Index`.
3. Bạn đã nhấp `Update Inbound Index`.
4. Thư mục đồng bộ của chủ sở hữu bên kia bao gồm các thư mục họ muốn chia sẻ.

### Nên Làm Gì Khi Phát Hiện Thay Đổi Tên Miền?

Nếu bạn đang mở bảng quản trị bằng tên miền chính thức, hãy xác nhận và tiếp tục.

Nếu đang dùng địa chỉ tạm thời, hãy hủy, mở lại bảng quản trị bằng tên miền chính thức rồi thử lại.

### Danh Sách Thư Mục Đồng Bộ Trống Có Nghĩa Là Gì?

Danh sách thư mục đồng bộ trống nghĩa là tất cả thư mục được chia sẻ.

Để chỉ chia sẻ một số thư mục, hãy chọn thủ công các thư mục đó.

### Khác Biệt Giữa Cập Nhật Chỉ Mục Ra Và Vào

| Nút | Ý nghĩa đơn giản |
| --- | --- |
| Cập nhật chỉ mục ra | Cập nhật những gì người khác có thể đồng bộ từ tôi |
| Cập nhật chỉ mục vào | Cập nhật những gì tôi đã đồng bộ từ người khác |
