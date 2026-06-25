# Adicionar um canal Telegram

## O que você precisa antes de começar

| Requisito | Finalidade |
| --- | --- |
| Conta Telegram | Usada para criar o bot e o canal de armazenamento. |
| `@BotFather` | Usado para criar um bot do Telegram. |
| Um canal Telegram | O destino final de armazenamento dos arquivos. |
| `@userinfobot` | Usado para consultar o `Chat ID` do canal. |

## Onde adicionar

1. Abra Configurações do sistema.
2. Acesse Configurações de upload.
3. Clique em Adicionar canal no canto superior direito.
4. Selecione `Telegram`.

## Referência de campos

| Campo | O que faz | Obrigatório |
| --- | --- | --- |
| Nome do canal | Um nome amigável para este canal, como "Telegram Principal". | Obrigatório |
| Active | Habilita ou desabilita este canal. | Recomendado |
| Bot Token | O token do seu bot do Telegram. | Obrigatório |
| Session ID (Chat ID) | O ID do canal Telegram. | Obrigatório |
| Relay Proxy URL (opcional) | Use somente se o acesso ao Telegram estiver instável. Informe a URL completa do proxy, incluindo `https://`. | Opcional |
| Remark | Notas para manutenção futura. | Opcional |

## Etapas de configuração

### 1. Crie um bot do Telegram

1. Abra o Telegram e pesquise `@BotFather`.
2. Abra a conversa e clique em `Start`.
3. Envie `/newbot`.
4. Siga as instruções para informar um nome de exibição para o bot.
5. Siga as instruções para informar um username para o bot. Normalmente, o username precisa terminar com `bot`.
6. Depois que o bot for criado, `@BotFather` retornará um bot token.

Esse token é o `Bot Token` que você precisa informar no ImgBed.

![Salvar o token do bot](../../image/upload/telegram/保存机器人令牌.png)

### 2. Crie um canal

1. No Telegram, clique em New Channel.
2. Informe um nome de canal.
3. Conclua a criação do canal.

Canais públicos e privados podem ser usados.

![Criar um canal](../../image/upload/telegram/新建频道.png)

### 3. Adicione o bot ao canal

1. Abra o canal que você acabou de criar.
2. Abra as configurações do canal.
3. Adicione um membro ou administrador.
4. Pesquise o username do bot que você criou.
5. Adicione o bot ao canal.

Para uploads mais confiáveis, conceda permissões de administrador ao bot.

![Convidar o bot para o canal](../../image/upload/telegram/邀请机器人进频道里.png)

### 4. Obtenha o Channel ID com User Info - Get ID - IDbot

1. Pesquise `@userinfobot` no Telegram. O nome de exibição geralmente é `User Info - Get ID - IDbot`.
2. Abra a conversa e clique em `Start`.
3. Escolha `Channel` nas opções fornecidas pelo bot.
4. No seletor de mensagens, escolha o canal de destino e envie-o para `@userinfobot`.
5. Quando `@userinfobot` retornar o resultado, copie o número exibido como `Id: -100...`.

O número que começa com `-100` é o `Session ID (Chat ID)` exigido pelo ImgBed.

![Obter o Channel ID](../../image/upload/telegram/获取频道id.png)

### 5. Preencha o canal Telegram no ImgBed

Volte ao diálogo de configuração do canal e preencha os campos assim:

| Campo da UI | Valor |
| --- | --- |
| Channel Identifier | Um nome de canal personalizado, por exemplo `TelegramPrimary`. |
| Active | Recomendado. |
| Bot Token | O bot token de `@BotFather`. |
| Session ID (Chat ID) | O número `-100...` retornado por `@userinfobot`. |
| Relay Proxy URL (opcional) | Somente se necessário, por exemplo `https://your-tg-proxy.example.com`. |
| Remark | Notas opcionais. |

Clique em Salvar quando terminar.

![Editar a configuração](../../image/upload/telegram/编辑配置.png)

## Como verificar

| Verificação | Como verificar |
| --- | --- |
| O cartão do canal aparece | Depois de salvar, a página Configurações de upload deve mostrar um cartão de canal Telegram. |
| O canal pode ser habilitado | O switch Active deve permanecer ligado. |
| A configuração foi salva | A visualização de detalhes deve mostrar que Bot Token e Chat ID foram salvos. |
| O upload funciona | Envie uma imagem de teste e confirme que ela aparece no canal Telegram de destino. |

## Lista de verificação rápida

```text
Create a bot with @BotFather
-> Save the Bot Token
-> Create a Telegram channel
-> Add the bot to the channel and grant administrator permissions
-> Search for @userinfobot and choose Channel
-> Forward any message from the channel to @userinfobot
-> Copy the returned Id: -100...
-> Enter the Bot Token and Chat ID in ImgBed
-> Save and upload a test image
```

## Referências

1. Bots do Telegram: https://core.telegram.org/bots
2. Telegram Bot API: https://core.telegram.org/bots/api
