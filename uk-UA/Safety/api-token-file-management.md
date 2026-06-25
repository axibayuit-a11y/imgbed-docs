# Керування файлами через API Token

Керування файлами через API Token призначене для скриптів, автоматизованих задач і сторонніх панелей керування. Воно використовує дозвіл `manage` і дає змогу без відкриття адмін-панелі редагувати інформацію про файли, переміщувати файли, перейменовувати файли, створювати файли-заповнювачі каталогів, налаштовувати теги файлів і статус списків, забороняти або відновлювати IP для завантаження, а також створювати чи видаляти короткострокові Token для завантаження.

Цей скрипт обробляє лише легкі дії в керуванні файлами та користувачами. Завантаження, списки, видалення, налаштування завантаження, налаштування сайту та федеративні зв'язки й надалі використовують власні спеціалізовані скрипти.

![Редагування API Token](../../image/Safety/apitoken/编辑管理权限api.png)

## Підготовка

В адмін-панелі відкрийте:

System Settings -> Security Settings -> API Token

Під час створення або редагування API Token переконайтеся, що цей Token має дозвіл керування. Дозвіл `manage` може змінювати стан файлів, стан завантаження користувачів і створювати короткострокові Token для завантаження, тому надавайте його лише довіреним скриптам або користувачам.

Операції запису в скрипті керування файлами типово працюють у режимі попереднього перегляду й нічого фактично не зберігають. Після перевірки попереднього результату додайте `--apply`, щоб виконати запис.

Token також можна зберегти у змінній середовища:

```powershell
$env:IMGBED_API_TOKEN="your API Token"
```

## Завантаження скрипту

| Скрипт | Призначення |
| --- | --- |
| <a href="/tools/imgbed-token-manage.mjs" download>скрипт керування файлами</a> | Метадані файлів, мітки модерації, теги файлів, статус списків, переміщення, перейменування, створення папок, блокування/відновлення IP, створення і видалення короткострокових Token для завантаження |

Для запуску потрібен Node.js 18 або новіший на локальному комп'ютері.

## Межі функцій

| Можливість | Скрипт | Дозвіл |
| --- | --- | --- |
| Завантажувати файли | `imgbed-token-single-upload.mjs` / `imgbed-token-chunk-upload.mjs` | `upload` |
| Показувати файли, фільтрувати файли та читати статистику користувачів | `imgbed-token-list.mjs` | `list` |
| Видаляти явно вказані файли | `imgbed-token-delete.mjs` | `delete` |
| Редагувати інформацію про файли, теги й списки, переміщувати, перейменовувати, створювати папки, блокувати IP і створювати або видаляти короткострокові Token для завантаження | `imgbed-token-manage.mjs` | `manage` |
| Редагувати канали завантаження, налаштування безпеки, налаштування сторінок, інші налаштування та федеративні зв'язки | Скрипти керування конфігурацією | `manage` |

`imgbed-token-manage.mjs` не завантажує файли, не показує список файлів і не видаляє файли. Якщо потрібно знайти `fileId`, спочатку скористайтеся скриптом списку для фільтрування файлів. Якщо потрібно видалити файл, передайте конкретний `fileId` у скрипт видалення.

## Загальні параметри

| Параметр | Обов'язково | Опис |
| --- | --- | --- |
| `--base-url <url>` | Так | Адреса ImgBed, наприклад `https://image.ai6.me` |
| `--token <token>` | Так | API Token; можна використовувати змінну середовища `IMGBED_API_TOKEN` |
| `--retries <n>` | Ні | Кількість повторів для тимчасових помилок; типово `3` |
| `--timeout-ms <n>` | Ні | Таймаут одного запиту; типово `180000` |
| `--output <pretty\|json>` | Ні | Формат виводу; типово `pretty`; для програмної обробки краще `json` |
| `--save-response <path>` | Ні | Зберігає фінальний результат у JSON-файл |
| `--batch-size <n>` | Ні | Кількість елементів, які обробляються одним пакетним запитом; типово `15`, максимум `15` |
| `--apply` | Ні | Справді виконує запис; без цього параметра показує лише попередній результат |
| `-h` / `--help` | Ні | Показує довідку скрипту |

## Спочатку підтвердьте fileId

Більшість дій скрипту керування файлами потребують `fileId`. Спочатку його можна знайти через скрипт списку:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --dir "test4" `
  --count 10 `
  --output json
```

Поле `name` у результаті зазвичай є тим `fileId`, який можна передати скрипту керування файлами.

## Метадані файлу

Метадані файлу використовуються для зміни імені, яке відображається в керуванні файлами адмін-панелі, і джерела читання.

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-metadata `
  --file-id "photos/2026/a.jpg" `
  --file-name "cover.jpg" `
  --read-source backup
```

Після перевірки попереднього результату збережіть зміну:

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

### Параметри метаданих файлу

| Параметр | Опис |
| --- | --- |
| `--set-metadata` | Змінює метадані одного файлу |
| `--file-id <id>` | ID файлу, який потрібно змінити |
| `--file-name <name>` | Нове ім'я, що відображається в адмін-панелі |
| `--read-source <primary\|backup>` | Джерело читання. `primary` — основне джерело, `backup` — резервне джерело |

Передайте принаймні один параметр: `--file-name` або `--read-source`.

## Мітки модерації

Мітки модерації відповідають віковій класифікації файлу. Поточну мітку можна спочатку прочитати, а потім змінити.

Прочитати мітку модерації:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get-label `
  --file-id "photos/2026/a.jpg"
```

Установити мітку модерації:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-label `
  --file-id "photos/2026/a.jpg" `
  --label r12 `
  --apply
```

### Параметри міток модерації

| Параметр | Опис |
| --- | --- |
| `--get-label` | Читає мітку модерації одного файлу |
| `--set-label` | Змінює мітку модерації одного файлу |
| `--file-id <id>` | ID файлу |
| `--label <value>` | Значення мітки: `all-ages`, `r12`, `r16`, `r18`, `None` |

## Теги файлів

Теги файлів додають до файлів пошукові робочі мітки. Скрипт підтримує читання, заміну, додавання й видалення тегів, а також пакетну обробку кількох файлів.

Прочитати теги файлу:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get-tags `
  --file-id "photos/2026/a.jpg"
```

Додати теги:

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

Видалити теги:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --remove-tags `
  --file-id "photos/2026/a.jpg" `
  --tag "cover" `
  --apply
```

Замінити теги:

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

Додати теги пакетно:

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

### Параметри тегів файлів

| Параметр | Опис |
| --- | --- |
| `--get-tags` | Читає теги одного файлу |
| `--set-tags` | Замінює теги одного файлу |
| `--add-tags` | Додає теги до одного файлу |
| `--remove-tags` | Видаляє теги з одного файлу |
| `--batch-tags` | Установлює, додає або видаляє теги пакетно |
| `--file-id <id>` | ID файлу; у пакетних діях можна передавати кілька разів |
| `--tag <tag>` | Значення тегу; можна передавати кілька разів |
| `--tags-json <path>` | Читає масив тегів із JSON-файла |
| `--tag-action <set\|add\|remove>` | Пакетна дія з тегами |

Приклад вмісту файла `--tags-json`:

```json
["cover", "2026", "public"]
```

## Статус чорного та білого списку

Статус списку визначає поведінку контролю доступу до файлу в режимі публічного доступу. Його можна змінити для одного файлу або пакетно.

Додати один файл до білого списку:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-list-type `
  --file-id "photos/2026/a.jpg" `
  --list-type White `
  --apply
```

Пакетно додати файли до чорного списку:

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

Відновити типовий статус списку:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-list-type `
  --file-id "photos/2026/a.jpg" `
  --list-type None `
  --apply
```

### Параметри чорного та білого списку

| Параметр | Опис |
| --- | --- |
| `--set-list-type` | Змінює статус списку одного файлу |
| `--batch-list-type` | Пакетно змінює статус списку файлів. Один запит обробляє щонайбільше `15` файлів |
| `--file-id <id>` | ID файлу; у пакетних діях можна передавати кілька разів |
| `--list-type <None\|White\|Block>` | `None` — типовий статус, `White` — білий список, `Block` — чорний список |

## Переміщення файлів

Переміщення файлів переносить один або кілька файлів до цільового каталогу. Backend обробляє щонайбільше `15` файлів за один запит. Скрипт автоматично ділить роботу за `--batch-size` і виконує запити послідовно.

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

### Параметри переміщення

| Параметр | Опис |
| --- | --- |
| `--move` | Переміщує файли |
| `--file-id <id>` | ID файлу для переміщення; можна передавати кілька разів |
| `--target-path <dir>` | Цільовий каталог |
| `--batch-size <n>` | Кількість файлів, що переміщуються одним запитом; типово `15`, максимум `15` |

## Перейменування або зміна шляху

Перейменування використовує явний старий ID файлу та новий ID файлу. Новий ID може змінити лише ім'я файлу або одночасно змінити каталог.

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --rename `
  --old-file-id "photos/2026/a.jpg" `
  --new-file-id "photos/2026/a-renamed.jpg" `
  --apply
```

Для пакетного перейменування повторюйте `--old-file-id` і `--new-file-id`:

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

Відповідність також можна записати в JSON-файл:

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

### Параметри перейменування

| Параметр | Опис |
| --- | --- |
| `--rename` | Перейменовує або змінює шляхи за явною відповідністю |
| `--old-file-id <id>` | Початковий ID файлу; можна передавати кілька разів |
| `--new-file-id <id>` | Новий ID файлу; можна передавати кілька разів, кількість має збігатися з `--old-file-id` |
| `--items-json <path>` | JSON-масив. Кожен елемент має вигляд `{ "oldFileId": "...", "newFileId": "..." }` |
| `--batch-size <n>` | Кількість перейменувань, що обробляються одним запитом; типово `15`, максимум `15` |

## Створення папок

Каталоги ImgBed виводяться зі шляхів файлів, тому справжніх порожніх каталогів немає. Коли скрипт створює папку, він створює в цільовому каталозі файл-заповнювач `0.md`, щоб цей каталог відображався в керуванні файлами та статистиці каталогів.

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --create-folder `
  --parent-directory "photos" `
  --folder-name "2026" `
  --apply
```

### Параметри створення папки

| Параметр | Опис |
| --- | --- |
| `--create-folder` | Створює файл-заповнювач каталогу |
| `--parent-directory <dir>` | Батьківський каталог; для кореня передайте порожній рядок |
| `--folder-name <name>` | Назва нової папки |

## Блокування та відновлення IP завантаження

За допомогою дозволу керування можна додати IP до списку заборони завантаження або прибрати його з цього списку. Ця дія впливає на майбутні завантаження з цього IP, але не видаляє файли, які вже були завантажені з цієї адреси.

Заблокувати IP завантаження:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --block-ip "67.159.48.149" `
  --apply
```

Відновити IP завантаження:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --allow-ip "67.159.48.149" `
  --apply
```

Переглянути поточний список IP, яким заборонено завантаження:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --blocked-ips
```

### Параметри керування IP

| Параметр | Опис |
| --- | --- |
| `--block-ip <ip>` | Додає IP до списку заборони завантаження |
| `--allow-ip <ip>` | Видаляє IP зі списку заборони завантаження |

## Створення і видалення короткострокових Token для завантаження

Дозвіл керування може створювати короткострокові Token лише для завантаження. Такий Token завжди має тільки дозвіл `upload`, `autoDelete` завжди дорівнює `true`, а максимальний строк дії становить `1` день.

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

Також можна напряму передати часову мітку в мілісекундах:

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

Під час видалення короткострокового Token для завантаження потрібно передати `id`, який повернув API створення. Керівний Token може видаляти лише Token, що відповідають цим умовам:

| Умова | Вимога |
| --- | --- |
| Дозвіл | `permissions` містить лише `upload` |
| Автовидалення | `autoDelete=true` |
| Строк дії | `expiresAt - createdAt <= 24` години |

Видалити короткостроковий Token для завантаження:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --delete-upload-token `
  --token-id "mqt4jqokc85be80d1f0f47078e848a77d6c1aa6e" `
  --apply
```

Керівний Token не може видаляти звичайні Token, довгострокові Token, Token з дозволами `list` / `delete` / `manage`, а також Token для завантаження зі строком дії понад `1` день. Такі Token і далі потрібно обробляти в адмін-панелі браузера.

### Параметри короткострокового Token для завантаження

| Параметр | Опис |
| --- | --- |
| `--create-upload-token` | Створює короткостроковий Token лише для завантаження |
| `--delete-upload-token` | Видаляє придатний короткостроковий Token лише для завантаження |
| `--name <name>` | Назва Token |
| `--owner <owner>` | Опис власника Token |
| `--default-upload-channel <key>` | Типовий канал завантаження. Це має бути реальний канал, наприклад `telegram`, `s3` або `github` |
| `--expires-in-minutes <n>` | Кількість хвилин до завершення строку дії від поточного часу. Максимум `1440` |
| `--expires-at <ms>` | Абсолютний час завершення строку дії як мілісекундна часова мітка. Максимум `24` години від поточного часу |
| `--token-id <id>` | ID короткострокового Token для завантаження, який потрібно видалити |

Короткострокові Token для завантаження дозволяють лише завантажувати файли. У тестах короткостроковий Token з `permissions=["upload"]` відхилявся під час доступу до API списків, керування файлами та видалення.

Після завершення строку дії Token з `autoDelete=true` очищається, коли backend перевіряє й виявляє, що він прострочений. Читання списку API Token також очищає прострочені Token, у яких `autoDelete` дорівнює `true`.

## Відповідність API

| Дія | Метод | API |
| --- | --- | --- |
| Змінити метадані файлу | `PATCH` | `/api/manage/metadata/{fileId}` |
| Прочитати мітку модерації | `GET` | `/api/manage/label/{fileId}` |
| Змінити мітку модерації | `POST` | `/api/manage/label/{fileId}` |
| Прочитати теги файлу | `GET` | `/api/manage/tags/{fileId}` |
| Змінити теги файлу | `POST` | `/api/manage/tags/{fileId}` |
| Пакетно змінити теги файлу | `POST` | `/api/manage/tags/batch` |
| Змінити статус списку | `POST` | `/api/manage/listType/{fileId}` |
| Пакетно змінити статус списку | `POST` | `/api/manage/listType/batch` |
| Перемістити або перейменувати | `POST` | `/api/manage/relocate/batch` |
| Створити папку | `POST` | `/api/manage/folder/create` |
| Заблокувати IP завантаження | `POST` | `/api/manage/cusConfig/blockip` |
| Відновити IP завантаження | `POST` | `/api/manage/cusConfig/whiteip` |
| Створити короткостроковий Token для завантаження | `POST` | `/api/manage/apiTokens` |
| Видалити короткостроковий Token для завантаження | `DELETE` | `/api/manage/apiTokens?id={tokenId}` |

Скрипт автоматично додає:

```text
Authorization: Bearer your API Token
```

## Формат виводу

Типовий вивід `pretty` зручний для читання людиною. Якщо результат має обробляти інша програма, використовуйте `--output json`:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get-tags `
  --file-id "photos/2026/a.jpg" `
  --output json
```

Також можна зберегти повний результат:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get-tags `
  --file-id "photos/2026/a.jpg" `
  --output json `
  --save-response ".\manage-result.json"
```

Пакетне переміщення, пакетне перейменування та пакетні дії зі списками розбирають потік прогресу NDJSON, який повертає backend, і підсумовують кількість подій, стан завершення та деталі помилок.

## Поширені запитання

### Чому команда нічого не змінила

Операції запису типово працюють у режимі попереднього перегляду. Після перевірки попереднього результату додайте `--apply`, щоб справді зберегти зміну.

### Чи може цей скрипт завантажувати, показувати або видаляти файли

Ні. Для завантаження використовуйте скрипти завантаження, для списків і фільтрації — скрипт списку, для видалення конкретних файлів — скрипт видалення. Скрипт керування файлами обробляє лише легкі дії з дозволом `manage`.

### Як дізнатися, який fileId передати

Спочатку знайдіть файли через `imgbed-token-list.mjs --files`. Поле `name` у результаті зазвичай є ID файлу, тобто значенням для `--file-id`.

### Скільки файлів може обробити одна пакетна операція

Backend обробляє щонайбільше `15` файлів за один запит. Скрипт типово використовує `--batch-size 15`; якщо передати менше значення, він автоматично поділить роботу на кілька послідовних запитів.

### Чи можна створити справді порожню папку

Каталоги ImgBed виводяться зі шляхів файлів, тому справжніх порожніх папок немає. `--create-folder` створює файл-заповнювач каталогу `0.md`, щоб папка відображалася в керуванні файлами та статистиці каталогів.

### Як довго може діяти короткостроковий Token для завантаження

Щонайбільше `1` день, тобто `1440` хвилин. Якщо строк перевищує цей ліміт, скрипт відхилить його локально, а backend також поверне `API_TOKEN_MANAGE_CREATE_EXPIRES_AT_TOO_LONG`.

### Чи буде короткостроковий Token для завантаження автоматично видалено після завершення строку дії

Він очищається автоматично, але не миттєвим плановим завданням. Прострочений Token очищається під час наступної перевірки. Читання списку API Token також очищає прострочені Token з `autoDelete=true`.
