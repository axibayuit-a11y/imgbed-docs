# Blog

La función de blog añade una página de blog independiente a su sitio ImgBed.

Después de activarla, los visitantes pueden abrir:

```text
https://your-domain.com/blog/
```

![Página principal del blog](../../image/other/博客/博客首页.png)

El blog está adaptado a partir del proyecto de código abierto [LyraVoid/Mizuki](https://github.com/LyraVoid/Mizuki). ImgBed lo reescribe e integra con Vue para que pueda ejecutarse como parte del sitio de alojamiento de imágenes.

## Dónde configurarlo

Los ajustes del blog se encuentran en:

```text
System Settings -> Other Settings -> Blog
```

![Ajustes del blog](../../image/other/博客/QQ20260611-221702.png)

## Configuración inicial

1. Active `Enable`.
2. Seleccione la cuenta de GitHub que se usará para guardar la configuración del blog.
3. Haga clic en `Update Blog`.
4. Espere el mensaje de éxito.
5. Abra `https://your-domain.com/blog/` para ver el blog.

En el primer uso, ImgBed prepara un repositorio privado de GitHub en la cuenta seleccionada:

```text
imgbed-blog-config
```

Este repositorio guarda los ajustes del blog y el contenido de las entradas.

## Escribir entradas

Edite las entradas del blog en su repositorio privado de GitHub:

```text
imgbed-blog-config
```

Flujo habitual:

1. Abra GitHub.
2. Entre en el repositorio privado `imgbed-blog-config`.
3. Edite o añada archivos de entradas.
4. Confirme los cambios.
5. Vuelva al panel de administración de ImgBed y haga clic en `Update Blog`, o haga clic tres veces en el logotipo de la esquina superior izquierda de la página principal del blog para activar una actualización del blog.

`Update Blog` no sobrescribe el contenido que haya escrito. Inicializa el repositorio cuando es necesario y actualiza la caché del blog.

## Funciones admitidas

El blog admite funciones habituales de blog, como listas de entradas, categorías, etiquetas, archivo, búsqueda, modo oscuro y cambio de idioma.

También admite comentarios y estadísticas de visitas.

![Comentarios del blog](../../image/other/博客/支持留言.png)

Los comentarios aparecen debajo de las entradas. Los visitantes pueden enviar un avatar, un apodo, un correo electrónico y el contenido del comentario.

Las estadísticas de visitas muestran vistas de las entradas y visitas del sitio, lo que ayuda a entender el tráfico del blog.

## URL

El blog siempre está disponible en `/blog/`.

Por ejemplo, si su dominio de ImgBed es:

```text
https://image.example.com
```

la URL del blog será:

```text
https://image.example.com/blog/
```

Después de desactivar el blog, los visitantes ya no podrán acceder a la página del blog.
