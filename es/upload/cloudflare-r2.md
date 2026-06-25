# Añadir un canal de Cloudflare R2

## Cuándo conviene

Use Cloudflare R2 cuando:

- Su sitio ImgBed ya esté desplegado en Cloudflare y quiera almacenar archivos en un bucket de R2 de la misma cuenta de Cloudflare.
- No quiera configurar un endpoint S3, una clave de acceso y una clave secreta independientes.
- Quiera que las lecturas y escrituras pasen por el binding de R2 de Worker o Pages con una configuración mínima.

En resumen:

El canal R2 no se crea manualmente dentro del panel de administración de ImgBed. Primero debe vincular un bucket de R2 al proyecto de Cloudflare, y el nombre de la variable del binding debe ser `img_r2`.

## Qué necesita antes de empezar

- Una cuenta de Cloudflare.
- Un bucket de R2 existente.
- Permiso para administrar el proyecto de Cloudflare donde está desplegado ImgBed.

## Configurarlo en Cloudflare

### 1. Crear un bucket de R2

1. Inicie sesión en el Cloudflare Dashboard.
2. Abra `R2 Object Storage`.
3. Haga clic en Crear bucket.
4. Elija un nombre de bucket, por ejemplo `imgbed`.

En este bucket se almacenarán los archivos cargados.

![Crear un bucket de R2](../../image/upload/cloudflare-r2/创建一个存储桶img-r2.png)

### 2. Vincular el bucket al proyecto ImgBed

Elija la ubicación del binding según el tipo de despliegue:

| Tipo de despliegue | Ubicación del binding |
| --- | --- |
| Pages | Proyecto actual de Pages -> Settings -> Functions -> R2 bucket bindings |
| Worker | Worker actual -> Settings -> Bindings -> R2 bucket bindings |

Al añadir el binding, los campos importantes son:

| Campo | Valor |
| --- | --- |
| Nombre de variable | `img_r2` |
| Bucket de R2 | Seleccione el bucket que creó. |

El nombre de la variable debe ser exactamente `img_r2`. La carga, lectura y eliminación de archivos de R2 dependen de este nombre de binding.

### 3. Volver a desplegar el proyecto

Después de guardar el binding, vuelva a desplegar ImgBed para que el entorno de ejecución de Worker o Pages pueda acceder a `img_r2`.

## Qué verá en ImgBed

Cuando el binding de R2 esté disponible, abra:

1. Ajustes del sistema.
2. Ajustes de carga.
3. El canal `Cloudflare R2`.

El sistema crea automáticamente un canal fijo:

| Campo | Valor fijo |
| --- | --- |
| Nombre del canal | `Cloudflare R2` |
| Tipo de canal | `cfr2` |
| Modo de almacenamiento | `binding` |
| Origen de configuración | Binding de entorno |

Es un canal fijo de binding. No necesita hacer clic en Añadir canal para crearlo, y no se puede eliminar como un canal normal.

## Campos editables en el panel de administración

| Campo | Qué hace | Obligatorio |
| --- | --- | --- |
| Activar canal | Controla si R2 participa en la selección de carga. | Sí |
| Account ID | Solo se usa cuando los límites de cuota están activados y se necesita consultar el uso oficial de R2. | Recomendado cuando los límites de cuota están activados |
| Nombre del bucket | Solo se usa cuando los límites de cuota están activados y se necesita consultar el uso oficial de R2. | Recomendado cuando los límites de cuota están activados |
| Límite de cuota | Controla si este canal R2 participa en la selección de carga según la capacidad. | No |
| Umbral | Detiene la escritura en este canal cuando el uso alcanza el porcentaje especificado. | Obligatorio cuando los límites de cuota están activados |

Puede copiar el Account ID desde el panel de información de la cuenta en el Cloudflare Dashboard. Complételo solo si quiere que ImgBed consulte y aplique el uso de cuota de R2.

![Obtener el Account ID](../../image/upload/cloudflare-r2/获取账户id.png)

## Pasos de configuración

1. Cree un bucket de R2 en Cloudflare.
2. Abra los ajustes de Cloudflare del proyecto ImgBed.
3. Añada un binding de bucket de R2.
4. Defina el nombre de variable como `img_r2`.
5. Seleccione el bucket de R2 que creó.
6. Guarde el binding y vuelva a desplegar ImgBed.
7. Vuelva a ImgBed -> Ajustes del sistema -> Ajustes de carga.
8. Confirme que el canal `Cloudflare R2` aparece y está activado.

Si quiere que R2 participe en la selección de carga según la capacidad, active el límite de cuota y, antes de guardar, introduzca el Account ID, el nombre del bucket, el límite de cuota y el umbral.

![Configurar límites de cuota](../../image/upload/cloudflare-r2/配置容量限制.png)

## Cómo verificarlo

- El canal fijo `Cloudflare R2` aparece en Ajustes de carga.
- La tarjeta del canal muestra que está activado.
- Un archivo pequeño de prueba se carga correctamente y el enlace devuelto se abre con normalidad.
- Si al abrir un archivo aparece `R2 database binding is not configured`, el entorno de ejecución no recibió el binding `img_r2`. Revise el nombre del binding en Cloudflare y vuelva a desplegar el proyecto.
