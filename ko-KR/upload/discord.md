# Discord 채널 추가

Discord 채널을 사용하면 Discord 서버의 채널을 파일 저장 위치로 활용할 수 있습니다.

## 준비할 것

| 준비 항목 | 용도 |
| --- | --- |
| Discord 계정 | 서버와 Bot 관리 |
| Discord 서버 | 저장용 채널을 둘 공간 |
| Discord Bot | 파일 업로드에 사용 |
| Bot Token | ImgBed가 Bot을 호출할 때 사용 |
| 채널 ID | 파일을 보낼 Discord 채널 지정 |

## 서버 만들기

저장용 Discord 서버를 만듭니다. 기존 서버를 사용해도 되지만, 운영을 깔끔하게 하려면 전용 서버가 좋습니다.

![서버 만들기](../../image/upload/discord/创建服务器.png)

## 개발자 모드 켜기

채널 ID를 복사하려면 Discord의 개발자 모드를 켭니다.

![개발자 모드](../../image/upload/discord/开启开发者权限.png)

대상 채널을 오른쪽 클릭한 뒤 채널 ID를 복사합니다.

![채널 ID](../../image/upload/discord/复制群频道id.png)

## Bot 만들고 Token 확인

Discord Developer Portal에서 애플리케이션을 만들고 Bot을 추가합니다. Bot Token을 복사해 안전하게 보관합니다.

![Bot Token](../../image/upload/discord/查看机器人令牌.png)

## Bot을 서버에 초대하기

OAuth2 설정에서 Bot 권한을 선택하고, 생성된 초대 URL로 서버에 Bot을 추가합니다.

![Bot 권한](../../image/upload/discord/在oa2勾选机器人权限.png)

![Bot 초대](../../image/upload/discord/邀请机器人到频道.png)

Bot에는 대상 채널에서 메시지 보내기와 파일 첨부 권한이 필요합니다.

## ImgBed에 입력하기

업로드 설정에서 `Discord`를 선택합니다.

| 항목 | 입력 내용 |
| --- | --- |
| 채널 이름 | 예: `Discord Storage` |
| Bot Token | Developer Portal에서 받은 Token |
| Channel ID | 파일을 보낼 채널 ID |
| 메모 | 선택 사항 |

![Discord 설정](../../image/upload/discord/添加dc新渠道配置.png)

## 확인 방법

1. 저장 후 Discord 채널 카드가 표시됩니다.
2. 테스트 이미지를 업로드합니다.
3. 대상 Discord 채널에 파일이 올라오는지 확인합니다.
4. ImgBed가 반환한 링크가 열리는지 확인합니다.

실패하면 Bot Token, Channel ID, Bot 권한, 서버 초대 상태를 먼저 확인하세요.
