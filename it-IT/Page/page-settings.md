# Impostazioni pagina

Le impostazioni pagina controllano l'aspetto del sito, i valori predefiniti della pagina di caricamento, gli sfondi e lo stile del pannello di amministrazione.

## Impostazioni globali

| Opzione | Scopo |
| --- | --- |
| Titolo sito | Titolo mostrato nella scheda del browser. |
| Icona sito | Piccola icona mostrata nella scheda del browser. |
| Nome ImgBed | Nome mostrato nelle pagine dell'interfaccia pubblica. |
| Logo ImgBed | Logo mostrato nelle pagine dell'interfaccia pubblica. |
| Link logo | URL aperto cliccando il logo o l'immagine del profilo. |
| Intervallo cambio sfondo | Intervallo di rotazione per più sfondi, in millisecondi. `60000` significa 60 secondi. |
| Opacità sfondo | Opacità dell'immagine di sfondo da `0` a `1`. Valori più bassi sono più chiari. |
| Prefisso URL predefinito | Prefisso usato per generare link immagine. Vuoto significa usare il dominio corrente del sito. |

## Impostazioni client

| Opzione | Scopo |
| --- | --- |
| Annuncio | Avviso mostrato in alto nella pagina di caricamento. HTML è supportato. |
| Canale di caricamento predefinito | Canale selezionato per impostazione predefinita nella pagina di caricamento. Puoi anche scegliere Smart Dispatch. |
| Directory di caricamento predefinita | Directory di caricamento predefinita, per esempio `/user/`. Vuoto o `/` significa radice. |
| Metodo di denominazione predefinito | Strategia predefinita per generare il nome file dopo il caricamento. Vedi sotto. |
| Converti in WebP per impostazione predefinita | Converte le immagini in WebP prima del caricamento. |
| Abilita compressione per impostazione predefinita | Comprime le immagini localmente nel browser prima del caricamento. |
| Soglia compressione predefinita | Comprime automaticamente quando un'immagine supera questa dimensione, in MB. |
| Dimensione obiettivo predefinita | Dimensione file desiderata dopo compressione, in MB. |
| Sfondo pagina di accesso | Immagine di sfondo per la pagina di accesso utente. |
| Sfondo pagina di caricamento | Immagine di sfondo per la pagina di caricamento. |
| Link portale del piè di pagina | URL aperto dal pulsante portale nel piè di pagina. |
| Nascondi piè di pagina | Nasconde il piè di pagina dell'interfaccia pubblica quando attivo. |

## Impostazioni di amministrazione

| Opzione | Scopo |
| --- | --- |
| Sfondo accesso amministrazione | Immagine di sfondo per la pagina di accesso dell'amministrazione. |
| Sfondo amministrazione | Immagine di sfondo per le pagine di amministrazione. Puoi usare un URL immagine o più URL. |
| Modalità caricamento immagini | Modalità di caricamento delle anteprime per l'elenco file dell'amministrazione. La modalità originale carica le immagini originali. Il caricamento intelligente preferisce le miniature per le immagini pubbliche e gli originali per le immagini con restrizioni. |
| Origine miniature | Servizio usato per generare miniature: wsrv.nl, Cloudflare Image Resizing o WordPress Photon. Cloudflare Image Resizing deve essere abilitato in Cloudflare prima di selezionarlo. |
| Widget Live2D | Mostra un personaggio Live2D nel pannello di amministrazione. |
| Effetto fuochi d'artificio al clic | Mostra un effetto fuochi d'artificio quando clicchi la pagina. |
| Scia stellata cursore | Mostra una scia di stelle quando muovi il mouse. |

## Formati delle immagini di sfondo

Sfondo pagina di accesso, sfondo pagina di caricamento e sfondo accesso amministrazione supportano questi formati:

| Valore | Effetto |
| --- | --- |
| `bing` | Usa la rotazione degli sfondi di Bing. |
| `["https://example.com/1.jpg","https://example.com/2.jpg"]` | Ruota più immagini. |
| `["https://example.com/1.jpg"]` | Usa una singola immagine di sfondo. |
| `["https://your-domain.com/random?..."]` | Usa un link all'API per immagini casuali. Puoi configurare la tua API per immagini casuali in Altre impostazioni e incollare qui il link generato come voce per un singolo sfondo. |

Lo sfondo amministrazione supporta URL immagine. Più URL possono essere separati da virgole inglesi, come indicato nella pagina. Vuoto significa usare lo sfondo predefinito.

## Metodo di denominazione predefinito

| Metodo | Risultato |
| --- | --- |
| Predefinito | Prefisso casuale basato sul tempo + nome file originale, per esempio `1760000000000_cat.png`. |
| Solo prefisso | Solo prefisso casuale basato sul tempo ed estensione, per esempio `1760000000000.png`. |
| Solo nome originale | Mantiene il nome originale, per esempio `cat.png`. Se duplicato, ImgBed aggiunge `(1)`, `(2)` e così via. |
| Link breve | Usa un ID breve di 8 caratteri ed estensione, per esempio `a1b2c3d4.png`. |
