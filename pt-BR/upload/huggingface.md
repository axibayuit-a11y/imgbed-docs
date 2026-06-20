# Adicionar canal Hugging Face

O canal Hugging Face salva arquivos em um repositório do Hugging Face.

## O que preparar

| Item | Uso |
| --- | --- |
| Conta Hugging Face | Gerenciar repositório e token |
| Repository | Local onde os arquivos serão salvos |
| Access Token | Permitir escrita pelo ImgBed |
| Diretório | Opcional |

## Criar Token

Nas configurações do Hugging Face, crie um Access Token com permissão de escrita no repositório.

![Criar Token](../../image/upload/huggingface/创建令牌.png)

Copie o token e guarde com segurança.

## Preencher no ImgBed

Em Configurações de upload, escolha `Hugging Face`.

| Campo | Valor |
| --- | --- |
| Nome do canal | Por exemplo `HF Storage` |
| Repository | `usuario/repositorio` |
| Token | Hugging Face Access Token |
| Diretório | Opcional, normalmente `imgbed` |
| Observação | Opcional |

![Adicionar canal](../../image/upload/huggingface/添加渠道.png)

## Verificação

1. Salve o canal.
2. Envie uma imagem de teste.
3. Confira se o arquivo aparece no repositório.
4. Abra o link pelo ImgBed.

## Cuidados

- Veja se o repositório é público ou privado. Em repositório público, arquivos podem ficar visíveis.
- Dê ao token apenas as permissões necessárias.
- Para muitos arquivos ou tráfego alto, considere os limites do Hugging Face.
