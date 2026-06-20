# Configuração do Cloudflare API Token

Algumas funções do ImgBed precisam de um Cloudflare API Token. Ele é usado, por exemplo, ao trabalhar com R2, Workers, D1, KV e outros recursos da Cloudflare.

## O que preparar

| Item | Uso |
| --- | --- |
| Conta Cloudflare | Criar o API Token |
| Account ID | Identificar a conta onde ficam R2, Workers e outros recursos |
| Permissões necessárias | Conceder apenas o acesso exigido pela função |

## Criar um API Token

1. Entre no Cloudflare Dashboard.
2. Abra `My Profile` pelo perfil no canto superior direito.
3. Acesse `API Tokens`.
4. Clique em `Create Token`.
5. Escolha as permissões necessárias.
6. Limite o token à conta ou zona correta.
7. Copie o token gerado.

![Cloudflare API Token](../../image/Safety/cloudflare api token截图.png)

O token pode aparecer apenas uma vez. Guarde em local seguro.

## Diferença para Global API Key

A Cloudflare também oferece Global API Key, mas no ImgBed normalmente é melhor usar API Token.

| Tipo | Característica |
| --- | --- |
| API Token | Permite limitar permissões e escopo |
| Global API Key | Tem permissões amplas sobre a conta |

Um API Token com permissões mínimas reduz riscos na operação.

![Ver Global API Key](../../image/Safety/查看全局令牌.png)

## Informar no ImgBed

Cole o Cloudflare API Token na tela de configuração correspondente do ImgBed e salve.

Depois, use a função relacionada para testar conexão ou capacidade e confirmar que o token está funcionando.

## Boas práticas

- Não coloque o token em repositórios públicos nem em código frontend.
- Restrinja permissões e recursos ao necessário.
- Exclua na Cloudflare tokens que não são mais usados.
- Se houver suspeita de vazamento, revogue e gere um novo token.
