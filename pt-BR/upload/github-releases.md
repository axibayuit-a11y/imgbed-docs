# Adicionar canal GitHub Releases

O canal GitHub Releases salva arquivos como Release Assets em um repositório do GitHub.

## Quando usar

- Você já usa GitHub com frequência.
- Quer guardar arquivos pequenos ou recursos de distribuição em Releases.
- Prefere um destino gerenciado por GitHub Token.

## O que preparar

| Item | Uso |
| --- | --- |
| Conta GitHub | Gerenciar repositório e token |
| Repositório | Local dos Releases |
| Personal Access Token | Enviar assets ao Release |
| Release Tag | Release ao qual os arquivos serão associados |

## Permissões do token

O Personal Access Token precisa operar Releases do repositório alvo.

![Permissões GitHub](../../image/upload/github-releases/添加github权限.png)

Se o repositório for privado, inclua acesso a repositórios privados.

## Preencher no ImgBed

Em Configurações de upload, escolha `GitHub Releases`.

| Campo | Valor |
| --- | --- |
| Nome do canal | Por exemplo `GitHub Release` |
| Owner | Dono do repositório |
| Repo | Nome do repositório |
| Token | Personal Access Token |
| Release Tag | Tag do Release |
| Caminho | Opcional |

![Configuração GitHub](../../image/upload/github-releases/填写github渠道配置.png)

## Verificação

1. Salve o canal.
2. Envie uma imagem de teste.
3. Confira se ela aparece nos Release Assets do repositório.
4. Abra o link retornado pelo ImgBed.

## Observações

- GitHub Releases não é armazenamento especializado para grande volume ou tráfego alto.
- Limite o token ao repositório necessário.
- Se você excluir assets ou releases manualmente, links do ImgBed podem parar de funcionar.
