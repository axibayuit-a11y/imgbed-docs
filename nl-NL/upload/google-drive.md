# Een Google Drive-kanaal toevoegen

## Wat je vooraf nodig hebt

Bereid deze zaken voor:

| Vereiste | Waarom je dit nodig hebt |
| --- | --- |
| Google-account | Voor toegang tot Google Cloud en autorisatie van Google Drive |
| Google Cloud-project | Voor het inschakelen van de Drive API en het maken van OAuth-gegevens |
| OAuth 2.0-client | Hiermee kan ImgBed `Client ID`, `Client Secret` en `Refresh Token` ophalen |
| Je ImgBed-domein | Voor de OAuth-redirect-URI. Dit moet overeenkomen met het domein dat je echt gebruikt. |

## Instellen

### Stap 1: Schakel de Google Drive API in

1. Open Google Cloud Console.
2. Maak een nieuw project of selecteer een bestaand project.
3. Ga naar `APIs & Services`.
4. Klik op `Enable APIs and Services`.
5. Zoek naar `Google Drive API`.
6. Open deze en klik op inschakelen.

### Stap 2: Configureer het OAuth-toestemmingsscherm

1. Open in Google Cloud `Google Auth Platform`.
2. Vul de basisinformatie in bij `Branding`, zoals appnaam, supportmail en ontwikkelaarcontact.
3. Open `Audience`.
4. Voor de meeste persoonlijke self-hosted installaties kies je `External`.
5. Kies je `External`, voeg dan bij `Test users` het Google-account toe dat je wilt autoriseren.
6. Open `Data Access`.
7. Voeg de benodigde Google Drive-rechten toe.

### Stap 3: Maak een OAuth 2.0-client

1. Open in `Google Auth Platform` de sectie `Clients`.
2. Maak een nieuwe client.
3. Zet het toepassingstype op `Web application`.
4. Geef de client een herkenbare naam.
5. Vul bij authorized JavaScript origins je ImgBed-URL in, bijvoorbeeld:

```text
https://img.example.com
```

6. Vul bij authorized redirect URIs in:

```text
https://img.example.com/api/oauth/google/callback
```

![OAuth-client maken](../../image/upload/google-drive/oa客户端id创建.png)

![Domein en callback-URL invullen](../../image/upload/google-drive/填写oa客户端url信息.png)

Kopieer na het aanmaken deze waarden:

| Gegenereerde waarde | ImgBed-veld |
| --- | --- |
| Client ID | `Client ID` |
| Client Secret | `Client Secret` |

## Stap 4: Vul het Google Drive-kanaal in

Kies in Uploadinstellingen `Google Drive` en vul in:

| ImgBed-veld | Wat je invult |
| --- | --- |
| Kanaalnaam | Een herkenbare naam, bijvoorbeeld `Main Google Drive` |
| Client ID | De Client ID uit Google Cloud |
| Client Secret | Het Client Secret uit Google Cloud |
| Refresh Token | Laat voorlopig leeg. Dit haal je in de volgende stap op. |
| Hoofdmap | Optioneel. Standaard `imgbed`. |

![Clientgegevens in ImgBed invullen](../../image/upload/google-drive/粘贴回添加新渠道配置.png)

## Stap 5: Haal het Refresh Token op

1. Klik op `Get Token`.
2. Kies het Google-account dat je wilt koppelen.
3. Rond de autorisatiestappen af.
4. De callbackpagina toont een `Refresh Token`.
5. Kopieer het.
6. Ga terug naar ImgBed en plak het in `Refresh Token`.

![Refresh Token na autorisatie kopiëren](../../image/upload/google-drive/授权完复制token.png)

Als je later van Google-account wisselt, de OAuth-client verandert of de oude autorisatie verloopt, hoef je het kanaal niet te verwijderen. Open de bewerkpagina en klik op `Reauthorize`.

## Stap 6: Sla het kanaal op

Sla het kanaal op zodra alle velden zijn ingevuld.

## Snelle flow

```text
Open Google Cloud
-> Maak of selecteer een project
-> Schakel Google Drive API in
-> Configureer Google Auth Platform
-> Voeg bij Audience = External je Google-account toe aan Test users
-> Maak een OAuth-client van het type Web application
-> Gebruik https://your-domain.com/api/oauth/google/callback als redirect URI
-> Vul Client ID en Client Secret in ImgBed in
-> Klik Get Token
-> Log in met Google en autoriseer
-> Kopieer het Refresh Token van de callbackpagina
-> Plak het in ImgBed en sla op
-> Upload een testafbeelding
```

## Referenties

1. Google OAuth Web Server Applications: https://developers.google.com/identity/protocols/oauth2/web-server
2. Google Workspace OAuth Consent Configuration: https://developers.google.com/workspace/guides/configure-oauth-consent
3. Google Drive API Auth Scopes: https://developers.google.com/workspace/drive/api/guides/api-specific-auth
