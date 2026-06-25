# Índice distribuido federado

El índice distribuido federado permite que varios sitios ImgBed compartan listas de archivos entre sí.

En términos sencillos:

- Puede compartir carpetas seleccionadas de su sitio con otras personas.
- Puede unirse a otro nodo y sincronizar la lista de archivos compartidos de ese nodo en su panel de administración.
- Los archivos federados sirven principalmente para explorar, buscar y abrir enlaces. No se vuelven a subir a su propio almacenamiento.

## Dónde configurarlo

Abra:

```text
System Settings -> Other Settings -> Federated Distributed Index
```

![Nodo de federación local](../../image/other/联盟图/联盟分布式索引本地节点.png)

La página tiene tres pestañas:

| Pestaña | Propósito |
| --- | --- |
| Nodo local | Activar su nodo, confirmar el dominio público, seleccionar carpetas compartidas y actualizar el índice saliente |
| Nodos a los que me he unido | Gestionar otros nodos de ImgBed a los que se ha unido |
| Nodos que se unen a mí | Gestionar solicitudes de otras personas que quieren unirse a su nodo |

## Configuración inicial

1. Abra `Local Node`.
2. Active `Enable`.
3. Seleccione las carpetas que desea compartir en `Sync folders`.
4. Haga clic en `Update Outbound Index`.
5. Si ImgBed detecta un cambio de dominio, confirme que el dominio actual es correcto antes de continuar.

Puede seleccionar varias carpetas de sincronización.

Si la lista de carpetas de sincronización está vacía, se comparten todas las carpetas.

## Nodo local

### Dominio público

El dominio público es la URL del sitio que otros nodos usan para acceder a su nodo.

ImgBed lo detecta automáticamente. No necesita escribirlo manualmente. La primera vez que actualice el índice, ImgBed le pedirá confirmar si la URL de acceso actual es el dominio de producción.

Si cambia de dominio más adelante, la actualización del índice volverá a pedir confirmación.

### Carpetas de sincronización

Las carpetas de sincronización determinan qué archivos se comparten con los nodos federados.

Por ejemplo, si selecciona solo:

```text
/1/
/2/
```

los demás nodos solo podrán ver los archivos de esos dos directorios.

### Actualizar índice saliente

Esto actualiza la lista de archivos que otros nodos pueden sincronizar desde usted.

Úselo cuando:

- active la federación por primera vez.
- suba archivos que desea compartir.
- cambie las carpetas de sincronización.
- cambie el dominio público y necesite confirmarlo.

## Nodos a los que me he unido

`Nodes I Joined` es donde se suscribe a otros nodos.

![Nodos a los que me he unido](../../image/other/联盟图/我加入的节点.png)

### Solicitar unirse a otro nodo

1. Pida al otro propietario un enlace de invitación.
2. Péguelo en el cuadro de entrada.
3. Haga clic en `Request to Join`.
4. Espere a que el otro propietario lo apruebe en su panel de administración.

Después de la aprobación, el estado del nodo pasa a aprobado.

### Actualizar índice entrante

`Update Inbound Index` sincroniza listas de archivos desde los nodos a los que se ha unido.

Úselo cuando:

- el otro propietario acaba de aprobar su solicitud.
- el otro propietario le informa que el contenido compartido se actualizó.
- desea actualizar todas las listas de archivos federadas a las que se ha unido.

Para actualizar solo un nodo, haga clic en `Update Index` en la tarjeta de ese nodo.

![Actualizar índice](../../image/other/联盟图/更新索引.png)

### Cancelar suscripción

Si ya no desea sincronizar un nodo, haga clic en `Unsubscribe`.

Después de cancelar la suscripción, el índice federado de ese nodo se elimina de su sitio local.

## Nodos que se unen a mí

`Nodes Joining Me` es donde gestiona las solicitudes de otras personas.

![Nodos que se unen a mí](../../image/other/联盟图/加入我的节点.png)

### Generar un enlace de invitación

1. Asegúrese de que el nodo local esté activado.
2. Haga clic en `Update Outbound Index` al menos una vez para que ImgBed confirme el dominio público.
3. Abra `Nodes Joining Me`.
4. Haga clic en `Reset Invitation Link`.
5. Copie el enlace de invitación y envíelo al otro propietario.

Si el enlace de invitación está vacío, normalmente el dominio público aún no se ha confirmado. Vuelva a `Local Node` y haga clic en `Update Outbound Index`.

### Gestionar solicitudes de unión

Cuando alguien envía una solicitud, aparece en la lista `Nodes Joining Me`.

| Acción | Significado |
| --- | --- |
| Aprobar | Permite que el otro nodo sincronice su lista de archivos compartidos |
| Rechazar | Rechaza la solicitud de unión |
| Eliminar | Elimina un registro finalizado |
| Comprobar estado | Comprueba si la otra parte todavía mantiene esta relación |

Después de la aprobación, la otra parte aún debe hacer clic en `Update Inbound Index` antes de que sus archivos compartidos aparezcan allí.

![Aprobar nodo invitado](../../image/other/联盟图/邀请节点同意.png)

## Mensajes

Después de que una relación sea aprobada, haga clic en `Message` en la tarjeta del nodo.

Los mensajes son solo para comunicarse sobre la relación de federación. No cambian archivos, etiquetas, directorios ni permisos.

![Mensajes](../../image/other/联盟图/留言功能.png)

## Ver archivos federados

Cuando termine la sincronización, vuelva a la lista de archivos del panel de administración.

En la parte superior de la página, cambie entre archivos locales y archivos federados. En archivos federados puede explorar el contenido sincronizado.

Los archivos federados sirven principalmente para ver, buscar, previsualizar y copiar enlaces. No son archivos locales, por lo que no puede moverlos, eliminarlos, reetiquetarlos ni hacer copias de seguridad desde su propio sitio.

![Archivos federados en el panel de administración](../../image/other/联盟图/联盟管理显示效果图.png)

## Preguntas frecuentes

### ¿Por qué me pide volver a solicitar porque no existe un registro de relación?

Normalmente significa que la otra parte lo eliminó y quitó el registro, por lo que la relación ya no puede encontrarse. Envíe una nueva solicitud de unión.

![Volver a solicitar cuando no existe un registro de relación](../../image/other/联盟图/无关系记录重新申请.png)

### ¿Por qué no veo archivos después de unirme?

Compruebe:

1. El otro propietario aprobó su solicitud.
2. El otro propietario hizo clic en `Update Outbound Index`.
3. Usted hizo clic en `Update Inbound Index`.
4. Las carpetas de sincronización del otro propietario incluyen los directorios que quiere compartir.

### ¿Qué debo hacer cuando se detecta un cambio de dominio?

Si está abriendo el panel de administración mediante el dominio de producción, confirme y continúe.

Si está usando una dirección temporal, cancele, vuelva a abrir el panel de administración con el dominio de producción y pruebe de nuevo.

### ¿Qué significa una lista vacía de carpetas de sincronización?

Una lista vacía de carpetas de sincronización significa que se comparten todas las carpetas.

Para compartir solo algunos directorios, seleccione esas carpetas manualmente.

### Diferencia entre actualizaciones de índice saliente y entrante

| Botón | Significado sencillo |
| --- | --- |
| Actualizar índice saliente | Actualiza lo que otros pueden sincronizar desde mí |
| Actualizar índice entrante | Actualiza lo que yo he sincronizado desde otros |
