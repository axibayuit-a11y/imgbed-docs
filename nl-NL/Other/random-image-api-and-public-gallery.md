# Random Image API en openbare gallery

Beide functies configureer je onder:

```text
System Settings -> Other Settings
```

## Random Image API

De Random Image API geeft één willekeurig bestand terug uit geselecteerde mappen. Dit is handig voor siteachtergronden, avatarrotatie of willekeurige afbeeldingsaanroepen vanaf externe pagina's.

Na inschakelen gebruik je:

```text
https://your-domain.com/random
```

## Instellingen voor Random Image API

| Optie | Doel |
| --- | --- |
| Enable | Zet de `/random`-endpoint aan of uit. Als dit uit staat, is toegang verboden. |
| Directories | Beperkt welke mappen de random API mag gebruiken. Mappen die hier niet staan, kunnen niet door de API worden gebruikt. |
| Call demo | Genereert random API-links die je direct kunt kopiëren. |

Je kunt meerdere mappen selecteren. Als bijvoorbeeld alleen `/landscape/` en `/portrait/` zijn toegestaan, kan de random API alleen bestanden uit die mappen en hun submappen kiezen.

## Parameters van Random Image API

| Parameter | Voorbeeld | Doel |
| --- | --- | --- |
| `dir` | `/landscape/` | Geeft de random map aan. |
| `content` | `image` | Geeft mediatype aan. Gebruik `image`, `video`, `audio` of combinaties met komma's. |
| `orientation` | `auto` | Filtert afbeeldingsoriëntatie. Gebruik `portrait`, `landscape` of `auto`. |
| `type` | `url` | Teruggeefformaat. Leeg betekent redirect, `url` geeft een tekst-URL terug, `json` geeft JSON terug. |
| `origin` | `1` | Gebruikt met `type=url` om een volledige URL terug te geven. |
| `age` | `all-ages,r12` | Filtert op leeftijdsrating. |
| `tag` | `wallpaper,sky` | Geeft alleen bestanden terug met deze tags. |
| `ex` | `private` | Sluit bestanden met deze tags uit. |

## Teruggeefformaten

Zonder `type` redirect de API direct naar de willekeurige bestands-URL.

Met `type=url` geeft hij een tekst-URL terug.

Met `type=json` geeft hij bestandsinformatie terug, zoals bestands-URL, bestands-ID, naam, type, tags, rating en metadata.

## Toegangsregels

De Random Image API volgt de openbare toegangsregels:

| Regel | Effect |
| --- | --- |
| Mapbeperking | Alleen bestanden in toegestane mappen kunnen worden geselecteerd. |
| Blocklist | Bestanden op de blocklist worden uitgesloten van de random pool. |
| Allowlist-modus | Wanneer ingeschakeld, worden alleen bestanden teruggegeven die openbaar zijn toegestaan. |
| Leeftijdsrating | R12, R16, R18 en vergelijkbare inhoud wordt gefilterd volgens de huidige toegangsmodus. |

Als na filtering geen bestand overblijft, geeft de API geen passend resultaat terug.

## Cache

De Random Image API cachet kandidaatpools per map om sneller te werken.

Wanneer bestanden veranderen, werkt ImgBed de cacheversie van de map bij. Latere verzoeken bouwen de kandidaatpool opnieuw op. Lege mappen worden kort gecachet om herhaalde queries te voorkomen.

## Openbare gallery

De openbare gallery biedt een alleen-lezen pagina voor mappen die bezoekers mogen bekijken.

Na inschakelen kunnen bezoekers openen:

```text
https://your-domain.com/browse/directory-name
```

## Instellingen voor openbare gallery

| Optie | Doel |
| --- | --- |
| Enable | Zet de openbare gallery aan of uit. Als dit uit staat, kunnen bezoekers niet bladeren. |
| Image loading mode | Bepaalt of previews originele afbeeldingen of thumbnails gebruiken. |
| Open directories | Bepaalt welke mappen bezoekers mogen openen. |

## Afbeeldingslaadmodus

| Modus | Doel |
| --- | --- |
| Original | De bezoekerspagina laadt originele bestanden direct. |
| Thumbnail | De bezoekerspagina gebruikt bij voorkeur thumbnails voor sneller laden. |

## Open mappen

Open mappen bepalen wat bezoekers kunnen zien.

Bijvoorbeeld:

```text
/1/,/2/,/landscape/,/portrait/
```

Bezoekers kunnen dan openen:

```text
https://your-domain.com/browse/1
https://your-domain.com/browse/2
https://your-domain.com/browse/landscape
https://your-domain.com/browse/portrait
```

Submappen kunnen ook worden geopend, zoals `/2026/lucky/`. Bezoekers worden geblokkeerd voor mappen die niet open zijn.

## Functies van de openbare gallery

| Functie | Beschrijving |
| --- | --- |
| Door mappen bladeren | Bekijk bestanden en submappen in open mappen. |
| Zoeken | Zoek op bestandsnaam, bestands-ID of tags. |
| Typefilter | Filter afbeeldingen, video's, audio of andere bestanden. |
| Tagfilter | Neem geselecteerde tags op of sluit ze uit. |
| Oriëntatiefilter | Filter liggende of staande afbeeldingen. |
| Tijdfilter | Filter op uploadperiode. |
| Extensiefilter | Filter op bestandsextensie. |
| Link kopiëren | Kopieer toeganglinks van bestanden. |
| Mediapreview | Bekijk of speel afbeeldingen, video en audio af op de bezoekerspagina. |

## Toegangsregels voor de openbare gallery

Ook de openbare gallery volgt openbare toegangsregels:

| Regel | Effect |
| --- | --- |
| Open mappen | Alleen toegestane mappen worden getoond. |
| Access mode | Inhoud wordt gefilterd volgens de huidige leeftijdsclassificatiemodus. |
| Allowlist-modus | Wanneer ingeschakeld, worden alleen bestanden getoond die openbaar zijn toegestaan. |
| Blocklist | Bestanden op de blocklist worden verborgen. |
