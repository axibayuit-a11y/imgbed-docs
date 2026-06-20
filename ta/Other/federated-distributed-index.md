# Federated Distributed Index

Federated distributed index பல ImgBed sites ஒன்றுடன் ஒன்று file lists share செய்ய உதவும்.

எளிமையாக:

- உங்கள் site-இல் selected folders பிறருடன் share செய்யலாம்.
- மற்றொரு node-ல் join செய்து அந்த node-ன் shared file list-ஐ உங்கள் admin panel-க்கு sync செய்யலாம்.
- Federated files browsing, searching, links திறப்பதற்காக. அவை உங்கள் storage-க்கு மீண்டும் upload செய்யப்படாது.

## எங்கு Configure செய்வது

திறக்கவும்:

```text
System Settings -> Other Settings -> Federated Distributed Index
```

![Local federation node](../../image/other/联盟图/联盟分布式索引本地节点.png)

page-ல் மூன்று tabs:

| Tab | Purpose |
| --- | --- |
| Local Node | உங்கள் node enable, public domain confirm, shared folders select, outbound index update |
| Nodes I Joined | நீங்கள் joined ஆன மற்ற ImgBed nodes manage செய்ய |
| Nodes Joining Me | உங்கள் node-ல் join செய்ய விரும்பும் requests manage செய்ய |

## First-Time Setup

1. `Local Node` திறக்கவும்.
2. `Enable` on செய்யவும்.
3. `Sync folders` கீழ் share செய்யும் folders தேர்வு செய்யவும்.
4. `Update Outbound Index` கிளிக் செய்யவும்.
5. domain change detect செய்தால் current domain சரியானதா confirm செய்து தொடரவும்.

multiple sync folders தேர்வு செய்யலாம்.

sync folder list empty என்றால் எல்லா folders share ஆகும்.

## Local Node

### Public Domain

public domain என்பது மற்ற nodes உங்கள் node அணுக பயன்படுத்தும் site URL.

ImgBed இதை automatically detect செய்கிறது. manual ஆக type செய்ய தேவையில்லை. முதலில் index update செய்யும்போது current access URL production domain தானா என ImgBed கேட்கும்.

பின்னர் domain மாற்றினால் index update மீண்டும் confirmation கேட்கும்.

### Sync Folders

Sync folders federation nodes-க்கு எந்த files share ஆகும் என்பதை தீர்மானிக்கும்.

உதாரணமாக நீங்கள் மட்டும் தேர்வு செய்தால்:

```text
/1/
/2/
```

மற்ற nodes அந்த இரண்டு directories உள்ள files மட்டும் பார்க்க முடியும்.

### Update Outbound Index

மற்ற nodes உங்களிடமிருந்து sync செய்யும் file list-ஐ இது update செய்கிறது.

பயன்படுத்த வேண்டிய நேரம்:

- federation முதல் முறையாக enable செய்யும்போது.
- share செய்ய வேண்டிய files upload செய்தபோது.
- sync folders மாற்றும்போது.
- public domain மாற்றி confirm செய்யும்போது.

## Nodes I Joined

`Nodes I Joined` என்பது மற்ற nodes-ஐ subscribe செய்யும் இடம்.

![Nodes I joined](../../image/other/联盟图/我加入的节点.png)

### மற்றொரு Node-க்கு Join Request அனுப்புதல்

1. மற்ற owner-இடம் invitation link கேட்கவும்.
2. input box-ல் paste செய்யவும்.
3. `Request to Join` கிளிக் செய்யவும்.
4. மற்ற owner admin panel-ல் approve செய்வதற்காக காத்திருக்கவும்.

approval பிறகு node status approved ஆகும்.

### Update Inbound Index

`Update Inbound Index` joined nodes-இல் இருந்து file lists sync செய்கிறது.

பயன்படுத்தவும்:

- மற்ற owner உங்கள் request approve செய்த பிறகு.
- shared content update ஆனது என்று மற்ற owner சொன்னால்.
- joined federation file lists அனைத்தையும் refresh செய்ய.

ஒரு node மட்டும் update செய்ய அந்த node card-ல் `Update Index` கிளிக் செய்யவும்.

![Update index](../../image/other/联盟图/更新索引.png)

### Unsubscribe

ஒரு node sync செய்ய வேண்டாம் என்றால் `Unsubscribe` கிளிக் செய்யவும்.

unsubscribe செய்த பிறகு அந்த node-ன் federated index local site-இல் இருந்து remove ஆகும்.

## Nodes Joining Me

`Nodes Joining Me` பிறரிடமிருந்து வரும் requests handle செய்யும் இடம்.

![Nodes joining me](../../image/other/联盟图/加入我的节点.png)

### Invitation Link உருவாக்குதல்

1. local node enabled என்பதை உறுதிசெய்யவும்.
2. ImgBed public domain confirm செய்ய குறைந்தது ஒருமுறை `Update Outbound Index` கிளிக் செய்யவும்.
3. `Nodes Joining Me` திறக்கவும்.
4. `Reset Invitation Link` கிளிக் செய்யவும்.
5. invitation link copy செய்து மற்ற owner-க்கு அனுப்பவும்.

invitation link empty என்றால் public domain இன்னும் confirmed ஆகவில்லை. `Local Node`-க்கு திரும்பி `Update Outbound Index` கிளிக் செய்யவும்.

### Join Requests Handle செய்வது

யாராவது request submit செய்தால் அது `Nodes Joining Me` list-ல் தோன்றும்.

| Action | Meaning |
| --- | --- |
| Approve | மற்ற node உங்கள் shared file list sync செய்ய அனுமதி |
| Reject | join request மறுப்பு |
| Delete | முடிந்த record remove |
| Check Status | மற்ற side இன்னும் relationship வைத்திருக்கிறதா என்று check |

approval பிறகு மற்ற side `Update Inbound Index` கிளிக் செய்தால்தான் உங்கள் shared files அங்கு தெரியும்.

![Approve invited node](../../image/other/联盟图/邀请节点同意.png)

## Messages

relationship approved ஆன பிறகு node card-ல் `Message` கிளிக் செய்யவும்.

Messages federation relationship தொடர்பான communication-க்கு மட்டும். files, tags, directories, permissions மாற்றாது.

![Messages](../../image/other/联盟图/留言功能.png)

## Federated Files பார்க்க

sync முடிந்த பிறகு admin file list-க்கு திரும்பவும்.

page மேல் local files மற்றும் federated files இடையே switch செய்யவும். federated files-ல் synced content browse செய்யலாம்.

Federated files viewing, searching, preview, links copy ஆகியவற்றுக்காக. அவை local files அல்ல; உங்கள் site-இல் இருந்து move, delete, retag, backup செய்ய முடியாது.

![Federated files in admin](../../image/other/联盟图/联盟管理显示效果图.png)

## FAQ

### Relationship Record இல்லை என்பதால் Reapply கேட்கிறது ஏன்?

பொதுவாக மற்ற side உங்களை delete செய்து record remove செய்திருப்பதாக அர்த்தம். புதிய join request submit செய்யவும்.

![Reapply when no relationship record exists](../../image/other/联盟图/无关系记录重新申请.png)

### Join செய்த பிறகு Files ஏன் தெரியவில்லை?

சரிபார்க்கவும்:

1. மற்ற owner உங்கள் request approve செய்தாரா.
2. மற்ற owner `Update Outbound Index` கிளிக் செய்தாரா.
3. நீங்கள் `Update Inbound Index` கிளிக் செய்தீர்களா.
4. மற்ற owner sync folders-ல் share செய்ய வேண்டிய directories உள்ளனவா.

### Domain Change Detected என்றால் என்ன செய்ய வேண்டும்?

production domain மூலம் admin panel திறந்து இருந்தால் confirm செய்து தொடரவும்.

temporary address பயன்படுத்தினால் cancel செய்து production domain மூலம் admin panel மீண்டும் திறந்து முயற்சி செய்யவும்.

### Empty Sync Folder List என்றால் என்ன?

sync folder list empty என்றால் எல்லா folders share ஆகும்.

சில directories மட்டும் share செய்ய வேண்டுமெனில் அவற்றை manually select செய்யவும்.

### Outbound மற்றும் Inbound Index Updates வித்தியாசம்

| Button | Simple Meaning |
| --- | --- |
| Update Outbound Index | பிறர் என்னிடமிருந்து sync செய்யும் data update |
| Update Inbound Index | நான் பிறரிடமிருந்து sync செய்த data update |
