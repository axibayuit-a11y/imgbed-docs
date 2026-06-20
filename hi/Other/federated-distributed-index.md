# Federated Distributed Index

Federated distributed index कई ImgBed sites को एक-दूसरे के साथ file lists share करने देता है।

सरल शब्दों में:

- आप अपनी site के selected folders दूसरों के साथ share कर सकते हैं।
- आप किसी दूसरे node से जुड़कर उसकी shared file list अपने admin panel में sync कर सकते हैं।
- Federated files मुख्य रूप से browse, search और links खोलने के लिए हैं। वे आपके own storage में re-upload नहीं होतीं।

## कहाँ सेट करें

खोलें:

```text
System Settings -> Other Settings -> Federated Distributed Index
```

![Local federation node](../../image/other/联盟图/联盟分布式索引本地节点.png)

इस page में तीन tabs हैं:

| Tab | Purpose |
| --- | --- |
| Local Node | अपना node enable करें, public domain confirm करें, shared folders चुनें और outbound index update करें |
| Nodes I Joined | जिन दूसरे ImgBed nodes से आप जुड़े हैं उन्हें manage करें |
| Nodes Joining Me | जो लोग आपके node से जुड़ना चाहते हैं उनकी requests manage करें |

## First-Time Setup

1. `Local Node` खोलें।
2. `Enable` on करें।
3. `Sync folders` में share करने वाले folders select करें।
4. `Update Outbound Index` पर click करें।
5. अगर ImgBed domain change detect करे, तो आगे बढ़ने से पहले confirm करें कि current domain सही है।

आप multiple sync folders select कर सकते हैं।

अगर sync folder list empty है, तो सभी folders share होंगे।

## Local Node

### Public Domain

Public domain वह site URL है जिससे दूसरे nodes आपके node को access करते हैं।

ImgBed इसे automatically detect करता है। आपको manually type करने की ज़रूरत नहीं। पहली बार index update करते समय ImgBed पूछता है कि current access URL production domain है या नहीं।

अगर बाद में domain बदलते हैं, तो index update करने पर confirmation फिर से माँगा जाएगा।

### Sync Folders

Sync folders तय करते हैं कि federation nodes के साथ कौन सी files share होंगी।

उदाहरण के लिए, अगर आप केवल यह select करते हैं:

```text
/1/
/2/
```

तो दूसरे nodes सिर्फ इन दो directories की files देख पाएँगे।

### Update Outbound Index

यह उस file list को update करता है जिसे दूसरे nodes आपसे sync कर सकते हैं।

इसे तब इस्तेमाल करें जब:

- आप पहली बार federation enable कर रहे हों।
- आपने ऐसी files upload की हैं जिन्हें share करना है।
- आपने sync folders बदले हैं।
- आपने public domain बदला है और उसे confirm करना है।

## Nodes I Joined

`Nodes I Joined` वह जगह है जहाँ आप दूसरे nodes subscribe करते हैं।

![Nodes I joined](../../image/other/联盟图/我加入的节点.png)

### दूसरे Node में Join Request भेजना

1. दूसरे owner से invitation link माँगें।
2. उसे input box में paste करें।
3. `Request to Join` पर click करें।
4. दूसरे owner द्वारा admin panel में approve करने का इंतज़ार करें।

Approval के बाद node status approved हो जाता है।

### Update Inbound Index

`Update Inbound Index` आपके joined nodes से file lists sync करता है।

इसे तब इस्तेमाल करें जब:

- दूसरे owner ने अभी आपकी request approve की है।
- दूसरे owner ने बताया है कि shared content update हुआ है।
- आप सभी joined federation file lists refresh करना चाहते हैं।

सिर्फ एक node update करने के लिए उस node card पर `Update Index` click करें।

![Update index](../../image/other/联盟图/更新索引.png)

### Unsubscribe

अगर अब किसी node को sync नहीं करना चाहते, तो `Unsubscribe` click करें।

Unsubscribe करने के बाद उस node का federated index आपकी local site से हट जाता है।

## Nodes Joining Me

`Nodes Joining Me` वह जगह है जहाँ आप दूसरों की requests handle करते हैं।

![Nodes joining me](../../image/other/联盟图/加入我的节点.png)

### Invitation Link Generate करना

1. Confirm करें कि local node enabled है।
2. `Update Outbound Index` कम से कम एक बार click करें, ताकि ImgBed public domain confirm कर सके।
3. `Nodes Joining Me` खोलें।
4. `Reset Invitation Link` click करें।
5. Invitation link copy करें और दूसरे owner को भेजें।

अगर invitation link empty है, तो आम तौर पर public domain अभी confirm नहीं हुआ है। `Local Node` पर वापस जाएँ और `Update Outbound Index` click करें।

### Join Requests Handle करना

जब कोई request submit करता है, तो वह `Nodes Joining Me` list में दिखती है।

| Action | Meaning |
| --- | --- |
| Approve | दूसरे node को आपकी shared file list sync करने देता है |
| Reject | Join request मना करता है |
| Delete | Finished record हटाता है |
| Check Status | Check करता है कि दूसरी side अभी भी यह relationship रखती है या नहीं |

Approval के बाद भी दूसरी side को `Update Inbound Index` click करना होगा, तभी आपकी shared files वहाँ दिखेंगी।

![Approve invited node](../../image/other/联盟图/邀请节点同意.png)

## Messages

Relationship approve होने के बाद node card पर `Message` click करें।

Messages सिर्फ federation relationship के बारे में communication के लिए हैं। ये files, tags, directories या permissions नहीं बदलते।

![Messages](../../image/other/联盟图/留言功能.png)

## Federated Files देखना

Sync complete होने के बाद admin file list पर लौटें।

Page के ऊपर local files और federated files के बीच switch करें। Federated files में synced content browse कर सकते हैं।

Federated files मुख्य रूप से viewing, searching, previewing और links copy करने के लिए हैं। ये local files नहीं हैं, इसलिए आप इन्हें अपनी site से move, delete, retag या backup नहीं कर सकते।

![Federated files in admin](../../image/other/联盟图/联盟管理显示效果图.png)

## FAQ

### "No Relationship Record" की वजह से Reapply क्यों कह रहा है?

आम तौर पर इसका मतलब है कि दूसरी side ने आपको delete करके record हटा दिया है, इसलिए relationship अब नहीं मिल रहा। नई join request submit करें।

![Reapply when no relationship record exists](../../image/other/联盟图/无关系记录重新申请.png)

### Join करने के बाद Files क्यों नहीं दिख रहीं?

Check करें:

1. दूसरे owner ने आपकी request approve की है।
2. दूसरे owner ने `Update Outbound Index` click किया है।
3. आपने `Update Inbound Index` click किया है।
4. दूसरे owner के sync folders में वे directories शामिल हैं जिन्हें वे share करना चाहते हैं।

### Domain Change Detect होने पर क्या करें?

अगर आप अभी admin panel production domain से खोल रहे हैं, तो confirm करके continue करें।

अगर आप temporary address इस्तेमाल कर रहे हैं, तो cancel करें, production domain से admin panel दोबारा खोलें, फिर कोशिश करें।

### Empty Sync Folder List का क्या मतलब है?

Empty sync folder list का मतलब है कि सभी folders share होंगे।

केवल कुछ directories share करनी हों, तो वे folders manually select करें।

### Outbound और Inbound Index Updates में फर्क

| Button | Simple Meaning |
| --- | --- |
| Update Outbound Index | जो content दूसरे मुझसे sync कर सकते हैं उसे update करता है |
| Update Inbound Index | जो content मैंने दूसरों से sync किया है उसे update करता है |
