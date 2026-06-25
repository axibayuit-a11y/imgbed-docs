# Índice distribuído federado

O índice distribuído federado permite que vários sites ImgBed compartilhem listas de arquivos entre si.

Em termos simples:

- Você pode compartilhar pastas selecionadas do seu site com outras pessoas.
- Você pode entrar em outro nó e sincronizar a lista de arquivos compartilhada desse nó no seu painel administrativo.
- Arquivos federados servem principalmente para navegar, buscar e abrir links. Eles não são reenviados para o seu próprio armazenamento.

## Onde configurar

Abra:

```text
System Settings -> Other Settings -> Federated Distributed Index
```

![Nó local de federação](../../image/other/联盟图/联盟分布式索引本地节点.png)

A página tem três abas:

| Aba | Finalidade |
| --- | --- |
| Nó local | Ativar seu nó, confirmar o domínio público, selecionar pastas compartilhadas e atualizar o índice de saída |
| Nós em que entrei | Gerenciar outros nós ImgBed aos quais você entrou |
| Nós que querem entrar no meu nó | Gerenciar solicitações de outras pessoas que querem entrar no seu nó |

## Configuração inicial

1. Abra `Local Node`.
2. Ative `Enable`.
3. Selecione as pastas que serão compartilhadas em `Sync folders`.
4. Clique em `Update Outbound Index`.
5. Se o ImgBed detectar uma mudança de domínio, confirme que o domínio atual está correto antes de continuar.

Você pode selecionar várias pastas de sincronização.

Se a lista de pastas de sincronização estiver vazia, todas as pastas serão compartilhadas.

## Nó local

### Domínio público

O domínio público é a URL do site que outros nós usam para acessar o seu nó.

O ImgBed detecta isso automaticamente. Você não precisa digitar manualmente. Na primeira vez que atualizar o índice, o ImgBed pedirá que você confirme se a URL de acesso atual é o domínio de produção.

Se você trocar de domínio depois, a atualização do índice pedirá confirmação novamente.

### Pastas de sincronização

As pastas de sincronização definem quais arquivos são compartilhados com nós federados.

Por exemplo, se você selecionar apenas:

```text
/1/
/2/
```

Outros nós só poderão ver arquivos nesses dois diretórios.

### Atualizar índice de saída

Isso atualiza a lista de arquivos que outros nós podem sincronizar a partir de você.

Use quando:

- Você ativar a federação pela primeira vez.
- Você enviar arquivos que deseja compartilhar.
- Você alterar as pastas de sincronização.
- Você alterar o domínio público e precisar confirmá-lo.

## Nós em que entrei

`Nodes I Joined` é onde você gerencia os nós dos quais participa.

![Nós em que entrei](../../image/other/联盟图/我加入的节点.png)

### Solicitar entrada em outro nó

1. Peça ao outro proprietário um link de convite.
2. Cole-o na caixa de entrada.
3. Clique em `Request to Join`.
4. Aguarde o outro proprietário aprovar no painel administrativo dele.

Após a aprovação, o status do nó passa a ser aprovado.

### Atualizar índice de entrada

`Update Inbound Index` sincroniza listas de arquivos dos nós em que você entrou.

Use quando:

- O outro proprietário acabou de aprovar sua solicitação.
- O outro proprietário avisar que o conteúdo compartilhado foi atualizado.
- Você quiser atualizar todas as listas de arquivos federados dos nós em que entrou.

Para atualizar apenas um nó, clique em `Update Index` no cartão desse nó.

![Atualizar índice](../../image/other/联盟图/更新索引.png)

### Cancelar assinatura

Se você não quiser mais sincronizar um nó, clique em `Unsubscribe`.

Após cancelar a assinatura, o índice federado desse nó é removido do seu site local.

## Nós que querem entrar no meu nó

`Nodes Joining Me` é onde você trata solicitações de outras pessoas.

![Nós que querem entrar no meu nó](../../image/other/联盟图/加入我的节点.png)

### Gerar um link de convite

1. Confirme que o nó local está ativado.
2. Clique em `Update Outbound Index` pelo menos uma vez para que o ImgBed confirme o domínio público.
3. Abra `Nodes Joining Me`.
4. Clique em `Reset Invitation Link`.
5. Copie o link de convite e envie ao outro proprietário.

Se o link de convite estiver vazio, normalmente o domínio público ainda não foi confirmado. Volte para `Local Node` e clique em `Update Outbound Index`.

### Tratar solicitações de entrada

Quando alguém envia uma solicitação, ela aparece na lista `Nodes Joining Me`.

| Ação | Significado |
| --- | --- |
| Aprovar | Permite que o outro nó sincronize sua lista de arquivos compartilhada |
| Rejeitar | Recusa a solicitação de entrada |
| Excluir | Remove um registro concluído |
| Verificar status | Verifica se o outro lado ainda mantém essa relação |

Após a aprovação, o outro lado ainda precisa clicar em `Update Inbound Index` antes que seus arquivos compartilhados apareçam lá.

![Aprovar nó convidado](../../image/other/联盟图/邀请节点同意.png)

## Mensagens

Depois que uma relação é aprovada, clique em `Message` no cartão do nó.

As mensagens servem apenas para comunicação sobre a relação federada. Elas não alteram arquivos, tags, diretórios nem permissões.

![Mensagens](../../image/other/联盟图/留言功能.png)

## Ver arquivos federados

Depois que a sincronização terminar, volte à lista de arquivos do painel administrativo.

No topo da página, alterne entre arquivos locais e arquivos federados. Em arquivos federados, você pode navegar pelo conteúdo sincronizado.

Arquivos federados servem principalmente para visualizar, buscar, pré-visualizar e copiar links. Eles não são arquivos locais, então você não pode movê-los, excluí-los, alterar tags nem fazer backup deles a partir do seu próprio site.

![Arquivos federados no painel administrativo](../../image/other/联盟图/联盟管理显示效果图.png)

## Perguntas frequentes

### Por que o sistema pede uma nova solicitação por falta de registro de relação?

Isso geralmente significa que o outro lado removeu você e apagou o registro, então a relação não pode mais ser encontrada. Envie uma nova solicitação de entrada.

![Solicitar novamente quando não há registro de relação](../../image/other/联盟图/无关系记录重新申请.png)

### Por que não vejo arquivos depois de entrar?

Verifique:

1. O outro proprietário aprovou sua solicitação.
2. O outro proprietário clicou em `Update Outbound Index`.
3. Você clicou em `Update Inbound Index`.
4. As pastas de sincronização do outro proprietário incluem os diretórios que ele quer compartilhar.

### O que fazer quando uma mudança de domínio é detectada?

Se você está abrindo o painel administrativo pelo domínio de produção, confirme e continue.

Se estiver usando um endereço temporário, cancele, reabra o painel administrativo usando o domínio de produção e tente novamente.

### O que significa uma lista vazia de pastas de sincronização?

Uma lista vazia de pastas de sincronização significa que todas as pastas são compartilhadas.

Para compartilhar apenas alguns diretórios, selecione essas pastas manualmente.

### Diferença entre atualizações de índice de saída e de entrada

| Botão | Significado simples |
| --- | --- |
| Update Outbound Index | Atualiza o que outras pessoas podem sincronizar de mim |
| Update Inbound Index | Atualiza o que eu sincronizei de outras pessoas |
