# Acesso ao site por WebDAV
A configuração WebDAV em Configurações de segurança expõe seu site ImgBed como um ponto de extremidade WebDAV.

Depois de habilitada, você pode usar Windows, macOS, gerenciadores de arquivos móveis ou qualquer cliente compatível com WebDAV para navegar, enviar, excluir e gerenciar arquivos do ImgBed como se fossem uma pasta remota.

Esta é a entrada de acesso WebDAV do site. Ela é diferente do canal de armazenamento WebDAV em Configurações de upload. O canal de upload armazena arquivos em um serviço WebDAV de terceiros. Esta configuração permite que seu site ImgBed forneça acesso WebDAV a clientes.

## Onde configurar

Abra o painel administrativo e acesse:

```text
System Settings -> Security Settings -> WebDAV
```

Configurações disponíveis:

- Habilitar
- Nome de usuário
- Senha
- Modo de carregamento de imagem
- Canal padrão

## O que este recurso faz

Depois que o WebDAV é habilitado, o ImgBed fornece uma URL fixa de acesso:

```text
https://your-domain.com/dav
```

Use essa URL para se conectar ao diretório de arquivos do ImgBed.

Bons casos de uso:

- Navegar por arquivos do ImgBed diretamente pelo gerenciador de arquivos do computador.
- Arrastar imagens para a pasta WebDAV para enviá-las.
- Organizar pastas do ImgBed pelo gerenciador de arquivos local.
- Usar software compatível com WebDAV para sincronizar ou gerenciar imagens.
- Acessar conteúdo do ImgBed sem abrir o painel administrativo.

## Configurações

### Habilitar

Ativa o ponto de extremidade WebDAV.

Quando desabilitado, clientes não conseguem se conectar por WebDAV.

### Nome de usuário e senha

Essas credenciais são usadas por clientes WebDAV ao se conectar.

Use um nome de usuário e uma senha dedicados para WebDAV. Não reutilize a senha do administrador nem a senha de upload.

Se o nome de usuário ou a senha estiverem vazios, clientes WebDAV não conseguirão se conectar corretamente.

### Modo de carregamento de imagem

O modo de carregamento de imagem decide qual URL de imagem os clientes WebDAV preferem ao ler imagens.

Opções comuns:

| Modo | Descrição |
| --- | --- |
| Carregamento inteligente | O ImgBed escolhe com base no contexto. Recomendado para uso normal. |
| Imagem de origem | Dá preferência às imagens de origem. |
| Miniatura | Dá preferência a miniaturas. Útil para pré-visualização rápida. |

Se não tiver certeza, mantenha `Carregamento inteligente`.

### Canal padrão

O canal padrão é usado para uploads via WebDAV.

Quando você copia arquivos para o diretório WebDAV pelo Windows ou por outro cliente, o ImgBed os envia pelo canal de upload padrão selecionado.

Se nenhum canal padrão for selecionado, a navegação pode funcionar, mas uploads podem falhar.

## Acessar WebDAV no Windows 11

O Windows 11 pode adicionar WebDAV como um local de rede.

1. Abra `Este PC`.
2. Escolha `Adicionar um local de rede`.
3. Insira `https://your-domain.com/dav`.
4. Informe seu nome de usuário e senha do WebDAV quando solicitado.
5. Conclua o assistente. O diretório WebDAV poderá ser aberto no Explorador de Arquivos.

![Adicionar WebDAV no Windows 11](../../image/Safety/webdav在win11配置.png)

Depois de adicionado, o diretório WebDAV aparece no Explorador de Arquivos do Windows. Você pode abrir, copiar e gerenciar arquivos como em uma pasta normal.

![WebDAV no Windows](../../image/Safety/webdav在win显示效果.png)

## Operações compatíveis

Depois de uma conexão WebDAV bem-sucedida, normalmente você pode:

- Ver arquivos e pastas.
- Enviar arquivos.
- Criar pastas.
- Renomear arquivos ou pastas.
- Mover arquivos.
- Excluir arquivos.

WebDAV é mais indicado para acesso diário e gerenciamento de arquivos em pequena escala. Para grandes movimentações, exclusões em lote ou organização complexa, use o painel administrativo.

## Gerenciamento de dispositivos de login

Conexões WebDAV bem-sucedidas também aparecem na aba WebDAV em Gerenciamento de dispositivos de login.

Você pode revisar clientes WebDAV ali e forçar dispositivos antigos a ficarem offline quando necessário.

Se você alterar o nome de usuário ou a senha do WebDAV, clientes antigos precisarão entrar novamente.

## FAQ

### O Windows continua pedindo nome de usuário e senha

Verifique:

- A URL é `https://your-domain.com/dav`.
- O nome de usuário e a senha correspondem às configurações do WebDAV.
- O WebDAV está habilitado.
- O site pode ser acessado por HTTPS.

### Navegação funciona, mas upload falha

Verifique o `Canal padrão`.

Uploads via WebDAV precisam de um canal de upload padrão. Se ele estiver ausente, desabilitado ou configurado incorretamente, uploads podem falhar.

### A velocidade de acesso é instável

O desempenho do WebDAV depende do cliente, da rede, da quantidade de arquivos e do canal de upload padrão.

Se um diretório tiver muitos arquivos, organize-os em pastas em vez de manter arquivos demais em um único diretório.

## Recomendações de segurança

- Use HTTPS para acesso WebDAV.
- Defina uma senha forte.
- Não compartilhe a senha do WebDAV com pessoas não confiáveis.
- Desative o WebDAV quando não estiver usando.
- Limpe periodicamente dispositivos WebDAV não usados em Gerenciamento de dispositivos de login.

## Tamanho de arquivo no upload WebDAV

Clientes WebDAV não usam o fluxo de upload em partes para arquivos grandes da página de upload do navegador. Para arquivos acima dos limites sugeridos abaixo, prefira a página de upload web.

| Canal de upload padrão | Limite sugerido por arquivo WebDAV |
| --- | ---: |
| Telegram | 20 MB |
| Discord | 10 MB |
| Cloudflare R2 | 30 MB |
| S3 | 30 MB |
| GitHub Releases | 64 MB |
| GitLab Packages | 64 MB |
| Hugging Face | 20 MB |
| OneDrive | 30 MB |
| Google Drive | 30 MB |
| Dropbox | 30 MB |
| Yandex Disk | 30 MB |
| pCloud | 30 MB |
| WebDAV | 64 MB |

