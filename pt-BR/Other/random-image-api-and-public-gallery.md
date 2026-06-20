# API de imagem aleatória e galeria pública

As duas funções são configuradas em:

```text
Configurações do sistema -> Outras configurações
```

## API de imagem aleatória

A API de imagem aleatória escolhe um arquivo aleatoriamente a partir dos diretórios definidos. Ela serve para fundos de site, rotação de avatar ou chamadas externas de imagens aleatórias.

Depois de ativada, use:

```text
https://seu-dominio/random
```

## Configurações da API

| Opção | Descrição |
| --- | --- |
| Habilitar | Liga ou desliga `/random`; desligada, a rota nega acesso |
| Diretórios | Limita de quais diretórios os arquivos podem ser escolhidos |
| Exemplo de chamada | Gera um link de API pronto para copiar |

Você pode escolher vários diretórios. Se permitir apenas `/landscape/` e `/portrait/`, a API só escolherá arquivos nesses diretórios ou subdiretórios.

## Parâmetros principais

| Parâmetro | Exemplo | Descrição |
| --- | --- | --- |
| `dir` | `/landscape/` | Diretório alvo |
| `content` | `image` | Tipo de mídia: `image`, `video`, `audio` ou combinação por vírgula |
| `orientation` | `auto` | `portrait`, `landscape` ou `auto` |
| `type` | `url` | Vazio redireciona; `url` retorna texto; `json` retorna JSON |
| `origin` | `1` | Com `type=url`, retorna link completo |
| `age` | `all-ages,r12` | Filtra por classificação etária |
| `tag` | `wallpaper,sky` | Apenas arquivos com essas tags |
| `ex` | `private` | Exclui arquivos com essas tags |

## Formatos de resposta

Sem `type`, a API redireciona diretamente para o arquivo aleatório.

`type=url` retorna um link em texto puro.

`type=json` retorna informações do arquivo: link, ID, nome, tipo, tags, classificação e outros dados.

## Restrições de acesso

A API respeita as regras públicas definidas no painel.

| Regra | Efeito |
| --- | --- |
| Limite de diretórios | Escolhe apenas arquivos em diretórios permitidos |
| Lista negra | Arquivos bloqueados ficam fora do conjunto aleatório |
| Modo lista branca | Retorna apenas arquivos permitidos explicitamente |
| Classificação etária | Filtra R12, R16, R18 conforme o modo de acesso |

Se nenhum arquivo atender aos filtros, a API informa que não há resultado.

## Galeria pública

A galeria pública oferece uma página somente leitura para visitantes navegarem pelos diretórios que você permite publicar.

```text
https://seu-dominio/browse/nome-do-diretorio
```

## Configurações da galeria

| Opção | Descrição |
| --- | --- |
| Habilitar | Liga ou desliga a galeria pública |
| Modo de carregamento | Decide se usa arquivo original ou miniatura |
| Diretórios públicos | Define quais diretórios visitantes podem abrir |

Exemplo:

```text
/1/,/2/,/landscape/,/portrait/
```

Com essa configuração, visitantes podem acessar:

```text
https://seu-dominio/browse/1
https://seu-dominio/browse/2
https://seu-dominio/browse/landscape
https://seu-dominio/browse/portrait
```

Diretórios não publicados serão recusados.

## Recursos da galeria

| Recurso | Descrição |
| --- | --- |
| Navegar por diretórios | Ver arquivos e subdiretórios publicados |
| Buscar | Buscar por nome, ID do arquivo ou tag |
| Filtrar por tipo | Imagem, vídeo, áudio ou outros arquivos |
| Filtrar por tag | Incluir ou excluir tags |
| Filtrar por orientação | Horizontal, vertical e outros critérios |
| Copiar link | Copiar o link público do arquivo |
| Pré-visualizar mídia | Ver imagens, vídeos e áudio na página |
