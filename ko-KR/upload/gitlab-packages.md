# GitLab Packages 채널 추가

## 시작하기 전에 필요한 항목

필요한 항목은 세 가지뿐입니다.

| 요구 사항 | 목적 |
| --- | --- |
| GitLab 계정 | 액세스 토큰을 생성하고 프로젝트를 소유하는 데 사용합니다. |
| GitLab Personal Access Token | ImgBed가 GitLab API에 접근하고, 프로젝트를 만들고, Generic Packages에 파일을 업로드하는 데 사용합니다. |
| Project name | 프로젝트 이름만 입력할 수 있습니다. 예: `imgbed`. |

## 설정 단계

### 단계 1: GitLab에 로그인하고 Access Token 만들기

1. GitLab에 로그인합니다.
2. 오른쪽 위의 아바타를 클릭하고 `Preferences`를 엽니다.
3. 왼쪽 사이드바에서 `Access Tokens`를 엽니다.
4. token에 알아보기 쉬운 이름을 지정합니다.
5. 자신의 유지보수 방식에 맞춰 만료일을 선택합니다.
6. `api` 스코프를 선택합니다.
7. 생성되자마자 토큰을 복사하고 저장합니다.

![legacy token 만들기](../../image/upload/gitlab-packages/点击生成旧版令牌.png)

![token 권한 선택](../../image/upload/gitlab-packages/勾选令牌权限.png)

## 단계 2: ImgBed에 GitLab Packages 채널 입력

업로드 설정에서 `GitLab Packages`를 선택한 뒤 다음과 같이 입력합니다.

| UI 필드 | 입력할 내용 |
| --- | --- |
| 채널 이름 | 원하는 이름. 예: `GitLabPrimary`. |
| Access Token | 방금 만든 GitLab Personal Access Token. |
| Project name | `imgbed` 같은 짧은 프로젝트 이름 또는 `username/imgbed` 같은 전체 경로. |
| Private repository | 필요에 따라 켜거나 끕니다. |
| Remark | 선택 사항. 예: `기본 업로드 채널`. |

![채널 설정](../../image/upload/gitlab-packages/配置渠道内容.png)

## 단계 3: 채널 저장

필드를 입력한 뒤 저장을 클릭합니다.

시스템은 다음 세부 사항을 처리합니다.

| 시스템 동작 | 설명 |
| --- | --- |
| 짧은 project name | ImgBed는 현재 GitLab 계정을 식별하고 값을 전체 프로젝트 경로로 확장합니다. |
| 전체 project path | ImgBed는 `username/project` path를 입력한 그대로 사용합니다. |
| project 확인 | 현재 개인 계정 경로를 사용하는 경우 프로젝트가 없으면 ImgBed가 자동으로 생성합니다. 전체 경로를 수동으로 입력한 경우 ImgBed는 해당 경로를 직접 사용합니다. |
| 공개/비공개 상태 | 프로젝트 공개 상태는 현재 스위치에 따라 동기화됩니다. |

## 빠른 체크리스트

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
