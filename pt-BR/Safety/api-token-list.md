# Listar e filtrar com API Token

O script de listagem com API Token é indicado para scripts, tarefas automatizadas e programas de terceiros que precisam ler dados do ImgBed. Ele usa apenas a permissão `list`; não faz upload de arquivos, não exclui arquivos, não altera configurações e não bloqueia nem libera upload para nenhum IP.

![Editar API Token](../../image/Safety/apitoken/编辑列出权限api.png)

Principais usos:

| Função | Descrição |
| --- | --- |
| Listagem do gerenciamento de arquivos | Lê a lista de arquivos do painel administrativo e aceita os parâmetros avançados de filtro do gerenciamento de arquivos |
| Listagem do gerenciamento de usuários | Lê estatísticas de upload por usuário/IP e aceita os parâmetros de filtro do gerenciamento de usuários |
| Lista de canais de upload | Lê canais de upload, subcanais, capacidade e informações de balanceamento de carga com dados sensíveis removidos |
| Tabela de estatísticas de diretórios | Lê estatísticas de diretórios e informações de paginação de diretórios |

## Preparação

No painel administrativo, abra:

```text
System Settings -> Security Settings -> API Token
```

Ao criar ou editar um API Token, confirme se esse Token tem permissão para listar. Este script precisa apenas da permissão `list`.

Você também pode colocar o Token em uma variável de ambiente:

```powershell
$env:IMGBED_API_TOKEN="your API Token"
```

## Baixar o script

| Script | Uso |
| --- | --- |
| <a href="/tools/imgbed-token-list.mjs" download>Baixar script de listagem e filtro</a> | Listagem do gerenciamento de arquivos, listagem do gerenciamento de usuários, lista de canais de upload, tabela de estatísticas de diretórios |

É necessário ter Node.js 18 ou superior instalado na máquina local.

## Parâmetros gerais

| Parâmetro | Obrigatório | Descrição |
| --- | --- | --- |
| `--base-url <url>` | Sim | Endereço do ImgBed, por exemplo `https://image.ai6.me` |
| `--token <token>` | Sim | API Token; também pode usar a variável `IMGBED_API_TOKEN` |
| `--retries <n>` | Não | Número de tentativas para falhas temporárias; padrão `3` |
| `--timeout-ms <n>` | Não | Timeout de uma requisição; padrão `180000` |
| `--output <pretty\|json>` | Não | Formato de saída; padrão `pretty`. Para uso por programa, prefira `json` |
| `--save-response <path>` | Não | Salva o resultado final em um arquivo JSON |
| `-h` / `--help` | Não | Mostra a ajuda do script |

## Listagem do gerenciamento de arquivos

Listar arquivos do gerenciamento de arquivos:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --count 10
```

Emitir JSON:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --count 10 `
  --output json
```

Ler apenas a quantidade dentro dos filtros atuais:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --file-summary `
  --dir "photos/2026" `
  --recursive
```

### Parâmetros do gerenciamento de arquivos

| Parâmetro | Descrição |
| --- | --- |
| `--files` | Lista arquivos |
| `--file-summary` | Lê apenas a estatística de quantidade |
| `--start <n>` | Deslocamento da paginação |
| `--count <n>` | Número de resultados retornados |
| `--dir <path>` | Define o diretório |
| `--recursive` | Inclui arquivos de subdiretórios |
| `--search <text>` | Pesquisa por palavra-chave |
| `--channel <key>` | Filtra pelo canal principal de upload, por exemplo `github`, `s3`, `yandex` |
| `--channel-scope <primary\|backup\|all>` | Escopo do filtro de canal: canal principal, canal de backup ou todos |
| `--channel-name-groups <value>` | Filtro de grupos de subcanais; repassado para o parâmetro existente no servidor |
| `--list-type <csv>` | Tipo de lista; valores comuns são `None,White,Block` |
| `--include-tags <csv>` | Tags que devem estar presentes |
| `--exclude-tags <csv>` | Tags a excluir |
| `--time-start <ms>` | Início do período de upload, marca temporal em milissegundos |
| `--time-end <ms>` | Fim do período de upload, marca temporal em milissegundos |
| `--file-exts <csv>` | Inclui apenas extensões específicas, por exemplo `jpg,png,pdf` |
| `--exclude-file-exts <csv>` | Exclui extensões específicas |
| `--file-status-categories <csv>` | Categorias de arquivo: `image,audio,video,document,code,other` |
| `--upload-ip <ip>` | Filtra pelo prefixo do IP de upload |
| `--age-ratings <csv>` | Classificação etária: `none,all-ages,r12,r16,r18` |
| `--orientation <csv>` | Filtro de orientação; repassado aos valores existentes no servidor |
| `--read-source <csv>` | Filtro de origem de leitura; repassado aos valores existentes no servidor |
| `--access-status <normal\|blocked>` | Estado do acesso público |
| `--min-width <n>` | Largura mínima |
| `--max-width <n>` | Largura máxima |
| `--min-height <n>` | Altura mínima |
| `--max-height <n>` | Altura máxima |
| `--min-file-size <mb>` | Tamanho mínimo do arquivo; a unidade segue o parâmetro MB existente no servidor |
| `--max-file-size <mb>` | Tamanho máximo do arquivo; a unidade segue o parâmetro MB existente no servidor |

### Exemplos do gerenciamento de arquivos

Pesquisar PDF:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --search "pdf" `
  --file-status-categories "document" `
  --count 20
```

Filtrar por IP de upload e canal:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --upload-ip "103.62" `
  --channel yandex `
  --channel-scope primary
```

Salvar o resultado completo:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --count 100 `
  --output json `
  --save-response ".\files.json"
```

## Listagem do gerenciamento de usuários

Listar estatísticas de upload por usuário/IP:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --count 20
```

Pesquisar um IP ou local:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --search "43.198.183.56"
```

Ver detalhes dos arquivos enviados por um IP:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --user-detail `
  --ip "43.198.183.56" `
  --count 20
```

Listar IPs bloqueados para upload:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --blocked-ips
```

### Parâmetros do gerenciamento de usuários

| Parâmetro | Descrição |
| --- | --- |
| `--users` | Lista estatísticas de upload por usuário/IP |
| `--user-detail` | Mostra detalhes dos arquivos enviados por um IP |
| `--blocked-ips` | Lista IPs bloqueados para upload |
| `--ip <ip>` | Obrigatório para `--user-detail` |
| `--start <n>` | Deslocamento da paginação |
| `--count <n>` | Número de resultados retornados |
| `--sort <value>` | Ordenação: `timeDesc`, `timeAsc`, `countDesc`, `countAsc`, `totalSizeDesc`, `totalSizeAsc` |
| `--search <text>` | Pesquisa IP ou local |
| `--upload-status <allowed\|blocked>` | Se o upload está permitido |
| `--start-time <ms>` | Início do período estatístico, marca temporal em milissegundos |
| `--end-time <ms>` | Fim do período estatístico, marca temporal em milissegundos |
| `--file-status-categories <csv>` | Filtro de categoria de arquivo |
| `--age-ratings <csv>` | Filtro de classificação etária |
| `--min-file-size <mb>` | Tamanho mínimo do arquivo |
| `--max-file-size <mb>` | Tamanho máximo do arquivo |
| `--list-type <csv>` | Tipo de lista; valores comuns são `None,White,Block` |
| `--access-status <normal\|blocked>` | Estado do acesso público |

### Exemplos do gerenciamento de usuários

Listar usuários bloqueados para upload:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --upload-status blocked
```

Pesquisar por palavra-chave de local:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --search "Hong Kong"
```

Ordenar por quantidade de uploads:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --sort countDesc `
  --count 50
```

## Lista de canais de upload

Listar a configuração dos canais de upload com dados sensíveis removidos:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --channels
```

O resultado inclui:

| Campo | Descrição |
| --- | --- |
| `type` | Canal principal de upload, por exemplo `github`, `s3`, `yandex` |
| `name` | Nome do subcanal ou da conta |
| `enabled` | Se está ativado |
| `load_balance_enabled` | Se o balanceamento de carga está ativado nesse canal principal |
| `quota_enabled` | Se a verificação de capacidade está ativada |
| `quota_limit_bytes` | Limite de capacidade |
| `quota_used_bytes` | Capacidade usada |
| `quota_checked_at` | Horário da verificação de capacidade |
| `tag_json` | Tags não sensíveis, como repositório público ou privado |
| `created_at` / `updated_at` | Horários de criação e atualização |

Essa API não retorna chaves, tokens de atualização, tokens temporários, senhas nem outras configurações sensíveis.

## Tabela de estatísticas de diretórios

Listar estatísticas de diretórios:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --directories `
  --limit 20
```

Listar caminhos completos de diretório e pesquisar por prefixo:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --directories `
  --scope full `
  --search-prefix "test" `
  --include-parents `
  --limit 10
```

### Parâmetros das estatísticas de diretórios

| Parâmetro | Descrição |
| --- | --- |
| `--directories` | Lista a tabela de estatísticas de diretórios |
| `--dir <path>` | Diretório de onde a listagem começa |
| `--scope <direct\|full>` | `direct` lista apenas diretórios diretos; `full` lista caminhos completos |
| `--search-prefix <path>` | Pesquisa por prefixo de diretório |
| `--include-parents` | No modo `full`, inclui também os diretórios pais |
| `--limit <n>` | Número de resultados retornados; o servidor retorna no máximo `100` |
| `--cursor <path>` | Cursor da próxima página |

## Formato de saída

A saída padrão `pretty` é adequada para leitura humana:

```powershell
node imgbed-token-list.mjs --base-url "https://your-domain" --token "your API Token" --users --count 5
```

Se outro programa for processar o resultado, use `--output json`:

```powershell
node imgbed-token-list.mjs --base-url "https://your-domain" --token "your API Token" --users --count 5 --output json
```

Também é possível salvar o resultado completo:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --count 5 `
  --output json `
  --save-response ".\users.json"
```

## Perguntas frequentes

### Este script altera dados?

Não. Este script chama apenas APIs de leitura. Ele não envia, exclui, move, edita configurações nem bloqueia ou libera upload para nenhum IP.

### Por que a permissão `list` é necessária?

A listagem do gerenciamento de arquivos, a listagem do gerenciamento de usuários, a lista de canais com dados sensíveis removidos e as estatísticas de diretórios são recursos de leitura. Por isso, basta a permissão `list` no API Token.

### Como conferir quais parâmetros existem?

Execute:

```powershell
node imgbed-token-list.mjs --help
```

O script mostra todas as ações e parâmetros.


