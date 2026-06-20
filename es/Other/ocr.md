# OCR y reconocimiento de texto

El OCR reconoce texto dentro de imágenes, PDF y documentos Word para facilitar la búsqueda y la revisión de contenido.

## Dónde se configura

```text
Configuración del sistema -> Otros ajustes -> OCR
```

![Ajustes OCR](../../image/other/ip定位和ocr文字识别.png)

## Qué puede hacer

| Función | Descripción |
| --- | --- |
| OCR de imágenes | Lee texto en capturas o fotos |
| OCR de PDF | Extrae texto de archivos PDF |
| OCR de Word | Lee contenido de documentos Word |
| Apoyo a la búsqueda | Usa el texto reconocido como información buscable |
| Procesamiento por lotes | Procesa archivos existentes de forma masiva |

![Resultado OCR](../../image/other/ocr识别截图.png)

## Preparación

Según el servicio OCR que uses, necesitarás una clave API o un token. Introduce las credenciales necesarias siguiendo la interfaz.

Si usas servicios externos como PaddleOCR, comprueba que las credenciales sean correctas y que haya cuota disponible.

![Obtener token](../../image/other/获取飞浆令牌.png)

## Cómo usarlo

1. Activa la función OCR.
2. Introduce la clave del servicio que vas a usar.
3. Guarda la configuración.
4. Sube archivos nuevos o ejecuta OCR sobre archivos existentes.
5. Revisa los resultados en el detalle del archivo o mediante búsqueda.

![Resultado Word](../../image/other/word识别结果.png)

![Reconocimiento PDF](../../image/other/pdf识别截图.png)

## Consejos de uso

- Las imágenes pequeñas, borrosas o inclinadas reducen la precisión.
- Los PDF y Word grandes pueden tardar más en procesarse.
- Si se agota la cuota de la API, el reconocimiento puede fallar.
- Usa el OCR como ayuda; para información importante, revisa también el archivo original.
