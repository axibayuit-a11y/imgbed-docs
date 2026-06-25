# Geolocalización IP y gestión de usuarios

La geolocalización IP convierte las direcciones IP de registros de subida, dispositivos de inicio de sesión y registros similares en ubicaciones aproximadas.

Después de configurarla, el panel de administración puede mostrar con más claridad los orígenes de subidas y accesos. La gestión de usuarios también permite bloquear o restaurar el acceso de subida para direcciones IP sospechosas.

## Dónde configurarla

Abra:

```text
System Settings -> Other Settings -> IP Geolocation
```

![Geolocalización IP](../../image/other/ip定位/ip定位.png)

## Ajustes disponibles

El flujo más reciente de geolocalización IP admite varias fuentes en lugar de depender de un único servicio de mapas.

| Ajuste | Propósito |
| --- | --- |
| Idioma de geolocalización IP | Elige el idioma de visualización, como inglés, chino simplificado, japonés, francés y otros. |
| MaxMind Account ID | ID de cuenta de MaxMind para MaxMind GeoLite Web Service. |
| MaxMind License Key | Clave de licencia de MaxMind. |
| Tencent Map Key | Clave de Tencent Location Service. Útil para direcciones en chino e IP de China continental. |
| ipapi Key | Clave de APILayer ipapi. Admite geolocalización IP multilingüe. |

Rellene solo los servicios que necesite. No tiene que configurar todos los campos.

Si no se proporciona ninguna clave, ImgBed seguirá intentando usar fuentes gratuitas integradas, pero la estabilidad, la compatibilidad lingüística y la precisión pueden ser menores que las de un servicio configurado por usted.

## Opciones recomendadas

Si necesita principalmente direcciones en chino:

1. Configure el idioma de geolocalización IP como chino simplificado.
2. Configure Tencent Map Key.
3. Añada opcionalmente MaxMind o ipapi como fuentes de respaldo.

Si necesita principalmente direcciones en inglés o multilingües:

1. Elija el idioma que necesite.
2. Configure MaxMind Account ID y License Key.
3. Añada ipapi Key si necesita mejores resultados multilingües.

## Configurar MaxMind

MaxMind necesita:

```text
MaxMind Account ID
MaxMind License Key
```

Busque el Account ID en el panel de MaxMind y genere una License Key desde la página License Keys.

![Configuración de clave MaxMind](../../image/other/ip定位/maxmind的key配置.png)

Después de generar la License Key, pegue el Account ID y la License Key en ImgBed y guarde.

El plan gratuito de MaxMind es adecuado para uso diario, pero tiene límites de solicitudes. Si se supera la cuota, ImgBed seguirá probando otras fuentes disponibles.

## Configurar ipapi

ipapi usa una APILayer API Key.

Abra la consola de ipapi y copie la API Key que se muestra allí.

![Configuración de ipapi](../../image/other/ip定位/ipapi配置.png)

Péguela en el campo `ipapi Key` de ImgBed y guarde.

ipapi admite geolocalización IP multilingüe y es útil cuando desea mostrar direcciones en un idioma seleccionado. Su plan gratuito también tiene límites de solicitudes. Si se agota la cuota, ImgBed seguirá probando otras fuentes disponibles.

## Configurar Tencent Map Key

Tencent Map Key es útil para direcciones en chino, especialmente IP de China continental.

Al crear una clave en Tencent Location Service, active:

```text
WebServiceAPI
```

Después de crearla, pegue la clave en `Tencent Map Key` y guarde.

Si solo necesita geolocalización IP básica en chino, Tencent Map Key es suficiente para empezar.

## Qué revisar en Gestión de usuarios

Gestión de usuarios está disponible desde la parte superior del panel de administración.

![Gestión de usuarios](../../image/other/用户管理显示.png)

Gestión de usuarios muestra la actividad de subida por IP:

| Campo | Descripción |
| --- | --- |
| IP de origen | IP de origen del usuario que sube archivos. |
| Dirección | Ubicación aproximada resuelta desde la IP. |
| Tamaño total subido | Tamaño total de archivos subidos por esta IP. |
| Número de subidas | Número de subidas desde esta IP. |
| Subida permitida | Activado significa que las subidas están permitidas. Desactivado significa que están bloqueadas. |

Haga clic en la flecha de la izquierda para expandir la lista de archivos subidos por esa IP.

La lista de archivos muestra nombre, vista previa, tamaño, resultado de moderación, estado del archivo y hora de subida. Cuando las subidas parezcan sospechosas, expanda primero la IP, revise los archivos y decida después si bloquear subidas futuras.

Si una IP es sospechosa, desactive `Upload allowed`. Las subidas futuras desde esa IP se bloquearán.

## Búsqueda, ordenación y filtros avanzados

En la parte superior de Gestión de usuarios, busque por IP de origen o dirección.

Ordene por tiempo, número de subidas o tamaño total subido para encontrar usuarios que han subido archivos recientemente, usuarios con alta frecuencia de subida o IP con alto uso.

Para una investigación más profunda, abra los filtros avanzados.

![Filtros avanzados](../../image/other/用户管理高级筛选.png)

Los filtros avanzados admiten:

| Filtro | Uso |
| --- | --- |
| Rango de tiempo | Muestra direcciones IP que subieron archivos durante un período seleccionado. |
| Estado de acceso | Filtra por estados normales, bloqueados y similares. |
| Lista de permitidos/bloqueados | Filtra por lista de permitidos, lista de bloqueados o sin definir. |
| Tipo de archivo | Muestra direcciones IP que subieron imágenes, vídeos, audio, documentos, código u otros archivos. |
| Tamaño de archivo | Filtra por rango de tamaño de archivo subido. |
| Clasificación de edad | Filtra por estado sin definir, General, R12+, R16+, R18 y clasificaciones similares. |
| Estado de archivo | Filtra por el estado actual del archivo para investigar archivos anómalos. |

Haga clic en `Apply Filters` para aplicar. Use `Reset` para volver a todos los datos.

## Vista móvil

En móvil, Gestión de usuarios cambia a un diseño de tarjetas.

![Gestión de usuarios en móvil](../../image/other/手机端显示用户管理效果.png)

Cada tarjeta muestra IP, dirección, tamaño total subido, número de subidas y el interruptor de subida permitida. Puede gestionar usuarios sin desplazarse horizontalmente por una tabla.

## Si la ubicación parece incorrecta

La geolocalización IP es aproximada. No es una dirección postal exacta.

Si el usuario está detrás de un proxy, centro de datos, servidor en la nube o red transfronteriza, la ubicación mostrada puede diferir de la real.

Use esta función para entender el origen aproximado, encontrar subidas anómalas y ayudar en decisiones de bloqueo. No la trate como seguimiento preciso.

## Casos comunes

| Caso | Significado |
| --- | --- |
| La dirección está vacía | La IP quizá aún no se ha resuelto, o la fuente actual no está disponible temporalmente. |
| El idioma de la dirección es incorrecto | Compruebe el idioma de geolocalización IP y si hay una fuente configurada que admita ese idioma. |
| La dirección muestra un centro de datos | Muchos proxies, servidores en la nube y rastreadores aparecen como direcciones de centros de datos o ISP. |
| El número de subidas es alto | Revise esta IP con cuidado y bloquee subidas si es necesario. |
| El tamaño total subido es grande | Ordene o filtre, expanda la IP y revise archivos concretos. |
| Necesita restaurar después de bloquear | Vuelva a activar `Upload allowed`. |

## Flujo rápido

```text
Open IP Geolocation in Other Settings
-> Choose IP geolocation language
-> Fill MaxMind, Tencent Map, or ipapi credentials as needed
-> Save settings
-> Open User Management
-> Review IP source, address, total upload size, and upload count
-> Use search, sort, or advanced filters to find abnormal IPs
-> Allow or block uploads as needed
```
