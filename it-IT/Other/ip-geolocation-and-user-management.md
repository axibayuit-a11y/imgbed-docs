# Geolocalizzazione IP e gestione utenti

La geolocalizzazione IP trasforma gli indirizzi IP nei record di upload, nei dispositivi di login e in log simili in posizioni approssimative.

Dopo la configurazione, il pannello admin mostra in modo più chiaro origine di upload e accessi. Gestione utenti permette anche di bloccare o ripristinare l'accesso upload per IP sospetti.

## Dove configurare

Apri:

```text
System Settings -> Other Settings -> IP Geolocation
```

![Geolocalizzazione IP](../../image/other/ip定位/ip定位.png)

## Impostazioni disponibili

Il nuovo flusso di geolocalizzazione IP supporta più sorgenti, invece di dipendere da un solo servizio mappe.

| Impostazione | Scopo |
| --- | --- |
| Lingua geolocalizzazione IP | Sceglie la lingua di visualizzazione, per esempio inglese, cinese semplificato, giapponese, francese e altre. |
| MaxMind Account ID | Account ID MaxMind per MaxMind GeoLite Web Service. |
| MaxMind License Key | License Key MaxMind. |
| Tencent Map Key | Chiave Tencent Location Service, utile per indirizzi cinesi e IP della Cina continentale. |
| ipapi Key | Chiave APILayer ipapi. Supporta geolocalizzazione IP multilingue. |

Compila solo i servizi che ti servono. Non è necessario riempire tutti i campi.

Senza chiavi, ImgBed prova comunque sorgenti gratuite integrate, ma stabilità, supporto lingua e precisione possono essere inferiori rispetto a un servizio configurato da te.

## Scelte consigliate

Se ti servono soprattutto indirizzi cinesi:

1. Imposta la lingua su cinese semplificato.
2. Configura Tencent Map Key.
3. Opzionalmente aggiungi MaxMind o ipapi come fallback.

Se ti servono indirizzi inglesi o multilingue:

1. Scegli la lingua necessaria.
2. Configura MaxMind Account ID e License Key.
3. Aggiungi ipapi Key se vuoi risultati multilingue migliori.

## Configurare MaxMind

MaxMind richiede:

```text
MaxMind Account ID
MaxMind License Key
```

Trova l'Account ID nella dashboard MaxMind e genera una License Key dalla pagina License Keys.

![Configurazione chiave MaxMind](../../image/other/ip定位/maxmind的key配置.png)

Dopo la generazione, incolla Account ID e License Key in ImgBed e salva.

Il piano gratuito MaxMind va bene per l'uso quotidiano, ma ha limiti di richieste. Se la quota viene superata, ImgBed prova le altre sorgenti disponibili.

## Configurare ipapi

ipapi usa una API Key APILayer.

Apri la console ipapi e copia la API Key mostrata.

![Configurazione ipapi](../../image/other/ip定位/ipapi配置.png)

Incollala nel campo `ipapi Key` in ImgBed e salva.

ipapi supporta geolocalizzazione IP multilingue ed è utile quando vuoi indirizzi nella lingua selezionata. Anche il piano gratuito ha limiti. Se la quota termina, ImgBed continua con altre sorgenti disponibili.

## Configurare Tencent Map Key

Tencent Map Key è utile per indirizzi cinesi, soprattutto IP della Cina continentale.

Quando crei una chiave in Tencent Location Service, abilita:

```text
WebServiceAPI
```

Dopo la creazione, incolla la chiave in `Tencent Map Key` e salva.

Se ti basta una geolocalizzazione IP cinese di base, Tencent Map Key è sufficiente per iniziare.

## Cosa controllare in Gestione utenti

Gestione utenti è disponibile in alto nel pannello admin.

![Gestione utenti](../../image/other/用户管理显示.png)

Mostra l'attività di upload per IP:

| Campo | Descrizione |
| --- | --- |
| Origine IP | IP sorgente dell'uploader. |
| Indirizzo | Posizione approssimativa risolta dall'IP. |
| Dimensione upload totale | Dimensione totale dei file caricati da questo IP. |
| Numero upload | Numero di upload da questo IP. |
| Upload consentito | Attivo significa upload permessi. Disattivo significa upload bloccati. |

Clicca la freccia a sinistra per espandere la lista dei file caricati da quell'IP.

La lista mostra nome file, anteprima, dimensione, risultato moderazione, stato file e ora upload. Se gli upload sembrano sospetti, espandi prima l'IP, controlla i file e poi decidi se bloccare ulteriori upload.

Se un IP è sospetto, disattiva `Upload allowed`. I futuri upload da quell'IP verranno bloccati.

## Ricerca, ordinamento e filtri avanzati

In alto in Gestione utenti puoi cercare per IP sorgente o indirizzo.

Ordina per tempo, numero upload o dimensione totale per trovare uploader recenti, molto frequenti o con uso elevato.

Per indagini più precise, apri i filtri avanzati.

![Filtri avanzati](../../image/other/用户管理高级筛选.png)

I filtri avanzati supportano:

| Filtro | Uso |
| --- | --- |
| Intervallo tempo | Mostra IP che hanno caricato file in un periodo selezionato. |
| Stato accesso | Filtra per stati normali, bloccati e simili. |
| Allow/block list | Filtra per allowlist, blocklist o non impostato. |
| Tipo file | Mostra IP che hanno caricato immagini, video, audio, documenti, codice o altri file. |
| Dimensione file | Filtra per intervallo di dimensione caricata. |
| Rating età | Filtra per non impostato, General, R12+, R16+, R18 e simili. |
| Stato file | Filtra per stato file attuale per analizzare file anomali. |

Clicca `Apply Filters` per applicare. Usa `Reset` per tornare a tutti i dati.

## Vista mobile

Su mobile, Gestione utenti passa a layout a schede.

![Gestione utenti mobile](../../image/other/手机端显示用户管理效果.png)

Ogni scheda mostra IP, indirizzo, dimensione totale upload, numero upload e interruttore upload consentito. Puoi gestire gli utenti senza scorrimento orizzontale della tabella.

## Se la posizione sembra sbagliata

La geolocalizzazione IP è approssimativa. Non è un indirizzo stradale preciso.

Se l'utente passa da proxy, data center, server cloud o rete transfrontaliera, la posizione mostrata può differire da quella reale.

Usa questa funzione per capire l'origine indicativa, trovare upload anomali e supportare decisioni di blocco. Non trattarla come tracciamento preciso.

## Casi comuni

| Caso | Significato |
| --- | --- |
| Indirizzo vuoto | L'IP potrebbe non essere ancora risolto o la sorgente corrente non è disponibile. |
| Lingua indirizzo errata | Controlla la lingua geolocalizzazione IP e se è configurata una sorgente che la supporta. |
| Indirizzo data center | Molti proxy, server cloud e crawler appaiono come data center o ISP. |
| Numero upload alto | Controlla attentamente l'IP e blocca gli upload se necessario. |
| Dimensione upload alta | Ordina o filtra, espandi l'IP e ispeziona i file specifici. |
| Ripristino dopo blocco | Riattiva `Upload allowed`. |

## Flusso rapido

```text
Apri IP Geolocation in Other Settings
-> Scegli la lingua di geolocalizzazione IP
-> Compila MaxMind, Tencent Map o ipapi secondo necessità
-> Salva
-> Apri Gestione utenti
-> Controlla IP, indirizzo, dimensione totale e numero upload
-> Usa ricerca, ordinamento o filtri avanzati per trovare IP anomali
-> Consenti o blocca upload secondo necessità
```
