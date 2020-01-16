import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainImageEventBannerComponent } from './main-image-event-banner.component';

describe('MainImageEventBannerComponent', () => {
  let component: MainImageEventBannerComponent;
  let fixture: ComponentFixture<MainImageEventBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainImageEventBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainImageEventBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
