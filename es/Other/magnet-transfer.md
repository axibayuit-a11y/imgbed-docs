# Uso de enlaces magnet

La función de enlaces magnet descarga los archivos incluidos en un enlace magnet y después los sube automáticamente al canal de almacenamiento que elijas.

Es útil para transferir vídeos, episodios, archivos comprimidos y otros contenidos. Solo tienes que pegar el enlace magnet; ImgBed crea una tarea en segundo plano y, cuando termina, muestra el enlace final en la lista de subidas.

![Enlace magnet](../../image/other/磁力链接/磁力链接.png)

## Dónde se usa

La entrada está en el área de subida de la página principal.

Pega el enlace magnet en el cuadro de entrada, selecciona el modo `Transferir` y sube el contenido.

![Subir magnet](../../image/other/磁力链接/上传番剧.png)

## Antes del primer uso

Configura primero la transferencia magnet desde el panel de administración.

Normalmente necesitas:

| Requisito | Para qué sirve |
| --- | --- |
| Cuenta de GitHub | Ejecutar la tarea de descarga |
| Canal de subida | Google Drive, OneDrive u otro destino final |
| Directorio de destino | Carpeta donde se guardará el archivo transferido |
| Tiempo límite | Límite para tareas largas |

## Cómo transferir un magnet

1. Pega el enlace magnet en el cuadro de subida de la página principal.
2. Comprueba que el modo sea `Transferir`.
3. Haz clic en subir.
4. Espera a que ImgBed cree la tarea.
5. Revisa el progreso en la ventana flotante `Tareas magnet`, en la esquina inferior derecha.

La descarga y la subida pueden tardar. La velocidad depende del recurso magnet, del entorno de ejecución de GitHub y del canal de almacenamiento elegido.

![Descarga en curso](../../image/other/磁力链接/磁力链接下载中.png)

## Después de terminar

Cuando finalice la tarea, la lista de subidas mostrará el nombre del archivo y sus enlaces.

Si es un vídeo, se mostrará una vista previa de vídeo; si es una imagen, una vista previa de imagen; los demás archivos aparecerán con icono genérico.

![Vídeo transferido](../../image/other/磁力链接/下载好后的视频.png)

Puedes copiar estos formatos:

| Formato | Uso |
| --- | --- |
| Enlace original | Abrir el archivo directamente |
| Markdown | Pegar en artículos o documentación Markdown |
| HTML | Insertar en código de una página web |
| BBCode | Usar en foros compatibles con BBCode |

## Estados de la tarea

| Estado | Significado |
| --- | --- |
| En espera | La tarea está creada y espera ejecución |
| Descargando | Se está descargando el recurso magnet |
| Subiendo | El archivo ya se descargó y se está subiendo al canal |
| Completado | La subida terminó y el enlace se puede copiar |
| Error | La tarea no terminó correctamente; revisa el aviso y vuelve a intentar |

## Recomendaciones

- Si el magnet contiene varios archivos, ImgBed prioriza el archivo principal terminado.
- Los archivos grandes necesitan más tiempo; espera a que termine la tarea antes de recargar la página.
- Si el recurso no tiene fuentes disponibles, la descarga puede ser muy lenta o fallar.
- Si la cuenta de almacenamiento no tiene cuota, permisos o directorio correcto, la subida puede fallar.
- La vista previa de vídeos puede tardar unos segundos en cargarse.
