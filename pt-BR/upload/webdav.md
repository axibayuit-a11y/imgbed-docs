# Adicionar canal WebDAV

O canal WebDAV salva arquivos em um NAS, disco em nuvem ou serviço compatível com WebDAV.

## Quando usar

- Seu NAS ou serviço em nuvem oferece uma URL WebDAV.
- Você quer salvar imagens em um diretório WebDAV próprio.
- Prefere guardar credenciais na tabela D1 `upload_channels` em vez de expor no frontend.

## O que preparar

| Item | Uso |
| --- | --- |
| WebDAV Endpoint | Por exemplo `https://nas.example.com/dav` |
| Usuário | Login WebDAV |
| Senha | Senha ou senha de aplicativo |
| Modo de autenticação | Normalmente `Basic`; use `Digest` se o servidor exigir |
| Diretório | Opcional, padrão `imgbed` |

## Usar senha de aplicativo

Se o serviço permitir senha de aplicativo, prefira ela à senha principal da conta.

![Criar senha de aplicativo](../../image/upload/webdav/创建应用密码.png)

Guarde a senha ao criar, pois ela pode aparecer apenas uma vez.

![Guardar senha](../../image/upload/webdav/记住新应用程序密码.png)

## Preencher no ImgBed

Em Configurações de upload, escolha `WebDAV`.

| Campo | Valor |
| --- | --- |
| Nome do canal | Por exemplo `NAS` ou `Koofr` |
| Endpoint | URL WebDAV completa com `https://` |
| Usuário | Conta WebDAV |
| Senha | Senha ou senha de aplicativo |
| Autenticação | Comece com `Basic` |
| Diretório | Opcional, normalmente `imgbed` |

![Configuração WebDAV](../../image/upload/webdav/填写配置.png)

## Arquivos grandes

O canal WebDAV usa upload em partes para arquivos grandes.

| Tamanho | Método | Forma remota |
| --- | --- | --- |
| Até 64 MiB | Upload normal | Um arquivo completo |
| Acima de 64 MiB | Upload em partes | Pasta de partes com vários chunks |

O servidor WebDAV não precisa suportar `partial update` nem escrita por deslocamento. O ImgBed salva um manifesto de partes e lê na ordem quando o arquivo é solicitado.

A URL do arquivo não muda; o usuário continua usando o link `/file/...`.

## Verificação

| Ponto | Estado esperado |
| --- | --- |
| Cartão do canal | Aparece depois de salvar |
| Arquivo pequeno | Aparece no diretório WebDAV |
| Arquivo grande | Cria pasta de partes e chunks |
| Capacidade | Se o servidor suportar, mostra uso e total |

![Consulta de capacidade](../../image/upload/webdav/查询额度成功.png)

Se a consulta de capacidade falhar, mas uploads pequenos funcionarem, o canal ainda pode ser válido.

## Fluxo rápido

```text
Preparar Endpoint, usuário e senha
-> Abrir Configurações de upload
-> Adicionar canal
-> Escolher WebDAV
-> Preencher Endpoint / usuário / senha
-> Usar Basic no início
-> Salvar
-> Consultar capacidade
-> Enviar arquivo de teste
```
