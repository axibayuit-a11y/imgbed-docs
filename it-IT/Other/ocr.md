# OCR

L'OCR estrae testo da immagini, scansioni e screenshot di documenti.

Dopo il riconoscimento, puoi copiare il risultato, esportarlo come `Markdown`, `PDF` o `Word`, oppure scaricare più formati insieme in un pacchetto.

## Cosa può fare l'OCR

| Funzione | Descrizione |
| --- | --- |
| Riconoscimento del testo nelle immagini | Estrae testo da immagini, screenshot e scansioni. |
| Riconoscimento del layout dei documenti | Più adatto a tabelle, formule, timbri e layout misti testo-immagine. |
| Servizi multipli | Supporta Baidu PaddleOCR, Microsoft Azure Vision e Google Vision. |
| Copia dei risultati | Copia il testo riconosciuto dopo l'elaborazione. |
| Esporta file | Esporta `Markdown`, `PDF` e `Word`. |
| Download in pacchetto | Dopo il riconoscimento di più file, scarica i risultati come pacchetto. |

## Configurare prima i servizi OCR

Apri:

```text
System Settings -> Other Settings -> OCR
```

![Geolocalizzazione IP e OCR](../../image/other/ip定位和ocr文字识别.png)

Inserisci le credenziali dei servizi che vuoi usare:

| Servizio | Cosa inserire | Ideale per |
| --- | --- | --- |
| Baidu PaddleOCR | `PaddleOCR Token` | Prima scelta consigliata. Adatto a documenti, immagini, tabelle e layout misti. |
| Microsoft Azure Vision | `Azure Vision Endpoint` e `Azure Vision API Key` | Utile se usi già servizi cloud Microsoft. |
| Google Vision | `Google Vision API Key`. L'account di servizio `JSON` serve solo per interrogare la quota. | Utile se usi Google Cloud. |

Salva dopo aver inserito le credenziali.

Per il primo test puoi configurare anche un solo servizio. Non è necessario configurarli tutti e tre.

## Configurare Google Vision

La configurazione Google ha due parti:

| Obiettivo | Requisito |
| --- | --- |
| Usare l'OCR | Abilitare `Cloud Vision API`, poi creare una `API Key`. |
| Consultare l'utilizzo | Creare un account di servizio, assegnare `Monitoring Viewer`, poi scaricare il `JSON`. |

![API key Google e account di servizio](../../image/other/谷歌api秘钥和服务账号截图.png)

### Usare Google per l'OCR

1. Apri Google Cloud Console.
2. Vai a `APIs & Services`.
3. Apri `Library`, cerca `Cloud Vision API` e abilitala.
4. Torna a `Credentials`.
5. Crea una `API Key`.
6. Apri la API Key e copiala.
7. Incollala in `Google Vision API Key` in ImgBed.
8. Salva.

Potrai quindi scegliere Google Vision nella finestra OCR.

### Consultare l'utilizzo di Google

La consultazione della quota non è necessaria per il riconoscimento.

Mostra solo in modo approssimativo quante chiamate Google Vision sono state usate negli ultimi 30 giorni.

1. In Google Cloud Console apri `IAM & Admin`.
2. Apri `Service Accounts`.
3. Crea un account di servizio, per esempio `vision-monitor`.
4. Assegnagli il ruolo `Monitoring Viewer`.
5. Apri i dettagli dell'account di servizio e crea una chiave.
6. Scegli `JSON`.
7. Scarica il file JSON generato.
8. Torna in ImgBed e importalo nella sezione account di servizio `JSON` (opzionale).
9. Dopo l'importazione riuscita, fai clic sulla consultazione della quota.

Dopo l'importazione, ImgBed mostra il nome del progetto a cui appartiene l'account di servizio. Durante la consultazione dell'utilizzo, ImgBed legge i dati di monitoraggio di Google e mostra il numero di chiamate del mese.

In breve:

| Elemento | Scopo |
| --- | --- |
| `Google Vision API Key` | Esegue il riconoscimento OCR. |
| Account di servizio `JSON` | Consulta quante chiamate Google Vision sono state usate. |
| Ruolo `Monitoring Viewer` | Permette all'account di servizio di leggere i dati di utilizzo. |

## Ottenere un Baidu PaddleOCR Token

Baidu PaddleOCR richiede un token di accesso.

![Ottieni token PaddleOCR](../../image/other/获取飞浆令牌.png)

Apri la finestra di chiamata `API` nella pagina Baidu PaddleOCR, fai clic per ottenere un token e copialo.

Torna in ImgBed, incollalo in `PaddleOCR Token` e salva.

## Avviare il riconoscimento

In Gestione file, seleziona un'immagine o uno screenshot di documento e fai clic su `OCR`.

![Riconoscimento OCR](../../image/other/ocr识别截图.png)

Nella finestra di dialogo scegli il servizio e il modello di riconoscimento.

Modelli PaddleOCR comuni:

| Modello | Ideale per |
| --- | --- |
| `PP-StructureV3` | Impostazione predefinita consigliata. Adatto a documenti, tabelle, formule, timbri e layout misti. |
| `PP-OCRv5` | Immagini semplici, testo comune e riconoscimento leggero. |
| `PaddleOCR-VL` | Multilingue, immagini complesse e contenuti simili a grafici. |
| `PaddleOCR-VL-1.5` | Pagine di documenti più complesse e recupero del layout. |

Se non sei sicuro, parti da `PP-StructureV3`.

## Opzioni avanzate

| Opzione | Descrizione |
| --- | --- |
| Correzione dell'orientamento | Usala quando l'immagine è ruotata o inclinata. |
| Appiattimento del documento | Usalo per documenti fotografati con curvatura o inclinazione. |
| Rilevamento del layout | Usalo quando vuoi conservare titoli, paragrafi, tabelle e struttura delle immagini. |
| Riconoscimento grafici | Usa se l'immagine contiene grafici o strutture complesse. |
| Migliora `Markdown` | Rende il Markdown esportato più facile da leggere. |

Per screenshot normali, mantieni poche opzioni. Per scansioni di documenti, abilita più opzioni legate ai documenti.

## Visualizzare i risultati

Dopo il riconoscimento, la finestra di dialogo mostra il risultato.

Puoi copiarlo direttamente o scegliere i formati di esportazione.

![Riconoscimento PDF](../../image/other/pdf识别截图.png)

Per le pagine di documenti, il `PDF` esportato può mantenere l'aspetto della pagina rendendo il testo ricercabile. È utile per archiviare scansioni e ritrovare contenuti in seguito.

## Scegliere il formato di esportazione

| Formato | Ideale per |
| --- | --- |
| `Markdown (.md)` | Note, sistemi di documentazione e modifiche successive. |
| `PDF (.pdf)` | Conservazione dell'aspetto della pagina e dei risultati di documenti scansionati. |
| `Word (.docx)` | Modifica successiva del layout, modifica del testo e consegna ad altre persone. |
| Esporta tutto | Salva più formati e immagine originale, adatto ad archivi importanti. |

Se ti serve solo il testo, esporta Markdown.

Se ti serve l'aspetto pagina, usa PDF o Word.

## Output Word

I documenti Word esportati possono essere aperti e modificati con software per ufficio.

![Risultato Word](../../image/other/word识别结果.png)

Alcuni documenti includono immagini riconosciute, titoli e paragrafi nell'output Word.

La qualità del riconoscimento dipende dalla nitidezza dell'immagine originale, dal modello scelto e dalla complessità del documento.

## Tipi di file migliori per OCR

| Tipo di file | Consiglio |
| --- | --- |
| Screenshot chiari | Riconosci direttamente. |
| Scansioni | Preferisci `PP-StructureV3`. |
| Documenti fotografati | Abilita correzione dell'orientamento e appiattimento del documento. |
| Tabelle, formule, timbri | Preferisci modelli strutturati. |
| Immagini con testo breve semplice | `PP-OCRv5` di solito basta. |

Immagini più nitide e testo più dritto producono risultati migliori.

## Casi comuni

| Caso | Significato |
| --- | --- |
| Riconoscimento non riuscito | Controlla che il token o la chiave del servizio siano stati salvati. |
| Riconoscimento lento | Documenti complessi e immagini grandi richiedono più tempo. |
| Tabella incompleta | Prova un modello strutturato. |
| Testo con errori | Sfocatura, riflessi e inclinazione aumentano gli errori. Prova un'immagine più chiara. |
| L'output Word contiene molte immagini | I modelli strutturati possono conservare alcune immagini riconosciute. È normale. |

### La consultazione della quota Google non riesce

Controlla:

1. L'account di servizio `JSON` è stato importato.
2. L'account di servizio ha il ruolo `Monitoring Viewer`.
3. `Cloud Vision API` è abilitata per il progetto.

Se ti serve solo l'OCR e non la consultazione dell'utilizzo, puoi ignorare il JSON dell'account di servizio e compilare solo `Google Vision API Key`.

## Flusso rapido

```text
Open System Settings
-> Open Other Settings
-> Fill OCR service credentials
-> Save
-> Return to File Management
-> Select a file and click OCR
-> Choose a model
-> Wait for recognition
-> Copy results or export Markdown / PDF / Word
```
