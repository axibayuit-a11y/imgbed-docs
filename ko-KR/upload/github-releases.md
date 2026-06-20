# GitHub Releases 채널 추가

GitHub Releases 채널은 GitHub 저장소의 Release Assets를 파일 저장 위치로 사용합니다.

## 적합한 경우

- 이미 GitHub를 자주 사용하고 있을 때.
- 소규모 이미지나 배포 파일을 Release Assets에 두고 싶을 때.
- GitHub Token으로 관리 가능한 저장 위치를 추가하고 싶을 때.

## 준비할 것

| 준비 항목 | 용도 |
| --- | --- |
| GitHub 계정 | 저장소와 Token 관리 |
| 저장소 | Release를 둘 위치 |
| Personal Access Token | Release Assets 업로드 권한 |
| Release 태그 | Assets가 연결될 Release |

## Token 권한

GitHub Personal Access Token에는 대상 저장소의 Release를 조작할 수 있는 권한이 필요합니다.

![GitHub 권한](../../image/upload/github-releases/添加github权限.png)

비공개 저장소를 사용한다면 비공개 저장소 접근 권한도 포함해야 합니다.

## ImgBed에 입력하기

업로드 설정에서 `GitHub Releases`를 선택합니다.

| 항목 | 입력 내용 |
| --- | --- |
| 채널 이름 | 예: `GitHub Release` |
| Owner | 저장소 소유자 |
| Repo | 저장소 이름 |
| Token | GitHub Personal Access Token |
| Release Tag | Assets를 둘 Release 태그 |
| 저장 경로 | 선택 사항 |

![GitHub 설정](../../image/upload/github-releases/填写github渠道配置.png)

## 확인 방법

1. 저장 후 채널 카드가 표시됩니다.
2. 테스트 이미지를 업로드합니다.
3. 대상 저장소의 Release Assets에 파일이 추가되는지 확인합니다.
4. 반환된 링크가 열리는지 확인합니다.

## 주의할 점

- GitHub Releases는 대량 파일 저장이나 고트래픽 배포용 전문 스토리지가 아닙니다.
- Token 권한은 대상 저장소로 제한하는 것이 안전합니다.
- Release나 Assets를 GitHub에서 직접 삭제하면 ImgBed 링크가 열리지 않을 수 있습니다.
