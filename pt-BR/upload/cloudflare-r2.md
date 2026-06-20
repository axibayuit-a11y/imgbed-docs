# Adicionar canal Cloudflare R2

O canal Cloudflare R2 salva arquivos em um bucket R2.

## Quando usar

- Você quer gerenciar armazenamento dentro do ecossistema Cloudflare.
- Vai usar R2 como destino principal do ImgBed.
- Quer combinar R2 com domínio personalizado ou CDN.

## O que preparar

| Item | Uso |
| --- | --- |
| Conta Cloudflare | Gerenciar R2 e tokens |
| Bucket R2 | Destino real dos arquivos |
| Account ID | Identificar a conta |
| API Token | Permitir leitura e escrita no R2 |
| Domínio personalizado | Opcional, para URLs públicas mais limpas |

## Criar o bucket

No Cloudflare Dashboard, abra `R2 Object Storage` e crie um bucket.

![Criar bucket R2](../../image/upload/cloudflare-r2/创建一个存储桶img-r2.png)

Guarde o nome exato do bucket, pois ele deve ser informado igual no ImgBed.

## Encontrar o Account ID

Na página da conta Cloudflare, veja o Account ID.

![Account ID](../../image/upload/cloudflare-r2/获取账户id.png)

## Preencher no ImgBed

Em Configurações de upload, abra `Adicionar canal` e escolha `Cloudflare R2`.

| Campo | Valor |
| --- | --- |
| Nome do canal | Nome fácil de reconhecer |
| Account ID | Account ID da Cloudflare |
| Bucket | Nome do bucket R2 |
| API Token | Token com permissão no R2 |
| Domínio personalizado | Opcional |
| Diretório | Opcional; normalmente `imgbed` |

## Limite de capacidade

Você pode ativar limite de capacidade para controlar quando esse canal deixa de ser usado.

![Limite de capacidade](../../image/upload/cloudflare-r2/配置容量限制.png)

Quando o uso chega ao limite configurado, o ImgBed pode deixar de selecionar esse canal para novos uploads.

## Verificação

1. O cartão do canal R2 aparece após salvar.
2. O canal está habilitado.
3. Envie uma imagem de teste.
4. Confira se o objeto aparece no bucket.
5. Abra o link retornado pelo ImgBed.

## Erros comuns

- Account ID ou nome do bucket incorreto.
- Token sem permissões suficientes no bucket.
- Domínio personalizado não conectado ao bucket.
- Canal fora da seleção por limite de capacidade.
