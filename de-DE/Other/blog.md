# Blog verwenden

Mit der Blog-Funktion fügst du deiner ImgBed-Seite eine eigenständige Blog-Seite hinzu.

Nach dem Aktivieren ist sie unter dieser Adresse erreichbar:

```text
https://deine-domain/blog/
```

![Blog-Startseite](../../image/other/博客/博客首页.png)

Der Blog basiert auf dem Open-Source-Projekt [LyraVoid/Mizuki](https://github.com/LyraVoid/Mizuki) und wurde für ImgBed mit Vue neu eingebunden.

## Wo einstellen

```text
Systemeinstellungen -> Weitere Einstellungen -> Blog
```

![Blog-Einstellungen](../../image/other/博客/QQ20260611-221702.png)

## Ersteinrichtung

1. Aktiviere `Aktivieren`.
2. Wähle das GitHub-Konto aus, in dem die Blog-Konfiguration gespeichert werden soll.
3. Klicke auf `Blog aktualisieren`.
4. Warte auf die Erfolgsmeldung.
5. Öffne `https://deine-domain/blog/` und prüfe das Ergebnis.

Beim ersten Start legt ImgBed im ausgewählten GitHub-Konto ein privates Repository an:

```text
imgbed-blog-config
```

Darin werden Blog-Einstellungen und Beiträge gespeichert.

## Beiträge schreiben

Beiträge bearbeitest du im privaten GitHub-Repository:

```text
imgbed-blog-config
```

Typischer Ablauf:

1. Öffne GitHub.
2. Gehe in das Repository `imgbed-blog-config`.
3. Erstelle oder bearbeite Beitragsdateien.
4. Committe die Änderungen.
5. Kehre zum ImgBed-Adminbereich zurück und klicke auf `Blog aktualisieren`. Alternativ kannst du im Blog oben links dreimal auf das Logo klicken, um eine Aktualisierung auszulösen.

`Blog aktualisieren` überschreibt keine bereits geschriebenen Beiträge. Die Aktion dient vor allem zum Initialisieren des Repositories und zum Aktualisieren des Caches.

## Unterstützte Funktionen

Der Blog unterstützt Beitragslisten, Kategorien, Tags, Archive, Suche, Dark Mode und Sprachwechsel.

Kommentare und Besuchsstatistiken sind ebenfalls verfügbar.

![Blog-Kommentare](../../image/other/博客/支持留言.png)

Kommentare erscheinen unter dem jeweiligen Beitrag. Besucher können Avatar, Anzeigename, E-Mail-Adresse und Kommentartext angeben.

Die Statistik zeigt Seitenaufrufe von Beiträgen und Besuche der Website.

## Adresse

Der Blog liegt immer unter `/blog/`.

Wenn deine ImgBed-Domain so aussieht:

```text
https://image.example.com
```

dann lautet die Blog-Adresse:

```text
https://image.example.com/blog/
```

Wenn du den Blog deaktivierst, können Besucher diese Seite nicht mehr öffnen.
