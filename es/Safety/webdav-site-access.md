# Acceso WebDAV al sitio
La configuración WebDAV en los ajustes de seguridad expone su sitio ImgBed como un punto de conexión WebDAV.

Después de activarla, puede usar Windows, macOS, gestores de archivos móviles o cualquier cliente compatible con WebDAV para explorar, subir, eliminar y gestionar archivos de ImgBed como si fueran una carpeta remota.

Esta es la entrada de acceso WebDAV del sitio. Es diferente del canal de almacenamiento WebDAV en los ajustes de subida. El canal de subida almacena archivos en un servicio WebDAV externo. Esta configuración permite que su propio sitio ImgBed proporcione acceso WebDAV a clientes.

## Dónde configurarlo

Abra el panel de administración y vaya a:

```text
System Settings -> Security Settings -> WebDAV
```

Configuraciones disponibles:

- Activar
- Nombre de usuario
- Contraseña
- Modo de carga de imágenes
- Canal predeterminado

## Qué hace esta función

Después de activar WebDAV, ImgBed proporciona una URL de acceso fija:

```text
https://your-domain.com/dav
```

Use esta URL para conectarse al directorio de archivos de ImgBed.

Casos de uso adecuados:

- Explorar archivos de ImgBed directamente desde el gestor de archivos del equipo.
- Arrastrar imágenes a la carpeta WebDAV para subirlas.
- Organizar carpetas de ImgBed desde el gestor de archivos local.
- Usar software compatible con WebDAV para sincronizar o gestionar imágenes.
- Acceder al contenido de ImgBed sin abrir el panel de administración.

## Configuración

### Activar

Activa el punto de conexión WebDAV.

Cuando está desactivado, los clientes no pueden conectarse mediante WebDAV.

### Nombre de usuario y contraseña

Estas credenciales las usan los clientes WebDAV al conectarse.

Use un nombre de usuario y una contraseña dedicados para WebDAV. No reutilice la contraseña de administrador ni la contraseña de subida.

Si el nombre de usuario o la contraseña están vacíos, los clientes WebDAV no podrán conectarse correctamente.

### Modo de carga de imágenes

El modo de carga de imágenes decide qué URL de imagen prefieren los clientes WebDAV al leer imágenes.

Opciones comunes:

| Modo | Descripción |
| --- | --- |
| Carga inteligente | ImgBed elige según el contexto. Recomendado para uso normal. |
| Fuente | Prefiere imágenes de origen. |
| Miniatura | Prefiere miniaturas. Útil para vista previa rápida. |

Si no está seguro, mantenga "Carga inteligente".

### Canal predeterminado

El canal predeterminado se usa para subidas WebDAV.

Cuando copia archivos al directorio WebDAV desde Windows u otro cliente, ImgBed los sube mediante el canal de subida predeterminado seleccionado.

Si no se selecciona un canal predeterminado, la exploración puede funcionar, pero las subidas pueden fallar.

## Acceder a WebDAV en Windows 11

Windows 11 puede añadir WebDAV como ubicación de red.

1. Abra "Este equipo".
2. Elija "Agregar una ubicación de red".
3. Introduzca `https://your-domain.com/dav`.
4. Introduzca su nombre de usuario y contraseña de WebDAV cuando se le solicite.
5. Finalice el asistente. Después podrá abrir el directorio WebDAV en el Explorador de archivos.

![Añadir WebDAV en Windows 11](../../image/Safety/webdav在win11配置.png)

Después de añadirlo, el directorio WebDAV aparece en el Explorador de archivos de Windows. Puede abrir, copiar y gestionar archivos como en una carpeta normal.

![WebDAV en Windows](../../image/Safety/webdav在win显示效果.png)

## Operaciones compatibles

Después de una conexión WebDAV correcta, normalmente puede:

- Ver archivos y carpetas.
- Subir archivos.
- Crear carpetas.
- Renombrar archivos o carpetas.
- Mover archivos.
- Eliminar archivos.

WebDAV es más adecuado para acceso diario y gestión de archivos a pequeña escala. Para grandes movimientos, eliminaciones masivas u organización compleja, use el panel de administración.

## Gestión de dispositivos de inicio de sesión

Las conexiones WebDAV correctas también aparecen en la pestaña WebDAV de la gestión de dispositivos de inicio de sesión.

Allí puede revisar clientes WebDAV y forzar la desconexión de dispositivos antiguos cuando sea necesario.

Si cambia el nombre de usuario o la contraseña de WebDAV, los clientes antiguos deben iniciar sesión de nuevo.

## FAQ

### Windows sigue pidiendo nombre de usuario y contraseña

Compruebe:

- La URL es `https://your-domain.com/dav`.
- El nombre de usuario y la contraseña coinciden con la configuración WebDAV.
- WebDAV está activado.
- Se puede acceder al sitio por HTTPS.

### La exploración funciona, pero la subida falla

Compruebe el "Canal predeterminado".

Las subidas WebDAV necesitan un canal de subida predeterminado. Si falta, está desactivado o está mal configurado, las subidas pueden fallar.

### La velocidad de acceso es inestable

El rendimiento de WebDAV depende del cliente, la red, el número de archivos y el canal de subida predeterminado.

Si un directorio tiene muchos archivos, organícelos en carpetas en lugar de mantener demasiados archivos en un solo directorio.

## Recomendaciones de seguridad

- Use HTTPS para el acceso WebDAV.
- Configure una contraseña segura.
- No comparta la contraseña WebDAV con personas no confiables.
- Desactive WebDAV cuando no lo use.
- Limpie periódicamente los dispositivos WebDAV no usados en la gestión de dispositivos de inicio de sesión.

## Tamaño de archivo para subidas WebDAV

Los clientes WebDAV no usan el flujo de fragmentación de archivos grandes de la página de subida del navegador. Para archivos que superen los límites sugeridos abajo, use la página de subida web.

| Canal de subida predeterminado | Límite sugerido para un archivo WebDAV |
| --- | ---: |
| Telegram | 20 MB |
| Discord | 10 MB |
| Cloudflare R2 | 30 MB |
| S3 | 30 MB |
| GitHub Releases | 64 MB |
| GitLab Packages | 64 MB |
| Hugging Face | 20 MB |
| OneDrive | 30 MB |
| Google Drive | 30 MB |
| Dropbox | 30 MB |
| Yandex Disk | 30 MB |
| pCloud | 30 MB |
| WebDAV | 64 MB |


