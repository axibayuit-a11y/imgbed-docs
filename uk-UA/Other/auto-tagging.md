# Автоматичне додавання тегів

Auto tagging налаштовується тут:

```text
System Settings -> Other Settings -> Auto Tagging
```

Функція автоматично генерує теги для зображень. Вони корисні для пошуку, фільтрації random image, публічної галереї та контролю доступу за віковим рейтингом.

## Що може Auto Tagging

| Можливість | Опис |
| --- | --- |
| Генерація content tags | Додає теги для людей, сцен, об'єктів, стилю ілюстрації та схожого візуального змісту. |
| Генерація character tags | Корисно для anime-зображень та ілюстрацій. |
| Додавання orientation tags | Додає `landscape`, `portrait` або `square`. |
| Додавання rating | Зберігає результати `G/S/Q/E` для general, sensitive, questionable або explicit content. |
| Auto-tag on upload | Нові зображення автоматично потрапляють у процес тегування. |
| Batch tagging | Додає теги до старих зображень у всіх папках або в обраних папках. |

## Що підготувати спочатку

Потрібен принаймні один доступний URL Hugging Face Space.

Рекомендований варіант — зробити копію Space SmilingWolf `wd-tagger` у власний акаунт Hugging Face:

```text
https://huggingface.co/spaces/SmilingWolf/wd-tagger
```

Публічний Space можна використати для тимчасового тестування, але ним користується багато людей, тому можливі черги, повільна робота або недоступність. Копія у власному акаунті зазвичай стабільніша для постійного auto tagging.

## Дублювання Space SmilingWolf

1. Увійдіть у Hugging Face.
2. Відкрийте `https://huggingface.co/spaces/SmilingWolf/wd-tagger`.

![Публічний Space SmilingWolf](../../image/other/微笑狼的公开仓库.png)

3. Натисніть меню з трьома крапками у правому верхньому куті.
4. Виберіть `Duplicate this Space`.
5. Залиште стандартну назву Space або задайте власну, наприклад `wd-tagger`.
6. Встановіть visibility як `Public`. Public Spaces простіше викликати з ImgBed.
7. Спочатку залиште безплатне hardware. Переходьте на сильніше тільки тоді, коли черги стають помітними.
8. Створіть Space і дочекайтеся завершення build.

Після завершення build відкрийте сторінку свого Space. URL зазвичай має такий вигляд:

```text
https://huggingface.co/spaces/your-name/wd-tagger
```

Скопіюйте адресу з браузера й вставте її в ImgBed у `Space URLs`.

## Додавання кількох Space URLs

Вводьте по одному Space URL на рядок.

| Значення | Опис |
| --- | --- |
| `https://huggingface.co/spaces/SmilingWolf/wd-tagger` | Публічний Space SmilingWolf. Добре для тимчасового тесту. |
| `https://huggingface.co/spaces/lintonxue00/wd-tagger` | URL сторінки скопійованого Space. |
| `https://huggingface.co/spaces/your-name/wd-tagger` | Ваш власний дубльований Space. |

Можна вказати кілька URL. ImgBed використовує кілька Spaces разом, що може підвищити швидкість.

Якщо один Space тимчасово недоступний, інші можуть продовжити обробку.

## Налаштування

| Опція | Рекомендація |
| --- | --- |
| `Space URLs` | Введіть підготовлені Space URLs. Потрібен щонайменше один. |
| Target folder | Залиште порожнім для всіх папок. Вибирайте папку лише тоді, коли треба обробити конкретну директорію. |
| Recognition model | Типово залиште `wd-swinv2-tagger-v3`. |
| General tag threshold | Типове значення підходить для більшості зображень. Нижче значення дає більше тегів, вище — менше. |
| Character tag threshold | Типове значення доволі обережне й допомагає уникати неправильних character tags. |
| `MCut` automatic threshold | Спочатку залиште вимкненим. Увімкніть, коли хочете, щоб модель сама визначала кількість тегів. |
| Auto-tag on upload | Увімкніть, якщо нові зображення мають отримувати теги автоматично. |
| Start tagging | Запускає ручне batch tagging для старих зображень. |

## Рекомендовані стартові значення

| Опція | Рекомендоване значення |
| --- | --- |
| Recognition model | `wd-swinv2-tagger-v3` |
| General tag threshold | `0.35` |
| Character tag threshold | `0.85` |
| `MCut` | Спочатку Off |
| Auto-tag on upload | Увімкнути за потреби |

Якщо тегів забагато, трохи підніміть general threshold.

Якщо тегів замало, трохи знизьте general threshold.

## Batch Tagging

1. Заповніть `Space URLs`.
2. Виберіть target folder.
3. Натисніть start tagging.
4. Дочекайтеся завершення прогресу.

Якщо target folder порожній, ImgBed обробляє всі папки.

Batch tagging найкраще підходить для старих зображень. Для нових увімкніть auto-tag on upload, щоб не запускати процес вручну щоразу.

## Auto-Tag on Upload

Після ввімкнення auto-tag on upload нові зображення автоматично викликають налаштовані `Space URLs`.

Це зручно для постійного використання.

Якщо ваш Space стоїть у черзі, саме завантаження все одно може завершитися першим, а тегування продовжиться після нього.

## Які зображення обробляються

Auto tagging переважно обробляє файли зображень.

Зображення, які вже мають повні tags, orientation, rating, width і height, пропускаються, щоб не викликати Space зайвий раз.

ImgBed за можливості доповнює тільки відсутню інформацію. Наприклад, якщо бракує лише orientation, він спробує додати orientation без повного content tag flow.

## FAQ

### Навіщо дублювати власний Space?

Публічні Spaces спільні для багатьох користувачів. Власний дубльований Space переважно використовує тільки ваш ImgBed, тому він зазвичай швидший і надійніший.

### Space постійно запускається

Після першого створення або довгого простою Space може потребувати часу на старт.

Спершу відкрийте сторінку свого Space. Коли він нормально розпізнає зображення, поверніться до ImgBed і запускайте тегування.

### Як скопіювати Space URL?

Відкрийте сторінку Hugging Face Space і скопіюйте адресу з браузера.

```text
https://huggingface.co/spaces/lintonxue00/wd-tagger
https://huggingface.co/spaces/SmilingWolf/wd-tagger
```

### Чи можна додати кілька Spaces?

Так. Вводьте по одному Space URL на рядок.

Кілька Spaces обробляють зображення разом і корисні, коли файлів багато.

### Чому теги англійською?

Моделі SmilingWolf повертають англомовні теги. Це очікувана поведінка.

Ці теги використовуються переважно для пошуку, фільтрів, random image API та публічної галереї.

### Для чого потрібні rating tags?

Результати rating працюють разом з access mode у Security Settings.

Наприклад, коли доступ відвідувачів обмежений віковим рейтингом, публічний перегляд і random image фільтрують зображення за цими правилами.

## Короткий сценарій

```text
Увійти в Hugging Face
-> Відкрити SmilingWolf/wd-tagger
-> Duplicate this Space
-> Дочекатися build Space
-> Скопіювати Space URL
-> Заповнити Space URLs в ImgBed
-> Вибрати модель і thresholds
-> Запустити tagging або ввімкнути auto-tag on upload
```
