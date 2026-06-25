# OCR

O OCR extrai texto de imagens, digitalizações e capturas de tela de documentos.

Após o reconhecimento, você pode copiar o resultado, exportá-lo como `Markdown`, `PDF` ou `Word`, ou agrupar vários formatos para download.

## O que o OCR pode fazer

| Recurso | Descrição |
| --- | --- |
| Reconhecimento de texto em imagens | Extrai texto de imagens, capturas de tela e digitalizações. |
| Reconhecimento de layout de documentos | Mais adequado para tabelas, fórmulas, carimbos e layouts mistos de texto e imagem. |
| Vários serviços | Compatível com Baidu PaddleOCR, Microsoft Azure Vision e Google Vision. |
| Copiar resultados | Copia o texto reconhecido após o processamento. |
| Exportar arquivos | Exporta `Markdown`, `PDF` e `Word`. |
| Empacotamento em lote | Depois de reconhecer vários arquivos, baixa os resultados como um pacote. |

## Configure Primeiro os Serviços de OCR

Abra:

```text
System Settings -> Other Settings -> OCR
```

![Geolocalização de IP e OCR](../../image/other/ip定位和ocr文字识别.png)

Preencha as credenciais dos serviços que deseja usar:

| Serviço | O que informar | Melhor para |
| --- | --- | --- |
| Baidu PaddleOCR | `PaddleOCR Token` | Primeira opção recomendada. Bom para documentos, imagens, tabelas e layouts mistos. |
| Microsoft Azure Vision | `Azure Vision Endpoint` e `Azure Vision API Key` | Útil se você já usa serviços em nuvem da Microsoft. |
| Google Vision | `Google Vision API Key`. O `JSON` da conta de serviço é usado apenas para consulta de cota. | Útil se você usa serviços do Google Cloud. |

Salve depois de preencher as credenciais.

Você pode configurar apenas um serviço para o teste inicial. Não é necessário configurar os três.

## Configuração do Google Vision

A configuração do Google tem duas partes:

| Objetivo | Requisito |
| --- | --- |
| Usar OCR | Ative `Cloud Vision API` e crie uma `API Key`. |
| Consultar uso | Crie uma conta de serviço, conceda `Monitoring Viewer` e baixe o `JSON` da conta de serviço. |

![Chave de API e conta de serviço do Google](../../image/other/谷歌api秘钥和服务账号截图.png)

### Usar o Google para OCR

1. Abra o Google Cloud Console.
2. Acesse `APIs & Services`.
3. Abra `Library`, procure `Cloud Vision API` e ative-a.
4. Volte para `Credentials`.
5. Crie uma `API Key`.
6. Abra a API Key e copie-a.
7. Cole-a em `Google Vision API Key` no ImgBed.
8. Salve.

Depois disso, você poderá escolher Google Vision na caixa de diálogo de OCR.

### Consultar uso do Google

A consulta de cota não é necessária para o reconhecimento.

Ela apenas mostra aproximadamente quantas chamadas ao Google Vision foram usadas nos últimos 30 dias.

1. No Google Cloud Console, abra `IAM & Admin`.
2. Abra `Service Accounts`.
3. Crie uma conta de serviço, como `vision-monitor`.
4. Conceda a ela a função `Monitoring Viewer`.
5. Abra os detalhes da conta de serviço e crie uma chave.
6. Escolha `JSON`.
7. Baixe o arquivo JSON gerado.
8. Volte ao ImgBed e importe-o no `JSON` da conta de serviço (opcional).
9. Depois que a importação for bem-sucedida, clique na consulta de cota.

Após a importação, o ImgBed mostra o nome do projeto ao qual a conta de serviço pertence. Ao consultar o uso, o ImgBed lê os dados de monitoramento do Google e mostra a contagem de chamadas deste mês.

Em resumo:

| Item | Finalidade |
| --- | --- |
| `Google Vision API Key` | Executa o reconhecimento OCR. |
| `JSON` da conta de serviço | Consulta quantas chamadas ao Google Vision foram usadas. |
| Função `Monitoring Viewer` | Permite que a conta de serviço leia dados de uso. |

## Obter um token do Baidu PaddleOCR

O Baidu PaddleOCR exige um token de acesso.

![Obter token do PaddleOCR](../../image/other/获取飞浆令牌.png)

Abra a janela de chamada `API` na página do Baidu PaddleOCR, clique para obter um token e copie-o.

Volte ao ImgBed, cole-o em `PaddleOCR Token` e salve.

## Iniciar o reconhecimento

No gerenciamento de arquivos, selecione uma imagem ou captura de tela de documento e clique em `OCR`.

![Reconhecimento OCR](../../image/other/ocr识别截图.png)

Na caixa de diálogo, escolha o serviço e o modelo de reconhecimento.

Opções comuns de modelo do PaddleOCR:

| Modelo | Melhor para |
| --- | --- |
| `PP-StructureV3` | Padrão recomendado. Bom para documentos, tabelas, fórmulas, carimbos e layouts mistos. |
| `PP-OCRv5` | Imagens simples, texto comum e reconhecimento leve. |
| `PaddleOCR-VL` | Conteúdo multilíngue, imagens complexas e conteúdo semelhante a gráficos. |
| `PaddleOCR-VL-1.5` | Páginas de documentos mais complexas e recuperação de layout. |

Se estiver em dúvida, comece com `PP-StructureV3`.

## Opções avançadas

| Opção | Descrição |
| --- | --- |
| Correção de orientação | Use quando a imagem estiver girada ou inclinada. |
| Nivelamento de documento | Use para documentos fotografados com curvatura ou inclinação. |
| Detecção de layout | Use quando quiser preservar títulos, parágrafos, tabelas e a estrutura de imagens. |
| Reconhecimento de gráficos | Use quando a imagem contiver gráficos ou estruturas complexas. |
| Melhorar `Markdown` | Torna o Markdown exportado mais fácil de ler. |

Para capturas de tela comuns, mantenha poucas opções ativadas. Para digitalizações de documentos, ative mais opções relacionadas a documentos.

## Ver resultados

Depois que o reconhecimento terminar, a caixa de diálogo mostra o resultado.

Você pode copiá-lo diretamente ou escolher formatos de exportação.

![Reconhecimento de PDF](../../image/other/pdf识别截图.png)

Para páginas de documentos, o `PDF` exportado pode preservar a aparência da página e manter o texto pesquisável. Isso é útil para arquivar digitalizações e encontrar conteúdo depois.

## Escolher um formato de exportação

| Formato | Melhor para |
| --- | --- |
| `Markdown (.md)` | Notas, sistemas de documentação e edição posterior. |
| `PDF (.pdf)` | Preservar a aparência da página e resultados de documentos digitalizados. |
| `Word (.docx)` | Continuar editando o layout, modificar texto e repassar para outras pessoas. |
| Exportar tudo | Salva vários formatos e a imagem original, adequado para arquivamentos importantes. |

Se você precisar apenas do texto, exporte Markdown.

Se precisar preservar a aparência da página, use PDF ou Word.

## Saída do Word

Documentos Word exportados podem ser abertos e editados em software de escritório.

![Resultado do Word](../../image/other/word识别结果.png)

Alguns documentos incluem imagens reconhecidas, títulos e parágrafos na saída do Word.

A qualidade do reconhecimento depende da nitidez da imagem original, da escolha do modelo e da complexidade do documento.

## Melhores tipos de arquivo para OCR

| Tipo de arquivo | Recomendação |
| --- | --- |
| Capturas de tela nítidas | Reconheça diretamente. |
| Digitalizações | Prefira `PP-StructureV3`. |
| Documentos fotografados | Ative correção de orientação e nivelamento de documento. |
| Tabelas, fórmulas, carimbos | Prefira modelos estruturados. |
| Imagens simples com texto curto | `PP-OCRv5` geralmente é suficiente. |

Imagens mais nítidas, com texto mais alinhado, normalmente produzem resultados melhores.

## Casos comuns

| Caso | Significado |
| --- | --- |
| O reconhecimento falha | Verifique se o token ou a chave do serviço foi salvo. |
| O reconhecimento está lento | Documentos complexos e imagens grandes levam mais tempo. |
| A tabela está incompleta | Tente um modelo estruturado. |
| O texto tem erros | Desfoque, reflexos e inclinação aumentam erros de reconhecimento. Tente uma imagem mais nítida. |
| A saída do Word contém muitas imagens | Modelos estruturados podem preservar algumas imagens reconhecidas. Isso é normal. |

### A consulta de cota do Google falha

Verifique:

1. O `JSON` da conta de serviço foi importado.
2. A conta de serviço tem a função `Monitoring Viewer`.
3. `Cloud Vision API` está ativada para o projeto.

Se você só precisar de OCR, e não da consulta de uso, pode ignorar o JSON da conta de serviço e preencher apenas `Google Vision API Key`.

## Fluxo rápido

```text
Open System Settings
-> Open Other Settings
-> Fill OCR service credentials
-> Save
-> Return to File Management
-> Select a file and click OCR
-> Choose a model
-> Wait for recognition
-> Copy results or export Markdown / PDF / Word
```
