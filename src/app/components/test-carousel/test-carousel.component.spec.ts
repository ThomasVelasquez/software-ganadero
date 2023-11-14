import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCarouselComponent } from './test-carousel.component';

describe('TestCarouselComponent', () => {
  let component: TestCarouselComponent;
  let fixture: ComponentFixture<TestCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestCarouselComponent]
    });
    fixture = TestBed.createComponent(TestCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
