# Añadir un canal de Hugging Face

## Qué necesita antes de empezar

Solo necesita tres cosas:

| Requisito | Propósito |
| --- | --- |
| Cuenta de Hugging Face | Se usa para generar un token de acceso y ser propietario del repositorio. |
| Token de acceso de usuario de Hugging Face | ImgBed lo usa para acceder a la API de Hugging Face, crear repositorios y cargar archivos. |
| Nombre del repositorio | Puede introducir solo el nombre del repositorio, por ejemplo `image`. |

## Pasos de configuración

### Paso 1: Iniciar sesión en Hugging Face y crear un token de acceso

1. Inicie sesión en Hugging Face.
2. Haga clic en su avatar en la esquina superior derecha y abra `Settings`.
3. Abra `Access Tokens` en la barra lateral izquierda.
4. Cree un token nuevo.
5. Asigne al token un nombre reconocible.
6. Seleccione el permiso `write`.
7. Copie y guarde el token inmediatamente después de crearlo.

![Crear un token](../../image/upload/huggingface/创建令牌.png)

## Paso 2: Completar el canal Hugging Face en ImgBed

Después de seleccionar `Hugging Face` en Ajustes de carga, complete los campos así:

| Campo de UI | Qué introducir |
| --- | --- |
| Nombre del canal | Un nombre de su elección, como `hf-principal`. |
| Nombre del repositorio | Un nombre corto de repositorio como `image`, o una ruta completa como `username/image`. |
| Token de acceso | El token de acceso de usuario de Hugging Face que acaba de crear. |
| Repositorio privado | Actívelo o desactívelo según sus necesidades. |
| Observación | Opcional, por ejemplo `Canal de carga principal`. |

![Añadir el canal](../../image/upload/huggingface/添加渠道.png)

## Paso 3: Guardar el canal

Después de completar los campos, haga clic en Guardar.

El sistema gestionará estos detalles:

| Comportamiento del sistema | Descripción |
| --- | --- |
| Nombre corto de repositorio | ImgBed identifica la cuenta actual de Hugging Face y expande el valor a una ruta completa de repositorio. |
| Ruta completa de repositorio | ImgBed usa la ruta `username/repository` exactamente como se introdujo. |
| Comprobación de repositorio | Si usa la ruta de la cuenta personal actual, ImgBed intenta crear el repositorio cuando no existe. Si introduce manualmente una ruta completa, ImgBed usa esa ruta directamente. |
| Tipo de repositorio | Este canal usa un repositorio `dataset`. |
| Estado público/privado | La visibilidad del repositorio se sincroniza según el interruptor actual. |

## Lista rápida

```text
Sign in to Hugging Face
-> Create an Access Token
-> Select write permission
-> Return to ImgBed and enter the token and repository name
-> Save
-> If only a repo name is entered, ImgBed adds the current username automatically
-> If username/repo is entered, ImgBed uses it as-is
-> ImgBed checks or creates the dataset repository
-> Upload a test image
```
