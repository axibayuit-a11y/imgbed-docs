# Föderierter verteilter Index

Der föderierte verteilte Index ermöglicht es mehreren ImgBed-Seiten, Dateilisten miteinander zu teilen.

Kurz gesagt:

- Du kannst bestimmte Ordner deiner Seite mit anderen teilen.
- Du kannst einem fremden Knoten beitreten und dessen freigegebene Dateiliste in deinen Adminbereich synchronisieren.
- Föderierte Dateien dienen zum Durchsuchen, Anzeigen, Vorschauen und Kopieren von Links. Sie werden nicht in deinen eigenen Speicher erneut hochgeladen.

## Wo einstellen

```text
Systemeinstellungen -> Weitere Einstellungen -> Föderierter verteilter Index
```

![Lokaler Knoten](../../image/other/联盟图/联盟分布式索引本地节点.png)

Die Seite besteht aus drei Tabs:

| Tab | Zweck |
| --- | --- |
| Lokaler Knoten | Eigenen Knoten, öffentliche Domain, freigegebene Ordner und ausgehenden Index verwalten |
| Beigetretene Knoten | Knoten anderer ImgBed-Seiten verwalten |
| Anfragen an meinen Knoten | Beitrittsanfragen anderer Personen verwalten |

## Ersteinrichtung

1. Öffne `Lokaler Knoten`.
2. Aktiviere `Aktivieren`.
3. Wähle unter `Synchronisierte Ordner` die Ordner aus, die du freigeben möchtest.
4. Klicke auf `Ausgehenden Index aktualisieren`.
5. Wenn ImgBed eine Domainänderung erkennt, bestätige, dass die aktuelle Domain die richtige Produktionsdomain ist.

Du kannst mehrere Ordner auswählen. Bleibt die Liste leer, werden alle Ordner freigegeben.

## Lokaler Knoten

### Öffentliche Domain

Die öffentliche Domain ist die Adresse, über die andere Knoten deine Seite erreichen.

ImgBed erkennt sie automatisch. Normalerweise musst du nichts manuell eintragen. Beim ersten Aktualisieren oder nach Domainwechsel wird eine Bestätigung angezeigt.

### Synchronisierte Ordner

Diese Ordner bestimmen, welche Dateien freigegeben werden.

Beispiel:

```text
/1/
/2/
```

Andere Knoten sehen dann nur Dateien in diesen beiden Verzeichnissen.

### Ausgehenden Index aktualisieren

Aktualisiert die Dateiliste, die andere Knoten von deiner Seite synchronisieren können.

Nutze diese Aktion, wenn:

- du die Föderation erstmals aktivierst;
- du neue Dateien freigeben möchtest;
- du freigegebene Ordner änderst;
- du die öffentliche Domain wechselst.

## Anderen Knoten beitreten

`Beigetretene Knoten` ist der Bereich für Knoten anderer ImgBed-Seiten.

![Beigetretene Knoten](../../image/other/联盟图/我加入的节点.png)

1. Bitte den Betreiber des anderen Knotens um einen Einladungslink.
2. Füge ihn in das Eingabefeld ein.
3. Klicke auf `Beitritt beantragen`.
4. Warte, bis die andere Seite im Adminbereich zustimmt.

Nach Zustimmung nutzt du `Eingehenden Index aktualisieren`, um die freigegebenen Dateien zu synchronisieren.

Für nur einen Knoten kannst du auf dessen Karte `Index aktualisieren` verwenden.

![Index aktualisieren](../../image/other/联盟图/更新索引.png)

## Anfragen an deinen Knoten verwalten

`Anfragen an meinen Knoten` zeigt Personen, die deinem Knoten beitreten möchten.

![Anfragen an meinen Knoten](../../image/other/联盟图/加入我的节点.png)

Für einen Einladungslink aktiviere den lokalen Knoten, führe mindestens einmal `Ausgehenden Index aktualisieren` aus, bestätige die öffentliche Domain und klicke dann auf `Einladungslink zurücksetzen`.

Bei einer Anfrage kannst du wählen:

| Aktion | Ergebnis |
| --- | --- |
| Genehmigen | Die andere Seite darf deine freigegebene Liste synchronisieren |
| Ablehnen | Beitritt wird verweigert |
| Löschen | Abgeschlossenen Eintrag entfernen |
| Status prüfen | Prüfen, ob die andere Seite die Beziehung noch hält |

Nach Genehmigung muss die andere Seite den eingehenden Index aktualisieren, um deine Dateien zu sehen.

![Knoten genehmigen](../../image/other/联盟图/邀请节点同意.png)

## Nachrichten

Nach Genehmigung kannst du auf der Knotenkarte `Nachricht` verwenden.

Nachrichten dienen nur der Abstimmung zur Föderation. Sie ändern keine Dateien, Tags, Ordner oder Rechte.

![Nachrichten](../../image/other/联盟图/留言功能.png)

## Föderierte Dateien anzeigen

Nach der Synchronisierung gehst du zurück zur Dateiliste im Adminbereich. Oben kannst du zwischen lokalen und föderierten Dateien wechseln.

Föderierte Dateien sind nicht lokal. Du kannst sie ansehen, durchsuchen, voranzeigen und Links kopieren, aber nicht verschieben, löschen, umtaggen oder sichern.

![Anzeige im Adminbereich](../../image/other/联盟图/联盟管理显示效果图.png)

## Häufige Fragen

### Es wird angezeigt, dass keine Beziehung existiert

Meist hat die andere Seite deinen Eintrag gelöscht. Stelle in diesem Fall eine neue Beitrittsanfrage.

![Erneut beantragen](../../image/other/联盟图/无关系记录重新申请.png)

### Ich bin beigetreten, sehe aber keine Dateien

Prüfe:

1. Die andere Seite hat deine Anfrage genehmigt.
2. Die andere Seite hat ihren ausgehenden Index aktualisiert.
3. Du hast deinen eingehenden Index aktualisiert.
4. Die synchronisierten Ordner der anderen Seite enthalten die freigegebenen Verzeichnisse.
