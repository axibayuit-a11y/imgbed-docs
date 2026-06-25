# Adicionar um canal OneDrive

## O que você precisa primeiro

| Requisito | Por que você precisa disso |
| --- | --- |
| Uma conta Microsoft | Usada para acessar páginas administrativas da Microsoft e autorizar OneDrive |
| Seu domínio ImgBed | Usado para a URL de callback OAuth |
| Um registro de app | Usado para gerar `Client ID` e `Client Secret` |
| Uma conta OneDrive | Usada como o local real de armazenamento dos arquivos |

## Etapas de configuração

### Etapa 1: Abra Microsoft Entra ID

1. Abra `portal.azure.com`.
2. Pesquise `Microsoft Entra ID` no topo.
3. Se a página de destino não aparecer no dropdown, escolha:

```text
Continue searching in Microsoft Entra ID
```

4. Abra `Microsoft Entra ID`.
5. Abra `App registrations`.
6. Clique em `New registration`.

### Etapa 2: Registre um app

Na página `New registration`, preencha:

| Campo | O que inserir |
| --- | --- |
| Name | Um nome reconhecível, como `imgbed-onedrive` |
| Supported account types | Escolha com base na tabela abaixo |
| Redirect URI type | `Web` |
| Redirect URI | `https://your-domain.com/api/oauth/onedrive/callback` |

Orientação de tipo de conta:

| Seu cenário | Supported Account Types |
| --- | --- |
| Somente OneDrive pessoal | Escolha a opção de conta Microsoft pessoal. |
| Contas pessoais e de trabalho/escola | Escolha a opção que oferece suporte a contas pessoais e organizacionais. |
| Somente OneDrive de empresa ou escola | Escolha a opção de conta organizacional. |

Clique em register depois de preencher o formulário.

![Criar app OneDrive](../../image/upload/onedrive/添加应用程序注册.png)

### Etapa 3: Copie informações do app

Depois que o app for criado, copie estes valores da página de visão geral:

| Campo da Microsoft | Campo do ImgBed |
| --- | --- |
| `Application (client) ID` | `Client ID` |
| `Directory (tenant) ID` | `Tenant ID` para contas organizacionais |

![Application e tenant IDs](../../image/upload/onedrive/应用程序ID和目录租户ID位.png)

### Etapa 4: Crie um Client Secret

1. Abra `Certificates & secrets`.
2. Clique em `New client secret`.
3. Informe qualquer descrição que preferir.
4. Escolha um período de expiração.
5. Copie o `Value` imediatamente depois que ele for criado.

![Salvar valor do client secret](../../image/upload/onedrive/保存客户端密码值.png)

### Etapa 5: Adicione permissões de API

1. Abra `API permissions`.
2. Clique em `Add a permission`.
3. Escolha `Microsoft Graph`.
4. Escolha `Delegated permissions`.
5. Adicione estas permissões:

| Permissão | Finalidade |
| --- | --- |
| `Files.ReadWrite.All` | Faz upload de arquivos, cria pastas e exclui arquivos |
| `offline_access` | Permite que o ImgBed obtenha um `Refresh Token` |
| `User.Read` | Lê informações da conta e de cota |

### Etapa 6: Preencha o canal OneDrive

Em Configurações de upload, escolha `OneDrive` e preencha:

| Campo do ImgBed | O que inserir |
| --- | --- |
| Nome do canal | Um nome reconhecível, como `Main OneDrive` |
| Client ID | O `Application (client) ID` da Microsoft |
| Client Secret | O `Client Secret Value` que você copiou |
| Tenant ID | Use a tabela abaixo |
| Refresh Token | Deixe em branco por enquanto |
| Root directory | Opcional. O padrão é `imgbed`. |
| Note | Opcional |

![Preencher configuração do canal OneDrive](../../image/upload/onedrive/添加新渠道配置.png)

Como preencher `Tenant ID`:

| Tipo de conta escolhido | `Tenant ID` do ImgBed |
| --- | --- |
| Contas pessoais | `consumers` |
| Contas pessoais + organizacionais | `common` |
| Somente organização atual | `Directory (tenant) ID` |

### Etapa 7: Obtenha o Refresh Token

1. No ImgBed, clique em `Get Token`.
2. Entre na conta Microsoft que deseja conectar.
3. Aprove a solicitação de autorização.
4. A página de callback mostrará um `Refresh Token`.
5. Copie-o.
6. Volte ao ImgBed e cole-o no campo `Refresh Token`.

![Copiar refresh token](../../image/upload/onedrive/复制刷新令牌.png)

### Etapa 8: Salve o canal

Depois de preencher todos os campos, salve o canal.

## Fluxo rápido

```text
Open portal.azure.com
-> Search for Microsoft Entra ID
-> Open App registrations
-> Register a new app
-> Fill Name / Supported account types / Web redirect URI
-> Register
-> Copy Application (client) ID
-> Check the callback URL in Authentication
-> Create a Client Secret in Certificates & secrets
-> Add permissions in API permissions
-> Fill Client ID / Client Secret / Tenant ID into ImgBed
-> Click Get Token
-> Copy the Refresh Token from the callback page
-> Paste it back into ImgBed and save
```

## Referências

1. Registro de app Microsoft Entra: https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-register-app
2. Fluxo authorization code da Microsoft identity platform: https://learn.microsoft.com/en-us/entra/identity-platform/v2-oauth2-auth-code-flow
3. Autenticação de usuário do Microsoft Graph: https://learn.microsoft.com/en-us/graph/auth-v2-user
