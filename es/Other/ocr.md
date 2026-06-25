# OCR

OCR extrae texto de imágenes, escaneos y capturas de pantalla de documentos.

Después del reconocimiento, puede copiar el resultado, exportarlo como `Markdown`, `PDF` o `Word`, o empaquetar varios formatos para descargarlos juntos.

## Qué puede hacer OCR

| Función | Descripción |
| --- | --- |
| Reconocimiento de texto en imágenes | Extrae texto de imágenes, capturas de pantalla y escaneos. |
| Reconocimiento de diseño de documentos | Mejor para tablas, fórmulas, sellos y diseños mixtos de texto e imagen. |
| Varios servicios | Admite Baidu PaddleOCR, Microsoft Azure Vision y Google Vision. |
| Copiar resultados | Copia el texto reconocido después del procesamiento. |
| Exportar archivos | Exporta `Markdown`, `PDF` y `Word`. |
| Empaquetado por lotes | Después de reconocer varios archivos, permite descargar los resultados como un paquete. |

## Configure primero los servicios de OCR

Abra:

```text
System Settings -> Other Settings -> OCR
```

![Geolocalización IP y OCR](../../image/other/ip定位和ocr文字识别.png)

Rellene las credenciales de los servicios que desea usar:

| Servicio | Qué introducir | Más adecuado para |
| --- | --- | --- |
| Baidu PaddleOCR | `PaddleOCR Token` | Primera opción recomendada. Adecuado para documentos, imágenes, tablas y diseños mixtos. |
| Microsoft Azure Vision | `Azure Vision Endpoint` y `Azure Vision API Key` | Útil si ya usa servicios en la nube de Microsoft. |
| Google Vision | `Google Vision API Key`. El `JSON` de cuenta de servicio solo se usa para consultar cuota. | Útil si usa servicios de Google Cloud. |

Guarde después de introducir las credenciales.

Puede configurar solo un servicio para la prueba inicial. No necesita los tres.

## Configurar Google Vision

La configuración de Google tiene dos partes:

| Objetivo | Requisito |
| --- | --- |
| Usar OCR | Activar `Cloud Vision API` y luego crear una `API Key`. |
| Consultar uso | Crear una cuenta de servicio, conceder `Monitoring Viewer` y luego descargar el `JSON` de la cuenta de servicio. |

![Google API key y cuenta de servicio](../../image/other/谷歌api秘钥和服务账号截图.png)

### Usar Google para OCR

1. Abra Google Cloud Console.
2. Vaya a `APIs & Services`.
3. Abra `Library`, busque `Cloud Vision API` y actívela.
4. Vuelva a `Credentials`.
5. Cree una `API Key`.
6. Abra la API Key y cópiela.
7. Péguela en `Google Vision API Key` dentro de ImgBed.
8. Guarde.

Después podrá elegir Google Vision en el diálogo de OCR.

### Consultar uso de Google

La consulta de cuota no es necesaria para el reconocimiento.

Solo muestra de forma aproximada cuántas llamadas a Google Vision se usaron en los últimos 30 días.

1. En Google Cloud Console, abra `IAM & Admin`.
2. Abra `Service Accounts`.
3. Cree una cuenta de servicio, por ejemplo `vision-monitor`.
4. Concédale el rol `Monitoring Viewer`.
5. Abra los detalles de la cuenta de servicio y cree una clave.
6. Elija `JSON`.
7. Descargue el archivo JSON generado.
8. Vuelva a ImgBed e impórtelo en la cuenta de servicio `JSON` (opcional).
9. Cuando la importación se complete correctamente, haga clic en consulta de cuota.

Después de importar, ImgBed muestra el nombre del proyecto al que pertenece la cuenta de servicio. Al consultar el uso, ImgBed lee datos de supervisión de Google y muestra el número de llamadas de este mes.

En resumen:

| Elemento | Propósito |
| --- | --- |
| `Google Vision API Key` | Ejecuta el reconocimiento OCR. |
| Cuenta de servicio `JSON` | Consulta cuántas llamadas a Google Vision se usaron. |
| Rol `Monitoring Viewer` | Permite que la cuenta de servicio lea datos de uso. |

## Obtener un Baidu PaddleOCR Token

Baidu PaddleOCR requiere un token de acceso.

![Obtener token de PaddleOCR](../../image/other/获取飞浆令牌.png)

Abra la ventana de llamada `API` en la página de Baidu PaddleOCR, haga clic para obtener un token y cópielo.

Vuelva a ImgBed, péguelo en `PaddleOCR Token` y guarde.

## Iniciar reconocimiento

En Gestión de archivos, seleccione una imagen o captura de pantalla de documento y haga clic en `OCR`.

![Reconocimiento OCR](../../image/other/ocr识别截图.png)

En el diálogo, elija el servicio de reconocimiento y el modelo.

Opciones comunes de modelos PaddleOCR:

| Modelo | Más adecuado para |
| --- | --- |
| `PP-StructureV3` | Valor predeterminado recomendado. Adecuado para documentos, tablas, fórmulas, sellos y diseños mixtos. |
| `PP-OCRv5` | Imágenes simples, texto normal y reconocimiento ligero. |
| `PaddleOCR-VL` | Imágenes multilingües y complejas, y contenido de tipo gráfico. |
| `PaddleOCR-VL-1.5` | Páginas de documentos más complejas y recuperación de la disposición. |

Si no está seguro, empiece con `PP-StructureV3`.

## Opciones avanzadas

| Opción | Descripción |
| --- | --- |
| Corrección de orientación | Úsela cuando la imagen esté girada o inclinada. |
| Aplanado de documento | Úselo para documentos fotografiados con curvatura o inclinación. |
| Detección de diseño | Úsela cuando quiera conservar encabezados, párrafos, tablas y estructura visual. |
| Reconocimiento de gráficos | Úselo cuando la imagen contenga gráficos o estructuras complejas. |
| Mejorar `Markdown` | Hace que el Markdown exportado sea más fácil de leer. |

Para capturas de pantalla normales, mantenga las opciones al mínimo. Para escaneos de documentos, active más opciones relacionadas con documentos.

## Ver resultados

Cuando termine el reconocimiento, el diálogo mostrará el resultado.

Puede copiarlo directamente o elegir formatos de exportación.

![Reconocimiento PDF](../../image/other/pdf识别截图.png)

En páginas de documentos, el `PDF` exportado puede conservar el aspecto de la página y mantener el texto apto para búsquedas. Esto es útil para archivar escaneos y encontrar contenido más adelante.

## Elegir formato de exportación

| Formato | Más adecuado para |
| --- | --- |
| `Markdown (.md)` | Notas, sistemas de documentación y edición posterior. |
| `PDF (.pdf)` | Conservar el aspecto de la página y los resultados de documentos escaneados. |
| `Word (.docx)` | Continuar editando diseño y texto, y entregar a otras personas. |
| Exportar todo | Guarda varios formatos y la imagen original; adecuado para archivos importantes. |

Si solo necesita texto, exporte Markdown.

Si necesita conservar el aspecto de la página, use PDF o Word.

## Salida de Word

Los documentos Word exportados pueden abrirse y editarse con software ofimático.

![Resultado Word](../../image/other/word识别结果.png)

Algunos documentos incluyen imágenes, encabezados y párrafos reconocidos en la salida de Word.

La calidad del reconocimiento depende de la claridad de la imagen original, la elección del modelo y la complejidad del documento.

## Mejores tipos de archivo para OCR

| Tipo de archivo | Recomendación |
| --- | --- |
| Capturas de pantalla claras | Reconocer directamente. |
| Escaneos | Preferir `PP-StructureV3`. |
| Documentos fotografiados | Activar corrección de orientación y aplanado de documento. |
| Tablas, fórmulas, sellos | Preferir modelos estructurados. |
| Imágenes simples de texto corto | `PP-OCRv5` suele ser suficiente. |

Las imágenes más claras y con texto más recto suelen producir mejores resultados.

## Casos comunes

| Caso | Significado |
| --- | --- |
| El reconocimiento falla | Compruebe que el token o la clave del servicio se haya guardado. |
| El reconocimiento es lento | Los documentos complejos y las imágenes grandes tardan más. |
| La tabla está incompleta | Pruebe un modelo estructurado. |
| El texto tiene errores | El desenfoque, los reflejos y la inclinación aumentan los errores de reconocimiento. Pruebe con una imagen más clara. |
| La salida Word contiene muchas imágenes | Los modelos estructurados pueden conservar algunas imágenes reconocidas. Es normal. |

### La consulta de cuota de Google falla

Compruebe:

1. Que se haya importado la cuenta de servicio `JSON`.
2. La cuenta de servicio tiene el rol `Monitoring Viewer`.
3. `Cloud Vision API` está activada para el proyecto.

Si solo necesita OCR y no la consulta de uso, puede ignorar el JSON de cuenta de servicio y rellenar solo `Google Vision API Key`.

## Flujo rápido

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
