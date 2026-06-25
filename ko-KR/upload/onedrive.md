# OneDrive 채널 추가

## 먼저 필요한 항목

| 요구 사항 | 필요한 이유 |
| --- | --- |
| Microsoft 계정 | Microsoft 관리자 페이지에 접근하고 OneDrive를 승인하는 데 사용합니다. |
| ImgBed 도메인 | OAuth callback URL에 사용합니다. |
| 앱 등록 | `Client ID`와 `Client Secret`을 생성하는 데 사용합니다. |
| OneDrive 계정 | 실제 파일 저장 위치로 사용합니다. |

## 설정 단계

### 단계 1: Microsoft Entra ID 열기

1. `portal.azure.com`을 엽니다.
2. 상단에서 `Microsoft Entra ID`를 검색합니다.
3. 대상 페이지가 드롭다운에 표시되지 않으면 다음을 선택합니다.

```text
Continue searching in Microsoft Entra ID
```

4. `Microsoft Entra ID`를 엽니다.
5. `App registrations`를 엽니다.
6. `New registration`을 클릭합니다.

### 단계 2: 앱 등록

`New registration` 페이지에서 다음을 입력합니다.

| 필드 | 입력할 내용 |
| --- | --- |
| Name | 알아보기 쉬운 이름. 예: `imgbed-onedrive` |
| Supported account types | 아래 표에 따라 선택합니다. |
| Redirect URI type | `Web` |
| Redirect URI | `https://your-domain.com/api/oauth/onedrive/callback` |

계정 유형 안내:

| 시나리오 | Supported Account Types |
| --- | --- |
| 개인 OneDrive만 사용 | 개인 Microsoft 계정 옵션을 선택합니다. |
| 개인 및 회사/학교 계정 모두 사용 | 개인 계정과 조직 계정을 모두 지원하는 옵션을 선택합니다. |
| 회사 또는 학교 OneDrive만 사용 | 조직 계정 옵션을 선택합니다. |

양식을 입력한 뒤 등록을 클릭합니다.

![OneDrive 앱 만들기](../../image/upload/onedrive/添加应用程序注册.png)

### 단계 3: 앱 정보 복사

앱이 생성되면 overview 페이지에서 다음 값을 복사합니다.

| Microsoft 필드 | ImgBed 필드 |
| --- | --- |
| `Application (client) ID` | `Client ID` |
| `Directory (tenant) ID` | 조직 계정용 `Tenant ID` |

![Application ID와 tenant ID](../../image/upload/onedrive/应用程序ID和目录租户ID位.png)

### 단계 4: Client Secret 만들기

1. `Certificates & secrets`를 엽니다.
2. `New client secret`을 클릭합니다.
3. 원하는 설명을 입력합니다.
4. 만료 기간을 선택합니다.
5. 생성되자마자 `Value`를 복사합니다.

![client secret value 저장](../../image/upload/onedrive/保存客户端密码值.png)

### 단계 5: API 권한 추가

1. `API permissions`를 엽니다.
2. `Add a permission`을 클릭합니다.
3. `Microsoft Graph`를 선택합니다.
4. `Delegated permissions`를 선택합니다.
5. 다음 권한을 추가합니다.

| 권한 | 목적 |
| --- | --- |
| `Files.ReadWrite.All` | 파일 업로드, 폴더 생성, 파일 삭제 |
| `offline_access` | ImgBed가 `Refresh Token`을 얻을 수 있게 합니다. |
| `User.Read` | 계정과 quota 정보를 읽습니다. |

### 단계 6: OneDrive 채널 입력

업로드 설정에서 `OneDrive`를 선택하고 다음을 입력합니다.

| ImgBed 필드 | 입력할 내용 |
| --- | --- |
| 채널 이름 | 알아보기 쉬운 이름. 예: `Main OneDrive` |
| Client ID | Microsoft `Application (client) ID` |
| Client Secret | 복사한 `Client Secret Value` |
| Tenant ID | 아래 표를 사용합니다. |
| Refresh Token | 지금은 비워 둡니다. |
| Root directory | 선택 사항. 기본값은 `imgbed`입니다. |
| Note | 선택 사항 |

![OneDrive 채널 설정 입력](../../image/upload/onedrive/添加新渠道配置.png)

`Tenant ID` 입력 방법:

| 선택한 계정 유형 | ImgBed `Tenant ID` |
| --- | --- |
| 개인 계정 | `consumers` |
| 개인 + 조직 계정 | `common` |
| 현재 조직만 | `Directory (tenant) ID` |

### 단계 7: Refresh Token 받기

1. ImgBed에서 `Get Token`을 클릭합니다.
2. 연결할 Microsoft 계정으로 로그인합니다.
3. 승인 요청을 허용합니다.
4. callback 페이지에 `Refresh Token`이 표시됩니다.
5. 복사합니다.
6. ImgBed로 돌아가 `Refresh Token` 필드에 붙여 넣습니다.

![refresh token 복사](../../image/upload/onedrive/复制刷新令牌.png)

### 단계 8: 채널 저장

모든 필드를 입력한 뒤 채널을 저장합니다.

## 빠른 흐름

```text
Open portal.azure.com
-> Search for Microsoft Entra ID
-> Open App registrations
-> Register a new app
-> Fill Name / Supported account types / Web redirect URI
-> Register
-> Copy Application (client) ID
-> Check the callback URL in Authentication
-> Create a Client Secret in Certificates & secrets
-> Add permissions in API permissions
-> Fill Client ID / Client Secret / Tenant ID into ImgBed
-> Click Get Token
-> Copy the Refresh Token from the callback page
-> Paste it back into ImgBed and save
```

## 참고

1. Microsoft Entra app registration: https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-register-app
2. Microsoft identity platform 승인 코드 흐름: https://learn.microsoft.com/en-us/entra/identity-platform/v2-oauth2-auth-code-flow
3. Microsoft Graph user authentication: https://learn.microsoft.com/en-us/graph/auth-v2-user
