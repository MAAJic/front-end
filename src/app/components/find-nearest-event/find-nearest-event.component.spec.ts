import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindNearestEventComponent } from './find-nearest-event.component';

describe('FindNearestEventComponent', () => {
  let component: FindNearestEventComponent;
  let fixture: ComponentFixture<FindNearestEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindNearestEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindNearestEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
