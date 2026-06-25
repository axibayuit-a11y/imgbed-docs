# Aggiungere un canale GitLab Packages

## Prima di iniziare

Servono solo tre cose:

| Requisito | Scopo |
| --- | --- |
| Account GitLab | Per generare un access token e possedere il progetto. |
| GitLab Personal Access Token | Permette a ImgBed di usare la GitLab API, creare progetti e caricare file in Generic Packages. |
| Nome progetto | Puoi inserire anche solo il nome, per esempio `imgbed`. |

## Configurazione

### Passaggio 1: accedi a GitLab e crea un Access Token

1. Accedi a GitLab.
2. Clicca sull'avatar in alto a destra e apri `Preferences`.
3. Apri `Access Tokens` dalla barra laterale.
4. Dai al token un nome riconoscibile.
5. Scegli una scadenza adatta al tuo modo di gestire la manutenzione.
6. Seleziona l'ambito `api`.
7. Copia e salva subito il token appena viene creato.

![Crea token legacy](../../image/upload/gitlab-packages/点击生成旧版令牌.png)

![Seleziona permessi token](../../image/upload/gitlab-packages/勾选令牌权限.png)

## Passaggio 2: compila il canale GitLab Packages in ImgBed

Dopo aver scelto `GitLab Packages` nelle Impostazioni di caricamento, compila:

| Campo UI | Cosa inserire |
| --- | --- |
| Nome canale | Un nome a tua scelta, per esempio `GitLabPrimary`. |
| Access Token | Il GitLab Personal Access Token appena creato. |
| Nome progetto | Un nome breve come `imgbed`, oppure un percorso completo come `username/imgbed`. |
| Repository privato | Attiva o disattiva in base alle tue esigenze. |
| Nota | Opzionale, per esempio `Canale di caricamento principale`. |

![Configura canale](../../image/upload/gitlab-packages/配置渠道内容.png)

## Passaggio 3: salva il canale

Dopo aver compilato i campi, salva.

Il sistema gestisce automaticamente questi dettagli:

| Comportamento | Descrizione |
| --- | --- |
| Nome progetto breve | ImgBed identifica l'account GitLab corrente e lo trasforma in un percorso progetto completo. |
| Percorso progetto completo | ImgBed usa `username/project` esattamente come inserito. |
| Controllo progetto | Se usi il percorso dell'account personale corrente, ImgBed crea il progetto se non esiste. Se inserisci manualmente un percorso completo, lo usa direttamente. |
| Pubblico/privato | La visibilità del progetto viene sincronizzata con l'interruttore corrente. |

## Checklist rapida

```text
Sign in to GitLab
-> Create an Access Token
-> Select only the api scope
-> Return to ImgBed and enter the token and project name
-> Save
-> If only a project name is entered, ImgBed adds the current username automatically
-> If username/project is entered, ImgBed uses it as-is
-> Upload a test image
```
