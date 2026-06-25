# Gerenciar configurações com API Token

O gerenciamento por API Token é indicado para scripts de automação, ferramentas de operação e painéis de controle externos. Ele permite ler e alterar canais de upload, configurações de segurança, configurações de página, outras configurações e relações leves de federação sem abrir o painel administrativo.

As permissões de gerenciamento expõem apenas operações leves adequadas para scripts. Operações pesadas que exigem confirmação no navegador, tarefas em lote da interface ou limpeza de índice de federação ainda devem ser feitas pelo painel administrativo no navegador.

![Editar API Token](../../image/Safety/apitoken/编辑api token.png)

## Preparação

No painel administrativo, abra:

```text
System Settings -> Security Settings -> API Token
```

Ao criar ou editar um API Token, confirme se ele tem permissão de gerenciamento. Essa permissão pode alterar configurações do site, então entregue o Token apenas a scripts ou usuários confiáveis.

As ações de escrita dos três scripts de gerenciamento ficam em modo de pré-visualização por padrão e não salvam nada. Depois de conferir a prévia, adicione `--apply` para executar a alteração.

Você também pode colocar o Token em uma variável de ambiente:

```powershell
$env:IMGBED_API_TOKEN="your API Token"
```

## Baixar os scripts de gerenciamento

O repositório da documentação fornece três scripts Node.js:

| Script | Uso |
| --- | --- |
| <a href="/tools/imgbed-token-upload-settings.mjs" download>Baixar script de configurações de upload</a> | Gerencia canais de upload, subcanais e balanceamento de carga |
| <a href="/tools/imgbed-token-site-settings.mjs" download>Baixar script de configurações do site</a> | Gerencia segurança, páginas e outras configurações |
| <a href="/tools/imgbed-token-federation.mjs" download>Baixar script de federação</a> | Gerencia ações leves de relação, solicitações e mensagens da federação |

É necessário ter Node.js 18 ou superior instalado na máquina local.

### Parâmetros comuns

| Parâmetro | Obrigatório | Descrição |
| --- | --- | --- |
| `--base-url <url>` | Sim | Endereço do ImgBed, por exemplo `https://image.ai6.me` |
| `--token <token>` | Sim | API Token; também pode usar a variável `IMGBED_API_TOKEN` |
| `--retries <n>` | Não | Número de tentativas para falhas temporárias; padrão `3` |
| `--timeout-ms <n>` | Não | Timeout de cada requisição; padrão `180000` |
| `--output <pretty\|json>` | Não | Formato de saída; padrão `pretty`; use `json` para automação |
| `--save-response <path>` | Não | Salva o resultado final em um arquivo JSON |
| `--apply` | Não | Executa a escrita de verdade; sem isso, apenas mostra a prévia |
| `-h` / `--help` | Não | Mostra a ajuda do script |

## Configurações de upload

O script de configurações de upload lista, lê, cria ou edita e exclui subcanais de upload. Ele também pode alternar o balanceamento de carga de um canal principal.

```powershell
node imgbed-token-upload-settings.mjs --base-url "https://your-domain" --token "your API Token" --list
```

### Parâmetros das configurações de upload

| Parâmetro | Descrição |
| --- | --- |
| `--list` | Lista os grupos de configuração de upload |
| `--get` | Lê um canal principal ou um subcanal específico dentro dele |
| `--upsert` | Cria ou edita um subcanal; sem `--apply`, apenas mostra a prévia |
| `--delete` | Exclui um subcanal; sem `--apply`, apenas mostra a prévia |
| `--load-balance <true\|false>` | Ativa ou desativa o balanceamento de carga de um canal principal |
| `--channel <key>` | Canal principal, por exemplo `s3`, `github`, `telegram` |
| `--channel-name <name>` | Nome do subcanal ou da conta |
| `--set key=value` | Define um campo; pode ser repetido e aceita caminho com ponto |
| `--patch-json <path>` | Mescla campos em lote a partir de um arquivo JSON |
| `--apply` | Salva a alteração de verdade |

### Parâmetros de canal

| Parâmetro | Canal |
| --- | --- |
| `telegram` / `tg` | Telegram |
| `discord` / `dc` | Discord |
| `cfr2` / `r2` | Cloudflare R2 |
| `s3` | S3 |
| `webdav` / `wd` | Canal de armazenamento WebDAV |
| `github` / `gh` | GitHub Releases |
| `gitlab` / `gl` | GitLab Packages |
| `huggingface` / `hf` | Hugging Face |
| `onedrive` / `od` | OneDrive |
| `googledrive` / `google` / `gd` | Google Drive |
| `dropbox` / `db` | Dropbox |
| `yandex` / `yx` | Yandex Disk |
| `pcloud` / `pd` | pCloud |

### Exemplos de configurações de upload

Listar todas as configurações de upload:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --list
```

Ler a configuração do canal S3:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get `
  --channel s3
```

Ler um subcanal específico do S3:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get `
  --channel s3 `
  --channel-name "backup-s3"
```

Criar ou editar um subcanal. Rode primeiro sem `--apply` para ver a prévia:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --upsert `
  --channel webdav `
  --channel-name "backup-webdav" `
  --set enabled=false `
  --set remark="backup test"
```

Depois de conferir, salve:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --upsert `
  --channel webdav `
  --channel-name "backup-webdav" `
  --set enabled=false `
  --set remark="backup test" `
  --apply
```

Excluir um subcanal:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --delete `
  --channel webdav `
  --channel-name "backup-webdav" `
  --apply
```

Ativar o balanceamento de carga do S3:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --load-balance true `
  --channel s3 `
  --apply
```

Para alterar campos mais complexos em lote, crie primeiro um arquivo JSON e use `--patch-json`:

```json
{
  "enabled": true,
  "remark": "primary account"
}
```

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --upsert `
  --channel s3 `
  --channel-name "primary-s3" `
  --patch-json ".\s3-channel.json" `
  --apply
```

## Configurações do site

O script de configurações do site gerencia três áreas:

| Área | Parâmetro | Descrição |
| --- | --- | --- |
| Segurança | `security` | Autenticação do usuário, autenticação administrativa, dispositivos de login, API Token, moderação de imagem, limites de usuário, WebDAV e outros |
| Página | `page` | Página global, página do usuário, página administrativa e opções visuais |
| Outras | `others` | API de imagem aleatória, navegação pública, nó local de federação, tags automáticas, geolocalização por IP, backup, OCR e outros |

Use primeiro `--list-sections` para ver as áreas, seções e campos aceitos pelo script:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --list-sections
```

### Parâmetros das configurações do site

| Parâmetro | Descrição |
| --- | --- |
| `--list-sections` | Lista áreas, seções e campos editáveis |
| `--get` | Lê uma seção de configuração |
| `--area <security\|page\|others>` | Define a área de configuração |
| `--section <name>` | Define a seção; use o nome exibido por `--list-sections` |
| `--set key=value` | Define um campo; pode ser repetido |
| `--apply` | Salva a alteração de verdade |

Na área `page`, `--set` usa o id do item de configuração da página, como `starsEffect=true`. Nas áreas `security` e `others`, `--set` usa o nome do campo dentro da seção, como `email=admin@example.com`.

### Exemplos de configurações do site

Ler as configurações de notificação de atualização do sistema:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get `
  --area security `
  --section systemUpdate
```

Alterar o e-mail de notificação de atualização do sistema. Rode primeiro sem `--apply` para ver a prévia:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --area security `
  --section systemUpdate `
  --set email="admin@example.com"
```

Depois de conferir, salve:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --area security `
  --section systemUpdate `
  --set email="admin@example.com" `
  --apply
```

Alterar o efeito de estrelas da página administrativa:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --area page `
  --section adminSettings `
  --set starsEffect=true `
  --apply
```

Alterar o idioma da geolocalização por IP:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --area others `
  --section ipGeolocation `
  --set language="en" `
  --apply
```

A configuração do nó local de federação pode ser lida e pode editar campos comuns, como ativação, diretórios de sincronização e códigos de convite. A confirmação de domínio não é tratada pelo API Token; se o painel avisar que o domínio do nó local não corresponde ao domínio de acesso atual, confirme pelo painel administrativo no navegador.

## Relações de federação

O script de federação gerencia o status do nó local, os nós que eu sigo, os nós que me seguem, mensagens, solicitações de entrada, reaplicação de relação sem vínculo, aceite, recusa e ações leves que não envolvem limpeza de índice.

Atualização de índice, exclusão de índice de federação e confirmação de mudança de domínio dependem do fluxo completo do navegador. O script não executa essas operações pesadas.

### Limite entre operações leves e pesadas da federação

| Operação | Suporte no script | Descrição |
| --- | --- | --- |
| Ver status do nó local e listar relações | Suportado | Apenas lê o registro de relações |
| Ver mensagens e enviar mensagem | Suportado | Lê e escreve mensagens da relação |
| Solicitar entrada em outro nó | Suportado | Envia solicitação por link de convite |
| Reaplicar em registro sem relação | Suportado | Apenas para cartão `outgoing` com `lastResult=none`; exige convite de 6 caracteres |
| Cancelar solicitação `outgoing` pendente | Suportado | Cancela apenas solicitações pendentes |
| Aceitar ou recusar solicitação `incoming` | Suportado | Processa apenas pedidos de nós que querem entrar no seu nó |
| Remover relação `incoming` aceita | Suportado | Altera apenas o registro de entrada e notifica a outra parte |
| Excluir registro `incoming` finalizado | Suportado | Exclui apenas registros de entrada em estado final |
| Cancelar assinatura `outgoing` aceita | Navegador | Exige excluir índice local de federação em lotes |
| Excluir registro `outgoing` finalizado | Navegador | Pode exigir limpeza prévia do índice de federação |
| Confirmar ou cancelar mudança de domínio | Navegador | Exige confirmar o domínio atual e tratar índices após a mudança |
| Publicar índice, puxar índice, excluir índices em lote | Navegador | São tarefas em lote da interface |

### Parâmetros de federação

| Parâmetro | Descrição |
| --- | --- |
| `--status` | Mostra o status do nó local e as relações dos dois lados |
| `--list` | Lista as relações de federação |
| `--chat` | Lê as mensagens armazenadas temporariamente de uma relação |
| `--send-message` | Envia mensagem para um nó com relação estabelecida |
| `--join` | Solicita entrada usando um link de convite |
| `--reapply` | Reaplica para um registro sem relação; exige convite de 6 caracteres |
| `--accept` | Aceita uma solicitação de entrada no seu nó |
| `--deny` | Recusa uma solicitação de entrada no seu nó |
| `--cancel` | Cancela solicitação `outgoing` pendente ou remove relação `incoming` aceita |
| `--delete` | Exclui registro `incoming` em estado final |
| `--direction <outgoing\|incoming\|all>` | Direção da relação; `outgoing` são os nós que eu sigo, `incoming` são os nós que me seguem |
| `--domain <url>` | Domínio do nó relacionado |
| `--invite-link <url>` | Link de convite do outro nó |
| `--invite-code <code>` | Código de convite de 6 caracteres usado na reaplicação |
| `--text <message>` | Texto da mensagem |
| `--apply` | Salva a alteração de verdade |

### Exemplos de federação

Ver status do nó local e relações dos dois lados:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --status
```

Listar apenas os nós que eu sigo:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --list `
  --direction outgoing
```

Listar apenas os nós que me seguem:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --list `
  --direction incoming
```

Solicitar entrada usando um link de convite. Rode primeiro sem `--apply` para ver a prévia:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --join `
  --invite-link "https://peer-domain/federation/invite/abcdef"
```

Depois de conferir, salve:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --join `
  --invite-link "https://peer-domain/federation/invite/abcdef" `
  --apply
```

Reaplicar para um registro sem relação:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --reapply `
  --domain "https://peer-domain" `
  --invite-code "abc123" `
  --apply
```

Aceitar uma solicitação de entrada no seu nó:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --accept `
  --domain "https://peer-domain" `
  --apply
```

Recusar uma solicitação de entrada no seu nó:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --deny `
  --domain "https://peer-domain" `
  --apply
```

Enviar uma mensagem para um nó com relação estabelecida:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --send-message `
  --direction outgoing `
  --domain "https://peer-domain" `
  --text "Hello, this is a test message." `
  --apply
```

Cancelar uma solicitação `outgoing` pendente:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --cancel `
  --direction outgoing `
  --domain "https://peer-domain" `
  --apply
```

Remover uma relação `incoming` aceita:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --cancel `
  --direction incoming `
  --domain "https://peer-domain" `
  --apply
```

Excluir um registro `incoming` finalizado:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --delete `
  --direction incoming `
  --domain "https://peer-domain" `
  --apply
```

Cancelar uma assinatura `outgoing` aceita e excluir registro `outgoing` precisam ser feitos no painel administrativo do navegador, pois essas ações podem exigir limpeza prévia do índice local de federação.

### Domínio inconsistente

Se o domínio salvo no nó local e o domínio pendente na relação forem diferentes, o script retorna erro diretamente e mostra `currentDomain` e `pendingDomain`. Essa situação deve ser tratada no painel administrativo pelo navegador, porque a mudança de domínio também envolve confirmação e limpeza de índice de saída.

Se, ao solicitar entrada, a outra parte retornar `FEDERATION_NODE_DOMAIN_MISMATCH`, o domínio usado no link de convite não corresponde ao domínio salvo no nó local da outra parte. A API retorna `currentOrigin` e `detectedOrigin`; use o domínio atual confirmado pela outra parte ou peça que ela confirme o domínio no painel administrativo.

## Perguntas frequentes

### Por que a alteração não entrou em vigor

Comandos de escrita ficam em modo de pré-visualização por padrão. Depois de conferir a prévia, adicione `--apply` para salvar de verdade.

### Como saber quais campos posso modificar

Nas configurações de upload, use primeiro `--get` para ver a estrutura do subcanal existente. Nas configurações de segurança, página e outras, use primeiro `--list-sections` para ver áreas, seções e campos permitidos pelo script.

### Quero usar o resultado em outro programa

Use `--output json` ou `--save-response result.json`. O programa pode ler diretamente o arquivo JSON salvo.


