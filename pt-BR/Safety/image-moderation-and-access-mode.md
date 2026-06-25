# Moderação de imagens e modo de acesso

A moderação de imagens atribui classificações etárias às imagens enviadas. O modo de acesso controla quais classificações ficam visíveis pelo acesso público.

Isso afeta a galeria pública, URLs públicas de arquivos e a API de imagens aleatórias. Não restringe o painel administrativo. Administradores ainda podem ver e gerenciar todos os arquivos.

## Onde configurar

Abra o painel administrativo e acesse:

```text
System Settings -> Security Settings -> Upload Management -> Image Moderation
```

As configurações principais são:

- Modo de acesso
- Habilitar moderação
- Provedor de moderação

## O que o modo de acesso faz

O modo de acesso decide quais classificações etárias podem ser exibidas publicamente.

Modos atuais:

| Modo de acesso | Classificações visíveis publicamente |
| --- | --- |
| Modo adulto | General, R12, R16, R18 |
| Modo jovem | General, R12, R16 |
| Modo adolescente | General, R12 |
| Modo infantil | Somente General |

O padrão é o modo adulto.

Para sites privados ou sites com conteúdo adulto, o modo adulto pode ser adequado. Para uma galeria pública mais conservadora, escolha o modo jovem, adolescente ou infantil.

## O que habilitar a moderação faz

Quando a moderação está habilitada, o ImgBed chama o provedor de moderação selecionado durante o upload e salva a classificação etária detectada.

Classificações principais:

| Classificação | Significado |
| --- | --- |
| General | Conteúdo público seguro |
| R12 | Conteúdo levemente sensível |
| R16 | Conteúdo moderadamente sensível |
| R18 | Conteúdo adulto |

O resultado da moderação é usado ao decidir o acesso público.

Se a moderação não estiver habilitada, ou se arquivos antigos não tiverem classificação, esses arquivos são tratados como sem classificação. Arquivos sem classificação não são removidos automaticamente da galeria pública nem da API de imagens aleatórias apenas por não terem classificação.

## Escolher um provedor de moderação

Provedores disponíveis incluem:

- moderatecontent.com
- nsfwjs
- Sightengine

Cada provedor tem requisitos diferentes:

- moderatecontent.com normalmente exige uma API Key.
- nsfwjs normalmente exige uma URL de ponto de extremidade da API.
- Sightengine exige API user e API secret.

Escolha com base na sua conta, disponibilidade e qualidade de detecção. Desde que a moderação esteja habilitada e configurada corretamente, o ImgBed tenta gravar uma classificação de imagem durante o upload.

## Efeito na galeria pública

A galeria pública filtra arquivos de acordo com o modo de acesso.

Exemplos:

- Modo adulto: imagens R18 podem aparecer.
- Modo jovem: imagens R18 ficam ocultas.
- Modo adolescente: imagens R16 e R18 ficam ocultas.
- Modo infantil: apenas imagens General são exibidas.

Isso afeta apenas o acesso público normal. O painel administrativo ainda mostra todos os arquivos.

## Efeito em URLs públicas de arquivos

URLs públicas de arquivos são links diretos de imagens abertos por visitantes.

Se a classificação do arquivo for permitida pelo modo de acesso atual, o ImgBed retorna a imagem de origem.

Se a classificação estiver acima do nível permitido, o acesso público normal não retorna a imagem de origem. Em vez disso, o ImgBed retorna o resultado bloqueado configurado ou a imagem substituta.

Exemplo:

- O modo atual é o modo infantil.
- Uma imagem tem classificação R18.
- Um visitante abre a URL pública diretamente.
- O ImgBed não retorna a imagem de origem R18 para esse visitante.

![Imagem de arquivo restrito](../../image/Safety/文件受限图.png)

Administradores que visualizam arquivos no painel administrativo não são afetados por essa restrição.

## Efeito na API de imagens aleatórias

A API de imagens aleatórias também filtra o conjunto de candidatos pelo modo de acesso.

No modo infantil, imagens aleatórias são selecionadas apenas de arquivos com classificação General.

No modo jovem, imagens aleatórias podem vir de arquivos General, R12 e R16, mas não de arquivos R18.

Isso impede que a API de imagens aleatórias contorne as restrições da galeria pública.

## Relação com regras de lista

O modo de acesso não é a única regra de acesso público. Ele funciona junto com regras de lista de permissão e lista de bloqueio.

Em resumo:

- Conteúdo na lista de permissão é público primeiro.
- Conteúdo na lista de bloqueio não pode ser visualizado diretamente por visitantes comuns.
- Conteúdo que não está em nenhuma das listas é então verificado pelo modo de acesso.

Se uma imagem for restringida tanto pela classificação etária quanto por regras de lista, visitantes comuns ainda não poderão ver diretamente o arquivo de origem.

## Configurações recomendadas

Para sites públicos:

- Habilite a moderação.
- Escolha um modo de acesso compatível com o público do site.
- Use o modo infantil ou adolescente para visitantes de todas as idades.
- Evite o modo adulto se você não quer exibir conteúdo adulto publicamente.
- Revise as classificações dos arquivos no painel administrativo e ajuste manualmente quando necessário.

Para sites privados ou pessoais:

- O modo adulto geralmente é suficiente.
- Habilite a moderação se for útil.
- Revise e ajuste classificações no painel administrativo conforme necessário.

## FAQ

### Os arquivos desaparecem do painel administrativo depois que eu altero o modo de acesso?

Não.

O modo de acesso afeta apenas o acesso público normal. Ele não afeta o painel administrativo.

### Por que a galeria pública mostrou menos imagens depois de mudar para o modo infantil?

O modo infantil só permite que arquivos com classificação General sejam exibidos publicamente. Arquivos R12, R16 e R18 são filtrados.

### URLs públicas ainda podem abrir imagens adultas?

Se o modo de acesso atual não permitir essa classificação, URLs públicas normais não retornam a imagem de origem.

### A API de imagens aleatórias pode retornar imagens restritas?

Não.

A API de imagens aleatórias filtra candidatos de acordo com o modo de acesso atual.

### O que acontece com imagens antigas sem classificação?

Imagens sem classificação não são ocultadas automaticamente apenas por não terem resultado de moderação. Você pode ajustar suas classificações depois no painel administrativo.
