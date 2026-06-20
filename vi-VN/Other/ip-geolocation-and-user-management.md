# IP Geolocation và User Management

IP geolocation chuyển IP addresses trong uploader records, login devices và logs tương tự thành locations gần đúng.

Sau khi cấu hình, admin panel có thể hiển thị nguồn upload và access rõ hơn. User Management cũng cho phép block hoặc restore upload access cho IP addresses đáng ngờ.

## Cấu hình ở đâu

Mở:

```text
System Settings -> Other Settings -> IP Geolocation
```

![IP geolocation](../../image/other/ip定位/ip定位.png)

## Available Settings

Flow IP geolocation mới hỗ trợ nhiều sources thay vì phụ thuộc một map service.

| Setting | Purpose |
| --- | --- |
| IP geolocation language | Chọn display language, như English, Simplified Chinese, Japanese, French và các ngôn ngữ khác. |
| MaxMind Account ID | MaxMind account ID cho MaxMind GeoLite Web Service. |
| MaxMind License Key | MaxMind License Key. |
| Tencent Map Key | Tencent Location Service key. Hữu ích cho Chinese addresses và mainland China IPs. |
| ipapi Key | APILayer ipapi key. Hỗ trợ multilingual IP geolocation. |

Chỉ điền services bạn cần. Không bắt buộc cấu hình mọi field.

Nếu không cung cấp key, ImgBed vẫn thử built-in free sources, nhưng stability, language support và precision có thể thấp hơn service bạn tự cấu hình.

## Recommended Choices

Nếu chủ yếu cần Chinese addresses:

1. Đặt IP geolocation language là Simplified Chinese.
2. Cấu hình Tencent Map Key.
3. Có thể thêm MaxMind hoặc ipapi làm fallback sources.

Nếu chủ yếu cần English hoặc multilingual addresses:

1. Chọn language bạn cần.
2. Cấu hình MaxMind Account ID và License Key.
3. Thêm ipapi Key nếu cần multilingual results tốt hơn.

## MaxMind Setup

MaxMind cần:

```text
MaxMind Account ID
MaxMind License Key
```

Tìm account ID trong MaxMind dashboard và generate License Key từ License Keys page.

![MaxMind key config](../../image/other/ip定位/maxmind的key配置.png)

Sau khi generate, paste Account ID và License Key vào ImgBed rồi save.

Free plan của MaxMind phù hợp everyday use, nhưng có request limits. Nếu quota vượt giới hạn, ImgBed tiếp tục thử sources khả dụng khác.

## ipapi Setup

ipapi dùng APILayer API Key.

Mở ipapi console và copy API Key hiển thị ở đó.

![ipapi config](../../image/other/ip定位/ipapi配置.png)

Paste vào field `ipapi Key` trong ImgBed rồi save.

ipapi hỗ trợ multilingual IP geolocation và hữu ích khi muốn addresses hiển thị bằng selected language. Free plan cũng có request limits. Nếu quota hết, ImgBed tiếp tục thử sources khả dụng khác.

## Tencent Map Key Setup

Tencent Map Key hữu ích cho Chinese addresses, đặc biệt là mainland China IPs.

Khi tạo key trong Tencent Location Service, enable:

```text
WebServiceAPI
```

Sau khi tạo, paste key vào `Tencent Map Key` và save.

Nếu chỉ cần basic Chinese IP geolocation, Tencent Map Key là đủ để bắt đầu.

## Cần xem gì trong User Management

User Management có thể mở từ đầu admin panel.

![User management](../../image/other/用户管理显示.png)

User Management hiển thị upload activity theo IP:

| Field | Description |
| --- | --- |
| IP source | Uploader source IP. |
| Address | Location gần đúng được resolve từ IP. |
| Total upload size | Tổng file size đã upload từ IP này. |
| Upload count | Số uploads từ IP này. |
| Upload allowed | On nghĩa là uploads được phép. Off nghĩa là uploads bị block. |

Nhấn arrow bên trái để mở danh sách files đã upload bởi IP đó.

File list hiển thị file name, preview, file size, moderation result, file status và upload time. Khi uploads trông đáng ngờ, hãy expand IP trước, review files, rồi quyết định có block uploads tiếp theo không.

Nếu một IP đáng ngờ, tắt `Upload allowed`. Future uploads từ IP đó sẽ bị block.

## Search, Sort và Advanced Filters

Ở đầu User Management, search theo IP source hoặc address.

Sort theo time, upload count hoặc total upload size để tìm recent uploaders, high-frequency uploaders hoặc high-usage IPs.

Để điều tra sâu hơn, mở advanced filters.

![Advanced filters](../../image/other/用户管理高级筛选.png)

Advanced filters hỗ trợ:

| Filter | Usage |
| --- | --- |
| Time range | Hiển thị IPs đã upload files trong khoảng thời gian chọn. |
| Access status | Filter theo normal, blocked và states tương tự. |
| Allow/block list | Filter theo allowlist, blocklist hoặc unset. |
| File type | Hiển thị IPs đã upload images, videos, audio, documents, code hoặc other files. |
| File size | Filter theo uploaded file size range. |
| Age rating | Filter theo unset, General, R12+, R16+, R18 và ratings tương tự. |
| File status | Filter theo current file status để điều tra abnormal files. |

Nhấn `Apply Filters` để áp dụng. Dùng `Reset` để quay lại toàn bộ dữ liệu.

## Mobile View

Trên mobile, User Management chuyển sang card layout.

![Mobile user management](../../image/other/手机端显示用户管理效果.png)

Mỗi card hiển thị IP, address, total upload size, upload count và upload allowed switch. Bạn có thể manage users mà không cần scroll table ngang.

## Nếu Location có vẻ sai

IP geolocation là gần đúng. Nó không phải street address chính xác.

Nếu user đứng sau proxy, data center, cloud server hoặc cross-border network, location hiển thị có thể khác location thật.

Dùng feature này để hiểu rough origin, tìm abnormal uploads và hỗ trợ quyết định blocking. Không nên xem nó là precise tracking.

## Common Cases

| Case | Meaning |
| --- | --- |
| Address trống | IP có thể chưa resolve, hoặc current source temporarily unavailable. |
| Address language sai | Kiểm tra IP geolocation language và source hỗ trợ language đó đã được cấu hình chưa. |
| Address hiển thị data center | Nhiều proxies, cloud servers và crawlers xuất hiện như data center hoặc ISP addresses. |
| Upload count cao | Review IP này kỹ và block uploads nếu cần. |
| Total upload size lớn | Sort hoặc filter, expand IP rồi inspect specific files. |
| Cần restore sau khi block | Bật lại `Upload allowed`. |

## Quick Flow

```text
Mở IP Geolocation trong Other Settings
-> Chọn IP geolocation language
-> Điền MaxMind, Tencent Map hoặc ipapi credentials nếu cần
-> Save settings
-> Mở User Management
-> Review IP source, address, total upload size và upload count
-> Dùng search, sort hoặc advanced filters để tìm IPs bất thường
-> Allow hoặc block uploads tùy tình huống
```
