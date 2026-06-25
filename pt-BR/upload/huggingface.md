# Adicionar um canal Hugging Face

## O que você precisa antes de começar

Você só precisa de três coisas:

| Requisito | Finalidade |
| --- | --- |
| Conta Hugging Face | Usada para gerar um access token e ser proprietária do repositório. |
| Hugging Face User Access Token | Usado pelo ImgBed para acessar a Hugging Face API, criar repositórios e fazer upload de arquivos. |
| Repository name | Você pode informar somente o nome do repositório, por exemplo `image`. |

## Etapas de configuração

### Etapa 1: Entre no Hugging Face e crie um Access Token

1. Entre no Hugging Face.
2. Clique no avatar no canto superior direito e abra `Settings`.
3. Abra `Access Tokens` na barra lateral esquerda.
4. Crie um novo token.
5. Dê ao token um nome que você reconheça.
6. Selecione a permissão `write`.
7. Copie e salve o token imediatamente depois que ele for criado.

![Criar um token](../../image/upload/huggingface/创建令牌.png)

## Etapa 2: Preencha o canal Hugging Face no ImgBed

Depois de selecionar `Hugging Face` em Configurações de upload, preencha os campos assim:

| Campo da UI | O que inserir |
| --- | --- |
| Nome do canal | Um nome de sua escolha, como `hf-primary`. |
| Repository name | Um nome curto de repo, como `image`, ou um caminho completo, como `username/image`. |
| Access Token | O Hugging Face User Access Token que você acabou de criar. |
| Private repository | Ative ou desative conforme sua necessidade. |
| Remark | Opcional, por exemplo `Primary upload channel`. |

![Adicionar o canal](../../image/upload/huggingface/添加渠道.png)

## Etapa 3: Salve o canal

Depois de preencher os campos, clique em Salvar.

O sistema cuidará destes detalhes:

| Comportamento do sistema | Descrição |
| --- | --- |
| Nome curto do repositório | O ImgBed identifica a conta Hugging Face atual e expande o valor para um caminho completo de repositório. |
| Caminho completo do repositório | O ImgBed usa o caminho `username/repository` exatamente como informado. |
| Verificação do repositório | Se você usar o caminho da conta pessoal atual, o ImgBed tenta criar o repositório quando ele não existe. Se informar manualmente um caminho completo, o ImgBed usa esse caminho diretamente. |
| Tipo de repositório | Este canal usa um repositório `dataset`. |
| Estado público/privado | A visibilidade do repositório é sincronizada conforme o switch atual. |

## Lista de verificação rápida

```text
Sign in to Hugging Face
-> Create an Access Token
-> Select write permission
-> Return to ImgBed and enter the token and repository name
-> Save
-> If only a repo name is entered, ImgBed adds the current username automatically
-> If username/repo is entered, ImgBed uses it as-is
-> ImgBed checks or creates the dataset repository
-> Upload a test image
```
