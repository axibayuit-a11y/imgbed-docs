# Índice distribuido federado

El índice distribuido federado permite que varios sitios ImgBed compartan listas de archivos entre sí.

En pocas palabras:

- Puedes compartir algunas carpetas de tu sitio con otras personas.
- Puedes unirte al nodo de otra persona y sincronizar su lista compartida en tu panel.
- Los archivos federados sirven para explorar, buscar, previsualizar y copiar enlaces. No se vuelven a subir a tu propio almacenamiento.

## Dónde se configura

```text
Configuración del sistema -> Otros ajustes -> Índice distribuido federado
```

![Nodo local](../../image/other/联盟图/联盟分布式索引本地节点.png)

La página tiene tres pestañas:

| Pestaña | Uso |
| --- | --- |
| Nodo local | Configurar tu nodo, dominio público, carpetas compartidas e índice saliente |
| Nodos unidos | Gestionar los nodos de otros sitios a los que te uniste |
| Solicitudes a mi nodo | Gestionar solicitudes de otras personas para unirse a tu nodo |

## Configuración inicial

1. Abre `Nodo local`.
2. Activa `Habilitar`.
3. Elige las carpetas que quieres compartir en `Carpetas de sincronización`.
4. Haz clic en `Actualizar índice saliente`.
5. Si ImgBed detecta un cambio de dominio, confirma que el dominio actual es el dominio real de producción.

Puedes seleccionar varias carpetas. Si dejas la lista vacía, se comparten todas las carpetas.

## Nodo local

### Dominio público

El dominio público es la dirección que otros nodos usan para acceder a tu sitio.

ImgBed lo detecta automáticamente, así que normalmente no hace falta escribirlo. Al actualizar el índice por primera vez, o después de cambiar de dominio, pedirá confirmación.

### Carpetas de sincronización

Estas carpetas deciden qué archivos se comparten.

Por ejemplo:

```text
/1/
/2/
```

En este caso, otros nodos solo verán archivos dentro de esos dos directorios.

### Actualizar índice saliente

Este botón actualiza la lista de archivos que otros nodos pueden sincronizar desde tu sitio.

Úsalo cuando:

- Activas la federación por primera vez.
- Subes nuevos archivos que quieres compartir.
- Cambias las carpetas compartidas.
- Cambias el dominio público y necesitas confirmarlo.

## Unirse a otros nodos

`Nodos unidos` es el lugar donde te suscribes a nodos de otros sitios ImgBed.

![Nodos unidos](../../image/other/联盟图/我加入的节点.png)

1. Pide al propietario del otro nodo un enlace de invitación.
2. Pégalo en el cuadro de entrada.
3. Haz clic en `Solicitar unión`.
4. Espera a que la otra parte lo apruebe en su panel.

Después de la aprobación, usa `Actualizar índice entrante` para sincronizar los archivos compartidos.

Si solo quieres actualizar un nodo concreto, usa `Actualizar índice` en la tarjeta de ese nodo.

![Actualizar índice](../../image/other/联盟图/更新索引.png)

## Gestionar solicitudes a tu nodo

`Solicitudes a mi nodo` muestra las personas que quieren unirse a tu nodo.

![Solicitudes a mi nodo](../../image/other/联盟图/加入我的节点.png)

Para generar una invitación, asegúrate de que el nodo local esté habilitado, ejecuta al menos una vez `Actualizar índice saliente` para confirmar el dominio público y luego pulsa `Restablecer enlace de invitación`.

Cuando llega una solicitud, puedes elegir:

| Acción | Resultado |
| --- | --- |
| Aprobar | Permite que la otra parte sincronice tu lista compartida |
| Rechazar | No permite la unión |
| Eliminar | Borra un registro terminado |
| Comprobar estado | Verifica si la otra parte conserva la relación |

Después de aprobar, la otra parte todavía debe actualizar su índice entrante para ver tus archivos.

![Aprobar nodo](../../image/other/联盟图/邀请节点同意.png)

## Mensajes

Cuando la relación ya está aprobada, puedes usar `Mensaje` en la tarjeta del nodo.

Los mensajes solo sirven para coordinar la relación federada. No cambian archivos, etiquetas, directorios ni permisos.

![Mensajes](../../image/other/联盟图/留言功能.png)

## Ver archivos federados

Cuando la sincronización termine, vuelve a la lista de archivos del panel. En la parte superior puedes cambiar entre archivos locales y archivos federados.

Los archivos federados no son archivos locales: puedes verlos, buscarlos, previsualizarlos y copiar enlaces, pero no moverlos, borrarlos, cambiarles etiquetas ni crear copias de seguridad desde tu sitio.

![Vista en el panel](../../image/other/联盟图/联盟管理显示效果图.png)

## Preguntas habituales

### Aparece que no existe relación

Normalmente significa que la otra parte eliminó tu registro. En ese caso debes enviar una nueva solicitud.

![Solicitar de nuevo](../../image/other/联盟图/无关系记录重新申请.png)

### Me uní pero no veo archivos

Comprueba:

1. La otra parte aprobó tu solicitud.
2. La otra parte actualizó su índice saliente.
3. Tú actualizaste el índice entrante.
4. Las carpetas sincronizadas de la otra parte contienen los directorios que quiere compartir.
