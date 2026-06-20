# Etiquetagem automática

A etiquetagem automática é configurada em:

```text
Configurações do sistema -> Outras configurações -> Etiquetagem automática
```

Ela gera tags para imagens e facilita busca, filtros da API aleatória, galeria pública e controle de acesso por classificação etária.

## O que ela faz

| Recurso | Descrição |
| --- | --- |
| Tags de conteúdo | Adiciona tags de pessoas, cenas, objetos, estilo visual e outros elementos |
| Tags de personagem | Útil para imagens de anime e ilustrações |
| Tags de orientação | Adiciona `landscape`, `portrait` ou `square` |
| Classificação da imagem | Salva resultados `G/S/Q/E` |
| Etiquetar ao enviar | Processa automaticamente imagens novas |
| Etiquetagem em lote | Adiciona tags a imagens antigas em uma ou várias pastas |

## O que preparar

Você precisa de pelo menos uma URL acessível de Hugging Face Space.

O recomendado é duplicar o Space `wd-tagger` do SmilingWolf na sua própria conta do Hugging Face:

```text
https://huggingface.co/spaces/SmilingWolf/wd-tagger
```

Você pode usar o Space público para testes, mas ele é compartilhado por muitos usuários e pode ter fila, lentidão ou indisponibilidade. Para uso contínuo, uma cópia própria é mais estável.

## Duplicar o Space

1. Entre no Hugging Face.
2. Abra `https://huggingface.co/spaces/SmilingWolf/wd-tagger`.

![Space público do SmilingWolf](../../image/other/微笑狼的公开仓库.png)

3. Abra o menu no canto superior direito.
4. Escolha `Duplicate this Space`.
5. Mantenha o nome ou use algo fácil de reconhecer, como `wd-tagger`.
6. Deixe como `Public`; assim o ImgBed consegue chamar com menos atrito.
7. Comece com o hardware gratuito.
8. Crie o Space e aguarde a build terminar.

Depois, copie a URL do navegador e cole em `Space URLs` no ImgBed.

## Configurações recomendadas

| Opção | Recomendação |
| --- | --- |
| `Space URLs` | Uma URL por linha |
| Pasta alvo | Vazio para todas; selecione uma pasta se quiser limitar |
| Modelo | Comece com `wd-swinv2-tagger-v3` |
| Limiar de tags gerais | Comece perto de `0.35` |
| Limiar de personagens | Comece perto de `0.85` para reduzir falso positivo |
| `MCut` | Deixe desligado no início |
| Etiquetar ao enviar | Ative se quiser processar imagens novas automaticamente |

Se vierem tags demais, suba um pouco o limiar geral. Se vierem poucas, reduza levemente.

## Etiquetagem em lote

1. Preencha `Space URLs`.
2. Escolha uma pasta alvo.
3. Inicie a etiquetagem.
4. Aguarde o progresso terminar.

Se a pasta alvo estiver vazia, o ImgBed processa todas as pastas.

## Etiquetar ao enviar

Com essa opção ativa, imagens novas chamam automaticamente os `Space URLs` configurados.

Se o Space estiver em fila, o upload pode terminar primeiro e a etiquetagem continuar em segundo plano.

## Perguntas comuns

### Por que duplicar meu próprio Space?

Spaces públicos são compartilhados por muita gente. Uma cópia própria costuma ser mais rápida e estável para seu site.

### Por que as tags saem em inglês?

Isso é normal. Os modelos do SmilingWolf retornam tags em inglês. O ImgBed usa essas tags para busca, filtros, API aleatória e galeria pública.

### Para que serve a classificação?

A classificação trabalha junto com o modo de acesso em Segurança. Por exemplo, ao limitar visitantes por classificação etária, a galeria e a API aleatória seguem essas regras.

## Fluxo rápido

```text
Entrar no Hugging Face
-> Abrir SmilingWolf/wd-tagger
-> Duplicar o Space
-> Aguardar build
-> Copiar URL do Space
-> Colar em Space URLs
-> Ajustar modelo e limiares
-> Iniciar etiquetagem ou ativar etiquetar ao enviar
```
