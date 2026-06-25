# Blog

La funzione Blog aggiunge una pagina blog indipendente al tuo sito ImgBed.

Dopo l'abilitazione, i visitatori possono aprire:

```text
https://your-domain.com/blog/
```

![Homepage blog](../../image/other/博客/博客首页.png)

Il blog è adattato dal progetto open source [LyraVoid/Mizuki](https://github.com/LyraVoid/Mizuki). ImgBed lo riscrive e lo integra con Vue, così può funzionare come parte del sito di hosting di immagini.

## Dove configurarlo

Le impostazioni del blog si trovano in:

```text
System Settings -> Other Settings -> Blog
```

![Impostazioni blog](../../image/other/博客/QQ20260611-221702.png)

## Prima configurazione

1. Attiva `Enable`.
2. Seleziona l'account GitHub in cui salvare la configurazione del blog.
3. Clicca su `Update Blog`.
4. Attendi il messaggio di conferma.
5. Apri `https://your-domain.com/blog/` per visualizzare il blog.

Al primo utilizzo, ImgBed prepara un repository GitHub privato nell'account selezionato:

```text
imgbed-blog-config
```

Questo repository archivia le impostazioni del blog e il contenuto degli articoli.

## Scrivere articoli

Modifica gli articoli del blog nel tuo repository GitHub privato:

```text
imgbed-blog-config
```

Flusso tipico:

1. Apri GitHub.
2. Apri il repository privato `imgbed-blog-config`.
3. Modifica o aggiungi file degli articoli.
4. Esegui il commit delle modifiche.
5. Torna nel pannello di amministrazione di ImgBed e clicca `Update Blog`, oppure clicca tre volte il logo nell'angolo in alto a sinistra della homepage del blog per avviare un aggiornamento.

`Update Blog` non sovrascrive i contenuti che hai scritto. Inizializza il repository quando necessario e aggiorna la cache del blog.

## Funzioni supportate

Il blog supporta funzioni comuni come elenco degli articoli, categorie, tag, archivio, ricerca, modalità scura e cambio lingua.

Supporta anche commenti e statistiche delle visite.

![Commenti blog](../../image/other/博客/支持留言.png)

I commenti compaiono sotto gli articoli. I visitatori possono inserire avatar, nickname, email e testo del commento.

Le statistiche mostrano le visualizzazioni degli articoli e le visite del sito, aiutandoti a comprendere il traffico del blog.

## URL

Il blog è sempre disponibile nel percorso `/blog/`.

Per esempio, se il dominio ImgBed è:

```text
https://image.example.com
```

l'URL del blog è:

```text
https://image.example.com/blog/
```

Dopo la disattivazione del blog, i visitatori non possono più accedere alla relativa pagina.
