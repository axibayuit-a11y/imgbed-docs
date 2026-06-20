# Trasferimento Magnet

Il trasferimento Magnet scarica file da un magnet link e li carica automaticamente nel canale cloud che scegli.

È utile per episodi anime, video, archivi e file simili. Incolli un magnet link e ImgBed crea un'attività di download in background. Al termine del download, il file viene caricato in ImgBed e il link finale compare nella lista upload.

![Trasferimento Magnet](../../image/other/磁力链接/磁力链接.png)

## Dove usarlo

L'ingresso del trasferimento Magnet si trova nell'area upload della homepage.

Incolla il magnet link nella casella, scegli `Transfer`, poi carica.

![Carica anime](../../image/other/磁力链接/上传番剧.png)

## Prima del primo utilizzo

Configura prima il trasferimento Magnet nel pannello admin.

Di solito servono:

1. Un account GitHub per eseguire l'attività di download.
2. Un canale di upload cloud, per esempio Google Drive o OneDrive.
3. La directory di destinazione.
4. Un timeout attività.

Quando le impostazioni sono pronte, torna alla homepage e incolla un magnet link per avviare il trasferimento.

## Caricare un magnet link

1. Incolla il magnet link nella casella upload della homepage.
2. Assicurati che la modalità sia `Transfer`.
3. Clicca upload.
4. Attendi che ImgBed crei l'attività magnet.
5. Dopo l'avvio, usa il pannello flottante `Magnet Tasks` in basso a destra per seguire l'avanzamento.

Download e upload possono richiedere tempo. La velocità dipende dalla risorsa magnet, dall'ambiente runtime GitHub e dal canale cloud selezionato.

![Magnet in download](../../image/other/磁力链接/磁力链接下载中.png)

## Dopo il completamento

Quando l'attività termina, la lista upload mostra nome file e link.

I video mostrano anteprima video, le immagini anteprima immagine, gli altri file una normale icona file.

![Video scaricato](../../image/other/磁力链接/下载好后的视频.png)

Puoi copiare:

| Tipo link | Uso |
| --- | --- |
| Link originale | Accesso diretto al file |
| Markdown | Post o note Markdown |
| HTML | Codice pagina web |
| BBCode | Forum che supportano BBCode |

## Pannello attività Magnet

Il pannello in basso a destra mostra numero attività, nome attività, progresso e stato finale.

Stati comuni:

| Stato | Significato |
| --- | --- |
| Waiting | L'attività è stata creata ed è in attesa. |
| Downloading | La risorsa magnet è in download. |
| Uploading | Il file è stato scaricato e viene caricato sullo storage cloud. |
| Completed | Upload riuscito, il link può essere copiato. |
| Failed | L'attività non è terminata correttamente. Controlla il messaggio e riprova. |

## Consigli

- Se un magnet contiene più file, ImgBed dà priorità al file principale completato per la visualizzazione.
- I file grandi richiedono più tempo. Attendi la fine dell'attività prima di aggiornare la pagina.
- Se la risorsa magnet non ha peer disponibili, può essere molto lenta o fallire.
- Se l'account cloud ha quota esaurita, autorizzazione scaduta o directory errata, l'attività può fallire.
- L'anteprima video può richiedere qualche secondo dopo l'upload.

## FAQ

### Non parte nulla dopo aver incollato il magnet link

Controlla che il trasferimento Magnet sia abilitato nel pannello admin e che siano selezionati un account GitHub e un canale cloud utilizzabili.

### Il download è sempre lento

La velocità Magnet dipende dalla risorsa. Se non ci sono peer disponibili, il download può essere lentissimo o impossibile.

### Dopo l'upload non appare l'anteprima

Prima verifica che il link del file si apra. I video possono richiedere un po' di tempo nel browser; in alternativa apri direttamente il link.

### Cosa controllo se un'attività fallisce?

Controlla che il magnet link sia valido, che il canale cloud funzioni e che la directory di upload sia corretta. Poi invia di nuovo l'attività.
