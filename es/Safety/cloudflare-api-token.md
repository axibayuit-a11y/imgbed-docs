# Cloudflare API Token

Las credenciales de Cloudflare API permiten que ImgBed purgue la caché de Cloudflare CDN después de cambios en los archivos.

![Configuración de Cloudflare API Token](../../image/Safety/cloudflare%20api%20token截图.png)

## Dónde configurarlo

Abra el panel de administración y vaya a:

```text
System Settings -> Security Settings -> Cloudflare API Token
```

Debe completar:

- Zone ID
- Correo electrónico de la cuenta
- API Key

## Qué hace esta configuración

Cloudflare puede almacenar en caché las URL de imágenes públicas.

La caché hace que la entrega de imágenes sea más rápida, pero también puede dejar contenido obsoleto visible durante un tiempo después de eliminar, bloquear, reemplazar o mover un archivo.

Después de configurar las credenciales de Cloudflare API, ImgBed intenta purgar la caché relacionada de Cloudflare cuando esas operaciones terminan.

Es útil cuando:

- Elimina una imagen y quiere que el enlace público deje de funcionar lo antes posible.
- Bloquea una imagen y quiere que los visitantes dejen de ver el archivo de origen.
- Reemplaza un archivo con el mismo nombre y quiere que los visitantes vean antes la nueva versión.
- Mueve o renombra archivos y quiere que la caché de rutas antiguas se actualice rápidamente.
- Cambia reglas de acceso público y quiere que la caché de la galería pública o de imágenes aleatorias se actualice antes.

## Qué ocurre si lo deja vacío

ImgBed sigue funcionando normalmente sin esta configuración.

La única diferencia es que ImgBed no purgará activamente la caché de Cloudflare CDN. Los visitantes pueden seguir viendo contenido antiguo hasta que la caché de Cloudflare expire de forma natural.

## Cómo encontrar el Zone ID

El Zone ID es el identificador de zona de Cloudflare del sitio usado por su dominio de ImgBed.

1. Inicie sesión en el panel de Cloudflare.
2. Abra el sitio que contiene su dominio de ImgBed.
3. Busque `Zone ID` en la página de resumen del sitio.
4. Cópielo en el campo `Zone ID` de ImgBed.

Este es el Zone ID del sitio, no el ID de la cuenta.

## Correo electrónico de la cuenta

Introduzca el correo electrónico que usa para iniciar sesión en Cloudflare.

Debe corresponder al API Key que introduzca abajo.

## API Key

Introduzca su Cloudflare Global API Key.

1. Inicie sesión en el panel de Cloudflare.
2. Abra su perfil.
3. Vaya a la página API Tokens.
4. Busque `Global API Key`.
5. Véalo y cópielo.
6. Péguelo en el campo `API Key` de ImgBed.

![Ver Global API Key](../../image/Safety/查看全局令牌.png)

## Cuándo entra en vigor

Después de completar los campos, guarde la configuración.

Los cambios futuros de archivos intentarán purgar automáticamente la caché de Cloudflare. Las operaciones pasadas no se purgan retroactivamente. Si eliminó o reemplazó un archivo antes de configurar esto, espere a que la caché de Cloudflare expire o púrguela manualmente en Cloudflare.

## FAQ

### ¿Es obligatorio?

No.

Si su dominio no usa Cloudflare, o no le preocupa el retraso de la caché CDN, puede dejarlo vacío.

### ¿Unas credenciales incorrectas rompen las subidas?

Normalmente no.

Unas credenciales incorrectas solo impiden que ImgBed purgue la caché de Cloudflare. La subida y el acceso normal a archivos deberían seguir funcionando.

### ¿Por qué una imagen eliminada todavía se puede abrir?

La razón más común es que Cloudflare aún tiene el archivo antiguo en caché.

Con credenciales correctas de Cloudflare API, ImgBed purga la caché de la URL relacionada cuando se elimina un archivo.

### ¿Por qué sigo viendo la imagen antigua después de reemplazar un archivo?

Esto también suele deberse a la caché CDN.

Después de configurar esta opción, ImgBed intenta purgar la caché de la URL antigua cuando se sobrescribe un archivo con el mismo nombre.

