# Configurações da página

As configurações da página controlam a exibição do site, os valores padrão da página de upload, as imagens de fundo e a aparência do painel administrativo.

## Configurações globais

| Opção | Finalidade |
| --- | --- |
| Título do site | Título exibido na aba do navegador. |
| Ícone do site | Ícone pequeno exibido na aba do navegador. |
| Nome do ImgBed | Nome exibido nas páginas da interface pública. |
| Logotipo do ImgBed | Imagem do logotipo exibida nas páginas da interface pública. |
| Link do logotipo | URL aberto ao clicar no logotipo ou no avatar. |
| Intervalo de troca do fundo | Intervalo de rotação para vários fundos, em milissegundos. `60000` significa 60 segundos. |
| Opacidade do fundo | Opacidade da imagem de fundo de `0` a `1`. Valores menores deixam a imagem mais clara. |
| Prefixo de URL padrão | Prefixo usado ao gerar links de imagens. Vazio significa que o domínio atual do site será usado. |

## Configurações do cliente

| Opção | Finalidade |
| --- | --- |
| Anúncio | Anúncio exibido no topo da página de upload. HTML é compatível. |
| Canal de upload padrão | Canal de upload selecionado por padrão na página de upload. Também é possível escolher Smart Dispatch. |
| Diretório de upload padrão | Diretório de upload padrão, como `/user/`. Vazio ou `/` significa raiz. |
| Método de nomenclatura padrão | Estratégia padrão para gerar o nome do arquivo após o upload. Veja abaixo. |
| Converter para WebP por padrão | Converte imagens para WebP antes do upload. |
| Ativar compressão por padrão | Comprime imagens localmente no navegador antes do upload. |
| Limite de compressão padrão | Comprime automaticamente quando a imagem ultrapassa esse tamanho, em MB. |
| Tamanho alvo padrão | Tamanho alvo do arquivo após a compressão, em MB. |
| Fundo da página de login | Imagem de fundo da página de login do usuário. |
| Fundo da página de upload | Imagem de fundo da página de upload. |
| Link do portal do rodapé | URL aberto pelo botão do portal no rodapé. |
| Ocultar rodapé | Oculta o rodapé da interface pública quando ativado. |

## Configurações administrativas

| Opção | Finalidade |
| --- | --- |
| Fundo do login administrativo | Imagem de fundo da página de login administrativo. |
| Fundo administrativo | Imagem de fundo das páginas administrativas. Use uma URL de imagem ou várias URLs. |
| Modo de carregamento de imagens | Modo de carregamento das prévias na lista de arquivos administrativos. O modo de imagem original carrega as imagens originais. O carregamento inteligente prioriza miniaturas para imagens públicas e originais para imagens restritas. |
| Origem das miniaturas | Serviço usado para gerar miniaturas: wsrv.nl, Cloudflare Image Resizing ou WordPress Photon. O Cloudflare Image Resizing deve estar ativado no Cloudflare antes de ser selecionado. |
| Widget Live2D | Exibe um personagem Live2D no painel administrativo. |
| Efeito de fogos ao clicar | Exibe um efeito de fogos de artifício ao clicar na página. |
| Rastro de estrelas do cursor | Exibe um rastro de estrelas ao mover o mouse. |

## Formatos de imagem de fundo

O fundo da página de login, o fundo da página de upload e o fundo do login administrativo aceitam estes formatos:

| Valor | Efeito |
| --- | --- |
| `bing` | Usa a rotação de papéis de parede do Bing. |
| `["https://example.com/1.jpg","https://example.com/2.jpg"]` | Alterna várias imagens. |
| `["https://example.com/1.jpg"]` | Usa uma única imagem de fundo. |
| `["https://your-domain.com/random?..."]` | Usa um link de API de imagem aleatória. Você pode configurar sua própria API de imagem aleatória em Outras configurações e colar aqui o link de imagem aleatória gerado como uma entrada de fundo único. |

O fundo administrativo aceita URLs de imagens. Várias URLs podem ser separadas por vírgulas inglesas, conforme indicado na página. Vazio significa que o fundo padrão será usado.

## Método de nomenclatura padrão

| Método | Resultado |
| --- | --- |
| Padrão | Prefixo aleatório baseado em tempo + nome original do arquivo, como `1760000000000_cat.png`. |
| Apenas prefixo | Apenas prefixo aleatório baseado em tempo e extensão, como `1760000000000.png`. |
| Apenas nome original | Mantém o nome original do arquivo, como `cat.png`. Em caso de duplicidade, o ImgBed adiciona `(1)`, `(2)` e assim por diante. |
| Link curto | Usa um ID curto de 8 caracteres com a extensão, como `a1b2c3d4.png`. |
