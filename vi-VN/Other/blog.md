# Blog

Blog feature thêm một blog page độc lập vào ImgBed site của bạn.

Sau khi bật, visitors có thể mở:

```text
https://your-domain.com/blog/
```

![Blog homepage](../../image/other/博客/博客首页.png)

Blog được điều chỉnh từ open-source project [LyraVoid/Mizuki](https://github.com/LyraVoid/Mizuki). ImgBed rewrite và tích hợp nó với Vue để chạy như một phần của image hosting site.

## Cấu hình ở đâu

Blog settings nằm tại:

```text
System Settings -> Other Settings -> Blog
```

![Blog settings](../../image/other/博客/QQ20260611-221702.png)

## First-Time Setup

1. Bật `Enable`.
2. Chọn GitHub account dùng để lưu blog configuration.
3. Nhấn `Update Blog`.
4. Chờ success message.
5. Mở `https://your-domain.com/blog/` để xem blog.

Khi dùng lần đầu, ImgBed sẽ chuẩn bị một private GitHub repository dưới account đã chọn:

```text
imgbed-blog-config
```

Repository này lưu blog settings và article content.

## Viết Posts

Edit blog posts trong private GitHub repository:

```text
imgbed-blog-config
```

Typical workflow:

1. Mở GitHub.
2. Vào private repository `imgbed-blog-config`.
3. Edit hoặc add post files.
4. Commit changes.
5. Quay lại ImgBed admin panel và nhấn `Update Blog`, hoặc nhấn logo ở góc trên bên trái blog homepage ba lần để trigger blog update.

`Update Blog` không overwrite content bạn đã viết. Nó chỉ initialize repository khi cần và refresh blog cache.

## Supported Features

Blog hỗ trợ các tính năng blog phổ biến như post lists, categories, tags, archives, search, dark mode và language switching.

Nó cũng hỗ trợ comments và visit statistics.

![Blog comments](../../image/other/博客/支持留言.png)

Comments xuất hiện dưới posts. Visitors có thể submit avatar, nickname, email và comment content.

Visit statistics hiển thị post views và site visits, giúp bạn hiểu blog traffic.

## URL

Blog luôn được serve dưới `/blog/`.

Ví dụ, nếu ImgBed domain là:

```text
https://image.example.com
```

Blog URL sẽ là:

```text
https://image.example.com/blog/
```

Sau khi blog bị disabled, visitors không thể access blog page nữa.
