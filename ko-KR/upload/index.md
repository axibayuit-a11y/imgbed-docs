# 업로드 채널 설정

ImgBed에서는 여러 저장 위치를 `채널`로 추가할 수 있습니다. 이미지, 동영상, 오디오, 기타 파일을 어디에 저장할지는 업로드 채널에서 관리합니다.

## 설정 위치

```text
시스템 설정 -> 업로드 설정
```

이곳에서 새 채널을 추가하고, 사용 여부, 용량 제한, 메모, 연결 확인 등을 관리합니다.

## 이 문서에서 다루는 채널

| 채널 | 주요 용도 |
| --- | --- |
| Cloudflare R2 | Cloudflare 오브젝트 스토리지 |
| S3 | AWS S3, Backblaze B2, MinIO 등 S3 호환 저장소 |
| Google Drive | Google Drive에 저장 |
| OneDrive | Microsoft OneDrive에 저장 |
| Dropbox | Dropbox 계정에 저장 |
| pCloud | pCloud 계정에 저장 |
| WebDAV | NAS, 클라우드 드라이브, WebDAV 지원 저장소 |
| Telegram | Telegram 채널을 저장소처럼 사용 |
| Discord | Discord 채널을 저장소처럼 사용 |
| GitHub Releases | GitHub Release Assets에 저장 |
| GitLab Packages | GitLab Generic Packages에 저장 |
| Hugging Face | Hugging Face Repository에 저장 |
| Yandex | Yandex Disk에 저장 |

## 추가 전 확인할 것

| 항목 | 설명 |
| --- | --- |
| 저장소 계정 | 실제 파일이 저장될 계정을 준비합니다 |
| API 키 / Token | 채널별 인증 정보를 준비합니다 |
| 저장 디렉터리 | 보통 `imgbed`를 기본값으로 사용합니다 |
| 용량 제한 | 용량 상한과 임계값을 사용할지 결정합니다 |
| 공개 URL | CDN이나 커스텀 도메인을 쓸 경우 미리 확인합니다 |

## 추가 후 확인

1. 채널 카드가 표시되는지 확인합니다.
2. 채널이 사용 상태인지 확인합니다.
3. 저장한 키와 디렉터리가 올바른지 확인합니다.
4. 필요한 경우 용량 조회를 실행합니다.
5. 테스트 이미지를 업로드하고 링크가 열리는지 확인합니다.

오류가 나면 먼저 인증 정보, 저장 디렉터리, 권한, API 사용 제한을 확인하세요.
