# Configuração e acesso por WebDAV

O ImgBed pode expor acesso por WebDAV para você revisar arquivos pelo explorador do sistema ou por um cliente compatível.

## Quando usar

- Você quer ver arquivos pelo Windows ou macOS.
- Usa um cliente WebDAV para organizar arquivos.
- Precisa acessar arquivos fora do painel administrativo.

## Conectar pelo Windows 11

1. Abra o Explorador de Arquivos.
2. Clique com o botão direito em `Este Computador`.
3. Escolha `Adicionar um local de rede`.
4. Informe a URL WebDAV.
5. Digite usuário e senha.
6. Confira se o conteúdo abre como uma pasta.

![Configuração WebDAV no Windows 11](../../image/Safety/webdav在win11配置.png)

Se a conexão estiver correta, o conteúdo aparece no Explorador.

![WebDAV no Windows](../../image/Safety/webdav在win显示效果.png)

## Credenciais

Use as credenciais WebDAV configuradas no ImgBed. Para mais segurança, prefira uma conta com permissões limitadas em vez de uma conta principal compartilhada.

## Se não conectar

| Ponto | O que conferir |
| --- | --- |
| URL | Se inclui `https://` e é o endereço WebDAV correto |
| Credenciais | Usuário e senha corretos |
| Permissões | Leitura e escrita no diretório alvo |
| Cliente | Se Windows ou cliente WebDAV não está bloqueando a conexão |

Se apenas a consulta de capacidade falhar, mas uploads funcionarem, o servidor WebDAV pode simplesmente não retornar informação de cota.
