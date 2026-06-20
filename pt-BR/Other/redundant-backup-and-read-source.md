# Backup redundante e troca da origem de leitura

O backup redundante salva uma cópia extra de arquivos que já foram enviados.

Para visitantes, o arquivo principal e a cópia parecem iguais. A diferença está no canal de armazenamento usado para ler o arquivo.

## O que dá para fazer

| Recurso | Descrição |
| --- | --- |
| Salvar uma cópia extra | Copia o arquivo para outro canal e reduz dependência de um único armazenamento |
| Trocar origem de leitura | Alterna entre canal principal e canal de backup |
| Backup de arquivo único | Cria cópia a partir dos detalhes de um arquivo |
| Backup em lote | Seleciona vários arquivos no painel e copia de uma vez |
| Backup global | Completa backups por pasta em Outras configurações |

## Onde configurar

```text
Configurações do sistema -> Outras configurações -> Backup redundante
```

![Backup redundante](../../image/other/冗余备份截图.png)

Aqui você pode completar backups para uma pasta específica ou para todos os arquivos. O canal de backup pode ser escolhido manualmente ou ficar em modo automático para o ImgBed selecionar um canal adequado.

## Backup pelo detalhe do arquivo

No painel, abra os detalhes de um arquivo e use a ação de backup.

![Backup no detalhe](../../image/other/文件详情里文件备份.png)

Esse acesso é útil para proteger arquivos importantes de forma pontual. Após um backup bem-sucedido, os detalhes mostram as origens de leitura disponíveis.

## Backup por seleção

No painel, selecione vários arquivos e execute o backup em lote.

![Backup em lote](../../image/other/批量备份截图.png)

Backup pelo detalhe, backup por seleção e backup redundante em Outras configurações usam a mesma lógica; muda apenas o ponto de entrada.

## Trocar origem de leitura

| Origem | Descrição |
| --- | --- |
| Canal principal | Lê a partir do canal usado no upload original |
| Canal de backup | Lê a partir do canal onde a cópia foi salva |

![Troca de origem](../../image/other/备份成功切换读取源.png)

Após a troca, imagens, vídeos e links de download continuam funcionando normalmente usando a origem escolhida.

## Casos ignorados

| Caso | Motivo |
| --- | --- |
| Já tem backup | Evita duplicar espaço sem necessidade |
| Canal principal igual ao canal de backup | Copiar para o mesmo canal não traz redundância |
| Sem canal disponível | Não foi encontrado outro canal adequado |

## Ao excluir arquivos

Ao excluir um arquivo, o ImgBed remove tanto o arquivo principal quanto a cópia de backup.
