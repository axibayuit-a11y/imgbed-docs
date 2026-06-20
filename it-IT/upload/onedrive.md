# Aggiungere un canale OneDrive

## Prima di iniziare

| Requisito | A cosa serve |
| --- | --- |
| Account Microsoft | Per accedere alle pagine amministrative Microsoft e autorizzare OneDrive |
| Dominio ImgBed | Per l'URL di callback OAuth |
| Registrazione app | Per generare `Client ID` e `Client Secret` |
| Account OneDrive | Spazio effettivo in cui verranno salvati i file |

## Configurazione

### Passaggio 1: apri Microsoft Entra ID

1. Apri `portal.azure.com`.
2. Cerca `Microsoft Entra ID` in alto.
3. Se la pagina non compare nel menu, scegli:

```text
Continue searching in Microsoft Entra ID
```

4. Apri `Microsoft Entra ID`.
5. Apri `App registrations`.
6. Clicca su `New registration`.

### Passaggio 2: registra un'app

Nella pagina `New registration`, compila:

| Campo | Cosa inserire |
| --- | --- |
| Name | Un nome riconoscibile, per esempio `imgbed-onedrive` |
| Supported account types | Scegli in base alla tabella sotto |
| Redirect URI type | `Web` |
| Redirect URI | `https://your-domain.com/api/oauth/onedrive/callback` |

Guida al tipo di account:

| Scenario | Supported Account Types |
| --- | --- |
| Solo OneDrive personale | Scegli l'opzione per account Microsoft personali. |
| Account personali e lavoro/scuola | Scegli l'opzione che supporta account personali e organizzativi. |
| Solo OneDrive aziendale o scolastico | Scegli l'opzione per account organizzativi. |

Dopo aver compilato il modulo, clicca su registra.

![Crea app OneDrive](../../image/upload/onedrive/添加应用程序注册.png)

### Passaggio 3: copia le informazioni dell'app

Dalla pagina di riepilogo copia questi valori:

| Campo Microsoft | Campo ImgBed |
| --- | --- |
| `Application (client) ID` | `Client ID` |
| `Directory (tenant) ID` | `Tenant ID` per account organizzativi |

![Application ID e Tenant ID](../../image/upload/onedrive/应用程序ID和目录租户ID位.png)

### Passaggio 4: crea un Client Secret

1. Apri `Certificates & secrets`.
2. Clicca su `New client secret`.
3. Inserisci una descrizione qualsiasi ma riconoscibile.
4. Scegli una scadenza.
5. Copia subito il `Value`, appena viene creato.

![Salva valore Client Secret](../../image/upload/onedrive/保存客户端密码值.png)

### Passaggio 5: aggiungi i permessi API

1. Apri `API permissions`.
2. Clicca su `Add a permission`.
3. Scegli `Microsoft Graph`.
4. Scegli `Delegated permissions`.
5. Aggiungi questi permessi:

| Permesso | Scopo |
| --- | --- |
| `Files.ReadWrite.All` | Carica file, crea cartelle ed elimina file |
| `offline_access` | Permette a ImgBed di ottenere un `Refresh Token` |
| `User.Read` | Legge informazioni account e quota |

### Passaggio 6: compila il canale OneDrive

In Impostazioni di caricamento scegli `OneDrive` e compila:

| Campo ImgBed | Cosa inserire |
| --- | --- |
| Nome canale | Un nome riconoscibile, per esempio `Main OneDrive` |
| Client ID | La Microsoft `Application (client) ID` |
| Client Secret | Il `Client Secret Value` copiato |
| Tenant ID | Usa la tabella sotto |
| Refresh Token | Lascialo vuoto per ora |
| Directory radice | Opzionale. Default `imgbed`. |
| Nota | Opzionale |

![Configura canale OneDrive](../../image/upload/onedrive/添加新渠道配置.png)

Come compilare `Tenant ID`:

| Tipo di account scelto | `Tenant ID` in ImgBed |
| --- | --- |
| Account personali | `consumers` |
| Account personali e organizzativi | `common` |
| Solo organizzazione corrente | La `Directory (tenant) ID` |

### Passaggio 7: ottieni il Refresh Token

1. In ImgBed clicca su `Get Token`.
2. Accedi con l'account Microsoft da collegare.
3. Approva la richiesta di autorizzazione.
4. La pagina di callback mostrerà un `Refresh Token`.
5. Copialo.
6. Torna in ImgBed e incollalo nel campo `Refresh Token`.

![Copia Refresh Token](../../image/upload/onedrive/复制刷新令牌.png)

### Passaggio 8: salva il canale

Quando tutti i campi sono compilati, salva il canale.

## Flusso rapido

```text
Apri portal.azure.com
-> Cerca Microsoft Entra ID
-> Apri App registrations
-> Registra una nuova app
-> Compila Name / Supported account types / Web redirect URI
-> Registra
-> Copia Application (client) ID
-> Controlla l'URL di callback in Authentication
-> Crea un Client Secret in Certificates & secrets
-> Aggiungi i permessi in API permissions
-> Inserisci Client ID / Client Secret / Tenant ID in ImgBed
-> Clicca Get Token
-> Copia il Refresh Token dalla pagina di callback
-> Incollalo in ImgBed e salva
```

## Riferimenti

1. Registrazione app Microsoft Entra: https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-register-app
2. Authorization code flow Microsoft identity platform: https://learn.microsoft.com/en-us/entra/identity-platform/v2-oauth2-auth-code-flow
3. Autenticazione utente Microsoft Graph: https://learn.microsoft.com/en-us/graph/auth-v2-user
