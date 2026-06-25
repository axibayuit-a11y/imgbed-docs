# Backup ridondante e cambio della sorgente di lettura

Il backup ridondante salva una copia extra di un file già caricato.

Sia il file principale sia il file di backup possono essere usati come sorgenti di lettura. Per i visitatori normalmente non cambia nulla: cambia solo il canale di storage che serve il file.

## Cosa può fare il backup ridondante

| Funzione | Descrizione |
| --- | --- |
| Salvare una copia extra | Esegue il backup dei file su un altro canale di caricamento per ridurre il rischio di errore di un singolo canale. |
| Cambiare sorgente di lettura | Dopo il completamento del backup, consente di cambiare la lettura tra canale principale e canale di backup. |
| Backup di un singolo file | Esegue il backup di un file dalla relativa pagina dei dettagli. |
| Backup in blocco | Seleziona più file nel pannello di amministrazione e ne esegue il backup insieme. |
| Backup ridondante globale | Esegue il backup dei file per cartella da Altre impostazioni. |

## Voce Backup ridondante

Apri:

```text
System Settings -> Other Settings -> Redundant Backup
```

![Backup ridondante](../../image/other/冗余备份截图.png)

Questa voce è comoda per aggiungere backup a una cartella o a tutti i file in blocco.

Puoi selezionare manualmente il canale di backup oppure scegliere il cambio automatico e lasciare che ImgBed trovi un canale di backup adatto.

## Backup dalla pagina dei dettagli del file

Apri la pagina dei dettagli di un file nel pannello di amministrazione e fai clic su backup.

![Backup nel dettaglio file](../../image/other/文件详情里文件备份.png)

È il modo più pratico per salvare subito una copia di un file importante.

Dopo il completamento del backup, la pagina dei dettagli del file mostra le sorgenti di lettura disponibili.

## Backup in blocco da selezione

Nel pannello di amministrazione, seleziona più file ed esegui il backup in blocco.

![Backup in blocco](../../image/other/批量备份截图.png)

È indicato per elaborare un gruppo di file.

Il backup da selezione, il backup dalla pagina dei dettagli del file e il backup ridondante in Altre impostazioni usano lo stesso sistema di backup. Sono solo punti di accesso diversi.

## Cambiare sorgente di lettura dopo il backup

Dopo il completamento del backup, la pagina dei dettagli del file permette di cambiare sorgente di lettura:

| Sorgente di lettura | Descrizione |
| --- | --- |
| Canale principale | Legge dal canale di caricamento originale. |
| Canale di backup | Legge dal canale in cui è salvata la copia ridondante. |

![Cambia sorgente lettura dopo backup](../../image/other/备份成功切换读取源.png)

I visitatori non devono sapere se il file viene servito dal canale principale o dal canale di backup.

La sorgente di lettura scelta diventa quella preferita per gli accessi successivi al file.

## Quando il backup viene saltato

Questi casi vengono saltati durante il backup. Non sono errori.

| Caso | Perché viene saltato |
| --- | --- |
| Backup già presente | Un file che ha già un backup non viene copiato di nuovo. |
| Canale principale e canale di backup identici | Il backup deve essere salvato in un altro canale per avere senso. |
| Nessun canale di backup utilizzabile | Non è disponibile un canale alternativo adatto. |

In breve: i backup devono essere salvati su un altro canale, e i file già sottoposti a backup non consumano di nuovo spazio aggiuntivo.

## Canale principale e canale di backup

| Nome | Significato |
| --- | --- |
| Canale principale | Canale usato quando il file è stato caricato per la prima volta. |
| Canale di backup | Canale che conserva la copia ridondante. |
| Sorgente di lettura principale | Il file viene letto dal canale principale. |
| Sorgente di lettura di backup | Il file viene letto dal canale di backup. |

Le sorgenti di lettura principale e di backup hanno lo stesso comportamento lato utente.

Finché il file di backup è disponibile, immagini, video e link di download continuano a funzionare dopo il passaggio alla sorgente di lettura di backup.

## Cosa succede quando un file viene eliminato

Quando elimini un file, ImgBed elimina sia il file principale sia il file di backup.
