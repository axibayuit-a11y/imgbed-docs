# Redundant Backup và Read Source Switching

Redundant backup lưu một bản copy bổ sung của file đã upload.

Cả primary file và backup file đều có thể dùng làm read sources. Visitors thường không thấy khác biệt. Khác biệt duy nhất là storage channel nào serve file.

## Redundant Backup làm được gì

| Feature | Description |
| --- | --- |
| Store an extra copy | Back up files sang upload channel khác để giảm rủi ro khi một channel lỗi. |
| Switch read source | Sau khi backup thành công, switch file reads giữa primary channel và backup channel. |
| Single-file backup | Back up một file từ file details page. |
| Batch backup | Chọn nhiều files trong admin page và back up cùng lúc. |
| Global redundant backup | Back up files theo folder từ Other Settings. |

## Redundant Backup Entry

Mở:

```text
System Settings -> Other Settings -> Redundant Backup
```

![Redundant backup](../../image/other/冗余备份截图.png)

Entry này phù hợp để thêm backups cho một folder hoặc tất cả files theo dạng bulk.

Backup channel có thể chọn thủ công, hoặc bạn chọn automatic switching để ImgBed tìm backup channel phù hợp.

## Backup từ File Details

Mở file details page trong admin panel và nhấn backup.

![Backup in file details](../../image/other/文件详情里文件备份.png)

Phù hợp nhất khi muốn back up một important file theo nhu cầu.

Sau khi backup thành công, file details page hiển thị available read sources.

## Batch Backup bằng Selection

Trong admin panel, chọn nhiều files và run batch backup.

![Batch backup](../../image/other/批量备份截图.png)

Phù hợp để xử lý một nhóm files.

Selection backup, file details backup và redundant backup trong Other Settings đều dùng cùng backup system. Chúng chỉ là entry points khác nhau.

## Switch Read Source sau Backup

Sau khi backup hoàn tất, file details page cho phép switch read source:

| Read Source | Description |
| --- | --- |
| Primary channel | Đọc từ original upload channel. |
| Backup channel | Đọc từ backup channel. |

![Switch read source after backup](../../image/other/备份成功切换读取源.png)

Visitors không cần biết file đang được serve từ primary hay backup channel.

Read source bạn chọn sẽ trở thành preferred source cho file access sau này.

## Khi nào Backup bị Skip

Các trường hợp sau sẽ bị skip trong quá trình backup. Chúng không phải lỗi.

| Case | Why It Is Skipped |
| --- | --- |
| Already backed up | File đã có backup sẽ không được back up lại. |
| Primary và backup channels giống nhau | Backup phải được lưu ở channel khác thì mới có ý nghĩa. |
| No usable backup channel | Không có alternative channel phù hợp. |

Tóm lại: backups phải đi sang channel khác, và files đã backed-up không tiêu tốn thêm dung lượng lần nữa.

## Primary Channel vs Backup Channel

| Name | Meaning |
| --- | --- |
| Primary channel | Channel được dùng khi file được upload lần đầu. |
| Backup channel | Channel lưu redundant copy. |
| Primary read source | File hiện được read từ primary channel. |
| Backup read source | File hiện được read từ backup channel. |

Primary và backup read sources có user-facing behavior giống nhau.

Miễn là backup file available, images, videos và download links vẫn hoạt động sau khi switch sang backup read source.

## Điều gì xảy ra khi File bị Delete

Khi file bị delete, ImgBed delete cả primary file và backup file.
