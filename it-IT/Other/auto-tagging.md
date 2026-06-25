# Tagging automatico

Il tagging automatico si configura in:

```text
System Settings -> Other Settings -> Auto Tagging
```

Genera automaticamente tag per le immagini, utili per la ricerca, il filtro dell'API per immagini casuali, il filtro della galleria pubblica e il controllo dell'accesso basato sulla classificazione per età.

## Cosa può fare il tagging automatico

| Funzione | Descrizione |
| --- | --- |
| Generare tag di contenuto | Aggiunge tag relativi a persone, scene, oggetti, stile artistico e contenuti visivi simili. |
| Generare tag dei personaggi | Utile per immagini anime e illustrazioni. |
| Aggiungere tag di orientamento | Aggiunge `landscape`, `portrait` o `square`. |
| Aggiungere la classificazione dell'immagine | Salva i risultati `G/S/Q/E` per contenuti generali, sensibili, discutibili o espliciti. |
| Tagging automatico al caricamento | Le immagini appena caricate entrano automaticamente nel flusso di tagging. |
| Tagging in batch | Aggiunge tag alle immagini già presenti in tutte le cartelle o in cartelle selezionate. |

## Requisiti preliminari

Prepara almeno un URL accessibile di Hugging Face Space.

L'approccio consigliato consiste nel duplicare lo Space `wd-tagger` di SmilingWolf nel tuo account Hugging Face:

```text
https://huggingface.co/spaces/SmilingWolf/wd-tagger
```

Puoi usare temporaneamente lo Space pubblico, ma gli Space pubblici sono condivisi da molti utenti e possono avere code, rallentamenti o momenti di indisponibilità. Uno Space duplicato nel tuo account è più stabile per il tagging automatico a lungo termine.

## Duplicare lo Space di SmilingWolf

1. Accedi a Hugging Face.
2. Apri `https://huggingface.co/spaces/SmilingWolf/wd-tagger`.

![Space pubblico di SmilingWolf](../../image/other/微笑狼的公开仓库.png)

3. Fai clic sul menu con i tre puntini nell'angolo in alto a destra.
4. Scegli `Duplicate this Space`.
5. Mantieni il nome predefinito dello Space oppure scegline uno personalizzato, ad esempio `wd-tagger`.
6. Imposta la visibilità su `Public`. Gli Space pubblici sono più facili da chiamare da ImgBed.
7. All'inizio mantieni l'hardware gratuito predefinito. Esegui l'upgrade solo se le code diventano evidenti.
8. Crea lo Space e attendi il completamento della build.

Al termine della build, apri la pagina del tuo Space. L'URL di solito ha questo formato:

```text
https://huggingface.co/spaces/your-name/wd-tagger
```

Copia l'URL dal browser e incollalo in `Space URLs` in ImgBed.

## Inserire più URL di Space

Inserisci un URL di Space per riga.

Esempi:

| Valore | Descrizione |
| --- | --- |
| `https://huggingface.co/spaces/SmilingWolf/wd-tagger` | Space pubblico di SmilingWolf, adatto ai test temporanei. |
| `https://huggingface.co/spaces/lintonxue00/wd-tagger` | URL della pagina di uno Space copiato. |
| `https://huggingface.co/spaces/your-name/wd-tagger` | Pagina del tuo Space duplicato. |

Puoi inserire più URL. ImgBed usa più Space insieme, migliorando potenzialmente la velocità.

Se uno Space è temporaneamente non disponibile, gli altri possono continuare l'elaborazione.

## Impostazioni

| Opzione | Consiglio |
| --- | --- |
| `Space URLs` | Inserisci gli URL degli Space che hai preparato. Usane almeno uno. |
| Cartella di destinazione | Lascia vuoto per elaborare tutte le cartelle. Seleziona una cartella solo quando vuoi elaborare una directory specifica. |
| Modello di riconoscimento | Mantieni `wd-swinv2-tagger-v3` come impostazione predefinita. |
| Soglia per i tag generali | Il valore predefinito funziona per la maggior parte delle immagini. Valori più bassi producono più tag; valori più alti producono meno tag. |
| Soglia per i tag dei personaggi | Il valore predefinito è prudente e aiuta a evitare tag dei personaggi errati. |
| Soglia automatica `MCut` | Lasciala disattivata all'inizio. Attivala quando vuoi che sia il modello a decidere automaticamente il numero di tag. |
| Tagging automatico al caricamento | Attivalo se vuoi che le immagini appena caricate ricevano automaticamente i tag. |
| Avvia tagging | Esegue manualmente il tagging in batch delle immagini già presenti. |

## Valori iniziali consigliati

| Opzione | Valore consigliato |
| --- | --- |
| Modello di riconoscimento | `wd-swinv2-tagger-v3` |
| Soglia per i tag generali | `0.35` |
| Soglia per i tag dei personaggi | `0.85` |
| `MCut` | Disattivato all'inizio |
| Tagging automatico al caricamento | Attivalo se necessario |

Se i tag sono troppi, aumenta leggermente la soglia generale.

Se i tag sono troppo pochi, abbassa leggermente la soglia generale.

## Tagging in batch

1. Compila `Space URLs`.
2. Seleziona una cartella di destinazione.
3. Fai clic su avvia tagging.
4. Attendi il completamento dell'avanzamento.

Se la cartella di destinazione e vuota, ImgBed elabora tutte le cartelle.

Il tagging in batch è indicato per le immagini già presenti. Per le nuove immagini, abilita il tagging automatico al caricamento, così non dovrai avviarlo manualmente ogni volta.

## Tagging automatico al caricamento

Dopo aver abilitato il tagging automatico al caricamento, le immagini appena caricate chiamano automaticamente gli `Space URLs` configurati.

Questa opzione è adatta all'uso a lungo termine.

Se il tuo Space è in coda, il caricamento può comunque terminare prima, mentre il tagging prosegue in seguito.

## Quali immagini vengono elaborate

Il tagging automatico elabora principalmente file immagine.

Le immagini che hanno già tag completi, orientamento, classificazione, larghezza e altezza vengono saltate per evitare chiamate inutili allo Space.

Quando possibile, ImgBed compila solo le informazioni mancanti. Per esempio, se manca solo l'orientamento, prova ad aggiungerlo senza chiamare l'intero flusso dei tag di contenuto.

## Domande frequenti

### Perché duplicare il mio Space?

Gli Space pubblici sono condivisi da molti utenti. Il tuo Space duplicato viene usato principalmente dal tuo sito ImgBed, quindi di solito è più veloce e affidabile.

### Lo Space continua ad avviarsi

Dopo la prima creazione o dopo un lungo periodo di inattività, uno Space può richiedere tempo per avviarsi.

Apri prima la pagina del tuo Space. Quando riesce a riconoscere normalmente un'immagine, torna in ImgBed e avvia il tagging.

### Come copio l'URL dello Space?

Apri la pagina del tuo Hugging Face Space e copia l'indirizzo del browser.

Esempi:

```text
https://huggingface.co/spaces/lintonxue00/wd-tagger
https://huggingface.co/spaces/SmilingWolf/wd-tagger
```

### Posso aggiungere più Space?

Sì. Inserisci un URL di Space per riga.

Più Space elaborano le immagini insieme e sono utili quando hai molte immagini.

### Perché i tag sono in inglese?

I modelli SmilingWolf restituiscono tag in inglese. È il comportamento previsto.

I tag vengono usati principalmente per la ricerca, il filtro, l'API per immagini casuali e i filtri della galleria pubblica.

### A cosa servono i tag di classificazione?

I risultati di classificazione funzionano insieme alla modalità di accesso nelle impostazioni di sicurezza.

Per esempio, quando l'accesso dei visitatori è limitato in base alla classificazione per età, la navigazione pubblica e le funzioni per immagini casuali filtrano le immagini secondo tali regole.

## Flusso rapido

```text
Sign in to Hugging Face
-> Open SmilingWolf/wd-tagger
-> Duplicate this Space
-> Wait for the Space to build
-> Copy your Space URL
-> Fill Space URLs in ImgBed
-> Choose model and thresholds
-> Start tagging or enable auto-tag on upload
```
