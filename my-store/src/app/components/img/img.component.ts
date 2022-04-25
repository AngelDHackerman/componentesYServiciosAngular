import { Component, OnInit, Input, Output, EventEmitter, OnChanges, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  @Input() img: string = '';
  @Output() loaded = new EventEmitter<string>();
  imageDefault = '../../../assets/images/defaultImg.png';

  constructor() {
    // * before Render
    // * NO async -- once time run.

    console.log('constructor', 'imgValue => ', this.img)
   }

  ngOnInit(): void {
    // * Before reder
    // * Async yes - fetch -- runs just once.

    console.log('ngOnInit', 'imgValue => ', this.img)
  }

  ngOnChanges() {
    // * Before - during render
    // * changes inputs -- runs many times

    console.log('ngOnchanges', 'imgValue =>', this.img)
  }

  ngAfterViewInit(): void {
    // * After render
    // * Handler children

    console.log('ngAfterViewInit');
  }

  ngOnDestroy(): void {
    // * Deleted something

    console.log('ngOnDestroy');
  }

  imgError () {
    this.img = this.imageDefault;
  }

  imgLoaded () {
    console.log('log hijo');
    this.loaded.emit(this.img);
  }
}
