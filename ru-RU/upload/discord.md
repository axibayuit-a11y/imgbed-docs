# Добавление канала Discord

## Что подготовить заранее

| Что нужно | Зачем это нужно |
| --- | --- |
| Аккаунт Discord | Для создания сервера, канала и developer application. |
| Сервер Discord | Бот должен присоединиться к серверу, прежде чем сможет работать с каналом. |
| Текстовый канал | Изображения и файлы будут отправляться в этот канал. |
| Discord Developer Portal | Для создания application, бота и получения `Bot Token`. |

## Где добавить канал

1. Откройте системные настройки.
2. Перейдите в настройки загрузки.
3. Нажмите Add Channel в правом верхнем углу.
4. Выберите `Discord`.

## Поля настройки

| Поле | Что означает | Обязательно |
| --- | --- | --- |
| Название канала | Понятное имя, например "Discord Primary". | Да |
| Bot Token | Токен Discord-бота. | Да |
| Channel ID | ID целевого текстового канала. | Да |
| Proxy URL (необязательно) | Используйте только при нестабильном доступе к Discord CDN. Укажите полный URL, включая `https://`. | Нет |

## Настройка

### 1. Создайте сервер Discord и текстовый канал

1. Откройте Discord.
2. Создайте новый сервер или используйте существующий сервер, владельцем которого вы являетесь.
3. Создайте на этом сервере текстовый канал.

![Создание сервера](../../image/upload/discord/创建服务器.png)

### 2. Создайте бота в Discord Developer Portal

1. Откройте Discord Developer Portal: `https://discord.com/developers/applications`
2. Нажмите `New Application`.
3. Введите имя application и создайте его.
4. В левой боковой панели откройте страницу `Bot`.
5. На странице `Bot` сгенерируйте или сбросьте token.
6. Сохраните token.

Этот token нужно ввести в ImgBed в поле `Bot Token`.

![Просмотр токена бота](../../image/upload/discord/查看机器人令牌.png)

### 3. Создайте OAuth2 invite link и установите бота

1. В левой боковой панели откройте страницу `OAuth2`.
2. В scopes выберите `bot`.
3. В блоке permissions включите:

| Разрешение | Нужно |
| --- | --- |
| View Channels | Да |
| Send Messages | Да |
| Attach Files | Да |
| Read Message History | Да |

4. Внизу страницы убедитесь, что integration type установлен как `Guild Install`.
5. Скопируйте сгенерированный URL.
6. Откройте этот URL в браузере.
7. Выберите целевой сервер.
8. Завершите авторизацию.

![Выбор прав бота в OAuth2](../../image/upload/discord/在oa2勾选机器人权限.png)

![Приглашение бота в канал](../../image/upload/discord/邀请机器人到频道.png)

### 4. Включите Developer Mode и скопируйте Channel ID

1. Нажмите значок шестеренки рядом с аватаром в нижнем левом углу Discord.
2. В левой боковой панели откройте Advanced.
3. Включите Developer Mode.
4. Вернитесь к нужному текстовому каналу.
5. Щелкните правой кнопкой по названию канала.
6. Нажмите Copy Channel ID.

Скопированное число и есть `Channel ID`, нужный ImgBed.

![Включение developer mode](../../image/upload/discord/开启开发者权限.png)

![Копирование Channel ID](../../image/upload/discord/复制群频道id.png)

### 5. Заполните канал Discord в ImgBed

Вернитесь в диалог настройки канала и заполните поля:

| Поле в интерфейсе | Значение |
| --- | --- |
| Channel name | Собственное имя канала, например `DiscordPrimary`. |
| Bot Token | Token, сохраненный со страницы `Bot` в Discord Developer Portal. |
| Channel ID | Channel ID, который вы скопировали в Discord. |
| Proxy URL (необязательно) | Только при необходимости, например `https://your-proxy.example.com`. |

Когда все заполнено, нажмите Save.

![Добавление конфигурации Discord-канала](../../image/upload/discord/添加dc新渠道配置.png)

## Как проверить

| Проверка | Как проверить |
| --- | --- |
| Карточка канала появилась | После сохранения на странице настроек загрузки должна появиться карточка Discord-канала. |
| Канал можно включить | Переключатель Active должен оставаться включенным. |
| Конфигурация сохранена | В деталях должно быть видно, что Bot Token и Channel ID сохранены. |
| Загрузка работает | Загрузите тестовое изображение и убедитесь, что оно появилось в целевом текстовом канале Discord. |

## Короткий чек-лист

```text
Create a Discord server
-> Create a text channel
-> Create a bot in the Discord Developer Portal
-> Save the Bot Token from the Bot page
-> In OAuth2, select bot, View Channels, Send Messages, Attach Files, and Read Message History
-> Copy the generated URL and authorize the bot for the target server
-> Make sure the target text channel grants the same permissions
-> Enable Developer Mode
-> Right-click the target text channel and copy the Channel ID
-> Enter the Bot Token and Channel ID in ImgBed
-> Save and upload a test image
```

## Ссылки

1. Discord Developers Getting Started: https://docs.discord.com/developers/quick-start/getting-started
2. Discord Help - Where can I find my User/Server/Message ID: https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID
