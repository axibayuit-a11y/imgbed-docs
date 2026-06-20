# Backup ridondante e cambio sorgente di lettura

Il backup ridondante salva una copia extra di un file già caricato.

Sia il file principale sia il file di backup possono essere usati come sorgente di lettura. Per i visitatori normalmente non cambia nulla: cambia solo il canale storage che serve il file.

## Cosa può fare il backup ridondante

| Funzione | Descrizione |
| --- | --- |
| Salvare una copia extra | Esegue backup su un altro canale di upload per ridurre il rischio di guasto di un singolo canale. |
| Cambiare sorgente di lettura | Dopo un backup riuscito, passa la lettura tra canale principale e canale di backup. |
| Backup singolo file | Esegue backup da pagina dettaglio file. |
| Backup in blocco | Seleziona più file nel pannello admin e salvali insieme. |
| Backup ridondante globale | Esegue backup per cartella da Altre impostazioni. |

## Voce Backup ridondante

Apri:

```text
System Settings -> Other Settings -> Redundant Backup
```

![Backup ridondante](../../image/other/冗余备份截图.png)

Questa voce è comoda per aggiungere backup a una cartella o a tutti i file in blocco.

Puoi selezionare manualmente il canale di backup oppure scegliere il cambio automatico e lasciare che ImgBed trovi un canale adatto.

## Backup dal dettaglio file

Apri la pagina dettaglio di un file nel pannello admin e clicca backup.

![Backup nel dettaglio file](../../image/other/文件详情里文件备份.png)

È il modo più pratico per salvare subito una copia di un file importante.

Dopo un backup riuscito, la pagina dettaglio mostra le sorgenti di lettura disponibili.

## Backup in blocco da selezione

Nel pannello admin seleziona più file ed esegui il backup in blocco.

![Backup in blocco](../../image/other/批量备份截图.png)

È indicato per un gruppo di file.

Backup da selezione, backup da dettaglio file e backup ridondante in Altre impostazioni usano lo stesso sistema. Sono solo punti di ingresso diversi.

## Cambiare sorgente di lettura dopo il backup

Dopo il backup, la pagina dettaglio permette di cambiare sorgente di lettura:

| Sorgente lettura | Descrizione |
| --- | --- |
| Canale principale | Legge dal canale usato per il primo upload. |
| Canale di backup | Legge dal canale in cui è salvata la copia ridondante. |

![Cambia sorgente lettura dopo backup](../../image/other/备份成功切换读取源.png)

I visitatori non devono sapere se il file arriva dal canale principale o dal backup.

La sorgente scelta diventa quella preferita per gli accessi successivi.

## Quando il backup viene saltato

Questi casi vengono saltati durante il backup. Non sono errori.

| Caso | Perché viene saltato |
| --- | --- |
| Già con backup | Un file già salvato in backup non viene copiato di nuovo. |
| Canale principale e backup uguali | Il backup deve stare su un altro canale per avere senso. |
| Nessun canale di backup utilizzabile | Non è disponibile un canale alternativo adatto. |

In breve: i backup devono finire su un altro canale, e i file già copiati non consumano nuovo spazio.

## Canale principale e canale di backup

| Nome | Significato |
| --- | --- |
| Canale principale | Canale usato al primo upload del file. |
| Canale di backup | Canale che conserva la copia ridondante. |
| Sorgente principale | Il file viene letto dal canale principale. |
| Sorgente backup | Il file viene letto dal canale di backup. |

Le due sorgenti hanno lo stesso comportamento per l'utente.

Finché il file di backup è disponibile, immagini, video e link download continuano a funzionare dopo il passaggio alla sorgente di backup.

## Cosa succede quando un file viene eliminato

Quando elimini un file, ImgBed elimina sia il file principale sia il file di backup.
