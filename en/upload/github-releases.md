# Add a GitHub Releases Channel

## What You Need Before You Start

You only need three things:

| Requirement | Purpose |
| --- | --- |
| GitHub account | Used to generate an access token and own the repository. |
| GitHub Access Token | Used by ImgBed to access the GitHub API, create releases, and upload files. |
| Repository name | You can enter only the repository name, for example `image`. |

## Setup Steps

### Step 1: Sign in to GitHub and Create an Access Token

1. Sign in to GitHub.
2. Click your avatar in the upper-right corner and open `Settings`.
3. Open `Developer settings` from the left sidebar.
4. Open `Personal access tokens`.
5. Open `Tokens (classic)`.
6. Click `Generate new token (classic)`.
7. Give the token a recognizable name.
8. Choose an expiration date based on your own maintenance preference.
9. Select the `repo` and `workflow` scopes.
10. Copy and save the token immediately after it is created.

![Add GitHub permissions](../../image/upload/github-releases/添加github权限.png)

## Step 2: Fill in the GitHub Releases Channel in ImgBed

After selecting `GitHub Releases` in Upload Settings, fill in the fields as follows:

| UI Field | What to Enter |
| --- | --- |
| Channel name | A name you choose, such as `GitHubPrimary`. |
| Access Token | The GitHub Personal Access Token you just created. |
| Repository name | Either a short repo name such as `image`, or a full path such as `username/image`. |
| Private repository | Turn on or off based on your needs. |
| Remark | Optional, for example `Primary upload channel`. |

![Fill in the GitHub channel configuration](../../image/upload/github-releases/填写github渠道配置.png)

## Step 3: Save the Channel

After filling in the fields, click Save.

The system will handle these details:

| System Behavior | Description |
| --- | --- |
| Short repository name | ImgBed identifies the current GitHub account and expands the value into a full repository path. |
| Full repository path | ImgBed uses the `username/repository` path exactly as entered. |
| Repository check | If you use the current personal account path, ImgBed automatically creates the repository when it does not exist. If you enter a full path manually, ImgBed uses that path directly. |
| Public/private state | Repository visibility is synchronized according to the current switch. |

## Quick Checklist

GitHub Releases works like this:

```text
Sign in to GitHub
-> Create an Access Token
-> Return to ImgBed and enter the token and repository name
-> Save
-> If only a repo name is entered, ImgBed adds the current username automatically
-> If username/repo is entered, ImgBed uses it as-is
-> Upload a test image
```
