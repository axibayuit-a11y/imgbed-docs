# Een Dropbox-kanaal toevoegen

## Wat je vooraf nodig hebt

| Vereiste | Waarom je dit nodig hebt |
| --- | --- |
| Dropbox-account | Voor aanmelden en autoriseren van de app |
| Dropbox-app | Voor het genereren van `App Key` en `App Secret` |
| Je ImgBed-domein | Voor de OAuth-redirect-URI |
| Beschikbare Dropbox-opslag | De daadwerkelijke opslaglocatie voor bestanden |

## Instellen

### Stap 1: Maak een Dropbox-app

1. Open de Dropbox App Console:

```text
https://www.dropbox.com/developers/apps
```

2. Maak een nieuwe app.
3. Kies als toegangstype:

```text
App folder
```

4. Geef de app een herkenbare naam, bijvoorbeeld `imgbed-app`.
5. Open na het aanmaken de detailpagina van de app.

Aanbevolen toegangstype:

| Toegangstype | Aanbeveling |
| --- | --- |
| `App folder` | Aanbevolen. Dit past bij de manier waarop ImgBed bestanden opslaat. |
| `Full Dropbox` | Niet aanbevolen. ImgBed heeft geen volledige toegang tot je account nodig. |

![Dropbox-app maken](../../image/upload/dropbox/开发者创建应用.png)

### Stap 2: Voeg de Redirect URI toe

Zoek op de detailpagina van de Dropbox-app de OAuth- of Redirect URI-instellingen en voeg toe:

```text
https://your-domain.com/api/oauth/dropbox/callback
```

Gebruik je het beheer via meerdere domeinen, voeg dan elke bijpassende callback-URL toe.

![Redirect URI instellen](../../image/upload/dropbox/配置回调地址.png)

### Stap 3: Configureer apprechten

Open het tabblad `Permissions` en schakel minstens deze scopes in:

| Scope | Verplicht | Doel |
| --- | --- | --- |
| `account_info.read` | Verplicht | Leest account- en quotainformatie |
| `files.metadata.read` | Verplicht | Leest bestands- en mapmetadata voor padcontroles |
| `files.metadata.write` | Verplicht | Maakt mappen aan en schrijft metadata |
| `files.content.write` | Verplicht | Uploadt bestanden. Zonder deze scope krijg je `required scope 'files.content.write'`. |
| `files.content.read` | Aanbevolen | Staat download, preview en tijdelijke bestandslinks toe |

Klik na het selecteren onderaan op `Submit`.

![Rechten toevoegen](../../image/upload/dropbox/添加对应的权限.png)

Belangrijk:

| Situatie | Wat je moet doen |
| --- | --- |
| Je hebt scopes gewijzigd | Doorloop de tokenautorisatie opnieuw en haal een nieuw `Refresh Token` op. |
| Je hebt niet opnieuw geautoriseerd | Het oude token krijgt de nieuwe rechten niet automatisch, waardoor uploads kunnen blijven mislukken. |

### Stap 4: Kopieer appgegevens

Bewaar deze twee waarden van de Dropbox-app-pagina:

| Dropbox-veld | ImgBed-veld |
| --- | --- |
| `App key` | `App Key` |
| `App secret` | `App Secret` |

### Stap 5: Vul het Dropbox-kanaal in

Kies in Uploadinstellingen `Dropbox` en vul in:

| ImgBed-veld | Wat je invult |
| --- | --- |
| Kanaalnaam | Een herkenbare naam, bijvoorbeeld `Main Dropbox` |
| App Key | De Dropbox `App key` |
| App Secret | De Dropbox `App secret` |
| Refresh Token | Laat voorlopig leeg |
| Hoofdmap | Optioneel. Standaard `imgbed`. |
| Notitie | Optioneel |

![Token ophalen](../../image/upload/dropbox/获取令牌.png)

### Stap 6: Haal het Refresh Token op

1. Klik in ImgBed op `Get Token`.
2. Meld je aan met het Dropbox-account dat je wilt koppelen.
3. Keur de autorisatie goed.
4. De callbackpagina toont een `Refresh Token`.
5. Kopieer het.
6. Ga terug naar ImgBed en plak het in `Refresh Token`.

![Token kopiëren](../../image/upload/dropbox/复制令牌.png)

## Controleren

| Controle | Verwacht resultaat |
| --- | --- |
| Kanaalkaart | Het Dropbox-kanaal verschijnt na opslaan. |
| Kanaalschakelaar | Het kanaal kan worden ingeschakeld. |
| Token opgeslagen | De detailpagina toont dat het `Refresh Token` is opgeslagen. |
| Testupload | Een testafbeelding verschijnt in de app-map van Dropbox. |

Als quotalimieten actief zijn, klik dan op quota opvragen. Na een geslaagde opvraag toont de kanaalkaart gebruikte ruimte, totale ruimte en laatste update.

![Quota-opvraag gelukt](../../image/upload/dropbox/查询额度成功.png)

## Problemen oplossen

| Probleem | Oplossing |
| --- | --- |
| ImgBed meldt dat de configuratie onvolledig is | Controleer of `App Key`, `App Secret` en `Refresh Token` allemaal zijn ingevuld. |
| Autorisatie lukt, maar er verschijnt geen `Refresh Token` | Klik opnieuw op `Get Token` en controleer of de offline autorisatiestroom wordt gebruikt. |
| Upload mislukt met `required scope 'files.content.write'` | Schakel `files.content.write` in, klik op `Submit` en haal daarna een nieuw `Refresh Token` op. |
| Callback mislukt | Controleer of de redirect URI `https://your-domain.com/api/oauth/dropbox/callback` is. |
| Bestanden worden niet gevonden | Controleer of de Dropbox-app in `App folder`-modus is gemaakt. |

## Snelle flow

```text
Open Dropbox App Console
-> Maak een app
-> Kies App folder access
-> Voeg https://your-domain.com/api/oauth/dropbox/callback toe
-> Schakel account_info.read / files.metadata.read / files.metadata.write / files.content.write in
-> Schakel eventueel files.content.read in
-> Klik Submit
-> Kopieer App Key en App Secret
-> Vul ze in ImgBed in
-> Klik Get Token
-> Kopieer het Refresh Token van de callbackpagina
-> Plak het terug in ImgBed en sla op
```

## Referenties

1. Dropbox App Console: https://www.dropbox.com/developers/apps
2. Dropbox OAuth Guide: https://developers.dropbox.com/oauth-guide
3. Dropbox Developer Guide: https://www.dropbox.com/developers/reference/developer-guide
