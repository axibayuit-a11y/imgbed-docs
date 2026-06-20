# Dropbox 채널 추가

Dropbox 채널은 Dropbox 계정을 ImgBed의 저장 위치로 사용하는 설정입니다.

## 준비할 것

| 준비 항목 | 용도 |
| --- | --- |
| Dropbox 계정 | 실제 파일 저장 위치 |
| Dropbox App | API 접근을 위해 생성 |
| Access Token | ImgBed가 Dropbox에 접근할 때 사용 |
| 저장 디렉터리 | 선택 사항. 보통 `imgbed` |

## Dropbox App 만들기

Dropbox App Console에서 새 앱을 만듭니다.

![앱 만들기](../../image/upload/dropbox/开发者创建应用.png)

앱 접근 범위는 ImgBed에서 사용할 저장 위치에 맞춰 선택합니다. 전용 폴더만 쓰는 방식이 관리하기 편합니다.

## 리다이렉트 URL 설정

OAuth를 사용할 경우 Dropbox App에 ImgBed 콜백 URL을 등록합니다.

```text
https://내도메인/api/oauth/dropbox/callback
```

![콜백 설정](../../image/upload/dropbox/配置回调地址.png)

## 권한 추가

파일 업로드, 읽기, 삭제에 필요한 권한을 추가합니다.

![권한 추가](../../image/upload/dropbox/添加对应的权限.png)

## Token 가져오기

앱 화면 또는 ImgBed 인증 흐름에서 Token을 가져옵니다.

![Token 가져오기](../../image/upload/dropbox/获取令牌.png)

Token을 복사해 ImgBed에 붙여 넣습니다.

![Token 복사](../../image/upload/dropbox/复制令牌.png)

## ImgBed에 입력하기

업로드 설정에서 `Dropbox`를 선택합니다.

| 항목 | 입력 내용 |
| --- | --- |
| 채널 이름 | 알아보기 쉬운 이름 |
| Access Token | Dropbox에서 받은 Token |
| 저장 디렉터리 | 선택 사항. 비워 두거나 `imgbed` |
| 메모 | 선택 사항 |

## 확인 방법

저장 후 용량 조회 또는 테스트 업로드를 실행합니다.

![용량 조회](../../image/upload/dropbox/查询额度成功.png)

Dropbox 안에 파일이 만들어지고 ImgBed 링크가 열리면 설정이 완료된 것입니다.

## 확인할 점

- Token이 만료되었거나 권한이 부족하지 않은지.
- Dropbox App 권한을 바꾼 뒤 다시 인증했는지.
- 저장 디렉터리 이름에 불필요한 슬래시나 공백이 없는지.
- Dropbox 용량이 부족하지 않은지.
