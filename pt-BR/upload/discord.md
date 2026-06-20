# Adicionar canal Discord

O canal Discord usa um canal de servidor Discord como destino de arquivos.

## O que preparar

| Item | Uso |
| --- | --- |
| Conta Discord | Gerenciar servidor e bot |
| Servidor Discord | Local do canal de armazenamento |
| Bot do Discord | Enviar arquivos ao canal |
| Bot Token | Permitir que o ImgBed use o bot |
| Channel ID | Identificar o canal de destino |

## Criar servidor

Você pode usar um servidor existente, mas para armazenamento é melhor criar um dedicado.

![Criar servidor](../../image/upload/discord/创建服务器.png)

## Ativar modo desenvolvedor

Para copiar o Channel ID, ative o modo desenvolvedor no Discord.

![Modo desenvolvedor](../../image/upload/discord/开启开发者权限.png)

Clique com o botão direito no canal de destino e copie o ID.

![Copiar Channel ID](../../image/upload/discord/复制群频道id.png)

## Criar bot e obter Token

No Discord Developer Portal, crie uma aplicação e adicione um bot. Copie o Bot Token e guarde com cuidado.

![Bot Token](../../image/upload/discord/查看机器人令牌.png)

## Convidar o bot para o servidor

Em OAuth2, selecione permissões de bot e use a URL gerada para convidá-lo.

![Permissões do bot](../../image/upload/discord/在oa2勾选机器人权限.png)

![Convidar bot](../../image/upload/discord/邀请机器人到频道.png)

O bot precisa de permissão para enviar mensagens e anexar arquivos no canal.

## Preencher no ImgBed

Em Configurações de upload, escolha `Discord`.

| Campo | Valor |
| --- | --- |
| Nome do canal | Por exemplo `Discord Storage` |
| Bot Token | Token do Developer Portal |
| Channel ID | ID do canal de destino |
| Observação | Opcional |

![Configuração Discord](../../image/upload/discord/添加dc新渠道配置.png)

## Verificação

1. Salve o canal.
2. Envie uma imagem de teste.
3. Confira se ela aparece no canal do Discord.
4. Abra o link retornado pelo ImgBed.

Se falhar, confira Bot Token, Channel ID, permissões do bot e se ele está no servidor.
