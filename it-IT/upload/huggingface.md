# Aggiungere un canale Hugging Face

## Prima di iniziare

Servono solo tre cose:

| Requisito | Scopo |
| --- | --- |
| Account Hugging Face | Per generare un access token e possedere il repository. |
| Hugging Face User Access Token | Permette a ImgBed di usare l'API Hugging Face, creare repository e caricare file. |
| Nome repository | Puoi inserire anche solo il nome, per esempio `image`. |

## Configurazione

### Passaggio 1: accedi a Hugging Face e crea un Access Token

1. Accedi a Hugging Face.
2. Clicca sull'avatar in alto a destra e apri `Settings`.
3. Apri `Access Tokens` dalla barra laterale.
4. Crea un nuovo token.
5. Dai al token un nome riconoscibile.
6. Seleziona il permesso `write`.
7. Copia e salva subito il token appena viene creato.

![Crea token](../../image/upload/huggingface/创建令牌.png)

## Passaggio 2: compila il canale Hugging Face in ImgBed

Dopo aver scelto `Hugging Face` nelle Impostazioni di caricamento, compila:

| Campo UI | Cosa inserire |
| --- | --- |
| Nome canale | Un nome a tua scelta, per esempio `hf-primary`. |
| Nome repository | Un nome breve come `image`, oppure un percorso completo come `username/image`. |
| Access Token | Lo User Access Token Hugging Face appena creato. |
| Repository privato | Attiva o disattiva in base alle tue esigenze. |
| Nota | Opzionale, per esempio `Canale di caricamento principale`. |

![Aggiungi canale](../../image/upload/huggingface/添加渠道.png)

## Passaggio 3: salva il canale

Dopo aver compilato i campi, salva.

Il sistema gestisce automaticamente questi dettagli:

| Comportamento | Descrizione |
| --- | --- |
| Nome repository breve | ImgBed identifica l'account Hugging Face corrente e lo trasforma in un percorso completo. |
| Percorso repository completo | ImgBed usa `username/repository` esattamente come inserito. |
| Controllo repository | Se usi il percorso dell'account personale corrente, ImgBed prova a creare il repository se non esiste. Se inserisci manualmente un percorso completo, lo usa direttamente. |
| Tipo repository | Questo canale usa un repository `dataset`. |
| Pubblico/privato | La visibilità del repository viene sincronizzata con l'interruttore corrente. |

## Checklist rapida

```text
Sign in to Hugging Face
-> Create an Access Token
-> Select write permission
-> Return to ImgBed and enter the token and repository name
-> Save
-> If only a repo name is entered, ImgBed adds the current username automatically
-> If username/repo is entered, ImgBed uses it as-is
-> ImgBed checks or creates the dataset repository
-> Upload a test image
```
