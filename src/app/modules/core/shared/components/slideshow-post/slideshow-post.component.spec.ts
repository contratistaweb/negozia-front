import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideshowPostComponent } from './slideshow-post.component';

describe('SlideshowPostComponent', () => {
  let component: SlideshowPostComponent;
  let fixture: ComponentFixture<SlideshowPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlideshowPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlideshowPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
