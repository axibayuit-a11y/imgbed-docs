# Añadir un canal de OneDrive

## Qué necesita primero

| Requisito | Por qué lo necesita |
| --- | --- |
| Una cuenta de Microsoft | Se usa para acceder a las páginas de administración de Microsoft y autorizar OneDrive |
| Su dominio de ImgBed | Se usa como URL de callback OAuth |
| Un registro de aplicación | Se usa para generar `Client ID` y `Client Secret` |
| Una cuenta de OneDrive | Se usa como ubicación real de almacenamiento de archivos |

## Pasos de configuración

### Paso 1: Abrir Microsoft Entra ID

1. Abra `portal.azure.com`.
2. Busque `Microsoft Entra ID` en la parte superior.
3. Si la página de destino no aparece en el desplegable, elija:

```text
Continue searching in Microsoft Entra ID
```

4. Abra `Microsoft Entra ID`.
5. Abra `App registrations`.
6. Haga clic en `New registration`.

### Paso 2: Registrar una aplicación

En la página `New registration`, complete:

| Campo | Qué introducir |
| --- | --- |
| Name | Un nombre reconocible, como `imgbed-onedrive` |
| Supported account types | Elija según la tabla siguiente |
| Redirect URI type | `Web` |
| Redirect URI | `https://your-domain.com/api/oauth/onedrive/callback` |

Guía para el tipo de cuenta:

| Su escenario | Supported Account Types |
| --- | --- |
| Solo OneDrive personal | Elija la opción de cuenta personal de Microsoft. |
| Cuentas personales y de trabajo/escuela | Elija la opción que admite cuentas personales y organizativas. |
| Solo OneDrive de empresa o escuela | Elija la opción de cuenta organizativa. |

Haga clic en register después de completar el formulario.

![Crear aplicación de OneDrive](../../image/upload/onedrive/添加应用程序注册.png)

### Paso 3: Copiar información de la aplicación

Después de crear la aplicación, copie estos valores desde la página de resumen:

| Campo de Microsoft | Campo de ImgBed |
| --- | --- |
| `Application (client) ID` | `Client ID` |
| `Directory (tenant) ID` | `Tenant ID` para cuentas organizativas |

![Application y tenant IDs](../../image/upload/onedrive/应用程序ID和目录租户ID位.png)

### Paso 4: Crear un Client Secret

1. Abra `Certificates & secrets`.
2. Haga clic en `New client secret`.
3. Introduzca la descripción que prefiera.
4. Elija un periodo de expiración.
5. Copie el `Value` inmediatamente después de crearlo.

![Guardar el valor del client secret](../../image/upload/onedrive/保存客户端密码值.png)

### Paso 5: Añadir permisos de API

1. Abra `API permissions`.
2. Haga clic en `Add a permission`.
3. Elija `Microsoft Graph`.
4. Elija `Delegated permissions`.
5. Añada estos permisos:

| Permiso | Propósito |
| --- | --- |
| `Files.ReadWrite.All` | Carga archivos, crea carpetas y elimina archivos |
| `offline_access` | Permite que ImgBed obtenga un `Refresh Token` |
| `User.Read` | Lee información de cuenta y cuota |

### Paso 6: Completar el canal de OneDrive

En Ajustes de carga, elija `OneDrive` y complete:

| Campo de ImgBed | Qué introducir |
| --- | --- |
| Nombre del canal | Un nombre reconocible, como `OneDrive principal` |
| Client ID | El `Application (client) ID` de Microsoft |
| Client Secret | El `Client Secret Value` que copió |
| Tenant ID | Use la tabla siguiente |
| Refresh Token | Déjelo vacío por ahora |
| Directorio raíz | Opcional. El valor predeterminado es `imgbed`. |
| Nota | Opcional |

![Completar configuración del canal OneDrive](../../image/upload/onedrive/添加新渠道配置.png)

Cómo completar `Tenant ID`:

| Tipo de cuenta elegido | ImgBed `Tenant ID` |
| --- | --- |
| Cuentas personales | `consumers` |
| Cuentas personales + organizativas | `common` |
| Solo la organización actual | `Directory (tenant) ID` |

### Paso 7: Obtener el Refresh Token

1. En ImgBed, haga clic en `Get Token`.
2. Inicie sesión en la cuenta de Microsoft que quiera conectar.
3. Apruebe la solicitud de autorización.
4. La página de callback mostrará un `Refresh Token`.
5. Cópielo.
6. Vuelva a ImgBed y péguelo en el campo `Refresh Token`.

![Copiar refresh token](../../image/upload/onedrive/复制刷新令牌.png)

### Paso 8: Guardar el canal

Después de completar todos los campos, guarde el canal.

## Flujo rápido

```text
Open portal.azure.com
-> Search for Microsoft Entra ID
-> Open App registrations
-> Register a new app
-> Fill Name / Supported account types / Web redirect URI
-> Register
-> Copy Application (client) ID
-> Check the callback URL in Authentication
-> Create a Client Secret in Certificates & secrets
-> Add permissions in API permissions
-> Fill Client ID / Client Secret / Tenant ID into ImgBed
-> Click Get Token
-> Copy the Refresh Token from the callback page
-> Paste it back into ImgBed and save
```

## Referencias

1. Registro de aplicaciones de Microsoft Entra: https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-register-app
2. Flujo de código de autorización de la plataforma de identidad de Microsoft: https://learn.microsoft.com/en-us/entra/identity-platform/v2-oauth2-auth-code-flow
3. Autenticación de usuario en Microsoft Graph: https://learn.microsoft.com/en-us/graph/auth-v2-user
