# Copia redundante y cambio de origen de lectura

La copia redundante guarda una copia adicional de archivos que ya fueron subidos.

Para los visitantes, el archivo principal y la copia se ven igual. La diferencia está en el canal de almacenamiento desde el que se lee realmente el archivo.

## Qué permite hacer

| Función | Descripción |
| --- | --- |
| Guardar una copia extra | Copia el archivo a otro canal para reducir el riesgo de depender de un solo almacenamiento |
| Cambiar origen de lectura | Permite alternar entre el canal principal y el canal de copia |
| Copia de un archivo | Crear copia desde el detalle de un archivo concreto |
| Copia por lotes | Seleccionar varios archivos en el panel y copiarlos juntos |
| Copia global | Completar copias por carpeta desde Otros ajustes |

## Dónde se configura

```text
Configuración del sistema -> Otros ajustes -> Copia redundante
```

![Copia redundante](../../image/other/冗余备份截图.png)

Aquí puedes completar copias para una carpeta concreta o para todos los archivos. El canal de copia se puede elegir manualmente o dejar en modo automático para que ImgBed seleccione uno adecuado.

## Copia desde el detalle del archivo

En el panel, abre el detalle de un archivo y usa la acción de copia.

![Copia desde detalle](../../image/other/文件详情里文件备份.png)

Este acceso es útil para proteger archivos importantes de forma puntual. Tras una copia correcta, el detalle mostrará los orígenes de lectura disponibles.

## Copia por selección

En el panel puedes seleccionar varios archivos y ejecutar una copia por lotes.

![Copia por lotes](../../image/other/批量备份截图.png)

La copia desde detalle, la copia por selección y la copia redundante de Otros ajustes usan la misma lógica; solo cambia el punto de entrada.

## Cambiar el origen de lectura

| Origen | Descripción |
| --- | --- |
| Canal principal | Lee desde el canal donde se subió originalmente |
| Canal de copia | Lee desde el canal donde se guardó la copia redundante |

![Cambiar origen](../../image/other/备份成功切换读取源.png)

Después de cambiarlo, las imágenes, vídeos y enlaces de descarga seguirán funcionando con normalidad usando el origen elegido.

## Casos que se omiten

| Caso | Motivo |
| --- | --- |
| Ya tiene copia | Evita duplicar espacio innecesariamente |
| Canal principal y copia iguales | Copiar al mismo canal no aporta redundancia |
| No hay canal disponible | No se encontró otro canal adecuado |

## Al borrar archivos

Cuando borras un archivo, ImgBed elimina tanto el archivo principal como su copia.
