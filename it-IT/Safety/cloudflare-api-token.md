# Token API Cloudflare

Le credenziali API Cloudflare permettono a ImgBed di svuotare la cache CDN di Cloudflare dopo modifiche ai file.

![Impostazioni Token API Cloudflare](../../image/Safety/cloudflare%20api%20token截图.png)

## Dove configurare

Apri il pannello admin e vai a:

```text
System Settings -> Security Settings -> Cloudflare API Token
```

Devi compilare:

- Zone ID
- Email account
- API Key

## A cosa serve

Cloudflare può mettere in cache gli URL pubblici delle immagini.

La cache rende la distribuzione più veloce, ma può lasciare visibili contenuti vecchi per un po' dopo eliminazione, blocco, sostituzione o spostamento di un file.

Quando le credenziali API Cloudflare sono configurate, ImgBed prova a svuotare la cache Cloudflare collegata al termine di queste operazioni.

È utile quando:

- elimini un'immagine e vuoi che il link pubblico smetta di funzionare il prima possibile.
- blocchi un'immagine e vuoi impedire ai visitatori di vedere il file originale.
- sostituisci un file con lo stesso nome e vuoi mostrare prima la nuova versione.
- sposti o rinomini file e vuoi aggiornare rapidamente la cache dei vecchi percorsi.
- cambi regole di accesso pubblico e vuoi aggiornare prima gallery pubblica o cache dell'immagine casuale.

## Se lo lasci vuoto

ImgBed funziona normalmente anche senza questa impostazione.

La differenza è che ImgBed non svuoterà attivamente la cache CDN Cloudflare. I visitatori potrebbero vedere il contenuto vecchio finché la cache Cloudflare non scade da sola.

## Trovare lo Zone ID

Lo Zone ID è lo Zone ID Cloudflare del sito usato dalla tua domain ImgBed.

1. Accedi alla dashboard Cloudflare.
2. Apri il sito che contiene il dominio ImgBed.
3. Trova `Zone ID` nella pagina panoramica del sito.
4. Copialo nel campo `Zone ID` di ImgBed.

È lo Zone ID del sito, non l'Account ID.

## Email account

Inserisci l'indirizzo email con cui accedi a Cloudflare.

Deve corrispondere all'API Key che inserisci sotto.

## API Key

Inserisci la Cloudflare Global API Key.

1. Accedi alla dashboard Cloudflare.
2. Apri il tuo profilo.
3. Vai alla pagina API Tokens.
4. Trova `Global API Key`.
5. Visualizzala e copiala.
6. Incollala nel campo `API Key` di ImgBed.

![Visualizza Global API Key](../../image/Safety/查看全局令牌.png)

## Quando entra in funzione

Dopo aver compilato i campi, salva le impostazioni.

Le modifiche future ai file proveranno automaticamente a svuotare la cache Cloudflare. Le operazioni passate non vengono gestite retroattivamente. Se hai eliminato o sostituito un file prima della configurazione, attendi la scadenza della cache o svuotala manualmente da Cloudflare.

## FAQ

### È obbligatorio?

No.

Se il tuo dominio non usa Cloudflare o non ti dà fastidio il ritardo della cache CDN, puoi lasciarlo vuoto.

### Credenziali sbagliate bloccano gli upload?

Di solito no.

Credenziali errate impediscono solo lo svuotamento della cache Cloudflare. Upload e accesso normale ai file dovrebbero continuare a funzionare.

### Perché un'immagine eliminata si apre ancora?

La causa più comune è che Cloudflare ha ancora il vecchio file in cache.

Con credenziali API Cloudflare corrette, ImgBed svuota la cache dell'URL collegato quando un file viene eliminato.

### Perché vedo ancora la vecchia immagine dopo una sostituzione?

Anche questo dipende spesso dalla cache CDN.

Dopo la configurazione, ImgBed prova a svuotare la cache del vecchio URL quando un file con lo stesso nome viene sovrascritto.
