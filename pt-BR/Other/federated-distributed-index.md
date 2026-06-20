# Índice distribuído federado

O índice distribuído federado permite que vários sites ImgBed compartilhem listas de arquivos entre si.

Em termos simples:

- Você pode compartilhar algumas pastas do seu site com outras pessoas.
- Pode entrar no nó de outra pessoa e sincronizar a lista compartilhada dela no seu painel.
- Arquivos federados servem para navegar, buscar, pré-visualizar e copiar links. Eles não são reenviados para o seu armazenamento.

## Onde configurar

```text
Configurações do sistema -> Outras configurações -> Índice distribuído federado
```

![Nó local](../../image/other/联盟图/联盟分布式索引本地节点.png)

A página tem três abas:

| Aba | Uso |
| --- | --- |
| Nó local | Configurar seu nó, domínio público, pastas compartilhadas e índice de saída |
| Nós que entrei | Gerenciar nós de outros sites que você acompanha |
| Solicitações ao meu nó | Gerenciar pedidos de outras pessoas para entrar no seu nó |

## Configuração inicial

1. Abra `Nó local`.
2. Ative `Habilitar`.
3. Escolha as pastas em `Pastas de sincronização`.
4. Clique em `Atualizar índice de saída`.
5. Se o ImgBed detectar mudança de domínio, confirme se o domínio atual é o domínio real de produção.

Você pode escolher várias pastas. Se a lista ficar vazia, todas as pastas serão compartilhadas.

## Nó local

### Domínio público

O domínio público é o endereço usado por outros nós para acessar seu site.

O ImgBed detecta isso automaticamente. Normalmente você não precisa digitar nada. Na primeira atualização do índice, ou após troca de domínio, ele pede confirmação.

### Pastas de sincronização

Essas pastas definem quais arquivos serão compartilhados.

Exemplo:

```text
/1/
/2/
```

Nesse caso, outros nós verão apenas arquivos dentro desses dois diretórios.

### Atualizar índice de saída

Atualiza a lista de arquivos que outros nós podem sincronizar a partir do seu site.

Use quando:

- Ativar a federação pela primeira vez.
- Enviar novos arquivos que deseja compartilhar.
- Alterar as pastas compartilhadas.
- Trocar o domínio público e precisar confirmar novamente.

## Entrar em outros nós

`Nós que entrei` é onde você acompanha nós de outros sites ImgBed.

![Nós que entrei](../../image/other/联盟图/我加入的节点.png)

1. Peça ao dono do outro nó um link de convite.
2. Cole o link no campo.
3. Clique em `Solicitar entrada`.
4. Aguarde a aprovação no painel da outra pessoa.

Depois da aprovação, use `Atualizar índice de entrada` para sincronizar os arquivos compartilhados.

Se quiser atualizar apenas um nó, use `Atualizar índice` no cartão desse nó.

![Atualizar índice](../../image/other/联盟图/更新索引.png)

## Gerenciar solicitações ao seu nó

`Solicitações ao meu nó` mostra quem quer entrar no seu nó.

![Solicitações ao meu nó](../../image/other/联盟图/加入我的节点.png)

Para gerar um convite, habilite o nó local, execute `Atualizar índice de saída` ao menos uma vez para confirmar o domínio público e clique em `Redefinir link de convite`.

Ao receber uma solicitação, você pode escolher:

| Ação | Resultado |
| --- | --- |
| Aprovar | Permite que a outra parte sincronize sua lista compartilhada |
| Recusar | Não permite a entrada |
| Excluir | Remove um registro encerrado |
| Verificar status | Confere se a outra parte ainda mantém a relação |

Depois da aprovação, a outra parte ainda precisa atualizar o índice de entrada para ver seus arquivos.

![Aprovar nó](../../image/other/联盟图/邀请节点同意.png)

## Mensagens

Quando a relação já estiver aprovada, é possível usar `Mensagem` no cartão do nó.

As mensagens servem apenas para comunicação sobre a relação federada. Elas não alteram arquivos, tags, diretórios nem permissões.

![Mensagens](../../image/other/联盟图/留言功能.png)

## Ver arquivos federados

Depois da sincronização, volte à lista de arquivos do painel. No topo, alterne entre arquivos locais e arquivos federados.

Arquivos federados não são locais: você pode visualizar, buscar, pré-visualizar e copiar links, mas não pode mover, excluir, alterar tags ou fazer backup deles a partir do seu site.

![Vista no painel](../../image/other/联盟图/联盟管理显示效果图.png)

## Perguntas comuns

### Aparece que não existe relação

Geralmente significa que a outra parte removeu seu registro. Nesse caso, envie uma nova solicitação.

![Solicitar novamente](../../image/other/联盟图/无关系记录重新申请.png)

### Entrei no nó, mas não vejo arquivos

Confira:

1. A outra parte aprovou sua solicitação.
2. A outra parte atualizou o índice de saída.
3. Você atualizou o índice de entrada.
4. As pastas sincronizadas da outra parte incluem os diretórios compartilhados.
