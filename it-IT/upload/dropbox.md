# Aggiungere un canale Dropbox

## Prima di iniziare

| Requisito | A cosa serve |
| --- | --- |
| Account Dropbox | Per accedere e autorizzare l'app |
| App Dropbox | Per generare `App Key` e `App Secret` |
| Dominio ImgBed | Per l'URI di redirect OAuth |
| Spazio Dropbox disponibile | Archivio effettivo dei file |

## Configurazione

### Passaggio 1: crea un'app Dropbox

1. Apri Dropbox App Console:

```text
https://www.dropbox.com/developers/apps
```

2. Crea una nuova app.
3. Come tipo di accesso scegli:

```text
App folder
```

4. Dai all'app un nome riconoscibile, per esempio `imgbed-app`.
5. Dopo la creazione apri la pagina dettagli dell'app.

Tipo di accesso consigliato:

| Tipo di accesso | Consiglio |
| --- | --- |
| `App folder` | Consigliato. È coerente con il modo in cui ImgBed archivia i file. |
| `Full Dropbox` | Non consigliato. ImgBed non ha bisogno di accesso completo all'account. |

![Crea app Dropbox](../../image/upload/dropbox/开发者创建应用.png)

### Passaggio 2: aggiungi la Redirect URI

Nella pagina dettagli dell'app Dropbox trova le impostazioni OAuth o Redirect URI e aggiungi:

```text
https://your-domain.com/api/oauth/dropbox/callback
```

Se usi il pannello admin da più domini, aggiungi ogni URL di callback corrispondente.

![Configura Redirect URI](../../image/upload/dropbox/配置回调地址.png)

### Passaggio 3: configura i permessi dell'app

Apri la scheda `Permissions` e abilita almeno questi ambiti:

| Ambito | Obbligatorio | Scopo |
| --- | --- | --- |
| `account_info.read` | Sì | Legge informazioni account e quota |
| `files.metadata.read` | Sì | Legge metadati di file e cartelle per i controlli di percorso |
| `files.metadata.write` | Sì | Crea cartelle e scrive metadati |
| `files.content.write` | Sì | Carica file. Senza questo ambito compare `required scope 'files.content.write'`. |
| `files.content.read` | Consigliato | Permette download, anteprima e link temporanei |

Dopo aver selezionato gli ambiti, clicca su `Submit` in fondo alla pagina.

![Aggiungi permessi](../../image/upload/dropbox/添加对应的权限.png)

Importante:

| Situazione | Cosa fare |
| --- | --- |
| Hai modificato gli ambiti | Esegui di nuovo l'autorizzazione e ottieni un nuovo `Refresh Token`. |
| Non hai riautorizzato | Il vecchio token non acquisisce i nuovi permessi; i caricamenti possono continuare a fallire. |

### Passaggio 4: copia le credenziali dell'app

Salva questi due valori dalla pagina dell'app Dropbox:

| Campo Dropbox | Campo ImgBed |
| --- | --- |
| `App key` | `App Key` |
| `App secret` | `App Secret` |

### Passaggio 5: compila il canale Dropbox

In Impostazioni di caricamento scegli `Dropbox` e compila:

| Campo ImgBed | Cosa inserire |
| --- | --- |
| Nome canale | Un nome riconoscibile, per esempio `Main Dropbox` |
| App Key | `App key` di Dropbox |
| App Secret | `App secret` di Dropbox |
| Refresh Token | Lascialo vuoto per ora |
| Directory radice | Opzionale. Valore predefinito `imgbed`. |
| Nota | Opzionale |

![Ottieni token](../../image/upload/dropbox/获取令牌.png)

### Passaggio 6: ottieni il Refresh Token

1. In ImgBed clicca su `Get Token`.
2. Accedi con l'account Dropbox da collegare.
3. Approva la richiesta di autorizzazione.
4. La pagina di callback mostrerà un `Refresh Token`.
5. Copialo.
6. Torna in ImgBed e incollalo nel campo `Refresh Token`.

![Copia token](../../image/upload/dropbox/复制令牌.png)

## Verifica

| Controllo | Risultato atteso |
| --- | --- |
| Scheda canale | Il canale Dropbox compare dopo il salvataggio. |
| Interruttore canale | Il canale può essere abilitato. |
| Token salvato | La pagina dettaglio mostra che il `Refresh Token` è stato salvato. |
| Caricamento di prova | Un'immagine di prova compare nella cartella dell'app Dropbox. |

Se i limiti quota sono attivi, esegui la query quota. Dopo una query riuscita, la scheda mostra spazio usato, spazio totale e ultimo aggiornamento.

![Query quota riuscita](../../image/upload/dropbox/查询额度成功.png)

## Risoluzione problemi

| Problema | Soluzione |
| --- | --- |
| ImgBed segnala configurazione incompleta | Verifica che `App Key`, `App Secret` e `Refresh Token` siano compilati. |
| L'autorizzazione riesce ma non compare il `Refresh Token` | Clicca di nuovo `Get Token` e assicurati che venga usato il flusso offline. |
| Il caricamento fallisce con `required scope 'files.content.write'` | Abilita `files.content.write`, clicca `Submit`, poi ottieni un nuovo `Refresh Token`. |
| Callback fallisce | Conferma che la redirect URI sia `https://your-domain.com/api/oauth/dropbox/callback`. |
| File non trovati | Verifica che l'app Dropbox sia stata creata in modalità `App folder`. |

## Flusso rapido

```text
Open Dropbox App Console
-> Create an app
-> Choose App folder access
-> Add https://your-domain.com/api/oauth/dropbox/callback
-> Enable account_info.read / files.metadata.read / files.metadata.write / files.content.write
-> Optionally enable files.content.read
-> Click Submit
-> Copy App Key and App Secret
-> Fill them into ImgBed
-> Click Get Token
-> Copy the Refresh Token from the callback page
-> Paste it back into ImgBed and save
```

## Riferimenti

1. Dropbox App Console: https://www.dropbox.com/developers/apps
2. Dropbox OAuth Guide: https://developers.dropbox.com/oauth-guide
3. Dropbox Developer Guide: https://www.dropbox.com/developers/reference/developer-guide
