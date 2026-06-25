# Aggiungere un canale Cloudflare R2

## Quando usarlo

Cloudflare R2 è una buona scelta se:

- ImgBed è già distribuito su Cloudflare e vuoi salvare i file in un bucket R2 dello stesso account.
- Non vuoi configurare un endpoint S3 separato con access key e secret key.
- Preferisci che lettura e scrittura passino dal binding R2 di Worker o Pages con una configurazione minima.

In breve:

Il canale R2 non si crea manualmente nel pannello di amministrazione di ImgBed. Prima devi collegare un bucket R2 al progetto Cloudflare, usando esattamente `img_r2` come nome della variabile di binding.

## Prima di iniziare

- Un account Cloudflare.
- Un bucket R2 già creato.
- Permessi per gestire il progetto Cloudflare su cui è distribuito ImgBed.

## Configurazione in Cloudflare

### 1. Crea un bucket R2

1. Accedi alla dashboard Cloudflare.
2. Apri `R2 Object Storage`.
3. Clicca su `Create bucket`.
4. Scegli un nome, per esempio `imgbed`.

Questo bucket conterrà i file caricati.

![Crea un bucket R2](../../image/upload/cloudflare-r2/创建一个存储桶img-r2.png)

### 2. Collega il bucket al progetto ImgBed

Scegli il punto di binding in base al tipo di distribuzione:

| Tipo di distribuzione | Dove configurare il binding |
| --- | --- |
| Pages | Progetto Pages corrente -> Settings -> Functions -> R2 bucket bindings |
| Worker | Worker corrente -> Settings -> Bindings -> R2 bucket bindings |

Quando aggiungi il binding, questi campi sono essenziali:

| Campo | Valore |
| --- | --- |
| Nome variabile | `img_r2` |
| Bucket R2 | Seleziona il bucket creato prima |

Il nome della variabile deve essere esattamente `img_r2`. Caricamento, lettura ed eliminazione dei file R2 dipendono da quel nome.

### 3. Ridistribuisci il progetto

Dopo aver salvato il binding, ridistribuisci ImgBed. In questo modo il runtime di Worker o Pages potrà accedere a `img_r2`.

## Cosa vedrai in ImgBed

Quando il binding R2 è disponibile, apri:

1. Impostazioni di sistema.
2. Impostazioni di caricamento.
3. Il canale `Cloudflare R2`.

Il sistema crea automaticamente un canale fisso:

| Campo | Valore fisso |
| --- | --- |
| Nome canale | `Cloudflare R2` |
| Tipo canale | `cfr2` |
| Modalità di archiviazione | `binding` |
| Origine configurazione | Binding di ambiente |

È un canale legato al binding: non devi crearlo con Aggiungi canale e non può essere eliminato come un canale normale.

## Campi modificabili nel pannello admin

| Campo | Funzione | Obbligatorio |
| --- | --- | --- |
| Abilita canale | Decide se R2 partecipa alla scelta del canale di caricamento. | Sì |
| Account ID | Serve solo con i limiti di quota attivi, per interrogare l'uso ufficiale di R2. | Consigliato con limiti di quota |
| Nome bucket | Serve solo con i limiti di quota attivi, per interrogare l'uso ufficiale di R2. | Consigliato con limiti di quota |
| Limite quota | Decide se questo canale R2 viene scelto in base alla capacità disponibile. | No |
| Soglia | Blocca nuove scritture quando l'uso raggiunge la percentuale indicata. | Obbligatorio con limiti di quota |

Puoi copiare l'Account ID dal pannello informazioni account della dashboard Cloudflare. Inseriscilo solo se vuoi che ImgBed controlli e applichi la quota R2.

![Recupera Account ID](../../image/upload/cloudflare-r2/获取账户id.png)

## Passaggi rapidi

1. Crea un bucket R2 in Cloudflare.
2. Apri le impostazioni Cloudflare del progetto ImgBed.
3. Aggiungi un binding per bucket R2.
4. Imposta il nome variabile su `img_r2`.
5. Seleziona il bucket R2 creato.
6. Salva il binding e ridistribuisci ImgBed.
7. Torna in ImgBed -> Impostazioni di sistema -> Impostazioni di caricamento.
8. Controlla che il canale `Cloudflare R2` sia presente e attivo.

Se vuoi usare R2 anche nella selezione basata sulla capacità, abilita il limite quota e compila Account ID, nome bucket, limite e soglia prima di salvare.

![Configura limite quota](../../image/upload/cloudflare-r2/配置容量限制.png)

## Verifica

- Il canale fisso `Cloudflare R2` compare nelle Impostazioni di caricamento.
- La scheda del canale risulta abilitata.
- Un piccolo file di prova viene caricato correttamente e il link restituito si apre.
- Se aprendo un file compare `R2 database binding is not configured`, il runtime non ha ricevuto il binding `img_r2`. Controlla il nome del binding in Cloudflare e ridistribuisci il progetto.
