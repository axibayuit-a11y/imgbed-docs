# pCloud Channel যোগ করা

## সবচেয়ে ভালো যখন

- আপনার pCloud account আছে এবং ImgBed images pCloud-এ store করতে চান।
- Channel credentials হিসেবে pCloud account email এবং password ব্যবহার করতে আপনার আপত্তি নেই।

## আগে যা লাগবে

| Requirement | কেন লাগবে |
| --- | --- |
| pCloud account email | pCloud API-তে sign in করতে লাগে |
| pCloud password | pCloud API-তে sign in করতে লাগে |
| API host | Default `api.pcloud.com`। EU accounts `eapi.pcloud.com` ব্যবহার করতে পারে। |
| Storage directory | Files যেখানে রাখা হবে। Default `imgbed`। |

## কোথায় যোগ করবেন

1. System Settings খুলুন।
2. Upload Settings খুলুন।
3. উপরের ডান পাশে `Add Channel` ক্লিক করুন।
4. `pCloud` নির্বাচন করুন।

## Field Reference

| Field | Purpose | Required |
| --- | --- | --- |
| Channel name | এই pCloud channel identify করে, যেমন `Personal pCloud` | Yes |
| Account email | আপনার pCloud login email | Yes |
| Password | আপনার pCloud password | Yes |
| API host | pCloud API host। Default `api.pcloud.com`। | No |
| Storage directory | Files সংরক্ষণের directory। Default `imgbed`। | No |

Account region অনুযায়ী API host নির্বাচন করুন:

| Account Region | API Host |
| --- | --- |
| Default / US | `api.pcloud.com` |
| Europe | `eapi.pcloud.com` |

## Setup Steps

1. Upload Settings খুলুন।
2. `Add Channel` ক্লিক করুন।
3. `pCloud` নির্বাচন করুন।
4. চেনা যায় এমন channel name দিন।
5. আপনার pCloud account email দিন।
6. pCloud password দিন।
7. API host `api.pcloud.com` রাখুন, অথবা EU account হলে `eapi.pcloud.com` ব্যবহার করুন।
8. Storage directory `imgbed` রাখুন, অথবা আপনার preferred folder দিন।
9. Channel save করুন।

![Configure channel](../../image/upload/pcloud/配置渠道.png)

## কীভাবে যাচাই করবেন

| Check | Expected Result |
| --- | --- |
| Channel card | Save করার পর pCloud channel card দেখা যায়। |
| Channel switch | Card-এর switch enabled থাকে। |
| Email display | Card connected pCloud email দেখায়। |
| Quota query | Successful query-এর পর used এবং total capacity দেখায়। |
| Upload test | Test image configured pCloud storage directory-তে দেখা যায়। |

![Quota query success](../../image/upload/pcloud/查询额度成功.png)

## Troubleshooting

### OAuth2 নয় কেন?

pCloud OAuth2 defaultভাবে self-service নয়। এটি enable করতে pCloud-কে email করতে হয়।

বর্তমান pCloud OAuth2 flow ImgBed-এর প্রয়োজনীয় short-lived upload link workflow-ও support করে না, তাই এই channel account email এবং password login ব্যবহার করে।

### কোন API Host ব্যবহার করব?

Default:

```text
api.pcloud.com
```

EU accounts-এর জন্য:

```text
eapi.pcloud.com
```

## Quick Flow

```text
pCloud email এবং password প্রস্তুত করুন
-> Upload Settings খুলুন
-> Add Channel
-> pCloud নির্বাচন করুন
-> Channel name / email / password পূরণ করুন
-> Account Europe-এ না হলে API host api.pcloud.com রাখুন
-> অন্য folder দরকার না হলে storage directory imgbed রাখুন
-> Save
-> Query quota
-> Test image upload করুন
```
