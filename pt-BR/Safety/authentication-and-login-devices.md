# Autenticação e gerenciamento de dispositivos de login

`Gerenciamento de autenticação` e `Gerenciamento de dispositivos de login` protegem o painel administrativo do ImgBed, a entrada pública de upload e o acesso WebDAV.

Use esta página para definir credenciais de acesso, revisar dispositivos conectados e revogar sessões antigas quando necessário.

## Onde configurar

Abra o painel administrativo e acesse:

```text
System Settings -> Security Settings
```

A página contém duas áreas principais:

- Gerenciamento de autenticação
- Gerenciamento de dispositivos de login

![Gerenciamento de autenticação](../../image/Safety/认证管理界面.png)

## O que o gerenciamento de autenticação faz

O gerenciamento de autenticação armazena credenciais de acesso.

Há dois tipos:

- Autenticação do lado do usuário
- Autenticação do lado do administrador

## Autenticação do lado do usuário

A autenticação do lado do usuário é a senha de upload.

Depois que uma senha de upload é definida, visitantes comuns precisam informá-la antes de usar a página de upload. Isso é útil quando você não quer deixar a página pública de upload aberta para todos.

![Página de login do usuário](../../image/Safety/用户端登录界面.png)

### Definir a senha de upload

Quando uma senha de upload está configurada:

- Visitantes precisam informar a senha antes de usar a página de upload.
- O upload só fica disponível depois que a senha é aceita.
- Se as sessões de dispositivo do lado do usuário estiverem habilitadas, o ImgBed registra esse dispositivo do lado do usuário.

Alterar a senha de upload invalida sessões antigas do lado do usuário. Visitantes precisam informar a nova senha novamente.

## Autenticação do lado do administrador

A autenticação do lado do administrador usa nome de usuário e senha de administrador.

Isso protege o painel administrativo. Em produção, você deve sempre configurá-la.

![Página de login do administrador](../../image/Safety/管理端登录界面.png)

### Definir credenciais de administrador

Quando um nome de usuário e uma senha de administrador estão configurados:

- Abrir o painel administrativo exige login.
- Um login bem-sucedido cria um registro de dispositivo do administrador.
- Você pode revisar, limpar ou forçar dispositivos a ficarem offline em Gerenciamento de dispositivos de login.

Alterar o nome de usuário ou a senha do administrador invalida sessões antigas do administrador. É necessário entrar novamente.

## O que o gerenciamento de dispositivos de login faz

O gerenciamento de dispositivos de login mostra dispositivos que fizeram login.

Ele ajuda a verificar:

- Quais dispositivos acessaram o painel administrativo.
- Quais dispositivos acessaram a página de upload do lado do usuário.
- Quais clientes WebDAV se conectaram.
- Se uma sessão de dispositivo ainda é válida.
- Se dispositivos antigos devem ser forçados a ficar offline.

A página tem três abas:

- Administrador
- Usuário
- WebDAV

## Segurança global de cookies

No topo de Gerenciamento de dispositivos de login, você pode configurar o comportamento global dos cookies.

### Duração do cookie do usuário

Controla por quantos dias um login do lado do usuário pode permanecer ativo.

Por exemplo, se você definir 14 dias, visitantes normalmente não precisarão informar a senha de upload novamente durante 14 dias.

### Duração do cookie do administrador

Controla por quantos dias um login de administrador pode permanecer ativo.

Por exemplo, se você definir 14 dias, administradores normalmente não precisarão entrar novamente durante 14 dias.

### Modo seguro

Quando o modo seguro está habilitado, navegadores enviam cookies de login apenas por HTTPS.

Habilite em sites HTTPS de produção. Não habilite em testes HTTP locais, ou você pode ver o comportamento "login feito com sucesso, mas ao atualizar sou desconectado".

## Dispositivos de login do administrador

A aba Administrador mostra dispositivos que fizeram login no painel administrativo.

Registros de dispositivo aparecem apenas depois que as credenciais de administrador são configuradas e o painel administrativo é acessado por login.

Cada cartão de dispositivo pode mostrar:

- Informações de dispositivo e navegador
- IP do primeiro login
- IP da última atividade
- Horário do login
- Horário da última atividade
- Horário de expiração
- Status atual

Se você vir um dispositivo desconhecido, use `Forçar offline` para invalidá-lo.

## Limpar dispositivos antigos

`Limpar dispositivos antigos` remove em lote registros de login antigos na aba atual.

Use quando suspeitar que sessões antigas ainda possam estar ativas em outros dispositivos.

## Forçar offline

`Forçar offline` invalida uma sessão de dispositivo.

Depois que um dispositivo é forçado a ficar offline:

- Dispositivos de administrador precisam entrar novamente.
- Dispositivos do lado do usuário precisam informar a senha de upload novamente.
- Clientes WebDAV precisam autenticar novamente.

Dispositivos expirados ou inválidos também podem ser removidos.

## Sair do dispositivo atual

O cartão do dispositivo atual é marcado como `Dispositivo atual`.

Depois de sair do dispositivo atual:

- A sessão atual do administrador é encerrada.
- A sessão atual do lado do usuário é encerrada.

Você precisa entrar novamente antes de continuar usando essa área.
