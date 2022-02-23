import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent = 'https://source.unsplash.com/random';

  onLoaded (img: string) {
    console.log('log del componente padre', img)
  }
}
