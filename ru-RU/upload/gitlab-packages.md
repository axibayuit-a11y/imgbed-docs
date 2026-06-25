# Добавление канала GitLab Packages

## Что подготовить заранее

Нужны всего три вещи:

| Что нужно | Зачем это нужно |
| --- | --- |
| Аккаунт GitLab | Для создания access token и владения проектом. |
| GitLab Personal Access Token | ImgBed использует его для доступа к GitLab API, создания проектов и загрузки файлов в Generic Packages. |
| Имя проекта | Можно ввести только имя проекта, например `imgbed`. |

## Настройка

### Шаг 1. Войдите в GitLab и создайте Access Token

1. Войдите в GitLab.
2. Нажмите аватар в правом верхнем углу и откройте `Preferences`.
3. В левой боковой панели откройте `Access Tokens`.
4. Дайте token понятное имя.
5. Выберите срок действия по своему подходу к обслуживанию.
6. Выберите scope `api`.
7. Сразу после создания скопируйте и сохраните token.

![Создание legacy token](../../image/upload/gitlab-packages/点击生成旧版令牌.png)

![Выбор прав token](../../image/upload/gitlab-packages/勾选令牌权限.png)

## Шаг 2. Заполните канал GitLab Packages в ImgBed

После выбора `GitLab Packages` в настройках загрузки заполните поля:

| Поле в интерфейсе | Что ввести |
| --- | --- |
| Channel name | Имя на ваш выбор, например `GitLabPrimary`. |
| Access Token | GitLab Personal Access Token, который вы только что создали. |
| Project name | Короткое имя проекта, например `imgbed`, или полный путь вроде `username/imgbed`. |
| Private repository | Включите или выключите по своим потребностям. |
| Remark | Необязательно, например `Primary upload channel`. |

![Настройка канала](../../image/upload/gitlab-packages/配置渠道内容.png)

## Шаг 3. Сохраните канал

После заполнения полей нажмите Save.

Система сама обработает:

| Поведение системы | Описание |
| --- | --- |
| Короткое имя проекта | ImgBed определяет текущий аккаунт GitLab и разворачивает значение в полный путь проекта. |
| Полный путь проекта | ImgBed использует путь `username/project` ровно в том виде, как он введен. |
| Проверка проекта | Если используется путь текущего личного аккаунта, ImgBed автоматически создает проект, если его еще нет. Если полный путь введен вручную, ImgBed использует его напрямую. |
| Публичный или приватный статус | Видимость проекта синхронизируется с текущим переключателем. |

## Короткий чек-лист

```text
Sign in to GitLab
-> Create an Access Token
-> Select only the api scope
-> Return to ImgBed and enter the token and project name
-> Save
-> If only a project name is entered, ImgBed adds the current username automatically
-> If username/project is entered, ImgBed uses it as-is
-> Upload a test image
```
