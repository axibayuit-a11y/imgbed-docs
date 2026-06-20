# Google Drive 채널 추가

Google Drive 채널은 Google Drive를 ImgBed의 저장 위치로 사용합니다.

## 준비할 것

| 준비 항목 | 용도 |
| --- | --- |
| Google 계정 | Drive와 OAuth 앱 관리 |
| Google Cloud 프로젝트 | OAuth Client 생성 |
| Client ID / Client Secret | ImgBed가 Google Drive를 조작할 때 사용 |
| Refresh Token | 장기 접근에 사용 |
| ImgBed 도메인 | OAuth 콜백 URL에 사용 |

## OAuth Client 만들기

Google Cloud Console에서 OAuth Client를 만듭니다. 애플리케이션 유형은 Web 애플리케이션을 선택합니다.

![OAuth Client 만들기](../../image/upload/google-drive/oa客户端id创建.png)

승인된 리다이렉트 URI에 다음 주소를 등록합니다.

```text
https://내도메인/api/oauth/google/callback
```

![OAuth URL 설정](../../image/upload/google-drive/填写oa客户端url信息.png)

## ImgBed에 입력하기

업로드 설정에서 `Google Drive`를 선택하고 Client ID와 Client Secret을 먼저 입력합니다.

![Google Drive 설정](../../image/upload/google-drive/粘贴回添加新渠道配置.png)

| 항목 | 입력 내용 |
| --- | --- |
| 채널 이름 | 예: `Google Drive Main` |
| Client ID | Google Cloud에서 만든 OAuth Client ID |
| Client Secret | OAuth Client Secret |
| Refresh Token | 뒤에서 받아 붙여 넣음 |
| 루트 디렉터리 | 선택 사항. 보통 `imgbed` |

## Refresh Token 받기

1. ImgBed에서 `Token 가져오기`를 누릅니다.
2. 저장 위치로 사용할 Google 계정으로 로그인합니다.
3. 권한을 허용합니다.
4. 콜백 페이지에 표시된 Refresh Token을 복사합니다.
5. ImgBed의 `Refresh Token` 항목에 붙여 넣습니다.

![Refresh Token 복사](../../image/upload/google-drive/授权完复制token.png)

## 저장 후 확인

1. 채널을 저장합니다.
2. 테스트 이미지를 업로드합니다.
3. Google Drive의 지정 디렉터리에 파일이 생성되는지 확인합니다.
4. 반환된 링크가 열리는지 확인합니다.

## 주의할 점

- Google Cloud의 OAuth 동의 화면 설정이 끝나지 않으면 인증이 실패할 수 있습니다.
- Refresh Token을 받은 Google 계정이 실제 저장 위치가 됩니다.
- Drive 용량이 부족하면 업로드가 실패합니다.
- OAuth Client Secret을 외부에 공개하지 마세요.
