# GitLab Packages சேனல் சேர்க்கவும்

## தொடங்குவதற்கு முன் தேவையானவை

மூன்று விஷயங்கள் மட்டும்:

| தேவை | பயன்பாடு |
| --- | --- |
| GitLab கணக்கு | அணுகல் டோக்கன் உருவாக்கவும் திட்டம் own செய்யவும் |
| GitLab Personal அணுகல் டோக்கன் | ImgBed GitLab API அணுக, திட்டம்s உருவாக்க, Generic Packages-க்கு கோப்புகள் பதிவேற்றம் செய்ய |
| திட்டப் பெயர் | திட்டம் name மட்டும் கொடுக்கலாம், உதா. `imgbed` |

## அமைப்பு படிகள்

### படி 1: GitLab-ல் உள்நுழைய செய்து அணுகல் டோக்கன் உருவாக்கவும்

1. GitLab-ல் உள்நுழைய செய்யவும்.
2. மேல் வலது மூலையில் avatar கிளிக் செய்து `Preferences` திறக்கவும்.
3. இடது பக்கப்பட்டி-ல் `Access Tokens` திறக்கவும்.
4. டோக்கன்-க்கு அடையாளம் காண எளிதான பெயர் கொடுக்கவும்.
5. பராமரிப்பு விருப்பம் படி காலாவதி தேதி தேர்வு செய்யவும்.
6. `api` scope தேர்வு செய்யவும்.
7. டோக்கன் உருவானதும் உடனே நகலெடு செய்து சேமிக்கவும்.

![legacy டோக்கன் உருவாக்கவும்](../../image/upload/gitlab-packages/点击生成旧版令牌.png)

![Select டோக்கன் permissions](../../image/upload/gitlab-packages/勾选令牌权限.png)

## படி 2: ImgBed-ல் GitLab Packages சேனல் நிரப்பவும்

பதிவேற்ற அமைப்புகள்-ல் `GitLab Packages` தேர்வு செய்த பிறகு:

| UI புலம் | எதை உள்ளிட வேண்டும் |
| --- | --- |
| சேனல் பெயர் | உங்கள் பெயர், உதா. `GitLabPrimary`. |
| அணுகல் டோக்கன் | இப்போது உருவாக்கிய GitLab Personal அணுகல் டோக்கன். |
| திட்டப் பெயர் | குறுகிய திட்டப் பெயர் `imgbed`, அல்லது முழு பாதை `username/imgbed`. |
| தனியார் repository | தேவைக்கேற்ப on/off. |
| குறிப்பு | விருப்பமான, உதா. `Primary upload channel`. |

![சேனலை கட்டமைக்கவும்](../../image/upload/gitlab-packages/配置渠道内容.png)

## படி 3: சேனல் சேமி செய்யவும்

புலங்களை நிரப்பிய பிறகு சேமி என்பதைக் கிளிக் செய்யவும்.

அமைப்பு இதை தானாக கையாளும்:

| அமைப்பு நடத்தை | விளக்கம் |
| --- | --- |
| குறுகிய திட்டப் பெயர் | ImgBed தற்போதைய GitLab கணக்கை கண்டறிந்து, அதை முழு திட்டப் பாதையாக விரிவாக்கும். |
| முழு திட்டப் பாதை | `username/project` பாதை உள்ளிட்டபடியே பயன்படுத்தப்படும். |
| திட்டச் சரிபார்ப்பு | தற்போதைய தனிப்பட்ட கணக்கு பாதையாக இருந்தால், திட்டம் இல்லாதபோது ImgBed அதை தானாக உருவாக்கும். முழு பாதை கைமுறையாக கொடுக்கப்பட்டிருந்தால், அதையே பயன்படுத்தும். |
| Public/private நிலை | திட்ட visibility தற்போதைய switch படி ஒத்திசைக்கப்படும். |

## விரைவு சரிபார்ப்பு பட்டியல்

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
