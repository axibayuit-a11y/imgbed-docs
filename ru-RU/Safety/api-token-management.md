# Управление конфигурацией через API Token

Управление конфигурацией через API Token предназначено для скриптов автоматизации, операционных инструментов и сторонних панелей управления. Оно позволяет читать и обновлять конфигурацию каналов загрузки, настройки безопасности, настройки страниц, прочие настройки и легкие федеративные связи без открытия страницы администратора.

Разрешение управления открывает только легкие операции, подходящие для скриптов. Тяжелые операции, которым требуется подтверждение в браузере, пакетные задачи фронтенда или очистка индексов федерации, по-прежнему выполняются в панели администратора в браузере.

![Редактирование API Token](../../image/Safety/apitoken/编辑管理权限api.png)

## Перед началом

Откройте панель администратора и перейдите в:

```text
System Settings -> Security Settings -> API Token
```

При создании или редактировании API Token убедитесь, что у него есть разрешение управления. Это разрешение может менять конфигурацию сайта, поэтому выдавайте его только доверенным скриптам или доверенным пользователям.

Все три скрипта управления по умолчанию используют режим пробного запуска для операций записи. После проверки предварительного результата добавьте `--apply`, чтобы действительно сохранить изменения.

Token также можно поместить в переменную окружения:

```powershell
$env:IMGBED_API_TOKEN="your API Token"
```

## Скачать скрипты управления

Пакет документации предоставляет три скрипта Node.js:

| Скрипт | Назначение |
| --- | --- |
| <a href="/tools/imgbed-token-upload-settings.mjs" download>скрипт управления настройками загрузки</a> | Управляет каналами загрузки, дочерними каналами и балансировкой нагрузки. |
| <a href="/tools/imgbed-token-site-settings.mjs" download>скрипт управления настройками сайта</a> | Управляет настройками безопасности, страниц и прочими настройками. |
| <a href="/tools/imgbed-token-federation.mjs" download>скрипт управления федеративными связями</a> | Управляет легкими действиями федеративных связей, запросами и сообщениями. |

Требуется Node.js 18 или новее.

### Общие параметры

| Параметр | Обязателен | Описание |
| --- | --- | --- |
| `--base-url <url>` | Да | URL сайта ImgBed, например `https://image.ai6.me`. |
| `--token <token>` | Да | API Token. Также можно использовать переменную окружения `IMGBED_API_TOKEN`. |
| `--retries <n>` | Нет | Число повторов при временных ошибках. По умолчанию `3`. |
| `--timeout-ms <n>` | Нет | Тайм-аут запроса. По умолчанию `180000`. |
| `--output <pretty\|json>` | Нет | Формат вывода. По умолчанию `pretty`; для программ используйте `json`. |
| `--save-response <path>` | Нет | Сохраняет итоговый JSON-результат в файл. |
| `--apply` | Нет | Действительно выполняет запись. Без него операции записи только показывают предварительный результат. |
| `-h` / `--help` | Нет | Показывает справку скрипта. |

## Настройки загрузки

Скрипт настроек загрузки показывает, читает, создает, редактирует и удаляет дочерние каналы загрузки. Он также может переключать балансировку нагрузки для одного канала загрузки верхнего уровня.

```powershell
node imgbed-token-upload-settings.mjs --base-url "https://your-domain" --token "your API Token" --list
```

### Параметры настроек загрузки

| Параметр | Описание |
| --- | --- |
| `--list` | Показывает группы настроек загрузки. |
| `--get` | Читает канал верхнего уровня или один дочерний канал внутри него. |
| `--upsert` | Создает или редактирует один дочерний канал. Пробный запуск, если не указан `--apply`. |
| `--delete` | Удаляет один дочерний канал. Пробный запуск, если не указан `--apply`. |
| `--load-balance <true\|false>` | Включает или отключает балансировку нагрузки для канала верхнего уровня. |
| `--channel <key>` | Канал загрузки верхнего уровня, например `s3`, `github` или `telegram`. |
| `--channel-name <name>` | Дочерний канал или имя аккаунта. |
| `--set key=value` | Задает одно поле. Можно повторять. Поддерживаются пути через точку. |
| `--patch-json <path>` | Объединяет поля из JSON-файла. |
| `--apply` | Сохраняет результат записи. |

### Ключи каналов

| Ключ канала | Канал |
| --- | --- |
| `telegram` / `tg` | Telegram |
| `discord` / `dc` | Discord |
| `cfr2` / `r2` | Cloudflare R2 |
| `s3` | S3 |
| `webdav` / `wd` | Канал хранилища WebDAV |
| `github` / `gh` | GitHub Releases |
| `gitlab` / `gl` | GitLab Packages |
| `huggingface` / `hf` | Hugging Face |
| `onedrive` / `od` | OneDrive |
| `googledrive` / `google` / `gd` | Google Drive |
| `dropbox` / `db` | Dropbox |
| `yandex` / `yx` | Yandex Disk |
| `pcloud` / `pd` | pCloud |

### Примеры настроек загрузки

Показать все настройки загрузки:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --list
```

Прочитать конфигурацию канала S3:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get `
  --channel s3
```

Прочитать один дочерний канал S3:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get `
  --channel s3 `
  --channel-name "backup-s3"
```

Создать или изменить один дочерний канал. Сначала запустите без `--apply`, чтобы увидеть предварительный результат:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --upsert `
  --channel webdav `
  --channel-name "backup-webdav" `
  --set enabled=false `
  --set remark="backup test"
```

Затем сохраните после проверки:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --upsert `
  --channel webdav `
  --channel-name "backup-webdav" `
  --set enabled=false `
  --set remark="backup test" `
  --apply
```

Удалить один дочерний канал:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --delete `
  --channel webdav `
  --channel-name "backup-webdav" `
  --apply
```

Включить балансировку нагрузки S3:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --load-balance true `
  --channel s3 `
  --apply
```

Для сложных полей создайте JSON-файл и передайте его через `--patch-json`:

```json
{
  "enabled": true,
  "remark": "primary account"
}
```

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --upsert `
  --channel s3 `
  --channel-name "primary-s3" `
  --patch-json ".\s3-channel.json" `
  --apply
```

## Настройки сайта

Скрипт настроек сайта управляет тремя областями конфигурации:

| Область | Параметр | Описание |
| --- | --- | --- |
| Настройки безопасности | `security` | Пользовательская аутентификация, аутентификация администратора, устройства входа, API Token, модерация изображений, лимиты пользователей, WebDAV и другое. |
| Настройки страниц | `page` | Глобальная страница, страница пользователя, страница администратора и связанные настройки отображения. |
| Прочие настройки | `others` | API случайных изображений, публичный просмотр, локальный узел федерации, автоматические теги, IP-геолокация, канал резервного копирования, OCR и другое. |

Сначала используйте `--list-sections`, чтобы увидеть редактируемые области, разделы и поля:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --list-sections
```

### Параметры настроек сайта

| Параметр | Описание |
| --- | --- |
| `--list-sections` | Показывает редактируемые области, разделы и поля. |
| `--get` | Читает один раздел настроек. |
| `--area <security\|page\|others>` | Выбирает область конфигурации. |
| `--section <name>` | Выбирает раздел. Используйте имена, показанные `--list-sections`. |
| `--set key=value` | Задает одно поле. Можно повторять. |
| `--apply` | Сохраняет результат записи. |

Для области `page` параметр `--set` использует ID элемента конфигурации страницы, например `starsEffect=true`. Для `security` и `others` параметр `--set` использует имя поля в этом разделе, например `email=admin@example.com`.

### Примеры настроек сайта

Прочитать настройки уведомлений об обновлении системы:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get `
  --area security `
  --section systemUpdate
```

Изменить адрес электронной почты для уведомлений об обновлении системы. Сначала запустите без `--apply`, чтобы увидеть предварительный результат:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --area security `
  --section systemUpdate `
  --set email="admin@example.com"
```

Затем сохраните после проверки:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --area security `
  --section systemUpdate `
  --set email="admin@example.com" `
  --apply
```

Изменить эффект звезд на странице администратора:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --area page `
  --section adminSettings `
  --set starsEffect=true `
  --apply
```

Изменить язык IP-геолокации:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --area others `
  --section ipGeolocation `
  --set language="en" `
  --apply
```

Настройки локального узла федерации могут читать и обновлять обычные поля, например состояние включения, каталог синхронизации и код приглашения. Подтверждение домена через API Token не выполняется. Если панель администратора сообщает, что домен локального узла отличается от текущего домена доступа, завершите подтверждение в панели администратора в браузере.

## Федеративные связи

Скрипт федерации управляет статусом локального узла, исходящими узлами, входящими узлами, сообщениями, запросами на присоединение, повторными заявками без записи, одобрениями, отказами и легкими действиями связи, не требующими очистки индекса.

Обновление индекса, удаление индекса федерации и подтверждение изменения домена зависят от полного браузерного процесса. Скрипт не выполняет эти тяжелые операции.

### Легкие и тяжелые действия федерации

| Действие | Поддержка скриптом | Описание |
| --- | --- | --- |
| Просмотреть статус локального узла и список связей | Поддерживается | Только читает записи связей. |
| Читать и отправлять сообщения | Поддерживается | Читает или записывает сообщения связи. |
| Запросить присоединение к другому узлу | Поддерживается | Использует ссылку приглашения для отправки запроса. |
| Повторная заявка для связи без записи | Поддерживается | Только для исходящих карточек с `lastResult=none`; требуется 6-символьный код приглашения. |
| Отменить исходящий ожидающий запрос | Поддерживается | Отменяет только ожидающий запрос. |
| Принять или отклонить входящий запрос | Поддерживается | Обрабатывает запросы от узлов, присоединяющихся к вашему. |
| Удалить принятую входящую связь | Поддерживается | Обновляет запись входящей связи и уведомляет другую сторону. |
| Удалить завершенную входящую запись | Поддерживается | Удаляет только завершенную запись входящей связи. |
| Отменить принятую исходящую подписку | Только браузер | Нужно локальное удаление индекса федерации, которое браузер выполняет пакетами. |
| Удалить завершенную исходящую запись | Только браузер | Может сначала потребовать очистки индекса федерации. |
| Подтвердить или отменить изменение домена | Только браузер | Требует подтверждения текущего домена и обработки индекса изменения домена. |
| Опубликовать, получить или пакетно удалить индексы | Только браузер | Это пакетные задачи фронтенда. |

### Параметры федерации

| Параметр | Описание |
| --- | --- |
| `--status` | Показывает статус локального узла федерации, исходящие узлы и входящие узлы. |
| `--list` | Показывает федеративные связи. |
| `--chat` | Читает кэшированные сообщения одной связи. |
| `--send-message` | Отправляет сообщение одной установленной связи. |
| `--join` | Запрашивает присоединение к другому узлу по ссылке приглашения. |
| `--reapply` | Повторно подает заявку для связи без записи. Требуется 6-символьный код приглашения. |
| `--accept` | Принимает входящий запрос. |
| `--deny` | Отклоняет входящий запрос. |
| `--cancel` | Отменяет исходящий ожидающий запрос или удаляет принятую входящую связь. |
| `--delete` | Удаляет завершенную запись входящей связи. |
| `--direction <outgoing\|incoming\|all>` | Направление связи. `outgoing` означает узлы, к которым вы присоединились; `incoming` означает узлы, присоединяющиеся к вашему. |
| `--domain <url>` | Домен узла связи. |
| `--invite-link <url>` | Ссылка приглашения от узла-партнера. |
| `--invite-code <code>` | 6-символьный код приглашения для повторной заявки. |
| `--text <message>` | Текст сообщения. |
| `--apply` | Сохраняет результат записи. |

### Примеры федерации

Посмотреть статус локального узла и оба списка связей:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --status
```

Показать только исходящие узлы:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --list `
  --direction outgoing
```

Показать только входящие узлы:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --list `
  --direction incoming
```

Запросить присоединение к другому узлу. Сначала запустите без `--apply`, чтобы увидеть предварительный результат:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --join `
  --invite-link "https://peer-domain/federation/invite/abcdef"
```

Затем сохраните после проверки:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --join `
  --invite-link "https://peer-domain/federation/invite/abcdef" `
  --apply
```

Повторная заявка для связи без записи:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --reapply `
  --domain "https://peer-domain" `
  --invite-code "abc123" `
  --apply
```

Принять входящий запрос:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --accept `
  --domain "https://peer-domain" `
  --apply
```

Отклонить входящий запрос:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --deny `
  --domain "https://peer-domain" `
  --apply
```

Отправить сообщение установленной связи:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --send-message `
  --direction outgoing `
  --domain "https://peer-domain" `
  --text "Hello, this is a test message." `
  --apply
```

Отменить исходящий ожидающий запрос:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --cancel `
  --direction outgoing `
  --domain "https://peer-domain" `
  --apply
```

Удалить принятую входящую связь:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --cancel `
  --direction incoming `
  --domain "https://peer-domain" `
  --apply
```

Удалить завершенную входящую запись:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --delete `
  --direction incoming `
  --domain "https://peer-domain" `
  --apply
```

Отмена принятой исходящей подписки и удаление исходящей записи должны выполняться в панели администратора в браузере, потому что этим действиям может сначала понадобиться очистка локального индекса федерации.

### Несовпадение домена

Если домен локального узла и ожидающий домен в связи не совпадают, скрипт сообщает ошибку с `currentDomain` и `pendingDomain`. Обработайте это в панели администратора в браузере, потому что изменение домена также связано с очисткой и подтверждением исходящих индексов.

Если запрос на присоединение возвращает `FEDERATION_NODE_DOMAIN_MISMATCH`, домен из ссылки приглашения не совпадает с сохраненным локальным доменом узла-партнера. Ответ содержит `currentOrigin` и `detectedOrigin`. Используйте текущий подтвержденный домен партнера или попросите партнера сначала подтвердить домен в своей панели администратора в браузере.

## FAQ

### Почему мое изменение не вступило в силу?

Команды записи по умолчанию выполняются в режиме предварительного просмотра. После проверки добавьте `--apply`, чтобы действительно сохранить изменение.

### Как узнать, какие поля можно менять?

Для настроек загрузки используйте `--get`, чтобы посмотреть существующую структуру дочернего канала. Для настроек безопасности, страниц и прочих настроек используйте `--list-sections`, чтобы увидеть области, разделы и поля, которые скрипт может редактировать.

### Я хочу использовать результат в другой программе

Используйте `--output json` или добавьте `--save-response result.json`. Ваша программа может напрямую прочитать сохраненный JSON-файл.


