# Random Image API e gallery pubblica

Entrambe le funzioni si configurano in:

```text
System Settings -> Other Settings
```

## Random Image API

La Random Image API restituisce un file casuale dalle directory selezionate. È utile per sfondi sito, rotazione avatar o richiami casuali da pagine esterne.

Dopo l'abilitazione, usa:

```text
https://your-domain.com/random
```

## Impostazioni Random Image API

| Opzione | Scopo |
| --- | --- |
| Enable | Attiva o disattiva l'endpoint `/random`. Se disattivo, l'accesso è vietato. |
| Directories | Limita le directory utilizzabili dall'API. Directory non incluse qui non possono essere scelte. |
| Call demo | Genera link Random API copiabili direttamente. |

Puoi selezionare più directory. Per esempio, se sono consentite solo `/landscape/` e `/portrait/`, l'API può scegliere file solo da quelle directory e dalle relative sottocartelle.

## Parametri Random Image API

| Parametro | Esempio | Scopo |
| --- | --- | --- |
| `dir` | `/landscape/` | Specifica la directory casuale. |
| `content` | `image` | Specifica il tipo media. Usa `image`, `video`, `audio` o combinazioni separate da virgola. |
| `orientation` | `auto` | Filtra l'orientamento immagine. Usa `portrait`, `landscape` o `auto`. |
| `type` | `url` | Formato di risposta. Vuoto significa redirect, `url` restituisce URL testuale, `json` restituisce JSON. |
| `origin` | `1` | Con `type=url`, restituisce un URL completo. |
| `age` | `all-ages,r12` | Filtra per rating età. |
| `tag` | `wallpaper,sky` | Restituisce solo file con questi tag. |
| `ex` | `private` | Esclude file con questi tag. |

## Formati di risposta

Senza `type`, l'API reindirizza direttamente all'URL del file casuale.

Con `type=url`, restituisce un URL come testo.

Con `type=json`, restituisce informazioni del file: URL, ID, nome, tipo, tag, rating e metadati collegati.

## Regole di accesso

La Random Image API rispetta le regole di accesso pubblico:

| Regola | Effetto |
| --- | --- |
| Restrizione directory | Possono essere scelti solo file nelle directory consentite. |
| Blocklist | I file in blocklist sono esclusi dal pool casuale. |
| Modalità allowlist | Quando attiva, vengono restituiti solo file consentiti per accesso pubblico. |
| Rating età | R12, R16, R18 e contenuti simili vengono filtrati dalla modalità di accesso corrente. |

Se dopo i filtri non resta nessun file, l'API restituisce nessun risultato corrispondente.

## Cache

La Random Image API memorizza in cache i pool candidati delle directory per migliorare la velocità.

Dopo modifiche ai file, ImgBed aggiorna la versione cache della directory e le richieste successive ricostruiscono il pool. Le directory vuote vengono mantenute in cache per poco tempo, così da evitare query ripetute.

## Gallery pubblica

La gallery pubblica offre una pagina di sola lettura per le directory che vuoi mostrare ai visitatori.

Dopo l'abilitazione, i visitatori possono aprire:

```text
https://your-domain.com/browse/directory-name
```

## Impostazioni gallery pubblica

| Opzione | Scopo |
| --- | --- |
| Enable | Attiva o disattiva la gallery pubblica. Se disattiva, i visitatori non possono sfogliarla. |
| Image loading mode | Decide se le anteprime usano immagini originali o miniature. |
| Open directories | Definisce quali directory sono accessibili ai visitatori. |

## Modalità caricamento immagini

| Modalità | Scopo |
| --- | --- |
| Original | La pagina visitatore carica direttamente i file originali. |
| Thumbnail | La pagina visitatore preferisce miniature per caricare più velocemente. |

## Directory aperte

Le directory aperte decidono cosa possono vedere i visitatori.

Esempio:

```text
/1/,/2/,/landscape/,/portrait/
```

I visitatori potranno accedere a:

```text
https://your-domain.com/browse/1
https://your-domain.com/browse/2
https://your-domain.com/browse/landscape
https://your-domain.com/browse/portrait
```

Sono supportate anche sottodirectory, come `/2026/lucky/`. Le directory non aperte restano bloccate.

## Funzioni della gallery pubblica

| Funzione | Descrizione |
| --- | --- |
| Navigazione directory | Mostra file e sottocartelle nelle directory aperte. |
| Ricerca | Cerca per nome file, ID file o tag. |
| Filtro tipo | Filtra immagini, video, audio o altri file. |
| Filtro tag | Include o esclude tag selezionati. |
| Filtro orientamento | Filtra immagini orizzontali o verticali. |
| Filtro tempo | Filtra per intervallo di upload. |
| Filtro estensione | Filtra per estensione file. |
| Copia link | Copia link di accesso ai file. |
| Anteprima media | Visualizza o riproduce immagini, video e audio nella pagina visitatore. |

## Regole di accesso della gallery pubblica

Anche la gallery pubblica rispetta le regole di accesso:

| Regola | Effetto |
| --- | --- |
| Directory aperte | Vengono mostrate solo directory consentite. |
| Access mode | I contenuti sono filtrati dalla modalità di accesso per rating età. |
| Modalità allowlist | Quando attiva, vengono mostrati solo file consentiti per accesso pubblico. |
| Blocklist | I file in blocklist sono nascosti. |
