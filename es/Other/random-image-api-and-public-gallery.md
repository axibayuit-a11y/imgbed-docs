# API de imagen aleatoria y galería pública

Ambas funciones se configuran en:

```text
Configuración del sistema -> Otros ajustes
```

## API de imagen aleatoria

La API de imagen aleatoria toma un archivo al azar desde los directorios indicados. Sirve para fondos de sitio, rotación de avatares o llamadas externas a imágenes aleatorias.

Una vez activada, se puede usar:

```text
https://tu-dominio/random
```

## Ajustes de la API

| Opción | Descripción |
| --- | --- |
| Habilitar | Activa o desactiva `/random`; si está desactivada, se deniega el acceso |
| Directorios | Limita de qué directorios se pueden tomar archivos |
| Ejemplo de llamada | Genera un enlace de API listo para copiar |

Puedes seleccionar varios directorios. Si solo permites `/landscape/` y `/portrait/`, la API solo elegirá archivos dentro de esos directorios o sus subdirectorios.

## Parámetros principales

| Parámetro | Ejemplo | Descripción |
| --- | --- | --- |
| `dir` | `/landscape/` | Directorio objetivo |
| `content` | `image` | Tipo de medio: `image`, `video`, `audio` o combinación con comas |
| `orientation` | `auto` | `portrait`, `landscape` o `auto` |
| `type` | `url` | Vacío redirige; `url` devuelve texto; `json` devuelve JSON |
| `origin` | `1` | Con `type=url`, devuelve enlace completo |
| `age` | `all-ages,r12` | Filtra por clasificación de edad |
| `tag` | `wallpaper,sky` | Solo archivos que contienen esas etiquetas |
| `ex` | `private` | Excluye archivos con esas etiquetas |

## Formatos de respuesta

Sin `type`, la API redirige directamente al archivo aleatorio.

`type=url` devuelve un enlace en texto plano.

`type=json` devuelve información del archivo: enlace, ID, nombre, tipo, etiquetas, clasificación y más.

## Restricciones de acceso

La API respeta las reglas públicas configuradas en el panel.

| Regla | Efecto |
| --- | --- |
| Límite de directorios | Solo elige archivos en directorios permitidos |
| Lista negra | Los archivos bloqueados no entran en el conjunto aleatorio |
| Modo lista blanca | Solo devuelve archivos permitidos explícitamente |
| Clasificación de edad | Filtra R12, R16, R18 según el modo de acceso |

Si no hay archivos que cumplan los filtros, devolverá que no hay resultados.

## Galería pública

La galería pública ofrece una página de solo lectura para que los visitantes vean los directorios que permites publicar.

```text
https://tu-dominio/browse/nombre-del-directorio
```

## Ajustes de galería

| Opción | Descripción |
| --- | --- |
| Habilitar | Activa o desactiva la galería pública |
| Modo de carga de imágenes | Decide si se usan originales o miniaturas |
| Directorios públicos | Define qué directorios pueden ver los visitantes |

Ejemplo:

```text
/1/,/2/,/landscape/,/portrait/
```

Con esa configuración, los visitantes podrán abrir:

```text
https://tu-dominio/browse/1
https://tu-dominio/browse/2
https://tu-dominio/browse/landscape
https://tu-dominio/browse/portrait
```

Los directorios no publicados serán rechazados.

## Qué permite la galería

| Función | Descripción |
| --- | --- |
| Explorar directorios | Ver archivos y subdirectorios publicados |
| Buscar | Buscar por nombre, ID de archivo o etiqueta |
| Filtrar por tipo | Imagen, vídeo, audio u otros archivos |
| Filtrar por etiqueta | Incluir o excluir etiquetas |
| Filtrar por orientación | Horizontal, vertical u otros criterios |
| Copiar enlace | Copiar el enlace público del archivo |
| Previsualizar medios | Ver imágenes, vídeos y audio en la página |
