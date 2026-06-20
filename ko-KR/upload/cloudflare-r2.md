# Cloudflare R2 채널 추가

Cloudflare R2 채널은 Cloudflare R2 버킷에 파일을 저장하기 위한 설정입니다.

## 적합한 경우

- Cloudflare Workers와 같은 생태계에서 저장소도 함께 관리하고 싶을 때.
- R2 버킷을 ImgBed의 기본 저장소로 쓰고 싶을 때.
- 커스텀 도메인이나 CDN과 함께 이미지 배포를 구성하고 싶을 때.

## 준비할 것

| 준비 항목 | 용도 |
| --- | --- |
| Cloudflare 계정 | R2와 API Token 관리 |
| R2 버킷 | 실제 파일 저장 위치 |
| Account ID | R2 작업에 필요 |
| API Token | 버킷 읽기/쓰기 권한 |
| 커스텀 도메인 | 선택 사항. 공개 URL을 정리할 때 사용 |

## 버킷 만들기

Cloudflare Dashboard에서 `R2 Object Storage`를 열고 새 버킷을 만듭니다.

![R2 버킷 만들기](../../image/upload/cloudflare-r2/创建一个存储桶img-r2.png)

버킷 이름은 ImgBed 설정에 그대로 입력해야 하므로 정확히 기록해 둡니다.

## Account ID 확인

Cloudflare 계정 화면에서 Account ID를 확인합니다.

![Account ID](../../image/upload/cloudflare-r2/获取账户id.png)

## ImgBed에 입력하기

업로드 설정에서 `채널 추가`를 열고 `Cloudflare R2`를 선택합니다.

| 항목 | 입력 내용 |
| --- | --- |
| 채널 이름 | 알아보기 쉬운 이름 |
| Account ID | Cloudflare Account ID |
| Bucket 이름 | 생성한 R2 버킷 이름 |
| API Token | R2 접근 권한이 있는 Token |
| 커스텀 도메인 | 선택 사항 |
| 저장 디렉터리 | 보통 `imgbed` |

## 용량 제한

필요하면 용량 제한을 설정할 수 있습니다.

![용량 제한](../../image/upload/cloudflare-r2/配置容量限制.png)

용량 제한을 켜면 설정한 상한과 임계값에 따라 해당 채널이 업로드 대상에서 제외될 수 있습니다.

## 확인 방법

1. 저장 후 R2 채널 카드가 표시됩니다.
2. 채널이 사용 상태인지 확인합니다.
3. 테스트 이미지를 업로드합니다.
4. R2 버킷에 객체가 생성되었는지 확인합니다.
5. 반환된 링크가 브라우저에서 열리는지 확인합니다.

## 자주 나는 오류

- Account ID 또는 Bucket 이름이 틀림.
- API Token에 대상 버킷 권한이 없음.
- 커스텀 도메인이 R2 버킷에 제대로 연결되지 않음.
- 용량 제한 때문에 업로드 대상에서 제외됨.
