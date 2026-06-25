# Limites de taxa de usuários

Os limites de taxa de usuários controlam com que frequência usuários comuns ou visitantes podem enviar arquivos pela página inicial. Isso ajuda a evitar abuso em páginas públicas de upload.

Esta função afeta apenas uploads feitos pela página inicial. Uploads de administradores e uploads feitos com API Tokens não são limitados pelos limites de usuários.

## Onde configurar

Abra o painel administrativo e acesse:

```text
System Settings -> Security Settings -> Upload Management -> User Rate Limits
```

![Configurações de limite de taxa de usuários](../../image/other/用户频控截图.png)

## Habilitar limites de taxa

Depois que `Habilitar limites de taxa` é ativado, o ImgBed rastreia uploads recentes pelo endereço IP de quem enviou.

Valores padrão:

| Configuração | Padrão | Descrição |
| --- | --- | --- |
| Janela de detecção | 1,5 hora | Até onde os registros de upload são contados retroativamente. |
| Contagem máxima de arquivos | 20 | Número máximo de arquivos permitido na janela de detecção. |
| Limite de tamanho por arquivo | 20 MB | Tamanho máximo de um arquivo. |
| Limite de tamanho total de upload | 200 MB | Tamanho total máximo de upload na janela de detecção. |

Por exemplo, com uma janela de 1,5 hora, 20 arquivos, 20 MB por arquivo e 200 MB no total, uploads do mesmo IP são bloqueados assim que qualquer limite configurado é excedido.

## Excluir tipos de arquivo

`Tipos de arquivo de upload excluídos` impede usuários comuns ou visitantes de enviar categorias de arquivo selecionadas.

Categorias disponíveis:

| Tipo | Descrição |
| --- | --- |
| Imagens | jpg, png, webp, gif e arquivos de imagem semelhantes |
| Vídeos | mp4, webm, mov e arquivos de vídeo semelhantes |
| Áudio | mp3, flac, wav e arquivos de áudio semelhantes |
| Documentos | pdf, txt, md, docx e arquivos de documento semelhantes |
| Outros | Arquivos fora das categorias acima, como zip, rar, exe, apk |

Por padrão, um tipo não selecionado significa que ele é permitido.

Clicar em um tipo o destaca, o que significa que esse tipo está bloqueado.

Se `Outros` estiver selecionado, visitantes que enviarem arquivos zip ou rar serão bloqueados e informados de que esse tipo de arquivo não é compatível.

## Mensagens de bloqueio

Quando um limite é acionado, usuários veem uma mensagem correspondente:

![Mensagem de upload muito frequente](../../image/other/频繁报错提示.png)

| Cenário | Significado da mensagem |
| --- | --- |
| Arquivo único grande demais | O arquivo é grande demais e deve ser compactado antes do upload. |
| Tipo de arquivo bloqueado | Este tipo de arquivo não é compatível. Remova-o e tente novamente. |
| Uploads frequentes demais | Uploads recentes são frequentes demais; o horário para nova tentativa é mostrado. |
| Tamanho total alto demais | O tamanho total recente dos uploads é alto demais; o horário para nova tentativa é mostrado. |

## Quando habilitar

Habilite os limites de taxa de usuários se sua página inicial de upload for acessível publicamente.

Motivos comuns:

- Você se preocupa com uploads em massa por script.
- Você quer limitar uploads grandes de visitantes.
- Você quer permitir que usuários comuns enviem apenas imagens, não arquivos compactados ou instaladores.
- Você quer manter o upload público disponível enquanto controla o uso de recursos.

Se o site é apenas para você, ou se apenas administradores podem enviar arquivos, você pode deixar isso desabilitado.
