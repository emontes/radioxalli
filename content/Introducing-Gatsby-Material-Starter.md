---
title: Presentamos Radio Xalli en Línea
date: 2021-03-19T21:49:17.128Z
cover: assets/logo-960x622.jpg
slug: presentamos-radio-xalli
category: radio
tags:
  - radio
  - acerca
  - xalli
---
En el 2017 nos dimos a la tarea de iniciar nuestras transmisiones por internet.

Y ahora estamos super emocionados de presentar nuestra nueva App para `Radio Xalli 97.9 FM` con soporte para escucharla desde tu computadora o celular sin necesidad de Tener una cuenta de Facebook.  

Esta App es del tipo Progressive Web App (PWA), esto quiere decir que funciona en cualquier tipo de celular tanto Android como IOS, sin tener que darle mantenimiento como aplicación independiente.

## Ventajas de las Aplicaciones Progresivas (PWA):

* Son apps seguras.
* Funcionan con (casi) cualquier navegador.
* Son responsive, se adaptan a cualquier tamaño de pantalla.
* Funcionan off-line.
* Están permanentemente actualizadas.
* Se pueden encontrar a través de los motores de búsqueda.
* Se pueden enlazar a través de una URL.
* Se pueden "instalar" anclándolas al escritorio de tu móvil.

   **Instalación en Android (Casi todos ménos Iphone)**

  1. En tu dispositivo **Android**, abre Chrome .
  2. Accede al sitio web que quieras **instalar**.
  3. Toca Añadir a pantalla de inicio.
  4. Sigue las instrucciones que aparecen en pantalla para instalarlo.

  **Instalar una PWA en iOS (Iphone)**

  1. Accede a la **PWA** y pulsa el botón de Compartir.
  2. Pulsa la opción Añadir a la pantalla de inicio.
  3. Añádelo pulsando el botón Añadir.



## Tecnología que se está Empleando:

* [Gatsbyjs ](https://www.gatsbyjs.com/)es una Biblioteca para [React](https://es.reactjs.org/) que permite que el sitio tenga una velocidad de desplegado notable, esto hará que se cargue ultra rápido en el celular y que los motores de búsqueda como Google le den una alta posición.
* [NetlifyCMS](https://www.netlifycms.org/docs/intro/) permite el soporte para crear/editar contenido en la App mediante un panel de control de Administracion.
* [React-MD](https://github.com/mlaursen/react-md) for Material design permite editar textos en Formato Mark Down, que es mucho más sencillo que el HTML.

  * Integrated FontAwesome support
  * Integrated Material Icons support
* SASS/SCSS styling
* Posts in Markdown
* * Code syntax highlighting
  * Permite empotrar videos de YouTube.
  * Permite empotrar Tweets
* Etiquetas

  * Una página separada para cada Etiqueta
* Categorías

  * Una página separada para los posts de cada categoría.
* Soporte para [Disqus](https://disqus.com), un sistema que permite que los visitantes comenten los posts.

  * Notificaciones acerca de nuevos comentarios en disqus
* Diseño Responsivo

  * En los móviles, Disqus se carga solamente después de expandir la sección de comentarios para mejor desempeño.
* Características Sociales

  * Botón de Twitter para enviar tweet
  * Facebook share/share count
  * Reddit share/share count
  * LinkedIn share button
  * Telegram share button
* SEO

  * Generación de Sitemap
  * robots.txt
  * Etiquetas Generales de description
  * Schema.org JSONLD (Google Rich Snippets)
  * OpenGraph Tags (Facebook/Pinterest)
  * Twitter Tags (Twitter Cards)
* Progreso de cargado para redes lentas
* Soporte Offline
* Soporte para Web App Manifest
* Transformación automática de imágenes y optimización de tamaño
* Configuración para Netlify deploy
* Soporte para Google Analytics support

## Acciones pendientes

* Crear Cuenta de Netlify
* Crear Cuenta de Github
* Crear Cuenta de Disqus
* Transferir Dominio www.radioxalli979.com.mx para que ocupe la App 
* **Gestionar Certificado SSL para transmisión segura por HTTP (se recomienda usar let's encrypt)**
* Dado que no se permite mezclar contenidos HTTPS con contenidos HTTP se creo el dominio [radioxalli.live](http://radioxalli.live) para poder hacer la presentación del sitio con la facultad de escuchar la transmisión de la estación.