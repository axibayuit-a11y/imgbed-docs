# Geolocalización IP y gestión de usuarios

La geolocalización IP convierte las IP de registros de subida, dispositivos de inicio de sesión y otros logs en ubicaciones aproximadas.

Con esta función configurada, el panel muestra mejor el origen de subidas y accesos. La gestión de usuarios también permite bloquear o restaurar la capacidad de subir archivos para IP sospechosas.

## Dónde se configura

```text
Configuración del sistema -> Otros ajustes -> Geolocalización IP
```

![Geolocalización IP](../../image/other/ip定位/ip定位.png)

## Ajustes disponibles

| Ajuste | Descripción |
| --- | --- |
| Idioma de geolocalización | Define el idioma de las ubicaciones mostradas |
| MaxMind Account ID | ID de cuenta para MaxMind GeoLite Web Service |
| MaxMind License Key | Clave de licencia de MaxMind |
| Tencent Map Key | Útil para direcciones de China continental |
| ipapi Key | Clave de APILayer ipapi con soporte multilingüe |

Rellena solo los servicios que necesites. Si no configuras claves, ImgBed intentará usar fuentes gratuitas integradas, aunque pueden ser menos estables o precisas.

## Recomendación para español

Si quieres mostrar ubicaciones en español o en varios idiomas, configura MaxMind y, si necesitas mejores resultados multilingües, añade ipapi.

## Configurar MaxMind

MaxMind necesita:

```text
MaxMind Account ID
MaxMind License Key
```

Busca el Account ID en el panel de MaxMind y crea una License Key desde la página correspondiente. Después pega ambos valores en ImgBed.

![Configuración MaxMind](../../image/other/ip定位/maxmind的key配置.png)

## Configurar ipapi

Copia la API Key desde la consola de ipapi.

![Configuración ipapi](../../image/other/ip定位/ipapi配置.png)

Pégala en el campo `ipapi Key` dentro de ImgBed y guarda.

## Gestión de usuarios

La gestión de usuarios se abre desde la parte superior del panel de administración.

![Gestión de usuarios](../../image/other/用户管理显示.png)

Muestra la actividad agrupada por IP.

| Campo | Descripción |
| --- | --- |
| IP | IP de origen |
| Ubicación | Ubicación aproximada resuelta desde la IP |
| Tamaño total subido | Suma de archivos subidos por esa IP |
| Número de subidas | Cantidad de subidas |
| Subida permitida | Si se desactiva, esa IP ya no podrá subir |

Abre la flecha de la izquierda para revisar los archivos subidos por esa IP. Verás nombre, vista previa, tamaño, resultado de revisión, estado y hora de subida.

![Filtros avanzados](../../image/other/用户管理高级筛选.png)

## Consejos de operación

- Antes de bloquear una IP, revisa los archivos que subió.
- Usa búsqueda y ordenación para detectar IP recientes, muy activas o con mucho consumo.
- La ubicación IP es una estimación. Úsala como señal de apoyo, no como prueba absoluta.

![Vista móvil](../../image/other/手机端显示用户管理效果.png)
