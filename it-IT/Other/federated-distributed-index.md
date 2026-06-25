# Indice distribuito federato

L'indice distribuito federato permette a più siti ImgBed di condividere tra loro elenchi di file.

In parole semplici:

- Puoi condividere cartelle selezionate del tuo sito con altri.
- Puoi unirti a un altro nodo e sincronizzare nel tuo pannello di amministrazione l'elenco dei file condiviso da quel nodo.
- I file federati servono soprattutto per la consultazione, la ricerca e l'apertura dei link. Non vengono ricaricati nel tuo storage.

## Dove configurarlo

Apri:

```text
System Settings -> Other Settings -> Federated Distributed Index
```

![Nodo federazione locale](../../image/other/联盟图/联盟分布式索引本地节点.png)

La pagina ha tre schede:

| Scheda | Scopo |
| --- | --- |
| Local Node | Abilita il tuo nodo, conferma il dominio pubblico, seleziona le cartelle condivise e aggiorna l'indice in uscita |
| Nodes I Joined | Gestisce altri nodi ImgBed a cui ti sei unito |
| Nodes Joining Me | Gestisce richieste di altri che vogliono unirsi al tuo nodo |

## Prima configurazione

1. Apri `Local Node`.
2. Attiva `Enable`.
3. Seleziona le cartelle da condividere in `Sync folders`.
4. Clicca `Update Outbound Index`.
5. Se ImgBed rileva una modifica del dominio, conferma che il dominio corrente sia corretto prima di continuare.

Puoi selezionare più cartelle di sincronizzazione.

Se l'elenco delle cartelle di sincronizzazione è vuoto, vengono condivise tutte le cartelle.

## Local Node

### Dominio pubblico

Il dominio pubblico è l'URL del sito che gli altri nodi usano per accedere al tuo nodo.

ImgBed lo rileva automaticamente. Non serve inserirlo a mano. La prima volta che aggiorni l'indice, ImgBed chiede conferma che l'URL corrente sia il dominio di produzione.

Se cambi dominio in seguito, l'aggiornamento dell'indice chiederà di nuovo conferma.

### Sync Folders

Le cartelle di sincronizzazione determinano quali file vengono condivisi con i nodi della federazione.

Per esempio, se selezioni solo:

```text
/1/
/2/
```

gli altri nodi potranno vedere solo i file presenti in quelle due directory.

### Update Outbound Index

Aggiorna l'elenco dei file che gli altri nodi possono sincronizzare da te.

Usalo quando:

- abiliti la federazione per la prima volta;
- carichi file che vuoi condividere;
- modifichi le cartelle di sincronizzazione;
- modifichi il dominio pubblico e devi confermarlo.

## Nodes I Joined

`Nodes I Joined` è la sezione in cui ti iscrivi ad altri nodi.

![Nodi a cui mi sono unito](../../image/other/联盟图/我加入的节点.png)

### Richiedere l'accesso a un altro nodo

1. Chiedi al proprietario un link di invito.
2. Incollalo nel campo.
3. Clicca `Request to Join`.
4. Attendi che l'altro proprietario approvi dal suo pannello admin.

Dopo l'approvazione, lo stato del nodo diventa approvato.

### Update Inbound Index

`Update Inbound Index` sincronizza gli elenchi dei file dai nodi a cui ti sei unito.

Usalo quando:

- l'altro proprietario ha appena approvato la tua richiesta;
- l'altro proprietario ti comunica che i contenuti condivisi sono stati aggiornati;
- vuoi aggiornare tutti gli elenchi dei file federati dei nodi a cui ti sei unito.

Per aggiornare un solo nodo, clicca `Update Index` sulla sua scheda.

![Aggiorna indice](../../image/other/联盟图/更新索引.png)

### Annullare l'iscrizione

Se non vuoi più sincronizzare un nodo, clicca `Unsubscribe`.

Dopo l'annullamento, l'indice federato di quel nodo viene rimosso dal tuo sito locale.

## Nodes Joining Me

`Nodes Joining Me` è la sezione in cui gestisci le richieste ricevute da altri.

![Nodi che si uniscono a me](../../image/other/联盟图/加入我的节点.png)

### Generare un link di invito

1. Assicurati che il nodo locale sia abilitato.
2. Clicca almeno una volta `Update Outbound Index`, in modo che ImgBed confermi il dominio pubblico.
3. Apri `Nodes Joining Me`.
4. Clicca `Reset Invitation Link`.
5. Copia il link di invito e invialo all'altro proprietario.

Se il link di invito è vuoto, di solito il dominio pubblico non è ancora stato confermato. Torna a `Local Node` e clicca `Update Outbound Index`.

### Gestire le richieste di accesso

Quando qualcuno invia una richiesta, compare nella lista `Nodes Joining Me`.

| Azione | Significato |
| --- | --- |
| Approve | Permette all'altro nodo di sincronizzare il tuo elenco dei file condiviso |
| Reject | Rifiuta la richiesta |
| Delete | Rimuove un record concluso |
| Check Status | Controlla se l'altra parte mantiene ancora la relazione |

Dopo l'approvazione, l'altra parte deve comunque cliccare `Update Inbound Index` prima di vedere i tuoi file condivisi.

![Approva nodo invitato](../../image/other/联盟图/邀请节点同意.png)

## Messaggi

Dopo l'approvazione di una relazione, clicca `Message` nella scheda del nodo.

I messaggi servono solo per comunicare in merito alla relazione di federazione. Non modificano file, tag, directory o autorizzazioni.

![Messaggi](../../image/other/联盟图/留言功能.png)

## Visualizzare i file federati

Dopo il completamento della sincronizzazione, torna all'elenco dei file nel pannello di amministrazione.

Nella parte superiore della pagina puoi passare dai file locali ai file federati. Nella vista dei file federati puoi sfogliare i contenuti sincronizzati.

I file federati servono soprattutto per visualizzare, cercare, vedere anteprime e copiare link. Non sono file locali, quindi non puoi spostarli, eliminarli, modificare i loro tag o eseguirne il backup dal tuo sito.

![File federati in admin](../../image/other/联盟图/联盟管理显示效果图.png)

## Domande frequenti

### Perché mi viene chiesto di inviare di nuovo la richiesta perché non esiste un record della relazione?

Di solito significa che l'altra parte ti ha eliminato e ha rimosso il record, quindi la relazione non può più essere trovata. Invia una nuova richiesta di adesione.

![Nuova richiesta senza record relazione](../../image/other/联盟图/无关系记录重新申请.png)

### Perché non vedo file dopo essermi unito?

Controlla:

1. L'altro proprietario ha approvato la tua richiesta.
2. L'altro proprietario ha cliccato `Update Outbound Index`.
3. Tu hai cliccato `Update Inbound Index`.
4. Le cartelle di sincronizzazione dell'altro proprietario includono le directory che vuole condividere.

### Cosa fare quando viene rilevato un cambio dominio?

Se stai aprendo il pannello admin dal dominio di produzione, conferma e continua.

Se stai usando un indirizzo temporaneo, annulla, riapri il pannello dal dominio di produzione e riprova.

### Cosa significa un elenco vuoto delle cartelle di sincronizzazione?

Un elenco vuoto delle cartelle di sincronizzazione significa che tutte le cartelle sono condivise.

Per condividere solo alcune directory, selezionale manualmente.

### Differenza tra aggiornamento outbound e inbound

| Pulsante | Significato semplice |
| --- | --- |
| Update Outbound Index | Aggiorna ciò che gli altri possono sincronizzare da me |
| Update Inbound Index | Aggiorna ciò che ho sincronizzato dagli altri |
