# Cloudflare R2 채널 추가

## 적합한 경우

다음과 같은 경우 Cloudflare R2를 사용하세요.

- ImgBed 사이트가 이미 Cloudflare에 배포되어 있고, 같은 Cloudflare 계정의 R2 버킷에 파일을 저장하려는 경우.
- 별도의 S3 엔드포인트, 액세스 키, 시크릿 키를 구성하고 싶지 않은 경우.
- Worker 또는 Pages의 R2 바인딩을 통해 읽기와 쓰기를 처리하고, 설정을 최소화하려는 경우.

요약하면 다음과 같습니다.

R2 채널은 ImgBed 관리자 패널 안에서 수동으로 만들지 않습니다. 먼저 Cloudflare 프로젝트에 R2 버킷을 바인딩해야 하며, 바인딩 변수 이름은 반드시 `img_r2` 여야 합니다.

## 시작하기 전에 필요한 항목

- Cloudflare 계정.
- 이미 생성된 R2 버킷.
- ImgBed가 배포된 Cloudflare 프로젝트를 관리할 권한.

## Cloudflare에서 설정하기

### 1. R2 버킷 만들기

1. Cloudflare Dashboard에 로그인합니다.
2. `R2 Object Storage`를 엽니다.
3. Create bucket을 클릭합니다.
4. 버킷 이름을 선택합니다. 예: `imgbed`.

업로드된 파일은 이 버킷에 저장됩니다.

![R2 버킷 만들기](../../image/upload/cloudflare-r2/创建一个存储桶img-r2.png)

### 2. 버킷을 ImgBed 프로젝트에 바인딩하기

배포 유형에 따라 바인딩 위치를 선택합니다.

| 배포 유형 | 바인딩 위치 |
| --- | --- |
| Pages | Current Pages project -> Settings -> Functions -> R2 bucket bindings |
| Worker | Current Worker -> Settings -> Bindings -> R2 bucket bindings |

바인딩을 추가할 때 중요한 필드는 다음과 같습니다.

| 필드 | 값 |
| --- | --- |
| Variable name | `img_r2` |
| R2 bucket | 생성한 버킷을 선택합니다. |

변수 이름은 정확히 `img_r2` 여야 합니다. R2 파일 업로드, 읽기, 삭제는 모두 이 바인딩 이름에 의존합니다.

### 3. 프로젝트 다시 배포하기

바인딩을 저장한 뒤 ImgBed를 다시 배포하여 Worker 또는 Pages 런타임이 `img_r2`에 접근할 수 있게 합니다.

## ImgBed에서 표시되는 내용

R2 바인딩을 사용할 수 있게 되면 다음을 엽니다.

1. 시스템 설정.
2. 업로드 설정.
3. `Cloudflare R2` 채널.

시스템은 고정 채널 하나를 자동으로 생성합니다.

| 필드 | 고정값 |
| --- | --- |
| 채널 이름 | `Cloudflare R2` |
| 채널 유형 | `cfr2` |
| 저장소 모드 | `binding` |
| 설정 출처 | 환경 바인딩 |

이 채널은 고정 바인딩 채널입니다. 만들기 위해 Add Channel을 클릭할 필요가 없으며, 일반 채널처럼 삭제할 수도 없습니다.

## 관리자 패널에서 편집할 수 있는 필드

| 필드 | 기능 | 필수 |
| --- | --- | --- |
| 채널 활성화 | R2가 업로드 대상 선택에 참여할지 제어합니다. | 예 |
| Account ID | 쿼터 제한이 활성화되어 있고 공식 R2 사용량을 조회해야 할 때만 사용합니다. | 쿼터 제한이 활성화된 경우 권장 |
| Bucket name | 쿼터 제한이 활성화되어 있고 공식 R2 사용량을 조회해야 할 때만 사용합니다. | 쿼터 제한이 활성화된 경우 권장 |
| Quota limit | 이 R2 채널이 용량 기준 업로드 대상 선택에 참여할지 제어합니다. | 아니요 |
| Threshold | 사용량이 지정된 비율에 도달하면 이 채널에 대한 쓰기를 중지합니다. | 쿼터 제한이 활성화된 경우 필수 |

Account ID는 Cloudflare Dashboard의 계정 정보 패널에서 복사할 수 있습니다. ImgBed가 R2 쿼터 사용량을 조회하고 적용하게 하려는 경우에만 입력하세요.

![Account ID 가져오기](../../image/upload/cloudflare-r2/获取账户id.png)

## 설정 단계

1. Cloudflare에서 R2 버킷을 만듭니다.
2. ImgBed 프로젝트의 Cloudflare 설정을 엽니다.
3. R2 버킷 바인딩을 추가합니다.
4. `Variable name`을 `img_r2`로 설정합니다.
5. 생성한 R2 버킷을 선택합니다.
6. 바인딩을 저장하고 ImgBed를 다시 배포합니다.
7. ImgBed -> 시스템 설정 -> 업로드 설정으로 돌아갑니다.
8. `Cloudflare R2` 채널이 표시되고 활성화되어 있는지 확인합니다.

R2를 용량 기준 업로드 대상 선택에 참여시키려면 쿼터 제한을 활성화한 뒤, 저장하기 전에 Account ID, bucket name, 쿼터 제한, threshold를 입력합니다.

![쿼터 제한 설정](../../image/upload/cloudflare-r2/配置容量限制.png)

## 확인 방법

- 고정 `Cloudflare R2` 채널이 업로드 설정에 표시됩니다.
- 채널 카드가 활성화된 상태로 표시됩니다.
- 작은 테스트 파일이 정상적으로 업로드되고, 반환된 링크가 정상적으로 열립니다.
- 파일을 열 때 `R2 database binding is not configured`가 반환되면 런타임이 `img_r2` 바인딩을 받지 못한 것입니다. Cloudflare에서 바인딩 이름을 확인하고 프로젝트를 다시 배포하세요.
