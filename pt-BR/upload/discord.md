# Adicionar um canal Discord

## O que você precisa antes de começar

| Requisito | Finalidade |
| --- | --- |
| Conta Discord | Usada para criar servidor, canal e aplicação de desenvolvedor. |
| Um servidor Discord | O bot precisa entrar em um servidor antes de acessar um canal. |
| Um canal de texto | Imagens e arquivos serão enviados para este canal. |
| Discord Developer Portal | Usado para criar uma aplicação, criar um bot e obter o `Bot Token`. |

## Onde adicionar

1. Abra Configurações do sistema.
2. Acesse Configurações de upload.
3. Clique em Adicionar canal no canto superior direito.
4. Selecione `Discord`.

## Referência de campos

| Campo | O que faz | Obrigatório |
| --- | --- | --- |
| Nome do canal | Um nome amigável para este canal, como "Discord Principal". | Obrigatório |
| Bot Token | O token do bot do Discord. | Obrigatório |
| Channel ID | O ID do canal de texto de destino. | Obrigatório |
| Proxy URL (opcional) | Use somente se o acesso à CDN do Discord estiver instável. Informe a URL completa, incluindo `https://`. | Opcional |

## Etapas de configuração

### 1. Crie um servidor Discord e um canal de texto

1. Abra o Discord.
2. Crie um novo servidor ou use um servidor existente que você possua.
3. Crie um canal de texto nesse servidor.

![Criar um servidor](../../image/upload/discord/创建服务器.png)

### 2. Crie um bot no Discord Developer Portal

1. Abra o Discord Developer Portal: `https://discord.com/developers/applications`
2. Clique em `New Application`.
3. Informe um nome de aplicação e crie-a.
4. Abra a página `Bot` na barra lateral esquerda.
5. Gere ou redefina o token na página `Bot`.
6. Salve o token.

Esse token é o `Bot Token` que você precisa informar no ImgBed.

![Ver o token do bot](../../image/upload/discord/查看机器人令牌.png)

### 3. Gere um link de convite OAuth2 e instale o bot

1. Abra a página `OAuth2` na barra lateral esquerda.
2. Em scopes, selecione `bot`.
3. Na área de permissões, habilite estas permissões:

| Permissão | Obrigatório |
| --- | --- |
| View Channels | Sim |
| Send Messages | Sim |
| Attach Files | Sim |
| Read Message History | Sim |

4. Na parte inferior da página, confirme que o tipo de integração é `Guild Install`.
5. Copie a URL gerada.
6. Abra essa URL no navegador.
7. Selecione o servidor de destino.
8. Conclua o fluxo de autorização.

![Selecionar permissões do bot no OAuth2](../../image/upload/discord/在oa2勾选机器人权限.png)

![Convidar o bot para o canal](../../image/upload/discord/邀请机器人到频道.png)

### 4. Habilite o Developer Mode e copie o Channel ID

1. Clique no ícone de engrenagem ao lado do seu avatar no canto inferior esquerdo do Discord.
2. Abra Advanced na barra lateral esquerda.
3. Habilite Developer Mode.
4. Volte ao canal de texto de destino.
5. Clique com o botão direito no nome do canal.
6. Clique em Copy Channel ID.

O número copiado é o `Channel ID` exigido pelo ImgBed.

![Habilitar o modo de desenvolvedor](../../image/upload/discord/开启开发者权限.png)

![Copiar o Channel ID](../../image/upload/discord/复制群频道id.png)

### 5. Preencha o canal Discord no ImgBed

Volte ao diálogo de configuração do canal e preencha os campos assim:

| Campo da UI | Valor |
| --- | --- |
| Nome do canal | Um nome de canal personalizado, por exemplo `DiscordPrimary`. |
| Bot Token | O token salvo na página `Bot` do Discord Developer Portal. |
| Channel ID | O channel ID que você copiou do Discord. |
| Proxy URL (opcional) | Somente se necessário, por exemplo `https://your-proxy.example.com`. |

Clique em Salvar quando terminar.

![Adicionar a configuração do canal Discord](../../image/upload/discord/添加dc新渠道配置.png)

## Como verificar

| Verificação | Como verificar |
| --- | --- |
| O cartão do canal aparece | Depois de salvar, a página Configurações de upload deve mostrar um cartão de canal Discord. |
| O canal pode ser habilitado | O switch Active deve permanecer ligado. |
| A configuração foi salva | A visualização de detalhes deve mostrar que Bot Token e Channel ID foram salvos. |
| O upload funciona | Envie uma imagem de teste e confirme que ela aparece no canal de texto Discord de destino. |

## Lista de verificação rápida

```text
Create a Discord server
-> Create a text channel
-> Create a bot in the Discord Developer Portal
-> Save the Bot Token from the Bot page
-> In OAuth2, select bot, View Channels, Send Messages, Attach Files, and Read Message History
-> Copy the generated URL and authorize the bot for the target server
-> Make sure the target text channel grants the same permissions
-> Enable Developer Mode
-> Right-click the target text channel and copy the Channel ID
-> Enter the Bot Token and Channel ID in ImgBed
-> Save and upload a test image
```

## Referências

1. Introdução ao Discord Developers: https://docs.discord.com/developers/quick-start/getting-started
2. Ajuda do Discord - onde encontro meu User/Server/Message ID: https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID
