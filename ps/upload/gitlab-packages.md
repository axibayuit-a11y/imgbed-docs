# د GitLab Packages Channel اضافه کول

## د پیل مخکې اړتیاوې

یوازې درې شیانو ته اړتیا لرئ:

| اړتیا | موخه |
| --- | --- |
| GitLab account | د access token جوړولو او project مالکیت لپاره. |
| GitLab Personal Access Token | د ImgBed لپاره GitLab API access، projects جوړول او Generic Packages ته files upload کول. |
| Project name | یوازې project name لیکلی شئ، لکه `imgbed`. |

## Setup Steps

### Step 1: GitLab ته Sign in او Access Token جوړول

1. GitLab ته sign in شئ.
2. په پورته ښي لوري کې avatar کلیک او `Preferences` پرانیزئ.
3. له left sidebar څخه `Access Tokens` پرانیزئ.
4. token ته پېژندل کېدونکی نوم ورکړئ.
5. د خپل maintenance preference له مخې expiration date وټاکئ.
6. `api` scope وټاکئ.
7. token چې جوړ شي، سملاسي یې copy او خوندي کړئ.

![Create a legacy token](../../image/upload/gitlab-packages/点击生成旧版令牌.png)

![Select token permissions](../../image/upload/gitlab-packages/勾选令牌权限.png)

## Step 2: په ImgBed کې GitLab Packages Channel ډک کړئ

په Upload Settings کې د `GitLab Packages` له ټاکلو وروسته:

| UI Field | What to Enter |
| --- | --- |
| Channel name | ستاسې ټاکلی نوم، لکه `GitLabPrimary`. |
| Access Token | همدا GitLab Personal Access Token چې جوړ مو کړی. |
| Project name | short project name لکه `imgbed`، یا full path لکه `username/imgbed`. |
| Private repository | د اړتیا له مخې on یا off کړئ. |
| Remark | اختیاري، لکه `Primary upload channel`. |

![Configure the channel](../../image/upload/gitlab-packages/配置渠道内容.png)

## Step 3: Channel Save کړئ

له fields ډکولو وروسته Save کلیک کړئ.

system دا کارونه خپله ترسره کوي:

| System Behavior | Description |
| --- | --- |
| Short project name | ImgBed current GitLab account پېژني او value full project path ته expand کوي. |
| Full project path | ImgBed د `username/project` path هماغسې کاروي لکه داخل شوی. |
| Project check | که current personal account path وي، ImgBed project اتومات جوړوي که موجود نه وي. که full path manual ورکړئ، هماغه path کاروي. |
| Public/private state | project visibility د current switch له مخې synchronized کېږي. |

## Quick Checklist

```text
GitLab ته sign in شئ
-> Access Token جوړ کړئ
-> یوازې api scope وټاکئ
-> ImgBed ته بېرته ولاړ شئ او token او project name ولیکئ
-> Save
-> که یوازې project name ورکړئ، ImgBed current username اتومات اضافه کوي
-> که username/project ورکړئ، هماغه کاروي
-> test image upload کړئ
```
