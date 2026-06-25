# 업로드 설정

업로드 설정은 ImgBed를 사용자의 저장소 채널과 연결합니다. 채널을 설정하면 업로드된 이미지와 파일이 선택한 서비스에 저장됩니다. 이후 ImgBed는 파일 기록, 접근 링크, 미리보기, 공개 갤러리 기능, 랜덤 이미지 API 접근, WebDAV 접근 및 관련 워크플로를 관리합니다.

사용자마다 선호하는 채널은 다를 수 있습니다. 간단한 구성으로 시작하려면 Telegram, Discord 또는 GitHub Releases가 좋은 출발점이 될 수 있습니다. 용량, 속도, 장기 안정성을 더 중요하게 생각한다면 Cloudflare R2, S3, OneDrive, Google Drive, Dropbox, Yandex, pCloud 또는 자체 WebDAV 서비스를 고려하세요.

## 시작하기 전에

- 사용할 저장소 계정 또는 API 자격 증명을 준비합니다.
- OAuth 기반 채널은 callback URL이 필요하므로 ImgBed 도메인에 접근할 수 있는지 확인합니다.
- 채널을 추가한 뒤에는 먼저 테스트 이미지를 업로드하여 파일이 올바르게 저장되고 열리는지 확인합니다.

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

- 각 업로드 채널을 설정하기 전에 필요한 항목.
- 외부 플랫폼에서 앱을 만들고, 키를 복사하거나, 토큰을 승인하는 방법.
- 채널 설정을 ImgBed에 입력하고 업로드가 정상 동작하는지 확인하는 방법.
