# Adicionar um canal pCloud

## Melhor para

- Você tem uma conta pCloud e quer que o ImgBed armazene imagens no pCloud.
- Você aceita usar o e-mail e a senha da sua conta pCloud como credenciais do canal.

## O que você precisa primeiro

| Requisito | Por que você precisa disso |
| --- | --- |
| E-mail da conta pCloud | Usado para entrar na API do pCloud |
| Senha do pCloud | Usada para entrar na API do pCloud |
| API host | O padrão é `api.pcloud.com`. Contas da UE podem usar `eapi.pcloud.com`. |
| Storage directory | Onde os arquivos são armazenados. O padrão é `imgbed`. |

## Onde adicionar

1. Abra Configurações do sistema.
2. Abra Configurações de upload.
3. Clique em `Add Channel` no canto superior direito.
4. Escolha `pCloud`.

## Referência de campos

| Campo | Finalidade | Obrigatório |
| --- | --- | --- |
| Nome do canal | Identifica este canal pCloud, por exemplo `Personal pCloud` | Sim |
| Account email | Seu e-mail de login do pCloud | Sim |
| Password | Sua senha do pCloud | Sim |
| API host | Host da API do pCloud. O padrão é `api.pcloud.com`. | Não |
| Storage directory | Diretório usado para armazenar arquivos. O padrão é `imgbed`. | Não |

Escolha o API host conforme a região da sua conta:

| Região da conta | API Host |
| --- | --- |
| Padrão / EUA | `api.pcloud.com` |
| Europe | `eapi.pcloud.com` |

## Etapas de configuração

1. Abra Configurações de upload.
2. Clique em `Add Channel`.
3. Escolha `pCloud`.
4. Informe um nome de canal que você reconheça.
5. Informe o e-mail da sua conta pCloud.
6. Informe sua senha do pCloud.
7. Mantenha o API host como `api.pcloud.com`, ou use `eapi.pcloud.com` para contas da UE.
8. Mantenha storage directory como `imgbed`, ou altere para a pasta que preferir.
9. Salve o canal.

![Configurar canal](../../image/upload/pcloud/配置渠道.png)

## Como verificar

| Verificação | Resultado esperado |
| --- | --- |
| Cartão do canal | O cartão do canal pCloud aparece depois de salvar. |
| Switch do canal | O switch no cartão permanece habilitado. |
| Exibição do e-mail | O cartão mostra o e-mail pCloud conectado. |
| Consulta de cota | Depois de uma consulta bem-sucedida, a capacidade usada e total é exibida. |
| Teste de upload | Uma imagem de teste aparece no storage directory pCloud configurado. |

![Consulta de cota bem-sucedida](../../image/upload/pcloud/查询额度成功.png)

## Solução de problemas

### Por que não OAuth2?

O OAuth2 do pCloud não é self-service por padrão. Você precisa enviar um e-mail ao pCloud e pedir que eles o habilitem.

O fluxo OAuth2 atual do pCloud também não oferece suporte ao workflow de upload link de curta duração de que o ImgBed precisa. Por isso, este canal usa login por e-mail e senha da conta.

### Qual API Host devo usar?

Padrão:

```text
api.pcloud.com
```

Para contas da UE:

```text
eapi.pcloud.com
```

## Fluxo rápido

```text
Prepare your pCloud email and password
-> Open Upload Settings
-> Add Channel
-> Choose pCloud
-> Fill channel name / email / password
-> Keep API host as api.pcloud.com unless your account is in Europe
-> Keep storage directory as imgbed unless you need another folder
-> Save
-> Query quota
-> Upload a test image
```
