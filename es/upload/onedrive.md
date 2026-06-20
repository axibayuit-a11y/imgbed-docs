# Añadir un canal OneDrive

El canal OneDrive usa Microsoft OneDrive como destino de almacenamiento.

## Qué preparar

| Requisito | Uso |
| --- | --- |
| Cuenta de Microsoft | Gestionar OneDrive y la aplicación |
| Dominio ImgBed | Configurar callback OAuth |
| App registration | Obtener Client ID y Client Secret |
| Refresh Token | Mantener acceso a largo plazo |

## Abrir Microsoft Entra ID

1. Abre `portal.azure.com`.
2. Busca `Microsoft Entra ID`.
3. Entra en `App registrations`.
4. Haz clic en `New registration`.

## Registrar aplicación

| Campo | Valor |
| --- | --- |
| Name | Por ejemplo `imgbed-onedrive` |
| Supported account types | Según el tipo de OneDrive que vas a usar |
| Redirect URI type | `Web` |
| Redirect URI | `https://tu-dominio/api/oauth/onedrive/callback` |

Para OneDrive personal, elige cuentas personales de Microsoft. Si quieres permitir cuentas personales y de organización, selecciona el tipo compatible con ambas.

![Registro OneDrive](../../image/upload/onedrive/添加应用程序注册.png)

Después de registrar la app, copia `Application (client) ID`. Si usarás una cuenta de organización, guarda también `Directory (tenant) ID`.

![Application ID y Tenant ID](../../image/upload/onedrive/应用程序ID和目录租户ID位.png)

## Crear Client Secret

1. Abre `Certificates & secrets`.
2. Haz clic en `New client secret`.
3. Define nombre y vencimiento.
4. Copia el `Value` inmediatamente.

![Client Secret](../../image/upload/onedrive/保存客户端密码值.png)

Ese valor puede no volver a mostrarse, así que guárdalo al crearlo.

## Permisos de Microsoft Graph

En `API permissions`, añade delegated permissions de Microsoft Graph.

| Permiso | Uso |
| --- | --- |
| `Files.ReadWrite.All` | Subir, crear carpetas y borrar archivos |
| `offline_access` | Obtener Refresh Token |
| `User.Read` | Leer información de cuenta y capacidad |

## Rellenar en ImgBed

En Configuración de subida, elige `OneDrive`.

| Campo | Valor |
| --- | --- |
| Nombre del canal | Por ejemplo `OneDrive Main` |
| Client ID | `Application (client) ID` |
| Client Secret | Value del Client Secret |
| Tenant ID | Ver tabla inferior |
| Refresh Token | Déjalo vacío al principio |
| Directorio raíz | Opcional, normalmente `imgbed` |

![Configuración OneDrive](../../image/upload/onedrive/添加新渠道配置.png)

| Tipo de cuenta | Tenant ID |
| --- | --- |
| Cuenta personal | `consumers` |
| Personal + organización | `common` |
| Solo organización actual | `Directory (tenant) ID` |

## Obtener Refresh Token

1. En ImgBed, pulsa `Obtener Token`.
2. Inicia sesión con la cuenta de Microsoft que será el destino.
3. Acepta los permisos.
4. Copia el `Refresh Token` de la página de callback.
5. Vuelve a ImgBed y pégalo en el campo correspondiente.

![Refresh Token](../../image/upload/onedrive/复制刷新令牌.png)

## Flujo rápido

```text
Abrir portal.azure.com
-> Microsoft Entra ID
-> App registrations
-> New registration
-> Configurar callback Web
-> Copiar Application ID
-> Crear Client Secret
-> Añadir permisos Microsoft Graph
-> Rellenar Client ID / Secret / Tenant ID en ImgBed
-> Obtener Token
-> Pegar Refresh Token y guardar
```
