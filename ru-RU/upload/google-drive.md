# Добавление канала Google Drive

## Что подготовить сначала

Перед началом подготовьте:

| Что нужно | Зачем это нужно |
| --- | --- |
| Аккаунт Google | Для доступа к Google Cloud и авторизации Google Drive |
| Проект Google Cloud | Для включения Drive API и создания OAuth credentials |
| OAuth 2.0 client | ImgBed использует его для получения `Client ID`, `Client Secret` и `Refresh Token` |
| Ваш домен ImgBed | Для OAuth redirect URI. Он должен совпадать с доменом, который вы реально используете. |

## Настройка

### Шаг 1. Включите Google Drive API

1. Откройте Google Cloud Console.
2. Создайте новый проект или выберите существующий.
3. Перейдите в `APIs & Services`.
4. Нажмите `Enable APIs and Services`.
5. Найдите `Google Drive API`.
6. Откройте его и нажмите enable.

### Шаг 2. Настройте OAuth Consent Screen

1. В Google Cloud откройте `Google Auth Platform`.
2. Заполните базовую информацию `Branding`: имя app, support email и developer contact email.
3. Откройте `Audience`.
4. Для большинства личных self-hosted развертываний выберите `External`.
5. Если выбран `External`, добавьте Google-аккаунт, который хотите авторизовать, в `Test users`.
6. Откройте `Data Access`.
7. Добавьте нужные permissions для Google Drive.

### Шаг 3. Создайте OAuth 2.0 Client

1. В `Google Auth Platform` откройте `Clients`.
2. Создайте новый client.
3. Установите application type как `Web application`.
4. Дайте client понятное имя.
5. Для authorized JavaScript origins введите URL ImgBed, например:

```text
https://img.example.com
```

6. Для authorized redirect URIs введите:

```text
https://img.example.com/api/oauth/google/callback
```

![Создание OAuth client](../../image/upload/google-drive/oa客户端id创建.png)

![Ввод домена и callback URL](../../image/upload/google-drive/填写oa客户端url信息.png)

После создания client скопируйте:

| Сгенерированное значение | Поле ImgBed |
| --- | --- |
| Client ID | `Client ID` |
| Client Secret | `Client Secret` |

## Шаг 4. Заполните канал Google Drive

В настройках загрузки выберите `Google Drive` и заполните:

| Поле ImgBed | Что ввести |
| --- | --- |
| Channel name | Понятное имя, например `Main Google Drive` |
| Client ID | Client ID из Google Cloud |
| Client Secret | Client Secret из Google Cloud |
| Refresh Token | Пока оставьте пустым. Получите его на следующем шаге. |
| Root directory | Необязательно. По умолчанию `imgbed`. |

![Вставка client details в ImgBed](../../image/upload/google-drive/粘贴回添加新渠道配置.png)

## Шаг 5. Получите Refresh Token

1. Нажмите `Get Token`.
2. Выберите Google-аккаунт, который хотите подключить.
3. Пройдите подсказки авторизации.
4. На callback-странице появится `Refresh Token`.
5. Скопируйте его.
6. Вернитесь в ImgBed и вставьте его в поле `Refresh Token`.

![Копирование Refresh Token после авторизации](../../image/upload/google-drive/授权完复制token.png)

Если позже вы смените Google-аккаунт, OAuth client или старая авторизация истечет, удалять канал не нужно. Откройте страницу редактирования и нажмите `Reauthorize`.

## Шаг 6. Сохраните канал

Когда все поля заполнены, сохраните канал.

## Короткий сценарий

```text
Открыть Google Cloud
-> Создать или выбрать проект
-> Включить Google Drive API
-> Настроить Google Auth Platform
-> Если Audience = External, добавить свой Google-аккаунт в Test users
-> Создать Web application OAuth client
-> Использовать https://your-domain.com/api/oauth/google/callback как redirect URI
-> Ввести Client ID и Client Secret в ImgBed
-> Нажать Get Token
-> Войти через Google и авторизовать
-> Скопировать Refresh Token с callback-страницы
-> Вставить его обратно в ImgBed и сохранить
-> Загрузить тестовое изображение
```

## Ссылки

1. Google OAuth Web Server Applications: https://developers.google.com/identity/protocols/oauth2/web-server
2. Google Workspace OAuth Consent Configuration: https://developers.google.com/workspace/guides/configure-oauth-consent
3. Google Drive API Auth Scopes: https://developers.google.com/workspace/drive/api/guides/api-specific-auth
