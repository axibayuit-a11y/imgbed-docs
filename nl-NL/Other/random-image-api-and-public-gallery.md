# API voor willekeurige afbeeldingen en openbare galerie

Beide functies configureer je onder:

```text
System Settings -> Other Settings
```

## API voor willekeurige afbeeldingen

De API voor willekeurige afbeeldingen geeft één willekeurig bestand terug uit geselecteerde mappen. Dit is handig voor siteachtergronden, avatarrotatie of willekeurige afbeeldingsaanroepen vanaf externe pagina's.

Na inschakelen gebruik je:

```text
https://your-domain.com/random
```

## Instellingen voor de API voor willekeurige afbeeldingen

| Optie | Doel |
| --- | --- |
| Inschakelen | Zet het `/random`-eindpunt aan of uit. Als dit uit staat, is toegang verboden. |
| Mappen | Beperkt welke mappen de API voor willekeurige afbeeldingen mag gebruiken. Mappen die hier niet staan, kunnen niet door de API worden gebruikt. |
| Demo-aanroep | Genereert links voor de API voor willekeurige afbeeldingen die je direct kunt kopiëren. |

Je kunt meerdere mappen selecteren. Als bijvoorbeeld alleen `/landscape/` en `/portrait/` zijn toegestaan, kan de API voor willekeurige afbeeldingen alleen bestanden uit die mappen en hun submappen kiezen.

## Parameters van de API voor willekeurige afbeeldingen

| Parameter | Voorbeeld | Doel |
| --- | --- | --- |
| `dir` | `/landscape/` | Geeft de map aan waaruit willekeurig wordt gekozen. |
| `content` | `image` | Geeft mediatype aan. Gebruik `image`, `video`, `audio` of combinaties met komma's. |
| `orientation` | `auto` | Filtert afbeeldingsoriëntatie. Gebruik `portrait`, `landscape` of `auto`. |
| `type` | `url` | Teruggeefformaat. Leeg betekent omleiding, `url` geeft een tekst-URL terug, `json` geeft JSON terug. |
| `origin` | `1` | Gebruikt met `type=url` om een volledige URL terug te geven. |
| `age` | `all-ages,r12` | Filtert op leeftijdsrating. |
| `tag` | `wallpaper,sky` | Geeft alleen bestanden terug met deze tags. |
| `ex` | `private` | Sluit bestanden met deze tags uit. |

## Teruggeefformaten

Zonder `type` leidt de API direct om naar de willekeurige bestands-URL.

Met `type=url` geeft hij een tekst-URL terug.

Met `type=json` geeft hij bestandsinformatie terug, zoals bestands-URL, bestands-ID, naam, type, tags, rating en metagegevens.

## Toegangsregels

De API voor willekeurige afbeeldingen volgt de openbare toegangsregels:

| Regel | Effect |
| --- | --- |
| Mapbeperking | Alleen bestanden in toegestane mappen kunnen worden geselecteerd. |
| Blokkeerlijst | Bestanden op de blokkeerlijst worden uitgesloten van de willekeurige pool. |
| Toestaanlijstmodus | Wanneer ingeschakeld, worden alleen bestanden teruggegeven die openbaar zijn toegestaan. |
| Leeftijdsrating | R12, R16, R18 en vergelijkbare inhoud wordt gefilterd volgens de huidige toegangsmodus. |

Als na filtering geen bestand overblijft, geeft de API geen passend resultaat terug.

## Cache

De API voor willekeurige afbeeldingen slaat kandidaatpools per map in de cache op om sneller te werken.

Wanneer bestanden veranderen, werkt ImgBed de cacheversie van de map bij. Latere verzoeken bouwen de kandidaatpool opnieuw op. Lege mappen worden kort in de cache bewaard om herhaalde aanvragen te voorkomen.

## Openbare galerie

De openbare galerie biedt een alleen-lezen pagina voor mappen die bezoekers mogen bekijken.

Na inschakelen kunnen bezoekers openen:

```text
https://your-domain.com/browse/directory-name
```

## Instellingen voor openbare galerie

| Optie | Doel |
| --- | --- |
| Inschakelen | Zet de openbare galerie aan of uit. Als dit uit staat, kunnen bezoekers niet bladeren. |
| Afbeeldingslaadmodus | Bepaalt of voorvertoningen originele afbeeldingen of miniaturen gebruiken. |
| Opengestelde mappen | Bepaalt welke mappen bezoekers mogen openen. |

## Afbeeldingslaadmodus

| Modus | Doel |
| --- | --- |
| Origineel | De bezoekerspagina laadt originele bestanden direct. |
| Miniatuur | De bezoekerspagina gebruikt bij voorkeur miniaturen voor sneller laden. |

## Opengestelde mappen

Opengestelde mappen bepalen wat bezoekers kunnen zien.

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

Submappen kunnen ook worden opengesteld, zoals `/2026/lucky/`. Bezoekers worden geblokkeerd voor mappen die niet zijn opengesteld.

## Functies van de openbare galerie

| Functie | Beschrijving |
| --- | --- |
| Door mappen bladeren | Bekijk bestanden en submappen in opengestelde mappen. |
| Zoeken | Zoek op bestandsnaam, bestands-ID of tags. |
| Typefilter | Filter afbeeldingen, video's, audio of andere bestanden. |
| Tagfilter | Neem geselecteerde tags op of sluit ze uit. |
| Oriëntatiefilter | Filter liggende of staande afbeeldingen. |
| Tijdfilter | Filter op uploadperiode. |
| Extensiefilter | Filter op bestandsextensie. |
| Link kopiëren | Kopieer toegangslinks van bestanden. |
| Mediavoorvertoning | Bekijk afbeeldingen of speel video's en audio af op de bezoekerspagina. |

## Toegangsregels voor de openbare galerie

Ook de openbare galerie volgt openbare toegangsregels:

| Regel | Effect |
| --- | --- |
| Opengestelde mappen | Alleen toegestane mappen worden getoond. |
| Toegangsmodus | Inhoud wordt gefilterd volgens de huidige toegangsmodus voor leeftijdsrating. |
| Toestaanlijstmodus | Wanneer ingeschakeld, worden alleen bestanden getoond die openbaar zijn toegestaan. |
| Blokkeerlijst | Bestanden op de blokkeerlijst worden verborgen. |
