# Список і фільтрування через API Token

Скрипт списку через API Token підходить для скриптів, автоматизованих задач і сторонніх програм, яким потрібно читати дані ImgBed. Він використовує лише право `list`: не завантажує файли, не видаляє файли, не змінює конфігурацію і не забороняє чи дозволяє завантаження для окремих IP.

Основні сценарії:

| Функція | Опис |
| --- | --- |
| Список у керуванні файлами | Читає список файлів з адмінки та підтримує розширені параметри фільтрування з керування файлами |
| Список у керуванні користувачами | Читає статистику завантажень для користувачів/IP і підтримує параметри фільтрування з керування користувачами |
| Список каналів завантаження | Читає знеособлені канали завантаження, підканали, обсяг і дані балансування навантаження |
| Таблиця статистики каталогів | Читає статистику каталогів і дані сторінкування каталогів |

## Підготовка

Після входу в адмінку відкрийте:

```text
System Settings -> Security Settings -> API Token
```

Під час створення або редагування API Token переконайтеся, що цей Token дозволяє перегляд списків. Для цього скрипту потрібне лише право `list`.

Token також можна зберегти у змінній середовища:

```powershell
$env:IMGBED_API_TOKEN="your API Token"
```

## Завантаження скрипту

| Скрипт | Призначення |
| --- | --- |
| <a href="/tools/imgbed-token-list.mjs" download>Завантажити скрипт списку і фільтрування</a> | Список файлів, список користувачів, список каналів завантаження, таблиця статистики каталогів |

Для запуску скрипту потрібен Node.js 18 або новіший.

## Загальні параметри

| Параметр | Обов'язково | Опис |
| --- | --- | --- |
| `--base-url <url>` | Так | Адреса ImgBed, наприклад `https://image.ai6.me` |
| `--token <token>` | Так | API Token; можна використовувати змінну середовища `IMGBED_API_TOKEN` |
| `--retries <n>` | Ні | Повтори для тимчасових помилок; типово `3` |
| `--timeout-ms <n>` | Ні | Таймаут одного запиту; типово `180000` |
| `--output <pretty\|json>` | Ні | Формат виводу; типово `pretty`; для програмного виклику краще `json` |
| `--save-response <path>` | Ні | Зберегти фінальний результат у JSON-файл |
| `-h` / `--help` | Ні | Показати довідку скрипту |

## Список у керуванні файлами

Вивести файли з керування файлами:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --count 10
```

Вивести JSON:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --count 10 `
  --output json
```

Прочитати лише кількість за поточними умовами фільтрування:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --file-summary `
  --dir "photos/2026" `
  --recursive
```

### Параметри керування файлами

| Параметр | Опис |
| --- | --- |
| `--files` | Вивести список файлів |
| `--file-summary` | Прочитати лише статистику кількості |
| `--start <n>` | Зсув сторінкування |
| `--count <n>` | Кількість записів у відповіді |
| `--dir <path>` | Вказати каталог |
| `--recursive` | Включити файли з підкаталогів |
| `--search <text>` | Ключове слово пошуку |
| `--channel <key>` | Фільтр за основним каналом завантаження, наприклад `github`, `s3`, `yandex` |
| `--channel-scope <primary\|backup\|all>` | Область фільтрування каналу: основний канал, резервний канал або всі |
| `--channel-name-groups <value>` | Фільтр груп підканалів, передається на сервер як наявний параметр |
| `--list-type <csv>` | Тип списку, часто використовується `None,White,Block` |
| `--include-tags <csv>` | Обов'язково включити ці теги |
| `--exclude-tags <csv>` | Виключити ці теги |
| `--time-start <ms>` | Початок часу завантаження, мітка часу в мілісекундах |
| `--time-end <ms>` | Кінець часу завантаження, мітка часу в мілісекундах |
| `--file-exts <csv>` | Включити лише вказані розширення, наприклад `jpg,png,pdf` |
| `--exclude-file-exts <csv>` | Виключити вказані розширення |
| `--file-status-categories <csv>` | Категорії файлів: `image,audio,video,document,code,other` |
| `--upload-ip <ip>` | Фільтр за префіксом IP завантаження |
| `--age-ratings <csv>` | Вікові рейтинги: `none,all-ages,r12,r16,r18` |
| `--orientation <csv>` | Фільтр за орієнтацією зображення, передається на сервер як наявне значення |
| `--read-source <csv>` | Фільтр за джерелом читання, передається на сервер як наявне значення |
| `--access-status <normal\|blocked>` | Стан публічного доступу |
| `--min-width <n>` | Мінімальна ширина |
| `--max-width <n>` | Максимальна ширина |
| `--min-height <n>` | Мінімальна висота |
| `--max-height <n>` | Максимальна висота |
| `--min-file-size <mb>` | Мінімальний розмір файлу; одиниця відповідає наявному параметру сервера у MB |
| `--max-file-size <mb>` | Максимальний розмір файлу; одиниця відповідає наявному параметру сервера у MB |

### Приклади керування файлами

Пошук PDF:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --search "pdf" `
  --file-status-categories "document" `
  --count 20
```

Фільтр за IP завантаження і каналом:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --upload-ip "103.62" `
  --channel yandex `
  --channel-scope primary
```

Зберегти повний результат:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --count 100 `
  --output json `
  --save-response ".\files.json"
```

## Список у керуванні користувачами

Вивести статистику завантажень для користувачів/IP:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --count 20
```

Пошук певного IP або адреси:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --search "43.198.183.56"
```

Переглянути файли, завантажені з певного IP:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --user-detail `
  --ip "43.198.183.56" `
  --count 20
```

Вивести IP, яким заборонено завантаження:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --blocked-ips
```

### Параметри керування користувачами

| Параметр | Опис |
| --- | --- |
| `--users` | Вивести статистику завантажень для користувачів/IP |
| `--user-detail` | Переглянути файли, завантажені з певного IP |
| `--blocked-ips` | Вивести IP, яким заборонено завантаження |
| `--ip <ip>` | Обов'язково для `--user-detail` |
| `--start <n>` | Зсув сторінкування |
| `--count <n>` | Кількість записів у відповіді |
| `--sort <value>` | Сортування: `timeDesc`, `timeAsc`, `countDesc`, `countAsc`, `totalSizeDesc`, `totalSizeAsc` |
| `--search <text>` | Пошук IP або адреси |
| `--upload-status <allowed\|blocked>` | Чи дозволено завантаження |
| `--start-time <ms>` | Початок статистичного періоду, мітка часу в мілісекундах |
| `--end-time <ms>` | Кінець статистичного періоду, мітка часу в мілісекундах |
| `--file-status-categories <csv>` | Фільтр за категорією файлів |
| `--age-ratings <csv>` | Фільтр за віковим рейтингом |
| `--min-file-size <mb>` | Мінімальний розмір файлу |
| `--max-file-size <mb>` | Максимальний розмір файлу |
| `--list-type <csv>` | Тип списку, часто використовується `None,White,Block` |
| `--access-status <normal\|blocked>` | Стан публічного доступу |

### Приклади керування користувачами

Вивести користувачів, яким заборонено завантаження:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --upload-status blocked
```

Пошук за ключовим словом адреси:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --search "Hong Kong"
```

Сортування за кількістю завантажень:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --sort countDesc `
  --count 50
```

## Список каналів завантаження

Вивести знеособлену конфігурацію каналів завантаження:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --channels
```

Відповідь містить:

| Поле | Опис |
| --- | --- |
| `type` | Основний канал завантаження, наприклад `github`, `s3`, `yandex` |
| `name` | Назва підканалу або акаунта |
| `enabled` | Чи ввімкнено |
| `load_balance_enabled` | Чи ввімкнено балансування навантаження для цього основного каналу |
| `quota_enabled` | Чи ввімкнено перевірку обсягу |
| `quota_limit_bytes` | Ліміт обсягу |
| `quota_used_bytes` | Використаний обсяг |
| `quota_checked_at` | Час перевірки обсягу |
| `tag_json` | Несекретні теги, наприклад публічний репозиторій або приватний репозиторій |
| `created_at` / `updated_at` | Час створення й оновлення |

Цей API не повертає секретні ключі, токени оновлення, тимчасові token, паролі та іншу чутливу конфігурацію.

## Таблиця статистики каталогів

Вивести статистику каталогів:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --directories `
  --limit 20
```

Вивести повні шляхи каталогів і шукати за префіксом:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --directories `
  --scope full `
  --search-prefix "test" `
  --include-parents `
  --limit 10
```

### Параметри статистики каталогів

| Параметр | Опис |
| --- | --- |
| `--directories` | Вивести таблицю статистики каталогів |
| `--dir <path>` | Каталог, з якого почати список |
| `--scope <direct\|full>` | `direct` показує лише безпосередні підкаталоги, `full` показує повні шляхи |
| `--search-prefix <path>` | Пошук за префіксом каталогу |
| `--include-parents` | У режимі `full` також включити батьківські каталоги |
| `--limit <n>` | Кількість записів у відповіді; сервер повертає щонайбільше `100` |
| `--cursor <path>` | Курсор наступної сторінки |

## Формат виводу

Типовий `pretty` зручний для перегляду людиною:

```powershell
node imgbed-token-list.mjs --base-url "https://your-domain" --token "your API Token" --users --count 5
```

Якщо результат має обробляти інша програма, використовуйте `--output json`:

```powershell
node imgbed-token-list.mjs --base-url "https://your-domain" --token "your API Token" --users --count 5 --output json
```

Також можна зберегти повний результат:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --count 5 `
  --output json `
  --save-response ".\users.json"
```

## Часті питання

### Чи змінює цей скрипт дані?

Ні. Цей скрипт викликає лише API читання: він не завантажує, не видаляє, не переміщує файли, не редагує конфігурацію і не забороняє чи дозволяє завантаження для окремих IP.

### Чому потрібне право `list`?

Список файлів, список користувачів, знеособлений список каналів і статистика каталогів належать до можливостей читання, тому достатньо права `list` в API Token.

### Як дізнатися доступні параметри?

Виконайте:

```powershell
node imgbed-token-list.mjs --help
```

Скрипт виведе всі дії та параметри.

