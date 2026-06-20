# Налаштування сторінок

Page settings керують відображенням сайту, типовими параметрами сторінки завантаження, фоновими зображеннями та виглядом адмін-панелі.

## Global Settings

| Опція | Призначення |
| --- | --- |
| Site title | Заголовок, який показується у вкладці браузера. |
| Site icon | Маленька іконка у вкладці браузера. |
| ImgBed name | Назва, що показується на frontend pages. |
| ImgBed logo | Зображення логотипа на frontend pages. |
| Logo link | URL, який відкривається після натискання на логотип або avatar. |
| Background switch interval | Інтервал ротації кількох фонів у мілісекундах. `60000` означає 60 секунд. |
| Background opacity | Прозорість фонового зображення від `0` до `1`. Менші значення роблять фон світлішим. |
| Default URL prefix | Prefix для генерації посилань на зображення. Порожнє поле означає, що використовується поточний домен сайту. |

## Client Settings

| Опція | Призначення |
| --- | --- |
| Announcement | Оголошення вгорі сторінки завантаження. Підтримується HTML. |
| Default upload channel | Upload channel, вибраний на сторінці завантаження типово. Також можна вибрати Smart Dispatch. |
| Default upload directory | Типова директорія завантаження, наприклад `/user/`. Порожньо або `/` означає root. |
| Default naming method | Типова стратегія генерації filename після upload. Дивіться нижче. |
| Convert to WebP by default | Перетворює зображення на WebP перед upload. |
| Enable compression by default | Стискає зображення локально в браузері перед upload. |
| Default compression threshold | Автоматично стискає, коли зображення перевищує цей розмір у MB. |
| Default target size | Цільовий розмір файлу після стискання, у MB. |
| Login page background | Фонове зображення сторінки входу користувача. |
| Upload page background | Фонове зображення сторінки завантаження. |
| Footer portal link | URL, який відкриває footer portal button. |
| Hide footer | Приховує frontend footer, коли ввімкнено. |

## Admin Settings

| Опція | Призначення |
| --- | --- |
| Admin login background | Фонове зображення сторінки входу адміністратора. |
| Admin background | Фонове зображення admin pages. Можна вказати один image URL або кілька URL. |
| Image loading mode | Режим завантаження preview для admin file list. Original завантажує оригінальні зображення. Smart loading надає перевагу thumbnails для публічних зображень і originals для restricted images. |
| Thumbnail source | Сервіс для генерації thumbnails: wsrv.nl, Cloudflare Image Resizing або WordPress Photon. Cloudflare Image Resizing потрібно ввімкнути в Cloudflare перед вибором. |
| Live2D widget | Показує Live2D-персонажа в адмін-панелі. |
| Firework click effect | Показує ефект феєрверка під час натискання на сторінку. |
| Star cursor trail | Показує зоряний слід під час руху миші. |

## Формати фонових зображень

Login page background, upload page background і admin login background підтримують такі формати:

| Значення | Ефект |
| --- | --- |
| `bing` | Використовує ротацію шпалер Bing. |
| `["https://example.com/1.jpg","https://example.com/2.jpg"]` | Ротує кілька зображень. |
| `["https://example.com/1.jpg"]` | Використовує одне фонове зображення. |
| `["https://your-domain.com/random?..."]` | Використовує random image API link. Можна налаштувати власний Random Image API в Other Settings, а потім вставити згенероване random image link як single-background entry. |

Admin background підтримує image URLs. Кілька URL можна розділяти англійськими комами, як підказано на сторінці. Порожнє поле означає default background.

## Default Naming Method

| Method | Result |
| --- | --- |
| Default | Time-random prefix + original filename, наприклад `1760000000000_cat.png`. |
| Prefix only | Тільки time-random prefix і extension, наприклад `1760000000000.png`. |
| Original name only | Зберігає original filename, наприклад `cat.png`. Якщо є дубль, ImgBed додає `(1)`, `(2)` і так далі. |
| Short link | Використовує 8-символьний short ID і extension, наприклад `a1b2c3d4.png`. |
