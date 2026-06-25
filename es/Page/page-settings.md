# Configuración de página

La configuración de página controla la visualización del sitio, los valores predeterminados de la página de subida, las imágenes de fondo y el aspecto del panel de administración.

## Configuración global

| Opción | Finalidad |
| --- | --- |
| Título del sitio | Título que se muestra en la pestaña del navegador. |
| Icono del sitio | Icono pequeño que se muestra en la pestaña del navegador. |
| Nombre de ImgBed | Nombre que se muestra en las páginas de la interfaz pública. |
| Logotipo de ImgBed | Imagen del logotipo que se muestra en las páginas de la interfaz pública. |
| Enlace del logotipo | URL que se abre al hacer clic en el logotipo o en el avatar. |
| Intervalo de cambio del fondo | Intervalo de rotación para varios fondos, en milisegundos. `60000` significa 60 segundos. |
| Opacidad del fondo | Opacidad de la imagen de fondo de `0` a `1`. Los valores más bajos se ven más claros. |
| Prefijo de URL predeterminado | Prefijo usado al generar enlaces de imágenes. Si está vacío, se usa el dominio actual del sitio. |

## Configuración del cliente

| Opción | Finalidad |
| --- | --- |
| Anuncio | Anuncio que se muestra en la parte superior de la página de subida. Se admite HTML. |
| Canal de subida predeterminado | Canal de subida seleccionado de forma predeterminada en la página de subida. También puedes elegir Smart Dispatch. |
| Directorio de subida predeterminado | Directorio de subida predeterminado, como `/user/`. Vacío o `/` significa la raíz. |
| Método de nomenclatura predeterminado | Estrategia predeterminada para generar el nombre del archivo después de la subida. Consulta la sección siguiente. |
| Convertir a WebP de forma predeterminada | Convierte las imágenes a WebP antes de subirlas. |
| Activar compresión de forma predeterminada | Comprime las imágenes localmente en el navegador antes de subirlas. |
| Umbral de compresión predeterminado | Comprime automáticamente cuando una imagen supera este tamaño, en MB. |
| Tamaño objetivo predeterminado | Tamaño objetivo del archivo después de la compresión, en MB. |
| Fondo de la página de inicio de sesión | Imagen de fondo para la página de inicio de sesión del usuario. |
| Fondo de la página de subida | Imagen de fondo para la página de subida. |
| Enlace del portal del pie de página | URL que abre el botón del portal del pie de página. |
| Ocultar pie de página | Oculta el pie de página de la interfaz pública cuando está activado. |

## Configuración de administración

| Opción | Finalidad |
| --- | --- |
| Fondo del inicio de sesión de administración | Imagen de fondo para la página de inicio de sesión de administración. |
| Fondo de administración | Imagen de fondo para las páginas de administración. Usa una URL de imagen o varias URL. |
| Modo de carga de imágenes | Modo de carga de previsualizaciones en la lista de archivos de administración. El modo original carga las imágenes originales. Carga inteligente prefiere miniaturas para imágenes públicas y originales para imágenes restringidas. |
| Origen de miniaturas | Servicio usado para generar miniaturas: wsrv.nl, Cloudflare Image Resizing o WordPress Photon. Cloudflare Image Resizing debe estar activado en Cloudflare antes de seleccionarlo. |
| Widget Live2D | Muestra un personaje Live2D en el panel de administración. |
| Efecto de fuegos artificiales al hacer clic | Muestra un efecto de fuegos artificiales al hacer clic en la página. |
| Rastro de estrellas del cursor | Muestra un rastro de estrellas al mover el ratón. |

## Formatos de imagen de fondo

El fondo de la página de inicio de sesión, el fondo de la página de subida y el fondo del inicio de sesión de administración admiten estos formatos:

| Valor | Efecto |
| --- | --- |
| `bing` | Usa la rotación de fondos de Bing. |
| `["https://example.com/1.jpg","https://example.com/2.jpg"]` | Rota varias imágenes. |
| `["https://example.com/1.jpg"]` | Usa una sola imagen de fondo. |
| `["https://your-domain.com/random?..."]` | Usa un enlace de API de imagen aleatoria. Puedes configurar tu propia API de imagen aleatoria en Otros ajustes y pegar aquí el enlace de imagen aleatoria generado como entrada de fondo único. |

El fondo de administración admite URL de imágenes. Se pueden separar varias URL con comas inglesas, tal como indica la página. Si está vacío, se usa el fondo predeterminado.

## Método de nomenclatura predeterminado

| Método | Resultado |
| --- | --- |
| Predeterminado | Prefijo aleatorio basado en tiempo + nombre de archivo original, como `1760000000000_cat.png`. |
| Solo prefijo | Solo prefijo aleatorio basado en tiempo y extensión, como `1760000000000.png`. |
| Solo nombre original | Conserva el nombre de archivo original, como `cat.png`. Si hay duplicados, ImgBed añade `(1)`, `(2)` y así sucesivamente. |
| Enlace corto | Usa un ID corto de 8 caracteres con la extensión, como `a1b2c3d4.png`. |
