# Añadir un canal de GitHub Releases

## Qué necesita antes de empezar

Solo necesita tres cosas:

| Requisito | Propósito |
| --- | --- |
| Cuenta de GitHub | Se usa para generar un token de acceso y ser propietario del repositorio. |
| Token de acceso de GitHub | ImgBed lo usa para acceder a la API de GitHub, crear releases y cargar archivos. |
| Nombre del repositorio | Puede introducir solo el nombre del repositorio, por ejemplo `image`. |

## Pasos de configuración

### Paso 1: Iniciar sesión en GitHub y crear un token de acceso

1. Inicie sesión en GitHub.
2. Haga clic en su avatar en la esquina superior derecha y abra `Settings`.
3. Abra `Developer settings` en la barra lateral izquierda.
4. Abra `Personal access tokens`.
5. Abra `Tokens (classic)`.
6. Haga clic en `Generate new token (classic)`.
7. Asigne al token un nombre reconocible.
8. Elija una fecha de expiración según sus preferencias de mantenimiento.
9. Seleccione los ámbitos `repo` y `workflow`.
10. Copie y guarde el token inmediatamente después de crearlo.

![Añadir permisos de GitHub](../../image/upload/github-releases/添加github权限.png)

## Paso 2: Completar el canal GitHub Releases en ImgBed

Después de seleccionar `GitHub Releases` en Ajustes de carga, complete los campos así:

| Campo de UI | Qué introducir |
| --- | --- |
| Nombre del canal | Un nombre de su elección, como `GitHubPrincipal`. |
| Token de acceso | El token de acceso personal de GitHub que acaba de crear. |
| Nombre del repositorio | Un nombre corto de repositorio como `image`, o una ruta completa como `username/image`. |
| Repositorio privado | Actívelo o desactívelo según sus necesidades. |
| Observación | Opcional, por ejemplo `Canal de carga principal`. |

![Completar la configuración del canal GitHub](../../image/upload/github-releases/填写github渠道配置.png)

## Paso 3: Guardar el canal

Después de completar los campos, haga clic en Guardar.

El sistema gestionará estos detalles:

| Comportamiento del sistema | Descripción |
| --- | --- |
| Nombre corto de repositorio | ImgBed identifica la cuenta actual de GitHub y expande el valor a una ruta completa de repositorio. |
| Ruta completa de repositorio | ImgBed usa la ruta `username/repository` exactamente como se introdujo. |
| Comprobación de repositorio | Si usa la ruta de la cuenta personal actual, ImgBed crea automáticamente el repositorio cuando no existe. Si introduce manualmente una ruta completa, ImgBed usa esa ruta directamente. |
| Estado público/privado | La visibilidad del repositorio se sincroniza según el interruptor actual. |

## Lista rápida

GitHub Releases funciona así:

```text
Sign in to GitHub
-> Create an Access Token
-> Return to ImgBed and enter the token and repository name
-> Save
-> If only a repo name is entered, ImgBed adds the current username automatically
-> If username/repo is entered, ImgBed uses it as-is
-> Upload a test image
```
