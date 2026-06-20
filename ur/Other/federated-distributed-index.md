# Federated Distributed Index

Federated distributed index کئی ImgBed sites کو ایک دوسرے کے ساتھ file lists share کرنے دیتا ہے۔

سادہ الفاظ میں:

- آپ اپنی site کے selected folders دوسروں کے ساتھ share کر سکتے ہیں۔
- آپ کسی دوسرے node میں join کر کے اس node کی shared file list اپنے admin panel میں sync کر سکتے ہیں۔
- federated files بنیادی طور پر browsing، searching، اور links کھولنے کے لیے ہیں۔ یہ آپ کے اپنے storage میں دوبارہ upload نہیں ہوتیں۔

## کہاں Configure کریں

کھولیں:

```text
System Settings -> Other Settings -> Federated Distributed Index
```

![Local federation node](../../image/other/联盟图/联盟分布式索引本地节点.png)

page میں تین tabs ہیں:

| Tab | Purpose |
| --- | --- |
| Local Node | اپنا node enable کرنا، public domain confirm کرنا، shared folders منتخب کرنا، اور outbound index update کرنا |
| Nodes I Joined | دوسرے ImgBed nodes manage کرنا جن میں آپ joined ہیں |
| Nodes Joining Me | ان requests کو manage کرنا جو دوسرے owners آپ کے node میں join کرنے کے لیے بھیجتے ہیں |

## First-Time Setup

1. `Local Node` کھولیں۔
2. `Enable` on کریں۔
3. `Sync folders` کے تحت share کرنے والے folders منتخب کریں۔
4. `Update Outbound Index` پر کلک کریں۔
5. اگر ImgBed domain change detect کرے، تو continue کرنے سے پہلے confirm کریں کہ current domain درست ہے۔

آپ multiple sync folders منتخب کر سکتے ہیں۔

sync folder list empty ہو تو تمام folders share ہوتے ہیں۔

## Local Node

### Public Domain

public domain وہ site URL ہے جو دوسرے nodes آپ کے node تک access کے لیے استعمال کرتے ہیں۔

ImgBed اسے automatically detect کرتا ہے۔ manually type کرنے کی ضرورت نہیں۔ پہلی بار index update کرتے وقت ImgBed پوچھتا ہے کہ current access URL production domain ہے یا نہیں۔

اگر بعد میں domains بدلیں، index update دوبارہ confirmation مانگے گا۔

### Sync Folders

Sync folders طے کرتے ہیں کہ federation nodes کے ساتھ کون سی files share ہوں گی۔

مثلاً اگر آپ صرف یہ منتخب کریں:

```text
/1/
/2/
```

تو دوسرے nodes صرف ان دو directories کی files دیکھ سکیں گے۔

### Update Outbound Index

یہ اس file list کو update کرتا ہے جسے دوسرے nodes آپ سے sync کر سکتے ہیں۔

اسے استعمال کریں جب:

- آپ پہلی بار federation enable کریں۔
- آپ ایسی files upload کریں جو share کرنا چاہتے ہیں۔
- آپ sync folders بدلیں۔
- public domain بدل جائے اور اسے confirm کرنا ہو۔

## Nodes I Joined

`Nodes I Joined` وہ جگہ ہے جہاں آپ دوسرے nodes subscribe کرتے ہیں۔

![Nodes I joined](../../image/other/联盟图/我加入的节点.png)

### کسی دوسرے Node میں Join Request بھیجنا

1. دوسرے owner سے invitation link مانگیں۔
2. اسے input box میں paste کریں۔
3. `Request to Join` پر کلک کریں۔
4. دوسرے owner کے admin panel میں approval کا انتظار کریں۔

approval کے بعد node status approved ہو جائے گا۔

### Update Inbound Index

`Update Inbound Index` joined nodes سے file lists sync کرتا ہے۔

اسے استعمال کریں جب:

- دوسرے owner نے ابھی آپ کی request approve کی ہو۔
- دوسرے owner بتائے کہ shared content update ہو گیا ہے۔
- آپ تمام joined federation file lists refresh کرنا چاہتے ہوں۔

صرف ایک node update کرنے کے لیے اس node card پر `Update Index` پر کلک کریں۔

![Update index](../../image/other/联盟图/更新索引.png)

### Unsubscribe

اگر آپ کوئی node sync نہیں کرنا چاہتے تو `Unsubscribe` پر کلک کریں۔

unsubscribe کے بعد اس node کا federated index آپ کی local site سے remove ہو جاتا ہے۔

## Nodes Joining Me

`Nodes Joining Me` وہ جگہ ہے جہاں آپ دوسروں کی requests handle کرتے ہیں۔

![Nodes joining me](../../image/other/联盟图/加入我的节点.png)

### Invitation Link بنانا

1. یقینی بنائیں کہ local node enabled ہے۔
2. کم از کم ایک بار `Update Outbound Index` پر کلک کریں تاکہ ImgBed public domain confirm کرے۔
3. `Nodes Joining Me` کھولیں۔
4. `Reset Invitation Link` پر کلک کریں۔
5. invitation link copy کریں اور دوسرے owner کو بھیجیں۔

اگر invitation link empty ہو تو عموماً public domain ابھی confirm نہیں ہوا۔ `Local Node` پر واپس جائیں اور `Update Outbound Index` پر کلک کریں۔

### Join Requests Handle کرنا

جب کوئی request submit کرتا ہے، وہ `Nodes Joining Me` list میں ظاہر ہوتی ہے۔

| Action | Meaning |
| --- | --- |
| Approve | دوسرے node کو آپ کی shared file list sync کرنے دیتا ہے |
| Reject | join request refuse کرتا ہے |
| Delete | finished record remove کرتا ہے |
| Check Status | چیک کرتا ہے کہ دوسری side یہ relationship ابھی رکھتی ہے یا نہیں |

approval کے بعد بھی دوسری side کو `Update Inbound Index` پر کلک کرنا ہوگا، تب آپ کی shared files وہاں appear ہوں گی۔

![Approve invited node](../../image/other/联盟图/邀请节点同意.png)

## Messages

relationship approve ہونے کے بعد node card پر `Message` پر کلک کریں۔

Messages صرف federation relationship کے بارے میں communication کے لیے ہیں۔ یہ files، tags، directories، یا permissions نہیں بدلتے۔

![Messages](../../image/other/联盟图/留言功能.png)

## Federated Files دیکھنا

sync مکمل ہونے کے بعد admin file list پر واپس جائیں۔

page کے اوپر local files اور federated files کے درمیان switch کریں۔ federated files میں synced content browse کیا جا سکتا ہے۔

Federated files بنیادی طور پر viewing، searching، preview، اور links copy کرنے کے لیے ہیں۔ یہ local files نہیں، اس لیے آپ انہیں اپنی site سے move، delete، retag، یا backup نہیں کر سکتے۔

![Federated files in admin](../../image/other/联盟图/联盟管理显示效果图.png)

## FAQ

### Relationship Record نہ ہونے کی وجہ سے Reapply کیوں کہتا ہے؟

عام طور پر اس کا مطلب ہے کہ دوسری side نے آپ کو delete کر کے record remove کر دیا ہے، اس لیے relationship نہیں مل رہی۔ نئی join request submit کریں۔

![Reapply when no relationship record exists](../../image/other/联盟图/无关系记录重新申请.png)

### Join کرنے کے بعد Files کیوں نہیں دکھ رہیں؟

چیک کریں:

1. دوسرے owner نے آپ کی request approve کی ہے۔
2. دوسرے owner نے `Update Outbound Index` پر کلک کیا ہے۔
3. آپ نے `Update Inbound Index` پر کلک کیا ہے۔
4. دوسرے owner کے sync folders میں وہ directories شامل ہیں جو وہ share کرنا چاہتے ہیں۔

### Domain Change Detect ہو تو کیا کریں؟

اگر آپ admin panel production domain سے کھول رہے ہیں تو confirm کریں اور continue کریں۔

اگر temporary address استعمال کر رہے ہیں تو cancel کریں، admin panel production domain سے دوبارہ کھولیں، پھر دوبارہ کوشش کریں۔

### Empty Sync Folder List کا کیا مطلب ہے؟

empty sync folder list کا مطلب ہے تمام folders share ہیں۔

صرف کچھ directories share کرنی ہوں تو وہ folders manually select کریں۔

### Outbound اور Inbound Index Updates کا فرق

| Button | Simple Meaning |
| --- | --- |
| Update Outbound Index | وہ data update کرتا ہے جو دوسرے مجھ سے sync کر سکتے ہیں |
| Update Inbound Index | وہ data update کرتا ہے جو میں دوسروں سے sync کر چکا ہوں |
