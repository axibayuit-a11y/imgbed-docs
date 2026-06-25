# GitHub Releases 채널 추가

## 시작하기 전에 필요한 항목

필요한 항목은 세 가지뿐입니다.

| 요구 사항 | 목적 |
| --- | --- |
| GitHub 계정 | 액세스 토큰을 생성하고 리포지토리를 소유하는 데 사용합니다. |
| GitHub Access Token | ImgBed가 GitHub API에 접근하고, release를 만들고, 파일을 업로드하는 데 사용합니다. |
| Repository name | 리포지토리 이름만 입력할 수 있습니다. 예: `image`. |

## 설정 단계

### 단계 1: GitHub에 로그인하고 Access Token 만들기

1. GitHub에 로그인합니다.
2. 오른쪽 위의 아바타를 클릭하고 `Settings`를 엽니다.
3. 왼쪽 사이드바에서 `Developer settings`를 엽니다.
4. `Personal access tokens`를 엽니다.
5. `Tokens (classic)`을 엽니다.
6. `Generate new token (classic)`을 클릭합니다.
7. token에 알아보기 쉬운 이름을 지정합니다.
8. 자신의 유지보수 방식에 맞춰 만료일을 선택합니다.
9. `repo`와 `workflow` 스코프를 선택합니다.
10. 생성되자마자 토큰을 복사하고 저장합니다.

![GitHub 권한 추가](../../image/upload/github-releases/添加github权限.png)

## 단계 2: ImgBed에 GitHub Releases 채널 입력

업로드 설정에서 `GitHub Releases`를 선택한 뒤 다음과 같이 입력합니다.

| UI 필드 | 입력할 내용 |
| --- | --- |
| 채널 이름 | 원하는 이름. 예: `GitHubPrimary`. |
| Access Token | 방금 만든 GitHub Personal Access Token. |
| Repository name | `image` 같은 짧은 repo 이름 또는 `username/image` 같은 전체 경로. |
| Private repository | 필요에 따라 켜거나 끕니다. |
| Remark | 선택 사항. 예: `기본 업로드 채널`. |

![GitHub 채널 설정 입력](../../image/upload/github-releases/填写github渠道配置.png)

## 단계 3: 채널 저장

필드를 입력한 뒤 저장을 클릭합니다.

시스템은 다음 세부 사항을 처리합니다.

| 시스템 동작 | 설명 |
| --- | --- |
| 짧은 repository name | ImgBed는 현재 GitHub 계정을 식별하고 값을 전체 리포지토리 경로로 확장합니다. |
| 전체 repository path | ImgBed는 `username/repository` path를 입력한 그대로 사용합니다. |
| repository 확인 | 현재 개인 계정 경로를 사용하는 경우 리포지토리가 없으면 ImgBed가 자동으로 생성합니다. 전체 경로를 수동으로 입력한 경우 ImgBed는 해당 경로를 직접 사용합니다. |
| 공개/비공개 상태 | 리포지토리 공개 상태는 현재 스위치에 따라 동기화됩니다. |

## 빠른 체크리스트

GitHub Releases는 다음과 같이 동작합니다.

```text
Sign in to GitHub
-> Create an Access Token
-> Return to ImgBed and enter the token and repository name
-> Save
-> If only a repo name is entered, ImgBed adds the current username automatically
-> If username/repo is entered, ImgBed uses it as-is
-> Upload a test image
```
