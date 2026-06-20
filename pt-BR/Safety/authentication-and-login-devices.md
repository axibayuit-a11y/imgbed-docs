# Gerenciamento de autenticação e dispositivos conectados

O gerenciamento de autenticação permite revisar logins, sessões ativas e dispositivos conectados ao painel ou às páginas de usuário.

## Login de administrador

O administrador entra pela tela de login do painel para gerenciar arquivos e configurações.

![Login de administrador](../../image/Safety/管理端登录界面.png)

A conta administradora tem permissões altas. Mantenha as credenciais bem protegidas.

## Login de usuário

Também existe uma tela de login para usuários.

![Login de usuário](../../image/Safety/用户端登录界面.png)

Se você usa upload público ou acesso limitado, o login de usuário ajuda a saber quem realizou cada ação.

## Tela de autenticação

A tela de gerenciamento mostra sessões e dispositivos conectados.

![Gerenciamento de autenticação](../../image/Safety/认证管理界面.png)

## O que revisar nos dispositivos

| Campo | Descrição |
| --- | --- |
| Dispositivo conectado | Dispositivos com sessão ativa |
| IP / localização | Referência da origem do acesso |
| Último acesso | Indica se o dispositivo ainda está em uso |
| Revogar | Encerra sessões antigas ou suspeitas |

## Se notar algo suspeito

1. Revogue a sessão do dispositivo.
2. Troque senha de administrador e tokens relacionados.
3. Revise credenciais da Cloudflare, GitHub e canais de armazenamento.
4. Gere novos API Tokens se necessário.

## Dicas de operação

- Não deixe sessões abertas em computadores compartilhados.
- Mantenha poucas contas com permissões de administrador.
- Revise periodicamente os dispositivos conectados.
- Remova sessões antigas ou desconhecidas.
