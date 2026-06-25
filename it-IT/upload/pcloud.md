# Aggiungere un canale pCloud

## Ideale se

- Hai un account pCloud e vuoi salvare lì le immagini di ImgBed.
- Ti va bene usare email e password dell'account pCloud come credenziali del canale.

## Prima di iniziare

| Requisito | A cosa serve |
| --- | --- |
| Email account pCloud | Per accedere all'API pCloud |
| Password pCloud | Per accedere all'API pCloud |
| Host API | Valore predefinito `api.pcloud.com`. Gli account UE possono usare `eapi.pcloud.com`. |
| Cartella di archiviazione | Dove salvare i file. Valore predefinito `imgbed`. |

## Dove aggiungerlo

1. Apri Impostazioni di sistema.
2. Apri Impostazioni di caricamento.
3. Clicca su `Aggiungi canale` in alto a destra.
4. Scegli `pCloud`.

## Riferimento campi

| Campo | Scopo | Obbligatorio |
| --- | --- | --- |
| Nome canale | Identifica il canale, per esempio `Personal pCloud` | Sì |
| Email account | Email di accesso a pCloud | Sì |
| Password | Password pCloud | Sì |
| Host API | Host API pCloud. Valore predefinito `api.pcloud.com`. | No |
| Cartella di archiviazione | Cartella usata per salvare i file. Valore predefinito `imgbed`. | No |

Scegli l'host API in base alla regione dell'account:

| Regione account | Host API |
| --- | --- |
| Default / USA | `api.pcloud.com` |
| Europa | `eapi.pcloud.com` |

## Passaggi

1. Apri Impostazioni di caricamento.
2. Clicca su `Aggiungi canale`.
3. Scegli `pCloud`.
4. Inserisci un nome canale riconoscibile.
5. Inserisci l'email dell'account pCloud.
6. Inserisci la password pCloud.
7. Lascia l'host API su `api.pcloud.com`, oppure usa `eapi.pcloud.com` per account UE.
8. Lascia la cartella su `imgbed` o scegli quella che preferisci.
9. Salva il canale.

![Configura canale](../../image/upload/pcloud/配置渠道.png)

## Verifica

| Controllo | Risultato atteso |
| --- | --- |
| Scheda canale | La scheda pCloud compare dopo il salvataggio. |
| Interruttore canale | L'interruttore resta abilitato. |
| Email mostrata | La scheda mostra l'email pCloud collegata. |
| Query quota | Dopo una query riuscita, vengono mostrati spazio usato e totale. |
| Caricamento di prova | Un'immagine di prova compare nella cartella pCloud configurata. |

![Query quota riuscita](../../image/upload/pcloud/查询额度成功.png)

## Risoluzione problemi

### Perché non OAuth2?

OAuth2 di pCloud non è attivabile autonomamente per impostazione predefinita. Devi scrivere a pCloud e chiedere l'abilitazione.

Inoltre l'attuale flusso OAuth2 di pCloud non supporta il flusso di lavoro con collegamenti di caricamento a breve durata richiesto da ImgBed. Per questo il canale usa accesso con email e password.

### Quale host API devo usare?

Valore predefinito:

```text
api.pcloud.com
```

Per account UE:

```text
eapi.pcloud.com
```

## Flusso rapido

```text
Prepare your pCloud email and password
-> Open Upload Settings
-> Add Channel
-> Choose pCloud
-> Fill channel name / email / password
-> Keep API host as api.pcloud.com unless your account is in Europe
-> Keep storage directory as imgbed unless you need another folder
-> Save
-> Query quota
-> Upload a test image
```
