# Eliminar archivos con API Token

La eliminación con API Token está pensada para scripts, tareas automatizadas y programas de terceros. No hace falta abrir el panel de administración: con la URL del sitio, el Token y los ID de archivo exactos, puedes eliminar uno o varios archivos de ImgBed.

Eliminar es una operación de escritura y borra datos reales cuando se ejecuta el comando. Se recomienda usar primero `imgbed-token-list.mjs` para confirmar los valores de `fileId` que quieres borrar, y después pasarlos al script de eliminación.

![Editar API Token](../../image/Safety/apitoken/编辑删除权限api.png)

## Preparación

Entra al panel de administración y abre:

```text
System Settings -> Security Settings -> API Token
```

Al crear o editar el API Token, asegúrate de que el Token tenga permiso de eliminación. Este script solo necesita el permiso `delete`.

También puedes poner el Token en una variable de entorno:

```powershell
$env:IMGBED_API_TOKEN="your API Token"
```

## Descargar el script

| Script | Uso |
| --- | --- |
| <a href="/tools/imgbed-token-delete.mjs" download>Descargar script de eliminación de archivos</a> | Elimina uno o varios ID de archivo indicados de forma explícita. |

Necesitas Node.js 18 o superior en el equipo local.

## Comportamiento de la API de eliminación

El script de eliminación llama a la API de eliminación del servidor:

```text
POST /api/manage/delete/batch
```

La petición debe incluir el API Token:

```text
Authorization: Bearer <token>
```

Ejemplo de cuerpo de petición:

```json
{
  "fileIds": ["photos/2026/a.txt"],
  "deleteStrictness": "strict"
}
```

Si `fileIds` contiene un solo archivo, se trata de una eliminación individual. Si contiene varios, se trata de una eliminación por lotes. El servidor procesa como máximo 15 archivos por petición, y el script divide el trabajo automáticamente según `--batch-size`.

La API devuelve un flujo de progreso NDJSON. Los eventos habituales son `batch_start`, `file_step`, `file_done`, `batch_complete` y `batch_error`. El script interpreta esos eventos y los resume como una salida legible o como resultado JSON.

Después de una eliminación correcta, el servidor actualiza automáticamente los índices de archivos, las estadísticas de directorios, las estadísticas de capacidad y la limpieza de caché.

## Parámetros del script de eliminación

| Parámetro | Obligatorio | Descripción |
| --- | --- | --- |
| `--base-url <url>` | Sí | URL del sitio ImgBed, por ejemplo `https://image.ai6.me`. |
| `--token <token>` | Sí | API Token. También puedes usar la variable de entorno `IMGBED_API_TOKEN`. |
| `--file-id <id>` | Sí | ID del archivo que quieres eliminar. Puedes pasarlo varias veces. |
| `--strictness <strict\|soft>` | No | Nivel de rigor de eliminación. Por defecto es `strict`. |
| `--batch-size <n>` | No | Cantidad de archivos por petición. Por defecto `15`, máximo `15`. |
| `--retries <n>` | No | Reintentos ante fallos temporales. Por defecto `3`. |
| `--timeout-ms <n>` | No | Tiempo de espera por petición. Por defecto `180000`. |
| `--output <pretty\|json>` | No | Formato de salida. Por defecto `pretty`. |
| `--save-response <path>` | No | Guarda el resultado final como archivo JSON. |
| `-h` / `--help` | No | Muestra la ayuda del script. |

Este script solo elimina los valores pasados explícitamente con `--file-id`. No hace coincidencias aproximadas, no vacía directorios completos y no lee ID pendientes desde listas separadas por comas ni desde archivos locales.

## Eliminación estricta y eliminación flexible

| Modo | Descripción |
| --- | --- |
| `strict` | Modo predeterminado. Si falla la eliminación en el almacenamiento remoto, el registro de ImgBed se conserva para que puedas reintentarlo o investigarlo. |
| `soft` | Si falla la eliminación en el almacenamiento remoto, el registro de ImgBed se limpia igualmente y el resultado devuelve una advertencia. |

Si necesitas que el archivo remoto se elimine para considerar correcta la operación, usa el modo predeterminado `strict`. Si una plataforma remota ya no puede borrar el objeto y solo quieres limpiar el registro de ImgBed, usa `soft`.

## Ejemplos

Eliminar un archivo:

```powershell
node imgbed-token-delete.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --file-id "photos/2026/a.txt"
```

Usar el Token desde una variable de entorno:

```powershell
$env:IMGBED_API_TOKEN="your API Token"

node imgbed-token-delete.mjs `
  --base-url "https://your-domain" `
  --file-id "photos/2026/a.txt"
```

Eliminar varios archivos:

```powershell
node imgbed-token-delete.mjs `
  --base-url "https://your-domain" `
  --file-id "photos/2026/a.txt" `
  --file-id "photos/2026/b.txt" `
  --file-id "photos/2026/c.txt"
```

Limpiar el registro de ImgBed aunque falle la eliminación remota:

```powershell
node imgbed-token-delete.mjs `
  --base-url "https://your-domain" `
  --file-id "photos/2026/a.txt" `
  --strictness soft
```

Generar JSON y guardar el resultado:

```powershell
node imgbed-token-delete.mjs `
  --base-url "https://your-domain" `
  --file-id "photos/2026/a.txt" `
  --output json `
  --save-response ".\delete-result.json"
```

Limitar cada petición a 5 archivos:

```powershell
node imgbed-token-delete.mjs `
  --base-url "https://your-domain" `
  --file-id "photos/2026/a.txt" `
  --file-id "photos/2026/b.txt" `
  --batch-size 5
```

## Comprobar el `fileId` antes de eliminar

El script de eliminación necesita ID de archivo de ImgBed. Puedes usar primero el script de listado para revisar los archivos de un directorio:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --dir "photos/2026" `
  --count 10 `
  --output json
```

El campo `name` de la respuesta suele ser el `fileId` que puedes pasar al script de eliminación.

## Preguntas frecuentes

### ¿Por qué falló la eliminación pero el archivo sigue en la lista?

Con el modo predeterminado `strict`, el registro de ImgBed se conserva si falla la eliminación en el almacenamiento remoto. Esto evita borrar solo el índice local mientras el archivo remoto sigue existiendo. Cuando confirmes que solo quieres limpiar el registro de ImgBed, vuelve a intentarlo con el mismo `fileId` y el modo `soft`.

### ¿Por qué hay advertencias en el resultado?

Las advertencias suelen indicar un problema no crítico durante la eliminación remota, la limpieza de caché o el cierre de estadísticas. El script las resume para que puedas decidir si hace falta reintentar.

### ¿Puedo eliminar un directorio completo de una vez?

Este script no ofrece una operación para vaciar directorios. Usa primero el script de listado para filtrar valores `fileId` explícitos y después pasa uno por uno los archivos que quieras eliminar.



