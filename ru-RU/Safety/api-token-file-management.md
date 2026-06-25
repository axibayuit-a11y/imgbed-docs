# Управление файлами через API Token

Управление файлами через API Token предназначено для скриптов, задач автоматизации и сторонних панелей управления. Оно использует разрешение `manage` и позволяет без открытия панели администратора редактировать сведения о файлах, перемещать файлы, переименовывать файлы, создавать файлы-заполнители каталогов, настраивать теги файлов и статус списков, блокировать или восстанавливать IP для загрузки, а также создавать или удалять краткосрочные Token для загрузки.

Этот скрипт обрабатывает только легкие действия в управлении файлами и пользователями. Загрузка, списки, удаление, настройки загрузки, настройки сайта и федеративные связи по-прежнему используют свои отдельные скрипты.

![Редактирование API Token](../../image/Safety/apitoken/编辑管理权限api.png)

## Подготовка

В панели администратора откройте:

System Settings -> Security Settings -> API Token

При создании или редактировании API Token убедитесь, что для этого Token разрешено управление. Разрешение `manage` может менять состояние файлов, состояние загрузок пользователей и создавать краткосрочные Token для загрузки, поэтому выдавайте его только доверенным скриптам или пользователям.

Операции записи в скрипте управления файлами по умолчанию работают в режиме предварительного просмотра и ничего не сохраняют. После проверки предварительного результата добавьте `--apply`, чтобы выполнить запись.

Token можно также поместить в переменную окружения:

```powershell
$env:IMGBED_API_TOKEN="your API Token"
```

## Скачать скрипт

| Скрипт | Назначение |
| --- | --- |
| <a href="/tools/imgbed-token-manage.mjs" download>скрипт управления файлами</a> | Метаданные файлов, метки модерации, теги файлов, статус списков, перемещение, переименование, создание папок, блокировка/восстановление IP, создание и удаление краткосрочных Token для загрузки |

На локальном компьютере требуется Node.js 18 или новее.

## Границы возможностей

| Возможность | Скрипт | Разрешение |
| --- | --- | --- |
| Загружать файлы | `imgbed-token-single-upload.mjs` / `imgbed-token-chunk-upload.mjs` | `upload` |
| Показывать файлы, фильтровать файлы и читать статистику пользователей | `imgbed-token-list.mjs` | `list` |
| Удалять явно указанные файлы | `imgbed-token-delete.mjs` | `delete` |
| Редактировать сведения о файлах, теги и списки, перемещать, переименовывать, создавать папки, блокировать IP и создавать или удалять краткосрочные Token для загрузки | `imgbed-token-manage.mjs` | `manage` |
| Редактировать каналы загрузки, настройки безопасности, настройки страниц, прочие настройки и федеративные связи | Скрипты управления конфигурацией | `manage` |

`imgbed-token-manage.mjs` не загружает файлы, не показывает список файлов и не удаляет файлы. Если нужно найти `fileId`, сначала используйте скрипт списков для фильтрации файлов. Если нужно удалить файл, передайте конкретный `fileId` скрипту удаления.

## Общие параметры

| Параметр | Обязателен | Описание |
| --- | --- | --- |
| `--base-url <url>` | Да | Адрес ImgBed, например `https://image.ai6.me` |
| `--token <token>` | Да | API Token; можно использовать переменную окружения `IMGBED_API_TOKEN` |
| `--retries <n>` | Нет | Число повторов при временных ошибках; по умолчанию `3` |
| `--timeout-ms <n>` | Нет | Таймаут одного запроса; по умолчанию `180000` |
| `--output <pretty\|json>` | Нет | Формат вывода; по умолчанию `pretty`. Для программной обработки лучше использовать `json` |
| `--save-response <path>` | Нет | Сохраняет итоговый результат в JSON-файл |
| `--batch-size <n>` | Нет | Количество элементов, обрабатываемых одним пакетным запросом; по умолчанию `15`, максимум `15` |
| `--apply` | Нет | Действительно выполняет запись; без него показывается только предварительный результат |
| `-h` / `--help` | Нет | Показывает справку скрипта |

## Сначала подтвердите fileId

Большинству действий скрипта управления файлами нужен `fileId`. Сначала его можно найти через скрипт списков:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --dir "test4" `
  --count 10 `
  --output json
```

Поле `name` в результате обычно является тем `fileId`, который можно передать скрипту управления файлами.

## Метаданные файла

Метаданные файла используются для изменения имени, отображаемого в управлении файлами панели, и источника чтения.

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-metadata `
  --file-id "photos/2026/a.jpg" `
  --file-name "cover.jpg" `
  --read-source backup
```

После проверки предварительного результата сохраните изменение:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-metadata `
  --file-id "photos/2026/a.jpg" `
  --file-name "cover.jpg" `
  --read-source backup `
  --apply
```

### Параметры метаданных файла

| Параметр | Описание |
| --- | --- |
| `--set-metadata` | Изменяет метаданные одного файла |
| `--file-id <id>` | ID файла, который нужно изменить |
| `--file-name <name>` | Новое отображаемое имя в панели |
| `--read-source <primary\|backup>` | Источник чтения. `primary` — основной источник, `backup` — резервный источник |

Передайте хотя бы один параметр: `--file-name` или `--read-source`.

## Метки модерации

Метки модерации соответствуют возрастной классификации файла. Можно сначала прочитать текущую метку, а затем изменить ее.

Прочитать метку модерации:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get-label `
  --file-id "photos/2026/a.jpg"
```

Установить метку модерации:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-label `
  --file-id "photos/2026/a.jpg" `
  --label r12 `
  --apply
```

### Параметры меток модерации

| Параметр | Описание |
| --- | --- |
| `--get-label` | Читает метку модерации одного файла |
| `--set-label` | Изменяет метку модерации одного файла |
| `--file-id <id>` | ID файла |
| `--label <value>` | Значение метки: `all-ages`, `r12`, `r16`, `r18`, `None` |

## Теги файлов

Теги файлов используются для добавления к файлам поисковых рабочих меток. Скрипт поддерживает чтение, замену, добавление и удаление тегов, а также пакетную обработку нескольких файлов.

Прочитать теги файла:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get-tags `
  --file-id "photos/2026/a.jpg"
```

Добавить теги:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --add-tags `
  --file-id "photos/2026/a.jpg" `
  --tag "cover" `
  --tag "2026" `
  --apply
```

Удалить теги:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --remove-tags `
  --file-id "photos/2026/a.jpg" `
  --tag "cover" `
  --apply
```

Заменить теги:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-tags `
  --file-id "photos/2026/a.jpg" `
  --tag "archive" `
  --tag "public" `
  --apply
```

Добавить теги пакетно:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --batch-tags `
  --file-id "photos/2026/a.jpg" `
  --file-id "photos/2026/b.jpg" `
  --tag-action add `
  --tag "batch-test" `
  --apply
```

### Параметры тегов файлов

| Параметр | Описание |
| --- | --- |
| `--get-tags` | Читает теги одного файла |
| `--set-tags` | Заменяет теги одного файла |
| `--add-tags` | Добавляет теги к одному файлу |
| `--remove-tags` | Удаляет теги из одного файла |
| `--batch-tags` | Устанавливает, добавляет или удаляет теги пакетно |
| `--file-id <id>` | ID файла; в пакетных действиях можно передавать несколько раз |
| `--tag <tag>` | Значение тега; можно передавать несколько раз |
| `--tags-json <path>` | Читает массив тегов из JSON-файла |
| `--tag-action <set\|add\|remove>` | Пакетное действие с тегами |

Пример содержимого файла `--tags-json`:

```json
["cover", "2026", "public"]
```

## Статус черного и белого списка

Статус списка определяет поведение контроля доступа к файлу в режиме публичного доступа. Его можно изменить для одного файла или пакетно.

Добавить один файл в белый список:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-list-type `
  --file-id "photos/2026/a.jpg" `
  --list-type White `
  --apply
```

Пакетно добавить файлы в черный список:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --batch-list-type `
  --file-id "photos/2026/a.jpg" `
  --file-id "photos/2026/b.jpg" `
  --list-type Block `
  --apply
```

Вернуть статус списка по умолчанию:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-list-type `
  --file-id "photos/2026/a.jpg" `
  --list-type None `
  --apply
```

### Параметры черного и белого списка

| Параметр | Описание |
| --- | --- |
| `--set-list-type` | Изменяет статус списка одного файла |
| `--batch-list-type` | Пакетно изменяет статус списка файлов. Один запрос обрабатывает не больше `15` файлов |
| `--file-id <id>` | ID файла; в пакетных действиях можно передавать несколько раз |
| `--list-type <None\|White\|Block>` | `None` — статус по умолчанию, `White` — белый список, `Block` — черный список |

## Перемещение файлов

Перемещение переносит один или несколько файлов в целевой каталог. Backend обрабатывает не больше `15` файлов за один запрос. Скрипт автоматически делит работу по `--batch-size` и выполняет запросы последовательно.

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --move `
  --file-id "photos/2026/a.jpg" `
  --file-id "photos/2026/b.jpg" `
  --target-path "archive/2026" `
  --apply
```

### Параметры перемещения

| Параметр | Описание |
| --- | --- |
| `--move` | Перемещает файлы |
| `--file-id <id>` | ID файла для перемещения; можно передавать несколько раз |
| `--target-path <dir>` | Целевой каталог |
| `--batch-size <n>` | Количество файлов, перемещаемых одним запросом; по умолчанию `15`, максимум `15` |

## Переименование или изменение пути

Переименование использует явный старый ID файла и новый ID файла. Новый ID может изменить только имя файла или одновременно изменить каталог.

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --rename `
  --old-file-id "photos/2026/a.jpg" `
  --new-file-id "photos/2026/a-renamed.jpg" `
  --apply
```

Для пакетного переименования повторяйте `--old-file-id` и `--new-file-id`:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --rename `
  --old-file-id "photos/2026/a.jpg" `
  --new-file-id "archive/2026/a.jpg" `
  --old-file-id "photos/2026/b.jpg" `
  --new-file-id "archive/2026/b.jpg" `
  --apply
```

Также можно записать соответствия в JSON-файл:

```json
[
  {
    "oldFileId": "photos/2026/a.jpg",
    "newFileId": "archive/2026/a.jpg"
  },
  {
    "oldFileId": "photos/2026/b.jpg",
    "newFileId": "archive/2026/b.jpg"
  }
]
```

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --rename `
  --items-json ".\rename-items.json" `
  --apply
```

### Параметры переименования

| Параметр | Описание |
| --- | --- |
| `--rename` | Переименовывает или меняет пути по явному соответствию |
| `--old-file-id <id>` | Исходный ID файла; можно передавать несколько раз |
| `--new-file-id <id>` | Новый ID файла; можно передавать несколько раз, количество должно совпадать с `--old-file-id` |
| `--items-json <path>` | JSON-массив. Каждый элемент имеет вид `{ "oldFileId": "...", "newFileId": "..." }` |
| `--batch-size <n>` | Количество переименований, обрабатываемых одним запросом; по умолчанию `15`, максимум `15` |

## Создание папок

Каталоги ImgBed выводятся из путей файлов, поэтому настоящих пустых каталогов нет. При создании папки скрипт создает в целевом каталоге файл-заполнитель `0.md`, чтобы этот каталог отображался в управлении файлами и статистике каталогов.

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --create-folder `
  --parent-directory "photos" `
  --folder-name "2026" `
  --apply
```

### Параметры создания папки

| Параметр | Описание |
| --- | --- |
| `--create-folder` | Создает файл-заполнитель каталога |
| `--parent-directory <dir>` | Родительский каталог; для корня передайте пустую строку |
| `--folder-name <name>` | Имя новой папки |

## Блокировка и восстановление IP загрузки

С разрешением управления можно добавить IP в список запрета загрузки или удалить его из этого списка. Это влияет на будущие загрузки с этого IP, но не удаляет файлы, уже загруженные с этого адреса.

Заблокировать IP загрузки:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --block-ip "67.159.48.149" `
  --apply
```

Восстановить IP загрузки:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --allow-ip "67.159.48.149" `
  --apply
```

Посмотреть текущий список IP, которым запрещена загрузка:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --blocked-ips
```

### Параметры управления IP

| Параметр | Описание |
| --- | --- |
| `--block-ip <ip>` | Добавляет IP в список запрета загрузки |
| `--allow-ip <ip>` | Удаляет IP из списка запрета загрузки |

## Создание и удаление краткосрочных Token для загрузки

Разрешение управления может создавать краткосрочные Token только для загрузки. У такого Token всегда есть только разрешение `upload`, `autoDelete` всегда равно `true`, а максимальный срок действия составляет `1` день.

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --create-upload-token `
  --name "Temporary Upload Token" `
  --owner "upload-bot" `
  --default-upload-channel telegram `
  --expires-in-minutes 20 `
  --apply `
  --output json
```

Также можно напрямую передать временную метку в миллисекундах:

```powershell
$expiresAt = [DateTimeOffset]::UtcNow.AddHours(12).ToUnixTimeMilliseconds()

node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --create-upload-token `
  --name "Upload Token valid for one day" `
  --owner "upload-bot" `
  --default-upload-channel telegram `
  --expires-at $expiresAt `
  --apply
```

При удалении краткосрочного Token для загрузки нужно передать `id`, возвращенный API создания. Управляющий Token может удалять только Token, которые соответствуют этим условиям:

| Условие | Требование |
| --- | --- |
| Разрешение | `permissions` содержит только `upload` |
| Автоудаление | `autoDelete=true` |
| Срок действия | `expiresAt - createdAt <= 24` часа |

Удалить краткосрочный Token для загрузки:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --delete-upload-token `
  --token-id "mqt4jqokc85be80d1f0f47078e848a77d6c1aa6e" `
  --apply
```

Управляющий Token не может удалять обычные Token, долгосрочные Token, Token с разрешениями `list` / `delete` / `manage`, а также Token для загрузки со сроком действия больше `1` дня. Такие Token по-прежнему нужно обрабатывать в панели администратора в браузере.

### Параметры краткосрочного Token для загрузки

| Параметр | Описание |
| --- | --- |
| `--create-upload-token` | Создает краткосрочный Token только для загрузки |
| `--delete-upload-token` | Удаляет подходящий краткосрочный Token только для загрузки |
| `--name <name>` | Имя Token |
| `--owner <owner>` | Описание владельца Token |
| `--default-upload-channel <key>` | Канал загрузки по умолчанию. Это должен быть реальный канал, например `telegram`, `s3` или `github` |
| `--expires-in-minutes <n>` | Минуты до истечения срока от текущего времени. Максимум `1440` |
| `--expires-at <ms>` | Абсолютное время истечения срока в виде миллисекундной временной метки. Максимум `24` часа от текущего времени |
| `--token-id <id>` | ID краткосрочного Token для загрузки, который нужно удалить |

Краткосрочные Token для загрузки позволяют только загружать файлы. В тестах краткосрочный Token с `permissions=["upload"]` отклонялся при доступе к API списков, управления файлами и удаления.

После истечения срока Token с `autoDelete=true` очищается, когда backend проверяет и обнаруживает, что он истек. Чтение списка API Token также очищает истекшие Token, у которых `autoDelete` равно `true`.

## Соответствие API

| Действие | Метод | API |
| --- | --- | --- |
| Изменить метаданные файла | `PATCH` | `/api/manage/metadata/{fileId}` |
| Прочитать метку модерации | `GET` | `/api/manage/label/{fileId}` |
| Изменить метку модерации | `POST` | `/api/manage/label/{fileId}` |
| Прочитать теги файла | `GET` | `/api/manage/tags/{fileId}` |
| Изменить теги файла | `POST` | `/api/manage/tags/{fileId}` |
| Пакетно изменить теги файла | `POST` | `/api/manage/tags/batch` |
| Изменить статус списка | `POST` | `/api/manage/listType/{fileId}` |
| Пакетно изменить статус списка | `POST` | `/api/manage/listType/batch` |
| Переместить или переименовать | `POST` | `/api/manage/relocate/batch` |
| Создать папку | `POST` | `/api/manage/folder/create` |
| Заблокировать IP загрузки | `POST` | `/api/manage/cusConfig/blockip` |
| Восстановить IP загрузки | `POST` | `/api/manage/cusConfig/whiteip` |
| Создать краткосрочный Token для загрузки | `POST` | `/api/manage/apiTokens` |
| Удалить краткосрочный Token для загрузки | `DELETE` | `/api/manage/apiTokens?id={tokenId}` |

Скрипт автоматически добавляет:

```text
Authorization: Bearer your API Token
```

## Формат вывода

Вывод `pretty` по умолчанию подходит для чтения человеком. Если результат должен обрабатывать другой программный код, используйте `--output json`:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get-tags `
  --file-id "photos/2026/a.jpg" `
  --output json
```

Также можно сохранить полный результат:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get-tags `
  --file-id "photos/2026/a.jpg" `
  --output json `
  --save-response ".\manage-result.json"
```

Пакетное перемещение, пакетное переименование и пакетные действия со списками разбирают поток прогресса NDJSON от backend и суммируют количество событий, статус завершения и сведения об ошибках.

## Частые вопросы

### Почему команда ничего не изменила

Операции записи по умолчанию работают в режиме предварительного просмотра. После проверки предварительного результата добавьте `--apply`, чтобы действительно сохранить изменение.

### Может ли этот скрипт загружать, показывать или удалять файлы

Нет. Для загрузки используйте скрипты загрузки, для списков и фильтрации — скрипт списков, для удаления конкретных файлов — скрипт удаления. Скрипт управления файлами выполняет только легкие действия с разрешением `manage`.

### Как узнать, какой fileId передать

Сначала найдите файлы через `imgbed-token-list.mjs --files`. Поле `name` в результате обычно является ID файла, то есть значением для `--file-id`.

### Сколько файлов может обработать одна пакетная операция

Backend обрабатывает не больше `15` файлов за один запрос. По умолчанию скрипт использует `--batch-size 15`; если передать меньшее значение, он автоматически разделит работу на несколько последовательных запросов.

### Можно ли создать действительно пустую папку

Каталоги ImgBed выводятся из путей файлов, поэтому настоящих пустых папок нет. `--create-folder` создает файл-заполнитель `0.md`, чтобы папка отображалась в управлении файлами и статистике каталогов.

### Как долго может действовать краткосрочный Token для загрузки

Максимум `1` день, то есть `1440` минут. Если срок превышает этот предел, скрипт отклонит его локально, а backend также вернет `API_TOKEN_MANAGE_CREATE_EXPIRES_AT_TOO_LONG`.

### Будет ли краткосрочный Token для загрузки автоматически удален после истечения срока

Он очищается автоматически, но не немедленной плановой задачей. Истекший Token очищается при следующей проверке. Чтение списка API Token также очищает истекшие Token с `autoDelete=true`.
