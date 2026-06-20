# Moderación de imágenes y modo de acceso

La moderación de imágenes y el modo de acceso controlan qué archivos pueden ver los visitantes según reglas públicas, listas y clasificación de edad.

Se usan junto con la galería pública, la API de imagen aleatoria y el acceso externo a archivos.

## Qué permite hacer

| Función | Descripción |
| --- | --- |
| Moderación de imágenes | Registrar información de contenido o clasificación |
| Lista negra | Excluir archivos que no deben ser públicos |
| Modo lista blanca | Publicar solo archivos permitidos explícitamente |
| Control por edad | Ajustar visibilidad de R12, R16, R18 y similares |
| Modo de acceso | Cambiar de forma global el alcance visible para visitantes |

## Modo de acceso

El modo de acceso limita lo que pueden devolver páginas públicas y API aleatoria.

Si quieres un sitio apto para todo público, configura el modo para devolver solo archivos generales. Para uso interno o acceso restringido, puedes ajustar reglas más flexibles.

## Archivo restringido

Cuando un archivo queda restringido, el visitante ve un aviso en lugar del contenido original.

![Archivo restringido](../../image/Safety/文件受限图.png)

## Formas de operar

| Enfoque | Cuándo conviene |
| --- | --- |
| Lista negra | Publicas por defecto y excluyes archivos problemáticos |
| Lista blanca | Solo publicas lo revisado y permitido |
| Clasificación por edad | Cambias la visibilidad según nivel de contenido |

Para sitios públicos, lista blanca o clasificación por edad ayudan a evitar publicaciones no deseadas.

## Qué comprobar

1. Revisa si el archivo aparece en la galería pública.
2. Comprueba que la API aleatoria no devuelva archivos restringidos.
3. Tras cambiar listas, ten en cuenta caché o resultados ya generados.
4. Si usas clasificación automática, revisa manualmente archivos sensibles porque puede haber errores de modelo.
