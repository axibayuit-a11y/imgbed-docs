# Додавання каналу Google Drive

## Що підготувати спочатку

Перед початком підготуйте:

| Потрібно | Навіщо це потрібно |
| --- | --- |
| Обліковий запис Google | Для доступу до Google Cloud і авторизації Google Drive |
| Проєкт Google Cloud | Для ввімкнення Drive API і створення OAuth credentials |
| OAuth 2.0 client | ImgBed використовує його для отримання `Client ID`, `Client Secret` і `Refresh Token` |
| Ваш домен ImgBed | Для OAuth redirect URI. Він має збігатися з доменом, який ви реально використовуєте. |

## Налаштування

### Крок 1. Увімкніть Google Drive API

1. Відкрийте Google Cloud Console.
2. Створіть новий проєкт або виберіть наявний.
3. Перейдіть до `APIs & Services`.
4. Натисніть `Enable APIs and Services`.
5. Знайдіть `Google Drive API`.
6. Відкрийте його й натисніть enable.

### Крок 2. Налаштуйте OAuth Consent Screen

1. У Google Cloud відкрийте `Google Auth Platform`.
2. Заповніть базову інформацію `Branding`: назву app, support email і developer contact email.
3. Відкрийте `Audience`.
4. Для більшості особистих self-hosted розгортань виберіть `External`.
5. Якщо вибрали `External`, додайте Google-акаунт, який хочете авторизувати, у `Test users`.
6. Відкрийте `Data Access`.
7. Додайте потрібні permissions для Google Drive.

### Крок 3. Створіть OAuth 2.0 Client

1. У `Google Auth Platform` відкрийте `Clients`.
2. Створіть новий client.
3. Встановіть application type як `Web application`.
4. Дайте client зрозумілу назву.
5. Для authorized JavaScript origins введіть URL вашого ImgBed, наприклад:

```text
https://img.example.com
```

6. Для authorized redirect URIs введіть:

```text
https://img.example.com/api/oauth/google/callback
```

![Створення OAuth client](../../image/upload/google-drive/oa客户端id创建.png)

![Введення домену та callback URL](../../image/upload/google-drive/填写oa客户端url信息.png)

Після створення client скопіюйте ці значення:

| Згенероване значення | Поле ImgBed |
| --- | --- |
| Client ID | `Client ID` |
| Client Secret | `Client Secret` |

## Крок 4. Заповніть канал Google Drive

У налаштуваннях завантаження виберіть `Google Drive` і заповніть:

| Поле ImgBed | Що ввести |
| --- | --- |
| Channel name | Зрозуміла назва, наприклад `Main Google Drive` |
| Client ID | Client ID з Google Cloud |
| Client Secret | Client Secret з Google Cloud |
| Refresh Token | Поки залиште порожнім. Отримайте його на наступному кроці. |
| Root directory | Необов'язково. Типово `imgbed`. |

![Вставлення client details в ImgBed](../../image/upload/google-drive/粘贴回添加新渠道配置.png)

## Крок 5. Отримайте Refresh Token

1. Натисніть `Get Token`.
2. Виберіть Google-акаунт, який хочете підключити.
3. Пройдіть підказки авторизації.
4. На callback-сторінці з'явиться `Refresh Token`.
5. Скопіюйте його.
6. Поверніться до ImgBed і вставте його в поле `Refresh Token`.

![Копіювання Refresh Token після авторизації](../../image/upload/google-drive/授权完复制token.png)

Якщо пізніше зміните Google-акаунт, OAuth client або стара авторизація завершиться, канал видаляти не потрібно. Відкрийте сторінку редагування й натисніть `Reauthorize`.

## Крок 6. Збережіть канал

Коли всі поля заповнені, збережіть канал.

## Короткий сценарій

```text
Відкрити Google Cloud
-> Створити або вибрати проєкт
-> Увімкнути Google Drive API
-> Налаштувати Google Auth Platform
-> Якщо Audience = External, додати свій Google-акаунт у Test users
-> Створити Web application OAuth client
-> Використати https://your-domain.com/api/oauth/google/callback як redirect URI
-> Ввести Client ID і Client Secret в ImgBed
-> Натиснути Get Token
-> Увійти через Google і авторизувати
-> Скопіювати Refresh Token з callback-сторінки
-> Вставити його назад в ImgBed і зберегти
-> Завантажити тестове зображення
```

## Посилання

1. Google OAuth Web Server Applications: https://developers.google.com/identity/protocols/oauth2/web-server
2. Google Workspace OAuth Consent Configuration: https://developers.google.com/workspace/guides/configure-oauth-consent
3. Google Drive API Auth Scopes: https://developers.google.com/workspace/drive/api/guides/api-specific-auth
