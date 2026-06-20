# Configuración de canales de subida

En ImgBed, cada destino de almacenamiento se configura como un canal. Puedes decidir dónde guardar imágenes, vídeos, audio u otros archivos desde la configuración de subida.

## Dónde se configura

```text
Configuración del sistema -> Configuración de subida
```

Desde ahí puedes añadir canales, habilitarlos, definir límites de capacidad, añadir notas y comprobar conexiones.

## Canales disponibles

| Canal | Uso principal |
| --- | --- |
| Cloudflare R2 | Almacenamiento de objetos en Cloudflare |
| S3 | AWS S3, Backblaze B2, MinIO y servicios compatibles |
| Google Drive | Guardar en Google Drive |
| OneDrive | Guardar en Microsoft OneDrive |
| Dropbox | Guardar en Dropbox |
| pCloud | Guardar en pCloud |
| WebDAV | NAS, discos en la nube o servicios compatibles WebDAV |
| Telegram | Usar un canal de Telegram como destino |
| Discord | Usar un canal de Discord como destino |
| GitHub Releases | Guardar en Release Assets de GitHub |
| GitLab Packages | Guardar en Generic Package Registry de GitLab |
| Hugging Face | Guardar en un repositorio de Hugging Face |
| Yandex | Guardar en Yandex Disk |

## Antes de añadir un canal

| Punto | Qué revisar |
| --- | --- |
| Cuenta de almacenamiento | La cuenta donde se guardarán realmente los archivos |
| API Key / Token | Credenciales necesarias para cada canal |
| Directorio de almacenamiento | Normalmente `imgbed`, salvo que quieras otra carpeta |
| Límite de capacidad | Si quieres que el canal deje de recibir archivos al llegar a cierto uso |
| Dominio público | Si usarás CDN o dominio personalizado |

## Después de guardar

1. Comprueba que aparece la tarjeta del canal.
2. Verifica que el canal está habilitado.
3. Revisa que las credenciales y el directorio se guardaron correctamente.
4. Ejecuta consulta de capacidad si aplica.
5. Sube una imagen de prueba y abre el enlace devuelto.

Si falla, revisa primero credenciales, permisos, directorio de destino y límites de la API del proveedor.
