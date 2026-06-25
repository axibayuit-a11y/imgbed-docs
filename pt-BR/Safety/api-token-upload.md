# Upload de arquivos com API Token

O upload com API Token é indicado para scripts, tarefas automatizadas e programas de terceiros. Você não precisa abrir a página do site: basta informar o endereço do ImgBed, o Token, o caminho do arquivo e o canal real de upload para enviar o arquivo e receber o link final.

![Editar API Token](../../image/Safety/apitoken/编辑上传权限api.png)

## Preparação

No painel administrativo, abra:

```text
System Settings -> Security Settings -> API Token
```

Ao criar ou editar um API Token, confirme se ele tem permissão de upload e escolha um canal padrão real. O upload via API Token não usa a entrada de “distribuição inteligente”; ao chamar os scripts, informe sempre um canal real.

## Baixar os scripts de upload

O repositório da documentação fornece dois scripts Node.js:

| Script | Uso |
| --- | --- |
| <a href="/tools/imgbed-token-single-upload.mjs" download>Baixar script de upload único</a> | Chama `/upload` apenas uma vez; serve para arquivos pequenos e testes de conectividade |
| <a href="/tools/imgbed-token-chunk-upload.mjs" download>Baixar script de upload em partes</a> | Usa as APIs de partes, envio direto ou sessão da plataforma; serve para arquivos grandes |

É necessário ter Node.js 18 ou superior instalado na máquina local.

## Listar canais disponíveis

Os dois scripts podem listar primeiro os canais disponíveis para o API Token atual:

```powershell
node imgbed-token-single-upload.mjs --base-url "https://your-domain" --token "your API Token" --list-channels
node imgbed-token-chunk-upload.mjs --base-url "https://your-domain" --token "your API Token" --list-channels
```

Ao listar canais, não é preciso passar `--file` nem `--channel`. A resposta inclui o canal padrão, o parâmetro do canal principal, os nomes dos subcanais e se o balanceamento de carga está ativado. Chaves, tokens de atualização e outras configurações sensíveis não são retornados.

## Como escolher o modo de upload

| Modo | Quando usar | Observação |
| --- | --- | --- |
| Upload único | Arquivos pequenos, scripts simples, testes de API | O arquivo inteiro é enviado em uma requisição para `/upload` |
| Upload em partes | Arquivos grandes ou sujeitos a timeout | O script usa partes, envio direto ou sessão da plataforma conforme o canal |

Para arquivos grandes, prefira o script de upload em partes. O upload único depende do limite de corpo da Cloudflare, da memória do Worker e das restrições do canal de destino.

## Upload único

O script de upload único faz apenas uma requisição para `/upload`.

```powershell
node imgbed-token-single-upload.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --file "D:\test\image.png" `
  --channel s3 `
  --folder "photos/2026"
```

Você também pode colocar o Token em uma variável de ambiente:

```powershell
$env:IMGBED_API_TOKEN="your API Token"
node imgbed-token-single-upload.mjs --base-url "https://your-domain" --file "D:\test\image.png" --channel s3
```

### Parâmetros do upload único

| Parâmetro | Obrigatório | Descrição |
| --- | --- | --- |
| `--base-url <url>` | Sim | Endereço do ImgBed, por exemplo `https://image.ai6.me` |
| `--token <token>` | Sim | API Token; também pode usar a variável `IMGBED_API_TOKEN` |
| `--file <path>` | Sim | Caminho do arquivo local |
| `--channel <key>` | Sim | Canal de upload |
| `--folder <path>` | Não | Pasta de destino, por exemplo `photos/2026` ou `/user/` |
| `--name-type <type>` | Não | Modo de nomeação, correspondente a `uploadNameType` no servidor; padrão `default` |
| `--channel-name <name>` | Não | Subcanal ou conta específica; se omitido, o servidor usa a configuração do canal |
| `--retries <n>` | Não | Número de tentativas para falhas temporárias; padrão `3` |
| `--timeout-ms <n>` | Não | Timeout de uma requisição; padrão `180000` |
| `--output <pretty\|json>` | Não | Formato de saída; padrão `pretty` |
| `--save-response <path>` | Não | Salva o resultado final em um arquivo JSON |
| `--list-channels` | Não | Apenas lista os canais de upload disponíveis para o Token, sem enviar arquivo |

### Canais do upload único

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

### Limites do upload único, com recomendação de manter cada arquivo abaixo de 100 MB

Os canais abaixo têm bloqueio explícito para uma única requisição `/upload`:

| Canal | Limite do upload único |
| --- | ---: |
| Telegram | 20 MiB |
| Discord | 10 MiB |
| S3 | 64 MiB |
| WebDAV | 64 MiB |
| GitHub Releases | 64 MiB |
| GitLab Packages | 64 MiB |

Quando o arquivo passa do limite, o script mostra o erro correspondente localmente. Os outros canais não têm um limite local fixo de 100 MB no script; se o corpo da requisição exceder a capacidade da Cloudflare ou da plataforma remota, o erro virá da Cloudflare ou do próprio serviço.

## Upload em partes

O script de upload em partes usa primeiro o API Token para pedir ao servidor que resolva o destino do arquivo. Depois ele segue o fluxo de arquivo grande adequado para cada canal. O usuário não precisa implementar sessão, envio das partes, junção ou finalização por conta própria.

```powershell
node imgbed-token-chunk-upload.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --file "D:\test\video.zip" `
  --channel github `
  --folder "photos/2026" `
  --concurrency 3
```

### Parâmetros do upload em partes

| Parâmetro | Obrigatório | Descrição |
| --- | --- | --- |
| `--base-url <url>` | Sim | Endereço do ImgBed |
| `--token <token>` | Sim | API Token; também pode usar a variável `IMGBED_API_TOKEN` |
| `--file <path>` | Sim | Caminho do arquivo local |
| `--channel <key>` | Sim | Canal de upload |
| `--folder <path>` | Não | Pasta de destino |
| `--name-type <type>` | Não | Modo de nomeação, correspondente a `uploadNameType` no servidor; padrão `default` |
| `--channel-name <name>` | Não | Subcanal ou conta específica; se omitido, o servidor usa a configuração do canal |
| `--concurrency <n>` | Não | Número de envios simultâneos; padrão `1`, máximo `3` |
| `--retries <n>` | Não | Número de tentativas para falhas temporárias; padrão `3` |
| `--timeout-ms <n>` | Não | Timeout de cada requisição; padrão `180000` |
| `--output <pretty\|json>` | Não | Formato de saída; padrão `pretty` |
| `--save-response <path>` | Não | Salva o resultado final em um arquivo JSON |
| `--list-channels` | Não | Apenas lista os canais de upload disponíveis para o Token, sem enviar arquivo |

### Canais do upload em partes

| Parâmetro | Fluxo de upload |
| --- | --- |
| `telegram` / `tg` | Sessão real em partes via `/upload` |
| `discord` / `dc` | Sessão real em partes via `/upload` |
| `cfr2` / `r2` | Sessão real em partes via `/upload` |
| `github` / `gh` | Sessão real em partes via `/upload` |
| `gitlab` / `gl` | Sessão real em partes via `/upload` |
| `webdav` / `wd` | Sessão real em partes via `/upload` |
| `s3` | Upload multipart do S3 |
| `onedrive` / `od` | Sessão de upload do OneDrive |
| `googledrive` / `google` / `gd` | Upload retomável do Google Drive |
| `dropbox` / `db` | Sessão de upload do Dropbox |
| `yandex` / `yx` | URL de envio direto do Yandex |
| `pcloud` / `pd` | Link de upload do pCloud |
| `huggingface` / `hf` | Upload via Hugging Face LFS |

Nos testes, arquivos compactados no Yandex se mostraram instáveis; arquivos não compactados foram enviados com sucesso.

## Resultado retornado

Depois de um upload bem-sucedido, o script imprime:

```text
success
src: /file/photos/2026/example.png
url: https://your-domain/file/photos/2026/example.png
fileId: photos/2026/example.png
```

| Campo | Descrição |
| --- | --- |
| `src` | Caminho interno do arquivo no site |
| `url` | Link completo de acesso, pronto para gravar em outro script ou banco de dados |
| `fileId` | ID do arquivo, útil para consultas, gerenciamento ou registros |
| `channelName` | O script em partes pode retornar o subcanal ou conta realmente usado |

Com `--output json`, o script imprime o JSON completo para processamento por outro programa.

## Chamar diretamente a API de upload único

Sem usar o script, também é possível chamar diretamente a API de upload único:

```text
POST https://your-domain/upload?uploadChannel=s3&uploadFolder=photos/2026&uploadNameType=default
Authorization: Bearer your API Token
Content-Type: multipart/form-data
```

Campo do formulário:

| Campo | Obrigatório | Descrição |
| --- | --- | --- |
| `file` | Sim | Arquivo a enviar |

Parâmetros de consulta:

| Parâmetro | Obrigatório | Descrição |
| --- | --- | --- |
| `uploadChannel` | Sim | Canal real de upload |
| `uploadFolder` | Não | Pasta de destino |
| `uploadNameType` | Não | Modo de nomeação |
| `channelName` | Não | Subcanal ou conta específica |

Em caso de sucesso, a API retorna algo como:

```json
{
  "success": true,
  "src": "/file/photos/2026/example.png",
  "url": "https://your-domain/file/photos/2026/example.png",
  "fileId": "photos/2026/example.png"
}
```

## Perguntas frequentes

### Upload único de arquivo grande falha

O `/upload` único envia o arquivo inteiro em uma requisição. Arquivos grandes podem ser bloqueados pela Cloudflare ou pela plataforma remota. Para arquivos grandes, use o script de upload em partes.

### Usei `--channel-name`, mas ainda falhou

Confira se existe um subcanal com exatamente esse nome no canal escolhido e se ele está ativado. Sem `--channel-name`, o servidor escolhe a conta disponível conforme a configuração daquele canal.

### Quero usar o resultado em outro programa

Use `--output json` ou `--save-response result.json`. O programa pode ler o campo `url` para obter o link completo do arquivo.

### Upload de arquivo compactado no Yandex falha

O Yandex não oferece suporte confiável a formatos compactados; isso pode estar ligado às políticas da plataforma. Se precisar usar o canal Yandex, prefira arquivos não compactados.



