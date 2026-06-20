# Random Image API та публічна галерея

Обидві функції налаштовуються тут:

```text
System Settings -> Other Settings
```

## Random Image API

Random Image API повертає один випадковий файл із вибраних директорій. Це корисно для фонів сайту, ротації аватарів або випадкових зображень на зовнішніх сторінках.

Після ввімкнення використовуйте:

```text
https://your-domain.com/random
```

## Налаштування Random Image API

| Опція | Призначення |
| --- | --- |
| Enable | Вмикає або вимикає endpoint `/random`. Коли вимкнено, доступ заборонено. |
| Directories | Обмежує директорії, які може використовувати random API. Директорії поза цим списком API використовувати не може. |
| Call demo | Генерує random API links, які можна одразу скопіювати. |

Можна вибрати кілька директорій. Наприклад, якщо дозволені тільки `/landscape/` і `/portrait/`, random API може вибирати файли лише з цих директорій та їхніх піддиректорій.

## Параметри Random Image API

| Параметр | Приклад | Призначення |
| --- | --- | --- |
| `dir` | `/landscape/` | Вказує random directory. |
| `content` | `image` | Вказує media type. Використовуйте `image`, `video`, `audio` або комбінації через кому. |
| `orientation` | `auto` | Фільтрує орієнтацію зображення. Використовуйте `portrait`, `landscape` або `auto`. |
| `type` | `url` | Формат відповіді. Порожньо — redirect, `url` повертає plain text URL, `json` повертає JSON. |
| `origin` | `1` | Разом із `type=url` повертає повний URL. |
| `age` | `all-ages,r12` | Фільтрує за age rating. |
| `tag` | `wallpaper,sky` | Повертає тільки файли з цими tags. |
| `ex` | `private` | Виключає файли з цими tags. |

## Формати відповіді

Без `type` API напряму redirect-ить на URL випадкового файлу.

З `type=url` він повертає текстовий URL.

З `type=json` повертає інформацію про файл, зокрема file URL, file ID, file name, file type, tags, rating і пов'язані metadata.

## Правила доступу

Random Image API дотримується public access rules:

| Правило | Ефект |
| --- | --- |
| Directory restriction | Вибиратися можуть лише файли в дозволених директоріях. |
| Blocklist | Blocklisted files виключаються з random pool. |
| Allowlist mode | Коли ввімкнено, повертаються тільки файли, дозволені для public access. |
| Age rating | R12, R16, R18 і схожий контент фільтрується поточним access mode. |

Якщо після фільтрації немає відповідного файлу, API повертає, що збігів немає.

## Cache

Random Image API кешує candidate pools директорій для швидшої роботи.

Після зміни файлів ImgBed оновлює cache version директорії, і наступні запити перебудовують candidate pool. Порожні директорії кешуються ненадовго, щоб уникнути повторних запитів.

## Публічна галерея

Публічна галерея дає read-only сторінку перегляду для директорій, які ви дозволите бачити відвідувачам.

Після ввімкнення відвідувачі можуть відкрити:

```text
https://your-domain.com/browse/directory-name
```

## Налаштування публічної галереї

| Опція | Призначення |
| --- | --- |
| Enable | Вмикає або вимикає публічну галерею. Коли вимкнено, відвідувачі не можуть її переглядати. |
| Image loading mode | Визначає, чи preview використовують оригінали, чи thumbnails. |
| Open directories | Визначає, які директорії доступні відвідувачам. |

## Image Loading Mode

| Mode | Призначення |
| --- | --- |
| Original | Сторінка відвідувача завантажує оригінальні файли напряму. |
| Thumbnail | Сторінка відвідувача надає перевагу thumbnails для швидшого завантаження. |

## Open Directories

Open directories визначають, що бачать відвідувачі.

Наприклад:

```text
/1/,/2/,/landscape/,/portrait/
```

Тоді відвідувачі можуть відкрити:

```text
https://your-domain.com/browse/1
https://your-domain.com/browse/2
https://your-domain.com/browse/landscape
https://your-domain.com/browse/portrait
```

Піддиректорії також можна відкривати, наприклад `/2026/lucky/`. Відвідувачі блокуються в директоріях, які не відкриті.

## Можливості публічної галереї

| Можливість | Опис |
| --- | --- |
| Browse directories | Перегляд файлів і піддиректорій у відкритих директоріях. |
| Search | Пошук за file name, file ID або tags. |
| Type filter | Фільтр images, videos, audio або інших файлів. |
| Tag filter | Включення або виключення вибраних tags. |
| Orientation filter | Фільтр landscape або portrait images. |
| Time filter | Фільтр за діапазоном часу завантаження. |
| Extension filter | Фільтр за file extension. |
| Copy link | Копіювання file access links. |
| Media preview | Перегляд або відтворення images, videos і audio на сторінці відвідувача. |

## Правила доступу публічної галереї

Публічна галерея також дотримується public access rules:

| Правило | Ефект |
| --- | --- |
| Open directories | Показуються лише дозволені директорії. |
| Access mode | Контент фільтрується поточним age-rating access mode. |
| Allowlist mode | Коли ввімкнено, показуються тільки файли, дозволені для public access. |
| Blocklist | Blocklisted files приховані. |
