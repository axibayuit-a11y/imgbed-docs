# Como usar o blog

O recurso de blog adiciona uma página de blog independente ao seu site ImgBed.

Depois de ativado, os visitantes podem acessar:

```text
https://seu-dominio/blog/
```

![Página inicial do blog](../../image/other/博客/博客首页.png)

O blog foi adaptado do projeto open source [LyraVoid/Mizuki](https://github.com/LyraVoid/Mizuki). O ImgBed reescreve e integra a experiência em Vue para ela funcionar dentro do site de hospedagem.

## Onde configurar

```text
Configurações do sistema -> Outras configurações -> Blog
```

![Configurações do blog](../../image/other/博客/QQ20260611-221702.png)

## Primeiro uso

1. Ative a opção `Habilitar`.
2. Escolha a conta do GitHub que vai guardar as configurações do blog.
3. Clique em `Atualizar blog`.
4. Aguarde a mensagem de sucesso.
5. Abra `https://seu-dominio/blog/` para conferir.

Na primeira utilização, o ImgBed prepara um repositório privado na conta do GitHub escolhida:

```text
imgbed-blog-config
```

Esse repositório guarda as configurações do blog e o conteúdo dos posts.

## Como escrever posts

Os posts são editados no seu repositório privado do GitHub:

```text
imgbed-blog-config
```

Fluxo comum:

1. Abra o GitHub.
2. Entre no repositório `imgbed-blog-config`.
3. Crie ou edite arquivos de posts.
4. Faça commit das alterações.
5. Volte ao painel do ImgBed e clique em `Atualizar blog`. Também dá para clicar três vezes no logotipo no canto superior esquerdo do blog para disparar a atualização.

`Atualizar blog` não sobrescreve posts que você já escreveu. A função serve principalmente para inicializar o repositório ou atualizar o cache do blog.

## Recursos disponíveis

O blog oferece lista de posts, categorias, tags, arquivo, busca, modo escuro e troca de idioma.

Também há suporte a comentários e estatísticas de visitas.

![Comentários do blog](../../image/other/博客/支持留言.png)

Os comentários aparecem abaixo do post. O visitante pode informar avatar, apelido, e-mail e o conteúdo do comentário.

As estatísticas mostram visualizações de posts e visitas ao site, ajudando a acompanhar o tráfego do blog.

## Endereço de acesso

O blog sempre fica no caminho `/blog/`.

Se o domínio do seu ImgBed for:

```text
https://image.example.com
```

o endereço do blog será:

```text
https://image.example.com/blog/
```

Ao desativar o blog, visitantes deixam de acessar essa página.
