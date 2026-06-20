# Adicionar canal Dropbox

O canal Dropbox usa uma conta Dropbox como destino de armazenamento.

## O que preparar

| Item | Uso |
| --- | --- |
| Conta Dropbox | Salvar arquivos |
| Dropbox App | Dar acesso por API |
| Access Token | Permitir que o ImgBed use o Dropbox |
| Diretório | Opcional, normalmente `imgbed` |

## Criar aplicação

Abra o Dropbox App Console e crie uma aplicação.

![Criar aplicação](../../image/upload/dropbox/开发者创建应用.png)

Escolha o escopo conforme a forma de armazenamento desejada. Uma pasta dedicada costuma ser mais fácil de manter.

## Configurar callback

Se usar OAuth, adicione a URL de retorno do ImgBed:

```text
https://seu-dominio/api/oauth/dropbox/callback
```

![Configurar callback](../../image/upload/dropbox/配置回调地址.png)

## Adicionar permissões

Ative permissões de upload, leitura e exclusão conforme necessário.

![Permissões Dropbox](../../image/upload/dropbox/添加对应的权限.png)

## Obter Token

Obtenha o token pela aplicação ou pelo fluxo de autorização do ImgBed.

![Obter Token](../../image/upload/dropbox/获取令牌.png)

Copie o token e cole no ImgBed.

![Copiar Token](../../image/upload/dropbox/复制令牌.png)

## Preencher no ImgBed

Em Configurações de upload, escolha `Dropbox`.

| Campo | Valor |
| --- | --- |
| Nome do canal | Nome reconhecível |
| Access Token | Token do Dropbox |
| Diretório | Opcional; vazio ou `imgbed` |
| Observação | Opcional |

## Verificação

Depois de salvar, execute consulta de capacidade ou envie uma imagem de teste.

![Consulta de capacidade](../../image/upload/dropbox/查询额度成功.png)

Se o arquivo aparecer no Dropbox e o link do ImgBed abrir, o canal está pronto.

## Se falhar

- Token expirado ou com permissões incompletas.
- Permissões da app alteradas sem nova autorização.
- Diretório com espaços ou barras desnecessárias.
- Dropbox sem espaço disponível.
