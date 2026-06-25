# Magnet-Übertragung

Die Magnet-Übertragung lädt Dateien aus einem Magnet-Link herunter und lädt sie automatisch in den von Ihnen gewählten Cloud-Speicherkanal hoch.

Sie ist nützlich für die Übertragung von Anime-Folgen, Videos, Archiven und ähnlichen Dateien. Fügen Sie einen Magnet-Link ein, und ImgBed erstellt eine Herunterladeaufgabe im Hintergrund. Nach Abschluss des Herunterladens wird die Datei zu ImgBed hochgeladen und der endgültige Link erscheint in der Liste der hochgeladenen Dateien.

![Magnet-Übertragung](../../image/other/磁力链接/磁力链接.png)

## Wo sie verwendet wird

Der Einstieg für die Magnet-Übertragung befindet sich im Hochladebereich der Startseite.

Fügen Sie den Magnet-Link in das Eingabefeld ein, wählen Sie `Transfer` und laden Sie dann hoch.

![Anime hochladen](../../image/other/磁力链接/上传番剧.png)

## Vor der ersten Verwendung

Konfigurieren Sie die Magnet-Übertragung zuerst im Adminbereich.

Normalerweise benötigen Sie:

1. Ein GitHub-Konto zum Ausführen der Herunterladeaufgabe.
2. Einen Cloud-Hochladekanal, zum Beispiel Google Drive oder OneDrive.
3. Das Zielverzeichnis für das Hochladen.
4. Ein Aufgaben-Timeout.

Wenn die Einstellungen bereit sind, kehren Sie zur Startseite zurück und fügen Sie einen Magnet-Link ein, um die Übertragung zu starten.

## Einen Magnet-Link hochladen

1. Fügen Sie den Magnet-Link in das Hochladefeld der Startseite ein.
2. Stellen Sie sicher, dass der Modus auf `Transfer` gesetzt ist.
3. Klicken Sie auf Hochladen.
4. Warten Sie, bis ImgBed die Magnet-Aufgabe erstellt.
5. Nach dem Start der Aufgabe können Sie den Fortschritt im schwebenden Panel `Magnet Tasks` unten rechts prüfen.

Herunterladen und Hochladen können Zeit benötigen. Die Geschwindigkeit hängt von der Magnet-Ressource, der GitHub-Laufzeitumgebung und dem ausgewählten Cloud-Speicherkanal ab.

![Magnet wird heruntergeladen](../../image/other/磁力链接/磁力链接下载中.png)

## Nach Abschluss

Nach Abschluss der Aufgabe zeigt die Liste der hochgeladenen Dateien den Dateinamen und den Link an.

Videos zeigen eine Videovorschau, Bilder eine Bildvorschau und andere Dateien ein normales Dateisymbol.

![Heruntergeladenes Video](../../image/other/磁力链接/下载好后的视频.png)

Sie können Folgendes kopieren:

| Linktyp | Anwendungsfall |
| --- | --- |
| Originallink | Direkter Dateizugriff |
| Markdown | Markdown-Beiträge oder Notizen |
| HTML | Webseiten-Code |
| BBCode | Foren, die BBCode unterstützen |

## Magnet-Aufgaben-Panel

Das Magnet-Aufgaben-Panel unten rechts zeigt Aufgabenanzahl, Aufgabenname, Fortschritt und Endstatus.

Häufige Zustände:

| Status | Bedeutung |
| --- | --- |
| Wartend | Die Aufgabe wurde erstellt und wartet auf Ausführung. |
| Wird heruntergeladen | Die Magnet-Ressource wird heruntergeladen. |
| Wird hochgeladen | Die Datei wurde heruntergeladen und wird in den Cloud-Speicher hochgeladen. |
| Abgeschlossen | Das Hochladen war erfolgreich und der Link kann kopiert werden. |
| Fehlgeschlagen | Die Aufgabe wurde nicht erfolgreich abgeschlossen. Prüfen Sie die Meldung und versuchen Sie es erneut. |

## Hinweise

- Wenn ein Magnet-Link mehrere Dateien enthält, bevorzugt ImgBed für die Anzeige die wichtigste abgeschlossene Datei.
- Große Dateien benötigen mehr Zeit. Warten Sie, bis die Aufgabe abgeschlossen ist, bevor Sie die Seite aktualisieren.
- Wenn die Magnet-Ressource keine verfügbaren Peers hat, kann sie sehr langsam sein oder fehlschlagen.
- Wenn das Cloud-Konto kein Kontingent mehr hat, die Autorisierung abgelaufen ist oder das Hochladeverzeichnis falsch ist, kann die Aufgabe fehlschlagen.
- Die Videovorschau kann nach Abschluss des Uploads einige Sekunden benötigen.

## FAQ

### Nach dem Einfügen eines Magnet-Links startet nichts

Prüfen Sie, ob die Magnet-Übertragung im Adminbereich aktiviert ist und ob ein verwendbares GitHub-Konto sowie ein Cloud-Kanal ausgewählt wurden.

### Das Herunterladen ist immer langsam

Die Magnet-Geschwindigkeit hängt von der Ressource selbst ab. Wenn keine verfügbaren Peers vorhanden sind, kann das Herunterladen sehr langsam oder unmöglich sein.

### Nach dem Hochladen erscheint keine Vorschau

Prüfen Sie zuerst, ob der Dateilink geöffnet werden kann. Videodateien benötigen im Browser eventuell etwas Zeit zum Laden; alternativ können Sie den Link direkt öffnen.

### Was soll ich prüfen, wenn eine Aufgabe fehlschlägt?

Prüfen Sie, ob der Magnet-Link gültig ist, ob der Cloud-Kanal funktioniert und ob das Hochladeverzeichnis korrekt ist. Senden Sie die Aufgabe danach erneut.
