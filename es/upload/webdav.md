# Añadir un canal WebDAV

El canal WebDAV guarda archivos en un NAS, disco en la nube o servicio compatible con WebDAV.

## Cuándo conviene

- Tu NAS o servicio en la nube ofrece una URL WebDAV.
- Quieres guardar imágenes en un directorio WebDAV propio.
- Prefieres guardar credenciales en la tabla D1 `upload_channels` en lugar de exponerlas en el frontend.

## Qué preparar

| Requisito | Uso |
| --- | --- |
| WebDAV Endpoint | Por ejemplo `https://nas.example.com/dav` |
| Usuario | Inicio de sesión WebDAV |
| Contraseña | Contraseña o contraseña de aplicación |
| Modo de autenticación | Normalmente `Basic`; usa `Digest` si el servidor lo requiere |
| Directorio | Opcional, por defecto `imgbed` |

## Usar contraseña de aplicación

Si el servicio permite contraseñas de aplicación, es mejor usar una en lugar de la contraseña principal de la cuenta.

![Crear contraseña de aplicación](../../image/upload/webdav/创建应用密码.png)

Guarda la contraseña al crearla, porque puede mostrarse solo una vez.

![Guardar contraseña](../../image/upload/webdav/记住新应用程序密码.png)

## Rellenar en ImgBed

En Configuración de subida, elige `WebDAV`.

| Campo | Valor |
| --- | --- |
| Nombre del canal | Por ejemplo `NAS` o `Koofr` |
| Endpoint | URL WebDAV completa con `https://` |
| Usuario | Cuenta WebDAV |
| Contraseña | Contraseña o contraseña de aplicación |
| Autenticación | Empieza con `Basic` |
| Directorio | Opcional, normalmente `imgbed` |

![Configuración WebDAV](../../image/upload/webdav/填写配置.png)

## Archivos grandes

El canal WebDAV usa subida por partes para archivos grandes.

| Tamaño | Método | Forma en remoto |
| --- | --- | --- |
| Hasta 64 MiB | Subida normal | Un archivo completo |
| Más de 64 MiB | Subida por partes | Carpeta de partes con varios chunks |

El servidor WebDAV no necesita soportar `partial update` ni escritura por desplazamiento. ImgBed guarda un manifiesto de partes y las lee en orden cuando se solicita el archivo.

La URL del archivo no cambia; el usuario sigue usando el enlace `/file/...`.

## Verificación

| Punto | Estado esperado |
| --- | --- |
| Tarjeta del canal | Aparece después de guardar |
| Archivo pequeño | Aparece en el directorio WebDAV |
| Archivo grande | Crea carpeta de partes y chunks |
| Capacidad | Si el servidor lo soporta, muestra uso y total |

![Consulta de capacidad](../../image/upload/webdav/查询额度成功.png)

Si falla la consulta de capacidad pero suben archivos pequeños, el canal puede seguir siendo válido.

## Flujo rápido

```text
Preparar Endpoint, usuario y contraseña
-> Abrir Configuración de subida
-> Añadir canal
-> Elegir WebDAV
-> Rellenar Endpoint / usuario / contraseña
-> Usar Basic al principio
-> Guardar
-> Consultar capacidad
-> Subir archivo de prueba
```
