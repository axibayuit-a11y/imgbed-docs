# GitHub Releases Channel যোগ করা

## শুরু করার আগে যা লাগবে

আপনার শুধু তিনটি জিনিস লাগবে:

| Requirement | Purpose |
| --- | --- |
| GitHub account | Access token generate করা এবং repository ownership-এর জন্য। |
| GitHub Access Token | GitHub API access, releases create এবং files upload করতে ImgBed এটি ব্যবহার করে। |
| Repository name | শুধু repository name দিলেই চলে, যেমন `image`। |

## Setup Steps

### Step 1: GitHub-এ Sign in করে Access Token তৈরি করুন

1. GitHub-এ sign in করুন।
2. Upper-right corner-এ avatar ক্লিক করে `Settings` খুলুন।
3. Left sidebar থেকে `Developer settings` খুলুন।
4. `Personal access tokens` খুলুন।
5. `Tokens (classic)` খুলুন।
6. `Generate new token (classic)` ক্লিক করুন।
7. Token-এর সহজে চেনা যায় এমন নাম দিন।
8. নিজের maintenance preference অনুযায়ী expiration date বেছে নিন।
9. `repo` এবং `workflow` scopes নির্বাচন করুন।
10. Token তৈরি হওয়ার সঙ্গে সঙ্গে copy করে save করুন।

![Add GitHub permissions](../../image/upload/github-releases/添加github权限.png)

## Step 2: ImgBed-এ GitHub Releases Channel পূরণ করুন

Upload Settings-এ `GitHub Releases` নির্বাচন করার পর fields এভাবে পূরণ করুন:

| UI Field | কী দেবেন |
| --- | --- |
| Channel name | আপনার পছন্দের নাম, যেমন `GitHubPrimary`। |
| Access Token | সদ্য তৈরি করা GitHub Personal Access Token। |
| Repository name | Short repo name যেমন `image`, অথবা full path যেমন `username/image`। |
| Private repository | প্রয়োজন অনুযায়ী on বা off করুন। |
| Remark | Optional, যেমন `Primary upload channel`। |

![Fill in the GitHub channel configuration](../../image/upload/github-releases/填写github渠道配置.png)

## Step 3: Channel Save করুন

Fields পূরণ করার পর Save ক্লিক করুন।

System এই কাজগুলো handle করবে:

| System Behavior | Description |
| --- | --- |
| Short repository name | ImgBed current GitHub account identify করে value-টিকে full repository path বানায়। |
| Full repository path | ImgBed `username/repository` path ঠিক যেমন দেওয়া হয়েছে তেমনই ব্যবহার করে। |
| Repository check | Current personal account path হলে repository না থাকলে ImgBed automatically তৈরি করে। Full path manually দিলে ImgBed সেটিই ব্যবহার করে। |
| Public/private state | Current switch অনুযায়ী repository visibility sync হয়। |

## Quick Checklist

GitHub Releases এভাবে কাজ করে:

```text
GitHub-এ sign in করুন
-> Access Token তৈরি করুন
-> ImgBed-এ ফিরে token এবং repository name দিন
-> Save
-> শুধু repo name দিলে ImgBed current username automatically যোগ করবে
-> username/repo দিলে ImgBed সেটিই ব্যবহার করবে
-> Test image upload করুন
```
