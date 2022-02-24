import { Component, OnInit, Input, Output, EventEmitter, OnChanges, AfterViewInit, OnDestroy } from '@angular/core'; // ! Input para recibir del modulo padre, Output para enviar al modulo padre, EventEmitter para detectar eventos

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  @Input() img: string = ''; // ? @Input() Asi podemos recibir info desde el componente padre
  @Output() loaded = new EventEmitter <string> ();
  imageDefault = '../../../assets/notWorking.png';

  constructor() {
    // ? Corre antes del render
    // ? NO correcr cosas async -- one time
    console.log('constructor', 'imgValue =>', this.img)
   }

   ngOnChanges() {
    // ? Corre antes y durante el render
    // ? Mantiene actualizados los cambios en los inputs -- several times.
    console.log('ngOnchanges', 'imgValue => ', this.img)
   }

  ngOnInit (): void {
    // ? Corre antes del render
    // ? Podemos correcr cosas async - como los fetch -- one time
    console.log('ngOnInit', 'imgValue => ', this.img)
  }

  ngAfterViewInit() {
    // ? Corre despues del render
    // ? Maneja los hijos
    console.log('ngAfterViewInit')
  }

  ngOnDestroy() {
    //  ? corre cuando se elimina un componente
    console.log('ngOnDestroy');
  }

  imgError () {
    this.img = this.imageDefault;
  }

  imgLoaded () {
    console.log('log loaded del componente hijo');
    this.loaded.emit(this.img); // ? Con esto decimos que este evento vamos a emitirlo y sera enviado al elemento padre
  }

}
