import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent = '';   // https://http.cat/599.jpg


  onLoaded(img: string) {
    console.log('log padre', img);
  }
}
