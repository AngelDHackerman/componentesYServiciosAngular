import { Component } from '@angular/core';

import { Product } from './models/product.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent = '';   // https://http.cat/599.jpg

  products: Product[] = [
    {
      id: '1',
      name: 'EL mejor juguete',
      price: 565,
      image: 'http://placekitten.com/200/300'
    },
    {
      id: '2',
      name: 'Bicicleta casi nueva',
      price: 356,
      image: 'http://placekitten.com/200/300'
    },
    {
      id: '3',
      name: 'Colleción de albumnes',
      price: 34,
      image: 'http://placekitten.com/200/300'
    },
    {
      id: '4',
      name: 'Mis libros',
      price: 23,
      image: 'http://placekitten.com/200/300'
    },
  ]

  onLoaded(img: string) {
    console.log('log padre', img);
  }
}
