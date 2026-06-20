# Adicionar canal GitLab Packages

O canal GitLab Packages usa o Generic Package Registry do GitLab como armazenamento.

## O que preparar

| Item | Uso |
| --- | --- |
| Conta GitLab | Gerenciar projeto e token |
| Projeto GitLab | Local onde o pacote será salvo |
| Access Token | Enviar arquivos ao Package Registry |
| Project ID | Identificar o projeto no ImgBed |

## Criar Token

No GitLab, crie um Access Token com as permissões necessárias.

![Gerar Token](../../image/upload/gitlab-packages/点击生成旧版令牌.png)

Marque permissões de leitura e escrita necessárias para pacotes.

![Permissões do Token](../../image/upload/gitlab-packages/勾选令牌权限.png)

O token pode aparecer apenas uma vez. Copie e guarde.

## Preencher no ImgBed

Em Configurações de upload, escolha `GitLab Packages`.

| Campo | Valor |
| --- | --- |
| Nome do canal | Por exemplo `GitLab Packages` |
| GitLab Host | `https://gitlab.com` ou sua instância própria |
| Project ID | ID do projeto |
| Token | Access Token |
| Package Name | Nome do pacote |
| Version | Versão |
| Caminho | Opcional |

![Configuração GitLab](../../image/upload/gitlab-packages/配置渠道内容.png)

## Verificação

1. Salve o canal.
2. Envie um arquivo de teste.
3. Confira se aparece no Package Registry.
4. Abra o link pelo ImgBed.

## Erros comuns

- Project ID incorreto.
- Token sem permissão de escrita no Package Registry.
- GitLab Host escrito errado.
- Package Registry desabilitado no projeto.
