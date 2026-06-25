# Limiti di frequenza per gli utenti

I limiti di frequenza controllano quanto spesso utenti normali o visitatori possono caricare file dalla pagina iniziale. Servono a evitare abusi sulle pagine di caricamento pubbliche.

Questa funzione riguarda solo i caricamenti dalla pagina iniziale. I caricamenti admin e quelli fatti con API Token non sono limitati da queste regole.

## Dove configurare

Apri il pannello admin e vai a:

```text
System Settings -> Security Settings -> Upload Management -> User Rate Limits
```

![Impostazioni limiti utente](../../image/other/用户频控截图.png)

## Abilitare i limiti

Dopo aver attivato `Abilita limiti di frequenza`, ImgBed tiene traccia dei caricamenti recenti in base all'indirizzo IP di chi carica.

Valori predefiniti:

| Impostazione | Predefinito | Descrizione |
| --- | --- | --- |
| Finestra di rilevamento | 1.5 ore | Quanto indietro contare i record di caricamento. |
| Numero massimo file | 20 | Numero massimo di file consentiti nella finestra. |
| Limite singolo file | 20 MB | Dimensione massima di un file. |
| Limite totale caricamenti | 200 MB | Dimensione totale massima nella finestra. |

Per esempio, con finestra di 1.5 ore, 20 file, 20 MB per file e 200 MB totali, i caricamenti dallo stesso IP vengono bloccati appena uno dei limiti configurati viene superato.

## Escludere tipi di file

`Tipi di file esclusi dal caricamento` blocca agli utenti normali o visitatori il caricamento di categorie selezionate.

Categorie disponibili:

| Tipo | Descrizione |
| --- | --- |
| Immagini | jpg, png, webp, gif e file immagine simili |
| Video | mp4, webm, mov e file video simili |
| Audio | mp3, flac, wav e file audio simili |
| Documenti | pdf, txt, md, docx e documenti simili |
| Altro | File fuori dalle categorie sopra, come zip, rar, exe, apk |

Di default un tipo non selezionato è consentito.

Quando clicchi un tipo e viene evidenziato, quel tipo è bloccato.

Se `Altro` è selezionato, i visitatori che caricano zip o rar verranno bloccati con un messaggio di tipo file non supportato.

## Messaggi di blocco

Quando viene superato un limite, l'utente vede un messaggio coerente:

![Messaggio di caricamento troppo frequente](../../image/other/频繁报错提示.png)

| Scenario | Significato del messaggio |
| --- | --- |
| Singolo file troppo grande | Il file è troppo grande e va compresso prima del caricamento. |
| Tipo file bloccato | Questo tipo di file non è supportato. Rimuovilo e riprova. |
| Caricamenti troppo frequenti | I caricamenti recenti sono troppo frequenti; viene mostrato quando riprovare. |
| Dimensione totale troppo alta | La dimensione totale recente è troppo alta; viene mostrato quando riprovare. |

## Quando abilitarli

Abilita i limiti utente se la pagina iniziale di caricamento è accessibile pubblicamente.

Motivi comuni:

- temi caricamenti massivi automatizzati.
- vuoi limitare caricamenti grandi da parte dei visitatori.
- vuoi permettere agli utenti normali solo immagini, non archivi o installer.
- vuoi mantenere il caricamento pubblico disponibile controllando il consumo di risorse.

Se il sito è solo per te o solo gli amministratori possono caricare, puoi lasciare questa funzione disattivata.
