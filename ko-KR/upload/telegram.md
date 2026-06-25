# Telegram 채널 추가

## 시작하기 전에 필요한 항목

| 요구 사항 | 용도 |
| --- | --- |
| Telegram 계정 | bot과 저장 채널을 만드는 데 사용합니다. |
| `@BotFather` | Telegram bot을 만드는 데 사용합니다. |
| Telegram 채널 | 파일의 최종 저장 대상입니다. |
| `@userinfobot` | 채널 `Chat ID`를 조회하는 데 사용합니다. |

## 추가 위치

1. 시스템 설정을 엽니다.
2. 업로드 설정으로 이동합니다.
3. 오른쪽 위의 Add Channel을 클릭합니다.
4. `Telegram`을 선택합니다.

## 필드 참조

| 필드 | 기능 | 필수 |
| --- | --- | --- |
| 채널 이름 | 이 채널을 식별하기 쉬운 이름. 예: "Telegram Primary". | 필수 |
| Active | 이 채널을 활성화하거나 비활성화합니다. | 권장 |
| Bot Token | Telegram bot의 token. | 필수 |
| Session ID (Chat ID) | Telegram 채널의 ID. | 필수 |
| Relay Proxy URL (optional) | Telegram 접근이 불안정한 경우에만 사용합니다. `https://`. 포함한 전체 proxy URL을 입력합니다. | 선택 사항 |
| Remark | 향후 유지보수용 메모. | 선택 사항 |

## 설정 단계

### 1. Telegram bot 만들기

1. Telegram을 열고 `@BotFather`를 검색합니다.
2. 채팅을 열고 `Start`를 클릭합니다.
3. `/newbot`을 보냅니다.
4. 안내에 따라 bot 표시 이름을 입력합니다.
5. 안내에 따라 bot username을 입력합니다. username은 일반적으로 `bot`으로 끝나야 합니다.
6. bot이 생성되면 `@BotFather`가 bot 토큰을 반환합니다.

이 token이 ImgBed에 입력해야 하는 `Bot Token`입니다.

![bot token 저장](../../image/upload/telegram/保存机器人令牌.png)

### 2. 채널 만들기

1. Telegram에서 New Channel을 클릭합니다.
2. 채널 이름을 입력합니다.
3. 채널 생성을 완료합니다.

공개 채널과 비공개 채널을 모두 사용할 수 있습니다.

![채널 만들기](../../image/upload/telegram/新建频道.png)

### 3. bot을 채널에 추가하기

1. 방금 만든 채널을 엽니다.
2. 채널 설정을 엽니다.
3. 멤버 또는 관리자를 추가합니다.
4. 생성한 bot username을 검색합니다.
5. bot을 채널에 추가합니다.

업로드를 가장 안정적으로 처리하려면 bot에 관리자 권한을 부여하세요.

![bot을 채널에 초대](../../image/upload/telegram/邀请机器人进频道里.png)

### 4. User Info - Get ID - IDbot으로 Channel ID 가져오기

1. Telegram에서 `@userinfobot`을 검색합니다. 표시 이름은 일반적으로 `User Info - Get ID - IDbot`입니다.
2. 채팅을 열고 `Start`를 클릭합니다.
3. bot이 제공하는 옵션에서 `Channel`을 선택합니다.
4. 메시지 선택기에서 대상 채널을 선택하고 `@userinfobot`으로 보냅니다.
5. `@userinfobot`이 결과를 반환하면 `Id: -100...`으로 표시된 숫자를 복사합니다.

`-100`으로 시작하는 숫자가 ImgBed에 필요한 `Session ID (Chat ID)`입니다.

![channel ID 가져오기](../../image/upload/telegram/获取频道id.png)

### 5. ImgBed에 Telegram 채널 입력하기

채널 설정 대화상자로 돌아가 다음과 같이 입력합니다.

| UI 필드 | 값 |
| --- | --- |
| Channel Identifier | 사용자 지정 채널 이름. 예: `TelegramPrimary`. |
| Active | 권장. |
| Bot Token | `@BotFather`에서 받은 bot token. |
| Session ID (Chat ID) | `@userinfobot`이 반환한 `-100...` 숫자. |
| Relay Proxy URL (optional) | 필요한 경우에만 입력합니다. 예: `https://your-tg-proxy.example.com`. |
| Remark | 선택적 메모. |

완료되면 저장을 클릭합니다.

![설정 편집](../../image/upload/telegram/编辑配置.png)

## 확인 방법

| 확인 항목 | 확인 방법 |
| --- | --- |
| 채널 카드 표시 | 저장 후 업로드 설정 페이지에 Telegram 채널 카드가 표시됩니다. |
| 채널 활성화 가능 | Active 스위치가 켜진 상태로 유지됩니다. |
| 설정 저장 | 상세 보기에서 Bot Token과 Chat ID가 저장된 것을 확인할 수 있습니다. |
| 업로드 동작 | 테스트 이미지를 업로드하고 대상 Telegram 채널에 표시되는지 확인합니다. |

## 빠른 체크리스트

```text
Create a bot with @BotFather
-> Save the Bot Token
-> Create a Telegram channel
-> Add the bot to the channel and grant administrator permissions
-> Search for @userinfobot and choose Channel
-> Forward any message from the channel to @userinfobot
-> Copy the returned Id: -100...
-> Enter the Bot Token and Chat ID in ImgBed
-> Save and upload a test image
```

## 참고

1. Telegram bots: https://core.telegram.org/bots
2. Telegram Bot API: https://core.telegram.org/bots/api
