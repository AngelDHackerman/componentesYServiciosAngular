import { Component, OnInit } from '@angular/core';

import { Product } from '../../models/product.model';
import { ProductsService } from 'src/app/service/products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
