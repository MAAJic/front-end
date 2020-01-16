import { async, ComponentFixture, TestBed } from '@angular/core/testing';


describe('EventDetailsComponentComponent', () => {
  let component: EventDetailsComponentComponent;
  let fixture: ComponentFixture<EventDetailsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventDetailsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventDetailsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
