import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCommentComponentComponent } from './single-comment-component.component';

describe('SingleCommentComponentComponent', () => {
  let component: SingleCommentComponentComponent;
  let fixture: ComponentFixture<SingleCommentComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleCommentComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleCommentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
