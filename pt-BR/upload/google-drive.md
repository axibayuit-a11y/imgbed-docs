# Adicionar um canal Google Drive

## O que você precisa primeiro

Antes de começar, prepare estes itens:

| Requisito | Por que você precisa disso |
| --- | --- |
| Uma conta Google | Usada para acessar Google Cloud e autorizar Google Drive |
| Um projeto Google Cloud | Usado para habilitar a Drive API e criar credenciais OAuth |
| Um cliente OAuth 2.0 | Usado pelo ImgBed para obter `Client ID`, `Client Secret` e `Refresh Token` |
| Seu domínio ImgBed | Usado para o URI de redirecionamento OAuth. Ele deve corresponder ao domínio que você realmente usa. |

## Etapas de configuração

### Etapa 1: Habilite a Google Drive API

1. Abra o Google Cloud Console.
2. Crie um novo projeto ou selecione um existente.
3. Acesse `APIs & Services`.
4. Clique em `Enable APIs and Services`.
5. Pesquise `Google Drive API`.
6. Abra-a e clique em habilitar.

### Etapa 2: Configure a tela de consentimento OAuth

1. No Google Cloud, abra `Google Auth Platform`.
2. Preencha as informações básicas de `Branding`, como nome do app, e-mail de suporte e e-mail de contato do desenvolvedor.
3. Abra `Audience`.
4. Para a maioria das implantações pessoais self-hosted, escolha `External`.
5. Se escolher `External`, adicione a conta Google que deseja autorizar em `Test users`.
6. Abra `Data Access`.
7. Adicione as permissões necessárias do Google Drive.

### Etapa 3: Crie um cliente OAuth 2.0

1. Em `Google Auth Platform`, abra `Clients`.
2. Crie um novo cliente.
3. Defina o tipo de aplicativo como `Web application`.
4. Dê ao cliente um nome que você reconheça.
5. Em authorized JavaScript origins, informe a URL do seu ImgBed, por exemplo:

```text
https://img.example.com
```

6. Em authorized redirect URIs, informe:

```text
https://img.example.com/api/oauth/google/callback
```

![Criar cliente OAuth](../../image/upload/google-drive/oa客户端id创建.png)

![Informar domínio e URL de callback](../../image/upload/google-drive/填写oa客户端url信息.png)

Depois que o cliente for criado, copie estes valores:

| Valor gerado | Campo do ImgBed |
| --- | --- |
| Client ID | `Client ID` |
| Client Secret | `Client Secret` |

## Etapa 4: Preencha o canal Google Drive

Em Configurações de upload, escolha `Google Drive` e preencha:

| Campo do ImgBed | O que inserir |
| --- | --- |
| Nome do canal | Um nome que você reconheça, como `Main Google Drive` |
| Client ID | O Client ID do Google Cloud |
| Client Secret | O Client Secret do Google Cloud |
| Refresh Token | Deixe em branco por enquanto. Obtenha-o na próxima etapa. |
| Root directory | Opcional. O padrão é `imgbed`. |

![Preencher dados do cliente no ImgBed](../../image/upload/google-drive/粘贴回添加新渠道配置.png)

## Etapa 5: Obtenha o Refresh Token

1. Clique em `Get Token`.
2. Escolha a conta Google que deseja conectar.
3. Conclua as solicitações de autorização.
4. A página de callback mostrará um `Refresh Token`.
5. Copie-o.
6. Volte ao ImgBed e cole-o no campo `Refresh Token`.

![Copiar Refresh Token após a autorização](../../image/upload/google-drive/授权完复制token.png)

Se você trocar de conta Google depois, alterar o cliente OAuth ou a autorização antiga expirar, não precisa excluir o canal. Abra a página de edição e clique em `Reauthorize`.

## Etapa 6: Salve o canal

Depois de preencher todos os campos, salve o canal.

## Fluxo rápido

```text
Open Google Cloud
-> Create or select a project
-> Enable Google Drive API
-> Configure Google Auth Platform
-> If Audience is External, add your Google account to Test users
-> Create a Web application OAuth client
-> Use https://your-domain.com/api/oauth/google/callback as the redirect URI
-> Fill Client ID and Client Secret into ImgBed
-> Click Get Token
-> Sign in with Google and authorize
-> Copy the Refresh Token from the callback page
-> Paste it back into ImgBed and save
-> Upload a test image
```

## Referências

1. Aplicações de servidor web do Google OAuth: https://developers.google.com/identity/protocols/oauth2/web-server
2. Configuração de consentimento OAuth do Google Workspace: https://developers.google.com/workspace/guides/configure-oauth-consent
3. Escopos de autenticação da Google Drive API: https://developers.google.com/workspace/drive/api/guides/api-specific-auth
