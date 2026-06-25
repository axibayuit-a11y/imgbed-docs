# Adicionar um canal GitHub Releases

## O que você precisa antes de começar

Você só precisa de três coisas:

| Requisito | Finalidade |
| --- | --- |
| Conta GitHub | Usada para gerar um access token e ser proprietária do repositório. |
| GitHub Access Token | Usado pelo ImgBed para acessar a GitHub API, criar releases e fazer upload de arquivos. |
| Repository name | Você pode informar somente o nome do repositório, por exemplo `image`. |

## Etapas de configuração

### Etapa 1: Entre no GitHub e crie um Access Token

1. Entre no GitHub.
2. Clique no avatar no canto superior direito e abra `Settings`.
3. Abra `Developer settings` na barra lateral esquerda.
4. Abra `Personal access tokens`.
5. Abra `Tokens (classic)`.
6. Clique em `Generate new token (classic)`.
7. Dê ao token um nome que você reconheça.
8. Escolha uma data de expiração conforme sua preferência de manutenção.
9. Selecione os scopes `repo` e `workflow`.
10. Copie e salve o token imediatamente depois que ele for criado.

![Adicionar permissões do GitHub](../../image/upload/github-releases/添加github权限.png)

## Etapa 2: Preencha o canal GitHub Releases no ImgBed

Depois de selecionar `GitHub Releases` em Configurações de upload, preencha os campos assim:

| Campo da UI | O que inserir |
| --- | --- |
| Nome do canal | Um nome de sua escolha, como `GitHubPrimary`. |
| Access Token | O GitHub Personal Access Token que você acabou de criar. |
| Repository name | Um nome curto de repo, como `image`, ou um caminho completo, como `username/image`. |
| Private repository | Ative ou desative conforme sua necessidade. |
| Remark | Opcional, por exemplo `Primary upload channel`. |

![Preencher configuração do canal GitHub](../../image/upload/github-releases/填写github渠道配置.png)

## Etapa 3: Salve o canal

Depois de preencher os campos, clique em Salvar.

O sistema cuidará destes detalhes:

| Comportamento do sistema | Descrição |
| --- | --- |
| Nome curto do repositório | O ImgBed identifica a conta GitHub atual e expande o valor para um caminho completo de repositório. |
| Caminho completo do repositório | O ImgBed usa o caminho `username/repository` exatamente como informado. |
| Verificação do repositório | Se você usar o caminho da conta pessoal atual, o ImgBed cria o repositório automaticamente quando ele não existe. Se informar manualmente um caminho completo, o ImgBed usa esse caminho diretamente. |
| Estado público/privado | A visibilidade do repositório é sincronizada conforme o switch atual. |

## Lista de verificação rápida

GitHub Releases funciona assim:

```text
Sign in to GitHub
-> Create an Access Token
-> Return to ImgBed and enter the token and repository name
-> Save
-> If only a repo name is entered, ImgBed adds the current username automatically
-> If username/repo is entered, ImgBed uses it as-is
-> Upload a test image
```
