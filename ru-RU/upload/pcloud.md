# Добавление канала pCloud

## Лучше всего подходит, если

- У вас есть аккаунт pCloud, и вы хотите, чтобы ImgBed хранил изображения в pCloud.
- Вам подходит использование email и пароля pCloud как учетных данных канала.

## Что подготовить сначала

| Что нужно | Зачем это нужно |
| --- | --- |
| Email аккаунта pCloud | Для входа в pCloud API |
| Пароль pCloud | Для входа в pCloud API |
| API host | По умолчанию `api.pcloud.com`. Для аккаунтов в ЕС можно использовать `eapi.pcloud.com`. |
| Storage directory | Место хранения файлов. По умолчанию `imgbed`. |

## Где добавить канал

1. Откройте системные настройки.
2. Откройте настройки загрузки.
3. Нажмите `Add Channel` в правом верхнем углу.
4. Выберите `pCloud`.

## Поля настройки

| Поле | Назначение | Обязательно |
| --- | --- | --- |
| Channel name | Идентифицирует этот pCloud-канал, например `Personal pCloud` | Да |
| Account email | Email для входа в pCloud | Да |
| Password | Ваш пароль pCloud | Да |
| API host | pCloud API host. По умолчанию `api.pcloud.com`. | Нет |
| Storage directory | Директория для хранения файлов. По умолчанию `imgbed`. | Нет |

Выберите API host по региону аккаунта:

| Регион аккаунта | API Host |
| --- | --- |
| По умолчанию / США | `api.pcloud.com` |
| Europe | `eapi.pcloud.com` |

## Настройка

1. Откройте настройки загрузки.
2. Нажмите `Add Channel`.
3. Выберите `pCloud`.
4. Введите понятное имя канала.
5. Введите email аккаунта pCloud.
6. Введите пароль pCloud.
7. Оставьте API host как `api.pcloud.com` или используйте `eapi.pcloud.com` для аккаунтов в ЕС.
8. Оставьте storage directory как `imgbed` или измените на нужную папку.
9. Сохраните канал.

![Настройка канала](../../image/upload/pcloud/配置渠道.png)

## Как проверить

| Проверка | Ожидаемый результат |
| --- | --- |
| Карточка канала | Карточка pCloud-канала появляется после сохранения. |
| Переключатель канала | Переключатель на карточке остается включенным. |
| Отображение email | На карточке показан подключенный email pCloud. |
| Запрос квоты | После успешного запроса показываются использованная и общая емкость. |
| Тестовая загрузка | Тестовое изображение появляется в настроенной директории pCloud. |

![Успешный запрос квоты](../../image/upload/pcloud/查询额度成功.png)

## Устранение неполадок

### Почему не OAuth2?

pCloud OAuth2 по умолчанию не является self-service. Нужно написать в pCloud и попросить включить его.

Текущий OAuth2 flow pCloud также не поддерживает workflow краткоживущих upload links, который нужен ImgBed, поэтому этот канал использует вход через email и пароль аккаунта.

### Какой API Host использовать?

По умолчанию:

```text
api.pcloud.com
```

Для аккаунтов в ЕС:

```text
eapi.pcloud.com
```

## Короткий сценарий

```text
Prepare your pCloud email and password
-> Open Upload Settings
-> Add Channel
-> Choose pCloud
-> Fill channel name / email / password
-> Keep API host as api.pcloud.com unless your account is in Europe
-> Keep storage directory as imgbed unless you need another folder
-> Save
-> Query quota
-> Upload a test image
```
