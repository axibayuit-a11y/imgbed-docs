# Додавання каналу Yandex

## Що підготувати спочатку

| Потрібно | Навіщо це потрібно |
| --- | --- |
| Обліковий запис Yandex | Для входу й авторизації Yandex Disk |
| Yandex OAuth app | Для отримання `Client ID` і `Client Secret` |
| Ваш домен ImgBed | Для OAuth redirect URI |
| Доступне сховище Yandex Disk | Фактичне місце зберігання файлів |

## Налаштування

### Крок 1. Створіть Yandex OAuth app

1. Відкрийте сторінку створення Yandex OAuth app:

```text
https://oauth.yandex.com/client/new
```

2. Якщо вас перенаправить на вхід, спочатку увійдіть у свій Yandex-акаунт.
3. Створіть новий app.
4. Дайте app зрозумілу назву, наприклад `imgbed-yandex`.
5. Знайдіть налаштування callback або redirect URL.
6. Введіть:

```text
https://your-domain.com/api/oauth/yandex/callback
```

### Крок 2. Перевірте permissions

Для поточної інтеграції ImgBed з Yandex залиште ці чотири permissions у `Yandex.Disk REST API`:

| Permission | Призначення |
| --- | --- |
| `cloud_api:disk.app_folder` | Дозволяє ImgBed зберігати файли в app folder |
| `cloud_api:disk.read` | Читає файли й посилання для завантаження |
| `cloud_api:disk.write` | Завантажує файли, створює папки й видаляє файли |
| `Access to information about Yandex.Disk` | Читає квоту диска й використаний обсяг |

Якщо ви також бачите такі permissions у `Yandex ID API`, вони необов'язкові:

| Текст permission | Рекомендація |
| --- | --- |
| `Access to username, first name and surname, gender` | Необов'язково |
| `Access to email address` | Необов'язково |

Основні можливості завантаження, скачування, видалення й квот переважно залежать від чотирьох permissions `Yandex.Disk REST API`, наведених вище.

![Налаштування permissions Yandex Disk](../../image/upload/yandex/dataaccess配置软盘权限.png)

### Крок 3. Скопіюйте credentials app

Після створення app скопіюйте:

| Поле Yandex | Поле ImgBed |
| --- | --- |
| `Client ID` | `Client ID` |
| `Client Secret` | `Client Secret` |

![Запис Client ID і Secret](../../image/upload/yandex/记录客户端id和secret.png)

### Крок 4. Заповніть канал Yandex

У налаштуваннях завантаження виберіть `Yandex` і заповніть:

| Поле ImgBed | Що ввести |
| --- | --- |
| Channel name | Зрозуміла назва, наприклад `Main Yandex` |
| Client ID | `Client ID` Yandex app |
| Client Secret | `Client Secret` Yandex app |
| Refresh Token | Поки залиште порожнім |
| Root directory | Необов'язково. Типово `imgbed`. |

![Редагування конфігурації каналу](../../image/upload/yandex/编辑配置渠道.png)

### Крок 5. Отримайте Refresh Token

1. В ImgBed натисніть `Get Token`.
2. Увійдіть у Yandex-акаунт, який хочете підключити.
3. Підтвердьте запит авторизації.
4. На callback-сторінці з'явиться `Refresh Token`.
5. Скопіюйте його.
6. Поверніться до ImgBed і вставте його в поле `Refresh Token`.

![Копіювання refresh token після авторизації](../../image/upload/yandex/授权后复制刷新令牌.png)

### Крок 6. Збережіть канал

Коли всі поля заповнені, збережіть канал.

## Короткий сценарій

```text
Open Yandex OAuth Console
-> Create an app
-> Add https://your-domain.com/api/oauth/yandex/callback
-> Confirm Yandex Disk permissions
-> Copy Client ID and Client Secret
-> Fill Client ID / Client Secret into ImgBed
-> Click Get Token
-> Copy the Refresh Token from the callback page
-> Paste it back into ImgBed and save
```

## Посилання

1. Register a Yandex app: https://yandex.com/dev/id/doc/en/register-client
2. Отримати authorization code через URL: https://yandex.com/dev/id/doc/en/codes/code-url
3. Yandex OAuth token endpoint: https://yandex.com/dev/id/doc/en/tokens/token
