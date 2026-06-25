# API Token 파일 업로드

API Token 업로드는 스크립트, 자동화 작업, 외부 프로그램에서 ImgBed로 파일을 올릴 때 사용합니다. 웹 화면을 열지 않아도 사이트 주소, Token, 로컬 파일 경로, 실제 업로드 채널을 지정하면 파일을 업로드하고 결과로 파일 URL을 받을 수 있습니다.

![API Token 편집](../../image/Safety/apitoken/编辑api%20token.png)

## 준비하기

관리자 화면에서 다음 위치로 이동합니다.

```text
System Settings -> Security Settings -> API Token
```

API Token을 만들거나 수정할 때 업로드 권한을 켜고, 실제 기본 업로드 채널을 선택하세요. API Token 업로드는 `스마트 분배` 입구를 사용하지 않습니다. 스크립트에서도 실제 채널을 전달해야 합니다.

## 업로드 스크립트 다운로드

문서에는 두 개의 Node.js 스크립트가 포함되어 있습니다.

| 스크립트 | 용도 |
| --- | --- |
| <a href="/tools/imgbed-token-single-upload.mjs" download>단일 요청 업로드 스크립트 다운로드</a> | `/upload`를 한 번만 호출합니다. 작은 파일이나 연결 테스트에 적합합니다. |
| <a href="/tools/imgbed-token-chunk-upload.mjs" download>분할 업로드 스크립트 다운로드</a> | API Token의 분할 업로드, 직접 업로드, 플랫폼 업로드 세션을 사용합니다. 큰 파일에 적합합니다. |

실행하려면 Node.js 18 이상이 필요합니다.

## 사용 가능한 채널 확인

두 스크립트 모두 현재 API Token으로 사용할 수 있는 업로드 채널을 먼저 확인할 수 있습니다.

```powershell
node imgbed-token-single-upload.mjs --base-url "https://your-domain" --token "your API Token" --list-channels
node imgbed-token-chunk-upload.mjs --base-url "https://your-domain" --token "your API Token" --list-channels
```

채널 목록만 볼 때는 `--file`과 `--channel`이 필요 없습니다. 응답에는 기본 업로드 채널, 채널 키, 하위 채널 이름, 부하 분산 상태가 포함됩니다. 비밀 키, 갱신 토큰 같은 민감한 설정은 반환되지 않습니다.

## 어떤 업로드 방식을 쓸까

| 방식 | 적합한 경우 | 설명 |
| --- | --- | --- |
| 단일 요청 업로드 | 작은 파일, 간단한 스크립트, 연결 테스트 | 파일 전체를 하나의 요청으로 `/upload`에 보냅니다. |
| 분할 업로드 | 큰 파일, 시간 초과가 쉬운 파일 | 스크립트가 채널에 맞는 분할, 직접 업로드, 업로드 세션 흐름을 처리합니다. |

파일이 크다면 먼저 분할 업로드 스크립트를 사용하세요. 단일 요청 업로드는 Cloudflare 요청 크기, Worker 메모리, 각 플랫폼의 제한을 받습니다.

## 단일 요청 업로드

단일 요청 스크립트는 `/upload`로 한 번만 요청합니다.

```powershell
node imgbed-token-single-upload.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --file "D:\test\image.png" `
  --channel s3 `
  --folder "photos/2026"
```

Token은 환경 변수에 넣을 수도 있습니다.

```powershell
$env:IMGBED_API_TOKEN="your API Token"
node imgbed-token-single-upload.mjs --base-url "https://your-domain" --file "D:\test\image.png" --channel s3
```

### 단일 요청 매개변수

| 매개변수 | 필수 | 설명 |
| --- | --- | --- |
| `--base-url <url>` | 예 | ImgBed 사이트 주소. 예: `https://image.ai6.me` |
| `--token <token>` | 예 | API Token. `IMGBED_API_TOKEN` 환경 변수도 사용할 수 있습니다. |
| `--file <path>` | 예 | 로컬 파일 경로 |
| `--channel <key>` | 예 | 업로드 채널 |
| `--folder <path>` | 아니요 | 업로드 폴더. 예: `photos/2026` 또는 `/user/` |
| `--name-type <type>` | 아니요 | 이름 지정 방식. 서버 쪽 `uploadNameType`에 대응하며 기본값은 `default`입니다. |
| `--channel-name <name>` | 아니요 | 특정 하위 채널 또는 계정을 지정합니다. 생략하면 서버 쪽 채널 설정에 따릅니다. |
| `--retries <n>` | 아니요 | 일시적 실패 재시도 횟수. 기본값은 `3`입니다. |
| `--timeout-ms <n>` | 아니요 | 단일 요청 제한 시간. 기본값은 `180000`입니다. |
| `--output <pretty\|json>` | 아니요 | 출력 형식. 기본값은 `pretty`입니다. |
| `--save-response <path>` | 아니요 | 최종 결과를 JSON 파일로 저장합니다. |
| `--list-channels` | 아니요 | 현재 Token으로 사용할 수 있는 채널만 표시하고 업로드하지 않습니다. |

### 단일 요청 채널

| 채널 키 | 채널 |
| --- | --- |
| `telegram` / `tg` | Telegram |
| `discord` / `dc` | Discord |
| `cfr2` / `r2` | Cloudflare R2 |
| `s3` | S3 |
| `webdav` / `wd` | WebDAV 저장 채널 |
| `github` / `gh` | GitHub Releases |
| `gitlab` / `gl` | GitLab Packages |
| `huggingface` / `hf` | Hugging Face |
| `onedrive` / `od` | OneDrive |
| `googledrive` / `google` / `gd` | Google Drive |
| `dropbox` / `db` | Dropbox |
| `yandex` / `yx` | Yandex Disk |
| `pcloud` / `pd` | pCloud |

### 단일 요청 크기 제한

가능하면 단일 요청 파일은 100 MB 안쪽으로 유지하세요.

다음 채널에는 단일 `/upload` 요청에 대한 명확한 차단 기준이 있습니다.

| 채널 | 단일 업로드 상한 |
| --- | ---: |
| Telegram | 20 MiB |
| Discord | 10 MiB |
| S3 | 64 MiB |
| WebDAV | 64 MiB |
| GitHub Releases | 64 MiB |
| GitLab Packages | 64 MiB |

상한을 넘으면 스크립트가 로컬에서 해당 오류를 표시합니다. 다른 채널에는 스크립트에 100 MB 로컬 제한을 고정해 두지 않았습니다. 요청 본문이 Cloudflare나 플랫폼의 처리 능력을 넘으면 Cloudflare 또는 원격 플랫폼에서 오류를 반환합니다.

## 분할 업로드

분할 업로드 스크립트는 먼저 API Token으로 서버 쪽에서 파일 대상을 해석하게 한 뒤, 선택한 채널에 맞는 대용량 업로드 흐름을 실행합니다. 사용자가 직접 분할 세션, 병합, 완료 요청을 작성할 필요가 없습니다.

```powershell
node imgbed-token-chunk-upload.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --file "D:\test\video.zip" `
  --channel github `
  --folder "photos/2026" `
  --concurrency 3
```

### 분할 업로드 매개변수

| 매개변수 | 필수 | 설명 |
| --- | --- | --- |
| `--base-url <url>` | 예 | ImgBed 사이트 주소 |
| `--token <token>` | 예 | API Token. `IMGBED_API_TOKEN` 환경 변수도 사용할 수 있습니다. |
| `--file <path>` | 예 | 로컬 파일 경로 |
| `--channel <key>` | 예 | 업로드 채널 |
| `--folder <path>` | 아니요 | 업로드 폴더 |
| `--name-type <type>` | 아니요 | 이름 지정 방식. 서버 쪽 `uploadNameType`에 대응하며 기본값은 `default`입니다. |
| `--channel-name <name>` | 아니요 | 특정 하위 채널 또는 계정을 지정합니다. 생략하면 서버 쪽 채널 설정에 따릅니다. |
| `--concurrency <n>` | 아니요 | 동시 업로드 수. 기본값은 `1`, 최대값은 `3`입니다. |
| `--retries <n>` | 아니요 | 일시적 실패 재시도 횟수. 기본값은 `3`입니다. |
| `--timeout-ms <n>` | 아니요 | 각 요청 제한 시간. 기본값은 `180000`입니다. |
| `--output <pretty\|json>` | 아니요 | 출력 형식. 기본값은 `pretty`입니다. |
| `--save-response <path>` | 아니요 | 최종 결과를 JSON 파일로 저장합니다. |
| `--list-channels` | 아니요 | 현재 Token으로 사용할 수 있는 채널만 표시하고 업로드하지 않습니다. |

### 분할 업로드 채널

| 채널 키 | 업로드 흐름 |
| --- | --- |
| `telegram` / `tg` | `/upload` 실제 분할 세션 |
| `discord` / `dc` | `/upload` 실제 분할 세션 |
| `cfr2` / `r2` | `/upload` 실제 분할 세션 |
| `github` / `gh` | `/upload` 실제 분할 세션 |
| `gitlab` / `gl` | `/upload` 실제 분할 세션 |
| `webdav` / `wd` | `/upload` 실제 분할 세션 |
| `s3` | S3 멀티파트 업로드 |
| `onedrive` / `od` | OneDrive 업로드 세션 |
| `googledrive` / `google` / `gd` | Google Drive 재개 가능 업로드 |
| `dropbox` / `db` | Dropbox 업로드 세션 |
| `yandex` / `yx` | Yandex 직접 업로드 URL |
| `pcloud` / `pd` | pCloud 업로드 링크 |
| `huggingface` / `hf` | Hugging Face LFS 업로드 |

테스트에서 Yandex 압축 파일 샘플은 불안정했습니다. 압축하지 않은 파일은 업로드가 확인되었습니다.

## 반환 결과

업로드가 성공하면 스크립트는 다음과 같이 출력합니다.

```text
success
src: /file/photos/2026/example.png
url: https://your-domain/file/photos/2026/example.png
fileId: photos/2026/example.png
```

| 필드 | 설명 |
| --- | --- |
| `src` | 사이트 내부 파일 경로 |
| `url` | 전체 접근 URL. 자신의 스크립트나 데이터베이스에 바로 저장하기 좋습니다. |
| `fileId` | 파일 ID. 이후 조회, 관리, 기록에 사용합니다. |
| `channelName` | 분할 스크립트에서는 실제 사용된 하위 채널 또는 계정이 반환될 수 있습니다. |

`--output json`을 지정하면 프로그램에서 처리하기 쉬운 전체 JSON을 출력합니다.

## 단일 요청 API 직접 호출

스크립트를 쓰지 않고 단일 요청 업로드 API를 직접 호출할 수도 있습니다.

```text
POST https://your-domain/upload?uploadChannel=s3&uploadFolder=photos/2026&uploadNameType=default
Authorization: Bearer your API Token
Content-Type: multipart/form-data
```

폼 필드:

| 필드 | 필수 | 설명 |
| --- | --- | --- |
| `file` | 예 | 업로드할 파일 |

쿼리 매개변수:

| 매개변수 | 필수 | 설명 |
| --- | --- | --- |
| `uploadChannel` | 예 | 실제 업로드 채널 |
| `uploadFolder` | 아니요 | 업로드 폴더 |
| `uploadNameType` | 아니요 | 이름 지정 방식 |
| `channelName` | 아니요 | 하위 채널 또는 계정 지정 |

성공 응답 예:

```json
{
  "success": true,
  "src": "/file/photos/2026/example.png",
  "url": "https://your-domain/file/photos/2026/example.png",
  "fileId": "photos/2026/example.png"
}
```

## 자주 묻는 질문

### 큰 파일의 단일 요청 업로드가 실패합니다

단일 `/upload`는 파일 전체를 하나의 요청으로 보냅니다. 큰 파일은 Cloudflare나 원격 플랫폼에서 차단될 수 있습니다. 큰 파일에는 분할 업로드 스크립트를 사용하세요.

### `--channel-name`을 지정했는데도 실패합니다

관리자 화면에서 해당 채널 안에 같은 이름의 하위 채널이 있고, 그 채널이 활성화되어 있는지 확인하세요. `--channel-name`을 생략하면 서버 쪽은 해당 채널 설정에 따라 사용 가능한 계정을 선택합니다.

### 결과를 다른 프로그램에서 사용하고 싶습니다

`--output json`을 사용하거나 `--save-response result.json`을 추가하세요. 저장된 JSON의 `url` 필드에서 전체 파일 링크를 가져올 수 있습니다.

### Yandex에서 압축 파일 업로드가 실패합니다

Yandex는 압축 파일 형식을 지원하지 않습니다. 플랫폼 정책 때문일 수 있습니다. Yandex 채널을 사용할 때는 가능하면 압축하지 않은 파일을 업로드하세요.

