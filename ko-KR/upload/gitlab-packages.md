# GitLab Packages 채널 추가

GitLab Packages 채널은 GitLab의 Generic Package Registry를 저장 위치로 사용합니다.

## 준비할 것

| 준비 항목 | 용도 |
| --- | --- |
| GitLab 계정 | 프로젝트와 Token 관리 |
| GitLab 프로젝트 | Package를 저장할 위치 |
| Access Token | Package Registry 업로드 권한 |
| Project ID | ImgBed가 대상 프로젝트를 찾는 데 사용 |

## Token 만들기

GitLab 설정에서 Access Token을 만듭니다. 필요한 권한을 선택합니다.

![Token 생성](../../image/upload/gitlab-packages/点击生成旧版令牌.png)

업로드와 읽기에 필요한 권한을 부여합니다.

![Token 권한](../../image/upload/gitlab-packages/勾选令牌权限.png)

Token은 생성 직후에만 확인할 수 있는 경우가 있으니 꼭 복사해 안전하게 보관하세요.

## ImgBed에 입력하기

업로드 설정에서 `GitLab Packages`를 선택합니다.

| 항목 | 입력 내용 |
| --- | --- |
| 채널 이름 | 예: `GitLab Packages` |
| GitLab Host | `https://gitlab.com` 또는 자체 GitLab 주소 |
| Project ID | 대상 프로젝트 ID |
| Token | 생성한 Access Token |
| Package Name | 패키지 이름 |
| Version | 버전 이름 |
| 저장 경로 | 선택 사항 |

![GitLab 설정](../../image/upload/gitlab-packages/配置渠道内容.png)

## 확인 방법

1. 저장 후 채널 카드가 표시됩니다.
2. 테스트 파일을 업로드합니다.
3. GitLab Package Registry에 파일이 등록되는지 확인합니다.
4. ImgBed 링크로 접근할 수 있는지 확인합니다.

## 자주 나는 오류

- Project ID가 잘못됨.
- Token에 Package Registry 쓰기 권한이 없음.
- 자체 GitLab Host URL이 올바르지 않음.
- 프로젝트에서 Package Registry가 비활성화되어 있음.
