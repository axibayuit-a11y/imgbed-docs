# Añadir un canal de pCloud

## Cuándo conviene

- Tiene una cuenta de pCloud y quiere que ImgBed almacene imágenes en pCloud.
- No le importa usar el correo y la contraseña de su cuenta de pCloud como credenciales del canal.

## Qué necesita primero

| Requisito | Por qué lo necesita |
| --- | --- |
| Correo de la cuenta de pCloud | Se usa para iniciar sesión en la API de pCloud |
| Contraseña de pCloud | Se usa para iniciar sesión en la API de pCloud |
| Host de API | El valor predeterminado es `api.pcloud.com`. Las cuentas de la UE pueden usar `eapi.pcloud.com`. |
| Directorio de almacenamiento | Donde se almacenan los archivos. El valor predeterminado es `imgbed`. |

## Dónde añadirlo

1. Abra Ajustes del sistema.
2. Abra Ajustes de carga.
3. Haga clic en Añadir canal en la esquina superior derecha.
4. Elija `pCloud`.

## Referencia de campos

| Campo | Propósito | Obligatorio |
| --- | --- | --- |
| Nombre del canal | Identifica este canal pCloud, por ejemplo `pCloud personal` | Sí |
| Correo de la cuenta | Su correo de inicio de sesión en pCloud | Sí |
| Contraseña | Su contraseña de pCloud | Sí |
| Host de API | Host de la API de pCloud. El valor predeterminado es `api.pcloud.com`. | No |
| Directorio de almacenamiento | Directorio usado para almacenar archivos. El valor predeterminado es `imgbed`. | No |

Elija el host de API según la región de su cuenta:

| Región de la cuenta | Host de API |
| --- | --- |
| Predeterminada / EE. UU. | `api.pcloud.com` |
| Europa | `eapi.pcloud.com` |

## Pasos de configuración

1. Abra Ajustes de carga.
2. Haga clic en Añadir canal.
3. Elija `pCloud`.
4. Introduzca un nombre de canal que pueda reconocer.
5. Introduzca el correo de su cuenta de pCloud.
6. Introduzca su contraseña de pCloud.
7. Mantenga el host de API como `api.pcloud.com`, o use `eapi.pcloud.com` para cuentas de la UE.
8. Mantenga el directorio de almacenamiento como `imgbed`, o cámbielo por la carpeta que prefiera.
9. Guarde el canal.

![Configurar canal](../../image/upload/pcloud/配置渠道.png)

## Cómo verificarlo

| Comprobación | Resultado esperado |
| --- | --- |
| Tarjeta del canal | La tarjeta del canal pCloud aparece después de guardar. |
| Interruptor del canal | El interruptor de la tarjeta permanece activado. |
| Visualización del correo | La tarjeta muestra el correo de pCloud conectado. |
| Consulta de cuota | Después de una consulta correcta, se muestran la capacidad usada y total. |
| Prueba de carga | Una imagen de prueba aparece en el directorio de almacenamiento configurado de pCloud. |

![Consulta de cuota correcta](../../image/upload/pcloud/查询额度成功.png)

## Solución de problemas

### ¿Por qué no OAuth2?

pCloud OAuth2 no es autoservicio de forma predeterminada. Debe escribir a pCloud y pedir que lo activen.

El flujo OAuth2 actual de pCloud tampoco admite el flujo de enlaces de carga de corta duración que ImgBed necesita, por lo que este canal usa inicio de sesión con correo y contraseña.

### ¿Qué host de API debo usar?

Predeterminado:

```text
api.pcloud.com
```

Para cuentas de la UE:

```text
eapi.pcloud.com
```

## Flujo rápido

```text
Prepare your pCloud email and password
-> Open Upload Settings
-> Add Channel
-> Choose pCloud
-> Fill channel name / email / password
-> Keep API host as api.pcloud.com unless your account is in Europe
-> Keep storage directory as imgbed unless you need another folder
-> Save
-> Query quota
-> Upload a test image
```
