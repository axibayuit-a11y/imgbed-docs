# Moderazione immagini e modalità di accesso

La moderazione assegna una classificazione per età alle immagini caricate. La modalità di accesso decide quali classificazioni possono essere viste pubblicamente.

Questo influisce sulla galleria pubblica, sugli URL pubblici dei file e sull'API per immagini casuali. Non limita il pannello di amministrazione: gli amministratori possono sempre vedere e gestire tutti i file.

## Dove configurare

Apri il pannello admin e vai a:

```text
System Settings -> Security Settings -> Upload Management -> Image Moderation
```

Le impostazioni principali sono:

- Modalità di accesso
- Abilita moderazione
- Fornitore di moderazione

## A cosa serve la modalità di accesso

La modalità di accesso decide quali classificazioni per età possono essere mostrate pubblicamente.

Modalità attuali:

| Modalità di accesso | Classificazioni visibili pubblicamente |
| --- | --- |
| Modalità adulti | General, R12, R16, R18 |
| Modalità giovani | General, R12, R16 |
| Modalità adolescenti | General, R12 |
| Modalità bambini | Solo General |

La modalità predefinita è la modalità adulti.

Per siti privati o con contenuti per adulti, la modalità adulti può essere adatta. Per una galleria pubblica più prudente, scegli la modalità giovani, adolescenti o bambini.

## Cosa succede abilitando la moderazione

Quando la moderazione è attiva, ImgBed chiama il fornitore scelto durante il caricamento e salva la classificazione rilevata.

Classificazioni principali:

| Classificazione | Significato |
| --- | --- |
| General | Contenuto pubblico sicuro |
| R12 | Contenuto lievemente sensibile |
| R16 | Contenuto moderatamente sensibile |
| R18 | Contenuto per adulti |

Il risultato viene usato per decidere l'accesso pubblico.

Se la moderazione non è attiva, o i vecchi file non hanno classificazione, quei file restano non classificati. I file senza classificazione non vengono rimossi automaticamente dalla galleria pubblica o dall'API per immagini casuali solo perché manca un risultato di moderazione.

## Scegliere un provider di moderazione

I fornitori disponibili includono:

- moderatecontent.com
- nsfwjs
- Sightengine

Ogni fornitore ha requisiti diversi:

- moderatecontent.com di solito richiede una API Key.
- nsfwjs di solito richiede un URL del punto di accesso API.
- Sightengine richiede API user e API secret.

Scegli in base al tuo account, alla disponibilità e alla qualità del rilevamento. Se la moderazione è attiva e configurata correttamente, ImgBed prova a scrivere una classificazione durante il caricamento.

## Effetto sulla galleria pubblica

La galleria pubblica filtra i file in base alla modalità di accesso.

Esempi:

- Modalità adulti: le immagini R18 possono comparire.
- Modalità giovani: le immagini R18 sono nascoste.
- Modalità adolescenti: le immagini R16 e R18 sono nascoste.
- Modalità bambini: vengono mostrate solo immagini General.

Questo vale solo per l'accesso pubblico normale. Il pannello di amministrazione mostra comunque tutti i file.

## Effetto sugli URL pubblici

Gli URL pubblici sono link diretti aperti dai visitatori.

Se il classificazione del file è consentito dalla modalità corrente, ImgBed restituisce l'immagine di origine.

Se il classificazione supera il livello consentito, l'accesso pubblico normale non restituisce l'di origine. ImgBed restituisce invece il risultato bloccato o l'immagine sostitutiva configurata.

Esempio:

- La modalità corrente è la modalità bambini.
- Un'immagine è classificata R18.
- Un visitatore apre direttamente l'URL pubblico.
- ImgBed non restituisce a quel visitatore l'immagine R18 di origine.

![Immagine file limitata](../../image/Safety/文件受限图.png)

Gli amministratori nel pannello di amministrazione non sono interessati da questa limitazione.

## Effetto sull'API per immagini casuali

Anche l'API per immagini casuali filtra il proprio insieme di candidati secondo la modalità di accesso.

In modalità bambini, le immagini casuali vengono scelte solo tra file General.

In modalità giovani, possono arrivare da file General, R12 e R16, ma non R18.

Così l'API per immagini casuali non può aggirare le restrizioni della galleria pubblica.

## Rapporto con allowlist e blocklist

La modalità di accesso non è l'unica regola di accesso pubblico. Lavora insieme alle liste di autorizzazione e di blocco.

In breve:

- I contenuti nella lista di autorizzazione hanno priorità come contenuti pubblici.
- I contenuti nella lista di blocco non possono essere visti direttamente dai visitatori normali.
- I contenuti non presenti in nessuna lista vengono poi controllati rispetto alla modalità di accesso.

Se un'immagine è limitata sia dal classificazione sia dalle regole di lista, i visitatori normali non possono comunque vedere il file di origine direttamente.

## Impostazioni consigliate

Per siti pubblici:

- Abilita la moderazione.
- Scegli una modalità adatta al pubblico del sito.
- Usa la modalità bambini o la modalità adolescenti per visitatori di tutte le età.
- Evita la modalità adulti se non vuoi mostrare contenuti per adulti pubblicamente.
- Controlla le classificazioni nel pannello di amministrazione e correggile manualmente quando serve.

Per siti privati o personali:

- La modalità adulti di solito va bene.
- Abilita la moderazione se ti è utile.
- Rivedi e correggi le classificazioni nel pannello di amministrazione quando necessario.

## FAQ

### I file spariscono dal pannello di amministrazione se cambio modalità di accesso?

No.

La modalità di accesso riguarda solo l'accesso pubblico normale. Non influisce sul pannello di amministrazione.

### Perché la galleria pubblica mostra meno immagini in modalità bambini?

La modalità bambini consente pubblicamente solo file General. R12, R16 e R18 vengono filtrati.

### Gli URL pubblici possono ancora aprire immagini per adulti?

Se la modalità corrente non consente quel classificazione, gli URL pubblici normali non restituiscono l'immagine di origine.

### L'API per immagini casuali può restituire immagini limitate?

No.

L'API per immagini casuali filtra i candidati secondo la modalità di accesso corrente.

### Cosa succede ai vecchi file senza classificazione?

Le immagini senza classificazione non vengono nascoste automaticamente solo perché non hanno risultato di moderazione. Puoi correggere la classificazione in seguito dal pannello di amministrazione.

