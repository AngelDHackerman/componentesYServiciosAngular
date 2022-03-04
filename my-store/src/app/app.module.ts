import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // ! Super importante agregar ese modulo de formularios para evitar errores

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImgComponent } from './components/img/img.component'; // ? Nuevo archivo creado cuando creamos el componente con ng g c components/img
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component'; // ? Nuevo archivo creado cuando creamos el componente con ng g c components/product

@NgModule({
  declarations: [
    AppComponent,
    ImgComponent,
    ProductComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // ! Super importante agregar ese modulo de formularios para evitar errores
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
