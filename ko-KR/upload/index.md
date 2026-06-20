# 업로드 설정

업로드 설정은 ImgBed를 사용자의 저장소 채널과 연결하는 곳입니다. 설정이 끝나면 업로드된 이미지와 파일은 선택한 서비스에 저장되고, ImgBed는 접근 링크, 파일 기록, 미리보기, 공개 갤러리, 랜덤 이미지 API, WebDAV 접근 같은 기능과 함께 이를 관리합니다.

사용 방식에 따라 알맞은 채널이 다릅니다. 빠르게 시작하려면 Telegram, Discord, GitHub Releases가 편합니다. 용량, 속도, 장기 안정성을 더 중요하게 본다면 Cloudflare R2, S3, OneDrive, Google Drive, Dropbox, Yandex, pCloud 또는 자체 WebDAV 서비스를 고려하세요.

## 시작하기 전에

- 사용할 저장소 계정이나 API 인증 정보를 준비하세요.
- ImgBed 도메인이 정상적으로 접속되는지 확인하세요. OAuth 기반 채널은 callback URL이 필요합니다.
- 채널을 추가한 뒤에는 테스트 이미지를 먼저 업로드해 파일 저장과 접근이 정상인지 확인하는 것이 좋습니다.

## 채널 목록

- [Telegram](./telegram.md)
- [Cloudflare R2](./cloudflare-r2.md)
- [S3](./s3.md)
- [WebDAV](./webdav.md)
- [Discord](./discord.md)
- [Hugging Face](./huggingface.md)
- [GitHub Releases](./github-releases.md)
- [GitLab Packages](./gitlab-packages.md)
- [OneDrive](./onedrive.md)
- [Google Drive](./google-drive.md)
- [Dropbox](./dropbox.md)
- [Yandex](./yandex.md)
- [pCloud](./pcloud.md)

## 이 장에서 다루는 내용

- 각 업로드 채널을 설정하기 전에 필요한 정보.
- 외부 플랫폼에서 앱을 만들고 키나 Token을 받는 방법.
- ImgBed에 채널 설정을 입력하고 업로드가 정상 동작하는지 확인하는 방법.
