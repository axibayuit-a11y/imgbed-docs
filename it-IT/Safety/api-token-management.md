# Gestire la configurazione con API Token

La gestione tramite API Token è pensata per script di automazione, strumenti operativi e pannelli di controllo esterni. Può leggere e modificare canali di caricamento, impostazioni di sicurezza, impostazioni delle pagine, altre impostazioni e relazioni leggere di federazione senza aprire il pannello amministrativo.

Il permesso di gestione espone solo operazioni leggere adatte agli script. Le operazioni pesanti che richiedono conferma nella pagina web, lavori a blocchi dell'interfaccia web o pulizia degli indici di federazione restano nel pannello amministrativo della pagina web.

![Modifica API Token](../../image/Safety/apitoken/编辑api%20token.png)

## Preparazione

Nel pannello di amministrazione apri:

```text
System Settings -> Security Settings -> API Token
```

Quando crei o modifichi un API Token, verifica che abbia il permesso di gestione. Questo permesso può cambiare la configurazione del sito, quindi assegnalo solo a script o utenti fidati.

Le azioni di scrittura dei tre script di gestione sono in anteprima per impostazione predefinita e non salvano nulla. Dopo aver controllato l'anteprima, aggiungi `--apply` per eseguire davvero la modifica.

Puoi anche mettere il Token in una variabile d'ambiente:

```powershell
$env:IMGBED_API_TOKEN="your API Token"
```

## Scaricare gli script di gestione

La documentazione include tre script Node.js:

| Script | Uso |
| --- | --- |
| <a href="/tools/imgbed-token-upload-settings.mjs" download>Scarica lo script per le impostazioni di caricamento</a> | Gestisce canali di caricamento, sottocanali e bilanciamento del carico |
| <a href="/tools/imgbed-token-site-settings.mjs" download>Scarica lo script per le impostazioni del sito</a> | Gestisce sicurezza, pagine e altre impostazioni |
| <a href="/tools/imgbed-token-federation.mjs" download>Scarica lo script di federazione</a> | Gestisce azioni leggere di relazione, richieste e messaggi |

Serve Node.js 18 o superiore installato in locale.

### Parametri comuni

| Parametro | Obbligatorio | Descrizione |
| --- | --- | --- |
| `--base-url <url>` | Sì | Indirizzo del sito ImgBed, ad esempio `https://image.ai6.me` |
| `--token <token>` | Sì | API Token; in alternativa usa `IMGBED_API_TOKEN` |
| `--retries <n>` | No | Tentativi per errori temporanei; predefinito `3` |
| `--timeout-ms <n>` | No | Tempo limite di ogni richiesta; predefinito `180000` |
| `--output <pretty\|json>` | No | Formato di output; predefinito `pretty`; `json` è utile per automazione |
| `--save-response <path>` | No | Salva il risultato finale in JSON |
| `--apply` | No | Esegue davvero la scrittura; senza questo mostra solo l'anteprima |
| `-h` / `--help` | No | Mostra l'aiuto dello script |

## Impostazioni di caricamento

Lo script delle impostazioni di caricamento elenca, legge, crea o modifica ed elimina sottocanali di caricamento. Può anche attivare o disattivare il bilanciamento del carico di un canale principale.

```powershell
node imgbed-token-upload-settings.mjs --base-url "https://your-domain" --token "your API Token" --list
```

### Parametri delle impostazioni di caricamento

| Parametro | Descrizione |
| --- | --- |
| `--list` | Elenca i gruppi di impostazioni di caricamento |
| `--get` | Legge un canale principale o un sottocanale specifico |
| `--upsert` | Crea o modifica un sottocanale; senza `--apply` mostra solo l'anteprima |
| `--delete` | Elimina un sottocanale; senza `--apply` mostra solo l'anteprima |
| `--load-balance <true\|false>` | Attiva o disattiva il bilanciamento del carico di un canale |
| `--channel <key>` | Canale principale, ad esempio `s3`, `github`, `telegram` |
| `--channel-name <name>` | Nome del sottocanale o account |
| `--set key=value` | Imposta un campo; può essere ripetuto e supporta percorsi con punto |
| `--patch-json <path>` | Unisce campi in blocco da un file JSON |
| `--apply` | Salva davvero la modifica |

### Parametri dei canali

| Parametro | Canale |
| --- | --- |
| `telegram` / `tg` | Telegram |
| `discord` / `dc` | Discord |
| `cfr2` / `r2` | Cloudflare R2 |
| `s3` | S3 |
| `webdav` / `wd` | Canale di archiviazione WebDAV |
| `github` / `gh` | GitHub Releases |
| `gitlab` / `gl` | GitLab Packages |
| `huggingface` / `hf` | Hugging Face |
| `onedrive` / `od` | OneDrive |
| `googledrive` / `google` / `gd` | Google Drive |
| `dropbox` / `db` | Dropbox |
| `yandex` / `yx` | Yandex Disk |
| `pcloud` / `pd` | pCloud |

### Esempi per le impostazioni di caricamento

Elencare tutte le impostazioni di caricamento:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --list
```

Leggere la configurazione del canale S3:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get `
  --channel s3
```

Leggere un sottocanale S3:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get `
  --channel s3 `
  --channel-name "backup-s3"
```

Creare o modificare un sottocanale. Prima esegui senza `--apply` per vedere l'anteprima:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --upsert `
  --channel webdav `
  --channel-name "backup-webdav" `
  --set enabled=false `
  --set remark="backup test"
```

Poi salva:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --upsert `
  --channel webdav `
  --channel-name "backup-webdav" `
  --set enabled=false `
  --set remark="backup test" `
  --apply
```

Eliminare un sottocanale:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --delete `
  --channel webdav `
  --channel-name "backup-webdav" `
  --apply
```

Attivare il bilanciamento del carico per S3:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --load-balance true `
  --channel s3 `
  --apply
```

Per modificare campi complessi in blocco, prepara un file JSON e usa `--patch-json`:

```json
{
  "enabled": true,
  "remark": "primary account"
}
```

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --upsert `
  --channel s3 `
  --channel-name "primary-s3" `
  --patch-json ".\s3-channel.json" `
  --apply
```

## Impostazioni del sito

Lo script delle impostazioni del sito gestisce tre aree:

| Area | Parametro | Descrizione |
| --- | --- | --- |
| Sicurezza | `security` | Autenticazione utente, autenticazione admin, dispositivi di login, API Token, moderazione immagini, limiti utente, WebDAV e altro |
| Pagina | `page` | Pagina globale, pagina utente, pagina admin e opzioni visive |
| Altro | `others` | API immagine casuale, galleria pubblica, nodo locale di federazione, tag automatici, geolocalizzazione IP, backup, OCR e altro |

Usa prima `--list-sections` per vedere aree, sezioni e campi supportati:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --list-sections
```

### Parametri delle impostazioni del sito

| Parametro | Descrizione |
| --- | --- |
| `--list-sections` | Elenca aree, sezioni e campi modificabili |
| `--get` | Legge una sezione di configurazione |
| `--area <security\|page\|others>` | Seleziona l'area |
| `--section <name>` | Seleziona la sezione; usa il nome mostrato da `--list-sections` |
| `--set key=value` | Imposta un campo; può essere ripetuto |
| `--apply` | Salva davvero la modifica |

Nell'area `page`, `--set` usa l'id della voce di pagina, ad esempio `starsEffect=true`. Nelle aree `security` e `others`, `--set` usa il nome del campo della sezione, ad esempio `email=admin@example.com`.

### Esempi per le impostazioni del sito

Leggere le notifiche di aggiornamento del sistema:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get `
  --area security `
  --section systemUpdate
```

Modificare l'email delle notifiche di aggiornamento. Prima esegui senza `--apply`:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --area security `
  --section systemUpdate `
  --set email="admin@example.com"
```

Poi salva:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --area security `
  --section systemUpdate `
  --set email="admin@example.com" `
  --apply
```

Modificare l'effetto stelle nella pagina admin:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --area page `
  --section adminSettings `
  --set starsEffect=true `
  --apply
```

Modificare la lingua della geolocalizzazione IP:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --area others `
  --section ipGeolocation `
  --set language="en" `
  --apply
```

La configurazione del nodo locale di federazione può leggere e modificare campi ordinari, come abilitazione, cartelle di sincronizzazione e codici invito. La conferma del dominio non passa dall'API Token; se il pannello segnala che il dominio del nodo locale non coincide con il dominio visitato, conferma dal pannello nella pagina web.

## Relazioni di federazione

Lo script di federazione gestisce stato del nodo locale, nodi a cui mi sono unito, nodi che si sono uniti al mio, messaggi, richieste di adesione, nuova richiesta senza relazione, accettazione, rifiuto e azioni leggere che non richiedono pulizia degli indici.

Aggiornare indici, eliminare indici di federazione e confermare cambi di dominio richiedono il flusso completo della pagina web. Lo script non gestisce queste operazioni pesanti.

### Confine tra operazioni leggere e pesanti

| Operazione | Supporto nello script | Descrizione |
| --- | --- | --- |
| Vedere stato del nodo locale e liste relazioni | Supportato | Solo lettura del registro relazioni |
| Vedere messaggi e inviare messaggi | Supportato | Lettura e scrittura dei messaggi della relazione |
| Richiedere adesione a un altro nodo | Supportato | Avvia la richiesta tramite link invito |
| Rifare richiesta su record senza relazione | Supportato | Solo per scheda `outgoing` con `lastResult=none`; richiede codice invito di 6 caratteri |
| Annullare richiesta `outgoing` in attesa | Supportato | Annulla solo richieste pending |
| Accettare o rifiutare richiesta `incoming` | Supportato | Gestisce solo richieste verso il tuo nodo |
| Rimuovere relazione `incoming` accettata | Supportato | Aggiorna il registro in ingresso e avvisa l'altra parte |
| Eliminare record `incoming` terminale | Supportato | Elimina solo record in ingresso conclusi |
| Annullare sottoscrizione `outgoing` accettata | Pagina web | Richiede eliminazione a blocchi dell'indice locale di federazione |
| Eliminare record `outgoing` terminale | Pagina web | Può richiedere pulizia preventiva dell'indice |
| Confermare o annullare cambio dominio | Pagina web | Richiede conferma del dominio corrente e gestione degli indici |
| Pubblicare, recuperare o eliminare indici in blocco | Pagina web | Sono lavori a blocchi dell'interfaccia web |

### Parametri di federazione

| Parametro | Descrizione |
| --- | --- |
| `--status` | Mostra stato del nodo locale e relazioni nei due sensi |
| `--list` | Elenca le relazioni di federazione |
| `--chat` | Legge i messaggi memorizzati di una relazione |
| `--send-message` | Invia un messaggio a un nodo con relazione stabilita |
| `--join` | Richiede adesione tramite link invito |
| `--reapply` | Rifà richiesta per un record senza relazione; richiede codice invito di 6 caratteri |
| `--accept` | Accetta una richiesta verso il tuo nodo |
| `--deny` | Rifiuta una richiesta verso il tuo nodo |
| `--cancel` | Annulla richiesta `outgoing` pending o rimuove relazione `incoming` accettata |
| `--delete` | Elimina record `incoming` terminale |
| `--direction <outgoing\|incoming\|all>` | Direzione; `outgoing` sono i nodi a cui mi sono unito, `incoming` quelli uniti al mio |
| `--domain <url>` | Dominio del nodo della relazione |
| `--invite-link <url>` | Link invito dell'altro nodo |
| `--invite-code <code>` | Codice invito di 6 caratteri per `--reapply` |
| `--text <message>` | Testo del messaggio |
| `--apply` | Salva davvero la modifica |

### Esempi di federazione

Vedere stato locale e relazioni:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --status
```

Elencare solo i nodi a cui mi sono unito:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --list `
  --direction outgoing
```

Elencare solo i nodi uniti al mio:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --list `
  --direction incoming
```

Richiedere adesione tramite link invito. Prima esegui senza `--apply`:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --join `
  --invite-link "https://peer-domain/federation/invite/abcdef"
```

Poi salva:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --join `
  --invite-link "https://peer-domain/federation/invite/abcdef" `
  --apply
```

Rifare richiesta per un record senza relazione:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --reapply `
  --domain "https://peer-domain" `
  --invite-code "abc123" `
  --apply
```

Accettare una richiesta verso il tuo nodo:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --accept `
  --domain "https://peer-domain" `
  --apply
```

Rifiutare una richiesta verso il tuo nodo:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --deny `
  --domain "https://peer-domain" `
  --apply
```

Inviare un messaggio a un nodo con relazione stabilita:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --send-message `
  --direction outgoing `
  --domain "https://peer-domain" `
  --text "Hello, this is a test message." `
  --apply
```

Annullare una richiesta `outgoing` pending:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --cancel `
  --direction outgoing `
  --domain "https://peer-domain" `
  --apply
```

Rimuovere una relazione `incoming` accettata:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --cancel `
  --direction incoming `
  --domain "https://peer-domain" `
  --apply
```

Eliminare un record `incoming` terminale:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --delete `
  --direction incoming `
  --domain "https://peer-domain" `
  --apply
```

L'annullamento di una sottoscrizione `outgoing` accettata e l'eliminazione di record `outgoing` devono restare nel pannello della pagina web, perché possono richiedere prima la pulizia dell'indice locale di federazione.

### Dominio non coerente

Se il dominio salvato nel nodo locale e il dominio pending della relazione non coincidono, lo script restituisce subito errore e mostra `currentDomain` e `pendingDomain`. Questa situazione va risolta nella pagina web, perché dopo un cambio dominio servono anche conferma e pulizia degli indici in uscita.

Se durante la richiesta di adesione l'altra parte restituisce `FEDERATION_NODE_DOMAIN_MISMATCH`, il dominio del link invito non corrisponde al dominio salvato nel nodo locale dell'altra parte. L'API restituisce `currentOrigin` e `detectedOrigin`; usa il dominio corrente confermato dall'altra parte oppure chiedi all'altra parte di confermarlo nel pannello della pagina web.

## Domande frequenti

### Perché il comando di modifica non ha effetto

I comandi di scrittura sono in anteprima per impostazione predefinita. Dopo aver controllato l'anteprima, aggiungi `--apply` per salvare davvero.

### Come so quali campi posso modificare

Per le impostazioni di caricamento usa prima `--get` per vedere la struttura del sottocanale esistente. Per sicurezza, pagina e altre impostazioni usa prima `--list-sections` per vedere aree, sezioni e campi consentiti.

### Voglio usare il risultato in un altro programma

Usa `--output json` oppure `--save-response result.json`. Il programma può leggere direttamente il file JSON salvato.



