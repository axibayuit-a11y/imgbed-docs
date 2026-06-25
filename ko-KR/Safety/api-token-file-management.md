# API Token 파일 관리

API Token 파일 관리는 스크립트, 자동화 작업, 외부 관리 패널에서 사용하기 위한 기능입니다. `manage` 권한을 사용하면 관리자 화면을 열지 않고도 파일 정보 수정, 파일 이동, 파일 이름 변경, 디렉터리 자리표시자 파일 생성, 파일 태그와 목록 상태 조정, 업로드 IP 차단 또는 복구, 단기 업로드 Token 생성과 삭제를 수행할 수 있습니다.

이 스크립트는 파일 관리와 사용자 관리에 포함된 가벼운 관리 작업만 처리합니다. 업로드, 목록 조회, 삭제, 업로드 설정, 사이트 설정, 연합 관계는 각각 전용 스크립트를 계속 사용합니다.

![API Token 편집](../../image/Safety/apitoken/编辑管理权限api.png)

## 준비하기

관리자 화면에 들어간 뒤 다음 위치를 엽니다.

시스템 설정 -> 보안 설정 -> API Token

API Token을 만들거나 수정할 때 이 Token에 관리가 허용되어 있는지 확인하세요. `manage` 권한은 파일 상태, 사용자 업로드 상태, 단기 업로드 Token 생성을 변경할 수 있으므로 신뢰할 수 있는 스크립트나 사용자에게만 부여하는 것이 좋습니다.

파일 관리 스크립트의 쓰기 작업은 기본적으로 모두 미리보기 모드이며 실제로 저장되지 않습니다. 미리보기 내용이 올바른지 확인한 뒤 `--apply`를 추가해 쓰기를 실행합니다.

Token은 환경 변수에 넣을 수도 있습니다.

```powershell
$env:IMGBED_API_TOKEN="your API Token"
```

## 스크립트 다운로드

| 스크립트 | 용도 |
| --- | --- |
| <a href="/tools/imgbed-token-manage.mjs" download>파일 관리 스크립트</a> | 파일 메타데이터, 검토 라벨, 파일 태그, 목록 상태, 이동, 이름 변경, 폴더 생성, IP 차단/복구, 단기 업로드 Token 생성과 삭제 |

스크립트를 실행하려면 로컬에 Node.js 18 이상이 설치되어 있어야 합니다.

## 기능 범위

| 기능 | 스크립트 | 권한 |
| --- | --- | --- |
| 파일 업로드 | `imgbed-token-single-upload.mjs` / `imgbed-token-chunk-upload.mjs` | `upload` |
| 파일 목록 조회, 파일 필터링, 사용자 통계 읽기 | `imgbed-token-list.mjs` | `list` |
| 명시적으로 지정한 파일 삭제 | `imgbed-token-delete.mjs` | `delete` |
| 파일 정보, 태그, 목록, 이동, 이름 변경, 폴더 생성, IP 차단, 단기 업로드 Token 생성 또는 삭제 | `imgbed-token-manage.mjs` | `manage` |
| 업로드 채널, 보안 설정, 페이지 설정, 기타 설정, 연합 관계 편집 | 설정 관리 관련 스크립트 | `manage` |

`imgbed-token-manage.mjs`는 파일 업로드, 파일 목록 조회, 파일 삭제를 수행하지 않습니다. `fileId`를 찾아야 할 때는 먼저 목록 조회 스크립트로 파일을 필터링하세요. 파일을 삭제해야 할 때는 명확한 `fileId`를 삭제 스크립트에 전달합니다.

## 공통 매개변수

| 매개변수 | 필수 | 설명 |
| --- | --- | --- |
| `--base-url <url>` | 예 | ImgBed 사이트 URL. 예: `https://image.ai6.me` |
| `--token <token>` | 예 | API Token. `IMGBED_API_TOKEN` 환경 변수도 사용할 수 있습니다 |
| `--retries <n>` | 아니요 | 일시적 실패 시 재시도 횟수. 기본값은 `3` |
| `--timeout-ms <n>` | 아니요 | 단일 요청 제한 시간. 기본값은 `180000` |
| `--output <pretty\|json>` | 아니요 | 출력 형식. 기본값은 `pretty`이며, 프로그램에서 호출할 때는 `json`을 권장합니다 |
| `--save-response <path>` | 아니요 | 최종 결과를 JSON 파일로 저장합니다 |
| `--batch-size <n>` | 아니요 | 배치 작업에서 요청 하나가 처리할 항목 수. 기본값은 `15`, 최대 `15` |
| `--apply` | 아니요 | 실제로 쓰기를 실행합니다. 없으면 미리보기만 수행합니다 |
| `-h` / `--help` | 아니요 | 스크립트 도움말을 표시합니다 |

## 먼저 fileId 확인하기

파일 관리 스크립트의 대부분 작업에는 `fileId`가 필요합니다. 먼저 목록 조회 스크립트로 확인할 수 있습니다.

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --dir "test4" `
  --count 10 `
  --output json
```

반환 결과의 `name`이 일반적으로 파일 관리 스크립트에 전달할 수 있는 `fileId`입니다.

## 파일 메타데이터

파일 메타데이터는 관리자 파일 관리 화면에 표시되는 파일 이름과 읽기 소스를 수정하는 데 사용됩니다.

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-metadata `
  --file-id "photos/2026/a.jpg" `
  --file-name "cover.jpg" `
  --read-source backup
```

미리보기 결과가 올바른지 확인한 뒤 저장합니다.

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-metadata `
  --file-id "photos/2026/a.jpg" `
  --file-name "cover.jpg" `
  --read-source backup `
  --apply
```

### 파일 메타데이터 매개변수

| 매개변수 | 설명 |
| --- | --- |
| `--set-metadata` | 단일 파일의 메타데이터를 수정합니다 |
| `--file-id <id>` | 수정할 파일 ID |
| `--file-name <name>` | 새 관리자 화면 표시 이름 |
| `--read-source <primary\|backup>` | 읽기 소스. `primary`는 기본 소스, `backup`은 백업 소스입니다 |

`--file-name`과 `--read-source` 중 하나 이상을 전달해야 합니다.

## 검토 라벨

검토 라벨은 파일의 연령 등급에 해당합니다. 현재 라벨을 먼저 읽은 뒤 수정할 수 있습니다.

검토 라벨 읽기:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get-label `
  --file-id "photos/2026/a.jpg"
```

검토 라벨 설정:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-label `
  --file-id "photos/2026/a.jpg" `
  --label r12 `
  --apply
```

### 검토 라벨 매개변수

| 매개변수 | 설명 |
| --- | --- |
| `--get-label` | 단일 파일의 검토 라벨을 읽습니다 |
| `--set-label` | 단일 파일의 검토 라벨을 수정합니다 |
| `--file-id <id>` | 파일 ID |
| `--label <value>` | 라벨 값: `all-ages`, `r12`, `r16`, `r18`, `None` |

## 파일 태그

파일 태그는 파일에 검색 가능한 업무 태그를 붙이는 데 사용됩니다. 스크립트는 읽기, 덮어쓰기, 추가, 제거를 지원하며 여러 파일의 배치 처리도 지원합니다.

파일 태그 읽기:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get-tags `
  --file-id "photos/2026/a.jpg"
```

태그 추가:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --add-tags `
  --file-id "photos/2026/a.jpg" `
  --tag "cover" `
  --tag "2026" `
  --apply
```

태그 제거:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --remove-tags `
  --file-id "photos/2026/a.jpg" `
  --tag "cover" `
  --apply
```

태그 덮어쓰기:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-tags `
  --file-id "photos/2026/a.jpg" `
  --tag "archive" `
  --tag "public" `
  --apply
```

태그 배치 추가:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --batch-tags `
  --file-id "photos/2026/a.jpg" `
  --file-id "photos/2026/b.jpg" `
  --tag-action add `
  --tag "batch-test" `
  --apply
```

### 파일 태그 매개변수

| 매개변수 | 설명 |
| --- | --- |
| `--get-tags` | 단일 파일 태그를 읽습니다 |
| `--set-tags` | 단일 파일 태그를 덮어씁니다 |
| `--add-tags` | 단일 파일에 태그를 추가합니다 |
| `--remove-tags` | 단일 파일에서 태그를 제거합니다 |
| `--batch-tags` | 태그 설정, 추가, 제거를 배치로 수행합니다 |
| `--file-id <id>` | 파일 ID. 배치 작업에서는 여러 번 전달할 수 있습니다 |
| `--tag <tag>` | 태그 값. 여러 번 전달할 수 있습니다 |
| `--tags-json <path>` | JSON 파일에서 태그 배열을 읽습니다 |
| `--tag-action <set\|add\|remove>` | 배치 태그 작업 |

`--tags-json` 파일 내용 예:

```json
["cover", "2026", "public"]
```

## 차단 목록과 허용 목록 상태

목록 상태는 공개 접근 모드에서 파일의 접근 제어 동작을 결정합니다. 단일 파일 또는 배치로 수정할 수 있습니다.

단일 파일을 허용 목록으로 설정:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-list-type `
  --file-id "photos/2026/a.jpg" `
  --list-type White `
  --apply
```

배치로 차단 목록에 추가:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --batch-list-type `
  --file-id "photos/2026/a.jpg" `
  --file-id "photos/2026/b.jpg" `
  --list-type Block `
  --apply
```

기본 목록 상태로 복원:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-list-type `
  --file-id "photos/2026/a.jpg" `
  --list-type None `
  --apply
```

### 차단 목록과 허용 목록 매개변수

| 매개변수 | 설명 |
| --- | --- |
| `--set-list-type` | 단일 파일의 목록 상태를 수정합니다 |
| `--batch-list-type` | 파일 목록 상태를 배치로 수정합니다. 단일 요청은 최대 `15`개 파일까지 처리합니다 |
| `--file-id <id>` | 파일 ID. 배치 작업에서는 여러 번 전달할 수 있습니다 |
| `--list-type <None\|White\|Block>` | `None`은 기본 상태, `White`는 허용 목록, `Block`은 차단 목록입니다 |

## 파일 이동

파일 이동은 하나 이상의 파일을 대상 디렉터리로 옮깁니다. 백엔드는 단일 요청에서 최대 `15`개 파일을 처리합니다. 스크립트는 `--batch-size`에 따라 자동으로 여러 요청으로 나누어 순서대로 실행합니다.

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --move `
  --file-id "photos/2026/a.jpg" `
  --file-id "photos/2026/b.jpg" `
  --target-path "archive/2026" `
  --apply
```

### 이동 매개변수

| 매개변수 | 설명 |
| --- | --- |
| `--move` | 파일을 이동합니다 |
| `--file-id <id>` | 이동할 파일 ID. 여러 번 전달할 수 있습니다 |
| `--target-path <dir>` | 대상 디렉터리 |
| `--batch-size <n>` | 요청마다 이동할 파일 수. 기본값은 `15`, 최대 `15` |

## 이름 변경 또는 경로 변경

이름 변경은 명확한 기존 파일 ID와 새 파일 ID를 사용합니다. 새 파일 ID는 파일 이름만 바꿀 수도 있고 디렉터리를 동시에 바꿀 수도 있습니다.

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --rename `
  --old-file-id "photos/2026/a.jpg" `
  --new-file-id "photos/2026/a-renamed.jpg" `
  --apply
```

배치 이름 변경 시 `--old-file-id`와 `--new-file-id`를 반복해서 전달할 수 있습니다.

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --rename `
  --old-file-id "photos/2026/a.jpg" `
  --new-file-id "archive/2026/a.jpg" `
  --old-file-id "photos/2026/b.jpg" `
  --new-file-id "archive/2026/b.jpg" `
  --apply
```

매핑을 JSON 파일에 작성할 수도 있습니다.

```json
[
  {
    "oldFileId": "photos/2026/a.jpg",
    "newFileId": "archive/2026/a.jpg"
  },
  {
    "oldFileId": "photos/2026/b.jpg",
    "newFileId": "archive/2026/b.jpg"
  }
]
```

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --rename `
  --items-json ".\rename-items.json" `
  --apply
```

### 이름 변경 매개변수

| 매개변수 | 설명 |
| --- | --- |
| `--rename` | 명확한 매핑에 따라 이름을 바꾸거나 경로를 변경합니다 |
| `--old-file-id <id>` | 기존 파일 ID. 여러 번 전달할 수 있습니다 |
| `--new-file-id <id>` | 새 파일 ID. 여러 번 전달할 수 있으며 수량은 `--old-file-id`와 같아야 합니다 |
| `--items-json <path>` | JSON 배열. 요소는 `{ "oldFileId": "...", "newFileId": "..." }`입니다 |
| `--batch-size <n>` | 요청마다 처리할 이름 변경 수. 기본값은 `15`, 최대 `15` |

## 폴더 생성

ImgBed의 디렉터리는 파일 경로에서 만들어지며 실제 빈 디렉터리는 없습니다. 스크립트가 폴더를 만들 때 대상 디렉터리 아래에 자리표시자 파일 `0.md`를 생성합니다. 이렇게 하면 관리자 파일 관리와 디렉터리 통계에서 해당 디렉터리가 표시됩니다.

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --create-folder `
  --parent-directory "photos" `
  --folder-name "2026" `
  --apply
```

### 폴더 생성 매개변수

| 매개변수 | 설명 |
| --- | --- |
| `--create-folder` | 디렉터리 자리표시자 파일을 생성합니다 |
| `--parent-directory <dir>` | 상위 디렉터리. 루트 디렉터리는 빈 문자열을 전달할 수 있습니다 |
| `--folder-name <name>` | 새 폴더 이름 |

## 업로드 IP 차단과 복구

관리 권한으로 특정 IP를 업로드 금지 목록에 추가할 수 있으며, 업로드 금지 목록에서 제거할 수도 있습니다. 이 작업은 해당 IP의 이후 업로드에 영향을 주며, 해당 IP가 이미 업로드한 파일은 삭제하지 않습니다.

업로드 IP 차단:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --block-ip "67.159.48.149" `
  --apply
```

업로드 IP 복구:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --allow-ip "67.159.48.149" `
  --apply
```

현재 업로드 금지 IP 목록 보기:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --blocked-ips
```

### IP 관리 매개변수

| 매개변수 | 설명 |
| --- | --- |
| `--block-ip <ip>` | 업로드 금지 목록에 추가합니다 |
| `--allow-ip <ip>` | 업로드 금지 목록에서 제거합니다 |

## 단기 업로드 Token 생성과 삭제

관리 권한은 단기 업로드 전용 Token을 만들 수 있습니다. 이 Token은 항상 `upload` 권한만 가지며, `autoDelete`는 항상 `true`이고, 만료 시간은 최대 `1`일입니다.

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --create-upload-token `
  --name "Temporary Upload Token" `
  --owner "upload-bot" `
  --default-upload-channel telegram `
  --expires-in-minutes 20 `
  --apply `
  --output json
```

밀리초 타임스탬프를 직접 전달할 수도 있습니다.

```powershell
$expiresAt = [DateTimeOffset]::UtcNow.AddHours(12).ToUnixTimeMilliseconds()

node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --create-upload-token `
  --name "Upload Token valid for one day" `
  --owner "upload-bot" `
  --default-upload-channel telegram `
  --expires-at $expiresAt `
  --apply
```

단기 업로드 Token을 삭제할 때는 생성 API가 반환한 `id`를 전달해야 합니다. 관리 Token은 다음 조건을 만족하는 Token만 삭제할 수 있습니다.

| 조건 | 요구 사항 |
| --- | --- |
| 권한 | `permissions`가 `upload`뿐임 |
| 자동 삭제 | `autoDelete=true` |
| 유효 기간 | `expiresAt - createdAt <= 24`시간 |

단기 업로드 Token 삭제:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --delete-upload-token `
  --token-id "mqt4jqokc85be80d1f0f47078e848a77d6c1aa6e" `
  --apply
```

관리 Token은 일반 Token, 장기 Token, `list` / `delete` / `manage` 권한이 포함된 Token, 유효 기간이 `1`일을 초과하는 업로드 Token을 삭제할 수 없습니다. 이러한 Token은 여전히 브라우저 관리자 화면에서 처리해야 합니다.

### 단기 업로드 Token 매개변수

| 매개변수 | 설명 |
| --- | --- |
| `--create-upload-token` | 단기 업로드 전용 Token을 생성합니다 |
| `--delete-upload-token` | 조건에 맞는 단기 업로드 전용 Token을 삭제합니다 |
| `--name <name>` | Token 이름 |
| `--owner <owner>` | Token 소유 설명 |
| `--default-upload-channel <key>` | 기본 업로드 채널. `telegram`, `s3`, `github` 같은 실제 채널이어야 합니다 |
| `--expires-in-minutes <n>` | 현재 시간 기준 만료 분 수. 최대 `1440` |
| `--expires-at <ms>` | 절대 만료 시간. 밀리초 타임스탬프이며 현재 시간으로부터 최대 `24`시간까지 허용됩니다 |
| `--token-id <id>` | 삭제할 단기 업로드 Token ID |

단기 업로드 Token은 업로드만 허용합니다. 테스트에서 `permissions=["upload"]`인 단기 Token으로 목록, 파일 관리, 삭제 API에 접근하면 모두 거부됩니다.

만료 후 `autoDelete=true`인 Token은 백엔드가 만료를 확인할 때 정리됩니다. API Token 목록을 읽을 때도 이미 만료된 자동 삭제 Token이 정리됩니다.

## API 대응표

| 작업 | 메서드 | API |
| --- | --- | --- |
| 파일 메타데이터 수정 | `PATCH` | `/api/manage/metadata/{fileId}` |
| 검토 라벨 읽기 | `GET` | `/api/manage/label/{fileId}` |
| 검토 라벨 수정 | `POST` | `/api/manage/label/{fileId}` |
| 파일 태그 읽기 | `GET` | `/api/manage/tags/{fileId}` |
| 파일 태그 수정 | `POST` | `/api/manage/tags/{fileId}` |
| 파일 태그 배치 수정 | `POST` | `/api/manage/tags/batch` |
| 목록 상태 수정 | `POST` | `/api/manage/listType/{fileId}` |
| 목록 상태 배치 수정 | `POST` | `/api/manage/listType/batch` |
| 이동 또는 이름 변경 | `POST` | `/api/manage/relocate/batch` |
| 폴더 생성 | `POST` | `/api/manage/folder/create` |
| 업로드 IP 차단 | `POST` | `/api/manage/cusConfig/blockip` |
| 업로드 IP 복구 | `POST` | `/api/manage/cusConfig/whiteip` |
| 단기 업로드 Token 생성 | `POST` | `/api/manage/apiTokens` |
| 단기 업로드 Token 삭제 | `DELETE` | `/api/manage/apiTokens?id={tokenId}` |

스크립트는 자동으로 다음을 포함합니다.

```text
Authorization: Bearer your API Token
```

## 출력 형식

기본 `pretty` 출력은 사람이 확인하기에 적합합니다. 다른 프로그램에서 계속 처리해야 한다면 `--output json`을 사용하세요.

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get-tags `
  --file-id "photos/2026/a.jpg" `
  --output json
```

전체 결과를 저장할 수도 있습니다.

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get-tags `
  --file-id "photos/2026/a.jpg" `
  --output json `
  --save-response ".\manage-result.json"
```

배치 이동, 배치 이름 변경, 배치 목록 작업은 백엔드가 반환하는 NDJSON 진행 스트림을 해석하고 이벤트 수, 완료 상태, 실패 상세 정보를 요약합니다.

## FAQ

### 명령 실행 후 변경되지 않는 이유

쓰기 작업은 기본적으로 미리보기 모드입니다. 미리보기 결과가 올바른지 확인한 뒤 `--apply`를 추가해야 실제로 저장됩니다.

### 이 스크립트로 업로드, 목록 조회, 삭제를 할 수 있나요

아니요. 업로드는 업로드 스크립트를 사용하고, 목록 조회와 필터링은 목록 조회 스크립트를 사용하며, 명확한 파일 삭제는 삭제 스크립트를 사용합니다. 파일 관리 스크립트는 `manage` 권한 아래의 가벼운 관리 작업만 처리합니다.

### 어떤 fileId를 전달해야 하는지 어떻게 알 수 있나요

먼저 `imgbed-token-list.mjs --files`로 파일을 조회하세요. 반환 결과의 `name`이 일반적으로 파일 ID이며, 여기서 `--file-id`에 전달하는 값입니다.

### 배치 작업은 한 번에 최대 몇 개 파일까지 처리하나요

백엔드는 단일 요청에서 최대 `15`개 파일을 처리합니다. 스크립트 기본값은 `--batch-size 15`입니다. 더 작은 값을 전달하면 그 수량에 맞춰 여러 요청으로 자동 분할해 순서대로 실행합니다.

### 실제 빈 폴더를 만들 수 있나요

ImgBed 디렉터리는 파일 경로에서 파생되므로 실제 빈 디렉터리는 없습니다. `--create-folder`는 디렉터리 자리표시자 파일 `0.md`를 만들어 해당 디렉터리가 파일 관리와 디렉터리 통계에 표시되도록 합니다.

### 단기 업로드 Token은 최대 얼마나 오래 유지되나요

최대 `1`일, 즉 `1440`분입니다. 이 시간을 초과하면 스크립트가 로컬에서 거부하며, 백엔드도 `API_TOKEN_MANAGE_CREATE_EXPIRES_AT_TOO_LONG`을 반환합니다.

### 단기 업로드 Token은 만료 후 자동으로 삭제되나요

자동으로 정리되지만 즉시 실행되는 예약 작업은 아닙니다. 만료된 Token이 다시 검증될 때 정리됩니다. API Token 목록을 읽을 때도 이미 만료되고 `autoDelete=true`인 Token이 정리됩니다.
