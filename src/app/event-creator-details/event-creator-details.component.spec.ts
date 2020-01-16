import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCreatorDetailsComponent } from './event-creator-details.component';

describe('EventCreatorDetailsComponent', () => {
  let component: EventCreatorDetailsComponent;
  let fixture: ComponentFixture<EventCreatorDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventCreatorDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventCreatorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
