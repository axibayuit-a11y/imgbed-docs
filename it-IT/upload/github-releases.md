# Aggiungere un canale GitHub Releases

## Prima di iniziare

Servono solo tre cose:

| Requisito | Scopo |
| --- | --- |
| Account GitHub | Per generare un access token e possedere il repository. |
| GitHub Access Token | Permette a ImgBed di usare la GitHub API, creare release e caricare file. |
| Nome repository | Puoi inserire anche solo il nome, per esempio `image`. |

## Configurazione

### Passaggio 1: accedi a GitHub e crea un Access Token

1. Accedi a GitHub.
2. Clicca sull'avatar in alto a destra e apri `Settings`.
3. Apri `Developer settings` dalla barra laterale.
4. Apri `Personal access tokens`.
5. Apri `Tokens (classic)`.
6. Clicca su `Generate new token (classic)`.
7. Dai al token un nome riconoscibile.
8. Scegli una scadenza adatta al tuo modo di gestire la manutenzione.
9. Seleziona gli scope `repo` e `workflow`.
10. Copia e salva subito il token appena viene creato.

![Aggiungi permessi GitHub](../../image/upload/github-releases/添加github权限.png)

## Passaggio 2: compila il canale GitHub Releases in ImgBed

Dopo aver scelto `GitHub Releases` nelle Impostazioni di caricamento, compila:

| Campo UI | Cosa inserire |
| --- | --- |
| Nome canale | Un nome a tua scelta, per esempio `GitHubPrimary`. |
| Access Token | Il GitHub Personal Access Token appena creato. |
| Nome repository | Un nome breve come `image`, oppure un percorso completo come `username/image`. |
| Repository privato | Attiva o disattiva in base alle tue esigenze. |
| Nota | Opzionale, per esempio `Primary upload channel`. |

![Compila canale GitHub](../../image/upload/github-releases/填写github渠道配置.png)

## Passaggio 3: salva il canale

Dopo aver compilato i campi, salva.

Il sistema gestisce automaticamente questi dettagli:

| Comportamento | Descrizione |
| --- | --- |
| Nome repository breve | ImgBed identifica l'account GitHub corrente e lo trasforma in un percorso completo. |
| Percorso repository completo | ImgBed usa `username/repository` esattamente come inserito. |
| Controllo repository | Se usi il percorso dell'account personale corrente, ImgBed crea il repository se non esiste. Se inserisci manualmente un percorso completo, lo usa direttamente. |
| Pubblico/privato | La visibilità del repository viene sincronizzata con l'interruttore corrente. |

## Checklist rapida

```text
Accedi a GitHub
-> Crea un Access Token
-> Torna in ImgBed e inserisci token e nome repository
-> Salva
-> Se inserisci solo il nome repo, ImgBed aggiunge automaticamente lo username corrente
-> Se inserisci username/repo, ImgBed lo usa così com'è
-> Carica un'immagine di prova
```
