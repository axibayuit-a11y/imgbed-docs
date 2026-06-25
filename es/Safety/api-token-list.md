# Listar y filtrar con API Token

El script de listado con API Token sirve para que scripts, tareas automatizadas y programas de terceros lean datos de ImgBed. Solo usa el permiso `list`: no sube archivos, no elimina archivos, no cambia la configuración y tampoco bloquea ni permite la subida desde ninguna IP.

![Editar API Token](../../image/Safety/apitoken/编辑列出权限api.png)

Usos principales:

| Función | Descripción |
| --- | --- |
| Listado del gestor de archivos | Lee la lista de archivos del panel de administración y admite los filtros avanzados del gestor de archivos. |
| Listado de gestión de usuarios | Lee estadísticas de subida por usuario/IP y admite los filtros de gestión de usuarios. |
| Lista de canales de subida | Lee canales de subida, subcanales, capacidad y estado de balanceo de carga con datos sensibles ocultos. |
| Tabla de estadísticas de directorios | Lee estadísticas de directorios e información de paginación. |

## Preparación

Entra al panel de administración y abre:

```text
System Settings -> Security Settings -> API Token
```

Al crear o editar el API Token, asegúrate de que el Token permita listar. Este script solo necesita el permiso `list`.

También puedes poner el Token en una variable de entorno:

```powershell
$env:IMGBED_API_TOKEN="your API Token"
```

## Descargar el script

| Script | Uso |
| --- | --- |
| <a href="/tools/imgbed-token-list.mjs" download>Descargar script de listado y filtrado</a> | Listado del gestor de archivos, listado de gestión de usuarios, lista de canales de subida y estadísticas de directorios. |

Necesitas Node.js 18 o superior en el equipo local.

## Parámetros comunes

| Parámetro | Obligatorio | Descripción |
| --- | --- | --- |
| `--base-url <url>` | Sí | URL del sitio ImgBed, por ejemplo `https://image.ai6.me`. |
| `--token <token>` | Sí | API Token. También puedes usar la variable de entorno `IMGBED_API_TOKEN`. |
| `--retries <n>` | No | Reintentos ante fallos temporales. Por defecto `3`. |
| `--timeout-ms <n>` | No | Tiempo de espera por petición. Por defecto `180000`. |
| `--output <pretty\|json>` | No | Formato de salida. Por defecto `pretty`; para programas se recomienda `json`. |
| `--save-response <path>` | No | Guarda el resultado final como archivo JSON. |
| `-h` / `--help` | No | Muestra la ayuda del script. |

## Listado del gestor de archivos

Listar archivos del gestor de archivos:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --count 10
```

Generar salida JSON:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --count 10 `
  --output json
```

Leer solo el recuento con los filtros actuales:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --file-summary `
  --dir "photos/2026" `
  --recursive
```

### Parámetros del gestor de archivos

| Parámetro | Descripción |
| --- | --- |
| `--files` | Lista archivos. |
| `--file-summary` | Lee solo estadísticas de cantidad. |
| `--start <n>` | Desplazamiento de paginación. |
| `--count <n>` | Cantidad de registros que se devolverán. |
| `--dir <path>` | Directorio indicado. |
| `--recursive` | Incluye archivos de subdirectorios. |
| `--search <text>` | Palabra clave de búsqueda. |
| `--channel <key>` | Filtra por canal principal de subida, por ejemplo `github`, `s3` o `yandex`. |
| `--channel-scope <primary\|backup\|all>` | Alcance del filtro de canal: canal principal, canal de respaldo o todos. |
| `--channel-name-groups <value>` | Filtro de grupos de subcanales; se pasa al servidor tal como está. |
| `--list-type <csv>` | Tipo de lista, normalmente `None,White,Block`. |
| `--include-tags <csv>` | Exige que existan estas etiquetas. |
| `--exclude-tags <csv>` | Excluye estas etiquetas. |
| `--time-start <ms>` | Inicio del intervalo de subida, como marca de tiempo en milisegundos. |
| `--time-end <ms>` | Fin del intervalo de subida, como marca de tiempo en milisegundos. |
| `--file-exts <csv>` | Incluye solo extensiones concretas, por ejemplo `jpg,png,pdf`. |
| `--exclude-file-exts <csv>` | Excluye extensiones concretas. |
| `--file-status-categories <csv>` | Categorías de archivo: `image,audio,video,document,code,other`. |
| `--upload-ip <ip>` | Filtra por prefijo de IP de subida. |
| `--age-ratings <csv>` | Clasificación por edad: `none,all-ages,r12,r16,r18`. |
| `--orientation <csv>` | Filtro de orientación; se pasa al servidor con los valores existentes. |
| `--read-source <csv>` | Filtro de origen de lectura; se pasa al servidor con los valores existentes. |
| `--access-status <normal\|blocked>` | Estado de acceso público. |
| `--min-width <n>` | Anchura mínima. |
| `--max-width <n>` | Anchura máxima. |
| `--min-height <n>` | Altura mínima. |
| `--max-height <n>` | Altura máxima. |
| `--min-file-size <mb>` | Tamaño mínimo de archivo, usando el parámetro en MB ya definido por el servidor. |
| `--max-file-size <mb>` | Tamaño máximo de archivo, usando el parámetro en MB ya definido por el servidor. |

### Ejemplos del gestor de archivos

Buscar PDF:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --search "pdf" `
  --file-status-categories "document" `
  --count 20
```

Filtrar por IP de subida y canal:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --upload-ip "103.62" `
  --channel yandex `
  --channel-scope primary
```

Guardar el resultado completo:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --count 100 `
  --output json `
  --save-response ".\files.json"
```

## Listado de gestión de usuarios

Listar estadísticas de subida por usuario/IP:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --count 20
```

Buscar una IP o dirección:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --search "43.198.183.56"
```

Ver el detalle de archivos subidos por una IP:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --user-detail `
  --ip "43.198.183.56" `
  --count 20
```

Listar IP bloqueadas para subir:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --blocked-ips
```

### Parámetros de gestión de usuarios

| Parámetro | Descripción |
| --- | --- |
| `--users` | Lista estadísticas de subida por usuario/IP. |
| `--user-detail` | Muestra el detalle de archivos subidos por una IP concreta. |
| `--blocked-ips` | Lista IP bloqueadas para subir. |
| `--ip <ip>` | Obligatorio con `--user-detail`. |
| `--start <n>` | Desplazamiento de paginación. |
| `--count <n>` | Cantidad de registros que se devolverán. |
| `--sort <value>` | Orden: `timeDesc`, `timeAsc`, `countDesc`, `countAsc`, `totalSizeDesc`, `totalSizeAsc`. |
| `--search <text>` | Busca IP o dirección. |
| `--upload-status <allowed\|blocked>` | Indica si la subida está permitida. |
| `--start-time <ms>` | Inicio del intervalo estadístico, como marca de tiempo en milisegundos. |
| `--end-time <ms>` | Fin del intervalo estadístico, como marca de tiempo en milisegundos. |
| `--file-status-categories <csv>` | Filtro de categorías de archivo. |
| `--age-ratings <csv>` | Filtro de clasificación por edad. |
| `--min-file-size <mb>` | Tamaño mínimo de archivo. |
| `--max-file-size <mb>` | Tamaño máximo de archivo. |
| `--list-type <csv>` | Tipo de lista, normalmente `None,White,Block`. |
| `--access-status <normal\|blocked>` | Estado de acceso público. |

### Ejemplos de gestión de usuarios

Listar usuarios bloqueados para subir:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --upload-status blocked
```

Buscar por palabra clave de dirección:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --search "Hong Kong"
```

Ordenar por cantidad de subidas:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --sort countDesc `
  --count 50
```

## Lista de canales de subida

Listar la configuración de canales de subida con datos sensibles ocultos:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --channels
```

La respuesta incluye:

| Campo | Descripción |
| --- | --- |
| `type` | Tipo de canal de subida, por ejemplo `github`, `s3` o `yandex`. |
| `name` | Nombre del subcanal o de la cuenta. |
| `enabled` | Indica si está habilitado. |
| `load_balance_enabled` | Indica si el balanceo de carga está habilitado para este tipo de canal. |
| `quota_enabled` | Indica si está habilitada la comprobación de capacidad. |
| `quota_limit_bytes` | Límite de capacidad. |
| `quota_used_bytes` | Capacidad utilizada. |
| `quota_checked_at` | Hora de comprobación de capacidad. |
| `tag_json` | Etiquetas no sensibles, como repositorio público o repositorio privado. |
| `created_at` / `updated_at` | Hora de creación y actualización. |

Esta API no devuelve claves secretas, tokens de actualización, access tokens, contraseñas ni otra configuración sensible.

## Estadísticas de directorios

Listar estadísticas de directorios:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --directories `
  --limit 20
```

Listar rutas completas de directorio y buscar por prefijo:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --directories `
  --scope full `
  --search-prefix "test" `
  --include-parents `
  --limit 10
```

### Parámetros de estadísticas de directorios

| Parámetro | Descripción |
| --- | --- |
| `--directories` | Lista la tabla de estadísticas de directorios. |
| `--dir <path>` | Directorio desde el que se empieza a listar. |
| `--scope <direct\|full>` | `direct` lista solo directorios hijos directos; `full` lista rutas completas. |
| `--search-prefix <path>` | Busca por prefijo de directorio. |
| `--include-parents` | En modo `full`, incluye también los directorios padre. |
| `--limit <n>` | Cantidad de registros que se devolverán. El máximo del servidor es `100`. |
| `--cursor <path>` | Cursor de la página siguiente. |

## Formato de salida

La salida predeterminada `pretty` es cómoda para lectura humana:

```powershell
node imgbed-token-list.mjs --base-url "https://your-domain" --token "your API Token" --users --count 5
```

Para que lo procese otro programa, usa `--output json`:

```powershell
node imgbed-token-list.mjs --base-url "https://your-domain" --token "your API Token" --users --count 5 --output json
```

También puedes guardar el resultado completo:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --count 5 `
  --output json `
  --save-response ".\users.json"
```

## Preguntas frecuentes

### ¿Este script modifica datos?

No. Este script solo llama a API de lectura. No sube, elimina ni mueve archivos; tampoco edita la configuración ni bloquea o permite ninguna IP.

### ¿Por qué se necesita el permiso `list`?

El listado del gestor de archivos, el listado de gestión de usuarios, la lista de canales con datos sensibles ocultos y las estadísticas de directorios son funciones de lectura, por eso solo necesitan el permiso `list` del API Token.

### ¿Cómo compruebo todos los parámetros disponibles?

Ejecuta:

```powershell
node imgbed-token-list.mjs --help
```

El script mostrará todas las acciones y parámetros.


