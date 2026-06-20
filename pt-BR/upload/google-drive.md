# Adicionar canal Google Drive

O canal Google Drive usa uma conta Google Drive como destino de armazenamento.

## O que preparar

| Item | Uso |
| --- | --- |
| Conta Google | Gerenciar Drive e OAuth |
| Projeto Google Cloud | Criar OAuth Client |
| Client ID / Client Secret | Autorizar o ImgBed |
| Refresh Token | Manter acesso de longo prazo |
| Domínio ImgBed | Configurar callback OAuth |

## Criar OAuth Client

No Google Cloud Console, crie um OAuth Client do tipo Web application.

![Criar OAuth Client](../../image/upload/google-drive/oa客户端id创建.png)

Adicione esta URI como redirecionamento autorizado:

```text
https://seu-dominio/api/oauth/google/callback
```

![Configurar URL OAuth](../../image/upload/google-drive/填写oa客户端url信息.png)

## Preencher no ImgBed

Em Configurações de upload, escolha `Google Drive` e informe Client ID e Client Secret.

![Configuração Google Drive](../../image/upload/google-drive/粘贴回添加新渠道配置.png)

| Campo | Valor |
| --- | --- |
| Nome do canal | Por exemplo `Google Drive Main` |
| Client ID | OAuth Client ID |
| Client Secret | OAuth Client Secret |
| Refresh Token | Obtido depois |
| Diretório raiz | Opcional, normalmente `imgbed` |

## Obter Refresh Token

1. No ImgBed, clique em `Obter Token`.
2. Entre com a conta Google que será o destino.
3. Aceite as permissões.
4. Copie o Refresh Token exibido na página de callback.
5. Cole no campo `Refresh Token`.

![Copiar Refresh Token](../../image/upload/google-drive/授权完复制token.png)

## Verificação

1. Salve o canal.
2. Envie uma imagem de teste.
3. Confira se ela aparece no Google Drive.
4. Abra o link retornado pelo ImgBed.

## Observações

- Se a tela de consentimento OAuth não estiver pronta, a autorização pode falhar.
- A conta que gera o Refresh Token será a conta de armazenamento.
- Se o Drive não tiver espaço, o upload falhará.
- Não publique o Client Secret.
