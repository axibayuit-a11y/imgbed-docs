# GitLab Packages Channel சேர்க்கவும்

## தொடங்குவதற்கு முன் தேவையானவை

மூன்று விஷயங்கள் மட்டும்:

| தேவை | பயன்பாடு |
| --- | --- |
| GitLab account | access token உருவாக்கவும் project own செய்யவும் |
| GitLab Personal Access Token | ImgBed GitLab API அணுக, projects உருவாக்க, Generic Packages-க்கு files upload செய்ய |
| Project name | project name மட்டும் கொடுக்கலாம், உதா. `imgbed` |

## Setup Steps

### Step 1: GitLab-ல் Sign in செய்து Access Token உருவாக்கவும்

1. GitLab-ல் sign in செய்யவும்.
2. மேல் வலது மூலையில் avatar கிளிக் செய்து `Preferences` திறக்கவும்.
3. left sidebar-ல் `Access Tokens` திறக்கவும்.
4. token-க்கு அடையாளம் காண எளிதான பெயர் கொடுக்கவும்.
5. maintenance preference படி expiration date தேர்வு செய்யவும்.
6. `api` scope தேர்வு செய்யவும்.
7. token உருவானதும் உடனே copy செய்து சேமிக்கவும்.

![Create a legacy token](../../image/upload/gitlab-packages/点击生成旧版令牌.png)

![Select token permissions](../../image/upload/gitlab-packages/勾选令牌权限.png)

## Step 2: ImgBed-ல் GitLab Packages Channel நிரப்பவும்

Upload Settings-ல் `GitLab Packages` தேர்வு செய்த பிறகு:

| UI Field | What to Enter |
| --- | --- |
| Channel name | உங்கள் பெயர், உதா. `GitLabPrimary`. |
| Access Token | இப்போது உருவாக்கிய GitLab Personal Access Token. |
| Project name | short project name `imgbed`, அல்லது full path `username/imgbed`. |
| Private repository | தேவைக்கேற்ப on/off. |
| Remark | optional, உதா. `Primary upload channel`. |

![Configure the channel](../../image/upload/gitlab-packages/配置渠道内容.png)

## Step 3: Channel Save செய்யவும்

fields நிரப்பிய பிறகு Save கிளிக் செய்யவும்.

system இதை தானாக கையாளும்:

| System Behavior | Description |
| --- | --- |
| Short project name | ImgBed current GitLab account கண்டறிந்து full project path ஆக expand செய்கிறது. |
| Full project path | `username/project` path-ஐ உள்ளிட்டபடியே பயன்படுத்தும். |
| Project check | current personal account path என்றால் project இல்லாதபோது ImgBed தானாக create செய்யும். full path manual என்றால் அதையே பயன்படுத்தும். |
| Public/private state | project visibility current switch படி synchronized ஆகும். |

## Quick Checklist

```text
GitLab-ல் sign in செய்யவும்
-> Access Token உருவாக்கவும்
-> api scope மட்டும் தேர்வு செய்யவும்
-> ImgBed-க்கு திரும்பி token மற்றும் project name நிரப்பவும்
-> Save
-> project name மட்டும் இருந்தால் ImgBed current username சேர்க்கும்
-> username/project இருந்தால் அதையே பயன்படுத்தும்
-> test image upload செய்யவும்
```
