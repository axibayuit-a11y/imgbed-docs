# Etiquetagem automática

A etiquetagem automática é configurada em:

```text
System Settings -> Other Settings -> Auto Tagging
```

Ela gera tags de imagem automaticamente, úteis para busca, filtragem de imagens aleatórias, filtros da galeria pública e controle de acesso por classificação etária.

## O que a etiquetagem automática pode fazer

| Recurso | Descrição |
| --- | --- |
| Gerar tags de conteúdo | Adiciona tags para pessoas, cenas, objetos, estilo artístico e conteúdos visuais semelhantes. |
| Gerar tags de personagens | Útil para imagens de anime e ilustrações. |
| Adicionar tags de orientação | Adiciona `landscape`, `portrait` ou `square`. |
| Adicionar classificação da imagem | Salva resultados de classificação `G/S/Q/E` para conteúdo geral, sensível, questionável ou explícito. |
| Etiquetar automaticamente no upload | Imagens recém-enviadas entram automaticamente no fluxo de etiquetagem. |
| Etiquetagem em lote | Adiciona tags a imagens antigas em todas as pastas ou em pastas selecionadas. |

## O que preparar primeiro

Prepare pelo menos uma URL acessível de um Hugging Face Space.

A abordagem recomendada é duplicar o Space `wd-tagger` do SmilingWolf para a sua própria conta do Hugging Face:

```text
https://huggingface.co/spaces/SmilingWolf/wd-tagger
```

Você pode usar temporariamente o Space público, mas Spaces públicos são compartilhados por muitos usuários e podem ter fila, ficar lentos ou ficar indisponíveis. Um Space duplicado na sua própria conta é mais estável para etiquetagem automática de longo prazo.

## Duplicar o Space do SmilingWolf

1. Entre no Hugging Face.
2. Abra `https://huggingface.co/spaces/SmilingWolf/wd-tagger`.

![Space público do SmilingWolf](../../image/other/微笑狼的公开仓库.png)

3. Clique no menu de três pontos no canto superior direito.
4. Escolha `Duplicate this Space`.
5. Mantenha o nome padrão do Space ou escolha seu próprio nome, como `wd-tagger`.
6. Defina a visibilidade como `Public`. Spaces públicos são mais fáceis para o ImgBed chamar.
7. Mantenha o hardware gratuito padrão no início. Faça upgrade depois apenas se a fila ficar evidente.
8. Crie o Space e aguarde a conclusão da build.

Depois que a build terminar, abra a página do seu Space. A URL normalmente se parece com:

```text
https://huggingface.co/spaces/your-name/wd-tagger
```

Copie a URL do navegador e cole em `Space URLs` no ImgBed.

## Preencher várias Space URLs

Insira uma Space URL por linha.

Exemplos:

| Valor | Descrição |
| --- | --- |
| `https://huggingface.co/spaces/SmilingWolf/wd-tagger` | Space público do SmilingWolf. Bom para testes temporários. |
| `https://huggingface.co/spaces/lintonxue00/wd-tagger` | URL de uma página de Space copiada. |
| `https://huggingface.co/spaces/your-name/wd-tagger` | Página do seu próprio Space duplicado. |

Você pode inserir várias URLs. O ImgBed usa vários Spaces em conjunto, o que pode melhorar a velocidade.

Se um Space ficar temporariamente indisponível, os outros podem continuar processando.

## Configurações

| Opção | Recomendação |
| --- | --- |
| `Space URLs` | Insira as URLs dos Spaces que você preparou. Use pelo menos uma. |
| Pasta de destino | Deixe em branco para todas as pastas. Selecione uma pasta apenas quando quiser processar um diretório específico. |
| Modelo de reconhecimento | Mantenha `wd-swinv2-tagger-v3` por padrão. |
| Limiar de tags gerais | O padrão funciona para a maioria das imagens. Valores menores geram mais tags; valores maiores geram menos tags. |
| Limiar de tags de personagem | O padrão é conservador e ajuda a evitar tags de personagem incorretas. |
| Limiar automático `MCut` | Deixe desativado no início. Ative quando quiser que o modelo decida automaticamente a quantidade de tags. |
| Etiquetar automaticamente no upload | Ative se imagens recém-enviadas devem receber tags automaticamente. |
| Iniciar etiquetagem | Faz etiquetagem em lote manual de imagens antigas. |

## Valores iniciais recomendados

| Opção | Valor recomendado |
| --- | --- |
| Modelo de reconhecimento | `wd-swinv2-tagger-v3` |
| Limiar de tags gerais | `0.35` |
| Limiar de tags de personagem | `0.85` |
| `MCut` | Desativado no início |
| Etiquetar automaticamente no upload | Ative se necessário |

Se houver tags demais, aumente ligeiramente o limiar geral.

Se houver tags de menos, reduza ligeiramente o limiar geral.

## Etiquetagem em lote

1. Preencha `Space URLs`.
2. Selecione uma pasta de destino.
3. Clique para iniciar a etiquetagem.
4. Aguarde o progresso terminar.

Se a pasta de destino estiver vazia, o ImgBed processa todas as pastas.

A etiquetagem em lote é mais indicada para imagens antigas. Para imagens novas, ative a etiquetagem automática no upload para não precisar executá-la manualmente todas as vezes.

## Etiquetar automaticamente no upload

Depois que a etiquetagem automática no upload é ativada, as imagens recém-enviadas chamam automaticamente as `Space URLs` configuradas.

Isso é adequado para uso de longo prazo.

Se o seu Space estiver em fila, o upload em si ainda pode terminar primeiro, e a etiquetagem continuará depois.

## Quais imagens são processadas

A etiquetagem automática processa principalmente arquivos de imagem.

Imagens que já têm tags, orientação, classificação, largura e altura completas são ignoradas para evitar chamadas desnecessárias ao Space.

Quando possível, o ImgBed preenche apenas as informações ausentes. Por exemplo, se apenas a orientação estiver ausente, ele tenta adicionar a orientação sem chamar todo o fluxo de tags de conteúdo.

## FAQ

### Por que duplicar meu próprio Space?

Spaces públicos são compartilhados por muitos usuários. Seu próprio Space duplicado é usado principalmente pelo seu site ImgBed, então normalmente é mais rápido e confiável.

### O Space continua inicializando

Após a primeira criação, ou depois de um longo período ocioso, um Space pode precisar de tempo para iniciar.

Abra primeiro a página do seu Space. Depois que ele conseguir reconhecer uma imagem normalmente, volte ao ImgBed e inicie a etiquetagem.

### Como copiar a URL do Space?

Abra a página do seu Hugging Face Space e copie o endereço do navegador.

Exemplos:

```text
https://huggingface.co/spaces/lintonxue00/wd-tagger
https://huggingface.co/spaces/SmilingWolf/wd-tagger
```

### Posso adicionar vários Spaces?

Sim. Insira um Space URL por linha.

Vários Spaces processam imagens em conjunto e são úteis quando você tem muitas imagens.

### Por que as tags estão em inglês?

Os modelos do SmilingWolf geram tags em inglês. Isso é esperado.

As tags são usadas principalmente para busca, filtragem, Random Image API e filtros da galeria pública.

### Para que servem as tags de classificação?

Os resultados de classificação funcionam junto com o modo de acesso nas Configurações de Segurança.

Por exemplo, quando o acesso de visitantes é limitado por classificação etária, a navegação pública e os recursos de imagem aleatória filtram imagens de acordo com essas regras.

## Fluxo rápido

```text
Sign in to Hugging Face
-> Open SmilingWolf/wd-tagger
-> Duplicate this Space
-> Wait for the Space to build
-> Copy your Space URL
-> Fill Space URLs in ImgBed
-> Choose model and thresholds
-> Start tagging or enable auto-tag on upload
```
