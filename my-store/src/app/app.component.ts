import { Component } from '@angular/core';

import { Product } from './models/product.model'; // ! Asi se importa la interface de models

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent = 'https://source.unsplash.com/random';
  showImg = true;

  onLoaded (img: string) {
    console.log('log del componente padre', img)
  }

  toggleImg () {
    this.showImg = !this.showImg;
  }
}
