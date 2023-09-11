import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  encapsulation:ViewEncapsulation.None,
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  animations: [
    trigger('slideAnimation', [
      transition('* => next', [
        style({ transform: 'translateX(-100%)' }),
        animate('300ms ease-in-out', style({ transform: 'translateX(0%)' })),
      ]),
      transition('* => prev', [
        style({ transform: 'translateX(100%)' }),
        animate('300ms ease-in-out', style({ transform: 'translateX(0%)' })),
      ]),
    ]),
  ],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 10000, noPause: true } },
  ],
})
export class CarouselComponent implements OnInit {


  constructor(private sanitizer: DomSanitizer) {}

  getSafeImageUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  logos: any = []

  // logos: { url: string; name: string }[] = [
  //   {
  //     url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Hulu_Logo.svg/1024px-Hulu_Logo.svg.png',
  //     name: 'Logo 1',
  //   },
  //   {
  //     url: 'data:image/png;base64,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',
  //     name: 'Logo 2',
  //   },
  //   {
  //     url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Coca-Cola_logo.svg/1000px-Coca-Cola_logo.svg.png',
  //     name: 'Logo 3',
  //   },
  //   {
  //     url: 'https://grupoherdez.com.mx/storage/2020/06/Herdez-logo_red-2.png',
  //     name: 'Logo 4',
  //   },
  //   {
  //     url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/BMW_logo_%28gray%29.svg/2048px-BMW_logo_%28gray%29.svg.png',
  //     name: 'Logo 5',
  //   },
  //   {
  //     url: 'https://1000marcas.net/wp-content/uploads/2020/10/Uber-Logo.png',
  //     name: 'Logo 4',
  //   },
  // ];
  
  ngOnInit(): void {
    this.logos = [
      {
        url: this.getSafeImageUrl('assets/images/components/carousel-images/asocebu2.jpg'),
        name: 'Logo 1',
      },
      {
        url: this.getSafeImageUrl('assets/images/components/carousel-images/asosimental.jpg'),
        name: 'Logo 2',
      },
      {
        url: this.getSafeImageUrl('assets/images/components/carousel-images/asovinos.jpg'),
        name: 'Logo 3',
      },
      {
        url: this.getSafeImageUrl('assets/images/components/carousel-images/astegan.png'),
        name: 'Logo 4',
      },
      {
        url: this.getSafeImageUrl('assets/images/components/carousel-images/decarne.png'),
        name: 'Logo 5',
      },
      {
        url: this.getSafeImageUrl('assets/images/components/carousel-images/fng-blanco.jpg'),
        name: 'Logo 6',
      },
      {
        url: this.getSafeImageUrl('assets/images/components/carousel-images/logo_agrousol.gif'),
        name: 'Logo 7',
      },
      // Agrega más imágenes siguiendo el mismo patrón
    ];
  }

}
