# Додавання каналу GitHub Releases

## Що підготувати заздалегідь

Потрібні лише три речі:

| Потрібно | Навіщо це потрібно |
| --- | --- |
| Обліковий запис GitHub | Для створення access token і володіння репозиторієм. |
| GitHub Access Token | ImgBed використовує його для доступу до GitHub API, створення releases і завантаження файлів. |
| Назва репозиторію | Можна ввести тільки назву репозиторію, наприклад `image`. |

## Налаштування

### Крок 1. Увійдіть у GitHub і створіть Access Token

1. Увійдіть у GitHub.
2. Натисніть свій аватар у правому верхньому куті й відкрийте `Settings`.
3. У лівій бічній панелі відкрийте `Developer settings`.
4. Відкрийте `Personal access tokens`.
5. Відкрийте `Tokens (classic)`.
6. Натисніть `Generate new token (classic)`.
7. Дайте token зрозумілу назву.
8. Виберіть дату закінчення дії відповідно до вашого підходу до обслуговування.
9. Виберіть scopes `repo` і `workflow`.
10. Одразу після створення скопіюйте й збережіть token.

![Додавання прав GitHub](../../image/upload/github-releases/添加github权限.png)

## Крок 2. Заповніть канал GitHub Releases в ImgBed

Після вибору `GitHub Releases` у налаштуваннях завантаження заповніть поля так:

| Поле в інтерфейсі | Що ввести |
| --- | --- |
| Channel name | Назва на ваш вибір, наприклад `GitHubPrimary`. |
| Access Token | GitHub Personal Access Token, який ви щойно створили. |
| Repository name | Або коротка назва repo, наприклад `image`, або повний шлях на кшталт `username/image`. |
| Private repository | Увімкніть або вимкніть відповідно до ваших потреб. |
| Remark | Необов'язково, наприклад `Primary upload channel`. |

![Заповнення конфігурації GitHub-каналу](../../image/upload/github-releases/填写github渠道配置.png)

## Крок 3. Збережіть канал

Після заповнення полів натисніть Save.

Система сама обробить такі деталі:

| Поведінка системи | Опис |
| --- | --- |
| Коротка назва репозиторію | ImgBed визначає поточний обліковий запис GitHub і розгортає значення до повного шляху репозиторію. |
| Повний шлях репозиторію | ImgBed використовує шлях `username/repository` саме в тому вигляді, у якому його введено. |
| Перевірка репозиторію | Якщо використовується шлях поточного особистого акаунта, ImgBed автоматично створює репозиторій, коли його ще немає. Якщо повний шлях введено вручну, ImgBed використовує його напряму. |
| Публічний або приватний стан | Видимість репозиторію синхронізується відповідно до поточного перемикача. |

## Короткий чекліст

GitHub Releases працює так:

```text
Sign in to GitHub
-> Create an Access Token
-> Return to ImgBed and enter the token and repository name
-> Save
-> If only a repo name is entered, ImgBed adds the current username automatically
-> If username/repo is entered, ImgBed uses it as-is
-> Upload a test image
```
