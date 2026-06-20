# Límites de frecuencia de usuarios

Los límites de frecuencia controlan el uso cuando una IP o usuario realiza demasiadas acciones en poco tiempo.

En sitios con subida pública, esta función ayuda a reducir spam, abuso o subidas masivas no deseadas.

## Dónde se configura

```text
Configuración del sistema -> Seguridad -> Límites de frecuencia
```

![Límites de frecuencia](../../image/other/用户频控截图.png)

## Ajustes principales

| Ajuste | Descripción |
| --- | --- |
| Habilitar | Activa o desactiva el límite |
| Ventana de tiempo | Periodo usado para contar acciones |
| Límite de acciones | Número máximo permitido dentro de la ventana |
| Acción objetivo | Subida u otra operación que quieras limitar |
| Tiempo de bloqueo | Duración del bloqueo tras superar el límite |

## Ejemplo razonable

Para una subida pública, empieza con una configuración moderada y ajusta según el uso real.

```text
30 acciones cada 10 minutos
bloqueo de 30 minutos al superar el límite
```

Esto suele dejar trabajar a usuarios normales y frena patrones claramente anómalos.

## Mensaje de error

Cuando se supera el límite, el usuario verá un aviso de que la acción fue rechazada.

![Aviso de errores frecuentes](../../image/other/频繁报错提示.png)

## Consejos

- Si el límite es demasiado estricto, puede bloquear subidas legítimas por lotes.
- En sitios públicos, evita dejar la subida totalmente sin límite.
- Combínalo con geolocalización IP y gestión de usuarios para investigar abuso.
- Si esperas un pico temporal de uso, puedes relajar el límite durante ese periodo.
