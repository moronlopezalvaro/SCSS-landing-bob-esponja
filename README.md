# Archivo de Fondo de Bikini (versión Sass)

Landing de la actividad anterior rehecha con **Sass**. La web simula el archivo secreto de la policía de Fondo de Bikini: un tablón de corcho con cuatro teorías de fans de Bob Esponja, sus expedientes, un formulario de chivatazos y las fichas de los agentes.

**Web publicada:** https://moronlopezalvaro.github.io/SCSS-landing-bob-esponja/

## Rama

Todo el trabajo con Sass está en la rama **`scss`**, que es la que publica GitHub Pages.

## Qué se ha usado de Sass

- **Variables:** la paleta y las fuentes están en `_variables.scss`. El `:root` las pasa a variables CSS con interpolación (`--madera: #{$madera};`), porque el modo oscuro cambia esas variables CSS en el navegador.
- **Función propia:** `oscurecer($color, $porcentaje)` mezcla un color con negro. Se usa en `dark.scss` para la carpeta y las tarjetas, que mantienen su color de papel pero más oscuro.
- **Funciones nativas:** `color.mix()` dentro de `oscurecer()` y `color.adjust()` para calcular `$sello-rojo-oscuro` a partir de `$sello-rojo`.
- **Mixins:**
  - `papel($fondo)`: fondo y sombra de la carpeta, el folio, las fichas de agente y la nota de misión.
  - `marco-madera($grosor: 14px)`: el borde de madera del tablón y de la agencia.
  - `movil` y `menu-plegado`: media queries con los mismos cortes que Bootstrap (`575.98px` y `991.98px`), usando `@content`.
- **Módulos:** los parciales se cargan con `@use "variables" as *;`.
