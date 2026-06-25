# pCloud 채널 추가

## 적합한 경우

- pCloud 계정이 있고 ImgBed가 이미지를 pCloud에 저장하게 하려는 경우.
- pCloud 계정 이메일과 비밀번호를 채널 자격 증명으로 사용하는 데 문제가 없는 경우.

## 시작하기 전에 필요한 항목

| 요구 사항 | 필요한 이유 |
| --- | --- |
| pCloud 계정 이메일 | pCloud API에 로그인하는 데 사용합니다. |
| pCloud 비밀번호 | pCloud API에 로그인하는 데 사용합니다. |
| API host | 기본값은 `api.pcloud.com`입니다. EU 계정은 `eapi.pcloud.com`을 사용할 수 있습니다. |
| Storage directory | 파일이 저장되는 위치입니다. 기본값은 `imgbed`입니다. |

## 추가 위치

1. 시스템 설정을 엽니다.
2. 업로드 설정을 엽니다.
3. 오른쪽 위의 `Add Channel`을 클릭합니다.
4. `pCloud`를 선택합니다.

## 필드 참조

| 필드 | 목적 | 필수 |
| --- | --- | --- |
| 채널 이름 | 이 pCloud 채널을 식별합니다. 예: `Personal pCloud` | 예 |
| Account email | pCloud 로그인 이메일 | 예 |
| Password | pCloud 비밀번호 | 예 |
| API host | pCloud API host. 기본값은 `api.pcloud.com`입니다. | 아니요 |
| Storage directory | 파일 저장에 사용하는 디렉터리. 기본값은 `imgbed`입니다. | 아니요 |

계정 지역에 따라 API host를 선택합니다.

| Account Region | API Host |
| --- | --- |
| Default / US | `api.pcloud.com` |
| Europe | `eapi.pcloud.com` |

## 설정 단계

1. 업로드 설정을 엽니다.
2. `Add Channel`을 클릭합니다.
3. `pCloud`를 선택합니다.
4. 알아보기 쉬운 채널 이름을 입력합니다.
5. pCloud 계정 이메일을 입력합니다.
6. pCloud 비밀번호를 입력합니다.
7. API host는 `api.pcloud.com`으로 유지하거나, EU 계정이면 `eapi.pcloud.com`을 사용합니다.
8. storage directory는 `imgbed`로 유지하거나 원하는 폴더로 변경합니다.
9. 채널을 저장합니다.

![채널 설정](../../image/upload/pcloud/配置渠道.png)

## 확인 방법

| 확인 항목 | 예상 결과 |
| --- | --- |
| 채널 카드 | 저장 후 pCloud 채널 카드가 표시됩니다. |
| 채널 스위치 | 카드의 스위치가 계속 활성화되어 있습니다. |
| 이메일 표시 | 카드에 연결된 pCloud 이메일이 표시됩니다. |
| quota 조회 | 조회에 성공하면 사용 용량과 전체 용량이 표시됩니다. |
| 업로드 테스트 | 테스트 이미지가 설정된 pCloud storage directory에 표시됩니다. |

![quota 조회 성공](../../image/upload/pcloud/查询额度成功.png)

## 문제 해결

### 왜 OAuth2가 아닌가요?

pCloud OAuth2는 기본적으로 셀프서비스로 활성화할 수 없습니다. pCloud에 이메일을 보내 활성화를 요청해야 합니다.

또한 현재 pCloud OAuth2 흐름은 ImgBed에 필요한 단기 업로드 링크 워크플로를 지원하지 않습니다. 따라서 이 채널은 계정 이메일과 비밀번호 로그인을 사용합니다.

### 어떤 API Host를 사용해야 하나요?

기본값:

```text
api.pcloud.com
```

EU 계정의 경우:

```text
eapi.pcloud.com
```

## 빠른 흐름

```text
Prepare your pCloud email and password
-> Open Upload Settings
-> Add Channel
-> Choose pCloud
-> Fill channel name / email / password
-> Keep API host as api.pcloud.com unless your account is in Europe
-> Keep storage directory as imgbed unless you need another folder
-> Save
-> Query quota
-> Upload a test image
```
