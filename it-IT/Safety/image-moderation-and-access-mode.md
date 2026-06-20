# Moderazione immagini e modalità di accesso

La moderazione assegna una classificazione per età alle immagini caricate. La modalità di accesso decide quali classificazioni possono essere viste pubblicamente.

Questo influisce su gallery pubblica, URL pubblici dei file e Random Image API. Non limita il pannello admin: gli amministratori possono sempre vedere e gestire tutti i file.

## Dove configurare

Apri il pannello admin e vai a:

```text
System Settings -> Security Settings -> Upload Management -> Image Moderation
```

Le impostazioni principali sono:

- Access mode
- Enable moderation
- Moderation provider

## A cosa serve Access Mode

Access mode decide quali classificazioni per età possono essere mostrate pubblicamente.

Modalità attuali:

| Access Mode | Classificazioni visibili pubblicamente |
| --- | --- |
| Adult mode | General, R12, R16, R18 |
| Youth mode | General, R12, R16 |
| Teen mode | General, R12 |
| Child mode | Solo General |

Il default è Adult mode.

Per siti privati o con contenuti maturi, Adult mode può essere adatto. Per una gallery pubblica più prudente, scegli Youth, Teen o Child mode.

## Cosa succede abilitando la moderazione

Quando la moderazione è attiva, ImgBed chiama il provider scelto durante l'upload e salva la classificazione rilevata.

Classificazioni principali:

| Rating | Significato |
| --- | --- |
| General | Contenuto pubblico sicuro |
| R12 | Contenuto lievemente sensibile |
| R16 | Contenuto moderatamente sensibile |
| R18 | Contenuto per adulti |

Il risultato viene usato per decidere l'accesso pubblico.

Se la moderazione non è attiva, o i vecchi file non hanno rating, quei file restano non classificati. I file senza rating non vengono rimossi automaticamente dalla gallery pubblica o dalla Random Image API solo perché manca un risultato di moderazione.

## Scegliere un provider di moderazione

I provider disponibili includono:

- moderatecontent.com
- nsfwjs
- Sightengine

Ogni provider ha requisiti diversi:

- moderatecontent.com di solito richiede una API Key.
- nsfwjs di solito richiede un URL endpoint API.
- Sightengine richiede API user e API secret.

Scegli in base al tuo account, alla disponibilità e alla qualità del rilevamento. Se moderazione è attiva e configurata correttamente, ImgBed prova a scrivere un rating durante l'upload.

## Effetto sulla gallery pubblica

La gallery pubblica filtra i file in base alla modalità di accesso.

Esempi:

- Adult mode: le immagini R18 possono comparire.
- Youth mode: le immagini R18 sono nascoste.
- Teen mode: le immagini R16 e R18 sono nascoste.
- Child mode: vengono mostrate solo immagini General.

Questo vale solo per l'accesso pubblico normale. Il pannello admin mostra comunque tutti i file.

## Effetto sugli URL pubblici

Gli URL pubblici sono link diretti aperti dai visitatori.

Se il rating del file è consentito dalla modalità corrente, ImgBed restituisce l'immagine originale.

Se il rating supera il livello consentito, l'accesso pubblico normale non restituisce l'originale. ImgBed restituisce invece il risultato bloccato o l'immagine sostitutiva configurata.

Esempio:

- La modalità corrente è Child mode.
- Un'immagine è classificata R18.
- Un visitatore apre direttamente l'URL pubblico.
- ImgBed non restituisce a quel visitatore l'immagine R18 originale.

![Immagine file limitata](../../image/Safety/文件受限图.png)

Gli amministratori nel pannello admin non sono interessati da questa limitazione.

## Effetto sulla Random Image API

Anche la Random Image API filtra il proprio insieme di candidati secondo la modalità di accesso.

In Child mode, le immagini casuali vengono scelte solo tra file General.

In Youth mode, possono arrivare da file General, R12 e R16, ma non R18.

Così la Random Image API non può aggirare le restrizioni della gallery pubblica.

## Rapporto con allowlist e blocklist

Access mode non è l'unica regola di accesso pubblico. Lavora insieme ad allowlist e blocklist.

In breve:

- I contenuti in allowlist sono pubblici per primi.
- I contenuti in blocklist non possono essere visti direttamente dai visitatori normali.
- I contenuti non presenti in nessuna lista vengono poi controllati rispetto ad access mode.

Se un'immagine è limitata sia dal rating sia dalle regole di lista, i visitatori normali non possono comunque vedere il file originale direttamente.

## Impostazioni consigliate

Per siti pubblici:

- Abilita la moderazione.
- Scegli una modalità adatta al pubblico del sito.
- Usa Child mode o Teen mode per visitatori di tutte le età.
- Evita Adult mode se non vuoi mostrare contenuti maturi pubblicamente.
- Controlla i rating nel pannello admin e correggili manualmente quando serve.

Per siti privati o personali:

- Adult mode di solito va bene.
- Abilita la moderazione se ti è utile.
- Rivedi e correggi i rating nel pannello admin quando necessario.

## FAQ

### I file spariscono dal pannello admin se cambio Access Mode?

No.

Access mode riguarda solo l'accesso pubblico normale. Non influisce sul pannello admin.

### Perché la gallery pubblica mostra meno immagini in Child mode?

Child mode consente pubblicamente solo file General. R12, R16 e R18 vengono filtrati.

### Gli URL pubblici possono ancora aprire immagini per adulti?

Se la modalità corrente non consente quel rating, gli URL pubblici normali non restituiscono l'immagine originale.

### La Random Image API può restituire immagini limitate?

No.

La Random Image API filtra i candidati secondo la modalità di accesso corrente.

### Cosa succede ai vecchi file senza rating?

Le immagini senza rating non vengono nascoste automaticamente solo perché non hanno risultato di moderazione. Puoi correggere il rating in seguito dal pannello admin.
