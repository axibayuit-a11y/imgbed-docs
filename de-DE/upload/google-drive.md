# Google-Drive-Kanal hinzufügen

## Was Sie vorher benötigen

Bereite vor dem Start diese Dinge vor:

| Voraussetzung | Wofür sie gebraucht wird |
| --- | --- |
| Google-Konto | Für Google Cloud und die Autorisierung von Google Drive |
| Google-Cloud-Projekt | Aktiviert die Drive API und erstellt OAuth-Zugangsdaten |
| OAuth-2.0-Client | Damit ImgBed `Client ID`, `Client Secret` und `Refresh Token` erhalten kann |
| Ihre ImgBed-Domain | Für die OAuth-Redirect-URI. Sie muss zur tatsächlich genutzten Domain passen. |

## Einrichtung

### Schritt 1: Google Drive API aktivieren

1. Öffnen Sie die Google Cloud Console.
2. Erstellen Sie ein neues Projekt oder wählen Sie ein bestehendes aus.
3. Gehen Sie zu `APIs & Services`.
4. Klicken Sie auf `Enable APIs and Services`.
5. Suchen Sie nach `Google Drive API`.
6. Öffnen Sie sie und aktivieren Sie sie.

### Schritt 2: OAuth-Zustimmungsbildschirm konfigurieren

1. Öffnen Sie in Google Cloud die `Google Auth Platform`.
2. Füllen Sie die grundlegenden Angaben unter `Branding` aus, z. B. App-Name, Support-E-Mail und Entwicklerkontakt.
3. Öffnen Sie `Audience`.
4. Für die meisten selbst betriebenen privaten Installationen passt `External`.
5. Wenn Sie `External` wählen, fügen Sie unter `Test users` das Google-Konto hinzu, das Sie autorisieren möchten.
6. Öffnen Sie `Data Access`.
7. Fügen Sie die benötigten Google-Drive-Berechtigungen hinzu.

### Schritt 3: OAuth-2.0-Client erstellen

1. Öffnen Sie in der `Google Auth Platform` den Bereich `Clients`.
2. Erstellen Sie einen neuen Client.
3. Setzen Sie den Anwendungstyp auf `Web application`.
4. Geben Sie dem Client einen gut erkennbaren Namen.
5. Tragen Sie bei den autorisierten JavaScript-Ursprüngen Ihre ImgBed-URL ein, zum Beispiel:

```text
https://img.example.com
```

6. Tragen Sie bei den autorisierten Redirect-URIs ein:

```text
https://img.example.com/api/oauth/google/callback
```

![OAuth-Client erstellen](../../image/upload/google-drive/oa客户端id创建.png)

![Domain und Callback-URL eintragen](../../image/upload/google-drive/填写oa客户端url信息.png)

Nach dem Erstellen kopieren Sie diese Werte:

| Erstellter Wert | ImgBed-Feld |
| --- | --- |
| Client ID | `Client ID` |
| Client Secret | `Client Secret` |

## Schritt 4: Google-Drive-Kanal ausfüllen

Wählen Sie in den Upload-Einstellungen `Google Drive` und füllen Sie die Felder aus:

| ImgBed-Feld | Eingabe |
| --- | --- |
| Kanalname | Ein gut erkennbarer Name, z. B. `Main Google Drive` |
| Client ID | Die Client ID aus Google Cloud |
| Client Secret | Das Client Secret aus Google Cloud |
| Refresh Token | Erst einmal leer lassen. Das Token holst Sie im nächsten Schritt. |
| Stammverzeichnis | Optional. Standard ist `imgbed`. |

![Client-Daten in ImgBed eintragen](../../image/upload/google-drive/粘贴回添加新渠道配置.png)

## Schritt 5: Refresh Token abrufen

1. Klicken Sie auf `Get Token`.
2. Wählen Sie das Google-Konto aus, das Sie verbinden möchten.
3. Schließe die Autorisierung ab.
4. Die Callback-Seite zeigt ein `Refresh Token`.
5. Kopieren Sie es.
6. Kehren Sie zu ImgBed zurück und fügen Sie es in das Feld `Refresh Token` ein.

![Refresh Token nach Autorisierung kopieren](../../image/upload/google-drive/授权完复制token.png)

Wenn Sie später das Google-Konto wechselst, den OAuth-Client änderst oder die alte Autorisierung abläuft, müssen Sie den Kanal nicht löschen. Öffnen Sie die Bearbeitungsseite und klicken Sie auf `Reauthorize`.

## Schritt 6: Kanal speichern

Speichern Sie den Kanal, sobald alle Felder ausgefüllt sind.

## Kurzablauf

```text
Open Google Cloud
-> Create or select a project
-> Enable Google Drive API
-> Configure Google Auth Platform
-> If Audience is External, add your Google account to Test users
-> Create a Web application OAuth client
-> Use https://your-domain.com/api/oauth/google/callback as the redirect URI
-> Fill Client ID and Client Secret into ImgBed
-> Click Get Token
-> Sign in with Google and authorize
-> Copy the Refresh Token from the callback page
-> Paste it back into ImgBed and save
-> Upload a test image
```

## Referenzen

1. Google OAuth Web Server Applications: https://developers.google.com/identity/protocols/oauth2/web-server
2. Google Workspace OAuth Consent Configuration: https://developers.google.com/workspace/guides/configure-oauth-consent
3. Google Drive API Auth Scopes: https://developers.google.com/workspace/drive/api/guides/api-specific-auth
