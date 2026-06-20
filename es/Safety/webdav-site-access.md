# Configuración y acceso por WebDAV

ImgBed puede exponer acceso por WebDAV para revisar archivos desde un explorador de archivos o un cliente compatible.

## Cuándo usarlo

- Quieres ver archivos desde Windows o macOS.
- Usas un cliente WebDAV para organizar archivos.
- Necesitas acceder a los archivos fuera del panel de administración.

## Conectar desde Windows 11

1. Abre el Explorador de archivos.
2. Haz clic derecho en `Este equipo`.
3. Elige `Agregar una ubicación de red`.
4. Introduce la URL WebDAV.
5. Escribe usuario y contraseña.
6. Comprueba que el contenido se abra como una carpeta.

![Configuración WebDAV en Windows 11](../../image/Safety/webdav在win11配置.png)

Si la conexión es correcta, podrás ver el contenido desde el Explorador.

![WebDAV en Windows](../../image/Safety/webdav在win显示效果.png)

## Credenciales

Usa las credenciales configuradas para WebDAV en ImgBed. Para mayor seguridad, conviene usar una cuenta con permisos limitados en lugar de una cuenta principal compartida.

## Si no conecta

| Punto a revisar | Qué comprobar |
| --- | --- |
| URL | Que incluya `https://` y sea la dirección WebDAV correcta |
| Credenciales | Usuario y contraseña correctos |
| Permisos | Lectura y escritura en el directorio objetivo |
| Cliente | Que Windows o el cliente WebDAV no esté bloqueando la conexión |

Si falla la consulta de capacidad pero la subida funciona, puede ser que el servidor WebDAV no devuelva información de cuota. No siempre significa que el canal no sirva.
