# Adicionar canal pCloud

O canal pCloud usa sua conta pCloud como destino de armazenamento.

## Quando usar

- Você já tem conta pCloud.
- Quer salvar imagens ou arquivos no espaço pCloud.
- Pode usar e-mail e senha como credenciais do canal.

## O que preparar

| Item | Uso |
| --- | --- |
| E-mail pCloud | Login na API do pCloud |
| Senha pCloud | Login na API do pCloud |
| Host | Normalmente `api.pcloud.com`; para Europa `eapi.pcloud.com` |
| Diretório | Opcional, normalmente `imgbed` |

## Onde adicionar

1. Abra Configurações do sistema.
2. Entre em Configurações de upload.
3. Clique em `Adicionar canal`.
4. Escolha `pCloud`.

## Campos

| Campo | Valor |
| --- | --- |
| Nome do canal | Por exemplo `pCloud Main` |
| E-mail | E-mail de login do pCloud |
| Senha | Senha do pCloud |
| Host | Normalmente `api.pcloud.com` |
| Diretório | Opcional, padrão `imgbed` |

O Host depende da região da conta.

| Região | Host |
| --- | --- |
| Padrão / Estados Unidos | `api.pcloud.com` |
| Europa | `eapi.pcloud.com` |

![Configuração pCloud](../../image/upload/pcloud/配置渠道.png)

## Verificação

Depois de salvar, o cartão do canal deve aparecer. Se a consulta de capacidade funcionar, a conexão está correta.

![Consulta de capacidade](../../image/upload/pcloud/查询额度成功.png)

Depois envie uma imagem de teste e confira se ela aparece no diretório do pCloud.

## Perguntas comuns

### Por que não OAuth2?

O OAuth2 do pCloud não fica disponível como fluxo aberto por padrão e exige ativação oficial. Além disso, o fluxo atual não combina bem com as URLs temporárias de upload que o ImgBed precisa, então o canal usa e-mail e senha.

### Qual Host usar?

Normalmente:

```text
api.pcloud.com
```

Para contas europeias:

```text
eapi.pcloud.com
```

## Fluxo rápido

```text
Preparar e-mail e senha do pCloud
-> Abrir Configurações de upload
-> Adicionar canal
-> Escolher pCloud
-> Preencher nome / e-mail / senha
-> Conferir Host
-> Salvar
-> Consultar capacidade
-> Enviar imagem de teste
```
