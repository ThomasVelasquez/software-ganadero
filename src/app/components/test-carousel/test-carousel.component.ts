import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-test-carousel',
  templateUrl: './test-carousel.component.html',
  styleUrls: ['./test-carousel.component.css'],
})
export class TestCarouselComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const imageContainer = document.getElementById('imageContainer');
    const images = document.querySelectorAll('.image-wrapper');

    // images.forEach((img: Element) => {
    //   const clonedImage = img.cloneNode(true) as HTMLElement;
    //   if (imageContainer) imageContainer.appendChild(clonedImage);
    // });
  }

  logos: any = [];

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.logos = [
      {
        url: 'assets/images/components/test-carousel/img/1.png',
        name: 'Logo 1',
      },
      {
        url: 'assets/images/components/test-carousel/img/2.png',
        name: 'Logo 2',
      },
      {
        url: 'assets/images/components/test-carousel/img/3.png',
        name: 'Logo 3',
      },
      {
        url: 'assets/images/components/test-carousel/img/4.png',
        name: 'Logo 4',
      },
      {
        url: 'assets/images/components/test-carousel/img/5.png',
        name: 'Logo 5',
      },
      {
        url: 'assets/images/components/test-carousel/img/6.png',
        name: 'Logo 6',
      },
    ];
  }

  onImageHover(event: MouseEvent) {
    const targetElement = event.target as HTMLElement;
    if (targetElement) {
      const element = targetElement.closest('.image-wrapper') as HTMLElement;
      if (element) {
        const contentElement = element.querySelector('.content') as HTMLElement;
        const imgElement = element.querySelector(
          '.gallery-image'
        ) as HTMLElement;
        const content = element.querySelector('.content');

        const images = document.querySelectorAll('.image-wrapper');
        images.forEach((img: Element) => {
          // Cambio a Element
          img.classList.remove('scroll-animation');
          // img.removeEventListener("mouseenter", onImageHover);
          img.removeAttribute('onmouseenter');
        });

        const imageContainer = document.getElementById('imageContainer');

        if (imageContainer) {
          imageContainer.style.overflow = 'hidden';
          const offset =
            element.offsetLeft -
            (imageContainer.offsetWidth - element.offsetWidth) / 2;

          imageContainer.scrollTo({
            left: offset,
            behavior: 'smooth',
          });

          setTimeout(() => {
            if (imgElement) imgElement.classList.add('fade-out');
            element.classList.add('scaler');
            if (content) content.classList.add('fade-in');
            if (contentElement) contentElement.style.zIndex = '1';
          }, 2000);
        }
      }
    }
  }

  closeButtonClicked(event: Event) {
    const targetElement = event.target as Element;
    
    if (targetElement) {
      const buttonElement = targetElement.closest('.close-button') as Element;
      
      if (buttonElement) {
        const contentElement = buttonElement.parentElement?.querySelector(
          '.content'
        ) as HTMLElement;

        console.log(contentElement,'content-element');
        

        if (contentElement) {
          const parentContainer = contentElement.parentElement as HTMLElement;
          const imgElement =
            contentElement.previousElementSibling as HTMLElement;

          setTimeout(() => {
            console.log(imgElement,'ELEMENTO');
            
            if (imgElement) imgElement.classList.remove('fade-out');
            if (imgElement) imgElement.classList.add('fade-in');
            parentContainer.classList.remove('scaler');
            parentContainer.classList.add('revertScaler');

            if (contentElement) contentElement.style.zIndex = '-1';

            const images = document.querySelectorAll('.image-wrapper');

            images.forEach((img: Element) => {
              img.setAttribute('onmouseenter', 'this.onImageHover(this)');
            });

            setTimeout(() => {
              parentContainer.classList.remove('revertScaler');
              if (contentElement) contentElement.classList.remove('fade-in');
              parentContainer.classList.remove('fade-in');
              if (imgElement) imgElement.classList.remove('fade-in');
            }, 1500);
          }, 2000);
        }
      }
    }
  }
}
