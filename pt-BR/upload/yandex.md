# Adicionar um canal Yandex

## O que você precisa primeiro

| Requisito | Por que você precisa disso |
| --- | --- |
| Uma conta Yandex | Usada para entrar e autorizar Yandex Disk |
| Um app OAuth Yandex | Usado para gerar `Client ID` e `Client Secret` |
| Seu domínio ImgBed | Usado para o URI de redirecionamento OAuth |
| Armazenamento Yandex Disk disponível | Usado como o local real de armazenamento dos arquivos |

## Etapas de configuração

### Etapa 1: Crie um app OAuth Yandex

1. Abra a página de criação de app OAuth Yandex:

```text
https://oauth.yandex.com/client/new
```

2. Se você for redirecionado para entrar, entre primeiro com sua conta Yandex.
3. Crie um novo app.
4. Dê ao app um nome reconhecível, como `imgbed-yandex`.
5. Encontre as configurações de callback ou redirect URL.
6. Informe:

```text
https://your-domain.com/api/oauth/yandex/callback
```

### Etapa 2: Confirme as permissões

Para a integração Yandex atual do ImgBed, mantenha estas quatro permissões em `Yandex.Disk REST API`:

| Permissão | Finalidade |
| --- | --- |
| `cloud_api:disk.app_folder` | Permite que o ImgBed armazene arquivos na pasta do app |
| `cloud_api:disk.read` | Lê arquivos e links de download |
| `cloud_api:disk.write` | Faz upload de arquivos, cria pastas e exclui arquivos |
| `Access to information about Yandex.Disk` | Lê cota do disco e espaço usado |

Se você também vir estas permissões em `Yandex ID API`, elas são opcionais:

| Texto da permissão | Recomendação |
| --- | --- |
| `Access to username, first name and surname, gender` | Opcional |
| `Access to email address` | Opcional |

Os recursos principais de upload, download, exclusão e cota dependem principalmente das quatro permissões `Yandex.Disk REST API` acima.

![Configurar permissões do Yandex Disk](../../image/upload/yandex/dataaccess配置软盘权限.png)

### Etapa 3: Copie as credenciais do app

Depois que o app for criado, copie:

| Campo do Yandex | Campo do ImgBed |
| --- | --- |
| `Client ID` | `Client ID` |
| `Client Secret` | `Client Secret` |

![Registrar Client ID e Secret](../../image/upload/yandex/记录客户端id和secret.png)

### Etapa 4: Preencha o canal Yandex

Em Configurações de upload, escolha `Yandex` e preencha:

| Campo do ImgBed | O que inserir |
| --- | --- |
| Nome do canal | Um nome reconhecível, como `Main Yandex` |
| Client ID | O `Client ID` do app Yandex |
| Client Secret | O `Client Secret` do app Yandex |
| Refresh Token | Deixe em branco por enquanto |
| Root directory | Opcional. O padrão é `imgbed`. |

![Editar configuração do canal](../../image/upload/yandex/编辑配置渠道.png)

### Etapa 5: Obtenha o Refresh Token

1. No ImgBed, clique em `Get Token`.
2. Entre na conta Yandex que deseja conectar.
3. Aprove a solicitação de autorização.
4. A página de callback mostrará um `Refresh Token`.
5. Copie-o.
6. Volte ao ImgBed e cole-o no campo `Refresh Token`.

![Copiar refresh token após autorização](../../image/upload/yandex/授权后复制刷新令牌.png)

### Etapa 6: Salve o canal

Depois de preencher todos os campos, salve o canal.

## Fluxo rápido

```text
Open Yandex OAuth Console
-> Create an app
-> Add https://your-domain.com/api/oauth/yandex/callback
-> Confirm Yandex Disk permissions
-> Copy Client ID and Client Secret
-> Fill Client ID / Client Secret into ImgBed
-> Click Get Token
-> Copy the Refresh Token from the callback page
-> Paste it back into ImgBed and save
```

## Referências

1. Registrar um app Yandex: https://yandex.com/dev/id/doc/en/register-client
2. Obter um authorization code por URL: https://yandex.com/dev/id/doc/en/codes/code-url
3. Endpoint de token OAuth Yandex: https://yandex.com/dev/id/doc/en/tokens/token
