# Cloudflare API Token

Cloudflare API credentials به ImgBed اجازه می‌دهد پس از تغییر files، Cloudflare CDN cache را purge کند.

![Cloudflare API Token settings](../../image/Safety/cloudflare%20api%20token截图.png)

## کجا Configure کنیم

admin panel را باز کنید و بروید به:

```text
System Settings -> Security Settings -> Cloudflare API Token
```

باید این موارد را پر کنید:

- Zone ID
- Account email
- API Key

## این Setting چه می‌کند

Cloudflare ممکن است public image URLs را cache کند.

Caching باعث سریع‌تر شدن delivery تصویر می‌شود، اما بعد از delete، block، replace یا move کردن file ممکن است content قدیمی مدتی دیده شود.

بعد از configure شدن Cloudflare API credentials، ImgBed پس از پایان این operations تلاش می‌کند cache مربوط به Cloudflare را purge کند.

این حالت مفید است وقتی:

- image را delete می‌کنید و می‌خواهید public link هرچه زودتر از کار بیفتد.
- image را block می‌کنید و می‌خواهید visitors دیگر original file را نبینند.
- file را با همان نام replace می‌کنید و می‌خواهید visitors نسخه جدید را زودتر ببینند.
- files را move یا rename می‌کنید و می‌خواهید old path cache سریع refresh شود.
- public access rules را تغییر می‌دهید و می‌خواهید public gallery یا random image cache زودتر update شود.

## اگر خالی بماند چه می‌شود

ImgBed بدون این setting هم عادی کار می‌کند.

تنها تفاوت این است که ImgBed به‌صورت فعال Cloudflare CDN cache را purge نمی‌کند. visitors ممکن است تا زمان expire شدن طبیعی Cloudflare cache، content قدیمی را ببینند.

## پیدا کردن Zone ID

Zone ID همان Cloudflare Zone ID مربوط به سایتی است که ImgBed domain شما روی آن قرار دارد.

1. وارد Cloudflare dashboard شوید.
2. سایتی را باز کنید که ImgBed domain داخل آن است.
3. در site overview page، `Zone ID` را پیدا کنید.
4. آن را در field `Zone ID` داخل ImgBed copy کنید.

این site Zone ID است، نه account ID.

## Account Email

email addressی را وارد کنید که با آن وارد Cloudflare می‌شوید.

باید با API Key پایین هماهنگ باشد.

## API Key

Cloudflare Global API Key خود را وارد کنید.

1. وارد Cloudflare dashboard شوید.
2. profile خود را باز کنید.
3. به API Tokens page بروید.
4. `Global API Key` را پیدا کنید.
5. آن را view و copy کنید.
6. داخل field `API Key` در ImgBed paste کنید.

![View global API key](../../image/Safety/查看全局令牌.png)

## چه زمانی اثر می‌کند

پس از پر کردن fields، settings را save کنید.

file changes آینده به‌صورت خودکار تلاش می‌کنند Cloudflare cache را purge کنند. operations قبلی retroactively purge نمی‌شوند. اگر پیش از setup، file را delete یا replace کرده‌اید، باید منتظر expire شدن Cloudflare cache بمانید یا آن را در Cloudflare دستی purge کنید.

## FAQ

### آیا Required است؟

خیر.

اگر domain شما از Cloudflare استفاده نمی‌کند، یا CDN cache delay برایتان مهم نیست، می‌توانید آن را خالی بگذارید.

### credentials اشتباه upload را خراب می‌کند؟

معمولاً خیر.

credentials اشتباه فقط جلوی purge کردن Cloudflare cache توسط ImgBed را می‌گیرد. upload و normal file access باید ادامه پیدا کند.

### چرا deleted image هنوز باز می‌شود؟

رایج‌ترین دلیل این است که Cloudflare هنوز file قدیمی را cache کرده است.

با Cloudflare API credentials درست، ImgBed هنگام delete شدن file cache مربوط به URL را purge می‌کند.

### چرا پس از replace کردن file هنوز تصویر قدیمی را می‌بینم؟

این هم معمولاً به CDN cache مربوط است.

بعد از configure شدن این setting، ImgBed هنگام overwrite شدن file با همان نام تلاش می‌کند old URL cache را purge کند.
