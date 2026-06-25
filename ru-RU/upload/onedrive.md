# Добавление канала OneDrive

## Что подготовить сначала

| Что нужно | Зачем это нужно |
| --- | --- |
| Аккаунт Microsoft | Для доступа к страницам администрирования Microsoft и авторизации OneDrive |
| Ваш домен ImgBed | Для OAuth callback URL |
| App registration | Для получения `Client ID` и `Client Secret` |
| Аккаунт OneDrive | Фактическое место хранения файлов |

## Настройка

### Шаг 1. Откройте Microsoft Entra ID

1. Откройте `portal.azure.com`.
2. Вверху найдите `Microsoft Entra ID`.
3. Если нужная страница не появилась в выпадающем списке, выберите:

```text
Continue searching in Microsoft Entra ID
```

4. Откройте `Microsoft Entra ID`.
5. Откройте `App registrations`.
6. Нажмите `New registration`.

### Шаг 2. Зарегистрируйте приложение

На странице `New registration` заполните:

| Поле | Что ввести |
| --- | --- |
| Name | Понятное имя, например `imgbed-onedrive` |
| Supported account types | Выберите по таблице ниже |
| Redirect URI type | `Web` |
| Redirect URI | `https://your-domain.com/api/oauth/onedrive/callback` |

Подсказка по типу аккаунтов:

| Ваш сценарий | Supported Account Types |
| --- | --- |
| Только личный OneDrive | Выберите вариант для personal Microsoft account. |
| Личные и рабочие или учебные аккаунты | Выберите вариант, поддерживающий personal и organizational accounts. |
| Только корпоративный или учебный OneDrive | Выберите вариант для organizational account. |

После заполнения формы нажмите register.

![Создание OneDrive app](../../image/upload/onedrive/添加应用程序注册.png)

### Шаг 3. Скопируйте данные приложения

После создания приложения скопируйте значения со страницы overview:

| Поле Microsoft | Поле ImgBed |
| --- | --- |
| `Application (client) ID` | `Client ID` |
| `Directory (tenant) ID` | `Tenant ID` для organizational accounts |

![Application и tenant IDs](../../image/upload/onedrive/应用程序ID和目录租户ID位.png)

### Шаг 4. Создайте Client Secret

1. Откройте `Certificates & secrets`.
2. Нажмите `New client secret`.
3. Введите удобное описание.
4. Выберите срок действия.
5. Сразу после создания скопируйте `Value`.

![Сохранение значения client secret](../../image/upload/onedrive/保存客户端密码值.png)

### Шаг 5. Добавьте API permissions

1. Откройте `API permissions`.
2. Нажмите `Add a permission`.
3. Выберите `Microsoft Graph`.
4. Выберите `Delegated permissions`.
5. Добавьте:

| Permission | Назначение |
| --- | --- |
| `Files.ReadWrite.All` | Загрузка файлов, создание папок и удаление файлов |
| `offline_access` | Позволяет ImgBed получить `Refresh Token` |
| `User.Read` | Читает информацию об аккаунте и квоте |

### Шаг 6. Заполните канал OneDrive

В настройках загрузки выберите `OneDrive` и заполните:

| Поле ImgBed | Что ввести |
| --- | --- |
| Channel name | Понятное имя, например `Main OneDrive` |
| Client ID | Microsoft `Application (client) ID` |
| Client Secret | Скопированное значение `Client Secret Value` |
| Tenant ID | Выберите по таблице ниже |
| Refresh Token | Пока оставьте пустым |
| Root directory | Необязательно. По умолчанию `imgbed`. |
| Note | Необязательно |

![Заполнение конфигурации OneDrive-канала](../../image/upload/onedrive/添加新渠道配置.png)

Как заполнить `Tenant ID`:

| Выбранный тип аккаунтов | ImgBed `Tenant ID` |
| --- | --- |
| Personal accounts | `consumers` |
| Personal + organizational accounts | `common` |
| Только текущая организация | `Directory (tenant) ID` |

### Шаг 7. Получите Refresh Token

1. В ImgBed нажмите `Get Token`.
2. Войдите в Microsoft-аккаунт, который хотите подключить.
3. Подтвердите запрос авторизации.
4. На callback-странице появится `Refresh Token`.
5. Скопируйте его.
6. Вернитесь в ImgBed и вставьте его в поле `Refresh Token`.

![Копирование refresh token](../../image/upload/onedrive/复制刷新令牌.png)

### Шаг 8. Сохраните канал

Когда все поля заполнены, сохраните канал.

## Короткий сценарий

```text
Open portal.azure.com
-> Search for Microsoft Entra ID
-> Open App registrations
-> Register a new app
-> Fill Name / Supported account types / Web redirect URI
-> Register
-> Copy Application (client) ID
-> Check the callback URL in Authentication
-> Create a Client Secret in Certificates & secrets
-> Add permissions in API permissions
-> Fill Client ID / Client Secret / Tenant ID into ImgBed
-> Click Get Token
-> Copy the Refresh Token from the callback page
-> Paste it back into ImgBed and save
```

## Ссылки

1. Microsoft Entra app registration: https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-register-app
2. Microsoft identity platform authorization code flow: https://learn.microsoft.com/en-us/entra/identity-platform/v2-oauth2-auth-code-flow
3. Microsoft Graph user authentication: https://learn.microsoft.com/en-us/graph/auth-v2-user
