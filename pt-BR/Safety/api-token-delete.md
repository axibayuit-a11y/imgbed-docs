# Excluir arquivos com API Token

O script de exclusão com API Token é indicado para scripts, tarefas automatizadas e programas de terceiros. Você não precisa abrir o painel administrativo: basta informar o endereço do site, o Token e IDs de arquivo claros para excluir um ou vários arquivos do ImgBed.

Excluir é uma operação de gravação. Depois que o comando é executado, os arquivos são realmente removidos. Por isso, confira primeiro os `fileId` que deseja excluir com `imgbed-token-list.mjs` e só depois passe esses IDs para o script de exclusão.

![Editar API Token](../../image/Safety/apitoken/编辑删除权限api.png)

## Preparação

No painel administrativo, abra:

```text
System Settings -> Security Settings -> API Token
```

Ao criar ou editar um API Token, confirme se esse Token tem permissão para excluir. Este script precisa apenas da permissão `delete`.

Você também pode colocar o Token em uma variável de ambiente:

```powershell
$env:IMGBED_API_TOKEN="your API Token"
```

## Baixar o script

| Script | Uso |
| --- | --- |
| <a href="/tools/imgbed-token-delete.mjs" download>script de exclusão de arquivos</a> | Exclui um ou vários IDs de arquivo informados explicitamente |

É necessário ter Node.js 18 ou superior instalado na máquina local.

## Como a API de exclusão funciona

O script de exclusão chama a API de exclusão do servidor:

```text
POST /api/manage/delete/batch
```

A requisição precisa levar o API Token:

```text
Authorization: Bearer <token>
```

Exemplo de corpo da requisição:

```json
{
  "fileIds": ["photos/2026/a.txt"],
  "deleteStrictness": "strict"
}
```

Quando `fileIds` contém apenas um arquivo, é uma exclusão individual. Quando contém vários arquivos, é uma exclusão em lote. O servidor processa no máximo 15 arquivos por requisição, e o script divide as requisições automaticamente conforme `--batch-size`.

A API retorna um fluxo de progresso em NDJSON. Eventos comuns incluem `batch_start`, `file_step`, `file_done`, `batch_complete` e `batch_error`. O script interpreta esses eventos e os resume em um resultado legível ou em um resultado JSON.

Depois de uma exclusão bem-sucedida, o servidor também atualiza automaticamente o índice de arquivos, as estatísticas de diretórios, as estatísticas de uso de armazenamento e a limpeza do armazenamento temporário.

## Parâmetros do script de exclusão

| Parâmetro | Obrigatório | Descrição |
| --- | --- | --- |
| `--base-url <url>` | Sim | Endereço do ImgBed, por exemplo `https://image.ai6.me` |
| `--token <token>` | Sim | API Token; também pode usar a variável `IMGBED_API_TOKEN` |
| `--file-id <id>` | Sim | ID do arquivo a excluir; pode ser informado várias vezes |
| `--strictness <strict\|soft>` | Não | Rigor da exclusão; padrão `strict` |
| `--batch-size <n>` | Não | Número de arquivos por requisição; padrão `15`, máximo `15` |
| `--retries <n>` | Não | Número de tentativas para falhas temporárias; padrão `3` |
| `--timeout-ms <n>` | Não | Timeout de uma requisição; padrão `180000` |
| `--output <pretty\|json>` | Não | Formato de saída; padrão `pretty` |
| `--save-response <path>` | Não | Salva o resultado final em um arquivo JSON |
| `-h` / `--help` | Não | Mostra a ajuda do script |

Este script exclui apenas os arquivos informados explicitamente com `--file-id`. Ele não faz busca aproximada, não esvazia diretórios inteiros e não lê IDs a excluir de uma lista separada por vírgulas nem de um arquivo local.

## Exclusão rigorosa e exclusão flexível

| Modo | Descrição |
| --- | --- |
| `strict` | Modo padrão. Se a exclusão no armazenamento remoto falhar, o registro do ImgBed é mantido para facilitar uma nova tentativa ou investigação. |
| `soft` | Se a exclusão no armazenamento remoto falhar, o registro do ImgBed ainda assim é limpo, e o resultado retorna um aviso. |

Se você quer considerar a operação bem-sucedida somente quando o arquivo remoto também for removido, use o padrão `strict`. Se uma plataforma remota já não consegue excluir o arquivo, mas você quer apenas limpar o registro do ImgBed, use `soft`.

## Exemplos de uso

Excluir um arquivo:

```powershell
node imgbed-token-delete.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --file-id "photos/2026/a.txt"
```

Usar o Token da variável de ambiente:

```powershell
$env:IMGBED_API_TOKEN="your API Token"

node imgbed-token-delete.mjs `
  --base-url "https://your-domain" `
  --file-id "photos/2026/a.txt"
```

Excluir vários arquivos:

```powershell
node imgbed-token-delete.mjs `
  --base-url "https://your-domain" `
  --file-id "photos/2026/a.txt" `
  --file-id "photos/2026/b.txt" `
  --file-id "photos/2026/c.txt"
```

Limpar o registro do ImgBed mesmo se a exclusão remota falhar:

```powershell
node imgbed-token-delete.mjs `
  --base-url "https://your-domain" `
  --file-id "photos/2026/a.txt" `
  --strictness soft
```

Emitir JSON e salvar o resultado:

```powershell
node imgbed-token-delete.mjs `
  --base-url "https://your-domain" `
  --file-id "photos/2026/a.txt" `
  --output json `
  --save-response ".\delete-result.json"
```

Limitar cada requisição a 5 arquivos:

```powershell
node imgbed-token-delete.mjs `
  --base-url "https://your-domain" `
  --file-id "photos/2026/a.txt" `
  --file-id "photos/2026/b.txt" `
  --batch-size 5
```

## Confira o fileId antes de excluir

O script de exclusão precisa do ID do arquivo no ImgBed. Você pode usar primeiro o script de listagem para ver os arquivos em um diretório:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --dir "photos/2026" `
  --count 10 `
  --output json
```

O valor `name` no resultado geralmente é o `fileId` que pode ser passado para o script de exclusão.

## Perguntas frequentes

### Por que a exclusão falhou, mas o arquivo ainda aparece na lista?

Com o padrão `strict`, quando a exclusão no armazenamento remoto falha, o registro do ImgBed é mantido. Isso evita remover apenas o índice local enquanto o arquivo remoto continua existindo. Quando tiver certeza de que pode limpar só o registro do ImgBed, tente novamente o mesmo `fileId` com `soft`.

### Por que o resultado contém um aviso?

Um aviso geralmente indica um problema não crítico durante a exclusão remota, a limpeza do armazenamento temporário ou o fechamento das estatísticas. O script agrupa os avisos para ajudar você a decidir se precisa tentar novamente.

### Posso excluir um diretório inteiro de uma vez?

Este script não oferece uma função para esvaziar diretórios. Use primeiro o script de listagem para filtrar `fileId` claros e depois passe cada arquivo ao script de exclusão.



