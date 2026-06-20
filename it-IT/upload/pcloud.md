# Aggiungere un canale pCloud

## Ideale se

- Hai un account pCloud e vuoi salvare lì le immagini di ImgBed.
- Ti va bene usare email e password dell'account pCloud come credenziali del canale.

## Prima di iniziare

| Requisito | A cosa serve |
| --- | --- |
| Email account pCloud | Per accedere all'API pCloud |
| Password pCloud | Per accedere all'API pCloud |
| API host | Default `api.pcloud.com`. Gli account UE possono usare `eapi.pcloud.com`. |
| Cartella di archiviazione | Dove salvare i file. Default `imgbed`. |

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
| API host | Host API pCloud. Default `api.pcloud.com`. | No |
| Cartella di archiviazione | Cartella usata per salvare i file. Default `imgbed`. | No |

Scegli l'API host in base alla regione dell'account:

| Regione account | API host |
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
7. Lascia API host su `api.pcloud.com`, oppure usa `eapi.pcloud.com` per account UE.
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
| Upload di prova | Un'immagine di prova compare nella cartella pCloud configurata. |

![Query quota riuscita](../../image/upload/pcloud/查询额度成功.png)

## Risoluzione problemi

### Perché non OAuth2?

OAuth2 di pCloud non è self-service di default. Devi scrivere a pCloud e chiedere l'abilitazione.

Inoltre l'attuale flusso OAuth2 di pCloud non supporta il workflow con link di upload a breve durata richiesto da ImgBed. Per questo il canale usa accesso con email e password.

### Quale API host devo usare?

Default:

```text
api.pcloud.com
```

Per account UE:

```text
eapi.pcloud.com
```

## Flusso rapido

```text
Prepara email e password pCloud
-> Apri Impostazioni di caricamento
-> Aggiungi canale
-> Scegli pCloud
-> Compila nome canale / email / password
-> Lascia API host su api.pcloud.com salvo account europeo
-> Lascia cartella su imgbed salvo necessità diverse
-> Salva
-> Interroga la quota
-> Carica un'immagine di prova
```
