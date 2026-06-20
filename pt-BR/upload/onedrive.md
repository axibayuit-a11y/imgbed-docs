# Adicionar canal OneDrive

O canal OneDrive usa o Microsoft OneDrive como destino de armazenamento.

## O que preparar

| Item | Uso |
| --- | --- |
| Conta Microsoft | Gerenciar OneDrive e registro do app |
| Domínio ImgBed | Configurar callback OAuth |
| App registration | Obter Client ID e Client Secret |
| Refresh Token | Manter acesso de longo prazo |

## Abrir Microsoft Entra ID

1. Abra `portal.azure.com`.
2. Pesquise `Microsoft Entra ID`.
3. Entre em `App registrations`.
4. Clique em `New registration`.

## Registrar aplicação

| Campo | Valor |
| --- | --- |
| Name | Por exemplo `imgbed-onedrive` |
| Supported account types | Conforme o tipo de OneDrive usado |
| Redirect URI type | `Web` |
| Redirect URI | `https://seu-dominio/api/oauth/onedrive/callback` |

Para OneDrive pessoal, escolha contas pessoais Microsoft. Para permitir contas pessoais e corporativas, escolha a opção compatível com ambos.

![Registro OneDrive](../../image/upload/onedrive/添加应用程序注册.png)

Depois do registro, copie `Application (client) ID`. Para conta corporativa, guarde também `Directory (tenant) ID`.

![Application ID e Tenant ID](../../image/upload/onedrive/应用程序ID和目录租户ID位.png)

## Criar Client Secret

1. Abra `Certificates & secrets`.
2. Clique em `New client secret`.
3. Defina nome e expiração.
4. Copie o `Value` imediatamente.

![Client Secret](../../image/upload/onedrive/保存客户端密码值.png)

Esse valor pode não aparecer de novo. Guarde ao criar.

## Permissões Microsoft Graph

Em `API permissions`, adicione delegated permissions do Microsoft Graph.

| Permissão | Uso |
| --- | --- |
| `Files.ReadWrite.All` | Enviar, criar pastas e excluir arquivos |
| `offline_access` | Obter Refresh Token |
| `User.Read` | Ler informações da conta e capacidade |

## Preencher no ImgBed

Em Configurações de upload, escolha `OneDrive`.

| Campo | Valor |
| --- | --- |
| Nome do canal | Por exemplo `OneDrive Main` |
| Client ID | `Application (client) ID` |
| Client Secret | Value do Client Secret |
| Tenant ID | Veja a tabela abaixo |
| Refresh Token | Deixe vazio no início |
| Diretório raiz | Opcional, normalmente `imgbed` |

![Configuração OneDrive](../../image/upload/onedrive/添加新渠道配置.png)

| Tipo de conta | Tenant ID |
| --- | --- |
| Conta pessoal | `consumers` |
| Pessoal + corporativa | `common` |
| Apenas organização atual | `Directory (tenant) ID` |

## Obter Refresh Token

1. No ImgBed, clique em `Obter Token`.
2. Entre com a conta Microsoft que será o destino.
3. Aceite as permissões.
4. Copie o `Refresh Token` da página de callback.
5. Volte ao ImgBed e cole no campo correspondente.

![Refresh Token](../../image/upload/onedrive/复制刷新令牌.png)

## Fluxo rápido

```text
Abrir portal.azure.com
-> Microsoft Entra ID
-> App registrations
-> New registration
-> Configurar callback Web
-> Copiar Application ID
-> Criar Client Secret
-> Adicionar permissões Microsoft Graph
-> Preencher Client ID / Secret / Tenant ID no ImgBed
-> Obter Token
-> Colar Refresh Token e salvar
```
