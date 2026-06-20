# Etiquetado automático

El etiquetado automático se configura en:

```text
Configuración del sistema -> Otros ajustes -> Etiquetado automático
```

Esta función genera etiquetas para las imágenes y facilita la búsqueda, los filtros de la API aleatoria, la galería pública y el control de acceso por clasificación de edad.

## Qué puede hacer

| Función | Descripción |
| --- | --- |
| Etiquetas de contenido | Añade etiquetas de personas, escenas, objetos, estilo visual y más |
| Etiquetas de personajes | Útil para imágenes de anime e ilustraciones |
| Etiquetas de orientación | Añade `landscape`, `portrait` o `square` |
| Clasificación de imagen | Guarda resultados `G/S/Q/E` |
| Etiquetar al subir | Procesa automáticamente las imágenes nuevas |
| Etiquetado por lotes | Añade etiquetas a imágenes antiguas en una o varias carpetas |

## Qué preparar primero

Necesitas al menos una URL accesible de Hugging Face Space.

Lo recomendable es duplicar el Space `wd-tagger` de SmilingWolf en tu propia cuenta de Hugging Face:

```text
https://huggingface.co/spaces/SmilingWolf/wd-tagger
```

Puedes usar el Space público para pruebas, pero lo comparten muchos usuarios y puede tener cola, ir lento o quedar no disponible. Para uso continuo conviene tener una copia propia.

## Duplicar el Space

1. Inicia sesión en Hugging Face.
2. Abre `https://huggingface.co/spaces/SmilingWolf/wd-tagger`.

![Space público de SmilingWolf](../../image/other/微笑狼的公开仓库.png)

3. Abre el menú de la esquina superior derecha.
4. Elige `Duplicate this Space`.
5. Mantén el nombre o usa uno reconocible, como `wd-tagger`.
6. Déjalo como `Public`; así ImgBed puede llamarlo con menos fricción.
7. Empieza con el hardware gratuito.
8. Crea el Space y espera a que termine la compilación.

Cuando termine, copia la URL del navegador y pégala en `Space URLs` dentro de ImgBed.

## Ajustes recomendados

| Opción | Recomendación |
| --- | --- |
| `Space URLs` | Una URL por línea |
| Carpeta objetivo | Vacío para todas; selecciona una carpeta si quieres limitarlo |
| Modelo | Mantén `wd-swinv2-tagger-v3` al principio |
| Umbral de etiquetas generales | Empieza cerca de `0.35` |
| Umbral de personajes | Empieza cerca de `0.85` para evitar falsos positivos |
| `MCut` | Déjalo apagado al principio |
| Etiquetar al subir | Actívalo si quieres procesar nuevas imágenes automáticamente |

Si salen demasiadas etiquetas, sube un poco el umbral general. Si salen muy pocas, bájalo ligeramente.

## Etiquetado por lotes

1. Rellena `Space URLs`.
2. Selecciona una carpeta objetivo.
3. Inicia el etiquetado.
4. Espera a que termine el progreso.

Si la carpeta objetivo queda vacía, ImgBed procesa todas las carpetas.

## Etiquetar al subir

Cuando esta opción está activa, las imágenes nuevas llaman automáticamente a los `Space URLs` configurados.

Si el Space tiene cola, la subida puede terminar primero y el etiquetado continuar después en segundo plano.

## Preguntas habituales

### ¿Por qué duplicar mi propio Space?

Los Spaces públicos se comparten entre muchos usuarios. Una copia propia suele ser más rápida y estable para tu sitio.

### ¿Por qué las etiquetas están en inglés?

Es normal. Los modelos de SmilingWolf devuelven etiquetas en inglés. ImgBed las usa para búsqueda, filtros, API aleatoria y galería pública.

### ¿Para qué sirve la clasificación?

La clasificación trabaja con el modo de acceso de seguridad. Por ejemplo, si limitas lo que pueden ver los visitantes por edad, la galería y la API aleatoria filtrarán según esas reglas.

## Flujo rápido

```text
Iniciar sesión en Hugging Face
-> Abrir SmilingWolf/wd-tagger
-> Duplicar el Space
-> Esperar la compilación
-> Copiar la URL del Space
-> Pegarla en Space URLs
-> Ajustar modelo y umbrales
-> Iniciar etiquetado o activar etiquetado al subir
```
