# Transferência por Magnet

A transferência por magnet baixa arquivos a partir de um link magnet e os envia automaticamente para o canal de armazenamento em nuvem que você escolher.

Ela é útil para transferir episódios de anime, vídeos, arquivos compactados e itens semelhantes. Cole um link magnet, e o ImgBed cria uma tarefa de download em segundo plano. Quando o download termina, o arquivo é enviado para o ImgBed e o link final aparece na lista de uploads.

![Transferência por magnet](../../image/other/磁力链接/磁力链接.png)

## Onde usar

A entrada de transferência por magnet fica na área de upload da página inicial.

Cole o link magnet na caixa de entrada, escolha `Transfer` e faça o upload.

![Upload de anime](../../image/other/磁力链接/上传番剧.png)

## Antes do primeiro uso

Configure primeiro a transferência por magnet no painel administrativo.

Normalmente, você precisa de:

1. Uma conta do GitHub para executar a tarefa de download.
2. Um canal de upload em nuvem, como Google Drive ou OneDrive.
3. O diretório de upload de destino.
4. Um tempo limite para a tarefa.

Quando as configurações estiverem prontas, volte para a página inicial e cole um link magnet para iniciar a transferência.

## Enviando um link Magnet

1. Cole o link magnet na caixa de upload da página inicial.
2. Verifique se o modo está definido como `Transfer`.
3. Clique para fazer upload.
4. Aguarde o ImgBed criar a tarefa magnet.
5. Depois que a tarefa iniciar, use o painel flutuante `Magnet Tasks` no canto inferior direito para acompanhar o progresso.

O download e o upload podem levar tempo. A velocidade depende do recurso magnet, do ambiente de execução do GitHub e do canal de armazenamento em nuvem selecionado.

![Download magnet em andamento](../../image/other/磁力链接/磁力链接下载中.png)

## Após a conclusão

Depois que a tarefa for concluída, a lista de uploads mostra o nome do arquivo e o link.

Vídeos mostram uma prévia de vídeo, imagens mostram uma prévia de imagem, e outros arquivos mostram um ícone de arquivo comum.

![Vídeo baixado](../../image/other/磁力链接/下载好后的视频.png)

Você pode copiar:

| Tipo de link | Caso de uso |
| --- | --- |
| Link original | Acesso direto ao arquivo |
| Markdown | Posts ou anotações em Markdown |
| HTML | Código de página web |
| BBCode | Fóruns que aceitam BBCode |

## Painel de tarefas Magnet

O painel de tarefas magnet no canto inferior direito mostra a contagem de tarefas, o nome da tarefa, o progresso e o status final.

Estados comuns:

| Status | Significado |
| --- | --- |
| Aguardando | A tarefa foi criada e está aguardando execução. |
| Baixando | O recurso magnet está sendo baixado. |
| Enviando | O arquivo foi baixado e está sendo enviado para o armazenamento em nuvem. |
| Concluído | O upload foi concluído com sucesso, e o link pode ser copiado. |
| Falhou | A tarefa não foi concluída com sucesso. Verifique a mensagem e tente novamente. |

## Dicas

- Se um link magnet contiver vários arquivos, o ImgBed prioriza o arquivo principal concluído para exibição.
- Arquivos grandes levam mais tempo. Aguarde a tarefa terminar antes de atualizar a página.
- Se o recurso magnet não tiver pares disponíveis, ele pode ser muito lento ou falhar.
- Se a conta em nuvem estiver sem cota, a autorização tiver expirado ou o diretório de upload estiver incorreto, a tarefa pode falhar.
- A prévia de vídeo pode levar alguns segundos depois que o upload for concluído.

## FAQ

### Nada começa depois que colo um link Magnet

Confirme se a transferência por magnet está ativada no painel administrativo e se uma conta do GitHub utilizável e um canal em nuvem utilizável foram selecionados.

### O download está sempre lento

A velocidade do magnet depende do próprio recurso. Se não houver pares disponíveis, o download pode ser muito lento ou impossível.

### Nenhuma prévia aparece depois do upload

Primeiro, confirme se o link do arquivo abre. Arquivos de vídeo podem precisar de um curto tempo para carregar no navegador, ou você pode abrir o link diretamente.

### O que devo verificar se uma tarefa falhar?

Verifique se o link magnet é válido, se o canal em nuvem funciona e se o diretório de upload está correto. Em seguida, envie a tarefa novamente.
