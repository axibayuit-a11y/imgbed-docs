# Federated Distributed Index

Federated distributed index څو ImgBed sites ته اجازه ورکوي چې د files lists یو له بل سره share کړي.

په ساده ډول:

- له خپل site څخه ټاکلي folders نورو سره share کولای شئ.
- بل node ته join کېدای شئ او د هغه node shared file list خپل admin panel ته sync کولای شئ.
- Federated files عموما د browsing، searching او links پرانیستلو لپاره دي. دا ستاسو خپل storage ته بیا upload نه کېږي.

## چېرته یې تنظیم کړئ

دا پرانیزئ:

```text
System Settings -> Other Settings -> Federated Distributed Index
```

![Local federation node](../../image/other/联盟图/联盟分布式索引本地节点.png)

پاڼه درې tabs لري:

| Tab | موخه |
| --- | --- |
| Local Node | خپل node فعالول، public domain تاییدول، shared folders ټاکل او outbound index update کول |
| Nodes I Joined | هغه نور ImgBed nodes manage کول چې join کړي مو دي |
| Nodes Joining Me | د هغو requests manage کول چې نور خلک غواړي ستاسو node ته join شي |

## لومړی Setup

1. `Local Node` پرانیزئ.
2. `Enable` فعال کړئ.
3. د `Sync folders` لاندې folders وټاکئ چې share کېږي.
4. `Update Outbound Index` کلیک کړئ.
5. که ImgBed domain change detect کړي، د دوام مخکې تایید کړئ چې اوسنی domain سم دی.

څو sync folders ټاکلای شئ.

که sync folder list تش وي، ټول folders share کېږي.

## Local Node

### Public Domain

Public domain هغه site URL دی چې نور nodes ستاسو node ته د access لپاره کاروي.

ImgBed دا په اتومات ډول detect کوي. manually یې لیکلو ته اړتیا نشته. د index د لومړي update پر وخت، ImgBed پوښتنه کوي چې اوسنی access URL production domain دی که نه.

که وروسته domain بدل کړئ، index update بیا confirmation غواړي.

### Sync Folders

Sync folders ټاکي چې کوم files له federation nodes سره share کېږي.

د بېلګې په توګه، که یوازې دا وټاکئ:

```text
/1/
/2/
```

نور nodes یوازې په همدې دوو directories کې files لیدلی شي.

### Update Outbound Index

دا هغه file list update کوي چې نور nodes یې له تاسې sync کولای شي.

دا په دې وختونو کې وکاروئ:

- federation لومړی ځل فعالوئ.
- هغه files upload کوئ چې share کول یې غواړئ.
- sync folders بدلوئ.
- public domain بدلوئ او تایید ته اړتیا وي.

## Nodes I Joined

`Nodes I Joined` هغه ځای دی چې نورو nodes ته subscribe کوئ.

![Nodes I joined](../../image/other/联盟图/我加入的节点.png)

### بل Node ته د Join Request لېږل

1. له بل owner څخه invitation link وغواړئ.
2. input box ته یې paste کړئ.
3. `Request to Join` کلیک کړئ.
4. د بل owner approve ته انتظار وکړئ.

له approval وروسته node status approved کېږي.

### Update Inbound Index

`Update Inbound Index` له هغو nodes څخه file lists sync کوي چې join کړي مو دي.

دا په دې وختونو کې وکاروئ:

- بل owner ستاسو request تازه approve کړې وي.
- بل owner درته وايي shared content update شوی دی.
- غواړئ ټول joined federation file lists refresh کړئ.

یوازې د یوه node د update لپاره، په هماغه node card کې `Update Index` کلیک کړئ.

![Update index](../../image/other/联盟图/更新索引.png)

### Unsubscribe

که نور نه غواړئ یو node sync کړئ، `Unsubscribe` کلیک کړئ.

له unsubscribe وروسته، د هغه node federated index ستاسو له local site څخه لرې کېږي.

## Nodes Joining Me

`Nodes Joining Me` هغه ځای دی چې د نورو خلکو requests handle کوئ.

![Nodes joining me](../../image/other/联盟图/加入我的节点.png)

### Invitation Link جوړول

1. ډاډه شئ local node فعال دی.
2. لږ تر لږه یو ځل `Update Outbound Index` کلیک کړئ، څو ImgBed public domain تایید کړي.
3. `Nodes Joining Me` پرانیزئ.
4. `Reset Invitation Link` کلیک کړئ.
5. invitation link copy کړئ او بل owner ته یې ولېږئ.

که invitation link تش وي، عموما public domain لا confirm شوی نه وي. بېرته `Local Node` ته لاړ شئ او `Update Outbound Index` کلیک کړئ.

### Join Requests Handle کول

کله چې څوک request submit کړي، د `Nodes Joining Me` په list کې ښکاري.

| Action | معنا |
| --- | --- |
| Approve | بل node ته اجازه ورکوي چې ستاسو shared file list sync کړي |
| Reject | join request ردوي |
| Delete | بشپړ record لرې کوي |
| Check Status | ګوري چې مقابل لوری لا هم دا relationship ساتي که نه |

له approval وروسته، مقابل لوری باید لا هم `Update Inbound Index` کلیک کړي، بیا ستاسو shared files هلته ښکاره کېږي.

![Approve invited node](../../image/other/联盟图/邀请节点同意.png)

## Messages

کله چې relationship approve شي، په node card کې `Message` کلیک کړئ.

Messages یوازې د federation relationship په اړه د communication لپاره دي. files، tags، directories یا permissions نه بدلوي.

![Messages](../../image/other/联盟图/留言功能.png)

## Federated Files لیدل

کله چې sync بشپړ شي، بېرته admin file list ته لاړ شئ.

د پاڼې په سر کې د local files او federated files تر منځ switch وکړئ. په federated files کې synced content browse کولای شئ.

Federated files عموما د viewing، searching، previewing او links copy کولو لپاره دي. دا local files نه دي، نو له خپل site څخه یې move، delete، retag یا backup نه شئ کولای.

![Federated files in admin](../../image/other/联盟图/联盟管理显示效果图.png)

## FAQ

### ولې وايي Relationship Record نشته او Reapply وکړئ؟

دا عموما معنا لري چې مقابل لوري تاسې delete کړي او record یې لرې کړی دی، نو relationship نور نه موندل کېږي. نوی join request submit کړئ.

![Reapply when no relationship record exists](../../image/other/联盟图/无关系记录重新申请.png)

### له Join وروسته ولې Files نه وینم؟

وګورئ:

1. بل owner ستاسو request approve کړې ده.
2. بل owner `Update Outbound Index` کلیک کړی دی.
3. تاسې `Update Inbound Index` کلیک کړی دی.
4. د بل owner sync folders هغه directories رانغاړي چې share کول غواړي.

### کله چې Domain Change Detect شي څه وکړم؟

که admin panel اوس د production domain له لارې پرانستی وي، confirm او continue کړئ.

که temporary address کاروئ، cancel کړئ، admin panel د production domain له لارې بیا پرانیزئ، بیا هڅه وکړئ.

### Empty Sync Folder List څه معنا لري؟

تش sync folder list معنا دا ده چې ټول folders share کېږي.

که یوازې ځینې directories share کوئ، هغه folders manually وټاکئ.

### د Outbound او Inbound Index Update توپیر

| Button | ساده معنا |
| --- | --- |
| Update Outbound Index | هغه څه update کوي چې نور یې له ما sync کولای شي |
| Update Inbound Index | هغه څه update کوي چې ما له نورو sync کړي دي |
