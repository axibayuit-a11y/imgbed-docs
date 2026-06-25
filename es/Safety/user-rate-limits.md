# Límites de frecuencia de subida para usuarios

Los límites de frecuencia de usuario controlan con qué frecuencia los usuarios normales o visitantes pueden subir archivos desde la página principal. Esto ayuda a evitar abusos en páginas públicas de subida.

Esta función solo afecta a las subidas desde la página principal. Las subidas de administradores y las realizadas con API Tokens no están limitadas por los límites de usuario.

## Dónde configurarlo

Abra el panel de administración y vaya a:

```text
System Settings -> Security Settings -> Upload Management -> User Rate Limits
```

![Configuración de límites de frecuencia de usuario](../../image/other/用户频控截图.png)

## Activar límites de frecuencia

Después de activar "Activar límites de frecuencia", ImgBed rastrea las subidas recientes por dirección IP del usuario que sube.

Valores predeterminados:

| Configuración | Predeterminado | Descripción |
| --- | --- | --- |
| Ventana de detección | 1,5 horas | Hasta qué punto se cuentan hacia atrás los registros de subida. |
| Número máximo de archivos | 20 | Número máximo de archivos permitidos dentro de la ventana de detección. |
| Límite de tamaño de archivo único | 20 MB | Tamaño máximo de un archivo. |
| Límite de tamaño total de subida | 200 MB | Tamaño máximo total de subida dentro de la ventana de detección. |

Por ejemplo, con una ventana de 1,5 horas, 20 archivos, 20 MB por archivo y 200 MB en total, las subidas desde la misma IP se bloquean cuando se supera cualquier límite configurado.

## Excluir tipos de archivo

"Tipos de archivo de subida excluidos" bloquea a usuarios normales o visitantes la subida de categorías de archivos seleccionadas.

Categorías disponibles:

| Tipo | Descripción |
| --- | --- |
| Imágenes | jpg, png, webp, gif y archivos de imagen similares |
| Videos | mp4, webm, mov y archivos de video similares |
| Audio | mp3, flac, wav y archivos de audio similares |
| Documentos | pdf, txt, md, docx y archivos de documento similares |
| Otros | Archivos fuera de las categorías anteriores, como zip, rar, exe, apk |

De forma predeterminada, ningún tipo está seleccionado, lo que significa que está permitido.

Al hacer clic en un tipo, este se resalta, lo que significa que queda bloqueado.

Si se selecciona "Otros", los visitantes que suban archivos zip o rar serán bloqueados y se les indicará que ese tipo de archivo no es compatible.

## Mensajes de bloqueo

Cuando se activa un límite, los usuarios ven un mensaje correspondiente:

![Mensaje de subida demasiado frecuente](../../image/other/频繁报错提示.png)

| Situación | Significado del mensaje |
| --- | --- |
| Archivo individual demasiado grande | El archivo es demasiado grande y debe comprimirse antes de subirlo. |
| Tipo de archivo bloqueado | Este tipo de archivo no es compatible. Elimínelo e inténtelo de nuevo. |
| Subidas demasiado frecuentes | Las subidas recientes son demasiado frecuentes, con el tiempo de reintento mostrado. |
| Tamaño total demasiado alto | El tamaño total reciente de subida es demasiado alto, con el tiempo de reintento mostrado. |

## Cuándo activarlo

Active los límites de frecuencia de usuario si su página principal de subida es accesible públicamente.

Motivos comunes:

- Le preocupan las subidas masivas mediante scripts.
- Quiere limitar subidas grandes de visitantes.
- Solo quiere que los usuarios normales suban imágenes, no archivos comprimidos ni instaladores.
- Quiere mantener la subida pública disponible mientras controla el uso de recursos.

Si el sitio es solo para usted, o solo los administradores pueden subir archivos, puede dejar esta función desactivada.
