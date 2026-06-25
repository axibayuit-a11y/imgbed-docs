# Moderación de imágenes y modo de acceso

La moderación de imágenes asigna clasificaciones por edad a las imágenes subidas. El modo de acceso controla qué clasificaciones son visibles mediante acceso público.

Esto afecta a la galería pública, las URL públicas de archivos y la API de imágenes aleatorias. No restringe el panel de administración. Los administradores pueden seguir viendo y gestionando todos los archivos.

## Dónde configurarlo

Abra el panel de administración y vaya a:

```text
System Settings -> Security Settings -> Upload Management -> Image Moderation
```

Las opciones principales son:

- Modo de acceso
- Activar moderación
- Proveedor de moderación

## Qué hace el modo de acceso

El modo de acceso decide qué clasificaciones por edad pueden mostrarse públicamente.

Modos actuales:

| Modo de acceso | Clasificaciones visibles públicamente |
| --- | --- |
| Modo adulto | General, R12, R16, R18 |
| Modo juvenil | General, R12, R16 |
| Modo adolescente | General, R12 |
| Modo infantil | Solo General |

El valor predeterminado es el modo adulto.

Para sitios privados o sitios con contenido para adultos, el modo adulto puede ser adecuado. Para una galería pública más conservadora, elija el modo juvenil, adolescente o infantil.

## Qué hace activar la moderación

Cuando la moderación está activada, ImgBed llama al proveedor de moderación seleccionado durante la subida y guarda la clasificación por edad detectada.

Clasificaciones principales:

| Clasificación | Significado |
| --- | --- |
| General | Contenido público seguro |
| R12 | Contenido ligeramente sensible |
| R16 | Contenido moderadamente sensible |
| R18 | Contenido para adultos |

El resultado de moderación se usa al decidir el acceso público.

Si la moderación no está activada, o si los archivos antiguos no tienen clasificación, esos archivos se tratan como no clasificados. Los archivos no clasificados no se eliminan automáticamente de la galería pública ni de la API de imágenes aleatorias solo porque no exista una clasificación.

## Elegir un proveedor de moderación

Los proveedores disponibles incluyen:

- moderatecontent.com
- nsfwjs
- Sightengine

Cada proveedor tiene requisitos distintos:

- moderatecontent.com normalmente requiere un API Key.
- nsfwjs normalmente requiere una URL de punto de conexión de API.
- Sightengine requiere un API user y un API secret.

Elija según su cuenta, disponibilidad y calidad de detección. Mientras la moderación esté activada y configurada correctamente, ImgBed intentará escribir una clasificación de imagen durante la subida.

## Efecto en la galería pública

La galería pública filtra archivos según el modo de acceso.

Ejemplos:

- Modo adulto: las imágenes R18 pueden aparecer.
- Modo juvenil: las imágenes R18 se ocultan.
- Modo adolescente: las imágenes R16 y R18 se ocultan.
- Modo infantil: solo se muestran imágenes General.

Esto solo afecta al acceso público normal. El panel de administración sigue mostrando todos los archivos.

## Efecto en las URL públicas de archivos

Las URL públicas de archivos son enlaces directos de imágenes abiertos por visitantes.

Si la clasificación del archivo está permitida por el modo de acceso actual, ImgBed devuelve la imagen de origen.

Si la clasificación está por encima del nivel permitido, el acceso público normal no devuelve la imagen de origen. En su lugar, ImgBed devuelve el resultado bloqueado configurado o una imagen de marcador.

Ejemplo:

- El modo actual es el modo infantil.
- Una imagen está clasificada como R18.
- Un visitante abre directamente la URL pública.
- ImgBed no devuelve la imagen de origen R18 a ese visitante.

![Imagen de archivo restringida](../../image/Safety/文件受限图.png)

Los administradores que ven archivos en el panel de administración no se ven afectados por esta restricción.

## Efecto en la API de imágenes aleatorias

La API de imágenes aleatorias también filtra su conjunto de candidatos según el modo de acceso.

En modo infantil, las imágenes aleatorias se seleccionan solo entre archivos clasificados como General.

En modo juvenil, las imágenes aleatorias pueden venir de archivos General, R12 y R16, pero no de archivos R18.

Esto evita que la API de imágenes aleatorias eluda las restricciones de la galería pública.

## Relación con las reglas de listas

El modo de acceso no es la única regla de acceso público. Funciona junto con las reglas de listas de permitidos y bloqueados.

En términos simples:

- El contenido en la lista de permitidos es público primero.
- El contenido en la lista de bloqueados no puede ser visto directamente por visitantes normales.
- El contenido que no está en ninguna lista se comprueba después según el modo de acceso.

Si una imagen está restringida tanto por clasificación de edad como por reglas de listas, los visitantes normales tampoco pueden ver directamente el archivo de origen.

## Configuración recomendada

Para sitios públicos:

- Active la moderación.
- Elija un modo de acceso que coincida con la audiencia del sitio.
- Use el modo infantil o adolescente para visitantes de todas las edades.
- Evite el modo adulto si no quiere mostrar públicamente contenido para adultos.
- Revise las clasificaciones en el panel de administración y ajústelas manualmente cuando sea necesario.

Para sitios privados o personales:

- El modo adulto suele estar bien.
- Active la moderación si le resulta útil.
- Revise y ajuste las clasificaciones en el panel de administración según sea necesario.

## FAQ

### ¿Desaparecen archivos del panel de administración después de cambiar el modo de acceso?

No.

El modo de acceso solo afecta al acceso público normal. No afecta al panel de administración.

### ¿Por qué la galería pública muestra menos imágenes después de cambiar al modo infantil?

El modo infantil solo permite mostrar públicamente archivos clasificados como General. Los archivos R12, R16 y R18 se filtran.

### ¿Las URL públicas aún pueden abrir imágenes para adultos?

Si el modo de acceso actual no permite esa clasificación, las URL públicas normales no devuelven la imagen de origen.

### ¿La API de imágenes aleatorias puede devolver imágenes restringidas?

No.

La API de imágenes aleatorias filtra candidatos según el modo de acceso actual.

### ¿Qué ocurre con las imágenes antiguas no clasificadas?

Las imágenes no clasificadas no se ocultan automáticamente solo por no tener resultados de moderación. Puede ajustar sus clasificaciones más tarde en el panel de administración.

