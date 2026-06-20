# Impostazioni pagina

Le impostazioni pagina controllano aspetto del sito, valori predefiniti della pagina di upload, sfondi e stile del pannello admin.

## Impostazioni globali

| Opzione | Scopo |
| --- | --- |
| Titolo sito | Titolo mostrato nella scheda del browser. |
| Icona sito | Piccola icona mostrata nella scheda del browser. |
| Nome ImgBed | Nome mostrato nelle pagine frontend. |
| Logo ImgBed | Logo mostrato nelle pagine frontend. |
| Link logo | URL aperto cliccando logo o avatar. |
| Intervallo cambio sfondo | Intervallo di rotazione per più sfondi, in millisecondi. `60000` significa 60 secondi. |
| Opacità sfondo | Opacità dell'immagine di sfondo da `0` a `1`. Valori più bassi sono più chiari. |
| Prefisso URL predefinito | Prefisso usato per generare link immagine. Vuoto significa usare il dominio corrente del sito. |

## Impostazioni client

| Opzione | Scopo |
| --- | --- |
| Annuncio | Avviso mostrato in alto nella pagina upload. HTML supportato. |
| Canale upload predefinito | Canale selezionato di default nella pagina upload. Puoi anche scegliere Smart Dispatch. |
| Directory upload predefinita | Directory predefinita, per esempio `/user/`. Vuoto o `/` significa radice. |
| Metodo nome predefinito | Strategia predefinita per generare il nome file dopo upload. Vedi sotto. |
| Converti in WebP di default | Converte immagini in WebP prima dell'upload. |
| Abilita compressione di default | Comprime immagini localmente nel browser prima dell'upload. |
| Soglia compressione predefinita | Comprimi automaticamente quando un'immagine supera questa dimensione, in MB. |
| Dimensione target predefinita | Dimensione file desiderata dopo compressione, in MB. |
| Sfondo pagina login | Immagine di sfondo per la pagina login utente. |
| Sfondo pagina upload | Immagine di sfondo per la pagina upload. |
| Link portale footer | URL aperto dal pulsante portale nel footer. |
| Nascondi footer | Nasconde il footer frontend quando attivo. |

## Impostazioni admin

| Opzione | Scopo |
| --- | --- |
| Sfondo login admin | Immagine di sfondo per la pagina login admin. |
| Sfondo admin | Immagine di sfondo per le pagine admin. Puoi usare un URL o più URL. |
| Modalità caricamento immagini | Modalità anteprima per la lista file admin. Original carica immagini originali. Smart loading preferisce miniature per immagini pubbliche e originali per immagini limitate. |
| Origine miniature | Servizio usato per generare miniature: wsrv.nl, Cloudflare Image Resizing o WordPress Photon. Cloudflare Image Resizing deve essere abilitato in Cloudflare prima di selezionarlo. |
| Widget Live2D | Mostra un personaggio Live2D nel pannello admin. |
| Effetto fuochi d'artificio al clic | Mostra un effetto fuochi d'artificio quando clicchi la pagina. |
| Scia stellata cursore | Mostra una scia di stelle quando muovi il mouse. |

## Formati sfondo

Sfondo pagina login, sfondo pagina upload e sfondo login admin supportano questi valori:

| Valore | Effetto |
| --- | --- |
| `bing` | Usa la rotazione sfondi di Bing. |
| `["https://example.com/1.jpg","https://example.com/2.jpg"]` | Ruota più immagini. |
| `["https://example.com/1.jpg"]` | Usa una singola immagine di sfondo. |
| `["https://your-domain.com/random?..."]` | Usa un link Random Image API. Puoi configurare la tua Random Image API in Altre impostazioni e incollare qui il link generato come singolo sfondo. |

Lo sfondo admin supporta URL immagine. Più URL possono essere separati da virgole inglesi, come indicato nella pagina. Vuoto significa usare lo sfondo predefinito.

## Metodo nome predefinito

| Metodo | Risultato |
| --- | --- |
| Default | Prefisso tempo-casuale + nome originale, per esempio `1760000000000_cat.png`. |
| Solo prefisso | Prefisso tempo-casuale ed estensione, per esempio `1760000000000.png`. |
| Solo nome originale | Mantiene il nome originale, per esempio `cat.png`. Se duplicato, ImgBed aggiunge `(1)`, `(2)` e così via. |
| Link breve | Usa un ID breve di 8 caratteri ed estensione, per esempio `a1b2c3d4.png`. |
