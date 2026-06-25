# OCR

OCR은 이미지, 스캔, 문서 스크린샷에서 텍스트를 추출합니다.

인식 후에는 결과를 복사하거나 `Markdown`, `PDF`, `Word`로 내보내거나, 여러 형식을 함께 묶어 다운로드할 수 있습니다.

## OCR로 할 수 있는 일

| 기능 | 설명 |
| --- | --- |
| 이미지 텍스트 인식 | 이미지, 스크린샷, 스캔에서 텍스트를 추출합니다. |
| 문서 레이아웃 인식 | 표, 수식, 도장, 텍스트-이미지 혼합 레이아웃에 더 적합합니다. |
| 여러 서비스 | Baidu PaddleOCR, Microsoft Azure Vision, Google Vision을 지원합니다. |
| 결과 복사 | 처리 후 인식된 텍스트를 복사합니다. |
| 파일 내보내기 | `Markdown`, `PDF`, `Word`를 내보냅니다. |
| 일괄 패키징 | 여러 파일을 인식한 뒤 결과를 패키지로 다운로드합니다. |

## 먼저 OCR 서비스 설정하기

엽니다:

```text
System Settings -> Other Settings -> OCR
```

![IP 위치 조회와 OCR](../../image/other/ip定位和ocr文字识别.png)

사용할 서비스의 인증 정보를 입력합니다.

| 서비스 | 입력할 내용 | 적합한 용도 |
| --- | --- | --- |
| Baidu PaddleOCR | `PaddleOCR Token` | 첫 번째 선택지로 권장됩니다. 문서, 이미지, 표, 혼합 레이아웃에 좋습니다. |
| Microsoft Azure Vision | `Azure Vision Endpoint` 및 `Azure Vision API Key` | 이미 Microsoft 클라우드 서비스를 사용하는 경우 유용합니다. |
| Google Vision | `Google Vision API Key`. 서비스 계정 `JSON`은 할당량 조회에만 사용됩니다. | Google Cloud 서비스를 사용하는 경우 유용합니다. |

인증 정보를 입력한 뒤 저장합니다.

초기 테스트에는 서비스 하나만 설정해도 됩니다. 세 가지를 모두 설정할 필요는 없습니다.

## Google Vision 설정

Google 설정은 두 부분으로 나뉩니다.

| 목표 | 필요 사항 |
| --- | --- |
| OCR 사용 | `Cloud Vision API`를 활성화한 뒤 `API Key`를 만듭니다. |
| 사용량 조회 | 서비스 계정을 만들고 `Monitoring Viewer`를 부여한 뒤 서비스 계정 `JSON`을 다운로드합니다. |

![Google API 키와 서비스 계정](../../image/other/谷歌api秘钥和服务账号截图.png)

### OCR에 Google 사용하기

1. Google Cloud Console을 엽니다.
2. `APIs & Services`로 이동합니다.
3. `Library`를 열고 `Cloud Vision API`를 검색해 활성화합니다.
4. `Credentials`로 돌아갑니다.
5. `API Key`를 만듭니다.
6. API Key를 열어 복사합니다.
7. ImgBed의 `Google Vision API Key`에 붙여 넣습니다.
8. 저장합니다.

그런 다음 OCR 대화 상자에서 Google Vision을 선택할 수 있습니다.

### Google 사용량 조회하기

할당량 조회는 인식에 필수는 아닙니다.

최근 30일 동안 사용된 Google Vision 호출 수를 대략적으로 보여 줄 뿐입니다.

1. Google Cloud Console에서 `IAM & Admin`을 엽니다.
2. `Service Accounts`를 엽니다.
3. `vision-monitor` 같은 서비스 계정을 만듭니다.
4. `Monitoring Viewer` 역할을 부여합니다.
5. 서비스 계정 세부 정보로 들어가 키를 만듭니다.
6. `JSON`을 선택합니다.
7. 생성된 JSON 파일을 다운로드합니다.
8. ImgBed로 돌아가 서비스 계정 `JSON`으로 가져옵니다(선택 사항).
9. 가져오기에 성공하면 할당량 조회를 클릭합니다.

가져온 뒤 ImgBed는 서비스 계정이 속한 프로젝트 이름을 표시합니다. 사용량을 조회할 때 ImgBed는 Google 모니터링 데이터를 읽고 이번 달 호출 수를 표시합니다.

요약:

| 항목 | 목적 |
| --- | --- |
| `Google Vision API Key` | OCR 인식을 수행합니다. |
| 서비스 계정 `JSON` | 사용된 Google Vision 호출 수를 조회합니다. |
| `Monitoring Viewer` 역할 | 서비스 계정이 사용량 데이터를 읽을 수 있게 합니다. |

## Baidu PaddleOCR Token 받기

Baidu PaddleOCR에는 액세스 토큰이 필요합니다.

![PaddleOCR 토큰 받기](../../image/other/获取飞浆令牌.png)

Baidu PaddleOCR 페이지에서 `API` 호출 창을 열고 토큰 받기를 클릭한 뒤 복사합니다.

ImgBed로 돌아와 `PaddleOCR Token`에 붙여 넣고 저장합니다.

## 인식 시작하기

파일 관리에서 이미지 또는 문서 스크린샷을 선택하고 `OCR`을 클릭합니다.

![OCR 인식](../../image/other/ocr识别截图.png)

대화 상자에서 인식 서비스와 모델을 선택합니다.

일반적인 PaddleOCR 모델 선택:

| 모델 | 적합한 용도 |
| --- | --- |
| `PP-StructureV3` | 권장 기본값입니다. 문서, 표, 수식, 도장, 혼합 레이아웃에 좋습니다. |
| `PP-OCRv5` | 단순 이미지, 일반 텍스트, 가벼운 인식. |
| `PaddleOCR-VL` | 다국어, 복잡한 이미지, 차트와 유사한 콘텐츠. |
| `PaddleOCR-VL-1.5` | 더 복잡한 문서 페이지와 레이아웃 복원. |

확실하지 않다면 `PP-StructureV3`부터 시작하세요.

## 고급 옵션

| 옵션 | 설명 |
| --- | --- |
| 방향 보정 | 이미지가 회전했거나 기울어진 경우 사용합니다. |
| 문서 평탄화 | 휘어짐이나 기울기가 있는 촬영 문서에 사용합니다. |
| 레이아웃 감지 | 제목, 문단, 표, 이미지 구조를 보존하고 싶을 때 사용합니다. |
| 차트 인식 | 이미지에 차트나 복잡한 구조가 있을 때 사용합니다. |
| `Markdown` 정리 | 내보낸 Markdown을 더 읽기 쉽게 만듭니다. |

일반 스크린샷에는 옵션을 최소한으로 유지합니다. 문서 스캔에는 문서 관련 옵션을 더 많이 활성화합니다.

## 결과 보기

인식이 끝나면 대화 상자에 결과가 표시됩니다.

바로 복사하거나 내보내기 형식을 선택할 수 있습니다.

![PDF 인식](../../image/other/pdf识别截图.png)

문서 페이지의 경우 내보낸 `PDF`는 페이지 모양을 유지하면서 텍스트 검색이 가능하게 할 수 있습니다. 스캔 보관과 나중에 내용 검색에 유용합니다.

## 내보내기 형식 선택

| 형식 | 적합한 용도 |
| --- | --- |
| `Markdown (.md)` | 노트, 문서화 시스템, 이후 편집. |
| `PDF (.pdf)` | 페이지 모양과 스캔 문서 결과 보존. |
| `Word (.docx)` | 레이아웃 편집 계속하기, 텍스트 수정, 다른 사람에게 전달. |
| 모두 내보내기 | 여러 형식과 원본 이미지를 저장하며 중요한 보관에 적합합니다. |

텍스트만 필요하면 Markdown으로 내보냅니다.

페이지 모양이 필요하면 PDF 또는 Word를 사용합니다.

## Word 출력

내보낸 Word 문서는 오피스 소프트웨어에서 열고 편집할 수 있습니다.

![Word 결과](../../image/other/word识别结果.png)

일부 문서에는 인식된 이미지, 제목, 문단이 Word 출력에 포함됩니다.

인식 품질은 원본 이미지의 선명도, 모델 선택, 문서 복잡도에 따라 달라집니다.

## OCR에 적합한 파일 유형

| 파일 유형 | 권장 사항 |
| --- | --- |
| 선명한 스크린샷 | 바로 인식합니다. |
| 스캔 | `PP-StructureV3`를 우선 사용합니다. |
| 촬영한 문서 | 방향 보정과 문서 평탄화를 활성화합니다. |
| 표, 수식, 도장 | 구조화 모델을 우선 사용합니다. |
| 간단한 짧은 텍스트 이미지 | 보통 `PP-OCRv5`로 충분합니다. |

더 선명하고 텍스트가 더 반듯한 이미지는 보통 더 좋은 결과를 냅니다.

## 일반적인 경우

| 경우 | 의미 |
| --- | --- |
| 인식 실패 | 서비스 토큰 또는 키가 저장되어 있는지 확인합니다. |
| 인식이 느림 | 복잡한 문서와 큰 이미지는 시간이 더 걸립니다. |
| 표가 불완전함 | 구조화 모델을 시도합니다. |
| 텍스트에 오류가 있음 | 흐림, 반사, 기울기는 인식 오류를 늘립니다. 더 선명한 이미지를 시도하세요. |
| Word 출력에 이미지가 많음 | 구조화 모델은 일부 인식된 이미지를 보존할 수 있습니다. 정상입니다. |

### Google 할당량 조회 실패

다음을 확인하세요.

1. 서비스 계정 `JSON`을 가져왔습니다.
2. 서비스 계정에 `Monitoring Viewer` 역할이 있습니다.
3. 프로젝트에서 `Cloud Vision API`가 활성화되어 있습니다.

OCR만 필요하고 사용량 조회가 필요 없다면 서비스 계정 JSON은 무시하고 `Google Vision API Key`만 입력해도 됩니다.

## 빠른 흐름

```text
Open System Settings
-> Open Other Settings
-> Fill OCR service credentials
-> Save
-> Return to File Management
-> Select a file and click OCR
-> Choose a model
-> Wait for recognition
-> Copy results or export Markdown / PDF / Word
```
