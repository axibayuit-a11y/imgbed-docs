# Adicionar um canal GitLab Packages

## O que você precisa antes de começar

Você só precisa de três coisas:

| Requisito | Finalidade |
| --- | --- |
| Conta GitLab | Usada para gerar um access token e ser proprietária do projeto. |
| GitLab Personal Access Token | Usado pelo ImgBed para acessar a GitLab API, criar projetos e fazer upload de arquivos para Generic Packages. |
| Project name | Você pode informar somente o nome do projeto, por exemplo `imgbed`. |

## Etapas de configuração

### Etapa 1: Entre no GitLab e crie um Access Token

1. Entre no GitLab.
2. Clique no avatar no canto superior direito e abra `Preferences`.
3. Abra `Access Tokens` na barra lateral esquerda.
4. Dê ao token um nome que você reconheça.
5. Escolha uma data de expiração conforme sua preferência de manutenção.
6. Selecione o scope `api`.
7. Copie e salve o token imediatamente depois que ele for criado.

![Criar token legacy](../../image/upload/gitlab-packages/点击生成旧版令牌.png)

![Selecionar permissões do token](../../image/upload/gitlab-packages/勾选令牌权限.png)

## Etapa 2: Preencha o canal GitLab Packages no ImgBed

Depois de selecionar `GitLab Packages` em Configurações de upload, preencha os campos assim:

| Campo da UI | O que inserir |
| --- | --- |
| Nome do canal | Um nome de sua escolha, como `GitLabPrimary`. |
| Access Token | O GitLab Personal Access Token que você acabou de criar. |
| Project name | Um nome curto de projeto, como `imgbed`, ou um caminho completo, como `username/imgbed`. |
| Private repository | Ative ou desative conforme sua necessidade. |
| Remark | Opcional, por exemplo `Primary upload channel`. |

![Configurar o canal](../../image/upload/gitlab-packages/配置渠道内容.png)

## Etapa 3: Salve o canal

Depois de preencher os campos, clique em Salvar.

O sistema cuidará destes detalhes:

| Comportamento do sistema | Descrição |
| --- | --- |
| Nome curto do projeto | O ImgBed identifica a conta GitLab atual e expande o valor para um caminho completo de projeto. |
| Caminho completo do projeto | O ImgBed usa o caminho `username/project` exatamente como informado. |
| Verificação do projeto | Se você usar o caminho da conta pessoal atual, o ImgBed cria o projeto automaticamente quando ele não existe. Se informar manualmente um caminho completo, o ImgBed usa esse caminho diretamente. |
| Estado público/privado | A visibilidade do projeto é sincronizada conforme o switch atual. |

## Lista de verificação rápida

```text
Sign in to GitLab
-> Create an Access Token
-> Select only the api scope
-> Return to ImgBed and enter the token and project name
-> Save
-> If only a project name is entered, ImgBed adds the current username automatically
-> If username/project is entered, ImgBed uses it as-is
-> Upload a test image
```
