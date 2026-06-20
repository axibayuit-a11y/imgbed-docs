# Federated Distributed Index

Federated distributed index به چند ImgBed site اجازه می‌دهد file lists را با هم share کنند.

به زبان ساده:

- می‌توانید selected folders از site خودتان را با دیگران share کنید.
- می‌توانید به node دیگری join شوید و shared file list آن node را داخل admin panel خود sync کنید.
- Federated files بیشتر برای browsing، searching و باز کردن links هستند. این files دوباره در storage خودتان upload نمی‌شوند.

## کجا Configure کنیم

باز کنید:

```text
System Settings -> Other Settings -> Federated Distributed Index
```

![Local federation node](../../image/other/联盟图/联盟分布式索引本地节点.png)

page سه tab دارد:

| Tab | Purpose |
| --- | --- |
| Local Node | enable کردن node خودتان، confirm کردن public domain، انتخاب shared folders و update کردن outbound index |
| Nodes I Joined | مدیریت ImgBed nodes دیگری که به آن‌ها join شده‌اید |
| Nodes Joining Me | مدیریت درخواست‌های دیگران برای join شدن به node شما |

## راه‌اندازی اولیه

1. `Local Node` را باز کنید.
2. `Enable` را روشن کنید.
3. در `Sync folders`، folders موردنظر برای share را انتخاب کنید.
4. `Update Outbound Index` را بزنید.
5. اگر ImgBed domain change detect کرد، پیش از ادامه confirm کنید current domain درست است.

می‌توانید چند sync folder انتخاب کنید.

اگر sync folder list خالی باشد، همه folders share می‌شوند.

## Local Node

### Public Domain

public domain همان site URL است که nodes دیگر برای دسترسی به node شما استفاده می‌کنند.

ImgBed این را automatically detect می‌کند. لازم نیست دستی تایپ کنید. اولین بار که index را update می‌کنید، ImgBed می‌پرسد current access URL همان production domain است یا نه.

اگر بعداً domains را تغییر دهید، update index دوباره confirmation می‌خواهد.

### Sync Folders

Sync folders مشخص می‌کند چه files با federation nodes share شوند.

مثلاً اگر فقط این‌ها را انتخاب کنید:

```text
/1/
/2/
```

nodes دیگر فقط files داخل این دو directories را می‌بینند.

### Update Outbound Index

این کار file listی را update می‌کند که nodes دیگر می‌توانند از شما sync کنند.

وقتی استفاده کنید که:

- federation را برای اولین بار enable می‌کنید.
- files جدیدی upload کرده‌اید که می‌خواهید share شوند.
- sync folders را تغییر داده‌اید.
- public domain را تغییر داده‌اید و باید confirm شود.

## Nodes I Joined

`Nodes I Joined` جایی است که به nodes دیگر subscribe می‌کنید.

![Nodes I joined](../../image/other/联盟图/我加入的节点.png)

### ارسال Request برای Join شدن به Node دیگر

1. از owner دیگر invitation link بخواهید.
2. آن را داخل input box paste کنید.
3. `Request to Join` را بزنید.
4. منتظر بمانید owner دیگر در admin panel خود approve کند.

پس از approval، node status برابر approved می‌شود.

### Update Inbound Index

`Update Inbound Index` file lists را از nodesی که joined هستید sync می‌کند.

وقتی استفاده کنید که:

- owner دیگر تازه request شما را approve کرده.
- owner دیگر می‌گوید shared content update شده.
- می‌خواهید همه joined federation file lists را refresh کنید.

برای update کردن فقط یک node، روی `Update Index` در card همان node کلیک کنید.

![Update index](../../image/other/联盟图/更新索引.png)

### Unsubscribe

اگر دیگر نمی‌خواهید nodeی را sync کنید، `Unsubscribe` را بزنید.

پس از unsubscribe، federated index آن node از local site شما حذف می‌شود.

## Nodes Joining Me

`Nodes Joining Me` جایی است که requests دیگران را handle می‌کنید.

![Nodes joining me](../../image/other/联盟图/加入我的节点.png)

### ساخت Invitation Link

1. مطمئن شوید local node enabled است.
2. حداقل یک بار `Update Outbound Index` را بزنید تا ImgBed public domain را confirm کند.
3. `Nodes Joining Me` را باز کنید.
4. `Reset Invitation Link` را بزنید.
5. invitation link را copy کنید و برای owner دیگر بفرستید.

اگر invitation link خالی است، معمولاً public domain هنوز confirmed نشده. به `Local Node` برگردید و `Update Outbound Index` را بزنید.

### Handle کردن Join Requests

وقتی کسی request ارسال کند، در list مربوط به `Nodes Joining Me` ظاهر می‌شود.

| Action | Meaning |
| --- | --- |
| Approve | اجازه می‌دهد node دیگر shared file list شما را sync کند |
| Reject | join request را رد می‌کند |
| Delete | record تمام‌شده را حذف می‌کند |
| Check Status | بررسی می‌کند طرف مقابل هنوز این relationship را نگه داشته یا نه |

پس از approval، طرف مقابل همچنان باید `Update Inbound Index` را بزند تا shared files شما آنجا ظاهر شوند.

![Approve invited node](../../image/other/联盟图/邀请节点同意.png)

## Messages

بعد از approved شدن relationship، روی `Message` در node card کلیک کنید.

Messages فقط برای ارتباط درباره federation relationship است. files، tags، directories یا permissions را تغییر نمی‌دهد.

![Messages](../../image/other/联盟图/留言功能.png)

## مشاهده Federated Files

پس از کامل شدن sync، به admin file list برگردید.

بالای page بین local files و federated files جابه‌جا شوید. در federated files می‌توانید synced content را browse کنید.

Federated files بیشتر برای viewing، searching، preview و copy کردن links هستند. چون local files نیستند، نمی‌توانید آن‌ها را از site خودتان move، delete، retag یا backup کنید.

![Federated files in admin](../../image/other/联盟图/联盟管理显示效果图.png)

## FAQ

### چرا می‌گوید چون Relationship Record وجود ندارد باید Reapply کنم؟

معمولاً یعنی طرف مقابل شما را delete کرده و record را حذف کرده است، بنابراین relationship دیگر پیدا نمی‌شود. یک join request جدید submit کنید.

![Reapply when no relationship record exists](../../image/other/联盟图/无关系记录重新申请.png)

### چرا بعد از Join شدن Files را نمی‌بینم؟

بررسی کنید:

1. owner دیگر request شما را approve کرده باشد.
2. owner دیگر `Update Outbound Index` را زده باشد.
3. شما `Update Inbound Index` را زده باشید.
4. sync folders طرف مقابل شامل directoriesی باشد که می‌خواهد share کند.

### وقتی Domain Change Detected شد چه کنم؟

اگر admin panel را از production domain باز کرده‌اید، confirm کنید و ادامه دهید.

اگر از temporary address استفاده می‌کنید، cancel کنید، admin panel را با production domain دوباره باز کنید و دوباره تلاش کنید.

### Empty Sync Folder List یعنی چه؟

sync folder list خالی یعنی همه folders share می‌شوند.

برای share کردن فقط بعضی directories، آن folders را manual انتخاب کنید.

### تفاوت Outbound و Inbound Index Updates

| Button | Simple Meaning |
| --- | --- |
| Update Outbound Index | چیزی را update می‌کند که دیگران می‌توانند از من sync کنند |
| Update Inbound Index | چیزی را update می‌کند که من از دیگران sync کرده‌ام |
