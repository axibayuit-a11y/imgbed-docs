# Limite de frequência de usuários

O limite de frequência controla o uso quando um IP ou usuário realiza muitas ações em pouco tempo.

Em sites com upload público, esse recurso ajuda a reduzir spam, abuso e envios em massa indesejados.

## Onde configurar

```text
Configurações do sistema -> Segurança -> Limite de frequência
```

![Limite de frequência](../../image/other/用户频控截图.png)

## Principais opções

| Opção | Descrição |
| --- | --- |
| Habilitar | Liga ou desliga o limite |
| Janela de tempo | Período usado para contar ações |
| Número máximo | Quantidade máxima permitida dentro da janela |
| Ação alvo | Upload ou outra operação a limitar |
| Tempo de bloqueio | Duração do bloqueio após exceder o limite |

## Exemplo razoável

Para upload público, comece com uma configuração moderada e ajuste conforme o uso real.

```text
30 ações a cada 10 minutos
bloqueio de 30 minutos ao exceder
```

Isso costuma permitir uso normal e frear padrões claramente anormais.

## Aviso de limite

Quando o limite é excedido, o usuário vê um aviso de que a ação foi recusada.

![Aviso de erros frequentes](../../image/other/频繁报错提示.png)

## Dicas

- Limite rígido demais pode bloquear uploads legítimos em lote.
- Em sites públicos, evite deixar upload totalmente sem limite.
- Combine com geolocalização por IP e gerenciamento de usuários para investigar abuso.
- Se houver pico temporário esperado, você pode afrouxar o limite por um período.
