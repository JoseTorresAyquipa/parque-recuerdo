import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonasEditComponent } from './personas-edit.component';

describe('PersonasEditComponent', () => {
  let component: PersonasEditComponent;
  let fixture: ComponentFixture<PersonasEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonasEditComponent]
    });
    fixture = TestBed.createComponent(PersonasEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
