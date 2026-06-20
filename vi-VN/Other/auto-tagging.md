# Auto Tagging

Auto tagging được cấu hình tại:

```text
System Settings -> Other Settings -> Auto Tagging
```

Tính năng này tự động tạo image tags, hữu ích cho search, random image filtering, public gallery filtering và age-rating access control.

## Auto Tagging làm được gì

| Feature | Description |
| --- | --- |
| Generate content tags | Thêm tags cho people, scenes, objects, art style và visual content tương tự. |
| Generate character tags | Hữu ích cho anime images và illustrations. |
| Add orientation tags | Thêm `landscape`, `portrait` hoặc `square`. |
| Add image rating | Lưu kết quả rating `G/S/Q/E` cho general, sensitive, questionable hoặc explicit content. |
| Auto-tag on upload | Newly uploaded images tự động đi vào tagging flow. |
| Batch tagging | Thêm tags cho old images trong tất cả folders hoặc selected folders. |

## Cần chuẩn bị trước

Chuẩn bị ít nhất một Hugging Face Space URL có thể truy cập.

Cách recommended là duplicate Space `wd-tagger` của SmilingWolf vào Hugging Face account của bạn:

```text
https://huggingface.co/spaces/SmilingWolf/wd-tagger
```

Bạn có thể tạm dùng public Space, nhưng public Spaces được nhiều users dùng chung nên có thể queue, chậm hoặc unavailable. Space duplicate dưới account của bạn ổn định hơn cho auto tagging dài hạn.

## Duplicate Space của SmilingWolf

1. Sign in vào Hugging Face.
2. Mở `https://huggingface.co/spaces/SmilingWolf/wd-tagger`.

![SmilingWolf public Space](../../image/other/微笑狼的公开仓库.png)

3. Nhấn menu ba chấm ở góc trên bên phải.
4. Chọn `Duplicate this Space`.
5. Giữ Space name mặc định hoặc chọn tên riêng, ví dụ `wd-tagger`.
6. Đặt visibility là `Public`. Public Spaces dễ để ImgBed call hơn.
7. Ban đầu giữ default free hardware. Chỉ upgrade sau nếu queueing rõ rệt.
8. Create Space và chờ build xong.

Sau khi build xong, mở Space page của bạn. URL thường có dạng:

```text
https://huggingface.co/spaces/your-name/wd-tagger
```

Copy browser URL và paste vào `Space URLs` của ImgBed.

## Điền nhiều Space URLs

Mỗi dòng nhập một Space URL.

Examples:

| Value | Description |
| --- | --- |
| `https://huggingface.co/spaces/SmilingWolf/wd-tagger` | SmilingWolf public Space. Phù hợp để test tạm thời. |
| `https://huggingface.co/spaces/lintonxue00/wd-tagger` | Copied Space page URL. |
| `https://huggingface.co/spaces/your-name/wd-tagger` | Space bạn tự duplicate. |

Bạn có thể nhập nhiều URLs. ImgBed dùng nhiều Spaces cùng lúc, giúp cải thiện speed.

Nếu một Space temporarily unavailable, các Space khác vẫn có thể tiếp tục processing.

## Settings

| Option | Recommendation |
| --- | --- |
| `Space URLs` | Nhập Space URLs đã chuẩn bị. Cần ít nhất một URL. |
| Target folder | Để trống cho tất cả folders. Chỉ chọn folder khi muốn process một directory cụ thể. |
| Recognition model | Giữ mặc định `wd-swinv2-tagger-v3`. |
| General tag threshold | Default phù hợp với hầu hết images. Giá trị thấp tạo nhiều tags hơn; giá trị cao tạo ít tags hơn. |
| Character tag threshold | Default khá thận trọng và giúp tránh character tags sai. |
| `MCut` automatic threshold | Ban đầu để off. Bật khi muốn model tự quyết định số lượng tags. |
| Auto-tag on upload | Bật nếu muốn newly uploaded images tự động có tags. |
| Start tagging | Batch-tag old images thủ công. |

## Recommended Starting Values

| Option | Recommended Value |
| --- | --- |
| Recognition model | `wd-swinv2-tagger-v3` |
| General tag threshold | `0.35` |
| Character tag threshold | `0.85` |
| `MCut` | Ban đầu Off |
| Auto-tag on upload | Enable nếu cần |

Nếu tags quá nhiều, tăng nhẹ general threshold.

Nếu tags quá ít, giảm nhẹ general threshold.

## Batch Tagging

1. Điền `Space URLs`.
2. Chọn target folder.
3. Nhấn start tagging.
4. Chờ progress hoàn tất.

Nếu target folder trống, ImgBed process tất cả folders.

Batch tagging phù hợp với old images. Với new images, enable auto-tag on upload để không cần chạy thủ công mỗi lần.

## Auto-Tag on Upload

Sau khi auto-tag on upload được bật, newly uploaded images tự động call `Space URLs` đã cấu hình.

Phù hợp cho sử dụng lâu dài.

Nếu Space đang queue, upload vẫn có thể hoàn tất trước và tagging tiếp tục sau đó.

## Images nào được process

Auto tagging chủ yếu process image files.

Images đã có đủ tags, orientation, rating, width và height sẽ bị skip để tránh Space calls không cần thiết.

ImgBed chỉ điền thông tin còn thiếu khi có thể. Ví dụ, nếu chỉ thiếu orientation, nó sẽ cố thêm orientation mà không gọi full content tag flow.

## FAQ

### Vì sao nên duplicate Space riêng?

Public Spaces được nhiều users dùng chung. Space duplicate của bạn chủ yếu phục vụ ImgBed site của bạn nên thường nhanh và đáng tin cậy hơn.

### Space liên tục Starting Up

Sau lần tạo đầu tiên, hoặc sau thời gian idle dài, Space có thể cần thời gian để start.

Hãy mở Space page trước. Khi nó nhận diện image bình thường, quay lại ImgBed và start tagging.

### Copy Space URL thế nào?

Mở Hugging Face Space page của bạn và copy browser address.

Examples:

```text
https://huggingface.co/spaces/lintonxue00/wd-tagger
https://huggingface.co/spaces/SmilingWolf/wd-tagger
```

### Có thể thêm nhiều Spaces không?

Có. Nhập một Space URL mỗi dòng.

Multiple Spaces process images cùng nhau và hữu ích khi có nhiều images.

### Vì sao Tags bằng English?

SmilingWolf models output English tags. Đây là behavior bình thường.

Tags chủ yếu dùng cho search, filtering, random image API và public gallery filters.

### Rating Tags dùng để làm gì?

Rating results làm việc cùng access mode trong Security Settings.

Ví dụ, khi visitor access bị giới hạn theo age rating, public browsing và random image features sẽ filter images theo các rules đó.

## Quick Flow

```text
Sign in vào Hugging Face
-> Mở SmilingWolf/wd-tagger
-> Duplicate this Space
-> Chờ Space build xong
-> Copy Space URL của bạn
-> Điền Space URLs trong ImgBed
-> Chọn model và thresholds
-> Start tagging hoặc enable auto-tag on upload
```
