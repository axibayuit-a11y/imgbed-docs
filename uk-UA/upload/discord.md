# Додавання каналу Discord

## Що підготувати заздалегідь

| Потрібно | Навіщо це потрібно |
| --- | --- |
| Обліковий запис Discord | Для створення сервера, каналу та developer application. |
| Сервер Discord | Бот має приєднатися до сервера, перш ніж зможе працювати з каналом. |
| Текстовий канал | Зображення й файли надсилатимуться саме в цей канал. |
| Discord Developer Portal | Для створення application, бота та отримання `Bot Token`. |

## Де додати канал

1. Відкрийте системні налаштування.
2. Перейдіть до налаштувань завантаження.
3. Натисніть Add Channel у правому верхньому куті.
4. Виберіть `Discord`.

## Поля налаштування

| Поле | Що означає | Обов'язково |
| --- | --- | --- |
| Назва каналу | Зручна назва, наприклад "Discord Primary". | Так |
| Bot Token | Токен Discord-бота. | Так |
| Channel ID | ID цільового текстового каналу. | Так |
| Proxy URL (необов'язково) | Використовуйте лише тоді, коли доступ до Discord CDN нестабільний. Вкажіть повну адресу з `https://`. | Ні |

## Налаштування

### 1. Створіть сервер Discord і текстовий канал

1. Відкрийте Discord.
2. Створіть новий сервер або використайте наявний сервер, власником якого ви є.
3. Створіть на цьому сервері текстовий канал.

![Створення сервера](../../image/upload/discord/创建服务器.png)

### 2. Створіть бота в Discord Developer Portal

1. Відкрийте Discord Developer Portal: `https://discord.com/developers/applications`
2. Натисніть `New Application`.
3. Введіть назву application і створіть її.
4. У лівій бічній панелі відкрийте сторінку `Bot`.
5. На сторінці `Bot` згенеруйте або скиньте token.
6. Збережіть token.

Цей token потрібно ввести в ImgBed у полі `Bot Token`.

![Перегляд токена бота](../../image/upload/discord/查看机器人令牌.png)

### 3. Згенеруйте OAuth2 invite link і встановіть бота

1. У лівій бічній панелі відкрийте сторінку `OAuth2`.
2. У scopes виберіть `bot`.
3. У блоці permissions увімкніть такі дозволи:

| Дозвіл | Потрібен |
| --- | --- |
| View Channels | Так |
| Send Messages | Так |
| Attach Files | Так |
| Read Message History | Так |

4. Унизу сторінки переконайтеся, що integration type встановлено як `Guild Install`.
5. Скопіюйте згенерований URL.
6. Відкрийте цей URL у браузері.
7. Виберіть цільовий сервер.
8. Завершіть авторизацію.

![Вибір прав бота в OAuth2](../../image/upload/discord/在oa2勾选机器人权限.png)

![Запрошення бота до каналу](../../image/upload/discord/邀请机器人到频道.png)

### 4. Увімкніть Developer Mode і скопіюйте Channel ID

1. Натисніть іконку шестерні біля вашого аватара в нижньому лівому куті Discord.
2. У лівій бічній панелі відкрийте Advanced.
3. Увімкніть Developer Mode.
4. Поверніться до потрібного текстового каналу.
5. Натисніть правою кнопкою на назві каналу.
6. Натисніть Copy Channel ID.

Скопійоване число і є `Channel ID`, потрібний ImgBed.

![Увімкнення developer mode](../../image/upload/discord/开启开发者权限.png)

![Копіювання Channel ID](../../image/upload/discord/复制群频道id.png)

### 5. Заповніть канал Discord в ImgBed

Поверніться до діалогу налаштування каналу й заповніть поля так:

| Поле в інтерфейсі | Значення |
| --- | --- |
| Channel name | Власна назва каналу, наприклад `DiscordPrimary`. |
| Bot Token | Token, збережений зі сторінки `Bot` у Discord Developer Portal. |
| Channel ID | Channel ID, який ви скопіювали в Discord. |
| Proxy URL (необов'язково) | Лише за потреби, наприклад `https://your-proxy.example.com`. |

Коли все заповнено, натисніть Save.

![Додавання конфігурації Discord-каналу](../../image/upload/discord/添加dc新渠道配置.png)

## Як перевірити

| Перевірка | Як перевірити |
| --- | --- |
| Картка каналу з'явилася | Після збереження на сторінці налаштувань завантаження має бути картка Discord-каналу. |
| Канал можна ввімкнути | Перемикач Active має залишатися ввімкненим. |
| Конфігурацію збережено | У деталях має бути видно, що Bot Token і Channel ID збережені. |
| Завантаження працює | Завантажте тестове зображення й переконайтеся, що воно з'явилося в цільовому текстовому каналі Discord. |

## Короткий чекліст

```text
Створити сервер Discord
-> Створити текстовий канал
-> Створити бота в Discord Developer Portal
-> Зберегти Bot Token зі сторінки Bot
-> В OAuth2 вибрати bot, View Channels, Send Messages, Attach Files і Read Message History
-> Скопіювати згенерований URL і авторизувати бота для цільового сервера
-> Переконатися, що цільовий текстовий канал має ті самі дозволи
-> Увімкнути Developer Mode
-> Натиснути правою кнопкою на цільовому каналі й скопіювати Channel ID
-> Ввести Bot Token і Channel ID в ImgBed
-> Зберегти та завантажити тестове зображення
```

## Посилання

1. Discord Developers Getting Started: https://docs.discord.com/developers/quick-start/getting-started
2. Discord Help - Where can I find my User/Server/Message ID: https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID
