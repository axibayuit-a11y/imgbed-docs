# 블로그

블로그 기능은 ImgBed 사이트에 독립적인 블로그 페이지를 추가합니다.

활성화하면 방문자가 다음 주소를 열 수 있습니다.

```text
https://your-domain.com/blog/
```

![블로그 홈페이지](../../image/other/博客/博客首页.png)

이 블로그는 오픈 소스 [LyraVoid/Mizuki](https://github.com/LyraVoid/Mizuki) 프로젝트를 기반으로 합니다. ImgBed는 이를 Vue로 다시 작성하고 통합하여 이미지 호스팅 사이트의 일부로 실행되도록 했습니다.

## 설정 위치

블로그 설정은 다음 위치에 있습니다.

```text
System Settings -> Other Settings -> Blog
```

![블로그 설정](../../image/other/博客/QQ20260611-221702.png)

## 처음 설정하기

1. `Enable`을 켭니다.
2. 블로그 설정을 저장할 GitHub 계정을 선택합니다.
3. `Update Blog`를 클릭합니다.
4. 성공 메시지가 표시될 때까지 기다립니다.
5. `https://your-domain.com/blog/`를 열어 블로그를 확인합니다.

처음 사용할 때 ImgBed는 선택한 계정 아래에 비공개 GitHub 저장소를 준비합니다.

```text
imgbed-blog-config
```

이 저장소에는 블로그 설정과 글 내용이 저장됩니다.

## 글 작성하기

블로그 글은 자신의 비공개 GitHub 저장소에서 편집합니다.

```text
imgbed-blog-config
```

일반적인 작업 흐름:

1. GitHub를 엽니다.
2. 비공개 `imgbed-blog-config` 저장소로 들어갑니다.
3. 글 파일을 수정하거나 추가합니다.
4. 변경 사항을 커밋합니다.
5. ImgBed 관리자 패널로 돌아와 `Update Blog`를 클릭합니다. 또는 블로그 홈페이지 왼쪽 위의 로고를 세 번 클릭해 블로그 업데이트를 트리거할 수 있습니다.

`Update Blog`는 이미 작성한 내용을 덮어쓰지 않습니다. 필요할 때 저장소를 초기화하고 블로그 캐시를 새로고침합니다.

## 지원 기능

블로그는 글 목록, 카테고리, 태그, 아카이브, 검색, 다크 모드, 언어 전환 같은 일반적인 블로그 기능을 지원합니다.

댓글과 방문 통계도 지원합니다.

![블로그 댓글](../../image/other/博客/支持留言.png)

댓글은 글 아래에 표시됩니다. 방문자는 아바타, 닉네임, 이메일, 댓글 내용을 제출할 수 있습니다.

방문 통계는 글 조회수와 사이트 방문 수를 보여 주어 블로그 트래픽을 파악하는 데 도움이 됩니다.

## URL

블로그는 항상 `/blog/` 경로 아래에서 제공됩니다.

예를 들어 ImgBed 도메인이 다음과 같다면:

```text
https://image.example.com
```

블로그 URL은 다음과 같습니다.

```text
https://image.example.com/blog/
```

블로그를 비활성화하면 방문자는 더 이상 블로그 페이지에 접근할 수 없습니다.
