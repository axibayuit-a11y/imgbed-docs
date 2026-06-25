# 자동 태그 지정

자동 태그 지정은 다음 위치에서 설정합니다.

```text
System Settings -> Other Settings -> Auto Tagging
```

이미지 태그를 자동으로 생성합니다. 이 태그는 검색, 랜덤 이미지 필터링, 공개 갤러리 필터링, 연령 등급 기반 접근 제어에 유용합니다.

## 자동 태그 지정으로 할 수 있는 일

| 기능 | 설명 |
| --- | --- |
| 콘텐츠 태그 생성 | 사람, 장면, 사물, 아트 스타일 등 유사한 시각 콘텐츠에 대한 태그를 추가합니다. |
| 캐릭터 태그 생성 | 애니메이션 이미지와 일러스트에 유용합니다. |
| 방향 태그 추가 | `landscape`, `portrait`, `square` 를 추가합니다. |
| 이미지 등급 추가 | 일반, 민감, 의심, 노골적 콘텐츠에 대한 `G/S/Q/E` 등급 결과를 저장합니다. |
| 업로드 시 자동 태그 지정 | 새로 업로드된 이미지가 자동으로 태그 지정 흐름에 들어갑니다. |
| 일괄 태그 지정 | 모든 폴더 또는 선택한 폴더의 기존 이미지에 태그를 추가합니다. |

## 먼저 필요한 것

접근 가능한 Hugging Face Space URL을 최소 1개 준비합니다.

권장 방식은 SmilingWolf의 `wd-tagger` Space를 자신의 Hugging Face 계정으로 복제하는 것입니다.

```text
https://huggingface.co/spaces/SmilingWolf/wd-tagger
```

공개 Space를 임시로 사용할 수도 있지만, 공개 Space는 많은 사용자가 함께 사용하므로 대기열이 생기거나 느려지거나 일시적으로 사용할 수 없을 수 있습니다. 장기적인 자동 태그 지정에는 자신의 계정에 복제한 Space가 더 안정적입니다.

## SmilingWolf의 Space 복제하기

1. Hugging Face에 로그인합니다.
2. `https://huggingface.co/spaces/SmilingWolf/wd-tagger`를 엽니다.

![SmilingWolf 공개 Space](../../image/other/微笑狼的公开仓库.png)

3. 오른쪽 위의 점 세 개 메뉴를 클릭합니다.
4. `Duplicate this Space`를 선택합니다.
5. 기본 Space 이름을 유지하거나 `wd-tagger`처럼 원하는 이름을 선택합니다.
6. 공개 범위를 `Public`으로 설정합니다. Public Space가 ImgBed에서 호출하기 더 쉽습니다.
7. 처음에는 기본 무료 하드웨어를 유지합니다. 대기열이 뚜렷해질 때만 나중에 업그레이드합니다.
8. Space를 만들고 빌드가 끝날 때까지 기다립니다.

빌드가 끝나면 자신의 Space 페이지를 엽니다. URL은 보통 다음과 같은 형태입니다.

```text
https://huggingface.co/spaces/your-name/wd-tagger
```

브라우저 URL을 복사해 ImgBed의 `Space URLs`에 붙여 넣습니다.

## 여러 Space URL 입력하기

Space URL은 한 줄에 하나씩 입력합니다.

예:

| 값 | 설명 |
| --- | --- |
| `https://huggingface.co/spaces/SmilingWolf/wd-tagger` | SmilingWolf 공개 Space. 임시 테스트에 적합합니다. |
| `https://huggingface.co/spaces/lintonxue00/wd-tagger` | 복사한 Space 페이지 URL입니다. |
| `https://huggingface.co/spaces/your-name/wd-tagger` | 자신이 복제한 Space 페이지 URL입니다. |

여러 URL을 입력할 수 있습니다. ImgBed는 여러 Space를 함께 사용하므로 속도가 향상될 수 있습니다.

하나의 Space가 일시적으로 사용할 수 없는 상태여도 다른 Space가 처리를 계속할 수 있습니다.

## 설정

| 옵션 | 권장 사항 |
| --- | --- |
| `Space URLs` | 준비한 Space URL을 입력합니다. 최소 1개는 필요합니다. |
| 대상 폴더 | 모든 폴더를 처리하려면 비워 둡니다. 특정 디렉터리만 처리하려는 경우에만 폴더를 선택합니다. |
| 인식 모델 | 기본값으로 `wd-swinv2-tagger-v3`를 유지합니다. |
| 일반 태그 임계값 | 기본값은 대부분의 이미지에 적합합니다. 값을 낮추면 태그가 많아지고, 높이면 태그가 줄어듭니다. |
| 캐릭터 태그 임계값 | 기본값은 보수적이며 잘못된 캐릭터 태그를 줄이는 데 도움이 됩니다. |
| `MCut` 자동 임계값 | 처음에는 꺼 둡니다. 모델이 태그 수를 자동으로 결정하게 하고 싶을 때 켭니다. |
| 업로드 시 자동 태그 지정 | 새로 업로드된 이미지에 자동으로 태그를 붙이려면 켭니다. |
| 태그 지정 시작 | 기존 이미지를 수동으로 일괄 태그 지정합니다. |

## 권장 초기값

| 옵션 | 권장값 |
| --- | --- |
| 인식 모델 | `wd-swinv2-tagger-v3` |
| 일반 태그 임계값 | `0.35` |
| 캐릭터 태그 임계값 | `0.85` |
| `MCut` | 처음에는 끔 |
| 업로드 시 자동 태그 지정 | 필요할 때 활성화 |

태그가 너무 많으면 일반 태그 임계값을 조금 올립니다.

태그가 너무 적으면 일반 태그 임계값을 조금 낮춥니다.

## 일괄 태그 지정

1. `Space URLs`를 입력합니다.
2. 대상 폴더를 선택합니다.
3. 태그 지정 시작을 클릭합니다.
4. 진행이 완료될 때까지 기다립니다.

대상 폴더가 비어 있으면 ImgBed는 모든 폴더를 처리합니다.

일괄 태그 지정은 기존 이미지에 가장 적합합니다. 새 이미지에는 업로드 시 자동 태그 지정을 켜 두면 매번 수동으로 실행하지 않아도 됩니다.

## 업로드 시 자동 태그 지정

업로드 시 자동 태그 지정을 켜면 새로 업로드된 이미지에 대해 ImgBed가 설정된 `Space URLs`를 자동으로 호출합니다.

장기 사용에 적합합니다.

Space에 대기열이 있어도 업로드 자체는 먼저 완료될 수 있으며, 태그 지정은 이후 계속 진행됩니다.

## 처리되는 이미지

자동 태그 지정은 주로 이미지 파일을 처리합니다.

태그, 방향, 등급, 너비, 높이가 이미 모두 있는 이미지는 불필요한 Space 호출을 피하기 위해 건너뜁니다.

가능한 경우 ImgBed는 누락된 정보만 채웁니다. 예를 들어 방향만 누락된 경우 전체 콘텐츠 태그 지정 흐름을 호출하지 않고 방향 추가를 시도합니다.

## 자주 묻는 질문

### 왜 내 Space를 복제해야 하나요?

공개 Space는 많은 사용자가 함께 사용합니다. 자신이 복제한 Space는 주로 자신의 ImgBed 사이트에서 사용되므로 일반적으로 더 빠르고 안정적입니다.

### Space가 계속 시작 중으로 표시됩니다

처음 만든 후 또는 오랫동안 사용하지 않은 후에는 Space를 시작하는 데 시간이 걸릴 수 있습니다.

먼저 자신의 Space 페이지를 엽니다. 이미지가 정상적으로 인식되는 것을 확인한 뒤 ImgBed로 돌아와 태그 지정을 시작하세요.

### Space URL은 어떻게 복사하나요?

자신의 Hugging Face Space 페이지를 열고 브라우저 주소를 복사합니다.

예:

```text
https://huggingface.co/spaces/lintonxue00/wd-tagger
https://huggingface.co/spaces/SmilingWolf/wd-tagger
```

### 여러 Space를 추가할 수 있나요?

예. 한 줄에 하나씩 Space URL을 입력합니다.

여러 Space는 이미지를 함께 처리하므로 이미지가 많을 때 유용합니다.

### 태그가 영어로 나오는 이유는 무엇인가요?

SmilingWolf 모델은 영어 태그를 출력합니다. 이는 정상 동작입니다.

태그는 주로 검색, 필터링, 랜덤 이미지 API, 공개 갤러리 필터에 사용됩니다.

### 등급 태그는 어디에 사용되나요?

등급 결과는 보안 설정의 접근 모드와 함께 작동합니다.

예를 들어 방문자 접근이 연령 등급으로 제한된 경우, 공개 탐색과 랜덤 이미지 기능은 해당 규칙에 따라 이미지를 필터링합니다.

## 빠른 흐름

```text
Sign in to Hugging Face
-> Open SmilingWolf/wd-tagger
-> Duplicate this Space
-> Wait for the Space to build
-> Copy your Space URL
-> Fill Space URLs in ImgBed
-> Choose model and thresholds
-> Start tagging or enable auto-tag on upload
```
