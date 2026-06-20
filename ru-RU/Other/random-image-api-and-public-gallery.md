# Random Image API и публичная галерея

Обе функции настраиваются здесь:

```text
System Settings -> Other Settings
```

## Random Image API

Random Image API возвращает один случайный файл из выбранных директорий. Это полезно для фонов сайта, ротации аватаров или случайных изображений на внешних страницах.

После включения используйте:

```text
https://your-domain.com/random
```

## Настройки Random Image API

| Опция | Назначение |
| --- | --- |
| Enable | Включает или выключает endpoint `/random`. Когда выключено, доступ запрещен. |
| Directories | Ограничивает директории, которые может использовать random API. Директории вне этого списка API использовать не может. |
| Call demo | Генерирует random API links, которые можно сразу скопировать. |

Можно выбрать несколько директорий. Например, если разрешены только `/landscape/` и `/portrait/`, random API может выбирать файлы только из этих директорий и их поддиректорий.

## Параметры Random Image API

| Параметр | Пример | Назначение |
| --- | --- | --- |
| `dir` | `/landscape/` | Указывает random directory. |
| `content` | `image` | Указывает media type. Используйте `image`, `video`, `audio` или комбинации через запятую. |
| `orientation` | `auto` | Фильтрует ориентацию изображения. Используйте `portrait`, `landscape` или `auto`. |
| `type` | `url` | Формат ответа. Пусто — redirect, `url` возвращает plain text URL, `json` возвращает JSON. |
| `origin` | `1` | Вместе с `type=url` возвращает полный URL. |
| `age` | `all-ages,r12` | Фильтрует по age rating. |
| `tag` | `wallpaper,sky` | Возвращает только файлы с этими tags. |
| `ex` | `private` | Исключает файлы с этими tags. |

## Форматы ответа

Без `type` API напрямую redirect-ит на URL случайного файла.

С `type=url` он возвращает текстовый URL.

С `type=json` возвращает информацию о файле, включая file URL, file ID, file name, file type, tags, rating и связанные metadata.

## Правила доступа

Random Image API соблюдает public access rules:

| Правило | Эффект |
| --- | --- |
| Directory restriction | Выбираться могут только файлы в разрешенных директориях. |
| Blocklist | Blocklisted files исключаются из random pool. |
| Allowlist mode | Когда включено, возвращаются только файлы, разрешенные для public access. |
| Age rating | R12, R16, R18 и похожий контент фильтруется текущим access mode. |

Если после фильтрации нет подходящего файла, API возвращает отсутствие совпадений.

## Cache

Random Image API кеширует candidate pools директорий для более быстрой работы.

После изменения файлов ImgBed обновляет cache version директории, и следующие запросы перестраивают candidate pool. Пустые директории кешируются ненадолго, чтобы избежать повторных запросов.

## Публичная галерея

Публичная галерея дает read-only страницу просмотра для директорий, которые вы разрешите видеть посетителям.

После включения посетители могут открыть:

```text
https://your-domain.com/browse/directory-name
```

## Настройки публичной галереи

| Опция | Назначение |
| --- | --- |
| Enable | Включает или выключает публичную галерею. Когда выключено, посетители не могут ее просматривать. |
| Image loading mode | Определяет, используют ли preview оригиналы или thumbnails. |
| Open directories | Определяет, какие директории доступны посетителям. |

## Image Loading Mode

| Mode | Назначение |
| --- | --- |
| Original | Страница посетителя загружает оригинальные файлы напрямую. |
| Thumbnail | Страница посетителя предпочитает thumbnails для более быстрой загрузки. |

## Open Directories

Open directories определяют, что видят посетители.

Например:

```text
/1/,/2/,/landscape/,/portrait/
```

Тогда посетители могут открыть:

```text
https://your-domain.com/browse/1
https://your-domain.com/browse/2
https://your-domain.com/browse/landscape
https://your-domain.com/browse/portrait
```

Поддиректории тоже можно открывать, например `/2026/lucky/`. Посетители блокируются в директориях, которые не открыты.

## Возможности публичной галереи

| Возможность | Описание |
| --- | --- |
| Browse directories | Просмотр файлов и поддиректорий в открытых директориях. |
| Search | Поиск по file name, file ID или tags. |
| Type filter | Фильтр images, videos, audio или других файлов. |
| Tag filter | Включение или исключение выбранных tags. |
| Orientation filter | Фильтр landscape или portrait images. |
| Time filter | Фильтр по диапазону времени загрузки. |
| Extension filter | Фильтр по file extension. |
| Copy link | Копирование file access links. |
| Media preview | Просмотр или воспроизведение images, videos и audio на странице посетителя. |

## Правила доступа публичной галереи

Публичная галерея также соблюдает public access rules:

| Правило | Эффект |
| --- | --- |
| Open directories | Показываются только разрешенные директории. |
| Access mode | Контент фильтруется текущим age-rating access mode. |
| Allowlist mode | Когда включено, показываются только файлы, разрешенные для public access. |
| Blocklist | Blocklisted files скрыты. |
