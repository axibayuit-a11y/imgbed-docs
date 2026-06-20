# Moderação de imagens e modo de acesso

Moderação de imagens e modo de acesso controlam quais arquivos visitantes podem ver, com base em regras públicas, listas e classificação etária.

Eles funcionam junto com galeria pública, API de imagem aleatória e acesso externo a arquivos.

## O que dá para fazer

| Recurso | Descrição |
| --- | --- |
| Moderação de imagens | Registrar informações de conteúdo ou classificação |
| Lista negra | Excluir arquivos que não devem ser públicos |
| Modo lista branca | Publicar apenas arquivos permitidos explicitamente |
| Controle por idade | Ajustar visibilidade de R12, R16, R18 e similares |
| Modo de acesso | Alterar globalmente o que visitantes podem ver |

## Modo de acesso

O modo de acesso limita o que páginas públicas e API aleatória podem retornar.

Se você quer um site adequado para todo público, configure para retornar apenas arquivos gerais. Para uso interno ou acesso restrito, ajuste regras mais flexíveis conforme a necessidade.

## Arquivo restrito

Quando um arquivo é restrito, o visitante vê um aviso em vez do conteúdo original.

![Arquivo restrito](../../image/Safety/文件受限图.png)

## Formas de operação

| Abordagem | Quando usar |
| --- | --- |
| Lista negra | Publicar por padrão e excluir arquivos problemáticos |
| Lista branca | Publicar apenas o que foi revisado e permitido |
| Classificação por idade | Alterar visibilidade conforme o nível do conteúdo |

Para sites públicos, lista branca ou classificação por idade ajudam a evitar publicação indevida.

## O que conferir

1. Veja se o arquivo aparece na galeria pública.
2. Confira se a API aleatória não retorna arquivos restritos.
3. Após mudar listas, considere cache ou resultados já gerados.
4. Se usar classificação automática, revise manualmente arquivos sensíveis porque modelos podem errar.
