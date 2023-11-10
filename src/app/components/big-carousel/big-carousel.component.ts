import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-big-carousel',
  templateUrl: './big-carousel.component.html',
  styleUrls: ['./big-carousel.component.css', './big-carousel-animation.component.css'],
})
export class BigCarouselComponent {

  constructor(private sanitizer: DomSanitizer) {
    this.backgroundImageStyle = this.sanitizer.bypassSecurityTrustStyle(
      `url('assets/images/components/carousel-images/asocebu2.jpg')`
    );
  }

  logos: any = [];
  backgroundImageStyle: any;
  selectedLogo: any;
  animation: boolean = true

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
        title: 'Texto del logo 1', showText: false, selected: false 
      },
      {
        url: this.getSafeImageUrl(
          'assets/images/components/carousel-images/asosimental.jpg'
        ),
        name: 'Logo 2',
        title: 'Texto del logo 2', showText: false, selected: false 
      },
      {
        url: this.getSafeImageUrl(
          'assets/images/components/carousel-images/asovinos.jpg'
        ),
        name: 'Logo 3',
        title: 'Texto del logo 3', showText: false, selected: false 
      },
      {
        url: this.getSafeImageUrl(
          'assets/images/components/carousel-images/astegan.png'
        ),
        name: 'Logo 4',
        title: 'Texto del logo 4', showText: false, selected: false 
      },
      {
        url: this.getSafeImageUrl(
          'assets/images/components/carousel-images/decarne.png'
        ),
        name: 'Logo 5',
        title: 'Texto del logo 5', showText: false, selected: false 
      },
      {
        url: this.getSafeImageUrl(
          'assets/images/components/carousel-images/fng-blanco.jpg'
        ),
        name: 'Logo 6',
        title: 'Texto del logo 6', showText: false, selected: false 
      },
      {
        url: this.getSafeImageUrl(
          'assets/images/components/carousel-images/logo_agrousol.gif'
        ),
        name: 'Logo 7',
        title: 'Texto del logo 7', showText: false, selected: false 
      },
    ];
  }
  onImageClick(logo: any, index: number) {
    console.log('Clic en la imagen:', logo);
    // ocultar/mostrar contenido adicional
    logo.showText = !logo.showText;
    // Deseleccionar todas las imágenes
    this.logos.forEach((l: any) => (l.selected = false));

    // Seleccionar la imagen clicada
    logo.selected = true;
    this.selectedLogo = logo;
    this.animation = false

    // Mover la imagen clicada al centro del array
    const currentIndex = this.logos.indexOf(logo);
    const middleIndex = Math.floor(this.logos.length / 2);

    const diff = middleIndex - currentIndex;

    if (diff !== 0) {
      this.logos = this.shiftArray(this.logos, diff);
    }
  }

  shiftArray(arr: any[], diff: number): any[] {
    const shiftedArray = [...arr];

    for (let i = 0; i < Math.abs(diff); i++) {
      if (diff > 0) {
        // Shift right
        const lastItem = shiftedArray.pop();
        shiftedArray.unshift(lastItem);
      } else {
        // Shift left
        const firstItem = shiftedArray.shift();
        shiftedArray.push(firstItem);
      }
    }

    return shiftedArray;
  }
}
