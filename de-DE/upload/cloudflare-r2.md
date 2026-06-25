# Cloudflare-R2-Kanal hinzufügen

## Geeignet für

Verwenden Sie Cloudflare R2, wenn:

- Ihre ImgBed-Seite bereits auf Cloudflare läuft und Dateien in einem R2-Bucket desselben Cloudflare-Kontos gespeichert werden sollen.
- Sie keinen separaten S3-Endpoint mit Access Key und Secret Key einrichten möchten.
- Lese- und Schreibzugriffe möglichst einfach über das R2-Binding von Worker oder Pages laufen sollen.

Kurz gesagt:

Der R2-Kanal wird nicht manuell im ImgBed-Adminbereich angelegt. Binden Sie zuerst einen R2-Bucket an das Cloudflare-Projekt. Der Name der Binding-Variable muss exakt `img_r2` lauten.

## Was Sie vorher benötigen

- Ein Cloudflare-Konto.
- Einen bestehenden R2-Bucket.
- Berechtigung, das Cloudflare-Projekt zu verwalten, auf dem ImgBed bereitgestellt ist.

## In Cloudflare einrichten

### 1. R2-Bucket erstellen

1. Melden Sie sich im Cloudflare Dashboard an.
2. Öffnen Sie `R2 Object Storage`.
3. Klicken Sie auf Bucket erstellen.
4. Wählen Sie einen Bucket-Namen, zum Beispiel `imgbed`.

In diesem Bucket werden später die hochgeladenen Dateien gespeichert.

![R2-Bucket erstellen](../../image/upload/cloudflare-r2/创建一个存储桶img-r2.png)

### 2. Bucket an das ImgBed-Projekt binden

Wählen Sie den Binding-Ort passend zu Ihrer Bereitstellung:

| Bereitstellung | Binding-Ort |
| --- | --- |
| Pages | Aktuelles Pages-Projekt -> Settings -> Functions -> R2 bucket bindings |
| Worker | Aktueller Worker -> Settings -> Bindings -> R2 bucket bindings |

Beim Hinzufügen des Bindings sind diese Felder wichtig:

| Feld | Wert |
| --- | --- |
| Variable name | `img_r2` |
| R2 bucket | Den gerade erstellten Bucket auswählen |

Der Variablenname muss genau `img_r2` sein. Hochladen, Lesen und Löschen von R2-Dateien hängen alle an diesem Binding-Namen.

### 3. Projekt erneut bereitstellen

Speichern Sie das Binding und stellen Sie ImgBed danach erneut bereit, damit die Worker- oder Pages-Laufzeit auf `img_r2` zugreifen kann.

## Was Sie in ImgBed sehen

Sobald das R2-Binding verfügbar ist, öffnen Sie:

1. Systemeinstellungen.
2. Upload-Einstellungen.
3. Den Kanal `Cloudflare R2`.

Das System erstellt automatisch einen festen Kanal:

| Feld | Fester Wert |
| --- | --- |
| Kanalname | `Cloudflare R2` |
| Kanaltyp | `cfr2` |
| Speichermodus | `binding` |
| Konfigurationsquelle | Environment Binding |

Das ist ein fest gebundener Kanal. Sie müssen nicht auf Kanal hinzufügen klicken, um ihn anzulegen, und er lässt sich nicht wie ein normaler Kanal löschen.

## Bearbeitbare Felder im Adminbereich

| Feld | Funktion | Erforderlich |
| --- | --- | --- |
| Kanal aktivieren | Legt fest, ob R2 bei der Upload-Auswahl verwendet wird. | Ja |
| Account ID | Wird nur benötigt, wenn Quotenlimits aktiv sind und die offizielle R2-Nutzung abgefragt werden soll. | Empfohlen bei aktivierten Quotenlimits |
| Bucket-Name | Wird nur benötigt, wenn Quotenlimits aktiv sind und die offizielle R2-Nutzung abgefragt werden soll. | Empfohlen bei aktivierten Quotenlimits |
| Quotenlimit | Steuert, ob dieser R2-Kanal abhängig von der Kapazität bei Uploads berücksichtigt wird. | Nein |
| Schwellenwert | Stoppt Schreibvorgänge auf diesen Kanal, sobald die angegebene Nutzung erreicht ist. | Erforderlich bei aktivierten Quotenlimits |

Die Account ID finden Sie im Kontoinformationsbereich des Cloudflare Dashboards. Tragen Sie sie nur ein, wenn ImgBed die R2-Nutzung abfragen und anhand der Quote steuern soll.

![Account ID abrufen](../../image/upload/cloudflare-r2/获取账户id.png)

## Einrichtungsschritte

1. Erstellen Sie in Cloudflare einen R2-Bucket.
2. Öffnen Sie die Cloudflare-Einstellungen des ImgBed-Projekts.
3. Fügen Sie ein R2-Bucket-Binding hinzu.
4. Setzen Sie `Variable name` auf `img_r2`.
5. Wählen Sie den erstellten R2-Bucket aus.
6. Speichern Sie das Binding und stellen Sie ImgBed erneut bereit.
7. Kehren Sie zu ImgBed -> Systemeinstellungen -> Upload-Einstellungen zurück.
8. Prüfen Sie, ob der Kanal `Cloudflare R2` erscheint und aktiviert ist.

Wenn R2 anhand der Kapazität bei der Upload-Auswahl berücksichtigt werden soll, aktivieren Sie das Quotenlimit und tragen Sie vor dem Speichern Account ID, Bucket-Name, Quotenlimit und Schwellenwert ein.

![Quotenlimit konfigurieren](../../image/upload/cloudflare-r2/配置容量限制.png)

## Prüfung

- Der feste Kanal `Cloudflare R2` erscheint in den Upload-Einstellungen.
- Die Kanalkarte zeigt, dass der Kanal aktiv ist.
- Eine kleine Testdatei wird erfolgreich hochgeladen und der zurückgegebene Link öffnet sich normal.
- Wenn beim Öffnen einer Datei `R2 database binding is not configured` erscheint, hat die Laufzeit das Binding `img_r2` nicht erhalten. Prüfen Sie den Binding-Namen in Cloudflare und stellen Sie das Projekt erneut bereit.
