# افزودن pCloud Channel

## مناسب برای

- pCloud account دارید و می‌خواهید ImgBed images را در pCloud ذخیره کند.
- مشکلی ندارید که pCloud account email و password به‌عنوان channel credentials استفاده شوند.

## ابتدا چه چیزهایی لازم است

| مورد | چرا لازم است |
| --- | --- |
| pCloud account email | برای sign in به pCloud API |
| pCloud password | برای sign in به pCloud API |
| API host | پیش‌فرض `api.pcloud.com`. برای EU accounts می‌توان از `eapi.pcloud.com` استفاده کرد. |
| Storage directory | محل ذخیره files. پیش‌فرض `imgbed`. |

## کجا اضافه کنیم

1. System Settings را باز کنید.
2. Upload Settings را باز کنید.
3. از گوشه بالا سمت راست `Add Channel` را بزنید.
4. `pCloud` را انتخاب کنید.

## Field Reference

| Field | Purpose | Required |
| --- | --- | --- |
| Channel name | شناسایی این pCloud channel، مثل `Personal pCloud` | Yes |
| Account email | pCloud login email شما | Yes |
| Password | pCloud password شما | Yes |
| API host | pCloud API host. پیش‌فرض `api.pcloud.com`. | No |
| Storage directory | directory ذخیره files. پیش‌فرض `imgbed`. | No |

بر اساس account region، API host را انتخاب کنید:

| Account Region | API Host |
| --- | --- |
| Default / US | `api.pcloud.com` |
| Europe | `eapi.pcloud.com` |

## مراحل setup

1. Upload Settings را باز کنید.
2. `Add Channel` را بزنید.
3. `pCloud` را انتخاب کنید.
4. channel name قابل‌تشخیص وارد کنید.
5. pCloud account email را وارد کنید.
6. pCloud password را وارد کنید.
7. API host را `api.pcloud.com` نگه دارید، یا برای EU account از `eapi.pcloud.com` استفاده کنید.
8. storage directory را `imgbed` نگه دارید، یا folder دلخواه وارد کنید.
9. channel را save کنید.

![Configure channel](../../image/upload/pcloud/配置渠道.png)

## روش بررسی

| Check | Expected Result |
| --- | --- |
| Channel card | پس از Save، pCloud channel card دیده شود. |
| Channel switch | switch روی card enabled بماند. |
| Email display | card، connected pCloud email را نشان دهد. |
| Quota query | پس از query موفق، used و total capacity نمایش داده شود. |
| Upload test | test image در configured pCloud storage directory دیده شود. |

![Quota query success](../../image/upload/pcloud/查询额度成功.png)

## Troubleshooting

### چرا OAuth2 نیست؟

pCloud OAuth2 به‌صورت پیش‌فرض self-service نیست. باید به pCloud ایمیل بزنید و بخواهید enable شود.

flow فعلی pCloud OAuth2 همچنین short-lived upload link workflow موردنیاز ImgBed را پشتیبانی نمی‌کند، بنابراین این channel از account email و password login استفاده می‌کند.

### کدام API Host را استفاده کنم؟

Default:

```text
api.pcloud.com
```

برای EU accounts:

```text
eapi.pcloud.com
```

## Quick Flow

```text
pCloud email و password را آماده کنید
-> Upload Settings را باز کنید
-> Add Channel
-> pCloud را انتخاب کنید
-> channel name / email / password را وارد کنید
-> اگر account شما در Europe نیست، API host را api.pcloud.com نگه دارید
-> اگر folder دیگری لازم ندارید، storage directory را imgbed نگه دارید
-> Save
-> quota query
-> test image upload
```
