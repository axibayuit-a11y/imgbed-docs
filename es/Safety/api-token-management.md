# Gestionar configuración con API Token

La gestión con API Token está pensada para scripts de automatización, herramientas de operación o paneles de control externos. Permite leer y modificar configuración de canales de subida, seguridad, páginas, otros ajustes y relaciones federadas ligeras sin abrir el panel de administración.

El permiso de gestión solo expone operaciones ligeras aptas para scripts. Las operaciones pesadas que requieren confirmación en navegador, tareas por lotes de la interfaz web o limpieza de índices federados deben seguir haciéndose desde el panel en el navegador.

![Editar API Token](../../image/Safety/apitoken/编辑管理权限api.png)

## Preparación

Entra al panel de administración y abre:

```text
System Settings -> Security Settings -> API Token
```

Al crear o editar el API Token, asegúrate de que tenga permiso de gestión. Este permiso puede modificar la configuración del sitio, así que conviene dárselo solo a scripts o usuarios de confianza.

Los tres scripts de gestión usan modo de vista previa por defecto para las escrituras. Revisa el resultado y añade `--apply` para guardar realmente.

También puedes poner el Token en una variable de entorno:

```powershell
$env:IMGBED_API_TOKEN="your API Token"
```

## Descargar scripts de gestión

La documentación incluye tres scripts de Node.js:

| Script | Uso |
| --- | --- |
| <a href="/tools/imgbed-token-upload-settings.mjs" download>script de gestión de subidas</a> | Gestiona canales de subida, subcanales y balanceo de carga. |
| <a href="/tools/imgbed-token-site-settings.mjs" download>script de ajustes del sitio</a> | Gestiona seguridad, páginas y otros ajustes. |
| <a href="/tools/imgbed-token-federation.mjs" download>script de relaciones federadas</a> | Gestiona acciones federadas ligeras, solicitudes y mensajes. |

Necesitas Node.js 18 o superior.

### Parámetros comunes

| Parámetro | Obligatorio | Descripción |
| --- | --- | --- |
| `--base-url <url>` | Sí | URL del sitio ImgBed, por ejemplo `https://image.ai6.me`. |
| `--token <token>` | Sí | API Token. También puedes usar `IMGBED_API_TOKEN`. |
| `--retries <n>` | No | Reintentos ante fallos temporales. Por defecto `3`. |
| `--timeout-ms <n>` | No | Timeout por petición. Por defecto `180000`. |
| `--output <pretty\|json>` | No | Formato de salida. Por defecto `pretty`; usa `json` para integraciones. |
| `--save-response <path>` | No | Guarda el resultado final como JSON. |
| `--apply` | No | Ejecuta realmente la escritura. Sin este parámetro solo muestra una vista previa. |
| `-h` / `--help` | No | Muestra la ayuda del script. |

## Ajustes de subida

El script de ajustes de subida permite listar, leer, crear, editar y eliminar subcanales de subida. También puede activar o desactivar el balanceo de carga de un canal principal.

```powershell
node imgbed-token-upload-settings.mjs --base-url "https://your-domain" --token "your API Token" --list
```

### Parámetros de ajustes de subida

| Parámetro | Descripción |
| --- | --- |
| `--list` | Lista grupos de configuración de subida. |
| `--get` | Lee un canal principal o un subcanal concreto. |
| `--upsert` | Crea o edita un subcanal. Sin `--apply` solo muestra vista previa. |
| `--delete` | Elimina un subcanal. Sin `--apply` solo muestra vista previa. |
| `--load-balance <true\|false>` | Activa o desactiva el balanceo de carga de un canal principal. |
| `--channel <key>` | Canal principal, por ejemplo `s3`, `github` o `telegram`. |
| `--channel-name <name>` | Nombre del subcanal o cuenta. |
| `--set key=value` | Establece un campo. Se puede repetir y admite rutas con puntos. |
| `--patch-json <path>` | Fusiona campos desde un archivo JSON. |
| `--apply` | Guarda realmente el resultado. |

### Claves de canal

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

### Ejemplos de ajustes de subida

Listar todos los ajustes de subida:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --list
```

Leer la configuración de S3:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get `
  --channel s3
```

Leer un subcanal de S3:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get `
  --channel s3 `
  --channel-name "backup-s3"
```

Crear o editar un subcanal. Primero ejecútalo sin `--apply` para revisar la vista previa:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --upsert `
  --channel webdav `
  --channel-name "backup-webdav" `
  --set enabled=false `
  --set remark="backup test"
```

Después guarda el cambio:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --upsert `
  --channel webdav `
  --channel-name "backup-webdav" `
  --set enabled=false `
  --set remark="backup test" `
  --apply
```

Eliminar un subcanal:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --delete `
  --channel webdav `
  --channel-name "backup-webdav" `
  --apply
```

Activar balanceo de carga en S3:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --load-balance true `
  --channel s3 `
  --apply
```

Para campos complejos, escribe un archivo JSON y pásalo con `--patch-json`:

```json
{
  "enabled": true,
  "remark": "primary account"
}
```

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --upsert `
  --channel s3 `
  --channel-name "primary-s3" `
  --patch-json ".\s3-channel.json" `
  --apply
```

## Ajustes del sitio

El script de ajustes del sitio gestiona tres áreas:

| Área | Parámetro | Descripción |
| --- | --- | --- |
| Seguridad | `security` | Autenticación de usuarios, autenticación de administrador, dispositivos conectados, API Token, moderación de imágenes, límites de usuario, WebDAV, etc. |
| Página | `page` | Ajustes globales, página de usuario, página de administración y otros aspectos visuales. |
| Otros | `others` | API de imagen aleatoria, galería pública, nodo federado local, autoetiquetado, geolocalización IP, canal de respaldo, OCR, etc. |

Usa primero `--list-sections` para ver áreas, secciones y campos editables:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --list-sections
```

### Parámetros de ajustes del sitio

| Parámetro | Descripción |
| --- | --- |
| `--list-sections` | Lista áreas, secciones y campos editables. |
| `--get` | Lee una sección de configuración. |
| `--area <security\|page\|others>` | Selecciona el área. |
| `--section <name>` | Selecciona la sección. Usa los nombres mostrados por `--list-sections`. |
| `--set key=value` | Establece un campo. Se puede repetir. |
| `--apply` | Guarda realmente el resultado. |

En el área `page`, `--set` usa el id del ajuste de página, por ejemplo `starsEffect=true`. En `security` y `others`, usa el nombre del campo de la sección, por ejemplo `email=admin@example.com`.

### Ejemplos de ajustes del sitio

Leer los ajustes de notificación de actualización:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get `
  --area security `
  --section systemUpdate
```

Cambiar el correo de notificación de actualización. Primero ejecútalo sin `--apply`:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --area security `
  --section systemUpdate `
  --set email="admin@example.com"
```

Después guarda el cambio:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --area security `
  --section systemUpdate `
  --set email="admin@example.com" `
  --apply
```

Cambiar el efecto de estrellas del panel de administración:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --area page `
  --section adminSettings `
  --set starsEffect=true `
  --apply
```

Cambiar el idioma de geolocalización IP:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --area others `
  --section ipGeolocation `
  --set language="en" `
  --apply
```

La configuración del nodo federado local permite leer y modificar campos normales, como si está activado, el directorio de sincronización o el código de invitación. La confirmación de dominio no se gestiona con API Token. Si el panel indica que el dominio del nodo local no coincide con el dominio actual de acceso, completa la confirmación desde el navegador.

## Relaciones federadas

El script de federación gestiona el estado del nodo local, nodos a los que te uniste, nodos que se unieron al tuyo, mensajes, solicitudes de unión, reintentos sin registro, aprobaciones, rechazos y acciones ligeras que no requieren limpiar índices.

Actualizar índices, borrar índices federados y confirmar cambios de dominio dependen del flujo completo del navegador. El script no trata esas operaciones pesadas.

### Límite entre acciones ligeras y pesadas

| Acción | Soporte en script | Descripción |
| --- | --- | --- |
| Ver estado del nodo local y listar relaciones | Soportado | Solo lee registros de relación. |
| Leer y enviar mensajes | Soportado | Lee o escribe mensajes de relación. |
| Solicitar unión a otro nodo | Soportado | Usa un enlace de invitación. |
| Reintentar una relación sin registro | Soportado | Solo para tarjetas outgoing con `lastResult=none`; requiere código de invitación de 6 caracteres. |
| Cancelar solicitud outgoing pendiente | Soportado | Solo cancela una solicitud pending. |
| Aceptar o rechazar solicitud incoming | Soportado | Gestiona solicitudes de nodos que quieren unirse al tuyo. |
| Quitar relación incoming aceptada | Soportado | Actualiza el registro incoming y notifica al otro nodo. |
| Eliminar registro terminal incoming | Soportado | Solo elimina registros terminales incoming. |
| Cancelar suscripción outgoing aceptada | Solo navegador | Requiere borrar índice federado local en lotes. |
| Eliminar registro terminal outgoing | Solo navegador | Puede necesitar limpiar primero el índice federado. |
| Confirmar o cancelar cambio de dominio | Solo navegador | Requiere confirmar el dominio actual y tratar índices tras el cambio. |
| Publicar, traer o borrar índices por lotes | Solo navegador | Son tareas por lotes de la interfaz web. |

### Parámetros de federación

| Parámetro | Descripción |
| --- | --- |
| `--status` | Muestra estado del nodo local, relaciones outgoing e incoming. |
| `--list` | Lista relaciones federadas. |
| `--chat` | Lee mensajes en caché de una relación. |
| `--send-message` | Envía un mensaje a una relación establecida. |
| `--join` | Solicita unirse a otro nodo mediante enlace de invitación. |
| `--reapply` | Reintenta una relación sin registro. Requiere código de invitación de 6 caracteres. |
| `--accept` | Acepta una solicitud incoming. |
| `--deny` | Rechaza una solicitud incoming. |
| `--cancel` | Cancela una solicitud outgoing pendiente o quita una relación incoming aceptada. |
| `--delete` | Elimina un registro terminal incoming. |
| `--direction <outgoing\|incoming\|all>` | Dirección de la relación. `outgoing` son nodos a los que te uniste; `incoming` son nodos que se unieron al tuyo. |
| `--domain <url>` | Dominio del nodo relacionado. |
| `--invite-link <url>` | Enlace de invitación del otro nodo. |
| `--invite-code <code>` | Código de 6 caracteres para reintentos. |
| `--text <message>` | Texto del mensaje. |
| `--apply` | Guarda realmente el resultado. |

### Ejemplos de federación

Ver estado del nodo local y ambas listas:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --status
```

Listar solo nodos a los que te uniste:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --list `
  --direction outgoing
```

Listar solo nodos que se unieron al tuyo:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --list `
  --direction incoming
```

Solicitar unión mediante enlace de invitación. Primero ejecútalo sin `--apply`:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --join `
  --invite-link "https://peer-domain/federation/invite/abcdef"
```

Después guarda la solicitud:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --join `
  --invite-link "https://peer-domain/federation/invite/abcdef" `
  --apply
```

Reintentar una relación sin registro:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --reapply `
  --domain "https://peer-domain" `
  --invite-code "abc123" `
  --apply
```

Aceptar una solicitud incoming:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --accept `
  --domain "https://peer-domain" `
  --apply
```

Rechazar una solicitud incoming:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --deny `
  --domain "https://peer-domain" `
  --apply
```

Enviar mensaje a una relación establecida:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --send-message `
  --direction outgoing `
  --domain "https://peer-domain" `
  --text "Hello, this is a test message." `
  --apply
```

Cancelar una solicitud outgoing pendiente:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --cancel `
  --direction outgoing `
  --domain "https://peer-domain" `
  --apply
```

Quitar una relación incoming aceptada:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --cancel `
  --direction incoming `
  --domain "https://peer-domain" `
  --apply
```

Eliminar un registro terminal incoming:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --delete `
  --direction incoming `
  --domain "https://peer-domain" `
  --apply
```

La cancelación de suscripciones outgoing aceptadas y la eliminación de registros outgoing deben hacerse desde el panel en el navegador, porque pueden requerir limpiar primero el índice federado local.

### Dominio no coincidente

Si el dominio guardado del nodo local y el dominio pendiente de la relación no coinciden, el script devuelve un error con `currentDomain` y `pendingDomain`. Trátalo desde el panel en el navegador, porque un cambio de dominio también implica confirmación y limpieza del índice outgoing.

Si una solicitud de unión devuelve `FEDERATION_NODE_DOMAIN_MISMATCH`, el dominio usado por el enlace de invitación no coincide con el dominio local guardado por el nodo remoto. La respuesta incluye `currentOrigin` y `detectedOrigin`. Usa el dominio actualmente confirmado por el otro nodo, o pídele que confirme primero el dominio desde su panel en el navegador.

## Preguntas frecuentes

### El cambio no se aplicó

Los comandos de escritura usan vista previa por defecto. Añade `--apply` después de revisar la vista previa para guardar realmente.

### Cómo saber qué campos se pueden modificar

Para ajustes de subida, usa `--get` y revisa la estructura del subcanal. Para seguridad, página y otros ajustes, usa `--list-sections` para ver las áreas, secciones y campos editables.

### Quiero usar el resultado en otro programa

Usa `--output json` o añade `--save-response result.json`. Tu programa puede leer directamente el archivo JSON guardado.


