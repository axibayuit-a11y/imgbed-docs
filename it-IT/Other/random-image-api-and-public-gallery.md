# Immagini casuali e galleria pubblica

Entrambe le funzioni si configurano in:

```text
System Settings -> Other Settings
```

## API per immagini casuali

L'API per immagini casuali restituisce un file casuale dalle directory selezionate. È utile per sfondi del sito, rotazione degli avatar o richiami di immagini casuali da pagine esterne.

Dopo l'abilitazione, usa:

```text
https://your-domain.com/random
```

## Impostazioni dell'API per immagini casuali

| Opzione | Scopo |
| --- | --- |
| Abilita | Attiva o disattiva l'endpoint `/random`. Quando è disabilitato, l'accesso è vietato. |
| Directory | Limita le directory che l'API per immagini casuali può usare. Le directory non incluse qui non possono essere usate dall'API. |
| Demo di chiamata | Genera link dell'API per immagini casuali che puoi copiare direttamente. |

Puoi selezionare più directory. Per esempio, se sono consentite solo `/landscape/` e `/portrait/`, l'API per immagini casuali può scegliere file solo da quelle directory e dalle relative sottodirectory.

## Parametri dell'API per immagini casuali

| Parametro | Esempio | Scopo |
| --- | --- | --- |
| `dir` | `/landscape/` | Specifica la directory casuale. |
| `content` | `image` | Specifica il tipo di media. Usa `image`, `video`, `audio` o combinazioni separate da virgole. |
| `orientation` | `auto` | Filtra l'orientamento dell'immagine. Usa `portrait`, `landscape` o `auto`. |
| `type` | `url` | Formato di risposta. Vuoto significa reindirizzamento, `url` restituisce un URL in testo semplice, `json` restituisce JSON. |
| `origin` | `1` | Con `type=url`, restituisce un URL completo. |
| `age` | `all-ages,r12` | Filtra per classificazione per età. |
| `tag` | `wallpaper,sky` | Restituisce solo file con questi tag. |
| `ex` | `private` | Esclude file con questi tag. |

## Formati di risposta

Senza `type`, l'API reindirizza direttamente all'URL del file casuale.

Con `type=url`, restituisce un URL come testo.

Con `type=json`, restituisce informazioni sul file, inclusi URL del file, ID del file, nome del file, tipo di file, tag, classificazione e metadati correlati.

## Regole di accesso

L'API per immagini casuali segue le regole di accesso pubblico:

| Regola | Effetto |
| --- | --- |
| Restrizione delle directory | Possono essere selezionati solo file nelle directory consentite. |
| Blocklist | I file in blocklist sono esclusi dal pool casuale. |
| Modalità allowlist | Quando è abilitata, vengono restituiti solo file consentiti per l'accesso pubblico. |
| Classificazione per età | R12, R16, R18 e contenuti simili vengono filtrati in base alla modalità di accesso corrente. |

Se dopo il filtro non resta alcun file corrispondente, l'API non restituisce risultati corrispondenti.

## Cache

L'API per immagini casuali memorizza in cache i pool di candidati delle directory per migliorare la velocità.

Dopo modifiche ai file, ImgBed aggiorna la versione della cache della directory e le richieste successive ricostruiscono il pool di candidati. Le directory vuote vengono mantenute in cache per poco tempo, così da evitare query ripetute.

## Galleria pubblica

La galleria pubblica offre una pagina pubblica di sola lettura per le directory che consenti ai visitatori di vedere.

Dopo l'abilitazione, i visitatori possono aprire:

```text
https://your-domain.com/browse/directory-name
```

## Impostazioni galleria pubblica

| Opzione | Scopo |
| --- | --- |
| Abilita | Attiva o disattiva la galleria pubblica. Quando è disabilitata, i visitatori non possono sfogliarla. |
| Modalità di caricamento delle immagini | Controlla se le anteprime usano immagini originali o miniature. |
| Directory aperte | Imposta quali directory sono accessibili ai visitatori. |

## Modalità di caricamento delle immagini

| Modalità | Scopo |
| --- | --- |
| Originale | La pagina dei visitatori carica direttamente i file originali. |
| Miniatura | La pagina dei visitatori preferisce le miniature per caricare più velocemente. |

## Directory aperte

Le directory aperte determinano cosa possono vedere i visitatori.

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

È possibile aprire anche sottodirectory, ad esempio `/2026/lucky/`. Ai visitatori viene impedito l'accesso alle directory non aperte.

## Funzioni della galleria pubblica

| Funzione | Descrizione |
| --- | --- |
| Navigazione delle directory | Visualizza file e sottodirectory nelle directory aperte. |
| Ricerca | Cerca per nome del file, ID del file o tag. |
| Filtro per tipo | Filtra immagini, video, audio o altri file. |
| Filtro per tag | Include o esclude i tag selezionati. |
| Filtro per orientamento | Filtra immagini orizzontali o verticali. |
| Filtro per tempo | Filtra per intervallo di tempo del caricamento. |
| Filtro per estensione | Filtra per estensione del file. |
| Copia link | Copia i link di accesso ai file. |
| Anteprima dei media | Visualizza o riproduce immagini, video e audio nella pagina dei visitatori. |

## Regole di accesso della galleria pubblica

Anche la galleria pubblica segue le regole di accesso pubblico:

| Regola | Effetto |
| --- | --- |
| Directory aperte | Vengono mostrate solo le directory consentite. |
| Modalità di accesso | I contenuti sono filtrati in base alla modalità corrente di accesso per classificazione per età. |
| Modalità allowlist | Quando è abilitata, vengono mostrati solo file consentiti per l'accesso pubblico. |
| Blocklist | I file in blocklist sono nascosti. |
