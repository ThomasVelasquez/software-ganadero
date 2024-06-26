import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigCarouselComponent } from './big-carousel.component';

describe('BigCarouselComponent', () => {
  let component: BigCarouselComponent;
  let fixture: ComponentFixture<BigCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BigCarouselComponent]
    });
    fixture = TestBed.createComponent(BigCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
