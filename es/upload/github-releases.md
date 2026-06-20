# Añadir un canal GitHub Releases

El canal GitHub Releases guarda archivos como Release Assets en un repositorio de GitHub.

## Cuándo conviene

- Ya usas GitHub con frecuencia.
- Quieres guardar archivos pequeños o recursos de distribución en Releases.
- Prefieres un destino gestionado con GitHub Token.

## Qué preparar

| Requisito | Uso |
| --- | --- |
| Cuenta de GitHub | Gestionar repositorio y token |
| Repositorio | Lugar donde estarán los Releases |
| Personal Access Token | Subir assets al Release |
| Release Tag | Release al que se asociarán los archivos |

## Permisos del token

El Personal Access Token debe poder operar sobre Releases del repositorio objetivo.

![Permisos GitHub](../../image/upload/github-releases/添加github权限.png)

Si el repositorio es privado, añade acceso a repositorios privados.

## Rellenar en ImgBed

En Configuración de subida, elige `GitHub Releases`.

| Campo | Valor |
| --- | --- |
| Nombre del canal | Por ejemplo `GitHub Release` |
| Owner | Propietario del repositorio |
| Repo | Nombre del repositorio |
| Token | Personal Access Token |
| Release Tag | Tag del Release |
| Ruta | Opcional |

![Configuración GitHub](../../image/upload/github-releases/填写github渠道配置.png)

## Verificación

1. Guarda el canal.
2. Sube una imagen de prueba.
3. Comprueba que aparece en los Release Assets del repositorio.
4. Abre el enlace devuelto por ImgBed.

## Notas

- GitHub Releases no es un almacenamiento especializado para grandes volúmenes o tráfico alto.
- Limita el token al repositorio necesario.
- Si borras manualmente assets o releases, los enlaces de ImgBed pueden dejar de funcionar.
