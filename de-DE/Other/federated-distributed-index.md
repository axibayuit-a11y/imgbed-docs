# Föderierter verteilter Index

Der föderierte verteilte Index ermöglicht es mehreren ImgBed-Seiten, Dateilisten miteinander zu teilen.

Einfach gesagt:

- Sie können ausgewählte Ordner Ihrer Seite mit anderen teilen.
- Sie können einem anderen Knoten beitreten und dessen freigegebene Dateiliste in Ihren Adminbereich synchronisieren.
- Föderierte Dateien dienen hauptsächlich zum Durchsuchen, Suchen und Öffnen von Links. Sie werden nicht erneut in Ihren eigenen Speicher hochgeladen.

## Wo er konfiguriert wird

Öffnen Sie:

```text
System Settings -> Other Settings -> Federated Distributed Index
```

![Lokaler Föderationsknoten](../../image/other/联盟图/联盟分布式索引本地节点.png)

Die Seite hat drei Registerkarten:

| Registerkarte | Zweck |
| --- | --- |
| Lokaler Knoten | Eigenen Knoten aktivieren, öffentliche Domain bestätigen, freigegebene Ordner auswählen und ausgehenden Index aktualisieren |
| Beigetretene Knoten | Andere ImgBed-Knoten verwalten, denen Sie beigetreten sind |
| Knoten, die mir beitreten | Anfragen von anderen verwalten, die Ihrem Knoten beitreten möchten |

## Ersteinrichtung

1. Öffnen Sie `Local Node`.
2. Aktivieren Sie `Enable`.
3. Wählen Sie unter `Sync folders` die Ordner aus, die Sie freigeben möchten.
4. Klicken Sie auf `Update Outbound Index`.
5. Wenn ImgBed eine Domainänderung erkennt, bestätigen Sie vor dem Fortfahren, dass die aktuelle Domain korrekt ist.

Sie können mehrere Synchronisierungsordner auswählen.

Wenn die Liste der Synchronisierungsordner leer ist, werden alle Ordner freigegeben.

## Lokaler Knoten

### Öffentliche Domain

Die öffentliche Domain ist die Website-URL, über die andere Knoten auf Ihren Knoten zugreifen.

ImgBed erkennt diese automatisch. Sie müssen sie nicht manuell eingeben. Beim ersten Aktualisieren des Index fragt ImgBed, ob die aktuelle Zugriffs-URL die Produktionsdomain ist.

Wenn Sie die Domain später ändern, fragt die Indexaktualisierung erneut nach einer Bestätigung.

### Synchronisierte Ordner

Synchronisierte Ordner bestimmen, welche Dateien mit Föderationsknoten geteilt werden.

Wenn Sie beispielsweise nur Folgendes auswählen:

```text
/1/
/2/
```

können andere Knoten nur die Dateien in diesen beiden Verzeichnissen sehen.

### Ausgehenden Index aktualisieren

Damit wird die Dateiliste aktualisiert, die andere Knoten von Ihnen synchronisieren können.

Verwenden Sie dies, wenn:

- Sie die Föderation zum ersten Mal aktivieren.
- Sie Dateien hochladen, die Sie teilen möchten.
- Sie synchronisierte Ordner ändern.
- Sie die öffentliche Domain ändern und bestätigen müssen.

## Beigetretene Knoten

`Nodes I Joined` ist der Bereich, in dem Sie andere Knoten abonnieren.

![Beigetretene Knoten](../../image/other/联盟图/我加入的节点.png)

### Beitritt zu einem anderen Knoten beantragen

1. Bitten Sie den anderen Eigentümer um einen Einladungslink.
2. Fügen Sie ihn in das Eingabefeld ein.
3. Klicken Sie auf `Request to Join`.
4. Warten Sie, bis der andere Eigentümer die Anfrage in seinem Adminbereich genehmigt.

Nach der Genehmigung ist der Knotenstatus genehmigt.

### Eingehenden Index aktualisieren

`Update Inbound Index` synchronisiert Dateilisten von Knoten, denen Sie beigetreten sind.

Verwenden Sie dies, wenn:

- der andere Eigentümer Ihre Anfrage gerade genehmigt hat.
- der andere Eigentümer mitteilt, dass freigegebene Inhalte aktualisiert wurden.
- Sie alle beigetretenen föderierten Dateilisten aktualisieren möchten.

Um nur einen Knoten zu aktualisieren, klicken Sie auf dessen Karte auf `Update Index`.

![Index aktualisieren](../../image/other/联盟图/更新索引.png)

### Abonnement beenden

Wenn Sie einen Knoten nicht mehr synchronisieren möchten, klicken Sie auf `Unsubscribe`.

Nach dem Beenden des Abonnements wird der föderierte Index dieses Knotens von Ihrer lokalen Seite entfernt.

## Knoten, die mir beitreten

`Nodes Joining Me` ist der Bereich, in dem Sie Anfragen anderer bearbeiten.

![Knoten, die mir beitreten](../../image/other/联盟图/加入我的节点.png)

### Einladungslink erzeugen

1. Stellen Sie sicher, dass der lokale Knoten aktiviert ist.
2. Klicken Sie mindestens einmal auf `Update Outbound Index`, damit ImgBed die öffentliche Domain bestätigt.
3. Öffnen Sie `Nodes Joining Me`.
4. Klicken Sie auf `Reset Invitation Link`.
5. Kopieren Sie den Einladungslink und senden Sie ihn an den anderen Eigentümer.

Wenn der Einladungslink leer ist, wurde die öffentliche Domain in der Regel noch nicht bestätigt. Kehren Sie zu `Local Node` zurück und klicken Sie auf `Update Outbound Index`.

### Beitrittsanfragen bearbeiten

Wenn jemand eine Anfrage sendet, erscheint sie in der Liste `Nodes Joining Me`.

| Aktion | Bedeutung |
| --- | --- |
| Genehmigen | Erlaubt dem anderen Knoten, Ihre freigegebene Dateiliste zu synchronisieren |
| Ablehnen | Lehnt die Beitrittsanfrage ab |
| Löschen | Entfernt einen abgeschlossenen Eintrag |
| Status prüfen | Prüft, ob die andere Seite diese Beziehung noch beibehält |

Nach der Genehmigung muss die andere Seite noch auf `Update Inbound Index` klicken, bevor Ihre freigegebenen Dateien dort erscheinen.

![Eingeladenen Knoten genehmigen](../../image/other/联盟图/邀请节点同意.png)

## Nachrichten

Nach der Genehmigung einer Beziehung klicken Sie auf der Knotenkarte auf `Message`.

Nachrichten dienen nur der Kommunikation über die Föderationsbeziehung. Sie ändern keine Dateien, Tags, Verzeichnisse oder Berechtigungen.

![Nachrichten](../../image/other/联盟图/留言功能.png)

## Föderierte Dateien anzeigen

Nach Abschluss der Synchronisierung kehren Sie zur Dateiliste im Adminbereich zurück.

Oben auf der Seite können Sie zwischen lokalen Dateien und föderierten Dateien wechseln. In den föderierten Dateien können Sie synchronisierte Inhalte durchsuchen.

Föderierte Dateien dienen hauptsächlich zum Anzeigen, Suchen, Vorschauen und Kopieren von Links. Es sind keine lokalen Dateien, daher können Sie sie von Ihrer eigenen Seite aus nicht verschieben, löschen, neu taggen oder sichern.

![Föderierte Dateien im Adminbereich](../../image/other/联盟图/联盟管理显示效果图.png)

## FAQ

### Warum werde ich wegen eines fehlenden Beziehungsdatensatzes zu einer erneuten Anfrage aufgefordert?

Das bedeutet normalerweise, dass die andere Seite Sie gelöscht und den Datensatz entfernt hat, sodass die Beziehung nicht mehr gefunden werden kann. Senden Sie eine neue Beitrittsanfrage.

![Erneut beantragen, wenn kein Beziehungsdatensatz vorhanden ist](../../image/other/联盟图/无关系记录重新申请.png)

### Warum sehe ich nach dem Beitritt keine Dateien?

Prüfen Sie:

1. Der andere Eigentümer hat Ihre Anfrage genehmigt.
2. Der andere Eigentümer hat auf `Update Outbound Index` geklickt.
3. Sie haben auf `Update Inbound Index` geklickt.
4. Die synchronisierten Ordner des anderen Eigentümers enthalten die Verzeichnisse, die er freigeben möchte.

### Was soll ich tun, wenn eine Domainänderung erkannt wird?

Wenn Sie den Adminbereich gerade über die Produktionsdomain öffnen, bestätigen Sie und fahren Sie fort.

Wenn Sie eine temporäre Adresse verwenden, brechen Sie ab, öffnen Sie den Adminbereich über die Produktionsdomain erneut und versuchen Sie es noch einmal.

### Was bedeutet eine leere Liste synchronisierter Ordner?

Eine leere Liste synchronisierter Ordner bedeutet, dass alle Ordner freigegeben werden.

Um nur einige Verzeichnisse freizugeben, wählen Sie diese Ordner manuell aus.

### Unterschied zwischen ausgehender und eingehender Indexaktualisierung

| Schaltfläche | Einfache Bedeutung |
| --- | --- |
| Ausgehenden Index aktualisieren | Aktualisiert, was andere von mir synchronisieren können |
| Eingehenden Index aktualisieren | Aktualisiert, was ich von anderen synchronisiert habe |
