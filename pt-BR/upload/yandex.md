# Adicionar canal Yandex

O canal Yandex usa o Yandex Disk como destino de armazenamento.

## O que preparar

| Item | Uso |
| --- | --- |
| Conta Yandex | Autorizar Yandex Disk |
| Yandex OAuth App | Obter Client ID e Client Secret |
| Domínio ImgBed | Configurar callback OAuth |
| Yandex Disk | Salvar arquivos |

## Criar Yandex OAuth App

Abra:

```text
https://oauth.yandex.com/client/new
```

Se pedir login, entre com a conta Yandex que será usada como armazenamento.

Crie um app e dê um nome reconhecível:

```text
imgbed-yandex
```

Em callback URL, informe:

```text
https://seu-dominio/api/oauth/yandex/callback
```

## Permissões

O ImgBed usa estas permissões de `Yandex.Disk REST API`:

| Permissão | Uso |
| --- | --- |
| `cloud_api:disk.app_folder` | Salvar arquivos na pasta do app |
| `cloud_api:disk.read` | Ler arquivos e links de download |
| `cloud_api:disk.write` | Enviar, criar pastas e excluir |
| `Access to information about Yandex.Disk` | Ler capacidade e uso |

Permissões de nome ou e-mail em `Yandex ID API` são opcionais. As funções principais dependem das permissões do Disk.

![Permissões Yandex Disk](../../image/upload/yandex/dataaccess配置软盘权限.png)

## Copiar Client ID e Secret

Depois de criar o app, copie:

| Campo Yandex | Campo ImgBed |
| --- | --- |
| `Client ID` | `Client ID` |
| `Client Secret` | `Client Secret` |

![Client ID e Secret](../../image/upload/yandex/记录客户端id和secret.png)

## Preencher no ImgBed

Em Configurações de upload, escolha `Yandex`.

| Campo | Valor |
| --- | --- |
| Nome do canal | Por exemplo `Yandex Main` |
| Client ID | Client ID do app |
| Client Secret | Client Secret do app |
| Refresh Token | Deixe vazio no início |
| Diretório raiz | Opcional, normalmente `imgbed` |

![Configuração Yandex](../../image/upload/yandex/编辑配置渠道.png)

## Obter Refresh Token

1. No ImgBed, clique em `Obter Token`.
2. Entre com a conta Yandex de destino.
3. Aceite as permissões.
4. Copie o `Refresh Token` exibido na página de callback.
5. Cole no ImgBed.

![Refresh Token](../../image/upload/yandex/授权后复制刷新令牌.png)

## Fluxo rápido

```text
Abrir Yandex OAuth Console
-> Criar App
-> Configurar https://seu-dominio/api/oauth/yandex/callback
-> Confirmar permissões Disk
-> Copiar Client ID / Client Secret
-> Preencher no ImgBed
-> Obter Token
-> Colar Refresh Token e salvar
```

## Referências

1. Registrar app Yandex: https://yandex.com/dev/id/doc/en/register-client
2. Código de autorização por URL: https://yandex.com/dev/id/doc/en/codes/code-url
3. API de token OAuth: https://yandex.com/dev/id/doc/en/tokens/token
