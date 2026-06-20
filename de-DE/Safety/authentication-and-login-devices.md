# Authentifizierung und angemeldete Geräte verwalten

Die Authentifizierungsverwaltung zeigt Anmeldungen, aktive Sitzungen und Geräte, die im Adminbereich oder auf Benutzerseiten angemeldet sind.

## Administrator-Login

Administratoren melden sich über die Login-Seite des Panels an, um Dateien und Einstellungen zu verwalten.

![Administrator-Login](../../image/Safety/管理端登录界面.png)

Das Administratorkonto hat weitreichende Rechte. Schütze die Zugangsdaten sorgfältig.

## Benutzer-Login

Auch für Benutzer gibt es eine Login-Seite.

![Benutzer-Login](../../image/Safety/用户端登录界面.png)

Wenn öffentliche Uploads oder eingeschränkter Zugriff genutzt werden, hilft der Benutzer-Login dabei, Aktionen Personen zuzuordnen.

## Authentifizierungsübersicht

Die Verwaltungsseite zeigt Sitzungen und angemeldete Geräte.

![Authentifizierungsverwaltung](../../image/Safety/认证管理界面.png)

## Geräte prüfen

| Feld | Beschreibung |
| --- | --- |
| Angemeldetes Gerät | Geräte mit aktiver Sitzung |
| IP / Standort | Hinweis zur Herkunft des Zugriffs |
| Letzter Zugriff | Zeigt, ob das Gerät noch genutzt wird |
| Widerrufen | Beendet alte oder verdächtige Sitzungen |

## Bei verdächtigen Sitzungen

1. Widerrufe die Sitzung des Geräts.
2. Ändere Administratorpasswort und zugehörige Tokens.
3. Prüfe Zugangsdaten für Cloudflare, GitHub und Speicherkanäle.
4. Erstelle API Tokens bei Bedarf neu.

## Betriebshinweise

- Auf gemeinsam genutzten Rechnern keine Sitzung offen lassen.
- Nur wenige Konten mit Administratorrechten behalten.
- Angemeldete Geräte regelmäßig prüfen.
- Alte oder unbekannte Sitzungen entfernen.
