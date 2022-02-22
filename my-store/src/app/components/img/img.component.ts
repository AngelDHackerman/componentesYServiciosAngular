import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {

  @Input() img: string = 'Valor inicial' // ? @Input() Asi podemos recibir info desde el componente padre

  constructor() { }

  ngOnInit(): void {
  }

}
