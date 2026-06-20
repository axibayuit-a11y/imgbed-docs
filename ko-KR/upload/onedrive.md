# OneDrive 채널 추가

OneDrive 채널은 Microsoft OneDrive를 ImgBed의 저장 위치로 사용합니다.

## 준비할 것

| 준비 항목 | 용도 |
| --- | --- |
| Microsoft 계정 | OneDrive와 앱 등록에 사용 |
| ImgBed 도메인 | OAuth 콜백 URL에 사용 |
| App registration | Client ID와 Client Secret 발급 |
| Refresh Token | 장기 접근에 사용 |

## Microsoft Entra ID 열기

1. `portal.azure.com`을 엽니다.
2. 상단 검색에서 `Microsoft Entra ID`를 찾습니다.
3. `App registrations`로 이동합니다.
4. `New registration`을 누릅니다.

## 앱 등록하기

| 항목 | 입력 내용 |
| --- | --- |
| Name | 예: `imgbed-onedrive` |
| Supported account types | 사용할 OneDrive 계정 유형에 맞게 선택 |
| Redirect URI type | `Web` |
| Redirect URI | `https://내도메인/api/oauth/onedrive/callback` |

개인 OneDrive만 사용할 경우 개인 Microsoft 계정용을 선택합니다. 개인과 조직 계정을 모두 지원하려면 둘 다 허용하는 유형을 선택합니다.

![OneDrive 앱 등록](../../image/upload/onedrive/添加应用程序注册.png)

등록 후 `Application (client) ID`를 기록합니다. 조직 계정으로 사용할 경우 `Directory (tenant) ID`도 함께 기록합니다.

![Application ID와 Tenant ID](../../image/upload/onedrive/应用程序ID和目录租户ID位.png)

## Client Secret 만들기

1. `Certificates & secrets`를 엽니다.
2. `New client secret`을 누릅니다.
3. 이름과 만료 기간을 설정합니다.
4. 생성 직후 `Value`를 복사합니다.

![Client Secret](../../image/upload/onedrive/保存客户端密码值.png)

이 값은 나중에 다시 볼 수 없는 경우가 많으니 바로 저장해 두세요.

## Microsoft Graph 권한

`API permissions`에서 Microsoft Graph의 delegated permissions를 추가합니다.

| 권한 | 용도 |
| --- | --- |
| `Files.ReadWrite.All` | 파일 업로드, 디렉터리 생성, 삭제 |
| `offline_access` | Refresh Token 발급 |
| `User.Read` | 계정 정보와 용량 확인 |

## ImgBed에 입력하기

업로드 설정에서 `OneDrive`를 선택합니다.

| 항목 | 입력 내용 |
| --- | --- |
| 채널 이름 | 예: `OneDrive Main` |
| Client ID | `Application (client) ID` |
| Client Secret | 생성한 Secret의 Value |
| Tenant ID | 아래 표 참고 |
| Refresh Token | 처음에는 비워 둠 |
| 루트 디렉터리 | 선택 사항. 보통 `imgbed` |

![OneDrive 설정](../../image/upload/onedrive/添加新渠道配置.png)

| 계정 유형 | Tenant ID |
| --- | --- |
| 개인 계정 | `consumers` |
| 개인 + 조직 | `common` |
| 특정 조직만 | `Directory (tenant) ID` |

## Refresh Token 받기

1. ImgBed에서 `Token 가져오기`를 누릅니다.
2. 저장소로 사용할 Microsoft 계정으로 로그인합니다.
3. 권한을 허용합니다.
4. 콜백 페이지에 표시된 `Refresh Token`을 복사합니다.
5. ImgBed로 돌아와 `Refresh Token` 칸에 붙여 넣습니다.

![Refresh Token](../../image/upload/onedrive/复制刷新令牌.png)

## 빠른 절차

```text
portal.azure.com 열기
-> Microsoft Entra ID
-> App registrations
-> New registration
-> Web 콜백 URL 설정
-> Application ID 복사
-> Client Secret 생성
-> Microsoft Graph 권한 추가
-> ImgBed에 Client ID / Secret / Tenant ID 입력
-> Token 가져오기
-> Refresh Token 붙여 넣고 저장
```
