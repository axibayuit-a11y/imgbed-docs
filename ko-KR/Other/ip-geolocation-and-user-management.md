# IP 위치 조회와 사용자 관리

IP 위치 조회는 업로드 기록, 로그인 기기, 유사한 로그에 있는 IP 주소를 대략적인 위치로 변환합니다.

설정 후에는 관리자 패널에서 업로드 및 접근 출처를 더 명확하게 표시할 수 있습니다. 사용자 관리에서는 의심스러운 IP 주소의 업로드 권한을 차단하거나 복원할 수도 있습니다.

## 설정 위치

엽니다:

```text
System Settings -> Other Settings -> IP Geolocation
```

![IP 위치 조회](../../image/other/ip定位/ip定位.png)

## 사용 가능한 설정

새로운 IP 위치 조회 흐름은 하나의 지도 서비스에만 의존하지 않고 여러 정보원을 지원합니다.

| 설정 | 목적 |
| --- | --- |
| IP 위치 조회 언어 | 영어, 중국어 간체, 일본어, 프랑스어 등 표시 언어를 선택합니다. |
| MaxMind Account ID | MaxMind GeoLite Web Service용 MaxMind 계정 ID입니다. |
| MaxMind License Key | MaxMind License Key입니다. |
| Tencent Map Key | Tencent Location Service 키입니다. 중국어 주소와 중국 본토 IP에 유용합니다. |
| ipapi Key | APILayer ipapi 키입니다. 다국어 IP 위치 조회를 지원합니다. |

필요한 서비스만 입력하세요. 모든 필드를 설정할 필요는 없습니다.

키를 제공하지 않아도 ImgBed는 내장 무료 정보원을 시도하지만, 안정성, 언어 지원, 정확도는 직접 설정한 서비스보다 낮을 수 있습니다.

## 권장 선택

주로 중국어 주소가 필요한 경우:

1. IP 위치 조회 언어를 중국어 간체로 설정합니다.
2. Tencent Map Key를 설정합니다.
3. 필요하면 MaxMind 또는 ipapi를 예비 정보원으로 추가합니다.

주로 영어 또는 다국어 주소가 필요한 경우:

1. 필요한 언어를 선택합니다.
2. MaxMind Account ID와 License Key를 설정합니다.
3. 더 나은 다국어 결과가 필요하면 ipapi Key를 추가합니다.

## MaxMind 설정

MaxMind에는 다음이 필요합니다.

```text
MaxMind Account ID
MaxMind License Key
```

MaxMind 대시보드에서 계정 ID를 찾고 License Keys 페이지에서 License Key를 생성합니다.

![MaxMind 키 설정](../../image/other/ip定位/maxmind的key配置.png)

생성 후 Account ID와 License Key를 ImgBed에 붙여 넣고 저장합니다.

MaxMind의 무료 플랜은 일상적인 사용에 적합하지만 요청 제한이 있습니다. 할당량을 초과하면 ImgBed는 사용 가능한 다른 정보원을 계속 시도합니다.

## ipapi 설정

ipapi는 APILayer API Key를 사용합니다.

ipapi 콘솔을 열고 표시된 API Key를 복사합니다.

![ipapi 설정](../../image/other/ip定位/ipapi配置.png)

ImgBed의 `ipapi Key` 필드에 붙여 넣고 저장합니다.

ipapi는 다국어 IP 위치 조회를 지원하며 선택한 언어로 주소를 표시하고 싶을 때 유용합니다. 무료 플랜에도 요청 제한이 있습니다. 할당량이 소진되면 ImgBed는 사용 가능한 다른 정보원을 계속 시도합니다.

## Tencent Map Key 설정

Tencent Map Key는 중국어 주소, 특히 중국 본토 IP에 유용합니다.

Tencent Location Service에서 키를 만들 때 다음을 활성화합니다.

```text
WebServiceAPI
```

생성 후 키를 `Tencent Map Key`에 붙여 넣고 저장합니다.

기본적인 중국어 IP 위치 조회만 필요하다면 Tencent Map Key로 시작할 수 있습니다.

## 사용자 관리에서 확인할 내용

사용자 관리는 관리자 패널 상단에서 사용할 수 있습니다.

![사용자 관리](../../image/other/用户管理显示.png)

사용자 관리는 IP별 업로드 활동을 표시합니다.

| 필드 | 설명 |
| --- | --- |
| IP 출처 | 업로드한 사용자의 출처 IP입니다. |
| 주소 | IP에서 해석된 대략적인 위치입니다. |
| 총 업로드 크기 | 이 IP가 업로드한 파일의 총 크기입니다. |
| 업로드 횟수 | 이 IP에서 발생한 업로드 횟수입니다. |
| 업로드 허용 | 켜짐은 업로드 허용, 꺼짐은 업로드 차단을 의미합니다. |

왼쪽 화살표를 클릭하면 해당 IP가 업로드한 파일 목록을 펼칠 수 있습니다.

파일 목록에는 파일 이름, 미리보기, 파일 크기, 검토 결과, 파일 상태, 업로드 시간이 표시됩니다. 업로드가 의심스러워 보이면 먼저 IP를 펼쳐 파일을 검토한 뒤 이후 업로드를 차단할지 결정합니다.

IP가 의심스러우면 `Upload allowed`를 끕니다. 이후 해당 IP의 업로드는 차단됩니다.

## 검색, 정렬, 고급 필터

사용자 관리 상단에서 IP 출처 또는 주소로 검색할 수 있습니다.

시간, 업로드 횟수, 총 업로드 크기 기준으로 정렬해 최근 업로더, 고빈도 업로더, 사용량이 큰 IP를 찾을 수 있습니다.

더 깊이 조사하려면 고급 필터를 엽니다.

![고급 필터](../../image/other/用户管理高级筛选.png)

고급 필터는 다음을 지원합니다.

| 필터 | 사용법 |
| --- | --- |
| 시간 범위 | 선택한 기간에 파일을 업로드한 IP를 표시합니다. |
| 접근 상태 | 정상, 차단됨 및 유사 상태로 필터링합니다. |
| 허용/차단 목록 | 허용 목록, 차단 목록 또는 미설정 기준으로 필터링합니다. |
| 파일 유형 | 이미지, 동영상, 오디오, 문서, 코드 또는 기타 파일을 업로드한 IP를 표시합니다. |
| 파일 크기 | 업로드된 파일 크기 범위로 필터링합니다. |
| 연령 등급 | 미설정, General, R12+, R16+, R18 및 유사 등급으로 필터링합니다. |
| 파일 상태 | 현재 파일 상태로 필터링해 비정상 파일을 조사합니다. |

적용하려면 `Apply Filters`를 클릭합니다. 모든 데이터로 돌아가려면 `Reset`을 사용합니다.

## 모바일 보기

모바일에서는 사용자 관리가 카드 레이아웃으로 전환됩니다.

![모바일 사용자 관리](../../image/other/手机端显示用户管理效果.png)

각 카드에는 IP, 주소, 총 업로드 크기, 업로드 횟수, 업로드 허용 스위치가 표시됩니다. 가로로 표를 스크롤하지 않고도 사용자를 관리할 수 있습니다.

## 위치가 잘못 보이는 경우

IP 위치 조회는 대략적인 정보입니다. 정확한 주소가 아닙니다.

사용자가 프록시, 데이터 센터, 클라우드 서버, 국경 간 네트워크 뒤에 있는 경우 표시 위치가 실제 위치와 다를 수 있습니다.

이 기능은 대략적인 출처 파악, 비정상 업로드 발견, 차단 판단 보조에 사용하세요. 정밀 추적 수단으로 취급하지 마세요.

## 일반적인 경우

| 경우 | 의미 |
| --- | --- |
| 주소가 비어 있음 | IP가 아직 해석되지 않았거나 현재 정보원이 일시적으로 사용할 수 없을 수 있습니다. |
| 주소 언어가 잘못됨 | IP 위치 조회 언어와 해당 언어를 지원하는 정보원이 설정되어 있는지 확인합니다. |
| 주소가 데이터 센터로 표시됨 | 많은 프록시, 클라우드 서버, 크롤러는 데이터 센터 또는 ISP 주소로 표시됩니다. |
| 업로드 횟수가 높음 | 이 IP를 주의 깊게 검토하고 필요하면 업로드를 차단합니다. |
| 총 업로드 크기가 큼 | 정렬하거나 필터링하고, IP를 펼쳐 특정 파일을 확인합니다. |
| 차단 후 복원 필요 | `Upload allowed`를 다시 켭니다. |

## 빠른 흐름

```text
Open IP Geolocation in Other Settings
-> Choose IP geolocation language
-> Fill MaxMind, Tencent Map, or ipapi credentials as needed
-> Save settings
-> Open User Management
-> Review IP source, address, total upload size, and upload count
-> Use search, sort, or advanced filters to find abnormal IPs
-> Allow or block uploads as needed
```
