# Autenticación y gestión de dispositivos de inicio de sesión

La gestión de autenticación y la gestión de dispositivos de inicio de sesión protegen el panel de administración de ImgBed, la entrada pública de subida y el acceso WebDAV.

Use esta página para configurar credenciales de acceso, revisar los dispositivos que han iniciado sesión y revocar sesiones antiguas cuando sea necesario.

## Dónde configurarlo

Abra el panel de administración y vaya a:

```text
System Settings -> Security Settings
```

La página contiene dos áreas principales:

- Gestión de autenticación
- Gestión de dispositivos de inicio de sesión

![Gestión de autenticación](../../image/Safety/认证管理界面.png)

## Qué hace la gestión de autenticación

La gestión de autenticación almacena credenciales de acceso.

Hay dos tipos:

- Autenticación del lado del usuario
- Autenticación del lado de administración

## Autenticación del lado del usuario

La autenticación del lado del usuario es la contraseña de subida.

Después de configurar una contraseña de subida, los visitantes normales deben introducirla antes de usar la página de subida. Es útil cuando no quiere que la página pública de subida esté abierta a todo el mundo.

![Página de inicio de sesión de usuario](../../image/Safety/用户端登录界面.png)

### Configurar la contraseña de subida

Cuando se configura una contraseña de subida:

- Los visitantes deben introducir la contraseña antes de usar la página de subida.
- La subida solo está disponible después de aceptar la contraseña.
- Si las sesiones de dispositivos del lado del usuario están activadas, ImgBed registra ese dispositivo de usuario.

Cambiar la contraseña de subida invalida las sesiones antiguas del lado del usuario. Los visitantes tendrán que introducir la nueva contraseña otra vez.

## Autenticación del lado de administración

La autenticación del lado de administración usa un nombre de usuario y una contraseña de administrador.

Esto protege el panel de administración. En producción, siempre debería configurarlo.

![Página de inicio de sesión de administrador](../../image/Safety/管理端登录界面.png)

### Configurar credenciales de administrador

Cuando se configuran un nombre de usuario y una contraseña de administrador:

- Abrir el panel de administración requiere iniciar sesión.
- Un inicio de sesión correcto crea un registro de dispositivo de administración.
- Puede revisar, limpiar o forzar la desconexión de dispositivos en la gestión de dispositivos de inicio de sesión.

Cambiar el nombre de usuario o la contraseña de administrador invalida las sesiones antiguas de administración. Tendrá que iniciar sesión de nuevo.

## Qué hace la gestión de dispositivos de inicio de sesión

La gestión de dispositivos de inicio de sesión muestra los dispositivos que han iniciado sesión.

Le ayuda a comprobar:

- Qué dispositivos han accedido al panel de administración.
- Qué dispositivos han accedido a la página de subida del lado del usuario.
- Qué clientes WebDAV se han conectado.
- Si una sesión de dispositivo sigue siendo válida.
- Si conviene forzar la desconexión de dispositivos antiguos.

La página tiene tres pestañas:

- Administración
- Usuario
- WebDAV

## Seguridad global de cookies

En la parte superior de la gestión de dispositivos de inicio de sesión puede configurar el comportamiento global de las cookies.

### Duración de la cookie de usuario

Controla cuántos días puede permanecer activa una sesión del lado del usuario.

Por ejemplo, si la configura en 14 días, los visitantes normalmente no tendrán que volver a introducir la contraseña de subida durante 14 días.

### Duración de la cookie de administración

Controla cuántos días puede permanecer activa una sesión de administrador.

Por ejemplo, si la configura en 14 días, los administradores normalmente no tendrán que volver a iniciar sesión durante 14 días.

### Modo Secure

Cuando el modo Secure está activado, los navegadores solo envían cookies de inicio de sesión a través de HTTPS.

Actívelo en sitios HTTPS de producción. No lo active para pruebas locales por HTTP, o podría ver un comportamiento como "el inicio de sesión se realizó correctamente, pero al actualizar se cierra la sesión".

## Dispositivos de inicio de sesión de administración

La pestaña Administración muestra los dispositivos que iniciaron sesión en el panel de administración.

Los registros de dispositivos solo aparecen después de configurar credenciales de administrador y acceder al panel mediante inicio de sesión.

Cada tarjeta de dispositivo puede mostrar:

- Información del dispositivo y del navegador
- IP del primer inicio de sesión
- IP de la última actividad
- Hora de inicio de sesión
- Hora de la última actividad
- Hora de expiración
- Estado actual

Si ve un dispositivo desconocido, use "Forzar desconexión" para invalidarlo.

## Limpiar dispositivos antiguos

"Limpiar dispositivos antiguos" elimina en lote registros antiguos de inicio de sesión en la pestaña actual.

Úselo cuando sospeche que sesiones antiguas pueden seguir activas en otros dispositivos.

## Forzar desconexión

"Forzar desconexión" invalida una sesión de dispositivo.

Después de forzar la desconexión de un dispositivo:

- Los dispositivos de administración deben iniciar sesión de nuevo.
- Los dispositivos del lado del usuario deben introducir de nuevo la contraseña de subida.
- Los clientes WebDAV deben autenticarse de nuevo.

Los dispositivos expirados o inválidos también pueden eliminarse.

## Cerrar sesión del dispositivo actual

La tarjeta del dispositivo actual está marcada como "Dispositivo actual".

Después de cerrar sesión del dispositivo actual:

- Se cierra la sesión actual de administración.
- Se cierra la sesión actual del lado del usuario.

Debe iniciar sesión de nuevo antes de seguir usando esa área.
