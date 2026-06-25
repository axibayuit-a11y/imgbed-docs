# Backup redundante e alternância da origem de leitura

O backup redundante armazena uma cópia extra de um arquivo que já foi enviado.

Tanto o arquivo principal quanto o arquivo de backup podem ser usados como origens de leitura. Para visitantes, normalmente não há diferença. A única diferença é qual canal de armazenamento fornece o arquivo.

## O que o backup redundante pode fazer

| Recurso | Descrição |
| --- | --- |
| Armazenar uma cópia extra | Faz backup dos arquivos em outro canal de upload para reduzir o risco de falha de um único canal. |
| Alternar origem de leitura | Depois que o backup é concluído com sucesso, alterna a leitura de arquivos entre o canal principal e o canal de backup. |
| Backup de arquivo único | Faz backup de um arquivo pela página de detalhes do arquivo. |
| Backup em lote | Seleciona vários arquivos na página administrativa e faz backup deles juntos. |
| Backup redundante global | Faz backup de arquivos por pasta em Outras configurações. |

## Entrada do backup redundante

Abra:

```text
System Settings -> Other Settings -> Redundant Backup
```

![Backup redundante](../../image/other/冗余备份截图.png)

Esta entrada é mais adequada para adicionar backups a uma pasta ou a todos os arquivos em lote.

O canal de backup pode ser selecionado manualmente, ou você pode escolher alternância automática e deixar o ImgBed encontrar um canal de backup adequado.

## Backup pelos detalhes do arquivo

Abra a página de detalhes de um arquivo no painel administrativo e clique para fazer backup.

![Backup nos detalhes do arquivo](../../image/other/文件详情里文件备份.png)

Essa opção é mais adequada para fazer backup de um arquivo importante sob demanda.

Depois que o backup é concluído com sucesso, a página de detalhes do arquivo mostra as origens de leitura disponíveis.

## Backup em lote por seleção

No painel administrativo, selecione vários arquivos e execute o backup em lote.

![Backup em lote](../../image/other/批量备份截图.png)

Essa opção é mais adequada para processar um grupo de arquivos.

Backup por seleção, backup pelos detalhes do arquivo e backup redundante em Outras configurações usam o mesmo sistema de backup. Eles são apenas pontos de entrada diferentes.

## Alternar a origem de leitura após o backup

Depois que o backup é concluído, a página de detalhes do arquivo permite alternar a origem de leitura:

| Origem de leitura | Descrição |
| --- | --- |
| Canal principal | Lê pelo canal de upload original. |
| Canal de backup | Lê pelo canal de backup. |

![Alternar origem de leitura após backup](../../image/other/备份成功切换读取源.png)

Visitantes não precisam saber se o arquivo é servido pelo canal principal ou pelo canal de backup.

A origem de leitura que você escolher se torna a origem preferencial para acessos posteriores ao arquivo.

## Quando o backup é ignorado

Os casos a seguir são ignorados durante o backup. Eles não são erros.

| Caso | Por que é ignorado |
| --- | --- |
| Já tem backup | Um arquivo que já tem backup não recebe backup novamente. |
| Os canais principal e de backup são iguais | Um backup precisa ser armazenado em outro canal para ter sentido. |
| Nenhum canal de backup utilizável | Não há canal alternativo adequado disponível. |

Em resumo: backups precisam ir para outro canal, e arquivos que já têm backup não consomem espaço extra novamente.

## Canal principal e canal de backup

| Nome | Significado |
| --- | --- |
| Canal principal | O canal usado quando o arquivo foi enviado pela primeira vez. |
| Canal de backup | O canal que armazena a cópia redundante. |
| Origem de leitura principal | O arquivo é lido atualmente pelo canal principal. |
| Origem de leitura de backup | O arquivo é lido atualmente pelo canal de backup. |

As origens de leitura principal e de backup têm o mesmo comportamento para o usuário.

Desde que o arquivo de backup esteja disponível, imagens, vídeos e links de download continuam funcionando depois de alternar para a origem de leitura de backup.

## O que acontece quando um arquivo é excluído

Quando um arquivo é excluído, o ImgBed exclui tanto o arquivo principal quanto o arquivo de backup.
