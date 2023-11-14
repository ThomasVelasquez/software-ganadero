import { Component } from '@angular/core';

@Component({
  selector: 'app-test-carousel',
  templateUrl: './test-carousel.component.html',
  styleUrls: ['./test-carousel.component.css'],
})
export class TestCarouselComponent {
  slides = [
    { img: "assets/images/components/test-carousel/01.png" },
    { img: 'assets/images/components/test-carousel/02.png' },
    { img: 'assets/images/components/test-carousel/03.png' },
    { img: 'assets/images/components/test-carousel/paisajeWeb.png' },
  ];
  slideConfig = { slidesToShow: 4, slidesToScroll: 4 };

  addSlide() {
    this.slides.push({ img: 'http://placehold.it/350x150/777777' });
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  slickInit() {
    console.log('slick initialized');
  }

  breakpoint() {
    console.log('breakpoint');
  }

  afterChange() {
    console.log('afterChange');
  }

  beforeChange() {
    console.log('beforeChange');
  }
}
