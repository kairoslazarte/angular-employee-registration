import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeRegFormComponent } from './employee-reg-form.component';

describe('EmployeeRegFormComponent', () => {
  let component: EmployeeRegFormComponent;
  let fixture: ComponentFixture<EmployeeRegFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeRegFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeRegFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
