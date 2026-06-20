# Een OneDrive-kanaal toevoegen

## Wat je vooraf nodig hebt

| Vereiste | Waarom je dit nodig hebt |
| --- | --- |
| Microsoft-account | Voor toegang tot Microsoft-beheerpagina's en autorisatie van OneDrive |
| Je ImgBed-domein | Voor de OAuth-callback-URL |
| Appregistratie | Voor het genereren van `Client ID` en `Client Secret` |
| OneDrive-account | De daadwerkelijke opslaglocatie voor bestanden |

## Instellen

### Stap 1: Open Microsoft Entra ID

1. Open `portal.azure.com`.
2. Zoek bovenaan naar `Microsoft Entra ID`.
3. Staat de doelpagina niet in de lijst, kies dan:

```text
Continue searching in Microsoft Entra ID
```

4. Open `Microsoft Entra ID`.
5. Open `App registrations`.
6. Klik op `New registration`.

### Stap 2: Registreer een app

Vul op de pagina `New registration` het volgende in:

| Veld | Wat je invult |
| --- | --- |
| Name | Een herkenbare naam, bijvoorbeeld `imgbed-onedrive` |
| Supported account types | Kies op basis van de tabel hieronder |
| Redirect URI type | `Web` |
| Redirect URI | `https://your-domain.com/api/oauth/onedrive/callback` |

Richtlijn voor accounttype:

| Situatie | Supported Account Types |
| --- | --- |
| Alleen persoonlijke OneDrive | Kies de optie voor persoonlijke Microsoft-accounts. |
| Persoonlijke en werk-/schoolaccounts | Kies de optie die persoonlijke en organisatieaccounts ondersteunt. |
| Alleen zakelijke of school-OneDrive | Kies de optie voor organisatieaccounts. |

Klik na het invullen op registreren.

![OneDrive-app maken](../../image/upload/onedrive/添加应用程序注册.png)

### Stap 3: Kopieer appgegevens

Kopieer na het aanmaken deze waarden van de overzichtspagina:

| Microsoft-veld | ImgBed-veld |
| --- | --- |
| `Application (client) ID` | `Client ID` |
| `Directory (tenant) ID` | `Tenant ID` voor organisatieaccounts |

![Application- en tenant-ID](../../image/upload/onedrive/应用程序ID和目录租户ID位.png)

### Stap 4: Maak een Client Secret

1. Open `Certificates & secrets`.
2. Klik op `New client secret`.
3. Vul een herkenbare omschrijving in.
4. Kies een verloopperiode.
5. Kopieer de `Value` direct nadat deze is aangemaakt.

![Client Secret Value bewaren](../../image/upload/onedrive/保存客户端密码值.png)

### Stap 5: Voeg API-rechten toe

1. Open `API permissions`.
2. Klik op `Add a permission`.
3. Kies `Microsoft Graph`.
4. Kies `Delegated permissions`.
5. Voeg deze rechten toe:

| Recht | Doel |
| --- | --- |
| `Files.ReadWrite.All` | Bestanden uploaden, mappen maken en bestanden verwijderen |
| `offline_access` | Laat ImgBed een `Refresh Token` ophalen |
| `User.Read` | Leest account- en quotainformatie |

### Stap 6: Vul het OneDrive-kanaal in

Kies in Uploadinstellingen `OneDrive` en vul in:

| ImgBed-veld | Wat je invult |
| --- | --- |
| Kanaalnaam | Een herkenbare naam, bijvoorbeeld `Main OneDrive` |
| Client ID | De Microsoft `Application (client) ID` |
| Client Secret | De gekopieerde `Client Secret Value` |
| Tenant ID | Gebruik de tabel hieronder |
| Refresh Token | Laat voorlopig leeg |
| Hoofdmap | Optioneel. Standaard `imgbed`. |
| Notitie | Optioneel |

![OneDrive-kanaalconfiguratie invullen](../../image/upload/onedrive/添加新渠道配置.png)

Zo vul je `Tenant ID` in:

| Gekozen accounttype | ImgBed `Tenant ID` |
| --- | --- |
| Persoonlijke accounts | `consumers` |
| Persoonlijke en organisatieaccounts | `common` |
| Alleen huidige organisatie | De `Directory (tenant) ID` |

### Stap 7: Haal het Refresh Token op

1. Klik in ImgBed op `Get Token`.
2. Meld je aan met het Microsoft-account dat je wilt koppelen.
3. Keur de autorisatie goed.
4. De callbackpagina toont een `Refresh Token`.
5. Kopieer het.
6. Ga terug naar ImgBed en plak het in het veld `Refresh Token`.

![Refresh Token kopiëren](../../image/upload/onedrive/复制刷新令牌.png)

### Stap 8: Sla het kanaal op

Sla het kanaal op zodra alle velden zijn ingevuld.

## Snelle flow

```text
Open portal.azure.com
-> Zoek Microsoft Entra ID
-> Open App registrations
-> Registreer een nieuwe app
-> Vul Name / Supported account types / Web redirect URI in
-> Registreer
-> Kopieer Application (client) ID
-> Controleer de callback-URL bij Authentication
-> Maak een Client Secret in Certificates & secrets
-> Voeg rechten toe bij API permissions
-> Vul Client ID / Client Secret / Tenant ID in ImgBed in
-> Klik Get Token
-> Kopieer het Refresh Token van de callbackpagina
-> Plak het in ImgBed en sla op
```

## Referenties

1. Microsoft Entra appregistratie: https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-register-app
2. Microsoft identity platform authorization code flow: https://learn.microsoft.com/en-us/entra/identity-platform/v2-oauth2-auth-code-flow
3. Microsoft Graph user authentication: https://learn.microsoft.com/en-us/graph/auth-v2-user
