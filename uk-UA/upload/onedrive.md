# Додавання каналу OneDrive

## Що підготувати спочатку

| Потрібно | Навіщо це потрібно |
| --- | --- |
| Обліковий запис Microsoft | Для доступу до сторінок адміністрування Microsoft і авторизації OneDrive |
| Ваш домен ImgBed | Для OAuth callback URL |
| App registration | Для отримання `Client ID` і `Client Secret` |
| Обліковий запис OneDrive | Фактичне місце зберігання файлів |

## Налаштування

### Крок 1. Відкрийте Microsoft Entra ID

1. Відкрийте `portal.azure.com`.
2. Угорі знайдіть `Microsoft Entra ID`.
3. Якщо потрібна сторінка не з'явилася в меню, виберіть:

```text
Continue searching in Microsoft Entra ID
```

4. Відкрийте `Microsoft Entra ID`.
5. Відкрийте `App registrations`.
6. Натисніть `New registration`.

### Крок 2. Зареєструйте застосунок

На сторінці `New registration` заповніть:

| Поле | Що ввести |
| --- | --- |
| Name | Зрозуміла назва, наприклад `imgbed-onedrive` |
| Supported account types | Виберіть за таблицею нижче |
| Redirect URI type | `Web` |
| Redirect URI | `https://your-domain.com/api/oauth/onedrive/callback` |

Підказка щодо типу акаунтів:

| Ваш сценарій | Supported Account Types |
| --- | --- |
| Тільки особистий OneDrive | Виберіть варіант для personal Microsoft account. |
| Особисті та робочі або навчальні акаунти | Виберіть варіант, який підтримує і personal, і organizational accounts. |
| Тільки корпоративний або навчальний OneDrive | Виберіть варіант для organizational account. |

Після заповнення форми натисніть register.

![Створення OneDrive app](../../image/upload/onedrive/添加应用程序注册.png)

### Крок 3. Скопіюйте дані застосунку

Після створення застосунку скопіюйте ці значення зі сторінки overview:

| Поле Microsoft | Поле ImgBed |
| --- | --- |
| `Application (client) ID` | `Client ID` |
| `Directory (tenant) ID` | `Tenant ID` для organizational accounts |

![Application і tenant IDs](../../image/upload/onedrive/应用程序ID和目录租户ID位.png)

### Крок 4. Створіть Client Secret

1. Відкрийте `Certificates & secrets`.
2. Натисніть `New client secret`.
3. Введіть будь-який зручний опис.
4. Виберіть строк дії.
5. Одразу після створення скопіюйте `Value`.

![Збереження значення client secret](../../image/upload/onedrive/保存客户端密码值.png)

### Крок 5. Додайте API permissions

1. Відкрийте `API permissions`.
2. Натисніть `Add a permission`.
3. Виберіть `Microsoft Graph`.
4. Виберіть `Delegated permissions`.
5. Додайте такі permissions:

| Permission | Призначення |
| --- | --- |
| `Files.ReadWrite.All` | Завантаження файлів, створення папок і видалення файлів |
| `offline_access` | Дозволяє ImgBed отримати `Refresh Token` |
| `User.Read` | Читання інформації про акаунт і квоту |

### Крок 6. Заповніть канал OneDrive

У налаштуваннях завантаження виберіть `OneDrive` і заповніть:

| Поле ImgBed | Що ввести |
| --- | --- |
| Channel name | Зрозуміла назва, наприклад `Main OneDrive` |
| Client ID | Microsoft `Application (client) ID` |
| Client Secret | Скопійоване значення `Client Secret Value` |
| Tenant ID | Виберіть за таблицею нижче |
| Refresh Token | Поки залиште порожнім |
| Root directory | Необов'язково. Типово `imgbed`. |
| Note | Необов'язково |

![Заповнення конфігурації OneDrive-каналу](../../image/upload/onedrive/添加新渠道配置.png)

Як заповнити `Tenant ID`:

| Вибраний тип акаунтів | ImgBed `Tenant ID` |
| --- | --- |
| Personal accounts | `consumers` |
| Personal + organizational accounts | `common` |
| Тільки поточна організація | `Directory (tenant) ID` |

### Крок 7. Отримайте Refresh Token

1. В ImgBed натисніть `Get Token`.
2. Увійдіть у Microsoft-акаунт, який хочете підключити.
3. Підтвердьте запит авторизації.
4. На callback-сторінці з'явиться `Refresh Token`.
5. Скопіюйте його.
6. Поверніться до ImgBed і вставте його в поле `Refresh Token`.

![Копіювання refresh token](../../image/upload/onedrive/复制刷新令牌.png)

### Крок 8. Збережіть канал

Коли всі поля заповнені, збережіть канал.

## Короткий сценарій

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

## Посилання

1. Microsoft Entra app registration: https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-register-app
2. Microsoft identity platform authorization code flow: https://learn.microsoft.com/en-us/entra/identity-platform/v2-oauth2-auth-code-flow
3. Microsoft Graph user authentication: https://learn.microsoft.com/en-us/graph/auth-v2-user
