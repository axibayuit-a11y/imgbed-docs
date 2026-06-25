# WebDAV 채널 추가

## 적합한 경우

다음과 같은 경우 WebDAV 채널을 사용하세요.

- WebDAV 엔드포인트를 제공하는 NAS, 클라우드 드라이브 또는 오브젝트 스토리지 서비스가 있는 경우.
- 업로드된 이미지를 자체 WebDAV 디렉터리에 저장하려는 경우.
- 자격 증명을 프런트엔드에 장기간 노출하는 대신 D1 `upload_channels` 테이블에 저장하려는 경우.

## 시작하기 전에 필요한 항목

| 요구 사항 | 용도 |
| --- | --- |
| WebDAV Endpoint | 서버 측 WebDAV URL. 예: `https://nas.example.com/dav`. |
| Username | WebDAV 서비스에 로그인하는 데 사용합니다. |
| Password | WebDAV 서비스에 로그인하는 데 사용합니다. |
| Authentication mode | 기본값은 `Basic`입니다. 서버가 요구하는 경우에만 `Digest` 또는 자동 협상을 사용합니다. |
| Storage directory | 파일 저장에 사용할 디렉터리. 기본값은 `imgbed`입니다. |

## 추가 위치

1. 시스템 설정을 엽니다.
2. 업로드 설정으로 이동합니다.
3. 오른쪽 위의 Add Channel을 클릭합니다.
4. `WebDAV`를 선택합니다.

## 필드 참조

| 필드 | 기능 | 필수 |
| --- | --- | --- |
| 채널 이름 | 이 WebDAV 채널을 식별하기 쉬운 이름. 예: `koofr` 또는 `nas`. | 예 |
| Endpoint | `https://`. 포함한 전체 WebDAV 엔드포인트. | 예 |
| Username | WebDAV 로그인 사용자 이름. | 예 |
| Password | WebDAV 로그인 비밀번호. | 예 |
| Authentication mode | 일반적으로 `Basic`입니다. 서버가 digest authentication을 요구하면 `Digest`를 사용합니다. | 예 |
| Storage directory | 파일이 저장되는 디렉터리. 기본값은 `imgbed`입니다. | 아니요 |

## 예: fie.nl.tab.digital

### 1. 앱 비밀번호 만들기

계정 보안 설정을 열고 application passwords를 찾아 새 앱 비밀번호를 만듭니다.

![앱 비밀번호 만들기](../../image/upload/webdav/创建应用密码.png)

생성 후 새 앱 비밀번호를 즉시 복사하여 저장합니다. 일반적으로 한 번만 표시됩니다.

![새 앱 비밀번호 저장](../../image/upload/webdav/记住新应用程序密码.png)

### 2. ImgBed에 WebDAV 설정 입력하기

ImgBed로 돌아가 WebDAV 채널을 추가합니다.

| UI 필드 | 값 |
| --- | --- |
| Endpoint | `https://fie.nl.tab.digital/` 제공하는 WebDAV URL. |
| Username | WebDAV 사용자 이름. |
| Password | 방금 만든 앱 비밀번호. |
| Authentication mode | 대부분의 경우 `Basic`으로 시작합니다. |
| Storage directory | 기본값은 `imgbed`입니다. 사용자 지정 디렉터리도 사용할 수 있습니다. |

![설정 입력](../../image/upload/webdav/填写配置.png)

## 대용량 파일 업로드 동작

WebDAV 채널은 이제 실제 세션 기반 청크 업로드를 사용합니다.

작은 파일은 하나의 완전한 파일로 업로드됩니다. 64 MiB보다 큰 파일은 약 10 MiB 크기의 청크로 자동 분할되어 원격 청크 디렉터리에 업로드됩니다.

WebDAV 서비스는 `partial update` 또는 offset-based writes를 지원할 필요가 없습니다. ImgBed는 원격 서버에서 청크를 하나의 큰 파일로 병합하지 않습니다. 대신 청크 manifest를 저장하고, 파일이 요청될 때 청크를 순서대로 읽습니다.

실제 동작은 다음과 같습니다.

| 파일 크기 | 업로드 방식 | 원격 저장소 구조 |
| --- | --- | --- |
| 64 MiB 이하 | 일반 업로드 | 하나의 완전한 파일 |
| 64 MiB 초과 | 실제 세션 청크 업로드 | 여러 청크 파일을 포함하는 청크 디렉터리 |

청크 디렉터리는 원격 저장소 구조에만 영향을 줍니다. ImgBed의 파일 URL은 변경되지 않습니다. 사용자는 여전히 원래 `/file/...` 링크를 통해 파일에 접근합니다.

## 설정 단계

1. 업로드 설정을 엽니다.
2. Add Channel을 클릭합니다.
3. `WebDAV`를 선택합니다.
4. 식별하기 쉬운 채널 이름을 입력합니다. 예: `koofr`.
5. WebDAV 엔드포인트를 입력합니다. 예: `https://app.koofr.net/dav/Koofr`.
6. 사용자 이름과 비밀번호를 입력합니다.
7. authentication mode는 기본값인 `Basic`으로 유지합니다.
8. storage directory를 `imgbed`로 유지하거나 자체 디렉터리로 변경합니다.
9. 저장을 클릭합니다.
10. 저장 후 채널 카드를 확인하고, 가능하면 용량을 조회한 뒤 테스트 파일을 업로드합니다.

## 확인 방법

| 확인 항목 | 확인 방법 |
| --- | --- |
| 채널 카드 표시 | 저장 후 업로드 설정 페이지에 WebDAV 채널 카드가 표시됩니다. |
| 채널 활성화 | 카드 오른쪽 위의 스위치가 켜진 상태로 유지됩니다. |
| 자격 증명 저장 | 상세 보기에서 Endpoint, username, authentication mode, storage directory를 확인할 수 있습니다. |
| 작은 파일 업로드 동작 | 테스트 이미지를 업로드하고 WebDAV 디렉터리에 파일이 나타나는지 확인합니다. |
| 대용량 파일 규칙 동작 | 64 MiB보다 큰 파일은 청크 업로드를 사용하고 원격 청크 디렉터리를 생성합니다. |
| 용량 조회 동작 | 서버가 용량 정보를 지원하면 조회 결과에 사용 용량과 총 용량이 표시됩니다. |

![quota 조회 성공](../../image/upload/webdav/查询额度成功.png)

## FAQ

### 큰 WebDAV 파일이 청크 디렉터리를 만드는 이유는 무엇인가요?

현재 대용량 파일의 저장 방식입니다.

64 MiB보다 큰 파일은 하나의 큰 원격 파일로 병합되지 않습니다. 청크 디렉터리로 저장됩니다. ImgBed는 청크 manifest를 기록하고, 청크를 순서대로 읽어 전체 콘텐츠를 반환합니다.

### 대용량 파일 업로드가 실패하면 먼저 무엇을 확인해야 하나요?

먼저 Endpoint, username, password, storage directory를 확인합니다. 그런 다음 WebDAV 서비스가 디렉터리 생성, 파일 쓰기, 파일 읽기를 허용하는지 확인합니다.

용량 조회는 실패하지만 작은 파일 업로드는 동작한다면, 서버가 용량 보고를 지원하지 않거나 제한하고 있을 수 있습니다. 이것이 반드시 업로드를 사용할 수 없다는 뜻은 아닙니다.

### 어떤 authentication mode를 사용해야 하나요?

`Basic`으로 시작합니다.

서버가 digest authentication을 명시적으로 요구하면 `Digest`를 사용합니다.

확실하지 않다면 자동 협상을 사용합니다.

## 빠른 체크리스트

```text
Prepare WebDAV endpoint, username, and password
-> Open Upload Settings
-> Add Channel
-> Select WebDAV
-> Enter Endpoint / username / password
-> Keep authentication mode as Basic by default
-> Keep storage directory as imgbed by default
-> Save
-> Query capacity
-> Upload a test file
```
