# Copia de seguridad redundante y cambio de origen de lectura

La copia de seguridad redundante guarda una copia adicional de un archivo ya subido.

Tanto el archivo principal como el archivo de copia de seguridad pueden usarse como orígenes de lectura. Los visitantes normalmente no ven ninguna diferencia. La única diferencia es qué canal de almacenamiento entrega el archivo.

## Qué puede hacer la copia de seguridad redundante

| Función | Descripción |
| --- | --- |
| Guardar una copia adicional | Hace copia de seguridad de archivos en otro canal de subida para reducir el riesgo de fallo de un solo canal. |
| Cambiar origen de lectura | Después de que la copia de seguridad se complete correctamente, permite cambiar la lectura del archivo entre el canal principal y el canal de copia de seguridad. |
| Copia de seguridad de un solo archivo | Hace copia de seguridad de un archivo desde su página de detalles. |
| Copia de seguridad por lotes | Selecciona varios archivos en la página de administración y crea una copia de seguridad de todos juntos. |
| Copia de seguridad redundante global | Hace copia de seguridad de archivos por carpeta desde Otros ajustes. |

## Entrada de copia de seguridad redundante

Abra:

```text
System Settings -> Other Settings -> Redundant Backup
```

![Copia de seguridad redundante](../../image/other/冗余备份截图.png)

Esta entrada es la más adecuada para añadir copias de seguridad a una carpeta o a todos los archivos en lote.

El canal de copia de seguridad puede seleccionarse manualmente, o puede elegir cambio automático y dejar que ImgBed encuentre un canal adecuado.

## Copia de seguridad desde detalles de archivo

Abra una página de detalles de archivo en el panel de administración y haga clic en copia de seguridad.

![Copia de seguridad en detalles de archivo](../../image/other/文件详情里文件备份.png)

Esto es lo más adecuado para hacer copia de seguridad de un archivo importante bajo demanda.

Después de una copia de seguridad correcta, la página de detalles de archivo muestra los orígenes de lectura disponibles.

## Copia de seguridad por selección

En el panel de administración, seleccione varios archivos y ejecute copia de seguridad por lotes.

![Copia de seguridad por lotes](../../image/other/批量备份截图.png)

Esto es lo más adecuado para procesar un grupo de archivos.

La copia de seguridad por selección, la copia de seguridad desde detalles de archivo y la copia de seguridad redundante en Otros ajustes usan el mismo sistema de copias de seguridad. Solo son distintos puntos de entrada.

## Cambiar origen de lectura después de la copia de seguridad

Después de completar la copia de seguridad, la página de detalles de archivo permite cambiar el origen de lectura:

| Origen de lectura | Descripción |
| --- | --- |
| Canal principal | Lee desde el canal de subida original. |
| Canal de copia de seguridad | Lee desde el canal de copia de seguridad. |

![Cambiar origen de lectura después de copia](../../image/other/备份成功切换读取源.png)

Los visitantes no necesitan saber si el archivo se entrega desde el canal principal o desde el canal de copia de seguridad.

El origen de lectura que elija se convierte en el origen preferido para accesos posteriores al archivo.

## Cuándo se omite una copia de seguridad

Los siguientes casos se omiten durante la copia de seguridad. No son errores.

| Caso | Por qué se omite |
| --- | --- |
| Ya tiene copia de seguridad | Un archivo que ya tiene copia de seguridad no se copia de nuevo. |
| El canal principal y el canal de copia de seguridad son iguales | La copia de seguridad debe guardarse en otro canal para tener sentido. |
| No hay canal de copia de seguridad utilizable | No hay disponible un canal alternativo adecuado. |

En resumen: las copias de seguridad deben guardarse en otro canal, y los archivos que ya tienen copia no consumen espacio adicional otra vez.

## Canal principal frente a canal de copia de seguridad

| Nombre | Significado |
| --- | --- |
| Canal principal | Canal usado cuando el archivo se subió por primera vez. |
| Canal de copia de seguridad | Canal que guarda la copia redundante. |
| Origen de lectura principal | El archivo se lee actualmente desde el canal principal. |
| Origen de lectura de copia de seguridad | El archivo se lee actualmente desde el canal de copia de seguridad. |

Los orígenes de lectura principal y de copia de seguridad tienen el mismo comportamiento para los usuarios.

Mientras el archivo de copia de seguridad esté disponible, las imágenes, los vídeos y los enlaces de descarga seguirán funcionando después de cambiar al origen de lectura de copia de seguridad.

## Qué ocurre al eliminar un archivo

Cuando se elimina un archivo, ImgBed elimina tanto el archivo principal como el archivo de copia de seguridad.
