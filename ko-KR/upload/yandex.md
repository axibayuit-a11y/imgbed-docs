# Yandex 채널 추가

Yandex 채널은 Yandex Disk를 ImgBed의 저장 위치로 사용합니다.

## 준비할 것

| 준비 항목 | 용도 |
| --- | --- |
| Yandex 계정 | Yandex Disk 인증 |
| Yandex OAuth App | Client ID와 Client Secret 발급 |
| ImgBed 도메인 | OAuth 콜백 URL에 사용 |
| Yandex Disk | 실제 파일 저장 위치 |

## Yandex OAuth App 만들기

다음 주소를 엽니다.

```text
https://oauth.yandex.com/client/new
```

로그인이 필요하면 저장 위치로 사용할 Yandex 계정으로 로그인합니다.

새 앱을 만들고 알아보기 쉬운 이름을 붙입니다.

```text
imgbed-yandex
```

콜백 URL에는 다음 값을 넣습니다.

```text
https://내도메인/api/oauth/yandex/callback
```

## 권한 확인

ImgBed의 Yandex 연동은 `Yandex.Disk REST API`의 다음 권한을 사용합니다.

| 권한 | 용도 |
| --- | --- |
| `cloud_api:disk.app_folder` | 앱 폴더에 파일 저장 |
| `cloud_api:disk.read` | 파일과 다운로드 링크 읽기 |
| `cloud_api:disk.write` | 업로드, 디렉터리 생성, 삭제 |
| `Access to information about Yandex.Disk` | 용량과 사용량 확인 |

`Yandex ID API`의 이름이나 이메일 권한은 필요에 따라 선택합니다. 업로드, 삭제, 용량 확인의 핵심은 위 4개 Disk 권한입니다.

![Yandex Disk 권한](../../image/upload/yandex/dataaccess配置软盘权限.png)

## Client ID와 Secret 기록

앱을 만든 뒤 다음 값을 복사합니다.

| Yandex 항목 | ImgBed 항목 |
| --- | --- |
| `Client ID` | `Client ID` |
| `Client Secret` | `Client Secret` |

![Client ID와 Secret](../../image/upload/yandex/记录客户端id和secret.png)

## ImgBed에 입력하기

업로드 설정에서 `Yandex`를 선택합니다.

| 항목 | 입력 내용 |
| --- | --- |
| 채널 이름 | 예: `Yandex Main` |
| Client ID | Yandex App의 Client ID |
| Client Secret | Yandex App의 Client Secret |
| Refresh Token | 처음에는 비워 둠 |
| 루트 디렉터리 | 선택 사항. 보통 `imgbed` |

![Yandex 설정](../../image/upload/yandex/编辑配置渠道.png)

## Refresh Token 받기

1. ImgBed에서 `Token 가져오기`를 누릅니다.
2. 저장 위치로 사용할 Yandex 계정으로 로그인합니다.
3. 권한을 허용합니다.
4. 콜백 페이지에 표시된 `Refresh Token`을 복사합니다.
5. ImgBed의 `Refresh Token` 칸에 붙여 넣습니다.

![Refresh Token](../../image/upload/yandex/授权后复制刷新令牌.png)

## 빠른 절차

```text
Yandex OAuth Console 열기
-> App 만들기
-> https://내도메인/api/oauth/yandex/callback 설정
-> Disk 권한 확인
-> Client ID / Client Secret 복사
-> ImgBed에 입력
-> Token 가져오기
-> Refresh Token 붙여 넣고 저장
```

## 참고

1. Yandex 앱 등록: https://yandex.com/dev/id/doc/en/register-client
2. 인증 코드 URL: https://yandex.com/dev/id/doc/en/codes/code-url
3. OAuth Token API: https://yandex.com/dev/id/doc/en/tokens/token
