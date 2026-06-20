# Добавление канала Yandex

## Что подготовить сначала

| Что нужно | Зачем это нужно |
| --- | --- |
| Аккаунт Yandex | Для входа и авторизации Yandex Disk |
| Yandex OAuth app | Для получения `Client ID` и `Client Secret` |
| Ваш домен ImgBed | Для OAuth redirect URI |
| Доступное хранилище Yandex Disk | Фактическое место хранения файлов |

## Настройка

### Шаг 1. Создайте Yandex OAuth app

1. Откройте страницу создания Yandex OAuth app:

```text
https://oauth.yandex.com/client/new
```

2. Если вас перенаправит на вход, сначала войдите в аккаунт Yandex.
3. Создайте новый app.
4. Дайте app понятное имя, например `imgbed-yandex`.
5. Найдите настройки callback или redirect URL.
6. Введите:

```text
https://your-domain.com/api/oauth/yandex/callback
```

### Шаг 2. Проверьте permissions

Для текущей интеграции ImgBed с Yandex оставьте эти четыре permissions в `Yandex.Disk REST API`:

| Permission | Назначение |
| --- | --- |
| `cloud_api:disk.app_folder` | Позволяет ImgBed хранить файлы в app folder |
| `cloud_api:disk.read` | Читает файлы и download links |
| `cloud_api:disk.write` | Загружает файлы, создает папки и удаляет файлы |
| `Access to information about Yandex.Disk` | Читает квоту диска и использованный объем |

Если вы также видите эти permissions в `Yandex ID API`, они необязательны:

| Текст permission | Рекомендация |
| --- | --- |
| `Access to username, first name and surname, gender` | Необязательно |
| `Access to email address` | Необязательно |

Основные функции загрузки, скачивания, удаления и квот в основном зависят от четырех permissions `Yandex.Disk REST API`, перечисленных выше.

![Настройка permissions Yandex Disk](../../image/upload/yandex/dataaccess配置软盘权限.png)

### Шаг 3. Скопируйте credentials app

После создания app скопируйте:

| Поле Yandex | Поле ImgBed |
| --- | --- |
| `Client ID` | `Client ID` |
| `Client Secret` | `Client Secret` |

![Запись Client ID и Secret](../../image/upload/yandex/记录客户端id和secret.png)

### Шаг 4. Заполните канал Yandex

В настройках загрузки выберите `Yandex` и заполните:

| Поле ImgBed | Что ввести |
| --- | --- |
| Channel name | Понятное имя, например `Main Yandex` |
| Client ID | `Client ID` Yandex app |
| Client Secret | `Client Secret` Yandex app |
| Refresh Token | Пока оставьте пустым |
| Root directory | Необязательно. По умолчанию `imgbed`. |

![Редактирование конфигурации канала](../../image/upload/yandex/编辑配置渠道.png)

### Шаг 5. Получите Refresh Token

1. В ImgBed нажмите `Get Token`.
2. Войдите в Yandex-аккаунт, который хотите подключить.
3. Подтвердите запрос авторизации.
4. На callback-странице появится `Refresh Token`.
5. Скопируйте его.
6. Вернитесь в ImgBed и вставьте его в поле `Refresh Token`.

![Копирование refresh token после авторизации](../../image/upload/yandex/授权后复制刷新令牌.png)

### Шаг 6. Сохраните канал

Когда все поля заполнены, сохраните канал.

## Короткий сценарий

```text
Открыть Yandex OAuth Console
-> Создать app
-> Добавить https://your-domain.com/api/oauth/yandex/callback
-> Проверить permissions Yandex Disk
-> Скопировать Client ID и Client Secret
-> Ввести Client ID / Client Secret в ImgBed
-> Нажать Get Token
-> Скопировать Refresh Token с callback-страницы
-> Вставить его обратно в ImgBed и сохранить
```

## Ссылки

1. Register a Yandex app: https://yandex.com/dev/id/doc/en/register-client
2. Get an authorization code through URL: https://yandex.com/dev/id/doc/en/codes/code-url
3. Yandex OAuth token endpoint: https://yandex.com/dev/id/doc/en/tokens/token
