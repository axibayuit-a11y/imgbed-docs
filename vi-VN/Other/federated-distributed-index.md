# Federated Distributed Index

Federated distributed index cho phép nhiều ImgBed sites share file lists với nhau.

Hiểu đơn giản:

- Bạn có thể share selected folders từ site của mình cho người khác.
- Bạn có thể join node khác và sync shared file list của node đó vào admin panel của mình.
- Federated files chủ yếu dùng để browse, search và mở links. Chúng không được re-upload vào storage của bạn.

## Cấu hình ở đâu

Mở:

```text
System Settings -> Other Settings -> Federated Distributed Index
```

![Local federation node](../../image/other/联盟图/联盟分布式索引本地节点.png)

Trang có ba tabs:

| Tab | Purpose |
| --- | --- |
| Local Node | Enable node của bạn, confirm public domain, chọn shared folders và update outbound index |
| Nodes I Joined | Manage các ImgBed nodes khác mà bạn đã join |
| Nodes Joining Me | Manage requests từ người khác muốn join node của bạn |

## First-Time Setup

1. Mở `Local Node`.
2. Bật `Enable`.
3. Chọn folders muốn share trong `Sync folders`.
4. Nhấn `Update Outbound Index`.
5. Nếu ImgBed detect domain change, confirm current domain đúng trước khi tiếp tục.

Bạn có thể chọn nhiều sync folders.

Nếu sync folder list trống, tất cả folders sẽ được share.

## Local Node

### Public Domain

Public domain là site URL mà nodes khác dùng để access node của bạn.

ImgBed tự detect. Bạn không cần nhập thủ công. Lần đầu update index, ImgBed sẽ hỏi current access URL có phải production domain không.

Nếu sau này đổi domain, khi update index sẽ hỏi confirmation lại.

### Sync Folders

Sync folders quyết định files nào được share với federation nodes.

Ví dụ, nếu bạn chỉ chọn:

```text
/1/
/2/
```

Nodes khác chỉ thấy files trong hai directories đó.

### Update Outbound Index

Thao tác này update file list mà nodes khác có thể sync từ bạn.

Dùng khi:

- Bạn enable federation lần đầu.
- Bạn upload files muốn share.
- Bạn đổi sync folders.
- Bạn đổi public domain và cần confirm.

## Nodes I Joined

`Nodes I Joined` là nơi bạn subscribe nodes khác.

![Nodes I joined](../../image/other/联盟图/我加入的节点.png)

### Gửi Request Join Node Khác

1. Xin invitation link từ owner phía bên kia.
2. Paste vào input box.
3. Nhấn `Request to Join`.
4. Chờ owner phía bên kia approve trong admin panel của họ.

Sau khi approval, node status sẽ thành approved.

### Update Inbound Index

`Update Inbound Index` sync file lists từ các nodes bạn đã joined.

Dùng khi:

- Owner phía bên kia vừa approve request của bạn.
- Owner phía bên kia báo shared content đã update.
- Bạn muốn refresh tất cả joined federation file lists.

Để update chỉ một node, nhấn `Update Index` trên node card đó.

![Update index](../../image/other/联盟图/更新索引.png)

### Unsubscribe

Nếu không muốn sync một node nữa, nhấn `Unsubscribe`.

Sau khi unsubscribe, federated index của node đó sẽ bị xóa khỏi local site của bạn.

## Nodes Joining Me

`Nodes Joining Me` là nơi xử lý requests từ người khác.

![Nodes joining me](../../image/other/联盟图/加入我的节点.png)

### Generate Invitation Link

1. Đảm bảo local node đã enabled.
2. Nhấn `Update Outbound Index` ít nhất một lần để ImgBed confirm public domain.
3. Mở `Nodes Joining Me`.
4. Nhấn `Reset Invitation Link`.
5. Copy invitation link và gửi cho owner phía bên kia.

Nếu invitation link trống, thường là public domain chưa được confirm. Quay lại `Local Node` và nhấn `Update Outbound Index`.

### Xử lý Join Requests

Khi ai đó submit request, nó xuất hiện trong list `Nodes Joining Me`.

| Action | Meaning |
| --- | --- |
| Approve | Cho phép node bên kia sync shared file list của bạn |
| Reject | Từ chối join request |
| Delete | Xóa finished record |
| Check Status | Kiểm tra phía bên kia còn giữ relationship này không |

Sau approval, phía bên kia vẫn cần nhấn `Update Inbound Index` trước khi shared files của bạn xuất hiện ở đó.

![Approve invited node](../../image/other/联盟图/邀请节点同意.png)

## Messages

Sau khi relationship approved, nhấn `Message` trên node card.

Messages chỉ dùng để trao đổi về federation relationship. Chúng không thay đổi files, tags, directories hoặc permissions.

![Messages](../../image/other/联盟图/留言功能.png)

## Xem Federated Files

Sau khi sync hoàn tất, quay lại admin file list.

Ở đầu page, chuyển giữa local files và federated files. Trong federated files, bạn có thể browse synced content.

Federated files chủ yếu để viewing, searching, previewing và copying links. Chúng không phải local files, nên bạn không thể move, delete, retag hoặc back up từ site của mình.

![Federated files in admin](../../image/other/联盟图/联盟管理显示效果图.png)

## FAQ

### Vì sao hệ thống yêu cầu Reapply vì không có Relationship Record?

Thường nghĩa là phía bên kia đã delete bạn và xóa record, nên relationship không còn tìm được. Hãy submit join request mới.

![Reapply when no relationship record exists](../../image/other/联盟图/无关系记录重新申请.png)

### Vì sao join rồi vẫn không thấy Files?

Kiểm tra:

1. Owner phía bên kia đã approve request của bạn.
2. Owner phía bên kia đã nhấn `Update Outbound Index`.
3. Bạn đã nhấn `Update Inbound Index`.
4. Sync folders của owner phía bên kia có chứa directories họ muốn share.

### Domain Change Detected thì làm gì?

Nếu bạn đang mở admin panel bằng production domain, confirm và tiếp tục.

Nếu đang dùng temporary address, cancel, mở lại admin panel bằng production domain rồi thử lại.

### Empty Sync Folder List nghĩa là gì?

Empty sync folder list nghĩa là share tất cả folders.

Nếu chỉ muốn share vài directories, hãy chọn folders thủ công.

### Khác nhau giữa Outbound và Inbound Index Updates

| Button | Simple Meaning |
| --- | --- |
| Update Outbound Index | Update những gì người khác có thể sync từ tôi |
| Update Inbound Index | Update những gì tôi đã sync từ người khác |
