# OCR e reconhecimento de texto

O OCR reconhece texto em imagens, PDFs e documentos Word para facilitar busca e conferência de conteúdo.

## Onde configurar

```text
Configurações do sistema -> Outras configurações -> OCR
```

![Configurações de OCR](../../image/other/ip定位和ocr文字识别.png)

## O que dá para fazer

| Recurso | Descrição |
| --- | --- |
| OCR de imagens | Lê texto em capturas de tela e fotos |
| OCR de PDF | Extrai texto de arquivos PDF |
| OCR de Word | Lê o conteúdo de documentos Word |
| Apoio à busca | Usa o texto reconhecido como informação pesquisável |
| Processamento em lote | Processa arquivos existentes em massa |

![Resultado de OCR](../../image/other/ocr识别截图.png)

## Preparação

Dependendo do serviço de OCR usado, você precisa de uma chave de API ou token. Informe as credenciais conforme a interface.

Se usar serviços externos como PaddleOCR, confirme se as credenciais estão corretas e se há cota disponível.

![Obter token](../../image/other/获取飞浆令牌.png)

## Como usar

1. Ative o OCR.
2. Informe a chave do serviço que vai usar.
3. Salve a configuração.
4. Envie novos arquivos ou execute OCR em arquivos existentes.
5. Confira os resultados no detalhe do arquivo ou pela busca.

![Resultado Word](../../image/other/word识别结果.png)

![Reconhecimento PDF](../../image/other/pdf识别截图.png)

## Dicas

- Imagens pequenas, borradas ou inclinadas reduzem a precisão.
- PDFs e arquivos Word grandes podem demorar mais.
- Se a cota da API acabar, o reconhecimento pode falhar.
- Use OCR como apoio; para informações importantes, confira também o arquivo original.
