# Tag automatici

I tag automatici si configurano in:

```text
System Settings -> Other Settings -> Auto Tagging
```

Generano automaticamente tag immagine, utili per ricerca, filtro della Random Image API, gallery pubblica e controllo accesso basato sul rating.

## Cosa può fare

| Funzione | Descrizione |
| --- | --- |
| Tag contenuto | Aggiunge tag per persone, scene, oggetti, stile artistico e contenuti visivi simili. |
| Tag personaggi | Utile per anime, illustrazioni e immagini con personaggi riconoscibili. |
| Tag orientamento | Aggiunge `landscape`, `portrait` o `square`. |
| Rating immagine | Salva risultati `G/S/Q/E` per contenuto generale, sensibile, dubbio o esplicito. |
| Tag su upload | Le nuove immagini entrano automaticamente nel flusso di tagging. |
| Tag in blocco | Aggiunge tag alle vecchie immagini in tutte le cartelle o in cartelle selezionate. |

## Prima di iniziare

Prepara almeno un URL Hugging Face Space accessibile.

L'approccio consigliato è duplicare lo Space `wd-tagger` di SmilingWolf nel tuo account Hugging Face:

```text
https://huggingface.co/spaces/SmilingWolf/wd-tagger
```

Puoi usare temporaneamente lo Space pubblico, ma gli Space pubblici sono condivisi da molti utenti e possono avere coda, rallentamenti o indisponibilità. Una copia nel tuo account è più stabile per l'uso continuativo.

## Duplicare lo Space di SmilingWolf

1. Accedi a Hugging Face.
2. Apri `https://huggingface.co/spaces/SmilingWolf/wd-tagger`.

![Space pubblico SmilingWolf](../../image/other/微笑狼的公开仓库.png)

3. Clicca sul menu con tre puntini in alto a destra.
4. Scegli `Duplicate this Space`.
5. Mantieni il nome predefinito o scegline uno tuo, per esempio `wd-tagger`.
6. Imposta la visibilità su `Public`. Gli Space pubblici sono più semplici da chiamare per ImgBed.
7. All'inizio lascia l'hardware gratuito predefinito. Aggiorna solo se la coda diventa evidente.
8. Crea lo Space e attendi la fine della build.

Quando la build è terminata, apri la pagina del tuo Space. L'URL di solito è:

```text
https://huggingface.co/spaces/your-name/wd-tagger
```

Copia l'indirizzo del browser e incollalo in `Space URLs` in ImgBed.

## Inserire più Space URL

Inserisci un URL per riga.

Esempi:

| Valore | Descrizione |
| --- | --- |
| `https://huggingface.co/spaces/SmilingWolf/wd-tagger` | Space pubblico SmilingWolf, buono per test temporanei. |
| `https://huggingface.co/spaces/lintonxue00/wd-tagger` | URL di una pagina Space copiata. |
| `https://huggingface.co/spaces/your-name/wd-tagger` | Il tuo Space duplicato. |

Puoi inserire più URL. ImgBed li usa insieme e può migliorare la velocità.

Se uno Space è temporaneamente non disponibile, gli altri possono continuare a elaborare.

## Impostazioni

| Opzione | Consiglio |
| --- | --- |
| `Space URLs` | Inserisci gli URL preparati. Almeno uno è necessario. |
| Cartella target | Lascia vuoto per tutte le cartelle. Seleziona una cartella solo per elaborare una directory specifica. |
| Modello riconoscimento | Lascia `wd-swinv2-tagger-v3` come default. |
| Soglia tag generali | Il valore predefinito va bene per la maggior parte delle immagini. Più basso genera più tag, più alto meno tag. |
| Soglia tag personaggi | Default prudente, riduce tag personaggio errati. |
| Soglia automatica `MCut` | Lascia disattivata all'inizio. Attivala se vuoi che il modello decida automaticamente il numero di tag. |
| Tag automatici su upload | Attiva se vuoi tag sulle nuove immagini appena caricate. |
| Avvia tagging | Esegue manualmente il tagging in blocco delle vecchie immagini. |

## Valori iniziali consigliati

| Opzione | Valore consigliato |
| --- | --- |
| Modello riconoscimento | `wd-swinv2-tagger-v3` |
| Soglia tag generali | `0.35` |
| Soglia tag personaggi | `0.85` |
| `MCut` | Disattivato all'inizio |
| Tag su upload | Attiva se serve |

Se i tag sono troppi, alza leggermente la soglia generale.

Se sono troppo pochi, abbassala leggermente.

## Tagging in blocco

1. Compila `Space URLs`.
2. Seleziona una cartella target.
3. Clicca avvia tagging.
4. Attendi il completamento.

Se la cartella target è vuota, ImgBed elabora tutte le cartelle.

Il tagging in blocco è ideale per immagini già presenti. Per le nuove immagini, abilita tag automatici su upload.

## Tag automatici su upload

Dopo l'abilitazione, le nuove immagini caricate chiamano automaticamente gli `Space URLs` configurati.

È adatto all'uso a lungo termine.

Se lo Space è in coda, l'upload può comunque terminare prima e il tagging proseguire dopo.

## Quali immagini vengono elaborate

Il tagging automatico elabora soprattutto file immagine.

Le immagini che hanno già tag completi, orientamento, rating, larghezza e altezza vengono saltate per evitare chiamate inutili allo Space.

Quando possibile, ImgBed riempie solo le informazioni mancanti. Per esempio, se manca solo l'orientamento, prova ad aggiungerlo senza avviare l'intero flusso di tag contenuto.

## FAQ

### Perché duplicare il mio Space?

Gli Space pubblici sono condivisi da molti utenti. Una copia tua viene usata principalmente dal tuo sito ImgBed, quindi di solito è più veloce e affidabile.

### Lo Space continua ad avviarsi

Dopo la prima creazione o dopo un lungo periodo inattivo, uno Space può richiedere tempo per avviarsi.

Apri prima la pagina dello Space. Quando riconosce normalmente un'immagine, torna in ImgBed e avvia il tagging.

### Come copio l'URL dello Space?

Apri la pagina Hugging Face Space e copia l'indirizzo del browser.

Esempi:

```text
https://huggingface.co/spaces/lintonxue00/wd-tagger
https://huggingface.co/spaces/SmilingWolf/wd-tagger
```

### Posso aggiungere più Space?

Sì. Inserisci un URL per riga.

Più Space elaborano immagini insieme e sono utili quando hai molte immagini.

### Perché i tag sono in inglese?

I modelli SmilingWolf restituiscono tag in inglese. È normale.

I tag servono soprattutto per ricerca, filtri, Random Image API e gallery pubblica.

### A cosa servono i rating?

I rating lavorano con la modalità di accesso nelle impostazioni di sicurezza.

Per esempio, quando l'accesso visitatore è limitato per età, navigazione pubblica e funzioni random filtrano le immagini secondo quelle regole.

## Flusso rapido

```text
Accedi a Hugging Face
-> Apri SmilingWolf/wd-tagger
-> Duplica lo Space
-> Attendi la build
-> Copia l'URL del tuo Space
-> Inserisci Space URLs in ImgBed
-> Scegli modello e soglie
-> Avvia tagging o abilita tag automatici su upload
```
