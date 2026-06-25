# GitHub Releases சேனல் சேர்க்கவும்

## தொடங்குவதற்கு முன் தேவையானவை

மூன்று விஷயங்கள் மட்டும்:

| தேவை | பயன்பாடு |
| --- | --- |
| GitHub கணக்கு | அணுகல் டோக்கன் உருவாக்கவும் repository own செய்யவும் |
| GitHub அணுகல் டோக்கன் | ImgBed GitHub API அணுக, releases உருவாக்க, கோப்புகள் பதிவேற்றம் செய்ய |
| repository பெயர் | repository name மட்டும் கொடுக்கலாம், உதா. `image` |

## அமைப்பு படிகள்

### படி 1: GitHub-ல் உள்நுழைய செய்து அணுகல் டோக்கன் உருவாக்கவும்

1. GitHub-ல் உள்நுழைய செய்யவும்.
2. மேல் வலது மூலையில் avatar கிளிக் செய்து `Settings` திறக்கவும்.
3. இடது பக்கப்பட்டி-ல் `Developer settings` திறக்கவும்.
4. `Personal access tokens` திறக்கவும்.
5. `Tokens (classic)` திறக்கவும்.
6. `Generate new token (classic)` கிளிக் செய்யவும்.
7. டோக்கன்-க்கு அடையாளம் காண எளிதான பெயர் கொடுக்கவும்.
8. பராமரிப்பு விருப்பம் படி காலாவதி தேதி தேர்வு செய்யவும்.
9. `repo` மற்றும் `workflow` scopes தேர்வு செய்யவும்.
10. டோக்கன் உருவானதும் உடனே நகலெடு செய்து சேமிக்கவும்.

![GitHub permissions-ஐ சேர்க்கவும்](../../image/upload/github-releases/添加github权限.png)

## படி 2: ImgBed-ல் GitHub Releases சேனல் நிரப்பவும்

பதிவேற்ற அமைப்புகள்-ல் `GitHub Releases` தேர்வு செய்த பிறகு:

| UI புலம் | எதை உள்ளிட வேண்டும் |
| --- | --- |
| சேனல் பெயர் | உங்கள் பெயர், உதா. `GitHubPrimary`. |
| அணுகல் டோக்கன் | இப்போது உருவாக்கிய GitHub Personal அணுகல் டோக்கன். |
| repository பெயர் | குறுகிய repo பெயர் `image`, அல்லது முழு பாதை `username/image`. |
| தனியார் repository | தேவைக்கேற்ப on/off. |
| குறிப்பு | விருப்பமான, உதா. `Primary upload channel`. |

![GitHub சேனல் கட்டமைப்பை நிரப்பவும்](../../image/upload/github-releases/填写github渠道配置.png)

## படி 3: சேனல் சேமி செய்யவும்

புலங்களை நிரப்பிய பிறகு சேமி என்பதைக் கிளிக் செய்யவும்.

அமைப்பு இதை தானாக கையாளும்:

| அமைப்பு நடத்தை | விளக்கம் |
| --- | --- |
| குறுகிய repository பெயர் | ImgBed தற்போதைய GitHub கணக்கை கண்டறிந்து, அதை முழு repository பாதையாக விரிவாக்கும். |
| முழு repository பாதை | `username/repository` பாதை உள்ளிட்டபடியே பயன்படுத்தப்படும். |
| Repository சரிபார்ப்பு | தற்போதைய தனிப்பட்ட கணக்கு பாதையாக இருந்தால், repository இல்லாதபோது ImgBed அதை தானாக உருவாக்கும். முழு பாதை கைமுறையாக கொடுக்கப்பட்டிருந்தால், அதையே பயன்படுத்தும். |
| Public/private நிலை | repository visibility தற்போதைய switch படி ஒத்திசைக்கப்படும். |

## விரைவு சரிபார்ப்பு பட்டியல்

GitHub Releases flow:

```text
Sign in to GitHub
-> Create an Access Token
-> Return to ImgBed and enter the token and repository name
-> Save
-> If only a repo name is entered, ImgBed adds the current username automatically
-> If username/repo is entered, ImgBed uses it as-is
-> Upload a test image
```
