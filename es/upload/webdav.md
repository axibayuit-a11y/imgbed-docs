# Añadir un canal WebDAV

## Cuándo conviene

Use el canal WebDAV cuando:

- Tenga un NAS, una unidad en la nube o un servicio de almacenamiento de objetos que proporcione un endpoint WebDAV.
- Quiera que las imágenes cargadas se almacenen en su propio directorio WebDAV.
- Quiera guardar las credenciales en la tabla D1 `upload_channels` en lugar de exponerlas a largo plazo en el frontend.

## Qué necesita antes de empezar

| Requisito | Propósito |
| --- | --- |
| Endpoint WebDAV | La URL WebDAV del servidor, por ejemplo `https://nas.example.com/dav`. |
| Nombre de usuario | Se usa para iniciar sesión en el servicio WebDAV. |
| Contraseña | Se usa para iniciar sesión en el servicio WebDAV. |
| Modo de autenticación | El valor predeterminado es `Basic`. Use `Digest` o negociación automática solo si el servidor lo requiere. |
| Directorio de almacenamiento | Directorio usado para almacenar archivos. El valor predeterminado es `imgbed`. |

## Dónde añadirlo

1. Abra Ajustes del sistema.
2. Vaya a Ajustes de carga.
3. Haga clic en Añadir canal en la esquina superior derecha.
4. Seleccione `WebDAV`.

## Referencia de campos

| Campo | Qué hace | Obligatorio |
| --- | --- | --- |
| Nombre del canal | Un nombre fácil de reconocer para este canal WebDAV, como `koofr` o `nas`. | Sí |
| Endpoint | Endpoint WebDAV completo, incluido `https://`. | Sí |
| Nombre de usuario | Nombre de usuario de inicio de sesión WebDAV. | Sí |
| Contraseña | Contraseña de inicio de sesión WebDAV. | Sí |
| Modo de autenticación | Normalmente `Basic`; use `Digest` si el servidor requiere autenticación Digest. | Sí |
| Directorio de almacenamiento | Directorio donde se almacenan los archivos. El valor predeterminado es `imgbed`. | No |

## Ejemplo: fie.nl.tab.digital

### 1. Crear una contraseña de aplicación

Abra los ajustes de seguridad de su cuenta, busque las contraseñas de aplicación y cree una nueva contraseña de aplicación.

![Crear una contraseña de aplicación](../../image/upload/webdav/创建应用密码.png)

Después de crearla, copie y guarde la nueva contraseña de aplicación. Normalmente solo se muestra una vez.

![Guardar la nueva contraseña de aplicación](../../image/upload/webdav/记住新应用程序密码.png)

### 2. Completar la configuración WebDAV en ImgBed

Vuelva a ImgBed y añada un canal WebDAV:

| Campo de la interfaz | Valor |
| --- | --- |
| Endpoint | La URL WebDAV proporcionada por `https://fie.nl.tab.digital/`. |
| Nombre de usuario | Su nombre de usuario WebDAV. |
| Contraseña | La contraseña de aplicación que acaba de crear. |
| Modo de autenticación | Empiece con `Basic` en la mayoría de los casos. |
| Directorio de almacenamiento | El valor predeterminado es `imgbed`; también puede usar un directorio personalizado. |

![Completar la configuración](../../image/upload/webdav/填写配置.png)

## Comportamiento al cargar archivos grandes

El canal WebDAV ahora usa carga real por fragmentos basada en sesión.

Los archivos pequeños se cargan como un único archivo completo. Los archivos mayores que 64 MiB se dividen automáticamente en fragmentos de unos 10 MiB y se cargan en un directorio remoto de fragmentos.

El servicio WebDAV no necesita admitir `partial update` ni escrituras basadas en offset. ImgBed no fusiona los fragmentos en un único archivo grande en el servidor remoto. En su lugar, guarda un manifiesto de fragmentos y lee los fragmentos en orden cuando se solicita el archivo.

En la práctica:

| Tamaño de archivo | Método de carga | Distribución en almacenamiento remoto |
| --- | --- | --- |
| 64 MiB o menos | Carga normal | Un archivo completo |
| Más de 64 MiB | Carga real por fragmentos basada en sesión | Un directorio de fragmentos con varios archivos de fragmento |

El directorio de fragmentos solo afecta a la distribución en el almacenamiento remoto. No cambia la URL del archivo en ImgBed. Los usuarios siguen accediendo al archivo mediante el enlace original `/file/...`.

## Pasos de configuración

1. Abra Ajustes de carga.
2. Haga clic en Añadir canal.
3. Seleccione `WebDAV`.
4. Introduzca un nombre de canal que pueda reconocer, por ejemplo `koofr`.
5. Introduzca el endpoint WebDAV, por ejemplo `https://app.koofr.net/dav/Koofr`.
6. Introduzca el nombre de usuario y la contraseña.
7. Mantenga el modo de autenticación como `Basic` de forma predeterminada.
8. Mantenga el directorio de almacenamiento como `imgbed`, o cámbielo a su propio directorio.
9. Haga clic en Guardar.
10. Después de guardar, revise la tarjeta del canal, consulte la capacidad si está disponible y cargue un archivo de prueba.

## Cómo verificarlo

| Comprobación | Cómo verificarlo |
| --- | --- |
| Aparece la tarjeta del canal | Después de guardar, la página Ajustes de carga debería mostrar una tarjeta de canal WebDAV. |
| El canal está activado | El interruptor de la esquina superior derecha de la tarjeta debería permanecer activado. |
| Las credenciales están guardadas | La vista de detalle debería mostrar Endpoint, nombre de usuario, modo de autenticación y directorio de almacenamiento. |
| La carga de archivos pequeños funciona | Cargue una imagen de prueba y confirme que el archivo aparece en el directorio WebDAV. |
| La regla de archivos grandes funciona | Los archivos mayores que 64 MiB usan carga por fragmentos y crean un directorio remoto de fragmentos. |
| La consulta de capacidad funciona | Si el servidor admite información de capacidad, la consulta mostrará la capacidad usada y total. |

![Consulta de cuota correcta](../../image/upload/webdav/查询额度成功.png)

## FAQ

### ¿Por qué los archivos WebDAV grandes crean un directorio de fragmentos?

Este es el método de almacenamiento actual para archivos grandes.

Los archivos mayores que 64 MiB no se fusionan en un único archivo remoto grande. Se almacenan como un directorio de fragmentos. ImgBed registra el manifiesto de fragmentos y devuelve el contenido completo leyendo los fragmentos en orden.

### ¿Qué debo revisar primero si falla la carga de archivos grandes?

Revise primero Endpoint, nombre de usuario, contraseña y directorio de almacenamiento. Después confirme que el servicio WebDAV permite crear directorios, escribir archivos y leer archivos.

Si la consulta de capacidad falla pero la carga de archivos pequeños funciona, puede que el servidor simplemente no admita la información de capacidad o la limite. Eso no significa necesariamente que la carga no esté disponible.

### ¿Qué modo de autenticación debo usar?

Empiece con `Basic`.

Si el servidor requiere explícitamente digest authentication, use `Digest`.

Si no está seguro, use negociación automática.

## Lista rápida

```text
Prepare WebDAV endpoint, username, and password
-> Open Upload Settings
-> Add Channel
-> Select WebDAV
-> Enter Endpoint / username / password
-> Keep authentication mode as Basic by default
-> Keep storage directory as imgbed by default
-> Save
-> Query capacity
-> Upload a test file
```
