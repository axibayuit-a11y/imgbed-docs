# Añadir un canal de Telegram

## Qué necesita antes de empezar

| Requisito | Propósito |
| --- | --- |
| Cuenta de Telegram | Se usa para crear el bot y el canal de almacenamiento. |
| `@BotFather` | Se usa para crear un bot de Telegram. |
| Un canal de Telegram | Destino final de almacenamiento de los archivos. |
| `@userinfobot` | Se usa para consultar el `Chat ID` del canal. |

## Dónde añadirlo

1. Abra Ajustes del sistema.
2. Vaya a Ajustes de carga.
3. Haga clic en Añadir canal en la esquina superior derecha.
4. Seleccione `Telegram`.

## Referencia de campos

| Campo | Qué hace | Obligatorio |
| --- | --- | --- |
| Nombre del canal | Un nombre fácil de reconocer para este canal, como "Telegram Principal". | Obligatorio |
| Activo | Activa o desactiva este canal. | Recomendado |
| Bot Token | El token de su bot de Telegram. | Obligatorio |
| Session ID (Chat ID) | El ID del canal de Telegram. | Obligatorio |
| URL del proxy de retransmisión (opcional) | Úselo solo si el acceso a Telegram es inestable. Introduzca la URL completa del proxy, incluido `https://`. | Opcional |
| Observación | Notas para mantenimiento futuro. | Opcional |

## Pasos de configuración

### 1. Crear un bot de Telegram

1. Abra Telegram y busque `@BotFather`.
2. Abra el chat y haga clic en `Start`.
3. Envíe `/newbot`.
4. Siga las instrucciones para introducir el nombre visible del bot.
5. Siga las instrucciones para introducir el nombre de usuario del bot. Normalmente debe terminar en `bot`.
6. Cuando se cree el bot, `@BotFather` devolverá un token de bot.

Este token es el `Bot Token` que debe introducir en ImgBed.

![Guardar el token del bot](../../image/upload/telegram/保存机器人令牌.png)

### 2. Crear un canal

1. En Telegram, haga clic en Nuevo canal.
2. Introduzca un nombre de canal.
3. Termine de crear el canal.

Se pueden usar canales públicos y privados.

![Crear un canal](../../image/upload/telegram/新建频道.png)

### 3. Añadir el bot al canal

1. Abra el canal que acaba de crear.
2. Abra los ajustes del canal.
3. Añada un miembro o administrador.
4. Busque el nombre de usuario del bot que creó.
5. Añada el bot al canal.

Para cargas más fiables, conceda permisos de administrador al bot.

![Invitar el bot al canal](../../image/upload/telegram/邀请机器人进频道里.png)

### 4. Obtener el Channel ID con User Info - Get ID - IDbot

1. Busque `@userinfobot` en Telegram. Su nombre visible suele ser `User Info - Get ID - IDbot`.
2. Abra el chat y haga clic en `Start`.
3. Elija `Channel` entre las opciones del bot.
4. En el selector de mensajes, seleccione el canal de destino y envíelo a `@userinfobot`.
5. Cuando `@userinfobot` devuelva el resultado, copie el número que aparece como `Id: -100...`.

El número que empieza por `-100` es el `Session ID (Chat ID)` que necesita ImgBed.

![Obtener el Channel ID](../../image/upload/telegram/获取频道id.png)

### 5. Completar el canal de Telegram en ImgBed

Vuelva al diálogo de configuración del canal y complete los campos así:

| Campo de la interfaz | Valor |
| --- | --- |
| Identificador del canal | Nombre personalizado del canal, por ejemplo `TelegramPrincipal`. |
| Activo | Recomendado. |
| Bot Token | El token del bot obtenido de `@BotFather`. |
| Session ID (Chat ID) | El número `-100...` devuelto por `@userinfobot`. |
| URL del proxy de retransmisión (opcional) | Solo si es necesario, por ejemplo `https://your-tg-proxy.example.com`. |
| Observación | Notas opcionales. |

Cuando termine, haga clic en Guardar.

![Editar la configuración](../../image/upload/telegram/编辑配置.png)

## Cómo verificarlo

| Comprobación | Cómo verificarlo |
| --- | --- |
| Aparece la tarjeta del canal | Después de guardar, la página Ajustes de carga debería mostrar una tarjeta de canal Telegram. |
| El canal se puede activar | El interruptor Activo debería permanecer activado. |
| La configuración está guardada | La vista de detalle debería mostrar que Bot Token y Chat ID quedaron guardados. |
| La carga funciona | Cargue una imagen de prueba y confirme que aparece en el canal de Telegram de destino. |

## Lista rápida

```text
Create a bot with @BotFather
-> Save the Bot Token
-> Create a Telegram channel
-> Add the bot to the channel and grant administrator permissions
-> Search for @userinfobot and choose Channel
-> Forward any message from the channel to @userinfobot
-> Copy the returned Id: -100...
-> Enter the Bot Token and Chat ID in ImgBed
-> Save and upload a test image
```

## Referencias

1. Telegram bots: https://core.telegram.org/bots
2. Telegram Bot API: https://core.telegram.org/bots/api
