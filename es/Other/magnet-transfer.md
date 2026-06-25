# Transferencia de enlaces magnet

La transferencia de enlaces magnet descarga archivos desde un enlace magnet y los sube automáticamente al canal de almacenamiento en la nube que elija.

Es útil para transferir episodios de anime, vídeos, archivos comprimidos y archivos similares. Pegue un enlace magnet e ImgBed creará una tarea de descarga en segundo plano. Cuando termine la descarga, el archivo se subirá a ImgBed y el enlace final aparecerá en la lista de subidas.

![Transferencia de enlaces magnet](../../image/other/磁力链接/磁力链接.png)

## Dónde usarla

La entrada de transferencia de enlaces magnet está en el área de subida de la página principal.

Pegue el enlace magnet en el cuadro de entrada, elija `Transfer` e inicie la subida.

![Subir anime](../../image/other/磁力链接/上传番剧.png)

## Antes del primer uso

Configure primero la transferencia de enlaces magnet en el panel de administración.

Normalmente necesita:

1. Una cuenta de GitHub para ejecutar la tarea de descarga.
2. Un canal de subida en la nube, como Google Drive o OneDrive.
3. El directorio de subida de destino.
4. Un tiempo de espera de la tarea.

Cuando los ajustes estén listos, vuelva a la página principal y pegue un enlace magnet para iniciar la transferencia.

## Subir un enlace magnet

1. Pegue el enlace magnet en el cuadro de subida de la página principal.
2. Asegúrese de que el modo esté configurado como `Transfer`.
3. Haga clic en subir.
4. Espere a que ImgBed cree la tarea magnet.
5. Cuando la tarea se inicie, use el panel flotante `Magnet Tasks` en la esquina inferior derecha para consultar el progreso.

La descarga y la subida pueden tardar. La velocidad depende del recurso magnet, del entorno de ejecución de GitHub y del canal de almacenamiento en la nube seleccionado.

![Descarga magnet](../../image/other/磁力链接/磁力链接下载中.png)

## Al finalizar

Cuando la tarea se complete, la lista de subidas mostrará el nombre del archivo y el enlace.

Los vídeos muestran una vista previa de vídeo, las imágenes muestran una vista previa de imagen y los demás archivos muestran un icono de archivo normal.

![Vídeo descargado](../../image/other/磁力链接/下载好后的视频.png)

Puede copiar:

| Tipo de enlace | Caso de uso |
| --- | --- |
| Enlace original | Acceso directo al archivo |
| Markdown | Entradas o notas Markdown |
| HTML | Código de página web |
| BBCode | Foros compatibles con BBCode |

## Panel de tareas magnet

El panel de tareas magnet de la esquina inferior derecha muestra el número de tareas, el nombre de la tarea, el progreso y el estado final.

Estados comunes:

| Estado | Significado |
| --- | --- |
| En espera | La tarea se creó y espera ejecutarse. |
| Descargando | Se está descargando el recurso magnet. |
| Subiendo | El archivo se descargó y se está subiendo al almacenamiento en la nube. |
| Completado | La subida se realizó correctamente y el enlace se puede copiar. |
| Error | La tarea no terminó correctamente. Revise el mensaje e inténtelo de nuevo. |

## Consejos

- Si un enlace magnet contiene varios archivos, ImgBed prioriza el archivo principal completado para mostrarlo.
- Los archivos grandes tardan más. Espere a que la tarea termine antes de actualizar la página.
- Si el recurso magnet no tiene pares disponibles, puede ser muy lento o fallar.
- Si la cuenta en la nube se queda sin cuota, la autorización ha caducado o el directorio de subida es incorrecto, la tarea puede fallar.
- La vista previa de vídeo puede tardar unos segundos después de completar la subida.

## Preguntas frecuentes

### No se inicia nada después de pegar un enlace magnet

Confirme que la transferencia de enlaces magnet esté activada en el panel de administración y que se hayan seleccionado una cuenta de GitHub y un canal en la nube utilizables.

### La descarga siempre es lenta

La velocidad de descarga por magnet depende del recurso en sí. Si no hay pares disponibles, la descarga puede ser muy lenta o imposible.

### No aparece vista previa después de subir

Primero confirme que el enlace del archivo se pueda abrir. Los archivos de vídeo pueden necesitar un breve tiempo para cargarse en el navegador, o puede abrir el enlace directamente.

### ¿Qué debo comprobar si una tarea falla?

Compruebe si el enlace magnet es válido, si el canal en la nube funciona y si el directorio de subida es correcto. Luego vuelva a enviar la tarea.
