import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonasListComponent } from './personas-list.component';

describe('PersonasListComponent', () => {
  let component: PersonasListComponent;
  let fixture: ComponentFixture<PersonasListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonasListComponent]
    });
    fixture = TestBed.createComponent(PersonasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
