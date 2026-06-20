# Gestión de autenticación y dispositivos conectados

La gestión de autenticación permite revisar inicios de sesión, sesiones activas y dispositivos conectados al panel o a páginas de usuario.

## Inicio de sesión de administrador

El administrador entra desde la pantalla de login del panel para gestionar archivos y ajustes.

![Login de administrador](../../image/Safety/管理端登录界面.png)

La cuenta administradora tiene permisos altos. Mantén sus credenciales bien protegidas.

## Inicio de sesión de usuario

También existe una pantalla de inicio de sesión para usuarios.

![Login de usuario](../../image/Safety/用户端登录界面.png)

Si usas subida pública o acceso limitado, el login de usuario ayuda a saber quién realizó cada acción.

## Pantalla de autenticación

La pantalla de gestión muestra sesiones y dispositivos conectados.

![Gestión de autenticación](../../image/Safety/认证管理界面.png)

## Qué revisar en dispositivos

| Campo | Descripción |
| --- | --- |
| Dispositivo conectado | Dispositivos con sesión activa |
| IP / ubicación | Referencia del origen de acceso |
| Último acceso | Indica si el dispositivo sigue en uso |
| Revocar | Cierra sesiones antiguas o sospechosas |

## Si detectas algo sospechoso

1. Revoca la sesión del dispositivo.
2. Cambia contraseña de administrador y tokens relacionados.
3. Revisa credenciales de Cloudflare, GitHub y canales de almacenamiento.
4. Regenera API Tokens si es necesario.

## Consejos de operación

- No dejes sesiones abiertas en equipos compartidos.
- Mantén pocas cuentas con permisos de administrador.
- Revisa periódicamente los dispositivos conectados.
- Elimina sesiones antiguas o que ya no reconozcas.
