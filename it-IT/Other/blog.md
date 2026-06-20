# Blog

La funzione Blog aggiunge al tuo sito ImgBed una pagina blog indipendente.

Dopo l'abilitazione, i visitatori possono aprire:

```text
https://your-domain.com/blog/
```

![Homepage blog](../../image/other/博客/博客首页.png)

Il blog deriva dal progetto open source [LyraVoid/Mizuki](https://github.com/LyraVoid/Mizuki). ImgBed lo ha riscritto e integrato con Vue, così può funzionare come parte del sito di hosting immagini.

## Dove configurare

Le impostazioni blog si trovano in:

```text
System Settings -> Other Settings -> Blog
```

![Impostazioni blog](../../image/other/博客/QQ20260611-221702.png)

## Prima configurazione

1. Attiva `Enable`.
2. Seleziona l'account GitHub in cui salvare la configurazione del blog.
3. Clicca su `Update Blog`.
4. Attendi il messaggio di successo.
5. Apri `https://your-domain.com/blog/` per controllare il risultato.

Al primo utilizzo, ImgBed prepara un repository GitHub privato nell'account selezionato:

```text
imgbed-blog-config
```

Il repository contiene impostazioni del blog e contenuti degli articoli.

## Scrivere articoli

Gli articoli si modificano nel repository GitHub privato:

```text
imgbed-blog-config
```

Flusso tipico:

1. Apri GitHub.
2. Entra nel repository privato `imgbed-blog-config`.
3. Modifica o aggiungi file degli articoli.
4. Fai commit delle modifiche.
5. Torna nel pannello admin di ImgBed e clicca `Update Blog`, oppure clicca tre volte il logo in alto a sinistra nella homepage del blog per avviare un aggiornamento.

`Update Blog` non sovrascrive gli articoli che hai scritto. Serve soprattutto a inizializzare il repository quando necessario e ad aggiornare la cache del blog.

## Funzioni supportate

Il blog supporta le funzioni comuni: lista articoli, categorie, tag, archivio, ricerca, dark mode e cambio lingua.

Supporta anche commenti e statistiche visite.

![Commenti blog](../../image/other/博客/支持留言.png)

I commenti compaiono sotto gli articoli. I visitatori possono inserire avatar, nickname, email e testo del commento.

Le statistiche mostrano visualizzazioni degli articoli e visite del sito, utili per capire il traffico del blog.

## URL

Il blog è sempre servito sotto `/blog/`.

Per esempio, se il dominio ImgBed è:

```text
https://image.example.com
```

l'URL del blog è:

```text
https://image.example.com/blog/
```

Quando il blog viene disattivato, i visitatori non possono più accedere alla pagina blog.
