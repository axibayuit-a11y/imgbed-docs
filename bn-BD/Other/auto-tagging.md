# Auto Tagging

Auto tagging এখানে configure করা হয়:

```text
System Settings -> Other Settings -> Auto Tagging
```

এটি automatically image tags generate করে। Search, random image filtering, public gallery filtering এবং age-rating access control-এ এই tags কাজে লাগে।

## Auto Tagging কী করতে পারে

| Feature | Description |
| --- | --- |
| Content tags generate | People, scenes, objects, art style এবং similar visual content-এর tags যোগ করে। |
| Character tags generate | Anime images এবং illustrations-এর জন্য useful। |
| Orientation tags যোগ | `landscape`, `portrait` বা `square` যোগ করে। |
| Image rating যোগ | General, sensitive, questionable বা explicit content-এর জন্য `G/S/Q/E` rating results save করে। |
| Auto-tag on upload | Newly uploaded images automatically tagging flow-তে যায়। |
| Batch tagging | সব folders বা selected folders-এর পুরোনো images-এ tags যোগ করে। |

## আগে যা লাগবে

কমপক্ষে একটি accessible Hugging Face Space URL প্রস্তুত রাখুন।

Recommended পদ্ধতি হলো SmilingWolf-এর `wd-tagger` Space নিজের Hugging Face account-এ duplicate করা:

```text
https://huggingface.co/spaces/SmilingWolf/wd-tagger
```

Temporary testing-এর জন্য public Space ব্যবহার করা যায়, কিন্তু public Spaces অনেক users share করে। Queue হতে পারে, slow হতে পারে বা unavailable হতে পারে। নিজের account-এর duplicated Space long-term auto tagging-এর জন্য বেশি stable।

## SmilingWolf-এর Space Duplicate করা

1. Hugging Face-এ sign in করুন।
2. `https://huggingface.co/spaces/SmilingWolf/wd-tagger` খুলুন।

![SmilingWolf public Space](../../image/other/微笑狼的公开仓库.png)

3. Upper-right corner-এর three-dot menu ক্লিক করুন।
4. `Duplicate this Space` নির্বাচন করুন।
5. Default Space name রাখুন বা নিজের নাম দিন, যেমন `wd-tagger`।
6. Visibility `Public` রাখুন। Public Spaces ImgBed থেকে call করা সহজ।
7. শুরুতে default free hardware রাখুন। Queueing স্পষ্ট হলে পরে upgrade করুন।
8. Space create করে build শেষ হওয়া পর্যন্ত অপেক্ষা করুন।

Build শেষ হলে আপনার Space page খুলুন। URL সাধারণত এমন হয়:

```text
https://huggingface.co/spaces/your-name/wd-tagger
```

Browser URL copy করে ImgBed-এর `Space URLs`-এ paste করুন।

## Multiple Space URLs দেওয়া

প্রতি line-এ একটি Space URL দিন।

Examples:

| Value | Description |
| --- | --- |
| `https://huggingface.co/spaces/SmilingWolf/wd-tagger` | SmilingWolf public Space। Temporary testing-এর জন্য ভালো। |
| `https://huggingface.co/spaces/lintonxue00/wd-tagger` | Copied Space page URL। |
| `https://huggingface.co/spaces/your-name/wd-tagger` | আপনার duplicated Space page URL। |

Multiple URLs দেওয়া যায়। ImgBed একসঙ্গে multiple Spaces ব্যবহার করে, ফলে speed ভালো হতে পারে।

একটি Space temporarily unavailable থাকলেও অন্যগুলো processing চালিয়ে যেতে পারে।

## Settings

| Option | Recommendation |
| --- | --- |
| `Space URLs` | প্রস্তুত করা Space URLs দিন। অন্তত একটি দরকার। |
| Target folder | সব folders-এর জন্য empty রাখুন। Specific directory process করতে চাইলে folder select করুন। |
| Recognition model | Default হিসেবে `wd-swinv2-tagger-v3` রাখুন। |
| General tag threshold | Default বেশিরভাগ images-এর জন্য ঠিক। Lower values বেশি tags দেয়; higher values কম tags দেয়। |
| Character tag threshold | Default conservative, ভুল character tags এড়াতে সাহায্য করে। |
| `MCut` automatic threshold | শুরুতে off রাখুন। Model দিয়ে tag count automatically ঠিক করাতে চাইলে on করুন। |
| Auto-tag on upload | Newly uploaded images automatically tags পাক চাইলে on করুন। |
| Start tagging | পুরোনো images manually batch-tag করে। |

## Recommended Starting Values

| Option | Recommended Value |
| --- | --- |
| Recognition model | `wd-swinv2-tagger-v3` |
| General tag threshold | `0.35` |
| Character tag threshold | `0.85` |
| `MCut` | শুরুতে Off |
| Auto-tag on upload | দরকার হলে Enable |

Tags বেশি হলে general threshold একটু বাড়ান।

Tags কম হলে general threshold একটু কমান।

## Batch Tagging

1. `Space URLs` পূরণ করুন।
2. Target folder নির্বাচন করুন।
3. Start tagging ক্লিক করুন।
4. Progress শেষ হওয়া পর্যন্ত অপেক্ষা করুন।

Target folder empty থাকলে ImgBed সব folders process করে।

Batch tagging পুরোনো images-এর জন্য ভালো। New images-এর জন্য auto-tag on upload enable করুন, তাহলে বারবার manually run করতে হবে না।

## Auto-Tag on Upload

Auto-tag on upload enabled হলে newly uploaded images automatically configured `Space URLs` call করে।

Long-term use-এর জন্য এটি suitable।

আপনার Space queueing করলেও upload আগে finish হতে পারে, tagging পরে continue করবে।

## কোন Images Process হয়

Auto tagging মূলত image files process করে।

যে images-এ complete tags, orientation, rating, width এবং height আগে থেকেই আছে, unnecessary Space calls এড়াতে সেগুলো skip করা হয়।

যেখানে সম্ভব ImgBed শুধু missing information পূরণ করে। যেমন, শুধু orientation missing হলে full content tag flow না চালিয়ে orientation যোগ করার চেষ্টা করে।

## FAQ

### নিজের Space Duplicate করব কেন?

Public Spaces অনেক users share করে। আপনার duplicated Space মূলত আপনার ImgBed site ব্যবহার করে, তাই সাধারণত faster এবং reliable।

### Space বারবার Starting Up দেখাচ্ছে

প্রথম creation-এর পর, বা দীর্ঘ idle period-এর পর, Space start হতে সময় নিতে পারে।

আগে আপনার Space page খুলুন। যখন normal image recognize করতে পারে, তখন ImgBed-এ ফিরে tagging start করুন।

### Space URL কীভাবে Copy করব?

আপনার Hugging Face Space page খুলে browser address copy করুন।

Examples:

```text
https://huggingface.co/spaces/lintonxue00/wd-tagger
https://huggingface.co/spaces/SmilingWolf/wd-tagger
```

### Multiple Spaces যোগ করা যায়?

হ্যাঁ। প্রতি line-এ একটি Space URL দিন।

Multiple Spaces একসঙ্গে images process করে এবং অনেক images থাকলে useful।

### Tags English-এ কেন?

SmilingWolf models English tags output করে। এটি expected।

Tags মূলত search, filtering, random image API এবং public gallery filters-এর জন্য ব্যবহৃত হয়।

### Rating Tags কী কাজে লাগে?

Rating results Security Settings-এর access mode-এর সঙ্গে কাজ করে।

যেমন, visitor access age rating দিয়ে limited হলে public browsing এবং random image features সেই rules অনুযায়ী images filter করে।

## Quick Flow

```text
Hugging Face-এ sign in করুন
-> SmilingWolf/wd-tagger খুলুন
-> Duplicate this Space
-> Space build শেষ হওয়া পর্যন্ত অপেক্ষা করুন
-> আপনার Space URL copy করুন
-> ImgBed-এ Space URLs পূরণ করুন
-> Model এবং thresholds নির্বাচন করুন
-> Start tagging করুন বা auto-tag on upload enable করুন
```
