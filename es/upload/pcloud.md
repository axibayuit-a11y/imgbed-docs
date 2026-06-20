# Añadir un canal pCloud

El canal pCloud usa tu cuenta de pCloud como destino de almacenamiento.

## Cuándo conviene

- Ya tienes cuenta de pCloud.
- Quieres guardar imágenes o archivos en tu espacio pCloud.
- Puedes usar correo y contraseña como credenciales del canal.

## Qué preparar

| Requisito | Uso |
| --- | --- |
| Correo de pCloud | Inicio de sesión en la API |
| Contraseña de pCloud | Inicio de sesión en la API |
| Host | Normalmente `api.pcloud.com`; para Europa `eapi.pcloud.com` |
| Directorio | Opcional, normalmente `imgbed` |

## Dónde se añade

1. Abre Configuración del sistema.
2. Entra en Configuración de subida.
3. Haz clic en `Añadir canal`.
4. Selecciona `pCloud`.

## Campos

| Campo | Valor |
| --- | --- |
| Nombre del canal | Por ejemplo `pCloud Main` |
| Correo | Correo de inicio de sesión de pCloud |
| Contraseña | Contraseña de pCloud |
| Host | Normalmente `api.pcloud.com` |
| Directorio | Opcional, por defecto `imgbed` |

El Host depende de la región de la cuenta.

| Región | Host |
| --- | --- |
| Predeterminada / Estados Unidos | `api.pcloud.com` |
| Europa | `eapi.pcloud.com` |

![Configuración pCloud](../../image/upload/pcloud/配置渠道.png)

## Verificación

Después de guardar, debe aparecer la tarjeta del canal. Si la consulta de capacidad funciona, la conexión está bien.

![Consulta de capacidad](../../image/upload/pcloud/查询额度成功.png)

Luego sube una imagen de prueba y comprueba que aparece en el directorio de pCloud.

## Preguntas habituales

### ¿Por qué no OAuth2?

OAuth2 de pCloud no está disponible como flujo abierto por defecto y requiere activación oficial. Además, el flujo actual no encaja bien con las URLs temporales de subida que necesita ImgBed, por eso se usa correo y contraseña.

### ¿Qué Host pongo?

Normalmente:

```text
api.pcloud.com
```

Para cuentas europeas:

```text
eapi.pcloud.com
```

## Flujo rápido

```text
Preparar correo y contraseña de pCloud
-> Abrir Configuración de subida
-> Añadir canal
-> Elegir pCloud
-> Rellenar nombre / correo / contraseña
-> Revisar Host
-> Guardar
-> Consultar capacidad
-> Subir imagen de prueba
```
