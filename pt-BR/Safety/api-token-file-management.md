# Gerenciamento de arquivos com API Token

O gerenciamento de arquivos com API Token é indicado para scripts, tarefas automatizadas e painéis administrativos de terceiros. Ele usa a permissão `manage` para editar informações de arquivos, mover arquivos, renomear arquivos, criar arquivos marcadores de diretório, ajustar etiquetas e estado de lista, bloquear ou liberar um IP de upload, e criar ou excluir Tokens temporários de upload sem abrir o painel administrativo.

Este script trata apenas ações leves do gerenciamento de arquivos e do gerenciamento de usuários. Upload, listagem, exclusão, configurações de upload, configurações do site e relações de federação continuam usando seus próprios scripts.

![Editar API Token](../../image/Safety/apitoken/编辑管理权限api.png)

## Preparação

No painel administrativo, abra:

System Settings -> Security Settings -> API Token

Ao criar ou editar um API Token, confirme se esse Token tem permissão de gerenciamento. A permissão `manage` pode alterar o estado de arquivos, o estado de upload de usuários e criar Tokens temporários de upload. Entregue essa permissão apenas a scripts ou usuários confiáveis.

As ações de escrita do script de gerenciamento de arquivos ficam em modo de pré-visualização por padrão e não salvam nada. Depois de conferir a prévia, adicione `--apply` para executar a alteração.

Você também pode colocar o Token em uma variável de ambiente:

```powershell
$env:IMGBED_API_TOKEN="your API Token"
```

## Baixar o script

| Script | Uso |
| --- | --- |
| <a href="/tools/imgbed-token-manage.mjs" download>Baixar script de gerenciamento de arquivos</a> | Metadados de arquivo, etiquetas de moderação, etiquetas de arquivo, estado de lista, movimentação, renomeação, criação de pastas, bloqueio/liberação de IP e criação ou exclusão de Tokens temporários de upload |

É necessário ter Node.js 18 ou superior instalado na máquina local.

## Limites de funcionalidade

| Capacidade | Script | Permissão |
| --- | --- | --- |
| Fazer upload de arquivos | `imgbed-token-single-upload.mjs` / `imgbed-token-chunk-upload.mjs` | `upload` |
| Listar arquivos, filtrar arquivos e ler estatísticas de usuários | `imgbed-token-list.mjs` | `list` |
| Excluir arquivos especificados explicitamente | `imgbed-token-delete.mjs` | `delete` |
| Editar informações, etiquetas, listas, mover, renomear, criar pastas, bloquear IP e criar ou excluir Tokens temporários de upload | `imgbed-token-manage.mjs` | `manage` |
| Editar canais de upload, segurança, páginas, outras configurações e relações de federação | Scripts de gerenciamento de configuração | `manage` |

`imgbed-token-manage.mjs` não faz upload, não lista arquivos e não exclui arquivos. Quando precisar localizar um `fileId`, use primeiro o script de listagem para filtrar arquivos. Quando precisar excluir um arquivo, passe o `fileId` explícito para o script de exclusão.

## Parâmetros gerais

| Parâmetro | Obrigatório | Descrição |
| --- | --- | --- |
| `--base-url <url>` | Sim | Endereço do ImgBed, por exemplo `https://image.ai6.me` |
| `--token <token>` | Sim | API Token; também pode usar a variável de ambiente `IMGBED_API_TOKEN` |
| `--retries <n>` | Não | Número de tentativas para falhas temporárias; padrão `3` |
| `--timeout-ms <n>` | Não | Timeout de uma requisição; padrão `180000` |
| `--output <pretty\|json>` | Não | Formato de saída; padrão `pretty`. Para uso por programa, prefira `json` |
| `--save-response <path>` | Não | Salva o resultado final em um arquivo JSON |
| `--batch-size <n>` | Não | Quantidade processada por requisição em ações em lote; padrão `15`, máximo `15` |
| `--apply` | Não | Executa a escrita de verdade; sem isso, apenas mostra a prévia |
| `-h` / `--help` | Não | Mostra a ajuda do script |

## Confirmar primeiro o fileId

A maioria das ações do script de gerenciamento de arquivos precisa de um `fileId`. Você pode consultar isso primeiro com o script de listagem:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --dir "test4" `
  --count 10 `
  --output json
```

O campo `name` retornado normalmente é o `fileId` que pode ser passado ao script de gerenciamento de arquivos.

## Metadados de arquivo

Os metadados de arquivo servem para alterar o nome exibido no gerenciamento de arquivos do painel e a origem de leitura.

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-metadata `
  --file-id "photos/2026/a.jpg" `
  --file-name "cover.jpg" `
  --read-source backup
```

Depois de confirmar que a prévia está correta, salve:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-metadata `
  --file-id "photos/2026/a.jpg" `
  --file-name "cover.jpg" `
  --read-source backup `
  --apply
```

### Parâmetros de metadados de arquivo

| Parâmetro | Descrição |
| --- | --- |
| `--set-metadata` | Altera os metadados de um único arquivo |
| `--file-id <id>` | ID do arquivo que será alterado |
| `--file-name <name>` | Novo nome exibido no painel |
| `--read-source <primary\|backup>` | Origem de leitura. `primary` é a origem principal e `backup` é a origem de backup |

Informe pelo menos um destes parâmetros: `--file-name` ou `--read-source`.

## Etiquetas de moderação

As etiquetas de moderação correspondem à classificação etária do arquivo. Você pode ler a etiqueta atual antes de alterá-la.

Ler a etiqueta de moderação:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get-label `
  --file-id "photos/2026/a.jpg"
```

Definir a etiqueta de moderação:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-label `
  --file-id "photos/2026/a.jpg" `
  --label r12 `
  --apply
```

### Parâmetros de etiqueta de moderação

| Parâmetro | Descrição |
| --- | --- |
| `--get-label` | Lê a etiqueta de moderação de um único arquivo |
| `--set-label` | Altera a etiqueta de moderação de um único arquivo |
| `--file-id <id>` | ID do arquivo |
| `--label <value>` | Valor da etiqueta: `all-ages`, `r12`, `r16`, `r18`, `None` |

## Etiquetas de arquivo

As etiquetas de arquivo adicionam marcadores de negócio que podem ser pesquisados depois. O script permite ler, substituir, acrescentar e remover etiquetas, além de processar vários arquivos em lote.

Ler etiquetas de arquivo:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get-tags `
  --file-id "photos/2026/a.jpg"
```

Adicionar etiquetas:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --add-tags `
  --file-id "photos/2026/a.jpg" `
  --tag "cover" `
  --tag "2026" `
  --apply
```

Remover etiquetas:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --remove-tags `
  --file-id "photos/2026/a.jpg" `
  --tag "cover" `
  --apply
```

Substituir etiquetas:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-tags `
  --file-id "photos/2026/a.jpg" `
  --tag "archive" `
  --tag "public" `
  --apply
```

Adicionar etiquetas em lote:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --batch-tags `
  --file-id "photos/2026/a.jpg" `
  --file-id "photos/2026/b.jpg" `
  --tag-action add `
  --tag "batch-test" `
  --apply
```

### Parâmetros de etiquetas de arquivo

| Parâmetro | Descrição |
| --- | --- |
| `--get-tags` | Lê as etiquetas de um único arquivo |
| `--set-tags` | Substitui as etiquetas de um único arquivo |
| `--add-tags` | Acrescenta etiquetas a um único arquivo |
| `--remove-tags` | Remove etiquetas de um único arquivo |
| `--batch-tags` | Define, acrescenta ou remove etiquetas em lote |
| `--file-id <id>` | ID do arquivo; em ações em lote, pode ser passado várias vezes |
| `--tag <tag>` | Valor da etiqueta; pode ser passado várias vezes |
| `--tags-json <path>` | Lê um array de etiquetas a partir de um arquivo JSON |
| `--tag-action <set\|add\|remove>` | Ação de etiqueta em lote |

Exemplo de conteúdo para o arquivo `--tags-json`:

```json
["cover", "2026", "public"]
```

## Estado de lista negra e lista branca

O estado de lista determina o comportamento de controle de acesso do arquivo no modo de acesso público. Ele pode ser alterado individualmente ou em lote.

Colocar um arquivo na lista branca:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-list-type `
  --file-id "photos/2026/a.jpg" `
  --list-type White `
  --apply
```

Adicionar arquivos à lista negra em lote:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --batch-list-type `
  --file-id "photos/2026/a.jpg" `
  --file-id "photos/2026/b.jpg" `
  --list-type Block `
  --apply
```

Restaurar o estado de lista padrão:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-list-type `
  --file-id "photos/2026/a.jpg" `
  --list-type None `
  --apply
```

### Parâmetros de lista negra e lista branca

| Parâmetro | Descrição |
| --- | --- |
| `--set-list-type` | Altera o estado de lista de um único arquivo |
| `--batch-list-type` | Altera o estado de lista em lote. Cada requisição processa no máximo `15` arquivos |
| `--file-id <id>` | ID do arquivo; em ações em lote, pode ser passado várias vezes |
| `--list-type <None\|White\|Block>` | `None` é o estado padrão, `White` é lista branca e `Block` é lista negra |

## Mover arquivos

Mover arquivos transfere um ou mais arquivos para o diretório de destino. O backend processa no máximo `15` arquivos por requisição. O script divide automaticamente o trabalho conforme `--batch-size` e executa as requisições em sequência.

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --move `
  --file-id "photos/2026/a.jpg" `
  --file-id "photos/2026/b.jpg" `
  --target-path "archive/2026" `
  --apply
```

### Parâmetros de movimentação

| Parâmetro | Descrição |
| --- | --- |
| `--move` | Move arquivos |
| `--file-id <id>` | ID do arquivo que será movido; pode ser passado várias vezes |
| `--target-path <dir>` | Diretório de destino |
| `--batch-size <n>` | Quantidade de arquivos movidos por requisição; padrão `15`, máximo `15` |

## Renomear ou alterar caminho

A renomeação usa IDs explícitos de arquivo antigo e novo. O novo ID pode alterar apenas o nome do arquivo ou também mudar o diretório.

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --rename `
  --old-file-id "photos/2026/a.jpg" `
  --new-file-id "photos/2026/a-renamed.jpg" `
  --apply
```

Para renomear em lote, repita `--old-file-id` e `--new-file-id`:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --rename `
  --old-file-id "photos/2026/a.jpg" `
  --new-file-id "archive/2026/a.jpg" `
  --old-file-id "photos/2026/b.jpg" `
  --new-file-id "archive/2026/b.jpg" `
  --apply
```

Também é possível gravar o mapeamento em um arquivo JSON:

```json
[
  {
    "oldFileId": "photos/2026/a.jpg",
    "newFileId": "archive/2026/a.jpg"
  },
  {
    "oldFileId": "photos/2026/b.jpg",
    "newFileId": "archive/2026/b.jpg"
  }
]
```

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --rename `
  --items-json ".\rename-items.json" `
  --apply
```

### Parâmetros de renomeação

| Parâmetro | Descrição |
| --- | --- |
| `--rename` | Renomeia ou altera caminhos por mapeamento explícito |
| `--old-file-id <id>` | ID original do arquivo; pode ser passado várias vezes |
| `--new-file-id <id>` | Novo ID do arquivo; pode ser passado várias vezes, e a quantidade deve corresponder a `--old-file-id` |
| `--items-json <path>` | Array JSON. Cada item é `{ "oldFileId": "...", "newFileId": "..." }` |
| `--batch-size <n>` | Quantidade de renomeações processadas por requisição; padrão `15`, máximo `15` |

## Criar pastas

Os diretórios do ImgBed vêm dos caminhos de arquivo; não existem diretórios vazios reais. Ao criar uma pasta, o script cria um arquivo marcador `0.md` dentro do diretório de destino, para que o gerenciamento de arquivos e as estatísticas de diretórios possam exibir essa pasta.

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --create-folder `
  --parent-directory "photos" `
  --folder-name "2026" `
  --apply
```

### Parâmetros de criação de pasta

| Parâmetro | Descrição |
| --- | --- |
| `--create-folder` | Cria um arquivo marcador de diretório |
| `--parent-directory <dir>` | Diretório pai; para a raiz, passe uma string vazia |
| `--folder-name <name>` | Nome da nova pasta |

## Bloquear e liberar IP de upload

Com a permissão de gerenciamento, é possível adicionar um IP à lista de bloqueio de upload ou removê-lo dessa lista. Essa ação afeta uploads futuros desse IP, mas não exclui arquivos que esse IP já enviou.

Bloquear um IP de upload:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --block-ip "67.159.48.149" `
  --apply
```

Liberar um IP de upload:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --allow-ip "67.159.48.149" `
  --apply
```

Ver a lista atual de IPs bloqueados para upload:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --blocked-ips
```

### Parâmetros de gerenciamento de IP

| Parâmetro | Descrição |
| --- | --- |
| `--block-ip <ip>` | Adiciona um IP à lista de bloqueio de upload |
| `--allow-ip <ip>` | Remove um IP da lista de bloqueio de upload |

## Criar e excluir Tokens temporários de upload

A permissão de gerenciamento pode criar Tokens temporários exclusivos para upload. Esse Token sempre tem apenas a permissão `upload`, `autoDelete` é sempre `true` e o tempo máximo de expiração é `1` dia.

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --create-upload-token `
  --name "Temporary Upload Token" `
  --owner "upload-bot" `
  --default-upload-channel telegram `
  --expires-in-minutes 20 `
  --apply `
  --output json
```

Também é possível passar diretamente um timestamp em milissegundos:

```powershell
$expiresAt = [DateTimeOffset]::UtcNow.AddHours(12).ToUnixTimeMilliseconds()

node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --create-upload-token `
  --name "Upload Token valid for one day" `
  --owner "upload-bot" `
  --default-upload-channel telegram `
  --expires-at $expiresAt `
  --apply
```

Ao excluir um Token temporário de upload, informe o `id` retornado pela API de criação. Um Token de gerenciamento só pode excluir Tokens que atendam às condições abaixo:

| Condição | Requisito |
| --- | --- |
| Permissão | `permissions` contém apenas `upload` |
| Exclusão automática | `autoDelete=true` |
| Validade | `expiresAt - createdAt <= 24` horas |

Excluir um Token temporário de upload:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --delete-upload-token `
  --token-id "mqt4jqokc85be80d1f0f47078e848a77d6c1aa6e" `
  --apply
```

Um Token de gerenciamento não pode excluir Tokens comuns, Tokens de longa duração, Tokens que contenham permissões `list` / `delete` / `manage`, nem Tokens de upload com validade superior a `1` dia. Esses Tokens ainda precisam ser tratados pelo painel administrativo no navegador.

### Parâmetros de Token temporário de upload

| Parâmetro | Descrição |
| --- | --- |
| `--create-upload-token` | Cria um Token temporário exclusivo para upload |
| `--delete-upload-token` | Exclui um Token temporário de upload que atenda às condições |
| `--name <name>` | Nome do Token |
| `--owner <owner>` | Observação de propriedade do Token |
| `--default-upload-channel <key>` | Canal de upload padrão. Precisa ser um canal real, como `telegram`, `s3` ou `github` |
| `--expires-in-minutes <n>` | Minutos até a expiração a partir do momento atual. Máximo `1440` |
| `--expires-at <ms>` | Tempo absoluto de expiração como timestamp em milissegundos. Máximo de `24` horas a partir do momento atual |
| `--token-id <id>` | ID do Token temporário de upload que será excluído |

Tokens temporários de upload só permitem upload. Nos testes, um Token temporário com `permissions=["upload"]` foi recusado ao acessar APIs de listagem, gerenciamento de arquivos e exclusão.

Depois de expirar, Tokens com `autoDelete=true` são limpos quando o backend verifica que eles expiraram. Ler a lista de API Tokens também limpa Tokens expirados cujo `autoDelete` seja `true`.

## Correspondência de APIs

| Ação | Método | API |
| --- | --- | --- |
| Alterar metadados de arquivo | `PATCH` | `/api/manage/metadata/{fileId}` |
| Ler etiqueta de moderação | `GET` | `/api/manage/label/{fileId}` |
| Alterar etiqueta de moderação | `POST` | `/api/manage/label/{fileId}` |
| Ler etiquetas de arquivo | `GET` | `/api/manage/tags/{fileId}` |
| Alterar etiquetas de arquivo | `POST` | `/api/manage/tags/{fileId}` |
| Alterar etiquetas de arquivo em lote | `POST` | `/api/manage/tags/batch` |
| Alterar estado de lista | `POST` | `/api/manage/listType/{fileId}` |
| Alterar estado de lista em lote | `POST` | `/api/manage/listType/batch` |
| Mover ou renomear | `POST` | `/api/manage/relocate/batch` |
| Criar pasta | `POST` | `/api/manage/folder/create` |
| Bloquear IP de upload | `POST` | `/api/manage/cusConfig/blockip` |
| Liberar IP de upload | `POST` | `/api/manage/cusConfig/whiteip` |
| Criar Token temporário de upload | `POST` | `/api/manage/apiTokens` |
| Excluir Token temporário de upload | `DELETE` | `/api/manage/apiTokens?id={tokenId}` |

O script adiciona automaticamente:

```text
Authorization: Bearer your API Token
```

## Formato de saída

A saída padrão `pretty` é adequada para leitura humana. Se outro programa precisar processar o resultado, use `--output json`:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get-tags `
  --file-id "photos/2026/a.jpg" `
  --output json
```

Também é possível salvar o resultado completo:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get-tags `
  --file-id "photos/2026/a.jpg" `
  --output json `
  --save-response ".\manage-result.json"
```

Ações em lote de movimentação, renomeação e lista analisam o fluxo de progresso NDJSON retornado pelo backend e resumem a quantidade de eventos, o estado de conclusão e os detalhes de falhas.

## Perguntas frequentes

### Por que o comando não alterou nada

As ações de escrita ficam em modo de pré-visualização por padrão. Depois de confirmar que a prévia está correta, adicione `--apply` para salvar de verdade.

### Este script pode fazer upload, listar ou excluir arquivos

Não. Para upload, use os scripts de upload; para listar e filtrar, use o script de listagem; para excluir arquivos explícitos, use o script de exclusão. O script de gerenciamento de arquivos trata apenas ações leves sob a permissão `manage`.

### Como saber qual fileId informar

Consulte primeiro os arquivos com `imgbed-token-list.mjs --files`. O campo `name` retornado normalmente é o ID do arquivo, ou seja, o valor usado aqui em `--file-id`.

### Quantos arquivos uma operação em lote pode processar de uma vez

O backend processa no máximo `15` arquivos por requisição. O padrão do script é `--batch-size 15`; se você passar um valor menor, ele divide automaticamente o trabalho em várias requisições sequenciais.

### É possível criar uma pasta realmente vazia

Os diretórios do ImgBed são derivados de caminhos de arquivo; não existem diretórios vazios reais. `--create-folder` cria um arquivo marcador `0.md`, permitindo que a pasta apareça no gerenciamento de arquivos e nas estatísticas de diretórios.

### Qual é a duração máxima de um Token temporário de upload

No máximo `1` dia, ou seja, `1440` minutos. Se esse limite for excedido, o script rejeita localmente e o backend também retorna `API_TOKEN_MANAGE_CREATE_EXPIRES_AT_TOO_LONG`.

### Um Token temporário de upload é excluído automaticamente depois de expirar

Ele é limpo automaticamente, mas não por uma tarefa agendada imediata. Um Token expirado é limpo quando volta a ser verificado. Ler a lista de API Tokens também limpa Tokens expirados com `autoDelete=true`.
