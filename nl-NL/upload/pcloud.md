# Een pCloud-kanaal toevoegen

## Geschikt voor

- Je hebt een pCloud-account en wilt ImgBed-afbeeldingen in pCloud opslaan.
- Je vindt het goed om het e-mailadres en wachtwoord van je pCloud-account als kanaalgegevens te gebruiken.

## Wat je vooraf nodig hebt

| Vereiste | Waarom je dit nodig hebt |
| --- | --- |
| E-mailadres pCloud-account | Voor aanmelden bij de pCloud API |
| pCloud-wachtwoord | Voor aanmelden bij de pCloud API |
| API-host | Standaard `api.pcloud.com`. EU-accounts kunnen `eapi.pcloud.com` gebruiken. |
| Opslagmap | Waar bestanden worden opgeslagen. Standaard `imgbed`. |

## Waar je het toevoegt

1. Open Systeeminstellingen.
2. Open Uploadinstellingen.
3. Klik rechtsboven op `Kanaal toevoegen`.
4. Kies `pCloud`.

## Veldreferentie

| Veld | Doel | Verplicht |
| --- | --- | --- |
| Kanaalnaam | Herkent dit pCloud-kanaal, bijvoorbeeld `Personal pCloud` | Ja |
| Account e-mail | Je pCloud-loginmail | Ja |
| Wachtwoord | Je pCloud-wachtwoord | Ja |
| API-host | pCloud API-host. Standaard `api.pcloud.com`. | Nee |
| Opslagmap | Map waarin bestanden worden opgeslagen. Standaard `imgbed`. | Nee |

Kies de API-host op basis van je accountregio:

| Accountregio | API-host |
| --- | --- |
| Standaard / VS | `api.pcloud.com` |
| Europa | `eapi.pcloud.com` |

## Instelstappen

1. Open Uploadinstellingen.
2. Klik op `Kanaal toevoegen`.
3. Kies `pCloud`.
4. Vul een herkenbare kanaalnaam in.
5. Vul het e-mailadres van je pCloud-account in.
6. Vul je pCloud-wachtwoord in.
7. Laat de API-host op `api.pcloud.com`, of gebruik `eapi.pcloud.com` voor EU-accounts.
8. Laat de opslagmap op `imgbed`, of kies een eigen map.
9. Sla het kanaal op.

![Kanaal configureren](../../image/upload/pcloud/配置渠道.png)

## Controleren

| Controle | Verwacht resultaat |
| --- | --- |
| Kanaalkaart | De pCloud-kanaalkaart verschijnt na opslaan. |
| Kanaalschakelaar | De schakelaar op de kaart blijft ingeschakeld. |
| E-mailweergave | De kaart toont het gekoppelde pCloud-e-mailadres. |
| Quota-opvraag | Na een geslaagde opvraag worden gebruikte en totale capaciteit getoond. |
| Testupload | Een testafbeelding verschijnt in de ingestelde pCloud-opslagmap. |

![Quota-opvraag gelukt](../../image/upload/pcloud/查询额度成功.png)

## Problemen oplossen

### Waarom geen OAuth2?

pCloud OAuth2 is standaard niet self-service. Je moet pCloud mailen en vragen om het in te schakelen.

De huidige pCloud OAuth2-flow ondersteunt bovendien niet de kortlevende uploadlinkflow die ImgBed nodig heeft. Daarom gebruikt dit kanaal login met accountmail en wachtwoord.

### Welke API-host moet ik gebruiken?

Standaard:

```text
api.pcloud.com
```

Voor EU-accounts:

```text
eapi.pcloud.com
```

## Snelle flow

```text
Prepare your pCloud email and password
-> Open Upload Settings
-> Add Channel
-> Choose pCloud
-> Fill channel name / email / password
-> Keep API host as api.pcloud.com unless your account is in Europe
-> Keep storage directory as imgbed unless you need another folder
-> Save
-> Query quota
-> Upload a test image
```
