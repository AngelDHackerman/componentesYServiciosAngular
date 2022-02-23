import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'; // ! Input para recibir del modulo padre, Output para enviar al modulo padre, EventEmitter para detectar eventos

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {

  @Input() img: string = ''; // ? @Input() Asi podemos recibir info desde el componente padre
  @Output() loaded = new EventEmitter <string> ();
  imageDefault = '../../../assets/notWorking.png';

  constructor() { }

  ngOnInit (): void {
  }

  imgError () {
    this.img = this.imageDefault;
  }

  imgLoaded () {
    console.log('log loaded del componente hijo');
    this.loaded.emit(this.img); // ? Con esto decimos que este evento vamos a emitirlo y sera enviado al elemento padre
  }

}
