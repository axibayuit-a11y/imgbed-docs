# Añadir un canal Google Drive

El canal Google Drive usa una cuenta de Google Drive como destino de almacenamiento.

## Qué preparar

| Requisito | Uso |
| --- | --- |
| Cuenta de Google | Gestionar Drive y OAuth |
| Proyecto de Google Cloud | Crear OAuth Client |
| Client ID / Client Secret | Autorizar a ImgBed |
| Refresh Token | Mantener acceso a largo plazo |
| Dominio ImgBed | Configurar callback OAuth |

## Crear OAuth Client

En Google Cloud Console, crea un OAuth Client de tipo Web application.

![Crear OAuth Client](../../image/upload/google-drive/oa客户端id创建.png)

Añade esta URI como redirección autorizada:

```text
https://tu-dominio/api/oauth/google/callback
```

![Configurar URL OAuth](../../image/upload/google-drive/填写oa客户端url信息.png)

## Rellenar en ImgBed

En Configuración de subida, elige `Google Drive` e introduce Client ID y Client Secret.

![Configuración Google Drive](../../image/upload/google-drive/粘贴回添加新渠道配置.png)

| Campo | Valor |
| --- | --- |
| Nombre del canal | Por ejemplo `Google Drive Main` |
| Client ID | OAuth Client ID |
| Client Secret | OAuth Client Secret |
| Refresh Token | Se obtiene después |
| Directorio raíz | Opcional, normalmente `imgbed` |

## Obtener Refresh Token

1. En ImgBed, haz clic en `Obtener Token`.
2. Inicia sesión con la cuenta de Google que será el destino.
3. Acepta los permisos.
4. Copia el Refresh Token mostrado en la página de callback.
5. Pégalo en el campo `Refresh Token`.

![Copiar Refresh Token](../../image/upload/google-drive/授权完复制token.png)

## Verificación

1. Guarda el canal.
2. Sube una imagen de prueba.
3. Comprueba que aparece en Google Drive.
4. Abre el enlace devuelto por ImgBed.

## Notas

- Si la pantalla de consentimiento OAuth no está lista, la autorización puede fallar.
- La cuenta que genera el Refresh Token será la cuenta de almacenamiento.
- Si Drive no tiene espacio, la subida fallará.
- No publiques el Client Secret.
