# Añadir un canal de Yandex

## Qué necesita primero

| Requisito | Por qué lo necesita |
| --- | --- |
| Una cuenta de Yandex | Se usa para iniciar sesión y autorizar Yandex Disk |
| Una aplicación OAuth de Yandex | Se usa para generar `Client ID` y `Client Secret` |
| Su dominio de ImgBed | Se usa como URI de redirección OAuth |
| Almacenamiento disponible en Yandex Disk | Se usa como ubicación real de almacenamiento de archivos |

## Pasos de configuración

### Paso 1: Crear una aplicación OAuth de Yandex

1. Abra la página de creación de aplicaciones OAuth de Yandex:

```text
https://oauth.yandex.com/client/new
```

2. Si se le redirige a iniciar sesión, inicie sesión primero con su cuenta de Yandex.
3. Cree una nueva aplicación.
4. Asigne a la aplicación un nombre reconocible, como `imgbed-yandex`.
5. Busque los ajustes de callback o redirect URL.
6. Introduzca:

```text
https://your-domain.com/api/oauth/yandex/callback
```

### Paso 2: Confirmar permisos

Para la integración actual de Yandex en ImgBed, mantenga estos cuatro permisos en `Yandex.Disk REST API`:

| Permiso | Propósito |
| --- | --- |
| `cloud_api:disk.app_folder` | Permite que ImgBed almacene archivos en la carpeta de la aplicación |
| `cloud_api:disk.read` | Lee archivos y enlaces de descarga |
| `cloud_api:disk.write` | Carga archivos, crea carpetas y elimina archivos |
| `Access to information about Yandex.Disk` | Lee la cuota del disco y el espacio usado |

Si también ve estos permisos en `Yandex ID API`, son opcionales:

| Texto de permiso | Recomendación |
| --- | --- |
| `Access to username, first name and surname, gender` | Opcional |
| `Access to email address` | Opcional |

Las funciones principales de carga, descarga, eliminación y cuota dependen sobre todo de los cuatro permisos de `Yandex.Disk REST API` anteriores.

![Configurar permisos de Yandex Disk](../../image/upload/yandex/dataaccess配置软盘权限.png)

### Paso 3: Copiar credenciales de la aplicación

Después de crear la aplicación, copie:

| Campo de Yandex | Campo de ImgBed |
| --- | --- |
| `Client ID` | `Client ID` |
| `Client Secret` | `Client Secret` |

![Registrar Client ID y Secret](../../image/upload/yandex/记录客户端id和secret.png)

### Paso 4: Completar el canal de Yandex

En Ajustes de carga, elija `Yandex` y complete:

| Campo de ImgBed | Qué introducir |
| --- | --- |
| Nombre del canal | Un nombre reconocible, como `Yandex principal` |
| Client ID | El `Client ID` de la aplicación Yandex |
| Client Secret | El `Client Secret` de la aplicación Yandex |
| Refresh Token | Déjelo vacío por ahora |
| Directorio raíz | Opcional. El valor predeterminado es `imgbed`. |

![Editar configuración del canal](../../image/upload/yandex/编辑配置渠道.png)

### Paso 5: Obtener el Refresh Token

1. En ImgBed, haga clic en `Get Token`.
2. Inicie sesión en la cuenta de Yandex que quiera conectar.
3. Apruebe la solicitud de autorización.
4. La página de callback mostrará un `Refresh Token`.
5. Cópielo.
6. Vuelva a ImgBed y péguelo en el campo `Refresh Token`.

![Copiar refresh token después de la autorización](../../image/upload/yandex/授权后复制刷新令牌.png)

### Paso 6: Guardar el canal

Después de completar todos los campos, guarde el canal.

## Flujo rápido

```text
Open Yandex OAuth Console
-> Create an app
-> Add https://your-domain.com/api/oauth/yandex/callback
-> Confirm Yandex Disk permissions
-> Copy Client ID and Client Secret
-> Fill Client ID / Client Secret into ImgBed
-> Click Get Token
-> Copy the Refresh Token from the callback page
-> Paste it back into ImgBed and save
```

## Referencias

1. Registrar una aplicación de Yandex: https://yandex.com/dev/id/doc/en/register-client
2. Obtener un código de autorización mediante URL: https://yandex.com/dev/id/doc/en/codes/code-url
3. Endpoint de token de Yandex OAuth: https://yandex.com/dev/id/doc/en/tokens/token
