# Añadir un canal GitLab Packages

El canal GitLab Packages usa Generic Package Registry de GitLab como almacenamiento.

## Qué preparar

| Requisito | Uso |
| --- | --- |
| Cuenta de GitLab | Gestionar proyecto y token |
| Proyecto GitLab | Lugar donde se guardará el paquete |
| Access Token | Subir archivos al Package Registry |
| Project ID | Identificar el proyecto desde ImgBed |

## Crear Token

Desde GitLab, crea un Access Token con los permisos necesarios.

![Generar Token](../../image/upload/gitlab-packages/点击生成旧版令牌.png)

Marca permisos de lectura y escritura necesarios para paquetes.

![Permisos Token](../../image/upload/gitlab-packages/勾选令牌权限.png)

El token puede mostrarse solo una vez. Cópialo y guárdalo.

## Rellenar en ImgBed

En Configuración de subida, elige `GitLab Packages`.

| Campo | Valor |
| --- | --- |
| Nombre del canal | Por ejemplo `GitLab Packages` |
| GitLab Host | `https://gitlab.com` o tu instancia propia |
| Project ID | ID del proyecto |
| Token | Access Token |
| Package Name | Nombre del paquete |
| Version | Versión |
| Ruta | Opcional |

![Configuración GitLab](../../image/upload/gitlab-packages/配置渠道内容.png)

## Verificación

1. Guarda el canal.
2. Sube un archivo de prueba.
3. Comprueba que aparece en Package Registry.
4. Abre el enlace desde ImgBed.

## Errores habituales

- Project ID incorrecto.
- Token sin permiso de escritura en Package Registry.
- GitLab Host mal escrito.
- Package Registry deshabilitado en el proyecto.
