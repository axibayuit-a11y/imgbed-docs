# Añadir un canal de Discord

## Qué necesita antes de empezar

| Requisito | Propósito |
| --- | --- |
| Cuenta de Discord | Se usa para crear un servidor, un canal y una aplicación de desarrollador. |
| Un servidor de Discord | El bot debe unirse a un servidor antes de poder acceder a un canal. |
| Un canal de texto | Las imágenes y los archivos se enviarán a este canal. |
| Discord Developer Portal | Se usa para crear una aplicación, crear un bot y obtener el `Bot Token`. |

## Dónde añadirlo

1. Abra Ajustes del sistema.
2. Vaya a Ajustes de carga.
3. Haga clic en Añadir canal en la esquina superior derecha.
4. Seleccione `Discord`.

## Referencia de campos

| Campo | Qué hace | Obligatorio |
| --- | --- | --- |
| Nombre del canal | Un nombre fácil de reconocer para este canal, como "Discord Principal". | Obligatorio |
| Bot Token | El token del bot de Discord. | Obligatorio |
| Channel ID | El ID del canal de texto de destino. | Obligatorio |
| URL de proxy (opcional) | Úselo solo si el acceso a Discord CDN es inestable. Introduzca la URL completa, incluido `https://`. | Opcional |

## Pasos de configuración

### 1. Crear un servidor y un canal de texto de Discord

1. Abra Discord.
2. Cree un servidor nuevo o use un servidor existente de su propiedad.
3. Cree un canal de texto en ese servidor.

![Crear un servidor](../../image/upload/discord/创建服务器.png)

### 2. Crear un bot en Discord Developer Portal

1. Abra Discord Developer Portal: `https://discord.com/developers/applications`
2. Haga clic en `New Application`.
3. Introduzca un nombre de aplicación y créela.
4. Abra la página `Bot` en la barra lateral izquierda.
5. Genere o restablezca el token en la página `Bot`.
6. Guarde el token.

Este token es el `Bot Token` que debe introducir en ImgBed.

![Ver el token del bot](../../image/upload/discord/查看机器人令牌.png)

### 3. Generar un enlace de invitación OAuth2 e instalar el bot

1. Abra la página `OAuth2` en la barra lateral izquierda.
2. En los ámbitos, seleccione `bot`.
3. En el área de permisos, active estos permisos:

| Permiso | Obligatorio |
| --- | --- |
| View Channels | Sí |
| Send Messages | Sí |
| Attach Files | Sí |
| Read Message History | Sí |

4. En la parte inferior de la página, confirme que el tipo de integración sea `Guild Install`.
5. Copie la URL generada.
6. Abra esa URL en el navegador.
7. Seleccione el servidor de destino.
8. Complete el flujo de autorización.

![Seleccionar permisos del bot en OAuth2](../../image/upload/discord/在oa2勾选机器人权限.png)

![Invitar el bot al canal](../../image/upload/discord/邀请机器人到频道.png)

### 4. Activar Developer Mode y copiar el Channel ID

1. Haga clic en el icono de engranaje junto a su avatar en la esquina inferior izquierda de Discord.
2. Abra Advanced en la barra lateral izquierda.
3. Active Developer Mode.
4. Vuelva al canal de texto de destino.
5. Haga clic derecho en el nombre del canal.
6. Haga clic en Copy Channel ID.

El número copiado es el `Channel ID` que requiere ImgBed.

![Activar Developer Mode](../../image/upload/discord/开启开发者权限.png)

![Copiar el Channel ID](../../image/upload/discord/复制群频道id.png)

### 5. Completar el canal de Discord en ImgBed

Vuelva al diálogo de configuración del canal y complete los campos así:

| Campo de la interfaz | Valor |
| --- | --- |
| Nombre del canal | Un nombre personalizado del canal, por ejemplo `DiscordPrincipal`. |
| Bot Token | El token guardado desde la página `Bot` en Discord Developer Portal. |
| Channel ID | El ID del canal que copió desde Discord. |
| URL de proxy (opcional) | Solo si es necesario, por ejemplo `https://your-proxy.example.com`. |

Cuando termine, haga clic en Guardar.

![Añadir la configuración del canal de Discord](../../image/upload/discord/添加dc新渠道配置.png)

## Cómo verificarlo

| Comprobación | Cómo verificarlo |
| --- | --- |
| Aparece la tarjeta del canal | Después de guardar, la página Ajustes de carga debería mostrar una tarjeta de canal Discord. |
| El canal se puede activar | El interruptor Activo debería permanecer activado. |
| La configuración está guardada | La vista de detalle debería mostrar que Bot Token y Channel ID quedaron guardados. |
| La carga funciona | Cargue una imagen de prueba y confirme que aparece en el canal de texto de Discord de destino. |

## Lista rápida

```text
Create a Discord server
-> Create a text channel
-> Create a bot in the Discord Developer Portal
-> Save the Bot Token from the Bot page
-> In OAuth2, select bot, View Channels, Send Messages, Attach Files, and Read Message History
-> Copy the generated URL and authorize the bot for the target server
-> Make sure the target text channel grants the same permissions
-> Enable Developer Mode
-> Right-click the target text channel and copy the Channel ID
-> Enter the Bot Token and Channel ID in ImgBed
-> Save and upload a test image
```

## Referencias

1. Guía de inicio para desarrolladores de Discord: https://docs.discord.com/developers/quick-start/getting-started
2. Ayuda de Discord: dónde encontrar el ID de usuario, servidor o mensaje: https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID
