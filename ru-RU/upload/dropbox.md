# Добавление канала Dropbox

## Что подготовить сначала

| Что нужно | Зачем это нужно |
| --- | --- |
| Аккаунт Dropbox | Для входа и авторизации app |
| Dropbox app | Для получения `App Key` и `App Secret` |
| Ваш домен ImgBed | Для OAuth redirect URI |
| Доступное хранилище Dropbox | Фактическое место хранения файлов |

## Настройка

### Шаг 1. Создайте Dropbox app

1. Откройте Dropbox App Console:

```text
https://www.dropbox.com/developers/apps
```

2. Создайте новый app.
3. Для access type выберите:

```text
App folder
```

4. Дайте app понятное имя, например `imgbed-app`.
5. После создания откройте страницу деталей app.

Рекомендуемый тип доступа:

| Access Type | Рекомендация |
| --- | --- |
| `App folder` | Рекомендуется. Это соответствует тому, как ImgBed хранит файлы. |
| `Full Dropbox` | Не рекомендуется. ImgBed не нужен доступ ко всему аккаунту. |

![Создание Dropbox app](../../image/upload/dropbox/开发者创建应用.png)

### Шаг 2. Добавьте Redirect URI

На странице деталей Dropbox app найдите настройки OAuth или Redirect URI и добавьте:

```text
https://your-domain.com/api/oauth/dropbox/callback
```

Если админ-панель используется с нескольких доменов, добавьте каждый подходящий callback URL.

![Настройка redirect URI](../../image/upload/dropbox/配置回调地址.png)

### Шаг 3. Настройте permissions app

Откройте вкладку `Permissions` и включите как минимум такие scopes:

| Scope | Обязательно | Назначение |
| --- | --- | --- |
| `account_info.read` | Да | Читает информацию об аккаунте и квоте |
| `files.metadata.read` | Да | Читает метаданные файлов и папок для проверки путей |
| `files.metadata.write` | Да | Создает папки и записывает метаданные |
| `files.content.write` | Да | Загружает файлы. Без этого scope будет ошибка `required scope 'files.content.write'`. |
| `files.content.read` | Рекомендуется | Позволяет скачивание, preview и временные ссылки на файлы |

После выбора scopes нажмите `Submit` внизу страницы.

![Добавление прав](../../image/upload/dropbox/添加对应的权限.png)

Важно:

| Ситуация | Что сделать |
| --- | --- |
| Вы изменили scopes | Запустите authorization flow заново и получите новый `Refresh Token`. |
| Вы не авторизовались повторно | Старый token не получит новые permissions, поэтому загрузка все еще может падать. |

### Шаг 4. Скопируйте credentials app

Сохраните два значения со страницы Dropbox app:

| Поле Dropbox | Поле ImgBed |
| --- | --- |
| `App key` | `App Key` |
| `App secret` | `App Secret` |

### Шаг 5. Заполните канал Dropbox

В настройках загрузки выберите `Dropbox` и заполните:

| Поле ImgBed | Что ввести |
| --- | --- |
| Channel name | Понятное имя, например `Main Dropbox` |
| App Key | Dropbox `App key` |
| App Secret | Dropbox `App secret` |
| Refresh Token | Пока оставьте пустым |
| Root directory | Необязательно. По умолчанию `imgbed`. |
| Note | Необязательно |

![Получение token](../../image/upload/dropbox/获取令牌.png)

### Шаг 6. Получите Refresh Token

1. В ImgBed нажмите `Get Token`.
2. Войдите в Dropbox-аккаунт, который хотите подключить.
3. Подтвердите запрос авторизации.
4. На callback-странице появится `Refresh Token`.
5. Скопируйте его.
6. Вернитесь в ImgBed и вставьте его в поле `Refresh Token`.

![Копирование token](../../image/upload/dropbox/复制令牌.png)

## Как проверить

| Проверка | Ожидаемый результат |
| --- | --- |
| Карточка канала | Dropbox-канал появляется после сохранения. |
| Переключатель канала | Канал можно включить. |
| Token сохранен | На странице деталей видно, что `Refresh Token` сохранен. |
| Тестовая загрузка | Тестовое изображение появляется в app folder Dropbox. |

Если включены quota limits, нажмите запрос квоты. После успешного запроса карточка канала показывает использованный объем, общий объем и время последнего обновления.

![Успешный запрос квоты](../../image/upload/dropbox/查询额度成功.png)

## Устранение неполадок

| Проблема | Как исправить |
| --- | --- |
| ImgBed сообщает, что конфигурация неполная | Проверьте, что `App Key`, `App Secret` и `Refresh Token` все заполнены. |
| Авторизация успешна, но `Refresh Token` не появляется | Нажмите `Get Token` еще раз и убедитесь, что используется offline authorization flow. |
| Загрузка падает с `required scope 'files.content.write'` | Включите `files.content.write`, нажмите `Submit`, затем получите новый `Refresh Token`. |
| Callback не проходит | Убедитесь, что redirect URI имеет вид `https://your-domain.com/api/oauth/dropbox/callback`. |
| Файлы не находятся | Убедитесь, что Dropbox app создан в режиме `App folder`. |

## Короткий сценарий

```text
Open Dropbox App Console
-> Create an app
-> Choose App folder access
-> Add https://your-domain.com/api/oauth/dropbox/callback
-> Enable account_info.read / files.metadata.read / files.metadata.write / files.content.write
-> Optionally enable files.content.read
-> Click Submit
-> Copy App Key and App Secret
-> Fill them into ImgBed
-> Click Get Token
-> Copy the Refresh Token from the callback page
-> Paste it back into ImgBed and save
```

## Ссылки

1. Dropbox App Console: https://www.dropbox.com/developers/apps
2. Dropbox OAuth Guide: https://developers.dropbox.com/oauth-guide
3. Dropbox Developer Guide: https://www.dropbox.com/developers/reference/developer-guide
