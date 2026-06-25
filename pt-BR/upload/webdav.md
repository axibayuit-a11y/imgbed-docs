# Adicionar um canal WebDAV

## Melhor uso

Use o canal WebDAV quando:

- Você tiver um NAS, drive em nuvem ou serviço de armazenamento de objetos que forneça um endpoint WebDAV.
- Você quiser que as imagens enviadas sejam armazenadas no seu próprio diretório WebDAV.
- Você quiser salvar credenciais na tabela D1 `upload_channels`, em vez de expô-las por longo prazo no frontend.

## O que você precisa antes de começar

| Requisito | Finalidade |
| --- | --- |
| WebDAV Endpoint | A URL WebDAV do lado do servidor, por exemplo `https://nas.example.com/dav`. |
| Username | Usado para entrar no serviço WebDAV. |
| Password | Usado para entrar no serviço WebDAV. |
| Authentication mode | O padrão é `Basic`. Use `Digest` ou negociação automática somente se exigido pelo servidor. |
| Storage directory | Diretório usado para armazenar arquivos. O padrão é `imgbed`. |

## Onde adicionar

1. Abra Configurações do sistema.
2. Acesse Configurações de upload.
3. Clique em Adicionar canal no canto superior direito.
4. Selecione `WebDAV`.

## Referência de campos

| Campo | O que faz | Obrigatório |
| --- | --- | --- |
| Nome do canal | Um nome amigável para este canal WebDAV, como `koofr` ou `nas`. | Sim |
| Endpoint | Endpoint WebDAV completo, incluindo `https://`. | Sim |
| Username | Nome de usuário de login WebDAV. | Sim |
| Password | Senha de login WebDAV. | Sim |
| Authentication mode | Geralmente `Basic`; use `Digest` se o servidor exigir digest authentication. | Sim |
| Storage directory | Diretório em que os arquivos são armazenados. O padrão é `imgbed`. | Não |

## Exemplo: fie.nl.tab.digital

### 1. Crie uma senha de app

Abra as configurações de segurança da sua conta, encontre application passwords e crie uma nova app password.

![Criar uma senha de app](../../image/upload/webdav/创建应用密码.png)

Depois de criada, copie e salve a nova app password. Ela geralmente é exibida apenas uma vez.

![Salvar a nova senha de app](../../image/upload/webdav/记住新应用程序密码.png)

### 2. Preencha a configuração WebDAV no ImgBed

Volte ao ImgBed e adicione um canal WebDAV:

| Campo da UI | Valor |
| --- | --- |
| Endpoint | A URL WebDAV fornecida por `https://fie.nl.tab.digital/`. |
| Username | Seu username WebDAV. |
| Password | A app password que você acabou de criar. |
| Authentication mode | Comece com `Basic` na maioria dos casos. |
| Storage directory | O padrão é `imgbed`; você também pode usar um diretório personalizado. |

![Preencher a configuração](../../image/upload/webdav/填写配置.png)

## Comportamento de upload de arquivos grandes

O canal WebDAV agora usa upload em chunks real baseado em sessão.

Arquivos pequenos são enviados como um único arquivo completo. Arquivos maiores que 64 MiB são divididos automaticamente em chunks de cerca de 10 MiB e enviados para um diretório remoto de chunks.

O serviço WebDAV não precisa oferecer suporte a `partial update` nem a gravações baseadas em offset. O ImgBed não mescla chunks em um único arquivo grande no servidor remoto. Em vez disso, ele armazena um manifesto de chunks e lê os chunks em ordem quando o arquivo é solicitado.

Na prática:

| Tamanho do arquivo | Método de upload | Layout no armazenamento remoto |
| --- | --- | --- |
| 64 MiB ou menor | Upload normal | Um arquivo completo |
| Maior que 64 MiB | Upload em chunks real baseado em sessão | Um diretório de chunks contendo vários arquivos de chunk |

O diretório de chunks afeta apenas o layout do armazenamento remoto. Ele não altera a URL do arquivo no ImgBed. Os usuários continuam acessando o arquivo pelo link original `/file/...`.

## Etapas de configuração

1. Abra Configurações de upload.
2. Clique em Adicionar canal.
3. Selecione `WebDAV`.
4. Informe um nome de canal que você reconheça, por exemplo `koofr`.
5. Informe o endpoint WebDAV, por exemplo `https://app.koofr.net/dav/Koofr`.
6. Informe username e password.
7. Mantenha authentication mode como `Basic` por padrão.
8. Mantenha storage directory como `imgbed`, ou altere para seu próprio diretório.
9. Clique em Salvar.
10. Depois de salvar, verifique o cartão do canal, consulte a capacidade se disponível e envie um arquivo de teste.

## Como verificar

| Verificação | Como verificar |
| --- | --- |
| O cartão do canal aparece | Depois de salvar, a página Configurações de upload deve mostrar um cartão de canal WebDAV. |
| O canal está habilitado | O switch no canto superior direito do cartão deve permanecer ligado. |
| As credenciais foram salvas | A visualização de detalhes deve mostrar Endpoint, username, authentication mode e storage directory. |
| Upload de arquivo pequeno funciona | Envie uma imagem de teste e confirme que o arquivo aparece no diretório WebDAV. |
| A regra de arquivo grande funciona | Arquivos maiores que 64 MiB usam upload em chunks e criam um diretório remoto de chunks. |
| A consulta de capacidade funciona | Se o servidor oferecer informações de capacidade, a consulta mostrará capacidade usada e capacidade total. |

![Consulta de cota bem-sucedida](../../image/upload/webdav/查询额度成功.png)

## FAQ

### Por que arquivos WebDAV grandes criam um diretório de chunks?

Esse é o método de armazenamento atual para arquivos grandes.

Arquivos maiores que 64 MiB não são mesclados em um único arquivo remoto grande. Eles são armazenados como um diretório de chunks. O ImgBed registra o manifesto de chunks e retorna o conteúdo completo lendo os chunks em ordem.

### O que devo verificar primeiro se o upload de arquivo grande falhar?

Verifique primeiro Endpoint, username, password e storage directory. Depois confirme que o serviço WebDAV permite criação de diretório, gravação de arquivo e leitura de arquivo.

Se a consulta de capacidade falhar, mas o upload de arquivo pequeno funcionar, o servidor talvez simplesmente não ofereça suporte ou limite o relatório de capacidade. Isso não significa necessariamente que o upload esteja indisponível.

### Qual authentication mode devo usar?

Comece com `Basic`.

Se o servidor exigir explicitamente digest authentication, use `Digest`.

Se você não tiver certeza, use negociação automática.

## Lista de verificação rápida

```text
Prepare WebDAV endpoint, username, and password
-> Open Upload Settings
-> Add Channel
-> Select WebDAV
-> Enter Endpoint / username / password
-> Keep authentication mode as Basic by default
-> Keep storage directory as imgbed by default
-> Save
-> Query capacity
-> Upload a test file
```
