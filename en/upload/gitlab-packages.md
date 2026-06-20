# Add a GitLab Packages Channel

## What You Need Before You Start

You only need three things:

| Requirement | Purpose |
| --- | --- |
| GitLab account | Used to generate an access token and own the project. |
| GitLab Personal Access Token | Used by ImgBed to access the GitLab API, create projects, and upload files to Generic Packages. |
| Project name | You can enter only the project name, for example `imgbed`. |

## Setup Steps

### Step 1: Sign in to GitLab and Create an Access Token

1. Sign in to GitLab.
2. Click your avatar in the upper-right corner and open `Preferences`.
3. Open `Access Tokens` from the left sidebar.
4. Give the token a recognizable name.
5. Choose an expiration date based on your own maintenance preference.
6. Select the `api` scope.
7. Copy and save the token immediately after it is created.

![Create a legacy token](../../image/upload/gitlab-packages/点击生成旧版令牌.png)

![Select token permissions](../../image/upload/gitlab-packages/勾选令牌权限.png)

## Step 2: Fill in the GitLab Packages Channel in ImgBed

After selecting `GitLab Packages` in Upload Settings, fill in the fields as follows:

| UI Field | What to Enter |
| --- | --- |
| Channel name | A name you choose, such as `GitLabPrimary`. |
| Access Token | The GitLab Personal Access Token you just created. |
| Project name | Either a short project name such as `imgbed`, or a full path such as `username/imgbed`. |
| Private repository | Turn on or off based on your needs. |
| Remark | Optional, for example `Primary upload channel`. |

![Configure the channel](../../image/upload/gitlab-packages/配置渠道内容.png)

## Step 3: Save the Channel

After filling in the fields, click Save.

The system will handle these details:

| System Behavior | Description |
| --- | --- |
| Short project name | ImgBed identifies the current GitLab account and expands the value into a full project path. |
| Full project path | ImgBed uses the `username/project` path exactly as entered. |
| Project check | If you use the current personal account path, ImgBed automatically creates the project when it does not exist. If you enter a full path manually, ImgBed uses that path directly. |
| Public/private state | Project visibility is synchronized according to the current switch. |

## Quick Checklist

```text
Sign in to GitLab
-> Create an Access Token
-> Select only the api scope
-> Return to ImgBed and enter the token and project name
-> Save
-> If only a project name is entered, ImgBed adds the current username automatically
-> If username/project is entered, ImgBed uses it as-is
-> Upload a test image
```
