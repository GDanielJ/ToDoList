import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTodolistItemComponent } from './edit-todolist-item.component';

describe('EditTodolistItemComponent', () => {
  let component: EditTodolistItemComponent;
  let fixture: ComponentFixture<EditTodolistItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTodolistItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTodolistItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
