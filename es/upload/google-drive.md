# Añadir un canal de Google Drive

## Qué necesita primero

Antes de empezar, prepare estos elementos:

| Requisito | Por qué lo necesita |
| --- | --- |
| Una cuenta de Google | Se usa para acceder a Google Cloud y autorizar Google Drive |
| Un proyecto de Google Cloud | Se usa para activar Drive API y crear credenciales OAuth |
| Un cliente OAuth 2.0 | ImgBed lo usa para obtener `Client ID`, `Client Secret` y `Refresh Token` |
| Su dominio de ImgBed | Se usa como URI de redirección OAuth. Debe coincidir con el dominio que realmente utiliza. |

## Pasos de configuración

### Paso 1: Activar Google Drive API

1. Abra Google Cloud Console.
2. Cree un proyecto nuevo o seleccione uno existente.
3. Vaya a `APIs & Services`.
4. Haga clic en `Enable APIs and Services`.
5. Busque `Google Drive API`.
6. Ábrala y haga clic en Habilitar.

### Paso 2: Configurar la pantalla de consentimiento OAuth

1. En Google Cloud, abra `Google Auth Platform`.
2. Complete la información básica de `Branding`, como el nombre de la aplicación, el correo de soporte y el correo de contacto del desarrollador.
3. Abra `Audience`.
4. Para la mayoría de despliegues personales autoalojados, elija `External`.
5. Si elige `External`, añada en `Test users` la cuenta de Google que quiera autorizar.
6. Abra `Data Access`.
7. Añada los permisos necesarios de Google Drive.

### Paso 3: Crear un cliente OAuth 2.0

1. En `Google Auth Platform`, abra `Clients`.
2. Cree un cliente nuevo.
3. Defina el tipo de aplicación como `Web application`.
4. Asigne al cliente un nombre reconocible.
5. En los orígenes JavaScript autorizados, introduzca su URL de ImgBed, por ejemplo:

```text
https://img.example.com
```

6. En los URI de redirección autorizados, introduzca:

```text
https://img.example.com/api/oauth/google/callback
```

![Crear cliente OAuth](../../image/upload/google-drive/oa客户端id创建.png)

![Introducir dominio y URL de callback](../../image/upload/google-drive/填写oa客户端url信息.png)

Después de crear el cliente, copie estos valores:

| Valor generado | Campo de ImgBed |
| --- | --- |
| Client ID | `Client ID` |
| Client Secret | `Client Secret` |

## Paso 4: Completar el canal de Google Drive

En Ajustes de carga, elija `Google Drive` y complete:

| Campo de ImgBed | Qué introducir |
| --- | --- |
| Nombre del canal | Un nombre que pueda reconocer, como `Google Drive principal` |
| Client ID | El `Client ID` de Google Cloud |
| Client Secret | El `Client Secret` de Google Cloud |
| Refresh Token | Déjelo vacío por ahora. Lo obtendrá en el siguiente paso. |
| Directorio raíz | Opcional. El valor predeterminado es `imgbed`. |

![Completar datos del cliente en ImgBed](../../image/upload/google-drive/粘贴回添加新渠道配置.png)

## Paso 5: Obtener el Refresh Token

1. Haga clic en `Get Token`.
2. Elija la cuenta de Google que quiera conectar.
3. Complete las solicitudes de autorización.
4. La página de callback mostrará un `Refresh Token`.
5. Cópielo.
6. Vuelva a ImgBed y péguelo en el campo `Refresh Token`.

![Copiar Refresh Token después de la autorización](../../image/upload/google-drive/授权完复制token.png)

Si más adelante cambia de cuenta de Google, cambia el cliente OAuth o caduca la autorización anterior, no necesita eliminar el canal. Abra la página de edición y haga clic en `Reauthorize`.

## Paso 6: Guardar el canal

Después de completar todos los campos, guarde el canal.

## Flujo rápido

```text
Open Google Cloud
-> Create or select a project
-> Enable Google Drive API
-> Configure Google Auth Platform
-> If Audience is External, add your Google account to Test users
-> Create a Web application OAuth client
-> Use https://your-domain.com/api/oauth/google/callback as the redirect URI
-> Fill Client ID and Client Secret into ImgBed
-> Click Get Token
-> Sign in with Google and authorize
-> Copy the Refresh Token from the callback page
-> Paste it back into ImgBed and save
-> Upload a test image
```

## Referencias

1. Aplicaciones web de servidor para Google OAuth: https://developers.google.com/identity/protocols/oauth2/web-server
2. Configuración de la pantalla de consentimiento OAuth de Google Workspace: https://developers.google.com/workspace/guides/configure-oauth-consent
3. Ámbitos de autenticación de la API de Google Drive: https://developers.google.com/workspace/drive/api/guides/api-specific-auth
