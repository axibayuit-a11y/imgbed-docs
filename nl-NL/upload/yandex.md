# Een Yandex-kanaal toevoegen

## Wat je vooraf nodig hebt

| Vereiste | Waarom je dit nodig hebt |
| --- | --- |
| Yandex-account | Voor aanmelden en autoriseren van Yandex Disk |
| Yandex OAuth-app | Voor het genereren van `Client ID` en `Client Secret` |
| Je ImgBed-domein | Voor de OAuth-redirect-URI |
| Beschikbare Yandex Disk-opslag | De daadwerkelijke opslaglocatie voor bestanden |

## Instellen

### Stap 1: Maak een Yandex OAuth-app

1. Open de pagina voor het maken van een Yandex OAuth-app:

```text
https://oauth.yandex.com/client/new
```

2. Word je doorgestuurd om in te loggen, meld je dan eerst aan met je Yandex-account.
3. Maak een nieuwe app.
4. Geef de app een herkenbare naam, bijvoorbeeld `imgbed-yandex`.
5. Zoek de callback- of redirect-URL-instellingen.
6. Vul in:

```text
https://your-domain.com/api/oauth/yandex/callback
```

### Stap 2: Controleer rechten

Voor de huidige Yandex-integratie van ImgBed houd je onder `Yandex.Disk REST API` deze vier rechten aan:

| Recht | Doel |
| --- | --- |
| `cloud_api:disk.app_folder` | Laat ImgBed bestanden opslaan in de appmap |
| `cloud_api:disk.read` | Leest bestanden en downloadlinks |
| `cloud_api:disk.write` | Uploadt bestanden, maakt mappen en verwijdert bestanden |
| `Access to information about Yandex.Disk` | Leest diskquota en gebruikte ruimte |

Zie je onder `Yandex ID API` ook deze rechten, dan zijn ze optioneel:

| Rechttekst | Aanbeveling |
| --- | --- |
| `Access to username, first name and surname, gender` | Optioneel |
| `Access to email address` | Optioneel |

Uploaden, downloaden, verwijderen en quota werken vooral op basis van de vier `Yandex.Disk REST API`-rechten hierboven.

![Yandex Disk-rechten instellen](../../image/upload/yandex/dataaccess配置软盘权限.png)

### Stap 3: Kopieer appgegevens

Kopieer na het aanmaken van de app:

| Yandex-veld | ImgBed-veld |
| --- | --- |
| `Client ID` | `Client ID` |
| `Client Secret` | `Client Secret` |

![Client ID en Secret noteren](../../image/upload/yandex/记录客户端id和secret.png)

### Stap 4: Vul het Yandex-kanaal in

Kies in Uploadinstellingen `Yandex` en vul in:

| ImgBed-veld | Wat je invult |
| --- | --- |
| Kanaalnaam | Een herkenbare naam, bijvoorbeeld `Main Yandex` |
| Client ID | De Yandex-app `Client ID` |
| Client Secret | De Yandex-app `Client Secret` |
| Refresh Token | Laat voorlopig leeg |
| Hoofdmap | Optioneel. Standaard `imgbed`. |

![Kanaalconfiguratie bewerken](../../image/upload/yandex/编辑配置渠道.png)

### Stap 5: Haal het Refresh Token op

1. Klik in ImgBed op `Get Token`.
2. Meld je aan met het Yandex-account dat je wilt koppelen.
3. Keur de autorisatie goed.
4. De callbackpagina toont een `Refresh Token`.
5. Kopieer het.
6. Ga terug naar ImgBed en plak het in `Refresh Token`.

![Refresh Token na autorisatie kopiëren](../../image/upload/yandex/授权后复制刷新令牌.png)

### Stap 6: Sla het kanaal op

Sla het kanaal op zodra alle velden zijn ingevuld.

## Snelle flow

```text
Open Yandex OAuth Console
-> Maak een app
-> Voeg https://your-domain.com/api/oauth/yandex/callback toe
-> Controleer Yandex Disk-rechten
-> Kopieer Client ID en Client Secret
-> Vul Client ID / Client Secret in ImgBed in
-> Klik Get Token
-> Kopieer het Refresh Token van de callbackpagina
-> Plak het terug in ImgBed en sla op
```

## Referenties

1. Yandex-app registreren: https://yandex.com/dev/id/doc/en/register-client
2. Authorization code via URL ophalen: https://yandex.com/dev/id/doc/en/codes/code-url
3. Yandex OAuth token endpoint: https://yandex.com/dev/id/doc/en/tokens/token
