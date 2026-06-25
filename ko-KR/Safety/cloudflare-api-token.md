# Cloudflare API Token

Cloudflare API 자격 증명을 설정하면 파일이 변경된 후 ImgBed가 Cloudflare CDN 캐시를 제거할 수 있습니다.

![Cloudflare API Token 설정](../../image/Safety/cloudflare%20api%20token截图.png)

## 설정 위치

관리자 패널을 열고 다음 위치로 이동합니다.

```text
System Settings -> Security Settings -> Cloudflare API Token
```

다음을 입력해야 합니다.

- Zone ID
- 계정 이메일
- API Key

## 이 설정의 역할

Cloudflare는 공개 이미지 URL을 캐시할 수 있습니다.

캐시는 이미지 전달을 더 빠르게 하지만, 파일을 삭제, 차단, 교체 또는 이동한 뒤에도 오래된 콘텐츠가 잠시 보일 수 있습니다.

Cloudflare API 자격 증명이 설정되면 ImgBed는 해당 작업이 완료될 때 관련 Cloudflare 캐시 제거를 시도합니다.

다음과 같은 경우에 유용합니다.

- 이미지를 삭제하고 공개 링크가 가능한 한 빨리 작동하지 않게 하고 싶을 때.
- 이미지를 차단하고 방문자가 원본 파일을 보지 못하게 하고 싶을 때.
- 같은 이름으로 파일을 교체하고 방문자가 새 버전을 더 빨리 보게 하고 싶을 때.
- 파일을 이동하거나 이름을 바꾸고 이전 경로의 캐시를 더 빨리 갱신하고 싶을 때.
- 공개 액세스 규칙을 변경하고 공개 갤러리 또는 랜덤 이미지 캐시를 더 빨리 갱신하고 싶을 때.

## 비워 두는 경우

이 설정이 없어도 ImgBed는 정상적으로 작동합니다.

차이는 ImgBed가 Cloudflare CDN 캐시를 능동적으로 제거하지 않는다는 점입니다. 방문자는 Cloudflare 캐시가 자연스럽게 만료될 때까지 오래된 콘텐츠를 볼 수 있습니다.

## Zone ID 찾는 방법

Zone ID는 ImgBed 도메인이 사용하는 사이트의 Cloudflare Zone ID입니다.

1. Cloudflare 대시보드에 로그인합니다.
2. ImgBed 도메인이 포함된 사이트를 엽니다.
3. 사이트 개요 페이지에서 `Zone ID`를 찾습니다.
4. ImgBed의 `Zone ID` 필드에 복사합니다.

이는 사이트 Zone ID이며 account ID가 아닙니다.

## 계정 이메일

Cloudflare에 로그인할 때 사용하는 이메일 주소를 입력합니다.

이 이메일은 아래 API Key와 일치해야 합니다.

## API Key

Cloudflare Global API Key를 입력합니다.

1. Cloudflare 대시보드에 로그인합니다.
2. 프로필을 엽니다.
3. API Tokens 페이지로 이동합니다.
4. `Global API Key`를 찾습니다.
5. 표시한 뒤 복사합니다.
6. ImgBed의 `API Key` 필드에 붙여 넣습니다.

![Global API Key 보기](../../image/Safety/查看全局令牌.png)

## 적용 시점

필드를 입력한 뒤 설정을 저장합니다.

그 이후의 파일 변경은 Cloudflare 캐시 제거를 자동으로 시도합니다. 이전 작업에는 소급 적용되지 않습니다. 이 설정 전에 파일을 삭제하거나 교체했다면 Cloudflare 캐시가 만료될 때까지 기다리거나 Cloudflare에서 수동으로 제거하세요.

## FAQ

### 필수인가요?

아니요.

도메인에서 Cloudflare를 사용하지 않거나 CDN 캐시 지연이 문제되지 않는다면 비워 두어도 됩니다.

### 잘못된 자격 증명이 업로드를 망가뜨리나요?

일반적으로 그렇지 않습니다.

잘못된 자격 증명은 ImgBed가 Cloudflare 캐시 제거에 실패하게 할 뿐입니다. 업로드와 일반 파일 액세스는 계속 작동해야 합니다.

### 삭제한 이미지가 아직 열리는 이유는 무엇인가요?

가장 흔한 원인은 Cloudflare가 오래된 파일을 아직 캐시하고 있기 때문입니다.

올바른 Cloudflare API 자격 증명이 있으면 ImgBed는 파일 삭제 시 관련 URL 캐시를 제거합니다.

### 파일을 교체한 뒤에도 오래된 이미지가 보이는 이유는 무엇인가요?

이 역시 일반적으로 CDN 캐시 때문입니다.

이 설정이 구성되면 ImgBed는 같은 이름의 파일이 덮어써질 때 이전 URL 캐시 제거를 시도합니다.
