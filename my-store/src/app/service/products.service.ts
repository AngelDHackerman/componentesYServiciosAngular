import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';    // ? Hace se hacen requesta a API's

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient
  ) {

  }
  getAllProducts () {
    return this.http.get('https://fakestoreapi.com/products')
  }
}
