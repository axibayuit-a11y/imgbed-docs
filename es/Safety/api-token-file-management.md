# Gestión de archivos con API Token

La gestión de archivos con API Token está pensada para scripts, tareas automatizadas y paneles de administración externos. Usa el permiso `manage` para editar información de archivos, moverlos, renombrarlos, crear archivos marcadores de directorio, ajustar etiquetas y estado de listas, bloquear o rehabilitar una IP de subida, y crear o eliminar Tokens de subida de corta duración sin abrir el panel de administración.

Este script solo cubre acciones ligeras de gestión de archivos y usuarios. Las subidas, listados, eliminaciones, ajustes de subida, ajustes del sitio y relaciones federadas siguen usando sus scripts específicos.

![Editar API Token](../../image/Safety/apitoken/编辑管理权限api.png)

## Preparación

Entra al panel de administración y abre:

System Settings -> Security Settings -> API Token

Al crear o editar un API Token, asegúrate de que el Token permita gestionar. El permiso `manage` puede modificar el estado de archivos, el estado de subida de usuarios y crear Tokens de subida de corta duración. Conviene dárselo solo a scripts o usuarios de confianza.

Las operaciones de escritura del script de gestión de archivos usan vista previa por defecto y no guardan cambios reales. Después de revisar la vista previa, añade `--apply` para ejecutar la escritura.

También puedes poner el Token en una variable de entorno:

```powershell
$env:IMGBED_API_TOKEN="your API Token"
```

## Descargar el script

| Script | Uso |
| --- | --- |
| <a href="/tools/imgbed-token-manage.mjs" download>script de gestión de archivos</a> | Metadatos de archivo, etiquetas de moderación, etiquetas de archivo, estado de listas, movimiento, renombrado, creación de carpetas, bloqueo/restauración de IP y creación o eliminación de Tokens de subida de corta duración |

Necesitas Node.js 18 o superior en el equipo local.

## Límites de funcionalidad

| Capacidad | Script | Permiso |
| --- | --- | --- |
| Subir archivos | `imgbed-token-single-upload.mjs` / `imgbed-token-chunk-upload.mjs` | `upload` |
| Listar archivos, filtrar archivos y leer estadísticas de usuarios | `imgbed-token-list.mjs` | `list` |
| Eliminar archivos indicados explícitamente | `imgbed-token-delete.mjs` | `delete` |
| Editar información, etiquetas, listas, mover, renombrar, crear carpetas, bloquear IP y crear o eliminar Tokens de subida de corta duración | `imgbed-token-manage.mjs` | `manage` |
| Editar canales de subida, seguridad, páginas, otros ajustes y relaciones federadas | Scripts de gestión de configuración | `manage` |

`imgbed-token-manage.mjs` no sube archivos, no lista archivos y no elimina archivos. Si necesitas localizar un `fileId`, usa primero el script de listado para filtrar archivos. Si necesitas eliminar un archivo, pasa el `fileId` concreto al script de eliminación.

## Parámetros comunes

| Parámetro | Obligatorio | Descripción |
| --- | --- | --- |
| `--base-url <url>` | Sí | URL del sitio ImgBed, por ejemplo `https://image.ai6.me` |
| `--token <token>` | Sí | API Token. También puedes usar la variable de entorno `IMGBED_API_TOKEN` |
| `--retries <n>` | No | Reintentos ante fallos temporales. Por defecto `3` |
| `--timeout-ms <n>` | No | Tiempo de espera por petición. Por defecto `180000` |
| `--output <pretty\|json>` | No | Formato de salida. Por defecto `pretty`; para programas se recomienda `json` |
| `--save-response <path>` | No | Guarda el resultado final como archivo JSON |
| `--batch-size <n>` | No | Cantidad procesada por petición en acciones por lotes. Por defecto `15`, máximo `15` |
| `--apply` | No | Ejecuta realmente la escritura. Sin este parámetro solo muestra una vista previa |
| `-h` / `--help` | No | Muestra la ayuda del script |

## Confirmar primero el fileId

La mayoría de acciones del script de gestión de archivos requieren un `fileId`. Puedes consultarlo primero con el script de listado:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --dir "test4" `
  --count 10 `
  --output json
```

El campo `name` del resultado suele ser el `fileId` que puedes pasar al script de gestión de archivos.

## Metadatos de archivo

Los metadatos de archivo permiten modificar el nombre mostrado en el gestor de archivos del panel y el origen de lectura.

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-metadata `
  --file-id "photos/2026/a.jpg" `
  --file-name "cover.jpg" `
  --read-source backup
```

Después de confirmar que la vista previa es correcta, guarda el cambio:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-metadata `
  --file-id "photos/2026/a.jpg" `
  --file-name "cover.jpg" `
  --read-source backup `
  --apply
```

### Parámetros de metadatos de archivo

| Parámetro | Descripción |
| --- | --- |
| `--set-metadata` | Modifica los metadatos de un solo archivo |
| `--file-id <id>` | ID del archivo que se va a modificar |
| `--file-name <name>` | Nuevo nombre mostrado en el panel |
| `--read-source <primary\|backup>` | Origen de lectura. `primary` es el origen principal y `backup` es el origen de respaldo |

Debes pasar al menos uno de estos parámetros: `--file-name` o `--read-source`.

## Etiquetas de moderación

Las etiquetas de moderación corresponden a la clasificación por edad del archivo. Puedes leer la etiqueta actual antes de modificarla.

Leer la etiqueta de moderación:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get-label `
  --file-id "photos/2026/a.jpg"
```

Establecer la etiqueta de moderación:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-label `
  --file-id "photos/2026/a.jpg" `
  --label r12 `
  --apply
```

### Parámetros de etiquetas de moderación

| Parámetro | Descripción |
| --- | --- |
| `--get-label` | Lee la etiqueta de moderación de un solo archivo |
| `--set-label` | Modifica la etiqueta de moderación de un solo archivo |
| `--file-id <id>` | ID del archivo |
| `--label <value>` | Valor de etiqueta: `all-ages`, `r12`, `r16`, `r18`, `None` |

## Etiquetas de archivo

Las etiquetas de archivo sirven para añadir etiquetas de negocio que luego pueden buscarse. El script permite leer, sobrescribir, añadir y quitar etiquetas, y también procesar varios archivos por lotes.

Leer etiquetas de archivo:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get-tags `
  --file-id "photos/2026/a.jpg"
```

Añadir etiquetas:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --add-tags `
  --file-id "photos/2026/a.jpg" `
  --tag "cover" `
  --tag "2026" `
  --apply
```

Quitar etiquetas:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --remove-tags `
  --file-id "photos/2026/a.jpg" `
  --tag "cover" `
  --apply
```

Sobrescribir etiquetas:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-tags `
  --file-id "photos/2026/a.jpg" `
  --tag "archive" `
  --tag "public" `
  --apply
```

Añadir etiquetas por lotes:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --batch-tags `
  --file-id "photos/2026/a.jpg" `
  --file-id "photos/2026/b.jpg" `
  --tag-action add `
  --tag "batch-test" `
  --apply
```

### Parámetros de etiquetas de archivo

| Parámetro | Descripción |
| --- | --- |
| `--get-tags` | Lee las etiquetas de un solo archivo |
| `--set-tags` | Sobrescribe las etiquetas de un solo archivo |
| `--add-tags` | Añade etiquetas a un solo archivo |
| `--remove-tags` | Quita etiquetas de un solo archivo |
| `--batch-tags` | Establece, añade o quita etiquetas por lotes |
| `--file-id <id>` | ID del archivo. En acciones por lotes puede pasarse varias veces |
| `--tag <tag>` | Valor de etiqueta. Puede pasarse varias veces |
| `--tags-json <path>` | Lee un arreglo de etiquetas desde un archivo JSON |
| `--tag-action <set\|add\|remove>` | Acción de etiquetas por lotes |

Ejemplo de contenido para el archivo `--tags-json`:

```json
["cover", "2026", "public"]
```

## Estado de lista negra y lista blanca

El estado de lista determina el comportamiento de control de acceso del archivo en el modo de acceso público. Puede modificarse para un archivo individual o por lotes.

Poner un archivo en la lista blanca:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-list-type `
  --file-id "photos/2026/a.jpg" `
  --list-type White `
  --apply
```

Añadir archivos a la lista negra por lotes:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --batch-list-type `
  --file-id "photos/2026/a.jpg" `
  --file-id "photos/2026/b.jpg" `
  --list-type Block `
  --apply
```

Restaurar el estado de lista predeterminado:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-list-type `
  --file-id "photos/2026/a.jpg" `
  --list-type None `
  --apply
```

### Parámetros de lista negra y lista blanca

| Parámetro | Descripción |
| --- | --- |
| `--set-list-type` | Modifica el estado de lista de un solo archivo |
| `--batch-list-type` | Modifica el estado de lista por lotes. Cada petición procesa como máximo `15` archivos |
| `--file-id <id>` | ID del archivo. En acciones por lotes puede pasarse varias veces |
| `--list-type <None\|White\|Block>` | `None` es el estado predeterminado, `White` es lista blanca y `Block` es lista negra |

## Mover archivos

Mover archivos traslada uno o varios archivos al directorio de destino. El backend procesa como máximo `15` archivos por petición. El script divide el trabajo automáticamente según `--batch-size` y ejecuta las peticiones en orden.

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --move `
  --file-id "photos/2026/a.jpg" `
  --file-id "photos/2026/b.jpg" `
  --target-path "archive/2026" `
  --apply
```

### Parámetros de movimiento

| Parámetro | Descripción |
| --- | --- |
| `--move` | Mueve archivos |
| `--file-id <id>` | ID del archivo que se va a mover. Puede pasarse varias veces |
| `--target-path <dir>` | Directorio de destino |
| `--batch-size <n>` | Cantidad de archivos movidos por petición. Por defecto `15`, máximo `15` |

## Renombrar o cambiar ruta

El renombrado usa un ID de archivo antiguo y un ID de archivo nuevo explícitos. El nuevo ID puede cambiar solo el nombre del archivo o también cambiar el directorio.

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --rename `
  --old-file-id "photos/2026/a.jpg" `
  --new-file-id "photos/2026/a-renamed.jpg" `
  --apply
```

Para renombrar por lotes, repite `--old-file-id` y `--new-file-id`:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --rename `
  --old-file-id "photos/2026/a.jpg" `
  --new-file-id "archive/2026/a.jpg" `
  --old-file-id "photos/2026/b.jpg" `
  --new-file-id "archive/2026/b.jpg" `
  --apply
```

También puedes escribir el mapeo en un archivo JSON:

```json
[
  {
    "oldFileId": "photos/2026/a.jpg",
    "newFileId": "archive/2026/a.jpg"
  },
  {
    "oldFileId": "photos/2026/b.jpg",
    "newFileId": "archive/2026/b.jpg"
  }
]
```

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --rename `
  --items-json ".\rename-items.json" `
  --apply
```

### Parámetros de renombrado

| Parámetro | Descripción |
| --- | --- |
| `--rename` | Renombra o cambia rutas mediante un mapeo explícito |
| `--old-file-id <id>` | ID de archivo original. Puede pasarse varias veces |
| `--new-file-id <id>` | Nuevo ID de archivo. Puede pasarse varias veces; la cantidad debe coincidir con `--old-file-id` |
| `--items-json <path>` | Arreglo JSON. Cada elemento es `{ "oldFileId": "...", "newFileId": "..." }` |
| `--batch-size <n>` | Cantidad de renombrados procesados por petición. Por defecto `15`, máximo `15` |

## Crear carpetas

Los directorios de ImgBed se derivan de las rutas de archivo; no existen directorios vacíos reales. Cuando el script crea una carpeta, crea un archivo marcador `0.md` en el directorio de destino para que el gestor de archivos y las estadísticas de directorios puedan mostrarlo.

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --create-folder `
  --parent-directory "photos" `
  --folder-name "2026" `
  --apply
```

### Parámetros de creación de carpetas

| Parámetro | Descripción |
| --- | --- |
| `--create-folder` | Crea un archivo marcador de directorio |
| `--parent-directory <dir>` | Directorio padre. Para el directorio raíz, pasa una cadena vacía |
| `--folder-name <name>` | Nombre de la nueva carpeta |

## Bloquear y restaurar IP de subida

Con el permiso de gestión puedes añadir una IP a la lista de bloqueo de subidas o quitarla de esa lista. Esta acción afecta las subidas futuras desde esa IP, pero no elimina archivos que esa IP ya haya subido.

Bloquear una IP de subida:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --block-ip "67.159.48.149" `
  --apply
```

Restaurar una IP de subida:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --allow-ip "67.159.48.149" `
  --apply
```

Ver la lista actual de IP bloqueadas para subida:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --blocked-ips
```

### Parámetros de gestión de IP

| Parámetro | Descripción |
| --- | --- |
| `--block-ip <ip>` | Añade una IP a la lista de bloqueo de subidas |
| `--allow-ip <ip>` | Quita una IP de la lista de bloqueo de subidas |

## Crear y eliminar Tokens de subida de corta duración

El permiso de gestión puede crear Tokens de corta duración dedicados a subir archivos. Este Token siempre tiene solo el permiso `upload`, `autoDelete` siempre es `true` y el tiempo máximo de expiración es `1` día.

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --create-upload-token `
  --name "Temporary Upload Token" `
  --owner "upload-bot" `
  --default-upload-channel telegram `
  --expires-in-minutes 20 `
  --apply `
  --output json
```

También puedes pasar directamente una marca de tiempo en milisegundos:

```powershell
$expiresAt = [DateTimeOffset]::UtcNow.AddHours(12).ToUnixTimeMilliseconds()

node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --create-upload-token `
  --name "Upload Token valid for one day" `
  --owner "upload-bot" `
  --default-upload-channel telegram `
  --expires-at $expiresAt `
  --apply
```

Al eliminar un Token de subida de corta duración, debes pasar el `id` devuelto por la API de creación. Un Token de gestión solo puede eliminar Tokens que cumplan estas condiciones:

| Condición | Requisito |
| --- | --- |
| Permiso | `permissions` solo contiene `upload` |
| Eliminación automática | `autoDelete=true` |
| Vigencia | `expiresAt - createdAt <= 24` horas |

Eliminar un Token de subida de corta duración:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --delete-upload-token `
  --token-id "mqt4jqokc85be80d1f0f47078e848a77d6c1aa6e" `
  --apply
```

Un Token de gestión no puede eliminar Tokens normales, Tokens de larga duración, Tokens que incluyan permisos `list` / `delete` / `manage`, ni Tokens de subida con vigencia superior a `1` día. Esos Tokens deben gestionarse desde el panel de administración en el navegador.

### Parámetros de Token de subida de corta duración

| Parámetro | Descripción |
| --- | --- |
| `--create-upload-token` | Crea un Token de corta duración dedicado a subidas |
| `--delete-upload-token` | Elimina un Token de corta duración dedicado a subidas que cumpla las condiciones |
| `--name <name>` | Nombre del Token |
| `--owner <owner>` | Nota de propietario del Token |
| `--default-upload-channel <key>` | Canal de subida predeterminado. Debe ser un canal real, por ejemplo `telegram`, `s3` o `github` |
| `--expires-in-minutes <n>` | Minutos hasta la expiración desde el momento actual. Máximo `1440` |
| `--expires-at <ms>` | Tiempo absoluto de expiración como marca de tiempo en milisegundos. Máximo `24` horas desde el momento actual |
| `--token-id <id>` | ID del Token de subida de corta duración que se va a eliminar |

Los Tokens de subida de corta duración solo permiten subir archivos. En las pruebas, un Token de corta duración con `permissions=["upload"]` fue rechazado al acceder a las APIs de listado, gestión de archivos y eliminación.

Después de expirar, los Tokens con `autoDelete=true` se limpian cuando el backend comprueba que han caducado. Leer la lista de API Tokens también limpia los Tokens caducados cuyo `autoDelete` es `true`.

## Correspondencia de APIs

| Acción | Método | API |
| --- | --- | --- |
| Modificar metadatos de archivo | `PATCH` | `/api/manage/metadata/{fileId}` |
| Leer etiqueta de moderación | `GET` | `/api/manage/label/{fileId}` |
| Modificar etiqueta de moderación | `POST` | `/api/manage/label/{fileId}` |
| Leer etiquetas de archivo | `GET` | `/api/manage/tags/{fileId}` |
| Modificar etiquetas de archivo | `POST` | `/api/manage/tags/{fileId}` |
| Modificar etiquetas de archivo por lotes | `POST` | `/api/manage/tags/batch` |
| Modificar estado de lista | `POST` | `/api/manage/listType/{fileId}` |
| Modificar estado de lista por lotes | `POST` | `/api/manage/listType/batch` |
| Mover o renombrar | `POST` | `/api/manage/relocate/batch` |
| Crear carpeta | `POST` | `/api/manage/folder/create` |
| Bloquear IP de subida | `POST` | `/api/manage/cusConfig/blockip` |
| Restaurar IP de subida | `POST` | `/api/manage/cusConfig/whiteip` |
| Crear Token de subida de corta duración | `POST` | `/api/manage/apiTokens` |
| Eliminar Token de subida de corta duración | `DELETE` | `/api/manage/apiTokens?id={tokenId}` |

El script añade automáticamente:

```text
Authorization: Bearer your API Token
```

## Formato de salida

La salida `pretty` predeterminada es adecuada para lectura humana. Si otro programa necesita procesar el resultado, usa `--output json`:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get-tags `
  --file-id "photos/2026/a.jpg" `
  --output json
```

También puedes guardar el resultado completo:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get-tags `
  --file-id "photos/2026/a.jpg" `
  --output json `
  --save-response ".\manage-result.json"
```

Las acciones por lotes de movimiento, renombrado y listas analizan el flujo de progreso NDJSON devuelto por el backend y resumen la cantidad de eventos, el estado de finalización y los detalles de errores.

## Preguntas frecuentes

### Por qué el comando no modificó nada

Las acciones de escritura usan vista previa por defecto. Después de confirmar que la vista previa es correcta, añade `--apply` para guardar realmente.

### Este script puede subir, listar o eliminar archivos

No. Para subir usa los scripts de subida; para listar y filtrar usa el script de listado; para eliminar archivos concretos usa el script de eliminación. El script de gestión de archivos solo cubre acciones ligeras bajo el permiso `manage`.

### Cómo sé qué fileId debo pasar

Consulta primero los archivos con `imgbed-token-list.mjs --files`. El campo `name` del resultado suele ser el ID del archivo, que es el valor que se pasa aquí como `--file-id`.

### Cuántos archivos puede procesar una operación por lotes

El backend procesa como máximo `15` archivos por petición. El script usa `--batch-size 15` por defecto; si pasas un valor menor, divide automáticamente el trabajo en varias peticiones secuenciales.

### Se puede crear una carpeta realmente vacía

Los directorios de ImgBed se derivan de rutas de archivo; no existen directorios vacíos reales. `--create-folder` crea un archivo marcador `0.md` para que el directorio aparezca en el gestor de archivos y en las estadísticas de directorios.

### Cuánto puede durar como máximo un Token de subida de corta duración

Como máximo `1` día, es decir, `1440` minutos. Si se supera este límite, el script lo rechaza localmente y el backend también devuelve `API_TOKEN_MANAGE_CREATE_EXPIRES_AT_TOO_LONG`.

### Un Token de subida de corta duración se elimina automáticamente al expirar

Se limpia automáticamente, pero no mediante una tarea programada inmediata. Un Token caducado se limpia cuando vuelve a comprobarse. Leer la lista de API Tokens también limpia los Tokens caducados con `autoDelete=true`.
