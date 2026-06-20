# pCloud 채널 추가

pCloud 채널은 pCloud 계정의 저장 공간을 ImgBed 저장 위치로 사용합니다.

## 적합한 경우

- pCloud 계정을 가지고 있습니다.
- 이미지나 파일을 pCloud 공간에도 저장하고 싶습니다.
- 이메일과 비밀번호 기반 연결 방식을 사용할 수 있습니다.

## 준비할 것

| 준비 항목 | 용도 |
| --- | --- |
| pCloud 이메일 | pCloud API 로그인 |
| pCloud 비밀번호 | pCloud API 로그인 |
| Host | 기본 `api.pcloud.com`, EU 계정은 `eapi.pcloud.com` |
| 저장 디렉터리 | 선택 사항. 보통 `imgbed` |

## 설정 위치

1. 시스템 설정을 엽니다.
2. 업로드 설정을 엽니다.
3. `채널 추가`를 누릅니다.
4. `pCloud`를 선택합니다.

## 입력 항목

| 항목 | 입력 내용 |
| --- | --- |
| 채널 이름 | 예: `pCloud Main` |
| 이메일 | pCloud 로그인 이메일 |
| 비밀번호 | pCloud 로그인 비밀번호 |
| Host | 보통 `api.pcloud.com` |
| 저장 디렉터리 | 선택 사항. 기본값은 `imgbed` |

Host는 계정 지역에 맞춥니다.

| 계정 지역 | Host |
| --- | --- |
| 기본 / 미국 | `api.pcloud.com` |
| 유럽 | `eapi.pcloud.com` |

![pCloud 설정](../../image/upload/pcloud/配置渠道.png)

## 확인 방법

저장 후 채널 카드가 표시되는지 확인합니다. 용량 조회가 성공하면 연결이 정상입니다.

![용량 조회](../../image/upload/pcloud/查询额度成功.png)

이후 테스트 이미지를 업로드하고 pCloud 저장 디렉터리에 파일이 생기는지 확인합니다.

## 자주 묻는 점

### OAuth2는 사용하지 않나요?

pCloud의 OAuth2는 기본적으로 바로 쓸 수 있는 방식이 아니며 공식 신청이 필요합니다. 또한 ImgBed가 필요로 하는 단기 업로드 링크 흐름과 맞지 않아 여기서는 이메일과 비밀번호 방식으로 연결합니다.

### Host에는 무엇을 넣나요?

일반적으로 다음 값을 사용합니다.

```text
api.pcloud.com
```

EU 계정이면 다음 값을 사용합니다.

```text
eapi.pcloud.com
```

## 빠른 절차

```text
pCloud 이메일과 비밀번호 준비
-> 업로드 설정 열기
-> 채널 추가
-> pCloud 선택
-> 채널 이름 / 이메일 / 비밀번호 입력
-> Host 확인
-> 저장
-> 용량 조회
-> 테스트 이미지 업로드
```
