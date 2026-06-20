# Añadir un canal Cloudflare R2

El canal Cloudflare R2 guarda archivos en un bucket de R2.

## Cuándo conviene

- Quieres gestionar almacenamiento dentro del ecosistema Cloudflare.
- Vas a usar R2 como destino principal de ImgBed.
- Quieres combinar R2 con un dominio personalizado o CDN.

## Qué preparar

| Requisito | Uso |
| --- | --- |
| Cuenta de Cloudflare | Gestionar R2 y tokens |
| Bucket R2 | Destino real de los archivos |
| Account ID | Identificar la cuenta |
| API Token | Permitir lectura y escritura en R2 |
| Dominio personalizado | Opcional, para URLs públicas más limpias |

## Crear el bucket

En Cloudflare Dashboard, abre `R2 Object Storage` y crea un bucket nuevo.

![Crear bucket R2](../../image/upload/cloudflare-r2/创建一个存储桶img-r2.png)

Guarda el nombre exacto del bucket, porque debes introducirlo igual en ImgBed.

## Buscar el Account ID

En la página de la cuenta de Cloudflare puedes ver el Account ID.

![Account ID](../../image/upload/cloudflare-r2/获取账户id.png)

## Rellenar en ImgBed

En Configuración de subida, abre `Añadir canal` y elige `Cloudflare R2`.

| Campo | Valor |
| --- | --- |
| Nombre del canal | Nombre fácil de reconocer |
| Account ID | Account ID de Cloudflare |
| Bucket | Nombre del bucket R2 |
| API Token | Token con permiso sobre R2 |
| Dominio personalizado | Opcional |
| Directorio | Opcional; normalmente `imgbed` |

## Límite de capacidad

Puedes activar límite de capacidad si quieres controlar cuándo deja de usarse este canal.

![Límite de capacidad](../../image/upload/cloudflare-r2/配置容量限制.png)

Cuando el uso llega al umbral configurado, ImgBed puede dejar de seleccionar ese canal para nuevas subidas.

## Verificación

1. La tarjeta del canal R2 aparece tras guardar.
2. El canal está habilitado.
3. Sube una imagen de prueba.
4. Comprueba que el objeto aparece en el bucket.
5. Abre el enlace devuelto por ImgBed.

## Errores habituales

- Account ID o nombre de bucket incorrecto.
- Token sin permisos suficientes sobre el bucket.
- Dominio personalizado no conectado al bucket.
- El canal quedó fuera por límite de capacidad.
