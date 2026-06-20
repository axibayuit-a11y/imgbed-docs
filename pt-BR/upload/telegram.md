# Adicionar canal Telegram

Para usar Telegram como armazenamento, crie um bot e adicione esse bot ao canal onde os arquivos serão salvos.

## O que preparar

| Item | Uso |
| --- | --- |
| Conta Telegram | Criar bot e canal |
| `@BotFather` | Criar o bot |
| Canal Telegram | Destino dos arquivos |
| `@userinfobot` | Obter o Chat ID do canal |

## Criar bot

1. Pesquise `@BotFather` no Telegram.
2. Abra o chat e envie `/newbot`.
3. Informe nome exibido e username. O username normalmente precisa terminar em `bot`.
4. Copie o Token retornado pelo BotFather.

![Bot Token](../../image/upload/telegram/保存机器人令牌.png)

## Criar canal de armazenamento

Crie um novo canal no Telegram. Ele pode ser público ou privado.

![Criar canal](../../image/upload/telegram/新建频道.png)

## Adicionar o bot ao canal

Nas configurações do canal, adicione o bot como membro ou administrador.

![Adicionar bot ao canal](../../image/upload/telegram/邀请机器人进频道里.png)

Para uploads mais estáveis, é melhor dar permissões de administrador.

## Obter Chat ID

1. Pesquise `@userinfobot` no Telegram.
2. Clique em `Start`.
3. Escolha `Channel`.
4. Envie ao bot uma mensagem do canal alvo.
5. Copie o número exibido como `Id: -100...`.

![Obter Chat ID](../../image/upload/telegram/获取频道id.png)

## Preencher no ImgBed

Em Configurações de upload, escolha `Telegram`.

| Campo | Valor |
| --- | --- |
| Nome do canal | Por exemplo `Telegram Main` |
| Bot Token | Token do `@BotFather` |
| Session ID / Chat ID | ID do canal que começa com `-100` |
| Relay Proxy URL | Opcional, apenas se Telegram estiver instável |
| Observação | Opcional |

![Configuração Telegram](../../image/upload/telegram/编辑配置.png)

## Verificação

1. Salve o canal.
2. Envie uma imagem de teste.
3. Confira se ela aparece no canal do Telegram.
4. Abra o link do ImgBed.

## Fluxo rápido

```text
Criar bot com @BotFather
-> Copiar Bot Token
-> Criar canal Telegram
-> Adicionar bot ao canal e dar permissões
-> Obter Chat ID -100 com @userinfobot
-> Preencher Bot Token e Chat ID no ImgBed
-> Salvar e testar upload
```

## Referências

1. Telegram Bot: https://core.telegram.org/bots
2. Telegram Bot API: https://core.telegram.org/bots/api
