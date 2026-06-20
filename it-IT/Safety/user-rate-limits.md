# Limiti di frequenza per gli utenti

I limiti di frequenza controllano quanto spesso utenti normali o visitatori possono caricare file dalla homepage. Servono a evitare abusi sulle pagine di upload pubbliche.

Questa funzione riguarda solo gli upload dalla homepage. Gli upload admin e quelli fatti con API Token non sono limitati da queste regole.

## Dove configurare

Apri il pannello admin e vai a:

```text
System Settings -> Security Settings -> Upload Management -> User Rate Limits
```

![Impostazioni limiti utente](../../image/other/用户频控截图.png)

## Abilitare i limiti

Dopo aver attivato `Enable Rate Limits`, ImgBed tiene traccia degli upload recenti in base all'indirizzo IP di chi carica.

Valori predefiniti:

| Impostazione | Default | Descrizione |
| --- | --- | --- |
| Finestra di rilevamento | 1,5 ore | Quanto indietro contare i record di upload. |
| Numero massimo file | 20 | Numero massimo di file consentiti nella finestra. |
| Limite singolo file | 20 MB | Dimensione massima di un file. |
| Limite totale upload | 200 MB | Dimensione totale massima nella finestra. |

Per esempio, con finestra di 1,5 ore, 20 file, 20 MB per file e 200 MB totali, gli upload dallo stesso IP vengono bloccati appena uno dei limiti configurati viene superato.

## Escludere tipi di file

`Excluded upload file types` blocca agli utenti normali o visitatori il caricamento di categorie selezionate.

Categorie disponibili:

| Tipo | Descrizione |
| --- | --- |
| Images | jpg, png, webp, gif e file immagine simili |
| Videos | mp4, webm, mov e file video simili |
| Audio | mp3, flac, wav e file audio simili |
| Documents | pdf, txt, md, docx e documenti simili |
| Other | File fuori dalle categorie sopra, come zip, rar, exe, apk |

Di default un tipo non selezionato è consentito.

Quando clicchi un tipo e viene evidenziato, quel tipo è bloccato.

Se `Other` è selezionato, i visitatori che caricano zip o rar verranno bloccati con un messaggio di tipo file non supportato.

## Messaggi di blocco

Quando viene superato un limite, l'utente vede un messaggio coerente:

![Messaggio upload troppo frequente](../../image/other/频繁报错提示.png)

| Scenario | Significato del messaggio |
| --- | --- |
| Singolo file troppo grande | Il file è troppo grande e va compresso prima dell'upload. |
| Tipo file bloccato | Questo tipo di file non è supportato. Rimuovilo e riprova. |
| Upload troppo frequenti | Gli upload recenti sono troppo frequenti; viene mostrato quando riprovare. |
| Dimensione totale troppo alta | La dimensione totale recente è troppo alta; viene mostrato quando riprovare. |

## Quando abilitarli

Abilita i limiti utente se la homepage di upload è accessibile pubblicamente.

Motivi comuni:

- temi upload massivi automatizzati.
- vuoi limitare upload grandi da parte dei visitatori.
- vuoi permettere agli utenti normali solo immagini, non archivi o installer.
- vuoi mantenere l'upload pubblico disponibile controllando il consumo di risorse.

Se il sito è solo per te o solo gli amministratori possono caricare, puoi lasciare questa funzione disattivata.
