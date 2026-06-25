# Trasferimento tramite magnet link

Il trasferimento tramite magnet link scarica i file da un magnet link e li carica automaticamente nel canale di archiviazione cloud che scegli.

È utile per trasferire episodi anime, video, archivi e file simili. Incolla un magnet link: ImgBed crea un'attività di download in background. Al termine del download, il file viene caricato in ImgBed e il link finale compare nell'elenco dei caricamenti.

![Trasferimento tramite magnet link](../../image/other/磁力链接/磁力链接.png)

## Dove usarlo

Il punto di accesso al trasferimento tramite magnet link si trova nell'area di caricamento della homepage.

Incolla il magnet link nella casella di input, scegli `Transfer`, quindi carica.

![Carica anime](../../image/other/磁力链接/上传番剧.png)

## Prima del primo utilizzo

Configura prima il trasferimento tramite magnet link nel pannello di amministrazione.

Di solito servono:

1. Un account GitHub per eseguire l'attività di download.
2. Un canale di caricamento cloud, per esempio Google Drive o OneDrive.
3. La directory di destinazione.
4. Un timeout dell'attività.

Quando le impostazioni sono pronte, torna alla homepage e incolla un magnet link per avviare il trasferimento.

## Caricare un magnet link

1. Incolla il magnet link nella casella di caricamento della homepage.
2. Assicurati che la modalità sia `Transfer`.
3. Fai clic su Carica.
4. Attendi che ImgBed crei l'attività magnet.
5. Dopo l'avvio, usa il pannello flottante `Magnet Tasks` in basso a destra per seguire l'avanzamento.

Il download e il caricamento possono richiedere tempo. La velocità dipende dalla risorsa magnet, dall'ambiente di esecuzione GitHub e dal canale di archiviazione cloud selezionato.

![Magnet in download](../../image/other/磁力链接/磁力链接下载中.png)

## Dopo il completamento

Quando l'attività termina, l'elenco dei caricamenti mostra il nome del file e il link.

Per i video viene mostrata un'anteprima video, per le immagini un'anteprima immagine, mentre per gli altri file viene mostrata una normale icona file.

![Video scaricato](../../image/other/磁力链接/下载好后的视频.png)

Puoi copiare:

| Tipo di link | Uso |
| --- | --- |
| Link originale | Accesso diretto al file |
| Markdown | Articoli o note Markdown |
| HTML | Codice di pagine web |
| BBCode | Forum che supportano BBCode |

## Pannello delle attività magnet

Il pannello delle attività magnet in basso a destra mostra numero di attività, nome dell'attività, avanzamento e stato finale.

Stati comuni:

| Stato | Significato |
| --- | --- |
| In attesa | L'attività è stata creata ed è in attesa di esecuzione. |
| Download in corso | La risorsa magnet è in fase di download. |
| Caricamento in corso | Il file è stato scaricato e viene caricato nello storage cloud. |
| Completato | Il caricamento è riuscito e il link può essere copiato. |
| Non riuscito | L'attività non è terminata correttamente. Controlla il messaggio e riprova. |

## Consigli

- Se un magnet link contiene più file, ImgBed dà priorità al file principale completato per la visualizzazione.
- I file grandi richiedono più tempo. Attendi la fine dell'attività prima di aggiornare la pagina.
- Se la risorsa magnet non ha peer disponibili, può essere molto lenta o fallire.
- Se l'account cloud ha la quota esaurita, l'autorizzazione scaduta o una directory errata, l'attività può fallire.
- L'anteprima video può richiedere qualche secondo dopo il completamento del caricamento.

## Domande frequenti

### Non parte nulla dopo aver incollato il magnet link

Controlla che il trasferimento tramite magnet link sia abilitato nel pannello di amministrazione e che siano selezionati un account GitHub e un canale cloud utilizzabili.

### Il download è sempre lento

La velocità del magnet link dipende dalla risorsa stessa. Se non ci sono peer disponibili, il download può essere molto lento o impossibile.

### Dopo il caricamento non appare l'anteprima

Prima verifica che il link del file si apra. I file video possono richiedere un po' di tempo per caricarsi nel browser; in alternativa, apri direttamente il link.

### Cosa controllo se un'attività fallisce?

Controlla che il magnet link sia valido, che il canale cloud funzioni e che la directory di caricamento sia corretta. Poi invia di nuovo l'attività.
