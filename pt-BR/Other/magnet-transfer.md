# Como usar links magnet

O recurso de link magnet baixa os arquivos do magnet e depois envia automaticamente para o canal de armazenamento escolhido.

Ele é útil para transferir vídeos, episódios, arquivos compactados e outros conteúdos. Basta colar o magnet: o ImgBed cria uma tarefa em segundo plano e, ao final, mostra o link na lista de uploads.

![Link magnet](../../image/other/磁力链接/磁力链接.png)

## Onde usar

A entrada fica na área de upload da página inicial.

Cole o link magnet no campo, selecione o modo `Transferir` e envie.

![Upload por magnet](../../image/other/磁力链接/上传番剧.png)

## Antes de começar

Configure primeiro a transferência por magnet no painel administrativo.

Normalmente você precisa de:

| Item | Para que serve |
| --- | --- |
| Conta do GitHub | Executar a tarefa de download |
| Canal de upload | Google Drive, OneDrive ou outro destino final |
| Diretório de destino | Pasta onde o arquivo transferido será salvo |
| Tempo limite | Limite para tarefas demoradas |

## Como transferir

1. Cole o link magnet no campo de upload da página inicial.
2. Confirme que o modo está como `Transferir`.
3. Clique em enviar.
4. Aguarde a criação da tarefa.
5. Acompanhe o progresso na janela `Tarefas magnet`, no canto inferior direito.

O download e o upload podem demorar. A velocidade depende do magnet, do ambiente de execução do GitHub e do canal de armazenamento escolhido.

![Download em andamento](../../image/other/磁力链接/磁力链接下载中.png)

## Depois de concluir

Quando a tarefa terminar, a lista de uploads mostra o nome do arquivo e os links.

Vídeos aparecem com prévia de vídeo; imagens aparecem com prévia de imagem; outros arquivos usam ícone genérico.

![Vídeo transferido](../../image/other/磁力链接/下载好后的视频.png)

Você pode copiar estes formatos:

| Formato | Uso |
| --- | --- |
| Link original | Abrir o arquivo diretamente |
| Markdown | Colar em posts ou documentação Markdown |
| HTML | Inserir em código de página web |
| BBCode | Usar em fóruns compatíveis com BBCode |

## Estados da tarefa

| Estado | Significado |
| --- | --- |
| Aguardando | A tarefa foi criada e espera execução |
| Baixando | O recurso magnet está sendo baixado |
| Enviando | O arquivo baixado está sendo enviado ao canal |
| Concluído | O upload terminou e o link pode ser copiado |
| Falhou | Confira o aviso e tente novamente |

## Dicas

- Se o magnet tiver vários arquivos, o ImgBed prioriza o arquivo principal concluído.
- Arquivos grandes levam mais tempo; aguarde a conclusão antes de recarregar a página.
- Se o recurso não tiver fontes disponíveis, o download pode ficar lento ou falhar.
- Se a conta de armazenamento não tiver cota, permissão ou diretório correto, o upload pode falhar.
- A prévia de vídeo pode levar alguns segundos para carregar.
