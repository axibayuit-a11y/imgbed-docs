# Elencare e filtrare con API Token

Lo script di elenco con API Token è pensato per script, automazioni e programmi di terze parti che devono leggere dati da ImgBed. Usa solo il permesso `list`. Non carica file, non elimina file, non modifica configurazioni e non blocca né consente caricamenti per alcun IP.

Usi principali:

| Funzione | Descrizione |
| --- | --- |
| Elenco della gestione file | Legge l'elenco dei file dal pannello di amministrazione e supporta i parametri di filtro avanzati della gestione file |
| Elenco della gestione utenti | Legge le statistiche di caricamento per utente/IP e supporta i parametri di filtro della gestione utenti |
| Elenco dei canali di caricamento | Legge canali di caricamento, sottocanali, capacità e informazioni di bilanciamento del carico con i dati sensibili rimossi |
| Tabella delle statistiche cartelle | Legge statistiche delle cartelle e informazioni di paginazione delle cartelle |

## Preparazione

Nel pannello di amministrazione apri:

```text
System Settings -> Security Settings -> API Token
```

Quando crei o modifichi un API Token, verifica che il Token consenta l'elenco. Questo script richiede solo il permesso `list`.

Puoi anche mettere il Token in una variabile d'ambiente:

```powershell
$env:IMGBED_API_TOKEN="your API Token"
```

## Scaricare lo script

| Script | Uso |
| --- | --- |
| <a href="/tools/imgbed-token-list.mjs" download>Scarica lo script di elenco e filtro</a> | Elenco della gestione file, elenco della gestione utenti, elenco dei canali di caricamento e statistiche cartelle |

Serve Node.js 18 o superiore installato in locale.

## Parametri comuni

| Parametro | Obbligatorio | Descrizione |
| --- | --- | --- |
| `--base-url <url>` | Sì | Indirizzo del sito ImgBed, ad esempio `https://image.ai6.me` |
| `--token <token>` | Sì | API Token; in alternativa usa la variabile d'ambiente `IMGBED_API_TOKEN` |
| `--retries <n>` | No | Tentativi per errori temporanei; predefinito `3` |
| `--timeout-ms <n>` | No | Tempo limite della singola richiesta; predefinito `180000` |
| `--output <pretty\|json>` | No | Formato di output; predefinito `pretty`; per l'uso da programmi è meglio `json` |
| `--save-response <path>` | No | Salva il risultato finale in un file JSON |
| `-h` / `--help` | No | Mostra l'aiuto dello script |

## Elenco della gestione file

Elencare i file nella gestione file:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --count 10
```

Output JSON:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --count 10 `
  --output json
```

Leggere solo il numero secondo i filtri correnti:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --file-summary `
  --dir "photos/2026" `
  --recursive
```

### Parametri della gestione file

| Parametro | Descrizione |
| --- | --- |
| `--files` | Elenca i file |
| `--file-summary` | Legge solo il conteggio |
| `--start <n>` | Offset di paginazione |
| `--count <n>` | Numero di record restituiti |
| `--dir <path>` | Cartella specificata |
| `--recursive` | Include i file nelle sottocartelle |
| `--search <text>` | Parola chiave di ricerca |
| `--channel <key>` | Filtra per canale principale di caricamento, ad esempio `github`, `s3` o `yandex` |
| `--channel-scope <primary\|backup\|all>` | Ambito del filtro canale: canale principale, canale di backup o tutti |
| `--channel-name-groups <value>` | Filtro dei gruppi di sottocanali; viene passato al server nel formato esistente |
| `--list-type <csv>` | Tipo di lista, di solito `None,White,Block` |
| `--include-tags <csv>` | Richiede questi tag |
| `--exclude-tags <csv>` | Esclude questi tag |
| `--time-start <ms>` | Inizio del periodo di caricamento, marca temporale in millisecondi |
| `--time-end <ms>` | Fine del periodo di caricamento, marca temporale in millisecondi |
| `--file-exts <csv>` | Include solo estensioni specifiche, ad esempio `jpg,png,pdf` |
| `--exclude-file-exts <csv>` | Esclude estensioni specifiche |
| `--file-status-categories <csv>` | Categorie file: `image,audio,video,document,code,other` |
| `--upload-ip <ip>` | Filtra per prefisso dell'IP di caricamento |
| `--age-ratings <csv>` | Classificazioni d'età: `none,all-ages,r12,r16,r18` |
| `--orientation <csv>` | Filtro di orientamento; viene passato al server con i valori esistenti |
| `--read-source <csv>` | Filtro della sorgente di lettura; viene passato al server con i valori esistenti |
| `--access-status <normal\|blocked>` | Stato di accesso pubblico |
| `--min-width <n>` | Larghezza minima |
| `--max-width <n>` | Larghezza massima |
| `--min-height <n>` | Altezza minima |
| `--max-height <n>` | Altezza massima |
| `--min-file-size <mb>` | Dimensione minima del file; usa il parametro MB esistente del server |
| `--max-file-size <mb>` | Dimensione massima del file; usa il parametro MB esistente del server |

### Esempi per la gestione file

Cercare PDF:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --search "pdf" `
  --file-status-categories "document" `
  --count 20
```

Filtrare per IP di caricamento e canale:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --upload-ip "103.62" `
  --channel yandex `
  --channel-scope primary
```

Salvare il risultato completo:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --count 100 `
  --output json `
  --save-response ".\files.json"
```

## Elenco della gestione utenti

Elencare le statistiche di caricamento per utente/IP:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --count 20
```

Cercare un IP o un indirizzo:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --search "43.198.183.56"
```

Vedere i dettagli dei file caricati da un IP:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --user-detail `
  --ip "43.198.183.56" `
  --count 20
```

Elencare gli IP bloccati dal caricamento:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --blocked-ips
```

### Parametri della gestione utenti

| Parametro | Descrizione |
| --- | --- |
| `--users` | Elenca le statistiche di caricamento per utente/IP |
| `--user-detail` | Mostra i dettagli dei file caricati da un IP specifico |
| `--blocked-ips` | Elenca gli IP bloccati dal caricamento |
| `--ip <ip>` | Obbligatorio con `--user-detail` |
| `--start <n>` | Offset di paginazione |
| `--count <n>` | Numero di record restituiti |
| `--sort <value>` | Ordinamento: `timeDesc`, `timeAsc`, `countDesc`, `countAsc`, `totalSizeDesc`, `totalSizeAsc` |
| `--search <text>` | Cerca IP o indirizzo |
| `--upload-status <allowed\|blocked>` | Se il caricamento è consentito |
| `--start-time <ms>` | Inizio del periodo statistico, marca temporale in millisecondi |
| `--end-time <ms>` | Fine del periodo statistico, marca temporale in millisecondi |
| `--file-status-categories <csv>` | Filtro categoria file |
| `--age-ratings <csv>` | Filtro classificazione d'età |
| `--min-file-size <mb>` | Dimensione minima del file |
| `--max-file-size <mb>` | Dimensione massima del file |
| `--list-type <csv>` | Tipo di lista, di solito `None,White,Block` |
| `--access-status <normal\|blocked>` | Stato di accesso pubblico |

### Esempi per la gestione utenti

Elencare gli utenti bloccati dal caricamento:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --upload-status blocked
```

Cercare per parola chiave dell'indirizzo:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --search "Hong Kong"
```

Ordinare per numero di caricamenti:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --sort countDesc `
  --count 50
```

## Elenco dei canali di caricamento

Elencare la configurazione dei canali di caricamento con dati sensibili rimossi:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --channels
```

I dati restituiti includono:

| Campo | Descrizione |
| --- | --- |
| `type` | Tipo del canale principale di caricamento, ad esempio `github`, `s3` o `yandex` |
| `name` | Nome del sottocanale o dell'account |
| `enabled` | Se è attivo |
| `load_balance_enabled` | Se il bilanciamento del carico è attivo per questo tipo di canale |
| `quota_enabled` | Se il controllo della capacità è attivo |
| `quota_limit_bytes` | Limite di capacità |
| `quota_used_bytes` | Capacità usata |
| `quota_checked_at` | Ora del controllo capacità |
| `tag_json` | Tag non sensibili, ad esempio repository pubblico o repository privato |
| `created_at` / `updated_at` | Ora di creazione e aggiornamento |

Questa interfaccia non restituisce chiavi segrete, token di aggiornamento, token temporanei, parole d\'ordine o altre configurazioni sensibili.

## Tabella delle statistiche cartelle

Elencare le statistiche delle cartelle:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --directories `
  --limit 20
```

Elencare i percorsi completi delle cartelle e cercare per prefisso:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --directories `
  --scope full `
  --search-prefix "test" `
  --include-parents `
  --limit 10
```

### Parametri delle statistiche cartelle

| Parametro | Descrizione |
| --- | --- |
| `--directories` | Elenca la tabella delle statistiche cartelle |
| `--dir <path>` | Cartella da cui iniziare l'elenco |
| `--scope <direct\|full>` | `direct` elenca solo le cartelle dirette, `full` elenca i percorsi completi |
| `--search-prefix <path>` | Cerca per prefisso della cartella |
| `--include-parents` | In modalità `full`, include anche le cartelle superiori |
| `--limit <n>` | Numero di record restituiti; massimo server `100` |
| `--cursor <path>` | Cursore della pagina successiva |

## Formato di output

L'output predefinito `pretty` è adatto alla lettura umana:

```powershell
node imgbed-token-list.mjs --base-url "https://your-domain" --token "your API Token" --users --count 5
```

Per elaborare il risultato con altri programmi, usa `--output json`:

```powershell
node imgbed-token-list.mjs --base-url "https://your-domain" --token "your API Token" --users --count 5 --output json
```

Puoi anche salvare il risultato completo:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --count 5 `
  --output json `
  --save-response ".\users.json"
```

## Domande frequenti

### Questo script modifica i dati?

No. Questo script chiama solo interfacce di lettura. Non carica, non elimina, non sposta, non modifica configurazioni e non blocca né consente caricamenti per alcun IP.

### Perché serve il permesso `list`?

Elenco della gestione file, elenco della gestione utenti, elenchi dei canali con dati sensibili rimossi e statistiche delle cartelle sono funzioni di lettura, quindi l'API Token richiede solo il permesso `list`.

### Come verificare tutti i parametri disponibili?

Esegui:

```powershell
node imgbed-token-list.mjs --help
```

Lo script elenca tutte le azioni e i parametri.



