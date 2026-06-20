# GitLab Packages Channel যোগ করা

## শুরু করার আগে যা লাগবে

আপনার শুধু তিনটি জিনিস লাগবে:

| Requirement | Purpose |
| --- | --- |
| GitLab account | Access token generate করা এবং project ownership-এর জন্য। |
| GitLab Personal Access Token | GitLab API access, projects create এবং Generic Packages-এ files upload করতে ImgBed এটি ব্যবহার করে। |
| Project name | শুধু project name দিলেই চলে, যেমন `imgbed`। |

## Setup Steps

### Step 1: GitLab-এ Sign in করে Access Token তৈরি করুন

1. GitLab-এ sign in করুন।
2. Upper-right corner-এ avatar ক্লিক করে `Preferences` খুলুন।
3. Left sidebar থেকে `Access Tokens` খুলুন।
4. Token-এর সহজে চেনা যায় এমন নাম দিন।
5. নিজের maintenance preference অনুযায়ী expiration date বেছে নিন।
6. `api` scope নির্বাচন করুন।
7. Token তৈরি হওয়ার সঙ্গে সঙ্গে copy করে save করুন।

![Create a legacy token](../../image/upload/gitlab-packages/点击生成旧版令牌.png)

![Select token permissions](../../image/upload/gitlab-packages/勾选令牌权限.png)

## Step 2: ImgBed-এ GitLab Packages Channel পূরণ করুন

Upload Settings-এ `GitLab Packages` নির্বাচন করার পর fields এভাবে পূরণ করুন:

| UI Field | কী দেবেন |
| --- | --- |
| Channel name | আপনার পছন্দের নাম, যেমন `GitLabPrimary`। |
| Access Token | সদ্য তৈরি করা GitLab Personal Access Token। |
| Project name | Short project name যেমন `imgbed`, অথবা full path যেমন `username/imgbed`। |
| Private repository | প্রয়োজন অনুযায়ী on বা off করুন। |
| Remark | Optional, যেমন `Primary upload channel`। |

![Configure the channel](../../image/upload/gitlab-packages/配置渠道内容.png)

## Step 3: Channel Save করুন

Fields পূরণ করার পর Save ক্লিক করুন।

System এই কাজগুলো handle করবে:

| System Behavior | Description |
| --- | --- |
| Short project name | ImgBed current GitLab account identify করে value-টিকে full project path বানায়। |
| Full project path | ImgBed `username/project` path ঠিক যেমন দেওয়া হয়েছে তেমনই ব্যবহার করে। |
| Project check | Current personal account path হলে project না থাকলে ImgBed automatically তৈরি করে। Full path manually দিলে ImgBed সেটিই ব্যবহার করে। |
| Public/private state | Current switch অনুযায়ী project visibility sync হয়। |

## Quick Checklist

```text
GitLab-এ sign in করুন
-> Access Token তৈরি করুন
-> শুধু api scope নির্বাচন করুন
-> ImgBed-এ ফিরে token এবং project name দিন
-> Save
-> শুধু project name দিলে ImgBed current username automatically যোগ করবে
-> username/project দিলে ImgBed সেটিই ব্যবহার করবে
-> Test image upload করুন
```
