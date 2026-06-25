# Geolocalizzazione IP e gestione utenti

La geolocalizzazione IP converte gli indirizzi IP presenti nei record di caricamento, nei dispositivi di accesso e in log simili in posizioni geografiche approssimative.

Dopo la configurazione, il pannello di amministrazione può mostrare in modo più chiaro l'origine dei caricamenti e degli accessi. La gestione utenti consente inoltre di bloccare o ripristinare l'accesso al caricamento per gli indirizzi IP sospetti.

## Dove configurarla

Apri:

```text
System Settings -> Other Settings -> IP Geolocation
```

![Geolocalizzazione IP](../../image/other/ip定位/ip定位.png)

## Impostazioni disponibili

Il nuovo flusso di geolocalizzazione IP supporta più origini, invece di dipendere da un solo servizio di mappe.

| Impostazione | Scopo |
| --- | --- |
| Lingua della geolocalizzazione IP | Sceglie la lingua di visualizzazione, per esempio inglese, cinese semplificato, giapponese, francese e altre. |
| MaxMind Account ID | Account ID MaxMind per MaxMind GeoLite Web Service. |
| MaxMind License Key | License Key MaxMind. |
| Tencent Map Key | Chiave Tencent Location Service, utile per indirizzi cinesi e IP della Cina continentale. |
| ipapi Key | Chiave APILayer ipapi. Supporta geolocalizzazione IP multilingue. |

Compila solo i servizi che ti servono. Non è necessario riempire tutti i campi.

Se non fornisci alcuna chiave, ImgBed prova comunque a usare origini gratuite integrate, ma stabilità, supporto linguistico e precisione possono essere inferiori rispetto a un servizio configurato da te.

## Scelte consigliate

Se ti servono soprattutto indirizzi cinesi:

1. Imposta la lingua della geolocalizzazione IP su cinese semplificato.
2. Configura Tencent Map Key.
3. Opzionalmente aggiungi MaxMind o ipapi come fallback.

Se ti servono indirizzi inglesi o multilingue:

1. Scegli la lingua necessaria.
2. Configura MaxMind Account ID e License Key.
3. Aggiungi un ipapi Key se ti servono risultati multilingue migliori.

## Configurare MaxMind

MaxMind richiede:

```text
MaxMind Account ID
MaxMind License Key
```

Trova l'Account ID nella dashboard MaxMind e genera una License Key dalla pagina License Keys.

![Configurazione chiave MaxMind](../../image/other/ip定位/maxmind的key配置.png)

Dopo la generazione, incolla Account ID e License Key in ImgBed e salva.

Il piano gratuito di MaxMind è adatto all'uso quotidiano, ma prevede limiti di richieste. Se la quota viene superata, ImgBed continua a provare le altre origini disponibili.

## Configurare ipapi

ipapi usa una API Key di APILayer.

Apri la console di ipapi e copia l'API Key mostrata.

![Configurazione ipapi](../../image/other/ip定位/ipapi配置.png)

Incollala nel campo `ipapi Key` in ImgBed e salva.

ipapi supporta la geolocalizzazione IP multilingue ed è utile quando vuoi mostrare gli indirizzi nella lingua selezionata. Anche il piano gratuito prevede limiti di richieste. Se la quota si esaurisce, ImgBed continua a provare le altre origini disponibili.

## Configurare Tencent Map Key

Tencent Map Key è utile per indirizzi cinesi, soprattutto IP della Cina continentale.

Quando crei una chiave in Tencent Location Service, abilita:

```text
WebServiceAPI
```

Dopo la creazione, incolla la chiave in `Tencent Map Key` e salva.

Se ti serve solo una geolocalizzazione IP di base per indirizzi cinesi, Tencent Map Key è sufficiente per iniziare.

## Cosa controllare nella gestione utenti

La gestione utenti è disponibile nella parte superiore del pannello di amministrazione.

![Gestione utenti](../../image/other/用户管理显示.png)

La gestione utenti mostra l'attività di caricamento per IP:

| Campo | Descrizione |
| --- | --- |
| Origine IP | IP di origine di chi carica i file. |
| Indirizzo | Posizione approssimativa risolta dall'IP. |
| Dimensione totale caricata | Dimensione totale dei file caricati da questo IP. |
| Numero di caricamenti | Numero di caricamenti da questo IP. |
| Caricamento consentito | Attivo significa che i caricamenti sono consentiti. Disattivo significa che i caricamenti sono bloccati. |

Fai clic sulla freccia a sinistra per espandere l'elenco dei file caricati da quell'IP.

L'elenco mostra nome del file, anteprima, dimensione del file, risultato della moderazione, stato del file e ora di caricamento. Se i caricamenti sembrano sospetti, espandi prima l'IP, controlla i file e poi decidi se bloccare ulteriori caricamenti.

Se un IP è sospetto, disattiva `Upload allowed`. I caricamenti futuri da quell'IP verranno bloccati.

## Ricerca, ordinamento e filtri avanzati

Nella parte superiore della gestione utenti puoi cercare per IP di origine o indirizzo.

Ordina per ora, numero di caricamenti o dimensione totale caricata per individuare chi ha caricato file di recente, chi carica con alta frequenza o gli IP con maggiore utilizzo di spazio.

Per indagini più precise, apri i filtri avanzati.

![Filtri avanzati](../../image/other/用户管理高级筛选.png)

I filtri avanzati supportano:

| Filtro | Uso |
| --- | --- |
| Intervallo di tempo | Mostra gli IP che hanno caricato file durante un periodo selezionato. |
| Stato di accesso | Filtra per stati normali, bloccati e simili. |
| Elenco consentiti/bloccati | Filtra per allowlist, blocklist o non impostato. |
| Tipo di file | Mostra gli IP che hanno caricato immagini, video, audio, documenti, codice o altri file. |
| Dimensione del file | Filtra per intervallo di dimensione dei file caricati. |
| Classificazione per età | Filtra per non impostato, General, R12+, R16+, R18 e classificazioni simili. |
| Stato del file | Filtra per stato corrente del file per indagare sui file anomali. |

Clicca `Apply Filters` per applicare. Usa `Reset` per tornare a tutti i dati.

## Vista mobile

Su mobile, la gestione utenti passa a un layout a schede.

![Gestione utenti mobile](../../image/other/手机端显示用户管理效果.png)

Ogni scheda mostra IP, indirizzo, dimensione totale caricata, numero di caricamenti e interruttore per consentire il caricamento. Puoi gestire gli utenti senza scorrere orizzontalmente la tabella.

## Se la posizione sembra sbagliata

La geolocalizzazione IP è approssimativa. Non è un indirizzo stradale preciso.

Se l'utente passa attraverso un proxy, un data center, un server cloud o una rete transfrontaliera, la posizione mostrata può differire da quella reale.

Usa questa funzione per capire l'origine approssimativa, individuare caricamenti anomali e supportare le decisioni di blocco. Non considerarla uno strumento di tracciamento preciso.

## Casi comuni

| Caso | Significato |
| --- | --- |
| Indirizzo vuoto | L'IP potrebbe non essere ancora stato risolto oppure l'origine corrente potrebbe essere temporaneamente non disponibile. |
| Lingua dell'indirizzo errata | Controlla la lingua della geolocalizzazione IP e verifica che sia configurata un'origine che supporta quella lingua. |
| Indirizzo indicato come data center | Molti proxy, server cloud e crawler appaiono come indirizzi di data center o ISP. |
| Numero di caricamenti elevato | Controlla attentamente questo IP e blocca i caricamenti se necessario. |
| Dimensione totale caricata elevata | Ordina o filtra, espandi l'IP e ispeziona i file specifici. |
| Necessità di ripristinare dopo il blocco | Riattiva `Upload allowed`. |

## Flusso rapido

```text
Open IP Geolocation in Other Settings
-> Choose IP geolocation language
-> Fill MaxMind, Tencent Map, or ipapi credentials as needed
-> Save settings
-> Open User Management
-> Review IP source, address, total upload size, and upload count
-> Use search, sort, or advanced filters to find abnormal IPs
-> Allow or block uploads as needed
```
