# Etiquetado automático

El etiquetado automático se configura en:

```text
System Settings -> Other Settings -> Auto Tagging
```

Genera etiquetas de imagen automáticamente. Estas etiquetas son útiles para la búsqueda, el filtrado de imágenes aleatorias, el filtrado de la galería pública y el control de acceso por clasificación de edad.

## Qué puede hacer el etiquetado automático

| Función | Descripción |
| --- | --- |
| Generar etiquetas de contenido | Añade etiquetas para personas, escenas, objetos, estilo artístico y contenido visual similar. |
| Generar etiquetas de personajes | Útil para imágenes de anime e ilustraciones. |
| Añadir etiquetas de orientación | Añade `landscape`, `portrait` o `square`. |
| Añadir clasificación de imagen | Guarda resultados de clasificación `G/S/Q/E` para contenido general, sensible, cuestionable o explícito. |
| Etiquetar automáticamente al subir | Las imágenes recién subidas entran automáticamente en el flujo de etiquetado. |
| Etiquetado por lotes | Añade etiquetas a imágenes antiguas en todas las carpetas o en carpetas seleccionadas. |

## Qué debe preparar primero

Prepare al menos una URL accesible de un Hugging Face Space.

El método recomendado es duplicar el Space `wd-tagger` de SmilingWolf en su propia cuenta de Hugging Face:

```text
https://huggingface.co/spaces/SmilingWolf/wd-tagger
```

Puede usar temporalmente el Space público, pero los Spaces públicos son compartidos por muchos usuarios y pueden generar colas, volverse lentos o dejar de estar disponibles. Un Space duplicado en su propia cuenta es más estable para el etiquetado automático a largo plazo.

## Duplicar el Space de SmilingWolf

1. Inicie sesión en Hugging Face.
2. Abra `https://huggingface.co/spaces/SmilingWolf/wd-tagger`.

![Space público de SmilingWolf](../../image/other/微笑狼的公开仓库.png)

3. Haga clic en el menú de tres puntos de la esquina superior derecha.
4. Elija `Duplicate this Space`.
5. Mantenga el nombre predeterminado del Space o elija uno propio, como `wd-tagger`.
6. Configure la visibilidad como `Public`. Los Spaces públicos son más fáciles de llamar desde ImgBed.
7. Al principio, mantenga el hardware gratuito predeterminado. Actualícelo más adelante solo si las colas se vuelven evidentes.
8. Cree el Space y espere a que termine la compilación.

Cuando la compilación termine, abra la página de su Space. La URL suele tener este aspecto:

```text
https://huggingface.co/spaces/your-name/wd-tagger
```

Copie la URL del navegador y péguela en `Space URLs` dentro de ImgBed.

## Rellenar varias Space URLs

Introduzca una URL de Space por línea.

Ejemplos:

| Valor | Descripción |
| --- | --- |
| `https://huggingface.co/spaces/SmilingWolf/wd-tagger` | Space público de SmilingWolf. Adecuado para pruebas temporales. |
| `https://huggingface.co/spaces/lintonxue00/wd-tagger` | URL copiada de una página de Space. |
| `https://huggingface.co/spaces/your-name/wd-tagger` | Página del Space que duplicó en su propia cuenta. |

Puede introducir varias URL. ImgBed usa varios Spaces en conjunto, lo que puede mejorar la velocidad.

Si un Space no está disponible temporalmente, los demás pueden seguir procesando.

## Ajustes

| Opción | Recomendación |
| --- | --- |
| `Space URLs` | Introduzca las URL de Space que preparó. Use al menos una. |
| Carpeta de destino | Déjela vacía para todas las carpetas. Seleccione una carpeta solo si desea procesar un directorio específico. |
| Modelo de reconocimiento | Mantenga `wd-swinv2-tagger-v3` de forma predeterminada. |
| Umbral de etiquetas generales | El valor predeterminado funciona para la mayoría de las imágenes. Los valores más bajos generan más etiquetas; los más altos generan menos. |
| Umbral de etiquetas de personajes | El valor predeterminado es conservador y ayuda a evitar etiquetas de personajes incorrectas. |
| Umbral automático `MCut` | Déjelo desactivado al principio. Actívelo cuando quiera que el modelo decida automáticamente la cantidad de etiquetas. |
| Etiquetar automáticamente al subir | Actívelo si las imágenes recién subidas deben recibir etiquetas automáticamente. |
| Iniciar etiquetado | Ejecuta manualmente el etiquetado por lotes de imágenes antiguas. |

## Valores iniciales recomendados

| Opción | Valor recomendado |
| --- | --- |
| Modelo de reconocimiento | `wd-swinv2-tagger-v3` |
| Umbral de etiquetas generales | `0.35` |
| Umbral de etiquetas de personajes | `0.85` |
| `MCut` | Desactivado al principio |
| Etiquetar automáticamente al subir | Activar si es necesario |

Si hay demasiadas etiquetas, aumente ligeramente el umbral general.

Si hay muy pocas etiquetas, reduzca ligeramente el umbral general.

## Etiquetado por lotes

1. Rellene `Space URLs`.
2. Seleccione una carpeta de destino.
3. Haga clic en iniciar etiquetado.
4. Espere a que termine el progreso.

Si la carpeta de destino está vacía, ImgBed procesa todas las carpetas.

El etiquetado por lotes es más adecuado para imágenes antiguas. Para imágenes nuevas, active el etiquetado automático al subir, de modo que no tenga que ejecutarlo manualmente cada vez.

## Etiquetado automático al subir

Después de activar el etiquetado automático al subir, las imágenes recién subidas llaman automáticamente a las `Space URLs` configuradas.

Esto es adecuado para uso a largo plazo.

Si su Space está en cola, la subida puede completarse primero y el etiquetado continuará después.

## Qué imágenes se procesan

El etiquetado automático procesa principalmente archivos de imagen.

Las imágenes que ya tienen etiquetas, orientación, clasificación, anchura y altura completas se omiten para evitar llamadas innecesarias al Space.

ImgBed rellena solo la información que falta siempre que es posible. Por ejemplo, si solo falta la orientación, intenta añadir la orientación sin llamar al flujo completo de etiquetas de contenido.

## Preguntas frecuentes

### ¿Por qué duplicar mi propio Space?

Los Spaces públicos se comparten entre muchos usuarios. Su propio Space duplicado lo usa principalmente su sitio ImgBed, por lo que suele ser más rápido y fiable.

### El Space sigue iniciándose

Después de crearlo por primera vez, o tras un período prolongado de inactividad, un Space puede necesitar tiempo para iniciarse.

Abra primero la página de su Space. Cuando pueda reconocer una imagen con normalidad, vuelva a ImgBed e inicie el etiquetado.

### ¿Cómo copio la URL del Space?

Abra su página de Hugging Face Space y copie la dirección del navegador.

Ejemplos:

```text
https://huggingface.co/spaces/lintonxue00/wd-tagger
https://huggingface.co/spaces/SmilingWolf/wd-tagger
```

### ¿Puedo añadir varios Spaces?

Sí. Introduzca una URL de Space por línea.

Varios Spaces procesan las imágenes en conjunto y son útiles cuando tiene muchas imágenes.

### ¿Por qué las etiquetas están en inglés?

Los modelos de SmilingWolf generan etiquetas en inglés. Es lo esperado.

Las etiquetas se usan principalmente para búsqueda, filtrado, la API de imágenes aleatorias y los filtros de la galería pública.

### ¿Para qué sirven las etiquetas de clasificación?

Los resultados de clasificación funcionan con el modo de acceso de la configuración de seguridad.

Por ejemplo, cuando el acceso de visitantes se limita por clasificación de edad, la navegación pública y las funciones de imágenes aleatorias filtran las imágenes según esas reglas.

## Flujo rápido

```text
Sign in to Hugging Face
-> Open SmilingWolf/wd-tagger
-> Duplicate this Space
-> Wait for the Space to build
-> Copy your Space URL
-> Fill Space URLs in ImgBed
-> Choose model and thresholds
-> Start tagging or enable auto-tag on upload
```
