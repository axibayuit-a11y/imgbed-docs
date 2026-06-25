# Authentifizierung und Verwaltung angemeldeter Geräte

Die Authentifizierungsverwaltung und die Verwaltung angemeldeter Geräte schützen den ImgBed-Administrationsbereich, den öffentlichen Upload-Einstieg und den WebDAV-Zugriff.

Auf dieser Seite können Sie Zugangsdaten festlegen, angemeldete Geräte prüfen und alte Sitzungen bei Bedarf widerrufen.

## Wo Sie es konfigurieren

Öffnen Sie den Administrationsbereich und gehen Sie zu:

```text
System Settings -> Security Settings
```

Die Seite enthält zwei Hauptbereiche:

- Authentifizierungsverwaltung
- Verwaltung angemeldeter Geräte

![Authentifizierungsverwaltung](../../image/Safety/认证管理界面.png)

## Was die Authentifizierungsverwaltung macht

Die Authentifizierungsverwaltung speichert Zugangsdaten.

Es gibt zwei Arten:

- Benutzerseitige Authentifizierung
- Administratorseitige Authentifizierung

## Benutzerseitige Authentifizierung

Die benutzerseitige Authentifizierung ist das Upload-Passwort.

Nachdem ein Upload-Passwort gesetzt wurde, müssen normale Besucher es eingeben, bevor sie die Upload-Seite nutzen können. Das ist nützlich, wenn die öffentliche Upload-Seite nicht für alle offen sein soll.

![Benutzer-Anmeldeseite](../../image/Safety/用户端登录界面.png)

### Upload-Passwort festlegen

Wenn ein Upload-Passwort konfiguriert ist:

- Besucher müssen das Passwort eingeben, bevor sie die Upload-Seite nutzen.
- Uploads sind erst möglich, nachdem das Passwort akzeptiert wurde.
- Wenn benutzerseitige Gerätesitzungen aktiviert sind, zeichnet ImgBed dieses benutzerseitige Gerät auf.

Eine Änderung des Upload-Passworts macht alte benutzerseitige Sitzungen ungültig. Besucher müssen das neue Passwort erneut eingeben.

## Administratorseitige Authentifizierung

Die administratorseitige Authentifizierung verwendet einen Administrator-Benutzernamen und ein Passwort.

Sie schützt den Administrationsbereich. Für den produktiven Einsatz sollte sie immer konfiguriert werden.

![Administrator-Anmeldeseite](../../image/Safety/管理端登录界面.png)

### Administrator-Zugangsdaten festlegen

Wenn ein Administrator-Benutzername und ein Passwort konfiguriert sind:

- Der Administrationsbereich erfordert eine Anmeldung.
- Eine erfolgreiche Anmeldung erstellt einen Administrationsgeräte-Eintrag.
- In der Verwaltung angemeldeter Geräte können Sie Geräte prüfen, bereinigen oder zwangsweise abmelden.

Eine Änderung des Administrator-Benutzernamens oder Passworts macht alte Administratorsitzungen ungültig. Sie müssen sich erneut anmelden.

## Was die Verwaltung angemeldeter Geräte macht

Die Verwaltung angemeldeter Geräte zeigt Geräte an, die sich angemeldet haben.

Sie hilft Ihnen zu prüfen:

- Welche Geräte auf den Administrationsbereich zugegriffen haben.
- Welche Geräte auf die benutzerseitige Upload-Seite zugegriffen haben.
- Welche WebDAV-Clients verbunden waren.
- Ob eine Gerätesitzung noch gültig ist.
- Ob alte Geräte zwangsweise abgemeldet werden sollten.

Die Seite hat drei Registerkarten:

- Admin
- Benutzer
- WebDAV

## Globale Cookie-Sicherheit

Oben in der Verwaltung angemeldeter Geräte können Sie das globale Cookie-Verhalten konfigurieren.

### Lebensdauer des Benutzer-Cookies

Legt fest, wie viele Tage eine benutzerseitige Anmeldung aktiv bleiben kann.

Wenn sie zum Beispiel auf 14 Tage gesetzt ist, müssen Besucher das Upload-Passwort in der Regel innerhalb von 14 Tagen nicht erneut eingeben.

### Lebensdauer des Admin-Cookies

Legt fest, wie viele Tage eine Administratoranmeldung aktiv bleiben kann.

Wenn sie zum Beispiel auf 14 Tage gesetzt ist, müssen Administratoren sich in der Regel innerhalb von 14 Tagen nicht erneut anmelden.

### Secure-Modus

Wenn der Secure-Modus aktiviert ist, senden Webclients Anmelde-Cookies nur über HTTPS.

Aktivieren Sie ihn für produktive HTTPS-Websites. Aktivieren Sie ihn nicht für lokale HTTP-Tests, sonst kann das Verhalten auftreten, dass die Anmeldung erfolgreich ist, Sie nach dem Aktualisieren aber wieder abgemeldet sind.

## Administrator-Anmeldegeräte

Die Registerkarte Admin zeigt Geräte, die sich im Administrationsbereich angemeldet haben.

Geräteeinträge erscheinen erst, nachdem Administrator-Zugangsdaten konfiguriert wurden und der Administrationsbereich über die Anmeldung betreten wurde.

Jede Gerätekarte kann Folgendes anzeigen:

- Geräte- und Clientinformationen
- IP der ersten Anmeldung
- IP der letzten Aktivität
- Anmeldezeit
- Zeit der letzten Aktivität
- Ablaufzeit
- Aktueller Status

Wenn Sie ein unbekanntes Gerät sehen, verwenden Sie "Zwangsweise abmelden", um es ungültig zu machen.

## Alte Geräte bereinigen

"Alte Geräte bereinigen" entfernt alte Anmeldeeinträge in der aktuellen Registerkarte gesammelt.

Nutzen Sie diese Funktion, wenn Sie vermuten, dass alte Sitzungen auf anderen Geräten noch aktiv sein könnten.

## Zwangsweise abmelden

"Zwangsweise abmelden" macht eine einzelne Gerätesitzung ungültig.

Nach einer zwangsweisen Abmeldung:

- Administrationsgeräte müssen sich erneut anmelden.
- Benutzerseitige Geräte müssen das Upload-Passwort erneut eingeben.
- WebDAV-Clients müssen sich erneut authentifizieren.

Abgelaufene oder ungültige Geräte können ebenfalls entfernt werden.

## Aktuelles Gerät abmelden

Die aktuelle Gerätekarte ist mit "Aktuelles Gerät" markiert.

Nach dem Abmelden des aktuellen Geräts:

- Die aktuelle Administratorsitzung wird abgemeldet.
- Die aktuelle benutzerseitige Sitzung wird abgemeldet.

Sie müssen sich erneut anmelden, bevor Sie diesen Bereich weiter nutzen können.

