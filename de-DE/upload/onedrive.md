# OneDrive-Kanal hinzufügen

## Was Sie vorher benötigen

| Voraussetzung | Wofür sie gebraucht wird |
| --- | --- |
| Microsoft-Konto | Für Microsoft-Verwaltungsseiten und die OneDrive-Autorisierung |
| Ihre ImgBed-Domain | Für die OAuth-Callback-URL |
| App-Registrierung | Erstellt `Client ID` und `Client Secret` |
| OneDrive-Konto | Dient als eigentlicher Speicherort |

## Einrichtung

### Schritt 1: Microsoft Entra ID öffnen

1. Öffnen Sie `portal.azure.com`.
2. Suchen Sie oben nach `Microsoft Entra ID`.
3. Falls die Zielseite nicht direkt angezeigt wird, wählen Sie:

```text
Continue searching in Microsoft Entra ID
```

4. Öffnen Sie `Microsoft Entra ID`.
5. Öffnen Sie `App registrations`.
6. Klicken Sie auf `New registration`.

### Schritt 2: App registrieren

Füllen Sie auf der Seite `New registration` diese Felder aus:

| Feld | Eingabe |
| --- | --- |
| Name | Ein gut wiedererkennbarer Name, z. B. `imgbed-onedrive` |
| Supported account types | Wählen Sie passend zur Tabelle unten |
| Redirect URI type | `Web` |
| Redirect URI | `https://your-domain.com/api/oauth/onedrive/callback` |

Orientierung für den Kontotyp:

| Ihr Szenario | Supported Account Types |
| --- | --- |
| Nur privates OneDrive | Wählen Sie die Option für persönliche Microsoft-Konten. |
| Private sowie Geschäfts-/Schulkonten | Wählen Sie die Option, die persönliche und Organisationskonten unterstützt. |
| Nur Firmen- oder Schul-OneDrive | Wählen Sie die Option für Organisationskonten. |

Klicken Sie nach dem Ausfüllen auf Registrieren.

![OneDrive-App erstellen](../../image/upload/onedrive/添加应用程序注册.png)

### Schritt 3: App-Informationen kopieren

Nach dem Erstellen der App kopieren Sie auf der Übersichtsseite diese Werte:

| Microsoft-Feld | ImgBed-Feld |
| --- | --- |
| `Application (client) ID` | `Client ID` |
| `Directory (tenant) ID` | `Tenant ID` für Organisationskonten |

![Application- und Tenant-ID](../../image/upload/onedrive/应用程序ID和目录租户ID位.png)

### Schritt 4: Client Secret erstellen

1. Öffnen Sie `Certificates & secrets`.
2. Klicken Sie auf `New client secret`.
3. Geben Sie eine Beschreibung ein, die Sie später wiedererkennen.
4. Wählen Sie eine Laufzeit.
5. Kopieren Sie den `Value` sofort nach dem Erstellen.

![Client-Secret-Wert speichern](../../image/upload/onedrive/保存客户端密码值.png)

### Schritt 5: API-Berechtigungen hinzufügen

1. Öffnen Sie `API permissions`.
2. Klicken Sie auf `Add a permission`.
3. Wählen Sie `Microsoft Graph`.
4. Wählen Sie `Delegated permissions`.
5. Fügen Sie diese Berechtigungen hinzu:

| Berechtigung | Zweck |
| --- | --- |
| `Files.ReadWrite.All` | Dateien hochladen, Ordner anlegen und Dateien löschen |
| `offline_access` | Erlaubt ImgBed, ein `Refresh Token` zu erhalten |
| `User.Read` | Liest Konto- und Quoteninformationen |

### Schritt 6: OneDrive-Kanal ausfüllen

Wählen Sie in den Upload-Einstellungen `OneDrive` und füllen Sie die Felder aus:

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

So füllen Sie `Tenant ID` aus:

| Gewählter Kontotyp | ImgBed-`Tenant ID` |
| --- | --- |
| Persönliche Konten | `consumers` |
| Persönliche und Organisationskonten | `common` |
| Nur aktuelle Organisation | Die `Directory (tenant) ID` |

### Schritt 7: Refresh Token abrufen

1. Klicken Sie in ImgBed auf `Get Token`.
2. Melden Sie sich mit dem Microsoft-Konto an, das Sie verbinden möchten.
3. Bestätigen Sie die Autorisierung.
4. Auf der Callback-Seite erscheint ein `Refresh Token`.
5. Kopieren Sie es.
6. Kehren Sie zu ImgBed zurück und fügen Sie es in das Feld `Refresh Token` ein.

![Refresh Token kopieren](../../image/upload/onedrive/复制刷新令牌.png)

### Schritt 8: Kanal speichern

Speichern Sie den Kanal, sobald alle Felder ausgefüllt sind.

## Kurzablauf

```text
Open portal.azure.com
-> Search for Microsoft Entra ID
-> Open App registrations
-> Register a new app
-> Fill Name / Supported account types / Web redirect URI
-> Register
-> Copy Application (client) ID
-> Check the callback URL in Authentication
-> Create a Client Secret in Certificates & secrets
-> Add permissions in API permissions
-> Fill Client ID / Client Secret / Tenant ID into ImgBed
-> Click Get Token
-> Copy the Refresh Token from the callback page
-> Paste it back into ImgBed and save
```

## Referenzen

1. Microsoft Entra App-Registrierung: https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-register-app
2. Authorization-Code-Flow der Microsoft Identity Platform: https://learn.microsoft.com/en-us/entra/identity-platform/v2-oauth2-auth-code-flow
3. Microsoft Graph Benutzerauthentifizierung: https://learn.microsoft.com/en-us/graph/auth-v2-user
