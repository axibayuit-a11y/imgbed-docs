# Discord 채널 추가

## 시작하기 전에 필요한 항목

| 요구 사항 | 용도 |
| --- | --- |
| Discord 계정 | 서버, 채널, 개발자 애플리케이션을 만드는 데 사용합니다. |
| Discord 서버 | bot이 채널에 접근하려면 먼저 서버에 참여해야 합니다. |
| 텍스트 채널 | 이미지와 파일이 이 채널로 전송됩니다. |
| Discord Developer Portal | 애플리케이션과 bot을 만들고 `Bot Token`을 얻는 데 사용합니다. |

## 추가 위치

1. 시스템 설정을 엽니다.
2. 업로드 설정으로 이동합니다.
3. 오른쪽 위의 Add Channel을 클릭합니다.
4. `Discord`를 선택합니다.

## 필드 참조

| 필드 | 기능 | 필수 |
| --- | --- | --- |
| 채널 이름 | 이 채널을 식별하기 쉬운 이름. 예: "Discord Primary". | 필수 |
| Bot Token | Discord bot token. | 필수 |
| Channel ID | 대상 텍스트 채널의 ID. | 필수 |
| Proxy URL (optional) | Discord CDN 접근이 불안정한 경우에만 사용합니다. `https://`. 포함한 전체 URL을 입력합니다. | 선택 사항 |

## 설정 단계

### 1. Discord 서버와 텍스트 채널 만들기

1. Discord를 엽니다.
2. 새 서버를 만들거나 소유한 기존 서버를 사용합니다.
3. 해당 서버에 텍스트 채널을 만듭니다.

![서버 만들기](../../image/upload/discord/创建服务器.png)

### 2. Discord Developer Portal에서 bot 만들기

1. Discord Developer Portal을 엽니다: `https://discord.com/developers/applications`
2. `New Application`을 클릭합니다.
3. 애플리케이션 이름을 입력하고 만듭니다.
4. 왼쪽 사이드바에서 `Bot` 페이지를 엽니다.
5. `Bot` 페이지에서 토큰을 생성하거나 재설정합니다.
6. 토큰을 저장합니다.

이 token이 ImgBed에 입력해야 하는 `Bot Token`입니다.

![bot token 보기](../../image/upload/discord/查看机器人令牌.png)

### 3. OAuth2 초대 링크를 생성하고 bot 설치하기

1. 왼쪽 사이드바에서 `OAuth2` 페이지를 엽니다.
2. 스코프에서 `bot`을 선택합니다.
3. 권한 영역에서 다음 권한을 활성화합니다.

| 권한 | 필수 |
| --- | --- |
| View Channels | 예 |
| Send Messages | 예 |
| Attach Files | 예 |
| Read Message History | 예 |

4. 페이지 하단에서 integration type이 `Guild Install`인지 확인합니다.
5. 생성된 URL을 복사합니다.
6. 해당 URL을 브라우저에서 엽니다.
7. 대상 서버를 선택합니다.
8. 승인 흐름을 완료합니다.

![OAuth2에서 bot 권한 선택](../../image/upload/discord/在oa2勾选机器人权限.png)

![bot을 채널에 초대](../../image/upload/discord/邀请机器人到频道.png)

### 4. Developer Mode를 활성화하고 Channel ID 복사하기

1. Discord 왼쪽 아래에서 아바타 옆의 톱니바퀴 아이콘을 클릭합니다.
2. 왼쪽 사이드바에서 Advanced를 엽니다.
3. Developer Mode를 활성화합니다.
4. 대상 텍스트 채널로 돌아갑니다.
5. 채널 이름을 마우스 오른쪽 버튼으로 클릭합니다.
6. Copy Channel ID를 클릭합니다.

복사한 숫자가 ImgBed에 필요한 `Channel ID`입니다.

![developer mode 활성화](../../image/upload/discord/开启开发者权限.png)

![channel ID 복사](../../image/upload/discord/复制群频道id.png)

### 5. ImgBed에 Discord 채널 입력하기

채널 설정 대화상자로 돌아가 다음과 같이 입력합니다.

| UI 필드 | 값 |
| --- | --- |
| 채널 이름 | 사용자 지정 채널 이름. 예: `DiscordPrimary`. |
| Bot Token | Discord Developer Portal의 `Bot` 페이지에서 저장한 token. |
| Channel ID | Discord에서 복사한 channel ID. |
| Proxy URL (optional) | 필요한 경우에만 입력합니다. 예: `https://your-proxy.example.com`. |

완료되면 저장을 클릭합니다.

![Discord 채널 설정 추가](../../image/upload/discord/添加dc新渠道配置.png)

## 확인 방법

| 확인 항목 | 확인 방법 |
| --- | --- |
| 채널 카드 표시 | 저장 후 업로드 설정 페이지에 Discord 채널 카드가 표시됩니다. |
| 채널 활성화 가능 | Active 스위치가 켜진 상태로 유지됩니다. |
| 설정 저장 | 상세 보기에서 Bot Token과 Channel ID가 저장된 것을 확인할 수 있습니다. |
| 업로드 동작 | 테스트 이미지를 업로드하고 대상 Discord 텍스트 채널에 표시되는지 확인합니다. |

## 빠른 체크리스트

```text
Create a Discord server
-> Create a text channel
-> Create a bot in the Discord Developer Portal
-> Save the Bot Token from the Bot page
-> In OAuth2, select bot, View Channels, Send Messages, Attach Files, and Read Message History
-> Copy the generated URL and authorize the bot for the target server
-> Make sure the target text channel grants the same permissions
-> Enable Developer Mode
-> Right-click the target text channel and copy the Channel ID
-> Enter the Bot Token and Channel ID in ImgBed
-> Save and upload a test image
```

## 참고

1. Discord Developers Getting Started: https://docs.discord.com/developers/quick-start/getting-started
2. Discord Help - Where can I find my User/Server/Message ID: https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID
