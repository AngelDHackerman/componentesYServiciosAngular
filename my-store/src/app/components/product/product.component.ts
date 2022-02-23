import { Component, OnInit, Input } from '@angular/core';

import { Product } from '../../models/product.model' // ! Asi es como se importa la interfaz desde la carpeta models

@Component({
  selector: 'app-product',  // ? Este es el selector del componente para poder usarlo en el componente padre
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: Product = { // ! @Input() es importante para que recivamos el render desde el padre
    id: '',
    price: 0,
    image: '',
    name: '',
  }

  constructor() { }

  ngOnInit(): void {
  }

}
