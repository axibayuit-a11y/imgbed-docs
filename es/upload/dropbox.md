# Añadir un canal de Dropbox

## Qué necesita primero

| Requisito | Por qué lo necesita |
| --- | --- |
| Una cuenta de Dropbox | Se usa para iniciar sesión y autorizar la aplicación |
| Una aplicación de Dropbox | Se usa para generar `App Key` y `App Secret` |
| Su dominio de ImgBed | Se usa como OAuth redirect URI |
| Almacenamiento disponible en Dropbox | Se usa como ubicación real de almacenamiento de archivos |

## Pasos de configuración

### Paso 1: Crear una aplicación de Dropbox

1. Abra Dropbox App Console:

```text
https://www.dropbox.com/developers/apps
```

2. Cree una nueva aplicación.
3. Para el tipo de acceso, elija:

```text
App folder
```

4. Asigne a la aplicación un nombre que pueda reconocer, como `imgbed-app`.
5. Abra la página de detalles de la aplicación después de crearla.

Tipo de acceso recomendado:

| Tipo de acceso | Recomendación |
| --- | --- |
| `App folder` | Recomendado. Coincide con la forma en que ImgBed almacena archivos. |
| `Full Dropbox` | No recomendado. ImgBed no necesita acceso completo a toda la cuenta. |

![Crear aplicación de Dropbox](../../image/upload/dropbox/开发者创建应用.png)

### Paso 2: Añadir el Redirect URI

En la página de detalles de la aplicación de Dropbox, busque los ajustes de OAuth o Redirect URI y añada:

```text
https://your-domain.com/api/oauth/dropbox/callback
```

Si usa el panel de administración desde más de un dominio, añada cada callback URL correspondiente.

![Configurar Redirect URI](../../image/upload/dropbox/配置回调地址.png)

### Paso 3: Configurar permisos de la aplicación

Abra la pestaña `Permissions` y active al menos estos ámbitos:

| Ámbito | Obligatorio | Propósito |
| --- | --- | --- |
| `account_info.read` | Obligatorio | Lee información de cuenta y cuota |
| `files.metadata.read` | Obligatorio | Lee metadatos de archivos y carpetas para comprobaciones de ruta |
| `files.metadata.write` | Obligatorio | Crea carpetas y escribe metadatos |
| `files.content.write` | Obligatorio | Carga archivos. Si falta este scope, aparece `required scope 'files.content.write'`. |
| `files.content.read` | Recomendado | Permite descarga, vista previa y enlaces temporales de archivo |

Después de seleccionar los ámbitos, haga clic en `Submit` al final de la página.

![Añadir permisos](../../image/upload/dropbox/添加对应的权限.png)

Importante:

| Situación | Qué hacer |
| --- | --- |
| Cambió los ámbitos | Ejecute de nuevo el flujo de autorización del token y obtenga un nuevo `Refresh Token`. |
| No volvió a autorizar | El token antiguo no obtiene los nuevos permisos, por lo que las cargas pueden seguir fallando. |

### Paso 4: Copiar las credenciales de la aplicación

Guarde estos dos valores desde la página de la aplicación de Dropbox:

| Campo de Dropbox | Campo de ImgBed |
| --- | --- |
| `App key` | `App Key` |
| `App secret` | `App Secret` |

### Paso 5: Completar el canal de Dropbox

En Ajustes de carga, elija `Dropbox` y complete:

| Campo de ImgBed | Qué introducir |
| --- | --- |
| Nombre del canal | Un nombre que pueda reconocer, como `Dropbox principal` |
| App Key | El `App key` de Dropbox |
| App Secret | El `App secret` de Dropbox |
| Refresh Token | Déjelo vacío por ahora |
| Directorio raíz | Opcional. El valor predeterminado es `imgbed`. |
| Nota | Opcional |

![Obtener token](../../image/upload/dropbox/获取令牌.png)

### Paso 6: Obtener el Refresh Token

1. En ImgBed, haga clic en `Get Token`.
2. Inicie sesión en la cuenta de Dropbox que quiera conectar.
3. Apruebe la solicitud de autorización.
4. La página de callback mostrará un `Refresh Token`.
5. Cópielo.
6. Vuelva a ImgBed y péguelo en el campo `Refresh Token`.

![Copiar token](../../image/upload/dropbox/复制令牌.png)

## Cómo verificarlo

| Comprobación | Resultado esperado |
| --- | --- |
| Tarjeta del canal | El canal de Dropbox aparece después de guardar. |
| Interruptor del canal | El canal se puede activar. |
| Token guardado | La página de detalle muestra que el `Refresh Token` se guardó. |
| Prueba de carga | Una imagen de prueba aparece en la carpeta de la aplicación de Dropbox. |

Si los límites de cuota están activados, haga clic en consulta de cuota. Después de una consulta correcta, la tarjeta del canal muestra el espacio usado, el espacio total y la hora de la última actualización.

![Consulta de cuota correcta](../../image/upload/dropbox/查询额度成功.png)

## Solución de problemas

| Problema | Solución |
| --- | --- |
| ImgBed indica que la configuración está incompleta | Compruebe que `App Key`, `App Secret` y `Refresh Token` estén completados. |
| La autorización se completa pero no aparece `Refresh Token` | Haga clic otra vez en `Get Token` y asegúrese de que se use el flujo de autorización offline. |
| La carga falla con `required scope 'files.content.write'` | Active `files.content.write`, haga clic en `Submit` y obtenga un nuevo `Refresh Token`. |
| Falla el callback | Confirme que el redirect URI sea `https://your-domain.com/api/oauth/dropbox/callback`. |
| No se encuentran los archivos | Confirme que la aplicación de Dropbox se creó en modo `App folder`. |

## Flujo rápido

```text
Open Dropbox App Console
-> Create an app
-> Choose App folder access
-> Add https://your-domain.com/api/oauth/dropbox/callback
-> Enable account_info.read / files.metadata.read / files.metadata.write / files.content.write
-> Optionally enable files.content.read
-> Click Submit
-> Copy App Key and App Secret
-> Fill them into ImgBed
-> Click Get Token
-> Copy the Refresh Token from the callback page
-> Paste it back into ImgBed and save
```

## Referencias

1. Dropbox App Console: https://www.dropbox.com/developers/apps
2. Guía de OAuth de Dropbox: https://developers.dropbox.com/oauth-guide
3. Guía para desarrolladores de Dropbox: https://www.dropbox.com/developers/reference/developer-guide
