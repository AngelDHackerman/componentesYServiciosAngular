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

`import { FormsModule } from '@angular/forms';` 
<!-- ! Super importante agregar ese modulo de formularios para evitar errores en el archivo **app.modules.ts** -->


Tambien agregalo en el decorador de @ngModel, siempre en el mismo documento

```
@NgModule({
  declarations: [
    AppComponent,
    ImgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule <!-- ! Aqui hay que declaralo -->
  ],
```

## Llamando los componentes generados desde otro componente: 

Desde el componente 'principal' debemos agrega la etiqueta del elemento a agrega. 

- Ejemplo: 

`<app-img></app-img>`

## Input, pasarle informacion del componente Padre al Hijo.

### Pasando informacion desde el app-root al app-img

Desde el .ts del componente hijo se agrega:

```
import { Component, OnInit, Input } from '@angular/core'; <!-- * Agregamos el Input -->

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {

  @Input() img: string = 'valor init';    <!-- * Agregamos el decorador aqui, @Input() -->

```

Desde el componente padre .html :

```
<app-img img="Este valor viene desde el componente padre"></app-img> <!-- * alli le cambiamos el valor a img -->
```

## Output: pasando informacion del componente Hijo al Padre.

`@Output`

## Ciclo de vida de Angular: 

**Constructor**: cuando se corre una instancia


**ngOnChanges**: corre antes y durante en el render, siemrpe que detecte cambios en el Input, está para eso, para detectar los cambios.


**ngOnInit**: corre antes pero tiene la condicione que solo correo una vez. Ahi se corren eventos asincronos.

**ngAfcterViewInit**: corre cuando los hijos de ese componentes se han renderizado.
NgOnDestroy: Corre cuando se elimina el componente.