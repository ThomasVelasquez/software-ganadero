// app/carousel/carousel.component.ts
import {
  Component,
  AfterViewInit,
  ElementRef,
  ViewChild,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'app-big-carousel',
  templateUrl: './big-carousel.component.html',
  styleUrls: ['./big-carousel.component.css'],
})
export class BigCarouselComponent implements AfterViewInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}
  isMouseEnterEnabled = true;
  images = [
    {
      id: 1,
      src: 'https://img.freepik.com/foto-gratis/leon-melena-arcoiris-ojos-azules_1340-39421.jpg',
      alt: 'Imagen 1',
    },
    {
      id: 2,
      src: 'https://img.freepik.com/foto-gratis/leon-melena-arcoiris-ojos-azules_1340-39421.jpg',
      alt: 'Imagen 2',
    },
    {
      id: 3,
      src: 'https://img.freepik.com/foto-gratis/leon-melena-arcoiris-ojos-azules_1340-39421.jpg',
      alt: 'Imagen 3',
    },
    {
      id: 4,
      src: 'https://img.freepik.com/foto-gratis/leon-melena-arcoiris-ojos-azules_1340-39421.jpg',
      alt: 'Imagen 4',
    },
    {
      id: 5,
      src: 'https://png.pngtree.com/background/20230524/original/pngtree-sad-pictures-for-desktop-hd-backgrounds-picture-image_2705986.jpg',
      alt: 'Imagen 5',
    },
    {
      id: 6,
      src: 'https://img.freepik.com/foto-gratis/leon-melena-arcoiris-ojos-azules_1340-39421.jpg',
      alt: 'Imagen 6',
    },
    // Add more image objects as needed
  ];

  ngAfterViewInit() {
    this.cloneImages();
  }

  cloneImages() {
    const imageContainer =
      this.el.nativeElement.querySelector('#imageContainer');
    const images = this.el.nativeElement.querySelectorAll('.image-wrapper');

    images.forEach((img: HTMLElement) => {
      const clonedImage = img.cloneNode(true);
      this.renderer.appendChild(imageContainer, clonedImage);
    });
  }

  onImageHover(event: MouseEvent) {
    // Implementa la lógica para el evento onmouseenter aquí
    const element = event.currentTarget as HTMLElement;
    const contentElement = element.querySelector('.content');
    const imgElement = element.querySelector('.gallery-image');

    // Obtén la referencia al contenedor de imágenes y desactívales la animación
    const images = this.el.nativeElement.querySelectorAll('.image-wrapper');
    images.forEach((img: HTMLElement) => {
      img.classList.remove('scroll-animation');
      this.isMouseEnterEnabled = false;
    });

    // Obtén la referencia al contenedor principal
    const imageContainer =
      this.el.nativeElement.querySelector('#imageContainer');

    // Configura el desplazamiento suave
    imageContainer.style.overflow = 'hidden';
    const offset =
      element.offsetLeft -
      (imageContainer.offsetWidth - element.offsetWidth) / 2;

    imageContainer.scrollTo({
      left: offset,
      behavior: 'smooth',
    });

    // Agrega clases y realiza operaciones después de un tiempo de espera
    setTimeout(() => {
      this.renderer.addClass(imgElement, 'fade-out');
      this.renderer.addClass(element, 'scaler');
      this.renderer.addClass(contentElement, 'fade-in');
      this.renderer.setStyle(contentElement, 'z-index', '1');
    }, 2000);
  }

  closeButtonClicked(event: MouseEvent) {
    const element = event.currentTarget as HTMLElement;
    const contentElement = element.parentNode as HTMLElement;

    // contentElement.classList.add("z-index-n1");

    const parentContainer = contentElement?.parentNode as HTMLElement;

    // Busca la imagen dentro del elemento padre del contenedor de contenido
    const imgElement = contentElement?.previousSibling as HTMLElement;

    setTimeout(() => {
      imgElement?.classList.remove('fade-out');

      imgElement.classList.add('fade-in');
      parentContainer.classList.remove('scaler');
      parentContainer.classList.add('revertScaler');

      this.renderer.setStyle(contentElement, 'z-index', '-1');

      const images = document.querySelectorAll('.image-wrapper');

      this.isMouseEnterEnabled = true;
      // images.forEach((img) => {
      //   img.setAttribute('onmouseenter', 'onImageHover(this)');
      // });

      setTimeout(() => {
        parentContainer.classList.remove('revertScaler');
        contentElement.classList.remove('fade-in');
        parentContainer.classList.remove('fade-in');
        imgElement.classList.remove('fade-in');
      }, 1500);
    }, 2000);
  }
}

// import { Component } from '@angular/core';
// import { DomSanitizer } from '@angular/platform-browser';

// @Component({
//   selector: 'app-big-carousel',
//   templateUrl: './big-carousel.component.html',
//   styleUrls: ['./big-carousel.component.css', './big-carousel-animation.component.css'],
// })
// export class BigCarouselComponent {

//   constructor(private sanitizer: DomSanitizer) {
//     this.backgroundImageStyle = this.sanitizer.bypassSecurityTrustStyle(
//       `url('assets/images/components/carousel-images/asocebu2.jpg')`
//     );
//   }

//   logos: any = [];
//   backgroundImageStyle: any;
//   selectedLogo: any;
//   animation: boolean = true
//   selectedImageIndex: number | null = null;
//   showNavigationArrows = false;
//   showNavigationIndicators = false;

//   getSafeImageUrl(url: string) {
//     return this.sanitizer.bypassSecurityTrustUrl(url);
//   }

//   background: string = '';

//   toggleText(logo: any) {
//     logo.showText = !logo.showText;
//   }

//   onAnimationIteration(): void {
//     this.selectedImageIndex = null;
//   }

//   ngOnInit(): void {
//     this.logos = [
//       {
//         url: this.getSafeImageUrl(
//           'assets/images/components/carousel-images/asocebu2.jpg'
//         ),
//         name: 'Logo 1',
//         title: 'Texto del logo 1', showText: false, selected: false
//       },
//       {
//         url: this.getSafeImageUrl(
//           'assets/images/components/carousel-images/asosimental.jpg'
//         ),
//         name: 'Logo 2',
//         title: 'Texto del logo 2', showText: false, selected: false
//       },
//       {
//         url: this.getSafeImageUrl(
//           'assets/images/components/carousel-images/asovinos.jpg'
//         ),
//         name: 'Logo 3',
//         title: 'Texto del logo 3', showText: false, selected: false
//       },
//       {
//         url: this.getSafeImageUrl(
//           'assets/images/components/carousel-images/astegan.png'
//         ),
//         name: 'Logo 4',
//         title: 'Texto del logo 4', showText: false, selected: false
//       },
//       {
//         url: this.getSafeImageUrl(
//           'assets/images/components/carousel-images/decarne.png'
//         ),
//         name: 'Logo 5',
//         title: 'Texto del logo 5', showText: false, selected: false
//       },
//       {
//         url: this.getSafeImageUrl(
//           'assets/images/components/carousel-images/fng-blanco.jpg'
//         ),
//         name: 'Logo 6',
//         title: 'Texto del logo 6', showText: false, selected: false
//       },
//       {
//         url: this.getSafeImageUrl(
//           'assets/images/components/carousel-images/logo_agrousol.gif'
//         ),
//         name: 'Logo 7',
//         title: 'Texto del logo 7', showText: false, selected: false
//       },
//     ];
//   }
//   onImageClick(logo: any, index: number) {
//     console.log('Clic en la imagen:', logo);
//     // ocultar/mostrar contenido adicional
//     logo.showText = !logo.showText;
//     // Deseleccionar todas las imágenes
//     this.logos.forEach((l: any) => (l.selected = false));

//     // Seleccionar la imagen clicada
//     logo.selected = true;
//     this.selectedLogo = logo;
//     this.animation = false

//     // Mover la imagen clicada al centro del array
//     const currentIndex = this.logos.indexOf(logo);
//     const middleIndex = Math.floor(this.logos.length / 2);

//     const diff = middleIndex - currentIndex;

//     if (diff !== 0) {
//       this.logos = this.shiftArray(this.logos, diff);
//     }
//   }

//   shiftArray(arr: any[], diff: number): any[] {
//     const shiftedArray = [...arr];

//     for (let i = 0; i < Math.abs(diff); i++) {
//       if (diff > 0) {
//         // Shift right
//         const lastItem = shiftedArray.pop();
//         shiftedArray.unshift(lastItem);
//       } else {
//         // Shift left
//         const firstItem = shiftedArray.shift();
//         shiftedArray.push(firstItem);
//       }
//     }

//     return shiftedArray;
//   }
// }
