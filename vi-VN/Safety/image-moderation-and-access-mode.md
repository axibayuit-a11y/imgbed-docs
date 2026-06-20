# Image Moderation và Access Mode

Image moderation gán age rating cho uploaded images. Access mode kiểm soát ratings nào được hiển thị qua public access.

Điều này ảnh hưởng đến public gallery, public file URLs và random image API. Nó không hạn chế admin panel. Administrators vẫn có thể xem và manage tất cả files.

## Cấu hình ở đâu

Mở admin panel, rồi vào:

```text
System Settings -> Security Settings -> Upload Management -> Image Moderation
```

Các settings chính:

- Access mode
- Enable moderation
- Moderation provider

## Access Mode làm gì

Access mode quyết định age ratings nào có thể hiển thị public.

Current modes:

| Access Mode | Publicly Visible Ratings |
| --- | --- |
| Adult mode | General, R12, R16, R18 |
| Youth mode | General, R12, R16 |
| Teen mode | General, R12 |
| Child mode | Chỉ General |

Default là Adult mode.

Với private sites hoặc sites có mature content, Adult mode có thể phù hợp. Nếu muốn public gallery thận trọng hơn, chọn Youth, Teen hoặc Child mode.

## Enable Moderation làm gì

Khi moderation được bật, ImgBed gọi selected moderation provider trong lúc upload và save age rating được phát hiện.

Ratings chính:

| Rating | Meaning |
| --- | --- |
| General | Safe public content |
| R12 | Content hơi nhạy cảm |
| R16 | Content nhạy cảm mức vừa |
| R18 | Adult content |

Moderation result được dùng khi quyết định public access.

Nếu moderation không bật, hoặc old files chưa có rating, các files đó được xem là unrated. Unrated files không tự động bị xóa khỏi public gallery hoặc random image API chỉ vì chưa có rating.

## Chọn Moderation Provider

Available providers gồm:

- moderatecontent.com
- nsfwjs
- Sightengine

Mỗi provider có yêu cầu khác nhau:

- moderatecontent.com thường cần API Key.
- nsfwjs thường cần API endpoint URL.
- Sightengine cần API user và API secret.

Chọn theo account, availability và detection quality của bạn. Miễn là moderation được bật và cấu hình đúng, ImgBed sẽ cố ghi image rating trong lúc upload.

## Ảnh hưởng đến Public Gallery

Public gallery filter files theo access mode.

Ví dụ:

- Adult mode: R18 images có thể xuất hiện.
- Youth mode: R18 images bị ẩn.
- Teen mode: R16 và R18 images bị ẩn.
- Child mode: chỉ General images được hiển thị.

Điều này chỉ ảnh hưởng normal public access. Admin panel vẫn hiển thị tất cả files.

## Ảnh hưởng đến Public File URLs

Public file URLs là direct image links mà visitors mở.

Nếu file rating được current access mode cho phép, ImgBed trả original image.

Nếu rating cao hơn allowed level, normal public access không trả original image. Thay vào đó, ImgBed trả configured blocked result hoặc blocked fallback image.

Ví dụ:

- Current mode là Child mode.
- Một image được rating R18.
- Visitor mở public URL trực tiếp.
- ImgBed không trả R18 original image cho visitor đó.

![Restricted file image](../../image/Safety/文件受限图.png)

Administrators xem files trong admin panel không bị restriction này ảnh hưởng.

## Ảnh hưởng đến Random Image API

Random image API cũng filter candidate pool theo access mode.

Ở Child mode, random images chỉ được chọn từ General-rated files.

Ở Youth mode, random images có thể đến từ General, R12 và R16 files, nhưng không từ R18 files.

Điều này ngăn random image API bypass public gallery restrictions.

## Quan hệ với List Rules

Access mode không phải public access rule duy nhất. Nó hoạt động cùng allow/block list rules.

Hiểu đơn giản:

- Allowlisted content được ưu tiên public.
- Blocklisted content không thể được regular visitors xem trực tiếp.
- Content không nằm trong list nào sẽ được check tiếp theo access mode.

Nếu một image bị restrict bởi cả age rating và list rules, regular visitors vẫn không thể xem original file trực tiếp.

## Recommended Settings

Với public sites:

- Enable moderation.
- Chọn access mode phù hợp với audience của site.
- Dùng Child mode hoặc Teen mode cho visitors mọi lứa tuổi.
- Tránh Adult mode nếu không muốn mature content hiển thị public.
- Review file ratings trong admin panel và adjust manually khi cần.

Với private hoặc personal sites:

- Adult mode thường ổn.
- Enable moderation nếu hữu ích.
- Review và adjust ratings trong admin panel khi cần.

## FAQ

### Files có biến mất khỏi Admin Panel sau khi đổi Access Mode không?

Không.

Access mode chỉ ảnh hưởng normal public access. Không ảnh hưởng admin panel.

### Vì sao Public Gallery hiển thị ít Images hơn sau khi chuyển sang Child Mode?

Child mode chỉ cho phép General-rated files hiển thị public. R12, R16 và R18 files bị filter ra.

### Public URLs vẫn mở Adult Images được không?

Nếu current access mode không cho phép rating đó, normal public URLs sẽ không trả original image.

### Random Image API có return Restricted Images không?

Không.

Random image API filter candidates theo current access mode.

### Old Unrated Images thì sao?

Unrated images không bị ẩn tự động chỉ vì chưa có moderation results. Bạn có thể adjust ratings sau trong admin panel.
