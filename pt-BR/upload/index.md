# Configurações de upload

As configurações de upload conectam o ImgBed aos seus próprios canais de armazenamento. Depois que um canal é configurado, imagens e arquivos enviados são salvos no serviço escolhido. O ImgBed cuida dos links de acesso, registros de arquivos, prévias, galeria pública, API de imagem aleatória, acesso WebDAV e fluxos relacionados.

Cada pessoa pode preferir um canal diferente. Para começar de forma simples, Telegram, Discord ou GitHub Releases são boas opções. Se capacidade, velocidade e estabilidade de longo prazo forem mais importantes, considere Cloudflare R2, S3, OneDrive, Google Drive, Dropbox, Yandex, pCloud ou seu próprio serviço WebDAV.

## Antes de começar

> Antes de usar o ImgBed pela primeira vez, você deve abrir a página de inicialização e clicar em "Reconstruir índice" para completar as tabelas D1 necessárias e evitar erros nas próximas funções.
>
> ![Clicar em Reconstruir índice durante a inicialização](../../image/初始化点击重建索引.png)

- Prepare a conta de armazenamento ou as credenciais de API que você pretende usar.
- Verifique se o domínio do ImgBed está acessível, pois canais baseados em OAuth precisam de URLs de callback.
- Depois de adicionar um canal, envie primeiro uma imagem de teste para confirmar que o arquivo é salvo e aberto corretamente.

## Diretório de canais

- [Telegram](./telegram.md)
- [Cloudflare R2](./cloudflare-r2.md)
- [S3](./s3.md)
- [WebDAV](./webdav.md)
- [Discord](./discord.md)
- [Hugging Face](./huggingface.md)
- [GitHub Releases](./github-releases.md)
- [GitLab Packages](./gitlab-packages.md)
- [OneDrive](./onedrive.md)
- [Google Drive](./google-drive.md)
- [Dropbox](./dropbox.md)
- [Yandex](./yandex.md)
- [pCloud](./pcloud.md)

## O que este capítulo cobre

- O que cada canal precisa antes da configuração.
- Como criar apps, copiar chaves ou autorizar tokens em plataformas externas.
- Como preencher a configuração no ImgBed e confirmar que os uploads funcionam.
