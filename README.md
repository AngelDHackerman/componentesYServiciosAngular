# componentesYServiciosAngular
## Intro: 

 - Vamos a usar el CLI de Angular para generar componentes de forma automatica, usando el comando: 
    `ng g c nombreDelComponente`. g stands for "generate" and c for "component".

## Dandole start al proyecto: 

  `ng new nombreDelProyecto` 

- Ejemplo: 

```
ng g c components/img
```

### Ver las configuraciones iniciales en el readMe de fundamentos de Angular 

  Dale click aqui para ir a la pagina de las [configuraciones iniciales](https://github.com/angelDariaux/fundamentosAngular/blob/master/README.md)

# Componentes 
## Comando para generar componentes: 

`ng g c rutaDondeLoQueremosGuardar/nombreDelcomponente` 

### Link para tener imagenes random: 
  https://source.unsplash.com/random


### Agregar el FormsModule 

import { FormsModule } from '@angular/forms'; // ! Super importante agregar ese modulo de formularios para evitar errores en el archivo **app.modules.ts**

## Llamando los componentes generados desde otro componente: 

Desde el componente 'principal' debemos agrega la etiqueta del elemento a agrega. 

- Ejemplo: 

`<app-img></app-img>`