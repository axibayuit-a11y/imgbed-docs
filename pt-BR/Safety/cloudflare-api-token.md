# Cloudflare API Token

As credenciais da API da Cloudflare permitem que o ImgBed limpe o armazenamento temporário da CDN da Cloudflare depois que arquivos mudam.

![Configurações do Cloudflare API Token](../../image/Safety/cloudflare%20api%20token截图.png)

## Onde configurar

Abra o painel administrativo e acesse:

```text
System Settings -> Security Settings -> Cloudflare API Token
```

Você precisa preencher:

- Zone ID
- Account email
- API Key

## O que esta configuração faz

A Cloudflare pode armazenar temporariamente URLs públicas de imagens.

O armazenamento temporário acelera a entrega das imagens, mas também pode deixar conteúdo antigo visível por algum tempo depois que você exclui, bloqueia, substitui ou move um arquivo.

Depois que as credenciais da API da Cloudflare são configuradas, o ImgBed tenta limpar o armazenamento temporário relacionado da Cloudflare quando essas operações terminam.

Isso é útil quando:

- Você exclui uma imagem e quer que o link público pare de funcionar o quanto antes.
- Você bloqueia uma imagem e quer que visitantes deixem de ver o arquivo de origem.
- Você substitui um arquivo com o mesmo nome e quer que visitantes vejam a nova versão mais cedo.
- Você move ou renomeia arquivos e quer atualizar rapidamente o armazenamento temporário de caminhos antigos.
- Você altera regras de acesso público e quer que a galeria pública ou o armazenamento temporário de imagens aleatórias seja atualizado mais cedo.

## O que acontece se deixar em branco

O ImgBed continua funcionando normalmente sem esta configuração.

A única diferença é que o ImgBed não limpará ativamente o armazenamento temporário da CDN da Cloudflare. Visitantes podem continuar vendo conteúdo antigo até que o armazenamento temporário da Cloudflare expire naturalmente.

## Como encontrar o Zone ID

O Zone ID é o Cloudflare Zone ID do site usado pelo domínio do seu ImgBed.

1. Entre no painel da Cloudflare.
2. Abra o site que contém o domínio do seu ImgBed.
3. Encontre `Zone ID` na página de visão geral do site.
4. Copie-o para o campo `Zone ID` no ImgBed.

Esse é o Zone ID do site, não o ID da conta.

## Account Email

Informe o endereço de e-mail usado para entrar na Cloudflare.

Ele deve corresponder à API Key informada abaixo.

## API Key

Informe sua Cloudflare Global API Key.

1. Entre no painel da Cloudflare.
2. Abra seu perfil.
3. Vá para a página API Tokens.
4. Encontre `Global API Key`.
5. Visualize e copie a chave.
6. Cole-a no campo `API Key` do ImgBed.

![Ver Global API Key](../../image/Safety/查看全局令牌.png)

## Quando passa a valer

Depois de preencher os campos, salve as configurações.

Alterações futuras em arquivos tentarão limpar automaticamente o armazenamento temporário da Cloudflare. Operações passadas não são limpas retroativamente. Se você excluiu ou substituiu um arquivo antes de configurar isso, aguarde o armazenamento temporário da Cloudflare expirar ou limpe-o manualmente na Cloudflare.

## FAQ

### Isso é obrigatório?

Não.

Se seu domínio não usa Cloudflare, ou se o atraso do armazenamento temporário da CDN não é um problema, você pode deixar em branco.

### Credenciais erradas quebram uploads?

Normalmente, não.

Credenciais erradas apenas impedem o ImgBed de limpar o armazenamento temporário da Cloudflare. Upload e acesso normal aos arquivos devem continuar funcionando.

### Por que uma imagem excluída ainda pode ser aberta?

O motivo mais comum é que a Cloudflare ainda mantém o arquivo antigo armazenado temporariamente.

Com credenciais corretas da API da Cloudflare, o ImgBed limpa o armazenamento temporário da URL relacionada quando um arquivo é excluído.

### Por que ainda vejo a imagem antiga depois de substituir um arquivo?

Isso também costuma ser causado pelo armazenamento temporário da CDN.

Depois que esta configuração é feita, o ImgBed tenta limpar o armazenamento temporário da URL antiga quando um arquivo com o mesmo nome é sobrescrito.
