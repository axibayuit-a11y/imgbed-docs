# API de imágenes aleatorias y galería pública

Ambas funciones se configuran en:

```text
System Settings -> Other Settings
```

## API de imágenes aleatorias

La API de imágenes aleatorias devuelve un archivo aleatorio de los directorios seleccionados. Es útil para fondos de sitios web, rotación de avatares o llamadas de imágenes aleatorias desde páginas externas.

Después de activarla, use:

```text
https://your-domain.com/random
```

## Ajustes de la API de imágenes aleatorias

| Opción | Propósito |
| --- | --- |
| Habilitar | Activa o desactiva el endpoint `/random`. Cuando está desactivado, se deniega el acceso. |
| Directorios | Limita qué directorios puede usar la API de imágenes aleatorias. Los directorios no incluidos aquí no pueden usarse mediante la API. |
| Demostración de llamada | Genera enlaces de la API de imágenes aleatorias que puede copiar directamente. |

Puede seleccionar varios directorios. Por ejemplo, si solo se permiten `/landscape/` y `/portrait/`, la API de imágenes aleatorias solo puede elegir archivos de esos directorios y sus subdirectorios.

## Parámetros de la API de imágenes aleatorias

| Parámetro | Ejemplo | Propósito |
| --- | --- | --- |
| `dir` | `/landscape/` | Especifica el directorio aleatorio. |
| `content` | `image` | Especifica el tipo de medio. Use `image`, `video`, `audio` o combinaciones separadas por comas. |
| `orientation` | `auto` | Filtra la orientación de la imagen. Use `portrait`, `landscape` o `auto`. |
| `type` | `url` | Formato de respuesta. Vacío significa redirección, `url` devuelve una URL en texto plano, `json` devuelve JSON. |
| `origin` | `1` | Se usa con `type=url` para devolver una URL completa. |
| `age` | `all-ages,r12` | Filtra por clasificación de edad. |
| `tag` | `wallpaper,sky` | Solo devuelve archivos que contienen estas etiquetas. |
| `ex` | `private` | Excluye archivos que contienen estas etiquetas. |

## Formatos de devolución

Sin `type`, la API redirige directamente a la URL del archivo aleatorio.

Con `type=url`, devuelve una URL de texto.

Con `type=json`, devuelve información del archivo, incluida la URL del archivo, el ID de archivo, el nombre, el tipo, las etiquetas, la clasificación y los metadatos relacionados.

## Reglas de acceso

La API de imágenes aleatorias sigue las reglas de acceso público:

| Regla | Efecto |
| --- | --- |
| Restricción de directorio | Solo se pueden seleccionar archivos en directorios permitidos. |
| Lista de bloqueados | Los archivos bloqueados se excluyen del conjunto de selección aleatoria. |
| Modo de lista de permitidos | Cuando está activado, solo se devuelven archivos permitidos para acceso público. |
| Clasificación de edad | R12, R16, R18 y contenido similar se filtran según el modo de acceso actual. |

Si ningún archivo coincide después del filtrado, la API no devuelve resultados coincidentes.

## Caché

La API de imágenes aleatorias almacena en caché los conjuntos de candidatos por directorio para mejorar la velocidad.

Después de cambiar archivos, ImgBed actualiza la versión de caché del directorio y las solicitudes posteriores reconstruyen el conjunto de candidatos. Los directorios vacíos se almacenan brevemente en caché para evitar consultas repetidas.

## Galería pública

La galería pública ofrece una página pública de solo lectura para navegar por los directorios que usted permite ver a los visitantes.

Después de activarla, los visitantes pueden acceder a:

```text
https://your-domain.com/browse/directory-name
```

## Ajustes de la galería pública

| Opción | Propósito |
| --- | --- |
| Habilitar | Activa o desactiva la galería pública. Cuando está desactivada, los visitantes no pueden navegar por ella. |
| Modo de carga de imágenes | Controla si las vistas previas usan imágenes originales o miniaturas. |
| Directorios abiertos | Define a qué directorios pueden acceder los visitantes. |

## Modo de carga de imágenes

| Modo | Propósito |
| --- | --- |
| Original | La página del visitante carga archivos originales directamente. |
| Miniatura | La página del visitante da prioridad a las miniaturas para cargar más rápido. |

## Directorios abiertos

Los directorios abiertos determinan qué pueden ver los visitantes.

Por ejemplo:

```text
/1/,/2/,/landscape/,/portrait/
```

Los visitantes podrán acceder entonces a:

```text
https://your-domain.com/browse/1
https://your-domain.com/browse/2
https://your-domain.com/browse/landscape
https://your-domain.com/browse/portrait
```

También pueden abrirse subdirectorios, como `/2026/lucky/`. Se bloquea el acceso de los visitantes a los directorios que no estén abiertos.

## Funciones de la galería pública

| Función | Descripción |
| --- | --- |
| Explorar directorios | Ver archivos y subdirectorios en directorios abiertos. |
| Buscar | Buscar por nombre de archivo, ID de archivo o etiquetas. |
| Filtro de tipo | Filtrar imágenes, vídeos, archivos de audio u otros archivos. |
| Filtro de etiquetas | Incluir o excluir etiquetas seleccionadas. |
| Filtro de orientación | Filtrar imágenes horizontales o verticales. |
| Filtro de tiempo | Filtrar por rango de tiempo de subida. |
| Filtro de extensión | Filtrar por extensión de archivo. |
| Copiar enlace | Copiar enlaces de acceso a archivos. |
| Vista previa multimedia | Ver o reproducir imágenes, vídeos y archivos de audio en la página del visitante. |

## Reglas de acceso de la galería pública

La galería pública también sigue las reglas de acceso público:

| Regla | Efecto |
| --- | --- |
| Directorios abiertos | Solo se muestran los directorios permitidos. |
| Modo de acceso | El contenido se filtra según el modo de acceso actual por clasificación de edad. |
| Modo de lista de permitidos | Cuando está activado, solo se muestran archivos permitidos para acceso público. |
| Lista de bloqueados | Los archivos bloqueados se ocultan. |
