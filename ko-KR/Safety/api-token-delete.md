# API Token 파일 삭제

API Token 삭제 스크립트는 스크립트, 자동화 작업, 외부 프로그램에서 ImgBed 파일을 삭제할 때 사용합니다. 관리자 화면을 열지 않아도 사이트 주소, Token, 명확한 파일 ID를 전달하면 ImgBed 안의 파일을 하나 또는 여러 개 삭제할 수 있습니다.

삭제는 쓰기 작업입니다. 명령을 실행하면 실제로 파일이 삭제됩니다. 먼저 `imgbed-token-list.mjs`로 삭제할 `fileId`를 정확히 확인한 뒤, 그 ID를 삭제 스크립트에 전달하는 것을 권장합니다.

![API Token 편집](../../image/Safety/apitoken/编辑api token.png)

## 준비하기

관리자 화면에서 다음 위치로 이동합니다.

```text
System Settings -> Security Settings -> API Token
```

API Token을 만들거나 수정할 때 이 Token에 삭제 권한이 있는지 확인하세요. 이 스크립트에는 `delete` 권한만 필요합니다.

Token은 환경 변수에 넣을 수도 있습니다.

```powershell
$env:IMGBED_API_TOKEN="your API Token"
```

## 삭제 스크립트 다운로드

| 스크립트 | 용도 |
| --- | --- |
| <a href="/tools/imgbed-token-delete.mjs" download>파일 삭제 스크립트 다운로드</a> | 명확히 지정한 파일 ID를 하나 또는 여러 개 삭제합니다 |

실행하려면 Node.js 18 이상이 필요합니다.

## 삭제 API 동작

삭제 스크립트는 백엔드 삭제 API를 호출합니다.

```text
POST /api/manage/delete/batch
```

요청에는 API Token이 필요합니다.

```text
Authorization: Bearer <token>
```

요청 본문 예:

```json
{
  "fileIds": ["photos/2026/a.txt"],
  "deleteStrictness": "strict"
}
```

`fileIds`에 파일이 1개만 있으면 단일 파일 삭제이고, 여러 개가 있으면 일괄 삭제입니다. 백엔드는 한 번의 요청에서 최대 15개 파일까지 처리합니다. 스크립트는 `--batch-size` 값에 따라 요청을 자동으로 나누어 보냅니다.

API는 NDJSON 진행 스트림을 반환합니다. 자주 나오는 이벤트에는 `batch_start`, `file_step`, `file_done`, `batch_complete`, `batch_error`가 있습니다. 스크립트는 이 이벤트들을 해석해 사람이 읽기 쉬운 결과 또는 JSON 결과로 정리합니다.

삭제가 성공하면 백엔드는 파일 색인, 디렉터리 통계, 용량 통계, 캐시 정리도 자동으로 처리합니다.

## 삭제 스크립트 매개변수

| 매개변수 | 필수 | 설명 |
| --- | --- | --- |
| `--base-url <url>` | 예 | ImgBed 사이트 주소. 예: `https://image.ai6.me` |
| `--token <token>` | 예 | API Token. `IMGBED_API_TOKEN` 환경 변수도 사용할 수 있습니다. |
| `--file-id <id>` | 예 | 삭제할 파일 ID. 여러 번 전달할 수 있습니다. |
| `--strictness <strict\|soft>` | 아니요 | 삭제 엄격도. 기본값은 `strict`입니다. |
| `--batch-size <n>` | 아니요 | 요청 한 번에 삭제할 파일 수. 기본값은 `15`, 최대값도 `15`입니다. |
| `--retries <n>` | 아니요 | 일시적 실패 재시도 횟수. 기본값은 `3`입니다. |
| `--timeout-ms <n>` | 아니요 | 단일 요청 제한 시간. 기본값은 `180000`입니다. |
| `--output <pretty\|json>` | 아니요 | 출력 형식. 기본값은 `pretty`입니다. |
| `--save-response <path>` | 아니요 | 최종 결과를 JSON 파일로 저장합니다. |
| `-h` / `--help` | 아니요 | 스크립트 도움말을 표시합니다. |

이 스크립트는 `--file-id`로 명시적으로 전달한 파일만 삭제합니다. 모호한 검색을 하지 않고, 디렉터리를 통째로 비우지 않으며, 쉼표로 구분한 목록이나 로컬 파일에서 삭제할 ID를 읽어 오지도 않습니다.

## 엄격 삭제와 소프트 삭제

| 모드 | 설명 |
| --- | --- |
| `strict` | 기본 모드입니다. 원격 저장소 삭제에 실패하면 ImgBed 기록을 남깁니다. 나중에 다시 시도하거나 원인을 확인하기 쉽습니다. |
| `soft` | 원격 저장소 삭제에 실패해도 ImgBed 기록 정리를 계속하고, 결과에 경고를 반환합니다. |

원격 파일까지 삭제되어야 성공으로 보고 싶다면 기본값인 `strict`를 사용하세요. 어떤 원격 플랫폼에서 더 이상 삭제할 수 없고 ImgBed 기록만 정리하려는 경우에는 `soft`를 사용할 수 있습니다.

## 사용 예

파일 하나 삭제:

```powershell
node imgbed-token-delete.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --file-id "photos/2026/a.txt"
```

환경 변수의 Token 사용:

```powershell
$env:IMGBED_API_TOKEN="your API Token"

node imgbed-token-delete.mjs `
  --base-url "https://your-domain" `
  --file-id "photos/2026/a.txt"
```

파일 여러 개 삭제:

```powershell
node imgbed-token-delete.mjs `
  --base-url "https://your-domain" `
  --file-id "photos/2026/a.txt" `
  --file-id "photos/2026/b.txt" `
  --file-id "photos/2026/c.txt"
```

원격 삭제가 실패해도 ImgBed 기록 정리:

```powershell
node imgbed-token-delete.mjs `
  --base-url "https://your-domain" `
  --file-id "photos/2026/a.txt" `
  --strictness soft
```

JSON으로 출력하고 결과 저장:

```powershell
node imgbed-token-delete.mjs `
  --base-url "https://your-domain" `
  --file-id "photos/2026/a.txt" `
  --output json `
  --save-response ".\delete-result.json"
```

요청 한 번에 삭제할 파일 수를 5개로 제한:

```powershell
node imgbed-token-delete.mjs `
  --base-url "https://your-domain" `
  --file-id "photos/2026/a.txt" `
  --file-id "photos/2026/b.txt" `
  --batch-size 5
```

## 삭제 전에 fileId 확인

삭제 스크립트에 필요한 값은 ImgBed 파일 ID입니다. 먼저 목록 스크립트로 디렉터리 안의 파일을 확인할 수 있습니다.

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --dir "photos/2026" `
  --count 10 `
  --output json
```

반환 결과의 `name`은 보통 삭제 스크립트에 전달할 수 있는 `fileId`입니다.

## 자주 묻는 질문

### 삭제가 실패했는데 파일이 목록에 남아 있는 이유는 무엇인가요?

기본값인 `strict`를 사용하면 원격 저장소 삭제에 실패했을 때 ImgBed 기록을 남깁니다. 로컬 색인만 지워지고 원격 파일은 남는 상황을 피하기 위해서입니다. ImgBed 기록만 정리해도 된다고 확인한 뒤, 같은 `fileId`에 `soft`로 다시 시도하세요.

### 결과에 경고가 있는 이유는 무엇인가요?

경고는 보통 원격 삭제, 캐시 정리, 통계 마무리 과정에서 치명적이지 않은 문제가 있었다는 뜻입니다. 스크립트는 경고를 모아서 보여 주므로 다시 시도해야 할지 판단하기 쉽습니다.

### 디렉터리 단위로 한 번에 삭제할 수 있나요?

이 스크립트는 디렉터리를 비우는 기능을 제공하지 않습니다. 먼저 목록 스크립트로 명확한 `fileId`를 골라낸 뒤, 삭제할 파일을 하나씩 삭제 스크립트에 전달해야 합니다.

