import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractiveCarouselComponent } from './interactive-carousel.component';

describe('InteractiveCarouselComponent', () => {
  let component: InteractiveCarouselComponent;
  let fixture: ComponentFixture<InteractiveCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InteractiveCarouselComponent]
    });
    fixture = TestBed.createComponent(InteractiveCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
