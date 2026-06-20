# Configuração de canais de upload

No ImgBed, cada destino de armazenamento é configurado como um canal. Você decide onde salvar imagens, vídeos, áudios e outros arquivos pela configuração de upload.

## Onde configurar

```text
Configurações do sistema -> Configurações de upload
```

Ali você pode adicionar canais, habilitar ou desabilitar, definir limite de capacidade, adicionar observações e testar conexões.

## Canais disponíveis

| Canal | Uso principal |
| --- | --- |
| Cloudflare R2 | Armazenamento de objetos na Cloudflare |
| S3 | AWS S3, Backblaze B2, MinIO e serviços compatíveis |
| Google Drive | Salvar no Google Drive |
| OneDrive | Salvar no Microsoft OneDrive |
| Dropbox | Salvar no Dropbox |
| pCloud | Salvar no pCloud |
| WebDAV | NAS, discos em nuvem ou serviços compatíveis com WebDAV |
| Telegram | Usar um canal do Telegram como destino |
| Discord | Usar um canal do Discord como destino |
| GitHub Releases | Salvar em Release Assets do GitHub |
| GitLab Packages | Salvar no Generic Package Registry do GitLab |
| Hugging Face | Salvar em um repositório do Hugging Face |
| Yandex | Salvar no Yandex Disk |

## Antes de adicionar

| Ponto | O que conferir |
| --- | --- |
| Conta de armazenamento | A conta onde os arquivos serão salvos |
| API Key / Token | Credenciais exigidas por cada canal |
| Diretório de armazenamento | Normalmente `imgbed`, salvo se você quiser outra pasta |
| Limite de capacidade | Se o canal deve parar de receber arquivos ao atingir certo uso |
| Domínio público | Se você vai usar CDN ou domínio personalizado |

## Depois de salvar

1. Confira se o cartão do canal aparece.
2. Verifique se o canal está habilitado.
3. Veja se credenciais e diretório foram salvos corretamente.
4. Execute consulta de capacidade se o canal oferecer isso.
5. Envie uma imagem de teste e abra o link retornado.

Se falhar, revise primeiro credenciais, permissões, diretório de destino e limites da API do provedor.
