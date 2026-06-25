# Керування конфігурацією через API Token

Керування конфігурацією через API Token призначене для скриптів автоматизації, операційних інструментів і сторонніх панелей керування. Воно може читати й оновлювати конфігурацію каналів завантаження, налаштування безпеки, налаштування сторінок, інші налаштування та легкі федеративні зв'язки без відкриття сторінки адміністратора.

Дозвіл керування відкриває лише легкі операції, придатні для скриптів. Важкі операції, які потребують підтвердження в браузері, пакетних задач фронтенда або очищення індексу федерації, усе ще потрібно виконувати в адмін-панелі браузера.

![Редагування API Token](../../image/Safety/apitoken/编辑api token.png)

## Перед початком

Відкрийте адмін-панель і перейдіть до:

```text
System Settings -> Security Settings -> API Token
```

Під час створення або редагування API Token переконайтеся, що він має дозвіл керування. Дозвіл керування може змінювати конфігурацію сайту, тому надавайте його лише довіреним скриптам або довіреним користувачам.

Усі три скрипти керування типово використовують режим пробного запуску для операцій запису. Після перегляду попереднього результату додайте `--apply`, щоб справді зберегти зміни.

Token також можна помістити в змінну середовища:

```powershell
$env:IMGBED_API_TOKEN="your API Token"
```

## Завантаження скриптів керування

Пакет документації надає три скрипти Node.js:

| Скрипт | Призначення |
| --- | --- |
| <a href="/tools/imgbed-token-upload-settings.mjs" download>Завантажити скрипт керування налаштуваннями завантаження</a> | Керує каналами завантаження, дочірніми каналами та балансуванням навантаження. |
| <a href="/tools/imgbed-token-site-settings.mjs" download>Завантажити скрипт керування налаштуваннями сайту</a> | Керує налаштуваннями безпеки, сторінок та іншими налаштуваннями. |
| <a href="/tools/imgbed-token-federation.mjs" download>Завантажити скрипт керування федеративними зв'язками</a> | Керує легкими діями федеративних зв'язків, запитами та повідомленнями. |

Потрібен Node.js 18 або новіший.

### Загальні параметри

| Параметр | Обов'язково | Опис |
| --- | --- | --- |
| `--base-url <url>` | Так | URL сайту ImgBed, наприклад `https://image.ai6.me`. |
| `--token <token>` | Так | API Token. Також можна використати змінну середовища `IMGBED_API_TOKEN`. |
| `--retries <n>` | Ні | Кількість повторів для тимчасових помилок. Типово `3`. |
| `--timeout-ms <n>` | Ні | Тайм-аут запиту. Типово `180000`. |
| `--output <pretty\|json>` | Ні | Формат виводу. Типово `pretty`; для програм використовуйте `json`. |
| `--save-response <path>` | Ні | Зберегти фінальний JSON-результат у файл. |
| `--apply` | Ні | Справді виконує записи. Без нього операції запису лише показують попередній результат. |
| `-h` / `--help` | Ні | Показати довідку скрипту. |

## Налаштування завантаження

Скрипт налаштувань завантаження показує, читає, створює, редагує та видаляє дочірні канали завантаження. Він також може вмикати або вимикати балансування навантаження для одного каналу завантаження верхнього рівня.

```powershell
node imgbed-token-upload-settings.mjs --base-url "https://your-domain" --token "your API Token" --list
```

### Параметри налаштувань завантаження

| Параметр | Опис |
| --- | --- |
| `--list` | Показує групи налаштувань завантаження. |
| `--get` | Читає канал верхнього рівня або один дочірній канал під ним. |
| `--upsert` | Створює або редагує один дочірній канал. Пробний запуск, якщо не вказано `--apply`. |
| `--delete` | Видаляє один дочірній канал. Пробний запуск, якщо не вказано `--apply`. |
| `--load-balance <true\|false>` | Вмикає або вимикає балансування навантаження для каналу верхнього рівня. |
| `--channel <key>` | Канал завантаження верхнього рівня, наприклад `s3`, `github` або `telegram`. |
| `--channel-name <name>` | Дочірній канал або ім'я акаунта. |
| `--set key=value` | Встановлює одне поле. Можна повторювати. Підтримуються шляхи через крапку. |
| `--patch-json <path>` | Об'єднує поля з JSON-файла. |
| `--apply` | Зберігає результат запису. |

### Key каналів

| Key каналу | Канал |
| --- | --- |
| `telegram` / `tg` | Telegram |
| `discord` / `dc` | Discord |
| `cfr2` / `r2` | Cloudflare R2 |
| `s3` | S3 |
| `webdav` / `wd` | Канал зберігання WebDAV |
| `github` / `gh` | GitHub Releases |
| `gitlab` / `gl` | GitLab Packages |
| `huggingface` / `hf` | Hugging Face |
| `onedrive` / `od` | OneDrive |
| `googledrive` / `google` / `gd` | Google Drive |
| `dropbox` / `db` | Dropbox |
| `yandex` / `yx` | Yandex Disk |
| `pcloud` / `pd` | pCloud |

### Приклади налаштувань завантаження

Показати всі налаштування завантаження:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --list
```

Прочитати конфігурацію каналу S3:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get `
  --channel s3
```

Прочитати один дочірній канал S3:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get `
  --channel s3 `
  --channel-name "backup-s3"
```

Створити або змінити один дочірній канал. Спершу запустіть без `--apply`, щоб побачити попередній результат:

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

Потім збережіть після перевірки:

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

Видалити один дочірній канал:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --delete `
  --channel webdav `
  --channel-name "backup-webdav" `
  --apply
```

Увімкнути балансування навантаження S3:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --load-balance true `
  --channel s3 `
  --apply
```

Для складних полів створіть JSON-файл і передайте його через `--patch-json`:

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

## Налаштування сайту

Скрипт налаштувань сайту керує трьома областями конфігурації:

| Область | Параметр | Опис |
| --- | --- | --- |
| Налаштування безпеки | `security` | Користувацька автентифікація, автентифікація адміністратора, пристрої входу, API Token, модерація зображень, користувацькі обмеження, WebDAV та інше. |
| Налаштування сторінок | `page` | Глобальна сторінка, сторінка користувача, сторінка адміністратора та пов'язані налаштування відображення. |
| Інші налаштування | `others` | API випадкових зображень, публічний перегляд, локальний вузол федерації, автоматичні теги, IP-геолокація, резервний канал, OCR та інше. |

Спершу використайте `--list-sections`, щоб побачити редаговані області, розділи й поля:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --list-sections
```

### Параметри налаштувань сайту

| Параметр | Опис |
| --- | --- |
| `--list-sections` | Показує редаговані області, розділи й поля. |
| `--get` | Читає один розділ налаштувань. |
| `--area <security\|page\|others>` | Вибирає область конфігурації. |
| `--section <name>` | Вибирає розділ. Використовуйте назви, показані `--list-sections`. |
| `--set key=value` | Встановлює одне поле. Можна повторювати. |
| `--apply` | Зберігає результат запису. |

Для області `page` параметр `--set` використовує ID елементів конфігурації сторінки, наприклад `starsEffect=true`. Для `security` і `others` параметр `--set` використовує назву поля в цьому розділі, наприклад `email=admin@example.com`.

### Приклади налаштувань сайту

Прочитати налаштування сповіщень про оновлення системи:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get `
  --area security `
  --section systemUpdate
```

Змінити email сповіщень про оновлення системи. Спершу запустіть без `--apply`, щоб побачити попередній результат:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --area security `
  --section systemUpdate `
  --set email="admin@example.com"
```

Потім збережіть після перевірки:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --area security `
  --section systemUpdate `
  --set email="admin@example.com" `
  --apply
```

Змінити ефект зірок на сторінці адміністратора:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --area page `
  --section adminSettings `
  --set starsEffect=true `
  --apply
```

Змінити мову IP-геолокації:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --area others `
  --section ipGeolocation `
  --set language="en" `
  --apply
```

Налаштування локального вузла федерації можуть читати й оновлювати звичайні поля, як-от стан увімкнення, каталог синхронізації та код запрошення. Підтвердження домену через API Token не виконується. Якщо адмін-панель повідомляє, що домен локального вузла відрізняється від поточного домену доступу, завершіть підтвердження в адмін-панелі браузера.

## Федеративні зв'язки

Скрипт федерації керує станом локального вузла, вихідними вузлами, вхідними вузлами, повідомленнями, запитами на приєднання, повторними заявками без запису, схваленнями, відмовами та легкими діями зв'язків, які не потребують очищення індексу.

Оновлення індексу, видалення індексу федерації та підтвердження зміни домену залежать від повного браузерного процесу. Скрипт не виконує ці важкі операції.

### Легкі та важкі дії федерації

| Дія | Підтримка скриптом | Опис |
| --- | --- | --- |
| Переглянути стан локального вузла та список зв'язків | Підтримується | Лише читає записи зв'язків. |
| Читати й надсилати повідомлення | Підтримується | Читає або записує повідомлення зв'язку. |
| Подати запит на приєднання до іншого вузла | Підтримується | Використовує посилання запрошення для надсилання запиту. |
| Повторна заявка для зв'язку без запису | Підтримується | Лише для вихідних карток із `lastResult=none`; потрібен 6-символьний код запрошення. |
| Скасувати вихідний очікуваний запит | Підтримується | Скасовує лише очікуваний запит. |
| Прийняти або відхилити вхідний запит | Підтримується | Обробляє запити від вузлів, що приєднуються до вашого. |
| Видалити прийнятий вхідний зв'язок | Підтримується | Оновлює запис вхідного зв'язку й повідомляє іншу сторону. |
| Видалити завершений вхідний запис | Підтримується | Видаляє лише завершений запис вхідного зв'язку. |
| Скасувати прийняту вихідну підписку | Лише браузер | Потрібне локальне видалення індексу федерації, яке браузер виконує пакетами. |
| Видалити завершений вихідний запис | Лише браузер | Може спершу потребувати очищення індексу федерації. |
| Підтвердити або скасувати зміну домену | Лише браузер | Потребує підтвердження поточного домену та обробки індексу зміни домену. |
| Опублікувати, отримати або пакетно видалити індекси | Лише браузер | Це пакетні задачі фронтенда. |

### Параметри федерації

| Параметр | Опис |
| --- | --- |
| `--status` | Показує стан локального вузла федерації, вихідні вузли та вхідні вузли. |
| `--list` | Показує федеративні зв'язки. |
| `--chat` | Читає кешовані повідомлення одного зв'язку. |
| `--send-message` | Надсилає повідомлення одному встановленому зв'язку. |
| `--join` | Запитує приєднання до іншого вузла через посилання запрошення. |
| `--reapply` | Повторно подає заявку для зв'язку без запису. Потрібен 6-символьний код запрошення. |
| `--accept` | Приймає вхідний запит. |
| `--deny` | Відхиляє вхідний запит. |
| `--cancel` | Скасовує вихідний очікуваний запит або видаляє прийнятий вхідний зв'язок. |
| `--delete` | Видаляє завершений запис вхідного зв'язку. |
| `--direction <outgoing\|incoming\|all>` | Напрям зв'язку. `outgoing` означає вузли, до яких ви приєдналися; `incoming` означає вузли, що приєднуються до вашого. |
| `--domain <url>` | Домен вузла зв'язку. |
| `--invite-link <url>` | Посилання запрошення від вузла-партнера. |
| `--invite-code <code>` | 6-символьний код запрошення для повторної заявки. |
| `--text <message>` | Текст повідомлення. |
| `--apply` | Зберігає результат запису. |

### Приклади федерації

Переглянути стан локального вузла та обидва списки зв'язків:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --status
```

Показати лише вихідні вузли:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --list `
  --direction outgoing
```

Показати лише вхідні вузли:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --list `
  --direction incoming
```

Подати запит на приєднання до іншого вузла. Спершу запустіть без `--apply`, щоб побачити попередній результат:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --join `
  --invite-link "https://peer-domain/federation/invite/abcdef"
```

Потім збережіть після перевірки:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --join `
  --invite-link "https://peer-domain/federation/invite/abcdef" `
  --apply
```

Повторна заявка для зв'язку без запису:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --reapply `
  --domain "https://peer-domain" `
  --invite-code "abc123" `
  --apply
```

Прийняти вхідний запит:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --accept `
  --domain "https://peer-domain" `
  --apply
```

Відхилити вхідний запит:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --deny `
  --domain "https://peer-domain" `
  --apply
```

Надіслати повідомлення встановленому зв'язку:

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

Скасувати вихідний очікуваний запит:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --cancel `
  --direction outgoing `
  --domain "https://peer-domain" `
  --apply
```

Видалити прийнятий вхідний зв'язок:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --cancel `
  --direction incoming `
  --domain "https://peer-domain" `
  --apply
```

Видалити завершений вхідний запис:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --delete `
  --direction incoming `
  --domain "https://peer-domain" `
  --apply
```

Скасування прийнятої вихідної підписки та видалення вихідного запису мають виконуватися в адмін-панелі браузера, бо ці дії можуть спершу потребувати очищення локального індексу федерації.

### Невідповідність домену

Якщо домен локального вузла та очікуваний домен у зв'язку не збігаються, скрипт повідомляє помилку з `currentDomain` і `pendingDomain`. Обробіть це в адмін-панелі браузера, оскільки зміни домену також включають очищення та підтвердження вихідних індексів.

Якщо запит на приєднання повертає `FEDERATION_NODE_DOMAIN_MISMATCH`, домен із посилання запрошення не збігається зі збереженим локальним доменом вузла-партнера. Відповідь містить `currentOrigin` і `detectedOrigin`. Використайте поточний підтверджений домен партнера або попросіть партнера спершу підтвердити домен у своїй адмін-панелі браузера.

## FAQ

### Чому моя зміна не набула чинності?

Команди запису типово виконуються в режимі попереднього перегляду. Після перевірки попереднього результату додайте `--apply`, щоб справді зберегти зміну.

### Як дізнатися, які поля можна змінювати?

Для налаштувань завантаження використовуйте `--get`, щоб переглянути наявну структуру дочірнього каналу. Для налаштувань безпеки, сторінок та інших налаштувань використовуйте `--list-sections`, щоб побачити області, розділи й поля, які скрипт може редагувати.

### Я хочу використати результат в іншій програмі

Використовуйте `--output json` або додайте `--save-response result.json`. Ваша програма може напряму прочитати збережений JSON-файл.
