# Adicionar um canal Dropbox

## O que você precisa primeiro

| Requisito | Por que você precisa disso |
| --- | --- |
| Uma conta Dropbox | Usada para entrar e autorizar o app |
| Um app Dropbox | Usado para gerar `App Key` e `App Secret` |
| Seu domínio ImgBed | Usado para o URI de redirecionamento OAuth |
| Armazenamento Dropbox disponível | Usado como o local real de armazenamento dos arquivos |

## Etapas de configuração

### Etapa 1: Crie um app Dropbox

1. Abra o Dropbox App Console:

```text
https://www.dropbox.com/developers/apps
```

2. Crie um novo app.
3. Para o tipo de acesso, escolha:

```text
App folder
```

4. Dê ao app um nome que você reconheça, como `imgbed-app`.
5. Abra a página de detalhes do app depois que ele for criado.

Tipo de acesso recomendado:

| Tipo de acesso | Recomendação |
| --- | --- |
| `App folder` | Recomendado. Ele corresponde à forma como o ImgBed armazena arquivos. |
| `Full Dropbox` | Não recomendado. O ImgBed não precisa de acesso total à conta. |

![Criar app Dropbox](../../image/upload/dropbox/开发者创建应用.png)

### Etapa 2: Adicione o Redirect URI

Na página de detalhes do app Dropbox, encontre as configurações de OAuth ou Redirect URI e adicione:

```text
https://your-domain.com/api/oauth/dropbox/callback
```

Se você usar o painel de administração por mais de um domínio, adicione cada URL de callback correspondente.

![Configurar Redirect URI](../../image/upload/dropbox/配置回调地址.png)

### Etapa 3: Configure as permissões do app

Abra a aba `Permissions` e habilite pelo menos estes scopes:

| Scope | Obrigatório | Finalidade |
| --- | --- | --- |
| `account_info.read` | Obrigatório | Lê informações da conta e de cota |
| `files.metadata.read` | Obrigatório | Lê metadados de arquivos e pastas para verificações de path |
| `files.metadata.write` | Obrigatório | Cria pastas e grava metadados |
| `files.content.write` | Obrigatório | Faz upload de arquivos. Sem esse scope, ocorre `required scope 'files.content.write'`. |
| `files.content.read` | Recomendado | Permite download, preview e links temporários de arquivos |

Depois de selecionar os scopes, clique em `Submit` na parte inferior da página.

![Adicionar permissões](../../image/upload/dropbox/添加对应的权限.png)

Importante:

| Situação | O que fazer |
| --- | --- |
| Você alterou scopes | Execute novamente o fluxo de autorização do token e obtenha um novo `Refresh Token`. |
| Você não reautorizou | O token antigo não receberá as novas permissões, então uploads ainda podem falhar. |

### Etapa 4: Copie as credenciais do app

Salve estes dois valores da página do app Dropbox:

| Campo do Dropbox | Campo do ImgBed |
| --- | --- |
| `App key` | `App Key` |
| `App secret` | `App Secret` |

### Etapa 5: Preencha o canal Dropbox

Em Configurações de upload, escolha `Dropbox` e preencha:

| Campo do ImgBed | O que inserir |
| --- | --- |
| Nome do canal | Um nome que você reconheça, como `Main Dropbox` |
| App Key | O `App key` do Dropbox |
| App Secret | O `App secret` do Dropbox |
| Refresh Token | Deixe em branco por enquanto |
| Root directory | Opcional. O padrão é `imgbed`. |
| Note | Opcional |

![Obter token](../../image/upload/dropbox/获取令牌.png)

### Etapa 6: Obtenha o Refresh Token

1. No ImgBed, clique em `Get Token`.
2. Entre na conta Dropbox que você quer conectar.
3. Aprove a solicitação de autorização.
4. A página de callback mostrará um `Refresh Token`.
5. Copie-o.
6. Volte ao ImgBed e cole-o no campo `Refresh Token`.

![Copiar token](../../image/upload/dropbox/复制令牌.png)

## Como verificar

| Verificação | Resultado esperado |
| --- | --- |
| Cartão do canal | O canal Dropbox aparece depois de salvar. |
| Switch do canal | O canal pode ser habilitado. |
| Token salvo | A página de detalhes mostra que o `Refresh Token` foi salvo. |
| Teste de upload | Uma imagem de teste aparece na pasta do app Dropbox. |

Se limites de cota estiverem habilitados, clique na consulta de cota. Depois de uma consulta bem-sucedida, o cartão do canal mostra espaço usado, espaço total e horário da última atualização.

![Consulta de cota bem-sucedida](../../image/upload/dropbox/查询额度成功.png)

## Solução de problemas

| Problema | Correção |
| --- | --- |
| O ImgBed informa que a configuração está incompleta | Verifique se `App Key`, `App Secret` e `Refresh Token` estão todos preenchidos. |
| A autorização funciona, mas nenhum `Refresh Token` aparece | Clique em `Get Token` novamente e confirme que o fluxo de autorização offline está sendo usado. |
| Upload falha com `required scope 'files.content.write'` | Habilite `files.content.write`, clique em `Submit` e obtenha um novo `Refresh Token`. |
| Callback falha | Confirme se o redirect URI é `https://your-domain.com/api/oauth/dropbox/callback`. |
| Arquivos não são encontrados | Confirme se o app Dropbox foi criado no modo `App folder`. |

## Fluxo rápido

```text
Open Dropbox App Console
-> Create an app
-> Choose App folder access
-> Add https://your-domain.com/api/oauth/dropbox/callback
-> Enable account_info.read / files.metadata.read / files.metadata.write / files.content.write
-> Optionally enable files.content.read
-> Click Submit
-> Copy App Key and App Secret
-> Fill them into ImgBed
-> Click Get Token
-> Copy the Refresh Token from the callback page
-> Paste it back into ImgBed and save
```

## Referências

1. Dropbox App Console: https://www.dropbox.com/developers/apps
2. Guia OAuth do Dropbox: https://developers.dropbox.com/oauth-guide
3. Guia de desenvolvedor do Dropbox: https://www.dropbox.com/developers/reference/developer-guide
