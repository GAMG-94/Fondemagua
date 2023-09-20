import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})

export class SliderComponent implements OnInit{

  screen: number = 3;
  slides = [
    { image: '../../../assets/img/facebook.png' },
    { image: '../../../assets/img/microsoft.png' },
    { image: '../../../assets/img/samsung.png' },
    { image: '../../../assets/img/tik-tok.png' },
  ];

  slideConfig = {
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: this.mediaScreen(),
    slidesToScroll: 1,
    arrows: false,
  };

  ngOnInit() {
  }

  afterChange(e: any) {
    console.log('afterChange');
  }

  mediaScreen():number {
    if (window.innerWidth < 680) {
      this.screen = 2;
    }else this.screen = 3;
    return this.screen;
  }
}
