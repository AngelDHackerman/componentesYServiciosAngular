import { Component, OnInit } from '@angular/core';

import { Product } from '../../models/product.model';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }

}
