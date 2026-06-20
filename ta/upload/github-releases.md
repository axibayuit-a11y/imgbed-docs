# GitHub Releases Channel சேர்க்கவும்

## தொடங்குவதற்கு முன் தேவையானவை

மூன்று விஷயங்கள் மட்டும்:

| தேவை | பயன்பாடு |
| --- | --- |
| GitHub account | access token உருவாக்கவும் repository own செய்யவும் |
| GitHub Access Token | ImgBed GitHub API அணுக, releases உருவாக்க, files upload செய்ய |
| Repository name | repository name மட்டும் கொடுக்கலாம், உதா. `image` |

## Setup Steps

### Step 1: GitHub-ல் Sign in செய்து Access Token உருவாக்கவும்

1. GitHub-ல் sign in செய்யவும்.
2. மேல் வலது மூலையில் avatar கிளிக் செய்து `Settings` திறக்கவும்.
3. left sidebar-ல் `Developer settings` திறக்கவும்.
4. `Personal access tokens` திறக்கவும்.
5. `Tokens (classic)` திறக்கவும்.
6. `Generate new token (classic)` கிளிக் செய்யவும்.
7. token-க்கு அடையாளம் காண எளிதான பெயர் கொடுக்கவும்.
8. maintenance preference படி expiration date தேர்வு செய்யவும்.
9. `repo` மற்றும் `workflow` scopes தேர்வு செய்யவும்.
10. token உருவானதும் உடனே copy செய்து சேமிக்கவும்.

![Add GitHub permissions](../../image/upload/github-releases/添加github权限.png)

## Step 2: ImgBed-ல் GitHub Releases Channel நிரப்பவும்

Upload Settings-ல் `GitHub Releases` தேர்வு செய்த பிறகு:

| UI Field | What to Enter |
| --- | --- |
| Channel name | உங்கள் பெயர், உதா. `GitHubPrimary`. |
| Access Token | இப்போது உருவாக்கிய GitHub Personal Access Token. |
| Repository name | short repo name `image`, அல்லது full path `username/image`. |
| Private repository | தேவைக்கேற்ப on/off. |
| Remark | optional, உதா. `Primary upload channel`. |

![Fill in the GitHub channel configuration](../../image/upload/github-releases/填写github渠道配置.png)

## Step 3: Channel Save செய்யவும்

fields நிரப்பிய பிறகு Save கிளிக் செய்யவும்.

system இதை தானாக கையாளும்:

| System Behavior | Description |
| --- | --- |
| Short repository name | ImgBed current GitHub account கண்டறிந்து full repository path ஆக expand செய்கிறது. |
| Full repository path | `username/repository` path-ஐ உள்ளிட்டபடியே பயன்படுத்தும். |
| Repository check | current personal account path என்றால் repository இல்லாதபோது ImgBed தானாக create செய்யும். full path manual என்றால் அதையே பயன்படுத்தும். |
| Public/private state | repository visibility current switch படி synchronized ஆகும். |

## Quick Checklist

GitHub Releases flow:

```text
GitHub-ல் sign in செய்யவும்
-> Access Token உருவாக்கவும்
-> ImgBed-க்கு திரும்பி token மற்றும் repository name நிரப்பவும்
-> Save
-> repo name மட்டும் இருந்தால் ImgBed current username சேர்க்கும்
-> username/repo இருந்தால் அதையே பயன்படுத்தும்
-> test image upload செய்யவும்
```
