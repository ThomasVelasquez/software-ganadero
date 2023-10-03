import {
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {
  NgbCarouselConfig,
} from '@ng-bootstrap/ng-bootstrap';

import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit{
  constructor(private sanitizer: DomSanitizer, config: NgbCarouselConfig) {}

  @ViewChild(NgbCarousel) carousel!: NgbCarousel;

  showNavigationArrows = false;
  showNavigationIndicators = false;

  getSafeImageUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  logos: any = [];
  currentIndex = 0;

  ngOnInit(): void {
    this.logos = [
      {
        url: this.getSafeImageUrl(
          'assets/images/components/carousel-images/asocebu2.jpg'
        ),
        name: 'Logo 1',
      },
      {
        url: this.getSafeImageUrl(
          'assets/images/components/carousel-images/asosimental.jpg'
        ),
        name: 'Logo 2',
      },
      {
        url: this.getSafeImageUrl(
          'assets/images/components/carousel-images/asovinos.jpg'
        ),
        name: 'Logo 3',
      },
      {
        url: this.getSafeImageUrl(
          'assets/images/components/carousel-images/astegan.png'
        ),
        name: 'Logo 4',
      },
      {
        url: this.getSafeImageUrl(
          'assets/images/components/carousel-images/decarne.png'
        ),
        name: 'Logo 5',
      },
      {
        url: this.getSafeImageUrl(
          'assets/images/components/carousel-images/fng-blanco.jpg'
        ),
        name: 'Logo 6',
      },
      {
        url: this.getSafeImageUrl(
          'assets/images/components/carousel-images/logo_agrousol.gif'
        ),
        name: 'Logo 7',
      },
    ];
  }
}
