# Cloudflare API Token 설정

ImgBed의 일부 기능은 Cloudflare API Token을 사용합니다. 예를 들어 R2, Workers, D1, KV 같은 Cloudflare 리소스를 조작할 때 필요합니다.

## 준비할 것

| 준비 항목 | 용도 |
| --- | --- |
| Cloudflare 계정 | API Token 생성 |
| 대상 Account ID | R2, Workers 등 작업 대상 식별 |
| 필요한 권한 | 기능에 맞는 최소 권한 부여 |

## API Token 만들기

1. Cloudflare Dashboard에 로그인합니다.
2. 오른쪽 위 프로필에서 `My Profile`을 엽니다.
3. `API Tokens`로 이동합니다.
4. `Create Token`을 누릅니다.
5. 필요한 권한을 선택합니다.
6. 대상 계정 또는 Zone을 지정합니다.
7. 생성 후 표시되는 Token을 복사합니다.

![Cloudflare API Token](../../image/Safety/cloudflare api token截图.png)

Token은 생성 직후에만 보이는 경우가 많습니다. 반드시 안전한 곳에 보관하세요.

## Global API Key와의 차이

Cloudflare에는 Global API Key도 있지만, 일반적으로는 API Token을 권장합니다.

| 종류 | 특징 |
| --- | --- |
| API Token | 권한과 대상 범위를 제한할 수 있음 |
| Global API Key | 계정 전체에 강한 권한을 가짐 |

필요한 권한만 가진 API Token을 쓰는 편이 운영상 더 안전합니다.

![Global API Key 확인](../../image/Safety/查看全局令牌.png)

## ImgBed에 입력하기

ImgBed 설정 화면에서 Cloudflare API Token을 입력하고 저장합니다.

저장 후 관련 기능에서 연결 확인이나 용량 확인을 실행해 Token이 정상 작동하는지 확인합니다.

## 운영 주의사항

- Token을 공개 저장소나 프론트엔드 코드에 직접 넣지 마세요.
- 권한은 필요한 범위로만 제한합니다.
- 더 이상 쓰지 않는 Token은 Cloudflare에서 삭제합니다.
- 유출 가능성이 있으면 즉시 폐기하고 새로 발급하세요.
