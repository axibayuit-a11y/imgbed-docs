# OCR

OCR estrae testo da immagini, scansioni e screenshot di documenti.

Dopo il riconoscimento, puoi copiare il risultato, esportarlo come `Markdown`, `PDF` o `Word`, oppure scaricare più formati insieme in un pacchetto.

## Cosa può fare OCR

| Funzione | Descrizione |
| --- | --- |
| Riconoscimento testo immagine | Estrae testo da immagini, screenshot e scansioni. |
| Riconoscimento layout documento | Più adatto a tabelle, formule, timbri e layout misti testo-immagine. |
| Più servizi | Supporta Baidu PaddleOCR, Microsoft Azure Vision e Google Vision. |
| Copia risultati | Copia il testo riconosciuto dopo l'elaborazione. |
| Esporta file | Esporta `Markdown`, `PDF` e `Word`. |
| Pacchetto batch | Dopo più riconoscimenti, scarica i risultati come pacchetto. |

## Configurare prima i servizi OCR

Apri:

```text
System Settings -> Other Settings -> OCR
```

![Geolocalizzazione IP e OCR](../../image/other/ip定位和ocr文字识别.png)

Inserisci le credenziali dei servizi che vuoi usare:

| Servizio | Cosa inserire | Ideale per |
| --- | --- | --- |
| Baidu PaddleOCR | `PaddleOCR Token` | Prima scelta consigliata. Buono per documenti, immagini, tabelle e layout misti. |
| Microsoft Azure Vision | `Azure Vision Endpoint` e `Azure Vision API Key` | Utile se usi già servizi cloud Microsoft. |
| Google Vision | `Google Vision API Key`. L'account di servizio `JSON` serve solo per interrogare la quota. | Utile se usi Google Cloud. |

Salva dopo aver inserito le credenziali.

Per il primo test basta configurare un solo servizio. Non servono tutti e tre.

## Configurare Google Vision

La configurazione Google ha due parti:

| Obiettivo | Requisito |
| --- | --- |
| Usare OCR | Abilitare `Cloud Vision API`, poi creare una `API Key`. |
| Interrogare uso | Creare un service account, assegnare `Monitoring Viewer`, poi scaricare il `JSON`. |

![Google API key e service account](../../image/other/谷歌api秘钥和服务账号截图.png)

### Usare Google per OCR

1. Apri Google Cloud Console.
2. Vai a `APIs & Services`.
3. Apri `Library`, cerca `Cloud Vision API` e abilitala.
4. Torna a `Credentials`.
5. Crea una `API Key`.
6. Apri la API Key e copiala.
7. Incollala in `Google Vision API Key` in ImgBed.
8. Salva.

Poi potrai scegliere Google Vision nella finestra OCR.

### Interrogare l'uso Google

La query quota non è necessaria per il riconoscimento.

Mostra solo in modo approssimativo quante chiamate Google Vision sono state usate negli ultimi 30 giorni.

1. In Google Cloud Console apri `IAM & Admin`.
2. Apri `Service Accounts`.
3. Crea un service account, per esempio `vision-monitor`.
4. Assegnagli il ruolo `Monitoring Viewer`.
5. Apri i dettagli del service account e crea una chiave.
6. Scegli `JSON`.
7. Scarica il file JSON generato.
8. Torna in ImgBed e importalo sotto service account `JSON` (opzionale).
9. Dopo l'import riuscito, clicca query quota.

Dopo l'import, ImgBed mostra il nome del progetto a cui appartiene il service account. Durante la query, ImgBed legge i dati Google monitoring e mostra il numero di chiamate del mese.

In breve:

| Elemento | Scopo |
| --- | --- |
| `Google Vision API Key` | Esegue il riconoscimento OCR. |
| Service account `JSON` | Interroga quante chiamate Google Vision sono state usate. |
| Ruolo `Monitoring Viewer` | Permette al service account di leggere dati d'uso. |

## Ottenere un Baidu PaddleOCR Token

Baidu PaddleOCR richiede un access token.

![Ottieni token PaddleOCR](../../image/other/获取飞浆令牌.png)

Apri la finestra di chiamata `API` nella pagina Baidu PaddleOCR, clicca per ottenere un token e copialo.

Torna in ImgBed, incollalo in `PaddleOCR Token` e salva.

## Avviare il riconoscimento

In Gestione file, seleziona un'immagine o uno screenshot di documento e clicca `OCR`.

![Riconoscimento OCR](../../image/other/ocr识别截图.png)

Nella finestra scegli servizio e modello.

Modelli PaddleOCR comuni:

| Modello | Ideale per |
| --- | --- |
| `PP-StructureV3` | Default consigliato. Buono per documenti, tabelle, formule, timbri e layout misti. |
| `PP-OCRv5` | Immagini semplici, testo comune e riconoscimento leggero. |
| `PaddleOCR-VL` | Multilingue, immagini complesse e contenuti simili a grafici. |
| `PaddleOCR-VL-1.5` | Pagine documento più complesse e recupero layout. |

Se non sei sicuro, parti da `PP-StructureV3`.

## Opzioni avanzate

| Opzione | Descrizione |
| --- | --- |
| Correzione orientamento | Usa se l'immagine è ruotata o inclinata. |
| Appiattimento documento | Usa per documenti fotografati con curvatura o prospettiva. |
| Rilevamento layout | Usa quando vuoi conservare titoli, paragrafi, tabelle e struttura immagine. |
| Riconoscimento grafici | Usa se l'immagine contiene grafici o strutture complesse. |
| Migliora `Markdown` | Rende il Markdown esportato più leggibile. |

Per screenshot normali, mantieni poche opzioni. Per scansioni di documenti, abilita più opzioni legate ai documenti.

## Visualizzare risultati

Dopo il riconoscimento, la finestra mostra il risultato.

Puoi copiarlo direttamente o scegliere i formati di esportazione.

![Riconoscimento PDF](../../image/other/pdf识别截图.png)

Per pagine documento, il `PDF` esportato può mantenere l'aspetto della pagina rendendo il testo ricercabile. È utile per archiviare scansioni e ritrovare contenuti in seguito.

## Scegliere il formato di esportazione

| Formato | Ideale per |
| --- | --- |
| `Markdown (.md)` | Note, documentazione e modifica successiva. |
| `PDF (.pdf)` | Conservare l'aspetto pagina e risultati da scansione. |
| `Word (.docx)` | Modifica layout, testo e passaggio ad altre persone. |
| Esporta tutto | Salva più formati e immagine originale, adatto ad archivi importanti. |

Se ti serve solo il testo, esporta Markdown.

Se ti serve l'aspetto pagina, usa PDF o Word.

## Output Word

I documenti Word esportati possono essere aperti e modificati con software office.

![Risultato Word](../../image/other/word识别结果.png)

Alcuni documenti includono immagini riconosciute, titoli e paragrafi nell'output Word.

La qualità dipende da nitidezza dell'originale, modello scelto e complessità del documento.

## Tipi di file migliori per OCR

| Tipo file | Consiglio |
| --- | --- |
| Screenshot chiari | Riconosci direttamente. |
| Scansioni | Preferisci `PP-StructureV3`. |
| Documenti fotografati | Abilita correzione orientamento e appiattimento documento. |
| Tabelle, formule, timbri | Preferisci modelli strutturati. |
| Immagini con testo breve semplice | `PP-OCRv5` di solito basta. |

Immagini più nitide e testo più dritto producono risultati migliori.

## Casi comuni

| Caso | Significato |
| --- | --- |
| Riconoscimento fallito | Controlla che token o chiave del servizio siano salvati. |
| Riconoscimento lento | Documenti complessi e immagini grandi richiedono più tempo. |
| Tabella incompleta | Prova un modello strutturato. |
| Testo con errori | Sfocatura, riflessi e inclinazione aumentano gli errori. Prova un'immagine più chiara. |
| Word contiene molte immagini | I modelli strutturati possono conservare alcune immagini riconosciute. È normale. |

### La query quota Google fallisce

Controlla:

1. Il service account `JSON` è stato importato.
2. Il service account ha il ruolo `Monitoring Viewer`.
3. `Cloud Vision API` è abilitata per il progetto.

Se ti serve solo OCR e non la query uso, puoi ignorare il JSON del service account e compilare solo `Google Vision API Key`.

## Flusso rapido

```text
Apri System Settings
-> Apri Other Settings
-> Inserisci credenziali servizio OCR
-> Salva
-> Torna a Gestione file
-> Seleziona un file e clicca OCR
-> Scegli un modello
-> Attendi il riconoscimento
-> Copia risultati o esporta Markdown / PDF / Word
```
