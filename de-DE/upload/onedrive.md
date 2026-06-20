# OneDrive-Kanal hinzufügen

## Was du vorher brauchst

| Voraussetzung | Wofür sie gebraucht wird |
| --- | --- |
| Microsoft-Konto | Für Microsoft-Verwaltungsseiten und die OneDrive-Autorisierung |
| Deine ImgBed-Domain | Für die OAuth-Callback-URL |
| App-Registrierung | Erstellt `Client ID` und `Client Secret` |
| OneDrive-Konto | Dient als eigentlicher Speicherort |

## Einrichtung

### Schritt 1: Microsoft Entra ID öffnen

1. Öffne `portal.azure.com`.
2. Suche oben nach `Microsoft Entra ID`.
3. Falls die Zielseite nicht direkt angezeigt wird, wähle:

```text
Continue searching in Microsoft Entra ID
```

4. Öffne `Microsoft Entra ID`.
5. Öffne `App registrations`.
6. Klicke auf `New registration`.

### Schritt 2: App registrieren

Fülle auf der Seite `New registration` diese Felder aus:

| Feld | Eingabe |
| --- | --- |
| Name | Ein gut wiedererkennbarer Name, z. B. `imgbed-onedrive` |
| Supported account types | Wähle passend zur Tabelle unten |
| Redirect URI type | `Web` |
| Redirect URI | `https://your-domain.com/api/oauth/onedrive/callback` |

Orientierung für den Kontotyp:

| Dein Szenario | Supported Account Types |
| --- | --- |
| Nur privates OneDrive | Wähle die Option für persönliche Microsoft-Konten. |
| Private sowie Geschäfts-/Schulkonten | Wähle die Option, die persönliche und Organisationskonten unterstützt. |
| Nur Firmen- oder Schul-OneDrive | Wähle die Option für Organisationskonten. |

Klicke nach dem Ausfüllen auf Registrieren.

![OneDrive-App erstellen](../../image/upload/onedrive/添加应用程序注册.png)

### Schritt 3: App-Informationen kopieren

Nach dem Erstellen der App kopierst du auf der Übersichtsseite diese Werte:

| Microsoft-Feld | ImgBed-Feld |
| --- | --- |
| `Application (client) ID` | `Client ID` |
| `Directory (tenant) ID` | `Tenant ID` für Organisationskonten |

![Application- und Tenant-ID](../../image/upload/onedrive/应用程序ID和目录租户ID位.png)

### Schritt 4: Client Secret erstellen

1. Öffne `Certificates & secrets`.
2. Klicke auf `New client secret`.
3. Gib eine Beschreibung ein, die du später wiedererkennst.
4. Wähle eine Laufzeit.
5. Kopiere den `Value` sofort nach dem Erstellen.

![Client-Secret-Wert speichern](../../image/upload/onedrive/保存客户端密码值.png)

### Schritt 5: API-Berechtigungen hinzufügen

1. Öffne `API permissions`.
2. Klicke auf `Add a permission`.
3. Wähle `Microsoft Graph`.
4. Wähle `Delegated permissions`.
5. Füge diese Berechtigungen hinzu:

| Berechtigung | Zweck |
| --- | --- |
| `Files.ReadWrite.All` | Dateien hochladen, Ordner anlegen und Dateien löschen |
| `offline_access` | Erlaubt ImgBed, ein `Refresh Token` zu erhalten |
| `User.Read` | Liest Konto- und Quoteninformationen |

### Schritt 6: OneDrive-Kanal ausfüllen

Wähle in den Upload-Einstellungen `OneDrive` und fülle die Felder aus:

| ImgBed-Feld | Eingabe |
| --- | --- |
| Kanalname | Ein gut erkennbarer Name, z. B. `Main OneDrive` |
| Client ID | Die Microsoft `Application (client) ID` |
| Client Secret | Der kopierte `Client Secret Value` |
| Tenant ID | Siehe Tabelle unten |
| Refresh Token | Erst einmal leer lassen |
| Stammverzeichnis | Optional. Standard ist `imgbed`. |
| Notiz | Optional |

![OneDrive-Kanal konfigurieren](../../image/upload/onedrive/添加新渠道配置.png)

So füllst du `Tenant ID` aus:

| Gewählter Kontotyp | ImgBed-`Tenant ID` |
| --- | --- |
| Persönliche Konten | `consumers` |
| Persönliche und Organisationskonten | `common` |
| Nur aktuelle Organisation | Die `Directory (tenant) ID` |

### Schritt 7: Refresh Token abrufen

1. Klicke in ImgBed auf `Get Token`.
2. Melde dich mit dem Microsoft-Konto an, das du verbinden möchtest.
3. Bestätige die Autorisierung.
4. Auf der Callback-Seite erscheint ein `Refresh Token`.
5. Kopiere es.
6. Kehre zu ImgBed zurück und füge es in das Feld `Refresh Token` ein.

![Refresh Token kopieren](../../image/upload/onedrive/复制刷新令牌.png)

### Schritt 8: Kanal speichern

Speichere den Kanal, sobald alle Felder ausgefüllt sind.

## Kurzablauf

```text
portal.azure.com öffnen
-> Microsoft Entra ID suchen
-> App registrations öffnen
-> Neue App registrieren
-> Name / Kontotypen / Web-Redirect-URI ausfüllen
-> Registrieren
-> Application (client) ID kopieren
-> Callback-URL unter Authentication prüfen
-> Client Secret unter Certificates & secrets erstellen
-> Berechtigungen unter API permissions hinzufügen
-> Client ID / Client Secret / Tenant ID in ImgBed eintragen
-> Get Token klicken
-> Refresh Token von der Callback-Seite kopieren
-> In ImgBed einfügen und speichern
```

## Referenzen

1. Microsoft Entra App-Registrierung: https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-register-app
2. Authorization-Code-Flow der Microsoft Identity Platform: https://learn.microsoft.com/en-us/entra/identity-platform/v2-oauth2-auth-code-flow
3. Microsoft Graph Benutzerauthentifizierung: https://learn.microsoft.com/en-us/graph/auth-v2-user
