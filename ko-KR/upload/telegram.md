# Telegram 채널 추가

Telegram 채널을 저장 위치로 사용하려면 Bot을 만들고, 그 Bot을 저장용 채널에 추가해야 합니다.

## 준비할 것

| 준비 항목 | 용도 |
| --- | --- |
| Telegram 계정 | Bot과 채널 생성 |
| `@BotFather` | Telegram Bot 생성 |
| Telegram 채널 | 파일 저장 위치 |
| `@userinfobot` | 채널 Chat ID 확인 |

## Bot 만들기

1. Telegram에서 `@BotFather`를 검색합니다.
2. 채팅을 열고 `/newbot`을 보냅니다.
3. 표시 이름과 username을 입력합니다. username은 보통 `bot`으로 끝나야 합니다.
4. 생성 후 반환되는 Token을 복사합니다.

![Bot Token](../../image/upload/telegram/保存机器人令牌.png)

## 저장용 채널 만들기

Telegram에서 새 채널을 만듭니다. 공개 채널과 비공개 채널 모두 사용할 수 있습니다.

![채널 만들기](../../image/upload/telegram/新建频道.png)

## Bot을 채널에 추가하기

생성한 채널 설정에서 앞서 만든 Bot을 멤버 또는 관리자로 추가합니다.

![Bot 추가](../../image/upload/telegram/邀请机器人进频道里.png)

안정적인 업로드를 위해 Bot에 관리자 권한을 주는 것을 권장합니다.

## Chat ID 가져오기

1. Telegram에서 `@userinfobot`를 검색합니다.
2. `Start`를 누릅니다.
3. Bot이 제공하는 선택지에서 `Channel`을 선택합니다.
4. 대상 채널의 메시지를 `@userinfobot`으로 보냅니다.
5. `Id: -100...`으로 시작하는 숫자를 복사합니다.

![Chat ID](../../image/upload/telegram/获取频道id.png)

## ImgBed에 입력하기

업로드 설정에서 `Telegram`을 선택합니다.

| 항목 | 입력 내용 |
| --- | --- |
| 채널 이름 | 예: `Telegram Main` |
| Bot Token | `@BotFather`에서 받은 Token |
| Session ID / Chat ID | `-100`으로 시작하는 채널 ID |
| Relay Proxy URL | 선택 사항. Telegram 연결이 불안정할 때만 입력 |
| 메모 | 선택 사항 |

![Telegram 설정](../../image/upload/telegram/编辑配置.png)

## 확인 방법

1. 저장 후 Telegram 채널 카드가 표시됩니다.
2. 테스트 이미지를 업로드합니다.
3. 대상 Telegram 채널에 파일이 올라오는지 확인합니다.
4. ImgBed 링크가 열리는지 확인합니다.

## 빠른 절차

```text
@BotFather에서 Bot 생성
-> Bot Token 복사
-> Telegram 채널 생성
-> Bot을 채널에 추가하고 관리자 권한 부여
-> @userinfobot으로 -100으로 시작하는 Chat ID 확인
-> ImgBed에 Bot Token과 Chat ID 입력
-> 저장 후 테스트 업로드
```

## 참고

1. Telegram Bot: https://core.telegram.org/bots
2. Telegram Bot API: https://core.telegram.org/bots/api
