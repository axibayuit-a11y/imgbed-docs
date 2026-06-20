# Federated Distributed Index

Federated distributed index একাধিক ImgBed site-কে একে অন্যের সঙ্গে file lists share করতে দেয়।

সহজভাবে:

- আপনার site-এর selected folders অন্যদের সঙ্গে share করতে পারেন।
- অন্য node-এ join করে সেই node-এর shared file list আপনার admin panel-এ sync করতে পারেন।
- Federated files মূলত browsing, searching এবং links খোলার জন্য। এগুলো আপনার own storage-এ re-upload হয় না।

## কোথায় Configure করবেন

খুলুন:

```text
System Settings -> Other Settings -> Federated Distributed Index
```

![Local federation node](../../image/other/联盟图/联盟分布式索引本地节点.png)

Page-এ তিনটি tabs আছে:

| Tab | Purpose |
| --- | --- |
| Local Node | নিজের node enable, public domain confirm, shared folders select এবং outbound index update |
| Nodes I Joined | আপনি যে অন্য ImgBed nodes join করেছেন সেগুলো manage |
| Nodes Joining Me | যারা আপনার node join করতে চায় তাদের requests manage |

## First-Time Setup

1. `Local Node` খুলুন।
2. `Enable` on করুন।
3. `Sync folders`-এর নিচে share করার folders নির্বাচন করুন।
4. `Update Outbound Index` ক্লিক করুন।
5. ImgBed domain change detect করলে current domain সঠিক কি না confirm করে এগোন।

Multiple sync folders select করা যায়।

Sync folder list empty থাকলে সব folders share হবে।

## Local Node

### Public Domain

Public domain হলো আপনার node access করতে অন্য nodes যে site URL ব্যবহার করে।

ImgBed এটি automatically detect করে। Manually type করতে হয় না। প্রথমবার index update করলে ImgBed জিজ্ঞেস করে current access URL production domain কি না।

পরে domain বদলালে index update করার সময় আবার confirmation চাইবে।

### Sync Folders

Sync folders ঠিক করে federation nodes-এর সঙ্গে কোন files share হবে।

যেমন, শুধু এগুলো select করলে:

```text
/1/
/2/
```

অন্য nodes শুধু এই দুই directories-এর files দেখতে পাবে।

### Update Outbound Index

এটি অন্য nodes আপনার কাছ থেকে যে file list sync করতে পারে সেটি update করে।

ব্যবহার করুন যখন:

- প্রথমবার federation enable করছেন।
- Share করতে চান এমন files upload করেছেন।
- Sync folders বদলেছেন।
- Public domain বদলেছেন এবং confirm করতে হবে।

## Nodes I Joined

`Nodes I Joined` হলো অন্য nodes subscribe করার জায়গা।

![Nodes I joined](../../image/other/联盟图/我加入的节点.png)

### অন্য Node Join করার Request

1. অন্য owner-এর কাছ থেকে invitation link নিন।
2. Input box-এ paste করুন।
3. `Request to Join` ক্লিক করুন।
4. অন্য owner admin panel থেকে approve করা পর্যন্ত অপেক্ষা করুন।

Approval-এর পর node status approved হয়।

### Update Inbound Index

`Update Inbound Index` joined nodes থেকে file lists sync করে।

ব্যবহার করুন যখন:

- অন্য owner সদ্য আপনার request approve করেছে।
- অন্য owner জানিয়েছে shared content update হয়েছে।
- সব joined federation file lists refresh করতে চান।

শুধু এক node update করতে node card-এর `Update Index` ক্লিক করুন।

![Update index](../../image/other/联盟图/更新索引.png)

### Unsubscribe

কোনো node আর sync করতে না চাইলে `Unsubscribe` ক্লিক করুন।

Unsubscribe করার পর সেই node-এর federated index আপনার local site থেকে সরানো হয়।

## Nodes Joining Me

`Nodes Joining Me` হলো অন্যদের requests handle করার জায়গা।

![Nodes joining me](../../image/other/联盟图/加入我的节点.png)

### Invitation Link Generate করা

1. Local node enabled কি না নিশ্চিত করুন।
2. `Update Outbound Index` অন্তত একবার ক্লিক করুন, যাতে ImgBed public domain confirm করে।
3. `Nodes Joining Me` খুলুন।
4. `Reset Invitation Link` ক্লিক করুন।
5. Invitation link copy করে অন্য owner-কে পাঠান।

Invitation link empty হলে সাধারণত public domain confirm হয়নি। `Local Node`-এ ফিরে `Update Outbound Index` ক্লিক করুন।

### Join Requests Handle করা

কেউ request submit করলে সেটি `Nodes Joining Me` list-এ দেখা যায়।

| Action | Meaning |
| --- | --- |
| Approve | অন্য node-কে আপনার shared file list sync করতে দেয় |
| Reject | Join request refuse করে |
| Delete | Finished record সরায় |
| Check Status | অন্য side এখনও এই relationship রাখে কি না check করে |

Approval-এর পরও অন্য side-কে `Update Inbound Index` ক্লিক করতে হবে, তারপর আপনার shared files সেখানে দেখা যাবে।

![Approve invited node](../../image/other/联盟图/邀请节点同意.png)

## Messages

Relationship approve হলে node card-এর `Message` ক্লিক করুন।

Messages শুধু federation relationship নিয়ে communication-এর জন্য। এগুলো files, tags, directories বা permissions বদলায় না।

![Messages](../../image/other/联盟图/留言功能.png)

## Federated Files দেখা

Sync complete হলে admin file list-এ ফিরে যান।

Page-এর top-এ local files এবং federated files-এর মধ্যে switch করুন। Federated files-এ synced content browse করা যায়।

Federated files মূলত viewing, searching, previewing এবং links copy করার জন্য। এগুলো local files নয়, তাই নিজের site থেকে move, delete, retag বা backup করা যায় না।

![Federated files in admin](../../image/other/联盟图/联盟管理显示效果图.png)

## FAQ

### No Relationship Record বলে Reapply করতে বলছে কেন?

সাধারণত এর মানে অন্য side আপনাকে delete করে record সরিয়েছে, তাই relationship আর পাওয়া যাচ্ছে না। নতুন join request submit করুন।

![Reapply when no relationship record exists](../../image/other/联盟图/无关系记录重新申请.png)

### Join করার পর Files দেখছি না কেন?

Check করুন:

1. অন্য owner আপনার request approve করেছে।
2. অন্য owner `Update Outbound Index` ক্লিক করেছে।
3. আপনি `Update Inbound Index` ক্লিক করেছেন।
4. অন্য owner-এর sync folders-এ share করতে চাওয়া directories আছে।

### Domain Change Detected হলে কী করব?

আপনি যদি production domain দিয়ে admin panel খুলে থাকেন, confirm করে continue করুন।

Temporary address ব্যবহার করলে cancel করুন, production domain দিয়ে admin panel আবার খুলুন, তারপর try করুন।

### Empty Sync Folder List মানে কী?

Empty sync folder list মানে সব folders share হবে।

শুধু কিছু directories share করতে চাইলে manually সেই folders select করুন।

### Outbound এবং Inbound Index Updates-এর পার্থক্য

| Button | Simple Meaning |
| --- | --- |
| Update Outbound Index | অন্যরা আমার কাছ থেকে যা sync করতে পারে তা update করে |
| Update Inbound Index | আমি অন্যদের কাছ থেকে যা sync করেছি তা update করে |
