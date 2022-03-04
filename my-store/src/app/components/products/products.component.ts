import { Component, OnInit } from '@angular/core';

import { Product } from '../../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product []= [
    {
      id: '1',
      name: 'Objeto 1',
      image: 'https://source.unsplash.com/random',
      price: 100,
    },
    {
      id: '2',
      name: 'Objeto 2',
      image: 'https://source.unsplash.com/random',
      price: 200,
    },
    {
      id: '3',
      name: 'Objeto 3',
      image: 'https://source.unsplash.com/random',
      price: 300,
    },
    {
      id: '4',
      name: 'Objeto 4',
      image: 'https://source.unsplash.com/random',
      price: 400,
    },
    {
      id: '5',
      name: 'Objeto 5',
      image: 'https://source.unsplash.com/random',
      price: 500,
    },
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
