# Adicionar um canal Cloudflare R2

## Melhor uso

Use o Cloudflare R2 quando:

- Seu site ImgBed já estiver implantado na Cloudflare e você quiser armazenar arquivos em um bucket R2 da mesma conta Cloudflare.
- Você não quiser configurar separadamente endpoint S3, access key e secret key.
- Você quiser que leituras e gravações passem pelo binding R2 do Worker ou Pages com configuração mínima.

Em resumo:

O canal R2 não é criado manualmente no painel de administração do ImgBed. Primeiro, vincule um bucket R2 ao projeto Cloudflare. O nome da variável de binding deve ser `img_r2`.

## O que você precisa antes de começar

- Uma conta Cloudflare.
- Um bucket R2 existente.
- Permissão para gerenciar o projeto Cloudflare em que o ImgBed está implantado.

## Configurar na Cloudflare

### 1. Crie um bucket R2

1. Entre no Cloudflare Dashboard.
2. Abra `R2 Object Storage`.
3. Clique em Create bucket.
4. Escolha um nome de bucket, por exemplo `imgbed`.

Esse bucket será o local em que os arquivos enviados serão armazenados.

![Criar um bucket R2](../../image/upload/cloudflare-r2/创建一个存储桶img-r2.png)

### 2. Vincule o bucket ao projeto ImgBed

Escolha o local do binding conforme o tipo de implantação:

| Tipo de implantação | Local do binding |
| --- | --- |
| Pages | Current Pages project -> Settings -> Functions -> R2 bucket bindings |
| Worker | Current Worker -> Settings -> Bindings -> R2 bucket bindings |

Ao adicionar o binding, os campos importantes são:

| Campo | Valor |
| --- | --- |
| Variable name | `img_r2` |
| R2 bucket | Selecione o bucket que você criou. |

O nome da variável deve ser exatamente `img_r2`. Upload, leitura e exclusão de arquivos R2 dependem desse nome de binding.

### 3. Reimplante o projeto

Depois de salvar o binding, reimplante o ImgBed para que o runtime do Worker ou Pages consiga acessar `img_r2`.

## O que você verá no ImgBed

Depois que o binding R2 estiver disponível, abra:

1. Configurações do sistema.
2. Configurações de upload.
3. O canal `Cloudflare R2`.

O sistema cria automaticamente um canal fixo:

| Campo | Valor fixo |
| --- | --- |
| Nome do canal | `Cloudflare R2` |
| Tipo de canal | `cfr2` |
| Modo de armazenamento | `binding` |
| Origem da configuração | Binding de ambiente |

Este é um canal de binding fixo. Você não precisa clicar em Adicionar canal para criá-lo, e ele não pode ser excluído como um canal comum.

## Campos editáveis no painel de administração

| Campo | O que faz | Obrigatório |
| --- | --- | --- |
| Habilitar canal | Controla se o R2 participa da seleção de upload. | Sim |
| Account ID | Usado somente quando limites de cota estão habilitados e o uso oficial do R2 precisa ser consultado. | Recomendado quando limites de cota estão habilitados |
| Bucket name | Usado somente quando limites de cota estão habilitados e o uso oficial do R2 precisa ser consultado. | Recomendado quando limites de cota estão habilitados |
| Limite de cota | Controla se este canal R2 participa da seleção de upload com base na capacidade. | Não |
| Limiar | Interrompe gravações neste canal quando o uso atinge a porcentagem especificada. | Obrigatório quando limites de cota estão habilitados |

Você pode copiar o Account ID no painel de informações da conta no Cloudflare dashboard. Preencha-o somente se quiser que o ImgBed consulte e aplique o uso de cota do R2.

![Obter o Account ID](../../image/upload/cloudflare-r2/获取账户id.png)

## Etapas de configuração

1. Crie um bucket R2 na Cloudflare.
2. Abra as configurações da Cloudflare para o projeto ImgBed.
3. Adicione um binding de bucket R2.
4. Defina `Variable name` como `img_r2`.
5. Selecione o bucket R2 que você criou.
6. Salve o binding e reimplante o ImgBed.
7. Volte para ImgBed -> Configurações do sistema -> Configurações de upload.
8. Confirme que o canal `Cloudflare R2` aparece e está habilitado.

Se quiser que o R2 participe da seleção de upload com base na capacidade, habilite o limite de cota e informe Account ID, nome do bucket, limite de cota e limiar antes de salvar.

![Configurar limites de cota](../../image/upload/cloudflare-r2/配置容量限制.png)

## Como verificar

- O canal fixo `Cloudflare R2` aparece em Configurações de upload.
- O cartão do canal mostra que ele está habilitado.
- Um pequeno arquivo de teste é enviado com sucesso, e o link retornado abre normalmente.
- Se abrir um arquivo retornar `R2 database binding is not configured`, o runtime não recebeu o binding `img_r2`. Verifique o nome do binding na Cloudflare e reimplante o projeto.
