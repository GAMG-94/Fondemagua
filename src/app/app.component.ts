import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Fondo Empleados';

  slides = [
    { image: '../assets/img/whatsapp.png' },
    { image: '../assets/img/microsoft.png' },
    { image: '../assets/img/samsung.png' },
  ];

  slideIndex:number = 0;

  slideConfig = {
    autoplay: true,
    Infinity: true,
    autoplaySpeed: 2000,
    dots: true,
    draggable:true, 
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  afterChange(e: any) {
    console.log('afterChange');
  }
}
