# Настройки страниц

Page settings управляют отображением сайта, настройками страницы загрузки по умолчанию, фоновыми изображениями и видом админ-панели.

## Global Settings

| Опция | Назначение |
| --- | --- |
| Site title | Заголовок, который показывается во вкладке браузера. |
| Site icon | Маленькая иконка во вкладке браузера. |
| ImgBed name | Название, которое показывается на frontend pages. |
| ImgBed logo | Изображение логотипа на frontend pages. |
| Logo link | URL, который открывается при нажатии на логотип или avatar. |
| Background switch interval | Интервал ротации нескольких фонов в миллисекундах. `60000` означает 60 секунд. |
| Background opacity | Прозрачность фонового изображения от `0` до `1`. Меньшие значения делают фон светлее. |
| Default URL prefix | Prefix для генерации ссылок на изображения. Пустое поле означает, что используется текущий домен сайта. |

## Client Settings

| Опция | Назначение |
| --- | --- |
| Announcement | Объявление вверху страницы загрузки. Поддерживается HTML. |
| Default upload channel | Upload channel, выбранный на странице загрузки по умолчанию. Также можно выбрать Smart Dispatch. |
| Default upload directory | Директория загрузки по умолчанию, например `/user/`. Пусто или `/` означает root. |
| Default naming method | Стратегия генерации filename после upload по умолчанию. См. ниже. |
| Convert to WebP by default | Преобразует изображения в WebP перед upload. |
| Enable compression by default | Сжимает изображения локально в браузере перед upload. |
| Default compression threshold | Автоматически сжимает, когда изображение превышает этот размер в MB. |
| Default target size | Целевой размер файла после сжатия, в MB. |
| Login page background | Фоновое изображение страницы входа пользователя. |
| Upload page background | Фоновое изображение страницы загрузки. |
| Footer portal link | URL, который открывает footer portal button. |
| Hide footer | Скрывает frontend footer, когда включено. |

## Admin Settings

| Опция | Назначение |
| --- | --- |
| Admin login background | Фоновое изображение страницы входа администратора. |
| Admin background | Фоновое изображение admin pages. Можно указать один image URL или несколько URL. |
| Image loading mode | Режим загрузки preview для admin file list. Original загружает оригинальные изображения. Smart loading предпочитает thumbnails для публичных изображений и originals для restricted images. |
| Thumbnail source | Сервис генерации thumbnails: wsrv.nl, Cloudflare Image Resizing или WordPress Photon. Cloudflare Image Resizing нужно включить в Cloudflare перед выбором. |
| Live2D widget | Показывает Live2D-персонажа в админ-панели. |
| Firework click effect | Показывает эффект фейерверка при нажатии на страницу. |
| Star cursor trail | Показывает звездный след при движении мыши. |

## Форматы фоновых изображений

Login page background, upload page background и admin login background поддерживают:

| Значение | Эффект |
| --- | --- |
| `bing` | Использует ротацию обоев Bing. |
| `["https://example.com/1.jpg","https://example.com/2.jpg"]` | Ротирует несколько изображений. |
| `["https://example.com/1.jpg"]` | Использует одно фоновое изображение. |
| `["https://your-domain.com/random?..."]` | Использует random image API link. Можно настроить свой Random Image API в Other Settings, затем вставить сгенерированную random image link как single-background entry. |

Admin background поддерживает image URLs. Несколько URL можно разделять английскими запятыми, как подсказано на странице. Пустое поле означает default background.

## Default Naming Method

| Method | Result |
| --- | --- |
| Default | Time-random prefix + original filename, например `1760000000000_cat.png`. |
| Prefix only | Только time-random prefix и extension, например `1760000000000.png`. |
| Original name only | Сохраняет original filename, например `cat.png`. Если есть дубль, ImgBed добавляет `(1)`, `(2)` и так далее. |
| Short link | Использует 8-символьный short ID и extension, например `a1b2c3d4.png`. |
