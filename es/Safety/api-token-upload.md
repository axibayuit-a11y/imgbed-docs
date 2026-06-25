# Subir archivos con API Token

La subida con API Token está pensada para scripts, tareas automatizadas y programas de terceros. No hace falta abrir la interfaz web: con la URL del sitio, el token, la ruta del archivo local y un canal de subida real, puedes subir el archivo a ImgBed y recibir su URL al terminar.

![Editar API Token](../../image/Safety/apitoken/编辑api token.png)

## Preparación

Entra al panel de administración y abre:

```text
System Settings -> Security Settings -> API Token
```

Al crear o editar el API Token, asegúrate de que tenga permiso de subida y un canal de subida predeterminado real. Las subidas con API Token no usan la entrada de asignación inteligente, y los scripts también deben enviar un canal real.

## Descargar scripts de subida

La documentación incluye dos scripts de Node.js:

| Script | Uso |
| --- | --- |
| <a href="/tools/imgbed-token-single-upload.mjs" download>Descargar script de subida en una sola petición</a> | Llama una sola vez a `/upload`. Sirve para archivos pequeños y pruebas de conectividad. |
| <a href="/tools/imgbed-token-chunk-upload.mjs" download>Descargar script de subida por partes</a> | Usa subidas por partes, subidas directas o sesiones de plataforma mediante API Token. Recomendado para archivos grandes. |

Necesitas Node.js 18 o superior.

## Listar canales disponibles

Ambos scripts pueden listar primero los canales de subida disponibles para el API Token actual:

```powershell
node imgbed-token-single-upload.mjs --base-url "https://your-domain" --token "your API Token" --list-channels
node imgbed-token-chunk-upload.mjs --base-url "https://your-domain" --token "your API Token" --list-channels
```

Para listar canales no necesitas pasar `--file` ni `--channel`. La respuesta incluye el canal predeterminado, las claves de canal, los nombres de subcanales y el estado de balanceo de carga. No devuelve claves, tokens de actualización ni otros datos sensibles.

## Qué modo de subida elegir

| Modo | Cuándo usarlo | Descripción |
| --- | --- | --- |
| Una sola petición | Archivos pequeños, scripts sencillos, pruebas de API | Envía el archivo completo a `/upload` en una sola petición. |
| Subida por partes | Archivos grandes o propensos a agotar el tiempo de espera | El script usa el flujo por partes, directo o de sesión según el canal. |

Para archivos grandes, usa primero el script de subida por partes. La subida en una sola petición está limitada por el tamaño de petición de Cloudflare, la memoria del Worker y los límites propios de cada plataforma.

## Subida en una sola petición

El script de una sola petición llama una vez a `/upload`.

```powershell
node imgbed-token-single-upload.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --file "D:\test\image.png" `
  --channel s3 `
  --folder "photos/2026"
```

También puedes poner el Token en una variable de entorno:

```powershell
$env:IMGBED_API_TOKEN="your API Token"
node imgbed-token-single-upload.mjs --base-url "https://your-domain" --file "D:\test\image.png" --channel s3
```

### Parámetros de subida en una sola petición

| Parámetro | Obligatorio | Descripción |
| --- | --- | --- |
| `--base-url <url>` | Sí | URL del sitio ImgBed, por ejemplo `https://image.ai6.me`. |
| `--token <token>` | Sí | API Token. También puedes usar la variable `IMGBED_API_TOKEN`. |
| `--file <path>` | Sí | Ruta del archivo local. |
| `--channel <key>` | Sí | Canal de subida. |
| `--folder <path>` | No | Carpeta de destino, por ejemplo `photos/2026` o `/user/`. |
| `--name-type <type>` | No | Modo de nombre, corresponde a `uploadNameType` en el servidor. Por defecto `default`. |
| `--channel-name <name>` | No | Selecciona un subcanal o cuenta concreta. Si se omite, decide la configuración del servidor. |
| `--retries <n>` | No | Reintentos ante fallos temporales. Por defecto `3`. |
| `--timeout-ms <n>` | No | Timeout de la petición. Por defecto `180000`. |
| `--output <pretty\|json>` | No | Formato de salida. Por defecto `pretty`. |
| `--save-response <path>` | No | Guarda la respuesta final como JSON. |
| `--list-channels` | No | Lista los canales disponibles para el token y termina sin subir. |

### Canales para una sola petición

| Clave | Canal |
| --- | --- |
| `telegram` / `tg` | Telegram |
| `discord` / `dc` | Discord |
| `cfr2` / `r2` | Cloudflare R2 |
| `s3` | S3 |
| `webdav` / `wd` | Canal de almacenamiento WebDAV |
| `github` / `gh` | GitHub Releases |
| `gitlab` / `gl` | GitLab Packages |
| `huggingface` / `hf` | Hugging Face |
| `onedrive` / `od` | OneDrive |
| `googledrive` / `google` / `gd` | Google Drive |
| `dropbox` / `db` | Dropbox |
| `yandex` / `yx` | Yandex Disk |
| `pcloud` / `pd` | pCloud |

### Límites de una sola petición

Conviene mantener los archivos de una sola petición por debajo de 100 MB.

Estos canales tienen umbrales explícitos para `/upload` en una sola petición:

| Canal | Límite |
| --- | ---: |
| Telegram | 20 MiB |
| Discord | 10 MiB |
| S3 | 64 MiB |
| WebDAV | 64 MiB |
| GitHub Releases | 64 MiB |
| GitLab Packages | 64 MiB |

Si se supera el límite, el script muestra el error correspondiente localmente. Para otros canales, el script no impone un límite local fijo de 100 MB. Si el cuerpo de la petición supera la capacidad de Cloudflare o de la plataforma, el error vendrá de Cloudflare o del servicio remoto.

## Subida por partes

El script de subida por partes pide primero al servidor que resuelva el destino del archivo y luego usa el flujo de archivo grande del canal elegido. No tienes que implementar sesiones de partes, fusión ni finalización.

```powershell
node imgbed-token-chunk-upload.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --file "D:\test\video.zip" `
  --channel github `
  --folder "photos/2026" `
  --concurrency 3
```

### Parámetros de subida por partes

| Parámetro | Obligatorio | Descripción |
| --- | --- | --- |
| `--base-url <url>` | Sí | URL del sitio ImgBed. |
| `--token <token>` | Sí | API Token. También puedes usar `IMGBED_API_TOKEN`. |
| `--file <path>` | Sí | Ruta del archivo local. |
| `--channel <key>` | Sí | Canal de subida. |
| `--folder <path>` | No | Carpeta de destino. |
| `--name-type <type>` | No | Modo de nombre, corresponde a `uploadNameType`. Por defecto `default`. |
| `--channel-name <name>` | No | Selecciona un subcanal o cuenta concreta. Si se omite, decide la configuración del servidor. |
| `--concurrency <n>` | No | Número de subidas concurrentes. Por defecto `1`, máximo `3`. |
| `--retries <n>` | No | Reintentos ante fallos temporales. Por defecto `3`. |
| `--timeout-ms <n>` | No | Timeout por petición. Por defecto `180000`. |
| `--output <pretty\|json>` | No | Formato de salida. Por defecto `pretty`. |
| `--save-response <path>` | No | Guarda la respuesta final como JSON. |
| `--list-channels` | No | Lista los canales disponibles para el token y termina sin subir. |

### Canales de subida por partes

| Clave | Flujo de subida |
| --- | --- |
| `telegram` / `tg` | Sesión real por partes sobre `/upload` |
| `discord` / `dc` | Sesión real por partes sobre `/upload` |
| `cfr2` / `r2` | Sesión real por partes sobre `/upload` |
| `github` / `gh` | Sesión real por partes sobre `/upload` |
| `gitlab` / `gl` | Sesión real por partes sobre `/upload` |
| `webdav` / `wd` | Sesión real por partes sobre `/upload` |
| `s3` | Subida multipart de S3 |
| `onedrive` / `od` | Sesión de subida de OneDrive |
| `googledrive` / `google` / `gd` | Subida reanudable de Google Drive |
| `dropbox` / `db` | Sesión de subida de Dropbox |
| `yandex` / `yx` | URL de subida directa de Yandex |
| `pcloud` / `pd` | Enlace de subida de pCloud |
| `huggingface` / `hf` | Subida Hugging Face LFS |

Las pruebas con archivos comprimidos en Yandex fueron inestables. Los archivos no comprimidos sí se han verificado correctamente.

## Resultado de subida

Al subir correctamente, el script imprime:

```text
success
src: /file/photos/2026/example.png
url: https://your-domain/file/photos/2026/example.png
fileId: photos/2026/example.png
```

| Campo | Descripción |
| --- | --- |
| `src` | Ruta interna del archivo en el sitio. |
| `url` | URL completa, lista para usar en tus scripts o base de datos. |
| `fileId` | ID del archivo, útil para consultas, gestión o registros posteriores. |
| `channelName` | El script por partes puede devolver el subcanal o cuenta usado realmente. |

Con `--output json`, el script imprime el JSON completo para procesamiento automático.

## Llamar directamente a la API de una sola petición

Si no usas el script, también puedes llamar directamente al punto de conexión de subida en una sola petición:

```text
POST https://your-domain/upload?uploadChannel=s3&uploadFolder=photos/2026&uploadNameType=default
Authorization: Bearer your API Token
Content-Type: multipart/form-data
```

Campo del formulario:

| Campo | Obligatorio | Descripción |
| --- | --- | --- |
| `file` | Sí | Archivo que se va a subir. |

Parámetros de consulta:

| Parámetro | Obligatorio | Descripción |
| --- | --- | --- |
| `uploadChannel` | Sí | Canal de subida real. |
| `uploadFolder` | No | Carpeta de destino. |
| `uploadNameType` | No | Modo de nombre. |
| `channelName` | No | Subcanal o cuenta concreta. |

Respuesta correcta de ejemplo:

```json
{
  "success": true,
  "src": "/file/photos/2026/example.png",
  "url": "https://your-domain/file/photos/2026/example.png",
  "fileId": "photos/2026/example.png"
}
```

## Preguntas frecuentes

### Falla la subida grande en una sola petición

`/upload` en una sola petición envía el archivo completo de una vez. Los archivos grandes pueden ser bloqueados por Cloudflare o por la plataforma remota. Para archivos grandes usa el script de subida por partes.

### Pasé `--channel-name` y aun así falla

Comprueba en el panel que ese canal tenga un subcanal con el mismo nombre y que esté habilitado. Si no pasas `--channel-name`, el servidor elige una cuenta disponible según la configuración del canal.

### Quiero usar el resultado en otro programa

Usa `--output json` o añade `--save-response result.json`. Tu programa puede leer el campo `url` para obtener el enlace completo.

### Yandex no sube archivos comprimidos

Yandex no admite formatos de archivo comprimido. Puede deberse a su política de plataforma. Si usas Yandex, sube archivos no comprimidos siempre que sea posible.


