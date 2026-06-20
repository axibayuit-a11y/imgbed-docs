# Cloudflare-R2-Kanal hinzufügen

## Geeignet für

Nutze Cloudflare R2, wenn:

- deine ImgBed-Seite bereits auf Cloudflare läuft und Dateien in einem R2-Bucket desselben Cloudflare-Kontos gespeichert werden sollen.
- du keinen separaten S3-Endpoint mit Access Key und Secret Key einrichten möchtest.
- Lese- und Schreibzugriffe möglichst einfach über das R2-Binding von Worker oder Pages laufen sollen.

Kurz gesagt:

Der R2-Kanal wird nicht manuell im ImgBed-Adminbereich angelegt. Du bindest zuerst einen R2-Bucket an das Cloudflare-Projekt. Der Name der Binding-Variable muss exakt `img_r2` lauten.

## Was du vorher brauchst

- Ein Cloudflare-Konto.
- Einen bestehenden R2-Bucket.
- Berechtigung, das Cloudflare-Projekt zu verwalten, auf dem ImgBed bereitgestellt ist.

## In Cloudflare einrichten

### 1. R2-Bucket erstellen

1. Melde dich im Cloudflare Dashboard an.
2. Öffne `R2 Object Storage`.
3. Klicke auf Bucket erstellen.
4. Wähle einen Bucket-Namen, zum Beispiel `imgbed`.

In diesem Bucket werden später die hochgeladenen Dateien gespeichert.

![R2-Bucket erstellen](../../image/upload/cloudflare-r2/创建一个存储桶img-r2.png)

### 2. Bucket an das ImgBed-Projekt binden

Wähle den Binding-Ort passend zu deiner Bereitstellung:

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

Speichere das Binding und deploye ImgBed danach neu, damit die Worker- oder Pages-Laufzeit auf `img_r2` zugreifen kann.

## Was du in ImgBed siehst

Sobald das R2-Binding verfügbar ist, öffne:

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

Das ist ein fest gebundener Kanal. Du musst nicht auf Kanal hinzufügen klicken, um ihn anzulegen, und er lässt sich nicht wie ein normaler Kanal löschen.

## Bearbeitbare Felder im Adminbereich

| Feld | Funktion | Erforderlich |
| --- | --- | --- |
| Kanal aktivieren | Legt fest, ob R2 bei der Upload-Auswahl verwendet wird. | Ja |
| Account ID | Wird nur benötigt, wenn Quotenlimits aktiv sind und die offizielle R2-Nutzung abgefragt werden soll. | Empfohlen bei aktivierten Quotenlimits |
| Bucket-Name | Wird nur benötigt, wenn Quotenlimits aktiv sind und die offizielle R2-Nutzung abgefragt werden soll. | Empfohlen bei aktivierten Quotenlimits |
| Quotenlimit | Steuert, ob dieser R2-Kanal abhängig von der Kapazität bei Uploads berücksichtigt wird. | Nein |
| Schwellenwert | Stoppt Schreibvorgänge auf diesen Kanal, sobald die angegebene Nutzung erreicht ist. | Erforderlich bei aktivierten Quotenlimits |

Die Account ID findest du im Kontoinformationsbereich des Cloudflare Dashboards. Trage sie nur ein, wenn ImgBed die R2-Nutzung abfragen und anhand der Quote steuern soll.

![Account ID abrufen](../../image/upload/cloudflare-r2/获取账户id.png)

## Einrichtungsschritte

1. Erstelle in Cloudflare einen R2-Bucket.
2. Öffne die Cloudflare-Einstellungen des ImgBed-Projekts.
3. Füge ein R2-Bucket-Binding hinzu.
4. Setze `Variable name` auf `img_r2`.
5. Wähle den erstellten R2-Bucket aus.
6. Speichere das Binding und deploye ImgBed neu.
7. Kehre zu ImgBed -> Systemeinstellungen -> Upload-Einstellungen zurück.
8. Prüfe, ob der Kanal `Cloudflare R2` erscheint und aktiviert ist.

Wenn R2 anhand der Kapazität bei der Upload-Auswahl berücksichtigt werden soll, aktiviere das Quotenlimit und trage vor dem Speichern Account ID, Bucket-Name, Quotenlimit und Schwellenwert ein.

![Quotenlimit konfigurieren](../../image/upload/cloudflare-r2/配置容量限制.png)

## Prüfung

- Der feste Kanal `Cloudflare R2` erscheint in den Upload-Einstellungen.
- Die Kanalkarte zeigt, dass der Kanal aktiv ist.
- Eine kleine Testdatei wird erfolgreich hochgeladen und der zurückgegebene Link öffnet sich normal.
- Wenn beim Öffnen einer Datei `R2 database binding is not configured` erscheint, hat die Laufzeit das Binding `img_r2` nicht erhalten. Prüfe den Binding-Namen in Cloudflare und deploye das Projekt erneut.
