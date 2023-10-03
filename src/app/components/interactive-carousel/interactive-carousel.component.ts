import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { NgbSlideEvent } from '@ng-bootstrap/ng-bootstrap';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-interactive-carousel',
  templateUrl: './interactive-carousel.component.html',
  styleUrls: ['./interactive-carousel.component.css'],
})
export class InteractiveCarouselComponent {
  constructor(private sanitizer: DomSanitizer, config: NgbCarouselConfig) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }

  @ViewChild(NgbCarousel) carousel!: NgbCarousel;

  showNavigationArrows = false;
  showNavigationIndicators = true;

  getSafeImageUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  titles: any = [];

  // activeSlideIndex: number | null = null;

  activeAriaLabel: string = 'Slide 1';

  carouselItems = [
    {
      id: 1,
      url: this.getSafeImageUrl(
        'assets/images/components/interactive-carousel/sld02.jpg'
      ),
      name: 'Logo 1',
      title: 'Doble proposito',
      position: 'ngb-slide-0',
    },
    {
      id: 2,
      url: this.getSafeImageUrl(
        'assets/images/components/interactive-carousel/sld03.jpg'
      ),
      name: 'Logo 2',
      title: 'Engorde',
      position: 'ngb-slide-1',
    },
    {
      id: 3,
      url: this.getSafeImageUrl(
        'assets/images/components/interactive-carousel/sld05.jpg'
      ),
      name: 'Logo 3',
      title: 'Lecheria Especializada',
      position: 'ngb-slide-2',
    },
    {
      id: 4,
      url: this.getSafeImageUrl(
        'assets/images/components/interactive-carousel/sld8.jpg'
      ),
      name: 'Logo 4',
      title: 'Compra venta de ganado',
      position: 'ngb-slide-3',
    },
    {
      id: 5,
      url: this.getSafeImageUrl(
        'assets/images/components/interactive-carousel/sld010.png'
      ),
      name: 'Logo 5',
      title: 'y muchos mas',
      position: 'ngb-slide-4',
    },
  ];

  // onSlideChange(event: any) {
  //   this.activeSlideIndex = event.current;
  // }

  onSlideChange(event: any) {
    this.activeAriaLabel = JSON.stringify(event.current);

    this.carouselItems.forEach((item, index) => {
      item.position = `"${event.current}"`;
    });

    console.log(this.activeAriaLabel, 'position Original');
    console.log(this.carouselItems.map((item) => (console.log(item.position,'position actual')
    )));
    
  }
}
