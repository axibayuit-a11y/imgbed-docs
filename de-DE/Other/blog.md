# Blog

Die Blog-Funktion fügt Ihrer ImgBed-Seite eine eigenständige Blog-Seite hinzu.

Nach der Aktivierung können Besucher sie hier öffnen:

```text
https://your-domain.com/blog/
```

![Blog-Startseite](../../image/other/博客/博客首页.png)

Der Blog wurde aus dem Open-Source-Projekt [LyraVoid/Mizuki](https://github.com/LyraVoid/Mizuki) angepasst. ImgBed schreibt ihn neu und integriert ihn mit Vue, damit er als Teil der Bildhosting-Seite ausgeführt werden kann.

## Wo er konfiguriert wird

Die Blog-Einstellungen befinden sich unter:

```text
System Settings -> Other Settings -> Blog
```

![Blog-Einstellungen](../../image/other/博客/QQ20260611-221702.png)

## Ersteinrichtung

1. Aktivieren Sie `Enable`.
2. Wählen Sie das GitHub-Konto aus, in dem die Blog-Konfiguration gespeichert werden soll.
3. Klicken Sie auf `Update Blog`.
4. Warten Sie auf die Erfolgsmeldung.
5. Öffnen Sie `https://your-domain.com/blog/`, um den Blog anzuzeigen.

Bei der ersten Verwendung legt ImgBed im ausgewählten GitHub-Konto ein privates Repository an:

```text
imgbed-blog-config
```

Dieses Repository speichert Blog-Einstellungen und Beitragsinhalte.

## Beiträge schreiben

Bearbeiten Sie Blog-Beiträge in Ihrem privaten GitHub-Repository:

```text
imgbed-blog-config
```

Typischer Ablauf:

1. Öffnen Sie GitHub.
2. Wechseln Sie in das private Repository `imgbed-blog-config`.
3. Bearbeiten Sie Beitragsdateien oder fügen Sie neue hinzu.
4. Committen Sie die Änderungen.
5. Kehren Sie zum ImgBed-Adminbereich zurück und klicken Sie auf `Update Blog`, oder klicken Sie auf der Blog-Startseite dreimal auf das Logo oben links, um eine Blog-Aktualisierung auszulösen.

`Update Blog` überschreibt keine Inhalte, die Sie geschrieben haben. Die Aktion initialisiert bei Bedarf das Repository und aktualisiert den Zwischenspeicher des Blogs.

## Unterstützte Funktionen

Der Blog unterstützt typische Blog-Funktionen wie Beitragslisten, Kategorien, Tags, Archive, Suche, Dunkelmodus und Sprachwechsel.

Außerdem unterstützt er Kommentare und Besuchsstatistiken.

![Blog-Kommentare](../../image/other/博客/支持留言.png)

Kommentare erscheinen unter den Beiträgen. Besucher können Avatar, Spitzname, E-Mail-Adresse und Kommentartext einreichen.

Besuchsstatistiken zeigen Beitragsaufrufe und Seitenbesuche an und helfen Ihnen, die Zugriffe auf den Blog zu verstehen.

## URL

Der Blog wird immer unter `/blog/` bereitgestellt.

Wenn Ihre ImgBed-Domain zum Beispiel lautet:

```text
https://image.example.com
```

dann lautet die Blog-URL:

```text
https://image.example.com/blog/
```

Nach dem Deaktivieren des Blogs können Besucher die Blog-Seite nicht mehr aufrufen.
