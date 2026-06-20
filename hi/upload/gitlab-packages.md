# GitLab Packages चैनल जोड़ना

## शुरू करने से पहले क्या चाहिए

सिर्फ तीन चीज़ें चाहिए:

| ज़रूरत | उपयोग |
| --- | --- |
| GitLab account | access token generate करने और project own करने के लिए। |
| GitLab Personal Access Token | ImgBed को GitLab API access, projects create और Generic Packages में files upload करने के लिए। |
| Project name | केवल project name डाल सकते हैं, जैसे `imgbed`। |

## Setup Steps

### Step 1: GitLab में sign in करें और Access Token बनाएँ

1. GitLab में sign in करें।
2. ऊपर दाएँ avatar पर क्लिक करके `Preferences` खोलें।
3. left sidebar से `Access Tokens` खोलें।
4. token को पहचानने लायक नाम दें।
5. अपनी maintenance preference के हिसाब से expiration date चुनें।
6. `api` scope चुनें।
7. token बनते ही उसे copy और save करें।

![Legacy token बनाएँ](../../image/upload/gitlab-packages/点击生成旧版令牌.png)

![Token permissions चुनें](../../image/upload/gitlab-packages/勾选令牌权限.png)

## Step 2: ImgBed में GitLab Packages channel भरें

Upload Settings में `GitLab Packages` चुनने के बाद fields ऐसे भरें:

| UI Field | क्या डालें |
| --- | --- |
| Channel name | आपका चुना हुआ नाम, जैसे `GitLabPrimary`। |
| Access Token | अभी बनाया गया GitLab Personal Access Token। |
| Project name | short project name जैसे `imgbed`, या full path जैसे `username/imgbed`। |
| Private repository | अपनी ज़रूरत के हिसाब से on या off करें। |
| Remark | optional, जैसे `Primary upload channel`। |

![Channel configure करें](../../image/upload/gitlab-packages/配置渠道内容.png)

## Step 3: Channel save करें

fields भरने के बाद Save पर क्लिक करें।

system ये details संभालेगा:

| System Behavior | Description |
| --- | --- |
| Short project name | ImgBed current GitLab account पहचानता है और value को full project path में बदलता है। |
| Full project path | ImgBed `username/project` path को जैसा डाला गया है वैसा ही use करता है। |
| Project check | current personal account path use होने पर ImgBed project न हो तो automatically create करता है। full path manually डालने पर वही path directly use करता है। |
| Public/private state | project visibility current switch के अनुसार sync होती है। |

## Quick Checklist

```text
GitLab में sign in करें
-> Access Token बनाएँ
-> केवल api scope चुनें
-> ImgBed में लौटकर token और project name डालें
-> Save
-> केवल project name डालने पर ImgBed current username automatically जोड़ता है
-> username/project डालने पर ImgBed उसे जैसा है वैसा use करता है
-> test image upload करें
```
