# Añadir un canal Discord

El canal Discord usa un canal de un servidor Discord como destino de archivos.

## Qué preparar

| Requisito | Uso |
| --- | --- |
| Cuenta de Discord | Gestionar servidor y bot |
| Servidor de Discord | Lugar donde estará el canal de almacenamiento |
| Bot de Discord | Enviar archivos al canal |
| Bot Token | Permitir que ImgBed use el bot |
| Channel ID | Identificar el canal de destino |

## Crear servidor

Puedes usar un servidor existente, pero para almacenamiento conviene crear uno dedicado.

![Crear servidor](../../image/upload/discord/创建服务器.png)

## Activar modo desarrollador

Para copiar el Channel ID, activa el modo desarrollador en Discord.

![Modo desarrollador](../../image/upload/discord/开启开发者权限.png)

Haz clic derecho sobre el canal de destino y copia el ID.

![Copiar Channel ID](../../image/upload/discord/复制群频道id.png)

## Crear bot y obtener Token

En Discord Developer Portal, crea una aplicación y añade un bot. Copia el Bot Token y guárdalo con cuidado.

![Bot Token](../../image/upload/discord/查看机器人令牌.png)

## Invitar el bot al servidor

En OAuth2, selecciona permisos de bot y usa la URL generada para invitarlo al servidor.

![Permisos del bot](../../image/upload/discord/在oa2勾选机器人权限.png)

![Invitar bot](../../image/upload/discord/邀请机器人到频道.png)

El bot necesita permiso para enviar mensajes y adjuntar archivos en el canal.

## Rellenar en ImgBed

En Configuración de subida, elige `Discord`.

| Campo | Valor |
| --- | --- |
| Nombre del canal | Por ejemplo `Discord Storage` |
| Bot Token | Token del Developer Portal |
| Channel ID | ID del canal de destino |
| Nota | Opcional |

![Configuración Discord](../../image/upload/discord/添加dc新渠道配置.png)

## Verificación

1. Guarda el canal.
2. Sube una imagen de prueba.
3. Comprueba que aparece en el canal de Discord.
4. Abre el enlace devuelto por ImgBed.

Si falla, revisa Bot Token, Channel ID, permisos del bot y si el bot está dentro del servidor.
