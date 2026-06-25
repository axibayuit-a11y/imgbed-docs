# Dropbox 채널 추가

## 먼저 필요한 항목

| 요구 사항 | 필요한 이유 |
| --- | --- |
| Dropbox 계정 | 로그인하고 앱을 승인하는 데 사용합니다. |
| Dropbox 앱 | `App Key`와 `App Secret`을 생성하는 데 사용합니다. |
| ImgBed 도메인 | OAuth redirect URI에 사용합니다. |
| 사용 가능한 Dropbox 저장 공간 | 실제 파일 저장 위치로 사용합니다. |

## 설정 단계

### 단계 1: Dropbox 앱 만들기

1. Dropbox App Console을 엽니다.

```text
https://www.dropbox.com/developers/apps
```

2. 새 앱을 만듭니다.
3. 접근 유형은 다음을 선택합니다.

```text
App folder
```

4. `imgbed-app`처럼 알아보기 쉬운 앱 이름을 지정합니다.
5. 생성 후 앱 상세 페이지를 엽니다.

권장 접근 유형:

| Access Type | 권장 사항 |
| --- | --- |
| `App folder` | 권장. ImgBed가 파일을 저장하는 방식과 일치합니다. |
| `Full Dropbox` | 권장하지 않음. ImgBed에는 전체 계정 접근 권한이 필요하지 않습니다. |

![Dropbox 앱 만들기](../../image/upload/dropbox/开发者创建应用.png)

### 단계 2: Redirect URI 추가하기

Dropbox 앱 상세 페이지에서 OAuth 또는 Redirect URI 설정을 찾아 다음을 추가합니다.

```text
https://your-domain.com/api/oauth/dropbox/callback
```

관리자 패널을 둘 이상의 도메인에서 사용하는 경우, 일치하는 callback URL을 각각 추가합니다.

![redirect URI 설정](../../image/upload/dropbox/配置回调地址.png)

### 단계 3: 앱 권한 설정하기

`Permissions` 탭을 열고 최소한 다음 스코프를 활성화합니다.

| Scope | 필수 | 목적 |
| --- | --- | --- |
| `account_info.read` | 필수 | 계정과 quota 정보를 읽습니다. |
| `files.metadata.read` | 필수 | 경로 확인을 위해 파일과 폴더 메타데이터를 읽습니다. |
| `files.metadata.write` | 필수 | 폴더를 만들고 메타데이터를 씁니다. |
| `files.content.write` | 필수 | 파일을 업로드합니다. 이 스코프가 없으면 `required scope 'files.content.write'`가 발생합니다. |
| `files.content.read` | 권장 | 다운로드, 미리보기, 임시 파일 링크를 허용합니다. |

스코프를 선택한 뒤 페이지 하단의 `Submit`을 클릭합니다.

![권한 추가](../../image/upload/dropbox/添加对应的权限.png)

중요:

| 상황 | 조치 |
| --- | --- |
| 스코프를 변경함 | 토큰 승인 흐름을 다시 실행하고 새 `Refresh Token`을 받습니다. |
| 다시 승인하지 않음 | 기존 토큰에는 새 권한이 부여되지 않으므로 업로드가 계속 실패할 수 있습니다. |

### 단계 4: 앱 자격 증명 복사하기

Dropbox 앱 페이지에서 다음 두 값을 저장합니다.

| Dropbox 필드 | ImgBed 필드 |
| --- | --- |
| `App key` | `App Key` |
| `App secret` | `App Secret` |

### 단계 5: Dropbox 채널 입력하기

업로드 설정에서 `Dropbox`를 선택하고 다음을 입력합니다.

| ImgBed 필드 | 입력할 내용 |
| --- | --- |
| 채널 이름 | 알아보기 쉬운 이름. 예: `Main Dropbox` |
| App Key | Dropbox `App key` |
| App Secret | Dropbox `App secret` |
| Refresh Token | 지금은 비워 둡니다. |
| Root directory | 선택 사항. 기본값은 `imgbed`입니다. |
| Note | 선택 사항 |

![token 가져오기](../../image/upload/dropbox/获取令牌.png)

### 단계 6: Refresh Token 받기

1. ImgBed에서 `Get Token`을 클릭합니다.
2. 연결할 Dropbox 계정으로 로그인합니다.
3. 승인 요청을 허용합니다.
4. callback 페이지에 `Refresh Token`이 표시됩니다.
5. 복사합니다.
6. ImgBed로 돌아가 `Refresh Token` 필드에 붙여 넣습니다.

![token 복사](../../image/upload/dropbox/复制令牌.png)

## 확인 방법

| 확인 항목 | 예상 결과 |
| --- | --- |
| 채널 카드 | 저장 후 Dropbox 채널이 표시됩니다. |
| 채널 스위치 | 채널을 활성화할 수 있습니다. |
| 토큰 저장됨 | 상세 페이지에 `Refresh Token`이 저장되었다고 표시됩니다. |
| 업로드 테스트 | 테스트 이미지가 Dropbox 앱 폴더에 표시됩니다. |

쿼터 제한이 활성화되어 있으면 쿼터 조회를 클릭합니다. 조회에 성공하면 채널 카드에 사용 공간, 전체 공간, 마지막 업데이트 시간이 표시됩니다.

![quota 조회 성공](../../image/upload/dropbox/查询额度成功.png)

## 문제 해결

| 문제 | 해결 방법 |
| --- | --- |
| ImgBed가 설정이 불완전하다고 표시함 | `App Key`, `App Secret`, `Refresh Token`이 모두 입력되어 있는지 확인합니다. |
| 승인은 성공했지만 `Refresh Token`이 표시되지 않음 | `Get Token`을 다시 클릭하고 offline authorization flow가 사용되는지 확인합니다. |
| `required scope 'files.content.write'`로 업로드 실패 | `files.content.write`를 활성화하고 `Submit`을 클릭한 뒤 새 `Refresh Token`을 받습니다. |
| Callback 실패 | redirect URI가 `https://your-domain.com/api/oauth/dropbox/callback`. 확인합니다. |
| 파일을 찾을 수 없음 | Dropbox 앱이 `App folder` mode로 생성되었는지 확인합니다. |

## 빠른 흐름

```text
Open Dropbox App Console
-> Create an app
-> Choose App folder access
-> Add https://your-domain.com/api/oauth/dropbox/callback
-> Enable account_info.read / files.metadata.read / files.metadata.write / files.content.write
-> Optionally enable files.content.read
-> Click Submit
-> Copy App Key and App Secret
-> Fill them into ImgBed
-> Click Get Token
-> Copy the Refresh Token from the callback page
-> Paste it back into ImgBed and save
```

## 참고

1. Dropbox App Console: https://www.dropbox.com/developers/apps
2. Dropbox OAuth Guide: https://developers.dropbox.com/oauth-guide
3. Dropbox Developer Guide: https://www.dropbox.com/developers/reference/developer-guide
