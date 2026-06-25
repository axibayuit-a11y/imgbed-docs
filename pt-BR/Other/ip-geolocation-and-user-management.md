# Geolocalização por IP e gerenciamento de usuários

A geolocalização por IP transforma endereços IP em registros de quem fez upload, dispositivos de login e logs semelhantes em localizações aproximadas.

Depois de configurada, o painel administrativo pode mostrar com mais clareza as origens de uploads e acessos. O gerenciamento de usuários também permite bloquear ou restaurar o acesso de upload para endereços IP suspeitos.

## Onde configurar

Abra:

```text
System Settings -> Other Settings -> IP Geolocation
```

![Geolocalização por IP](../../image/other/ip定位/ip定位.png)

## Configurações disponíveis

O fluxo mais novo de geolocalização por IP aceita várias fontes, em vez de depender de um único serviço de mapas.

| Configuração | Finalidade |
| --- | --- |
| Idioma da geolocalização por IP | Escolhe o idioma de exibição, como inglês, chinês simplificado, japonês, francês e outros. |
| MaxMind Account ID | ID da conta MaxMind para o MaxMind GeoLite Web Service. |
| MaxMind License Key | Chave de licença da MaxMind. |
| Tencent Map Key | Chave do Tencent Location Service. Útil para endereços chineses e IPs da China continental. |
| ipapi Key | Chave APILayer ipapi. Oferece suporte a geolocalização por IP multilíngue. |

Preencha apenas os serviços de que você precisa. Não é necessário configurar todos os campos.

Se nenhuma chave for fornecida, o ImgBed ainda tentará usar fontes gratuitas integradas, mas estabilidade, suporte a idiomas e precisão podem ser menores do que em um serviço configurado por você.

## Escolhas recomendadas

Se você precisa principalmente de endereços chineses:

1. Defina o idioma da geolocalização por IP como chinês simplificado.
2. Configure Tencent Map Key.
3. Opcionalmente, adicione MaxMind ou ipapi como fontes de reserva.

Se você precisa principalmente de endereços em inglês ou multilíngues:

1. Escolha o idioma necessário.
2. Configure MaxMind Account ID e License Key.
3. Adicione um ipapi Key se precisar de melhores resultados multilíngues.

## Configuração do MaxMind

O MaxMind precisa de:

```text
MaxMind Account ID
MaxMind License Key
```

Encontre o ID da conta no painel da MaxMind e gere uma License Key na página License Keys.

![Configuração de chave MaxMind](../../image/other/ip定位/maxmind的key配置.png)

Depois de gerar, cole o Account ID e a License Key no ImgBed e salve.

O plano gratuito da MaxMind é adequado para uso diário, mas tem limites de requisições. Se a cota for excedida, o ImgBed continuará tentando outras fontes disponíveis.

## Configuração do ipapi

O ipapi usa uma chave de API da APILayer.

Abra o console do ipapi e copie a API Key exibida nele.

![Configuração do ipapi](../../image/other/ip定位/ipapi配置.png)

Cole-a no campo `ipapi Key` no ImgBed e salve.

O ipapi oferece suporte a geolocalização por IP multilíngue e é útil quando você quer mostrar endereços em um idioma selecionado. O plano gratuito também tem limites de requisições. Se a cota acabar, o ImgBed continuará tentando outras fontes disponíveis.

## Configuração do Tencent Map Key

Tencent Map Key é útil para endereços chineses, especialmente IPs da China continental.

Ao criar uma chave no Tencent Location Service, ative:

```text
WebServiceAPI
```

Depois de criar, cole a chave em `Tencent Map Key` e salve.

Se você só precisa de geolocalização básica de IPs chineses, Tencent Map Key é suficiente para começar.

## O que verificar no gerenciamento de usuários

O gerenciamento de usuários fica disponível na parte superior do painel administrativo.

![Gerenciamento de usuários](../../image/other/用户管理显示.png)

O gerenciamento de usuários mostra a atividade de upload por IP:

| Campo | Descrição |
| --- | --- |
| Origem do IP | IP de origem de quem fez o upload. |
| Endereço | Localização aproximada resolvida a partir do IP. |
| Tamanho total de upload | Tamanho total dos arquivos enviados por esse IP. |
| Contagem de uploads | Número de uploads desse IP. |
| Upload permitido | Ligado significa que uploads são permitidos. Desligado significa que uploads são bloqueados. |

Clique na seta à esquerda para expandir a lista de arquivos enviados por esse IP.

A lista de arquivos mostra nome do arquivo, prévia, tamanho do arquivo, resultado de moderação, status do arquivo e horário de upload. Quando os uploads parecerem suspeitos, expanda primeiro o IP, revise os arquivos e então decida se deve bloquear novos uploads.

Se um IP for suspeito, desative `Upload allowed`. Uploads futuros desse IP serão bloqueados.

## Busca, ordenação e filtros avançados

Na parte superior do gerenciamento de usuários, busque por origem de IP ou endereço.

Ordene por horário, contagem de uploads ou tamanho total de upload para encontrar usuários que fizeram upload recentemente, usuários com alta frequência de uploads ou IPs com alto uso.

Para uma investigação mais profunda, abra os filtros avançados.

![Filtros avançados](../../image/other/用户管理高级筛选.png)

Os filtros avançados aceitam:

| Filtro | Uso |
| --- | --- |
| Intervalo de tempo | Mostra IPs que enviaram arquivos durante um período selecionado. |
| Status de acesso | Filtra por estados normal, bloqueado e semelhantes. |
| Lista de permissão/bloqueio | Filtra por lista de permissões, lista de bloqueio ou não definido. |
| Tipo de arquivo | Mostra IPs que enviaram imagens, vídeos, áudio, documentos, código ou outros arquivos. |
| Tamanho do arquivo | Filtra por faixa de tamanho dos arquivos enviados. |
| Classificação etária | Filtra por não definido, General, R12+, R16+, R18 e classificações semelhantes. |
| Status do arquivo | Filtra pelo status atual do arquivo para investigar arquivos anormais. |

Clique em `Apply Filters` para aplicar. Use `Reset` para voltar a todos os dados.

## Visualização móvel

No celular, o gerenciamento de usuários muda para layout de cartões.

![Gerenciamento de usuários no celular](../../image/other/手机端显示用户管理效果.png)

Cada cartão mostra IP, endereço, tamanho total de upload, contagem de uploads e o seletor de upload permitido. Você pode gerenciar usuários sem rolar uma tabela horizontalmente.

## Se a localização parecer errada

A geolocalização por IP é aproximada. Ela não é um endereço de rua preciso.

Se o usuário estiver atrás de proxy, data center, servidor em nuvem ou rede transfronteiriça, a localização exibida pode ser diferente da localização real.

Use este recurso para entender a origem aproximada, encontrar uploads anormais e apoiar decisões de bloqueio. Não trate isso como rastreamento preciso.

## Casos comuns

| Caso | Significado |
| --- | --- |
| Endereço vazio | O IP talvez ainda não tenha sido resolvido, ou a fonte atual pode estar temporariamente indisponível. |
| Idioma do endereço incorreto | Verifique o idioma da geolocalização por IP e se uma fonte compatível com esse idioma está configurada. |
| Endereço mostra um data center | Muitos proxies, servidores em nuvem e rastreadores aparecem como endereços de data center ou ISP. |
| Contagem de uploads alta | Revise esse IP com cuidado e bloqueie uploads se necessário. |
| Tamanho total de upload grande | Ordene ou filtre, expanda o IP e inspecione arquivos específicos. |
| Precisa restaurar após bloquear | Ative `Upload allowed` novamente. |

## Fluxo rápido

```text
Open IP Geolocation in Other Settings
-> Choose IP geolocation language
-> Fill MaxMind, Tencent Map, or ipapi credentials as needed
-> Save settings
-> Open User Management
-> Review IP source, address, total upload size, and upload count
-> Use search, sort, or advanced filters to find abnormal IPs
-> Allow or block uploads as needed
```
