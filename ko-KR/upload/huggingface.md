# Hugging Face 채널 추가

Hugging Face 채널은 Hugging Face Repository를 파일 저장 위치로 사용합니다.

## 준비할 것

| 준비 항목 | 용도 |
| --- | --- |
| Hugging Face 계정 | Repository와 Token 관리 |
| Repository | 파일 저장 위치 |
| Access Token | ImgBed가 Repository에 쓰기 위해 사용 |
| 저장 디렉터리 | 선택 사항 |

## Token 만들기

Hugging Face 설정 화면에서 Access Token을 만듭니다. Repository에 쓸 수 있는 권한을 부여하세요.

![Token 만들기](../../image/upload/huggingface/创建令牌.png)

Token을 만든 뒤 복사해 안전하게 보관합니다.

## ImgBed에 입력하기

업로드 설정에서 `Hugging Face`를 선택합니다.

| 항목 | 입력 내용 |
| --- | --- |
| 채널 이름 | 예: `HF Storage` |
| Repository | `사용자명/저장소명` |
| Token | Hugging Face Access Token |
| 저장 디렉터리 | 선택 사항. 보통 `imgbed` |
| 메모 | 선택 사항 |

![채널 추가](../../image/upload/huggingface/添加渠道.png)

## 확인 방법

1. 저장 후 채널 카드가 표시됩니다.
2. 테스트 이미지를 업로드합니다.
3. Hugging Face Repository에 파일이 추가되는지 확인합니다.
4. ImgBed 링크로 접근할 수 있는지 확인합니다.

## 운영 주의사항

- Repository 공개 범위를 확인하세요. 공개 Repository에 올린 파일은 외부에서 볼 수 있습니다.
- Token에는 필요한 권한만 부여합니다.
- 대량 파일 저장이나 고빈도 배포에는 Hugging Face 측 제한을 고려해야 합니다.
