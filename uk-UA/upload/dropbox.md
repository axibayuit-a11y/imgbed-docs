# Додавання каналу Dropbox

## Що підготувати спочатку

| Потрібно | Навіщо це потрібно |
| --- | --- |
| Обліковий запис Dropbox | Для входу й авторизації app |
| Dropbox app | Для отримання `App Key` і `App Secret` |
| Ваш домен ImgBed | Для OAuth redirect URI |
| Доступне сховище Dropbox | Фактичне місце зберігання файлів |

## Налаштування

### Крок 1. Створіть Dropbox app

1. Відкрийте Dropbox App Console:

```text
https://www.dropbox.com/developers/apps
```

2. Створіть новий app.
3. Для access type виберіть:

```text
App folder
```

4. Дайте app зрозумілу назву, наприклад `imgbed-app`.
5. Після створення відкрийте сторінку деталей app.

Рекомендований тип доступу:

| Access Type | Рекомендація |
| --- | --- |
| `App folder` | Рекомендовано. Це відповідає тому, як ImgBed зберігає файли. |
| `Full Dropbox` | Не рекомендовано. ImgBed не потребує доступу до всього акаунта. |

![Створення Dropbox app](../../image/upload/dropbox/开发者创建应用.png)

### Крок 2. Додайте Redirect URI

На сторінці деталей Dropbox app знайдіть налаштування OAuth або Redirect URI й додайте:

```text
https://your-domain.com/api/oauth/dropbox/callback
```

Якщо адмін-панель використовується з кількох доменів, додайте кожний відповідний callback URL.

![Налаштування redirect URI](../../image/upload/dropbox/配置回调地址.png)

### Крок 3. Налаштуйте permissions app

Відкрийте вкладку `Permissions` і ввімкніть щонайменше такі scopes:

| Scope | Обов'язково | Призначення |
| --- | --- | --- |
| `account_info.read` | Так | Читає інформацію про акаунт і квоту |
| `files.metadata.read` | Так | Читає метадані файлів і папок для перевірки шляхів |
| `files.metadata.write` | Так | Створює папки й записує метадані |
| `files.content.write` | Так | Завантажує файли. Без цього scope буде помилка `required scope 'files.content.write'`. |
| `files.content.read` | Рекомендовано | Дозволяє завантаження, перегляд і тимчасові посилання на файли |

Після вибору scopes натисніть `Submit` унизу сторінки.

![Додавання прав](../../image/upload/dropbox/添加对应的权限.png)

Важливо:

| Ситуація | Що зробити |
| --- | --- |
| Ви змінили scopes | Запустіть authorization flow ще раз і отримайте новий `Refresh Token`. |
| Ви не авторизувалися повторно | Старий token не отримає нові permissions, тому завантаження все ще може падати. |

### Крок 4. Скопіюйте credentials app

Збережіть ці два значення зі сторінки Dropbox app:

| Поле Dropbox | Поле ImgBed |
| --- | --- |
| `App key` | `App Key` |
| `App secret` | `App Secret` |

### Крок 5. Заповніть канал Dropbox

У налаштуваннях завантаження виберіть `Dropbox` і заповніть:

| Поле ImgBed | Що ввести |
| --- | --- |
| Channel name | Зрозуміла назва, наприклад `Main Dropbox` |
| App Key | Dropbox `App key` |
| App Secret | Dropbox `App secret` |
| Refresh Token | Поки залиште порожнім |
| Root directory | Необов'язково. Типово `imgbed`. |
| Note | Необов'язково |

![Отримання token](../../image/upload/dropbox/获取令牌.png)

### Крок 6. Отримайте Refresh Token

1. В ImgBed натисніть `Get Token`.
2. Увійдіть у Dropbox-акаунт, який хочете підключити.
3. Підтвердьте запит авторизації.
4. На callback-сторінці з'явиться `Refresh Token`.
5. Скопіюйте його.
6. Поверніться до ImgBed і вставте його в поле `Refresh Token`.

![Копіювання token](../../image/upload/dropbox/复制令牌.png)

## Як перевірити

| Перевірка | Очікуваний результат |
| --- | --- |
| Картка каналу | Dropbox-канал з'являється після збереження. |
| Перемикач каналу | Канал можна ввімкнути. |
| Token збережено | На сторінці деталей видно, що `Refresh Token` збережено. |
| Тестове завантаження | Тестове зображення з'являється в app folder Dropbox. |

Якщо ввімкнені quota limits, натисніть запит квоти. Після успішного запиту картка каналу показує використаний обсяг, загальний обсяг і час останнього оновлення.

![Успішний запит квоти](../../image/upload/dropbox/查询额度成功.png)

## Усунення несправностей

| Проблема | Як виправити |
| --- | --- |
| ImgBed повідомляє, що конфігурація неповна | Перевірте, що `App Key`, `App Secret` і `Refresh Token` усі заповнені. |
| Авторизація успішна, але `Refresh Token` не з'являється | Натисніть `Get Token` ще раз і переконайтеся, що використовується offline authorization flow. |
| Завантаження падає з `required scope 'files.content.write'` | Увімкніть `files.content.write`, натисніть `Submit`, потім отримайте новий `Refresh Token`. |
| Callback не проходить | Переконайтеся, що redirect URI має вигляд `https://your-domain.com/api/oauth/dropbox/callback`. |
| Файли не знаходяться | Переконайтеся, що Dropbox app створений у режимі `App folder`. |

## Короткий сценарій

```text
Відкрити Dropbox App Console
-> Створити app
-> Вибрати App folder access
-> Додати https://your-domain.com/api/oauth/dropbox/callback
-> Увімкнути account_info.read / files.metadata.read / files.metadata.write / files.content.write
-> За бажанням увімкнути files.content.read
-> Натиснути Submit
-> Скопіювати App Key і App Secret
-> Ввести їх в ImgBed
-> Натиснути Get Token
-> Скопіювати Refresh Token з callback-сторінки
-> Вставити його назад в ImgBed і зберегти
```

## Посилання

1. Dropbox App Console: https://www.dropbox.com/developers/apps
2. Dropbox OAuth Guide: https://developers.dropbox.com/oauth-guide
3. Dropbox Developer Guide: https://www.dropbox.com/developers/reference/developer-guide
