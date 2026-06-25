# Imagens aleatórias e galeria pública

Ambos os recursos são configurados em:

```text
System Settings -> Other Settings
```

## API de imagem aleatória

A API de imagem aleatória retorna um arquivo aleatório dos diretórios selecionados. Ela é útil para fundos de site, rotação de avatar ou chamadas de imagens aleatórias em páginas externas.

Depois de ativada, use:

```text
https://your-domain.com/random
```

## Configurações da API de imagem aleatória

| Opção | Finalidade |
| --- | --- |
| Ativar | Ativa ou desativa o endpoint `/random`. Quando desativado, o acesso é proibido. |
| Diretórios | Limita quais diretórios a API de imagem aleatória pode usar. Diretórios não incluídos aqui não podem ser usados pela API. |
| Demonstração de chamada | Gera links da API de imagem aleatória que você pode copiar diretamente. |

Você pode selecionar vários diretórios. Por exemplo, se apenas `/landscape/` e `/portrait/` forem permitidos, a API de imagem aleatória só poderá escolher arquivos desses diretórios e de seus subdiretórios.

## Parâmetros da API de imagem aleatória

| Parâmetro | Exemplo | Finalidade |
| --- | --- | --- |
| `dir` | `/landscape/` | Especifica o diretório aleatório. |
| `content` | `image` | Especifica o tipo de mídia. Use `image`, `video`, `audio` ou combinações separadas por vírgula. |
| `orientation` | `auto` | Filtra a orientação da imagem. Use `portrait`, `landscape` ou `auto`. |
| `type` | `url` | Formato de retorno. Vazio significa redirecionamento, `url` retorna URL em texto simples, `json` retorna JSON. |
| `origin` | `1` | Usado com `type=url` para retornar uma URL completa. |
| `age` | `all-ages,r12` | Filtra por classificação etária. |
| `tag` | `wallpaper,sky` | Retorna apenas arquivos que contêm essas tags. |
| `ex` | `private` | Exclui arquivos que contêm essas tags. |

## Formatos de retorno

Sem `type`, a API redireciona diretamente para a URL do arquivo aleatório.

Com `type=url`, ela retorna uma URL em texto.

Com `type=json`, ela retorna informações do arquivo, incluindo URL do arquivo, ID do arquivo, nome do arquivo, tipo do arquivo, tags, classificação e metadados relacionados.

## Regras de acesso

A API de imagem aleatória segue as regras de acesso público:

| Regra | Efeito |
| --- | --- |
| Restrição de diretório | Apenas arquivos em diretórios permitidos podem ser selecionados. |
| Lista de bloqueio | Arquivos na lista de bloqueio são excluídos do conjunto aleatório. |
| Modo de lista de permissões | Quando ativado, apenas arquivos permitidos para acesso público são retornados. |
| Classificação etária | Conteúdo R12, R16, R18 e semelhante é filtrado pelo modo de acesso atual. |

Se nenhum arquivo corresponder após a filtragem, a API não retorna resultado correspondente.

## Cache

A API de imagem aleatória armazena em cache os conjuntos de candidatos dos diretórios para melhorar a velocidade.

Depois que os arquivos mudam, o ImgBed atualiza a versão do cache do diretório, e as solicitações posteriores recriam o conjunto de candidatos. Diretórios vazios são armazenados em cache por pouco tempo para evitar consultas repetidas.

## Galeria pública

A galeria pública oferece uma página pública de navegação somente leitura para os diretórios que você permite que visitantes vejam.

Depois de ativada, os visitantes podem abrir:

```text
https://your-domain.com/browse/directory-name
```

## Configurações da galeria pública

| Opção | Finalidade |
| --- | --- |
| Ativar | Ativa ou desativa a galeria pública. Quando desativada, os visitantes não podem navegar por ela. |
| Modo de carregamento de imagem | Controla se as prévias usam imagens originais ou miniaturas. |
| Diretórios abertos | Define quais diretórios visitantes podem acessar. |

## Modo de carregamento de imagem

| Modo | Finalidade |
| --- | --- |
| Original | A página do visitante carrega os arquivos originais diretamente. |
| Miniatura | A página do visitante prefere miniaturas para carregar mais rápido. |

## Diretórios abertos

Diretórios abertos determinam o que os visitantes podem ver.

Por exemplo:

```text
/1/,/2/,/landscape/,/portrait/
```

Os visitantes podem então acessar:

```text
https://your-domain.com/browse/1
https://your-domain.com/browse/2
https://your-domain.com/browse/landscape
https://your-domain.com/browse/portrait
```

Subdiretórios também podem ser abertos, como `/2026/lucky/`. Os visitantes são bloqueados em diretórios que não estão abertos.

## Recursos da galeria pública

| Recurso | Descrição |
| --- | --- |
| Navegar por diretórios | Visualiza arquivos e subdiretórios em diretórios abertos. |
| Pesquisa | Pesquisa por nome do arquivo, ID do arquivo ou tags. |
| Filtro de tipo | Filtra imagens, vídeos, áudio ou outros arquivos. |
| Filtro de tags | Inclui ou exclui tags selecionadas. |
| Filtro de orientação | Filtra imagens em paisagem ou retrato. |
| Filtro de tempo | Filtra por intervalo de tempo de upload. |
| Filtro de extensão | Filtra por extensão de arquivo. |
| Copiar link | Copia links de acesso ao arquivo. |
| Prévia de mídia | Visualiza ou reproduz imagens, vídeos e áudio na página do visitante. |

## Regras de acesso da galeria pública

A galeria pública também segue as regras de acesso público:

| Regra | Efeito |
| --- | --- |
| Diretórios abertos | Apenas diretórios permitidos são exibidos. |
| Modo de acesso | O conteúdo é filtrado pelo modo de acesso de classificação etária atual. |
| Modo de lista de permissões | Quando ativado, apenas arquivos permitidos para acesso público são exibidos. |
| Lista de bloqueio | Arquivos na lista de bloqueio ficam ocultos. |
