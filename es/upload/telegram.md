# Añadir un canal Telegram

Para usar Telegram como almacenamiento, crea un bot y añádelo al canal donde se guardarán los archivos.

## Qué preparar

| Requisito | Uso |
| --- | --- |
| Cuenta de Telegram | Crear bot y canal |
| `@BotFather` | Crear el bot |
| Canal de Telegram | Destino de archivos |
| `@userinfobot` | Obtener el Chat ID del canal |

## Crear bot

1. Busca `@BotFather` en Telegram.
2. Abre el chat y envía `/newbot`.
3. Introduce nombre visible y username. El username suele tener que terminar en `bot`.
4. Copia el Token que devuelve BotFather.

![Bot Token](../../image/upload/telegram/保存机器人令牌.png)

## Crear canal de almacenamiento

Crea un nuevo canal en Telegram. Puede ser público o privado.

![Crear canal](../../image/upload/telegram/新建频道.png)

## Añadir el bot al canal

Desde la configuración del canal, añade el bot como miembro o administrador.

![Añadir bot al canal](../../image/upload/telegram/邀请机器人进频道里.png)

Para subidas más estables, conviene darle permisos de administrador.

## Obtener Chat ID

1. Busca `@userinfobot` en Telegram.
2. Pulsa `Start`.
3. Elige `Channel`.
4. Envía al bot un mensaje del canal objetivo.
5. Copia el número que aparece como `Id: -100...`.

![Obtener Chat ID](../../image/upload/telegram/获取频道id.png)

## Rellenar en ImgBed

En Configuración de subida, elige `Telegram`.

| Campo | Valor |
| --- | --- |
| Nombre del canal | Por ejemplo `Telegram Main` |
| Bot Token | Token de `@BotFather` |
| Session ID / Chat ID | ID del canal que empieza por `-100` |
| Relay Proxy URL | Opcional, solo si Telegram va inestable |
| Nota | Opcional |

![Configuración Telegram](../../image/upload/telegram/编辑配置.png)

## Verificación

1. Guarda el canal.
2. Sube una imagen de prueba.
3. Comprueba que aparece en el canal de Telegram.
4. Abre el enlace de ImgBed.

## Flujo rápido

```text
Crear bot con @BotFather
-> Copiar Bot Token
-> Crear canal de Telegram
-> Añadir bot al canal y darle permisos
-> Obtener Chat ID -100 con @userinfobot
-> Rellenar Bot Token y Chat ID en ImgBed
-> Guardar y probar subida
```

## Referencias

1. Telegram Bot: https://core.telegram.org/bots
2. Telegram Bot API: https://core.telegram.org/bots/api
