# Aggiungere un canale Google Drive

## Prima di iniziare

Prepara questi elementi:

| Requisito | A cosa serve |
| --- | --- |
| Account Google | Per accedere a Google Cloud e autorizzare Google Drive |
| Progetto Google Cloud | Per abilitare la Drive API e creare credenziali OAuth |
| Client OAuth 2.0 | Permette a ImgBed di ottenere `Client ID`, `Client Secret` e `Refresh Token` |
| Dominio ImgBed | Per l'URI di redirect OAuth. Deve corrispondere al dominio che usi davvero. |

## Configurazione

### Passaggio 1: abilita Google Drive API

1. Apri Google Cloud Console.
2. Crea un nuovo progetto o selezionane uno esistente.
3. Vai a `APIs & Services`.
4. Clicca su `Enable APIs and Services`.
5. Cerca `Google Drive API`.
6. Aprila e abilitala.

### Passaggio 2: configura la schermata di consenso OAuth

1. In Google Cloud apri `Google Auth Platform`.
2. Completa le informazioni di base in `Branding`, come nome app, email di supporto e contatto sviluppatore.
3. Apri `Audience`.
4. Per la maggior parte delle installazioni personali autogestite, scegli `External`.
5. Se scegli `External`, aggiungi in `Test users` l'account Google da autorizzare.
6. Apri `Data Access`.
7. Aggiungi i permessi Google Drive richiesti.

### Passaggio 3: crea un client OAuth 2.0

1. In `Google Auth Platform`, apri `Clients`.
2. Crea un nuovo client.
3. Imposta il tipo applicazione su `Web application`.
4. Dai al client un nome riconoscibile.
5. In Authorized JavaScript origins inserisci l'URL ImgBed, per esempio:

```text
https://img.example.com
```

6. In Authorized redirect URIs inserisci:

```text
https://img.example.com/api/oauth/google/callback
```

![Crea client OAuth](../../image/upload/google-drive/oa客户端id创建.png)

![Inserisci dominio e callback](../../image/upload/google-drive/填写oa客户端url信息.png)

Dopo la creazione copia:

| Valore generato | Campo ImgBed |
| --- | --- |
| Client ID | `Client ID` |
| Client Secret | `Client Secret` |

## Passaggio 4: compila il canale Google Drive

In Impostazioni di caricamento scegli `Google Drive` e compila:

| Campo ImgBed | Cosa inserire |
| --- | --- |
| Nome canale | Un nome riconoscibile, per esempio `Main Google Drive` |
| Client ID | Client ID da Google Cloud |
| Client Secret | Client Secret da Google Cloud |
| Refresh Token | Lascialo vuoto per ora. Lo ottieni nel passaggio successivo. |
| Directory radice | Opzionale. Valore predefinito `imgbed`. |

![Inserisci dati client in ImgBed](../../image/upload/google-drive/粘贴回添加新渠道配置.png)

## Passaggio 5: ottieni il Refresh Token

1. Clicca su `Get Token`.
2. Scegli l'account Google da collegare.
3. Completa le richieste di autorizzazione.
4. La pagina di callback mostrerà un `Refresh Token`.
5. Copialo.
6. Torna in ImgBed e incollalo nel campo `Refresh Token`.

![Copia Refresh Token dopo l'autorizzazione](../../image/upload/google-drive/授权完复制token.png)

Se in futuro cambi account Google, cambi client OAuth o la vecchia autorizzazione scade, non devi eliminare il canale. Apri la pagina di modifica e clicca su `Reauthorize`.

## Passaggio 6: salva il canale

Quando tutti i campi sono compilati, salva il canale.

## Flusso rapido

```text
Open Google Cloud
-> Create or select a project
-> Enable Google Drive API
-> Configure Google Auth Platform
-> If Audience is External, add your Google account to Test users
-> Create a Web application OAuth client
-> Use https://your-domain.com/api/oauth/google/callback as the redirect URI
-> Fill Client ID and Client Secret into ImgBed
-> Click Get Token
-> Sign in with Google and authorize
-> Copy the Refresh Token from the callback page
-> Paste it back into ImgBed and save
-> Upload a test image
```

## Riferimenti

1. Google OAuth Web Server Applications: https://developers.google.com/identity/protocols/oauth2/web-server
2. Google Workspace OAuth Consent Configuration: https://developers.google.com/workspace/guides/configure-oauth-consent
3. Google Drive API Auth Scopes: https://developers.google.com/workspace/drive/api/guides/api-specific-auth
