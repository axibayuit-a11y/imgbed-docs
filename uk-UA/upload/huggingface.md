# Додавання каналу Hugging Face

## Що підготувати заздалегідь

Потрібні лише три речі:

| Потрібно | Навіщо це потрібно |
| --- | --- |
| Обліковий запис Hugging Face | Для створення access token і володіння репозиторієм. |
| Hugging Face User Access Token | ImgBed використовує його для доступу до Hugging Face API, створення репозиторіїв і завантаження файлів. |
| Назва репозиторію | Можна ввести тільки назву репозиторію, наприклад `image`. |

## Налаштування

### Крок 1. Увійдіть у Hugging Face і створіть Access Token

1. Увійдіть у Hugging Face.
2. Натисніть свій аватар у правому верхньому куті й відкрийте `Settings`.
3. У лівій бічній панелі відкрийте `Access Tokens`.
4. Створіть новий token.
5. Дайте token зрозумілу назву.
6. Виберіть дозвіл `write`.
7. Одразу після створення скопіюйте й збережіть token.

![Створення token](../../image/upload/huggingface/创建令牌.png)

## Крок 2. Заповніть канал Hugging Face в ImgBed

Після вибору `Hugging Face` у налаштуваннях завантаження заповніть поля так:

| Поле в інтерфейсі | Що ввести |
| --- | --- |
| Channel name | Назва на ваш вибір, наприклад `hf-primary`. |
| Repository name | Або коротка назва repo, наприклад `image`, або повний шлях на кшталт `username/image`. |
| Access Token | Hugging Face User Access Token, який ви щойно створили. |
| Private repository | Увімкніть або вимкніть відповідно до ваших потреб. |
| Remark | Необов'язково, наприклад `Primary upload channel`. |

![Додавання каналу](../../image/upload/huggingface/添加渠道.png)

## Крок 3. Збережіть канал

Після заповнення полів натисніть Save.

Далі система сама обробить такі деталі:

| Поведінка системи | Опис |
| --- | --- |
| Коротка назва репозиторію | ImgBed визначає поточний обліковий запис Hugging Face і розгортає значення до повного шляху репозиторію. |
| Повний шлях репозиторію | ImgBed використовує шлях `username/repository` саме в тому вигляді, у якому його введено. |
| Перевірка репозиторію | Якщо використовується шлях поточного особистого акаунта, ImgBed спробує створити репозиторій, якщо його ще немає. Якщо повний шлях введено вручну, ImgBed використовує його напряму. |
| Тип репозиторію | Цей канал використовує репозиторій типу `dataset`. |
| Публічний або приватний стан | Видимість репозиторію синхронізується відповідно до поточного перемикача. |

## Короткий чекліст

```text
Sign in to Hugging Face
-> Create an Access Token
-> Select write permission
-> Return to ImgBed and enter the token and repository name
-> Save
-> If only a repo name is entered, ImgBed adds the current username automatically
-> If username/repo is entered, ImgBed uses it as-is
-> ImgBed checks or creates the dataset repository
-> Upload a test image
```
