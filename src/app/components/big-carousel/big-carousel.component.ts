import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-big-carousel',
  templateUrl: './big-carousel.component.html',
  styleUrls: ['./big-carousel.component.css'],
})
export class BigCarouselComponent {

  constructor(private sanitizer: DomSanitizer) {
    this.backgroundImageStyle = this.sanitizer.bypassSecurityTrustStyle(
      `url('assets/images/components/carousel-images/asocebu2.jpg')`
    );
  }

  logos: any = [];
  backgroundImageStyle: any;

  showNavigationArrows = false;
  showNavigationIndicators = false;

  getSafeImageUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  background: string = '';

  toggleText(logo: any) {
    logo.showText = !logo.showText;
  }

  ngOnInit(): void {
    this.logos = [
      {
        url: this.getSafeImageUrl(
          'assets/images/components/carousel-images/asocebu2.jpg'
        ),
        name: 'Logo 1',
        title: 'Texto del logo 1', showText: false 
      },
      {
        url: this.getSafeImageUrl(
          'assets/images/components/carousel-images/asosimental.jpg'
        ),
        name: 'Logo 2',
        title: 'Texto del logo 2', showText: false 
      },
      {
        url: this.getSafeImageUrl(
          'assets/images/components/carousel-images/asovinos.jpg'
        ),
        name: 'Logo 3',
        title: 'Texto del logo 3', showText: false 
      },
      {
        url: this.getSafeImageUrl(
          'assets/images/components/carousel-images/astegan.png'
        ),
        name: 'Logo 4',
        title: 'Texto del logo 4', showText: false 
      },
      {
        url: this.getSafeImageUrl(
          'assets/images/components/carousel-images/decarne.png'
        ),
        name: 'Logo 5',
        title: 'Texto del logo 5', showText: false 
      },
      {
        url: this.getSafeImageUrl(
          'assets/images/components/carousel-images/fng-blanco.jpg'
        ),
        name: 'Logo 6',
        title: 'Texto del logo 6', showText: false 
      },
      {
        url: this.getSafeImageUrl(
          'assets/images/components/carousel-images/logo_agrousol.gif'
        ),
        name: 'Logo 7',
        title: 'Texto del logo 7', showText: false 
      },
    ];
  }
}
