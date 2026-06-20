# Añadir un canal Dropbox

El canal Dropbox usa una cuenta de Dropbox como destino de almacenamiento.

## Qué preparar

| Requisito | Uso |
| --- | --- |
| Cuenta de Dropbox | Guardar archivos |
| Dropbox App | Dar acceso por API |
| Access Token | Permitir que ImgBed use Dropbox |
| Directorio | Opcional, normalmente `imgbed` |

## Crear la aplicación

Abre Dropbox App Console y crea una aplicación nueva.

![Crear aplicación](../../image/upload/dropbox/开发者创建应用.png)

Elige el alcance según cómo quieras guardar los archivos. Una carpeta dedicada suele ser más fácil de mantener.

## Configurar callback

Si usas OAuth, añade la URL de retorno de ImgBed:

```text
https://tu-dominio/api/oauth/dropbox/callback
```

![Configurar callback](../../image/upload/dropbox/配置回调地址.png)

## Añadir permisos

Activa permisos de subida, lectura y borrado según necesite ImgBed.

![Permisos Dropbox](../../image/upload/dropbox/添加对应的权限.png)

## Obtener Token

Obtén el token desde la aplicación o desde el flujo de autorización de ImgBed.

![Obtener Token](../../image/upload/dropbox/获取令牌.png)

Copia el token y pégalo en ImgBed.

![Copiar Token](../../image/upload/dropbox/复制令牌.png)

## Rellenar en ImgBed

En Configuración de subida, elige `Dropbox`.

| Campo | Valor |
| --- | --- |
| Nombre del canal | Nombre reconocible |
| Access Token | Token de Dropbox |
| Directorio | Opcional; vacío o `imgbed` |
| Nota | Opcional |

## Verificación

Después de guardar, ejecuta consulta de capacidad o sube una imagen de prueba.

![Consulta de capacidad](../../image/upload/dropbox/查询额度成功.png)

Si el archivo aparece en Dropbox y el enlace de ImgBed abre correctamente, el canal está listo.

## Qué revisar si falla

- Token caducado o con permisos incompletos.
- Cambiaste permisos de la app pero no volviste a autorizar.
- Directorio con espacios o barras innecesarias.
- Dropbox sin espacio disponible.
