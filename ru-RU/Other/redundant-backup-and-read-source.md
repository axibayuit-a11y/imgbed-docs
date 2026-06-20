# Резервное дублирование и переключение источника чтения

Redundant backup сохраняет дополнительную копию уже загруженного файла.

И основной файл, и backup file могут использоваться как read sources. Для посетителей обычно нет разницы. Отличается только storage channel, из которого отдается файл.

## Что умеет Redundant Backup

| Возможность | Описание |
| --- | --- |
| Хранить дополнительную копию | Резервирует файлы в другой upload channel, чтобы снизить риск отказа одного канала. |
| Переключать read source | После успешного backup переключает чтение файла между primary channel и backup channel. |
| Single-file backup | Резервирует один файл со страницы деталей файла. |
| Batch backup | Выбирает несколько файлов в админ-панели и резервирует их вместе. |
| Global redundant backup | Резервирует файлы по папке из Other Settings. |

## Вход Redundant Backup

Откройте:

```text
System Settings -> Other Settings -> Redundant Backup
```

![Redundant backup](../../image/other/冗余备份截图.png)

Этот вход лучше всего подходит для массового добавления backup к папке или ко всем файлам.

Backup channel можно выбрать вручную, либо включить automatic switching и позволить ImgBed найти подходящий backup channel.

## Backup со страницы деталей файла

Откройте страницу деталей файла в админ-панели и нажмите backup.

![Backup в деталях файла](../../image/other/文件详情里文件备份.png)

Это лучше всего подходит для резервирования одного важного файла по запросу.

После успешного backup страница деталей файла показывает доступные read sources.

## Batch Backup по выбору

В админ-панели выберите несколько файлов и запустите batch backup.

![Batch backup](../../image/other/批量备份截图.png)

Это удобно для обработки группы файлов.

Selection backup, file details backup и redundant backup в Other Settings используют одну и ту же backup system. Это просто разные точки входа.

## Переключение Read Source после backup

После завершения backup страница деталей файла позволяет переключить read source:

| Read Source | Описание |
| --- | --- |
| Primary channel | Чтение из исходного upload channel. |
| Backup channel | Чтение из backup channel. |

![Переключение read source после backup](../../image/other/备份成功切换读取源.png)

Посетителям не нужно знать, отдается ли файл из primary или backup channel.

Выбранный read source становится предпочтительным для дальнейшего доступа к файлу.

## Когда Backup пропускается

При backup такие случаи пропускаются. Это не ошибки.

| Случай | Почему пропускается |
| --- | --- |
| Already backed up | Файл, у которого уже есть backup, не резервируется повторно. |
| Primary and backup channels are the same | Backup должен храниться в другом channel, иначе он не имеет смысла. |
| No usable backup channel | Нет подходящего альтернативного channel. |

Коротко: backups должны идти в другой channel, а уже зарезервированные файлы не тратят место повторно.

## Primary Channel vs Backup Channel

| Название | Значение |
| --- | --- |
| Primary channel | Channel, через который файл был загружен впервые. |
| Backup channel | Channel, где хранится redundant copy. |
| Primary read source | Файл сейчас читается из primary channel. |
| Backup read source | Файл сейчас читается из backup channel. |

Primary и backup read sources ведут себя одинаково для пользователя.

Пока backup file доступен, изображения, видео и download links продолжают работать после переключения на backup read source.

## Что происходит при удалении файла

Когда файл удаляется, ImgBed удаляет и primary file, и backup file.
