# Añadir un canal de GitLab Packages

## Qué necesita antes de empezar

Solo necesita tres cosas:

| Requisito | Propósito |
| --- | --- |
| Cuenta de GitLab | Se usa para generar un token de acceso y ser propietario del proyecto. |
| Token de acceso personal de GitLab | ImgBed lo usa para acceder a la API de GitLab, crear proyectos y cargar archivos en Generic Packages. |
| Nombre del proyecto | Puede introducir solo el nombre del proyecto, por ejemplo `imgbed`. |

## Pasos de configuración

### Paso 1: Iniciar sesión en GitLab y crear un token de acceso

1. Inicie sesión en GitLab.
2. Haga clic en su avatar en la esquina superior derecha y abra `Preferences`.
3. Abra `Access Tokens` en la barra lateral izquierda.
4. Asigne al token un nombre reconocible.
5. Elija una fecha de expiración según sus preferencias de mantenimiento.
6. Seleccione el ámbito `api`.
7. Copie y guarde el token inmediatamente después de crearlo.

![Crear un token legacy](../../image/upload/gitlab-packages/点击生成旧版令牌.png)

![Seleccionar permisos del token](../../image/upload/gitlab-packages/勾选令牌权限.png)

## Paso 2: Completar el canal GitLab Packages en ImgBed

Después de seleccionar `GitLab Packages` en Ajustes de carga, complete los campos así:

| Campo de UI | Qué introducir |
| --- | --- |
| Nombre del canal | Un nombre de su elección, como `GitLabPrincipal`. |
| Token de acceso | El token de acceso personal de GitLab que acaba de crear. |
| Nombre del proyecto | Un nombre corto de proyecto como `imgbed`, o una ruta completa como `username/imgbed`. |
| Repositorio privado | Actívelo o desactívelo según sus necesidades. |
| Observación | Opcional, por ejemplo `Canal de carga principal`. |

![Configurar el canal](../../image/upload/gitlab-packages/配置渠道内容.png)

## Paso 3: Guardar el canal

Después de completar los campos, haga clic en Guardar.

El sistema gestionará estos detalles:

| Comportamiento del sistema | Descripción |
| --- | --- |
| Nombre corto de proyecto | ImgBed identifica la cuenta actual de GitLab y expande el valor a una ruta completa de proyecto. |
| Ruta completa de proyecto | ImgBed usa la ruta `username/project` exactamente como se introdujo. |
| Comprobación de proyecto | Si usa la ruta de la cuenta personal actual, ImgBed crea automáticamente el proyecto cuando no existe. Si introduce manualmente una ruta completa, ImgBed usa esa ruta directamente. |
| Estado público/privado | La visibilidad del proyecto se sincroniza según el interruptor actual. |

## Lista rápida

```text
Sign in to GitLab
-> Create an Access Token
-> Select only the api scope
-> Return to ImgBed and enter the token and project name
-> Save
-> If only a project name is entered, ImgBed adds the current username automatically
-> If username/project is entered, ImgBed uses it as-is
-> Upload a test image
```
