# Añadir un canal Hugging Face

El canal Hugging Face guarda archivos en un repositorio de Hugging Face.

## Qué preparar

| Requisito | Uso |
| --- | --- |
| Cuenta de Hugging Face | Gestionar repositorio y token |
| Repository | Lugar donde se guardan los archivos |
| Access Token | Permitir escritura desde ImgBed |
| Directorio | Opcional |

## Crear Token

En los ajustes de Hugging Face, crea un Access Token con permiso para escribir en el repositorio.

![Crear Token](../../image/upload/huggingface/创建令牌.png)

Copia el token y guárdalo de forma segura.

## Rellenar en ImgBed

En Configuración de subida, elige `Hugging Face`.

| Campo | Valor |
| --- | --- |
| Nombre del canal | Por ejemplo `HF Storage` |
| Repository | `usuario/repositorio` |
| Token | Hugging Face Access Token |
| Directorio | Opcional, normalmente `imgbed` |
| Nota | Opcional |

![Añadir canal](../../image/upload/huggingface/添加渠道.png)

## Verificación

1. Guarda el canal.
2. Sube una imagen de prueba.
3. Comprueba que el archivo aparece en el repositorio.
4. Abre el enlace desde ImgBed.

## Precauciones

- Revisa si el repositorio es público o privado. En un repositorio público, los archivos pueden quedar visibles.
- Da al token solo los permisos necesarios.
- Para muchos archivos o tráfico elevado, ten en cuenta las limitaciones de Hugging Face.
