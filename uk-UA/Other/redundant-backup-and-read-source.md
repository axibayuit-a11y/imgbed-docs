# Резервне дублювання та перемикання джерела читання

Redundant backup зберігає додаткову копію вже завантаженого файлу.

І основний файл, і backup file можуть використовуватися як read sources. Для відвідувачів зазвичай немає різниці. Відрізняється лише storage channel, з якого віддається файл.

## Що може Redundant Backup

| Можливість | Опис |
| --- | --- |
| Зберігати додаткову копію | Резервує файли в інший upload channel, щоб зменшити ризик відмови одного каналу. |
| Перемикати read source | Після успішного backup перемикає читання файлу між primary channel і backup channel. |
| Single-file backup | Резервує один файл зі сторінки деталей файлу. |
| Batch backup | Вибирає кілька файлів в адмін-панелі й резервує їх разом. |
| Global redundant backup | Резервує файли за папкою з Other Settings. |

## Вхід Redundant Backup

Відкрийте:

```text
System Settings -> Other Settings -> Redundant Backup
```

![Redundant backup](../../image/other/冗余备份截图.png)

Цей вхід найкраще підходить для масового додавання backup до папки або до всіх файлів.

Backup channel можна вибрати вручну, або можна ввімкнути automatic switching і дозволити ImgBed знайти придатний backup channel.

## Backup зі сторінки деталей файлу

Відкрийте сторінку деталей файлу в адмін-панелі й натисніть backup.

![Backup у деталях файлу](../../image/other/文件详情里文件备份.png)

Це найкраще для резервування одного важливого файлу на вимогу.

Після успішного backup сторінка деталей файлу показує доступні read sources.

## Batch Backup за вибором

В адмін-панелі виберіть кілька файлів і запустіть batch backup.

![Batch backup](../../image/other/批量备份截图.png)

Це зручно для обробки групи файлів.

Selection backup, file details backup і redundant backup в Other Settings використовують одну й ту саму backup system. Це просто різні точки входу.

## Перемикання Read Source після backup

Після завершення backup сторінка деталей файлу дозволяє перемкнути read source:

| Read Source | Опис |
| --- | --- |
| Primary channel | Читання з початкового upload channel. |
| Backup channel | Читання з backup channel. |

![Перемикання read source після backup](../../image/other/备份成功切换读取源.png)

Відвідувачам не потрібно знати, чи файл віддається з primary, чи з backup channel.

Вибране read source стає пріоритетним для подальшого доступу до файлу.

## Коли Backup пропускається

Під час backup такі випадки пропускаються. Це не помилки.

| Випадок | Чому пропускається |
| --- | --- |
| Already backed up | Файл, який уже має backup, не резервується повторно. |
| Primary and backup channels are the same | Backup має зберігатися в іншому channel, інакше він не має сенсу. |
| No usable backup channel | Немає придатного альтернативного channel. |

Коротко: backups мають іти в інший channel, а вже зарезервовані файли не витрачають місце повторно.

## Primary Channel vs Backup Channel

| Назва | Значення |
| --- | --- |
| Primary channel | Channel, через який файл було завантажено вперше. |
| Backup channel | Channel, у якому зберігається redundant copy. |
| Primary read source | Файл зараз читається з primary channel. |
| Backup read source | Файл зараз читається з backup channel. |

Primary і backup read sources мають однакову поведінку для користувача.

Поки backup file доступний, зображення, відео й download links продовжують працювати після перемикання на backup read source.

## Що відбувається під час видалення файлу

Коли файл видаляється, ImgBed видаляє і primary file, і backup file.
